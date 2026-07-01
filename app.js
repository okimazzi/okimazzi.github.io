// app.js v2 — All features: progress, themes, search, filters, study mode, badges, export, time tracking, keyboard shortcuts
(function(){
const $=s=>document.querySelector(s);
const roadmap=$('#roadmap'),statsEl=$('#stats'),searchInput=$('#search'),searchResults=$('#search-results');
const SK='roadmap_progress',TK='roadmap_theme',BK='roadmap_badges',NK='roadmap_notes',RK='roadmap_review';
// Naming legend: g*/s* = get/set a localStorage store (gP/sP progress, gB/sB badges,
// gN/sN notes, gR/sR review); mid() = per-item key; esc() = HTML-escape; eT() = est. minutes.
function gP(){try{return JSON.parse(localStorage.getItem(SK))||{}}catch(e){return{}}}
function sP(d){try{localStorage.setItem(SK,JSON.stringify(d))}catch(e){}}
function gB(){try{return JSON.parse(localStorage.getItem(BK))||{}}catch(e){return{}}}
function sB(d){try{localStorage.setItem(BK,JSON.stringify(d))}catch(e){}}
// Personal notes per item
function gN(){try{return JSON.parse(localStorage.getItem(NK))||{}}catch(e){return{}}}
function sN(d){try{localStorage.setItem(NK,JSON.stringify(d))}catch(e){}}
// Spaced repetition: per-item {date, count}. Intervals in days (SM-2 lite).
const RIVALS=[1,3,7,16,35,90];
function gR(){try{return JSON.parse(localStorage.getItem(RK))||{}}catch(e){return{}}}
function sR(d){try{localStorage.setItem(RK,JSON.stringify(d))}catch(e){}}
function reviewDue(iid){const r=gR()[iid];if(!r||!r.date)return false;const days=(Date.now()-r.date)/86400000;const iv=RIVALS[Math.min(r.count||0,RIVALS.length-1)];return days>=iv}
function countDue(){const r=gR();let n=0;Object.keys(r).forEach(iid=>{if(reviewDue(iid))n++});return n}
// Stable per-item key. Uses FULL area/topic names (not truncated) so sibling topics that
// share a long prefix can't collide onto the same localStorage key (was: substring(0,20)).
function mid(lc,an,tn,ii){return lc+'::'+an+'::'+tn+'::'+ii}
// Escape HTML to prevent broken render (and as XSS defense-in-depth) on & < > " ' in content
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
// Respect the user's reduced-motion preference for celebratory animations
const prefersReducedMotion=()=>!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
// Element that opened the current modal, so focus can be restored when it closes (a11y)
let modalTrigger=null;

// One-time migration: earlier builds truncated area/topic names to 20 chars when forming
// item IDs, so sibling topics sharing a 20-char prefix collided (e.g. "Visão Computacional
// Clássica" vs "…Moderna (Deep Learning)"), silently linking their studied/notes/review state.
// mid() now uses full names; remap any old truncated keys to the new ones so saved data survives.
(function migrateItemIds(){
  try{
    if(localStorage.getItem('roadmap_id_migrated_v2'))return;
    const oldMid=(lc,an,tn,ii)=>lc+'::'+an.substring(0,20)+'::'+tn.substring(0,20)+'::'+ii;
    const remap={};
    ROADMAP.forEach(l=>l.areas.forEach(a=>a.topics.forEach(t=>t.items.forEach((it,idx)=>{
      remap[oldMid(l.css,a.name,t.name,idx)]=mid(l.css,a.name,t.name,idx);
    }))));
    [SK,NK,RK].forEach(K=>{
      let obj;try{obj=JSON.parse(localStorage.getItem(K))}catch(e){return}
      if(!obj||typeof obj!=='object'||Array.isArray(obj))return;
      const next={};let changed=false;
      // Pass 1: keys already in the new format (not remapped) always win.
      Object.keys(obj).forEach(k=>{if((remap[k]||k)===k)next[k]=obj[k]});
      // Pass 2: remapped old keys fill only gaps, so a correct new key is never clobbered.
      Object.keys(obj).forEach(k=>{const nk=remap[k];if(nk&&nk!==k){changed=true;if(!(nk in next))next[nk]=obj[k]}});
      if(changed)localStorage.setItem(K,JSON.stringify(next));
    });
    localStorage.setItem('roadmap_id_migrated_v2','1');
  }catch(e){}
})();

// Theme
function initTheme(){if(localStorage.getItem(TK)==='light')document.body.classList.add('light-mode')}
initTheme();
window.toggleTheme=function(){document.body.classList.toggle('light-mode');localStorage.setItem(TK,document.body.classList.contains('light-mode')?'light':'dark');const b=$('#theme-toggle');if(b)b.textContent=document.body.classList.contains('light-mode')?'🌙 Escuro':'☀️ Claro'};

// Time estimate
function eT(it){const l=it.d.length+it.w.length;if(it.w.includes('🎯'))return 8;if(l>700)return 90;if(l>400)return 45;return 25}
function fmtTime(min){if(min<60)return min+'min';const h=Math.floor(min/60);const m=min%60;return m>0?h+'h'+m+'min':h+'h'}

// Count all
let tI=0,tT=0,tA=0,tB=new Set(),totalMinutes=0;
const areaItemMap={};
ROADMAP.forEach(l=>{l.areas.forEach(a=>{tA++;const aKey=a.name.replace(/^[^\w\s]+\s*/u,'').trim();areaItemMap[aKey]={total:0,ids:[]};a.topics.forEach(t=>{tT++;t.books.forEach(b=>tB.add(b));t.items.forEach((it,idx)=>{tI++;totalMinutes+=eT(it);areaItemMap[aKey].total++;areaItemMap[aKey].ids.push(mid(l.css,a.name,t.name,idx))})})})});

// Single-pass progress computation (count, minutes, per-level) — avoids 3 full traversals
function computeProgress(){
  const p=gP();let count=0,minutes=0;
  const perLevel=ROADMAP.map(lv=>{
    let total=0,done=0;
    lv.areas.forEach(a=>a.topics.forEach(t=>t.items.forEach((it,idx)=>{
      total++;
      if(p[mid(lv.css,a.name,t.name,idx)]){done++;count++;minutes+=eT(it);}
    })));
    return {css:lv.css,total,done,pct:total>0?Math.round(done/total*100):0};
  });
  return {count,minutes,perLevel};
}

function rS(){
  const prog=computeProgress();
  const s=prog.count,pc=tI>0?Math.round(s/tI*100):0;
  const C=2*Math.PI*52;
  const offset=C*(1-pc/100);
  const lp=prog.perLevel;
  statsEl.innerHTML=`
    <div class="journey">
      <div class="journey-ring">
        <svg viewBox="0 0 120 120" width="120" height="120">
          <defs><linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#60a5fa"/></linearGradient></defs>
          <circle class="ring-track" cx="60" cy="60" r="52"/>
          <circle class="ring-fill" cx="60" cy="60" r="52" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}"/>
        </svg>
        <div class="ring-label"><span class="ring-pct">${pc}%</span><span class="ring-sub">completo</span></div>
      </div>
      <div class="journey-info">
        <div class="journey-headline" id="journey-headline">${s} de ${tI} itens estudados</div>
        <div class="journey-sub" id="journey-sub">~${fmtTime(prog.minutes)} de ~${fmtTime(totalMinutes)} · ${tA} áreas · ${ROADMAP.length} níveis</div>
        <div class="journey-levels">
          ${lp.map(l=>`<div class="jl jl-${l.css}" title="${l.done}/${l.total} (${l.pct}%)"><div class="jl-fill" style="height:${l.pct}%"></div></div>`).join('')}
        </div>
      </div>
    </div>`;
}
// Lightweight update: patch ring + numbers + bars WITHOUT recreating DOM (fixes #1 flicker)
function updateJourney(){
  const prog=computeProgress();
  const s=prog.count,pc=tI>0?Math.round(s/tI*100):0;
  const C=2*Math.PI*52;
  const ring=statsEl.querySelector('.ring-fill');
  if(!ring){rS();return;} // structure not built yet
  ring.setAttribute('stroke-dashoffset',(C*(1-pc/100)).toFixed(1));
  const pctEl=statsEl.querySelector('.ring-pct');if(pctEl)pctEl.textContent=pc+'%';
  const head=statsEl.querySelector('#journey-headline');if(head)head.textContent=`${s} de ${tI} itens estudados`;
  const sub=statsEl.querySelector('#journey-sub');if(sub)sub.textContent=`~${fmtTime(prog.minutes)} de ~${fmtTime(totalMinutes)} · ${tA} áreas · ${ROADMAP.length} níveis`;
  const bars=statsEl.querySelectorAll('.jl');
  prog.perLevel.forEach((l,i)=>{const b=bars[i];if(b){const f=b.querySelector('.jl-fill');if(f)f.style.height=l.pct+'%';b.title=`${l.done}/${l.total} (${l.pct}%)`;}});
}
rS();

// ── Spaced repetition review widget ──
function updateReviewWidget(){const el=document.getElementById('review-widget');if(!el)return;const n=countDue();if(n>0){el.style.display='inline-flex';el.querySelector('.review-count').textContent=n}else{el.style.display='none'}}
window.openReview=function(){modalTrigger=document.activeElement;const r=gR();const due=[];ROADMAP.forEach(lv=>lv.areas.forEach(a=>a.topics.forEach(t=>t.items.forEach((it,idx)=>{const iid=mid(lv.css,a.name,t.name,idx);if(reviewDue(iid))due.push({iid,w:it.w,path:lv.name+' › '+a.name.replace(/^[^\w\s]+\s*/u,'').trim()+' › '+t.name,s:it.s})}))));
const ov=document.createElement('div');ov.className='quiz-overlay';const mo=document.createElement('div');mo.className='quiz-modal review-modal';mo.setAttribute('role','dialog');mo.setAttribute('aria-modal','true');
if(!due.length){mo.innerHTML=`<h2>🔁 Revisão</h2><p style="color:var(--text-dim)">Nada para revisar agora. Continue estudando — os itens voltam aqui no momento certo de revisar.</p><div class="quiz-actions"><button class="quiz-close-btn" onclick="this.closest('.quiz-overlay').remove()">Fechar</button></div>`}
else{mo.innerHTML=`<h2>🔁 Revisão — ${due.length} ${due.length>1?'itens':'item'}</h2><p style="color:var(--text-dim);font-size:14px">Tente lembrar cada um. Marque "✅ Revisei" pra agendar a próxima revisão (intervalos crescentes).</p><div class="review-list">${due.map(d=>`<div class="review-item" data-iid="${esc(d.iid)}"><div class="review-item-path">${esc(d.path)}</div><div class="review-item-title">${esc(d.w)}</div><div class="review-item-actions"><button type="button" class="review-done-btn" data-iid="${esc(d.iid)}">✅ Revisei</button>${mSL(d.s).replace(/<div class="search-term-row">/g,'<div class="search-term-row mini">')}</div></div>`).join('')}</div><div class="quiz-actions"><button class="quiz-close-btn" onclick="this.closest('.quiz-overlay').remove()">Fechar</button></div>`;
mo.querySelectorAll('.review-done-btn').forEach(b=>b.addEventListener('click',function(){const iid=this.dataset.iid;const rv=gR();if(rv[iid]){rv[iid].count=(rv[iid].count||0)+1;rv[iid].date=Date.now();sR(rv)}const card=this.closest('.review-item');if(card){card.style.opacity='0.4';this.textContent='✅ Agendado';this.disabled=true}updateReviewWidget()}))}
ov.appendChild(mo);document.body.appendChild(ov);const fb=mo.querySelector('button');if(fb)fb.focus();ov.addEventListener('click',e=>{if(e.target===ov)ov.remove()})};

// ── Pace planner: hours/week → finish estimate ──
window.openPacePlanner=function(){
  modalTrigger=document.activeElement;
  const p=gP();let scopeMin=0,scopeDone=0;ROADMAP.forEach(lv=>lv.areas.forEach(a=>{if(cTrack!=='all'&&!(a.track===cTrack||a.core))return;a.topics.forEach(t=>t.items.forEach((it,idx)=>{if(it.w.includes('🎯'))return;const m=eT(it);scopeMin+=m;if(p[mid(lv.css,a.name,t.name,idx)])scopeDone+=m}))}));const scopeLabel=cTrack==='all'?'todo o roadmap':'a trilha atual + CORE';const remainingMin=Math.max(0,scopeMin-scopeDone);const remainingH=Math.round(remainingMin/60);
  const ov=document.createElement('div');ov.className='quiz-overlay';const mo=document.createElement('div');mo.className='quiz-modal pace-modal';mo.setAttribute('role','dialog');mo.setAttribute('aria-modal','true');
  function calc(hpw){if(hpw<=0)return'—';const weeks=remainingH/hpw;if(weeks<4)return Math.ceil(weeks)+' semana'+(Math.ceil(weeks)>1?'s':'');const months=weeks/4.345;if(months<12)return months.toFixed(1)+' meses';return (months/12).toFixed(1)+' anos'}
  mo.innerHTML=`<h2>📅 Planejador de Ritmo</h2>
    <p class="quiz-info">Faltam ~${fmtTime(remainingMin)} de conteúdo (${remainingH}h) para concluir <strong>${scopeLabel}</strong> (filtre uma trilha pra escopar o cálculo).</p>
    <div class="pace-control"><label>Quantas horas por semana você consegue estudar?</label>
    <input type="range" id="pace-range" min="1" max="40" value="10" step="1"><div class="pace-value"><span id="pace-hours">10</span> h/semana</div></div>
    <div class="pace-result">⏳ Você concluiria em aproximadamente <strong id="pace-eta">${calc(10)}</strong></div>
    <div class="pace-presets">${[5,10,15,20].map(h=>`<button type="button" class="pace-preset" data-h="${h}">${h}h/sem</button>`).join('')}</div>
    <p class="pace-note">Estimativa baseada no tempo médio por item. Estudar com constância (mesmo 1h/dia) rende mais que maratonas.</p>
    <div class="quiz-actions"><button class="quiz-close-btn" onclick="this.closest('.quiz-overlay').remove()">Fechar</button></div>`;
  ov.appendChild(mo);document.body.appendChild(ov);
  const range=mo.querySelector('#pace-range'),hoursEl=mo.querySelector('#pace-hours'),etaEl=mo.querySelector('#pace-eta');
  function upd(v){hoursEl.textContent=v;etaEl.textContent=calc(+v)}
  range.addEventListener('input',()=>upd(range.value));
  mo.querySelectorAll('.pace-preset').forEach(b=>b.addEventListener('click',()=>{range.value=b.dataset.h;upd(b.dataset.h)}));
  const cb=mo.querySelector('.quiz-close-btn');if(cb)cb.focus();ov.addEventListener('click',e=>{if(e.target===ov)ov.remove()});
};

// Search links — one row per term (▶ YouTube + 🔍 Google)
function mSL(s){return s.split('|').map(t=>{const tr=t.trim();if(!tr)return'';const yt='https://www.youtube.com/results?search_query='+encodeURIComponent(tr);const gg='https://www.google.com/search?q='+encodeURIComponent(tr);return`<div class="search-term-row"><span class="search-term-text">• ${tr}</span><a href="${yt}" target="_blank" rel="noopener" class="search-link yt-link">▶ YouTube</a><a href="${gg}" target="_blank" rel="noopener" class="search-link gg-link">🔍 Google</a></div>`}).join('')}


function tog(b,c){
  const opening=!c.classList.contains('expanded');
  const arrow=b.querySelector('.arrow')||b.querySelector('.item-toggle');
  b.setAttribute('aria-expanded',opening?'true':'false');
  if(opening){
    c.style.display='block';
    const h=c.scrollHeight;
    c.style.height='0px';
    c.offsetHeight; // force reflow
    c.classList.add('expanded');
    c.style.height=h+'px';
    b.classList.add('open');
    if(arrow)arrow.textContent='▾';
    setTimeout(()=>{if(c.classList.contains('expanded'))c.style.height='auto';},260);
  }else{
    c.style.height=c.scrollHeight+'px';
    c.offsetHeight;
    c.classList.remove('expanded');
    c.style.height='0px';
    b.classList.remove('open');
    if(arrow)arrow.textContent='▸';
    setTimeout(()=>{if(!c.classList.contains('expanded'))c.style.display='none';},260);
  }
}
function cPB(s,t){const p=t>0?Math.round(s/t*100):0;const d=document.createElement('div');d.className='progress-bar-wrap';d.innerHTML=`<div class="progress-bar"><div class="progress-fill" style="width:${p}%"></div></div><span class="progress-text">${s}/${t} (${p}%)</span>`;return d}
function cS(lc,an,tn,ic){const p=gP();let c=0;for(let i=0;i<ic;i++)if(p[mid(lc,an,tn,i)])c++;return c}

// Badges
function checkBadge(areaName){
  const aKey=areaName.replace(/^[^\w\s]+\s*/u,'').trim();
  const info=areaItemMap[aKey];if(!info)return;
  const p=gP();const studied=info.ids.filter(id=>p[id]).length;
  if(studied>=info.total&&info.total>0){
    const badges=gB();if(!badges[aKey]){badges[aKey]={date:new Date().toISOString().split('T')[0]};sB(badges);showBadge(aKey)}
  }
}
function showBadge(name){
  const toast=document.createElement('div');toast.className='badge-toast';
  toast.innerHTML='🏅 <strong>Badge conquistada!</strong><br>Mestre em '+esc(name);
  document.body.appendChild(toast);setTimeout(()=>toast.classList.add('show'),10);setTimeout(()=>{toast.classList.remove('show');setTimeout(()=>toast.remove(),300)},3000);
  // Check if a whole level got completed
  checkLevelComplete();
}
let knownLevelDone={};
try{knownLevelDone=JSON.parse(localStorage.getItem('roadmap_levels_done'))||{}}catch(e){}
function checkLevelComplete(){
  const p=gP();
  ROADMAP.forEach(lv=>{
    let total=0,done=0;
    lv.areas.forEach(a=>a.topics.forEach(t=>t.items.forEach((it,idx)=>{total++;if(p[mid(lv.css,a.name,t.name,idx)])done++;})));
    if(total>0&&done>=total&&!knownLevelDone[lv.css]){
      knownLevelDone[lv.css]=1;
      localStorage.setItem('roadmap_levels_done',JSON.stringify(knownLevelDone));
      celebrate(lv.name);
    }
  });
}
function celebrate(levelName){
  // Confetti — skip entirely when the user prefers reduced motion (vestibular safety)
  if(!prefersReducedMotion()){
    const colors=['#34d399','#60a5fa','#fbbf24','#fb923c','#f87171','#a78bfa'];
    const container=document.createElement('div');container.className='confetti-container';
    for(let i=0;i<80;i++){
      const c=document.createElement('div');c.className='confetti';
      c.style.left=Math.random()*100+'%';
      c.style.background=colors[i%colors.length];
      c.style.animationDelay=(Math.random()*0.5)+'s';
      c.style.animationDuration=(2+Math.random()*1.5)+'s';
      c.style.setProperty('--drift',(Math.random()*200-100)+'px');
      container.appendChild(c);
    }
    document.body.appendChild(container);
    setTimeout(()=>container.remove(),4000);
  }
  // Banner (always shown; its slide-in transition is disabled under reduced motion via CSS)
  const banner=document.createElement('div');banner.className='level-complete-banner';
  banner.innerHTML='🎉<div><strong>Nível completo!</strong><span>'+esc(levelName)+'</span></div>🎉';
  document.body.appendChild(banner);
  setTimeout(()=>banner.classList.add('show'),10);
  setTimeout(()=>{banner.classList.remove('show');setTimeout(()=>banner.remove(),400);},4000);
}

// Filter
let cF='all';
function expandForFilter(){
  // Open all containers (height:auto, no animation) so filtered matches are visible
  document.querySelectorAll('.level-content,.area-content,.topic-content').forEach(c=>{
    c.style.display='block';c.classList.add('expanded');c.style.height='auto';
  });
  document.querySelectorAll('.level-btn,.area-btn,.topic-btn').forEach(b=>{
    b.classList.add('open');b.setAttribute('aria-expanded','true');
    const ar=b.querySelector('.arrow')||b.querySelector('.item-toggle');if(ar)ar.textContent='▾';
  });
}
function aF(){
  const p=gP();
  // Show/hide individual items via class
  document.querySelectorAll('.item[data-item-id]').forEach(el=>{
    const s=p[el.dataset.itemId];
    const hide = cF==='studied' ? !s : cF==='not-studied' ? !!s : false;
    el.classList.toggle('item-hidden',hide);
  });
  if(cF==='all'){
    document.querySelectorAll('.section-hidden').forEach(e=>e.classList.remove('section-hidden'));
    return;
  }
  // Hide topics with no visible items, then areas with no visible topics
  document.querySelectorAll('.topic').forEach(t=>{
    const hasVisible=[...t.querySelectorAll('.item[data-item-id]')].some(i=>!i.classList.contains('item-hidden'));
    t.classList.toggle('section-hidden',!hasVisible);
  });
  document.querySelectorAll('.area').forEach(a=>{
    const hasVisible=[...a.querySelectorAll('.topic')].some(t=>!t.classList.contains('section-hidden'));
    a.classList.toggle('section-hidden',!hasVisible);
  });
  expandForFilter();
}
window.setFilter=function(f){cF=f;aF();document.querySelectorAll('.filter-btn').forEach(b=>{const on=b.dataset.filter===f;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false')})};

// ── Navigation: jump to level ──
window.jumpToLevel=function(css){const el=document.getElementById('level-'+css);if(!el)return;const btn=el.querySelector('.level-btn');if(btn&&!btn.classList.contains('open'))tog(btn,el.querySelector('.level-content'));el.scrollIntoView({behavior:'smooth',block:'start'})};

// ── Collapse / expand all ──
window.collapseAll=function(){document.querySelectorAll('.level-content,.area-content,.topic-content,.item-detail').forEach(c=>{c.style.display='none';c.classList.remove('expanded')});document.querySelectorAll('.level-btn,.area-btn,.topic-btn,.item-btn').forEach(b=>{b.classList.remove('open');b.setAttribute('aria-expanded','false');const ar=b.querySelector('.arrow')||b.querySelector('.item-toggle');if(ar)ar.textContent='▸'});window.scrollTo({top:0,behavior:'smooth'})};
window.expandAllLevels=function(){document.querySelectorAll('.level-content').forEach(c=>{c.style.display='block';c.classList.add('expanded');c.style.height='auto'});document.querySelectorAll('.level-btn').forEach(b=>{b.classList.add('open');b.setAttribute('aria-expanded','true');const ar=b.querySelector('.arrow');if(ar)ar.textContent='▾'})};

// ── Filter by track ──
let cTrack='all';
window.setTrackFilter=function(tr){cTrack=tr;
  document.querySelectorAll('.area').forEach(a=>{
    const at=a.dataset.track||'';
    a.classList.toggle('track-hidden', tr!=='all' && at!==tr && !a.dataset.core);
  });
  // hide levels that end up with no visible area
  document.querySelectorAll('.level').forEach(lv=>{
    const anyVisible=[...lv.querySelectorAll('.area')].some(a=>!a.classList.contains('track-hidden'));
    lv.classList.toggle('track-hidden', tr!=='all' && !anyVisible);
  });
  document.querySelectorAll('.track-filter-btn').forEach(b=>{const on=b.dataset.track===tr;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false')});
  if(tr!=='all')window.expandAllLevels();
};

// ── Compact mode (hide item details + descriptions, show only titles) ──
window.toggleCompact=function(){const on=document.body.classList.toggle('compact-mode');const btn=document.getElementById('compact-toggle');if(btn)btn.textContent=on?'📖 Modo completo':'📑 Modo compacto';
  if(on){
    // close any open item details (they're hidden in compact anyway) and expand levels+areas+topics so the lean checklist is visible
    document.querySelectorAll('.item-detail').forEach(d=>{d.style.display='none';d.classList.remove('expanded')});
    document.querySelectorAll('.item-btn.open').forEach(b=>{b.classList.remove('open');b.setAttribute('aria-expanded','false');const ar=b.querySelector('.item-toggle');if(ar)ar.textContent='▸'});
    document.querySelectorAll('.level-content,.area-content,.topic-content').forEach(c=>{c.style.display='block';c.classList.add('expanded');c.style.height='auto'});
    document.querySelectorAll('.level-btn,.area-btn,.topic-btn').forEach(b=>{b.classList.add('open');b.setAttribute('aria-expanded','true');const ar=b.querySelector('.arrow');if(ar)ar.textContent='▾'});
  }
};

// ── Back to top ──
window.addEventListener('scroll',()=>{const b=document.getElementById('back-to-top');if(b)b.classList.toggle('show',window.scrollY>600)});
window.resetProgress=function(){if(confirm('Apagar TODO o progresso (itens estudados, badges, notas e revisões)?')){localStorage.removeItem(SK);localStorage.removeItem(BK);localStorage.removeItem(NK);localStorage.removeItem(RK);localStorage.removeItem('roadmap_levels_done');localStorage.removeItem('roadmap_quizzes');location.reload()}};

// Export/Import
window.exportProgress=function(){
  const data={progress:gP(),badges:gB(),notes:gN(),review:gR(),date:new Date().toISOString()};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='roadmap-progress-'+new Date().toISOString().split('T')[0]+'.json';a.click();
};
window.importProgress=function(){
  const input=document.createElement('input');input.type='file';input.accept='.json';
  input.onchange=function(e){const f=e.target.files[0];if(!f)return;const reader=new FileReader();
    reader.onload=function(ev){try{const data=JSON.parse(ev.target.result);
      const isObj=o=>o&&typeof o==='object'&&!Array.isArray(o);
      if(!isObj(data)||!isObj(data.progress)){alert('Arquivo inválido: não parece um backup de progresso do roadmap.');return}
      localStorage.setItem(SK,JSON.stringify(data.progress));
      if(isObj(data.badges))localStorage.setItem(BK,JSON.stringify(data.badges));
      if(isObj(data.notes))localStorage.setItem(NK,JSON.stringify(data.notes));
      if(isObj(data.review)){const clean={};Object.keys(data.review).forEach(k=>{const r=data.review[k];if(isObj(r)){const d=+r.date,c=+r.count;clean[k]={date:isFinite(d)?d:Date.now(),count:isFinite(c)?Math.max(0,Math.round(c)):0}}});localStorage.setItem(RK,JSON.stringify(clean));}
      alert('Progresso importado! Recarregando...');location.reload();
    }catch(err){alert('Arquivo inválido')}};reader.readAsText(f)};input.click();
};

// Study of the day
window.studyOfDay=function(){
  modalTrigger=document.activeElement;
  const p=gP();let inScope=[],rest=[];
  ROADMAP.forEach(lv=>{lv.areas.forEach(a=>{const scoped=cTrack==='all'||a.track===cTrack||a.core;a.topics.forEach(t=>{
    t.items.forEach((it,idx)=>{
      const id=mid(lv.css,a.name,t.name,idx);
      if(p[id]||it.w.includes('🎯'))return;
      (scoped?inScope:rest).push({level:lv.name,area:(a.displayName||a.name).replace(/^[^\w\s]+\s*/u,'').trim(),topic:t.name,item:it,id:id,time:eT(it)})
    })})})});
  const picks=inScope.concat(rest).slice(0,5);
  if(!picks.length){alert('Parabéns! Você estudou TUDO! 🎉');return}
  const ov=document.createElement('div');ov.className='quiz-overlay';
  const mo=document.createElement('div');mo.className='quiz-modal study-modal';
  mo.setAttribute('role','dialog');mo.setAttribute('aria-modal','true');
  const totalTime=picks.reduce((s,p)=>s+p.time,0);
  mo.innerHTML=`<h2>📚 Estudo do Dia</h2><p class="quiz-info">${picks.length} itens sugeridos · ~${fmtTime(totalTime)} estimados</p>
    ${picks.map((pk,i)=>`<div class="study-pick"><div class="study-pick-path">${esc(pk.level)} > ${esc(pk.area)} > ${esc(pk.topic)}</div><div class="study-pick-title">${i+1}. ${esc(pk.item.w)}</div><div class="study-pick-time">⏱️ ~${fmtTime(pk.time)}</div></div>`).join('')}
    <div class="quiz-actions"><button class="quiz-close-btn" onclick="this.closest('.quiz-overlay').remove()">Fechar</button></div>`;
  ov.appendChild(mo);document.body.appendChild(ov);const sfb=mo.querySelector('button');if(sfb)sfb.focus();ov.addEventListener('click',e=>{if(e.target===ov)ov.remove()});
};

// ============================================================
// RENDER LEVELS
// ============================================================
ROADMAP.forEach((level,levelIdx)=>{
const sec=document.createElement('div');sec.className='level';sec.id='level-'+level.css;
const btn=document.createElement('button');btn.className=`level-btn ${level.css}`;btn.setAttribute('aria-expanded','false');
const stageNum=levelIdx+1;
btn.innerHTML=`<div class="level-stage" aria-hidden="true">${stageNum}</div><div class="level-body"><div class="level-name">${esc(level.name)} <span class="arrow" aria-hidden="true">▸</span></div><div class="level-meta">${esc(level.time)} · ${level.areas.length} áreas</div><div class="level-desc">${esc(level.desc||'')}</div></div>`;
const cont=document.createElement('div');cont.className='level-content';cont.style.display='none';

level.areas.forEach(area=>{
const TRACKS={gamedesign:{label:'Trilha de Game Design',icon:'🎮',cls:'gd'},ai:{label:'Trilha de IA & ML',icon:'🤖',cls:'ai'},security:{label:'Trilha de Segurança',icon:'🔒',cls:'sec'},web:{label:'Trilha Web / Full-Stack',icon:'🌐',cls:'web'},hardware:{label:'Trilha de Hardware & Embarcados',icon:'🔧',cls:'hw'},data:{label:'Trilha de Dados',icon:'📊',cls:'data'}};
const tk=area.track&&TRACKS[area.track]?TRACKS[area.track]:null;
const isGD=area.track==='gamedesign';
const aD=document.createElement('div');aD.className='area'+(tk?' area-track area-track-'+tk.cls:'');if(area.track)aD.dataset.track=area.track;if(area.core)aD.dataset.core='1';
const aSlug=area.name.replace(/^[^\w\s]+\s*/u,'').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'').substring(0,40);aD.dataset.slug=aSlug;
const aIC=area.topics.reduce((s,t)=>s+t.items.length,0);
// Estimated hours for this area (same heuristic as study load)
const estH=Math.round(area.topics.reduce((s,t)=>s+t.items.reduce((s2,it)=>s2+eT(it),0),0)/60);
const badges=gB();const aKey=area.name.replace(/^[^\w\s]+\s*/u,'').trim();
const hasBadge=badges[aKey];
const aB=document.createElement('button');aB.className='area-btn'+(tk?' area-btn-track area-btn-'+tk.cls:'');aB.setAttribute('aria-expanded','false');
const trackTag=tk?`<span class="track-badge track-badge-${tk.cls}">${tk.icon} ${tk.label} · ${area.trackPart}/${area.trackTotal}</span>`:'';
aB.innerHTML=`<span class="area-title">${area.core?'<span class="core-badge">⭐ Essencial</span> ':''}${hasBadge?'🏅 ':''}${esc(area.displayName||area.name)}${trackTag}</span><span class="area-meta">${area.topics.length} tópicos · ${aIC} itens · ~${estH}h <span class="arrow" aria-hidden="true">▸</span></span>`;
const aC=document.createElement('div');aC.className='area-content';aC.style.display='none';
if(area.prereq){const pr=document.createElement('div');pr.className='area-prereq';pr.innerHTML=`<span class="prereq-label">📋 Pré-requisitos:</span> ${esc(area.prereq)}`;aC.appendChild(pr)}
if(area.objectives&&area.objectives.length){const ob=document.createElement('div');ob.className='area-objectives';ob.innerHTML=`<div class="objectives-label">🎯 Ao final desta área, você será capaz de:</div><ul class="objectives-list">${area.objectives.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>`;aC.appendChild(ob)}

area.topics.forEach(topic=>{
const tD=document.createElement('div');tD.className='topic';
const tB=document.createElement('button');tB.className='topic-btn';tB.setAttribute('aria-expanded','false');
tB.innerHTML=`<span>${esc(topic.name)}</span><span class="topic-meta">${topic.items.length} itens <span class="arrow" aria-hidden="true">▸</span></span>`;
const tC=document.createElement('div');tC.className='topic-content';tC.style.display='none';
const st=cS(level.css,area.name,topic.name,topic.items.length);
const pb=cPB(st,topic.items.length);pb.className+=' topic-progress';tC.appendChild(pb);
const bb=document.createElement('div');bb.className='books-box';
bb.innerHTML=`<strong>📚 Livros recomendados:</strong>`+topic.books.map(b=>`<div class="book-item">• ${esc(b)}</div>`).join('');tC.appendChild(bb);

topic.items.forEach((item,idx)=>{
const iid=mid(level.css,area.name,topic.name,idx);const pr=gP();const iS=pr[iid];
const iD=document.createElement('div');iD.className='item'+(iS?' item-studied':'');iD.dataset.itemId=iid;iD.style.setProperty('--i',idx);
const tm=eT(item);
const iB=document.createElement('div');iB.className='item-btn';iB.setAttribute('role','button');iB.setAttribute('tabindex','0');iB.setAttribute('aria-expanded','false');
iB.innerHTML=`<span class="item-left"><button type="button" class="item-check" role="checkbox" aria-checked="${iS?'true':'false'}" aria-label="Marcar &quot;${esc(item.w)}&quot; como estudado">${iS?'✅':'⬜'}</button><span class="item-text">${esc(item.w)}</span></span><span class="item-right"><span class="item-time">~${fmtTime(tm)}</span><span class="item-toggle" aria-hidden="true">▸</span></span>`;
const chk=iB.querySelector('.item-check');
function toggleStudied(){const p=gP();p[iid]=!p[iid];sP(p);chk.textContent=p[iid]?'✅':'⬜';chk.setAttribute('aria-checked',p[iid]?'true':'false');iD.classList.toggle('item-studied',p[iid]);
const rv=gR();if(p[iid]){if(!item.w.includes('🎯')&&!rv[iid])rv[iid]={date:Date.now(),count:0}}else{delete rv[iid]}sR(rv);updateReviewWidget();
updateJourney();
const ns=cS(level.css,area.name,topic.name,topic.items.length);const bar=tC.querySelector('.progress-fill');const txt=tC.querySelector('.progress-text');
if(bar)bar.style.width=Math.round(ns/topic.items.length*100)+'%';if(txt)txt.textContent=ns+'/'+topic.items.length+' ('+Math.round(ns/topic.items.length*100)+'%)';
checkBadge(area.name);checkLevelComplete();}
chk.addEventListener('click',e=>{e.stopPropagation();toggleStudied()});
const det=document.createElement('div');det.className='item-detail';det.style.display='none';
let detBuilt=false;
function buildDetail(){if(detBuilt)return;detBuilt=true;
  const bulletsHtml=item.d.split('\n').map(line=>{const tl=line.trim();if(tl.startsWith('•'))return '<li>'+esc(tl.substring(1).trim())+'</li>';return tl?'<li class="no-bullet">'+esc(tl)+'</li>':''}).join('');
  const noteVal=gN()[iid]||'';
  det.innerHTML=`<div class="item-desc"><strong>📖 O que estudar:</strong><ul class="desc-bullets">${bulletsHtml}</ul></div>`+
    `<div class="item-recall"><button type="button" class="recall-btn">🧠 Sei explicar isso sem olhar?</button><span class="recall-hint">Tente lembrar antes de marcar como aprendido — é assim que fixa.</span></div>`+
    `<div class="search-terms"><strong>🔍 Termos de busca:</strong>${mSL(item.s)}</div>`+
    `<div class="item-notes"><label class="notes-label">📝 Minhas anotações:</label><textarea class="notes-area" rows="2" placeholder="Anote dúvidas, links, insights...">${esc(noteVal)}</textarea></div>`;
  // wire recall self-check (no grade, just reveals + nudges)
  const rb=det.querySelector('.recall-btn');if(rb)rb.addEventListener('click',e=>{e.stopPropagation();rb.classList.toggle('revealed');rb.textContent=rb.classList.contains('revealed')?'✅ Boa! Se conseguiu explicar, marque como estudado':'🧠 Sei explicar isso sem olhar?'});
  // wire notes autosave
  const ta=det.querySelector('.notes-area');if(ta){ta.addEventListener('click',e=>e.stopPropagation());ta.addEventListener('input',()=>{const n=gN();const v=ta.value.trim();if(v)n[iid]=v;else delete n[iid];sN(n);iD.classList.toggle('has-note',!!v)});}
}
if(gN()[iid])iD.classList.add('has-note');
iB.addEventListener('click',e=>{if(e.target.closest('.item-check'))return;buildDetail();tog(iB,det)});
iB.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){if(e.target.closest('.item-check'))return;e.preventDefault();buildDetail();tog(iB,det)}});
iD.appendChild(iB);iD.appendChild(det);tC.appendChild(iD)});
tB.addEventListener('click',()=>tog(tB,tC));tD.appendChild(tB);tD.appendChild(tC);aC.appendChild(tD)});

const aK2=area.name.replace(/^[^\w\s]+\s*/u,'').trim();
const hP=area.projectKey&&typeof PROJECTS!=='undefined'&&PROJECTS[area.projectKey]?area.projectKey:(typeof PROJECTS!=='undefined'&&Object.keys(PROJECTS).find(k=>aK2.includes(k)||k.includes(aK2)));
if(hP){const ab=document.createElement('div');ab.className='area-actions';
const pd=PROJECTS[hP];
const bb2=document.createElement('button');bb2.className='project-btn project-basic';bb2.textContent=pd.basic.title;bb2.addEventListener('click',e=>{e.stopPropagation();openProject(pd.basic)});ab.appendChild(bb2);
const ab2=document.createElement('button');ab2.className='project-btn project-advanced';ab2.textContent=pd.advanced.title;ab2.addEventListener('click',e=>{e.stopPropagation();openProject(pd.advanced)});ab.appendChild(ab2);
const lk=document.createElement('button');lk.className='area-link-btn';lk.textContent='🔗 Copiar link';lk.title='Copiar link direto para esta área';lk.addEventListener('click',e=>{e.stopPropagation();const url=location.origin+location.pathname+'#area-'+aSlug;const done=()=>{lk.textContent='✅ Copiado!';setTimeout(()=>lk.textContent='🔗 Copiar link',1500)};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url).then(done).catch(()=>{location.hash='area-'+aSlug;done()})}else{location.hash='area-'+aSlug;done()}});ab.appendChild(lk);
aC.appendChild(ab)}
// Game Design track capstone — shown only at the end of the flagged GD area (Dev Avançado)
if(area.gdCapstone&&typeof FINAL_LEVEL!=='undefined'&&FINAL_LEVEL.gamedesign){
const gf=document.createElement('div');gf.className='gd-capstone';
const gfb=document.createElement('button');gfb.className='final-btn gd-capstone-btn';gfb.textContent='🏆 '+FINAL_LEVEL.gamedesign.project.title.replace(/^🏆\s*/,'');
gfb.addEventListener('click',e=>{e.stopPropagation();openProject(FINAL_LEVEL.gamedesign.project)});
gf.appendChild(gfb);aC.appendChild(gf)}
aB.addEventListener('click',()=>tog(aB,aC));aD.appendChild(aB);aD.appendChild(aC);cont.appendChild(aD)});

if(typeof FINAL_LEVEL!=='undefined'&&FINAL_LEVEL[level.css]){
const fd=FINAL_LEVEL[level.css];const ln={green:'Iniciante',yellow:'Intermediário',orange:'Avançado',red:'Muito Avançado',blue:'Academia',purple:'Carreira'};const ll=ln[level.css]||level.name;
const fb=document.createElement('div');fb.className='final-actions';
const pb2=document.createElement('button');pb2.className='final-btn final-project';pb2.textContent='🏆 Desafio Final — '+ll;pb2.addEventListener('click',e=>{e.stopPropagation();openProject(fd.project)});fb.appendChild(pb2);
cont.appendChild(fb)}
btn.addEventListener('click',()=>tog(btn,cont));sec.appendChild(btn);sec.appendChild(cont);roadmap.appendChild(sec)});

// Search
let db;searchInput.addEventListener('input',function(){clearTimeout(db);db=setTimeout(()=>doS(this.value.trim()),200)});
function doS(q){if(q.length<2){searchResults.style.display='none';roadmap.style.display='block';return}
const l=q.toLowerCase();const res=[];
ROADMAP.forEach(lv=>{lv.areas.forEach(a=>{a.topics.forEach(t=>{
t.books.forEach(b=>{if(b.toLowerCase().includes(l))res.push({rank:3,path:`${lv.name} > ${a.displayName||a.name} > ${t.name}`,title:`📚 ${b}`,detail:`Livro no tópico "${t.name}"`,search:''})});
t.items.forEach(it=>{const W=it.w.toLowerCase(),S=(it.s||'').toLowerCase(),D=(it.d||'').toLowerCase();let rk=-1;if(W.includes(l))rk=0;else if(S.includes(l))rk=1;else if(D.includes(l))rk=2;if(rk>=0)res.push({rank:rk,path:`${lv.name} > ${a.displayName||a.name} > ${t.name}`,title:it.w,detail:it.d,search:it.s})})})})});
res.sort((a,b)=>a.rank-b.rank);
if(!res.length){searchResults.innerHTML=`<div class="sr-count">Nenhum resultado para "${esc(q)}"</div>`}else{
const sh=res.slice(0,20);searchResults.innerHTML=`<div class="sr-count">${res.length} resultado${res.length>1?'s':''} para "${esc(q)}"${res.length>20?' (mostrando 20)':''}</div>`+sh.map(r=>`<div class="sr-item"><div class="sr-path">${esc(r.path)}</div><div class="sr-title">${hl(r.title,l)}</div><div class="sr-detail">${hl(r.detail,l).replace(/\n/g,'<br>')}</div>${r.search?`<div class="sr-search">${mSL(r.search)}</div>`:''}</div>`).join('')}
searchResults.style.display='block';roadmap.style.display='none'}
// Escape first, then wrap matches in <mark> (operates on escaped text so tags stay intact)
function hl(t,q){const e=esc(t);if(!q)return e;return e.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`,'gi'),'<mark>$1</mark>')}

// Keyboard shortcuts
document.addEventListener('keydown',function(e){
  const ov=document.querySelector('.quiz-overlay');
  // Trap Tab focus inside an open modal (WCAG 2.1.2 / 2.4.3)
  if(e.key==='Tab'&&ov){
    const f=[...ov.querySelectorAll('a[href],button:not([disabled]),textarea,input:not([disabled]),select,[tabindex]:not([tabindex="-1"])')].filter(el=>el.offsetParent!==null||el===document.activeElement);
    if(f.length){const first=f[0],last=f[f.length-1];
      if(!ov.contains(document.activeElement)){e.preventDefault();first.focus()}
      else if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
    return;
  }
  // Esc closes any open modal and restores focus to whatever opened it
  if(e.key==='Escape'){if(ov){ov.remove();if(modalTrigger&&modalTrigger.focus)modalTrigger.focus();modalTrigger=null;return}}
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
  // Don't fire letter shortcuts while a modal is open
  if(ov)return;
  if(e.key==='d'||e.key==='D'){e.preventDefault();window.studyOfDay()}
  if(e.key==='t'||e.key==='T'){e.preventDefault();window.toggleTheme()}
  if(e.key==='/'){e.preventDefault();searchInput.focus()}
});
// Restore focus to the trigger after a modal is closed by click (close button or backdrop)
document.addEventListener('click',function(){if(modalTrigger&&!document.querySelector('.quiz-overlay')){if(modalTrigger.focus)modalTrigger.focus();modalTrigger=null;}});

// Sticky toolbar shadow when stuck
const toolbar=document.querySelector('.toolbar');
if(toolbar&&typeof IntersectionObserver!=='undefined'){
  const probe=document.createElement('div');probe.style.cssText='height:1px;';
  toolbar.parentNode.insertBefore(probe,toolbar);
  const obs=new IntersectionObserver(([e])=>{
    toolbar.classList.toggle('stuck',e.intersectionRatio<1);
  },{threshold:[1]});
  obs.observe(probe);
}

// Project (must live INSIDE the IIFE to access esc/helpers)
function openProject(p){modalTrigger=document.activeElement;const ov=document.createElement('div');ov.className='quiz-overlay';const mo=document.createElement('div');mo.className='quiz-modal project-modal';
mo.setAttribute('role','dialog');mo.setAttribute('aria-modal','true');
const bullets=str=>str.split('\n').map(line=>{const tl=line.trim();if(tl.startsWith('•'))return '<li>'+esc(tl.substring(1).trim())+'</li>';return tl?'<li class="no-bullet">'+esc(tl)+'</li>':''}).join('');
mo.innerHTML=`<h2>${esc(p.title)}</h2><div class="project-section"><strong>📋 Descrição:</strong><ul class="desc-bullets">${bullets(p.desc)}</ul></div><div class="project-section"><strong>📦 Entregável:</strong><p>${esc(p.deliverable)}</p></div><div class="quiz-actions"><button class="quiz-close-btn" onclick="this.closest('.quiz-overlay').remove()">Fechar</button></div>`;
ov.appendChild(mo);document.body.appendChild(ov);const fb=mo.querySelector('button');if(fb)fb.focus();ov.addEventListener('click',e=>{if(e.target===ov)ov.remove()})}
window.openProject=openProject;

// ── Init: review widget + deep-linking (hash routing) ──
updateReviewWidget();
function openFromHash(){const h=decodeURIComponent(location.hash.replace(/^#/,''));if(!h)return;
  if(h==='review'){window.openReview();return}
  const m=h.match(/^area-(.+)$/);if(m){const slug=m[1];
    // find area whose slug matches
    let target=null;document.querySelectorAll('.area').forEach(a=>{if(a.dataset.slug===slug)target=a});
    if(target){const lv=target.closest('.level');if(lv){const lb=lv.querySelector('.level-btn');if(lb&&!lb.classList.contains('open'))tog(lb,lv.querySelector('.level-content'))}const ab=target.querySelector('.area-btn');if(ab&&!ab.classList.contains('open'))tog(ab,target.querySelector('.area-content'));setTimeout(()=>target.scrollIntoView({behavior:'smooth',block:'start'}),80)}
  }
}
window.addEventListener('hashchange',openFromHash);
if(location.hash)setTimeout(openFromHash,120);
})();
