// app.js v2 — All features: progress, themes, search, filters, study mode, badges, export, time tracking, keyboard shortcuts
(function(){
const $=s=>document.querySelector(s);
const roadmap=$('#roadmap'),statsEl=$('#stats'),searchInput=$('#search'),searchResults=$('#search-results');
const SK='roadmap_progress',QK='roadmap_quizzes',TK='roadmap_theme',BK='roadmap_badges';
function gP(){try{return JSON.parse(localStorage.getItem(SK))||{}}catch(e){return{}}}
function sP(d){localStorage.setItem(SK,JSON.stringify(d))}
function gQ(){try{return JSON.parse(localStorage.getItem(QK))||{}}catch(e){return{}}}
function gB(){try{return JSON.parse(localStorage.getItem(BK))||{}}catch(e){return{}}}
function sB(d){localStorage.setItem(BK,JSON.stringify(d))}
function mid(lc,an,tn,ii){return lc+'::'+an.substring(0,20)+'::'+tn.substring(0,20)+'::'+ii}

// Theme
function initTheme(){if(localStorage.getItem(TK)==='light')document.body.classList.add('light-mode')}
initTheme();
window.toggleTheme=function(){document.body.classList.toggle('light-mode');localStorage.setItem(TK,document.body.classList.contains('light-mode')?'light':'dark');const b=$('#theme-toggle');if(b)b.textContent=document.body.classList.contains('light-mode')?'🌙 Escuro':'☀️ Claro'};

// Time estimate
function eT(it){const l=it.d.length+it.w.length;if(it.w.includes('🎯'))return 10;if(l>500)return 240;if(l>300)return 120;return 60}
function fmtTime(min){if(min<60)return min+'min';const h=Math.floor(min/60);const m=min%60;return m>0?h+'h'+m+'min':h+'h'}

// Count all
let tI=0,tT=0,tA=0,tB=new Set(),totalMinutes=0;
const areaItemMap={};
ROADMAP.forEach(l=>{l.areas.forEach(a=>{tA++;const aKey=a.name.replace(/^[^\w\s]+\s*/u,'').trim();areaItemMap[aKey]={total:0,ids:[]};a.topics.forEach(t=>{tT++;t.books.forEach(b=>tB.add(b));t.items.forEach((it,idx)=>{tI++;totalMinutes+=eT(it);areaItemMap[aKey].total++;areaItemMap[aKey].ids.push(mid(l.css,a.name,t.name,idx))})})})});

function gSC(){const p=gP();return Object.keys(p).filter(k=>p[k]).length}
function getStudiedMinutes(){const p=gP();let m=0;ROADMAP.forEach(l=>{l.areas.forEach(a=>{a.topics.forEach(t=>{t.items.forEach((it,idx)=>{if(p[mid(l.css,a.name,t.name,idx)])m+=eT(it)})})})});return m}

function rS(){
  const s=gSC(),pc=tI>0?Math.round(s/tI*100):0;
  const studiedMin=getStudiedMinutes();
  statsEl.innerHTML=`
    <div class="stat-card"><div class="stat-num">${ROADMAP.length}</div><div class="stat-label">Níveis</div></div>
    <div class="stat-card"><div class="stat-num">${tA}</div><div class="stat-label">Áreas</div></div>
    <div class="stat-card"><div class="stat-num">${tI}</div><div class="stat-label">Itens</div></div>
    <div class="stat-card stat-progress"><div class="stat-num">${s}/${tI}</div><div class="stat-label">Estudados (${pc}%)</div><div class="progress-bar-mini"><div class="progress-fill-mini" style="width:${pc}%"></div></div></div>
    <div class="stat-card"><div class="stat-num">~${fmtTime(studiedMin)}</div><div class="stat-label">Estudado de ~${fmtTime(totalMinutes)}</div></div>`;
}
rS();

// Search links
function mSL(s){return s.split('|').map(t=>{const tr=t.trim();if(!tr)return'';const yt='https://www.youtube.com/results?search_query='+encodeURIComponent(tr);const gg='https://www.google.com/search?q='+encodeURIComponent(tr);return`<div class="search-term-row"><span class="search-term-text">• ${tr}</span><a href="${yt}" target="_blank" rel="noopener" class="search-link yt-link">▶ YouTube</a><a href="${gg}" target="_blank" rel="noopener" class="search-link gg-link">🔍 Google</a></div>`}).join('')}

function tog(b,c){const o=c.style.display==='block';c.style.display=o?'none':'block';b.classList.toggle('open',!o);const a=b.querySelector('.arrow')||b.querySelector('.item-toggle');if(a)a.textContent=o?'▸':'▾'}
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
  toast.innerHTML='🏅 <strong>Badge conquistada!</strong><br>Mestre em '+name;
  document.body.appendChild(toast);setTimeout(()=>toast.classList.add('show'),10);setTimeout(()=>{toast.classList.remove('show');setTimeout(()=>toast.remove(),300)},3000);
}

// Filter
let cF='all';
function aF(){const p=gP();document.querySelectorAll('.item[data-item-id]').forEach(el=>{const id=el.dataset.itemId;const s=p[id];if(cF==='all')el.style.display='';else if(cF==='studied')el.style.display=s?'':'none';else if(cF==='not-studied')el.style.display=s?'none':''})}
window.setFilter=function(f){cF=f;aF();document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.filter===f))};
window.resetProgress=function(){if(confirm('Apagar todo progresso (itens estudados, quizzes e badges)?')){localStorage.removeItem(SK);localStorage.removeItem(QK);localStorage.removeItem(BK);location.reload()}};

// Export/Import
window.exportProgress=function(){
  const data={progress:gP(),quizzes:gQ(),badges:gB(),date:new Date().toISOString()};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='roadmap-progress-'+new Date().toISOString().split('T')[0]+'.json';a.click();
};
window.importProgress=function(){
  const input=document.createElement('input');input.type='file';input.accept='.json';
  input.onchange=function(e){const f=e.target.files[0];if(!f)return;const reader=new FileReader();
    reader.onload=function(ev){try{const data=JSON.parse(ev.target.result);
      if(data.progress){localStorage.setItem(SK,JSON.stringify(data.progress))}
      if(data.quizzes){localStorage.setItem(QK,JSON.stringify(data.quizzes))}
      if(data.badges){localStorage.setItem(BK,JSON.stringify(data.badges))}
      alert('Progresso importado! Recarregando...');location.reload();
    }catch(err){alert('Arquivo inválido')}};reader.readAsText(f)};input.click();
};

// Study of the day
window.studyOfDay=function(){
  const p=gP();let suggestions=[];
  ROADMAP.forEach(lv=>{lv.areas.forEach(a=>{a.topics.forEach(t=>{
    t.items.forEach((it,idx)=>{
      const id=mid(lv.css,a.name,t.name,idx);
      if(!p[id]&&!it.w.includes('🎯'))suggestions.push({level:lv.name,area:a.name.replace(/^[^\w\s]+\s*/u,'').trim(),topic:t.name,item:it,id:id,time:eT(it)})
    })})})});
  const picks=suggestions.slice(0,5);
  if(!picks.length){alert('Parabéns! Você estudou TUDO! 🎉');return}
  const ov=document.createElement('div');ov.className='quiz-overlay';
  const mo=document.createElement('div');mo.className='quiz-modal study-modal';
  const totalTime=picks.reduce((s,p)=>s+p.time,0);
  mo.innerHTML=`<h2>📚 Estudo do Dia</h2><p class="quiz-info">${picks.length} itens sugeridos · ~${fmtTime(totalTime)} estimados</p>
    ${picks.map((pk,i)=>`<div class="study-pick"><div class="study-pick-path">${pk.level} > ${pk.area} > ${pk.topic}</div><div class="study-pick-title">${i+1}. ${pk.item.w}</div><div class="study-pick-time">⏱️ ~${fmtTime(pk.time)}</div></div>`).join('')}
    <div class="quiz-actions"><button class="quiz-close-btn" onclick="this.closest('.quiz-overlay').remove()">Fechar</button></div>`;
  ov.appendChild(mo);document.body.appendChild(ov);ov.addEventListener('click',e=>{if(e.target===ov)ov.remove()});
};

// ============================================================
// RENDER LEVELS
// ============================================================
ROADMAP.forEach(level=>{
const sec=document.createElement('div');sec.className='level';
const btn=document.createElement('button');btn.className=`level-btn ${level.css}`;
btn.innerHTML=`<div><div class="level-name">${level.name} <span class="arrow">▸</span></div><div class="level-meta">${level.time} · ${level.areas.length} áreas</div><div class="level-desc">${level.desc||''}</div></div>`;
const cont=document.createElement('div');cont.className='level-content';cont.style.display='none';

level.areas.forEach(area=>{
const aD=document.createElement('div');aD.className='area';
const aIC=area.topics.reduce((s,t)=>s+t.items.length,0);
const badges=gB();const aKey=area.name.replace(/^[^\w\s]+\s*/u,'').trim();
const hasBadge=badges[aKey];
const aB=document.createElement('button');aB.className='area-btn';
aB.innerHTML=`<span>${hasBadge?'🏅 ':''} ${area.name}</span><span class="area-meta">${area.topics.length} tópicos · ${aIC} itens <span class="arrow">▸</span></span>`;
const aC=document.createElement('div');aC.className='area-content';aC.style.display='none';

area.topics.forEach(topic=>{
const tD=document.createElement('div');tD.className='topic';
const tB=document.createElement('button');tB.className='topic-btn';
tB.innerHTML=`<span>${topic.name}</span><span class="topic-meta">${topic.items.length} itens <span class="arrow">▸</span></span>`;
const tC=document.createElement('div');tC.className='topic-content';tC.style.display='none';
const st=cS(level.css,area.name,topic.name,topic.items.length);
const pb=cPB(st,topic.items.length);pb.className+=' topic-progress';tC.appendChild(pb);
const bb=document.createElement('div');bb.className='books-box';
bb.innerHTML=`<strong>📚 Livros recomendados:</strong>`+topic.books.map(b=>`<div class="book-item">• ${b}</div>`).join('');tC.appendChild(bb);

topic.items.forEach((item,idx)=>{
const iid=mid(level.css,area.name,topic.name,idx);const pr=gP();const iS=pr[iid];
const iD=document.createElement('div');iD.className='item'+(iS?' item-studied':'');iD.dataset.itemId=iid;
const tm=eT(item);
const iB=document.createElement('button');iB.className='item-btn';
iB.innerHTML=`<span><span class="item-check" title="Marcar como estudado">${iS?'✅':'⬜'}</span><span class="item-text">${item.w}</span></span><span class="item-right"><span class="item-time">~${fmtTime(tm)}</span><span class="item-toggle">▸</span></span>`;
const chk=iB.querySelector('.item-check');
chk.addEventListener('click',e=>{e.stopPropagation();const p=gP();p[iid]=!p[iid];sP(p);chk.textContent=p[iid]?'✅':'⬜';iD.classList.toggle('item-studied',p[iid]);rS();
const ns=cS(level.css,area.name,topic.name,topic.items.length);const bar=tC.querySelector('.progress-fill');const txt=tC.querySelector('.progress-text');
if(bar)bar.style.width=Math.round(ns/topic.items.length*100)+'%';if(txt)txt.textContent=ns+'/'+topic.items.length+' ('+Math.round(ns/topic.items.length*100)+'%)';
checkBadge(area.name)});
const det=document.createElement('div');det.className='item-detail';det.style.display='none';
det.innerHTML=`<div class="item-desc"><strong>📖 O que estudar:</strong><div class="desc-bullets">${item.d.replace(/\n/g,'<br>')}</div></div><div class="search-terms"><strong>🔍 Termos de busca:</strong>${mSL(item.s)}</div>`;
iB.addEventListener('click',e=>{if(e.target.closest('.item-check'))return;tog(iB,det)});
iD.appendChild(iB);iD.appendChild(det);tC.appendChild(iD)});
tB.addEventListener('click',()=>tog(tB,tC));tD.appendChild(tB);tD.appendChild(tC);aC.appendChild(tD)});

const aK2=area.name.replace(/^[^\w\s]+\s*/u,'').trim();
const hP=typeof PROJECTS!=='undefined'&&Object.keys(PROJECTS).find(k=>aK2.includes(k)||k.includes(aK2));
const qK=typeof QUIZZES!=='undefined'&&Object.keys(QUIZZES).find(k=>aK2.includes(k)||k.includes(aK2));
if(hP||qK){const ab=document.createElement('div');ab.className='area-actions';
if(hP){const pd=PROJECTS[hP];
const bb2=document.createElement('button');bb2.className='project-btn project-basic';bb2.textContent=pd.basic.title;bb2.addEventListener('click',e=>{e.stopPropagation();openProject(pd.basic)});ab.appendChild(bb2);
const ab2=document.createElement('button');ab2.className='project-btn project-advanced';ab2.textContent=pd.advanced.title;ab2.addEventListener('click',e=>{e.stopPropagation();openProject(pd.advanced)});ab.appendChild(ab2)}
if(qK){const qr=gQ();const r=qr[qK];const qb=document.createElement('button');qb.className='quiz-btn'+(r&&r.passed?' quiz-passed':'');
qb.textContent=r?(r.passed?'✅ Aprovado ('+r.score+'/'+r.total+')':'❌ ('+r.score+'/'+r.total+') Tentar novamente'):'📝 Fazer Prova';
qb.addEventListener('click',e=>{e.stopPropagation();openQuiz(qK)});ab.appendChild(qb)}
aC.appendChild(ab)}
aB.addEventListener('click',()=>tog(aB,aC));aD.appendChild(aB);aD.appendChild(aC);cont.appendChild(aD)});

if(typeof FINAL_LEVEL!=='undefined'&&FINAL_LEVEL[level.css]){
const fd=FINAL_LEVEL[level.css];const ln={green:'Iniciante',yellow:'Intermediário',orange:'Avançado',red:'Muito Avançado',blue:'Academia',purple:'Carreira'};const ll=ln[level.css]||level.name;
const fb=document.createElement('div');fb.className='final-actions';
const pb2=document.createElement('button');pb2.className='final-btn final-project';pb2.textContent='🏆 Projeto Final — '+ll;pb2.addEventListener('click',e=>{e.stopPropagation();openProject(fd.project)});fb.appendChild(pb2);
const fk='__FINAL_'+level.css.toUpperCase()+'__';const qr=gQ();const fr=qr[fk];
const eb=document.createElement('button');eb.className='final-btn final-exam'+(fr&&fr.passed?' quiz-passed':'');
eb.textContent=fr?(fr.passed?'🎓 ✅ Aprovado ('+fr.score+'/'+fr.total+')':'🎓 ❌ Tentar novamente'):'🎓 Prova Final — '+ll;
eb.addEventListener('click',e=>{e.stopPropagation();openQuiz(fk)});fb.appendChild(eb);
cont.appendChild(fb)}
btn.addEventListener('click',()=>tog(btn,cont));sec.appendChild(btn);sec.appendChild(cont);roadmap.appendChild(sec)});

// Search
let db;searchInput.addEventListener('input',function(){clearTimeout(db);db=setTimeout(()=>doS(this.value.trim()),200)});
function doS(q){if(q.length<2){searchResults.style.display='none';roadmap.style.display='block';return}
const l=q.toLowerCase();const res=[];
ROADMAP.forEach(lv=>{lv.areas.forEach(a=>{a.topics.forEach(t=>{
t.books.forEach(b=>{if(b.toLowerCase().includes(l))res.push({path:`${lv.name} > ${a.name} > ${t.name}`,title:`📚 ${b}`,detail:`Livro no tópico "${t.name}"`,search:''})});
t.items.forEach(it=>{if((it.w+it.d+it.s).toLowerCase().includes(l))res.push({path:`${lv.name} > ${a.name} > ${t.name}`,title:it.w,detail:it.d,search:it.s})})})})});
if(!res.length){searchResults.innerHTML=`<div class="sr-count">Nenhum resultado para "${q}"</div>`}else{
const sh=res.slice(0,20);searchResults.innerHTML=`<div class="sr-count">${res.length} resultado${res.length>1?'s':''} para "${q}"${res.length>20?' (mostrando 20)':''}</div>`+sh.map(r=>`<div class="sr-item"><div class="sr-path">${r.path}</div><div class="sr-title">${hl(r.title,l)}</div><div class="sr-detail">${hl(r.detail.replace(/\n/g,'<br>'),l)}</div>${r.search?`<div class="sr-search">${mSL(r.search)}</div>`:''}</div>`).join('')}
searchResults.style.display='block';roadmap.style.display='none'}
function hl(t,q){if(!q)return t;return t.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`,'gi'),'<mark>$1</mark>')}

// Keyboard shortcuts
document.addEventListener('keydown',function(e){
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
  if(e.key==='d'||e.key==='D'){e.preventDefault();window.studyOfDay()}
  if(e.key==='t'||e.key==='T'){e.preventDefault();window.toggleTheme()}
  if(e.key==='/'){e.preventDefault();searchInput.focus()}
});
})();

// Quiz
function openQuiz(tn){const qs=QUIZZES[tn];if(!qs)return;const iF=tn.startsWith('__FINAL_');const tot=qs.length;const mp=Math.ceil(tot*0.8);
const ln={GREEN:'Iniciante',YELLOW:'Intermediário',ORANGE:'Avançado',RED:'Muito Avançado',BLUE:'Academia',PURPLE:'Carreira'};
const dn=iF?'Prova Final — '+(ln[tn.replace('__FINAL_','').replace('__','')]||tn):tn;
const ov=document.createElement('div');ov.className='quiz-overlay';const mo=document.createElement('div');mo.className='quiz-modal';
let h=`<h2>${iF?'🎓':'📝'} ${dn}</h2><p class="quiz-info">${tot} perguntas · 80% (${mp}/${tot}) para aprovação</p><form id="quizForm">`;
qs.forEach((q,i)=>{h+=`<div class="quiz-question"><p class="quiz-q"><strong>${i+1}.</strong> ${q.q}</p>`;q.o.forEach((o,oi)=>{h+=`<label class="quiz-option"><input type="radio" name="q${i}" value="${oi}" required><span>${o}</span></label>`});h+=`</div>`});
h+=`<div class="quiz-actions"><button type="submit" class="quiz-submit">✅ Corrigir</button><button type="button" class="quiz-close" onclick="this.closest('.quiz-overlay').remove()">❌ Cancelar</button></div></form>`;
mo.innerHTML=h;ov.appendChild(mo);document.body.appendChild(ov);
document.getElementById('quizForm').addEventListener('submit',function(e){e.preventDefault();let c=0;qs.forEach((q,i)=>{const s=this.querySelector(`input[name="q${i}"]:checked`);if(s&&parseInt(s.value)===q.a)c++});
const pc=Math.round(c/tot*100);const pa=pc>=80;
try{const r=JSON.parse(localStorage.getItem('roadmap_quizzes')||'{}');r[tn]={score:c,total:tot,pct:pc,passed:pa,date:new Date().toISOString().split('T')[0]};localStorage.setItem('roadmap_quizzes',JSON.stringify(r))}catch(e){}
mo.innerHTML=`<div class="quiz-result ${pa?'quiz-pass':'quiz-fail'}"><h2>${pa?'🎉 APROVADO!':'❌ REPROVADO'}</h2><div class="quiz-score">${c}/${tot}</div><div class="quiz-pct">${pc}%</div><p>${pa?'Parabéns! Resultado salvo.':'Precisa de 80% ('+mp+'/'+tot+'). Revise e tente novamente!'}</p><button class="quiz-close-btn" onclick="this.closest('.quiz-overlay').remove();location.reload();">Fechar</button></div>`});
ov.addEventListener('click',e=>{if(e.target===ov)ov.remove()})}

// Project
function openProject(p){const ov=document.createElement('div');ov.className='quiz-overlay';const mo=document.createElement('div');mo.className='quiz-modal project-modal';
mo.innerHTML=`<h2>${p.title}</h2><div class="project-section"><strong>📋 Descrição:</strong><p>${p.desc.replace(/\n/g,'<br>')}</p></div><div class="project-section"><strong>📦 Entregável:</strong><p>${p.deliverable}</p></div><div class="quiz-actions"><button class="quiz-close-btn" onclick="this.closest('.quiz-overlay').remove()">Fechar</button></div>`;
ov.appendChild(mo);document.body.appendChild(ov);ov.addEventListener('click',e=>{if(e.target===ov)ov.remove()})}
