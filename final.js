// Final level data — projetos finais (capstone). Quizzes removidos do roadmap.
const FINAL_LEVEL = {};

FINAL_LEVEL["green"] = {
  project: {
    title: "🏆 Desafio Final do Iniciante: App de Estudos com Mini-Jogo",
    desc: "Um desafio que junta TODAS as 8 áreas do Iniciante num projeto só:\n\n• Fundamentos: página explicando como o computador representa dados (binário, RGB/hex, 32 vs 64-bit) com diagramas\n• SO & Terminal: script shell que automatiza o setup do projeto (pastas, git init, venv) usando permissões corretas (chmod)\n• Python: backend em Python com type hints, venv + requirements.txt, validação por regex e persistência em JSON\n• Criando Jogos com Python: um mini-jogo em Pygame (quiz, adivinhação ou arcade simples) integrado ao app, com game feel (som, pontuação, tela de fim)\n• Matemática: módulo de estatísticas das notas (somatório Σ) e comparação de algoritmos por Big O com timing\n• Física: calculadora de fórmulas (F=ma, V=IR, P=VI) e seção sobre semicondutores\n• Web: frontend HTML+CSS responsivo (mobile-first) + JavaScript (DOM, dark mode com localStorage), deploy no GitHub Pages\n• Banco de Dados: SQLite com tabelas (matérias, notas, recordes do jogo), queries com GROUP BY/HAVING e modelagem ER\n• Eletrônica: Arduino lê um sensor e envia via serial (UART); Python recebe com pyserial e reage (ex: LED muda pela nota)",
    deliverable: "Aplicação de estudos completa com um mini-jogo em Python integrado, persistência em SQLite, frontend web responsivo publicado, e integração com Arduino — com README documentando como cada uma das 8 áreas foi aplicada"
  }
};

FINAL_LEVEL["yellow"] = {
  project: {
    title: "🏆 Desafio Final do Intermediário: Plataforma + Jogo 2D Integrado",
    desc: "Um desafio que integra as 20 áreas do Intermediário numa plataforma robusta com um jogo 2D embutido:\n\n• Estruturas de Dados & Algoritmos: sistema de tarefas/Kanban com fila de prioridade e busca eficiente\n• Python Intermediário & OOP: backend FastAPI com SOLID e decorators para auth\n• C, C++ & Rust: CLI em Rust que processa logs e gera relatório\n• Java & JVM: microsserviço Spring Boot de notificações\n• Sistemas Operacionais: monitorar processos e memória do servidor\n• Arquitetura de Computadores: otimizar queries pensando em cache locality\n• Concorrência: WebSocket pra atualizações em tempo real\n• Engenharia de Software: TDD com 80%+ coverage, CI/CD, documentação\n• Teoria da Computação: mini DSL pra filtros avançados\n• Matemática p/ ML: previsão de conclusão com regressão linear\n• Sinais e Sistemas: alerta sonoro via Web Audio API\n• Introdução a IA & ML: classificador de prioridade com TF-IDF + scikit-learn\n• Full-Stack: React+TypeScript+Next.js, FastAPI, PostgreSQL, JWT\n• Computação Gráfica & Game Design: um JOGO 2D na engine (Godot) ou Three.js, com core loop e game feel, integrado como 'pausa gamificada' da plataforma\n• Desenvolvimento Mobile: app React Native com as tarefas\n• DevOps & Infra: Docker Compose (app+banco+redis), health checks\n• Go: worker com goroutines pra jobs pesados (export PDF/CSV)\n• Redes: HTTPS/TLS, DNS, reverse proxy Nginx\n• Segurança: rate limiting, input validation, CORS, CSP, OWASP\n• Embarcados: botão ESP32 que marca tarefa concluída via serial",
    deliverable: "Plataforma full-stack completa com um jogo 2D real integrado (aplicando game design), containerizada, com testes, segurança e integração mobile/IoT — com documentação de arquitetura mostrando as 20 áreas"
  }
};

FINAL_LEVEL["orange"] = {
  project: {
    title: "🏆 Desafio Final do Avançado: Plataforma de IA com Especializações",
    desc: "Um desafio que integra as 15 áreas do Avançado numa plataforma ambiciosa — escolha um domínio central (ex: saúde, finanças ou segurança) e conecte as especializações:\n\n• Arquitetura de Software: sistema distribuído com diagramas C4 e padrões de escalabilidade\n• Deep Learning: modelo treinado (visão computacional OU NLP) resolvendo um problema real do domínio\n• AI Engineering: pipeline RAG com vector database + prompt engineering versionado e avaliado\n• Bioinformática: módulo de análise de dados biológicos (se o domínio for saúde)\n• Banco de Dados Avançado: PostgreSQL com particionamento, índices e entendimento de internals (WAL, query planner)\n• Data Engineering: pipeline ETL que alimenta as análises\n• Blockchain & Web3: smart contract de audit trail imutável\n• Cloud & Kubernetes: deploy em K8s com Helm, auto-scaling e monitoring\n• DevSecOps: SAST/DAST no CI/CD, scanning de dependências e containers\n• Ethical Hacking: módulo de pentest automatizado de APIs\n• Robótica & IoT: sensor que alimenta dados reais via MQTT\n• Forense Digital: análise de logs com timeline e detecção de IOCs\n• AR/VR/XR: uma visualização imersiva dos dados em WebXR/Three.js\n• Finanças Quantitativas: módulo de análise/backtesting (se o domínio for finanças) com gestão de risco\n• Computação Gráfica & Game Design: dashboard gamificado ou simulação interativa aplicando game feel",
    deliverable: "Plataforma de IA de ponta a ponta sobre um domínio escolhido, integrando modelo de DL, RAG, dados, cloud, segurança e uma camada imersiva (XR) ou gamificada — com documentação de arquitetura e decisões técnicas cobrindo as áreas usadas"
  }
};

FINAL_LEVEL["red"] = {
  project: {
    title: "🏆 Desafio Final do Muito Avançado: Sistema Distribuído com IA em Produção",
    desc: "Um desafio de nível profissional que integra as 4 áreas do Muito Avançado:\n\n• Sistemas Distribuídos: cluster de 3+ nós com consenso (Raft) para armazenar dados de forma consistente e imutável. Consistent hashing pra distribuir carga. Tolerância a falhas: perder 1 nó não perde dados\n\n• MLOps & Produção: pipeline de ML completo em produção — model registry (MLflow), monitoramento de drift, feature store, A/B testing entre modelos, retraining automatizado e observabilidade\n\n• Pesquisa & Fronteira: incorpore uma técnica de fronteira — modelo multimodal (texto + imagem), assistente RAG sobre papers, ou abordagem de um paper recente reproduzida. Documente como pesquisa vira produto\n\n• Segurança Defensiva & Blue Team: o sistema deve se defender — detecção de anomalias, logging seguro, chain of custody, resposta a incidentes e análise forense dos próprios eventos",
    deliverable: "Sistema distribuído tolerante a falhas com ML em produção (com MLOps completo), uma técnica de pesquisa de fronteira aplicada e postura de segurança defensiva — com documentação de arquitetura, decisões e trade-offs de nível sênior"
  }
};

FINAL_LEVEL["blue"] = {
  project: {
    title: "🏆 Desafio Final da Academia: Pesquisa Original Reproduzível",
    desc: "Um desafio acadêmico completo integrando as 5 áreas:\n\n• Escrita e Metodologia Científica: paper completo em LaTeX (introdução, related work, metodologia, experimentos, conclusão) seguindo template de conferência (ACM/IEEE), com citações corretas\n\n• Iniciação Científica: proposta formal com problema, justificativa, objetivos SMART, metodologia e cronograma de 12 meses\n\n• Mestrado: revisão bibliográfica de 20+ papers identificando um gap real e a contribuição esperada\n\n• Doutorado: survey crítico de uma subárea (10+ papers) com análise comparativa e problemas em aberto\n\n• Ferramentas e Recursos Acadêmicos: projeto 100% reproduzível — Jupyter com seeds fixos, requirements.txt, tracking de experimentos (MLflow), dados versionados (DVC) e Binder configurado pra qualquer um rodar",
    deliverable: "Um mini-paper de pesquisa original, completo e reproduzível: PDF em LaTeX no padrão de conferência, código e dados versionados, experimentos rastreados, mais a proposta de pesquisa e o survey crítico que o fundamentam"
  }
};

FINAL_LEVEL["purple"] = {
  project: {
    title: "🏆 Desafio Final de Carreira: Plano de 5 Anos + Projeto Open Source",
    desc: "Um desafio que integra as 8 áreas de Carreira num plano de carreira acionável e uma contribuição real:\n\n• Aprendizado & Preparação: auto-avaliação T-shape, plano de estudo de 12 meses e portfólio no GitHub com 5+ projetos\n• Trilhas, Crescimento & Transições: mapear 3 trilhas possíveis, roadmap de 5 anos com milestones e entrevistar profissionais\n• Liderança & Gestão: definir métricas (DORA), planejamento e um postmortem blameless de um incidente simulado\n• Liderança Técnica: escrever 3 ADRs, um runbook operacional e uma tech spec completa de feature\n• Produto & Estratégia: discovery com 5 usuários, wireframes, North Star Metric e priorização (RICE)\n• Gestão de Pessoas: framework de feedback (SBI), plano de onboarding 30/60/90 e template de 1:1\n• Estratégia & Empreendedorismo: Business Model Canvas, análise TAM/SAM/SOM e pitch deck de 10 slides\n• Open Source na Prática: faça uma contribuição real aceita num projeto open source E publique/mantenha um projeto seu com README, licença e CI",
    deliverable: "Um dossiê de carreira completo (plano de 5 anos, portfólio, artefatos de liderança e produto) somado a uma contribuição open source aceita e um projeto próprio publicado e mantido profissionalmente"
  }
};

