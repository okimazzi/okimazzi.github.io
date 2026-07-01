const PROJECTS = {
  "Fundamentos de Computacao": {
    "basic": {
      "title": "🟢 Guia Visual: Do Bit ao Algoritmo",
      "desc": "Monte um documento visual que explique, com suas próprias palavras e diagramas, como um computador funciona por dentro e como se pensa para resolver um problema. Cubra: ciclo fetch-decode-execute, tabela de conversão binário-decimal-hexadecimal, cores RGB/hex (#FF0000), sequência de boot (BIOS/UEFI→bootloader→kernel→SO) e tabela-verdade das portas lógicas (AND, OR, NOT, XOR). Depois, aplique pensamento computacional escolhendo uma tarefa do dia a dia (ex.: fazer café, trocar um pneu) e a decomponha em um algoritmo passo a passo, representado em fluxograma e pseudocódigo.",
      "deliverable": "Documento visual com 5+ diagramas próprios (fetch-decode-execute, binário/hex, RGB, boot, portas lógicas) + 1 algoritmo em fluxograma e pseudocódigo com decomposição da tarefa"
    },
    "advanced": {
      "title": "🔴 Anatomia de um Clique: da Requisição ao Bit",
      "desc": "Produza um relatório técnico (2000+ palavras) que rastreie o que acontece quando você digita uma URL e pressiona Enter, integrando as três frentes da área. 1) Rede: descreva o caminho completo cliente→DNS→IP/porta→HTTP(S)→resposta JSON, incluindo modelo cliente-servidor, papel da cloud e riscos de segurança (phishing, importância do HTTPS/2FA). 2) Máquina: explique como a CPU processa a resposta via ciclo fetch-decode-execute e escolha um processador real moderno (Apple M-series, Ryzen, Intel i9) comparando arquitetura (cores, cache, clock, ISA, nm) com um de 10 anos atrás. 3) Dados: implemente em Python puro um compressor RLE (lossless), meça o ganho de tamanho em texto, arquivo repetitivo e aleatório, e explique por que lossy (JPEG/MP3) difere de lossless (ZIP/PNG).",
      "deliverable": "Relatório de 2000+ palavras com diagrama do ciclo de vida da requisição, análise comparativa de processador real, compressor RLE funcional em Python com tabela de resultados e 5+ fontes citadas"
    }
  },
  "Sistemas Operacionais & Terminal": {
    "basic": {
      "title": "🟢 Guia de Sobrevivência no Terminal Linux",
      "desc": "Instale um ambiente Linux (dual boot, VM ou WSL2) e monte uma cheat sheet em Markdown com 40+ comandos essenciais organizados por categoria: navegação e filesystem (ls, cd, mkdir, cp, mv, rm, cat, find, grep), permissões (chmod 755/644, chown, rwx), e gerenciamento de pacotes (apt/snap/flatpak). Para cada comando, documente sintaxe, um exemplo real e quando usar. Inclua um mapa comentado do FHS (/, /home, /etc, /var, /tmp, /bin, /proc) explicando o que vive em cada diretório. Escreva também um script bash simples de setup de novo projeto (cria pastas padrão, roda git init e cria um venv).",
      "deliverable": "Ambiente Linux funcional + cheat sheet Markdown (40+ comandos por categoria) + mapa do FHS comentado + 1 script bash de setup de projeto + README"
    },
    "advanced": {
      "title": "🔴 Toolkit de Automação e Administração do Sistema",
      "desc": "Monte um repositório de dotfiles versionado no GitHub (.bashrc/.zshrc com aliases e configuração de PATH, .vimrc, .gitconfig) e configure SSH profissionalmente: gere um par de chaves ed25519, crie um ~/.ssh/config com múltiplos hosts e configure backup automático via rsync/SCP. Desenvolva um conjunto de scripts bash robustos usando variáveis, condições, loops, funções e processamento de texto com grep/awk/sed: um script de monitoramento que checa disco (df/du), lista os top processos por CPU/RAM (ps/top), diagnostica rede (ping/dig/curl) e parseia /var/log com journalctl, gravando relatório com timestamp. Agende a execução recorrente com cron/systemctl e faça backup compactado (tar/gzip) rotativo.",
      "deliverable": "Repo de dotfiles (.bashrc/.zshrc, .vimrc, .gitconfig) + SSH config com múltiplos hosts + backup rsync + suite de scripts bash (monitoramento com grep/awk/sed, diagnóstico de rede, análise de logs) + agendamento cron + backup tar rotativo + README"
    }
  },
  "Logica de Programacao com Python": {
    "basic": {
      "title": "🟢 Calculadora e Conversores no Terminal",
      "desc": "Crie um programa de terminal com menu interativo que junta os primeiros passos da área: use input() e f-strings para conversar com o usuário e print() para exibir resultados. Ofereça opções como calculadora (soma, subtração, multiplicação, divisão com operadores aritméticos), conversor de temperatura (Celsius↔Fahrenheit) e verificador simples (par/ímpar, maior de dois números) usando if/elif/else. Aplique variáveis bem nomeadas e tipos corretos (int, float, str, bool), seguindo boas práticas de nomeação e PEP 8.",
      "deliverable": "Um arquivo .py com menu em loop que roda no terminal, usando input()/print()/f-strings, operadores aritméticos e if/elif/else, com variáveis nomeadas segundo a PEP 8."
    },
    "advanced": {
      "title": "🔴 Analisador de Texto com Regex e Estruturas Nativas",
      "desc": "Construa uma ferramenta de linha de comando que recebe um texto (colado ou lido de uma string grande) e extrai informações usando só Python puro. Aplique métodos de string (split, strip, lower, replace, count, join) e fatiamento para tokenizar, e o módulo re para encontrar padrões como emails, telefones e CEPs (re.findall/re.search). Consolide os resultados em estruturas nativas — dict para contar a frequência de cada palavra, set para listar palavras únicas, list de tuplas para o ranking — usando comprehensions e desempacotamento. Percorra os dados com for + enumerate()/zip() e trate casos de borda com match-case ou if/elif/else, gerando um relatório formatado com f-strings (total de palavras, top 10 mais frequentes, padrões encontrados).",
      "deliverable": "Um programa .py que, dado um texto, imprime um relatório com contagem de palavras (dict), palavras únicas (set), ranking das mais frequentes (list de tuplas via comprehension) e os emails/telefones/CEPs extraídos com regex."
    }
  },
  "Matematica Fundamental": {
    "basic": {
      "title": "🟢 Toolkit Matemático + Análise Big O",
      "desc": "Programa Python puro com 20+ funções organizadas por módulo, cobrindo o essencial da área: álgebra (resolver equação do 2º grau, avaliar polinômios, PA/PG e somatório de sequências), funções e logaritmos (log base 2/10/natural), discreta (fatorial, Fibonacci iterativo, teste de primalidade, MDC/MMC, permutação e combinação) e probabilidade (simulação de lançamento de dados com random e cálculo da frequência relativa vs. probabilidade teórica). Implementar as funções somatorio(f, inicio, fim) e produtorio(f, inicio, fim) reproduzindo a notação Σ e Π. Documentar a complexidade Big O no docstring de cada função (ex.: 'O(√n) para primalidade', 'O(n) para Fibonacci iterativo') e medir com time o Fibonacci recursivo O(2ⁿ) vs. iterativo O(n).",
      "deliverable": "Programa Python com 20+ funções (álgebra, logaritmos, discreta, probabilidade), somatório/produtório, Big O documentada em cada docstring e comparação de tempo Fibonacci recursivo vs. iterativo"
    },
    "advanced": {
      "title": "🔴 Verificador de Teoremas Discretos + Cripto Modular",
      "desc": "Biblioteca Python que integra a profundidade da área discreta. Módulo de lógica: avaliar proposições, gerar tabelas-verdade, checar equivalências e De Morgan, e validar quantificadores sobre conjuntos finitos. Módulo de prova: verificar demonstrações por indução testando base e passo indutivo para fórmulas fechadas (ex.: soma de 1..n = n(n+1)/2, Torre de Hanoi 2ⁿ-1). Módulo de teoria dos números: MDC estendido, exponenciação modular e um mini-RSA educativo (chaves, cifrar/decifrar) apoiado em primos e congruência. Módulo de grafos: representar por lista de adjacência, calcular graus, detectar caminhos/ciclos e identificar árvores via BFS/DFS. Módulo probabilístico: probabilidade condicional e Teorema de Bayes com um classificador ingênuo simples sobre dados discretos. Acompanhar de relatório explicando a matemática por trás de cada módulo.",
      "deliverable": "Biblioteca Python multi-módulo (lógica + tabelas-verdade, verificador de indução, cripto modular estilo RSA, grafos com BFS/DFS, Bayes) com testes automatizados e relatório Markdown fundamentando cada módulo"
    }
  },
  "Fisica & Quimica p/ Engenharia": {
    "basic": {
      "title": "🟢 Simulador de Física Fundamental em Python",
      "desc": "Crie um programa Python com um menu de simulações cobrindo os pilares iniciais da área: 1) Cinemática — lançamento oblíquo (dado ângulo e velocidade, calcular alcance, altura máxima e tempo de voo) e MRUV; 2) Leis de Newton — bloco em plano inclinado com atrito, calculando aceleração e forças; 3) Energia — conservação de energia mecânica (cinética + potencial) em uma queda ou rampa; 4) Lei de Ohm — informar 2 grandezas e calcular a terceira, mais potência dissipada; 5) Ondas — calcular frequência, período e comprimento de onda. Documente cada equação nos comentários e valide com exemplos de livro.",
      "deliverable": "Programa Python com 5 simulações (cinemática, Newton, energia, Ohm, ondas), equações documentadas, exemplos validados e README explicando as fórmulas"
    },
    "advanced": {
      "title": "🔴 Estudo de Engenharia: Estrutura, Circuito e Materiais",
      "desc": "Desenvolva um projeto integrador em Python que analisa um sistema de engenharia real de ponta a ponta. Módulo 1 (Mecânica dos Sólidos): dada uma viga com carregamento, monte o diagrama de corpo livre, calcule reações de apoio, diagramas de esforço cortante e momento fletor, e verifique a tensão máxima (σ = F/A) contra o limite elástico aplicando fator de segurança e Lei de Hooke. Módulo 2 (Eletromagnetismo): simule o circuito DC de alimentação (resistores em série/paralelo) resolvendo por Kirchhoff, com corrente, tensão e potência por componente. Módulo 3 (Química/Energia e Materiais): faça análise energética (kWh, custo mensal, eficiência) e escolha justificada de materiais (metal, polímero, semicondutor, compósito) com base em propriedades. Represente o circuito como grafo e apresente resultados em tabelas no terminal, comparando cenários.",
      "deliverable": "Simulador Python integrado com análise estrutural (viga, esforços, tensão-deformação, fator de segurança), circuito DC via Kirchhoff, análise energética e seleção de materiais, validado em pelo menos 3 estudos de caso com relatório em tabelas"
    }
  },
  "Web, Git & Ferramentas": {
    "basic": {
      "title": "🟢 Landing Page Responsiva no GitHub Pages",
      "desc": "Construa uma página pessoal (landing page ou portfólio simples) com HTML semântico (header, nav, main, section, footer), estilizada com CSS usando Box Model, Flexbox e Grid, e responsiva via media queries (mobile-first). Adicione um toque de JavaScript no DOM (querySelector, addEventListener) para um menu hambúrguer e um botão de tema claro/escuro. Versione tudo com Git e publique no GitHub Pages.",
      "deliverable": "Repositório no GitHub com a página publicada no GitHub Pages: HTML semântico, layout responsivo (Flexbox + Grid), meta tags básicas de SEO/Open Graph e interação simples de DOM, com histórico de commits."
    },
    "advanced": {
      "title": "🔴 SPA de Consumo de API com JS Puro, Acessível e Otimizada",
      "desc": "Desenvolva uma aplicação de página única (ex.: buscador de filmes, clima ou repositórios) usando apenas HTML, CSS e JavaScript puro. Consuma uma API pública real com Fetch + async/await, tratando estados de carregamento e erros (try/catch); renderize resultados dinamicamente no DOM (createElement, classList) e persista favoritos em localStorage. Aplique CSS avançado (Grid com minmax/auto-fit, variáveis, transições e @keyframes) e garanta acessibilidade (ARIA, alt text, contraste, navegação por teclado). Organize o código em módulos ES6 (import/export) e otimize a performance (lazy loading de imagens, auditoria no Lighthouse mirando bons Core Web Vitals).",
      "deliverable": "App publicada no GitHub Pages que busca dados de uma API real via Fetch/async-await com tratamento de erros, renderização dinâmica no DOM, favoritos em localStorage, layout responsivo com CSS avançado, código em módulos ES6, acessibilidade validada e relatório do Lighthouse anexado no README."
    }
  },
  "Banco de Dados Introducao": {
    "basic": {
      "title": "🟢 Catálogo de Livros em SQLite",
      "desc": "Crie um banco SQLite de uma única tabela (ex.: Livros, com título, autor, gênero, ano, preço). Use CREATE TABLE com chave primária e constraints (NOT NULL, UNIQUE), popule com INSERT e depois pratique SELECT com filtros: WHERE, AND/OR, IN, BETWEEN, LIKE e IS NULL, além de ORDER BY, LIMIT e DISTINCT. Exercite também UPDATE e DELETE para corrigir e remover registros. Use o DB Browser for SQLite para visualizar os resultados.",
      "deliverable": "Arquivo .sql com o CREATE TABLE + 30 registros e um documento com 12+ consultas SELECT/UPDATE/DELETE comentadas, cada uma usando um filtro diferente"
    },
    "advanced": {
      "title": "🔴 Modelagem Relacional de uma Biblioteca",
      "desc": "Modele e implemente um banco relacional completo para uma biblioteca com diagrama ER e ao menos 3 tabelas relacionadas por chaves estrangeiras (ex.: Autor, Livro, Empréstimo). Escreva o schema com CREATE TABLE, constraints e as FKs, e use ALTER/DROP durante a evolução do modelo. Importe dados iniciais a partir de um arquivo CSV e gere consultas simples de relatório para o dia a dia (livros por autor, empréstimos em aberto, filtros com WHERE/IN/LIKE, ORDER BY). Finalize protegendo os dados com backup (.dump / pg_dump) e exportação dos resultados de volta para CSV.",
      "deliverable": "Repositório com diagrama ER, script schema.sql (3+ tabelas com FKs), CSV importado, arquivo de queries de relatório, dump de backup e README explicando o modelo"
    }
  },
  "Eletronica & Hardware": {
    "basic": {
      "title": "🟢 Lab Prático: Protoboard, Multímetro e Portas Lógicas",
      "desc": "Faça uma série de 5 experimentos na protoboard (ou no Tinkercad/Falstad se não tiver hardware) aplicando o essencial da área: 1) LED com resistor calculado pela Lei de Ohm, medindo tensão e corrente com multímetro. 2) Divisor de tensão, comparando o valor medido com o cálculo teórico. 3) Uma porta lógica (AND ou OR) montada com transistores ou CI, validando a tabela verdade. 4) Somador de 2 bits com LEDs indicando o resultado. 5) Um filtro RC simples, observando o comportamento. Para cada experimento, registre foto/screenshot, medição vs. cálculo e uma explicação do circuito.",
      "deliverable": "5 experimentos documentados com fotos/screenshots, medições de multímetro, cálculos teóricos comparados e um relatório curto explicando cada circuito"
    },
    "advanced": {
      "title": "🔴 Sistema Embarcado de Aquisição e Controle de Sinais",
      "desc": "Projete um sistema que integre as três frentes da área: no bloco analógico, condicione um sinal de sensor (ex.: LDR ou LM35) com um amplificador operacional (não-inversor ou somador) seguido de um filtro passa-baixa RC/ativo para reduzir ruído; no bloco de digitalização, faça a conversão analógico-digital respeitando amostragem/Nyquist e explique a resolução do ADC; no bloco de controle, use uma máquina de estados finitos (Mealy ou Moore) para acionar saídas e gere PWM para controlar o brilho de um LED ou a velocidade de um motor conforme o sinal lido. Alimente tudo com um regulador de tensão (ex.: LM7805) e documente o esquemático completo, os cálculos (ganho do Op-Amp, frequência de corte do filtro, duty cycle do PWM) e as medições com multímetro/osciloscópio ou simulador.",
      "deliverable": "Esquemático completo do circuito integrado (analógico + digital + controle), código/firmware do FSM e do PWM, cálculos de ganho/corte/amostragem/duty cycle, capturas do simulador ou fotos com medições, e relatório técnico de portfólio"
    }
  },
  "Estruturas de Dados & Algoritmos": {
    "basic": {
      "title": "🟢 Visualizador de Estruturas e Ordenação",
      "desc": "Crie uma página web que anima as operações fundamentais da área: ordenação (Bubble, Merge, Quick) com barras coloridas passo a passo, e a manipulação de estruturas básicas como pilha (push/pop), fila (enqueue/dequeue) e lista ligada (inserir/remover/reverter). O usuário escolhe a operação, o tamanho dos dados e a velocidade. Exiba contador de comparações/swaps e o Big O de cada operação.",
      "deliverable": "App web que anima 3+ algoritmos de ordenação e as operações de pilha, fila e lista ligada, com controles de velocidade, contadores de operações e a notação Big O exibida"
    },
    "advanced": {
      "title": "🔴 Plataforma Interativa de Algoritmos e Grafos",
      "desc": "Construa uma aplicação web que integra a profundidade da área em módulos interativos. Inclua um resolvedor de labirintos/grafos animando BFS, DFS, Dijkstra e A* com painel comparativo (nós visitados, tempo); um módulo de programação dinâmica que visualiza a tabela de estados de problemas como coin change, LCS ou edit distance célula a célula; e um módulo de estruturas avançadas demonstrando Union-Find (DSU) ou Segment Tree/Fenwick para range queries. Cada módulo deve mostrar a complexidade e permitir editar a entrada.",
      "deliverable": "App web com editor de grafo/labirinto rodando BFS/DFS/Dijkstra/A* comparados, visualização passo a passo da tabela de DP de ao menos um problema, e um módulo interativo de DSU ou Segment/Fenwick Tree, todos com análise de complexidade"
    }
  },
  "Python Intermediario & OOP": {
    "basic": {
      "title": "🟢 Sistema de Biblioteca com OOP",
      "desc": "Modele um sistema de biblioteca com classes bem estruturadas: Livro, Membro, Emprestimo e Biblioteca. Aplique heranca (ex.: LivroDigital e LivroFisico herdam de Livro), encapsulamento com @property, polimorfismo e uma dataclass para pelo menos uma entidade. Persista o acervo e os emprestimos em JSON e cubra as regras principais com testes pytest.",
      "deliverable": "Projeto Python com 4+ classes usando heranca/polimorfismo/@property, ao menos 1 dataclass, persistencia em JSON e suite de testes pytest passando"
    },
    "advanced": {
      "title": "🔴 Framework de Plugins com CLI e Packaging",
      "desc": "Construa um framework de plugins auto-descobriveis via metaclasses (ou __init_subclass__) e decorators, onde cada plugin implementa uma interface definida por Protocol/ABC. O framework carrega plugins de uma pasta, registra automaticamente e executa um pipeline com suporte a asyncio (async/await + gather) e decorators uteis (@retry, @timer, @cache). Empacote com pyproject.toml, exponha uma CLI com typer/click + rich (subcommands e progress bar), aplique profiling (cProfile/py-spy) para achar gargalos e garanta type hints validados por mypy.",
      "deliverable": "Pacote Python instalavel (pyproject.toml) com auto-discovery de plugins via metaclass, pipeline async, CLI typer/click + rich, relatorio de profiling, type hints mypy-clean e testes pytest com fixtures"
    }
  },
  "C, C++ & Rust": {
    "basic": {
      "title": "🟢 Alocador de Memória Manual em C",
      "desc": "Implemente um alocador custom com my_malloc(), my_free() e my_realloc() gerenciando um bloco grande de memória via free list (lista encadeada de blocos livres). Use structs para os cabeçalhos de bloco, faça coalescência de blocos adjacentes ao liberar e escreva um programa de teste que aloca/libera em ordem variada e imprime o estado da memória. Valide com GDB e valgrind (memcheck) até obter zero leaks e zero erros.",
      "deliverable": "Biblioteca C (.h + .c) com alocador custom, Makefile, programa de teste que visualiza a free list e relatório valgrind limpo (0 leaks, 0 errors)"
    },
    "advanced": {
      "title": "🔴 Motor de Processamento com Núcleo C, API C++ e Frontend Rust",
      "desc": "Construa um pipeline de processamento de dados (ex.: indexador/busca paralela ou compressor) com três camadas integradas: um núcleo de baixo nível em C (manipulação de bits, structs empacotadas, alocação manual, compilado como biblioteca com extern \"C\"); uma camada C++ moderna que embrulha esse núcleo com RAII e smart pointers, expõe uma API segura e paraleliza o trabalho com std::thread/async e mutex (aplicando move semantics e a Regra dos 5); e um CLI em Rust que consome tudo via FFI, tratando erros com Result/anyhow e orquestrando tarefas concorrentes com tokio ou Arc/Mutex. Meça performance de cada camada e prove segurança de memória com AddressSanitizer/valgrind no lado C/C++ e o borrow checker no lado Rust.",
      "deliverable": "Repositório com as 3 camadas (lib C, wrapper C++, crate Rust) integradas por FFI, build unificado (Makefile/CMake + Cargo), testes, CI no GitHub Actions e README com arquitetura, benchmarks comparativos e relatórios de sanitizers limpos"
    }
  },
  "Sistemas Operacionais (Disciplina)": {
    "basic": {
      "title": "🟢 Simulador de Escalonamento de Processos",
      "desc": "Implemente um simulador que executa 4 algoritmos de escalonamento de CPU: FCFS, SJF, Round Robin e por Prioridade. O usuário cadastra processos com arrival time, burst time e prioridade, e o programa monta a fila de execução de cada algoritmo. Calcule tempo de espera médio, turnaround e utilização de CPU, exibindo um diagrama de Gantt para cada estratégia.",
      "deliverable": "App (web ou Python CLI) com entrada de processos, diagrama de Gantt visual por algoritmo e tabela comparativa das métricas (espera, turnaround) dos 4 escalonadores."
    },
    "advanced": {
      "title": "🔴 Hackeando o Kernel xv6",
      "desc": "Compile e rode o xv6 (kernel didático do MIT) em um emulador e faça modificações reais no código do sistema operacional. Adicione ao menos uma nova system call própria (ex.: contar processos ativos ou expor estatísticas via um pseudo-arquivo estilo /proc) e substitua o escalonador Round Robin padrão por um escalonador com prioridades ou MLFQ. Instrumente page faults e context switches para medir o impacto das suas mudanças e documente como processos, memória virtual e syscalls se conectam no kernel.",
      "deliverable": "Fork do xv6 compilável e bootável com uma nova syscall funcional + escalonador customizado, mais um relatório técnico (README) explicando as alterações no kernel, testes de validação e medições de desempenho antes/depois."
    }
  },
  "Concorrencia e Paralelismo": {
    "basic": {
      "title": "🟢 Web Scraper Concorrente com Benchmark",
      "desc": "Construa um scraper que baixa 50+ páginas web usando 3 abordagens: sequencial, threading (ThreadPoolExecutor) e asyncio (aiohttp). Meça o speedup real de cada uma, discutindo por que o GIL não trava tarefas IO-bound e onde o overhead aparece. Trate erros com retries e salve os resultados em CSV.",
      "deliverable": "Script Python com as 3 abordagens, tabela de benchmark (tempo + speedup), CSV de resultados e um gráfico comparativo com breve análise IO-bound vs GIL"
    },
    "advanced": {
      "title": "🔴 Motor de Concorrência: Pipeline + Actors + Lock-free",
      "desc": "Construa um pipeline de processamento de dados de alta vazão que integre múltiplos modelos: estágios em fan-out/fan-in com work stealing, um pool de workers no modelo de actors (cada um com sua mailbox, sem memória compartilhada) e uma fila/contador central lock-free baseado em CAS/atomics comparada a uma versão com mutex. Trate o clássico produtor-consumidor com buffer limitado, use wait groups/barriers para sincronizar as fases e demonstre um deadlock (4 condições de Coffman) junto da estratégia de prevenção por ordenação de locks. Valide correção com um race detector (ThreadSanitizer ou o do Go) e meça speedup real, false sharing e overhead de sincronização à luz das leis de Amdahl e Gustafson.",
      "deliverable": "Sistema em Go ou Rust (ou C++) com pipeline actor-based, estrutura lock-free vs mutex, cenário de deadlock demonstrado e corrigido, relatório do race detector limpo e um benchmark documentado (speedup, false sharing, curvas de Amdahl/Gustafson)"
    }
  },
  "Engenharia de Software": {
    "basic": {
      "title": "🟢 API REST com TDD e SOLID",
      "desc": "Construa uma API REST (CRUD de um recurso, ex.: produtos) usando TDD: escreva o teste antes do código, ciclo red-green-refactor. Use FastAPI ou Express, aplique ao menos 3 princípios SOLID e boas práticas de API design (nomes de rotas no plural, versionamento, respostas de erro padronizadas). Configure CI no GitHub Actions rodando os testes a cada push.",
      "deliverable": "Repositório com API funcional, suíte de testes unitários com 80%+ de cobertura, pipeline CI verde e README documentando os princípios SOLID e decisões de design de API aplicadas."
    },
    "advanced": {
      "title": "🔴 Sistema com Suíte de Testes Robusta e IA Responsável",
      "desc": "Desenvolva uma aplicação com backend (API + banco) que aplique SOLID e 3+ design patterns (ex.: Strategy, Observer, Factory), e blinde-a com uma estratégia de testes completa: unitários com mocks, integração com testcontainers (API+DB), E2E com Playwright/Cypress nos fluxos críticos, property-based testing (Hypothesis/fast-check) e mutation testing (PIT/mutmut) para provar a qualidade dos testes. Inclua feature flags para separar deploy de release e escreva um relatório de conformidade LGPD e IA responsável (minimização de dados, consentimento, viés e explicabilidade) cobrindo o sistema.",
      "deliverable": "Repositório com aplicação em produção-like, pipeline CI executando todas as camadas de teste (unit/integração/E2E/property-based/mutation) com score de mutação reportado, ADRs das decisões de design e um documento de conformidade LGPD + IA responsável."
    }
  },
  "Teoria da Computacao & Compiladores": {
    "basic": {
      "title": "🟢 Simulador de Autômatos e Regex",
      "desc": "Crie um app web onde o usuário monta um autômato finito (DFA/NFA) adicionando estados, transições e marcando inicial/finais. Ao inserir uma string, mostre passo a passo se ela é aceita e exiba a tabela de transição. Implemente a conversão NFA→DFA e permita converter uma expressão regular simples no autômato equivalente.",
      "deliverable": "App web com editor visual de autômatos, animação de aceitação de strings, conversão NFA→DFA e regex→autômato"
    },
    "advanced": {
      "title": "🔴 Mini Linguagem: do Lexer à VM",
      "desc": "Construa uma linguagem de programação própria com o pipeline completo de compilação: lexer (tokenização), parser (AST) com gramática LL ou LR, análise semântica com tabela de símbolos e checagem de tipos, e execução por interpretador de árvore OU compilando para bytecode rodado numa VM de pilha. Suporte variáveis, if/else, while, funções e escopos. Emita erros com linha/coluna claros em cada fase.",
      "deliverable": "Compilador/interpretador com lexer, parser, análise semântica (símbolos + tipos) e execução via AST ou bytecode+VM, com 6+ programas de exemplo e mensagens de erro por fase"
    }
  },
  "Matematica p/ ML": {
    "basic": {
      "title": "🟢 Regressão Linear do Zero (só NumPy)",
      "desc": "Implemente regressão linear treinada por gradiente descendente em NumPy puro, calculando o gradiente do MSE à mão (derivadas parciais). Visualize os dados, a reta se ajustando a cada iteração e a curva de loss caindo. Compare o resultado com a solução analítica (equação normal) e teste em um dataset real como housing prices.",
      "deliverable": "Notebook Jupyter com implementação manual do gradiente do MSE, visualizações da reta e da loss por época, e comparação numérica com a solução analítica"
    },
    "advanced": {
      "title": "🔴 Toolkit Matemático de ML do Zero",
      "desc": "Construa uma biblioteca em NumPy que reúna a matemática central da área: um otimizador configurável (SGD, Momentum, Adam) treinando uma regressão logística com cross-entropy e regularização L1/L2; PCA via SVD implementado à mão para redução de dimensionalidade em imagens (com variância explicada e reconstrução); um bloco de inferência bayesiana (prior/likelihood/posterior via MLE e MAP) com métricas de teoria da informação (entropia, KL divergence); e rotinas numéricas próprias (Newton-Raphson, condicionamento de sistemas lineares) validadas contra scipy. Feche com uma análise estatística rigorosa dos resultados (intervalos de confiança, effect size, cuidado com múltiplas comparações).",
      "deliverable": "Repositório com módulos NumPy (otimizadores, PCA/SVD, inferência bayesiana, métodos numéricos) mais notebook demonstrando cada peça em dataset real, comparando com scipy/sklearn e reportando validação estatística"
    }
  },
  "Introducao a IA & ML": {
    "basic": {
      "title": "🟢 Preditor de Classificação com Pipeline scikit-learn",
      "desc": "Escolha um dataset tabular (ex.: churn, aprovação de crédito ou reviews) e faça a EDA essencial com Pandas/NumPy (distribuições, correlações, valores faltantes). Monte um Pipeline scikit-learn com pré-processamento e feature engineering, treine e compare pelo menos 3 modelos clássicos (ex.: Regressão Logística, KNN e Random Forest) usando validação cruzada k-fold, e avalie com accuracy, precision, recall, F1 e AUC-ROC.",
      "deliverable": "Notebook reproduzível com EDA, Pipeline sklearn, comparação de 3+ modelos via cross-validation e tabela de métricas justificando o modelo escolhido"
    },
    "advanced": {
      "title": "🔴 Sistema ML End-to-End com Deploy e Monitoramento",
      "desc": "Construa um projeto ML completo do problema ao monitoramento: um pipeline de ETL/scraper automatizado (com scheduler) que alimenta os dados, tratamento de classes desbalanceadas (SMOTE/class_weight), tuning de modelos avançados (XGBoost/LightGBM) e seleção via validação estratificada evitando data leakage. Sirva o melhor modelo como API (FastAPI) e adicione monitoramento de métricas e drift. Como extensão, otimize o modelo para inferência leve (ONNX ou TensorFlow Lite) ou incorpore uma tarefa de visão computacional/processamento de sinais (OpenCV ou FFT).",
      "deliverable": "Repositório com pipeline de dados agendado, treino versionado (XGBoost/LightGBM), API de predição em produção, painel/logs de monitoramento de drift e modelo exportado para inferência otimizada (ONNX/TFLite) ou módulo de visão/sinais integrado"
    }
  },
  "Full-Stack": {
    "basic": {
      "title": "🟢 App de Notas Full-Stack com React + API REST",
      "desc": "Construa um app de notas ponta a ponta: frontend em React + TypeScript (componentes, hooks, CRUD, busca e tags) estilizado com Tailwind e com state via Context ou Zustand. Backend REST em Express ou FastAPI com camadas de rotas/controllers/services, autenticação JWT, validação de input e error handling. Persista em PostgreSQL ou SQLite e faça deploy do frontend na Vercel e do backend no Railway/Render.",
      "deliverable": "App publicado com frontend React tipado, API REST com auth JWT e validação, banco de dados e ao menos um teste (React Testing Library ou E2E)"
    },
    "advanced": {
      "title": "🔴 Plataforma Real-time com GraphQL + WebSocket",
      "desc": "Construa uma plataforma colaborativa (chat/board com múltiplas salas) integrando frontend Next.js (App Router, Server Components) com data fetching via TanStack Query, e um backend com API GraphQL (schema, queries, mutations e subscriptions via Apollo). Implemente mensagens em tempo real com WebSocket/Socket.io usando Redis pub/sub para escalar, além de auth OAuth/JWT, filas para jobs assíncronos, cache-aside com Redis, rate limiting, versionamento de API e paginação por cursor. Orquestre tudo com Docker Compose.",
      "deliverable": "Plataforma real-time deployada com GraphQL (incl. subscriptions), WebSocket + Redis pub/sub, fila de jobs, cache e rate limiting, frontend Next.js e stack em Docker Compose"
    }
  },
  "Desenvolvimento Mobile (Intro)": {
    "basic": {
      "title": "🟢 App de Lista de Compras Offline",
      "desc": "Construa um app mobile de lista de compras em React Native ou Flutter: adicionar/remover itens, marcar como comprado e organizar por categorias (frutas, carnes, limpeza). Use componentes/widgets nativos, navegação entre telas e persistência local (AsyncStorage/SQLite) para funcionar 100% offline. Capriche em um design limpo com ícones e responsividade.",
      "deliverable": "App mobile funcional (RN ou Flutter) com CRUD de itens, categorias, persistência local offline e navegação entre telas, rodando em emulador ou dispositivo real."
    },
    "advanced": {
      "title": "🔴 App de Hábitos Completo com Deploy na Store",
      "desc": "Construa um habit tracker profissional integrando os pilares da área: state management estruturado (Zustand/Redux ou Riverpod/BLoC), navegação avançada com auth guards e deep linking, uso de APIs nativas (câmera para foto de progresso, notificações locais e biometria para desbloqueio). Adicione offline-first com sync ao reconectar, push notifications (FCM), calendário de streaks e gráficos. Inclua analytics/crash reporting (Firebase/Sentry), testes (unit + E2E com Detox/Patrol) e pipeline de CI/CD (Fastlane/EAS) com submissão via TestFlight/Play Console.",
      "deliverable": "App mobile publicável com state management, APIs nativas (câmera/notificações/biometria), sync offline, push notifications, analytics/crash reporting, suíte de testes e build de CI/CD gerando artefato distribuído em TestFlight ou Firebase App Distribution."
    }
  },
  "DevOps & Infra": {
    "basic": {
      "title": "🟢 Dockerizar e Publicar uma Aplicação Web",
      "desc": "Empacote uma aplicação web (backend + banco de dados) usando um Dockerfile bem escrito e suba tudo com um docker-compose.yml que conecte os serviços via networks e persista dados em volumes. Coloque um Nginx como reverse proxy na frente, roteando as requisições HTTP para o backend, e faça o deploy em uma plataforma simples (Railway, Render ou Fly.io) com domínio e HTTPS. Documente como diagnosticar o deploy usando curl, dig e docker logs.",
      "deliverable": "Repositório com Dockerfile (multi-stage e .dockerignore), docker-compose.yml, config de Nginx como reverse proxy, aplicação no ar com domínio + HTTPS e um README com o passo a passo de diagnóstico"
    },
    "advanced": {
      "title": "🔴 Plataforma Observável em Kubernetes com CI/CD",
      "desc": "Monte uma plataforma completa de deploy e observabilidade para uma aplicação instrumentada. Configure um pipeline de CI/CD (GitHub Actions) que roda testes, builda imagens e publica em um registry, implantando em um cluster Kubernetes local (kind/minikube) com health checks (liveness/readiness). Instrumente a app com os 3 pilares: logs estruturados em JSON com correlation IDs agregados no Loki/ELK, métricas expostas ao Prometheus com dashboards RED/USE no Grafana, e tracing distribuído via OpenTelemetry. Defina SLIs/SLOs com error budget, alertas sem fadiga (latência e error rate) e faça profiling (py-spy/pprof) sob carga para identificar gargalos. Documente um runbook de investigação de incidentes.",
      "deliverable": "Cluster K8s com a app implantada via pipeline CI/CD green, stack de observabilidade (Prometheus + Grafana + Loki/ELK + tracing OTel), dashboards RED/USE, SLOs com error budget e alertas configurados, relatório de profiling com um gargalo identificado e runbook de incidentes"
    }
  },
  "Seguranca & Ethical Hacking (Intro)": {
    "basic": {
      "title": "🟢 Recon + CTFs com Writeups",
      "desc": "Monte seu lab de estudo (Kali Linux em VM, conta gratuita em TryHackMe/PortSwigger Academy) e complete 5+ salas/CTFs iniciantes cobrindo reconhecimento e web básico. Pratique OSINT (Google dorking, WHOIS, DNS) e enumeração de portas com Nmap em um alvo autorizado, e documente cada exercício com writeups. Sempre respeitando escopo e legalidade (só alvos autorizados).",
      "deliverable": "5+ writeups de CTFs/labs com screenshots, comandos de recon (Nmap/OSINT), a vulnerabilidade encontrada e as lições aprendidas, publicados no GitHub/blog"
    },
    "advanced": {
      "title": "🔴 Pentest Completo com Relatório Profissional",
      "desc": "Configure um app vulnerável (DVWA ou Juice Shop) em rede isolada e execute um pentest end-to-end seguindo metodologia (PTES): reconhecimento/OSINT, scanning (Nmap, Nikto), exploração de OWASP Top 10 (Broken Access Control, SQLi, XSS, SSRF, auth/session), e ataques a senhas (hashcat/John, spraying) mais um cenário de phishing simulado (GoPhish). Antes de tudo, defina escopo, regras de engajamento e um NDA/autorização fictícios. Classifique os achados por severidade (CVSS) com evidências e recomendações de remediação.",
      "deliverable": "Relatório de pentest profissional (PDF) com escopo/autorização, metodologia PTES, 6+ vulnerabilidades classificadas por CVSS, evidências e plano de correção"
    }
  },
  "Embarcados, Hardware & Automacao": {
    "basic": {
      "title": "🟢 Estação Meteorológica IoT com ESP32",
      "desc": "Monte uma estação que lê temperatura e umidade (DHT22) e pressão (BMP280) via I2C, mostrando os valores em um display OLED. O ESP32 conecta ao WiFi e publica as leituras em um broker MQTT, e um dashboard web exibe os gráficos em tempo real com alerta quando a temperatura passa de um limite. Use Wokwi/Tinkercad se não tiver o hardware físico.",
      "deliverable": "Circuito montado (ou simulado no Wokwi), firmware ESP32 lendo sensores por I2C, publicação MQTT funcionando e dashboard web com gráficos em tempo real e alerta de threshold"
    },
    "advanced": {
      "title": "🔴 Linha de Produção Automatizada com RTOS, TinyML e Supervisão Industrial",
      "desc": "Construa uma célula de automação em escala de bancada: um ESP32 rodando FreeRTOS coordena, em tasks concorrentes com prioridades, a leitura de sensores industriais (proximidade, temperatura), o acionamento de atuadores (motor, servo, relé) via malha de controle e a detecção de peças defeituosas com um modelo TinyML treinado no Edge Impulse e rodando na borda. Um segundo nó (Raspberry Pi ou simulação de PLC) expõe os dados via Modbus/OPC UA para um SCADA/HMI leve que supervisiona a linha, e você projeta a PCB da placa de sensores no KiCad. Documente a análise de escalonabilidade (RM/EDF) das tasks e o tratamento de inversão de prioridade e watchdog.",
      "deliverable": "Firmware FreeRTOS multitask (sincronização por filas/semáforos), modelo TinyML deployado no microcontrolador, integração Modbus/OPC UA com HMI/SCADA supervisionando a linha, esquemático e layout de PCB no KiCad, e relatório com análise de escalonabilidade, tuning do controle e vídeo demonstrativo"
    }
  },
  "Arquitetura de Software": {
    "basic": {
      "title": "🟢 System Design: URL Shortener",
      "desc": "Projete e implemente um encurtador de URL aplicando os fundamentos da área: API REST, geração de hash único, redirecionamento e analytics de cliques. Documente as decisões com estimativas de capacidade (back-of-envelope: QPS, storage) e desenhe a arquitetura incluindo cache (Redis), banco (PostgreSQL), rate limiting e load balancing. Entregue um System Design Document seguindo o framework requirements → estimation → design → tradeoffs.",
      "deliverable": "App deployada com API, Redis cache, rate limiting e analytics, acompanhada de um System Design Document com diagramas de arquitetura e cálculo de capacidade (QPS/storage)"
    },
    "advanced": {
      "title": "🔴 Plataforma Distribuída estilo Twitter com Microsserviços",
      "desc": "Projete e implemente um sistema distribuído event-driven com 3+ microsserviços (User, Tweet, Timeline) modelados com DDD (bounded contexts, aggregates, domain events) e comunicação assíncrona via Kafka/RabbitMQ. Resolva a timeline com fan-out on write vs read e o problema das celebridades, adicione API Gateway com rate limiting, sharding de banco, caching em camadas e padrões de resiliência (circuit breaker, retry com backoff, fallback). Instrumente observabilidade (distributed tracing, correlation IDs, SLOs/SLIs) e valide a escala estimada com load testing (k6/Locust).",
      "deliverable": "Monorepo com 3+ microsserviços orientados a DDD, message broker, API gateway, sharding, circuit breakers e tracing distribuído, mais relatório de load test (k6/Locust) e design document cobrindo fan-out, CAP tradeoffs, sharding e camadas de cache"
    }
  },
  "Deep Learning": {
    "basic": {
      "title": "🟢 Classificador de Imagens com CNN (PyTorch)",
      "desc": "Treine uma CNN do zero em um dataset de imagens (CIFAR-10 ou próprio) usando o pipeline completo do PyTorch: Dataset, DataLoader e loop de treino com autograd. Aplique data augmentation, batch normalization, dropout e learning rate scheduling, e depois compare o resultado com transfer learning a partir de uma ResNet pré-treinada. Visualize os filtros convolucionais e use Grad-CAM para interpretar as predições. Treine de graça no Colab ou Kaggle.",
      "deliverable": "Notebook reproduzível com a CNN treinada do zero, comparação contra a ResNet por transfer learning, visualização de filtros e Grad-CAM, e gráfico de curvas de treino/validação"
    },
    "advanced": {
      "title": "🔴 Plataforma Generativa Multimodal do Zero",
      "desc": "Implemente do zero um bloco Transformer completo (self-attention e multi-head attention, positional encoding, layer norm, residual connections e feed-forward) e treine um modelo generativo — um mini-GPT decoder-only para texto ou um diffusion model (forward diffusion + denoising com U-Net) para imagens. Treine com técnicas de eficiência (mixed precision FP16, gradient accumulation, gradient checkpointing) e regularização adequada, e compare a abordagem escolhida com uma baseline (ex.: VAE ou GAN com o problema de mode collapse). Exporte o modelo final via TorchScript ou ONNX e sirva-o por uma API com interface interativa.",
      "deliverable": "Repositório com o Transformer/U-Net implementado do zero, modelo generativo treinado com mixed precision e checkpointing, comparação documentada contra uma baseline generativa, modelo exportado em ONNX/TorchScript e demo servida (API + interface) com amostras geradas"
    }
  },
  "AI Engineering": {
    "basic": {
      "title": "🟢 Assistente com Prompts e Saída Estruturada",
      "desc": "Crie uma aplicação que consome uma API de LLM (OpenAI/Anthropic ou modelo local via free tier) para resolver uma tarefa concreta, como extrair dados de textos ou classificar mensagens. Aplique técnicas de prompt engineering (few-shot, chain-of-thought, role prompting) e force saída estruturada com function calling / JSON mode validado por modelos Pydantic. Trate os prompts como código: use templates versionados e um conjunto de casos de teste.",
      "deliverable": "App CLI ou script que chama a API com system prompt, retorna JSON validado por Pydantic e passa em uma suíte de testes comparando 3+ variações de prompt versionadas"
    },
    "advanced": {
      "title": "🔴 Plataforma RAG + Agents em Produção",
      "desc": "Construa uma plataforma que integra RAG (chunking, embeddings, busca em vector DB com HNSW e gestão de contexto longo) com um sistema multi-agent orquestrado via LangGraph, incluindo tool use (ReAct), memória, human-in-the-loop e conexão a ferramentas por MCP. Coloque em nível de produção: guardrails contra prompt injection e PII, avaliação automatizada com RAGAS/LLM-as-judge, otimização de custo (caching semântico, model routing, batching) e observabilidade completa (tracing com Langfuse, métricas de qualidade, TTFT e tokens/s).",
      "deliverable": "Plataforma implantada com pipeline RAG avaliado por RAGAS, orquestração multi-agent via LangGraph + MCP, guardrails de segurança, dashboard de observabilidade (Langfuse) e relatório de custo/latência"
    }
  },
  "Bioinformatica & Computacao Biologica": {
    "basic": {
      "title": "🧬 Pipeline de Análise Genômica",
      "desc": "Construa um pipeline que lê sequências em FASTA (ex.: variantes de SARS-CoV-2 do NCBI/GenBank), realiza alinhamento par-a-par (Needleman-Wunsch/Smith-Waterman) e alinhamento múltiplo com Biopython, e constrói uma árvore filogenética (UPGMA/Maximum Likelihood) das amostras. Orquestre as etapas com Snakemake ou Nextflow para garantir reprodutibilidade e visualize a árvore ao final.",
      "deliverable": "Pipeline reproduzível (Snakemake/Nextflow) sobre sequências reais do NCBI, com árvore filogenética visualizada e relatório dos alinhamentos e variantes encontradas"
    },
    "advanced": {
      "title": "🔴 Preditor de Função de Proteínas com Protein Language Models",
      "desc": "Treine um modelo que prediz a função/família de proteínas a partir da sequência de aminoácidos, usando dados do UniProt. Compare features clássicas (composição de aminoácidos, motifs) com embeddings de protein language models (ESM/ProtTrans) e avalie ao menos 3 algoritmos (ex.: Random Forest, SVM e rede neural). Analise os erros por família, visualize os clusters de embeddings com t-SNE/UMAP e discuta limitações e vieses dos dados.",
      "deliverable": "Notebook reproduzível com modelo treinado, benchmark de 3+ algoritmos (features clássicas vs. embeddings ESM), métricas por família, visualização t-SNE/UMAP e análise crítica de erros"
    }
  },
  "Banco de Dados Avancado": {
    "basic": {
      "title": "🟢 Laboratório de Performance no PostgreSQL",
      "desc": "Configure um PostgreSQL local e popule um banco com mais de 1M de linhas. Escreva de 8 a 10 queries complexas usando JOINs, CTEs recursivas e window functions. Para cada uma, rode EXPLAIN ANALYZE BUFFERS antes e depois de otimizar (criando índices adequados — B-tree, GIN para JSONB, parciais/covering — ou reescrevendo a query). Ative pg_stat_statements e faça VACUUM/ANALYZE para atualizar estatísticas.",
      "deliverable": "Relatório com 8-10 queries otimizadas, EXPLAIN ANALYZE antes/depois, índices criados, planos de execução comparados e métricas de ganho de performance"
    },
    "advanced": {
      "title": "🔴 Plataforma de Dados Poliglota com Alta Disponibilidade",
      "desc": "Construa uma plataforma que combina múltiplos bancos escolhidos por caso de uso: PostgreSQL (dados transacionais) com replicação streaming primário-réplica, failover e backup PITR via WAL archiving; Redis para cache e estruturas de dados (sorted sets, streams); MongoDB ou Elasticsearch para dados semi-estruturados/busca full-text; e um NewSQL (CockroachDB ou TiDB) demonstrando SQL distribuído. Aplique particionamento, RLS e conexões via PgBouncer, e documente a estratégia poliglota justificando cada banco. Orquestre tudo com Docker Compose.",
      "deliverable": "Sistema poliglota no Docker Compose com replicação e failover do PostgreSQL demonstrados, backup/restore PITR testado, integração dos bancos NoSQL/NewSQL, benchmarks de leitura/escrita e documento de decisão arquitetural (ADR) justificando cada escolha"
    }
  },
  "Data Engineering": {
    "basic": {
      "title": "🟢 Pipeline ETL com Airflow + dbt",
      "desc": "Construa um pipeline batch completo: extraia dados de uma API pública (clima, financeiro ou similar) e carregue em PostgreSQL orquestrando com Airflow (DAG com sensors e tarefas encadeadas). Transforme os dados com dbt seguindo o fluxo staging → marts, aplicando um modelo dimensional simples (star schema com fact e dimension tables) e escrevendo dbt tests para validar unicidade, não-nulos e integridade. Feche com um dashboard de BI que responda perguntas de negócio.",
      "deliverable": "Repositório com DAG(s) Airflow, projeto dbt (modelos staging/marts, testes e docs) e um dashboard em Metabase ou Streamlit com KPIs no topo e ao menos um filtro/drill-down."
    },
    "advanced": {
      "title": "🔴 Lakehouse com Streaming, CDC e Contratos de Dados",
      "desc": "Monte uma plataforma de dados end-to-end integrando batch e streaming sobre um Lakehouse. Ingira mudanças de um banco operacional via CDC (Debezium → Kafka) e um fluxo de eventos simulados; processe com Spark Structured Streaming (windowing, agregações, idempotência) gravando em tabelas Delta ou Iceberg com ACID, schema evolution e time travel. Orquestre camadas bronze/silver/gold com Airflow ou Dagster e materialize marts com dbt. Garanta confiabilidade com data contracts e testes de qualidade (Great Expectations ou dbt tests), particionamento/otimização de custo e observabilidade de freshness e volume. Exponha o resultado em um dashboard de BI.",
      "deliverable": "Repositório com docker-compose subindo Kafka/Debezium/Spark/warehouse, pipelines CDC + streaming gravando em tabelas Delta/Iceberg particionadas, orquestração (Airflow/Dagster) das camadas, modelos dbt com data contracts e testes de qualidade, dashboard analítico e documentação da arquitetura (Lambda/Kappa, lineage e decisões de governança/LGPD)."
    }
  },
  "Blockchain & Web3": {
    "basic": {
      "title": "🟢 DApp de Votação em Solidity",
      "desc": "Escreva um smart contract de votação em Solidity: criar eleição, registrar candidatos, votar (1 voto por endereço) e apurar resultados, usando modifiers para controle de acesso e events para o histórico. Faça testes com Hardhat/Foundry e deploy numa testnet gratuita (Sepolia) usando faucet. Monte um frontend em React + ethers.js/wagmi que conecta a MetaMask, lê o estado do contrato e envia transações.",
      "deliverable": "Repositório com o contrato de votação testado, deploy verificado no Etherscan da testnet, frontend React conectando MetaMask e um README com custos de gas e riscos de segurança básicos (reentrancy, overflow)."
    },
    "advanced": {
      "title": "🔴 Protocolo DeFi Completo: DEX (AMM) + Governança",
      "desc": "Construa um protocolo DeFi ponta a ponta: uma DEX com AMM tipo Uniswap (invariante x*y=k), swap de tokens ERC-20, pools de liquidez com LP tokens, exibindo slippage e impermanent loss no frontend. Integre um oráculo Chainlink Price Feed como referência de preço, adicione governança on-chain via token ERC-20 de voto + timelock (DAO) e indexe eventos com The Graph. Endureça os contratos contra reentrancy, front-running/MEV e overflow, com testes extensivos e fuzzing em Foundry.",
      "deliverable": "Repositório com contratos AMM + governança auditados (relatório de vulnerabilidades cobrindo reentrancy, MEV e slippage), suíte de testes com fuzzing, subgraph no The Graph, deploy verificado na testnet e frontend (ethers.js/wagmi) com swap, provisão de liquidez e votação de propostas."
    }
  },
  "Cloud & Kubernetes": {
    "basic": {
      "title": "🟢 App em Kubernetes com IaC e Observabilidade",
      "desc": "Suba um cluster K8s local (kind/minikube/k3d) e provisione a infra com IaC (Terraform ou Ansible). Faça o deploy de uma app usando Deployment, Service e Ingress, com configuração via ConfigMap e credenciais em Secrets. Adicione probes (liveness/readiness/startup) e requests/limits para definir a QoS dos pods. Automatize o deploy via GitOps (ArgoCD ou Flux) e monitore tudo com Prometheus + Grafana.",
      "deliverable": "Repositório Git com manifestos K8s (Deployment/Service/Ingress/ConfigMap/Secret) + probes e limits, código IaC, pipeline GitOps funcionando e dashboards Prometheus/Grafana, com README de arquitetura"
    },
    "advanced": {
      "title": "🔴 Plataforma Multi-Cloud K8s com Service Mesh e DR",
      "desc": "Opere uma plataforma completa em K8s com cargas stateful (StatefulSet + PersistentVolumes/StorageClass/CSI e snapshots) e stateless, além de DaemonSets e CronJobs. Isole tráfego com Network Policies (CNI) e RBAC/ServiceAccounts por namespace, e adicione um service mesh (Istio/Linkerd) com mTLS e traffic management. Garanta escala automática (HPA/VPA/Cluster Autoscaler), empacote os deploys em Helm charts versionados via GitOps e implemente disaster recovery multi-cloud com estratégia de FinOps (spot/reserved, right-sizing, tagging).",
      "deliverable": "Cluster multi-cloud com Helm charts + GitOps, StatefulSets com storage CSI, Network Policies e RBAC, service mesh com mTLS, autoscaling HPA/VPA/CA, plano de DR testado e relatório de FinOps com alocação de custo, documentados em runbook"
    }
  },
  "DevSecOps & Seguranca": {
    "basic": {
      "title": "🟢 Pipeline de Segurança no CI/CD",
      "desc": "Monte um pipeline de segurança automatizado no GitHub Actions cobrindo as etapas essenciais: SAST (Semgrep), SCA de dependências (Trivy/Grype), scan da imagem de container (Trivy) e detecção de segredos (gitleaks). Configure o pipeline para quebrar o build ao encontrar vulnerabilidade crítica e mova qualquer segredo hardcoded para variáveis/secrets. Gere relatórios em formato SARIF e publique-os na aba Security do repositório.",
      "deliverable": "Pipeline CI/CD com SAST, SCA, container scan e secrets scanning integrados, falha automática em achados críticos, relatórios SARIF publicados e um Dockerfile endurecido (imagem distroless, usuário rootless)."
    },
    "advanced": {
      "title": "🔴 Plataforma DevSecOps End-to-End com Zero Trust",
      "desc": "Construa a postura de segurança completa de uma aplicação containerizada rodando em Kubernetes. Faça threat modeling STRIDE com data flow diagram, mapeie o OWASP Top 10 no código e aplique mitigações; garanta supply chain security (SBOM + assinatura Sigstore, atestações SLSA, CI/CD com OIDC sem credenciais estáticas); endureça o cluster com RBAC, Network Policies, Pod Security e políticas OPA/Gatekeeper (compliance as code); instrumente runtime security com Falco para detectar comportamento anômalo; e adote princípios Zero Trust com microsegmentação e mTLS entre serviços. Feche o ciclo com um playbook de resposta a incidentes e um relatório de conformidade mapeado a CIS benchmarks.",
      "deliverable": "Repositório com threat model STRIDE + mapeamento OWASP, pipeline assinando imagens (Sigstore) e gerando SBOM/atestações SLSA via OIDC, cluster K8s com RBAC/Network Policies/OPA-Gatekeeper e Falco ativos, mTLS entre serviços, playbook de resposta a incidentes e relatório de hardening antes/depois contra CIS benchmarks."
    }
  },
  "Ethical Hacking: Web & Redes": {
    "basic": {
      "title": "🟢 Lab de Vulnerabilidades Web (DVWA/Juice Shop)",
      "desc": "Suba um ambiente de prática com DVWA ou OWASP Juice Shop em Docker e ataque as vulnerabilidades web fundamentais. Para cada uma (SQL Injection, XSS refletido, XSS armazenado, CSRF e IDOR), entenda a falha, explore-a nos níveis fácil e médio interceptando requests com o Burp Suite Community, e documente causa raiz e correção. Escreva um writeup técnico por vulnerabilidade.",
      "deliverable": "5 writeups de vulnerabilidades web (SQLi, XSS refletido, XSS armazenado, CSRF, IDOR) com screenshots, passos de reprodução, explicação técnica da causa e recomendação de correção"
    },
    "advanced": {
      "title": "🔴 Pentest de Domínio Active Directory (Kill Chain Completa)",
      "desc": "Monte um lab com Kali atacante + Domain Controller Windows + 1-2 máquinas do domínio, e execute uma cadeia de ataque de ponta a ponta contra o Active Directory. Faça enumeração de serviços e do domínio (Nessus/Nuclei, BloodHound, PowerView), obtenha acesso inicial explorando um serviço vulnerável, escale privilégios, extraia credenciais via Kerberoasting/AS-REP Roasting e crack offline, e faça lateral movement (Pass-the-Hash/Ticket, PSExec/WinRM) até comprometer o domínio com Golden Ticket. Consolide tudo em um relatório profissional de pentest.",
      "deliverable": "Lab AD de 3+ VMs com kill chain completa documentada (acesso inicial → privesc → Kerberoasting → lateral movement → Golden Ticket), evidências por fase, scoring CVSS e relatório de pentest com recomendações de defesa (tiered admin, LAPS, credential guard)"
    }
  },
  "Robotica, IoT & Automacao Avancada": {
    "basic": {
      "title": "🟢 Robô Autônomo em Simulação (ROS 2 + Gazebo)",
      "desc": "Monte um robô móvel no Gazebo com câmera e LiDAR, controlado por nós ROS 2 (topics, services). Implemente SLAM para mapear o ambiente, localização e navegação autônoma entre waypoints com o Nav2, evitando obstáculos. Use OpenCV para detecção simples de objetos/cor e visualize o mapa e a pose no RViz.",
      "deliverable": "Pacote ROS 2 rodando em Gazebo com SLAM, navegação autônoma via Nav2, percepção com OpenCV e README explicando a arquitetura de nós"
    },
    "advanced": {
      "title": "🔴 Manipulador Autônomo com Percepção 3D e RL (sim-to-real)",
      "desc": "Desenvolva um pipeline de manipulação robótica que percebe o ambiente via nuvem de pontos (segmentação/estimativa de profundidade), planeja e executa grasping com MoveIt2, e usa uma política treinada por Reinforcement Learning com domain randomization para robustez sim-to-real. Treine em simulação (Isaac Sim ou MuJoCo) e integre percepção, planejamento de trajetória e controle avançado (MPC) em um sistema ROS 2 completo.",
      "deliverable": "Sistema ROS 2 integrando percepção 3D, MoveIt2 e política de RL treinada com domain randomization, com vídeos da tarefa de grasping em simulação e relatório de avaliação (taxa de sucesso, gap sim-to-real)"
    }
  },
  "Sistemas Distribuidos": {
    "basic": {
      "title": "🟢 Key-Value Store Distribuído",
      "desc": "Implemente um key-value store distribuído em Python ou Go com 3 nós, usando consistent hashing para particionar as chaves e replicação com quórum (N=3, W=2, R=2). Exponha GET/PUT via HTTP e demonstre tolerância a falhas derrubando um nó enquanto o sistema continua atendendo. Visualize o hash ring e a distribuição das réplicas.",
      "deliverable": "KV store de 3 nós com consistent hashing, replicação por quórum configurável (N/W/R), tolerância a falha de um nó comprovada e visualização do ring."
    },
    "advanced": {
      "title": "🔴 Plataforma Distribuída com Consenso e Sagas",
      "desc": "Construa uma plataforma de microsserviços que integre a profundidade da área: um cluster com Raft implementado do zero (leader election, log replication, safety) coordenando o estado, comunicação síncrona via gRPC/Protobuf e assíncrona via Kafka, transações distribuídas com Saga (outbox pattern) e event sourcing/CQRS. Instrumente tudo com observabilidade distribuída (OpenTelemetry, tracing e correlation IDs) e valide a resiliência com chaos engineering (network partitions, kill de líder) e testes estilo Jepsen para verificar invariantes de consistência.",
      "deliverable": "Plataforma multi-serviço com Raft próprio, gRPC + Kafka, Saga/outbox e CQRS, tracing distribuído ponta a ponta e suíte de chaos/consistency tests demonstrando que consenso e invariantes se mantêm sob falhas."
    }
  },
  "MLOps & Producao": {
    "basic": {
      "title": "🟢 Pipeline ML End-to-End com MLflow",
      "desc": "Construa um pipeline completo e reprodutível: versionamento de dados com DVC, experiment tracking com MLflow (métricas, params, artefatos), treino automatizado, model registry com promoção staging→production, serving via FastAPI e monitoramento de data/model drift com Evidently. Orquestre tudo em Docker Compose e dispare um retreino quando drift for detectado.",
      "deliverable": "Repositório com pipeline MLOps rodando em docker-compose: DVC, MLflow tracking + registry, endpoint de serving, painel de drift e script de auto-retrain funcionando end-to-end"
    },
    "advanced": {
      "title": "🔴 Plataforma de LLMOps & ML em Escala",
      "desc": "Construa uma plataforma interna que integre a profundidade da área: feature store (Feast) com store online/offline, orquestração de treino (Kubeflow/Vertex Pipelines), model registry com lineage e rollback, e deploy de LLMs quantizados (vLLM/TGI com GPTQ ou AWQ) usando canary/shadow com split de tráfego. Adicione observabilidade de LLM (tracing de tool calls, evals online, guardrails), versionamento conjunto de prompt+modelo, monitoramento de bias/qualidade e otimização de custo (spot instances, caching de embeddings, model routing). Rode em K8s com GPU.",
      "deliverable": "Plataforma em K8s com feature store, pipeline de treino orquestrado, serving de LLM quantizado com canary/shadow, observabilidade + evals online, CI/CD de prompt+modelo e doc de arquitetura, decisões de custo e trade-offs"
    }
  },
  "Pesquisa & Fronteira": {
    "basic": {
      "title": "🟢 Reproduzindo um Paper de Fronteira",
      "desc": "Escolha um artigo recente e influente da fronteira de IA (ex.: DPO para alinhamento de LLMs, CLIP para multimodal, DDPM para difusão ou um bloco Mamba/SSM) usando arXiv e Papers With Code. Reproduza o resultado central em pequena escala num notebook, implementando o componente-chave e rodando um experimento reduzido. Documente o método, as hipóteses e o que você conseguiu (ou não) replicar.",
      "deliverable": "Notebook reproduzindo o componente central de 1 paper de fronteira, com experimento em escala reduzida, gráficos e um resumo crítico (o que o paper propõe, o que reproduziu e limitações)"
    },
    "advanced": {
      "title": "🔴 Grover + Cripto Pós-Quântica: Ameaça e Defesa",
      "desc": "Construa um estudo end-to-end sobre a ameaça quântica à criptografia. Implemente o algoritmo de Grover em Qiskit (com oracle e amplificação de amplitude) e execute em simulador e em hardware real da IBM Quantum, quantificando o speedup quadrático contra uma busca clássica. Em seguida, implemente e faça benchmark de um esquema pós-quântico padronizado pelo NIST (Kyber para KEM ou Dilithium para assinatura), analisando tamanhos de chave, desempenho e o plano de migração. Conecte tudo às implicações reais (era NISQ, error correction, timeline de risco).",
      "deliverable": "Repositório com notebook Qiskit (Grover em simulador + hardware real, análise do speedup) e módulo de cripto pós-quântica (Kyber ou Dilithium com benchmarks e comparação vs. clássico), acompanhado de relatório técnico sobre a migração pós-quântica"
    }
  },
  "Escrita e Metodologia Cientifica": {
    "basic": {
      "title": "🟢 Mini-Revisão Sistemática (5 papers)",
      "desc": "Escolha um tema de computação e defina uma pergunta de pesquisa com critérios de inclusão/exclusão. Busque em Google Scholar, Semantic Scholar e ACM/IEEE, e leia os candidatos com o método das 3 passadas de Keshav. Selecione 5 papers, extraia os dados em uma tabela comparativa (abordagem, dataset, métricas, resultados) e organize as referências no Zotero.",
      "deliverable": "Relatório curto em LaTeX (Overleaf) com a pergunta de pesquisa, critérios, tabela comparativa dos 5 papers, análise de gaps e bibliografia gerenciada via BibTeX"
    },
    "advanced": {
      "title": "🔴 Paper Completo + Defesa Científica",
      "desc": "Escreva um artigo completo (6-10 páginas) no template ACM/IEEE com Abstract, Introdução, Related Work (com taxonomia e identificação de gap), Metodologia, Resultados e Conclusão, usando LaTeX/BibTeX, 15+ referências, figuras com matplotlib/pgfplots e pseudocódigo. Aplique estatística adequada (intervalos de confiança, comparação de modelos), submeta ao arXiv como preprint e simule uma banca: prepare slides limpos, um pôster e um elevator pitch de 2 minutos. Escreva também uma rebuttal letter respondendo ponto a ponto a reviews (reais ou de colegas).",
      "deliverable": "Preprint no arXiv (paper em LaTeX formatado para conferência, 15+ refs, figuras, tabelas e análise estatística) acompanhado de deck de slides, pôster científico e rebuttal letter respondendo aos reviewers"
    }
  },
  "Iniciacao Cientifica (IC)": {
    "basic": {
      "title": "🟢 Proposta de IC + Contato com Orientador",
      "desc": "Escolha um tema e um possível orientador buscando no Lattes e lendo 2-3 papers recentes do laboratório dele. Escreva uma proposta de pesquisa completa para edital PIBIC/FAPESP com problema, justificativa, objetivos (geral e específicos), revisão de literatura (10+ referências), metodologia, cronograma semestral e resultados esperados. Redija também um email curto e objetivo de primeiro contato com o orientador.",
      "deliverable": "Proposta de IC formatada para edital (com metodologia, cronograma e referências) + email de contato com o orientador escolhido, justificando a escolha pelo Lattes/papers do lab"
    },
    "advanced": {
      "title": "🔴 IC Completa: Da Reprodução ao Relatório e Pôster",
      "desc": "Conduza uma mini-pesquisa reproduzindo um paper de computação: defina hipótese, implemente o baseline, rode ablation studies e compare com os resultados originais, mantendo um caderno de pesquisa versionado (Git/notebook) com decisões, falhas e resultados. Escreva um relatório final nos moldes FAPESP (introdução, metodologia, resultados com gráficos, discussão, conclusão) tratando integridade e ética (sem plágio/fabricação). Prepare um pôster e um pitch de 5 min estilo SIICUSP/CONIC e atualize seu currículo Lattes com o projeto.",
      "deliverable": "Repositório com código reprodutível e caderno de pesquisa + relatório final formato FAPESP com gráficos e ablations + pôster acadêmico e pitch de 5 min + entrada do projeto no currículo Lattes"
    }
  },
  "Mestrado": {
    "basic": {
      "title": "🟢 Plano de Ingresso no Mestrado",
      "desc": "Escolha 3 programas de pós em Computação (ex.: USP, UNICAMP, UFMG, UFRGS, PUC-Rio) e monte um dossiê comparativo de ingresso: exigências do processo seletivo (POSCOMP, prova, projeto, entrevista, Lattes, cartas), linhas de pesquisa e bolsas disponíveis (CAPES, CNPq, FAPESP), com valores e requisitos. Identifique 2 potenciais orientadores por programa e escreva um e-mail de contato prévio personalizado para cada. Monte também um plano de estudos de 8 semanas para o POSCOMP.",
      "deliverable": "Dossiê comparativo dos 3 programas (seleção, linhas, bolsas), 2 e-mails de contato prévio a orientadores e um plano de estudos de 8 semanas para o POSCOMP"
    },
    "advanced": {
      "title": "🔴 Proposta de Dissertação + Estratégia de Publicação",
      "desc": "Escreva uma proposta completa de dissertação pronta para qualificação: problema, hipótese, revisão de literatura (30+ refs), metodologia detalhada (design experimental, métricas), cronograma de 24 meses e resultados preliminares. Acople uma estratégia de publicação: mapeie o caminho workshop → conferência regional → conferência top, escolhendo venues concretas com justificativa (ranking, taxa de aceitação, aderência ao tema) e definindo co-autoria via CRediT taxonomy. Valide a proposta com um professor.",
      "deliverable": "Proposta de dissertação em formato de qualificação (30+ refs, metodologia, cronograma de 24 meses) mais um plano de publicação com venues-alvo justificadas, timeline de submissões e definição de autoria via CRediT"
    }
  },
  "Doutorado": {
    "basic": {
      "title": "🟢 Mapa da Área e Problema em Aberto",
      "desc": "Escolha uma subárea de computação e mapeie o campo: 8-10 grupos de pesquisa influentes, ~15 papers seminais, 5 conferências/periódicos top e as tendências atuais. Use o Connected Papers para visualizar as relações entre os trabalhos e, a partir do grafo, identifique e justifique 3 problemas em aberto que caberiam num doutorado.",
      "deliverable": "Survey de 2000+ palavras com mapa de grupos, papers seminais, grafo de relações e 3 problemas em aberto justificados"
    },
    "advanced": {
      "title": "🔴 Proposta de Doutorado + Plano de Carreira",
      "desc": "Escreva uma proposta de tese completa: problema original em aberto, hipóteses, metodologia com 3+ experimentos, resultados esperados e contribuições, revisão de literatura com 40+ referências e cronograma de 4 anos (incluindo estratégia de publicação e sanduíche). Anexe um esboço de proposta de fomento (FAPESP/CNPq) com orçamento e impacto, e um plano de carreira pós-PhD (academia via concurso/tenure, pós-doc no exterior ou industry research lab). Prepare os slides do exame de qualificação.",
      "deliverable": "Proposta de tese (40+ refs, 3+ experimentos, cronograma de 4 anos), esboço de grant com orçamento, plano de carreira pós-PhD e slides de qualificação"
    }
  },
  "Ferramentas e Recursos Academicos": {
    "basic": {
      "title": "🟢 Setup Acadêmico Completo",
      "desc": "Monte seu ambiente de pesquisa aplicando os fundamentos da área: crie um documento no Overleaf usando um template de conferência (IEEE/ACM/LNCS) com bibliografia via BibTeX, organize 20+ papers no Zotero em coleções com metadados corretos, e configure seu perfil no Google Scholar/ORCID com alertas de busca ativos. Complemente com um notebook Jupyter que analisa um dataset público de forma reproduzível (seeds fixas + requirements). Documente todo o workflow em um README.",
      "deliverable": "Ambiente configurado e documentado: doc Overleaf com template de conferência + BibTeX, Zotero com 20+ papers em coleções, ORCID e Google Scholar com alertas, e notebook reproduzível com README"
    },
    "advanced": {
      "title": "🔴 Pipeline de Pesquisa Reproduzível End-to-End",
      "desc": "Construa um projeto de pesquisa reproduzível de ponta a ponta, integrando escrita, dados e código. Versione o código em Git, os dados/modelos com DVC ou Git LFS, e fixe o ambiente com Docker + conda; rastreie os experimentos com MLflow ou Weights & Biases (seeds, métricas, artefatos) e publique o dataset seguindo princípios FAIR com DOI. Amarre tudo em um paper LaTeX cujas figuras/tabelas são geradas pelo pipeline via CI, e escreva um relatório honesto de reprodutibilidade (não-determinismo de GPU, variância entre runs, model/data cards). Qualquer pessoa deve clonar o repo e reproduzir os resultados.",
      "deliverable": "Repositório Git público onde `docker` + `dvc repro` reproduzem os experimentos: tracking em MLflow/W&B, dataset com DOI (FAIR), paper LaTeX com figuras geradas por CI e relatório de reprodutibilidade com model/data cards"
    }
  },
  "Lideranca Tecnica": {
    "basic": {
      "title": "🟢 Kit de Liderança Técnica: ADRs + Runbooks",
      "desc": "Para um projeto existente (seu ou open source), pratique os fundamentos de decisão técnica e operação. Escreva 3 ADRs documentando decisões reais (com contexto, alternativas consideradas e trade-offs), 3 runbooks para cenários de incidente comuns (deploy falhou, banco lento, API fora do ar) e um playbook de on-call com matriz de escalonamento e rotação.",
      "deliverable": "3 ADRs, 3 runbooks e um playbook de on-call com matriz de escalonamento, versionados no repositório do projeto"
    },
    "advanced": {
      "title": "🔴 RFC, Métricas DORA e Simulação de Crise",
      "desc": "Conduza uma mudança técnica de ponta a ponta como um Staff Engineer faria. Escreva um RFC propondo uma mudança arquitetural significativa (ex: monolito para microsserviços, novo cache, troca de banco) com alternativas, rollout e rollback, e colete feedback (colegas ou simulado). Implemente a fase 1 medindo métricas DORA (lead time, deployment frequency, MTTR) antes e depois. Depois, rode um game day simulando um incidente crítico na nova arquitetura, atuando como incident commander com war room e comunicação em tempo real, e feche o ciclo com um postmortem blameless e um plano de Disaster Recovery (RTO/RPO/failover).",
      "deliverable": "RFC com feedback incorporado, fase 1 implementada com painel de métricas DORA antes/depois, registro de um game day, postmortem blameless com action items e plano de DR/BC documentando RTO, RPO e failover"
    }
  },
  "Redes de Computadores": {
    "basic": {
      "title": "🟢 Explorador de Pacotes: Subnetting + Wireshark",
      "desc": "Monte uma pequena rede local (real ou no Packet Tracer/GNS3) e planeje o endereçamento IPv4 dividindo um bloco em 2-3 sub-redes com CIDR (/24, /25), calculando máscara, hosts e gateway de cada uma. Depois use Wireshark para capturar tráfego real e identifique, camada por camada (OSI/TCP-IP), o encapsulamento: quadro Ethernet (MAC/ARP), pacote IP (TTL), segmento TCP (3-way handshake) e uma query DNS. Use ping e traceroute para observar ICMP e o caminho hop-by-hop.",
      "deliverable": "Planilha de subnetting com cálculo das sub-redes + arquivo .pcap com capturas anotadas identificando cada camada (Ethernet, IP, TCP, DNS) e um resumo do handshake TCP e do ARP observados"
    },
    "advanced": {
      "title": "🔴 Chat/Proxy TCP + Rede Corporativa com VLANs e VPN",
      "desc": "Integre programação de sockets com infraestrutura de rede em dois módulos. (1) Implemente em Python um servidor concorrente (chat multi-cliente ou mini proxy HTTP) usando sockets TCP e multiplexação com select/epoll, tratando conexões, portas e entrega ordenada. (2) Projete no GNS3/EVE-NG uma rede corporativa com 4 VLANs, inter-VLAN routing, NAT para saída à internet, firewall stateful com regras por VLAN, servidores DHCP e DNS, e um túnel VPN (WireGuard ou IPSec) entre dois sites. Valide o servidor de sockets rodando dentro dessa topologia e capture o tráfego atravessando VLANs e o túnel.",
      "deliverable": "Repositório com o servidor de sockets em Python (concorrente, com testes de múltiplos clientes) + topologia GNS3/EVE-NG exportada com VLANs, VPN, NAT, firewall, DHCP e DNS + documentação com diagrama de rede, tabela de rotas, regras de firewall e capturas Wireshark provando a comunicação fim-a-fim através do túnel"
    }
  },
  "Arquitetura de Computadores": {
    "basic": {
      "title": "🟢 Mini-CPU Single-Cycle + Montador RISC-V",
      "desc": "Implemente uma CPU single-cycle (não-pipeline) que executa um subconjunto de RISC-V RV32I. Monte o datapath essencial: banco de registradores, ALU, unidade de controle e memória, e decodifique os formatos R-type, I-type, S-type e B-type. Escreva um pequeno montador que traduz assembly (ADD, SUB, LW, SW, BEQ, JAL) em instruções, cobrindo modos de endereçamento imediato, direto e relativo ao PC. Rode um programinha (ex.: soma de vetor ou fatorial) e mostre o estado dos registradores a cada instrução.",
      "deliverable": "Simulador single-cycle em código (Python/C) com banco de registradores, ALU, unidade de controle e montador, executando um programa RISC-V real com trace passo a passo dos registradores e memória"
    },
    "advanced": {
      "title": "🔴 Simulador Ciclo-a-Ciclo com Pipeline, Cache e Memória Virtual",
      "desc": "Construa um simulador cycle-accurate de um processador RISC-V com pipeline de 5 estágios (IF/ID/EX/MEM/WB), detecção de todos os hazards e mitigação via forwarding, stalls e branch prediction (BTB com penalidade de misprediction). Acople uma hierarquia de memória completa: cache L1/L2 configurável (direct-mapped e set-associative, write-back/write-through, tipos de miss) e memória virtual com page table e TLB. Instrumente métricas de performance (CPI, IPC, taxa de miss) e valide com benchmarks, comparando configurações. Opcional: modele coerência MESI entre múltiplos cores.",
      "deliverable": "Simulador cycle-accurate configurável integrando pipeline com hazards/forwarding/branch prediction, cache L1/L2 multinível, TLB/page table e relatório de métricas (CPI, IPC, miss rate) comparando ao menos duas configurações de cache/preditor sobre benchmarks"
    }
  },
  "Sinais e Sistemas": {
    "basic": {
      "title": "🟢 Analisador de Espectro de Áudio em Python",
      "desc": "Carregue um arquivo WAV, aplique a FFT com numpy e mostre o espectro de frequências no terminal (barras ASCII por faixa). Use scipy.signal para projetar e aplicar um filtro passa-baixa interativo (usuário define a frequência de corte), respeitando o teorema de Nyquist. Salve o áudio filtrado, compare o espectro antes/depois e identifique a frequência dominante (nota musical mais próxima).",
      "deliverable": "Script Python que faz análise FFT, aplica filtro passa-baixa com scipy.signal, compara espectro antes/depois e identifica a nota dominante"
    },
    "advanced": {
      "title": "🔴 DSP Studio: Filtros, Espectrograma e Compressão de Áudio",
      "desc": "Implemente do zero em Python filtros FIR e IIR (passa-baixa, passa-alta, passa-banda) e aplique-os em áudio real, visualizando resposta em frequência (polos/zeros) e espectrograma via STFT antes/depois. Adicione um bloco de efeitos (delay, reverb simples) e detecção de pitch por FFT. Implemente ainda uma compressão de áudio simplificada (DCT, quantização, reconstrução) e compare a qualidade (SNR) em diferentes taxas, documentando a matemática (convolução, transformadas Z/Fourier).",
      "deliverable": "Notebook com filtros FIR/IIR implementados do zero, espectrogramas STFT, efeitos de áudio, detecção de pitch, compressor com análise de SNR e documentação matemática"
    }
  },
  "Java & Ecossistema JVM": {
    "basic": {
      "title": "☕ App de Console em Java Puro com OOP e Collections",
      "desc": "Construa uma aplicação de linha de comando em Java puro (JDK + Maven/Gradle, sem frameworks web) que modele um domínio real, como um gerenciador de biblioteca ou de tarefas. Aplique OOP de verdade (classes, herança, interfaces, encapsulamento, polimorfismo), use o Collections Framework (List, Set, Map) para armazenar os dados em memória, e explore Generics, Enums, tratamento de exceções (checked vs unchecked, try-with-resources) e a Streams API com lambdas para filtrar e agregar. Persista o estado em arquivo usando Java I/O/NIO (Files/Path).",
      "deliverable": "Projeto Java (Maven ou Gradle) executável via CLI, com hierarquia de classes OOP, uso de Collections e Streams, persistência em arquivo com NIO, testes JUnit 5 dos casos principais e README com instruções de build e execução"
    },
    "advanced": {
      "title": "🔴 Plataforma Spring Boot com Microsserviços, Observabilidade e JVM Tuning",
      "desc": "Construa uma plataforma de backend com dois microsserviços Spring Boot que se comunicam via REST: um Order Service (CRUD com Spring Data JPA/Hibernate, validação, DTOs, autenticação JWT/OAuth2 via Spring Security) e um Notification Service (consome eventos de criação de pedido). Aplique concorrência moderna (CompletableFuture e virtual threads do Java 21/Loom) para o processamento assíncrono, resiliência com circuit breaker (Resilience4j) e design patterns idiomáticos (Factory, Builder, Strategy). Adicione observabilidade completa (Actuator, Micrometer/Prometheus) e faça análise de performance da JVM, documentando garbage collection (G1/ZGC) e um heap dump/profiling com VisualVM ou JFR.",
      "deliverable": "Repositório multi-module (Maven/Gradle) com 2 microsserviços Spring Boot, JWT/Security, virtual threads, Resilience4j, Actuator + Micrometer/Prometheus, testes com JUnit 5 + Mockito + TestContainers, Docker Compose (apps + PostgreSQL) e um relatório de tuning da JVM (GC + profiling) no README"
    }
  },
  "Go (Golang)": {
    "basic": {
      "title": "🟢 CLI de Tarefas em Go",
      "desc": "Construa uma CLI de gerenciamento de tarefas em Go com Cobra: comandos add, list, done e delete, com flags e leitura de stdin. Modele as tarefas com structs e persista em JSON local usando encoding/json, tratando erros como valores (error, não exceção). Cubra a lógica com table-driven tests (go test) e faça cross-compilation gerando um único binário para Linux, macOS e Windows.",
      "deliverable": "CLI em Go com Cobra, persistência em JSON, tratamento de erros idiomático, table-driven tests passando e binários cross-platform (Linux/Mac/Windows) publicados no GitHub"
    },
    "advanced": {
      "title": "🔴 Microserviço Concorrente em Go com gRPC e Observabilidade",
      "desc": "Construa um microserviço em Go que expõe API REST (Gin/Echo) e gRPC com protocol buffers, processando jobs assíncronos via worker pool de goroutines alimentado por channels, com context para timeout/cancelamento e graceful shutdown. Persista dados com database/sql (connection pooling, prepared statements) e use errgroup para orquestrar concorrência. Instrumente com OpenTelemetry (traces/metrics), logging estruturado com slog e métricas Prometheus, aplique race detector e pprof nos testes, e faça deploy em imagem Docker scratch/distroless.",
      "deliverable": "Microserviço Go com API REST + gRPC (protobuf), worker pool com channels e graceful shutdown, camada de banco com database/sql, observabilidade (OpenTelemetry + slog + Prometheus), testes com race detector e pprof, e imagem Docker mínima (scratch/distroless)"
    }
  },
  "Forense Digital & Cloud Security": {
    "basic": {
      "title": "🟢 Investigação Forense de Disco com Autopsy",
      "desc": "Prepare (ou baixe) uma imagem de disco de uma VM e adquira-a bit-a-bit com dd/FTK Imager, registrando hashes MD5/SHA256 e a cadeia de custódia. Analise a imagem no Autopsy/Sleuth Kit: monte uma timeline (MAC times), recupere arquivos deletados via carving, e extraia artifacts do usuário (browser history, prefetch, LNK files, recycle bin, USB history). Documente cada passo com screenshots e valide a integridade pelos hashes.",
      "deliverable": "Relatório forense com formulário de cadeia de custódia, hashes de verificação, timeline do sistema de arquivos e achados de arquivos deletados/artifacts do usuário no Autopsy"
    },
    "advanced": {
      "title": "🔴 Incident Response Cloud com Forense Multi-fonte",
      "desc": "Provisione um ambiente vulnerável (CloudGoat/flAWS.cloud), execute um ataque simulado (escalação IAM, exfiltração de bucket S3) e depois atue como blue team seguindo RFC 3227 (ordem de volatilidade e triage). Reconstrua a timeline via CloudTrail logs e um supertimeline com Plaso/log2timeline, analise a memória da instância comprometida com Volatility, correlacione registry hives (SAM/SYSTEM/AmCache/ShimCache) e event logs, e investigue vetores de e-mail (SPF/DKIM/DMARC) e browser. Identifique IOCs e técnicas anti-forense, execute containment (revogar credenciais, isolar recursos) e proponha remediação.",
      "deliverable": "Relatório completo de incident response com supertimeline (CloudTrail + Plaso), análise de memória (Volatility) e registry, lista de IOCs e técnicas anti-forense detectadas, e plano de containment/remediação — com cadeia de custódia preservada"
    }
  },
  "Seguranca Defensiva, Forense Avancada & Blue Team": {
    "basic": {
      "title": "🟢 Investigação Forense: Memória + Rede",
      "desc": "Faça dump da RAM de uma VM infectada com malware de treinamento usando WinPmem/LiME e analise com Volatility 3: liste processos (pslist/psscan), detecte processos ocultos e code injection, extraia DLLs suspeitas e conexões (netscan). Em paralelo, capture o tráfego com tcpdump/Wireshark e identifique sinais de C2 beaconing, DNS tunneling e exfiltração. Correlacione as evidências de memória e rede numa timeline única do incidente.",
      "deliverable": "Relatório forense com achados de memória (Volatility) e rede (Wireshark), processos maliciosos identificados e timeline correlacionada memória+rede das evidências."
    },
    "advanced": {
      "title": "🔴 SOC + DFIR: Threat Hunting e Forense Multi-Fonte",
      "desc": "Monte um mini-SOC com SIEM (ELK ou Splunk) ingerindo logs de sistema, rede, email (headers/SPF/DKIM) e cloud (CloudTrail/Azure/GCP). Simule um ataque com Atomic Red Team/CALDERA e faça threat hunting caçando IOCs e mapeando TTPs ao MITRE ATT&CK. Ao confirmar o comprometimento, conduza um DFIR completo integrando forense de memória (Volatility), disco, rede e de um dispositivo mobile envolvido (extração Android/iOS via ADB/backup, artifacts de apps e dados apagados). Documente todo o ciclo de resposta a incidente, da detecção às lições aprendidas.",
      "deliverable": "Mini-SOC funcional com SIEM, threat hunting report com TTPs mapeados ao MITRE ATT&CK e relatório DFIR integrando evidências de memória, disco, rede, cloud e mobile num único incidente reconstituído."
    }
  },
  "Aprendizado & Preparacao de Carreira": {
    "basic": {
      "title": "🟢 Plano de Estudo e Perfil Profissional Inicial",
      "desc": "Monte a base da sua carreira: faça uma auto-avaliação de skills (heatmap T-shaped, escolhendo 1 área de profundidade), defina 3 objetivos de carreira e monte um plano de estudo trimestral com curadoria de fontes (newsletters, docs, papers) separando sinal de ruído. Em paralelo, crie um perfil de LinkedIn básico e um GitHub organizado com README de perfil. Faça revisões mensais do progresso.",
      "deliverable": "Plano de estudo trimestral com heatmap de skills T-shaped, 3 objetivos de carreira, lista curada de fontes, e LinkedIn + GitHub com README de perfil publicados"
    },
    "advanced": {
      "title": "🔴 Kit Completo de Ingresso no Mercado",
      "desc": "Construa uma presença profissional pronta para vagas: portfólio no GitHub com 5+ projetos bem documentados, site/blog técnico com 2+ artigos, currículo técnico ATS-friendly e LinkedIn otimizado. Contribua para open source (2+ PRs merged seguindo o fluxo fork → branch → PR → code review → upstream sync) e prepare-se para entrevistas com um caderno de padrões de coding, um estudo de system design e respostas comportamentais. Documente uma estratégia de networking, mentoria e negociação salarial baseada em pesquisa de mercado.",
      "deliverable": "Portfólio (GitHub 5+ projetos, blog com 2+ artigos, CV ATS-friendly, LinkedIn otimizado), 2+ PRs merged em open source, caderno de preparação para entrevistas (coding + system design + comportamental) e plano documentado de networking e negociação salarial"
    }
  },
  "Trilhas, Crescimento & Transicoes": {
    "basic": {
      "title": "🟢 Mapa de Trilhas e Career Ladder",
      "desc": "Pesquise e documente 3 trilhas de carreira em tech que te interessam (ex: security engineer, DevOps/SRE, ML engineer). Para cada trilha, descreva: perfil, skills necessárias, ferramentas/linguagens, certificações relevantes, faixa salarial (Brasil, remoto internacional e exterior) e como é o dia a dia. Complemente mapeando o career ladder (Junior > Pleno > Senior > Staff+) de uma delas e busque depoimentos de 1 profissional por trilha.",
      "deliverable": "Documento com 3 trilhas mapeadas (skills, ferramentas, certificações e salários), o career ladder detalhado de uma trilha e depoimentos/pesquisas de profissionais"
    },
    "advanced": {
      "title": "🔴 Plano de Transição de Carreira Executado",
      "desc": "Escolha uma transição concreta (ex: dev → security, dev → ML/Data, dev → DevOps/SRE ou dev → PM) e monte um plano de 6 meses: gap analysis (skills que já tem vs. que faltam), cronograma com milestones, certificação-alvo, plano de networking (comunidades, conferências como H2HC/Roadsec/BSides, marca pessoal via blog/open source) e uma estratégia para trabalhar no exterior ou empreender. Execute o primeiro milestone de verdade, incluindo pelo menos 1 projeto de portfólio que demonstre a nova skill, e documente as evidências.",
      "deliverable": "Plano de transição completo (gap analysis, cronograma de 6 meses, certificação-alvo e plano de networking/marca pessoal) com o primeiro milestone executado, 1 projeto de portfólio publicado e evidências de progresso"
    }
  },
  "AR/VR/XR & Computação Espacial": {
    "basic": {
      "title": "🟢 Visualizador AR de objeto 3D no navegador",
      "desc": "Crie uma página WebXR com Three.js que ancora um modelo 3D (.glb) no mundo real via AR no celular, sem instalar app. Use hit-test para detectar uma superfície e criar uma âncora estável; permita girar e escalar o objeto por toque. Explore os fundamentos de XR na prática: 6DoF, tracking inside-out e sistema de coordenadas world/local.",
      "deliverable": "Página WebXR hospedada (ex.: GitHub Pages) que posiciona e ancora um objeto 3D em AR no celular via hit-test, com controles de girar/escalar por toque e README explicando como testar e os conceitos de tracking/ancoragem aplicados"
    },
    "advanced": {
      "title": "🔴 Experiência MR imersiva com hand tracking e áudio espacial",
      "desc": "Construa uma experiência de Realidade Mista navegável (WebXR + Three.js ou Unity XR) que integre a profundidade da área: cena 3D com locomoção por teleporte, interação por hand tracking e/ou gaze, físicas de objetos virtuais e UI espacial flutuante. Adicione áudio posicional (HRTF) e, onde suportado, passthrough com oclusão pela mesh do ambiente e spatial anchors persistentes. Aplique otimizações de XR (instancing, LOD, foveated rendering, baixa latência via reprojection) para manter frame rate confortável e evitar motion sickness.",
      "deliverable": "Aplicação XR completa (WebXR ou Unity) com cena navegável, interação por mãos/gaze e físicas, teleporte, UI espacial, áudio 3D e ancoragem persistente, mais documentação de decisões de conforto/ergonomia e um relatório de performance (frame rate, draw calls, latência)"
    }
  },
  "Finanças Quantitativas & Fintech": {
    "basic": {
      "title": "🟢 Analisador quant de carteira",
      "desc": "Em Python, baixe dados históricos (yfinance) de algumas ações e calcule retornos, volatilidade e a matriz de correlação usando pandas e numpy. Adicione indicadores técnicos (médias móveis, RSI) e uma estimativa simples de risco (Value at Risk histórico e drawdown máximo). Calcule o Sharpe ratio da carteira e visualize preços, retornos e indicadores com matplotlib.",
      "deliverable": "Notebook/script Python que recebe tickers, baixa dados e gera relatório com retornos, volatilidade, correlação, indicadores técnicos, VaR/drawdown e Sharpe ratio, tudo com gráficos"
    },
    "advanced": {
      "title": "🔴 Plataforma de backtest e otimização quant",
      "desc": "Construa um framework que testa estratégias configuráveis (mean reversion, momentum ou fatores como value/quality) em dados históricos, com position sizing, stop loss e cálculo de drawdown. Modele custos realistas de execução (spread, slippage, taxas) e evite look-ahead bias, validando out-of-sample. Integre um módulo de precificação de opções (Black-Scholes com gregas e volatilidade implícita) e otimização de carteira de Markowitz com restrições, comparando métricas (retorno, Sharpe, VaR, max drawdown).",
      "deliverable": "Framework Python com estratégias plugáveis, gestão de risco, custos de transação, validação out-of-sample, módulo Black-Scholes (gregas + vol implícita) e otimizador de carteira com restrições, entregando relatório de métricas e equity curve"
    }
  },
  "Open Source na Prática": {
    "basic": {
      "title": "🟢 Primeira contribuição real a um projeto open source",
      "desc": "Escolha um projeto open source que você USA e que tenha issues marcadas como 'good first issue', respeitando um escopo realista. Clone, rode localmente, leia o CONTRIBUTING e navegue pela codebase até entender o fluxo principal. Antes de codar, reproduza o problema e comente na issue. Depois siga o workflow completo: fork, branch, commit claro (com Signed-off-by/DCO se exigido), abra o PR e responda ao code review de forma respeitosa.",
      "deliverable": "Um Pull Request aceito (ou em review sério) em um projeto open source real, documentando o processo: como achou a issue, como reproduziu, como navegou a codebase e o que aprendeu no review"
    },
    "advanced": {
      "title": "🔴 Publicar e manter seu próprio projeto open source",
      "desc": "Transforme uma ferramenta ou biblioteca sua em um projeto open source profissional e sustentável. Escreva um README que vende, um CONTRIBUTING com boas issues de entrada, escolha uma licença adequada (MIT, Apache ou GPL — sabendo o que cada uma permite) e configure CI no GitHub Actions rodando testes e lint. Adote SemVer com releases automatizadas e changelog, e organize a triagem com labels, templates de issue e bots (stale, duplicatas). Divulgue, faça onboarding acolhedor de pelo menos um contribuidor externo e conduza o code review dele.",
      "deliverable": "Repositório open source publicado e mantido: README, licença, CONTRIBUTING, CI verde, SemVer com releases e changelog, triagem organizada (labels/templates/bots) e ao menos um contribuidor externo integrado com PR revisado profissionalmente"
    }
  },
  "Computação Gráfica": {
    "basic": {
      "title": "🟢 Cena 3D interativa no navegador",
      "desc": "Crie uma cena 3D interativa com Three.js/WebGL. Adicione geometrias, aplique materiais e texturas, configure iluminação (ambient, directional, point) com modelo Phong e câmera controlável (orbitar, zoom). Anime pelo menos um objeto aplicando transformações (translação, rotação, escala) e demonstre entendimento do pipeline vértices > rasterização > fragmentos > pixels.",
      "deliverable": "Cena 3D interativa publicada (GitHub Pages) com geometrias, materiais/texturas, iluminação Phong, câmera controlável e animação, mais um README explicando o pipeline gráfico, as transformações e a projeção aplicadas"
    },
    "advanced": {
      "title": "🔴 Engine visual 3D com shaders e efeitos",
      "desc": "Construa uma aplicação 3D ambiciosa em Three.js que integre shaders GLSL customizados (vertex/fragment, com técnicas como raymarching/SDF ou noise procedural) e materiais PBR com normal maps. Adicione shadow mapping em tempo real, um pipeline de pós-processamento (bloom, DOF, tone mapping) com antialiasing, um sistema de partículas e animação avançada (skeletal, interpolação slerp ou IK). Carregue modelos externos via glTF e otimize a performance com instancing, frustum culling, LOD e redução de draw calls.",
      "deliverable": "Aplicação 3D publicada com shaders GLSL customizados, PBR, shadow mapping, pós-processamento, partículas, modelos glTF e otimizações medidas (profiling de GPU/draw calls), acompanhada de documentação técnica do pipeline de renderização, da matemática 3D (quaternions, matrizes de projeção) e das técnicas usadas"
    }
  },
  "Game Design (Fundamentos)": {
    "basic": {
      "title": "🟢 Seu primeiro jogo jogável (do zero ao fim)",
      "desc": "Crie um jogo pequeno e COMPLETO na ferramenta que preferir: uma engine para iniciantes (Godot, GameMaker, Construct) ou algo no-code/visual (GDevelop, Scratch, Twine para jogo de texto). O foco é o design, não a tecnologia: defina um objetivo claro, regras simples e uma mecânica central divertida, com tela de início, condição de vitória/derrota e feedback pro jogador. Faça do começo ao fim.",
      "deliverable": "Um jogo pequeno e jogável (do início à condição de vitória/derrota) criado em qualquer ferramenta, acompanhado de um parágrafo explicando a mecânica central, o objetivo e por que ele é divertido"
    },
    "advanced": {
      "title": "🔴 Jogo publicado com processo de design completo",
      "desc": "Faça um jogo mais completo aplicando todo o ciclo de criação: escreva um GDD simples com a visão e as referências, prototipe a ideia rápido, faça playtesting com pelo menos 3 pessoas e itere em pequenos passos com base no que observou. Capriche no game feel (feedback, ritmo) e numa curva de dificuldade pensada, e finalize publicando o jogo no itch.io para qualquer um jogar. Se possível, use uma game jam como prazo pra fechar o escopo.",
      "deliverable": "Um jogo publicado no itch.io (link acessível), mais um GDD curto que registre a visão e as referências, o protótipo inicial, o que mudou após cada rodada de playtesting e as principais decisões de design (mecânicas, game feel e curva de dificuldade)"
    }
  },
  "Game Design (Teoria & Design)": {
    "basic": {
      "title": "🟢 Protótipo jogável com core loop intencional",
      "desc": "Crie um protótipo enxuto de jogo (2D em Godot OU de tabuleiro/cartas no papel) em que o DESIGN vem antes da tecnologia. Defina o core loop e as mecânicas centrais usando o framework MDA, uma curva de dificuldade que ensina-desafia-descansa e, no digital, cuide do game feel (peso, resposta, timing do input). Deixe explícito qual tipo de diversão e perfil de jogador (Bartle) você quer atender.",
      "deliverable": "Um protótipo jogável (digital em Godot OU analógico de tabuleiro/cartas) acompanhado de um mini design doc que descreve o core loop, mecânicas → dinâmicas → estética (MDA), a curva de dificuldade pretendida e a experiência-alvo do jogador"
    },
    "advanced": {
      "title": "🔴 Jogo com níveis, personagens e economia balanceada",
      "desc": "Escolha um caminho e integre a área inteira: (A) jogo digital com 3+ níveis projetados (pacing, legibilidade, composição que guia o olhar, environmental storytelling, um encounter/boss telegrafado e onboarding sem manual) e ao menos um personagem com arquétipo, silhueta e legibilidade de intenção claros; OU (B) um jogo de cartas/tabuleiro completo com economia (fontes/drenos), sinergias, progressão e balanceamento real por dados. Em ambos, refine tudo com playtesting e evite dark patterns.",
      "deliverable": "Um jogo completo (digital com 3+ níveis e personagens definidos OU de cartas/tabuleiro jogável e balanceado por playtesting) com identidade coesa, mais um GDD cobrindo sistemas/economia, balanceamento, level ou encounter design, character design e os resultados/ajustes do playtesting"
    }
  },
  "Game Design (Dev Avançado)": {
    "basic": {
      "title": "🟢 Jogo com sistemas de produção e PCG inicial",
      "desc": "Construa um jogo pequeno numa engine aplicando os sistemas centrais na prática: save system com serialização (slots, salvar/carregar sem corromper estado), níveis construídos na engine (blockout ou tilemaps) e uma UI de jogo funcional (HUD e menus). Adicione geração procedural inicial de conteúdo, gerando dungeons ou mapas com uma técnica como BSP, drunkard walk, autômatos celulares ou ruído Perlin para dar rejogabilidade. Trabalhe com escopo enxuto pra conseguir terminar.",
      "deliverable": "Jogo jogável com save/load funcionando, níveis navegáveis, HUD/menus e um gerador procedural de mapas ou dungeons, publicado no itch.io com README explicando os sistemas e a técnica de PCG usada"
    },
    "advanced": {
      "title": "🔴 Jogo online completo: PCG, backend e lançamento",
      "desc": "Trate como uma produção profissional de ponta a ponta. Defina escopo realista, entregue um vertical slice e evolua até um jogo polido com geração procedural avançada (mundos com heightmaps/biomas, WFC ou geração por gramáticas, além de loot/itens ou missões procedurais). Integre um backend de serviços online com contas de jogador, cloud save, leaderboards e telemetria, aplicando validação server-side/anti-cheat. Faça playtesting estruturado (observação + métricas), rode live ops mínimo (evento ou conteúdo pós-lançamento) e lance publicamente com página de loja, trailer curto e devlog.",
      "deliverable": "Jogo lançado publicamente (página de loja + trailer) com PCG avançado e backend online (contas, cloud save, leaderboards, telemetria e validação server-side) em funcionamento, acompanhado de GDD e postmortem documentando design, produção, playtesting, métricas e aprendizados"
    }
  },
  "Liderança & Gestão de Pessoas": {
    "basic": {
      "title": "🟢 Kit essencial pra liderar um time",
      "desc": "Monte os artefatos básicos de um líder de engenharia iniciante: um template de 1:1 (ritmo, perguntas, follow-up), um guia de feedback usando SBI (Situação, Comportamento, Impacto) com exemplos positivos e construtivos, e um plano de onboarding 30/60/90 dias para um novo membro. Baseie tudo em situações reais ou simuladas que você já vivenciou.",
      "deliverable": "Um kit de gestão com template de 1:1, guia de feedback SBI com exemplos e plano de onboarding 30/60/90, pronto para usar com um time real"
    },
    "advanced": {
      "title": "🔴 Manual de gestão e crescimento de um time",
      "desc": "Construa um sistema completo de gestão de pessoas para um time de engenharia: defina OKRs do time (com grading) e métricas saudáveis, monte um career ladder com níveis, expectativas e growth plans, e desenhe um processo de performance review com calibração entre times. Complemente com um scorecard de hiring para reduzir viés e um framework de conversas difíceis (DESC) cobrindo conflitos e baixo desempenho (PIPs). Justifique as decisões de organização do time à luz de Team Topologies / Conway's Law.",
      "deliverable": "Um manual de gestão contendo OKRs e métricas do time, career ladder com níveis e growth plans, processo de performance review com calibração, scorecard de hiring anti-viés e guia de conversas difíceis (DESC/PIP)"
    }
  },
  "Produto, Estratégia & Negócio": {
    "basic": {
      "title": "🟢 Discovery e definição de um produto",
      "desc": "Escolha um problema real e faça product discovery: conduza 5 entrevistas com usuários usando a lente de Jobs-to-be-Done para entender o 'trabalho' que eles contratam o produto pra fazer. Defina o problema, esboce personas e wireframes da solução, escolha a North Star Metric e priorize o backlog com RICE ou MoSCoW. Documente cada decisão e o porquê.",
      "deliverable": "Documento de discovery com insights das 5 entrevistas (mapeados em JTBD), personas, problema definido, North Star Metric, wireframes e backlog priorizado por RICE/MoSCoW"
    },
    "advanced": {
      "title": "🔴 Plano de negócio, unit economics e pitch",
      "desc": "Transforme uma ideia em proposta de negócio completa: monte um Business Model Canvas, faça análise de mercado (TAM/SAM/SOM, concorrência e moats) e defina o modelo de receita (SaaS, marketplace, freemium ou usage-based). Projete os unit economics (CAC, LTV, MRR/ARR, churn, burn rate e runway), desenhe o go-to-market com growth loops e proponha um experimento de validação (A/B test ou MVP no ciclo build-measure-learn). Feche com um pitch deck.",
      "deliverable": "Business Model Canvas, análise TAM/SAM/SOM, modelo de monetização, planilha de unit economics (CAC, LTV, MRR/ARR, burn, runway), plano de go-to-market com growth loops e um pitch deck de ~10 slides pronto pra apresentar a investidores"
    }
  },
  "Comece Aqui: Aprender a Aprender": {
    "basic": {
      "title": "Monte seu Sistema Pessoal de Estudo (plano semanal + Anki)",
      "desc": "Construa e coloque em prática o seu próprio sistema de aprendizado por 1 semana, aplicando os métodos do Tópico 1. Defina um plano semanal realista (dias, horários e blocos de Pomodoro/deep work), escolha sua trilha inicial (ex.: IA & ML ou Dados) e crie um deck no Anki com ao menos 15 flashcards de active recall sobre o que estudou. Use os botões 🔁 Revisar e 📚 Estudo do Dia do site diariamente e registre em um diário de aprendizado (técnica Feynman) o que entendeu de cada sessão.",
      "deliverable": "Um documento (ou repositório) com: o plano semanal preenchido, o deck de Anki exportado (.apkg) com 15+ cards, e um diário de aprendizado com pelo menos 3 conceitos explicados por você com suas próprias palavras."
    },
    "advanced": {
      "title": "Aprenda em Público (Build in Public / Learn in Public)",
      "desc": "Além de montar o sistema de estudo, documente publicamente sua jornada por uma semana para consolidar o hábito, treinar comunicação técnica e iniciar o portfólio. Crie um repositório no GitHub com README, publique um post/thread curto por dia (LinkedIn, X, dev.to ou blog) resumindo o que aprendeu, entregue o mini-projeto da 1ª semana funcionando (ex.: análise de um CSV público com 3 gráficos) e, se travar, formule ao menos uma boa pergunta com MRE em uma comunidade. Use inglês técnico ao ler as docs e a IA como tutor (sem colar as respostas).",
      "deliverable": "Um repositório público no GitHub contendo o mini-projeto rodável com README, um log diário de aprendizado (7 dias), links dos posts públicos de 'build in public', e o registro de uma pergunta técnica bem formulada (com MRE) publicada em uma comunidade."
    }
  },
  "Design Digital & HDL (Verilog/VHDL)": {
    "basic": {
      "title": "🟢 ULA de 4 bits com display de estado",
      "desc": "Projete e simule em Verilog ou VHDL uma Unidade Lógica e Aritmética (ULA) de 4 bits que suporte soma, subtração, AND, OR, XOR e comparação, selecionadas por um sinal de operação. Aplique álgebra booleana e lógica combinacional (somadores, multiplexadores) na construção e adicione flags de status (zero, carry, overflow). Escreva um testbench que exercite todas as operações com várias entradas e valide os resultados inspecionando as formas de onda na simulação.",
      "deliverable": "Código HDL da ULA de 4 bits (com flags de status) + testbench cobrindo todas as operações, acompanhado de prints ou descrição das formas de onda mostrando cada operação e flag funcionando corretamente na simulação."
    },
    "advanced": {
      "title": "🔴 CPU RISC-V didática em FPGA",
      "desc": "Implemente em HDL um processador que execute um subset da ISA RISC-V (ou MIPS): datapath completo, unidade de controle (FSM), banco de registradores e memória de instruções/dados. Faça-o rodar um programa em assembly (ex: fatorial ou soma de sequência) via testbench e, com placa disponível, sintetize aplicando timing constraints e integre pelo menos um periférico (UART ou GPIO) para observar a saída. Documente o datapath, o ciclo fetch-decode-execute, as instruções suportadas e as decisões de projeto.",
      "deliverable": "Projeto HDL completo da CPU (datapath, controle, registradores e memória) + programa de teste em assembly + testbench, idealmente sintetizado e rodando numa FPGA real com periférico (UART/GPIO), acompanhado de documentação do datapath, da ISA suportada e das constraints de timing."
    }
  },
  "Cálculo Avançado & Álgebra Linear": {
    "basic": {
      "title": "🟢 Laboratório de álgebra linear com NumPy",
      "desc": "Use Python (NumPy) para praticar os fundamentos da área: resolva um sistema linear por eliminação de Gauss/escalonamento, calcule determinante e inversa de matrizes, e aplique transformações lineares (rotação, escala, projeção) a um conjunto de pontos. Visualize os pontos antes/depois de cada transformação e conecte cada resultado com a teoria (produto escalar, projeção, matriz como transformação).",
      "deliverable": "Notebook com um sistema linear resolvido por Gauss, operações matriciais (determinante e inversa) e um gráfico antes/depois de transformações lineares aplicadas a um conjunto de pontos, cada etapa comentada."
    },
    "advanced": {
      "title": "🔴 Compressor de imagens com SVD e análise por PCA",
      "desc": "Integre a profundidade da álgebra linear construindo um compressor de imagens baseado em SVD: decomponha a matriz da imagem em valores singulares e reconstrua-a mantendo apenas os k maiores, medindo a compressão e o erro em função de k. Em seguida, aplique autovalores/autovetores e PCA a um dataset real para reduzir dimensionalidade, mostrando a ponte matemática entre diagonalização, PCA e SVD. Interprete geometricamente os componentes principais e discuta estabilidade/variância explicada.",
      "deliverable": "Notebook com compressão de imagem via SVD (grade de reconstruções para vários k + curva de erro/compressão), PCA de um dataset real com variância explicada e projeção nos primeiros componentes, e uma seção explicando a relação diagonalização → PCA → SVD."
    }
  },
  "Banco de Dados Intermediário": {
    "basic": {
      "title": "🟢 Análise de dados de e-commerce em SQL",
      "desc": "Modele um banco relacional de e-commerce (usuários, produtos, pedidos, itens, reviews), popule com dados realistas e responda perguntas de negócio com SQL intermediário. Use JOINs (INNER/LEFT), GROUP BY + HAVING e subconsultas para métricas como faturamento por mês e clientes mais ativos, e aplique window functions (RANK, ROW_NUMBER, SUM() OVER) e uma CTE para rankings e totais acumulados.",
      "deliverable": "Script com schema + dados de exemplo + coleção de consultas SQL (JOINs, agregações com GROUP BY/HAVING, subconsultas, window functions e ao menos uma CTE) respondendo perguntas de negócio documentadas."
    },
    "advanced": {
      "title": "🔴 Plataforma de dados poliglota com ORM e otimização",
      "desc": "Construa a camada de dados de uma aplicação usando PostgreSQL com ORM (Prisma ou SQLAlchemy): modele relacionamentos complexos (herança, soft delete, audit trail) com migrations versionadas, e integre MongoDB para dados de documento e Redis para cache/filas, justificando cada escolha. Otimize desempenho com EXPLAIN, estratégia de índices, resolução do problema N+1, transações ACID e connection pooling, e monte um mini data warehouse (Star Schema, OLTP vs OLAP) com views materializadas para relatórios. Suba toda a stack com Docker Compose.",
      "deliverable": "Repositório com docker-compose subindo Postgres+MySQL/Mongo+Redis, camada ORM com migrations, integração NoSQL/cache justificada, Star Schema com views materializadas e relatório de otimização (EXPLAIN, índices criados, N+1 resolvido, uso de transações/pooling)."
    }
  },
  "Programação de Jogos & Engines": {
    "basic": {
      "title": "🟢 Jogo 2D completo numa engine",
      "desc": "Desenvolva um jogo 2D simples e completo (plataforma, arcade ou puzzle) em Godot ou Unity, aplicando os fundamentos: game loop, input responsivo, detecção de colisão e movimento/física básica com integração. Implemente pelo menos uma mecânica central e um loop de gameplay fechado (início, objetivo, vitória/derrota, reinício). Use vetores e transformações para posicionar e mover as entidades, e foque no game feel.",
      "deliverable": "Jogo 2D jogável (executável ou build web) + código organizado + um breve texto explicando as mecânicas, o game loop e as decisões de game feel (aceleração, colisão, feedback)."
    },
    "advanced": {
      "title": "🔴 Jogo multiplayer com arquitetura de engine",
      "desc": "Crie um jogo (2D ou 3D leve) que integre arquitetura desacoplada de engine e multiplayer. Estruture os sistemas com ECS ou padrões de gamedev (state, observer, component), separe conteúdo de código com scripting/dados e um gerenciador de cenas e assets. Implemente multiplayer com servidor autoritativo cliente-servidor, aplicando predição de movimento, interpolação de entidades e lag compensation, e adicione um fluxo mínimo de lobby/matchmaking. Faça profiling e otimize os gargalos.",
      "deliverable": "Jogo multiplayer funcional (2+ clientes contra servidor autoritativo) + código com arquitetura documentada (diagrama de sistemas ECS/padrões e da camada de netcode) + relatório de profiling mostrando gargalos identificados e otimizações aplicadas."
    }
  },
  "R para Estatística e Dados": {
    "basic": {
      "title": "🟢 Análise exploratória completa de um dataset",
      "desc": "Pegue um dataset real (CSV ou de um pacote) e trabalhe todo o fluxo do tidyverse: importe com readr, limpe e padronize com janitor, dplyr e tidyr. Faça uma análise exploratória completa com estatísticas descritivas, distribuições e relações entre variáveis, visualizando tudo com ggplot2. Entregue como relatório reproduzível em R Markdown ou Quarto.",
      "deliverable": "Relatório R Markdown/Quarto (HTML) reproduzível com importação, limpeza (janitor/dplyr/tidyr), EDA, ao menos 4 gráficos ggplot2 (distribuição, relação e série) e conclusões em texto."
    },
    "advanced": {
      "title": "🔴 Modelagem estatística e dashboard preditivo",
      "desc": "Escolha uma pergunta de pesquisa sobre um dataset rico e conduza uma análise estatística rigorosa: testes de hipótese e ANOVA, regressão com lm/glm e um modelo preditivo treinado com tidymodels (ou caret), incluindo validação e diagnóstico. Explore ao menos um modelo mais avançado (misto ou bayesiano, mesmo introdutório) e construa um app Shiny que permita explorar os dados, comparar modelos e visualizar previsões. Documente todas as decisões estatísticas de forma reproduzível.",
      "deliverable": "App Shiny funcional + relatório reproduzível (R Markdown/Quarto) cobrindo testes/ANOVA, regressão lm/glm, um modelo de ML com tidymodels (métricas de validação), um modelo misto/bayesiano introdutório e interpretação dos resultados, com todo o código versionado."
    }
  },
  "Análise de Dados (Data Analytics)": {
    "basic": {
      "title": "🟢 EDA completa de um dataset real",
      "desc": "Escolha um dataset público (vendas, saúde, esportes, etc.), carregue com Pandas e limpe os dados (missing, duplicatas, tipos e outliers). Faça uma EDA com estatística descritiva, distribuições, relações e ao menos uma segmentação, visualize com Matplotlib/Seaborn e feche escrevendo os insights como uma história clara para um leitor não-técnico.",
      "deliverable": "Notebook com etapas de limpeza documentadas, EDA com estatísticas descritivas, ao menos 5 gráficos bem rotulados e uma seção de insights escrita em linguagem de negócio."
    },
    "advanced": {
      "title": "🔴 Dashboard analítico com SQL e KPIs",
      "desc": "Pegue um conjunto de dados com várias tabelas em um banco SQL e use consultas analíticas (window functions, CTEs, agregações avançadas) para calcular métricas, KPIs e uma análise de cohort ou segmentação. Construa um dashboard interativo (Streamlit, Metabase, Power BI ou Tableau) que conte a história dos dados, justifique cada visualização e deixe a atualização/relatório automatizada.",
      "deliverable": "Dashboard interativo funcional + as queries SQL analíticas versionadas + um documento definindo as métricas/KPIs escolhidos, a análise de cohort/segmentação e a narrativa dos dados, com a atualização automatizada."
    }
  },
  "Séries Temporais & Forecasting": {
    "basic": {
      "title": "🟢 Previsão com modelos clássicos",
      "desc": "Faça forecasting de uma série real (vendas, energia ou temperatura) usando suavização exponencial e ARIMA/SARIMA. Decomponha a série em tendência/sazonalidade/ruído, inspecione ACF/PACF, cheque estacionariedade e valide de forma temporal (sem embaralhar). Compare contra um baseline naive usando MAE, RMSE e MAPE.",
      "deliverable": "Notebook com decomposição, análise de ACF/PACF e estacionariedade, modelos clássicos ajustados, validação temporal correta e tabela de métricas (MAE/RMSE/MAPE) contra o baseline naive."
    },
    "advanced": {
      "title": "🔴 Pipeline de forecasting de demanda ML/DL",
      "desc": "Construa um pipeline de previsão de demanda multi-série e multi-step comparando três famílias: clássicos (SARIMA/Prophet), gradient boosting com feature engineering temporal (lags, janelas, calendário) e deep learning (LSTM ou modelo moderno como N-BEATS/DeepAR/Temporal Fusion). Gere previsões probabilísticas com intervalos de incerteza, adicione detecção de anomalias e faça validação walk-forward. Simule produção com monitoramento da degradação e discuta os trade-offs de cada abordagem.",
      "deliverable": "Pipeline reprodutível com as três famílias de modelos, feature engineering temporal, previsões probabilísticas (intervalos), detecção de anomalias, validação walk-forward, dashboard/log de monitoramento em produção e relatório com comparação honesta de trade-offs."
    }
  },
  "Sistemas de Recomendação": {
    "basic": {
      "title": "🟢 Recomendador de filmes por filtragem colaborativa",
      "desc": "Usando o dataset MovieLens, construa um recomendador com filtragem colaborativa: comece pela vizinhança (user-based e item-based) e depois aplique fatoração de matrizes (SVD ou ALS) com uma biblioteca como Surprise ou implicit. Gere listas top-N para usuários de exemplo e trate o caso de cold start de forma simples (ex.: itens populares). Avalie offline com precision@k, recall@k e NDCG.",
      "deliverable": "Notebook comparando ao menos duas abordagens (vizinhança vs. fatoração), com métricas de avaliação offline e exemplos de recomendações top-N geradas para diferentes usuários."
    },
    "advanced": {
      "title": "🔴 Recomendador híbrido em produção com two-tower e ranking",
      "desc": "Desenvolva um recomendador híbrido que combine sinais colaborativos e de conteúdo, usando embeddings aprendidos (ex.: LightFM ou um modelo two-tower em deep learning). Implemente a arquitetura de duas etapas: retrieval em escala com ANN (FAISS) e um estágio de ranking/re-ranking sensível ao contexto. Sirva as recomendações por uma API, trate cold start e desenhe um plano de A/B test ligando métricas offline a métricas de negócio, discutindo vieses, filtro-bolha e ética.",
      "deliverable": "Serviço que serve recomendações via API (retrieval ANN + ranking) com código, avaliação offline, plano de experimentação online (A/B com métricas de negócio) e um documento tratando cold start, vieses e filtro-bolha."
    }
  },
  "Reinforcement Learning": {
    "basic": {
      "title": "🟢 Agente Q-Learning tabular no Gymnasium",
      "desc": "Modele um ambiente clássico do Gymnasium (FrozenLake, Taxi ou CartPole discretizado) como um MDP e implemente Q-Learning tabular do zero, com política epsilon-greedy para balancear exploração vs explotação. Treine o agente, plote a curva de recompensa por episódio e visualize a política aprendida. Experimente variando epsilon, learning rate e fator de desconto, e compare brevemente com SARSA (on-policy) no mesmo ambiente.",
      "deliverable": "Notebook com Q-Learning e SARSA implementados do zero, curva de aprendizado, política final visualizada e uma análise do efeito dos hiperparâmetros e da diferença on-policy vs off-policy."
    },
    "advanced": {
      "title": "🔴 Pipeline de Deep RL com PPO/DQN de ponta a ponta",
      "desc": "Treine um agente de deep RL (DQN ou PPO via Stable-Baselines3) em um ambiente desafiador (Atari, LunarLander ou um ambiente customizado que você mesmo defina). Aplique reward shaping quando fizer sentido, compare contra um baseline (agente aleatório ou heurístico) e avalie estabilidade do treino e sample efficiency com múltiplas seeds. Discuta as limitações observadas e em que cenários RL não seria a melhor escolha; opcionalmente, explore uma extensão como offline RL, multi-agente ou uma mini-demonstração de RLHF.",
      "deliverable": "Agente treinado + código reprodutível + vídeo/gif do desempenho + relatório comparando configurações e baseline, discutindo estabilidade, sample efficiency, limitações e a extensão avançada explorada."
    }
  },
  "Criptografia Aplicada": {
    "basic": {
      "title": "🟢 Cofre de senhas com criptografia correta",
      "desc": "Construa um gerenciador de senhas de linha de comando ou desktop simples que aplique os fundamentos corretamente: derive a chave da senha mestra com Argon2id (ou bcrypt/scrypt), proteja os segredos com criptografia simétrica autenticada (AES-GCM ou ChaCha20-Poly1305) e gere sais/nonces com um CSPRNG. Use apenas bibliotecas auditadas e obedeça à regra de ouro: nunca invente cripto própria.",
      "deliverable": "Aplicação funcional (adicionar/listar/recuperar senhas) + código-fonte + documento curto justificando cada escolha (KDF, cifra, modo autenticado, aleatoriedade) e por que ela garante confidencialidade e integridade."
    },
    "advanced": {
      "title": "🔴 Plataforma segura com PKI, TLS e gestão de chaves",
      "desc": "Implemente um serviço cliente-servidor que integre a área inteira: emita e valide certificados com uma CA própria e cadeia de confiança (PKI), sirva o tráfego sobre TLS/HTTPS com mTLS opcional, e autentique sessões com JWT assinado (JWS) evitando armadilhas como 'alg: none'. Adicione criptografia envelope para dados em repouso com uma chave mestra rotacionável simulando um KMS/HSM, e uma troca de chaves ECDH com assinaturas digitais para um canal ponta-a-ponta com perfect forward secrecy. Documente o modelo de ameaça, os ataques mitigados e um plano de migração híbrida pós-quântica (padrões NIST).",
      "deliverable": "Sistema funcional (CA + servidor TLS + auth JWT + canal E2E + cofre com envelope encryption e rotação de chaves) + código + dossiê técnico com diagrama de PKI/cadeia de confiança, análise de modelo de ameaça, ataques conhecidos mitigados e roteiro de migração pós-quântica."
    }
  },
  "Análise de Malware & Engenharia Reversa": {
    "basic": {
      "title": "🟢 Reversa de um crackme",
      "desc": "Faça engenharia reversa de um crackme ou binário didático (PE ou ELF) em ambiente isolado, aplicando análise estática e dinâmica. Use Ghidra para desmontar/descompilar e ler o assembly, e um debugger (x64dbg ou GDB) para acompanhar o fluxo em execução, inspecionar registradores e entender a lógica de validação. Documente strings, chamadas relevantes e o caminho até a solução.",
      "deliverable": "Relatório de RE: o que o binário faz, como você descobriu, trechos de assembly/decompilação-chave, o fluxo de execução e a solução do crackme (senha/patch), tudo em ambiente isolado e legal."
    },
    "advanced": {
      "title": "🔴 Análise completa de uma amostra empacotada",
      "desc": "Analise uma amostra de malware de treino (repositórios didáticos) em laboratório isolado, cobrindo toda a profundidade da área: análise estática e dinâmica, desempacotamento manual (dump + fix da IAT), instrumentação com Frida para observar comportamento, extração de IOCs e captura do tráfego C2 via PCAP. Trate artefatos como maldocs/macros, PowerShell ou shellcode conforme a amostra, mapeie as técnicas para MITRE ATT&CK e escreva regras de detecção YARA e Sigma. Sempre com segurança e legalidade.",
      "deliverable": "Relatório de análise + amostra desempacotada/dumpada com IAT corrigida + IOCs (incluindo indicadores de rede do PCAP) + mapeamento ATT&CK + regras YARA e Sigma, conduzido em ambiente isolado."
    }
  },
  "Sistemas de Controle": {
    "basic": {
      "title": "🟢 Controlador PID simulado",
      "desc": "Modele um sistema de 1ª/2ª ordem (ex.: temperatura de um forno ou velocidade de um motor) obtendo sua função de transferência, e projete um controlador PID para ele. Simule em Python (python-control/scipy) ou MATLAB/Simulink, comparando a resposta ao degrau em malha aberta e em malha fechada. Sintonize os ganhos para reduzir overshoot e tempo de acomodação, garantindo estabilidade, e explique o efeito de cada termo P, I e D.",
      "deliverable": "Notebook ou script de simulação com o modelo (função de transferência), o PID sintonizado, gráficos de resposta ao degrau (com e sem controle) e uma análise justificando os ganhos escolhidos e o critério de estabilidade."
    },
    "advanced": {
      "title": "🔴 Controle digital de sistema físico real",
      "desc": "Modele e controle um sistema físico real com microcontrolador: equilibrar um pêndulo/robô, controlar a velocidade de um motor com encoder ou estabilizar um seguidor de linha. Parta de um modelo (função de transferência ou espaço de estados) e do projeto do controlador via root locus/resposta em frequência, discretize-o e implemente um PID digital em firmware com loop de tempo real. Trate a malha real por completo: leitura de sensores, acionamento de atuadores, saturação, e use um filtro (ex.: Kalman) para estimação/filtragem do estado, ajustando tudo no hardware.",
      "deliverable": "Sistema físico funcionando em malha fechada + firmware com o controlador digital e o filtro de estimação + documentação do modelo, do projeto do controlador (root locus/Bode), da discretização e dos ajustes feitos no hardware."
    }
  },
  "Visão Computacional & Processamento de Imagens": {
    "basic": {
      "title": "🟢 Pipeline de processamento de imagens com OpenCV",
      "desc": "Construa em Python+OpenCV um pipeline que carregue uma imagem, converta entre espaços de cor (RGB/HSV), equalize histograma e aplique filtros de suavização e nitidez, detecte bordas com Canny e segmente objetos por threshold ou por cor com operações de morfologia. Aplique num caso concreto, como contar objetos ou isolar/destacar uma região específica da cena.",
      "deliverable": "Script ou notebook com o pipeline completo, exibindo lado a lado cada etapa da transformação (original, cor, filtro, bordas, segmentação) e o resultado final quantificado no caso escolhido (ex.: número de objetos contados)."
    },
    "advanced": {
      "title": "🔴 Sistema de visão computacional de ponta a ponta",
      "desc": "Desenvolva uma aplicação real que integre visão clássica e deep learning num pipeline único, como: scanner de documentos que detecta bordas e corrige perspectiva por homografia e depois faz OCR, ou um sistema de detecção e rastreamento em vídeo que combine um detector moderno (ex.: YOLO) com tracking (ByteTrack/DeepSORT) e, quando útil, features clássicas (SIFT/ORB) ou calibração de câmera para medição. Trate condições reais de iluminação e ângulo, decida em cada etapa entre abordagem clássica e deep learning, e avalie a precisão do sistema.",
      "deliverable": "Aplicação funcional processando imagens ou vídeo reais, com código organizado em pipeline, métricas de precisão medidas (ex.: mAP, taxa de acerto do OCR ou erro de rastreamento) e uma análise honesta das limitações e das escolhas entre visão clássica e deep learning."
    }
  },
  "Otimização & Pesquisa Operacional": {
    "basic": {
      "title": "🟢 Modelando e resolvendo um problema de otimização real",
      "desc": "Escolha um problema do mundo real e modele-o formalmente: defina as variáveis de decisão, a função objetivo e as restrições. Bons exemplos são a dieta de custo mínimo, alocação de recursos, escala de funcionários ou a mochila (0/1). Resolva com programação linear ou inteira usando um solver como OR-Tools, PuLP ou Pyomo e interprete a solução ótima.",
      "deliverable": "Notebook contendo a formulação matemática (objetivo, variáveis, restrições), o código que monta o modelo e chama o solver, a solução ótima obtida e uma interpretação clara do que ela significa para o problema."
    },
    "advanced": {
      "title": "🔴 Otimizador para roteamento/escalonamento NP-difícil",
      "desc": "Ataque um problema combinatório NP-difícil de porte realista, como roteamento de veículos (VRP), sequenciamento de tarefas em máquinas ou uma variação do caixeiro viajante com muitas cidades. Implemente uma abordagem exata (Simplex/branch-and-bound via solver, quando viável) e ao menos uma metaheurística (algoritmo genético, simulated annealing, busca local ou otimização por enxame). Faça experimentos comparando qualidade da solução, tempo de execução e escalabilidade, e discuta os trade-offs entre exatidão e heurística.",
      "deliverable": "Repositório com as abordagens implementadas, benchmarks em instâncias de tamanhos crescentes, gráficos de convergência e de qualidade vs tempo, e uma análise escrita dos trade-offs entre método exato e metaheurístico."
    }
  },
  "Game AI (IA para Jogos)": {
    "basic": {
      "title": "🟢 NPC vivo: pathfinding, estados e percepção",
      "desc": "Implemente um NPC crível num jogo 2D/3D combinando os fundamentos da área: movimentação com steering behaviors (seek, flee, wander), pathfinding com A* num grid ou navmesh, e uma máquina de estados finita (patrulhar, perseguir, atacar, recuar). Adicione percepção por raycast (visão e/ou audição) para o NPC reagir ao jogador de forma natural.",
      "deliverable": "Demo jogável com NPC usando steering + A* + FSM + percepção, acompanhado de um diagrama dos estados e transições e breve explicação de cada comportamento."
    },
    "advanced": {
      "title": "🔴 Ecossistema de IA com decisão avançada e coordenação",
      "desc": "Construa um sistema de IA de portfólio integrando a profundidade da área: escolha entre Behavior Trees, GOAP ou Utility AI (idealmente combinando duas técnicas via Blackboard compartilhado) para dirigir múltiplos agentes que planejam, coordenam e exibem comportamento emergente. Aplique decisão espacial com influence maps (útil em cenário de estratégia/RTS ou de esquadrão), pathfinding hierárquico/dinâmico com evasão, NPCs companheiros cooperativos e um sistema de dificuldade balanceada. Documente por que cada técnica foi escolhida (e onde ML faria — ou não — sentido).",
      "deliverable": "Demo com IA avançada (BT/GOAP/Utility + Blackboard) + influence maps + múltiplos agentes coordenados e companheiros, mais documentação do design de comportamento, do balanceamento de dificuldade e da justificativa técnica de cada escolha."
    }
  },
  "Áudio de Jogos & Arte Técnica": {
    "basic": {
      "title": "🟢 Paisagem sonora e feedback de um jogo",
      "desc": "Crie o design de áudio de um pequeno jogo cobrindo os fundamentos: efeitos sonoros de feedback (ações e UI), som ambiente diegético e uma trilha simples. Implemente na engine com triggers disparados por eventos de gameplay e faça a mixagem básica dos canais. Demonstre, comparando antes/depois, como o som melhora a sensação e a legibilidade do jogo.",
      "deliverable": "Demo jogável com áudio implementado (SFX de feedback/UI + ambiente + música) e mixagem básica, acompanhado de um texto curto justificando as escolhas de sound design."
    },
    "advanced": {
      "title": "🔴 Vertical slice: áudio adaptativo + VFX com shader",
      "desc": "Produza um vertical slice de jogo que integre a profundidade completa da área. No áudio, monte música adaptativa/reativa via middleware (FMOD ou Wwise) com parâmetros e transições dirigidos pelo gameplay, mais mixagem espacial e otimização. Na arte técnica, crie ao menos um efeito visual completo por shader graph (água, dissolve, portal ou similar) e um sistema de partículas em Niagara/VFX Graph, aplicando otimização (atlasing, LOD/impostors) para manter o desempenho.",
      "deliverable": "Projeto jogável integrando sistema de áudio adaptativo em middleware (com eventos/parâmetros expostos) e efeito de shader + VFX otimizados, entregue com código/projeto, medições de performance e documentação técnica explicando a arquitetura de áudio e o pipeline de arte técnica."
    }
  },
  "Julia para Computação Científica e ML": {
    "basic": {
      "title": "🟢 Simulador de sistema dinâmico com EDOs",
      "desc": "Modele um sistema dinâmico (Lotka-Volterra predador-presa, epidemia SIR ou pêndulo) como equações diferenciais e resolva com DifferentialEquations.jl. Estruture o código com funções tipadas e multiple dispatch, visualize a evolução temporal com Plots.jl e faça uma varredura de parâmetros para observar como o comportamento muda. Use @benchmark para medir e garantir type stability no núcleo numérico.",
      "deliverable": "Notebook Pluto/Jupyter ou script Julia com o modelo de EDOs, a simulação, gráficos da dinâmica, uma análise de sensibilidade aos parâmetros e um relato do benchmark mostrando o código type-stable."
    },
    "advanced": {
      "title": "🔴 Pipeline SciML com Neural ODE acelerado em GPU",
      "desc": "Construa um projeto de scientific ML que combine física e dados: treine uma Neural ODE ou modelo physics-informed com Flux.jl sobre DifferentialEquations.jl, aproveitando differentiable programming para calibrar parâmetros a partir de observações. Otimize agressivamente (type stability, broadcasting, alocações) e acelere o treino em GPU com CUDA.jl. Compare acurácia e velocidade contra um baseline clássico via MLJ.jl e uma implementação equivalente em Python (chamada por PythonCall/PyCall).",
      "deliverable": "Repositório Julia com Pkg reprodutível, o modelo SciML treinado, benchmarks de performance CPU vs GPU vs Python, comparação com o baseline MLJ.jl e documentação das otimizações e da justificativa para escolher Julia."
    }
  },
  "Vector Databases & Busca Semântica": {
    "basic": {
      "title": "🟢 Busca semântica sobre seus documentos",
      "desc": "Pegue uma coleção de documentos (PDFs, notas, artigos), gere embeddings com um modelo do MTEB e indexe num vector DB local (Chroma ou pgvector). Construa uma busca semântica: digite uma pergunta em linguagem natural e receba os trechos mais relevantes por significado, medindo similaridade por cosseno. Compare lado a lado com uma busca por keyword tradicional pra sentir a diferença.",
      "deliverable": "Script/app de busca semântica funcional com ingestão, geração de embeddings, indexação no vector DB e consulta por similaridade de cosseno, exibindo resultado semântico vs keyword para as mesmas perguntas."
    },
    "advanced": {
      "title": "🔴 RAG em produção com busca híbrida e avaliação",
      "desc": "Construa um pipeline de RAG ponta a ponta sobre um corpus real: chunking inteligente, embeddings, vector DB operado em produção (Qdrant/Weaviate/pgvector) com índice ANN configurado (HNSW e/ou IVF+PQ), busca híbrida (denso + esparso/SPLADE) com filtros e reranking, e geração com um LLM. Monte uma suíte de avaliação (RAGAS ou evals próprios) e itere medindo recall da recuperação e fidelidade/qualidade da resposta. Documente o efeito de cada otimização (parâmetros do índice, chunking, reranking) nas métricas.",
      "deliverable": "Sistema RAG deployado com busca híbrida + reranking sobre índice ANN ajustado, suíte de avaliação reproduzível com métricas (recall@k, fidelidade, precisão) e um relatório de ablação mostrando quais otimizações moveram os números e por quê."
    }
  },
  "Data Science: Método e Experimentação": {
    "basic": {
      "title": "🟢 Desenho e análise de um experimento A/B",
      "desc": "Formule uma hipótese clara (real ou simulada — ex: uma mudança numa página aumenta a conversão) e desenhe um experimento A/B correto: defina a métrica primária, o efeito mínimo detectável (MDE), o tamanho de amostra e o poder estatístico. Analise os resultados com teste de hipótese e intervalos por bootstrap, e escreva uma recomendação de decisão (lançar ou não) tornando a incerteza explícita.",
      "deliverable": "Notebook reprodutível contendo o desenho do experimento (hipótese, MDE, sample size e poder), a análise estatística dos resultados (teste de hipótese + bootstrap) e uma recomendação de decisão fundamentada com a incerteza declarada."
    },
    "advanced": {
      "title": "🔴 Inferência causal ponta a ponta: do experimento avançado ao dado observacional",
      "desc": "Escolha uma pergunta causal e ataque-a por dois caminhos complementares. Primeiro, projete um experimento avançado que trate armadilhas reais — interferência/SUTVA (ex.: efeitos de rede) usando randomização por cluster ou switchback, e ganho de poder via CUPED para redução de variância. Depois, estime o mesmo efeito com dados observacionais usando um método quase-experimental adequado (DiD, RDD, propensity score/matching ou IV), formalizando as suposições num DAG. Inclua feature engineering, validação rigorosa (holdout temporal, controle de leakage) e interpretabilidade (SHAP/LIME) onde houver modelo, e feche com uma comunicação para stakeholders que distingue correlação de causa e estima o impacto.",
      "deliverable": "Projeto reprodutível (notebooks + ambiente versionado) com: o desenho do experimento avançado (tratamento de SUTVA via cluster/switchback e CUPED), a estimativa causal observacional com DAG e método quase-experimental, checagens de robustez, e um relatório para stakeholders que separa correlação de causa e quantifica o impacto medido."
    }
  },
  "NLP & Processamento de Linguagem Natural": {
    "basic": {
      "title": "🟢 Classificador de texto com Transformers",
      "desc": "Construa um pipeline de NLP que classifica texto (sentimento, tópico ou intenção), de preferência em português. Faça a limpeza e tokenização (subword/BPE), gere embeddings e compare uma baseline clássica (TF-IDF + modelo linear) com um Transformer do Hugging Face (fine-tuning leve de BERT ou zero-shot). Avalie com precision/recall/F1 e teste em textos reais.",
      "deliverable": "Notebook com a baseline TF-IDF e o modelo Transformer comparados, avaliação com F1 e matriz de confusão, e exemplos de predição em texto real."
    },
    "advanced": {
      "title": "🔴 Assistente de QA sobre documentos com LLM fine-tunado",
      "desc": "Construa um sistema de perguntas e respostas fundamentado em uma base de documentos: gere embeddings, faça busca semântica e recuperação de contexto (RAG) e use um LLM para responder citando as fontes. Aplique fine-tuning eficiente (LoRA/QLoRA/PEFT) ou quantização (GGUF/GPTQ) para adaptar/rodar o modelo localmente, e trate alucinações. Avalie a qualidade e a fidelidade das respostas com métricas adequadas.",
      "deliverable": "Aplicação de QA/chat com pipeline RAG e um LLM adaptado (fine-tuning LoRA/QLoRA ou quantizado), com avaliação de fidelidade das respostas, tratamento de alucinação e citação de fontes documentados."
    }
  },
  "Red Team & Adversary Simulation": {
    "basic": {
      "title": "🟢 Kill chain guiada por ATT&CK em lab autorizado",
      "desc": "Em um lab autorizado (HackTheBox, TryHackMe ou ambiente próprio), execute uma cadeia de ataque completa: reconhecimento, weaponization, acesso inicial, execução, escalonamento de privilégio e captura do objetivo. Escreva também regras de engajamento simplificadas antes de começar e mapeie cada técnica ao MITRE ATT&CK. Explique como a operação emula um adversário real e como difere de um pentest tradicional.",
      "deliverable": "Relatório da cadeia de ataque com regras de engajamento, passos executados, TTPs mapeadas ao ATT&CK, evidências e recomendações de mitigação — tudo em ambiente autorizado."
    },
    "advanced": {
      "title": "🔴 Emulação end-to-end de APT com C2, evasão de EDR e OPSEC",
      "desc": "Emule um adversário específico (ex.: um grupo APT do ATT&CK) de ponta a ponta em lab próprio com AD e EDR. Construa infraestrutura de C2 resiliente (redirectors, malleable profile, domínio categorizado) e desenvolva um payload que evade o EDR usando técnicas como indirect syscalls, unhooking/AMSI bypass, injeção em memória e sleep obfuscation. Conduza acesso inicial por phishing maduro, C2, movimentação lateral no AD, persistência, escalonamento e exfiltração mantendo OPSEC e log operacional da operação.",
      "deliverable": "Dossiê purple team da operação: perfil do adversário emulado e TTPs mapeadas ao ATT&CK, arquitetura de C2, técnicas de evasão desenvolvidas, timeline completo, log operacional, comparação com o que o Blue Team detectou (ou não) e recomendações acionáveis — estritamente em ambiente autorizado e ético."
    }
  },
  "Logica de Programacao com Python — Funcoes, Modulos e Projetos": {
    "basic": {
      "title": "📇 Agenda de Contatos em linha de comando",
      "desc": "Construa um programa de terminal que gerencia contatos (nome, telefone, e-mail) permitindo adicionar, listar, buscar e remover registros. Organize o código em funções bem definidas (uma para cada operação) e persista os dados em um arquivo. Trate erros como arquivo inexistente ou entrada inválida com try/except.",
      "deliverable": "Script Python funcional, dividido em funções, que salva e lê os contatos de um arquivo (.txt, .json ou .csv) e não quebra com entradas inválidas, entregue em um repositório com README explicando como executar."
    },
    "advanced": {
      "title": "📊 Coletor e relatório de preços com web scraping",
      "desc": "Crie um projeto modular que faz scraping de preços de produtos de uma página web (usando requests e BeautifulSoup), armazena o histórico em arquivo e gera um relatório resumido. Separe o código em módulos (coleta, armazenamento, relatório), aplique tratamento de exceções para falhas de rede e siga a PEP 8. Use debugging para validar cada etapa.",
      "deliverable": "Projeto Python multi-módulo em repositório versionado, com funções e módulos separados por responsabilidade, tratamento de exceções de rede, saída em relatório (console ou arquivo) e README documentando arquitetura, instalação e uso."
    }
  },
  "Web, Git & Ferramentas — Git e Ferramentas do Dev": {
    "basic": {
      "title": "🟢 Repo Colaborativo: Workflow Completo de Git & GitHub",
      "desc": "Crie um repositório no GitHub que documente seu fluxo de trabalho. Requisitos: README bem escrito em Markdown (com badges, seções e instruções de uso), .gitignore adequado, histórico com pelo menos 15 commits semânticos (feat, fix, docs, refactor). Trabalhe em branches de feature e faça merge via pull requests abertos e revisados por você mesmo. Use issues para planejar tarefas e feche-as pelos commits. Configure GitHub Pages para publicar uma página simples do projeto e adicione um GitHub Action básico (lint ou echo em push). Documente no README os comandos Git que você usou.",
      "deliverable": "Repositório no GitHub com README em Markdown, 15+ commits semânticos, branches, PRs revisados, issues fechadas, GitHub Pages no ar e um workflow de Action"
    },
    "advanced": {
      "title": "🔴 Dotfiles + Ambiente Reproduzível com Git Avançado e Deploy",
      "desc": "Monte um repositório de dotfiles que configure sua máquina do zero: .bashrc/.zshrc, .gitconfig com aliases, settings.json do VS Code e lista de extensões, mais um script de setup que cria os symlinks (com stow ou script próprio). Use Git avançado no processo: reescreva o histórico com rebase interativo (squash/reordenar), use stash e cherry-pick, e demonstre um git bisect encontrando um commit problemático (documente no README). Publique uma landing page dos dotfiles no GitHub Pages com SEO configurado (title, meta description, Open Graph, robots.txt e sitemap.xml). Automatize a validação do script com um GitHub Action.",
      "deliverable": "Repo de dotfiles com script de setup reproduzível, histórico limpo via rebase interativo, bisect documentado, landing no GitHub Pages com SEO completo e GitHub Action validando o setup"
    }
  },
  "Matematica Fundamental — Estatistica e Calculo": {
    "basic": {
      "title": "🟢 Explorador de Dados + Cálculo Numérico em Python",
      "desc": "Programa Python puro que une estatística e cálculo sobre um conjunto de dados real (ou gerado). Parte estatística: carregar uma lista de números (ex.: notas, tempos, preços), calcular média, mediana, moda, variância e desvio padrão sem bibliotecas prontas, e imprimir um histograma ASCII no terminal. Parte simulação: usar random para simular 100.000 lançamentos de dados/moedas e mostrar a frequência convergindo (Lei dos Grandes Números); estimar π por Monte Carlo. Parte cálculo: implementar derivada numérica por diferença finita f'(x)≈(f(x+h)-f(x))/h e integral por somas de Riemann, testando com funções conhecidas (x², sen x) e comparando com o valor analítico. Cada função com docstring explicando a fórmula.",
      "deliverable": "Programa Python com estatística descritiva sem libs, histograma ASCII, simulação Monte Carlo (π + Lei dos Grandes Números), derivada numérica e integral de Riemann, tudo documentado + README"
    },
    "advanced": {
      "title": "🔴 Mini-laboratório: Da Curva Normal ao Gradiente Descendente",
      "desc": "Projeto integrador (código + artigo de 1500+ palavras) mostrando como estatística e cálculo se encontram em machine learning. Implementar do zero: (1) geração de dados sintéticos com ruído Gaussiano e visualização da distribuição Normal via histograma; (2) ajuste de uma reta por mínimos quadrados, derivando manualmente a função de perda (MSE) e minimizando-a com gradiente descendente implementado à mão (usando a derivada como motor); (3) verificar que a probabilidade P(a<X<b) sob a Normal bate com a integral numérica da densidade. O artigo conecta cada conceito: por que a derivada aponta a direção de descida, por que integral = área = probabilidade, e por que o Teorema Central do Limite justifica o ruído Normal. Incluir gráficos ASCII de perda por iteração.",
      "deliverable": "Repo Python com gerador de dados Gaussianos, regressão por gradiente descendente feito à mão, validação integral vs probabilidade, gráficos ASCII de convergência + artigo Markdown de 1500+ palavras conectando cálculo e estatística a ML"
    }
  },
  "Game Design (Teoria & Design) — Arte, Narrativa e Tabuleiro": {
    "basic": {
      "title": "🟢 Bíblia de mundo + protótipo de jogo de cartas no papel",
      "desc": "Crie a 'casca' expressiva de um jogo pequeno unindo as três frentes: escreva uma mini bíblia de mundo (lore, regras internas, 2-3 personagens com motivação), defina uma direção de arte de referência (moodboard com estilo, paleta e uma trilha/SFX de referência) e prototipe no papel um jogo de cartas simples ambientado nesse mundo. O foco é coerência entre história, arte e regras — não fidelidade técnica.",
      "deliverable": "Um documento com a mini bíblia de mundo e o moodboard de direção de arte/áudio, mais um baralho protótipo em papel jogável do começo ao fim, acompanhado das regras e de um parágrafo sobre a experiência pretendida"
    },
    "advanced": {
      "title": "🔴 Jogo de tabuleiro/cartas com narrativa, identidade visual e balanceamento",
      "desc": "Desenvolva um jogo de tabuleiro ou de cartas completo cuja narrativa e world building estejam integrados às mecânicas (o tema informa as regras, não é só tema colado). Defina uma direção de arte coesa (paleta, iconografia legível, tipografia) e cuide da UX dos componentes. Balanceie por playtesting com pelo menos 3 pessoas, cuidando de aleatoriedade, sinergias e interação entre jogadores.",
      "deliverable": "Um jogo de tabuleiro/cartas jogável e balanceado (print-and-play) com identidade visual coesa e narrativa integrada, mais um dossiê cobrindo lore/world building, decisões de arte e UX, e o registro do que mudou após o playtesting"
    }
  },
  "Seguranca Defensiva, Forense Avancada & Blue Team — Exploitation, SOC e Purple Team": {
    "basic": {
      "title": "🟢 Exploitation em Lab + Relatório Profissional",
      "desc": "Monte um lab isolado (VMs vulneráveis do VulnHub/HackTheBox ou máquinas Metasploitable). Faça o ciclo ofensivo completo em um alvo Linux e um Windows: recon, exploração de um serviço vulnerável (Metasploit ou exploit manual), privilege escalation (WinPEAS/LinPEAS, tokens, unquoted paths) e post-exploitation básica (coleta de evidências, tentativa de persistence e pivoting documentada, sem sair do escopo). Registre cada passo com screenshots e comandos. Encerre escrevendo um relatório de pentest profissional com executive summary, findings priorizados por CVSS, PoC reproduzível e remediações acionáveis.",
      "deliverable": "Lab com um alvo Linux e um Windows comprometidos do acesso inicial ao privilege escalation, mais um relatório de pentest profissional com findings CVSS, PoC e remediações"
    },
    "advanced": {
      "title": "🔴 Purple Team: Emulação de Adversário + Detecção Medida",
      "desc": "Feche o ciclo ataque-defesa. Configure um SIEM (ELK Stack ou Splunk) ingerindo logs de endpoints e rede, e adicione uma camada de deception (canary tokens ou T-Pot). No papel de red team, execute uma cadeia de TTPs com Atomic Red Team e/ou CALDERA mapeada ao MITRE ATT&CK contra os hosts monitorados. No papel de blue team, faça threat hunting nos logs: para cada técnica executada verifique se o SIEM detectou; onde não detectou, escreva a regra de detecção (Sigma convertida para o seu SIEM) e um playbook de resposta. Calcule a % de TTPs cobertos antes e depois. Documente o exercício como um relatório purple team com o gap de detecção fechado.",
      "deliverable": "SIEM com deception, cadeia de TTPs emulada (Atomic Red Team/CALDERA) mapeada ao MITRE ATT&CK, novas regras Sigma + playbooks para os gaps, e relatório purple team mostrando o aumento da cobertura de detecção"
    }
  }
};
