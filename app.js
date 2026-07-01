// app.js v2 — All features: progress, themes, search, filters, study mode, badges, export, time tracking, keyboard shortcuts
(function(){
const $=s=>document.querySelector(s);
const roadmap=$('#roadmap'),statsEl=$('#stats'),searchInput=$('#search'),searchResults=$('#search-results');
const SK='roadmap_progress',BK='roadmap_badges',NK='roadmap_notes',RK='roadmap_review';
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
// ── Drawer lateral (diálogo modal, Fase 3) — item/área/projeto/ferramentas abrem aqui ──
const drawer=$('#drawer'),scrim=$('#scrim'),dwPath=$('#drawer-path'),dwTitle=$('#drawer-title'),dwBody=$('#drawer-body'),dwClose=$('#drawer-close');
const FOCUSABLE='a[href],button:not([disabled]),textarea,input:not([disabled]),select,[tabindex]:not([tabindex="-1"])';
// Elemento que abriu o drawer, para restaurar o foco ao fechar (a11y WCAG 2.4.3)
let drawerTrigger=null;
function openDrawer(opts){
  drawerTrigger=document.activeElement;
  if(dwPath){dwPath.textContent=opts.path||'';dwPath.style.display=opts.path?'':'none';}
  if(dwTitle)dwTitle.textContent=opts.title||'';
  if(dwBody){dwBody.innerHTML=opts.html||'';if(opts.onMount)opts.onMount(dwBody);}
  if(drawer){drawer.setAttribute('aria-hidden','false');drawer.classList.add('open');}
  if(scrim)scrim.classList.add('open');
  document.body.classList.add('drawer-open');
  // Move o foco para dentro do diálogo: 1º focável do corpo, senão o botão fechar
  requestAnimationFrame(()=>{const f=(dwBody&&dwBody.querySelector(FOCUSABLE))||dwClose;if(f&&f.focus)f.focus();});
}
function closeDrawer(){
  if(!drawer||!drawer.classList.contains('open'))return;
  drawer.classList.remove('open');if(scrim)scrim.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
  document.body.classList.remove('drawer-open');
  if(dwBody)dwBody.innerHTML='';
  if(drawerTrigger&&drawerTrigger.focus)drawerTrigger.focus();  // restaura foco ao trigger
  drawerTrigger=null;
}
if(dwClose)dwClose.addEventListener('click',closeDrawer);
if(scrim)scrim.addEventListener('click',closeDrawer);
// Detalhe de área (objetivos/pré-requisitos) no drawer
function openAreaDrawer(area,levelName){
  let html='';
  if(area.prereq)html+=`<div class="area-prereq"><span class="prereq-label">📋 Pré-requisitos:</span> ${esc(area.prereq)}</div>`;
  if(area.objectives&&area.objectives.length)html+=`<div class="area-objectives"><div class="objectives-label">🎯 Ao final desta área, você será capaz de:</div><ul class="objectives-list">${area.objectives.map(o=>`<li>${esc(o)}</li>`).join('')}</ul></div>`;
  openDrawer({path:levelName,title:(area.displayName||area.name),html});
}

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

// ── One-time migration v3: area/topic names were corrected (accentuation, typos) which changes
// the name-based item IDs and badge keys; remap saved data so progress/notes/review/badges survive. ──
const RENAME_V3=[{"css":"green","oa":"🧠 Fundamentos de Computacao","na":"🧠 Fundamentos de Computação","tp":[["Bits, Hardware e Execução","Bits, Hardware e Execução"],["SO, Lógica Booleana e Linguagens","SO, Lógica Booleana e Linguagens"],["Compressão, Boot e Licenças","Compressão, Boot e Licenças"],["Pensamento Computacional","Pensamento Computacional"],["Como a Internet Funciona","Como a Internet Funciona"]]},{"css":"green","oa":"🐍 Logica de Programacao com Python","na":"🐍 Lógica de Programação com Python","tp":[["Setup e Primeiros Passos","Setup e Primeiros Passos"],["Strings","Strings"],["Controle de Fluxo","Controle de Fluxo"],["Estruturas de Dados Nativas","Estruturas de Dados Nativas"]]},{"css":"green","oa":"🐍 Logica de Programacao com Python — Funcoes, Modulos e Projetos","na":"🐍 Lógica de Programação com Python — Funções, Módulos e Projetos","tp":[["🚀 Visão geral: da lógica aos projetos reais","🚀 Visão geral: da lógica aos projetos reais"],["Funcoes","Funções"],["Arquivos, Exceções e Módulos","Arquivos, Exceções e Módulos"],["Scraping, Debugging e Boas Práticas","Scraping, Debugging e Boas Práticas"],["Projetos Praticos","Projetos Práticos"]]},{"css":"green","oa":"🗄️ Banco de Dados Introducao","na":"🗄️ Banco de Dados: Introdução","tp":[["Conceitos & Modelo Relacional","Conceitos & Modelo Relacional"],["SQL Básico: Consultas","SQL Básico: Consultas"],["SQL Básico: Modificação & Prática","SQL Básico: Modificação & Prática"]]},{"css":"green","oa":"📐 Matematica Fundamental","na":"📐 Matemática Fundamental","tp":[["Aritmética, Álgebra e Funções","Aritmética, Álgebra e Funções"],["Sequências, Logaritmos e Notação","Sequências, Logaritmos e Notação"],["Lógica, Conjuntos, Funções e Demonstrações","Lógica, Conjuntos, Funções e Demonstrações"],["Contagem, Grafos e Recorrências","Contagem, Grafos e Recorrências"],["Probabilidade Básica","Probabilidade Básica"]]},{"css":"green","oa":"📐 Matematica Fundamental — Estatistica e Calculo","na":"📐 Matemática Fundamental — Estatística e Cálculo","tp":[["Panorama de Estatística & Cálculo","Panorama de Estatística & Cálculo"],["Estatística Descritiva e Simulação","Estatística Descritiva e Simulação"],["Limites e Derivadas","Limites e Derivadas"],["Integrais e Aplicações","Aplicações do Cálculo (Derivadas e Integrais)"]]},{"css":"green","oa":"🌌 Fisica & Quimica p/ Engenharia","na":"🌌 Física & Química p/ Engenharia","tp":[["Mecanica Classica","Mecânica Clássica"],["Eletromagnetismo","Eletromagnetismo"],["Ondas, Optica e Termodinamica","Ondas, Óptica e Termodinâmica"],["Quimica p/ Engenharia","Química p/ Engenharia"],["Mecânica dos Sólidos e Fluidos","Mecânica dos Sólidos e Fluidos"]]},{"css":"green","oa":"🔌 Eletronica & Hardware","na":"🔌 Eletrônica & Hardware","tp":[["Grandezas, Lei de Ohm e Componentes","Grandezas, Lei de Ohm e Componentes"],["Eletricidade Basica","Eletricidade Básica"],["Eletronica Digital","Eletrônica Digital"],["Eletronica Analogica","Eletrônica Analógica"]]},{"css":"yellow","oa":"🐍 Python Intermediario & OOP","na":"🐍 Python Intermediário & OOP","tp":[["Classes, Herança e SOLID","Classes, Herança e SOLID"],["Protocolos, ABC e Testes OOP","Protocolos, ABC e Testes OOP"],["Generators, Concorrência e Metaprogramação","Generators, Concorrência e Metaprogramação"],["Packaging, Profiling e CLI","Packaging, Profiling e CLI"],["Comprehensions, Collections e itertools","Comprehensions, Collections e itertools"]]},{"css":"yellow","oa":"⚙️ C, C++ & Rust","na":"⚙️ C, C++ & Rust","tp":[["C: Ponteiros, Memória e Structs","C: Ponteiros, Memória e Structs"],["C: Preprocessador, Bits e Debugging","C: Preprocessador, Bits e Debugging"],["C++: OOP e Performance","C++: OOP e Performance"],["Rust: Seguranca sem Garbage Collector","Rust: Segurança sem Garbage Collector"]]},{"css":"yellow","oa":"☕ Java & Ecossistema JVM","na":"☕ Java & Ecossistema JVM","tp":[["Java: Sintaxe, OOP e Collections","Java: Sintaxe, OOP e Collections"],["Java: Generics, Streams e Concorrência","Java: Generics, Streams e Concorrência"],["Spring e Build Tools","Spring Framework: Boot, MVC, Data JPA, Security + Build (Maven/Gradle)"],["Ecossistema Java: Spring, Build, Deploy","JVM Avançada: Testing, Internals, Java Moderno e Deploy"]]},{"css":"yellow","oa":"🖥️ Sistemas Operacionais (Disciplina)","na":"🖥️ Sistemas Operacionais (Disciplina)","tp":[["Processos, Threads e Sincronização","Processos, Threads e Sincronização"],["Scheduling, IPC e Containers","Scheduling, IPC e Containers"],["Gerenciamento de Memoria","Gerenciamento de Memória"],["File Systems e I/O","File Systems e I/O"]]},{"css":"yellow","oa":"⚡ Concorrencia e Paralelismo","na":"⚡ Concorrência e Paralelismo","tp":[["Programacao Concorrente e Paralela","Programação Concorrente e Paralela"],["Async, Thread Safety e Padrões","Async, Thread Safety e Padrões"],["Lock-free, Actor Model e Debugging","Lock-free, Actor Model e Debugging"]]},{"css":"yellow","oa":"📖 Teoria da Computacao & Compiladores","na":"📖 Teoria da Computação & Compiladores","tp":[["Autômatos, Gramáticas e Turing","Autômatos, Gramáticas e Turing"],["Redução, NP e Decidibilidade","Redução, NP e Decidibilidade"],["Compiladores (Intro)","Compiladores (Intro)"]]},{"css":"yellow","oa":"🏗️ Engenharia de Software","na":"🏗️ Engenharia de Software","tp":[["SOLID e Design Patterns","SOLID e Design Patterns"],["Agile, Code Review e API Design","Agile, Code Review e API Design"],["Tipos de Teste: Unit, Integração e E2E","Tipos de Teste: Unit, Integração e E2E"],["Testes de Software","Testes de Software"],["Etica, LGPD e Impacto Social","Ética, LGPD e Impacto Social"]]},{"css":"yellow","oa":"📐 Matematica p/ ML","na":"📐 Matemática p/ ML","tp":[["Calculo Multivariavel","Cálculo Multivariável"],["Algebra Linear Avancada","Álgebra Linear Avançada"],["Probabilidade e Estatistica","Probabilidade e Estatística"],["Computacao Numerica e Erros","Computação Numérica e Erros"]]},{"css":"yellow","oa":"📐 Cálculo Avançado & Álgebra Linear","na":"📐 Cálculo Avançado & Álgebra Linear","tp":[["Cálculo II: Séries e Integrais Múltiplas","Cálculo Multivariável e Vetorial"],["Equações Diferenciais & Transformada de Laplace","Equações Diferenciais & Transformada de Laplace"],["Álgebra Linear","Álgebra Linear"]]},{"css":"yellow","oa":"🤖 Introducao a IA & ML","na":"🤖 Introdução a IA & ML","tp":[["Fundamentos de Dados para ML (NumPy/Pandas)","Fundamentos de Dados para ML (NumPy/Pandas)"],["ML Classico (teoria + scikit-learn)","ML Clássico (teoria + scikit-learn)"],["ML Aplicado & Automacao com IA","ML Aplicado & Automação com IA"]]},{"css":"yellow","oa":"🌐 Full-Stack","na":"🌐 Full-Stack","tp":[["Frontend: React + TypeScript","Frontend: React + TypeScript"],["JavaScript Avançado (base do front)","JavaScript Avançado (base do front)"],["Frontend moderno: tooling, dados e acessibilidade","Frontend moderno: tooling, dados e acessibilidade"],["Backend: APIs REST","Backend: APIs REST"],["APIs Avancadas: GraphQL, gRPC, Real-time","APIs Avançadas: GraphQL, gRPC, Real-time"]]},{"css":"yellow","oa":"📱 Desenvolvimento Mobile (Intro)","na":"📱 Desenvolvimento Mobile (Intro)","tp":[["React Native, Flutter e Conceitos","React Native, Flutter e Conceitos"],["PWA, Offline e Notificações","PWA, Offline e Notificações"],["Estado, APIs Nativas e Deploy","Estado, APIs Nativas e Deploy"],["Analytics, Monetização e App Store","Acessibilidade, Analytics, Monetização e App Store"]]},{"css":"yellow","oa":"🔧 DevOps & Infra","na":"🔧 DevOps & Infra","tp":[["Redes aplicadas a deploy","Redes aplicadas a deploy"],["Docker e Containers","Docker e Containers"],["CI/CD e Cloud","CI/CD e Cloud"],["Monitoramento e Observabilidade de Aplicacao","Monitoramento e Observabilidade de Aplicação"]]},{"css":"yellow","oa":"🔒 Seguranca & Ethical Hacking (Intro)","na":"🔒 Segurança & Ethical Hacking (Intro)","tp":[["Etica, Legalidade e Escopo","Ética, Legalidade e Escopo"],["CIA, OWASP e Autenticação","CIA, OWASP e Autenticação"],["Reconhecimento e OSINT Basico","Reconhecimento e OSINT Básico"],["Pratica: Primeiros Labs","Prática: Primeiros Labs"],["Social Engineering e Password Attacks","Social Engineering e Password Attacks"]]},{"css":"yellow","oa":"🔌 Embarcados, Hardware & Automacao","na":"🔌 Embarcados, Hardware & Automação","tp":[["Arduino","Arduino"],["ESP32, Raspberry Pi, IoT","ESP32, Raspberry Pi, IoT"],["Automacao Industrial Intro","Automação Industrial Intro"],["Sistemas de Tempo Real (RTOS)","Sistemas de Tempo Real (RTOS)"],["Barramentos, Memórias & Design de PCB","Barramentos, Memórias & Design de PCB"]]},{"css":"yellow","oa":"🎨 Computação Gráfica","na":"🎨 Computação Gráfica","tp":[["Pipeline, Transformações e Shaders","Pipeline, Transformações e Shaders"],["Ray Tracing, GPU e Matemática 3D","Ray Tracing, GPU e Matemática 3D"],["Three.js: Iluminação e Animação","Three.js: Iluminação e Animação"],["Prática: 3D no Navegador e Game Engines","Prática: Efeitos e Técnicas de Tempo Real"]]},{"css":"orange","oa":"🧬 Bioinformatica & Computacao Biologica","na":"🧬 Bioinformática & Computação Biológica","tp":[["DNA, Genes e Dogma Central","Nivelamento em Biologia: DNA, Genes e Dogma Central (pré-requisito, leitura rápida)"],["Evolução, Microbiologia e Filogenética","Nivelamento em Biologia: Evolução, Microbiologia e Filogenética (pré-requisito, leitura rápida)"],["Fundamentos de Bioinformatica","Fundamentos de Bioinformática"],["ML e IA em Biologia","ML e IA em Biologia"]]},{"css":"orange","oa":"🗄️ Banco de Dados Avancado","na":"🗄️ Banco de Dados Avançado","tp":[["PostgreSQL: Índices, Replicação e Backup","PostgreSQL: Índices, Replicação e Backup"],["PostgreSQL: Performance, JSONB e Segurança","PostgreSQL: Performance, JSONB e Segurança"],["Internals: WAL, MVCC e Query Planner","Internals: WAL, MVCC e Query Planner"],["NoSQL, NewSQL e Estratégias de Dados","NoSQL, NewSQL e Estratégias de Dados"]]},{"css":"orange","oa":"📊 Data Engineering","na":"📊 Data Engineering","tp":[["ETL, Spark e Data Lakes","Processamento distribuído: Spark e streaming"],["Pipelines, Streaming e Data Lakes","Orquestração, warehouses e otimização de pipelines"],["Governança, Data Mesh e Modelagem","Governança, Data Mesh e Modelagem"],["CDC, dbt e Contratos de Dados","CDC, dbt e Contratos de Dados"],["Visualização de Dados e BI","Visualização de Dados e BI"]]},{"css":"orange","oa":"🕵️ Ethical Hacking: Web & Redes","na":"🕵️ Ethical Hacking: Web & Redes","tp":[["SQLi, XSS e CSRF/SSRF","SQLi, XSS e CSRF/SSRF"],["Desserialização, XXE e API Hacking","Desserialização, XXE e API Hacking"],["Network Hacking","Network Hacking"],["Scanning Avancado e Vulnerability Assessment","Scanning Avançado e Vulnerability Assessment"],["Exploitation de Sistemas (Intro)","Exploitation de Sistemas (Intro)"],["Active Directory Hacking (Intro)","Active Directory Hacking (Intro)"]]},{"css":"orange","oa":"🛡️ DevSecOps & Seguranca","na":"🛡️ DevSecOps & Segurança","tp":[["SAST/DAST, Secrets e Containers","SAST/DAST, Secrets e Containers"],["Supply Chain, K8s e IaC Security","Supply Chain, K8s e IaC Security"],["Threat Modeling, OWASP e Runtime","Threat Modeling, OWASP e Runtime"],["Zero Trust, Compliance e Resposta a Incidentes","Zero Trust, Compliance e Resposta a Incidentes"]]},{"css":"orange","oa":"🔌 Robotica, IoT & Automacao Avancada","na":"🔌 Robótica, IoT & Automação Avançada","tp":[["ROS, Visao, Controle","ROS, Visão, Controle"],["IA aplicada a Robotica","IA aplicada à Robótica"],["Automacao Avancada & Industria 4.0","Automação Avançada & Indústria 4.0"]]},{"css":"orange","oa":"📈 Otimização & Pesquisa Operacional","na":"📈 Otimização & Pesquisa Operacional","tp":[["Otimização Matemática","Otimização Matemática"],["Pesquisa Operacional Aplicada","Pesquisa Operacional Aplicada"],["Metaheurísticas e Otimização Estocástica","Metaheurísticas e Otimização Aproximada"]]},{"css":"red","oa":"🚀 Sistemas Distribuidos","na":"🚀 Sistemas Distribuídos","tp":[["CAP, Tolerância a Falhas e gRPC","CAP, Tolerância a Falhas e gRPC"],["Bancos Distribuídos, Consenso e Observabilidade","Bancos Distribuídos, Consenso e Observabilidade"],["Relógios, CRDTs e Transações Distribuídas","Relógios, CRDTs e Transações Distribuídas"],["Prática de Sistemas Distribuídos","Prática de Sistemas Distribuídos"]]},{"css":"red","oa":"⚙️ MLOps & Producao","na":"⚙️ MLOps & Produção","tp":[["Tracking, Serving e Monitoramento","Tracking, Serving e Monitoramento"],["CI/CD de ML, Versionamento e Registry","CI/CD de ML, Versionamento e Registry"],["Online Learning e Orquestração","Online Learning e Orquestração"],["LLMOps, ML Distribuído e Custos","LLMOps, ML Distribuído e Custos"],["Infra de GPU e Testes de ML","Infra de GPU e Testes de ML"]]},{"css":"red","oa":"🛡️ Seguranca Defensiva, Forense Avancada & Blue Team","na":"🛡️ Segurança Defensiva, Forense Avançada & Blue Team","tp":[["Seguranca Defensiva","Segurança Defensiva"],["Forense de Memoria (RAM)","Forense de Memória (RAM)"],["Forense de Rede e Logs","Forense de Rede e Logs"],["Forense Mobile e IoT","Forense Mobile e IoT"]]},{"css":"red","oa":"🛡️ Seguranca Defensiva, Forense Avancada & Blue Team — Exploitation, SOC e Purple Team","na":"🛡️ Segurança Defensiva, Forense Avançada & Blue Team — Exploitation, SOC e Purple Team","tp":[["⚔️ Exploitation, SOC & Purple Team: Panorama","⚔️ Exploitation, SOC & Purple Team: Panorama"],["Linux e Windows Exploitation","Linux e Windows Exploitation"],["Post-Exploitation e Reporting","Post-Exploitation e Reporting"],["SOC, Threat Intel e Detection Engineering","SOC, Threat Intel e Detection Engineering"],["SIEM, Deception e Purple Team","SIEM, Deception e Purple Team"]]},{"css":"blue","oa":"📝 Escrita e Metodologia Cientifica","na":"📝 Escrita e Metodologia Científica","tp":[["Metodologia Cientifica & Escrita Academica","Metodologia Científica & Escrita Acadêmica"],["Escrita Academica em Computacao","Escrita Acadêmica em Computação"],["Apresentacoes e Comunicacao Cientifica","Apresentações e Comunicação Científica"],["Leitura de Papers e Literature Review","Leitura de Papers e Literature Review"]]},{"css":"blue","oa":"🔬 Iniciacao Cientifica (IC)","na":"🔬 Iniciação Científica (IC)","tp":[["Começando: Orientador, Proposta, Ética e Laboratório","Começando: Orientador, Proposta, Ética e Laboratório"],["Durante a IC: Dia a Dia da Pesquisa","Durante a IC: Dia a Dia da Pesquisa"],["Bolsas, Editais e Oportunidades na IC","Bolsas, Editais e Oportunidades na IC"]]},{"css":"blue","oa":"🏫 Mestrado","na":"🏫 Mestrado","tp":[["Mestrado Academico em Computacao","Mestrado Acadêmico em Computação"],["Vida no Mestrado: Pesquisa e Rotina","Vida no Mestrado: Pesquisa e Rotina"],["Publicar no Mestrado","Publicar no Mestrado"]]},{"css":"blue","oa":"🧑‍🎓 Doutorado","na":"🧑‍🎓 Doutorado","tp":[["O que é o Doutorado: Qualificação e Bolsas","O que é o Doutorado: Qualificação e Bolsas"],["Qualifying, Grant Writing e Carreira","Qualifying, Grant Writing e Carreira"],["Vida no Doutorado: Da Pesquisa a Tese","Vida no Doutorado: Da Pesquisa à Tese"],["Carreira Academica e Internacionalizacao","Carreira Acadêmica e Internacionalização"]]},{"css":"blue","oa":"🛠️ Ferramentas e Recursos Academicos","na":"🛠️ Ferramentas e Recursos Acadêmicos","tp":[["Escrita e Ferramentas de Texto","Escrita e Ferramentas de Texto"],["Publicação e Referências","Publicação e Referências"],["Reprodutibilidade e Ferramentas de Pesquisa","Reprodutibilidade e Ferramentas de Pesquisa"]]},{"css":"purple","oa":"📚 Aprendizado & Preparacao de Carreira","na":"📚 Aprendizado & Preparação de Carreira","tp":[["Metodos de Estudo Eficaz","Métodos de Estudo Eficaz"],["Portfólio, Entrevistas e Primeiro Emprego","Portfólio, Entrevistas e Primeiro Emprego"],["Currículo, Negociação e Networking","Currículo, Negociação e Networking"]]},{"css":"purple","oa":"🚀 Trilhas, Crescimento & Transicoes","na":"🚀 Trilhas, Crescimento & Transições","tp":[["Carreira em Cyber Security e Forense","Carreira em Cyber Security e Forense"],["Crescimento Profissional: Junior a Senior+","Crescimento Profissional: Junior a Senior+"],["Transicoes de Carreira em Tech","Transições de Carreira em Tech"]]},{"css":"purple","oa":"🤝 Lideranca Tecnica","na":"🤝 Liderança Técnica","tp":[["Tech Lead & Staff Engineer","Tech Lead & Staff Engineer"],["Gestao de Projetos e Processos","Gestão de Projetos e Processos"],["Gestao de Crise e Comunicacao","Gestão de Crise e Comunicação"]]}];
(function migrateItemIds_v3(){
  try{
    if(localStorage.getItem('roadmap_id_migrated_v3'))return;
    const strip=s=>s.replace(/^[^\w\s]+\s*/u,'').trim();
    const remap={},badgeRemap={};
    RENAME_V3.forEach(R=>{
      const lvl=ROADMAP.find(l=>l.css===R.css);if(!lvl)return;
      const area=lvl.areas.find(a=>a.name===R.na);if(!area)return;
      if(R.oa!==R.na)badgeRemap[strip(R.oa)]=strip(R.na);
      R.tp.forEach(([ot,nt])=>{
        const t=area.topics.find(x=>x.name===nt);if(!t)return;
        t.items.forEach((it,idx)=>{const o=R.css+'::'+R.oa+'::'+ot+'::'+idx,n=R.css+'::'+R.na+'::'+nt+'::'+idx;if(o!==n)remap[o]=n;});
      });
    });
    [SK,NK,RK].forEach(K=>{let obj;try{obj=JSON.parse(localStorage.getItem(K))}catch(e){return}if(!obj||typeof obj!=='object'||Array.isArray(obj))return;const next={};Object.keys(obj).forEach(k=>{if((remap[k]||k)===k)next[k]=obj[k]});Object.keys(obj).forEach(k=>{const nk=remap[k];if(nk&&nk!==k&&!(nk in next))next[nk]=obj[k]});localStorage.setItem(K,JSON.stringify(next));});
    try{let b=JSON.parse(localStorage.getItem(BK));if(b&&typeof b==='object'&&!Array.isArray(b)){const nb={};Object.keys(b).forEach(k=>{if((badgeRemap[k]||k)===k)nb[k]=b[k]});Object.keys(b).forEach(k=>{const nk=badgeRemap[k];if(nk&&nk!==k&&!(nk in nb))nb[nk]=b[k]});localStorage.setItem(BK,JSON.stringify(nb));}}catch(e){}
    localStorage.setItem('roadmap_id_migrated_v3','1');
  }catch(e){}
})();

// ── One-time migration v4: re-auditoria de conteúdo + arquitetura (áreas movidas de nível,
// itens reordenados/fundidos, novas áreas HCI/UX + capstones). Remapeia progresso/notas/revisão/badges
// dos IDs antigos para os novos; IDs cujo título 'w' mudou/foram removidos não migram (aceitável). ──
const REMAP_V4={"green::💻 Sistemas Operacionais & Terminal::Serviços, Rede, Logs e Automação::2":"green::💻 Sistemas Operacionais & Terminal::Serviços, Rede, Logs e Automação::3","green::💻 Sistemas Operacionais & Terminal::Serviços, Rede, Logs e Automação::3":"green::💻 Sistemas Operacionais & Terminal::Serviços, Rede, Logs e Automação::4","green::💻 Sistemas Operacionais & Terminal::Serviços, Rede, Logs e Automação::4":"green::💻 Sistemas Operacionais & Terminal::Serviços, Rede, Logs e Automação::5","green::💻 Sistemas Operacionais & Terminal::Serviços, Rede, Logs e Automação::5":"green::💻 Sistemas Operacionais & Terminal::Serviços, Rede, Logs e Automação::6","green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::2":"green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::3","green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::3":"green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::4","green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::4":"green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::5","green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::5":"green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::6","green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::6":"green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::8","green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::7":"green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::9","green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::8":"green::🌐 Web, Git & Ferramentas::JavaScript: Sintaxe, DOM e Fetch::10","green::📐 Matemática Fundamental::Aritmética, Álgebra e Funções::0":"green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::0","green::📐 Matemática Fundamental::Aritmética, Álgebra e Funções::1":"green::📐 Matemática Fundamental::Aritmética, Álgebra e Funções::0","green::📐 Matemática Fundamental::Aritmética, Álgebra e Funções::2":"green::📐 Matemática Fundamental::Aritmética, Álgebra e Funções::1","green::📐 Matemática Fundamental::Aritmética, Álgebra e Funções::3":"green::📐 Matemática Fundamental::Aritmética, Álgebra e Funções::2","green::📐 Matemática Fundamental::Aritmética, Álgebra e Funções::4":"green::📐 Matemática Fundamental::Aritmética, Álgebra e Funções::3","green::📐 Matemática Fundamental::Aritmética, Álgebra e Funções::5":"green::📐 Matemática Fundamental::Aritmética, Álgebra e Funções::4","green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::0":"green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::1","green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::1":"green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::2","green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::2":"green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::3","green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::3":"green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::4","green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::4":"green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::5","green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::5":"green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::6","green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::6":"green::📐 Matemática Fundamental::Lógica, Conjuntos, Funções e Demonstrações::7","green::📐 Matemática Fundamental — Estatística e Cálculo::Panorama de Estatística & Cálculo::1":"green::📐 Matemática Fundamental — Estatística e Cálculo::Panorama de Cálculo & Estatística::3","green::📐 Matemática Fundamental — Estatística e Cálculo::Panorama de Estatística & Cálculo::2":"green::📐 Matemática Fundamental — Estatística e Cálculo::Panorama de Cálculo & Estatística::1","green::📐 Matemática Fundamental — Estatística e Cálculo::Panorama de Estatística & Cálculo::3":"green::📐 Matemática Fundamental — Estatística e Cálculo::Panorama de Cálculo & Estatística::2","yellow::🐍 Python Intermediário & OOP::Generators, Concorrência e Metaprogramação::1":"yellow::🐍 Python Intermediário & OOP::Generators, Concorrência e Metaprogramação (avançado)::1","yellow::🐍 Python Intermediário & OOP::Generators, Concorrência e Metaprogramação::2":"yellow::🐍 Python Intermediário & OOP::Generators, Concorrência e Metaprogramação (avançado)::2","yellow::🐍 Python Intermediário & OOP::Generators, Concorrência e Metaprogramação::3":"yellow::🐍 Python Intermediário & OOP::Generators, Concorrência e Metaprogramação (avançado)::3","yellow::🐍 Python Intermediário & OOP::Generators, Concorrência e Metaprogramação::5":"yellow::🐍 Python Intermediário & OOP::Generators, Concorrência e Metaprogramação (avançado)::5","yellow::🐹 Go (Golang)::Go: Linguagem e Concorrência::3":"yellow::🐹 Go (Golang)::Go: Linguagem e Concorrência::4","yellow::🐹 Go (Golang)::Go: Linguagem e Concorrência::4":"yellow::🐹 Go (Golang)::Go: Linguagem e Concorrência::5","yellow::🐹 Go (Golang)::Go: Linguagem e Concorrência::5":"yellow::🐹 Go (Golang)::Go: Linguagem e Concorrência::6","yellow::🐹 Go (Golang)::Go: Linguagem e Concorrência::6":"yellow::🐹 Go (Golang)::Go: Linguagem e Concorrência::7","yellow::🐹 Go (Golang)::Go: Linguagem e Concorrência::7":"yellow::🐹 Go (Golang)::Go: Linguagem e Concorrência::8","yellow::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::0":"orange::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::0","yellow::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::1":"orange::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::1","yellow::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::2":"orange::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::2","yellow::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::3":"orange::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::3","yellow::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::4":"orange::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::4","yellow::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::5":"orange::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::5","yellow::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::6":"orange::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::6","yellow::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::7":"orange::🖥️ Arquitetura de Computadores::Conjunto de Instruções e Organização da CPU::7","yellow::🖥️ Arquitetura de Computadores::Pipeline e Hazards::0":"orange::🖥️ Arquitetura de Computadores::Pipeline e Hazards::0","yellow::🖥️ Arquitetura de Computadores::Pipeline e Hazards::1":"orange::🖥️ Arquitetura de Computadores::Pipeline e Hazards::1","yellow::🖥️ Arquitetura de Computadores::Pipeline e Hazards::2":"orange::🖥️ Arquitetura de Computadores::Pipeline e Hazards::2","yellow::🖥️ Arquitetura de Computadores::Pipeline e Hazards::3":"orange::🖥️ Arquitetura de Computadores::Pipeline e Hazards::3","yellow::🖥️ Arquitetura de Computadores::Cache, Memória Virtual e Branch Prediction::0":"orange::🖥️ Arquitetura de Computadores::Cache, Memória Virtual e Branch Prediction::0","yellow::🖥️ Arquitetura de Computadores::Cache, Memória Virtual e Branch Prediction::1":"orange::🖥️ Arquitetura de Computadores::Cache, Memória Virtual e Branch Prediction::1","yellow::🖥️ Arquitetura de Computadores::Cache, Memória Virtual e Branch Prediction::2":"orange::🖥️ Arquitetura de Computadores::Cache, Memória Virtual e Branch Prediction::2","yellow::🖥️ Arquitetura de Computadores::Cache, Memória Virtual e Branch Prediction::3":"orange::🖥️ Arquitetura de Computadores::Cache, Memória Virtual e Branch Prediction::3","yellow::🖥️ Arquitetura de Computadores::Cache, Memória Virtual e Branch Prediction::4":"orange::🖥️ Arquitetura de Computadores::Cache, Memória Virtual e Branch Prediction::4","yellow::🖥️ Arquitetura de Computadores::GPU, Multicore e DMA::0":"orange::🖥️ Arquitetura de Computadores::GPU, Multicore e DMA::0","yellow::🖥️ Arquitetura de Computadores::GPU, Multicore e DMA::1":"orange::🖥️ Arquitetura de Computadores::GPU, Multicore e DMA::1","yellow::🖥️ Arquitetura de Computadores::GPU, Multicore e DMA::2":"orange::🖥️ Arquitetura de Computadores::GPU, Multicore e DMA::2","yellow::🖥️ Arquitetura de Computadores::GPU, Multicore e DMA::3":"orange::🖥️ Arquitetura de Computadores::GPU, Multicore e DMA::3","yellow::🖥️ Arquitetura de Computadores::GPU, Multicore e DMA::4":"orange::🖥️ Arquitetura de Computadores::GPU, Multicore e DMA::4","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::0":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::0","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::1":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::1","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::2":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::2","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::3":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::3","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::4":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::4","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::5":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Fundamentos de Design Digital::5","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Verilog & VHDL: Descrevendo Hardware::1":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Verilog & VHDL: Descrevendo Hardware::1","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Verilog & VHDL: Descrevendo Hardware::2":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Verilog & VHDL: Descrevendo Hardware::2","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Verilog & VHDL: Descrevendo Hardware::3":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Verilog & VHDL: Descrevendo Hardware::3","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Verilog & VHDL: Descrevendo Hardware::4":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Verilog & VHDL: Descrevendo Hardware::4","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Verilog & VHDL: Descrevendo Hardware::5":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Verilog & VHDL: Descrevendo Hardware::5","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::FPGA: Síntese e Implementação::1":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::FPGA: Síntese e Implementação::1","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::FPGA: Síntese e Implementação::2":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::FPGA: Síntese e Implementação::2","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::FPGA: Síntese e Implementação::3":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::FPGA: Síntese e Implementação::3","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::FPGA: Síntese e Implementação::4":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::FPGA: Síntese e Implementação::4","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::FPGA: Síntese e Implementação::5":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::FPGA: Síntese e Implementação::5","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Projetando uma CPU Simples::1":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Projetando uma CPU Simples::1","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Projetando uma CPU Simples::2":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Projetando uma CPU Simples::2","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Projetando uma CPU Simples::3":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Projetando uma CPU Simples::3","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Projetando uma CPU Simples::4":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Projetando uma CPU Simples::4","yellow::🔲 Design Digital & HDL (Verilog/VHDL)::Projetando uma CPU Simples::5":"orange::🔲 Design Digital & HDL (Verilog/VHDL)::Projetando uma CPU Simples::5","yellow::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::0":"orange::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::0","yellow::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::1":"orange::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::1","yellow::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::2":"orange::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::2","yellow::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::3":"orange::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::3","yellow::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::4":"orange::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::4","yellow::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::5":"orange::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::5","yellow::📖 Teoria da Computação & Compiladores::Autômatos, Gramáticas e Turing::6":"orange::📖 Teoria da Computação & Compiladores::Redução, NP e Decidibilidade::0","yellow::📖 Teoria da Computação & Compiladores::Redução, NP e Decidibilidade::0":"orange::📖 Teoria da Computação & Compiladores::Redução, NP e Decidibilidade::1","yellow::📖 Teoria da Computação & Compiladores::Redução, NP e Decidibilidade::1":"orange::📖 Teoria da Computação & Compiladores::Redução, NP e Decidibilidade::2","yellow::📖 Teoria da Computação & Compiladores::Redução, NP e Decidibilidade::2":"orange::📖 Teoria da Computação & Compiladores::Redução, NP e Decidibilidade::3","yellow::📖 Teoria da Computação & Compiladores::Redução, NP e Decidibilidade::3":"orange::📖 Teoria da Computação & Compiladores::Redução, NP e Decidibilidade::4","yellow::📖 Teoria da Computação & Compiladores::Redução, NP e Decidibilidade::4":"orange::📖 Teoria da Computação & Compiladores::Redução, NP e Decidibilidade::5","yellow::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::0":"orange::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::0","yellow::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::1":"orange::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::1","yellow::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::2":"orange::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::2","yellow::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::3":"orange::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::3","yellow::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::4":"orange::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::4","yellow::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::5":"orange::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::5","yellow::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::6":"orange::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::6","yellow::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::7":"orange::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::7","yellow::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::8":"orange::📖 Teoria da Computação & Compiladores::Compiladores (Intro)::8","yellow::🏗️ Engenharia de Software::SOLID e Design Patterns::3":"yellow::🏗️ Engenharia de Software::SOLID e Design Patterns::4","yellow::🏗️ Engenharia de Software::SOLID e Design Patterns::4":"yellow::🏗️ Engenharia de Software::SOLID e Design Patterns::5","yellow::🏗️ Engenharia de Software::SOLID e Design Patterns::5":"yellow::🏗️ Engenharia de Software::SOLID e Design Patterns::6","yellow::🏗️ Engenharia de Software::Tipos de Teste: Unit, Integração e E2E::0":"yellow::🏗️ Engenharia de Software::Fundamentos de Testes: Unit, Integração e E2E::0","yellow::🏗️ Engenharia de Software::Tipos de Teste: Unit, Integração e E2E::1":"yellow::🏗️ Engenharia de Software::Fundamentos de Testes: Unit, Integração e E2E::1","yellow::🏗️ Engenharia de Software::Tipos de Teste: Unit, Integração e E2E::2":"yellow::🏗️ Engenharia de Software::Fundamentos de Testes: Unit, Integração e E2E::2","yellow::🏗️ Engenharia de Software::Tipos de Teste: Unit, Integração e E2E::3":"yellow::🏗️ Engenharia de Software::Fundamentos de Testes: Unit, Integração e E2E::3","yellow::🏗️ Engenharia de Software::Tipos de Teste: Unit, Integração e E2E::4":"yellow::🏗️ Engenharia de Software::Fundamentos de Testes: Unit, Integração e E2E::4","yellow::🏗️ Engenharia de Software::Testes de Software::0":"yellow::🏗️ Engenharia de Software::Técnicas Avançadas de Teste::0","yellow::🏗️ Engenharia de Software::Testes de Software::1":"yellow::🏗️ Engenharia de Software::Técnicas Avançadas de Teste::1","yellow::🏗️ Engenharia de Software::Testes de Software::6":"yellow::🏗️ Engenharia de Software::Técnicas Avançadas de Teste::4","yellow::📐 Cálculo Avançado & Álgebra Linear::Cálculo Multivariável e Vetorial::3":"yellow::📐 Cálculo Avançado & Álgebra Linear::Cálculo Multivariável e Vetorial::4","yellow::📐 Cálculo Avançado & Álgebra Linear::Cálculo Multivariável e Vetorial::4":"yellow::📐 Cálculo Avançado & Álgebra Linear::Cálculo Multivariável e Vetorial::3","yellow::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::0":"orange::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::0","yellow::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::1":"orange::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::1","yellow::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::2":"orange::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::2","yellow::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::3":"orange::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::3","yellow::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::4":"orange::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::4","yellow::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::5":"orange::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::5","yellow::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::6":"orange::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::6","yellow::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::7":"orange::📡 Sinais e Sistemas::Sinais, Transformadas e Amostragem::7","yellow::📡 Sinais e Sistemas::Filtros Digitais e Espectrograma::0":"orange::📡 Sinais e Sistemas::Filtros Digitais e Espectrograma::0","yellow::📡 Sinais e Sistemas::Filtros Digitais e Espectrograma::1":"orange::📡 Sinais e Sistemas::Filtros Digitais e Espectrograma::1","yellow::📡 Sinais e Sistemas::Filtros Digitais e Espectrograma::2":"orange::📡 Sinais e Sistemas::Filtros Digitais e Espectrograma::2","yellow::📡 Sinais e Sistemas::Filtros Digitais e Espectrograma::3":"orange::📡 Sinais e Sistemas::Filtros Digitais e Espectrograma::3","yellow::📡 Sinais e Sistemas::Filtros Digitais e Espectrograma::4":"orange::📡 Sinais e Sistemas::Filtros Digitais e Espectrograma::4","yellow::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::0":"orange::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::0","yellow::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::1":"orange::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::1","yellow::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::2":"orange::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::2","yellow::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::3":"orange::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::3","yellow::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::4":"orange::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::4","yellow::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::5":"orange::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::5","yellow::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::6":"orange::📡 Sinais e Sistemas::Processamento Digital de Sinais (DSP)::6","yellow::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::0":"orange::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::0","yellow::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::1":"orange::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::1","yellow::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::2":"orange::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::2","yellow::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::3":"orange::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::3","yellow::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::4":"orange::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::4","yellow::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::5":"orange::📡 Sinais e Sistemas::Programação de Áudio e DSP Aplicado::5","yellow::🌐 Full-Stack::Backend: APIs REST::5":"yellow::🌐 Full-Stack::Backend: APIs REST::6","yellow::🌐 Full-Stack::Backend: APIs REST::6":"yellow::🌐 Full-Stack::Backend: APIs REST::7","yellow::🔌 Embarcados, Hardware & Automação::ESP32, Raspberry Pi, IoT::3":"yellow::🔌 Embarcados, Hardware & Automação::ESP32, Raspberry Pi, IoT::4","yellow::🔌 Embarcados, Hardware & Automação::ESP32, Raspberry Pi, IoT::4":"yellow::🔌 Embarcados, Hardware & Automação::ESP32, Raspberry Pi, IoT::5","yellow::🔌 Embarcados, Hardware & Automação::ESP32, Raspberry Pi, IoT::5":"yellow::🔌 Embarcados, Hardware & Automação::ESP32, Raspberry Pi, IoT::6","yellow::🔌 Embarcados, Hardware & Automação::ESP32, Raspberry Pi, IoT::6":"yellow::🔌 Embarcados, Hardware & Automação::ESP32, Raspberry Pi, IoT::7","yellow::🎨 Computação Gráfica::Ray Tracing, GPU e Matemática 3D::1":"yellow::🎨 Computação Gráfica::Ray Tracing, GPU Computing e Matemática 3D::1","yellow::🎨 Computação Gráfica::Three.js: Iluminação e Animação::1":"yellow::🎨 Computação Gráfica::Three.js: Iluminação e Animação::2","yellow::🎨 Computação Gráfica::Three.js: Iluminação e Animação::2":"yellow::🎨 Computação Gráfica::Three.js: Iluminação e Animação::3","yellow::🎨 Computação Gráfica::Three.js: Iluminação e Animação::3":"yellow::🎨 Computação Gráfica::Three.js: Iluminação e Animação::4","yellow::📊 R para Estatística e Dados::R Essencial e Tidyverse::3":"yellow::📊 R para Estatística e Dados::R Essencial e Tidyverse::4","yellow::📊 R para Estatística e Dados::R Essencial e Tidyverse::4":"yellow::📊 R para Estatística e Dados::R Essencial e Tidyverse::5","orange::🧠 Deep Learning::RNNs e Modelos Generativos::2":"orange::🧠 Deep Learning::RNNs e Modelos Generativos::3","orange::🧠 Deep Learning::RNNs e Modelos Generativos::3":"orange::🧠 Deep Learning::RNNs e Modelos Generativos::4","orange::🧠 Deep Learning::Regularização e Treinamento Eficiente::1":"orange::🧠 Deep Learning::Transformers e Attention::5","orange::🧠 Deep Learning::Regularização e Treinamento Eficiente::2":"orange::🧠 Deep Learning::Regularização e Treinamento Eficiente::1","orange::🧠 Deep Learning::Regularização e Treinamento Eficiente::3":"orange::🧠 Deep Learning::RNNs e Modelos Generativos::2","orange::🧠 Deep Learning::Regularização e Treinamento Eficiente::4":"orange::🧠 Deep Learning::Redes Neurais, PyTorch e CNNs::8","orange::🤖 AI Engineering::RAG, Embeddings e Retrieval::0":"orange::🤖 AI Engineering::RAG, Embeddings e Retrieval::1","orange::🤖 AI Engineering::RAG, Embeddings e Retrieval::1":"orange::🤖 AI Engineering::RAG, Embeddings e Retrieval::2","orange::🤖 AI Engineering::RAG, Embeddings e Retrieval::2":"orange::🤖 AI Engineering::RAG, Embeddings e Retrieval::3","orange::🤖 AI Engineering::RAG, Embeddings e Retrieval::3":"orange::🤖 AI Engineering::RAG, Embeddings e Retrieval::4","orange::🤖 AI Engineering::RAG, Embeddings e Retrieval::4":"orange::🤖 AI Engineering::RAG, Embeddings e Retrieval::5","orange::🧬 Bioinformática & Computação Biológica::Fundamentos de Bioinformática::4":"orange::🧬 Bioinformática & Computação Biológica::Fundamentos de Bioinformática::5","orange::📊 Data Engineering::Governança, Data Mesh e Modelagem::3":"orange::📊 Data Engineering::Governança, Data Mesh e Modelagem::4","orange::📊 Data Engineering::Governança, Data Mesh e Modelagem::4":"orange::📊 Data Engineering::Governança, Data Mesh e Modelagem::3","orange::🔍 Forense Digital & Cloud Security::Aquisição e Análise de Evidências::5":"orange::🔍 Forense Digital & Cloud Security::Forense de Rede, Email, Navegador e Memória::0","orange::🔍 Forense Digital & Cloud Security::Aquisição e Análise de Evidências::6":"orange::🔍 Forense Digital & Cloud Security::Forense de Rede, Email, Navegador e Memória::1","orange::🔍 Forense Digital & Cloud Security::Aquisição e Análise de Evidências::7":"orange::🔍 Forense Digital & Cloud Security::Forense de Rede, Email, Navegador e Memória::3","orange::🥽 AR/VR/XR & Computação Espacial::Interação, Locomoção e UI 3D::0":"orange::🥽 AR/VR/XR & Computação Espacial::Interação, Locomoção e UI 3D::2","orange::🥽 AR/VR/XR & Computação Espacial::Interação, Locomoção e UI 3D::1":"orange::🥽 AR/VR/XR & Computação Espacial::Interação, Locomoção e UI 3D::3","orange::🥽 AR/VR/XR & Computação Espacial::Interação, Locomoção e UI 3D::2":"orange::🥽 AR/VR/XR & Computação Espacial::Interação, Locomoção e UI 3D::4","orange::🥽 AR/VR/XR & Computação Espacial::Interação, Locomoção e UI 3D::3":"orange::🥽 AR/VR/XR & Computação Espacial::Interação, Locomoção e UI 3D::0","orange::🥽 AR/VR/XR & Computação Espacial::Interação, Locomoção e UI 3D::4":"orange::🥽 AR/VR/XR & Computação Espacial::Interação, Locomoção e UI 3D::1","orange::🎛️ Sistemas de Controle::Controladores PID e Projeto::4":"orange::🎛️ Sistemas de Controle::Controladores PID e Projeto::5","orange::🎛️ Sistemas de Controle::Controladores PID e Projeto::5":"orange::🎛️ Sistemas de Controle::Controladores PID e Projeto::6","orange::🎮 Game Design (Dev Avançado)::Sistemas de Jogo na Prática::3":"orange::🎮 Game Design (Dev Avançado)::Sistemas de Jogo na Prática::4","orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::1":"orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::2","orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::2":"orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::3","orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::3":"orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::4","orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::4":"orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::5","orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::5":"orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::6","orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::6":"orange::🎮 Game Design (Dev Avançado)::Backend e Serviços Online de Jogos::7","orange::💬 NLP & Processamento de Linguagem Natural::Aplicações e Produção de NLP::1":"orange::💬 NLP & Processamento de Linguagem Natural::Aplicações e Produção de NLP::3","red::🛡️ Segurança Defensiva, Forense Avançada & Blue Team — Exploitation, SOC e Purple Team::Post-Exploitation e Reporting::3":"red::🛡️ Segurança Defensiva, Forense Avançada & Blue Team — Exploitation, SOC e Purple Team::Post-Exploitation e Reporting::4","blue::📝 Escrita e Metodologia Científica::Leitura de Papers e Literature Review::4":"blue::📝 Escrita e Metodologia Científica::Leitura de Papers e Literature Review::3","blue::🏫 Mestrado::Mestrado Acadêmico em Computação::8":"blue::🏫 Mestrado::Mestrado Acadêmico em Computação::7","blue::🛠️ Ferramentas e Recursos Acadêmicos::Publicação e Referências::0":"blue::🛠️ Ferramentas e Recursos Acadêmicos::Descoberta, Financiamento e Publicação::1","blue::🛠️ Ferramentas e Recursos Acadêmicos::Publicação e Referências::1":"blue::🛠️ Ferramentas e Recursos Acadêmicos::Descoberta, Financiamento e Publicação::2","blue::🛠️ Ferramentas e Recursos Acadêmicos::Publicação e Referências::3":"blue::🛠️ Ferramentas e Recursos Acadêmicos::Descoberta, Financiamento e Publicação::3","purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::0":"purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::1","purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::1":"purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::2","purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::2":"purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::3","purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::3":"purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::4","purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::4":"purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::5","purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::5":"purple::📚 Aprendizado & Preparação de Carreira::Portfólio, Entrevistas e Primeiro Emprego::0","purple::🚀 Trilhas, Crescimento & Transições::Carreira em Cyber Security e Forense::7":"purple::🚀 Trilhas, Crescimento & Transições::Carreira em Cyber Security e Forense::8","purple::🚀 Trilhas, Crescimento & Transições::Carreira em Cyber Security e Forense::8":"purple::🚀 Trilhas, Crescimento & Transições::Carreira em Cyber Security e Forense::7","purple::🚀 Trilhas, Crescimento & Transições::Crescimento Profissional: Junior a Senior+::2":"purple::🚀 Trilhas, Crescimento & Transições::Crescimento Profissional: Junior a Senior+::3","purple::🚀 Trilhas, Crescimento & Transições::Crescimento Profissional: Junior a Senior+::3":"purple::🚀 Trilhas, Crescimento & Transições::Crescimento Profissional: Junior a Senior+::4","purple::🚀 Trilhas, Crescimento & Transições::Crescimento Profissional: Junior a Senior+::4":"purple::🚀 Trilhas, Crescimento & Transições::Crescimento Profissional: Junior a Senior+::5","purple::🚀 Trilhas, Crescimento & Transições::Crescimento Profissional: Junior a Senior+::5":"purple::🚀 Trilhas, Crescimento & Transições::Crescimento Profissional: Junior a Senior+::6","purple::👥 Liderança & Gestão de Pessoas::Engineering Management e Métricas::0":"purple::👥 Liderança & Gestão de Pessoas::Engineering Management, Produto e Métricas::0","purple::👥 Liderança & Gestão de Pessoas::Engineering Management e Métricas::3":"purple::👥 Liderança & Gestão de Pessoas::Engineering Management, Produto e Métricas::3","purple::👥 Liderança & Gestão de Pessoas::1:1s, Feedback e Desenvolvimento::3":"purple::👥 Liderança & Gestão de Pessoas::1:1s, Feedback e Desenvolvimento::4","purple::👥 Liderança & Gestão de Pessoas::1:1s, Feedback e Desenvolvimento::4":"purple::👥 Liderança & Gestão de Pessoas::1:1s, Feedback e Desenvolvimento::5","purple::👥 Liderança & Gestão de Pessoas::1:1s, Feedback e Desenvolvimento::5":"purple::👥 Liderança & Gestão de Pessoas::1:1s, Feedback e Desenvolvimento::6","purple::📊 Produto, Estratégia & Negócio::Métricas, OKRs e Roadmap::6":"purple::📊 Produto, Estratégia & Negócio::Métricas, OKRs e Roadmap::5"};
const BADGE_V4={};
(function migrateItemIds_v4(){
  try{
    if(localStorage.getItem('roadmap_id_migrated_v4'))return;
    [SK,NK,RK].forEach(K=>{let obj;try{obj=JSON.parse(localStorage.getItem(K))}catch(e){return}if(!obj||typeof obj!=='object'||Array.isArray(obj))return;const next={};Object.keys(obj).forEach(k=>{if((REMAP_V4[k]||k)===k)next[k]=obj[k]});Object.keys(obj).forEach(k=>{const nk=REMAP_V4[k];if(nk&&nk!==k&&!(nk in next))next[nk]=obj[k]});localStorage.setItem(K,JSON.stringify(next));});
    try{let b=JSON.parse(localStorage.getItem(BK));if(b&&typeof b==='object'&&!Array.isArray(b)){const nb={};Object.keys(b).forEach(k=>{if((BADGE_V4[k]||k)===k)nb[k]=b[k]});Object.keys(b).forEach(k=>{const nk=BADGE_V4[k];if(nk&&nk!==k&&!(nk in nb))nb[nk]=b[k]});localStorage.setItem(BK,JSON.stringify(nb));}}catch(e){}
    localStorage.setItem('roadmap_id_migrated_v4','1');
  }catch(e){}
})();

// App dark-only (revamp): tema claro removido por completo — sem toggleTheme/initTheme/roadmap_theme.

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

// Fase 2: progresso pintado nos hooks da casca nova (sidebar) — #prog-ring/#prog-headline/#prog-sub.
const progRing=$('#prog-ring'),progHead=$('#prog-headline'),progSub=$('#prog-sub');
function rS(){
  const prog=computeProgress();
  const s=prog.count,pc=tI>0?Math.round(s/tI*100):0;
  if(progRing){progRing.style.setProperty('--p',pc);progRing.setAttribute('data-pct',pc+'%');progRing.setAttribute('role','img');progRing.setAttribute('aria-label','Progresso geral: '+pc+'%');}
  if(progHead)progHead.textContent=pc+'% completo';
  if(progSub)progSub.textContent=`${s} de ${tI} itens`;
}
// O anel novo é leve (conic-gradient via --p); atualizar = repintar, sem SVG a remendar.
const updateJourney=rS;
rS();

// ── Spaced repetition review widget ──
function updateReviewWidget(){const el=document.getElementById('review-widget');if(!el)return;const n=countDue();if(n>0){el.style.display='';el.querySelector('.review-count').textContent=n}else{el.style.display='none'}}
window.openReview=function(){const due=[];ROADMAP.forEach(lv=>lv.areas.forEach(a=>a.topics.forEach(t=>t.items.forEach((it,idx)=>{const iid=mid(lv.css,a.name,t.name,idx);if(reviewDue(iid))due.push({iid,w:it.w,path:lv.name+' › '+a.name.replace(/^[^\w\s]+\s*/u,'').trim()+' › '+t.name,s:it.s})}))));
  if(!due.length){openDrawer({title:'🔁 Revisão',html:`<p class="dw-info">Nada para revisar agora. Continue estudando — os itens voltam aqui no momento certo de revisar.</p>`});return}
  openDrawer({title:`🔁 Revisão — ${due.length} ${due.length>1?'itens':'item'}`,
    html:`<p class="dw-info">Tente lembrar cada um. Marque "✅ Revisei" pra agendar a próxima revisão (intervalos crescentes).</p>`+
      `<div class="dw-list">${due.map(d=>`<div class="dw-review" data-iid="${esc(d.iid)}"><div class="dw-pick-path">${esc(d.path)}</div><div class="dw-review-title">${esc(d.w)}</div><div class="dw-review-actions"><button type="button" class="dw-done-btn" data-iid="${esc(d.iid)}">✅ Revisei</button>${mSL(d.s).replace(/<div class="search-term-row">/g,'<div class="search-term-row mini">')}</div></div>`).join('')}</div>`,
    onMount:body=>{body.querySelectorAll('.dw-done-btn').forEach(b=>b.addEventListener('click',function(){const iid=this.dataset.iid;const rv=gR();if(rv[iid]){rv[iid].count=(rv[iid].count||0)+1;rv[iid].date=Date.now();sR(rv)}const card=this.closest('.dw-review');if(card){card.style.opacity='0.4';this.textContent='✅ Agendado';this.disabled=true}updateReviewWidget()}))}});
};

// ── Pace planner: hours/week → finish estimate ──
window.openPacePlanner=function(){
  const p=gP();let scopeMin=0,scopeDone=0;ROADMAP.forEach(lv=>lv.areas.forEach(a=>{if(cTrack!=='all'&&!(a.track===cTrack||a.core))return;a.topics.forEach(t=>t.items.forEach((it,idx)=>{if(it.w.includes('🎯'))return;const m=eT(it);scopeMin+=m;if(p[mid(lv.css,a.name,t.name,idx)])scopeDone+=m}))}));const scopeLabel=cTrack==='all'?'todo o roadmap':'a trilha atual + CORE';const remainingMin=Math.max(0,scopeMin-scopeDone);const remainingH=Math.round(remainingMin/60);
  function calc(hpw){if(hpw<=0)return'—';const weeks=remainingH/hpw;if(weeks<4)return Math.ceil(weeks)+' semana'+(Math.ceil(weeks)>1?'s':'');const months=weeks/4.345;if(months<12)return months.toFixed(1)+' meses';return (months/12).toFixed(1)+' anos'}
  openDrawer({title:'📅 Planejador de Ritmo',
    html:`<p class="dw-info">Faltam ~${fmtTime(remainingMin)} de conteúdo (${remainingH}h) para concluir <strong>${esc(scopeLabel)}</strong> (filtre uma trilha pra escopar o cálculo).</p>`+
      `<div class="dw-pace-control"><label for="pace-range">Quantas horas por semana você consegue estudar?</label>`+
      `<input type="range" id="pace-range" min="1" max="40" value="10" step="1"><div class="dw-pace-value"><span id="pace-hours">10</span> h/semana</div></div>`+
      `<div class="dw-pace-result">⏳ Você concluiria em aproximadamente <strong id="pace-eta">${calc(10)}</strong></div>`+
      `<div class="dw-pace-presets">${[5,10,15,20].map(h=>`<button type="button" class="dw-pace-preset" data-h="${h}">${h}h/sem</button>`).join('')}</div>`+
      `<p class="dw-note">Estimativa baseada no tempo médio por item. Estudar com constância (mesmo 1h/dia) rende mais que maratonas.</p>`,
    onMount:body=>{const range=body.querySelector('#pace-range'),hoursEl=body.querySelector('#pace-hours'),etaEl=body.querySelector('#pace-eta');
      function upd(v){hoursEl.textContent=v;etaEl.textContent=calc(+v)}
      range.addEventListener('input',()=>upd(range.value));
      body.querySelectorAll('.dw-pace-preset').forEach(b=>b.addEventListener('click',()=>{range.value=b.dataset.h;upd(b.dataset.h)}));
    }});
};

// Search links — one row per term (▶ YouTube + 🔍 Google)
function mSL(s){return s.split('|').map(t=>{const tr=t.trim();if(!tr)return'';const yt='https://www.youtube.com/results?search_query='+encodeURIComponent(tr);const gg='https://www.google.com/search?q='+encodeURIComponent(tr);return`<div class="search-term-row"><span class="search-term-text">• ${esc(tr)}</span><a href="${yt}" target="_blank" rel="noopener" class="search-link yt-link">▶ YouTube</a><a href="${gg}" target="_blank" rel="noopener" class="search-link gg-link">🔍 Google</a></div>`}).join('')}


// Accordion hierárquico: ao abrir um acordeão, fecha só os IRMÃOS do mesmo tipo (mesmo pai);
// os ancestrais permanecem abertos. Ex.: abrir outro nível fecha o nível aberto por inteiro;
// dentro de um nível, abrir outra área/tópico fecha só os irmãos daquele nível, mantendo o pai.
function closeSiblings(btn){
  const type=btn.classList.contains('level-btn')?'level':btn.classList.contains('area-btn')?'area':btn.classList.contains('topic-btn')?'topic':null;
  if(!type)return;
  const wrap=btn.closest('.'+type);const parent=wrap&&wrap.parentElement;if(!parent)return;
  [...parent.children].forEach(sib=>{
    if(sib===wrap||!sib.classList.contains(type))return;
    const sb=sib.querySelector(':scope > .'+type+'-btn'),sc=sib.querySelector(':scope > .'+type+'-content');
    if(sb&&sc&&sb.classList.contains('open'))tog(sb,sc); // fecha o irmão aberto (com animação)
  });
}
function tog(b,c){
  const opening=!c.classList.contains('expanded');
  const arrow=b.querySelector('.arrow')||b.querySelector('.item-toggle');
  b.setAttribute('aria-expanded',opening?'true':'false');
  if(opening){
    closeSiblings(b); // fecha irmãos do mesmo nível antes de abrir este
    c.style.display='block';
    c.style.paddingTop='';c.style.paddingBottom=''; // restaura padding do CSS p/ medir a altura real
    const h=c.scrollHeight;
    c.style.height='0px';
    c.style.paddingTop='0px';c.style.paddingBottom='0px'; // começa colapsado
    c.offsetHeight; // force reflow
    c.classList.add('expanded');
    c.style.height=h+'px';
    c.style.paddingTop='';c.style.paddingBottom=''; // anima padding de volta ao valor do CSS
    b.classList.add('open');
    if(arrow)arrow.textContent='▾';
    setTimeout(()=>{if(c.classList.contains('expanded'))c.style.height='auto';},260);
  }else{
    c.style.height=c.scrollHeight+'px';
    c.offsetHeight;
    c.classList.remove('expanded');
    c.style.height='0px';
    c.style.paddingTop='0px';c.style.paddingBottom='0px'; // colapsa o padding junto: sem ele o padding-bottom vira um "piso" e a área trava antes de fechar
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
  const toast=document.createElement('div');toast.className='badge-toast';toast.setAttribute('role','status');
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
  const banner=document.createElement('div');banner.className='level-complete-banner';banner.setAttribute('role','status');
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
window.setFilter=function(f){cF=f;aF();document.querySelectorAll('.seg .filter-btn').forEach(b=>{const on=b.dataset.filter===f;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false')})};

// ── Collapse / expand all ──
window.collapseAll=function(){document.querySelectorAll('.level-content,.area-content,.topic-content,.item-detail').forEach(c=>{c.style.display='none';c.classList.remove('expanded')});document.querySelectorAll('.level-btn,.area-btn,.topic-btn,.item-btn').forEach(b=>{b.classList.remove('open');b.setAttribute('aria-expanded','false');const ar=b.querySelector('.arrow')||b.querySelector('.item-toggle');if(ar)ar.textContent='▸'});window.scrollTo({top:0,behavior:'smooth'})};
window.expandAllLevels=function(){document.querySelectorAll('.level-content').forEach(c=>{c.style.display='block';c.classList.add('expanded');c.style.height='auto';c.style.paddingTop='';c.style.paddingBottom=''});document.querySelectorAll('.level-btn').forEach(b=>{b.classList.add('open');b.setAttribute('aria-expanded','true');const ar=b.querySelector('.arrow');if(ar)ar.textContent='▾'})};

// ── Filter by track ──
let cTrack='all';
window.setTrackFilter=function(tr){cTrack=tr;
  document.querySelectorAll('.area').forEach(a=>{
    const at=a.dataset.track||'';
    // Strict track filter: with a track active, show ONLY that track's areas — hide everything
    // else, INCLUDING core/Essencial areas (previously exempted via "&& !a.dataset.core", which
    // left almost the whole roadmap visible since most areas are core).
    a.classList.toggle('track-hidden', tr!=='all' && at!==tr);
  });
  // hide levels that end up with no visible area
  document.querySelectorAll('.level').forEach(lv=>{
    const anyVisible=[...lv.querySelectorAll('.area')].some(a=>!a.classList.contains('track-hidden'));
    lv.classList.toggle('track-hidden', tr!=='all' && !anyVisible);
  });
  document.querySelectorAll('#track-chips .chip').forEach(b=>{const on=b.dataset.track===tr;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false')});
  // When filtering by track, expand ONLY the levels that still contain a visible area of this
  // track (not every level — avoids opening empty/irrelevant levels).
  if(tr!=='all'){
    document.querySelectorAll('.level').forEach(lv=>{
      if(lv.classList.contains('track-hidden'))return;
      const c=lv.querySelector('.level-content'),b=lv.querySelector('.level-btn');
      if(c){c.style.display='block';c.classList.add('expanded');c.style.height='auto';c.style.paddingTop='';c.style.paddingBottom='';}
      if(b){b.classList.add('open');b.setAttribute('aria-expanded','true');const ar=b.querySelector('.arrow');if(ar)ar.textContent='▾';}
    });
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
  const p=gP();let inScope=[],rest=[];
  ROADMAP.forEach(lv=>{lv.areas.forEach(a=>{const scoped=cTrack==='all'||a.track===cTrack||a.core;a.topics.forEach(t=>{
    t.items.forEach((it,idx)=>{
      const id=mid(lv.css,a.name,t.name,idx);
      if(p[id]||it.w.includes('🎯'))return;
      (scoped?inScope:rest).push({level:lv.name,area:(a.displayName||a.name).replace(/^[^\w\s]+\s*/u,'').trim(),topic:t.name,item:it,id:id,time:eT(it)})
    })})})});
  const picks=inScope.concat(rest).slice(0,5);
  if(!picks.length){alert('Parabéns! Você estudou TUDO! 🎉');return}
  const totalTime=picks.reduce((s,p)=>s+p.time,0);
  openDrawer({title:'📚 Estudo do Dia',
    html:`<p class="dw-info">${picks.length} itens sugeridos · ~${fmtTime(totalTime)} estimados</p>`+
      `<div class="dw-list">${picks.map((pk,i)=>`<div class="dw-pick"><div class="dw-pick-path">${esc(pk.level)} › ${esc(pk.area)} › ${esc(pk.topic)}</div><div class="dw-pick-title">${i+1}. ${esc(pk.item.w)}</div><div class="dw-pick-time">⏱️ ~${fmtTime(pk.time)}</div></div>`).join('')}</div>`});
};

// ============================================================
// RENDER LEVELS
// ============================================================
ROADMAP.forEach((level,levelIdx)=>{
const sec=document.createElement('div');sec.className='level';sec.id='level-'+level.css;sec.style.setProperty('--li',levelIdx);
const btn=document.createElement('button');btn.className=`level-btn ${level.css}`;btn.setAttribute('aria-expanded','false');
const stageNum=levelIdx+1;
btn.innerHTML=`<div class="level-stage" aria-hidden="true">${stageNum}</div><div class="level-body"><div class="level-name">${esc(level.name.replace(/^[^\w\s]+\s*/u,'').trim())} <span class="arrow" aria-hidden="true">▸</span></div><div class="level-meta">${esc(level.time)} · ${level.areas.length} áreas</div><div class="level-desc">${esc(level.desc||'')}</div></div>`;
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
// Objetivos/pré-req da área agora abrem no drawer (Fase 3), via botão de info no acordeão.
if(area.prereq||(area.objectives&&area.objectives.length)){const info=document.createElement('button');info.type='button';info.className='area-info-btn';info.innerHTML='ℹ️ Objetivos &amp; pré-requisitos';info.addEventListener('click',e=>{e.stopPropagation();openAreaDrawer(area,level.name)});aC.appendChild(info)}

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
const iB=document.createElement('div');iB.className='item-btn';iB.setAttribute('role','button');iB.setAttribute('tabindex','0');iB.setAttribute('aria-haspopup','dialog');
iB.innerHTML=`<span class="item-left"><button type="button" class="item-check" role="checkbox" aria-checked="${iS?'true':'false'}" aria-label="Marcar &quot;${esc(item.w)}&quot; como estudado">${iS?'✅':'⬜'}</button><span class="item-text">${esc(item.w)}</span></span><span class="item-right"><span class="item-time">~${fmtTime(tm)}</span><span class="item-toggle" aria-hidden="true">▸</span></span>`;
const chk=iB.querySelector('.item-check');
function toggleStudied(){const p=gP();p[iid]=!p[iid];sP(p);chk.textContent=p[iid]?'✅':'⬜';chk.setAttribute('aria-checked',p[iid]?'true':'false');iD.classList.toggle('item-studied',p[iid]);
if(p[iid]){chk.classList.remove('pop');void chk.offsetWidth;chk.classList.add('pop');}  // pop ao concluir (Fase 5)
const rv=gR();if(p[iid]){if(!item.w.includes('🎯')&&!rv[iid])rv[iid]={date:Date.now(),count:0}}else{if(rv[iid]&&!(rv[iid].count>0))delete rv[iid]}sR(rv);updateReviewWidget();
updateJourney();
const ns=cS(level.css,area.name,topic.name,topic.items.length);const bar=tC.querySelector('.progress-fill');const txt=tC.querySelector('.progress-text');
if(bar)bar.style.width=Math.round(ns/topic.items.length*100)+'%';if(txt)txt.textContent=ns+'/'+topic.items.length+' ('+Math.round(ns/topic.items.length*100)+'%)';
checkBadge(area.name);checkLevelComplete();}
chk.addEventListener('click',e=>{e.stopPropagation();toggleStudied()});
// Detalhe do item agora abre no drawer lateral (Fase 3), não mais inline.
function openItemDrawer(){
  const bulletsHtml=item.d.split('\n').map(line=>{const tl=line.trim();if(tl.startsWith('•'))return '<li>'+esc(tl.substring(1).trim())+'</li>';return tl?'<li class="no-bullet">'+esc(tl)+'</li>':''}).join('');
  const noteVal=gN()[iid]||'';
  const pathStr=level.name+' › '+(area.displayName||area.name).replace(/^[^\w\s]+\s*/u,'').trim()+' › '+topic.name;
  openDrawer({path:pathStr,title:item.w,
    html:`<div class="item-desc"><strong>📖 O que estudar:</strong><ul class="desc-bullets">${bulletsHtml}</ul></div>`+
      `<div class="item-recall"><button type="button" class="recall-btn">🧠 Sei explicar isso sem olhar?</button><span class="recall-hint">Tente lembrar antes de marcar como aprendido — é assim que fixa.</span></div>`+
      `<div class="search-terms"><strong>🔍 Termos de busca:</strong>${mSL(item.s)}</div>`+
      `<div class="item-notes"><label class="notes-label" for="dw-notes">📝 Minhas anotações:</label><textarea id="dw-notes" class="notes-area" rows="3" placeholder="Anote dúvidas, links, insights...">${esc(noteVal)}</textarea></div>`,
    onMount:body=>{
      const rb=body.querySelector('.recall-btn');if(rb)rb.addEventListener('click',()=>{rb.classList.toggle('revealed');rb.textContent=rb.classList.contains('revealed')?'✅ Boa! Se conseguiu explicar, marque como estudado':'🧠 Sei explicar isso sem olhar?'});
      const ta=body.querySelector('.notes-area');if(ta)ta.addEventListener('input',()=>{const n=gN();const v=ta.value.trim();if(v)n[iid]=v;else delete n[iid];sN(n);iD.classList.toggle('has-note',!!v)});
    }});
}
if(gN()[iid])iD.classList.add('has-note');
iB.addEventListener('click',e=>{if(e.target.closest('.item-check'))return;openItemDrawer()});
iB.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('.item-check')){e.preventDefault();openItemDrawer()}});
iD.appendChild(iB);tC.appendChild(iD)});
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

// Fase 2: conteúdo renderizado — remover o placeholder de casca da Fase 1
const shellPlaceholder=document.getElementById('shell-placeholder');if(shellPlaceholder)shellPlaceholder.remove();

// Search
let db;searchInput.addEventListener('input',function(){clearTimeout(db);db=setTimeout(()=>doS(this.value.trim()),200)});
function doS(q){if(q.length<2){searchResults.style.display='none';roadmap.style.display='block';const lv0=document.getElementById('sr-live');if(lv0)lv0.textContent='';return}
const l=q.toLowerCase();const res=[];
ROADMAP.forEach(lv=>{lv.areas.forEach(a=>{a.topics.forEach(t=>{
t.books.forEach(b=>{if(b.toLowerCase().includes(l))res.push({rank:3,path:`${lv.name} > ${a.displayName||a.name} > ${t.name}`,title:`📚 ${b}`,detail:`Livro no tópico "${t.name}"`,search:''})});
t.items.forEach(it=>{const W=it.w.toLowerCase(),S=(it.s||'').toLowerCase(),D=(it.d||'').toLowerCase();let rk=-1;if(W.includes(l))rk=0;else if(S.includes(l))rk=1;else if(D.includes(l))rk=2;if(rk>=0)res.push({rank:rk,path:`${lv.name} > ${a.displayName||a.name} > ${t.name}`,title:it.w,detail:it.d,search:it.s})})})})});
res.sort((a,b)=>a.rank-b.rank);
if(!res.length){searchResults.innerHTML=`<div class="empty-state"><span class="es-icon" aria-hidden="true">🔍</span><h2>Nenhum resultado</h2><p>Nada encontrado para "${esc(q)}". Tente outro termo, um livro ou parte de uma palavra.</p></div>`}else{
const sh=res.slice(0,20);searchResults.innerHTML=`<div class="sr-count">${res.length} resultado${res.length>1?'s':''} para "${esc(q)}"${res.length>20?' (mostrando 20)':''}</div>`+sh.map(r=>`<div class="sr-item"><div class="sr-path">${esc(r.path)}</div><div class="sr-title">${hl(r.title,l)}</div><div class="sr-detail">${hl(r.detail,l).replace(/\n/g,'<br>')}</div>${r.search?`<div class="sr-search">${mSL(r.search)}</div>`:''}</div>`).join('')}
searchResults.style.display='block';roadmap.style.display='none';const lv=document.getElementById('sr-live');if(lv)lv.textContent=res.length?`${res.length} resultado${res.length>1?'s':''} para "${q}"`:`Nenhum resultado para "${q}"`;}
// Escape first, then wrap matches in <mark> (operates on escaped text so tags stay intact)
function hl(t,q){const e=esc(t);if(!q)return e;const eq=esc(q).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');return e.replace(new RegExp('('+eq+')','gi'),'<mark>$1</mark>')}

// Keyboard shortcuts
document.addEventListener('keydown',function(e){
  const drawerOpen=!!(drawer&&drawer.classList.contains('open'));
  // Focus-trap dentro do drawer aberto (WCAG 2.1.2 / 2.4.3)
  if(e.key==='Tab'&&drawerOpen){
    const f=[...drawer.querySelectorAll(FOCUSABLE)].filter(el=>el.offsetParent!==null||el===document.activeElement);
    if(f.length){const first=f[0],last=f[f.length-1];
      if(!drawer.contains(document.activeElement)){e.preventDefault();first.focus()}
      else if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
    return;
  }
  // Esc fecha o drawer e restaura o foco ao trigger
  if(e.key==='Escape'){if(drawerOpen){closeDrawer();return}}
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
  // Não dispara atalhos de letra com o drawer ou a sidebar-overlay aberta
  if(drawerOpen||(sidebar&&sidebar.classList.contains('open')))return;
  if(e.key==='d'||e.key==='D'){e.preventDefault();window.studyOfDay()}
  if(e.key==='/'){e.preventDefault();searchInput.focus()}
});

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

// Projeto/desafio (dentro da IIFE p/ acessar esc/helpers) — agora abre no drawer lateral
function openProject(p){
  const bullets=str=>String(str||'').split('\n').map(line=>{const tl=line.trim();if(tl.startsWith('•'))return '<li>'+esc(tl.substring(1).trim())+'</li>';return tl?'<li class="no-bullet">'+esc(tl)+'</li>':''}).join('');
  openDrawer({path:'🏆 Projeto',title:p.title,
    html:`<div class="dw-section"><strong>📋 Descrição</strong><ul class="desc-bullets">${bullets(p.desc)}</ul></div>`+
         `<div class="dw-section"><strong>📦 Entregável</strong><p>${esc(p.deliverable)}</p></div>`});
}
window.openProject=openProject;

// ── Fase 4 — Re-wire dos controles da casca aos handlers herdados ──
// Trilhas (sidebar chips) → setTrackFilter
const trackChips=document.getElementById('track-chips');
if(trackChips)trackChips.addEventListener('click',e=>{const b=e.target.closest('.chip[data-track]');if(!b)return;window.setTrackFilter(b.dataset.track)});
// Filtros (topbar segmentado) → setFilter
const seg=document.querySelector('.seg');
if(seg)seg.addEventListener('click',e=>{const b=e.target.closest('.filter-btn[data-filter]');if(!b)return;window.setFilter(b.dataset.filter)});
// Ferramentas (sidebar)
const bindTool=(id,fn)=>{const el=document.getElementById(id);if(el)el.addEventListener('click',fn)};
bindTool('tool-study',()=>window.studyOfDay());
bindTool('review-widget',()=>window.openReview());
bindTool('tool-pace',()=>window.openPacePlanner());
bindTool('tool-collapse',()=>window.collapseAll());
bindTool('tool-export',()=>window.exportProgress());
bindTool('tool-import',()=>window.importProgress());
bindTool('tool-reset',()=>window.resetProgress());

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

// ── Fase 5 — Sidebar mobile (overlay slide-in via hambúrguer, ≤820px) ──
// Reaproveita o padrão do drawer (Fase 3): scrim, ESC, focus-trap, restaurar foco ao trigger.
const sidebar=document.getElementById('sidebar');
const navToggle=document.getElementById('nav-toggle');
const navScrim=document.getElementById('nav-scrim');
function openSidebar(){
  if(!sidebar)return;
  sidebar.classList.add('open');
  // Enquanto é overlay (só no mobile — o hambúrguer só existe em ≤820px), o <aside> vira um
  // diálogo modal: aria-modal deixa o fundo inerte p/ leitor de tela, casando com o focus-trap
  // e o scrim (a11y — o landmark de navegação vira dialog só enquanto aberto).
  sidebar.setAttribute('role','dialog');
  sidebar.setAttribute('aria-modal','true');
  if(navScrim)navScrim.classList.add('open');
  if(navToggle)navToggle.setAttribute('aria-expanded','true');
  document.body.classList.add('nav-open');
  requestAnimationFrame(()=>{const f=sidebar.querySelector(FOCUSABLE);if(f&&f.focus)f.focus()});
}
function closeSidebar(){
  if(!sidebar||!sidebar.classList.contains('open'))return;
  sidebar.classList.remove('open');
  sidebar.removeAttribute('role');sidebar.removeAttribute('aria-modal');  // volta a ser landmark de nav
  if(navScrim)navScrim.classList.remove('open');
  if(navToggle)navToggle.setAttribute('aria-expanded','false');
  document.body.classList.remove('nav-open');
  // O único gatilho da sidebar-overlay é o hambúrguer; devolve o foco a ele (a11y 2.4.3).
  // Só refoca se ele estiver visível (no desktop ele é display:none e focar não faz nada).
  if(navToggle&&navToggle.offsetParent!==null&&navToggle.focus)navToggle.focus();
}
if(navToggle)navToggle.addEventListener('click',()=>{(sidebar&&sidebar.classList.contains('open'))?closeSidebar():openSidebar()});
if(navScrim)navScrim.addEventListener('click',closeSidebar);
// Fechar a sidebar-overlay ao navegar (nível/trilha/ferramenta) no mobile
if(sidebar)sidebar.addEventListener('click',e=>{
  if(!sidebar.classList.contains('open'))return;
  if(e.target.closest('.chip[data-track], #tools .nav-item'))closeSidebar();
});
// ESC + focus-trap enquanto a sidebar-overlay está aberta
document.addEventListener('keydown',e=>{
  if(!sidebar||!sidebar.classList.contains('open'))return;
  if(e.key==='Escape'){e.preventDefault();closeSidebar();return}
  if(e.key==='Tab'){
    const f=[...sidebar.querySelectorAll(FOCUSABLE)].filter(el=>el.offsetParent!==null);
    if(!f.length)return;const first=f[0],last=f[f.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    else if(!sidebar.contains(document.activeElement)){e.preventDefault();first.focus()}
  }
});
// Ao sair do modo mobile (a MESMA query do CSS: max-width:820px), zerar o estado overlay pra não
// travar a UI. Usar a query espelhada evita um "gap" fracionário entre 820–821px onde o scrim
// (regra global .scrim.open) ficaria preso cobrindo o desktop.
if(window.matchMedia){const mq=window.matchMedia('(max-width:820px)');
  const onChange=()=>{if(!mq.matches)closeSidebar()};
  mq.addEventListener?mq.addEventListener('change',onChange):mq.addListener(onChange);
}
})();
