const PROJECTS = {};

PROJECTS["Fundamentos de Computacao"] = {
  basic:{title:"🟢 Mapa Mental Interativo: Como Computadores Funcionam",desc:"Crie um documento visual (pode ser Markdown com diagramas, Google Slides, ou Canva) explicando tudo que aprendeu sobre fundamentos. Inclua: diagrama do ciclo fetch-decode-execute, tabela de conversão binário-decimal-hexadecimal com exemplos, diagrama de hierarquia de memória (registradores→cache→RAM→SSD), mapa da internet (cliente→DNS→servidor→resposta) e tabela verdade das portas lógicas. Tudo com suas palavras — ensinar é a melhor forma de aprender.",deliverable:"Documento visual com 5+ diagramas próprios cobrindo binário, hardware, CPU, internet e lógica booleana"},
  advanced:{title:"🔴 Pesquisa: Como um Processador Moderno Funciona",desc:"Pesquise e escreva um relatório técnico (2000+ palavras) aprofundando o que estudou: escolha um processador real (ex: Apple M3, AMD Ryzen 9, Intel Core i9) e descreva sua arquitetura. Inclua: quantos cores/threads, clock speed, tamanho dos caches L1/L2/L3, pipeline, tecnologia de fabricação (nm). Compare com um processador de 10 anos atrás. Explique o que ISA ele usa (ARM vs x86). Use fontes reais (AnandTech, WikiChip, datasheet oficial). Inclua diagramas de bloco.",deliverable:"Relatório técnico com análise de processador real, comparação histórica, diagramas e 5+ fontes citadas"}
};

PROJECTS["Sistemas Operacionais & Terminal"] = {
  basic:{title:"🟢 Cheat Sheet Interativa de Terminal",desc:"Crie um site estático com os 50 comandos Linux mais usados, organizados por categoria (navegação, arquivos, processos, rede, permissões). Cada comando deve ter: sintaxe, exemplo real, e explicação. Adicione busca por filtro e um modo 'quiz' que mostra a descrição e você tenta adivinhar o comando.",deliverable:"Site estático com busca, categorias colapsáveis e modo quiz"},
  advanced:{title:"🔴 Automatize seu Setup com Dotfiles",desc:"Crie um repositório GitHub de dotfiles completo: .bashrc/.zshrc com aliases úteis, .gitconfig personalizado, script install.sh que detecta o SO (Ubuntu/Fedora/macOS) e instala automaticamente suas ferramentas favoritas (vim, tmux, curl, git, python, node). Inclua um README explicando cada decisão. O script deve ser idempotente (rodar múltiplas vezes sem quebrar).",deliverable:"Repositório GitHub com dotfiles, install.sh multiplataforma e README documentado"}
};

PROJECTS["Logica de Programacao com Python"] = {
  basic:{title:"🟢 Gerenciador de Tarefas CLI",desc:"Crie um app de terminal em Python para gerenciar tarefas. Funcionalidades: adicionar tarefa (com prioridade alta/média/baixa), listar (com filtro por prioridade e status), marcar como concluída, deletar, e salvar/carregar de um arquivo JSON. Use funções organizadas, tratamento de erros, e docstrings.",deliverable:"Script Python funcional com persistência em JSON e menu interativo no terminal"},
  advanced:{title:"🔴 Web Scraper + Dashboard de Dados",desc:"Escolha um site público (ex: tabela de rankings, preços, clima) e crie um scraper com requests + BeautifulSoup que coleta dados automaticamente. Salve em CSV com timestamp. Depois, crie um segundo script que lê os CSVs e gera gráficos com matplotlib (tendência ao longo do tempo, comparações). Documente tudo em um README com instruções para agendar via cron.",deliverable:"2 scripts Python (scraper + visualizador), CSVs de exemplo, gráficos gerados e README"}
};

PROJECTS["Matematica Fundamental"] = {
  basic:{title:"🟢 Caderno de Exercícios Resolvidos em Python",desc:"Crie um Jupyter Notebook com 30+ exercícios resolvidos de matemática usando Python: 10 de álgebra/pré-cálculo (resolver equações com sympy), 5 de matemática discreta (grafos com networkx, contagem), 5 de probabilidade (simulação de Monte Carlo com random), 5 de cálculo (derivadas e integrais com sympy, gráficos com matplotlib) e 5 de álgebra linear (matrizes com numpy). Cada exercício com: enunciado, resolução passo a passo e gráfico quando aplicável.",deliverable:"Jupyter Notebook com 30+ exercícios resolvidos, gráficos matplotlib e código Python comentado"},
  advanced:{title:"🔴 Artigo: Onde a Matemática Aparece na Computação",desc:"Escreva um artigo técnico (2000+ palavras) conectando cada área da matemática que você estudou a aplicações reais em computação. Exemplos: álgebra linear em gráficos 3D e ML, cálculo em otimização e redes neurais, probabilidade em criptografia e IA, grafos em redes sociais e roteamento, lógica em compiladores e verificação formal. Para cada conexão, inclua um exemplo de código Python simples demonstrando. Mínimo 6 áreas conectadas com exemplos práticos.",deliverable:"Artigo Markdown com 6+ conexões matemática↔computação, exemplos de código Python e referências"}
};

PROJECTS["Fisica & Quimica p/ Engenharia"] = {
  basic:{title:"🟢 Simulador de Cinemática 2D",desc:"Crie uma animação web (Canvas/JS) de lançamento oblíquo. O usuário define velocidade inicial e ângulo, clica 'lançar' e vê a trajetória parabólica animada com: posição atual, velocidade (decomposta em vx e vy), altura máxima e alcance. Mostre as equações usadas ao lado da simulação.",deliverable:"App web com animação de projétil, controles de input e painel de equações ao vivo"},
  advanced:{title:"🔴 Simulador de Circuito Elétrico",desc:"Construa um simulador de circuitos DC simples em JavaScript. O usuário arrasta componentes (fonte, resistor, LED, capacitor) para montar um circuito em série ou paralelo. O app calcula corrente, tensão em cada componente (Lei de Ohm, Kirchhoff) e mostra os valores. Bônus: destaque em vermelho se algum componente receber mais corrente que o permitido.",deliverable:"App web interativa com drag-and-drop de componentes e cálculo automático do circuito"}
};

PROJECTS["Web, Git & Ferramentas"] = {
  basic:{title:"🟢 Portfólio Pessoal no GitHub Pages",desc:"Crie seu site pessoal com HTML, CSS e JS. Deve ter: hero section com seu nome e área de interesse, seção 'sobre', seção de projetos (cards com imagem, título e link), seção de skills com barra de progresso visual, e formulário de contato (pode ser link para email). Totalmente responsivo (mobile-first). Deploy no GitHub Pages.",deliverable:"Site ao vivo no GitHub Pages, responsivo, com pelo menos 3 seções e design original"},
  advanced:{title:"🔴 CLI Tool com Git Hooks e CI/CD",desc:"Crie uma ferramenta CLI em JavaScript (Node.js) ou Python que faça algo útil (ex: renomear arquivos em lote, gerar relatório de commits do Git, converter Markdown para HTML). Configure: pre-commit hook que roda linter, GitHub Actions que roda testes automaticamente a cada push, e publica release automática com versionamento semântico. README completo com badges.",deliverable:"Repositório com CLI funcional, testes, pre-commit hook, GitHub Actions CI/CD e README com badges"}
};

PROJECTS["Banco de Dados Introducao"] = {
  basic:{title:"🟢 Livraria SQL: Modelagem e Queries",desc:"Modele um banco de dados para uma livraria: tabelas para livros, autores, categorias, clientes e vendas (com relacionamentos 1:N e N:N). Desenhe o diagrama ER no dbdiagram.io. Depois, escreva um arquivo .sql com: CREATE TABLE, INSERT de dados de exemplo (20+ registros), e 15 queries progressivas (SELECT simples, JOINs, GROUP BY, HAVING, subqueries, CTEs).",deliverable:"Diagrama ER + arquivo .sql com schema, dados e 15 queries comentadas"},
  advanced:{title:"🔴 App Full CRUD com SQLite + Python",desc:"Crie um sistema de gerenciamento de inventário CLI em Python usando SQLite. Funcionalidades: adicionar/editar/deletar produtos (com categoria, preço, quantidade), busca com filtros, relatório de estoque baixo, histórico de alterações (tabela de auditoria com triggers), e exportação para CSV. Use classes para organizar o código (DAO pattern).",deliverable:"App Python funcional com SQLite, CRUD completo, triggers de auditoria e exportação CSV"}
};

PROJECTS["Eletronica & Hardware"] = {
  basic:{title:"🟢 Simulador de Portas Lógicas em Python",desc:"Crie um programa Python que simula portas lógicas: o usuário escolhe a porta (AND, OR, NOT, NAND, NOR, XOR), define entradas (0 ou 1) e vê a saída. Implemente usando funções Python puras (sem bibliotecas). Adicione: modo tabela verdade completa, modo quiz (gera inputs aleatórios, usuário tenta adivinhar saída), simplificador de expressão booleana simples. Extra: simule um somador completo de 4 bits usando suas portas.",deliverable:"Programa Python com simulação de 6 portas lógicas, tabela verdade, modo quiz e somador de 4 bits"},
  advanced:{title:"🔴 Artigo: Do Transistor ao Processador",desc:"Escreva um artigo técnico ilustrado (2000+ palavras) explicando a jornada do transistor até a CPU: como transistores formam portas lógicas, como portas formam somadores e flip-flops, como flip-flops formam registradores e memória, como tudo junto forma uma CPU simples. Inclua diagramas feitos por você (pode ser draw.io, Canva ou papel escaneado): diagrama de transistor NAND, somador completo, flip-flop D, registrador de 4 bits, e diagrama de CPU simplificada.",deliverable:"Artigo técnico com 5+ diagramas próprios explicando transistor→portas→CPU, com referências"}
};

PROJECTS["Estruturas de Dados & Algoritmos"] = {
  basic:{title:"🟢 Visualizador de Algoritmos de Ordenação",desc:"Crie uma página web que anima Bubble Sort, Merge Sort e Quick Sort passo a passo. O usuário escolhe o algoritmo, tamanho do array e velocidade. Barras coloridas representam valores, e cada swap/comparação é animada. Mostre contador de comparações e tempo.",deliverable:"App web com animação de 3+ algoritmos, controles de velocidade e contadores de operações"},
  advanced:{title:"🔴 Resolvedor de Labirintos com BFS/DFS/A*",desc:"Construa app web onde o usuário desenha labirintos clicando em células (paredes/caminhos). Implemente BFS, DFS e A* para encontrar o caminho. Anime a exploração (células visitadas em azul, caminho final em verde). Compare performance dos 3 algoritmos (nós visitados, tempo).",deliverable:"App web interativa com editor de labirinto, 3 algoritmos animados e painel de comparação"}
};

PROJECTS["Python Intermediario & OOP"] = {
  basic:{title:"🟢 Sistema de Biblioteca com OOP",desc:"Implemente um sistema de gerenciamento de biblioteca usando classes Python: Livro, Membro, Empréstimo, Biblioteca. Use herança (LivroDigital extends Livro), encapsulamento (@property), e polimorfismo. Persista dados em JSON. Inclua testes unitários com pytest.",deliverable:"Projeto Python com 4+ classes, herança, testes pytest e persistência JSON"},
  advanced:{title:"🔴 Framework de Plugins com Metaclasses",desc:"Construa um mini framework onde plugins são descobertos automaticamente usando metaclasses e decorators. Cada plugin implementa uma interface (Protocol). O framework carrega plugins de uma pasta, registra automaticamente e executa pipeline. Inclua async support, logging estruturado e type hints completos.",deliverable:"Framework Python com auto-discovery de plugins, metaclasses, async, testes e documentação"}
};

PROJECTS["C, C++ & Rust"] = {
  basic:{title:"🟢 Gerenciador de Memória Manual em C",desc:"Implemente um alocador de memória simples: my_malloc() e my_free() que gerenciam um bloco grande de memória. Use free list (linked list de blocos livres). Crie programa de teste que aloca/libera e mostra estado da memória. Use valgrind para verificar zero leaks.",deliverable:"Biblioteca C com alocador custom, programa de teste visual e relatório valgrind limpo"},
  advanced:{title:"🔴 CLI Tool em Rust com Ownership e Concorrência",desc:"Construa ferramenta CLI em Rust que faz busca paralela em arquivos (tipo grep simplificado). Use ownership/borrowing, error handling com Result, múltiplas threads com rayon ou std::thread, e clap para argumentos. Publique no crates.io com CI via GitHub Actions.",deliverable:"Crate Rust publicado com busca paralela, testes, CI/CD e README com benchmarks"}
};

PROJECTS["Sistemas Operacionais (Disciplina)"] = {
  basic:{title:"🟢 Simulador de Escalonamento de Processos",desc:"Simule 4 algoritmos de escalonamento: FCFS, SJF, Round Robin e Priority. O usuário insere processos (arrival time, burst time, priority). Mostre Gantt chart, calcule tempo de espera médio e turnaround. Compare os 4 algoritmos lado a lado.",deliverable:"App web/Python com input de processos, Gantt chart visual e tabela comparativa dos 4 algoritmos"},
  advanced:{title:"🔴 Simulador de Memória Virtual com Paginação",desc:"Simule sistema de memória virtual: processos com tabela de páginas, frames físicos limitados. Implemente LRU, FIFO e Clock como algoritmos de substituição. Visualize page faults, taxas de hit/miss. Demonstre thrashing aumentando processos até o sistema degradar.",deliverable:"Simulador visual com 3 algoritmos de substituição, gráfico de page faults e demonstração de thrashing"}
};

PROJECTS["Concorrencia e Paralelismo"] = {
  basic:{title:"🟢 Web Scraper Concorrente em Python",desc:"Construa scraper que baixa 50+ páginas web usando 3 abordagens: sequencial, threading e asyncio. Compare tempo de execução. Use ThreadPoolExecutor e aiohttp. Salve resultados em CSV com tratamento de erros e retries.",deliverable:"Script Python com 3 abordagens, benchmark de tempo, CSV de resultados e gráfico comparativo"},
  advanced:{title:"🔴 Problema Produtor-Consumidor com Visualização",desc:"Implemente produtor-consumidor com buffer limitado em Python e C++. Compare mutex/condition variable vs semáforo vs asyncio Queue. Crie visualização web em tempo real mostrando buffer, produtores e consumidores. Demonstre deadlock e como evitá-lo.",deliverable:"Implementação em Python e C++, visualização web do buffer em tempo real e análise de deadlock"}
};

PROJECTS["Engenharia de Software"] = {
  basic:{title:"🟢 API REST com TDD e Clean Code",desc:"Construa API REST completa (CRUD de produtos) usando TDD: escreva testes ANTES do código. Use Express.js ou FastAPI. Aplique pelo menos 3 princípios SOLID. Inclua CI com GitHub Actions rodando testes a cada push. Mínimo 80% de cobertura de testes.",deliverable:"API com 80%+ coverage, pipeline CI green, README com decisões de design e princípios SOLID aplicados"},
  advanced:{title:"🔴 Artigo: Padrões de Design na Prática",desc:"Escreva artigo técnico (2500+ palavras) implementando 6 padrões de design em um projeto real: Factory, Observer, Strategy, Singleton, Adapter e Decorator. Cada padrão com: problema que resolve, diagrama UML, código em Python e quando NÃO usar. Compare com abordagens sem pattern.",deliverable:"Artigo Markdown com 6 padrões, diagramas UML, código funcional e análise de trade-offs"}
};

PROJECTS["Teoria da Computacao & Compiladores"] = {
  basic:{title:"🟢 Simulador de Autômatos Finitos",desc:"Crie app web onde o usuário desenha DFA/NFA: adiciona estados, transições e marca inicial/final. Depois insere uma string e vê passo a passo se é aceita. Implemente conversão NFA→DFA. Mostre a tabela de transição.",deliverable:"App web com editor visual de autômatos, animação de execução e conversão NFA→DFA"},
  advanced:{title:"🔴 Mini Linguagem com Lexer + Parser + Interpretador",desc:"Crie uma linguagem de programação simples com: variáveis, if/else, while, funções e print. Construa lexer (tokenização), parser (AST) e interpretador que executa a AST. Escreva 5+ programas de exemplo na sua linguagem. Mensagens de erro úteis com linha e coluna.",deliverable:"Interpretador funcional com lexer/parser/executor, 5+ programas de exemplo e mensagens de erro claras"}
};

PROJECTS["Matematica p/ ML"] = {
  basic:{title:"🟢 Regressão Linear do Zero (sem sklearn)",desc:"Implemente regressão linear usando gradiente descendente em NumPy puro. Visualize: dados, reta ajustando a cada iteração, gráfico da loss diminuindo. Compare com solução analítica (equação normal). Teste em dataset real (housing prices).",deliverable:"Notebook Jupyter com implementação manual, visualizações animadas e comparação com solução analítica"},
  advanced:{title:"🔴 PCA e SVD Implementados do Zero",desc:"Implemente PCA usando autovalores/autovetores e SVD em NumPy puro. Aplique em dataset de imagens (ex: faces do sklearn) para redução de dimensionalidade. Visualize: variância explicada por componente, reconstrução com N componentes, e projeção 2D. Compare com sklearn.decomposition.PCA.",deliverable:"Notebook com PCA e SVD do zero, visualizações de reconstrução de imagens e análise de variância"}
};

PROJECTS["Introducao a IA & ML"] = {
  basic:{title:"🟢 Classificador de Sentimento com Pipeline ML",desc:"Construa pipeline completo: coleta de dados (reviews), EDA com pandas, preprocessamento (TF-IDF), treino de 3 modelos (Logistic Regression, Random Forest, SVM), cross-validation, comparação de métricas. Deploy como API simples com FastAPI.",deliverable:"Notebook + API com pipeline reproduzível, comparação de 3 modelos e endpoint de predição"},
  advanced:{title:"🔴 Dashboard de ML Automatizado com Streamlit",desc:"Crie dashboard Streamlit onde o usuário faz upload de CSV e o sistema automaticamente: faz EDA (distribuições, correlações, missing values), sugere tipo de problema (classificação/regressão), treina múltiplos modelos, mostra métricas comparativas e feature importance. Exporta melhor modelo.",deliverable:"App Streamlit completa com AutoML simplificado, EDA automática e exportação de modelo"}
};

PROJECTS["Full-Stack"] = {
  basic:{title:"🟢 App de Notas com React + API REST",desc:"Construa app full-stack de notas: React frontend com TypeScript (CRUD, busca, tags), Express/FastAPI backend com JWT auth, PostgreSQL/SQLite. Styled com Tailwind. Testes E2E básicos. Deploy frontend no Vercel e backend no Railway/Render.",deliverable:"App deployada com frontend React, backend com auth JWT, banco de dados e testes"},
  advanced:{title:"🔴 Chat Real-time com WebSocket + GraphQL",desc:"Construa app de chat com: React frontend, GraphQL API (Apollo/Hasura), WebSocket para mensagens em tempo real, autenticação, múltiplas salas, indicador de 'digitando', histórico de mensagens. Redis para pub/sub. Docker Compose para rodar tudo local.",deliverable:"App de chat real-time com GraphQL subscriptions, WebSocket, Redis, Docker e auth completa"}
};

PROJECTS["Computacao Grafica (Intro)"] = {
  basic:{title:"🟢 Renderizador 3D Simples com Canvas/WebGL",desc:"Crie renderizador que desenha cubo 3D wireframe rotacionando. Implemente do zero: projeção perspectiva, rotação com matrizes 4x4 e controle de câmera com mouse. Use Canvas 2D (sem bibliotecas 3D). Adicione iluminação flat básica.",deliverable:"App web com cubo 3D rotacionando, controle de câmera por mouse e iluminação flat"},
  advanced:{title:"🔴 Mini Jogo 3D com Three.js",desc:"Construa um jogo 3D simples com Three.js: cenário com terreno, objetos coletáveis, player controlável, colisão básica, sistema de pontuação e efeitos de partícula. Inclua menu, game over e HUD. Publique no GitHub Pages jogável.",deliverable:"Jogo 3D jogável no navegador com Three.js, controles, colisão, score e deploy no GitHub Pages"}
};

PROJECTS["Desenvolvimento Mobile (Intro)"] = {
  basic:{title:"🟢 App de Lista de Compras com React Native/Flutter",desc:"Construa app mobile de lista de compras: adicionar/remover itens, marcar como comprado, categorias (frutas, carnes, limpeza), persistência local (AsyncStorage). Design limpo com ícones. Funciona offline.",deliverable:"App mobile funcional com CRUD, categorias, persistência local e design polido"},
  advanced:{title:"🔴 App de Hábitos com Streaks e Notificações",desc:"Construa habit tracker mobile: criar hábitos com frequência customizada, marcar conclusão diária, streak counter visual (calendário de calor), push notifications para lembrete, gráficos de progresso semanal/mensal. Backend com Firebase (auth + Firestore). Dark mode.",deliverable:"App mobile com Firebase, push notifications, calendário de streaks, gráficos e dark mode"}
};

PROJECTS["DevOps & Infra"] = {
  basic:{title:"🟢 Deploy Completo com Docker + CI/CD",desc:"Dockerize uma aplicação web (frontend + backend + banco). Crie docker-compose.yml que sobe tudo. Configure GitHub Actions para: rodar testes, buildar imagens e fazer deploy automático em ambiente de staging. Inclua health check e README com diagrama de arquitetura.",deliverable:"Repositório com Dockerfiles, docker-compose, pipeline CI/CD green e diagrama de arquitetura"},
  advanced:{title:"🔴 Stack de Observabilidade Completa",desc:"Monte stack de observabilidade local: Prometheus (métricas), Grafana (dashboards), Loki (logs) e Jaeger (traces). Instrumente uma app Node.js/Python com as 3 fontes. Crie dashboard Grafana com: latência por endpoint, taxa de erro, logs correlacionados e trace de request end-to-end.",deliverable:"docker-compose com Prometheus+Grafana+Loki+Jaeger, app instrumentada e dashboard com alertas"}
};

PROJECTS["Seguranca & Ethical Hacking (Intro)"] = {
  basic:{title:"🟢 Lab de CTF Pessoal",desc:"Configure ambiente de estudo: Kali Linux em VM, TryHackMe/HackTheBox conta gratuita. Complete 5+ salas de CTF beginner. Para cada uma, escreva writeup detalhado: enumeração feita, ferramentas usadas, vulnerabilidade encontrada, exploração e lições aprendidas.",deliverable:"5+ writeups de CTFs com screenshots, comandos usados e análise de cada vulnerabilidade"},
  advanced:{title:"🔴 Pentest Report de App Vulnerável",desc:"Configure app vulnerável (DVWA ou Juice Shop). Realize pentest completo seguindo metodologia: reconhecimento, scanning (nmap, nikto), exploração (XSS, SQLi, CSRF, auth bypass). Escreva relatório profissional de pentest com: escopo, metodologia, achados classificados por severidade (CVSS), evidências e recomendações.",deliverable:"Relatório de pentest profissional (PDF) com metodologia, 5+ vulnerabilidades e recomendações de correção"}
};

PROJECTS["Embarcados, Hardware & Automacao"] = {
  basic:{title:"🟢 Estação Meteorológica com Arduino/ESP32",desc:"Monte estação que mede temperatura, umidade (DHT22) e pressão (BMP280). ESP32 envia dados via WiFi para servidor MQTT. Dashboard web mostra gráficos em tempo real. Alerta quando temperatura passa de threshold. Alimentação com bateria + painel solar (opcional).",deliverable:"Hardware montado, firmware ESP32, broker MQTT, dashboard web com gráficos em tempo real"},
  advanced:{title:"🔴 Robô Seguidor de Linha com PID em FPGA",desc:"Projete seguidor de linha: sensores IR leem a linha, lógica PID implementada em VHDL/Verilog no FPGA (ou Arduino se não tiver FPGA), motores DC com ponte H. Documente: esquemático, código HDL/C, tuning do PID (Kp, Ki, Kd), vídeo funcionando e análise de performance.",deliverable:"Robô funcional com PID, código HDL, esquemático, vídeo demonstrativo e relatório técnico"}
};

PROJECTS["Arquitetura de Software"] = {
  basic:{title:"🟢 Design de Sistema: URL Shortener",desc:"Projete e implemente um encurtador de URL completo: API REST, geração de hash único, redirecionamento, analytics (cliques por dia/região). Documente decisões de design: cache (Redis), banco (PostgreSQL), rate limiting. Escreva System Design Document com diagramas de arquitetura.",deliverable:"App deployada com API, Redis cache, analytics e System Design Document com diagramas"},
  advanced:{title:"🔴 Clone Simplificado do Twitter com Microsserviços",desc:"Projete sistema distribuído com 3+ microsserviços: User Service, Tweet Service, Timeline Service. Comunicação via events (Kafka/RabbitMQ). API Gateway com rate limiting. Documente: CAP tradeoffs, sharding strategy, caching layers, read/write paths. Load test com k6.",deliverable:"Monorepo com 3+ microsserviços, message broker, API gateway, load tests e design document completo"}
};

PROJECTS["Deep Learning"] = {
  basic:{title:"🟢 Classificador de Imagens com CNN (PyTorch)",desc:"Treine CNN do zero em dataset de imagens (CIFAR-10 ou custom). Implemente: data augmentation, batch normalization, dropout, learning rate scheduler. Compare com transfer learning (ResNet pré-treinada). Visualize filtros convolucionais e Grad-CAM. Deploy como API com FastAPI.",deliverable:"Notebook com treino, comparação de modelos, Grad-CAM visualização e API de predição deployada"},
  advanced:{title:"🔴 Chatbot de FAQ com Fine-tuned Transformer",desc:"Fine-tune modelo transformer (DistilBERT ou GPT-2) para responder perguntas de FAQ de domínio específico. Pipeline completo: coleta de dados, tokenização, treino, avaliação (BLEU, F1). Compare com abordagem RAG usando embeddings + vector search. Deploy com interface Gradio.",deliverable:"Modelo fine-tuned, pipeline reproduzível, comparação fine-tune vs RAG e interface Gradio deployada"}
};

PROJECTS["AI Engineering"] = {
  basic:{title:"🟢 App RAG: Chat com seus Documentos",desc:"Construa aplicação RAG completa: upload de PDFs, chunking, embeddings (OpenAI/HuggingFace), armazenamento em vector DB (Chroma/Pinecone), busca semântica e geração de resposta com LLM. Interface com Streamlit. Mostre fontes citadas em cada resposta.",deliverable:"App Streamlit com upload de PDF, RAG pipeline, citação de fontes e avaliação de qualidade"},
  advanced:{title:"🔴 Sistema Multi-Agent com Tools e Planning",desc:"Construa sistema de AI agents: um orquestrador que planeja, delega para agents especializados (pesquisador web, analista de dados, escritor) que usam ferramentas (search API, Python executor, file system). Implementar memory, retry e guardrails. Usar LangChain/LlamaIndex.",deliverable:"Sistema multi-agent funcional com 3+ agents, tools, memória, guardrails e logs de execução"}
};

PROJECTS["Bioinformatica & Computacao Biologica"] = {
  basic:{title:"🟢 Pipeline de Análise Genômica",desc:"Construa pipeline que: lê sequências FASTA, faz alinhamento com Biopython (pairwise e múltiplo), constrói árvore filogenética e visualiza. Analise dataset real (ex: variantes de SARS-CoV-2 do NCBI). Use Snakemake/Nextflow para orquestrar.",deliverable:"Pipeline reproduzível com Snakemake, análise de sequências reais, árvore filogenética e relatório"},
  advanced:{title:"🔴 Preditor de Função de Proteínas com ML",desc:"Treine modelo que prediz função/família de proteínas a partir da sequência de aminoácidos. Use features: composição de aminoácidos, motifs, embeddings de proteínas (ESM). Compare Random Forest, SVM e rede neural. Avalie com dados do UniProt. Visualize clusters com t-SNE.",deliverable:"Modelo treinado, benchmark de 3+ algoritmos, visualizações t-SNE e notebook reproduzível"}
};

PROJECTS["Banco de Dados Avancado"] = {
  basic:{title:"🟢 PostgreSQL Performance Lab",desc:"Configure PostgreSQL local. Crie banco com 1M+ rows. Escreva 10 queries complexas (JOINs, CTEs recursivas, window functions). Para cada: analise EXPLAIN ANALYZE antes e depois de otimizar (índices, rewrite). Documente ganho de performance. Configure pg_stat_statements.",deliverable:"Relatório com 10 queries otimizadas, EXPLAIN ANALYZE antes/depois, índices criados e métricas"},
  advanced:{title:"🔴 Sistema Multi-DB: PostgreSQL + Redis + MongoDB",desc:"Construa app que usa 3 bancos: PostgreSQL para dados relacionais (users, orders), Redis para cache e sessões, MongoDB para logs e dados semi-estruturados. Implemente padrão CQRS: writes vão para PostgreSQL, reads servidos do Redis/MongoDB. Docker Compose para tudo.",deliverable:"App com 3 bancos, padrão CQRS, benchmarks de leitura/escrita e docker-compose completo"}
};

PROJECTS["Data Engineering"] = {
  basic:{title:"🟢 Pipeline ETL com Airflow + dbt",desc:"Construa pipeline de dados completo: extraia dados de API pública (ex: clima, financeiro), carregue em PostgreSQL com Airflow (DAGs), transforme com dbt (staging → marts), valide com dbt tests. Dashboard final com Metabase ou Streamlit.",deliverable:"Repositório com DAGs Airflow, projeto dbt com testes, e dashboard de visualização"},
  advanced:{title:"🔴 Streaming Pipeline: Kafka + Spark + Data Lake",desc:"Monte pipeline de streaming: produtor gera eventos (simule clickstream), Kafka ingere, Spark Structured Streaming processa em tempo real (aggregações, windowing), resultados vão para data lake (Parquet particionado). Dashboard Grafana com métricas do pipeline.",deliverable:"Pipeline Kafka→Spark→Parquet, docker-compose, dashboard de métricas e documentação de arquitetura"}
};

PROJECTS["Blockchain & Web3"] = {
  basic:{title:"🟢 DApp: Voting System com Solidity",desc:"Desenvolva smart contract de votação: criar eleição, registrar candidatos, votar (1 voto por endereço), apurar resultados. Frontend com React + ethers.js. Testes com Hardhat. Deploy na testnet (Sepolia). Documente gas costs e segurança.",deliverable:"Smart contract testado, frontend React, deploy na testnet e documentação de segurança"},
  advanced:{title:"🔴 DEX (Decentralized Exchange) Simplificada",desc:"Implemente exchange descentralizada: pool de liquidez (AMM tipo Uniswap V1), swap de tokens ERC-20, provisão de liquidez com LP tokens. Proteja contra reentrancy. Frontend mostra preços, slippage e pool status. Testes extensivos com Foundry/Hardhat.",deliverable:"Smart contracts AMM com testes de segurança, frontend funcional e análise de vulnerabilidades"}
};

PROJECTS["Cloud & Kubernetes"] = {
  basic:{title:"🟢 Deploy em Kubernetes com GitOps",desc:"Crie cluster K8s local (kind/minikube). Deploy de app com: Deployment, Service, Ingress, ConfigMap, Secrets. Configure ArgoCD para GitOps: mudanças no repo Git são automaticamente aplicadas no cluster. HPA para auto-scaling. Monitore com Prometheus + Grafana.",deliverable:"Cluster K8s com app, ArgoCD configurado, HPA, Prometheus+Grafana e README com arquitetura"},
  advanced:{title:"🔴 Multi-Service Platform no Kubernetes",desc:"Deploy de plataforma com 4+ serviços em K8s: API gateway (Nginx Ingress), 2 microsserviços, banco (StatefulSet), cache (Redis), message broker (RabbitMQ). Service mesh básico com Linkerd. Helm charts para cada serviço. Chaos engineering com Litmus.",deliverable:"Cluster K8s com 4+ serviços, Helm charts, service mesh, chaos testing e runbook de operações"}
};

PROJECTS["DevSecOps & Seguranca"] = {
  basic:{title:"🟢 Security Pipeline com CI/CD",desc:"Configure pipeline de segurança completo no GitHub Actions: SAST (Semgrep), SCA (Trivy para dependências), container scanning (Trivy para Docker), secrets scanning (gitleaks). Quebre o build se encontrar vulnerabilidade crítica. Gere relatório SARIF.",deliverable:"Pipeline CI/CD com 4 ferramentas de segurança, relatórios SARIF e documentação de políticas"},
  advanced:{title:"🔴 Threat Model + Security Hardening de App Real",desc:"Escolha app open source (ex: OWASP Juice Shop pré-corrigido). Faça threat modeling (STRIDE), identifique 10+ ameaças, implemente mitigações: CSP headers, rate limiting, WAF rules, mTLS entre serviços, secrets rotation. Documente postura de segurança antes/depois.",deliverable:"Threat model STRIDE, 10+ mitigações implementadas, relatório antes/depois e checklist de hardening"}
};

PROJECTS["Ethical Hacking: Web & Redes"] = {
  basic:{title:"🟢 Lab de Vulnerabilidades Web (DVWA/Juice Shop)",desc:"Configure ambiente de prática: instale DVWA ou Juice Shop em Docker. Para 5 tipos de vulnerabilidade (SQL Injection, XSS refletido, XSS armazenado, CSRF, IDOR), faça: 1) entenda a vulnerabilidade, 2) explore no nível fácil, 3) explore no nível médio, 4) documente como funciona e como corrigir. Use Burp Suite Community para interceptar requests. Escreva writeup para cada vulnerabilidade.",deliverable:"5 writeups de vulnerabilidades web com screenshots, passos de reprodução, explicação técnica e recomendação de correção"},
  advanced:{title:"🔴 Rede Vulnerável + Lateral Movement Lab",desc:"Monte lab com 3+ VMs (atacante Kali + 2 alvos Windows/Linux). Execute: network scanning, exploitation de serviço vulnerável, privilege escalation, credential dumping, lateral movement para segunda máquina. Documente kill chain completa com evidências.",deliverable:"Lab de 3+ VMs, kill chain documentada, evidências de cada fase e relatório com mitigações"}
};

PROJECTS["Robotica, IoT & Automacao Avancada"] = {
  basic:{title:"🟢 Robô Autônomo em Simulação (ROS + Gazebo)",desc:"Crie robô no Gazebo com: sensores (câmera, LiDAR), navegação autônoma com SLAM, detecção de obstáculos. Use ROS 2 com nós para percepção, planejamento e controle. Visualize mapa construído em RViz. Navegue autonomamente entre waypoints.",deliverable:"Pacote ROS 2 com simulação Gazebo, SLAM funcional, navegação autônoma e documentação"},
  advanced:{title:"🔴 Sistema IoT Industrial com Digital Twin",desc:"Construa sistema IoT de monitoramento industrial: sensores ESP32 medem vibração e temperatura de motor, enviam via MQTT para gateway, pipeline processa e alimenta digital twin 3D (Three.js ou Unity). Dashboard com alertas preditivos (anomaly detection com ML). OPC UA para integração.",deliverable:"Hardware IoT, pipeline MQTT, digital twin 3D, ML para anomalias e dashboard com alertas"}
};

PROJECTS["Sistemas Distribuidos"] = {
  basic:{title:"🟢 Key-Value Store Distribuído",desc:"Implemente key-value store distribuído em Python/Go: 3 nós, consistent hashing para particionamento, replicação com quorum (W=2, R=2, N=3). Cliente faz GET/PUT via HTTP. Simule falha de nó e demonstre que sistema continua funcionando. Visualize o hash ring.",deliverable:"KV store com 3 nós, consistent hashing, replicação quorum, tolerância a falhas e visualização do ring"},
  advanced:{title:"🔴 Implementação de Raft Consensus",desc:"Implemente protocolo Raft do zero: leader election com timeouts aleatórios, log replication, safety, membership changes. Teste com 5 nós simulados. Injete falhas (kill leader, network partition) e demonstre que consenso se mantém. Visualize estado de cada nó em tempo real.",deliverable:"Implementação completa de Raft, test suite com fault injection, visualização de estados e paper review"}
};

PROJECTS["MLOps & Producao"] = {
  basic:{title:"🟢 Pipeline ML End-to-End com MLflow",desc:"Construa pipeline completo: data versioning (DVC), experiment tracking (MLflow), treino automatizado, model registry, serving com FastAPI, monitoramento de drift (Evidently). Tudo em Docker Compose. Retreine automaticamente quando drift é detectado.",deliverable:"Pipeline MLOps com DVC, MLflow, serving, drift monitoring, auto-retrain e docker-compose"},
  advanced:{title:"🔴 Plataforma de ML com A/B Testing e Feature Store",desc:"Construa plataforma interna de ML: feature store (Feast), training pipeline (Kubeflow/Airflow), model registry (MLflow), A/B testing framework com split de tráfego e métricas de negócio, canary deployment, dashboards de monitoramento. Deploy em K8s.",deliverable:"Plataforma ML com feature store, A/B testing, canary deploy, K8s e documentação de arquitetura"}
};

PROJECTS["Pesquisa & Fronteira"] = {
  basic:{title:"🟢 Agente de RL para Jogo (Gymnasium)",desc:"Treine agente de reinforcement learning para jogar ambiente do Gymnasium (CartPole, LunarLander ou Atari). Implemente DQN do zero em PyTorch. Compare com PPO do Stable-Baselines3. Visualize: reward curve, policy learned, vídeo do agente jogando.",deliverable:"Notebook com DQN do zero, comparação com PPO, gráficos de treino e vídeo do agente"},
  advanced:{title:"🔴 Circuito Quântico: Algoritmo de Deutsch-Jozsa em Qiskit",desc:"Implemente algoritmo de Deutsch-Jozsa em Qiskit: construa circuito com portas Hadamard, oracles constante e balanceado, medição. Execute no simulador e em hardware real da IBM Quantum. Compare resultados. Explique passo a passo com diagramas de circuito e vetores de estado.",deliverable:"Notebook Qiskit com circuito, execução em simulador e hardware real, diagramas e explicação pedagógica"}
};

PROJECTS["Escrita e Metodologia Cientifica"] = {
  basic:{title:"🟢 Revisão Sistemática Mini (5 papers)",desc:"Escolha tema em computação. Defina pergunta de pesquisa, critérios de inclusão/exclusão. Busque em Google Scholar e ACM/IEEE. Selecione 5 papers, extraia dados em tabela comparativa (abordagem, dataset, resultados). Escreva relatório em LaTeX com BibTeX seguindo template de conferência.",deliverable:"Relatório LaTeX com revisão de 5 papers, tabela comparativa, BibTeX e análise de gaps"},
  advanced:{title:"🔴 Paper Completo Seguindo Template de Conferência",desc:"Escreva artigo completo (6-10 páginas) seguindo template ACM/IEEE: Abstract, Introduction, Related Work, Methodology, Results, Discussion, Conclusion. Use LaTeX + BibTeX com 15+ referências. Inclua figuras, tabelas e pseudo-código. Peça feedback a alguém. Submeta ao ArXiv como preprint.",deliverable:"Paper completo em LaTeX, formatado para conferência, com 15+ referências e submetido ao ArXiv"}
};

PROJECTS["Iniciacao Cientifica (IC)"] = {
  basic:{title:"🟢 Proposta de Pesquisa de IC",desc:"Escreva proposta de IC completa: escolha tema alinhado com professor da sua universidade. Inclua: introdução com motivação, objetivos geral e específicos, revisão de literatura (10+ referências), metodologia proposta, cronograma semestral e resultados esperados. Formate para PIBIC/FAPESP.",deliverable:"Proposta de IC formatada para edital com cronograma, revisão de literatura e metodologia"},
  advanced:{title:"🔴 Relatório Final de IC com Resultados",desc:"Conduza mini-pesquisa em computação: defina hipótese, implemente experimento (pode ser replicação de paper), colete e analise dados. Escreva relatório final: introdução, metodologia, resultados com gráficos, discussão e conclusão. Prepare pôster para apresentação.",deliverable:"Relatório final de pesquisa com resultados, código, gráficos e pôster acadêmico"}
};

PROJECTS["Mestrado"] = {
  basic:{title:"🟢 Análise Crítica de 3 Dissertações",desc:"Leia 3 dissertações de mestrado em computação de programas nota 5+ (CAPES). Para cada: resuma contribuição, avalie metodologia (pontos fortes e fracos), identifique gap. Escreva análise comparativa: como se relacionam, o que uma faz que outra não faz, possíveis extensões.",deliverable:"Análise comparativa de 3 dissertações com resumo, avaliação crítica e sugestão de extensões"},
  advanced:{title:"🔴 Proposta de Dissertação de Mestrado",desc:"Escreva proposta completa de dissertação: problema, hipótese, revisão de literatura (30+ refs), metodologia detalhada (design experimental, métricas de avaliação), cronograma de 24 meses, resultados preliminares (se houver). Valide com professor. Formate para qualificação.",deliverable:"Proposta de dissertação completa com 30+ referências, metodologia, cronograma e formato para qualificação"}
};

PROJECTS["Doutorado"] = {
  basic:{title:"🟢 Mapeamento de Área de Pesquisa",desc:"Escolha subárea de computação. Mapeie: 10 grupos de pesquisa mais influentes (universidades), 20 papers seminais, 5 conferências/periódicos top, tendências atuais, problemas em aberto. Use Connected Papers para visualizar relações. Escreva survey de 3000+ palavras.",deliverable:"Survey de subárea com mapa de grupos, papers seminais, grafo de relações e problemas em aberto"},
  advanced:{title:"🔴 Proposta de Tese de Doutorado (Mock)",desc:"Escreva proposta de tese: identifique problema original em aberto, formule hipóteses, proponha metodologia com 3+ experimentos, resultados esperados, contribuições previstas. Revisão de literatura com 50+ referências. Cronograma de 4 anos. Prepare apresentação de qualificação.",deliverable:"Proposta de tese com 50+ refs, 3+ experimentos, cronograma de 4 anos e slides de qualificação"}
};

PROJECTS["Ferramentas e Recursos Academicos"] = {
  basic:{title:"🟢 Setup Acadêmico Completo",desc:"Configure ambiente de pesquisa: Overleaf com template de conferência (ACM/IEEE), Zotero com 20+ papers organizados em coleções, ORCID configurado, perfil Google Scholar criado, Jupyter Notebook com análise reproduzível de dataset público. Documente workflow em README.",deliverable:"Ambiente configurado: Overleaf, Zotero com 20+ papers, ORCID, Google Scholar e notebook reproduzível"},
  advanced:{title:"🔴 Pipeline de Pesquisa Reproduzível",desc:"Construa pipeline de pesquisa reproduzível completo: repo Git com código, DVC para dados, Makefile/Snakemake para pipeline, Docker para ambiente, Jupyter notebooks com análise, LaTeX para paper, CI que roda experimentos e gera figuras. Qualquer pessoa clona e reproduz.",deliverable:"Repositório Git com pipeline reproduzível: Docker, DVC, Make, notebooks, LaTeX e CI completo"}
};

PROJECTS["Lideranca & Gestao"] = {
  basic:{title:"🟢 Simulação de Sprint Completa",desc:"Simule gestão de sprint para projeto pessoal: escreva 10+ user stories com acceptance criteria, estime com planning poker (simule com pontos), organize sprint board (Trello/Linear), faça daily logs por 2 semanas, retrospectiva com action items. Documente velocity e métricas.",deliverable:"Board com 10+ stories estimadas, daily logs de 2 semanas, gráfico de burndown e retrospectiva"},
  advanced:{title:"🔴 Tech Spec + Postmortem de Projeto Real",desc:"Escreva tech spec completa para feature complexa: problema, alternativas avaliadas, decisão, tradeoffs, plano de rollout, métricas de sucesso. Depois, implemente e escreva postmortem (blameless): o que aconteceu, timeline, root cause, impact, lessons e action items.",deliverable:"Tech spec completa, implementação e postmortem blameless com 5+ action items"}
};

PROJECTS["Lideranca Tecnica"] = {
  basic:{title:"🟢 Runbook e ADR Collection",desc:"Para projeto existente (seu ou open source), escreva: 3 ADRs (Architectural Decision Records) documentando decisões técnicas, 3 runbooks para cenários de incidente (deploy failed, banco lento, API down), e playbook de on-call com escalation matrix.",deliverable:"3 ADRs, 3 runbooks, playbook de on-call e documentação de escalation"},
  advanced:{title:"🔴 RFC + Implementação de Mudança Arquitetural",desc:"Escreva RFC propondo mudança significativa em projeto: migração de monolito para microsserviço, novo sistema de cache, mudança de banco. Inclua: contexto, proposta, alternativas, rollout plan, rollback plan. Solicite feedback (simule ou peça a colegas). Implemente fase 1.",deliverable:"RFC completo com feedback incorporado, fase 1 implementada e métricas de antes/depois"}
};

PROJECTS["Produto & Estrategia"] = {
  basic:{title:"🟢 Product Discovery de App",desc:"Escolha problema real. Execute discovery: entreviste 5 pessoas (user research), mapeie jobs to be done, crie personas, sketche wireframes de solução. Priorize features com RICE. Defina North Star Metric e métricas de sucesso. Documente em one-pager de produto.",deliverable:"One-pager de produto com pesquisa de usuário, personas, wireframes, priorização RICE e métricas"},
  advanced:{title:"🔴 MVP com Métricas de Produto",desc:"Construa MVP funcional de produto digital: landing page com proposta de valor, signup, feature principal, analytics (Mixpanel/Amplitude). Lance para 10+ usuários reais. Meça: retention, engagement, NPS. Itere baseado em feedback. Documente: hipóteses, resultados, decisões.",deliverable:"MVP deployado com analytics, dados de 10+ usuários reais, relatório de métricas e iteração documentada"}
};

PROJECTS["Gestao de Pessoas"] = {
  basic:{title:"🟢 Framework de Feedback e 1:1",desc:"Crie framework pessoal de feedback: template de 1:1 com agenda, template de feedback (SBI: Situation-Behavior-Impact), template de career conversation. Pratique: peça feedback de 3 pessoas, dê feedback a 3 pessoas. Documente aprendizados sobre dar e receber feedback.",deliverable:"Templates de 1:1, feedback e career conversation, 3 feedbacks dados e recebidos com reflexão"},
  advanced:{title:"🔴 Plano de Onboarding para Time de Engenharia",desc:"Projete programa completo de onboarding: dia 1 (setup, buddy, tour), semana 1 (first PR, pair programming), 30 dias (first feature), 60 dias (on-call capable), 90 dias (autonomous). Inclua checklist, resources, buddy guide e success criteria por milestone.",deliverable:"Programa de onboarding completo com checklists, buddy guide, milestones 30/60/90 e success criteria"}
};

PROJECTS["Estrategia, Negocio & Empreendedorismo"] = {
  basic:{title:"🟢 Análise de Modelo de Negócio (Business Model Canvas)",desc:"Escolha 3 empresas de tech (1 startup, 1 scale-up, 1 big tech). Para cada: preencha Business Model Canvas, identifique moat, analise unit economics (estimativa), mapeie flywheel. Compare as 3: o que funciona, riscos, oportunidades.",deliverable:"3 Business Model Canvas preenchidos com análise de moat, unit economics e comparação"},
  advanced:{title:"🔴 Pitch Deck de Startup Técnica",desc:"Crie pitch deck completo para startup de tecnologia: problema, solução, produto demo, mercado (TAM/SAM/SOM), modelo de negócio, traction, time, competidores, financials (projeção 3 anos), ask. Inclua protótipo funcional. Apresente para 3 pessoas e itere.",deliverable:"Pitch deck de 12-15 slides, protótipo funcional, projeção financeira e feedback de 3 apresentações"}
};

PROJECTS["Redes de Computadores"] = {
  basic:{title:"🟢 Lab de Redes: Subnetting + Análise de Pacotes",desc:"Configure rede virtual no Packet Tracer ou GNS3: 3 sub-redes (/24, /25, /26) interligadas por roteador. Configure DHCP, DNS local e firewall com regras. Capture tráfego com Wireshark e analise: identifique handshake TCP, queries DNS, headers HTTP. Documente cada camada OSI vista nos pacotes.",deliverable:"Lab virtual com 3 sub-redes, capturas Wireshark anotadas mostrando cada camada OSI e relatório de análise de pacotes"},
  advanced:{title:"🔴 Rede Corporativa Simulada com VLANs, VPN e Monitoramento",desc:"Projete rede corporativa completa no GNS3/EVE-NG: 4 VLANs (RH, Dev, Servidores, Guest), inter-VLAN routing, NAT para internet, firewall com regras por VLAN, VPN site-to-site (IPSec), servidor DHCP e DNS. Configure Nagios/Zabbix para monitoramento. Documente topologia, tabelas de roteamento, regras de firewall e diagrama de rede.",deliverable:"Rede simulada com VLANs, VPN, firewall, monitoramento, diagrama de topologia e documentação completa"}
};

PROJECTS["Arquitetura de Computadores"] = {
  basic:{title:"🟢 Simulador de CPU Pipeline em Python",desc:"Implemente simulador de CPU com pipeline de 5 estágios (IF/ID/EX/MEM/WB). Carregue programa em assembly simplificado (ADD, SUB, LW, SW, BEQ). Visualize: estado de cada estágio por ciclo, detecte data hazards, implemente forwarding e stalls. Mostre CPI final e compare pipeline vs single-cycle.",deliverable:"Simulador Python com visualização ciclo-a-ciclo do pipeline, detecção de hazards, forwarding e comparação de CPI"},
  advanced:{title:"🔴 Processador RISC-V Simplificado em Verilog/VHDL",desc:"Projete processador RISC-V (RV32I subset) em HDL: datapath com ALU, register file, memória, unidade de controle. Implemente 10+ instruções (ADD, SUB, AND, OR, LW, SW, BEQ, JAL). Simule no Vivado/Icarus Verilog. Opcional: sintetize em FPGA. Documente diagrama de blocos, tabela de controle e testbench.",deliverable:"Processador RISC-V em HDL com 10+ instruções, testbench, simulação funcional e documentação do datapath"}
};

PROJECTS["Sinais e Sistemas"] = {
  basic:{title:"🟢 Analisador de Espectro de Áudio em Tempo Real",desc:"Construa analisador que captura áudio do microfone, aplica FFT e mostra espectro de frequências em tempo real. Use Python (pyaudio + numpy + matplotlib) ou web (Web Audio API + Canvas). Identifique frequências dominantes (nota musical). Adicione filtro passa-baixa interativo que o usuário ajusta.",deliverable:"App com visualização de espectro em tempo real, identificação de notas musicais e filtro ajustável"},
  advanced:{title:"🔴 Processador de Sinais: Filtros e Compressão de Áudio",desc:"Implemente do zero em Python: filtro FIR e IIR (passa-baixa, passa-alta), aplique em áudio real. Visualize resposta em frequência e espectrograma antes/depois. Implemente compressão de áudio simplificada: DCT, quantização, reconstrução. Compare qualidade (SNR) em diferentes taxas de compressão. Documente a matemática.",deliverable:"Notebook com filtros FIR/IIR implementados do zero, espectrogramas, compressor de áudio com análise de SNR e documentação matemática"}
};

PROJECTS["Java & Ecossistema JVM"] = {
  basic:{title:"🟢 API REST com Spring Boot + JPA",desc:"Construa API REST completa com Spring Boot: CRUD de entidades (ex: e-commerce com produtos, categorias, pedidos). Use Spring Data JPA com PostgreSQL, validação com Bean Validation, DTOs, tratamento de erros global (@ControllerAdvice). Testes com JUnit 5 + Mockito. Swagger/OpenAPI para documentação. Docker Compose para banco.",deliverable:"API Spring Boot com JPA, PostgreSQL, Swagger, testes unitários/integração, Docker Compose e README com instruções"},
  advanced:{title:"🔴 Microsserviço com Spring Boot: API + Workers + Monitoring",desc:"Construa sistema com 2 microsserviços Spring Boot comunicando via REST e filas (Spring AMQP com RabbitMQ — ensinado como conceito em Eng. Software). Order Service: CRUD de pedidos com JPA, validação, JWT auth com Spring Security. Notification Service: consome eventos de novos pedidos e envia (simula) notificações. Inclua: circuit breaker com Resilience4j (fallback quando Notification está down), health checks com Actuator, métricas com Micrometer, Docker Compose para subir tudo, testes com JUnit 5 + Mockito + TestContainers.",deliverable:"2 microsserviços Spring Boot com RabbitMQ, circuit breaker, JWT auth, Docker Compose, Actuator e testes"}
};

PROJECTS["Go (Golang)"] = {
  basic:{title:"🟢 CLI Tool em Go: Gerenciador de Tarefas",desc:"Construa CLI de gerenciamento de tarefas em Go usando Cobra: add, list, done, delete. Persistência em JSON local. Formatação com cores (lipgloss/charm). Testes com go test. Cross-compile para Linux, Mac e Windows. Publique no GitHub com goreleaser para binários automáticos.",deliverable:"CLI Go funcional com Cobra, persistência JSON, testes, binários cross-platform e release automatizado"},
  advanced:{title:"🔴 API Concorrente em Go com Worker Pool",desc:"Construa API REST em Go (Gin/Echo) que processa jobs assíncronos: recebe request, enfileira em channel, worker pool de goroutines processa em paralelo, retorna status via polling ou WebSocket. Use context para timeout/cancelamento, pprof para profiling, race detector nos testes. Redis para fila persistente. Deploy com Docker (imagem scratch < 10MB).",deliverable:"API Go com worker pool, channels, Redis queue, WebSocket, profiling pprof, Docker scratch image e load test com k6"}
};

PROJECTS["Fisica & Quimica"] = {
  basic:{title:"🟢 Simulações de Física em Python",desc:"Crie um Jupyter Notebook com 5 simulações de física usando Python + matplotlib: 1) lançamento oblíquo (trajetória parabólica com diferentes ângulos), 2) circuito RC (carga/descarga do capacitor com gráfico exponencial), 3) ondas estacionárias (animação com matplotlib.animation), 4) Lei de Ohm interativa (variar V e R, mostrar I), 5) espectro eletromagnético (visualização das frequências). Cada simulação com: equações, código comentado, gráfico e explicação do fenômeno.",deliverable:"Jupyter Notebook com 5 simulações de física, gráficos animados matplotlib e equações explicadas"},
  advanced:{title:"🔴 Simulador de Circuito Elétrico em Python",desc:"Construa um simulador de circuitos DC em Python (pode usar tkinter para interface gráfica ou Jupyter widgets). O usuário define componentes (fonte de tensão, resistores em série/paralelo) e o programa calcula: corrente em cada ramo (Kirchhoff), tensão em cada componente, potência dissipada. Valide com exemplos do livro. Visualize o circuito como grafo com networkx. Inclua pelo menos 5 circuitos de exemplo pré-configurados.",deliverable:"Simulador Python de circuitos DC com interface, cálculos de Kirchhoff, visualização e 5 exemplos"}
};

PROJECTS["Forense Digital & Cloud Security"] = {
  basic:{title:"🟢 Lab de Forense de Disco + Cloud Enumeration",desc:"Monte lab de forense: adquira imagem de disco (dd/FTK Imager de VM preparada), analise com Autopsy (timeline, file carving, deleted files, browser history). Em paralelo, configure ambiente cloud vulnerável (flAWS.cloud ou CloudGoat) e faça enumeração: listar buckets S3 públicos, verificar policies IAM, encontrar credenciais expostas. Documente com chain of custody e screenshots.",deliverable:"Relatório de forense de disco com timeline + enumeração de cloud com achados, chain of custody e evidências"},
  advanced:{title:"🔴 Incident Response Simulado: Ataque Cloud + Forense",desc:"Simule incidente completo: configure CloudGoat, execute ataque (escalação IAM, exfiltração S3), depois atue como blue team. Use CloudTrail logs para reconstruir timeline do ataque, identifique IOCs, execute containment (revogar credenciais, isolar recursos). Faça aquisição forense do disco da instância comprometida, analise com Autopsy. Escreva relatório de incident response completo.",deliverable:"Relatório de IR com timeline de ataque via CloudTrail, análise forense de disco, IOCs e recomendações de remediação"}
};

PROJECTS["Seguranca Defensiva, Forense Avancada & Blue Team"] = {
  basic:{title:"🟢 Lab de Memory Forensics + Network Analysis",desc:"Faça dump de memória de VM infectada (com malware de treinamento) usando WinPmem/LiME. Analise com Volatility 3: liste processos (pslist/psscan), encontre processos ocultos, extraia DLLs suspeitas, verifique conexões de rede (netscan). Em paralelo, capture PCAP com tcpdump e analise com Wireshark: identifique C2 communication, DNS tunneling, data exfiltration. Correlacione achados memória + rede.",deliverable:"Relatório com análise de memória (Volatility) + rede (Wireshark), processos maliciosos identificados e correlação de evidências"},
  advanced:{title:"🔴 SOC Analyst Simulation: Threat Hunting + DFIR",desc:"Monte mini-SOC: configure ELK Stack (Elasticsearch + Logstash + Kibana) para ingestão de logs. Injete logs de ataque simulado (Atomic Red Team ou CALDERA). Execute threat hunting: crie hipóteses, busque IOCs nos logs, identifique TTPs (MITRE ATT&CK). Quando encontrar evidência de comprometimento, execute DFIR completo: memory dump + disk image + network capture. Escreva relatório dual: threat hunting report + incident response report.",deliverable:"Mini-SOC com ELK, threat hunting report com TTPs mapeados ao MITRE ATT&CK, e relatório DFIR completo"}
};

PROJECTS["Aprendizado & Preparacao de Carreira"] = {
  basic:{title:"🟢 Plano de Estudo Pessoal de 12 Meses",desc:"Crie roadmap pessoal: auto-avaliação de skills (heatmap), definir 3 objetivos de carreira, mapear gaps, selecionar recursos (cursos, livros, projetos) por trimestre. Use spaced repetition (Anki) para conceitos. Revisão mensal de progresso. Documente publicamente.",deliverable:"Roadmap pessoal de 12 meses com heatmap de skills, recursos por trimestre e sistema de revisão"},
  advanced:{title:"🔴 Portfolio Profissional Completo",desc:"Construa presença profissional completa: GitHub com 5+ projetos showcasing diferentes habilidades, site pessoal (blog técnico com 3+ artigos), LinkedIn otimizado, README de perfil, contribuição a open source (3+ PRs merged), writeup de CTF ou artigo técnico publicado.",deliverable:"GitHub com 5+ projetos, site pessoal com blog, LinkedIn otimizado, contribuições open source e artigo técnico"}
};

PROJECTS["Trilhas, Crescimento & Transicoes"] = {
  basic:{title:"🟢 Mapeamento de Trilha de Carreira",desc:"Pesquise e documente 3 trilhas de carreira em tech que te interessam (ex: backend dev, security engineer, ML engineer). Para cada: perfil do profissional, skills necessários, ferramentas/linguagens, certificações relevantes, faixa salarial (Brasil e exterior), como é o dia a dia, como começar. Entreviste (ou pesquise depoimentos de) 1 profissional de cada trilha.",deliverable:"Documento com 3 trilhas mapeadas, skills, salários, certificações e depoimentos/pesquisas de profissionais"},
  advanced:{title:"🔴 Plano de Transição com Evidências",desc:"Escolha uma transição de carreira (ex: dev → security, dev → ML, academia → indústria). Crie plano detalhado: gap analysis (o que já sabe vs o que precisa), cronograma de 6 meses com milestones, 3 projetos que demonstram a nova skill, certificação target, networking plan. Execute pelo menos o primeiro milestone e documente resultados.",deliverable:"Plano de transição com gap analysis, cronograma, primeiro milestone executado e evidências de progresso"}
};

