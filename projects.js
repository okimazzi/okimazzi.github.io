const PROJECTS = {
  "Fundamentos de Computacao": {
    "basic": {
      "title": "🟢 Mapa Mental: Como Computadores Funcionam",
      "desc": "Crie documento visual explicando tudo que aprendeu: diagrama do ciclo fetch-decode-execute, tabela de conversão binário-decimal-hexadecimal, representação de cores RGB/hex (#FF0000), diagrama de boot (BIOS→bootloader→kernel→SO), comparação 32-bit vs 64-bit, tabela verdade das portas lógicas, mapa da internet (cliente→DNS→servidor), e explicação de open source vs proprietary com exemplos de licenças (MIT, GPL).",
      "deliverable": "Documento visual com 6+ diagramas próprios cobrindo binário, RGB, boot, 32/64-bit, internet, open source"
    },
    "advanced": {
      "title": "🔴 Pesquisa: Processador Moderno + Compressão de Dados",
      "desc": "Relatório técnico (2000+ palavras) em duas partes: 1) Escolha processador real (Apple M3, Ryzen 9, Intel i9) e descreva arquitetura (cores, cache, clock, ISA, nm). Compare com processador de 10 anos atrás. 2) Explique compressão de dados: implemente em Python puro um compressor RLE (Run-Length Encoding) e compare tamanho antes/depois em diferentes tipos de arquivo (texto, repetitivo, aleatório). Explique por que lossy (JPEG/MP3) funciona diferente de lossless (ZIP/PNG).",
      "deliverable": "Relatório com análise de processador real, compressor RLE em Python, comparações e 5+ fontes citadas"
    }
  },
  "Sistemas Operacionais & Terminal": {
    "basic": {
      "title": "🟢 Cheat Sheet + Script de Automação",
      "desc": "Crie cheat sheet completa de terminal em Markdown com 50+ comandos organizados por categoria (navegação, arquivos, permissões, processos, rede, texto). Para cada comando: syntax, exemplo real, quando usar. Inclua seção especial sobre chmod numérico (755, 644, etc), SSH (key pair, config file, SCP), processos (ps, kill, bg/fg), e variáveis de ambiente (PATH, export, .bashrc). Depois crie 3 scripts shell práticos: backup automático de pasta, monitorador de disco que alerta se > 90%, e setup de novo projeto (criar pastas, git init, venv Python).",
      "deliverable": "Cheat sheet Markdown com 50+ comandos + 3 scripts shell funcionais + README"
    },
    "advanced": {
      "title": "🔴 Dotfiles + SSH Setup + Monitoramento Automatizado",
      "desc": "Repositório de dotfiles pessoal no GitHub: .bashrc/.zshrc com aliases úteis (ll, gs, dc), .vimrc ou VS Code settings.json, .gitconfig com aliases (co, br, st). Configure SSH: gere key pair ed25519, crie ~/.ssh/config com 3 hosts, configure rsync automático para backup. Crie script de monitoramento que: verifica espaço em disco, lista top 5 processos por CPU/RAM, testa conectividade de 5 hosts via ping, e grava log com timestamp. Agende com cron para rodar de hora em hora.",
      "deliverable": "Repo dotfiles com .bashrc, .gitconfig, SSH config com 3 hosts, script de monitoramento + cron + README"
    }
  },
  "Logica de Programacao com Python": {
    "basic": {
      "title": "🟢 Gerenciador de Tarefas CLI com Venv e Type Hints",
      "desc": "Gerenciador de tarefas no terminal usando Python puro. Configurar com venv (requirements.txt). Usar type hints em todas funções (def add_task(title: str, priority: int) -> Task). Funcionalidades: add/list/done/delete tarefas, filtrar por prioridade, buscar por texto (regex), persistir em JSON, mostrar estatísticas (total, concluídas, pendentes). Inclua tratamento de erros (try/except para arquivo não encontrado, input inválido). Organizar em módulos (models.py, storage.py, cli.py). Debugar com pdb pelo menos 1 bug propositalmente inserido e documentar o processo.",
      "deliverable": "Projeto Python com venv, type hints, regex, JSON, módulos separados, tratamento de erros + README"
    },
    "advanced": {
      "title": "🔴 Sistema de Biblioteca com Classes, Testes e Debugging",
      "desc": "Sistema completo de biblioteca no terminal. Classes com type hints: Livro, Usuario, Emprestimo. Persistência em JSON. Validação de ISBN com regex. Controle de datas com datetime. Busca por título/autor/categoria. Relatórios: livros mais emprestados, usuários com atrasos, disponibilidade. Debugar com VS Code debugger (breakpoints, watch) e documentar 3 bugs encontrados e como resolveu. Usar venv + requirements.txt (mesmo sem dependências externas, como boa prática). Type hints em 100% das funções. Testes manuais documentados (input → output esperado → resultado).",
      "deliverable": "Sistema Python com classes tipadas, regex, JSON, venv, 3 bugs debugados documentados + README"
    }
  },
  "Matematica Fundamental": {
    "basic": {
      "title": "🟢 Calculadora Matemática + Análise de Complexidade",
      "desc": "Programa Python puro com 25+ funções matemáticas organizadas por módulo: álgebra (resolver equação 2º grau, PA/PG), discreta (fatorial, fibonacci, primalidade, MDC/MMC, combinações), probabilidade (simulação de dados com random, frequência relativa), cálculo (derivada numérica com diferença finita, integral com somas de Riemann). Para cada função: documentar a complexidade Big O no docstring (ex: 'O(√n) para teste de primalidade'). Incluir notação sigma: implementar função somatório(f, inicio, fim) e produtório(f, inicio, fim). Comparar tempo de execução de fibonacci recursivo O(2ⁿ) vs iterativo O(n) com time module.",
      "deliverable": "Programa Python com 25+ funções, complexidade Big O documentada, somatório/produtório, comparação de performance"
    },
    "advanced": {
      "title": "🔴 Artigo: Matemática na Computação + Visualizações ASCII",
      "desc": "Artigo técnico (2000+ palavras) conectando cada área da matemática a aplicações reais em computação com exemplos de código. Para cada conexão (6+): álgebra linear em gráficos 3D, cálculo em otimização e ML, probabilidade em criptografia, grafos em redes sociais, Big O em algoritmos, Σ em fórmulas de ML. Cada seção com: explicação, fórmula, código Python demonstrando, e gráfico ASCII (histograma com chars, plot de função com asteriscos). Implementar plotador ASCII simples que desenha funções no terminal.",
      "deliverable": "Artigo Markdown com 6+ conexões, código Python, gráficos ASCII, plotador de funções no terminal"
    }
  },
  "Fisica & Quimica p/ Engenharia": {
    "basic": {
      "title": "🟢 Simulações de Física + Semicondutores em Python",
      "desc": "Programa Python com 6 simulações: 1) Lançamento oblíquo: dado ângulo e velocidade, calcular alcance e altura máxima. 2) Lei de Ohm interativa: usuário informa 2 valores, calcula o terceiro. 3) Circuito RC: simular carga/descarga do capacitor com loop (exponencial). 4) Consumo energético: calcular kWh e custo mensal dado potência e horas de uso. 5) Ondas: calcular frequência, período e comprimento. 6) Quiz de semicondutores: perguntas sobre dopagem N/P, MOSFET, como transistor funciona. Cada simulação com equações nos comentários.",
      "deliverable": "Programa Python com 6 simulações, quiz de semicondutores, equações documentadas + README"
    },
    "advanced": {
      "title": "🔴 Simulador de Circuitos DC + Análise Energética",
      "desc": "Simulador de circuitos DC em Python puro: usuário define fonte de tensão e resistores (série/paralelo) via input. Programa calcula corrente por Kirchhoff, tensão e potência em cada componente. Representar circuito como grafo com dicionários Python. Adicionar módulo de análise energética: dado circuito, calcular consumo em kWh, custo mensal, e eficiência (potência útil / total). Comparar eficiência de circuitos diferentes. Validar com 5 circuitos do livro. Output formatado em tabela no terminal.",
      "deliverable": "Simulador Python com Kirchhoff, análise energética, 5 exemplos validados, tabelas formatadas"
    }
  },
  "Web, Git & Ferramentas": {
    "basic": {
      "title": "🟢 Portfolio Responsivo com DOM, LocalStorage e GitHub Pages",
      "desc": "Site portfolio pessoal com: HTML semântico, CSS responsivo (mobile-first com media queries), JavaScript com DOM manipulation (querySelector, addEventListener, createElement). Funcionalidades: dark mode toggle salvo em localStorage, filtro de projetos por tag (manipulação de DOM), formulário de contato com validação JS (regex para email), contador de visitas com localStorage, menu hambúrguer para mobile. Deploy no GitHub Pages. Meta tags para SEO e Open Graph.",
      "deliverable": "Site portfolio responsivo com localStorage, DOM manipulation, validação regex, deploy no GitHub Pages"
    },
    "advanced": {
      "title": "🔴 App Web Interativa: Quiz Builder com JS Puro",
      "desc": "Construa uma aplicação web completa usando apenas HTML, CSS e JavaScript puro (sem frameworks, sem backend): um criador de quizzes. Funcionalidades: criar quiz com perguntas e opções (DOM createElement), salvar quizzes em localStorage (JSON.stringify/parse), fazer quiz com timer (setInterval), mostrar resultado com porcentagem, histórico de tentativas salvo. CSS responsivo (media queries, Grid/Flexbox), animações CSS. Exportar quiz como JSON. Importar quiz de JSON colado. Deploy no GitHub Pages.",
      "deliverable": "Quiz Builder com HTML/CSS/JS puro, localStorage, DOM, responsivo, export/import JSON, GitHub Pages"
    }
  },
  "Banco de Dados Introducao": {
    "basic": {
      "title": "🟢 E-commerce SQL: Modelagem ER + Queries Complexas",
      "desc": "Modelar e implementar banco de dados de e-commerce em SQLite: desenhar diagrama ER (Cliente, Produto, Pedido, ItemPedido — relações 1:N e N:N). Criar tabelas com chaves primárias e estrangeiras. Popular com 50+ registros. Escrever 15+ queries: JOINs entre tabelas, GROUP BY com HAVING (vendas por categoria onde total > R$1000), funções agregadas (COUNT, SUM, AVG, MAX), subqueries (produtos acima da média de preço), ORDER BY + LIMIT. Usar DBeaver ou DB Browser para visualizar. Fazer backup com .dump.",
      "deliverable": "Banco SQLite com diagrama ER, 50+ registros, 15+ queries documentadas, backup .dump + README"
    },
    "advanced": {
      "title": "🔴 App CRUD + Relatórios SQL com Python",
      "desc": "Aplicação Python com SQLite: CRUD completo de sistema de gestão (pode ser e-commerce, escola, ou clínica). Interface CLI com menus. Queries avançadas: relatórios com GROUP BY + HAVING + agregações, subqueries, window functions (ROW_NUMBER para ranking). Importar dados de CSV para popular banco. Exportar relatório em CSV. Modelagem ER documentada (3+ tabelas com relacionamentos). Backup automático com script. Tratamento de erros SQL (IntegrityError para duplicatas, etc).",
      "deliverable": "App Python+SQLite com CRUD, relatórios GROUP BY, import/export CSV, modelagem ER, backup automático"
    }
  },
  "Eletronica & Hardware": {
    "basic": {
      "title": "🟢 Lab Prático: Protoboard + Multímetro + Portas Lógicas",
      "desc": "Série de 5 experimentos práticos (ou simulados em Tinkercad): 1) Montar LED + resistor calculado em protoboard, medir tensão com multímetro. 2) Divisor de tensão, medir e comparar com cálculo teórico. 3) Montar porta AND com transistores, verificar tabela verdade. 4) Somador de 2 bits com LEDs mostrando resultado. 5) Comunicação serial: Arduino envia dados de sensor de temperatura via UART, Python lê com pyserial e mostra no terminal. Para cada: foto/screenshot, medição vs cálculo, explicação do circuito.",
      "deliverable": "5 experimentos com fotos/screenshots, medições com multímetro, código Arduino+Python serial, relatório"
    },
    "advanced": {
      "title": "🔴 Estação Meteorológica Arduino com Comunicação Serial + Python",
      "desc": "Construa estação meteorológica com Arduino/ESP32 (ou simulador Tinkercad/Wokwi): sensores de temperatura (DHT22) e luz (LDR) montados em protoboard. Arduino lê sensores e envia dados via comunicação serial (UART, 9600 baud). Script Python recebe dados via pyserial, armazena em JSON com timestamps, calcula estatísticas (média, max, min das últimas 24h), e gera relatório formatado no terminal. Usar multímetro para verificar tensões nos sensores. Documentar esquemático do circuito, baud rate, formato dos dados seriais.",
      "deliverable": "Arduino com sensores + Python receiver + dados JSON + estatísticas + esquemático + relatório com medições"
    }
  },
  "Estruturas de Dados & Algoritmos": {
    "basic": {
      "title": "🟢 Visualizador de Algoritmos de Ordenação",
      "desc": "Crie uma página web que anima Bubble Sort, Merge Sort e Quick Sort passo a passo. O usuário escolhe o algoritmo, tamanho do array e velocidade. Barras coloridas representam valores, e cada swap/comparação é animada. Mostre contador de comparações e tempo.",
      "deliverable": "App web com animação de 3+ algoritmos, controles de velocidade e contadores de operações"
    },
    "advanced": {
      "title": "🔴 Resolvedor de Labirintos com BFS/DFS/A*",
      "desc": "Construa app web onde o usuário desenha labirintos clicando em células (paredes/caminhos). Implemente BFS, DFS e A* para encontrar o caminho. Anime a exploração (células visitadas em azul, caminho final em verde). Compare performance dos 3 algoritmos (nós visitados, tempo).",
      "deliverable": "App web interativa com editor de labirinto, 3 algoritmos animados e painel de comparação"
    }
  },
  "Python Intermediario & OOP": {
    "basic": {
      "title": "🟢 Sistema de Biblioteca com OOP",
      "desc": "Implemente um sistema de gerenciamento de biblioteca usando classes Python: Livro, Membro, Empréstimo, Biblioteca. Use herança (LivroDigital extends Livro), encapsulamento (@property), e polimorfismo. Persista dados em JSON. Inclua testes unitários com pytest.",
      "deliverable": "Projeto Python com 4+ classes, herança, testes pytest e persistência JSON"
    },
    "advanced": {
      "title": "🔴 Framework de Plugins com Metaclasses",
      "desc": "Construa um mini framework onde plugins são descobertos automaticamente usando metaclasses e decorators. Cada plugin implementa uma interface (Protocol). O framework carrega plugins de uma pasta, registra automaticamente e executa pipeline. Inclua async support, logging estruturado e type hints completos.",
      "deliverable": "Framework Python com auto-discovery de plugins, metaclasses, async, testes e documentação"
    }
  },
  "C, C++ & Rust": {
    "basic": {
      "title": "🟢 Gerenciador de Memória Manual em C",
      "desc": "Implemente um alocador de memória simples: my_malloc() e my_free() que gerenciam um bloco grande de memória. Use free list (linked list de blocos livres). Crie programa de teste que aloca/libera e mostra estado da memória. Use valgrind para verificar zero leaks.",
      "deliverable": "Biblioteca C com alocador custom, programa de teste visual e relatório valgrind limpo"
    },
    "advanced": {
      "title": "🔴 CLI Tool em Rust com Ownership e Concorrência",
      "desc": "Construa ferramenta CLI em Rust que faz busca paralela em arquivos (tipo grep simplificado). Use ownership/borrowing, error handling com Result, múltiplas threads com rayon ou std::thread, e clap para argumentos. Publique no crates.io com CI via GitHub Actions.",
      "deliverable": "Crate Rust publicado com busca paralela, testes, CI/CD e README com benchmarks"
    }
  },
  "Sistemas Operacionais (Disciplina)": {
    "basic": {
      "title": "🟢 Simulador de Escalonamento de Processos",
      "desc": "Simule 4 algoritmos de escalonamento: FCFS, SJF, Round Robin e Priority. O usuário insere processos (arrival time, burst time, priority). Mostre Gantt chart, calcule tempo de espera médio e turnaround. Compare os 4 algoritmos lado a lado.",
      "deliverable": "App web/Python com input de processos, Gantt chart visual e tabela comparativa dos 4 algoritmos"
    },
    "advanced": {
      "title": "🔴 Simulador de Memória Virtual com Paginação",
      "desc": "Simule sistema de memória virtual: processos com tabela de páginas, frames físicos limitados. Implemente LRU, FIFO e Clock como algoritmos de substituição. Visualize page faults, taxas de hit/miss. Demonstre thrashing aumentando processos até o sistema degradar.",
      "deliverable": "Simulador visual com 3 algoritmos de substituição, gráfico de page faults e demonstração de thrashing"
    }
  },
  "Concorrencia e Paralelismo": {
    "basic": {
      "title": "🟢 Web Scraper Concorrente em Python",
      "desc": "Construa scraper que baixa 50+ páginas web usando 3 abordagens: sequencial, threading e asyncio. Compare tempo de execução. Use ThreadPoolExecutor e aiohttp. Salve resultados em CSV com tratamento de erros e retries.",
      "deliverable": "Script Python com 3 abordagens, benchmark de tempo, CSV de resultados e gráfico comparativo"
    },
    "advanced": {
      "title": "🔴 Problema Produtor-Consumidor com Visualização",
      "desc": "Implemente produtor-consumidor com buffer limitado em Python e C++. Compare mutex/condition variable vs semáforo vs asyncio Queue. Crie visualização web em tempo real mostrando buffer, produtores e consumidores. Demonstre deadlock e como evitá-lo.",
      "deliverable": "Implementação em Python e C++, visualização web do buffer em tempo real e análise de deadlock"
    }
  },
  "Engenharia de Software": {
    "basic": {
      "title": "🟢 API REST com TDD e Clean Code",
      "desc": "Construa API REST completa (CRUD de produtos) usando TDD: escreva testes ANTES do código. Use Express.js ou FastAPI. Aplique pelo menos 3 princípios SOLID. Inclua CI com GitHub Actions rodando testes a cada push. Mínimo 80% de cobertura de testes.",
      "deliverable": "API com 80%+ coverage, pipeline CI green, README com decisões de design e princípios SOLID aplicados"
    },
    "advanced": {
      "title": "🔴 Artigo: Padrões de Design na Prática",
      "desc": "Escreva artigo técnico (2500+ palavras) implementando 6 padrões de design em um projeto real: Factory, Observer, Strategy, Singleton, Adapter e Decorator. Cada padrão com: problema que resolve, diagrama UML, código em Python e quando NÃO usar. Compare com abordagens sem pattern.",
      "deliverable": "Artigo Markdown com 6 padrões, diagramas UML, código funcional e análise de trade-offs"
    }
  },
  "Teoria da Computacao & Compiladores": {
    "basic": {
      "title": "🟢 Simulador de Autômatos Finitos",
      "desc": "Crie app web onde o usuário desenha DFA/NFA: adiciona estados, transições e marca inicial/final. Depois insere uma string e vê passo a passo se é aceita. Implemente conversão NFA→DFA. Mostre a tabela de transição.",
      "deliverable": "App web com editor visual de autômatos, animação de execução e conversão NFA→DFA"
    },
    "advanced": {
      "title": "🔴 Mini Linguagem com Lexer + Parser + Interpretador",
      "desc": "Crie uma linguagem de programação simples com: variáveis, if/else, while, funções e print. Construa lexer (tokenização), parser (AST) e interpretador que executa a AST. Escreva 5+ programas de exemplo na sua linguagem. Mensagens de erro úteis com linha e coluna.",
      "deliverable": "Interpretador funcional com lexer/parser/executor, 5+ programas de exemplo e mensagens de erro claras"
    }
  },
  "Matematica p/ ML": {
    "basic": {
      "title": "🟢 Regressão Linear do Zero (sem sklearn)",
      "desc": "Implemente regressão linear usando gradiente descendente em NumPy puro. Visualize: dados, reta ajustando a cada iteração, gráfico da loss diminuindo. Compare com solução analítica (equação normal). Teste em dataset real (housing prices).",
      "deliverable": "Notebook Jupyter com implementação manual, visualizações animadas e comparação com solução analítica"
    },
    "advanced": {
      "title": "🔴 PCA e SVD Implementados do Zero",
      "desc": "Implemente PCA usando autovalores/autovetores e SVD em NumPy puro. Aplique em dataset de imagens (ex: faces do sklearn) para redução de dimensionalidade. Visualize: variância explicada por componente, reconstrução com N componentes, e projeção 2D. Compare com sklearn.decomposition.PCA.",
      "deliverable": "Notebook com PCA e SVD do zero, visualizações de reconstrução de imagens e análise de variância"
    }
  },
  "Introducao a IA & ML": {
    "basic": {
      "title": "🟢 Classificador de Sentimento com Pipeline ML",
      "desc": "Construa pipeline completo: coleta de dados (reviews), EDA com pandas, preprocessamento (TF-IDF), treino de 3 modelos (Logistic Regression, Random Forest, SVM), cross-validation, comparação de métricas. Deploy como API simples com FastAPI.",
      "deliverable": "Notebook + API com pipeline reproduzível, comparação de 3 modelos e endpoint de predição"
    },
    "advanced": {
      "title": "🔴 Dashboard de ML Automatizado com Streamlit",
      "desc": "Crie dashboard Streamlit onde o usuário faz upload de CSV e o sistema automaticamente: faz EDA (distribuições, correlações, missing values), sugere tipo de problema (classificação/regressão), treina múltiplos modelos, mostra métricas comparativas e feature importance. Exporta melhor modelo.",
      "deliverable": "App Streamlit completa com AutoML simplificado, EDA automática e exportação de modelo"
    }
  },
  "Full-Stack": {
    "basic": {
      "title": "🟢 App de Notas com React + API REST",
      "desc": "Construa app full-stack de notas: React frontend com TypeScript (CRUD, busca, tags), Express/FastAPI backend com JWT auth, PostgreSQL/SQLite. Styled com Tailwind. Testes E2E básicos. Deploy frontend no Vercel e backend no Railway/Render.",
      "deliverable": "App deployada com frontend React, backend com auth JWT, banco de dados e testes"
    },
    "advanced": {
      "title": "🔴 Chat Real-time com WebSocket + GraphQL",
      "desc": "Construa app de chat com: React frontend, GraphQL API (Apollo/Hasura), WebSocket para mensagens em tempo real, autenticação, múltiplas salas, indicador de 'digitando', histórico de mensagens. Redis para pub/sub. Docker Compose para rodar tudo local.",
      "deliverable": "App de chat real-time com GraphQL subscriptions, WebSocket, Redis, Docker e auth completa"
    }
  },
  "Desenvolvimento Mobile (Intro)": {
    "basic": {
      "title": "🟢 App de Lista de Compras com React Native/Flutter",
      "desc": "Construa app mobile de lista de compras: adicionar/remover itens, marcar como comprado, categorias (frutas, carnes, limpeza), persistência local (AsyncStorage). Design limpo com ícones. Funciona offline.",
      "deliverable": "App mobile funcional com CRUD, categorias, persistência local e design polido"
    },
    "advanced": {
      "title": "🔴 App de Hábitos com Streaks e Notificações",
      "desc": "Construa habit tracker mobile: criar hábitos com frequência customizada, marcar conclusão diária, streak counter visual (calendário de calor), push notifications para lembrete, gráficos de progresso semanal/mensal. Backend com Firebase (auth + Firestore). Dark mode.",
      "deliverable": "App mobile com Firebase, push notifications, calendário de streaks, gráficos e dark mode"
    }
  },
  "DevOps & Infra": {
    "basic": {
      "title": "🟢 Deploy Completo com Docker + CI/CD",
      "desc": "Dockerize uma aplicação web (frontend + backend + banco). Crie docker-compose.yml que sobe tudo. Configure GitHub Actions para: rodar testes, buildar imagens e fazer deploy automático em ambiente de staging. Inclua health check e README com diagrama de arquitetura.",
      "deliverable": "Repositório com Dockerfiles, docker-compose, pipeline CI/CD green e diagrama de arquitetura"
    },
    "advanced": {
      "title": "🔴 Observabilidade Completa: Logs + Métricas + Tracing",
      "desc": "Instrumente uma aplicação Python (FastAPI) com as 3 fontes de observabilidade: logs estruturados (JSON com structlog), métricas (Prometheus client + Grafana dashboards), e tracing distribuído (OpenTelemetry). Crie Docker Compose com: app Python + Prometheus + Grafana + Jaeger. Configure alertas no Grafana (latência > 500ms, error rate > 5%). Simule carga com locust e observe dashboards. Crie runbook documentando como investigar problemas.",
      "deliverable": "Docker Compose com app Python instrumentada, Prometheus, Grafana com dashboards e alertas, Jaeger, runbook e load test"
    }
  },
  "Seguranca & Ethical Hacking (Intro)": {
    "basic": {
      "title": "🟢 Lab de CTF Pessoal",
      "desc": "Configure ambiente de estudo: Kali Linux em VM, TryHackMe/HackTheBox conta gratuita. Complete 5+ salas de CTF beginner. Para cada uma, escreva writeup detalhado: enumeração feita, ferramentas usadas, vulnerabilidade encontrada, exploração e lições aprendidas.",
      "deliverable": "5+ writeups de CTFs com screenshots, comandos usados e análise de cada vulnerabilidade"
    },
    "advanced": {
      "title": "🔴 Pentest Report de App Vulnerável",
      "desc": "Configure app vulnerável (DVWA ou Juice Shop). Realize pentest completo seguindo metodologia: reconhecimento, scanning (nmap, nikto), exploração (XSS, SQLi, CSRF, auth bypass). Escreva relatório profissional de pentest com: escopo, metodologia, achados classificados por severidade (CVSS), evidências e recomendações.",
      "deliverable": "Relatório de pentest profissional (PDF) com metodologia, 5+ vulnerabilidades e recomendações de correção"
    }
  },
  "Embarcados, Hardware & Automacao": {
    "basic": {
      "title": "🟢 Estação Meteorológica com Arduino/ESP32",
      "desc": "Monte estação que mede temperatura, umidade (DHT22) e pressão (BMP280). ESP32 envia dados via WiFi para servidor MQTT. Dashboard web mostra gráficos em tempo real. Alerta quando temperatura passa de threshold. Alimentação com bateria + painel solar (opcional).",
      "deliverable": "Hardware montado, firmware ESP32, broker MQTT, dashboard web com gráficos em tempo real"
    },
    "advanced": {
      "title": "🔴 Robô Seguidor de Linha com PID em FPGA",
      "desc": "Projete seguidor de linha: sensores IR leem a linha, lógica PID implementada em VHDL/Verilog no FPGA (ou Arduino se não tiver FPGA), motores DC com ponte H. Documente: esquemático, código HDL/C, tuning do PID (Kp, Ki, Kd), vídeo funcionando e análise de performance.",
      "deliverable": "Robô funcional com PID, código HDL, esquemático, vídeo demonstrativo e relatório técnico"
    }
  },
  "Arquitetura de Software": {
    "basic": {
      "title": "🟢 Design de Sistema: URL Shortener",
      "desc": "Projete e implemente um encurtador de URL completo: API REST, geração de hash único, redirecionamento, analytics (cliques por dia/região). Documente decisões de design: cache (Redis), banco (PostgreSQL), rate limiting. Escreva System Design Document com diagramas de arquitetura.",
      "deliverable": "App deployada com API, Redis cache, analytics e System Design Document com diagramas"
    },
    "advanced": {
      "title": "🔴 Clone Simplificado do Twitter com Microsserviços",
      "desc": "Projete sistema distribuído com 3+ microsserviços: User Service, Tweet Service, Timeline Service. Comunicação via events (Kafka/RabbitMQ). API Gateway com rate limiting. Documente: CAP tradeoffs, sharding strategy, caching layers, read/write paths. Load test com k6.",
      "deliverable": "Monorepo com 3+ microsserviços, message broker, API gateway, load tests e design document completo"
    }
  },
  "Deep Learning": {
    "basic": {
      "title": "🟢 Classificador de Imagens com CNN (PyTorch)",
      "desc": "Treine CNN do zero em dataset de imagens (CIFAR-10 ou custom). Implemente: data augmentation, batch normalization, dropout, learning rate scheduler. Compare com transfer learning (ResNet pré-treinada). Visualize filtros convolucionais e Grad-CAM. Deploy como API com FastAPI.",
      "deliverable": "Notebook com treino, comparação de modelos, Grad-CAM visualização e API de predição deployada"
    },
    "advanced": {
      "title": "🔴 Chatbot de FAQ com Fine-tuned Transformer",
      "desc": "Fine-tune modelo transformer (DistilBERT ou GPT-2) para responder perguntas de FAQ de domínio específico. Pipeline completo: coleta de dados, tokenização, treino, avaliação (BLEU, F1). Compare com abordagem RAG usando embeddings + vector search. Deploy com interface Gradio.",
      "deliverable": "Modelo fine-tuned, pipeline reproduzível, comparação fine-tune vs RAG e interface Gradio deployada"
    }
  },
  "AI Engineering": {
    "basic": {
      "title": "🟢 App RAG: Chat com seus Documentos",
      "desc": "Construa aplicação RAG completa: upload de PDFs, chunking, embeddings (OpenAI/HuggingFace), armazenamento em vector DB (Chroma/Pinecone), busca semântica e geração de resposta com LLM. Interface com Streamlit. Mostre fontes citadas em cada resposta.",
      "deliverable": "App Streamlit com upload de PDF, RAG pipeline, citação de fontes e avaliação de qualidade"
    },
    "advanced": {
      "title": "🔴 Sistema Multi-Agent com Tools e Planning",
      "desc": "Construa sistema de AI agents: um orquestrador que planeja, delega para agents especializados (pesquisador web, analista de dados, escritor) que usam ferramentas (search API, Python executor, file system). Implementar memory, retry e guardrails. Usar LangChain/LlamaIndex.",
      "deliverable": "Sistema multi-agent funcional com 3+ agents, tools, memória, guardrails e logs de execução"
    }
  },
  "Bioinformatica & Computacao Biologica": {
    "basic": {
      "title": "🟢 Pipeline de Análise Genômica",
      "desc": "Construa pipeline que: lê sequências FASTA, faz alinhamento com Biopython (pairwise e múltiplo), constrói árvore filogenética e visualiza. Analise dataset real (ex: variantes de SARS-CoV-2 do NCBI). Use Snakemake/Nextflow para orquestrar.",
      "deliverable": "Pipeline reproduzível com Snakemake, análise de sequências reais, árvore filogenética e relatório"
    },
    "advanced": {
      "title": "🔴 Preditor de Função de Proteínas com ML",
      "desc": "Treine modelo que prediz função/família de proteínas a partir da sequência de aminoácidos. Use features: composição de aminoácidos, motifs, embeddings de proteínas (ESM). Compare Random Forest, SVM e rede neural. Avalie com dados do UniProt. Visualize clusters com t-SNE.",
      "deliverable": "Modelo treinado, benchmark de 3+ algoritmos, visualizações t-SNE e notebook reproduzível"
    }
  },
  "Banco de Dados Avancado": {
    "basic": {
      "title": "🟢 PostgreSQL Performance Lab",
      "desc": "Configure PostgreSQL local. Crie banco com 1M+ rows. Escreva 10 queries complexas (JOINs, CTEs recursivas, window functions). Para cada: analise EXPLAIN ANALYZE antes e depois de otimizar (índices, rewrite). Documente ganho de performance. Configure pg_stat_statements.",
      "deliverable": "Relatório com 10 queries otimizadas, EXPLAIN ANALYZE antes/depois, índices criados e métricas"
    },
    "advanced": {
      "title": "🔴 Sistema Multi-DB: PostgreSQL + Redis + MongoDB",
      "desc": "Construa app que usa 3 bancos: PostgreSQL para dados relacionais (users, orders), Redis para cache e sessões, MongoDB para logs e dados semi-estruturados. Implemente padrão CQRS: writes vão para PostgreSQL, reads servidos do Redis/MongoDB. Docker Compose para tudo.",
      "deliverable": "App com 3 bancos, padrão CQRS, benchmarks de leitura/escrita e docker-compose completo"
    }
  },
  "Data Engineering": {
    "basic": {
      "title": "🟢 Pipeline ETL com Airflow + dbt",
      "desc": "Construa pipeline de dados completo: extraia dados de API pública (ex: clima, financeiro), carregue em PostgreSQL com Airflow (DAGs), transforme com dbt (staging → marts), valide com dbt tests. Dashboard final com Metabase ou Streamlit.",
      "deliverable": "Repositório com DAGs Airflow, projeto dbt com testes, e dashboard de visualização"
    },
    "advanced": {
      "title": "🔴 Streaming Pipeline: Kafka + Spark + Data Lake",
      "desc": "Monte pipeline de streaming: produtor gera eventos (simule clickstream), Kafka ingere, Spark Structured Streaming processa em tempo real (aggregações, windowing), resultados vão para data lake (Parquet particionado). Dashboard Grafana com métricas do pipeline.",
      "deliverable": "Pipeline Kafka→Spark→Parquet, docker-compose, dashboard de métricas e documentação de arquitetura"
    }
  },
  "Blockchain & Web3": {
    "basic": {
      "title": "🟢 DApp: Voting System com Solidity",
      "desc": "Desenvolva smart contract de votação: criar eleição, registrar candidatos, votar (1 voto por endereço), apurar resultados. Frontend com React + ethers.js. Testes com Hardhat. Deploy na testnet (Sepolia). Documente gas costs e segurança.",
      "deliverable": "Smart contract testado, frontend React, deploy na testnet e documentação de segurança"
    },
    "advanced": {
      "title": "🔴 DEX (Decentralized Exchange) Simplificada",
      "desc": "Implemente exchange descentralizada: pool de liquidez (AMM tipo Uniswap V1), swap de tokens ERC-20, provisão de liquidez com LP tokens. Proteja contra reentrancy. Frontend mostra preços, slippage e pool status. Testes extensivos com Foundry/Hardhat.",
      "deliverable": "Smart contracts AMM com testes de segurança, frontend funcional e análise de vulnerabilidades"
    }
  },
  "Cloud & Kubernetes": {
    "basic": {
      "title": "🟢 Deploy em Kubernetes com GitOps",
      "desc": "Crie cluster K8s local (kind/minikube). Deploy de app com: Deployment, Service, Ingress, ConfigMap, Secrets. Configure ArgoCD para GitOps: mudanças no repo Git são automaticamente aplicadas no cluster. HPA para auto-scaling. Monitore com Prometheus + Grafana.",
      "deliverable": "Cluster K8s com app, ArgoCD configurado, HPA, Prometheus+Grafana e README com arquitetura"
    },
    "advanced": {
      "title": "🔴 Multi-Service Platform no Kubernetes",
      "desc": "Deploy de plataforma com 4+ serviços em K8s: API gateway (Nginx Ingress), 2 microsserviços, banco (StatefulSet), cache (Redis), message broker (RabbitMQ). Service mesh básico com Linkerd. Helm charts para cada serviço. Chaos engineering com Litmus.",
      "deliverable": "Cluster K8s com 4+ serviços, Helm charts, service mesh, chaos testing e runbook de operações"
    }
  },
  "DevSecOps & Seguranca": {
    "basic": {
      "title": "🟢 Security Pipeline com CI/CD",
      "desc": "Configure pipeline de segurança completo no GitHub Actions: SAST (Semgrep), SCA (Trivy para dependências), container scanning (Trivy para Docker), secrets scanning (gitleaks). Quebre o build se encontrar vulnerabilidade crítica. Gere relatório SARIF.",
      "deliverable": "Pipeline CI/CD com 4 ferramentas de segurança, relatórios SARIF e documentação de políticas"
    },
    "advanced": {
      "title": "🔴 Threat Model + Security Hardening de App Real",
      "desc": "Escolha app open source (ex: OWASP Juice Shop pré-corrigido). Faça threat modeling (STRIDE), identifique 10+ ameaças, implemente mitigações: CSP headers, rate limiting, WAF rules, mTLS entre serviços, secrets rotation. Documente postura de segurança antes/depois.",
      "deliverable": "Threat model STRIDE, 10+ mitigações implementadas, relatório antes/depois e checklist de hardening"
    }
  },
  "Ethical Hacking: Web & Redes": {
    "basic": {
      "title": "🟢 Lab de Vulnerabilidades Web (DVWA/Juice Shop)",
      "desc": "Configure ambiente de prática: instale DVWA ou Juice Shop em Docker. Para 5 tipos de vulnerabilidade (SQL Injection, XSS refletido, XSS armazenado, CSRF, IDOR), faça: 1) entenda a vulnerabilidade, 2) explore no nível fácil, 3) explore no nível médio, 4) documente como funciona e como corrigir. Use Burp Suite Community para interceptar requests. Escreva writeup para cada vulnerabilidade.",
      "deliverable": "5 writeups de vulnerabilidades web com screenshots, passos de reprodução, explicação técnica e recomendação de correção"
    },
    "advanced": {
      "title": "🔴 Rede Vulnerável + Lateral Movement Lab",
      "desc": "Monte lab com 3+ VMs (atacante Kali + 2 alvos Windows/Linux). Execute: network scanning, exploitation de serviço vulnerável, privilege escalation, credential dumping, lateral movement para segunda máquina. Documente kill chain completa com evidências.",
      "deliverable": "Lab de 3+ VMs, kill chain documentada, evidências de cada fase e relatório com mitigações"
    }
  },
  "Robotica, IoT & Automacao Avancada": {
    "basic": {
      "title": "🟢 Robô Autônomo em Simulação (ROS + Gazebo)",
      "desc": "Crie robô no Gazebo com: sensores (câmera, LiDAR), navegação autônoma com SLAM, detecção de obstáculos. Use ROS 2 com nós para percepção, planejamento e controle. Visualize mapa construído em RViz. Navegue autonomamente entre waypoints.",
      "deliverable": "Pacote ROS 2 com simulação Gazebo, SLAM funcional, navegação autônoma e documentação"
    },
    "advanced": {
      "title": "🔴 Sistema IoT Industrial com Digital Twin",
      "desc": "Construa sistema IoT de monitoramento industrial: sensores ESP32 medem vibração e temperatura de motor, enviam via MQTT para gateway, pipeline processa e alimenta digital twin 3D (Three.js ou Unity). Dashboard com alertas preditivos (anomaly detection com ML). OPC UA para integração.",
      "deliverable": "Hardware IoT, pipeline MQTT, digital twin 3D, ML para anomalias e dashboard com alertas"
    }
  },
  "Sistemas Distribuidos": {
    "basic": {
      "title": "🟢 Key-Value Store Distribuído",
      "desc": "Implemente key-value store distribuído em Python/Go: 3 nós, consistent hashing para particionamento, replicação com quorum (W=2, R=2, N=3). Cliente faz GET/PUT via HTTP. Simule falha de nó e demonstre que sistema continua funcionando. Visualize o hash ring.",
      "deliverable": "KV store com 3 nós, consistent hashing, replicação quorum, tolerância a falhas e visualização do ring"
    },
    "advanced": {
      "title": "🔴 Implementação de Raft Consensus",
      "desc": "Implemente protocolo Raft do zero: leader election com timeouts aleatórios, log replication, safety, membership changes. Teste com 5 nós simulados. Injete falhas (kill leader, network partition) e demonstre que consenso se mantém. Visualize estado de cada nó em tempo real.",
      "deliverable": "Implementação completa de Raft, test suite com fault injection, visualização de estados e paper review"
    }
  },
  "MLOps & Producao": {
    "basic": {
      "title": "🟢 Pipeline ML End-to-End com MLflow",
      "desc": "Construa pipeline completo: data versioning (DVC), experiment tracking (MLflow), treino automatizado, model registry, serving com FastAPI, monitoramento de drift (Evidently). Tudo em Docker Compose. Retreine automaticamente quando drift é detectado.",
      "deliverable": "Pipeline MLOps com DVC, MLflow, serving, drift monitoring, auto-retrain e docker-compose"
    },
    "advanced": {
      "title": "🔴 Plataforma de ML com A/B Testing e Feature Store",
      "desc": "Construa plataforma interna de ML: feature store (Feast), training pipeline (Kubeflow/Airflow), model registry (MLflow), A/B testing framework com split de tráfego e métricas de negócio, canary deployment, dashboards de monitoramento. Deploy em K8s.",
      "deliverable": "Plataforma ML com feature store, A/B testing, canary deploy, K8s e documentação de arquitetura"
    }
  },
  "Pesquisa & Fronteira": {
    "basic": {
      "title": "🟢 Agente de RL para Jogo (Gymnasium)",
      "desc": "Treine agente de reinforcement learning para jogar ambiente do Gymnasium (CartPole, LunarLander ou Atari). Implemente DQN do zero em PyTorch. Compare com PPO do Stable-Baselines3. Visualize: reward curve, policy learned, vídeo do agente jogando.",
      "deliverable": "Notebook com DQN do zero, comparação com PPO, gráficos de treino e vídeo do agente"
    },
    "advanced": {
      "title": "🔴 Circuito Quântico: Algoritmo de Deutsch-Jozsa em Qiskit",
      "desc": "Implemente algoritmo de Deutsch-Jozsa em Qiskit: construa circuito com portas Hadamard, oracles constante e balanceado, medição. Execute no simulador e em hardware real da IBM Quantum. Compare resultados. Explique passo a passo com diagramas de circuito e vetores de estado.",
      "deliverable": "Notebook Qiskit com circuito, execução em simulador e hardware real, diagramas e explicação pedagógica"
    }
  },
  "Escrita e Metodologia Cientifica": {
    "basic": {
      "title": "🟢 Revisão Sistemática Mini (5 papers)",
      "desc": "Escolha tema em computação. Defina pergunta de pesquisa, critérios de inclusão/exclusão. Busque em Google Scholar e ACM/IEEE. Selecione 5 papers, extraia dados em tabela comparativa (abordagem, dataset, resultados). Escreva relatório em LaTeX com BibTeX seguindo template de conferência.",
      "deliverable": "Relatório LaTeX com revisão de 5 papers, tabela comparativa, BibTeX e análise de gaps"
    },
    "advanced": {
      "title": "🔴 Paper Completo Seguindo Template de Conferência",
      "desc": "Escreva artigo completo (6-10 páginas) seguindo template ACM/IEEE: Abstract, Introduction, Related Work, Methodology, Results, Discussion, Conclusion. Use LaTeX + BibTeX com 15+ referências. Inclua figuras, tabelas e pseudo-código. Peça feedback a alguém. Submeta ao ArXiv como preprint.",
      "deliverable": "Paper completo em LaTeX, formatado para conferência, com 15+ referências e submetido ao ArXiv"
    }
  },
  "Iniciacao Cientifica (IC)": {
    "basic": {
      "title": "🟢 Proposta de Pesquisa de IC",
      "desc": "Escreva proposta de IC completa: escolha tema alinhado com professor da sua universidade. Inclua: introdução com motivação, objetivos geral e específicos, revisão de literatura (10+ referências), metodologia proposta, cronograma semestral e resultados esperados. Formate para PIBIC/FAPESP.",
      "deliverable": "Proposta de IC formatada para edital com cronograma, revisão de literatura e metodologia"
    },
    "advanced": {
      "title": "🔴 Relatório Final de IC com Resultados",
      "desc": "Conduza mini-pesquisa em computação: defina hipótese, implemente experimento (pode ser replicação de paper), colete e analise dados. Escreva relatório final: introdução, metodologia, resultados com gráficos, discussão e conclusão. Prepare pôster para apresentação.",
      "deliverable": "Relatório final de pesquisa com resultados, código, gráficos e pôster acadêmico"
    }
  },
  "Mestrado": {
    "basic": {
      "title": "🟢 Análise Crítica de 3 Dissertações",
      "desc": "Leia 3 dissertações de mestrado em computação de programas nota 5+ (CAPES). Para cada: resuma contribuição, avalie metodologia (pontos fortes e fracos), identifique gap. Escreva análise comparativa: como se relacionam, o que uma faz que outra não faz, possíveis extensões.",
      "deliverable": "Análise comparativa de 3 dissertações com resumo, avaliação crítica e sugestão de extensões"
    },
    "advanced": {
      "title": "🔴 Proposta de Dissertação de Mestrado",
      "desc": "Escreva proposta completa de dissertação: problema, hipótese, revisão de literatura (30+ refs), metodologia detalhada (design experimental, métricas de avaliação), cronograma de 24 meses, resultados preliminares (se houver). Valide com professor. Formate para qualificação.",
      "deliverable": "Proposta de dissertação completa com 30+ referências, metodologia, cronograma e formato para qualificação"
    }
  },
  "Doutorado": {
    "basic": {
      "title": "🟢 Mapeamento de Área de Pesquisa",
      "desc": "Escolha subárea de computação. Mapeie: 10 grupos de pesquisa mais influentes (universidades), 20 papers seminais, 5 conferências/periódicos top, tendências atuais, problemas em aberto. Use Connected Papers para visualizar relações. Escreva survey de 3000+ palavras.",
      "deliverable": "Survey de subárea com mapa de grupos, papers seminais, grafo de relações e problemas em aberto"
    },
    "advanced": {
      "title": "🔴 Proposta de Tese de Doutorado (Mock)",
      "desc": "Escreva proposta de tese: identifique problema original em aberto, formule hipóteses, proponha metodologia com 3+ experimentos, resultados esperados, contribuições previstas. Revisão de literatura com 50+ referências. Cronograma de 4 anos. Prepare apresentação de qualificação.",
      "deliverable": "Proposta de tese com 50+ refs, 3+ experimentos, cronograma de 4 anos e slides de qualificação"
    }
  },
  "Ferramentas e Recursos Academicos": {
    "basic": {
      "title": "🟢 Setup Acadêmico Completo",
      "desc": "Configure ambiente de pesquisa: Overleaf com template de conferência (ACM/IEEE), Zotero com 20+ papers organizados em coleções, ORCID configurado, perfil Google Scholar criado, Jupyter Notebook com análise reproduzível de dataset público. Documente workflow em README.",
      "deliverable": "Ambiente configurado: Overleaf, Zotero com 20+ papers, ORCID, Google Scholar e notebook reproduzível"
    },
    "advanced": {
      "title": "🔴 Pipeline de Pesquisa Reproduzível",
      "desc": "Construa pipeline de pesquisa reproduzível completo: repo Git com código, DVC para dados, Makefile/Snakemake para pipeline, Docker para ambiente, Jupyter notebooks com análise, LaTeX para paper, CI que roda experimentos e gera figuras. Qualquer pessoa clona e reproduz.",
      "deliverable": "Repositório Git com pipeline reproduzível: Docker, DVC, Make, notebooks, LaTeX e CI completo"
    }
  },
  "Lideranca Tecnica": {
    "basic": {
      "title": "🟢 Runbook e ADR Collection",
      "desc": "Para projeto existente (seu ou open source), escreva: 3 ADRs (Architectural Decision Records) documentando decisões técnicas, 3 runbooks para cenários de incidente (deploy failed, banco lento, API down), e playbook de on-call com escalation matrix.",
      "deliverable": "3 ADRs, 3 runbooks, playbook de on-call e documentação de escalation"
    },
    "advanced": {
      "title": "🔴 RFC + Implementação de Mudança Arquitetural",
      "desc": "Escreva RFC propondo mudança significativa em projeto: migração de monolito para microsserviço, novo sistema de cache, mudança de banco. Inclua: contexto, proposta, alternativas, rollout plan, rollback plan. Solicite feedback (simule ou peça a colegas). Implemente fase 1.",
      "deliverable": "RFC completo com feedback incorporado, fase 1 implementada e métricas de antes/depois"
    }
  },
  "Redes de Computadores": {
    "basic": {
      "title": "🟢 Lab de Redes: Subnetting + Análise de Pacotes",
      "desc": "Configure rede virtual no Packet Tracer ou GNS3: 3 sub-redes (/24, /25, /26) interligadas por roteador. Configure DHCP, DNS local e firewall com regras. Capture tráfego com Wireshark e analise: identifique handshake TCP, queries DNS, headers HTTP. Documente cada camada OSI vista nos pacotes.",
      "deliverable": "Lab virtual com 3 sub-redes, capturas Wireshark anotadas mostrando cada camada OSI e relatório de análise de pacotes"
    },
    "advanced": {
      "title": "🔴 Rede Corporativa Simulada com VLANs, VPN e Monitoramento",
      "desc": "Projete rede corporativa completa no GNS3/EVE-NG: 4 VLANs (RH, Dev, Servidores, Guest), inter-VLAN routing, NAT para internet, firewall com regras por VLAN, VPN site-to-site (IPSec), servidor DHCP e DNS. Configure Nagios/Zabbix para monitoramento. Documente topologia, tabelas de roteamento, regras de firewall e diagrama de rede.",
      "deliverable": "Rede simulada com VLANs, VPN, firewall, monitoramento, diagrama de topologia e documentação completa"
    }
  },
  "Arquitetura de Computadores": {
    "basic": {
      "title": "🟢 Simulador de CPU Pipeline em Python",
      "desc": "Implemente simulador de CPU com pipeline de 5 estágios (IF/ID/EX/MEM/WB). Carregue programa em assembly simplificado (ADD, SUB, LW, SW, BEQ). Visualize: estado de cada estágio por ciclo, detecte data hazards, implemente forwarding e stalls. Mostre CPI final e compare pipeline vs single-cycle.",
      "deliverable": "Simulador Python com visualização ciclo-a-ciclo do pipeline, detecção de hazards, forwarding e comparação de CPI"
    },
    "advanced": {
      "title": "🔴 Processador RISC-V Simplificado em Verilog/VHDL",
      "desc": "Projete processador RISC-V (RV32I subset) em HDL: datapath com ALU, register file, memória, unidade de controle. Implemente 10+ instruções (ADD, SUB, AND, OR, LW, SW, BEQ, JAL). Simule no Vivado/Icarus Verilog. Opcional: sintetize em FPGA. Documente diagrama de blocos, tabela de controle e testbench.",
      "deliverable": "Processador RISC-V em HDL com 10+ instruções, testbench, simulação funcional e documentação do datapath"
    }
  },
  "Sinais e Sistemas": {
    "basic": {
      "title": "🟢 Analisador de Espectro de Áudio em Python",
      "desc": "Construa analisador que carrega arquivo WAV, aplica FFT com numpy e mostra espectro de frequências com print formatado no terminal (barras ASCII por faixa de frequência). Use scipy.signal para aplicar filtro passa-baixa interativo (usuário define frequência de corte). Salve áudio filtrado. Compare espectro antes e depois do filtro. Identifique frequência dominante (nota musical mais próxima).",
      "deliverable": "Script Python com análise FFT, filtro passa-baixa scipy, comparação antes/depois e identificação de notas"
    },
    "advanced": {
      "title": "🔴 Processador de Sinais: Filtros e Compressão de Áudio",
      "desc": "Implemente do zero em Python: filtro FIR e IIR (passa-baixa, passa-alta), aplique em áudio real. Visualize resposta em frequência e espectrograma antes/depois. Implemente compressão de áudio simplificada: DCT, quantização, reconstrução. Compare qualidade (SNR) em diferentes taxas de compressão. Documente a matemática.",
      "deliverable": "Notebook com filtros FIR/IIR implementados do zero, espectrogramas, compressor de áudio com análise de SNR e documentação matemática"
    }
  },
  "Java & Ecossistema JVM": {
    "basic": {
      "title": "🟢 API REST com Spring Boot + JPA",
      "desc": "Construa API REST completa com Spring Boot: CRUD de entidades (ex: e-commerce com produtos, categorias, pedidos). Use Spring Data JPA com PostgreSQL, validação com Bean Validation, DTOs, tratamento de erros global (@ControllerAdvice). Testes com JUnit 5 + Mockito. Swagger/OpenAPI para documentação. Docker Compose para banco.",
      "deliverable": "API Spring Boot com JPA, PostgreSQL, Swagger, testes unitários/integração, Docker Compose e README com instruções"
    },
    "advanced": {
      "title": "🔴 Sistema com 2 Microsserviços Spring Boot comunicando via REST",
      "desc": "Construa sistema com 2 microsserviços Spring Boot comunicando via REST: Order Service (CRUD de pedidos com JPA, validação, JWT auth com Spring Security) e Notification Service (recebe webhook POST quando pedido é criado e registra notificação). Inclua: circuit breaker com Resilience4j (fallback quando Notification está down), health checks com Actuator, métricas com Micrometer, Docker Compose para subir tudo (app + PostgreSQL), testes com JUnit 5 + Mockito + TestContainers.",
      "deliverable": "2 microsserviços Spring Boot com REST, circuit breaker, JWT auth, Docker Compose, Actuator e testes"
    }
  },
  "Go (Golang)": {
    "basic": {
      "title": "🟢 CLI Tool em Go: Gerenciador de Tarefas",
      "desc": "Construa CLI de gerenciamento de tarefas em Go usando Cobra: add, list, done, delete. Persistência em JSON local. Formatação com cores (lipgloss/charm). Testes com go test. Cross-compile para Linux, Mac e Windows. Publique no GitHub com goreleaser para binários automáticos.",
      "deliverable": "CLI Go funcional com Cobra, persistência JSON, testes, binários cross-platform e release automatizado"
    },
    "advanced": {
      "title": "🔴 API Concorrente em Go com Worker Pool",
      "desc": "Construa API REST em Go (Gin/Echo) que processa jobs assíncronos: recebe request, enfileira em channel, worker pool de goroutines processa em paralelo, retorna status via polling ou WebSocket. Use context para timeout/cancelamento, pprof para profiling, race detector nos testes. Redis para fila persistente. Deploy com Docker (imagem scratch < 10MB).",
      "deliverable": "API Go com worker pool, channels, Redis queue, WebSocket, profiling pprof, Docker scratch image e load test com k6"
    }
  },
  "Forense Digital & Cloud Security": {
    "basic": {
      "title": "🟢 Lab de Forense de Disco + Cloud Enumeration",
      "desc": "Monte lab de forense: adquira imagem de disco (dd/FTK Imager de VM preparada), analise com Autopsy (timeline, file carving, deleted files, browser history). Em paralelo, configure ambiente cloud vulnerável (flAWS.cloud ou CloudGoat) e faça enumeração: listar buckets S3 públicos, verificar policies IAM, encontrar credenciais expostas. Documente com chain of custody e screenshots.",
      "deliverable": "Relatório de forense de disco com timeline + enumeração de cloud com achados, chain of custody e evidências"
    },
    "advanced": {
      "title": "🔴 Incident Response Simulado: Ataque Cloud + Forense",
      "desc": "Simule incidente completo: configure CloudGoat, execute ataque (escalação IAM, exfiltração S3), depois atue como blue team. Use CloudTrail logs para reconstruir timeline do ataque, identifique IOCs, execute containment (revogar credenciais, isolar recursos). Faça aquisição forense do disco da instância comprometida, analise com Autopsy. Escreva relatório de incident response completo.",
      "deliverable": "Relatório de IR com timeline de ataque via CloudTrail, análise forense de disco, IOCs e recomendações de remediação"
    }
  },
  "Seguranca Defensiva, Forense Avancada & Blue Team": {
    "basic": {
      "title": "🟢 Lab de Memory Forensics + Network Analysis",
      "desc": "Faça dump de memória de VM infectada (com malware de treinamento) usando WinPmem/LiME. Analise com Volatility 3: liste processos (pslist/psscan), encontre processos ocultos, extraia DLLs suspeitas, verifique conexões de rede (netscan). Em paralelo, capture PCAP com tcpdump e analise com Wireshark: identifique C2 communication, DNS tunneling, data exfiltration. Correlacione achados memória + rede.",
      "deliverable": "Relatório com análise de memória (Volatility) + rede (Wireshark), processos maliciosos identificados e correlação de evidências"
    },
    "advanced": {
      "title": "🔴 SOC Analyst Simulation: Threat Hunting + DFIR",
      "desc": "Monte mini-SOC: configure ELK Stack (Elasticsearch + Logstash + Kibana) para ingestão de logs. Injete logs de ataque simulado (Atomic Red Team ou CALDERA). Execute threat hunting: crie hipóteses, busque IOCs nos logs, identifique TTPs (MITRE ATT&CK). Quando encontrar evidência de comprometimento, execute DFIR completo: memory dump + disk image + network capture. Escreva relatório dual: threat hunting report + incident response report.",
      "deliverable": "Mini-SOC com ELK, threat hunting report com TTPs mapeados ao MITRE ATT&CK, e relatório DFIR completo"
    }
  },
  "Aprendizado & Preparacao de Carreira": {
    "basic": {
      "title": "🟢 Plano de Estudo Pessoal de 12 Meses",
      "desc": "Crie roadmap pessoal: auto-avaliação de skills (heatmap), definir 3 objetivos de carreira, mapear gaps, selecionar recursos (cursos, livros, projetos) por trimestre. Use spaced repetition (Anki) para conceitos. Revisão mensal de progresso. Documente publicamente.",
      "deliverable": "Roadmap pessoal de 12 meses com heatmap de skills, recursos por trimestre e sistema de revisão"
    },
    "advanced": {
      "title": "🔴 Portfolio Profissional Completo",
      "desc": "Construa presença profissional completa: GitHub com 5+ projetos showcasing diferentes habilidades, site pessoal (blog técnico com 3+ artigos), LinkedIn otimizado, README de perfil, contribuição a open source (3+ PRs merged), writeup de CTF ou artigo técnico publicado.",
      "deliverable": "GitHub com 5+ projetos, site pessoal com blog, LinkedIn otimizado, contribuições open source e artigo técnico"
    }
  },
  "Trilhas, Crescimento & Transicoes": {
    "basic": {
      "title": "🟢 Mapeamento de Trilha de Carreira",
      "desc": "Pesquise e documente 3 trilhas de carreira em tech que te interessam (ex: backend dev, security engineer, ML engineer). Para cada: perfil do profissional, skills necessários, ferramentas/linguagens, certificações relevantes, faixa salarial (Brasil e exterior), como é o dia a dia, como começar. Entreviste (ou pesquise depoimentos de) 1 profissional de cada trilha.",
      "deliverable": "Documento com 3 trilhas mapeadas, skills, salários, certificações e depoimentos/pesquisas de profissionais"
    },
    "advanced": {
      "title": "🔴 Plano de Transição com Evidências",
      "desc": "Escolha uma transição de carreira (ex: dev → security, dev → ML, academia → indústria). Crie plano detalhado: gap analysis (o que já sabe vs o que precisa), cronograma de 6 meses com milestones, 3 projetos que demonstram a nova skill, certificação target, networking plan. Execute pelo menos o primeiro milestone e documente resultados.",
      "deliverable": "Plano de transição com gap analysis, cronograma, primeiro milestone executado e evidências de progresso"
    }
  },
  "AR/VR/XR & Computação Espacial": {
    "basic": {
      "title": "🟢 Visualizador AR de objeto 3D no navegador",
      "desc": "Crie uma página WebXR/Three.js que coloca um modelo 3D simples (cubo, modelo .glb) no mundo via AR no celular. Use Three.js (que você viu em Computação Gráfica) + a API WebXR. Detecte uma superfície e ancore o objeto; permita girar/escalar com toque. Sem frameworks pesados — HTML, JS e Three.js puro.",
      "deliverable": "Página WebXR hospedável (GitHub Pages) que exibe um objeto 3D em AR no celular, com README de como testar"
    },
    "advanced": {
      "title": "🔴 Experiência VR interativa com cena navegável",
      "desc": "Construa uma cena VR navegável em WebXR + Three.js: ambiente 3D, iluminação, objetos interativos. Implemente locomoção por teleporte (reduz enjoo) e interação com controllers (grab/click). Otimize pra manter frame rate alto (instancing, LOD simples, geometria leve). Adicione UI espacial (painel flutuante) e áudio posicional.",
      "deliverable": "Aplicação VR WebXR completa com cena navegável, interação por controller, teleporte e UI espacial, mais documentação de performance"
    }
  },
  "Finanças Quantitativas & Fintech": {
    "basic": {
      "title": "🟢 Analisador de carteira de ações",
      "desc": "Em Python, baixe dados históricos (yfinance) de algumas ações e calcule retornos, volatilidade e correlação. Use pandas pra séries temporais e matplotlib pra visualizar preços e retornos. Calcule o Sharpe ratio da carteira e mostre a matriz de correlação. Tudo com bibliotecas que você já estudou (pandas, numpy, matplotlib).",
      "deliverable": "Notebook/script Python que recebe tickers, baixa dados e gera relatório com retornos, volatilidade, correlação e Sharpe ratio, com gráficos"
    },
    "advanced": {
      "title": "🔴 Backtester de estratégia quantitativa",
      "desc": "Construa um backtester que testa uma estratégia (ex: mean reversion ou momentum) em dados históricos. Implemente position sizing, stop loss e cálculo de drawdown máximo. Inclua custos de transação e evite look-ahead bias (use só dados disponíveis no momento). Faça out-of-sample testing: separe dados de teste que você nunca otimizou. Compare métricas (retorno, Sharpe, max drawdown).",
      "deliverable": "Backtester em Python com estratégia configurável, gestão de risco, custos de transação, validação out-of-sample e relatório de métricas com gráficos de equity curve"
    }
  },
  "Open Source na Prática": {
    "basic": {
      "title": "🟢 Primeira contribuição real a um projeto open source",
      "desc": "Escolha um projeto open source que você USA e que tenha issues 'good first issue'. Rode o projeto localmente, leia o CONTRIBUTING e entenda o fluxo principal. Faça uma contribuição real: corrigir doc, bug pequeno, teste ou melhoria. Siga o workflow completo: fork, branch, commit claro, PR, e responda ao code review.",
      "deliverable": "Um Pull Request aceito (ou em review sério) em um projeto open source real, documentando o processo: como achou a issue, como abordou e o que aprendeu com o review"
    },
    "advanced": {
      "title": "🔴 Publicar e manter seu próprio projeto open source",
      "desc": "Transforme um projeto seu (ex: ferramenta, biblioteca) em open source profissional. Escreva README que vende, CONTRIBUTING, escolha uma licença adequada e configure CI (GitHub Actions rodando testes/lint). Use versionamento semântico, crie releases com changelog e organize issues/labels. Divulgue, receba ao menos uma contribuição externa e faça um code review acolhedor.",
      "deliverable": "Repositório open source publicado e mantido: README completo, licença, CONTRIBUTING, CI funcionando, SemVer com releases, e pelo menos uma issue/PR externa tratada profissionalmente"
    }
  },
  "Computação Gráfica": {
    "basic": {
      "title": "🟢 Cena 3D interativa no navegador",
      "desc": "Crie uma cena 3D interativa com Three.js no navegador. Modele ou carregue objetos 3D, aplique materiais e texturas, e configure iluminação (ambient, directional, point). Adicione controles de câmera (orbitar, zoom) e animação de pelo menos um objeto. Foque nos fundamentos: transformações, projeção, e o pipeline de renderização que você estudou.",
      "deliverable": "Cena 3D interativa publicada (GitHub Pages) com objetos, materiais, iluminação, câmera controlável e animação, mais um README explicando os conceitos de CG aplicados"
    },
    "advanced": {
      "title": "🔴 Renderizador ou visualização 3D com shaders",
      "desc": "Construa algo graficamente ambicioso: um mini-renderizador, um visualizador de dados 3D, ou uma cena com shaders customizados (GLSL). Implemente efeitos visuais (iluminação avançada, sombras, pós-processamento) e otimize a performance (draw calls, LOD). Demonstre domínio do pipeline gráfico e da matemática 3D.",
      "deliverable": "Aplicação gráfica 3D com shaders customizados, efeitos visuais e otimização, publicada, com documentação técnica do pipeline de renderização e das técnicas usadas"
    }
  },
  "Game Design (Fundamentos)": {
    "basic": {
      "title": "🟢 Seu primeiro jogo completo (na ferramenta que quiser)",
      "desc": "Crie um jogo pequeno e COMPLETO usando a ferramenta que preferir: uma engine para iniciantes (Godot, GameMaker, Construct), uma ferramenta no-code (GDevelop, Scratch), Twine (jogo de texto) ou até no papel. O foco é o design, não a tecnologia: defina um objetivo claro, regras simples e uma mecânica central divertida. Faça do início ao fim, com tela de começo e de fim.",
      "deliverable": "Um jogo pequeno e jogável (do começo ao fim) criado em qualquer ferramenta, acompanhado de um parágrafo explicando a mecânica central, o objetivo e por que ele é divertido"
    },
    "advanced": {
      "title": "🔴 Jogo com design intencional, prototipado e testado",
      "desc": "Faça um jogo mais completo aplicando o processo de design: prototipe a ideia rápido, faça playtesting com pelo menos 2 pessoas e itere com base no que observou. Capriche no game feel (feedback, ritmo) e tenha uma curva de dificuldade pensada. Use a ferramenta que quiser — o que importa é mostrar decisões de design conscientes.",
      "deliverable": "Um jogo jogável criado em qualquer ferramenta, com curva de dificuldade e game feel cuidados, mais um documento curto registrando o protótipo inicial, o que mudou após o playtesting e as decisões de design tomadas"
    }
  },
  "Game Design (Teoria & Design)": {
    "basic": {
      "title": "🟢 Protótipo jogável com design intencional",
      "desc": "Crie um protótipo de jogo 2D numa engine (Godot) ou um jogo de tabuleiro/cartas no papel. O foco é o DESIGN, não a tecnologia: defina o core loop, as mecânicas centrais, a curva de dificuldade e o objetivo. Aplique o framework MDA e garanta game feel (no digital) ou clareza de regras (no analógico).",
      "deliverable": "Um protótipo jogável (digital em Godot OU de tabuleiro/cartas) com um documento de design curto explicando mecânicas, dinâmicas pretendidas e a experiência (estética) que você busca"
    },
    "advanced": {
      "title": "🔴 Jogo com níveis, narrativa e identidade (ou jogo de cartas balanceado)",
      "desc": "Escolha um caminho: (A) jogo digital com vários níveis projetados (pacing, guiar o olhar), narrativa integrada à jogabilidade e direção de arte/som coesa; OU (B) um jogo de cartas/tabuleiro completo (você curte MTG/Pokémon TCG) com economia, sinergias e balanceamento real. Ajuste tudo com playtesting e cuide de UX e acessibilidade.",
      "deliverable": "Um jogo completo (digital com 3+ níveis OU de cartas/tabuleiro jogável e balanceado) com identidade coesa, mais um GDD cobrindo mecânicas, níveis/economia, narrativa e resultados de playtesting"
    }
  },
  "Game Design (Dev Avançado)": {
    "basic": {
      "title": "🟢 Jogo com sistemas avançados e geração procedural",
      "desc": "Desenvolva um jogo numa engine usando padrões de programação (component/ECS, object pooling, state machine). Inclua geração procedural (dungeons, mapas ou níveis via noise, BSP ou WFC) para rejogabilidade, física/colisão e IA de inimigos simples (behavior tree ou state machine). Implemente um save system.",
      "deliverable": "Jogo com arquitetura baseada em padrões, geração procedural de conteúdo, IA de inimigos e save system funcionando, publicado no itch.io com README técnico"
    },
    "advanced": {
      "title": "🔴 Jogo de produção completa: do design ao lançamento",
      "desc": "Trate como produção profissional de verdade. Defina escopo realista, faça um vertical slice, e produza um jogo polido com PCG, multiplayer local ou netcode básico, e sistemas balanceados. Faça playtesting estruturado (observação + métricas). Lance publicamente com página de loja, trailer curto e devlog documentando o processo.",
      "deliverable": "Jogo completo lançado publicamente (página de loja, trailer) com PCG, sistemas avançados e balanceamento testado, mais um GDD + postmortem documentando design, produção, playtesting e o que você aprendeu"
    }
  },
  "Liderança & Gestão de Pessoas": {
    "basic": {
      "title": "🟢 Kit de gestão de um time pequeno",
      "desc": "Monte os artefatos essenciais pra liderar um time: um template de 1:1 (perguntas, ritmo, follow-up), um framework de feedback (SBI — Situação, Comportamento, Impacto) com exemplos, e um plano de onboarding 30/60/90 dias pra um novo membro. Baseie tudo em situações reais ou simuladas que você já viu.",
      "deliverable": "Um kit de gestão com template de 1:1, guia de feedback SBI com exemplos e plano de onboarding 30/60/90, pronto pra usar com um time real"
    },
    "advanced": {
      "title": "🔴 Plano de desenvolvimento e métricas de um time",
      "desc": "Crie um sistema de gestão de pessoas mais completo: defina métricas saudáveis de time (incluindo DORA pra times técnicos), um plano de carreira/crescimento com níveis e expectativas claras, e conduza (ou simule) um postmortem blameless de um incidente. Inclua como lidar com baixo desempenho de forma construtiva.",
      "deliverable": "Um plano de gestão de time com métricas definidas, framework de níveis/crescimento, um postmortem blameless documentado e um guia de conversas difíceis"
    }
  },
  "Produto, Estratégia & Negócio": {
    "basic": {
      "title": "🟢 Discovery e definição de um produto",
      "desc": "Pratique product thinking: faça discovery com 5 usuários (entrevistas), defina o problema e a North Star Metric, esboce wireframes da solução e priorize funcionalidades com um framework (RICE ou MoSCoW). Documente as decisões e o porquê de cada uma.",
      "deliverable": "Um documento de discovery de produto com insights de 5 entrevistas, problema definido, North Star Metric, wireframes e backlog priorizado por RICE"
    },
    "advanced": {
      "title": "🔴 Plano de negócio e pitch de uma ideia",
      "desc": "Transforme uma ideia em proposta de negócio: monte um Business Model Canvas, faça análise de mercado (TAM/SAM/SOM), defina modelo de monetização e métricas-chave, e prepare um pitch deck de ~10 slides. Pense em viabilidade técnica e em go-to-market.",
      "deliverable": "Um Business Model Canvas, análise TAM/SAM/SOM, modelo de monetização e um pitch deck de 10 slides prontos pra apresentar a investidores ou stakeholders"
    }
  },
  "🔲 Design Digital & HDL (Verilog/VHDL)": {
    "basic": {
      "title": "🟢 ULA de 4 bits em Verilog",
      "desc": "Projete e simule uma Unidade Lógica e Aritmética (ULA) de 4 bits em Verilog ou VHDL. Ela deve suportar soma, subtração, AND, OR, XOR e comparação, selecionadas por um sinal de operação. Escreva um testbench que exercite todas as operações com várias entradas e verifique os resultados na simulação, inspecionando as formas de onda.",
      "deliverable": "Código HDL da ULA + testbench, com prints/descrição das formas de onda mostrando cada operação funcionando corretamente na simulação."
    },
    "advanced": {
      "title": "🔴 Processador didático em FPGA",
      "desc": "Implemente um processador simples (subset de RISC-V ou MIPS) em HDL: datapath, unidade de controle, banco de registradores e memória. Faça-o executar um pequeno programa em assembly (ex: somar uma sequência, calcular fatorial). Simule e, se tiver uma placa, sintetize e rode na FPGA. Documente o datapath, as instruções suportadas e as decisões de projeto.",
      "deliverable": "Projeto HDL completo do processador + programa de teste em assembly + testbench, idealmente rodando numa FPGA real, com documentação do datapath e da ISA suportada."
    }
  },
  "🎛️ Sistemas de Controle": {
    "basic": {
      "title": "🟢 Controlador PID simulado",
      "desc": "Modele um sistema simples (ex: controle de temperatura ou velocidade de um motor) e projete um controlador PID para ele. Simule em Python (python-control/scipy) ou MATLAB/Simulink. Mostre a resposta ao degrau antes e depois do controle, e ajuste os ganhos para reduzir overshoot e tempo de acomodação. Explique o efeito de cada termo (P, I, D).",
      "deliverable": "Notebook ou script de simulação com o modelo, o PID projetado, gráficos de resposta (com e sem controle) e uma análise dos ganhos escolhidos."
    },
    "advanced": {
      "title": "🔴 Controle de sistema físico real",
      "desc": "Implemente um controlador em um sistema físico real usando microcontrolador: equilibrar um pêndulo/robô, controlar a velocidade de um motor com encoder, ou estabilizar um seguidor de linha. Modele o sistema, projete o controlador (PID ou espaço de estados), implemente em firmware com loop de tempo real e ajuste no hardware. Trate ruído de sensor (filtro) e saturação de atuador.",
      "deliverable": "Sistema físico funcionando com controle em malha fechada + código de firmware + documentação do modelo, do projeto do controlador e dos ajustes feitos no hardware."
    }
  },
  "👁️ Visão Computacional & Processamento de Imagens": {
    "basic": {
      "title": "🟢 Pipeline de processamento de imagens",
      "desc": "Construa um pipeline em Python+OpenCV que processe imagens: carregar, converter espaços de cor, aplicar filtros (blur, sharpen), detectar bordas (Canny) e segmentar objetos por threshold ou cor. Aplique em um caso concreto, como contar objetos numa imagem ou destacar uma região específica.",
      "deliverable": "Script/notebook com o pipeline completo, mostrando cada etapa da transformação e o resultado final no caso escolhido (ex: contagem de objetos)."
    },
    "advanced": {
      "title": "🔴 Aplicação de visão computacional completa",
      "desc": "Desenvolva uma aplicação real de visão: scanner de documentos (detecta bordas, corrige perspectiva e aplica OCR), leitor de placas, detector e rastreador de objetos em vídeo, ou medidor por imagem com calibração de câmera. Combine processamento clássico (e deep learning se fizer sentido) e trate condições reais (iluminação, ângulo). Avalie a precisão e as limitações.",
      "deliverable": "Aplicação funcional processando imagens/vídeo reais + código + avaliação de precisão e discussão honesta das limitações e quando usar clássico vs deep learning."
    }
  },
  "📈 Otimização & Pesquisa Operacional": {
    "basic": {
      "title": "🟢 Resolvendo um problema de otimização real",
      "desc": "Modele e resolva um problema de otimização do mundo real usando programação linear/inteira com OR-Tools, PuLP ou Pyomo. Exemplos: dieta de custo mínimo, escala de funcionários, alocação de recursos, ou mochila. Defina claramente a função objetivo, as variáveis de decisão e as restrições, resolva e interprete a solução.",
      "deliverable": "Notebook com o modelo (objetivo, variáveis, restrições), o código que chama o solver, a solução ótima encontrada e a interpretação do resultado."
    },
    "advanced": {
      "title": "🔴 Otimizador para problema combinatório difícil",
      "desc": "Ataque um problema NP-difícil de porte realista (ex: roteamento de veículos, escalonamento complexo, ou uma variação do caixeiro viajante com muitas cidades). Compare uma abordagem exata (quando viável) com uma metaheurística (algoritmo genético, simulated annealing ou busca local). Avalie qualidade da solução vs tempo de execução e discuta os trade-offs.",
      "deliverable": "Código com a(s) abordagem(ns) implementada(s), experimentos comparando qualidade e tempo, gráficos de convergência e uma análise dos trade-offs entre exato e heurístico."
    }
  },
  "🎯 Reinforcement Learning": {
    "basic": {
      "title": "🟢 Agente Q-Learning em ambiente clássico",
      "desc": "Implemente Q-Learning tabular do zero para resolver um ambiente clássico do Gymnasium (FrozenLake, Taxi ou CartPole discretizado). Treine o agente, visualize a curva de recompensa ao longo dos episódios e mostre a política aprendida. Experimente com epsilon, learning rate e fator de desconto.",
      "deliverable": "Notebook com Q-Learning implementado, curva de aprendizado, política final visualizada e uma análise do efeito dos hiperparâmetros."
    },
    "advanced": {
      "title": "🔴 Deep RL com PPO/DQN",
      "desc": "Treine um agente de deep RL (DQN ou PPO via Stable-Baselines3) em um ambiente desafiador (Atari, LunarLander, ou ambiente customizado). Compare com um baseline, faça reward shaping se necessário e avalie a estabilidade do treino. Documente as decisões e os problemas enfrentados.",
      "deliverable": "Agente treinado + código + vídeo/gif do desempenho + relatório comparando configurações e discutindo estabilidade e sample efficiency."
    }
  },
  "🕸️ Sistemas de Recomendação": {
    "basic": {
      "title": "🟢 Recomendador por filtragem colaborativa",
      "desc": "Construa um sistema de recomendação de filmes com o dataset MovieLens usando filtragem colaborativa (vizinhança ou fatoração de matrizes). Avalie com precision@k e NDCG e gere recomendações top-N para usuários de exemplo.",
      "deliverable": "Notebook com o recomendador, métricas de avaliação offline e exemplos de recomendações geradas para diferentes usuários."
    },
    "advanced": {
      "title": "🔴 Recomendador híbrido em produção",
      "desc": "Desenvolva um recomendador híbrido (colaborativo + conteúdo, ou deep learning) com retrieval (ANN/FAISS) e ranking. Sirva recomendações via API, avalie offline e desenhe um plano de A/B test. Trate cold start e discuta vieses e filtro-bolha.",
      "deliverable": "Sistema servindo recomendações via API + código + avaliação + plano de experimentação online + discussão de vieses e cold start."
    }
  },
  "📈 Séries Temporais & Forecasting": {
    "basic": {
      "title": "🟢 Previsão com modelos clássicos",
      "desc": "Faça forecasting de uma série real (vendas, energia, temperatura) usando suavização exponencial e ARIMA/SARIMA. Decomponha a série, valide de forma temporal (sem embaralhar) e compare contra um baseline naive com MAE/RMSE.",
      "deliverable": "Notebook com decomposição, modelos clássicos, validação temporal correta e comparação de métricas contra baseline."
    },
    "advanced": {
      "title": "🔴 Pipeline de forecasting ML/DL",
      "desc": "Construa um pipeline de previsão de demanda comparando modelos clássicos, gradient boosting (com feature engineering temporal) e deep learning (LSTM ou modelo moderno). Faça previsão probabilística (intervalos), validação walk-forward e monitore a degradação. Discuta qual abordagem compensa.",
      "deliverable": "Pipeline completo + comparação honesta de abordagens + previsões com incerteza + validação temporal + discussão de trade-offs."
    }
  },
  "🕹️ Programação de Jogos & Engines": {
    "basic": {
      "title": "🟢 Jogo 2D completo numa engine",
      "desc": "Desenvolva um jogo 2D simples e completo (plataforma, arcade ou puzzle) em Godot ou Unity. Implemente game loop, input responsivo, colisão, pelo menos uma mecânica central e um loop de gameplay (início, objetivo, fim). Foque no game feel.",
      "deliverable": "Jogo 2D jogável (executável ou web) + código organizado + descrição das mecânicas e decisões de game feel."
    },
    "advanced": {
      "title": "🔴 Jogo com arquitetura sólida ou multiplayer",
      "desc": "Crie um jogo mais ambicioso aplicando boas práticas de arquitetura (ECS ou padrões de gamedev), com sistemas desacoplados (input, física, áudio), ou implemente multiplayer simples com servidor autoritativo. Faça profiling e otimize o desempenho.",
      "deliverable": "Jogo com arquitetura documentada (ou multiplayer funcional) + código + análise de performance/profiling."
    }
  },
  "🤖 Game AI (IA para Jogos)": {
    "basic": {
      "title": "🟢 NPC com pathfinding e estados",
      "desc": "Implemente um NPC inteligente num jogo: pathfinding com A* num grid/navmesh e uma máquina de estados (patrulhar, perseguir, atacar, recuar) com percepção (visão por raycast). O comportamento deve ser crível e divertido de enfrentar.",
      "deliverable": "Demo jogável com NPC usando A* + FSM + percepção, mais descrição dos estados e transições."
    },
    "advanced": {
      "title": "🔴 Sistema de IA com behavior trees ou GOAP",
      "desc": "Construa um sistema de IA mais sofisticado usando behavior trees ou GOAP, com múltiplos NPCs que coordenam, reagem ao mundo e exibem comportamento emergente. Inclua pathfinding dinâmico e dificuldade balanceada. Opcionalmente experimente ML-Agents.",
      "deliverable": "Demo com IA avançada (BT/GOAP) + múltiplos agentes + documentação do design de comportamento e do balanceamento."
    }
  },
  "🔊 Áudio de Jogos & Arte Técnica": {
    "basic": {
      "title": "🟢 Paisagem sonora e feedback de um jogo",
      "desc": "Crie o design de áudio para um pequeno jogo: efeitos sonoros de feedback (ações, UI), ambiente e uma trilha. Implemente na engine com triggers por eventos de gameplay e mixagem básica. Mostre como o som melhora a sensação do jogo.",
      "deliverable": "Jogo/demo com áudio implementado (SFX + ambiente + música) + descrição das escolhas de sound design."
    },
    "advanced": {
      "title": "🔴 Sistema de áudio adaptativo ou efeito com shader",
      "desc": "Implemente um sistema de áudio adaptativo (música que reage ao gameplay via middleware como FMOD/Wwise, ou parâmetros na engine) OU crie um efeito visual completo com shader (água, dissolve, portal) integrado e otimizado. Documente como funciona.",
      "deliverable": "Sistema de áudio adaptativo OU efeito de shader funcional e otimizado + código/projeto + explicação técnica."
    }
  },
  "🔐 Criptografia Aplicada": {
    "basic": {
      "title": "🟢 Cofre de senhas com criptografia correta",
      "desc": "Construa um gerenciador de senhas simples que use criptografia corretamente: hashing de senha mestra com Argon2/bcrypt, criptografia simétrica autenticada (AES-GCM) para os dados, e geração segura de aleatoriedade. Use bibliotecas auditadas, nunca cripto caseira.",
      "deliverable": "Aplicação funcional + código + documento explicando cada escolha criptográfica e por que está correta."
    },
    "advanced": {
      "title": "🔴 Sistema de comunicação criptografada ponta-a-ponta",
      "desc": "Implemente uma troca de mensagens com criptografia ponta-a-ponta: troca de chaves (Diffie-Hellman/ECDH), criptografia autenticada, assinaturas para autenticidade e perfect forward secrecy. Analise o modelo de ameaça e os ataques possíveis. Use primitivas de bibliotecas sérias.",
      "deliverable": "Protótipo de comunicação E2E + código + análise do modelo de ameaça, das primitivas usadas e das proteções contra ataques conhecidos."
    }
  },
  "🔬 Análise de Malware & Engenharia Reversa": {
    "basic": {
      "title": "🟢 Reversa de um binário (crackme)",
      "desc": "Faça engenharia reversa de um crackme ou binário didático usando Ghidra e um debugger. Analise estaticamente (assembly, strings, fluxo) e dinamicamente, entenda a lógica e documente como o programa funciona. Tudo em ambiente isolado e legal.",
      "deliverable": "Relatório de RE: o que o binário faz, como descobriu, trechos de assembly/decompilação relevantes e o fluxo de execução."
    },
    "advanced": {
      "title": "🔴 Análise completa de uma amostra de malware",
      "desc": "Analise uma amostra de malware de treino (de repositórios didáticos) em ambiente isolado: análise estática e dinâmica, desempacotamento se necessário, extração de IOCs, mapeamento para MITRE ATT&CK e criação de uma regra de detecção (YARA). Sempre com segurança e legalidade.",
      "deliverable": "Relatório de análise de malware + IOCs extraídos + mapeamento ATT&CK + regra YARA, conduzido em ambiente isolado."
    }
  },
  "🚩 Red Team & Adversary Simulation": {
    "basic": {
      "title": "🟢 Cadeia de ataque em lab autorizado",
      "desc": "Em um lab autorizado (HackTheBox, TryHackMe, ou ambiente próprio), execute uma cadeia de ataque completa: reconhecimento, acesso inicial, escalonamento de privilégio e captura do objetivo. Documente cada passo mapeando para o MITRE ATT&CK.",
      "deliverable": "Relatório da cadeia de ataque com passos, técnicas (ATT&CK), evidências e recomendações de mitigação — em ambiente autorizado."
    },
    "advanced": {
      "title": "🔴 Operação red team simulada com C2 e evasão",
      "desc": "Conduza uma operação red team simulada em lab próprio: estabeleça C2, pratique evasão de defesas, movimentação lateral e persistência, atingindo um objetivo definido sem ser detectado. Produza um relatório purple team com timeline e o que o blue team detectou (ou não).",
      "deliverable": "Relatório de operação red team: timeline do ataque, TTPs, o que foi detectado, e recomendações acionáveis — estritamente em ambiente autorizado e ético."
    }
  },
  "🗄️ Banco de Dados Intermediário": {
    "basic": {
      "title": "🟢 Banco de dados de e-commerce com queries analíticas",
      "desc": "Modele e implemente um banco de dados relacional para um e-commerce (usuários, produtos, pedidos, itens, reviews). Popule com dados e escreva consultas que respondam perguntas reais usando JOINs, GROUP BY e subconsultas: produtos mais vendidos, faturamento por mês, clientes mais ativos.",
      "deliverable": "Schema do banco + dados de exemplo + um conjunto de queries analíticas (JOINs, agregações, subconsultas) respondendo perguntas de negócio."
    },
    "advanced": {
      "title": "🔴 Camada de dados com ORM, índices e otimização",
      "desc": "Construa a camada de dados de uma aplicação usando um ORM (Prisma/SQLAlchemy) com migrations, modele relacionamentos complexos, e otimize: identifique queries lentas com EXPLAIN, crie índices apropriados, resolva o problema N+1 e use transações corretamente. Integre um NoSQL (Redis para cache) onde fizer sentido.",
      "deliverable": "Camada de dados com ORM + migrations + análise de performance (EXPLAIN, índices criados, N+1 resolvido) + uso justificado de cache/NoSQL."
    }
  },
  "📐 Cálculo Avançado & Álgebra Linear": {
    "basic": {
      "title": "🟢 Resolvendo sistemas e transformações com álgebra linear",
      "desc": "Use Python (NumPy) para resolver problemas de álgebra linear: resolver um sistema linear por eliminação de Gauss, calcular determinantes e inversas, e aplicar transformações lineares (rotação, escala) a um conjunto de pontos, visualizando o resultado. Conecte a teoria com a computação.",
      "deliverable": "Notebook com sistema linear resolvido, operações matriciais e uma visualização de transformações lineares aplicadas a pontos (antes/depois)."
    },
    "advanced": {
      "title": "🔴 Modelagem de um sistema físico com equações diferenciais",
      "desc": "Modele um sistema físico real (circuito RLC, sistema massa-mola, ou resfriamento) com uma equação diferencial. Resolva analiticamente e com Transformada de Laplace, depois valide numericamente em Python (scipy.integrate). Compare a solução analítica com a numérica e interprete o comportamento (oscilação, amortecimento, regime).",
      "deliverable": "Notebook com o modelo (EDO), solução analítica + via Laplace, simulação numérica e gráficos comparando os resultados com interpretação física."
    }
  }
};
