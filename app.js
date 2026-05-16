// app.js — Roadmap renderer (pure JS, no framework)
(function(){
  const $ = s => document.querySelector(s);
  const roadmap = $('#roadmap');
  const statsEl = $('#stats');
  const searchInput = $('#search');
  const searchResults = $('#search-results');

  // Count all items
  let totalItems = 0, totalTopics = 0, totalAreas = 0, totalBooks = new Set();
  ROADMAP.forEach(level => {
    level.areas.forEach(area => {
      totalAreas++;
      area.topics.forEach(topic => {
        totalTopics++;
        topic.books.forEach(b => totalBooks.add(b));
        topic.items.forEach(() => totalItems++);
      });
    });
  });

  // Render stats
  statsEl.innerHTML = `
    <div class="stat-card"><div class="stat-num">${ROADMAP.length}</div><div class="stat-label">Niveis</div></div>
    <div class="stat-card"><div class="stat-num">${totalAreas}</div><div class="stat-label">Areas</div></div>
    <div class="stat-card"><div class="stat-num">${totalTopics}</div><div class="stat-label">Topicos</div></div>
    <div class="stat-card"><div class="stat-num">${totalItems}</div><div class="stat-label">Itens</div></div>
    <div class="stat-card"><div class="stat-num">${totalBooks.size}</div><div class="stat-label">Livros</div></div>
  `;

  // Toggle helper
  function toggle(btn, content) {
    const open = content.style.display === 'block';
    content.style.display = open ? 'none' : 'block';
    btn.classList.toggle('open', !open);
    const arrow = btn.querySelector('.arrow') || btn.querySelector('.item-toggle');
    if (arrow) arrow.textContent = open ? '▸' : '▾';
  }

  // Render levels
  ROADMAP.forEach(level => {
    const section = document.createElement('div');
    section.className = 'level';

    const btn = document.createElement('button');
    btn.className = `level-btn ${level.css}`;
    btn.innerHTML = `
      <div>
        <div class="level-name">${level.name} <span class="arrow">▸</span></div>
        <div class="level-meta">${level.time} · ${level.areas.length} areas</div>
        <div class="level-desc">${level.desc}</div>
      </div>
    `;

    const content = document.createElement('div');
    content.className = 'level-content';
    content.style.display = 'none';

    level.areas.forEach(area => {
      const areaDiv = document.createElement('div');
      areaDiv.className = 'area';

      const areaItemCount = area.topics.reduce((s, t) => s + t.items.length, 0);
      const areaBtn = document.createElement('button');
      areaBtn.className = 'area-btn';
      areaBtn.innerHTML = `<span>${area.name}</span><span class="area-meta">${area.topics.length} topicos · ${areaItemCount} itens <span class="arrow">▸</span></span>`;

      const areaContent = document.createElement('div');
      areaContent.className = 'area-content';
      areaContent.style.display = 'none';

      area.topics.forEach(topic => {
        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic';

        const topicBtn = document.createElement('button');
        topicBtn.className = 'topic-btn';
        topicBtn.innerHTML = `<span>${topic.name}</span><span class="topic-meta">${topic.items.length} itens <span class="arrow">▸</span></span>`;

        const topicContent = document.createElement('div');
        topicContent.className = 'topic-content';
        topicContent.style.display = 'none';

        // Books box
        const booksBox = document.createElement('div');
        booksBox.className = 'books-box';
        booksBox.innerHTML = `<strong>📚 Livros recomendados:</strong>` + topic.books.map(b => `<div class="book-item">• ${b}</div>`).join('');
        topicContent.appendChild(booksBox);

        topic.items.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'item';

          const itemBtn = document.createElement('button');
          itemBtn.className = 'item-btn';
          itemBtn.innerHTML = `<span><span class="item-arrow-icon">→</span>${item.w}</span><span class="item-toggle">▸</span>`;

          const itemDetail = document.createElement('div');
          itemDetail.className = 'item-detail';
          itemDetail.style.display = 'none';
          itemDetail.innerHTML = `
            <div class="item-desc"><strong>📖 O que estudar:</strong><div class="desc-bullets">${item.d.replace(/\n/g,'<br>')}</div></div>
            <div class="search-terms">🔍 Termos de busca:<br>${item.s.split('|').map(t=>'• '+t.trim()).join('<br>')}</div>
          `;

          itemBtn.addEventListener('click', () => toggle(itemBtn, itemDetail));
          itemDiv.appendChild(itemBtn);
          itemDiv.appendChild(itemDetail);
          topicContent.appendChild(itemDiv);
        });

        topicBtn.addEventListener('click', () => toggle(topicBtn, topicContent));
        topicDiv.appendChild(topicBtn);
        topicDiv.appendChild(topicContent);
        areaContent.appendChild(topicDiv);
      });

      // Action bar: projects + quiz at AREA level
      const areaKey = area.name.replace(/^[^\w\s]+\s*/u, '').trim();
      const hasProjects = typeof PROJECTS !== 'undefined' && Object.keys(PROJECTS).find(k => areaKey.includes(k) || k.includes(areaKey));
      const quizKey = typeof QUIZZES !== 'undefined' && Object.keys(QUIZZES).find(k => areaKey.includes(k) || k.includes(areaKey));

      if (hasProjects || quizKey) {
        const actionBar = document.createElement('div');
        actionBar.className = 'area-actions';

        if (hasProjects) {
          const projData = PROJECTS[hasProjects];
          // Basic project
          const basicBtn = document.createElement('button');
          basicBtn.className = 'project-btn project-basic';
          basicBtn.textContent = projData.basic.title;
          basicBtn.addEventListener('click', (e) => { e.stopPropagation(); openProject(projData.basic); });
          actionBar.appendChild(basicBtn);

          // Advanced project
          const advBtn = document.createElement('button');
          advBtn.className = 'project-btn project-advanced';
          advBtn.textContent = projData.advanced.title;
          advBtn.addEventListener('click', (e) => { e.stopPropagation(); openProject(projData.advanced); });
          actionBar.appendChild(advBtn);
        }

        if (quizKey) {
          const quizBtn = document.createElement('button');
          quizBtn.className = 'quiz-btn';
          quizBtn.textContent = '📝 Fazer Prova';
          quizBtn.addEventListener('click', (e) => { e.stopPropagation(); openQuiz(quizKey); });
          actionBar.appendChild(quizBtn);
        }

        areaContent.appendChild(actionBar);
      }

      areaBtn.addEventListener('click', () => toggle(areaBtn, areaContent));
      areaDiv.appendChild(areaBtn);
      areaDiv.appendChild(areaContent);
      content.appendChild(areaDiv);
    });

    // FINAL EXAM + PROJECT for levels that have them
    if (typeof FINAL_LEVEL !== 'undefined' && FINAL_LEVEL[level.css]) {
      const finalData = FINAL_LEVEL[level.css];
      const levelNames = {green:'Iniciante',yellow:'Intermediário',orange:'Avançado',red:'Muito Avançado',blue:'Academia',purple:'Carreira'};
      const levelLabel = levelNames[level.css] || level.name;
      const finalBar = document.createElement('div');
      finalBar.className = 'final-actions';

      const projBtn = document.createElement('button');
      projBtn.className = 'final-btn final-project';
      projBtn.textContent = '🏆 Projeto Final — ' + levelLabel;
      projBtn.addEventListener('click', (e) => { e.stopPropagation(); openProject(finalData.project); });
      finalBar.appendChild(projBtn);

      const examBtn = document.createElement('button');
      examBtn.className = 'final-btn final-exam';
      examBtn.textContent = '🎓 Prova Final — ' + levelLabel;
      examBtn.addEventListener('click', (e) => { e.stopPropagation(); openQuiz('__FINAL_' + level.css.toUpperCase() + '__'); });
      finalBar.appendChild(examBtn);

      content.appendChild(finalBar);
    }

    btn.addEventListener('click', () => toggle(btn, content));
    section.appendChild(btn);
    section.appendChild(content);
    roadmap.appendChild(section);
  });

  // Search
  let debounce;
  searchInput.addEventListener('input', function() {
    clearTimeout(debounce);
    debounce = setTimeout(() => doSearch(this.value.trim()), 200);
  });

  function doSearch(q) {
    if (q.length < 2) {
      searchResults.style.display = 'none';
      roadmap.style.display = 'block';
      return;
    }
    const lower = q.toLowerCase();
    const results = [];

    ROADMAP.forEach(level => {
      level.areas.forEach(area => {
        area.topics.forEach(topic => {
          // Search in books
          topic.books.forEach(book => {
            if (book.toLowerCase().includes(lower)) {
              results.push({
                path: `${level.name} > ${area.name} > ${topic.name}`,
                title: `📚 ${book}`,
                detail: `Livro recomendado no topico "${topic.name}"`,
                search: ''
              });
            }
          });
          // Search in items
          topic.items.forEach(item => {
            const match = item.w.toLowerCase().includes(lower)
              || item.d.toLowerCase().includes(lower)
              || item.s.toLowerCase().includes(lower);
            if (match) {
              results.push({
                path: `${level.name} > ${area.name} > ${topic.name}`,
                title: item.w,
                detail: item.d,
                search: item.s
              });
            }
          });
        });
      });
    });

    if (results.length === 0) {
      searchResults.innerHTML = `<div class="sr-count">Nenhum resultado para "${q}"</div>`;
    } else {
      const shown = results.slice(0, 20);
      searchResults.innerHTML = `<div class="sr-count">${results.length} resultado${results.length > 1 ? 's' : ''} para "${q}"${results.length > 20 ? ' (mostrando 20)' : ''}</div>`
        + shown.map(r => `
          <div class="sr-item">
            <div class="sr-path">${r.path}</div>
            <div class="sr-title">${highlight(r.title, lower)}</div>
            <div class="sr-detail">${highlight(r.detail.replace(/\n/g,'<br>'), lower)}</div>
            ${r.search ? `<div class="sr-search">🔍 ${highlight(r.search, lower)}</div>` : ''}
          </div>
        `).join('');
    }
    searchResults.style.display = 'block';
    roadmap.style.display = 'none';
  }

  function highlight(text, term) {
    if (!term) return text;
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark style="background:rgba(96,165,250,0.25);color:#fff;border-radius:2px;padding:0 2px">$1</mark>');
  }
})();

// ============================================================
// QUIZ SYSTEM
// ============================================================
function openQuiz(topicName) {
  const questions = QUIZZES[topicName];
  if (!questions) return;

  const isFinal = topicName === '__FINAL_INICIANTE__';
  const total = questions.length;
  const minPass = Math.ceil(total * 0.8);
  const displayName = isFinal ? 'Prova Final — Iniciante' : topicName;

  // Create modal
  const overlay = document.createElement('div');
  overlay.className = 'quiz-overlay';
  
  const modal = document.createElement('div');
  modal.className = 'quiz-modal';
  
  let html = `<h2>${isFinal ? '🎓' : '📝'} ${displayName}</h2>
    <p class="quiz-info">${total} perguntas • Mínimo 80% (${minPass}/${total}) para aprovação • Não mostra quais errou</p>
    <form id="quizForm">`;
  
  questions.forEach((q, i) => {
    html += `<div class="quiz-question">
      <p class="quiz-q"><strong>${i+1}.</strong> ${q.q}</p>`;
    q.o.forEach((opt, oi) => {
      html += `<label class="quiz-option">
        <input type="radio" name="q${i}" value="${oi}" required>
        <span>${opt}</span>
      </label>`;
    });
    html += `</div>`;
  });
  
  html += `<div class="quiz-actions">
    <button type="submit" class="quiz-submit">✅ Corrigir Prova</button>
    <button type="button" class="quiz-close" onclick="this.closest('.quiz-overlay').remove()">❌ Cancelar</button>
  </div></form>`;
  
  modal.innerHTML = html;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  // Handle submit
  document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let correct = 0;
    questions.forEach((q, i) => {
      const selected = this.querySelector(`input[name="q${i}"]:checked`);
      if (selected && parseInt(selected.value) === q.a) correct++;
    });
    
    const pct = Math.round(correct / total * 100);
    const passed = pct >= 80;
    
    modal.innerHTML = `
      <div class="quiz-result ${passed ? 'quiz-pass' : 'quiz-fail'}">
        <h2>${passed ? '🎉 APROVADO!' : '❌ REPROVADO'}</h2>
        <div class="quiz-score">${correct}/${total}</div>
        <div class="quiz-pct">${pct}%</div>
        <p>${passed 
          ? (isFinal ? 'Parabéns! Você completou o nível Iniciante! Hora de avançar para o Intermediário!' : 'Parabéns! Você domina esta área. Siga para a próxima!')
          : `Você precisa de pelo menos 80% (${minPass}/${total}). Revise o conteúdo e tente novamente!`}</p>
        <button class="quiz-close-btn" onclick="this.closest('.quiz-overlay').remove()">Fechar</button>
      </div>`;
  });
  
  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

// ============================================================
// PROJECT MODAL
// ============================================================
function openProject(proj) {
  const overlay = document.createElement('div');
  overlay.className = 'quiz-overlay';
  
  const modal = document.createElement('div');
  modal.className = 'quiz-modal project-modal';
  
  modal.innerHTML = `
    <h2>${proj.title}</h2>
    <div class="project-section">
      <strong>📋 Descrição do Projeto:</strong>
      <p>${proj.desc}</p>
    </div>
    <div class="project-section">
      <strong>📦 Entregável:</strong>
      <p>${proj.deliverable}</p>
    </div>
    <div class="quiz-actions">
      <button class="quiz-close-btn" onclick="this.closest('.quiz-overlay').remove()">Fechar</button>
    </div>`;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
}
