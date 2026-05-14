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
            <strong>📖 O que estudar:</strong> ${item.d}
            <div class="search-terms">🔍 Termos de busca: ${item.s}</div>
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

      areaBtn.addEventListener('click', () => toggle(areaBtn, areaContent));
      areaDiv.appendChild(areaBtn);
      areaDiv.appendChild(areaContent);
      content.appendChild(areaDiv);
    });

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
            <div class="sr-detail">${highlight(r.detail, lower)}</div>
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
