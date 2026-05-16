// Final level data: projects and exams per level
const FINAL_LEVEL = {};

FINAL_LEVEL["green"] = {
  project: {
    title: "🏆 Projeto Final do Iniciante: Plataforma Pessoal de Estudos",
    desc: "Construa uma plataforma web completa para gerenciar seus estudos de Engenharia da Computação. O sistema deve integrar conhecimentos de TODAS as 8 áreas do nível Iniciante:\n\n• HTML/CSS/JS: Frontend responsivo com dark mode\n• Python: Backend script que processa dados e gera relatórios\n• Banco de Dados: SQLite com tabelas para matérias, sessões de estudo, notas e metas (modelagem ER completa)\n• SQL: CRUD completo + queries de relatório (horas por matéria, média de notas, streak de dias)\n• Git: Repositório organizado com commits semânticos, branches, README profissional e deploy no GitHub Pages\n• Matemática: Gráficos de progresso (horas estudadas ao longo do tempo, distribuição por área) usando Chart.js\n• Lógica: Algoritmo que sugere qual matéria estudar baseado em prioridade, última data de revisão e nota mais baixa\n• Eletrônica: Seção do site explicando como funciona o hardware que você está usando (CPU, RAM, SSD) com diagramas\n• Física: Timer Pomodoro com a física do som (toque de alarme usando Web Audio API com frequência configurável)\n• SO/Terminal: Script shell (install.sh) que configura o ambiente de desenvolvimento do projeto automaticamente",
    deliverable: "Repositório GitHub com: site funcional no GitHub Pages, banco SQLite com dados de exemplo, script Python de relatório, script shell de setup, README completo com screenshots, diagrama ER, e pelo menos 20 commits organizados"
  }
};

FINAL_LEVEL["yellow"] = {
  project: {
    title: "🏆 Projeto Final do Intermediário: Plataforma de Gestão de Projetos",
    desc: "Construa plataforma de gestão de projetos completa que integra TODAS as 20 áreas do nível Intermediário:\n\n• Estruturas de Dados: Kanban board com drag-and-drop (arrays, filas de prioridade para tarefas)\n• Python OOP: Backend em Python com classes bem estruturadas (SOLID), decorators para auth e logging\n• C/Rust: Módulo CLI em Rust que faz análise de performance do projeto (parse de logs, estatísticas)\n• Java: Microsserviço de notificações em Spring Boot com JPA, conectando via REST/mensageria\n• SO: Entender processos/threads do servidor, configurar limites de memória, monitoring de recursos\n• Arq. Computadores: Otimizar queries e cache pensando em hierarquia de memória e locality\n• Concorrência: WebSocket para atualizações em tempo real entre múltiplos usuários (goroutines ou asyncio)\n• Eng. Software: TDD com 80%+ coverage, CI/CD com GitHub Actions, code review checklist, documentação Diátaxis\n• Teoria/Compiladores: Mini DSL (Domain Specific Language) para filtros avançados de tarefas\n• Matemática: Gráficos de burndown, velocity e previsão de conclusão com regressão linear\n• Sinais e Sistemas: Notificação sonora customizada com síntese de áudio (Web Audio API + FFT)\n• IA & ML: Classificação automática de prioridade de tarefas baseada no texto (NLP simples)\n• Full-Stack: React + TypeScript frontend com Next.js, FastAPI backend, PostgreSQL, JWT auth\n• CG: Gráfico de Gantt interativo renderizado com Canvas/Three.js\n• Mobile: Versão mobile com React Native (visualização e criação de tarefas)\n• DevOps: Docker Compose (app + banco + redis), deploy com CI/CD, health checks, Prometheus metrics\n• Go: Worker service em Go que processa jobs assíncronos (relatórios, exports) via channels\n• Redes: Configuração de rede com sub-redes, firewall rules, HTTPS/TLS, DNS\n• Segurança: Rate limiting, input validation, CORS, headers de segurança, OWASP compliance, audit log\n• Embarcados/IoT: Integração com botão físico (ESP32) que marca tarefa como concluída via MQTT, buzzer para alarme",
    deliverable: "Monorepo GitHub com: frontend React/Next.js, backend FastAPI, microsserviço Spring Boot, worker Go, app mobile React Native, CLI Rust, firmware ESP32, Docker Compose, pipeline CI/CD, testes 80%+, README com arquitetura e 50+ commits"
  }
};

FINAL_LEVEL["orange"] = {
  project: {
    title: "🏆 Projeto Final do Avançado: Plataforma de Análise Genômica com IA",
    desc: "Construa plataforma de análise genômica inteligente que integra TODAS as 11 áreas do nível Avançado:\n\n• Arquitetura: Microsserviços com event-driven architecture, API gateway, circuit breaker\n• Deep Learning: Modelo CNN para classificação de variantes genômicas a partir de imagens de sequenciamento\n• AI Engineering: RAG para pesquisa em papers científicos, agent que sugere análises\n• Bioinformática: Pipeline de análise (FASTA → alinhamento → variantes → anotação) com Biopython\n• Banco Avançado: PostgreSQL para metadata, Redis para cache de resultados, MongoDB para logs de análise\n• Data Engineering: Pipeline Airflow que ingere dados de bancos genômicos públicos, transforma com dbt\n• Blockchain: Hash de resultados em smart contract para garantir integridade e auditabilidade científica\n• Cloud & K8s: Deploy em Kubernetes com Helm charts, HPA para jobs pesados, GitOps com ArgoCD\n• DevSecOps: Pipeline de segurança (SAST, container scan), secrets management, RBAC\n• Ethical Hacking: Pentest da plataforma, relatório de vulnerabilidades, hardening implementado\n• Robótica/IoT: Integração com sequenciador simulado (ESP32) que envia dados de corrida via MQTT",
    deliverable: "Monorepo com 5+ microsserviços, pipeline de bioinformática, modelo de DL, RAG system, deploy K8s, smart contract, security report, integração IoT, documentação completa e vídeo demo de 10 minutos"
  }
};

FINAL_LEVEL["red"] = {
  project: {
    title: "🏆 Projeto Final do Muito Avançado: Plataforma Forense com IA Distribuída",
    desc: "Construa plataforma de investigação forense digital potencializada por IA que integra TODAS as 4 áreas:\n\n• Sistemas Distribuídos: Cluster de 3+ nós com consenso Raft para armazenar evidências de forma imutável e consistente. Consistent hashing para distribuir artifacts entre nós. Tolerância a falhas: perder 1 nó não perde dados.\n\n• MLOps & Produção: Pipeline ML que classifica automaticamente artefatos (malware vs benign, tipo de ataque). Model registry com MLflow, monitoramento de drift (artefatos mudam ao longo do tempo), feature store para IOCs extraídos. A/B testing entre modelos de classificação.\n\n• Pesquisa & Fronteira: Modelo multimodal que analisa tanto texto (logs) quanto imagens (screenshots de RAM dumps) para detectar anomalias. RAG com papers de segurança para assistente de pesquisa do investigador. Quantum-resistant hashing para chain of custody futura.\n\n• Ethical Hacking & Forense: Ingestão de evidências (disk images, memory dumps, PCAPs, logs). Análise automatizada: Volatility para memória, file carving para disco, timeline unificada. Dashboard forense com visualização de kill chain. Relatório automatizado com chain of custody.",
    deliverable: "Sistema distribuído de 3+ nós com pipeline forense automatizado, classificador ML de artefatos com MLflow, assistente RAG, análise de disco/memória/rede, dashboard de kill chain, relatório auto-gerado e documentação completa"
  }
};

FINAL_LEVEL["blue"] = {
  project: {
    title: "🏆 Projeto Final da Academia: Mini Paper de Pesquisa Original",
    desc: "Conduza pesquisa original que integra TODAS as 5 áreas do nível Academia:\n\n• Escrita e Metodologia: Paper completo em LaTeX seguindo template ACM/IEEE, com revisão sistemática de 15+ papers, metodologia rigorosa e BibTeX\n• Iniciação Científica: Defina pergunta de pesquisa original, hipóteses e design experimental replicável\n• Mestrado: Nível de profundidade e contribuição equivalente a capítulo de dissertação (resultados + discussão)\n• Doutorado: Identifique gap real na literatura, proponha abordagem nova e discuta limitações e trabalhos futuros\n• Ferramentas: Pipeline reproduzível completo (Git + Docker + DVC + Jupyter + Make) para que qualquer pessoa replique\n\nTema sugerido: aplique técnica de ML/IA a problema de domínio específico (bioinformática, segurança, IoT) com dataset real.",
    deliverable: "Paper de 8+ páginas em LaTeX (ACM template), código reproduzível no GitHub com Docker, dataset documentado, resultados com gráficos e análise estatística, e apresentação de 15 minutos"
  }
};

FINAL_LEVEL["purple"] = {
  project: {
    title: "🏆 Projeto Final de Carreira: Plano de Carreira de 5 Anos + Contribuição à Comunidade",
    desc: "Construa visão de carreira integrada que exercita TODAS as 6 áreas do nível Carreira:\n\n• Desenvolvimento de Carreira: Auto-avaliação de skills (T-shape), plano de estudo de 12 meses, roadmap de 5 anos com milestones\n• Liderança & Gestão: Defina métricas de sucesso (DORA-inspired) para seus projetos, escreva tech spec de algo que quer construir\n• Liderança Técnica: Escreva 3 ADRs para decisões técnicas de projetos anteriores, crie runbook para seu projeto mais complexo\n• Produto & Estratégia: Faça discovery de uma ideia: pesquisa com 5 usuários, wireframes, North Star Metric, priorização RICE\n• Gestão de Pessoas: Crie framework de feedback pessoal, documente 3 mentorias dadas/recebidas, plano de onboarding para projeto OSS\n• Estratégia & Empreendedorismo: Business Model Canvas para sua ideia, análise competitiva, pitch deck de 10 slides",
    deliverable: "Documento de visão de carreira com T-shape, roadmap 5 anos, 3 ADRs, tech spec, discovery de produto, pitch deck, framework de feedback e contribuição open source documentada"
  }
};

QUIZZES["Banco de Dados Introducao"] = [
{q:"O que é uma chave primária (PK)?",o:["Chave de criptografia","Identificador único de cada registro na tabela","Qualquer coluna","Senha do banco"],a:1},
{q:"O que é uma chave estrangeira (FK)?",o:["Coluna que referencia a PK de outra tabela, criando relacionamento","Chave temporária","Chave duplicada","Chave de outro país"],a:0},
{q:"Qual comando cria uma tabela em SQL?",o:["CREATE TABLE nome (...)","BUILD TABLE","MAKE TABLE","NEW TABLE"],a:0},
{q:"O que INNER JOIN faz?",o:["Deleta linhas","Retorna todas as linhas","Retorna sem correspondência","Retorna apenas linhas com correspondência em AMBAS as tabelas"],a:3},
{q:"O que normalização (1NF, 2NF, 3NF) busca?",o:["Reduzir redundância e dependências parciais/transitivas","Comprimir dados","Aumentar tabelas","Performance"],a:0},
{q:"Qual é a diferença entre WHERE e HAVING?",o:["WHERE é para números","HAVING vem primeiro","São iguais","WHERE filtra linhas; HAVING filtra grupos (após GROUP BY)"],a:3},
{q:"Qual é a diferença entre banco relacional e NoSQL?",o:["NoSQL é sempre melhor","Não há diferença","Relacional: tabelas com schema fixo e SQL; NoSQL: flexível (documentos, grafos, key-value)","Relacional não usa SQL"],a:2},
{q:"O que GROUP BY faz?",o:["Limita resultados","Ordena resultados","Junta tabelas","Agrupa linhas com valores iguais para usar funções agregadas (COUNT, SUM, AVG)"],a:3},
{q:"O que um diagrama ER representa?",o:["Interface do usuário","Entidades, atributos e relacionamentos do banco de dados","Rede de computadores","Fluxo de programa"],a:1},
{q:"O que uma CTE (WITH ... AS) faz?",o:["Cria view","Define subconsulta temporária nomeada para usar na query principal","Cria tabela permanente","Cria índice"],a:1},
{q:"O que LEFT JOIN retorna que INNER JOIN não retorna?",o:["Linhas da tabela da esquerda mesmo sem correspondência (com NULL)","Linhas da direita","Nada a mais","Linhas duplicadas"],a:0},
{q:"O que 1NF exige?",o:["Todas colunas numéricas","Sem chaves estrangeiras","Valores atômicos (sem listas/arrays dentro de uma célula)","Sem chaves"],a:2},
{q:"O que DISTINCT faz?",o:["Conta únicos","Filtra nulos","Ordena","Remove valores duplicados do resultado"],a:3},
{q:"O que é uma tabela ponte (junction table)?",o:["Tabela temporária","Tabela de backup","View materializada","Tabela intermediária que resolve relacionamento N:N"],a:3},
{q:"O que LIMIT 10 OFFSET 20 faz?",o:["Pula as primeiras 20 linhas e retorna as próximas 10","Deleta 10 linhas","Retorna 30 linhas","Retorna 20 linhas"],a:0}
];

QUIZZES["Eletronica & Hardware"] = [
{q:"O que a Lei de Ohm afirma?",o:["E = mc²","V = R × I","F = ma","P = V × I"],a:1},
{q:"Qual é a saída de uma porta AND com entradas 1 e 0?",o:["Indefinido","1 (um)","2 (dois)","0 (zero)"],a:3},
{q:"O que um transistor BJT configurado como chave faz?",o:["Gera ondas","Liga/desliga corrente baseado em sinal na base","Armazena dados","Amplifica sempre"],a:1},
{q:"Em um circuito em série com R1=100Ω e R2=200Ω, qual é a resistência total?",o:["300Ω","200Ω","100Ω","150Ω"],a:0},
{q:"O que um flip-flop D faz?",o:["Multiplica sinais","Armazena 1 bit: copia entrada D para saída Q no pulso de clock","Soma dois bits","Oscila"],a:1},
{q:"O que um ADC (Conversor Analógico-Digital) faz?",o:["Filtra ruído","Converte digital para analógico","Amplifica sinais","Converte sinal analógico contínuo em valores digitais discretos"],a:3},
{q:"O que a KVL (Lei das Malhas de Kirchhoff) afirma?",o:["Correntes se somam","A soma das tensões em uma malha fechada é zero","Potência é constante","Resistências em paralelo se somam"],a:1},
{q:"O que álgebra booleana simplifica?",o:["Código fonte","Banco de dados","Expressões lógicas de circuitos digitais","Equações matemáticas"],a:2},
{q:"O que um filtro passa-baixa faz?",o:["Bloqueia tudo","Passa altas frequências","Permite passagem de baixas frequências e atenua altas","Amplifica tudo"],a:2},
{q:"O que um capacitor faz?",o:["Amplifica tensão","Resiste à corrente","Gera calor","Armazena energia em campo elétrico (bloqueia DC, passa AC)"],a:3},
{q:"O que uma máquina de estados finitos (FSM) modela?",o:["Circuitos analógicos","Banco de dados","Sistema com estados discretos e transições baseadas em entradas","Redes neurais"],a:2},
{q:"Por que MOSFETs são preferidos em circuitos digitais modernos?",o:["São mais fáceis de fabricar","São maiores","Consomem menos energia (controlados por tensão) e são mais rápidos","São mais baratos"],a:2},
{q:"O que uma protoboard permite?",o:["Soldar permanentemente","Programar Arduino","Medir frequência","Montar circuitos temporários sem solda para prototipagem"],a:3},
{q:"O que XOR retorna quando ambas entradas são iguais?",o:["Indefinido","Erro","0 (zero)","1 (um)"],a:2},
{q:"O que um regulador de tensão faz?",o:["Aumenta tensão","Armazena tensão","Inverte tensão","Mantém tensão de saída constante independente de variações na entrada"],a:3}
];

QUIZZES["Fisica & Quimica p/ Engenharia"] = [
{q:"Se F = 10N e m = 2kg, qual é a aceleração?",o:["2 m/s²","20 m/s²","10 m/s²","5 m/s²"],a:3},
{q:"O que o teorema trabalho-energia afirma?",o:["Trabalho é potência","Trabalho = Força","Energia nunca se conserva","O trabalho resultante é igual à variação da energia cinética"],a:3},
{q:"O que a Lei de Coulomb calcula?",o:["Potência","Força entre duas cargas elétricas","Corrente em um circuito","Campo magnético"],a:1},
{q:"O que a Lei de Faraday da indução eletromagnética afirma?",o:["Variação de fluxo magnético induz uma FEM (tensão)","Corrente cria resistência","Cargas se repelem","Campo elétrico é constante"],a:0},
{q:"O que é o efeito Doppler?",o:["Interferência","Reflexão total","Mudança de cor","Mudança na frequência percebida quando fonte e observador se movem relativamente"],a:3},
{q:"Qual material é a base dos chips de computador?",o:["Alumínio","Ouro","Cobre","Silício"],a:3},
{q:"Em uma colisão elástica, o que se conserva?",o:["Só energia","Nada se conserva","Só momento","Momento E energia cinética"],a:3},
{q:"Em um circuito em série, o que é constante?",o:["Corrente","Potência","Resistência","Tensão"],a:0},
{q:"O que a Primeira Lei da Termodinâmica afirma?",o:["Energia não pode ser criada nem destruída, só transformada","Zero absoluto é impossível","Calor flui do frio para o quente","Entropia sempre aumenta"],a:0},
{q:"O que balancear uma equação química garante?",o:["Mesma quantidade de átomos de cada elemento dos dois lados","Menos resíduos","Reação mais rápida","Mais energia"],a:0},
{q:"O que torque mede?",o:["Força linear","Velocidade angular","Momento de inércia","Tendência de uma força causar rotação (τ = r × F)"],a:3},
{q:"O que a dualidade onda-partícula significa?",o:["Partículas são ondas sonoras","Ondas não existem","No nível quântico, partículas se comportam como ondas e vice-versa","Ondas são partículas"],a:2},
{q:"O que um catalisador faz?",o:["Reduz a energia de ativação sem ser consumido na reação","Aumenta a temperatura","Cria novos elementos","Adiciona energia"],a:0},
{q:"Qual é a frequência da rede elétrica no Brasil?",o:["50 Hz","220 Hz","60 Hz","120 Hz"],a:2},
{q:"Qual fenômeno explica por que o céu é azul?",o:["Espalhamento Rayleigh (luz azul se espalha mais que vermelha)","Difração","Refração","Reflexão"],a:0}
];

QUIZZES["Fundamentos de Computacao"] = [
{q:"Qual componente executa instruções e realiza cálculos em um computador?",o:["SSD","RAM","GPU","CPU"],a:3},
{q:"Por que 0.1 + 0.2 não é exatamente 0.3 em computadores?",o:["Limitação da representação em ponto flutuante (IEEE 754)","Bug do processador","Erro do sistema operacional","Problema de cache"],a:0},
{q:"Qual é a ordem correta da hierarquia de memória, do mais rápido ao mais lento?",o:["RAM > Cache > Registradores > SSD","Cache > Registradores > SSD > RAM","Registradores > Cache > RAM > SSD","SSD > RAM > Cache > Registradores"],a:2},
{q:"Qual é o primeiro passo do pensamento computacional ao resolver um problema complexo?",o:["Otimizar a solução","Decomposição: dividir em partes menores","Escolher uma linguagem","Escrever código"],a:1},
{q:"O que é abstração no contexto do pensamento computacional?",o:["Copiar uma solução existente","Programar sem interface gráfica","Usar somente variáveis abstratas","Focar nos detalhes relevantes e ignorar os irrelevantes"],a:3},
{q:"Se você precisa encontrar um nome em uma lista telefônica ordenada, qual abordagem é mais eficiente?",o:["Procurar aleatoriamente","Procurar de trás para frente","Procurar do início ao fim","Abrir no meio e eliminar metade a cada vez"],a:3},
{q:"O que o DNS faz?",o:["Tipo de firewall","Protocolo de transferência de arquivos","Traduz nomes de domínio em endereços IP","Servidor de email"],a:2},
{q:"Qual protocolo garante transmissão confiável de dados pela internet?",o:["HTTP","UDP","TCP","FTP"],a:2},
{q:"Qual porta é padrão para HTTPS?",o:["Porta 21","Porta 22","Porta 80","443"],a:3},
{q:"O que acontece na fase 'Fetch' do ciclo Fetch-Decode-Execute?",o:["O resultado é armazenado","A instrução é executada","A instrução é buscada na memória","A instrução é traduzida"],a:2},
{q:"O que um fluxograma usa para representar uma decisão (condicional)?",o:["Retângulo","Círculo","Paralelogramo","Losango"],a:3},
{q:"O que phishing é?",o:["Protocolo de rede","Técnica de compressão","Tentativa de enganar usuário para revelar dados por meio de links/sites falsos","Ataque DDoS"],a:2},
{q:"Quantos bytes há em 1 Kilobyte (em computação)?",o:["1024","1000","2048","512"],a:0},
{q:"Qual é a principal diferença entre compilação e interpretação?",o:["Compilação é mais lenta em runtime","Compilação funciona só em Python","Interpretação gera código de máquina","Compilação traduz todo o código antes de executar; interpretação traduz linha a linha"],a:3},
{q:"O que o HTTPS adiciona em relação ao HTTP?",o:["Velocidade","Criptografia (TLS/SSL)","Mais servidores","Compressão de dados"],a:1}
];

QUIZZES["Matematica Fundamental"] = [
{q:"Qual é o resultado de log₂(64)?",o:["Resultado: 8","Resultado: 6","Resultado: 4","Resultado: 5"],a:1},
{q:"O que a Lei de De Morgan afirma sobre ¬(A ∧ B)?",o:["¬A ∧ ¬B","A ∨ B","A ∧ ¬B","¬A ∨ ¬B"],a:3},
{q:"Se jogo uma moeda justa, qual a probabilidade de sair cara?",o:["Valor: 1","0.5","0.25","Valor: 0"],a:1},
{q:"O que a derivada de f(x) representa geometricamente?",o:["Valor máximo","Área sob a curva","Intersecção com eixo x","Inclinação da reta tangente ao gráfico no ponto"],a:3},
{q:"O que uma série de Taylor faz?",o:["Soma finita","Aproxima uma função por polinômio infinito em torno de um ponto","Deriva funções","Integra numericamente"],a:1},
{q:"Se A é 2×3 e B é 3×4, qual é a dimensão de A·B?",o:["2×4","4×2","3×3","2×3"],a:0},
{q:"Qual é a derivada de x³?",o:["3x²","3x (linear)","x² (quadrado)","x⁴/4"],a:0},
{q:"O que uma prova por indução matemática requer?",o:["Só caso base","Contra-exemplo","Prova por contradição","Caso base + passo indutivo (se vale para n, vale para n+1)"],a:3},
{q:"Na distribuição Normal, aproximadamente que % dos dados estão dentro de 1 desvio padrão da média?",o:["50%","68%","95%","99.7%"],a:1},
{q:"O que o Teorema Fundamental do Cálculo conecta?",o:["Derivadas e integrais","Limites e séries","Matrizes e vetores","Probabilidade e estatística"],a:0},
{q:"Qual a solução geral de dy/dx = ky?",o:["y = kx","y = k/x","y = sin(kx)","y = Ce^(kx)"],a:3},
{q:"O que o determinante zero de uma matriz indica?",o:["Todos elementos são zero","Matriz NÃO é invertível (singular)","Matriz é invertível","Matriz é simétrica"],a:1},
{q:"O que é C(5,2) (combinação)?",o:["Valor: 20","Valor: 10","Valor: 25","Valor: 5"],a:1},
{q:"Para que serve a regra da cadeia em Cálculo?",o:["Derivar composição de funções: [f(g(x))]' = f'(g(x))·g'(x)","Integrar","Derivar somas","Calcular limites"],a:0},
{q:"O que correlação mede?",o:["Causalidade","Variância conjunta","Força e direção da relação linear entre duas variáveis","Média de duas variáveis"],a:2}
];

QUIZZES["Logica de Programacao com Python"] = [
{q:"Qual é o resultado de 7 // 2 em Python?",o:["Resultado: 4","Resultado: 3","3.5","3.0"],a:1},
{q:"Strings em Python são mutáveis ou imutáveis?",o:["Depende do conteúdo","Mutáveis","Imutáveis","Depende do tamanho"],a:2},
{q:"Qual é a saída de: for i in range(3): print(i)?",o:["0 1 2","1 2 3","1 2","0 1 2 3"],a:0},
{q:"Qual é a diferença entre lista e tupla em Python?",o:["Lista é mutável; tupla é imutável","Tupla é mais rápida sempre","Lista usa () e tupla usa []","Não há diferença"],a:0},
{q:"O que *args faz em uma função?",o:["Lista de strings","Argumentos nomeados","Aceita número variável de argumentos posicionais como tupla","Argumentos obrigatórios"],a:2},
{q:"Qual é a forma recomendada de abrir um arquivo em Python?",o:["file('a.txt')","with open('a.txt') as f:","f = open('a.txt')","open('a.txt', lock=True)"],a:1},
{q:"O que f-strings fazem em Python?",o:["Formatar floats","Filtrar strings","Criar arquivos","Permitir inserir expressões dentro de strings com {}"],a:3},
{q:"O que enumerate() faz em um for loop?",o:["Conta os elementos","Filtra elementos","Ordena a lista","Retorna índice e valor juntos"],a:3},
{q:"Qual é a complexidade de verificar se um elemento está em um set?",o:["O(n)","O(log n)","O(n²)","O(1) em média"],a:3},
{q:"O que um decorator (@) faz?",o:["Declara classe","Cria variável global","Comenta código","Envolve uma função em outra, adicionando comportamento"],a:3},
{q:"O que o bloco 'finally' faz em try/except?",o:["Executa só se houver erro","Executa SEMPRE, com ou sem erro","Substitui except","Executa só sem erro"],a:1},
{q:"O que um CRUD faz?",o:["Testa performance","Conecta APIs","Create, Read, Update, Delete — operações básicas de dados","Compila código"],a:2},
{q:"O que list comprehension faz?",o:["Deleta elementos","Cria lista de forma concisa: [expr for x in iterable]","Comprime lista","Ordena uma lista"],a:1},
{q:"O que 'break' faz dentro de um loop?",o:["Pausa temporariamente","Pula a iteração atual","Encerra o loop imediatamente","Reinicia o loop"],a:2},
{q:"O que uma função sem return explícito retorna?",o:["Error","Retorna 0","None","Retorna ''"],a:2}
];

QUIZZES["Sistemas Operacionais & Terminal"] = [
{q:"Qual é a principal função de um sistema operacional?",o:["Editar documentos","Navegar na internet","Gerenciar hardware e fornecer interface para programas","Compilar código"],a:2},
{q:"O que é o kernel de um sistema operacional?",o:["A interface gráfica","O navegador padrão","O sistema de arquivos","O núcleo que gerencia hardware, processos e memória"],a:3},
{q:"Qual é a diferença entre um processo e uma thread?",o:["Thread é mais lento","Processo não usa CPU","São a mesma coisa","Processo tem espaço de memória próprio; threads compartilham memória do processo"],a:3},
{q:"O que é memória virtual?",o:["Técnica que usa disco como extensão da RAM, dando ilusão de mais memória","RAM física extra","Memória na nuvem","Cache do processador"],a:0},
{q:"Qual comando lista arquivos e diretórios no Linux?",o:["ls","show","list","dir"],a:0},
{q:"O que o comando 'chmod 755 arquivo' faz?",o:["Move o arquivo","Comprime o arquivo","Define permissões: dono rwx, grupo rx, outros rx","Deleta o arquivo"],a:2},
{q:"O que o pipe (|) faz no terminal?",o:["Executa em background","Redireciona a saída de um comando para a entrada de outro","Cria um arquivo","Comenta uma linha"],a:1},
{q:"Qual diretório contém os arquivos de configuração do sistema no Linux?",o:["/etc","/var","/home","/tmp"],a:0},
{q:"O que acontece primeiro quando você liga um computador?",o:["O desktop é exibido","O BIOS/UEFI executa o POST (Power-On Self Test)","O bootloader aparece","O kernel carrega"],a:1},
{q:"O que o '>' faz no terminal? Ex: echo 'oi' > arquivo.txt",o:["Cria um pipe","Compara dois arquivos","Redireciona saída para um arquivo (sobrescrevendo)","Executa em background"],a:2},
{q:"O que é multitarefa preemptiva?",o:["Só um programa roda de cada vez","Multitarefa sem prioridades","O SO pode interromper um processo para dar CPU a outro","O processo decide quando liberar a CPU"],a:2},
{q:"Como instalar um pacote no Ubuntu/Debian via terminal?",o:["yum install pacote","sudo apt install pacote","pip install pacote","brew install pacote"],a:1},
{q:"O que é o PATH no Linux?",o:["Variável de ambiente que lista diretórios onde o sistema busca executáveis","Tipo de permissão","Caminho para a pasta home","Nome do disco"],a:0},
{q:"O que é um cron job?",o:["Processo em tempo real","Backup manual","Tipo de permissão","Tarefa agendada que executa automaticamente em horários definidos"],a:3},
{q:"Qual tipo de kernel o Linux usa?",o:["Híbrido","Monolítico","Nanokernel","Microkernel"],a:1}
];

QUIZZES["Web, Git & Ferramentas"] = [
{q:"Qual atributo HTML é essencial para acessibilidade em imagens?",o:["class","title","src","alt"],a:3},
{q:"O que especificidade determina em CSS?",o:["Velocidade","Cor de fundo","Qual regra CSS tem prioridade quando múltiplas se aplicam","Tamanho da fonte"],a:2},
{q:"Qual é a diferença entre let e const em JavaScript?",o:["let é deprecated","const é mais rápido","Não há diferença","let pode ser reatribuído; const não"],a:3},
{q:"O que 'git stash' faz?",o:["Deleta mudanças","Reverte commit","Salva mudanças temporariamente sem fazer commit","Cria branch"],a:2},
{q:"O que tmux permite fazer?",o:["Gerenciar pacotes","Compilar C","Editar código","Gerenciar múltiplas sessões de terminal, dividir tela, manter sessões ativas"],a:3},
{q:"Qual é a diferença entre <article> e <section> em HTML?",o:["São iguais","Article é para navegação","Section é para artigos","Article é conteúdo independente; section é agrupamento temático"],a:3},
{q:"No Box Model CSS, qual é a ordem de fora para dentro?",o:["Margin > Border > Padding > Content","Content > Padding > Border > Margin","Border > Margin > Content > Padding","Padding > Content > Border > Margin"],a:0},
{q:"O que async/await faz em JavaScript?",o:["Acelera o código","Paralelismo real","Bloqueia a execução","Permite escrever código assíncrono de forma síncrona (baseado em Promises)"],a:3},
{q:"Qual é a diferença entre git merge e git rebase?",o:["Merge cria commit de merge; rebase reescreve histórico linearmente","São iguais","Rebase é mais seguro","Merge deleta commits"],a:0},
{q:"O que 'curl' faz?",o:["Compilar código","Comprimir arquivos","Monitorar rede","Transferir dados via URL (fazer requisições HTTP pelo terminal)"],a:3},
{q:"O que uma media query CSS faz?",o:["Carrega mídia","Aplica estilos condicionalmente baseados em características do dispositivo","Consulta banco de dados","Otimiza imagens"],a:1},
{q:"O que é uma closure em JavaScript?",o:["Classe","Função fechada","Loop","Função que 'lembra' variáveis do escopo onde foi criada"],a:3},
{q:"O que .gitignore faz?",o:["Ignora commits","Remove arquivos","Ignora erros","Lista arquivos/pastas que o Git NÃO deve rastrear"],a:3},
{q:"O que são dotfiles?",o:["Arquivos ocultos do Windows","Extensões de arquivo","Arquivos de configuração que começam com ponto (.bashrc, .gitconfig)","Arquivos corrompidos"],a:2},
{q:"O que GitHub Pages hospeda?",o:["Containers Docker","Sites estáticos (HTML/CSS/JS) gratuitamente","APIs","Bancos de dados"],a:1}
];

QUIZZES["Estruturas de Dados & Algoritmos"] = [
{q:"Qual é a complexidade de busca em uma tabela hash no caso médio?",o:["O(log n)","O(n)","O(n²)","O(1)"],a:3},
{q:"Qual estrutura usa LIFO (Last In, First Out)?",o:["Fila","Pilha","Árvore","Lista Ligada"],a:1},
{q:"O que Big O mede?",o:["Número de linhas de código","Tempo exato","Memória usada","Comportamento assintótico do algoritmo conforme input cresce"],a:3},
{q:"Qual algoritmo de ordenação tem O(n log n) no pior caso e é estável?",o:["Bubble Sort","Merge Sort","QuickSort","Selection Sort"],a:1},
{q:"O que uma Trie é otimizada para?",o:["Grafos","Busca de prefixos em strings (autocomplete)","Busca numérica","Ordenação"],a:1},
{q:"Em uma BST (árvore binária de busca), onde está o menor elemento?",o:["Na raiz","No nó mais à esquerda","Em qualquer lugar","No nó mais à direita"],a:1},
{q:"Qual é a diferença entre BFS e DFS em grafos?",o:["BFS explora nível a nível (fila); DFS vai fundo primeiro (pilha)","DFS usa mais memória","BFS é mais lento","São iguais"],a:0},
{q:"O que programação dinâmica faz?",o:["Resolve subproblemas sobrepostos guardando resultados (memoização)","Programa em tempo real","Usa ponteiros","Aloca memória dinamicamente"],a:0},
{q:"Qual é a complexidade do QuickSort no caso médio?",o:["O(n log n)","O(n)","O(log n)","O(n²)"],a:0},
{q:"O que uma colisão em hash table significa?",o:["Overflow de memória","Tabela corrompida","Duas chaves mapeiam para o mesmo índice","Erro de compilação"],a:2},
{q:"O que algoritmos gulosos (greedy) fazem?",o:["Ordenam primeiro","Testam todas possibilidades","Usam recursão","Escolhem o melhor localmente em cada passo (sem voltar atrás)"],a:3},
{q:"Qual é a complexidade de inserção no início de uma Linked List?",o:["O(n²)","O(1)","O(log n)","O(n)"],a:1},
{q:"O que Bit Manipulation permite fazer eficientemente?",o:["Buscar strings","Percorrer grafos","Ordenar","Operações como verificar paridade, flags e otimizações com operadores &, |, ^, ~"],a:3},
{q:"Qual estrutura é usada para implementar BFS?",o:["Hash Map","Fila (Queue)","Árvore","Pilha"],a:1},
{q:"O que o Two Pointers pattern resolve?",o:["Problemas de hash","Problemas em arrays/strings ordenados com dois índices convergindo","Problemas de grafos","Problemas de árvore"],a:1}
];

QUIZZES["Python Intermediario & OOP"] = [
{q:"O que encapsulamento em OOP significa?",o:["Criar objetos","Esconder detalhes internos e expor interface pública","Sobrescrever métodos","Herdar de outra classe"],a:1},
{q:"O que polimorfismo permite?",o:["Herdar múltiplas classes","Criar variáveis","Objetos de tipos diferentes responderem ao mesmo método de formas diferentes","Encapsular dados"],a:2},
{q:"O que é um generator em Python?",o:["Tipo de decorator","Classe que gera objetos","Loop infinito","Função que usa yield para produzir valores sob demanda (lazy evaluation)"],a:3},
{q:"O que um context manager (with) garante?",o:["Tipo de classe","Segurança de thread","Performance","Setup e cleanup automáticos (ex: fechar arquivo mesmo com exceção)"],a:3},
{q:"O que @property faz em uma classe Python?",o:["Importa módulos","Cria atributo estático","Decora construtores","Transforma método em atributo acessível com getter/setter"],a:3},
{q:"Qual é a diferença entre __str__ e __repr__?",o:["São iguais","__str__ retorna int","__repr__ é deprecated","__str__ é para usuários (legível); __repr__ é para devs (reproduzível)"],a:3},
{q:"O que dataclasses fazem no Python 3.7+?",o:["Geram __init__, __repr__, __eq__ automaticamente para classes de dados","Serializam JSON","Validam tipos","Criam bancos de dados"],a:0},
{q:"O que async/await permite em Python?",o:["Paralelismo real","Compilação","Multi-threading","Programação assíncrona: executar I/O sem bloquear a thread"],a:3},
{q:"O que o padrão SOLID representa?",o:["Tipo de teste","5 princípios de design OOP (Single Responsibility, Open/Closed, etc.)","Framework Python","Padrão de banco"],a:1},
{q:"O que é duck typing em Python?",o:["Tipo de exceção","Nome de biblioteca","Tipagem estrita","Se parece com pato e faz quack, é pato — tipo importa menos que comportamento"],a:3},
{q:"O que __slots__ faz em uma classe?",o:["Limita herança","Cria slots de tempo","Restringe atributos permitidos, economizando memória","Define métodos"],a:2},
{q:"O que type hints com Protocol (typing) permitem?",o:["Compilar Python","Forçar tipos","Criar protocolos de rede","Definir interfaces estruturais (structural subtyping)"],a:3},
{q:"O que metaclasses fazem?",o:["Classes que criam classes (controlam criação de classes)","Criam instâncias","Herdam de object","São deprecated"],a:0},
{q:"O que list vs generator economiza?",o:["Disco","Tempo","Memória: generator produz valores um a um sem armazenar todos","CPU"],a:2},
{q:"O que o padrão Observer implementa?",o:["Singleton","Fila de prioridade","Objetos se inscrevem para receber notificações de mudanças em outro objeto","Factory"],a:2}
];

QUIZZES["C, C++ & Rust"] = [
{q:"O que um ponteiro em C armazena?",o:["O tamanho da variável","O tipo da variável","Um valor inteiro","O endereço de memória de outra variável"],a:3},
{q:"O que malloc() faz em C?",o:["Cria variável na stack","Aloca memória dinamicamente no heap e retorna ponteiro","Copia memória","Libera memória"],a:1},
{q:"O que acontece se você não chamar free() após malloc()?",o:["Memory leak: memória alocada nunca é devolvida ao sistema","Crash imediato","Nada","Compilador avisa"],a:0},
{q:"O que é undefined behavior em C?",o:["Warning","Erro de compilação","Comportamento que o padrão não define — pode fazer qualquer coisa","Bug corrigível"],a:2},
{q:"O que RAII significa em C++?",o:["Resource Acquisition Is Initialization — recursos ligados ao ciclo de vida do objeto","Tipo de loop","Framework de teste","Tipo de ponteiro"],a:0},
{q:"O que std::move faz em C++?",o:["Move arquivo","Deleta objeto","Transfere ownership de recurso sem copiar (move semantics)","Move ponteiro"],a:2},
{q:"O que templates fazem em C++?",o:["Alocam memória","Criam HTML","Permitem código genérico que funciona com qualquer tipo (generics)","Criam threads"],a:2},
{q:"O que o borrow checker do Rust garante?",o:["Formatação de código","Performance","Segurança de memória em tempo de compilação sem garbage collector","Testes automáticos"],a:2},
{q:"Qual é a diferença entre & (referência) e &mut em Rust?",o:["&mut é deprecated","& é ponteiro; &mut é referência","& é empréstimo imutável; &mut é empréstimo mutável (apenas 1 por vez)","São iguais"],a:2},
{q:"O que ownership em Rust significa?",o:["Tipo de variável","Licença de software","Cada valor tem um único dono; quando dono sai de escopo, valor é liberado","Permissão de arquivo"],a:2},
{q:"O que struct faz tanto em C quanto em C++?",o:["Agrupa variáveis de tipos diferentes em um tipo composto","Aloca memória","Cria função","Cria loop"],a:0},
{q:"O que a palavra-chave virtual faz em C++?",o:["Permite que método seja sobrescrito em classes derivadas (polimorfismo)","Declara interface","Cria memória virtual","Cria thread virtual"],a:0},
{q:"O que cargo é no ecossistema Rust?",o:["Gerenciador de pacotes e build system","Debugger","Compilador","IDE"],a:0},
{q:"O que valgrind detecta em programas C/C++?",o:["Erros lógicos","Performance","Erros de sintaxe","Memory leaks e acessos inválidos à memória"],a:3},
{q:"O que enum em Rust pode conter que enum em C não pode?",o:["Métodos","Dados associados a cada variante (tagged unions)","Nada diferente","Strings"],a:1}
];

QUIZZES["Sistemas Operacionais (Disciplina)"] = [
{q:"O que é um deadlock?",o:["Crash do SO","Situação onde processos esperam recursos que nunca serão liberados (espera circular)","Processo morto","Overflow de memória"],a:1},
{q:"Qual é a diferença entre paginação e segmentação?",o:["Paginação é mais lenta","Paginação divide em blocos fixos; segmentação em blocos de tamanho variável por lógica","São iguais","Segmentação não existe mais"],a:1},
{q:"O que é page fault?",o:["Bug no programa","Processo acessa página que não está na RAM e SO precisa buscá-la do disco","Corrupção de disco","Erro fatal"],a:1},
{q:"Qual algoritmo de substituição de página é ótimo mas impossível na prática?",o:["FIFO","LRU","OPT (Bélády) — substitui a página que será usada mais tarde","Clock"],a:2},
{q:"O que race condition é?",o:["Otimização","Competição de processos","Resultado depende da ordem de execução de threads concorrentes (não determinístico)","Corrida de CPUs"],a:2},
{q:"O que um semáforo faz?",o:["Conta processos","Mede performance","Sinaliza erros","Controla acesso a recursos compartilhados com contador (wait/signal)"],a:3},
{q:"O que é thrashing?",o:["Fragmentação","Crash de disco","SO gasta mais tempo trocando páginas (page faults) do que executando processos","Overhead de CPU"],a:2},
{q:"O que journaling em file systems garante?",o:["Velocidade","Compressão","Criptografia","Consistência: registra operações antes de executar (recovery após crash)"],a:3},
{q:"O que é fragmentação interna?",o:["Arquivos fragmentados","Espaço desperdiçado dentro de blocos alocados maiores que o necessário","Disco quebrado","Memória corrompida"],a:1},
{q:"Qual algoritmo de escalonamento é o mais simples?",o:["FCFS (First Come, First Served)","Round Robin","Priority","SJF"],a:0},
{q:"O que é um mutex?",o:["Lock de exclusão mútua: só um thread por vez acessa a seção crítica","Tipo de processo","Tipo de memória","Algoritmo de busca"],a:0},
{q:"O que starvation significa em escalonamento?",o:["Falta de memória","Deadlock","Processo nunca recebe CPU porque outros têm sempre mais prioridade","Crash"],a:2},
{q:"O que é o algoritmo do banqueiro (Banker's)?",o:["Paginação","Evita deadlock verificando se estado é seguro antes de alocar recurso","Transferência bancária","Escalonamento"],a:1},
{q:"Qual é a diferença entre hard link e soft link?",o:["Hard link é mais lento","Hard link aponta para inode; soft link aponta para caminho (pode quebrar)","São iguais","Soft link ocupa mais espaço"],a:1},
{q:"O que o working set model estima?",o:["Número de processos","Tamanho da cache","Conjunto de páginas que um processo usa ativamente (para evitar thrashing)","Tamanho do disco"],a:2}
];

QUIZZES["Concorrencia e Paralelismo"] = [
{q:"Qual é a diferença entre concorrência e paralelismo?",o:["Paralelismo é mais lento","São iguais","Concorrência: lidar com múltiplas tarefas; paralelismo: executar ao mesmo tempo","Concorrência precisa de GPU"],a:2},
{q:"O que o GIL do Python impede?",o:["Importar módulos","Uso de asyncio","Execução paralela real de threads Python (só um thread por vez na CPU)","Multiprocessing"],a:2},
{q:"O que multiprocessing resolve que threading não resolve em Python?",o:["É mais rápido sempre","Nada","Permite paralelismo real usando processos separados (cada um com seu GIL)","Usa menos memória"],a:2},
{q:"O que a Lei de Amdahl define?",o:["Número de threads ideal","Custo de memória","Speedup máximo é limitado pela fração serial do programa","Velocidade do processador"],a:2},
{q:"O que um thread pool faz?",o:["Gerencia memória","Tipo de piscina","Mantém pool de threads reutilizáveis para evitar overhead de criação/destruição","Cria threads infinitas"],a:2},
{q:"O que é uma operação atômica?",o:["Operação nuclear","Operação que completa inteiramente ou não acontece (indivisível)","Muito pequena","Operação lenta"],a:1},
{q:"O que std::thread faz em C++?",o:["Cria coroutine","Cria processo","Cria thread de execução paralela","Cria fibra"],a:2},
{q:"O que channels fazem em Go/Rust?",o:["Comunicação segura entre threads/goroutines passando mensagens","Streams de arquivo","Canais de TV","Canais de rede"],a:0},
{q:"O que é o modelo produtor-consumidor?",o:["Padrão de banco","Modelo de negócio","Threads produtoras colocam dados em buffer e consumidoras retiram","Padrão de design de UI"],a:2},
{q:"O que false sharing causa em programação paralela?",o:["Compartilhamento de código","Dados corrompidos","Degradação de performance quando threads em cores diferentes modificam dados na mesma cache line","Nada"],a:2},
{q:"O que SIMD significa?",o:["Single Instruction, Multiple Data — processar vários dados com uma instrução","Simple Interface, Multiple Devices","Tipo de thread","Protocolo de rede"],a:0},
{q:"O que é um barrier em programação paralela?",o:["Limite de memória","Firewall","Tipo de mutex","Ponto de sincronização onde todas threads esperam até que todas cheguem"],a:3},
{q:"O que async/await em JavaScript usa por baixo?",o:["Processos","Event loop e Promises (não-bloqueante, single-thread)","Threads","GPU"],a:1},
{q:"O que volatile keyword indica em C/C++?",o:["Variável constante","Variável global","Variável de thread","Variável pode mudar fora do controle do compilador (não otimizar)"],a:3},
{q:"O que é lock-free programming?",o:["Programar sem variáveis","Programar sem erros","Algoritmos concorrentes que não usam locks (usam operações atômicas)","Programar sem computador"],a:2}
];

QUIZZES["Engenharia de Software"] = [
{q:"O que o princípio Single Responsibility (SOLID) afirma?",o:["Uma classe tem um método","Uma classe deve ter apenas um motivo para mudar","Uma classe não herda","Uma classe faz tudo"],a:1},
{q:"O que é um Design Pattern?",o:["Tipo de teste","Solução reutilizável para problema recorrente de design de software","Framework","Linguagem de programação"],a:1},
{q:"O que o padrão Factory faz?",o:["Encapsula criação de objetos, decidindo qual classe instanciar","Destrói objetos","Cria fábricas","Clona objetos"],a:0},
{q:"Qual é a diferença entre teste unitário e teste de integração?",o:["Integração testa um método","Unitário é mais lento","Unitário testa componente isolado; integração testa componentes juntos","São iguais"],a:2},
{q:"O que TDD (Test-Driven Development) propõe?",o:["Não testar","Escrever teste ANTES do código, depois implementar até passar","Testar só em produção","Testar depois de codificar"],a:1},
{q:"O que a LGPD exige sobre dados pessoais?",o:["Coletar tudo possível","Consentimento, finalidade, transparência e direito à exclusão","Armazenar indefinidamente","Compartilhar livremente"],a:1},
{q:"O que code review busca?",o:["Melhorar qualidade: encontrar bugs, compartilhar conhecimento, manter padrão","Reescrever tudo","Achar culpados","Atrasar o projeto"],a:0},
{q:"O que CI (Continuous Integration) faz?",o:["Cria documentação","Integra equipes","Deploy em produção","Integra código frequentemente com build e testes automáticos a cada merge"],a:3},
{q:"O que o padrão Strategy permite?",o:["Otimizar memória","Criar threads","Trocar algoritmo em runtime encapsulando cada um em uma classe","Planejar sprint"],a:2},
{q:"O que clean code prioriza?",o:["Legibilidade: código que comunica claramente sua intenção","Performance máxima","Menos linhas possível","Mais features"],a:0},
{q:"O que é Scrum?",o:["Linguagem","Framework ágil com sprints, daily standups, retrospectivas e product backlog","Tipo de teste","Padrão de design"],a:1},
{q:"O que viés algorítmico é?",o:["Otimização","Bug comum","Tipo de cache","Discriminação não intencional causada por dados ou design do algoritmo"],a:3},
{q:"O que mocking faz em testes?",o:["Ridiculariza código","Substitui dependências reais por objetos simulados para isolar o que está sendo testado","Remove testes","Acelera testes"],a:1},
{q:"O que é refatoração?",o:["Remover testes","Adicionar features","Reescrever do zero","Melhorar estrutura interna do código sem mudar comportamento externo"],a:3},
{q:"O que o padrão Observer resolve?",o:["Notificar múltiplos objetos sobre mudanças de estado sem acoplamento forte","Ordenação","Busca em grafos","Criação de objetos"],a:0}
];

QUIZZES["Teoria da Computacao & Compiladores"] = [
{q:"O que uma Máquina de Turing pode computar?",o:["Só expressões regulares","Qualquer problema computável (modelo universal de computação)","Só aritmética","Só problemas simples"],a:1},
{q:"O que é um problema indecidível?",o:["Problema NP","Problema sem resposta","Problema fácil","Problema que NENHUM algoritmo pode resolver para todas as entradas (ex: Halting Problem)"],a:3},
{q:"O que P vs NP pergunta?",o:["Se memória é infinita","Se Python é eficiente","Se todo problema verificável em tempo polinomial também pode ser RESOLVIDO em tempo polinomial","Se programas são perfeitos"],a:2},
{q:"O que uma gramática livre de contexto (CFG) gera?",o:["Linguagens regulares","Só strings finitas","Código de máquina","Linguagens reconhecíveis por autômatos de pilha (ex: expressões aninhadas)"],a:3},
{q:"O que o lexer (análise léxica) faz num compilador?",o:["Otimiza código","Executa programa","Gera código","Divide código-fonte em tokens (palavras significativas)"],a:3},
{q:"O que o parser faz?",o:["Gera tokens","Executa código","Otimiza memória","Constrói árvore sintática (AST) verificando se tokens seguem a gramática"],a:3},
{q:"O que análise semântica verifica?",o:["Sintaxe","Significado: tipos corretos, variáveis declaradas, regras de escopo","Ortografia","Performance"],a:1},
{q:"O que NP-completo significa?",o:["Problema linear","Não-Polinomial","Problema impossível","Os problemas mais difíceis de NP: se resolver um em P, resolve todos"],a:3},
{q:"O que expressões regulares (regex) reconhecem?",o:["Qualquer linguagem","Linguagens livres de contexto","Linguagens recursivas","Linguagens regulares (reconhecíveis por autômatos finitos)"],a:3},
{q:"O que um autômato finito determinístico (DFA) tem que NFA não tem?",o:["Pilha","Exatamente uma transição por símbolo em cada estado (determinístico)","Mais estados","Fita infinita"],a:1},
{q:"O que geração de código intermediário produz?",o:["Representação entre AST e código de máquina (ex: three-address code)","Código final","Parse tree","Token stream"],a:0},
{q:"O que otimização de código em compilador faz?",o:["Melhora eficiência sem alterar comportamento (elimina redundâncias, inline, etc.)","Muda a lógica","Adiciona features","Remove comentários"],a:0},
{q:"O que a Tese de Church-Turing afirma?",o:["Tudo que é intuitivamente computável pode ser computado por uma Máquina de Turing","Linguagens são infinitas","P = NP","Compiladores são universais"],a:0},
{q:"O que o Pumping Lemma prova?",o:["Que uma linguagem NÃO é regular (prova por contradição)","Linguagens são regulares","Que toda linguagem é computável","Que P ≠ NP"],a:0},
{q:"O que LLVM é?",o:["Sistema operacional","Editor","Infraestrutura de compilador: representação intermediária e backends para várias arquiteturas","Linguagem"],a:2}
];

QUIZZES["Matematica p/ ML"] = [
{q:"O que o gradiente de uma função multivariável indica?",o:["Direção de maior crescimento da função no ponto","Determinante","Integral","Valor máximo"],a:0},
{q:"O que autovalores e autovetores representam?",o:["Raízes de polinômio","Direções preservadas por transformação linear (Av = λv)","Derivadas parciais","Erros numéricos"],a:1},
{q:"O que SVD (Singular Value Decomposition) decompõe?",o:["Qualquer matriz em U·Σ·Vᵀ (usado em PCA, compressão, recomendação)","Integrais","Strings","Grafos"],a:0},
{q:"O que a regra da cadeia multivariável permite calcular?",o:["Determinantes","Limites","Gradientes em funções compostas (essencial para backpropagation)","Autovalores"],a:2},
{q:"O que PCA faz?",o:["Classifica dados","Agrupa dados","Reduz dimensionalidade encontrando direções de máxima variância","Normaliza dados"],a:2},
{q:"O que o Teorema de Bayes permite em ML?",o:["Atualizar probabilidades com nova evidência (posterior ∝ likelihood × prior)","Calcular gradientes","Treinar CNNs","Decompor matrizes"],a:0},
{q:"O que é erro de ponto flutuante e por que importa em ML?",o:["Overflow de RAM","Imprecisão em operações decimais que pode acumular em milhões de cálculos","Bug de Python","Erro de lógica"],a:1},
{q:"O que a Hessiana é?",o:["Matriz de derivadas segundas que indica curvatura (convexa/côncava)","Integral dupla","Autovetor","Tipo de derivada"],a:0},
{q:"O que distribuição de Poisson modela?",o:["Distribuição normal","Correlação","Distribuição contínua","Número de eventos em intervalo fixo (ex: chegada de requests/minuto)"],a:3},
{q:"O que é norma L2 de um vetor?",o:["Valor máximo","Soma dos valores","Média dos valores","Raiz da soma dos quadrados (distância euclidiana)"],a:3},
{q:"O que integração numérica (Simpson, Trapézio) faz?",o:["Decompõe matrizes","Calcula derivadas","Aproxima integrais que não têm solução analítica","Resolve EDOs"],a:2},
{q:"O que é o Jacobiano?",o:["Método de otimização","Matriz de todas derivadas parciais de primeira ordem de função vetorial","Nome de matemático","Tipo de autovetor"],a:1},
{q:"O que Maximum Likelihood Estimation (MLE) faz?",o:["Maximiza performance","Minimiza variância","Maximiza bias","Encontra parâmetros que maximizam a probabilidade dos dados observados"],a:3},
{q:"O que condição numérica (condition number) de uma matriz indica?",o:["Determinante","Tamanho","Número de linhas","Sensibilidade da solução a perturbações nos dados (alto = instável)"],a:3},
{q:"O que a desigualdade de Jensen afirma sobre funções convexas?",o:["E[X] = 0","f(E[X]) = E[f(X)]","f(E[X]) ≤ E[f(X)] para funções convexas","f é sempre positiva"],a:2}
];

QUIZZES["Introducao a IA & ML"] = [
{q:"Qual é a diferença entre aprendizado supervisionado e não supervisionado?",o:["Supervisionado é melhor","Supervisionado usa dados rotulados; não supervisionado descobre padrões sem rótulos","São iguais","Não supervisionado é mais fácil"],a:1},
{q:"O que overfitting significa?",o:["Underfitting","Modelo muito simples","Modelo memoriza treino mas não generaliza para dados novos","Modelo perfeito"],a:2},
{q:"O que cross-validation faz?",o:["Avalia modelo em múltiplos splits treino/teste para estimar performance real","Remove outliers","Treina mais rápido","Cruza dados"],a:0},
{q:"O que Random Forest é?",o:["Rede neural","Regressão linear","Floresta aleatória","Ensemble de árvores de decisão com bagging e seleção aleatória de features"],a:3},
{q:"O que NumPy array tem de vantagem sobre lista Python?",o:["Mais legível","Mais flexível","Usa mais memória","Operações vetorizadas: cálculos em milhões de elementos sem loop Python"],a:3},
{q:"O que pandas DataFrame é?",o:["Animal","Array numérico","Tipo de gráfico","Tabela 2D com colunas nomeadas para manipulação de dados (filter, group, join)"],a:3},
{q:"O que é feature engineering?",o:["Treinar rede neural","Criar, selecionar e transformar variáveis para melhorar performance do modelo","Engenharia civil","Limpar dados"],a:1},
{q:"O que K-Means faz?",o:["Classificação","Agrupa dados em K clusters minimizando distância ao centróide (não supervisionado)","Árvore de decisão","Regressão"],a:1},
{q:"O que a métrica AUC-ROC mede?",o:["Capacidade do modelo distinguir classes em diferentes thresholds","Complexidade","Velocidade","Acurácia"],a:0},
{q:"O que bias-variance tradeoff é?",o:["Bug de dados","Modelo simples = alto bias (underfitting); modelo complexo = alta variance (overfitting)","Otimização de custo","Tipo de regularização"],a:1},
{q:"O que um dashboard de BI (Power BI, Streamlit) permite?",o:["Criar banco de dados","Programar Python","Visualizar métricas e dados de negócio interativamente para tomada de decisão","Treinar modelos"],a:2},
{q:"O que regularização (L1, L2) faz?",o:["Acelera treino","Penaliza coeficientes grandes para evitar overfitting e simplificar modelo","Remove dados","Aumenta overfitting"],a:1},
{q:"O que gradient descent faz?",o:["Decompõe matrizes","Atualiza parâmetros na direção oposta ao gradiente para minimizar a loss","Calcula derivadas","Sobe gradientes"],a:1},
{q:"O que pipeline do scikit-learn faz?",o:["Cria API","Encadeia transformações e modelo em sequência reproduzível (preprocessa + treina)","Canaliza dados","Visualiza dados"],a:1},
{q:"O que EDA (Exploratory Data Analysis) faz?",o:["Monitoramento","Explora dados com estatísticas e gráficos para entender padrões, outliers e distribuições","Deploy","Treina modelo"],a:1}
];

QUIZZES["Full-Stack"] = [
{q:"O que o Virtual DOM do React faz?",o:["Substitui o DOM","Remove CSS","Mantém representação em memória e aplica diferenças mínimas ao DOM real","Cria novo HTML"],a:2},
{q:"O que TypeScript adiciona ao JavaScript?",o:["Backend","Banco de dados","Tipagem estática opcional que detecta erros em tempo de compilação","Performance"],a:2},
{q:"O que um hook useState retorna no React?",o:["Objeto","Só o estado","Promessa","Array com [valor atual, função para atualizar o valor]"],a:3},
{q:"O que um middleware em Express.js faz?",o:["Função que intercepta request/response no pipeline (auth, logging, cors)","Cria rotas","Cria banco","Gera HTML"],a:0},
{q:"O que ORM (Object-Relational Mapping) faz?",o:["Mapeia tabelas do banco para classes/objetos no código (ex: Prisma, SQLAlchemy)","Otimiza SQL","Cria migrations","Formata objetos"],a:0},
{q:"Qual é a diferença entre SQL e NoSQL?",o:["SQL é mais lento","NoSQL é sempre melhor","SQL: schema fixo, relações, ACID; NoSQL: schema flexível, escala horizontal","São iguais"],a:2},
{q:"O que GraphQL resolve que REST não resolve bem?",o:["Segurança","Over-fetching e under-fetching: cliente pede exatamente os campos que precisa","Caching","Performance"],a:1},
{q:"O que JWT (JSON Web Token) faz?",o:["Token assinado para autenticação stateless entre cliente e servidor","Criptografa banco","Comprime dados","Cria JSON"],a:0},
{q:"O que WebSocket permite que HTTP comum não permite?",o:["Comunicação bidirecional em tempo real (servidor pode enviar dados ao cliente)","Mais velocidade","Mais segurança","Mais rotas"],a:0},
{q:"O que SSR (Server-Side Rendering) faz?",o:["Roda JavaScript","Renderiza HTML no servidor e envia pronto para o navegador (melhor SEO/performance inicial)","Comprime imagens","Remove CSS"],a:1},
{q:"O que uma migration de banco faz?",o:["Move o banco","Otimiza queries","Versiona mudanças no schema (criar/alterar tabelas) de forma reproduzível","Faz backup"],a:2},
{q:"O que rate limiting protege contra?",o:["CSRF","Abuso de API: limita número de requests por tempo por cliente","XSS","SQL injection"],a:1},
{q:"O que CORS (Cross-Origin Resource Sharing) controla?",o:["Autenticação","Quais domínios podem fazer requests para sua API","Caching","Criptografia"],a:1},
{q:"O que Redis é?",o:["Linguagem","Framework web","Banco relacional","Banco de dados in-memory para cache, sessões, filas (key-value ultrarrápido)"],a:3},
{q:"O que useEffect no React faz?",o:["Cria rotas","Executa side effects (fetch, subscriptions) após renderização","Cria efeito visual","Estiliza componente"],a:1}
];

QUIZZES["Computacao Grafica (Intro)"] = [
{q:"O que uma pipeline gráfica faz?",o:["Transforma dados 3D em pixels 2D na tela (vértices → fragmentos → pixels)","Cria animações CSS","Renderiza texto","Comprime imagens"],a:0},
{q:"O que shaders fazem?",o:["Criam sombras CSS","Programas que rodam na GPU controlando como vértices e pixels são processados","Comprimem texturas","Sombreiam tela"],a:1},
{q:"O que uma matriz de transformação 4×4 faz em 3D?",o:["Calcula cor","Gera textura","Armazena pixels","Aplica translação, rotação e escala a objetos (coordenadas homogêneas)"],a:3},
{q:"O que ray tracing faz?",o:["Renderiza wireframe","Comprime vídeo","Traça raios de luz","Simula trajetória de raios de luz para iluminação realista (reflexos, sombras)"],a:3},
{q:"O que rasterização faz?",o:["Converte primitivas geométricas (triângulos) em pixels na tela","Aplica filtro","Vetoriza imagem","Comprime imagem"],a:0},
{q:"O que é um mesh?",o:["Malha de vértices, arestas e faces que define a forma de um objeto 3D","Tipo de textura","Grid de pixels","Rede de pesca"],a:0},
{q:"O que Unity e Unreal Engine são?",o:["Bancos de dados","Engines de jogos/3D com editor visual, física, renderização e scripting","Linguagens","Frameworks web"],a:1},
{q:"O que OpenGL/Vulkan fornecem?",o:["APIs para programar GPU diretamente (desenhar triângulos, aplicar shaders)","Editor 3D","Compressor de imagem","Framework de jogos"],a:0},
{q:"O que z-buffer resolve?",o:["Visibilidade: determina qual objeto está na frente usando profundidade por pixel","Compressão","Overflow","Iluminação"],a:0},
{q:"O que texture mapping faz?",o:["Aplica sombra","Cria mesh","Projeta imagem 2D (textura) sobre superfície 3D para dar aparência de detalhe","Mapeia teclado"],a:2},
{q:"O que é antialiasing?",o:["Compressão","Técnica que suaviza bordas serrilhadas (jaggies) em imagens renderizadas","Alias de função","Tipo de shader"],a:1},
{q:"O que transformação de viewport faz?",o:["Aplica zoom","Converte coordenadas do mundo 3D para coordenadas da tela/janela","Muda resolução","Muda navegador"],a:1},
{q:"O que WebGL permite?",o:["Criar banco","Renderizar gráficos 3D no navegador usando JavaScript e GPU","Criar API REST","Comprim HTML"],a:1},
{q:"O que é um frame buffer?",o:["Buffer de rede","Região de memória que armazena a imagem final a ser exibida na tela","Tipo de cache","Buffer de arquivo"],a:1},
{q:"O que iluminação Phong modela?",o:["Três componentes de luz: ambiente + difusa + especular","Só sombras","Só reflexos","Só ambiente"],a:0}
];

QUIZZES["Desenvolvimento Mobile (Intro)"] = [
{q:"Qual é a vantagem de React Native/Flutter sobre desenvolvimento nativo?",o:["Mais bonito","Um código-base para iOS e Android (cross-platform)","Mais rápido em runtime","Melhor acesso a hardware"],a:1},
{q:"O que Flutter usa como linguagem?",o:["Kotlin","Swift","Dart","JavaScript"],a:2},
{q:"O que React Native usa como linguagem?",o:["Swift","Dart","Java","JavaScript/TypeScript"],a:3},
{q:"O que Expo facilita no React Native?",o:["Setup, build e deploy sem configurar Xcode/Android Studio","Compilação iOS","Testes unitários","Banco de dados"],a:0},
{q:"O que AsyncStorage/SharedPreferences armazenam?",o:["Arquivos grandes","Dados na nuvem","Dados simples (key-value) localmente no dispositivo","Banco relacional"],a:2},
{q:"O que navigation (React Navigation, Navigator) gerencia?",o:["Estado global","Telas e transições entre elas (stack, tabs, drawer)","Animações","GPS"],a:1},
{q:"O que é hot reload?",o:["Cachear código","Compilar mais rápido","Ver mudanças de código instantaneamente sem perder estado da app","Reiniciar app"],a:2},
{q:"O que APIs nativas (câmera, GPS, sensores) exigem em apps cross-platform?",o:["Usar só web","Reescrever em Swift","Nada especial","Bridges ou plugins que conectam JavaScript/Dart ao código nativo"],a:3},
{q:"O que estado global (Redux, Provider, Riverpod) gerencia?",o:["Navegação","Dados compartilhados entre múltiplas telas/componentes da app","CSS global","Banco de dados"],a:1},
{q:"O que é responsive design em mobile?",o:["Responsivo a toques","Layout que se adapta a diferentes tamanhos de tela e orientações","Design bonito","Design rápido"],a:1},
{q:"O que Firebase oferece para apps mobile?",o:["Backend as a Service: auth, banco em tempo real, push notifications, analytics","Compilador","IDE","Framework UI"],a:0},
{q:"Qual é a diferença entre compilação AOT e JIT em Flutter?",o:["AOT é mais lento","AOT: compilado antes (release, rápido); JIT: compila em runtime (debug, hot reload)","JIT é para produção","São iguais"],a:1},
{q:"O que é deep linking em apps mobile?",o:["Link para deep web","Link para downloads","Link para API","URL que abre uma tela específica dentro da app (ex: produto direto)"],a:3},
{q:"O que push notifications requerem?",o:["Só frontend","Serviço de backend (FCM/APNs) e permissão do usuário","Bluetooth","Nada"],a:1},
{q:"O que PWA (Progressive Web App) é?",o:["Framework","App nativa","Site web que funciona como app: offline, instalável, push notifications","Linguagem"],a:2}
];

QUIZZES["DevOps & Infra"] = [
{q:"Qual modelo OSI tem 7 camadas — qual camada o HTTP opera?",o:["Camada 2 (Enlace)","Camada 4 (Transporte)","Camada 7 (Aplicação)","Camada 3 (Rede)"],a:2},
{q:"O que um container Docker é?",o:["Máquina virtual","Tipo de VM","Processo isolado com seu próprio filesystem, rede e dependências (leve, portátil)","Servidor físico"],a:2},
{q:"O que um Dockerfile faz?",o:["Gerencia volumes","Cria rede","Define instruções para construir imagem Docker (FROM, RUN, COPY, CMD)","Configura VM"],a:2},
{q:"O que docker-compose faz?",o:["Orquestra múltiplos containers (app + banco + cache) com um arquivo YAML","Cria clusters","Comprime imagens","Compõe música"],a:0},
{q:"O que GitHub Actions / Jenkins faz em CI/CD?",o:["Edita código","Automatiza pipeline: build → test → deploy a cada push/PR","Cria repositórios","Monitora servidores"],a:1},
{q:"O que é blue-green deployment?",o:["Dois ambientes idênticos: redirecionar tráfego do antigo (blue) para novo (green) instantaneamente","Deploy colorido","Tipo de teste","Deploy lento"],a:0},
{q:"O que Prometheus coleta?",o:["Logs","Alerts","Traces","Métricas de sistemas/apps (CPU, memória, latência, requests) em formato time-series"],a:3},
{q:"O que Grafana faz?",o:["Testa código","Visualiza métricas em dashboards interativos (gráficos, alertas)","Gera logs","Coleta métricas"],a:1},
{q:"O que é observabilidade (3 pilares)?",o:["Logs + Métricas + Traces (entender o que acontece dentro do sistema)","Só métricas","Só monitoring","Só logs"],a:0},
{q:"O que um reverse proxy (Nginx) faz?",o:["Recebe requests e distribui para servidores backend (load balancing, SSL, cache)","Navega web","Bloqueia hackers","Cria API"],a:0},
{q:"O que é IaC (Infrastructure as Code)?",o:["Código em infra","Código na nuvem","DevOps manual","Definir infraestrutura (servidores, redes, DBs) como código versionável (Terraform, Ansible)"],a:3},
{q:"O que um health check endpoint (/health) faz?",o:["Verifica saúde do dev","Verifica segurança","Testa performance","Retorna status do serviço para que load balancers saibam se está funcionando"],a:3},
{q:"Qual é a diferença entre TCP e UDP?",o:["TCP é mais rápido","TCP: confiável com confirmação; UDP: rápido sem confirmação (streaming, games)","UDP é mais seguro","São iguais"],a:1},
{q:"O que é um DNS A record?",o:["Registro de email","Mapeia nome de domínio para endereço IPv4","Registro de admin","Registro de alias"],a:1},
{q:"O que 'shift left' em DevOps significa?",o:["Rotacionar equipe","Antecipar testes e segurança para fases iniciais do desenvolvimento","Mudar timezone","Mover servidores"],a:1}
];

QUIZZES["Seguranca & Ethical Hacking (Intro)"] = [
{q:"O que é a diferença entre pentest e bug bounty?",o:["Pentest é ilegal","Pentest: contrato formal para testar segurança; bug bounty: programa aberto para qualquer pesquisador","São iguais","Bug bounty é mais caro"],a:1},
{q:"O que OSINT significa?",o:["Tipo de malware","Protocolo de rede","Open Source Intelligence: coletar informação de fontes públicas","Sistema operacional"],a:2},
{q:"O que a tríade CIA em segurança representa?",o:["Confidencialidade, Integridade e Disponibilidade (Availability)","Agência dos EUA","Criptografia, Identificação, Autorização","Certificado, ID, Acesso"],a:0},
{q:"O que o nmap faz?",o:["Mapeia redes sociais","Monitora tráfego","Escaneia rede: descobre hosts, portas abertas, serviços e versões","Cria mapas"],a:2},
{q:"O que é uma CVE?",o:["Tipo de vírus","Common Vulnerabilities and Exposures: identificador único para vulnerabilidade conhecida","Certificado digital","Tipo de firewall"],a:1},
{q:"O que Wireshark faz?",o:["Criptografa dados","Bloqueia tráfego","Captura tubarões","Captura e analisa pacotes de rede em tempo real (sniffer)"],a:3},
{q:"O que engenharia social explora?",o:["Hardware","Redes","Software","Psicologia humana para manipular pessoas a revelar informação ou executar ações"],a:3},
{q:"O que é ethical hacking?",o:["Testar segurança com autorização para encontrar e reportar vulnerabilidades","Hacking ilegal","Programação","Manutenção de sistemas"],a:0},
{q:"O que Kali Linux é?",o:["Firewall","Antivírus","Distribuição para escritório","Distribuição Linux com 600+ ferramentas de segurança e pentest pré-instaladas"],a:3},
{q:"O que o Burp Suite faz?",o:["Bloqueia malware","Proxy de interceptação para testar segurança de aplicações web","Comprime dados","Gera senhas"],a:1},
{q:"O que 'scope' em pentest define?",o:["Limites do que pode ser testado (quais sistemas, métodos permitidos)","Escopo de variável","Tipo de vulnerabilidade","Ferramenta de scan"],a:0},
{q:"O que Google Dorking é?",o:["IDE do Google","Usar operadores avançados de busca para encontrar informações expostas (site:, filetype:)","Programar no Google","API do Google"],a:1},
{q:"O que MITRE ATT&CK é?",o:["Tipo de ataque","Ferramenta de defesa","Linguagem de programação","Framework que cataloga táticas e técnicas de adversários (knowledge base)"],a:3},
{q:"O que responsible disclosure significa?",o:["Esconder para sempre","Reportar vulnerabilidade ao dono do sistema dando tempo para corrigir antes de divulgar","Vender a vulnerabilidade","Publicar imediatamente"],a:1},
{q:"O que um CTF (Capture The Flag) é?",o:["Jogo de bandeira","Tipo de malware","Competição de segurança onde participantes resolvem desafios para encontrar flags","Framework"],a:2}
];

QUIZZES["Embarcados, Hardware & Automacao"] = [
{q:"O que o Arduino é?",o:["Tipo de sensor","Plataforma de prototipagem com microcontrolador, pinos I/O e IDE simples","Sistema operacional","Linguagem de programação"],a:1},
{q:"O que PWM (Pulse Width Modulation) controla?",o:["Potência média variando a largura do pulso (ex: brilho de LED, velocidade de motor)","Voltagem digital","Corrente AC","Frequência de rádio"],a:0},
{q:"O que o ESP32 tem que o Arduino Uno não tem nativamente?",o:["IDE","Pinos digitais","Porta USB","WiFi e Bluetooth integrados"],a:3},
{q:"O que MQTT é?",o:["Tipo de sensor","Protocolo leve de mensagens publish/subscribe para IoT","Linguagem","Framework"],a:1},
{q:"O que um FPGA faz?",o:["Hardware reconfigurável: circuito que pode ser reprogramado para qualquer lógica digital","É um microcontrolador","Processa fixo","É um sensor"],a:0},
{q:"O que VHDL/Verilog são?",o:["Linguagens de script","Protocolos IoT","Linguagens de descrição de hardware para programar FPGAs e ASICs","Frameworks web"],a:2},
{q:"O que I²C é?",o:["Tipo de chip","Framework","Protocolo de comunicação serial com dois fios (SDA, SCL) para sensores e periféricos","Linguagem"],a:2},
{q:"O que um PLC (CLP) faz na automação industrial?",o:["Protocolo de rede","Tipo de sensor","Controlador que executa lógica em tempo real para controlar máquinas industriais","Programa computadores"],a:2},
{q:"O que é SCADA?",o:["Sistema que supervisiona e controla processos industriais remotamente","Tipo de PLC","Framework IoT","Linguagem"],a:0},
{q:"O que um Raspberry Pi é?",o:["Arduino com WiFi","Microcontrolador","Computador single-board com Linux completo (CPU, RAM, HDMI, USB, GPIO)","Tipo de FPGA"],a:2},
{q:"O que ladder logic é?",o:["Lógica de escada","Linguagem de programação visual para PLCs baseada em diagramas de circuito","Tipo de sensor","Framework de teste"],a:1},
{q:"O que SPI é?",o:["Tipo de display","Framework","Protocolo serial síncrono de alta velocidade (MOSI, MISO, SCLK, CS)","Tipo de memória"],a:2},
{q:"O que é um sistema embarcado?",o:["App mobile","Computador dedicado a uma função específica dentro de sistema maior (ex: controle de ABS)","Desktop","Servidor web"],a:1},
{q:"O que Node-RED faz?",o:["Ferramenta visual de fluxo para conectar dispositivos IoT, APIs e serviços","Compila Verilog","Programa em C","Monitora rede"],a:0},
{q:"O que interrupt (interrupção) faz em microcontrolador?",o:["Libera memória","Desliga o sistema","Para execução normal para atender evento urgente (ex: botão pressionado)","Reinicia o programa"],a:2}
];

QUIZZES["Arquitetura de Software"] = [
{q:"O que CAP theorem afirma sobre sistemas distribuídos?",o:["Só pode garantir 2 de 3: Consistência, Disponibilidade, Tolerância a Partição","Sistemas nunca falham","Sistemas sempre são consistentes","Sistemas são perfeitos"],a:0},
{q:"O que é event-driven architecture?",o:["Arquitetura de eventos sociais","Tipo de polling","Arquitetura síncrona","Sistema onde componentes comunicam via eventos assíncronos (pub/sub, event bus)"],a:3},
{q:"O que CQRS (Command Query Responsibility Segregation) separa?",o:["Modelo de leitura e modelo de escrita em modelos separados","Frontend e backend","Database e cache","HTTP e WebSocket"],a:0},
{q:"O que é eventual consistency?",o:["Nunca consistente","Dado um tempo suficiente, todas réplicas convergem para o mesmo estado","Sempre consistente","Consistência imediata"],a:1},
{q:"O que load balancing faz?",o:["Balanceia banco","Distribui requests entre múltiplos servidores para evitar sobrecarga","Comprime dados","Carrega dados"],a:1},
{q:"O que é database sharding?",o:["Particionar banco horizontalmente em múltiplos servidores por chave (ex: user_id % N)","Backup","Replicação","Deletar dados"],a:0},
{q:"O que circuit breaker pattern faz?",o:["Corta energia","Reforça firewall","Comprime dados","Para de chamar serviço que está falhando, retorna fallback e tenta novamente depois"],a:3},
{q:"O que é idempotência em APIs?",o:["Repetir causa efeito diferente","Mesma operação executada múltiplas vezes produz o mesmo resultado","Operação única","Operação atômica"],a:1},
{q:"O que event sourcing armazena?",o:["Estado atual","Só últimos dados","Sequência completa de eventos que produziram o estado (replay possível)","Logs de erro"],a:2},
{q:"O que é back-pressure em sistemas de streaming?",o:["Mecanismo onde consumidor sinaliza produtor para desacelerar quando não consegue processar","Pressão negativa","Tipo de cache","Compressão"],a:0},
{q:"O que é domain-driven design (DDD)?",o:["Framework web","Design gráfico","Tipo de banco","Modelar software em torno do domínio do negócio (bounded contexts, aggregates, entities)"],a:3},
{q:"O que é um API gateway?",o:["Framework","Portão físico","Ponto de entrada único que roteia, autentica e rate-limita requests para microsserviços","Tipo de banco"],a:2},
{q:"O que é horizontal vs vertical scaling?",o:["Horizontal é mais caro sempre","Horizontal: mais máquinas; vertical: máquina mais potente","São iguais","Vertical é infinito"],a:1},
{q:"O que é saga pattern em microsserviços?",o:["Padrão de herói","Coordena transações distribuídas via sequência de eventos locais com compensação","Framework de teste","Tipo de banco"],a:1},
{q:"O que é cache invalidation e por que é difícil?",o:["Tipo de compressão","Decidir quando cache está obsoleto; difícil porque dados mudam imprevisìvelmente","Fácil de resolver","Limpar disco"],a:1}
];

QUIZZES["Deep Learning"] = [
{q:"O que backpropagation calcula?",o:["Acurácia","Gradientes da loss em relação a cada peso da rede (via regra da cadeia)","Predições","Features"],a:1},
{q:"O que uma CNN (Convolutional Neural Network) é otimizada para?",o:["Séries temporais","Texto","Dados com estrutura espacial: imagens, vídeo (filtros convolucionais)","Tabelas"],a:2},
{q:"O que dropout faz durante o treino?",o:["Aumenta learning rate","Acelera treino","Desativa neurônios aleatoriamente para reduzir overfitting (regularização)","Remove dados"],a:2},
{q:"O que é transfer learning?",o:["Usar modelo pré-treinado em tarefa grande e adaptar (fine-tune) para tarefa específica","Treinar do zero","Transferir pesos manualmente","Transferir dados"],a:0},
{q:"O que Attention mechanism faz?",o:["Reduz parâmetros","Acelera treino","Foca o programador","Permite que o modelo pese a importância de cada parte do input (base do Transformer)"],a:3},
{q:"O que é o Transformer?",o:["Robô","Tipo de CNN","RNN melhorada","Arquitetura baseada em self-attention que processa sequências em paralelo (base de GPT, BERT)"],a:3},
{q:"O que vanishing gradient problem causa?",o:["Gradientes diminuem ao propagar em redes profundas, impedindo aprendizado em camadas iniciais","Underfitting","Explosão de gradientes","Overfitting"],a:0},
{q:"O que batch normalization faz?",o:["Remove outliers","Reduz parâmetros","Normaliza ativações entre camadas para estabilizar e acelerar o treino","Agrupa dados"],a:2},
{q:"O que word embeddings (Word2Vec, GloVe) representam?",o:["Gramática","Palavras como vetores densos onde similaridade semântica = proximidade no espaço","Frequência de palavras","Códigos ASCII"],a:1},
{q:"O que BERT faz diferente de GPT?",o:["BERT é maior","São iguais","BERT é bidirecional (masked language model); GPT é autoregressivo (esquerda para direita)","GPT é mais antigo"],a:2},
{q:"O que é tokenização em NLP?",o:["Criptografia","Dividir texto em unidades (palavras, subpalavras, caracteres) para o modelo processar","Autenticação","Compressão"],a:1},
{q:"O que learning rate schedule faz?",o:["Fixa learning rate","Ajusta learning rate durante treino (ex: diminuir gradualmente para convergir melhor)","Agenda de estudo","Aumenta learning rate"],a:1},
{q:"O que é uma GAN (Generative Adversarial Network)?",o:["Rede de grafos","Duas redes competindo: generator cria dados falsos, discriminator tenta distinguir real de falso","Tipo de CNN","Rede recorrente"],a:1},
{q:"O que fine-tuning faz em um modelo pré-treinado?",o:["Treina do zero","Congela tudo","Continua treinamento com dados específicos da tarefa, ajustando pesos já aprendidos","Remove camadas"],a:2},
{q:"O que é a loss function e qual é a mais comum para classificação?",o:["Mede acurácia","Mede erro do modelo; cross-entropy é a mais usada para classificação","Função de ativação","Função de lucro"],a:1}
];

QUIZZES["AI Engineering"] = [
{q:"O que RAG (Retrieval-Augmented Generation) faz?",o:["Busca documentos relevantes e alimenta como contexto para o LLM gerar resposta fundamentada","Gera imagens","Comprime dados","Treina modelos"],a:0},
{q:"O que é prompt engineering?",o:["Técnica de estruturar instruções para obter respostas melhores de LLMs","Framework de teste","Engenharia civil","Tipo de compilador"],a:0},
{q:"O que embeddings vetoriais permitem em sistemas RAG?",o:["Criar imagens","Busca semântica: encontrar documentos similares por significado, não por palavras exatas","Comprimir texto","Treinar modelos"],a:1},
{q:"O que é um vector database (Pinecone, Chroma, Weaviate)?",o:["Banco NoSQL genérico","Tipo de cache","Banco SQL","Banco especializado em armazenar e buscar vetores de embeddings eficientemente"],a:3},
{q:"O que são AI agents?",o:["Framework web","Chatbots simples","Sistemas de IA que usam ferramentas, planejam e executam ações autonomamente em multi-step","Tipo de modelo"],a:2},
{q:"O que é function calling em LLMs?",o:["Tipo de prompt","LLM decide quando e como chamar ferramentas externas (APIs, bancos) via schema JSON","Debugging","Chamar funções Python"],a:1},
{q:"O que é o temperature parameter em LLMs?",o:["Velocidade de inferência","Temperatura do GPU","Controla aleatoriedade: 0 = determinístico, 1+ = mais criativo/aleatório","Tamanho do contexto"],a:2},
{q:"O que é chunking em RAG?",o:["Dividir documentos em pedaços menores para indexação e busca mais eficiente","Técnica de treino","Tipo de encoding","Comprimir arquivos"],a:0},
{q:"O que hallucination em LLMs significa?",o:["Tipo de prompt","Modelo gera informação plausível mas factualmente incorreta com confiança","Bug de software","Visão computacional"],a:1},
{q:"O que é LangChain/LlamaIndex?",o:["Blockchain","Criptomoeda","Frameworks para construir aplicações com LLMs (chains, agents, RAG pipelines)","Linguagem de programação"],a:2},
{q:"O que é fine-tuning vs RAG — quando usar cada?",o:["São iguais","Fine-tuning é sempre melhor","Fine-tuning: mudar comportamento/estilo; RAG: adicionar conhecimento externo atualizado","RAG é deprecated"],a:2},
{q:"O que token limit/context window significa?",o:["Limite de treino","Limite de memória","Máximo de tokens que o modelo pode processar em uma chamada (input + output)","Limite de API calls"],a:2},
{q:"O que é model evaluation para LLMs?",o:["Medir qualidade com métricas (BLEU, ROUGE, human eval) e benchmarks (MMLU, HumanEval)","Custo","Nota do modelo","Velocidade"],a:0},
{q:"O que é guardrails em LLMs?",o:["Mecanismos para garantir que output do LLM é seguro, relevante e dentro do escopo","Framework de UI","Cercas físicas","Tipo de prompt"],a:0},
{q:"O que é streaming response em APIs de LLM?",o:["Protocolo de rede","Receber tokens incrementalmente conforme são gerados (melhor UX, menor latência percebida)","Download de vídeo","Tipo de banco"],a:1}
];

QUIZZES["Bioinformatica & Computacao Biologica"] = [
{q:"O que é uma sequência de DNA e quais são as 4 bases?",o:["Carboidratos","Proteínas A,B,C,D","Aminoácidos","Cadeia de nucleotídeos com bases Adenina, Timina, Citosina, Guanina (A,T,C,G)"],a:3},
{q:"O que BLAST faz?",o:["Edita DNA","Comprime genomas","Explode dados","Busca sequências similares em bancos de dados genômicos (alinhamento local)"],a:3},
{q:"O que alinhamento de sequências (Needleman-Wunsch, Smith-Waterman) resolve?",o:["Encontrar regiões similares entre sequências para inferir função/evolução","Clonar genes","Ordenar genes","Sequenciar DNA"],a:0},
{q:"O que é genômica e como difere de genética?",o:["Genômica é mais antiga","São iguais","Genômica estuda genoma completo (todos os genes); genética estuda genes individuais","Genética é mais completa"],a:2},
{q:"O que RNA-seq mede?",o:["Quantidade de DNA","Expressão gênica: quais genes estão ativos e em que nível em uma amostra","Proteínas","Mutações"],a:1},
{q:"O que machine learning faz em drug discovery?",o:["Prediz interações molécula-alvo, filtra candidatos e acelera descoberta de fármacos","Fabrica remédios","Substitui laboratórios","Diagnostica pacientes"],a:0},
{q:"O que é filogenia?",o:["Estudo de folhas","Estudo de fósseis","Reconstrução de árvore evolutiva mostrando relações entre espécies/genes","Tipo de proteína"],a:2},
{q:"O que são hidden Markov models (HMM) em bioinformática?",o:["Cadeias escondidas","Modelos probabilísticos para encontrar padrões em sequências (genes, domínios proteicos)","Algoritmo de sorting","Tipo de rede neural"],a:1},
{q:"O que o formato FASTA armazena?",o:["Sequências biológicas (DNA, RNA, proteínas) com header de identificação","Dados tabulares","Código fonte","Imagens médicas"],a:0},
{q:"O que é protein folding e por que é importante?",o:["Criar proteínas","Dobrar papel","Predição da estrutura 3D de proteínas a partir da sequência — determina função","Sequenciar DNA"],a:2},
{q:"O que AlphaFold revolucionou?",o:["Jogos de tabuleiro","Predição de estrutura 3D de proteínas com precisão experimental usando deep learning","Busca genômica","Sequenciamento"],a:1},
{q:"O que é um pipeline de bioinformática?",o:["Tipo de DNA","Framework web","Sequência automatizada de ferramentas: raw reads → QC → alinhamento → variantes → anotação","Cano de laboratório"],a:2},
{q:"O que são variantes genômicas (SNPs, indels)?",o:["Tipos de RNA","Diferenças no DNA entre indivíduos: SNP = troca de 1 base, indel = inserção/deleção","Proteínas","Vírus"],a:1},
{q:"O que é metagenômica?",o:["Genômica de metais","Tipo de proteômica","Genômica avançada","Estudo do DNA de comunidades microbianas inteiras diretamente do ambiente"],a:3},
{q:"O que Biopython/Bioconductor fornecem?",o:["Banco de dados","Biólogos em Python","Compiladores","Bibliotecas com ferramentas para análise de sequências, estruturas e dados biológicos"],a:3}
];

QUIZZES["Banco de Dados Avancado"] = [
{q:"O que é MVCC (Multi-Version Concurrency Control) no PostgreSQL?",o:["Versionamento de código","Cada transação vê snapshot consistente do banco sem bloquear leituras","Compressão de dados","Tipo de backup"],a:1},
{q:"O que é um índice B-tree e quando usar?",o:["Tipo de árvore","Cache","Estrutura balanceada para buscas por igualdade e range queries (default no PostgreSQL)","Tipo de tabela"],a:2},
{q:"Quando usar índice GIN vs GiST no PostgreSQL?",o:["São iguais","GiST é deprecated","GIN é mais rápido sempre","GIN: arrays, full-text search, JSONB; GiST: geoespacial, ranges, proximidade"],a:3},
{q:"O que é query plan e como EXPLAIN ANALYZE ajuda?",o:["Plano de backup","Mostra como PostgreSQL executa query: scans, joins, custos e tempo real por etapa","Plano de projeto","Tipo de índice"],a:1},
{q:"O que é connection pooling (PgBouncer)?",o:["Piscina de conexões","Backup","Reutiliza conexões ao banco evitando overhead de abrir/fechar (centenas de clientes, poucas conexões)","Tipo de cache"],a:2},
{q:"O que MongoDB armazena diferente de PostgreSQL?",o:["São iguais","MongoDB é mais seguro","Documentos JSON flexíveis (schemaless) vs tabelas com schema fixo (relacional)","PostgreSQL é NoSQL"],a:2},
{q:"O que é replicação de banco e para que serve?",o:["Copiar dados para réplicas: alta disponibilidade (failover) e leitura distribuída","Compressão","Tipo de índice","Duplicar tabelas"],a:0},
{q:"O que JSONB no PostgreSQL permite?",o:["Armazenar JavaScript","Comprimir JSON","Converter para XML","Armazenar JSON binário com índices e queries eficientes (melhor dos dois mundos)"],a:3},
{q:"O que é particionamento de tabelas?",o:["Dividir tabela grande em partições menores por range, list ou hash (melhor performance)","Backup parcial","Deletar dados antigos","Tipo de índice"],a:0},
{q:"O que Redis Streams e Pub/Sub oferecem?",o:["Streaming de vídeo","Mensageria em tempo real: filas, event sourcing e comunicação entre serviços","Banco relacional","Tipo de cache"],a:1},
{q:"O que é vacuum no PostgreSQL?",o:["Tipo de backup","Compressão","Limpar disco","Recuperar espaço de tuplas mortas (MVCC) e atualizar estatísticas para query planner"],a:3},
{q:"O que são CTEs recursivas e quando são úteis?",o:["Tipo de JOIN","Queries que referenciam a si mesmas para hierarquias (org charts, árvores de categorias)","Loops infinitos","Tipo de índice"],a:1},
{q:"O que é eventual consistency em bancos NoSQL distribuídos?",o:["Nunca consistente","Sempre consistente","Tipo de transação","Réplicas podem divergir temporariamente mas convergem dado tempo suficiente"],a:3},
{q:"O que é um materialized view?",o:["View cujo resultado é armazenado fisicamente (cache de query complexa, refresh periódico)","Tipo de tabela","View normal","Tipo de índice"],a:0},
{q:"O que é WAL (Write-Ahead Logging)?",o:["Registra mudanças em log antes de aplicar no banco (garante durabilidade e recovery)","Diário de escrita","Tipo de cache","Backup incremental"],a:0}
];

QUIZZES["Data Engineering"] = [
{q:"O que é um data lake?",o:["Banco relacional","Lago de dados físico","Data warehouse","Repositório centralizado que armazena dados brutos em qualquer formato (estruturado e não)"],a:3},
{q:"O que é ETL vs ELT?",o:["ETL é mais novo","São iguais","ETL: transforma antes de carregar; ELT: carrega bruto e transforma no destino (mais moderno)","ELT é deprecated"],a:2},
{q:"O que Apache Kafka faz?",o:["Framework web","Café em Java","Plataforma de streaming distribuído: pub/sub, filas e processamento de eventos em tempo real","Banco de dados"],a:2},
{q:"O que é data warehouse?",o:["Banco otimizado para análise: dados limpos, estruturados, históricos (OLAP)","Armazém físico","Banco transacional","Data lake"],a:0},
{q:"O que Apache Spark faz?",o:["Banco de dados","Framework web","Faísca de dados","Processamento distribuído de dados em grande escala (batch e streaming) em cluster"],a:3},
{q:"O que é schema-on-read vs schema-on-write?",o:["São iguais","Schema-on-read: interpreta estrutura ao ler (data lake); schema-on-write: define antes de gravar (warehouse)","Schema-on-write é mais flexível","Schema-on-read é mais lento"],a:1},
{q:"O que dbt (data build tool) faz?",o:["Compila dados","Transforma dados no warehouse usando SQL versionado (ELT, testes, documentação)","Extrai dados","Visualiza dados"],a:1},
{q:"O que é data lineage?",o:["Rastreamento de origem, transformações e destino dos dados (de onde veio, como mudou)","Backup","Linhagem de DNA","Tipo de índice"],a:0},
{q:"O que é particionamento em data lakes (ex: por data)?",o:["Organizar dados em diretórios por chave (ano/mês/dia) para ler só partições relevantes","Indexação","Dividir dados em tabelas","Tipo de compressão"],a:0},
{q:"O que formato Parquet oferece vs CSV?",o:["São iguais","Parquet é texto","Armazenamento colunar, compressão eficiente e leitura seletiva de colunas (muito mais rápido)","CSV é mais rápido"],a:2},
{q:"O que é data quality e como garantir?",o:["Dados sempre perfeitos","Revisão manual","Tipo de backup","Validações automatizadas: completude, unicidade, freshness, schema checks (Great Expectations, dbt tests)"],a:3},
{q:"O que é change data capture (CDC)?",o:["Tipo de backup","Detecta e captura mudanças em banco de dados em tempo real (Debezium, WAL-based)","Compressão","Captura de tela"],a:1},
{q:"O que é um data mesh?",o:["Data warehouse centralizado","Malha de rede","Arquitetura descentralizada: cada domínio de negócio é dono dos seus data products","Tipo de data lake"],a:2},
{q:"O que Airflow/Dagster/Prefect fazem?",o:["Bancos de dados","Orquestram pipelines de dados: agendam, monitoram e gerenciam dependências entre tarefas","Orquestram containers","Frameworks web"],a:1},
{q:"O que é a medallion architecture (bronze/silver/gold)?",o:["Padrão em data lakes: bronze=raw, silver=limpo/validado, gold=pronto para negócio/analytics","Arquitetura de medalhas","Tipo de cache","Framework"],a:0}
];

QUIZZES["Blockchain & Web3"] = [
{q:"O que é uma blockchain fundamentalmente?",o:["Framework web","Ledger distribuído e imutável: cadeia de blocos ligados por hash criptográfico","Criptomoeda","Tipo de banco"],a:1},
{q:"O que é um smart contract?",o:["Programa auto-executável na blockchain que roda quando condições são atendidas","Contrato jurídico","Carteira digital","Tipo de token"],a:0},
{q:"O que Solidity é?",o:["Framework JavaScript","Protocolo de rede","Tipo de metal","Linguagem de programação para smart contracts na Ethereum"],a:3},
{q:"O que é Proof of Work vs Proof of Stake?",o:["PoS é centralizado","PoW: mineradores resolvem puzzles (energia); PoS: validadores travam tokens (stake)","São iguais","PoW é mais novo"],a:1},
{q:"O que é um token ERC-20?",o:["NFT","Smart contract genérico","Padrão de token fungível na Ethereum (transferência, aprovação, saldo)","Moeda física"],a:2},
{q:"O que é DeFi (Decentralized Finance)?",o:["Serviços financeiros (empréstimos, exchanges, yield) sem intermediários centralizados","Tipo de banco","Finança tradicional","Framework"],a:0},
{q:"O que é gas em Ethereum?",o:["Unidade de custo computacional para executar transações e smart contracts","Moeda","Combustível real","Tipo de token"],a:0},
{q:"O que é um NFT?",o:["Tipo de criptomoeda","Smart contract","Token fungível","Token não-fungível: certificado digital único de propriedade (arte, colecionáveis)"],a:3},
{q:"O que é uma DAO (Decentralized Autonomous Organization)?",o:["Empresa normal","Tipo de protocolo","Carteira digital","Organização governada por smart contracts e votação de token holders"],a:3},
{q:"O que é reentrancy attack em smart contracts?",o:["Contrato malicioso chama função recursivamente antes do estado ser atualizado (ex: hack do DAO)","Buffer overflow","Ataque de rede","SQL injection"],a:0},
{q:"O que Hardhat/Foundry fornecem?",o:["Capacetes","Ambiente de desenvolvimento para smart contracts: compilar, testar, deployar, debuggar","Carteira digital","Exchange"],a:1},
{q:"O que é Layer 2 em blockchain?",o:["Segunda camada de segurança","Tipo de token","Protocolo de consenso","Soluções de escalabilidade que processam transações fora da chain principal (rollups, state channels)"],a:3},
{q:"O que é IPFS?",o:["Tipo de blockchain","Protocolo IP","Smart contract","Sistema de arquivos distribuído: armazena conteúdo por hash (CID) sem servidor central"],a:3},
{q:"O que é MEV (Maximal Extractable Value)?",o:["Lucro que mineradores/validadores extraem reordenando transações no bloco","Protocolo de consenso","Tipo de gas","Valor máximo de token"],a:0},
{q:"O que são oracles em blockchain?",o:["Validadores","Tipo de nó","Serviços que trazem dados do mundo real para smart contracts (Chainlink)","Oráculos místicos"],a:2}
];

QUIZZES["Cloud & Kubernetes"] = [
{q:"O que um Pod é no Kubernetes?",o:["Menor unidade deployável: um ou mais containers compartilhando rede e storage","Tipo de nó","Cluster inteiro","Tipo de container"],a:0},
{q:"O que um Deployment faz no Kubernetes?",o:["Faz deploy manual","Gerencia storage","Cria cluster","Gerencia réplicas de Pods: declarativo, rolling updates, rollbacks automáticos"],a:3},
{q:"O que é Terraform?",o:["Ferramenta de IaC que cria e gerencia infraestrutura via código declarativo (HCL)","Framework web","Tipo de container","Plataforma de hosting"],a:0},
{q:"O que é um Service no Kubernetes?",o:["Volume","ConfigMap","Container","Abstração que expõe Pods como endpoint de rede estável (ClusterIP, NodePort, LoadBalancer)"],a:3},
{q:"O que é Helm no ecossistema Kubernetes?",o:["Tipo de Pod","Gerenciador de pacotes para K8s: charts são templates reutilizáveis de recursos","IDE","Capacete"],a:1},
{q:"O que é auto-scaling no K8s (HPA)?",o:["Tipo de deployment","Vertical scaling","Scaling manual","Horizontal Pod Autoscaler ajusta número de réplicas baseado em métricas (CPU, memória, custom)"],a:3},
{q:"O que é um namespace no Kubernetes?",o:["Tipo de Pod","Tipo de Service","Isolamento lógico de recursos no cluster (equipes, ambientes)","Tipo de nó"],a:2},
{q:"O que é GitOps (ArgoCD, Flux)?",o:["Git como backup","Tipo de CI/CD","Framework web","Infraestrutura e deploys declarados em Git; ferramenta sincroniza cluster com repo automaticamente"],a:3},
{q:"O que é um Ingress no Kubernetes?",o:["Firewall","Entrada de dados","Roteador HTTP/HTTPS que direciona tráfego externo para Services internos (regras de path/host)","Tipo de Pod"],a:2},
{q:"O que são ConfigMaps e Secrets no K8s?",o:["Tipos de Pods","Objetos para injetar configuração (ConfigMap) e dados sensíveis (Secrets) em containers","Tipos de Volume","Tipos de Service"],a:1},
{q:"O que é service mesh (Istio, Linkerd)?",o:["Tipo de Kubernetes","Malha de rede física","Framework web","Infraestrutura para comunicação entre microsserviços: mTLS, observabilidade, traffic management"],a:3},
{q:"O que é multi-cloud strategy?",o:["Tipo de container","Tipo de deploy","Usar múltiplos provedores cloud (AWS + GCP + Azure) para evitar vendor lock-in e resiliência","Uma cloud só"],a:2},
{q:"O que é serverless (Lambda, Cloud Functions)?",o:["Tipo de VM","Sem computação","Sem internet","Executar código sem gerenciar servidores: paga por execução, escala automaticamente"],a:3},
{q:"O que são taints e tolerations no K8s?",o:["Contaminações","Tipo de network","Tipo de storage","Taints impedem Pods de rodar em nós; tolerations permitem Pods específicos ignorar taints"],a:3},
{q:"O que é observability no Kubernetes (Prometheus + Grafana + Jaeger)?",o:["Métricas (Prometheus), dashboards (Grafana) e traces distribuídos (Jaeger) para entender o sistema","Só alertas","Tipo de deploy","Só logs"],a:0}
];

QUIZZES["DevSecOps & Seguranca"] = [
{q:"O que é shift-left security?",o:["Integrar segurança desde o início do desenvolvimento (não só no final)","Tipo de firewall","Mover servidores","Rotacionar equipes"],a:0},
{q:"O que SAST (Static Application Security Testing) faz?",o:["Testa performance","Analisa código-fonte sem executar para encontrar vulnerabilidades (ex: Semgrep, SonarQube)","Monitora rede","Testa UI"],a:1},
{q:"O que DAST (Dynamic Application Security Testing) faz?",o:["Testa aplicação rodando para encontrar vulnerabilidades em runtime (ex: OWASP ZAP)","Analisa dependências","Analisa código","Testa banco"],a:0},
{q:"O que é SCA (Software Composition Analysis)?",o:["Escaneia dependências (npm, pip) para vulnerabilidades conhecidas (CVEs) em supply chain","Tipo de teste","Análise de software","Compilador"],a:0},
{q:"O que é container security scanning?",o:["Verificar imagens Docker por vulnerabilidades, malware e configurações inseguras (Trivy, Snyk)","Escanear containers físicos","Tipo de deploy","Monitoramento"],a:0},
{q:"O que é zero trust architecture?",o:["VPN","Confiar em tudo","Nunca confiar, sempre verificar: autenticação e autorização em cada request, mesmo interno","Tipo de firewall"],a:2},
{q:"O que é secrets management (Vault, AWS Secrets Manager)?",o:["Guardar senhas em código","Tipo de criptografia","Armazenar e rotacionar credenciais de forma segura e auditável (nunca hardcoded)","Backup"],a:2},
{q:"O que é SBOM (Software Bill of Materials)?",o:["Tipo de licença","Conta de material","Lista completa de componentes, dependências e versões em um software (transparência de supply chain)","Framework"],a:2},
{q:"O que é runtime application self-protection (RASP)?",o:["Proteção física","Tipo de SAST","Firewall externo","Segurança integrada na aplicação que detecta e bloqueia ataques em tempo real"],a:3},
{q:"O que é compliance as code (OPA, Sentinel)?",o:["Políticas de conformidade escritas como código que são verificadas automaticamente em CI/CD","Framework web","Tipo de teste","Código legal"],a:0},
{q:"O que é threat modeling?",o:["Monitoramento","Tipo de pentest","Identificar ameaças, superfícies de ataque e mitigações ANTES de construir o sistema","Modelagem 3D"],a:2},
{q:"O que é supply chain attack em software?",o:["Ataque logístico","Tipo de DDoS","SQL injection","Comprometer dependência/ferramenta de build para que código malicioso entre em projetos legítimos"],a:3},
{q:"O que é mTLS (mutual TLS)?",o:["Tipo de VPN","Ambos lados (cliente e servidor) apresentam certificados e verificam identidade mutuamente","Criptografia de disco","TLS duplo"],a:1},
{q:"O que é security observability?",o:["Tipo de SIEM","Firewall","Só logs de segurança","Visibilidade contínua sobre postura de segurança: eventos, anomalias, compliance em tempo real"],a:3},
{q:"O que é purple teaming?",o:["Time roxo","Tipo de audit","Red team (ataque) e blue team (defesa) colaborando para melhorar segurança continuamente","Tipo de pentest solo"],a:2}
];

QUIZZES["Ethical Hacking: Web & Redes"] = [
{q:"O que é SQL injection e como prevenir?",o:["Buffer overflow","Injetar SQL via input não sanitizado; prevenir com prepared statements e parametrização","XSS","Bug de CSS"],a:1},
{q:"O que é XSS (Cross-Site Scripting)?",o:["CSRF","SQL injection","Ataque de rede","Injetar JavaScript malicioso em páginas web para roubar sessão/dados de outros usuários"],a:3},
{q:"O que é CSRF (Cross-Site Request Forgery)?",o:["Forçar usuário autenticado a executar ação não intencional em outro site (via link/imagem)","SQL injection","Buffer overflow","Ataque XSS"],a:0},
{q:"O que ARP spoofing/poisoning faz?",o:["Associa MAC do atacante ao IP da vítima/gateway para interceptar tráfego (MITM)","Melhora rede","Acelera rede","Bloqueia rede"],a:0},
{q:"O que é privilege escalation?",o:["Explorar vulnerabilidade para obter permissões mais altas (user→root/admin)","Tipo de DDoS","Promoção no trabalho","Phishing"],a:0},
{q:"O que Metasploit é?",o:["Tipo de malware","Antivírus","Firewall","Framework de exploitation com módulos para testar vulnerabilidades (payloads, exploits, aux)"],a:3},
{q:"O que é buffer overflow?",o:["Disco cheio","Tipo de XSS","Escrever além do buffer alocado para sobrescrever memória adjacente (controlar execução)","Overflow de banco"],a:2},
{q:"O que Gobuster/DirBuster fazem?",o:["Eliminam bugs","Brute-force de diretórios e arquivos em servidores web (enumeração)","Escaneiam portas","Exploram SQL"],a:1},
{q:"O que é lateral movement em redes?",o:["Mover cabos","Após comprometer uma máquina, mover-se para outras na rede usando credenciais obtidas","Tipo de scan","DDoS"],a:1},
{q:"O que é pass-the-hash attack?",o:["Compartilhar senha","Tipo de phishing","SQL injection","Usar hash de senha capturado para autenticar sem saber a senha em texto claro"],a:3},
{q:"O que é reverse shell?",o:["Tipo de proxy","SSH reverso","Shell reversa de backup","Máquina comprometida inicia conexão de volta ao atacante (bypassa firewall inbound)"],a:3},
{q:"O que é SSRF (Server-Side Request Forgery)?",o:["CSRF no servidor","Ataque de browser","XSS no servidor","Forçar servidor a fazer requests para recursos internos (acessar metadata, serviços internos)"],a:3},
{q:"O que é chain of custody em pentest reporting?",o:["Framework","Tipo de ataque","Cadeia de custódia legal","Documentar cada passo da exploração com evidências para relatório reproduzível e legal"],a:3},
{q:"O que é credential stuffing?",o:["Brute force","Usar combinações de email/senha vazadas em outros sites para acessar contas (reuso de senhas)","Phishing","Preencher formulários"],a:1},
{q:"O que OWASP Top 10 é?",o:["Top 10 linguagens","Lista das 10 vulnerabilidades web mais críticas atualizada periodicamente (guia de segurança)","Framework web","Top 10 ferramentas"],a:1}
];

QUIZZES["Robotica, IoT & Automacao Avancada"] = [
{q:"O que ROS (Robot Operating System) é?",o:["Sistema operacional","Tipo de Linux","IDE de robótica","Framework middleware para robótica: comunicação entre nós, simulação, drivers de sensores"],a:3},
{q:"O que é SLAM (Simultaneous Localization and Mapping)?",o:["Robô constrói mapa do ambiente enquanto localiza sua posição nele simultaneamente","Tipo de controle","Algoritmo de navegação","Tipo de sensor"],a:0},
{q:"O que controlador PID faz?",o:["Ajusta saída com base em erro (Proporcional), acumulado (Integral) e taxa de mudança (Derivativo)","Controla LEDs","Programa computador","Controla preços"],a:0},
{q:"O que é cinemática direta vs inversa em robótica?",o:["Direta: ângulos das juntas → posição do efetor; inversa: posição desejada → ângulos necessários","Direta é mais difícil","São iguais","Inversa é impossível"],a:0},
{q:"O que é computer vision em robótica?",o:["Processar imagens de câmeras para detecção de objetos, navegação e interação com ambiente","Câmera cara","Tipo de sensor","Simulação 3D"],a:0},
{q:"O que é digital twin?",o:["Clone digital","Cópia de firmware","Tipo de backup","Réplica virtual de sistema físico que simula comportamento em tempo real com dados de sensores"],a:3},
{q:"O que é Gazebo em ROS?",o:["Simulador 3D de robótica com física, sensores e ambientes para testar antes do hardware real","IDE","Linguagem","Tipo de robô"],a:0},
{q:"O que é reinforcement learning aplicado a robótica?",o:["Tipo de PID","Supervised learning","Tipo de controle","Agente aprende por tentativa e erro interagindo com ambiente (reward/punishment)"],a:3},
{q:"O que é Industria 4.0?",o:["Framework web","Quarta revolução de software","Tipo de fábrica","Integração de IoT, IA, cloud e automação em manufatura inteligente"],a:3},
{q:"O que é OPC UA em automação industrial?",o:["Protocolo de comunicação unificado entre máquinas e sistemas industriais (machine-to-machine)","Linguagem","Tipo de PLC","Framework"],a:0},
{q:"O que é edge computing em IoT?",o:["Processar dados próximo à fonte (sensor/dispositivo) em vez de enviar tudo para cloud","CDN para IoT","Computação na borda do disco","Tipo de cloud"],a:0},
{q:"O que é path planning em robótica?",o:["Planejamento de carreira","GPS","Tipo de mapa","Algoritmos que encontram trajetória ótima evitando obstáculos (A*, RRT, Dijkstra no espaço)"],a:3},
{q:"O que é sensor fusion?",o:["Calibração","Combinar dados de múltiplos sensores (câmera, LiDAR, IMU) para estimativa mais precisa","Fundir sensores","Tipo de sensor"],a:1},
{q:"O que são cobots (collaborative robots)?",o:["Tipo de drone","Robôs autônomos","Robôs de software","Robôs projetados para trabalhar ao lado de humanos com sensores de segurança"],a:3},
{q:"O que é ROS 2 e por que substituiu ROS 1?",o:["ROS 2: real-time, seguro, multi-plataforma, DDS para comunicação (mais robusto para indústria)","ROS 1 é mais novo","São iguais","ROS 2 é mais simples"],a:0}
];

QUIZZES["Sistemas Distribuidos"] = [
{q:"O que o teorema FLP prova sobre consenso distribuído?",o:["Em sistema assíncrono com uma falha, consenso determinístico é impossível","FLP é um protocolo","Consenso é sempre possível","Consenso é trivial"],a:0},
{q:"O que Raft é?",o:["Protocolo de consenso mais simples que Paxos (leader election, log replication, safety)","Banco de dados","Tipo de barco","Framework web"],a:0},
{q:"O que é vector clock e para que serve?",o:["Tipo de timestamp","Relógio vetorial de parede","Estrutura que captura causalidade entre eventos em sistemas distribuídos (quem aconteceu antes)","Relógio de CPU"],a:2},
{q:"O que é consistent hashing?",o:["Hash normal","Hash com colisão zero","Tipo de criptografia","Distribuição de chaves em ring que minimiza redistribuição quando nós entram/saem (usado em DHT, caches)"],a:3},
{q:"O que é split-brain em clusters?",o:["Backup automático","Tipo de sharding","Partição de rede faz dois subgrupos acreditarem ser o cluster principal (dados divergem)","Bug de CPU"],a:2},
{q:"O que é linearizability vs serializability?",o:["Linearizability é mais fraco","Linearizability: operações parecem instantâneas (real-time); serializability: transações parecem sequenciais","Serializability é em tempo real","São iguais"],a:1},
{q:"O que é gossip protocol?",o:["Tipo de HTTP","Protocolo de consenso","Fofoca de rede","Nós compartilham informação com vizinhos aleatórios: propagação epidêmica (membership, failure detection)"],a:3},
{q:"O que CRDTs (Conflict-free Replicated Data Types) permitem?",o:["Criptografia","Merges automáticos sem coordenação: múltiplas réplicas convergem sem conflito (eventual consistency forte)","Criar conflitos","Tipo de banco"],a:1},
{q:"O que é quorum em sistemas distribuídos?",o:["Tipo de lock","Número mínimo de nós que devem concordar para operação ser válida (W+R > N para consistência)","Backup","Votação política"],a:1},
{q:"O que é two-phase commit (2PC)?",o:["Tipo de merge","Deploy em duas fases","Protocolo de transação distribuída: prepare (todos votam) → commit/abort (coordenador decide)","Two-factor auth"],a:2},
{q:"O que é backpressure em sistemas de streaming distribuído?",o:["Tipo de buffer","Mecanismo onde consumidor sinaliza produtor para desacelerar quando fila está cheia","Compressão","Pressão de rede"],a:1},
{q:"O que é leader election e por que é difícil?",o:["Sempre trivial","Fácil","Escolher um coordenador entre nós: difícil porque rede pode particionar e nós podem falhar","Tipo de routing"],a:2},
{q:"O que Paxos resolve?",o:["Sharding","Consenso distribuído: garantir que nós concordam em um valor mesmo com falhas","Performance","Tipo de sort"],a:1},
{q:"O que é o problema dos generais bizantinos?",o:["Consenso quando alguns nós podem ser maliciosos ou enviar informações contraditórias","Tipo de criptografia","Problema histórico","Problema de rede"],a:0},
{q:"O que é causal consistency?",o:["Operações causalmente relacionadas são vistas na mesma ordem por todos os nós","Tipo de lock","Consistência forte","Consistência eventual"],a:0}
];

QUIZZES["MLOps & Producao"] = [
{q:"O que é model drift e por que monitorar?",o:["Performance do modelo degrada ao longo do tempo porque dados de produção mudam vs dados de treino","Drift de GPU","Modelo se move","Tipo de bug"],a:0},
{q:"O que é feature store?",o:["Cache de modelo","Loja de features","Repositório centralizado de features computadas, versionadas e reutilizáveis entre modelos e equipes","Tipo de banco"],a:2},
{q:"O que é A/B testing em ML?",o:["Teste binário","Comparar modelos em produção dividindo tráfego real entre versões e medindo métricas de negócio","Tipo de CV","Teste unitário"],a:1},
{q:"O que é model versioning e por que é essencial?",o:["Não é necessário","Rastrear versões de modelos, dados, hiperparâmetros e métricas para reprodutibilidade (MLflow, W&B)","Tipo de backup","Git para código"],a:1},
{q:"O que é shadow deployment em ML?",o:["Deploy escuro","Tipo de canary","Modelo novo recebe tráfego real mas suas predições não afetam usuários (comparar com modelo ativo)","Modelo de backup"],a:2},
{q:"O que é data versioning (DVC)?",o:["Tipo de banco","Controle de versão para datasets e pipelines de ML (similar a Git mas para dados grandes)","Versionamento de disco","Backup"],a:1},
{q:"O que é model serving (TensorFlow Serving, Triton)?",o:["Servir comida","Framework web","Tipo de treino","Infraestrutura otimizada para servir inferências de modelo em produção com baixa latência"],a:3},
{q:"O que é CI/CD para ML (ML pipeline)?",o:["Pipeline automatizado: data validation → treino → avaliação → registro → deploy → monitoramento","CI/CD normal","Tipo de teste","Framework"],a:0},
{q:"O que é concept drift vs data drift?",o:["Data drift é pior","Data drift: distribuição dos inputs muda; concept drift: relação input→output muda","Concept drift não existe","São iguais"],a:1},
{q:"O que é model explainability (SHAP, LIME)?",o:["Documentação","Técnicas para entender por que modelo fez determinada predição (feature importance local/global)","Debugging","Tipo de métrica"],a:1},
{q:"O que é edge deployment de modelos ML?",o:["Rodar modelo em dispositivo (mobile, IoT) com latência mínima sem depender de cloud","Tipo de cache","Deploy na borda do disco","Deploy normal"],a:0},
{q:"O que é model compression (quantization, pruning, distillation)?",o:["Aumentar modelo","Tipo de treino","Reduzir tamanho/custo do modelo mantendo performance: quantizar pesos, podar neurônios, destilar","Compressão de arquivo"],a:2},
{q:"O que é responsible AI em produção?",o:["IA com gerente","Tipo de compliance","Monitorar bias, fairness, transparência e impacto social do modelo continuamente em produção","Opcional"],a:2},
{q:"O que é training-serving skew?",o:["Tipo de overfitting","Bug de treino","Data leak","Diferença entre como features são computadas em treino vs serving que causa predições erradas"],a:3},
{q:"O que é GPU orchestration em treino distribuído?",o:["Organizar GPUs","Tipo de CPU","Comprar GPUs","Coordenar múltiplas GPUs/nós para treinar modelo grande (data parallel, model parallel, pipeline parallel)"],a:3}
];

QUIZZES["Pesquisa & Fronteira"] = [
{q:"O que é reinforcement learning from human feedback (RLHF)?",o:["Treinar modelo usando preferências humanas como sinal de reward (usado em ChatGPT)","Supervised learning","RL com recompensas automáticas","Tipo de GAN"],a:0},
{q:"O que são scaling laws em LLMs?",o:["Leis de escala de negócio","Limites de GPU","Tipo de regularização","Relações previsíveis entre tamanho do modelo, dados, compute e performance (Kaplan et al.)"],a:3},
{q:"O que é multimodal AI?",o:["Modelo que processa e gera múltiplos tipos de dados: texto, imagem, áudio, vídeo (GPT-4V, Gemini)","Tipo de CNN","IA que usa mouse","IA com múltiplos GPUs"],a:0},
{q:"O que é um qubit?",o:["Unidade de computação quântica que pode ser 0, 1 ou superposição de ambos simultaneamente","Bit normal","Bit quântico","Byte"],a:0},
{q:"O que é superposição quântica?",o:["Tipo de paralelismo","Posição superior","Estado quântico que é combinação linear de estados base até ser medido (colapso)","Memória quântica"],a:2},
{q:"O que é emaranhamento quântico (entanglement)?",o:["Tipo de superposição","Fios emaranhados","Erro quântico","Correlação entre qubits onde medir um determina instantaneamente o estado do outro"],a:3},
{q:"O que é vantagem quântica (quantum advantage)?",o:["Vantagem competitiva","Tipo de benchmark","Marketing","Computador quântico resolver problema significativamente mais rápido que qualquer computador clássico"],a:3},
{q:"O que o algoritmo de Shor faz?",o:["Ordena dados","Encurta código","Busca em grafos","Fatora números grandes eficientemente em computador quântico (ameaça RSA/criptografia)"],a:3},
{q:"O que é decoerência quântica?",o:["Tipo de superposição","Medição","Perda de informação quântica pela interação com ambiente (principal desafio de hardware)","Tipo de erro clássico"],a:2},
{q:"O que é mixture of experts (MoE) em LLMs?",o:["Ensemble learning","Tipo de attention","Grupo de especialistas","Arquitetura onde apenas subconjunto de parâmetros é ativado por input (eficiência + escala)"],a:3},
{q:"O que é Constitutional AI?",o:["IA governamental","Framework legal","Tipo de RLHF","Método de alignment onde IA segue princípios escritos para auto-correção (Anthropic)"],a:3},
{q:"O que é chain-of-thought prompting?",o:["Tipo de fine-tuning","Pedir ao LLM que raciocine passo a passo antes de responder (melhora em problemas complexos)","Prompt curto","Cadeia de prompts"],a:1},
{q:"O que é o problema de alignment em IA?",o:["Tipo de treino","Alinhamento de texto","Garantir que sistemas de IA façam o que humanos realmente querem (valores, intenções, segurança)","Problema de GPU"],a:2},
{q:"O que são portas quânticas (quantum gates)?",o:["Tipo de circuito clássico","Portões de fábrica","Portas lógicas","Operações unitárias que manipulam qubits (análogas a portas lógicas clássicas: Hadamard, CNOT, Pauli)"],a:3},
{q:"O que é quantum error correction?",o:["Técnicas para proteger informação quântica de erros causados por decoerência e ruído","Tipo de debugging","Correção de código","Corrigir bugs em Python"],a:0}
];

QUIZZES["Ethical Hacking: Cloud, Defesa & Carreira"] = [
{q:"O que é IMDS (Instance Metadata Service) exploitation em cloud?",o:["Acessar metadata de instância (credenciais IAM, tokens) via SSRF ou acesso à VM comprometida","Tipo de firewall","Monitoramento","Tipo de DNS"],a:0},
{q:"O que é SIEM (Security Information and Event Management)?",o:["Antivírus","Tipo de firewall","Sistema que coleta, correlaciona e analisa logs de segurança para detectar ameaças em tempo real","IDS"],a:2},
{q:"O que é chain of custody em forense digital?",o:["Backup","Documentação rigorosa de posse e manipulação de evidência digital (admissibilidade legal)","Tipo de hash","Corrente de metal"],a:1},
{q:"O que é memory forensics e o que pode revelar?",o:["Tipo de log analysis","Backup de RAM","Análise de dump de RAM: processos ocultos, malware em execução, chaves de criptografia, conexões","Forense de disco"],a:2},
{q:"O que Volatility Framework faz?",o:["Framework web","Analisa dumps de memória RAM para forense: lista processos, DLLs, conexões de rede, registry","Tipo de SIEM","Mede volatilidade financeira"],a:1},
{q:"O que é file carving em forense de disco?",o:["Extrair arquivos de disco baseado em headers/footers sem depender do file system (recuperar deletados)","Esculpir arquivo","Tipo de backup","Compressão"],a:0},
{q:"O que é anti-forensics?",o:["Contra forense legal","Técnicas para destruir, ocultar ou alterar evidências digitais (wiping, steganografia, timestomping)","Backup seguro","Tipo de criptografia"],a:1},
{q:"O que é incident response e quais são as fases?",o:["Responder emails","Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned","Só investigar","Deploy → Test"],a:1},
{q:"O que é network forensics com PCAP?",o:["Monitoramento","Tipo de scan","Forense de cabo","Capturar e analisar tráfego de rede (PCAP) para reconstruir atividade, identificar exfiltração e C2"],a:3},
{q:"O que é IoT forensics e por que é desafiador?",o:["Igual a desktop","Extrair evidências de dispositivos IoT: firmware proprietário, memória limitada, protocolos diversos","Tipo de mobile forensics","Forense fácil"],a:1},
{q:"O que são indicators of compromise (IOCs)?",o:["Indicadores de performance","Artefatos que indicam intrusão: hashes de malware, IPs de C2, domínios suspeitos, padrões de tráfego","Indicadores financeiros","Tipo de log"],a:1},
{q:"O que é threat hunting?",o:["Monitoramento passivo","Caçar ameaças na floresta","Tipo de pentest","Busca proativa de ameaças em ambiente usando hipóteses, IOCs e análise de comportamento anômalo"],a:3},
{q:"O que é S3 bucket misconfiguration como vetor de ataque?",o:["Buckets públicos ou mal configurados expondo dados sensíveis (um dos erros mais comuns em cloud)","Tipo de XSS","Buffer overflow","Bug de HTML"],a:0},
{q:"O que é timeline analysis em forense?",o:["Tipo de Gantt chart","Reconstruir cronologia de eventos: file timestamps, logs, registry, browser history em uma timeline unificada","Análise de prazos","Análise de performance"],a:1},
{q:"O que é DFIR (Digital Forensics and Incident Response)?",o:["Framework web","Disciplina que combina forense digital com resposta a incidentes para investigar e remediar breaches","Antivírus avançado","Tipo de DevOps"],a:1}
];

QUIZZES["Escrita e Metodologia Cientifica"] = [
{q:"Qual é a estrutura padrão de um artigo científico?",o:["Introdução, Código, Conclusão","Abstract, Code, Deploy","Introdução, Trabalhos Relacionados, Metodologia, Resultados, Discussão, Conclusão (IMRaD expandido)","Resumo, Gráficos, Bibliografia"],a:2},
{q:"O que um abstract deve conter?",o:["Referências principais","Problema, abordagem, resultados principais e contribuição em ~250 palavras","Todo o artigo resumido em 1 página","Só a conclusão"],a:1},
{q:"O que é revisão por pares (peer review)?",o:["Revisão gramatical","Revisar código","Especialistas independentes avaliam qualidade, validade e contribuição do trabalho antes de publicar","Review de PR"],a:2},
{q:"O que é plágio acadêmico?",o:["Usar ideias, texto ou dados de outros sem atribuição adequada (inclui auto-plágio)","Colaborar","Parafrasear","Citar fontes"],a:0},
{q:"O que LaTeX é e por que acadêmicos usam?",o:["IDE","Editor de texto","Linguagem de programação","Sistema de tipografia que separa conteúdo de formatação, ideal para fórmulas e referências"],a:3},
{q:"O que BibTeX/BibLaTeX gerenciam?",o:["Código fonte","Banco de dados","Bibliografias de livros","Referências bibliográficas: armazenam, formatam e citam fontes automaticamente em LaTeX"],a:3},
{q:"O que é uma revisão sistemática de literatura?",o:["Ler 5 papers","Busca estruturada e reproduzível com critérios de inclusão/exclusão para mapear estado da arte","Ler tudo sobre o tema","Revisão informal"],a:1},
{q:"O que são slides eficazes para defesa de dissertação?",o:["Visuais claros, uma ideia por slide, flow narrativo: problema → approach → resultados → contribuição","Só código","Texto completo do paper","Muitos bullet points"],a:0},
{q:"O que é fator de impacto de um periódico?",o:["Número de autores","Número de rejeições","Número de páginas","Média de citações dos artigos publicados nos últimos 2 anos (métrica de relevância do periódico)"],a:3},
{q:"O que é o h-index de um pesquisador?",o:["h papers com pelo menos h citações cada (equilíbrio entre produtividade e impacto)","Número de orientandos","Número de papers","Nota de doutorado"],a:0},
{q:"O que diferencia conferência de periódico em Computação?",o:["Periódicos são mais rápidos","Conferências têm ciclo rápido e são mais valorizadas em subáreas; periódicos são mais detalhados e revisados","Conferências são melhores sempre","São iguais"],a:1},
{q:"O que é um DOI (Digital Object Identifier)?",o:["Tipo de ISBN","Identificador permanente e único para publicações acadêmicas (resolve para URL estável)","Link do Google","Tipo de PDF"],a:1},
{q:"O que é reprodutibilidade em pesquisa?",o:["Outros pesquisadores conseguem obter mesmos resultados usando mesmos dados e métodos","Repetir experimentos","Citar corretamente","Publicar duas vezes"],a:0},
{q:"O que é open access em publicações?",o:["Publicações disponíveis gratuitamente sem paywall (green, gold, diamond)","Dados abertos","Código aberto","Acesso à universidade"],a:0},
{q:"O que é elevator pitch para pesquisa?",o:["Explicar sua pesquisa em 1-2 minutos de forma clara e convincente para qualquer audiência","Pitch em elevador","Apresentação formal","Defesa de tese"],a:0}
];

QUIZZES["Iniciacao Cientifica (IC)"] = [
{q:"O que é Iniciação Científica (IC)?",o:["Primeiro contato com pesquisa acadêmica na graduação, sob orientação de professor","Estágio em empresa","Mestrado light","Disciplina obrigatória"],a:0},
{q:"Como escolher um orientador de IC?",o:["O mais famoso","Pesquisar interesses de pesquisa, conversar pessoalmente, verificar disponibilidade e estilo de orientação","Aleatoriamente","O que tem mais bolsas"],a:1},
{q:"O que é PIBIC/PIBIT?",o:["Programas do CNPq de bolsas de IC (científica e tecnológica) para graduandos","Bolsas de mestrado","Programas de estágio","Programas de extensão"],a:0},
{q:"O que um plano de trabalho de IC deve conter?",o:["Resultados","Só o tema","Introdução, objetivos, justificativa, metodologia, cronograma e referências","Código completo"],a:2},
{q:"O que é o Congresso de IC (SIICUSP, PIBIC)?",o:["Feira de ciências","Hackathon","Congresso de empresas","Evento onde alunos apresentam resultados de IC em pôsteres ou apresentações orais"],a:3},
{q:"O que é o Lattes (Currículo Lattes)?",o:["LinkedIn acadêmico internacional","Plataforma brasileira de currículo acadêmico (CNPq) que registra produção, bolsas e formação","Tipo de café","Portal de vagas"],a:1},
{q:"O que é FAPESP/FAPERJ/FAPEMIG?",o:["Ministérios","Universidades federais","Fundações estaduais de amparo à pesquisa que concedem bolsas e financiamento","Empresas privadas"],a:2},
{q:"Qual é a diferença entre pesquisa qualitativa e quantitativa?",o:["Qualitativa é mais precisa","Quantitativa é melhor","Quantitativa: dados numéricos, estatística; qualitativa: dados textuais, interpretação de significado","São iguais"],a:2},
{q:"O que é um pôster acadêmico?",o:["Artigo impresso","Apresentação visual de pesquisa em formato grande (resultados, gráficos) para exposição em congresso","Slide impresso","Decoração de lab"],a:1},
{q:"O que é revisão de literatura na IC?",o:["Ler artigos de jornal","Mapear e sintetizar trabalhos existentes relacionados ao tema para fundamentar a pesquisa","Ler livros","Corrigir texto"],a:1},
{q:"Por que IC é importante para quem quer pós-graduação?",o:["Não é importante","Desenvolve habilidades de pesquisa, gera publicações e fortalece currículo para seleção de mestrado","Só pela bolsa","É obrigatório"],a:1},
{q:"O que é um relatório de IC?",o:["Artigo científico","Relatório de estágio","Documento que descreve atividades realizadas, resultados obtidos e próximos passos ao final do período","TCC"],a:2},
{q:"O que é ética em pesquisa com seres humanos (CEP)?",o:["Só para medicina","Aprovação obrigatória do Comitê de Ética em Pesquisa antes de coletar dados de pessoas","Termo de responsabilidade","Opcional"],a:1},
{q:"O que é estado da arte em pesquisa?",o:["Arte em laboratório","Primeiro paper da área","O que há de mais recente e avançado em determinada área de pesquisa (current best approaches)","Histórico completo"],a:2},
{q:"Como gerenciar tempo na IC junto com a graduação?",o:["Só trabalhar nas férias","Definir horas fixas semanais, priorizar tarefas com cronograma, comunicar progresso ao orientador regularmente","Largar a graduação","Não é possível"],a:1}
];

QUIZZES["Mestrado"] = [
{q:"Qual é a diferença entre mestrado acadêmico e profissional?",o:["Acadêmico é mais fácil","São iguais","Profissional não tem dissertação","Acadêmico: foco em pesquisa e publicação; profissional: foco em aplicação prática no mercado"],a:3},
{q:"O que é uma dissertação de mestrado?",o:["Tese de doutorado menor","Artigo longo","Trabalho monográfico que demonstra capacidade de pesquisa independente em tema específico","Relatório de IC grande"],a:2},
{q:"O que é qualificação de mestrado?",o:["Exame intermediário onde banca avalia proposta, metodologia e progresso antes de concluir a pesquisa","Defesa final","Prova de disciplina","Prova de entrada"],a:0},
{q:"Como funciona o processo seletivo de mestrado em Computação?",o:["Só nota da graduação","Prova escrita + entrevista + análise de currículo/projeto (varia por programa)","Indicação de professor","Só vestibular"],a:1},
{q:"O que é CAPES e qual seu papel na pós-graduação?",o:["Tipo de bolsa","Universidade federal","Coordenação de Aperfeiçoamento de Pessoal: avalia programas de pós, concede bolsas e regulamenta","Fundação de pesquisa"],a:2},
{q:"O que é Qualis CAPES?",o:["Tipo de bolsa","Ranking de universidades","Sistema de classificação de periódicos e conferências por qualidade (A1 a C, afeta avaliação do programa)","Nota do professor"],a:2},
{q:"Quantos créditos e publicações um mestrado tipicamente exige?",o:["Disciplinas obrigatórias + eletivas (24-30 créditos) e pelo menos 1 publicação em conferência/periódico","10 publicações","Nenhum crédito","Só dissertação"],a:0},
{q:"O que é uma banca de defesa?",o:["Grupo de 3+ professores (incluindo externo) que avaliam apresentação e dissertação final","Mobília","Entrevista de emprego","Prova escrita"],a:0},
{q:"Por que publicar durante o mestrado é importante?",o:["Demonstra contribuição, fortalece currículo para doutorado/mercado e dá visibilidade à pesquisa","Só para bolsa","É obrigatório para defender","Não é importante"],a:0},
{q:"O que é linha de pesquisa em um programa de pós?",o:["Fila de pesquisadores","Tipo de bolsa","Disciplina obrigatória","Tema geral que agrupa professores e projetos com foco comum (ex: IA, Segurança, Sistemas)"],a:3},
{q:"O que é SBC (Sociedade Brasileira de Computação)?",o:["Sociedade científica que organiza congressos (SBRC, SBBD, SIBGRAPI), publica e representa a área","Universidade","Sindicato","Empresa de software"],a:0},
{q:"Qual é a duração típica de um mestrado acadêmico em Computação no Brasil?",o:["1 ano","6 meses","24 meses (2 anos), podendo estender para 30 meses em alguns programas","4 anos"],a:2},
{q:"O que é sandwich (doutorado/mestrado sanduíche)?",o:["Período de pesquisa no exterior (3-12 meses) com bolsa, colaborando com grupo internacional","Lanche do lab","Mestrado duplo","Programa duplo"],a:0},
{q:"O que é contribuição científica em uma dissertação?",o:["Avanço original ao estado da arte: novo método, nova análise, nova aplicação ou nova evidência","Reproduzir resultados","Descobrir algo novo","Revisar literatura"],a:0},
{q:"O que é orientação acadêmica saudável?",o:["Sem contato","Só cobranças","Reuniões regulares, feedback construtivo, autonomia gradual, comunicação aberta sobre dificuldades","Orientador faz tudo"],a:2}
];

QUIZZES["Doutorado"] = [
{q:"Qual é a diferença fundamental entre mestrado e doutorado?",o:["São iguais em profundidade","Doutorado exige contribuição original significativa ao conhecimento (tese); mestrado demonstra capacidade de pesquisa","Doutorado não tem dissertação","Doutorado é mais longo"],a:1},
{q:"O que é uma tese de doutorado?",o:["Artigo expandido","Coleção de papers","Dissertação grande","Trabalho que apresenta contribuição original, substancial e inédita ao campo de conhecimento"],a:3},
{q:"O que é exame de qualificação de doutorado?",o:["Defesa final","Prova de disciplinas","Prova de entrada","Avaliação profunda pela banca da proposta, revisão de literatura, metodologia e viabilidade da tese"],a:3},
{q:"Quanto tempo dura um doutorado em Computação tipicamente?",o:["10 anos","1 ano","2 anos","4-5 anos no Brasil; 5-7 anos nos EUA"],a:3},
{q:"O que são conferências top em Computação (tier 1)?",o:["ICML, NeurIPS, CVPR, SIGCOMM, SOSP, CCS, PLDI (variam por subárea, aceitas internacionalmente)","Congressos brasileiros","Workshops","Qualquer conferência"],a:0},
{q:"O que é o processo de submissão double-blind?",o:["Cego de um lado","Single-blind","Nem autores sabem quem revisou, nem revisores sabem quem escreveu (reduz viés)","Open review"],a:2},
{q:"O que é networking acadêmico?",o:["Configurar redes","Tipo de pesquisa","LinkedIn","Construir relações profissionais com pesquisadores via conferências, colaborações e eventos"],a:3},
{q:"O que é pós-doutorado?",o:["Professor titular","Doutorado duplo","Outro doutorado","Posição temporária de pesquisa após doutorado para aprofundar expertise e publicar antes de cargo permanente"],a:3},
{q:"O que são grants (financiamento de pesquisa)?",o:["Recursos competitivos para financiar projetos de pesquisa (FAPESP Temático, CNPq Universal, ERC, NSF)","Salário de professor","Tipo de bolsa de IC","Bolsas de estudo"],a:0},
{q:"O que é carreira tenure-track nos EUA?",o:["Contrato CLT","Emprego fixo imediato","Posição de professor com período probatório (5-7 anos) culminando em avaliação para cargo permanente (tenure)","Pós-doc"],a:2},
{q:"O que é concurso para professor no Brasil?",o:["Provas (escrita, didática), defesa de memorial e análise de currículo para cargo permanente em universidade pública","Entrevista simples","Só doutorado basta","Indicação"],a:0},
{q:"O que é índice de citações e por que importa?",o:["Número de downloads","Quantas vezes seus trabalhos são referenciados por outros; indica impacto e relevância da pesquisa","Número de papers","Não importa"],a:1},
{q:"O que é sabbatical em carreira acadêmica?",o:["Aposentadoria","Período de licença (6-12 meses) para pesquisa intensiva, geralmente em outra instituição","Férias longas","Férias remuneradas"],a:1},
{q:"O que é defesa de tese de doutorado?",o:["Apresentação pública seguida de arguição pela banca (5+ membros, incluindo externos) que avalia contribuição original","Apresentação curta","Prova escrita","Entrevista"],a:0},
{q:"O que é programa de pós com nota 7 na CAPES?",o:["Nota mínima","Programa novo","Nota máxima: programa de excelência com forte internacionalização, alta produção e egressos de destaque","Nota mediana"],a:2}
];

QUIZZES["Ferramentas e Recursos Academicos"] = [
{q:"O que Overleaf é?",o:["Editor LaTeX colaborativo online (como Google Docs para LaTeX)","IDE Python","Editor de código","Framework web"],a:0},
{q:"O que Zotero/Mendeley fazem?",o:["Editam LaTeX","Editam PDFs","Gerenciam referências: armazenam papers, geram citações e bibliografias automaticamente","Escrevem papers"],a:2},
{q:"O que Google Scholar faz?",o:["Busca patentes","Busca acadêmica: encontra papers, mostra citações, métricas de autores e alerts de novos trabalhos","Busca web normal","Indexa teses"],a:1},
{q:"O que é ArXiv?",o:["Banco de dados","Repositório de preprints (papers antes de peer review) gratuito, muito usado em CS, física e matemática","Revista científica","Tipo de arquivo"],a:1},
{q:"O que é Jupyter Notebook para pesquisa?",o:["Caderno físico","Ambiente interativo que combina código, texto, equações e visualizações — ideal para pesquisa reproduzível","Editor LaTeX","IDE completo"],a:1},
{q:"O que é Git/GitHub em pesquisa?",o:["Editor de texto","Tipo de banco","Versionamento de código, dados e papers; colaboração; reprodutibilidade; GitHub Pages para portfolio","Só para indústria"],a:2},
{q:"O que é ORCID?",o:["Login acadêmico","Identificador único e persistente de pesquisador (desambigua nomes, integra com publicações)","Tipo de flor","Tipo de DOI"],a:1},
{q:"O que Grammarly/LanguageTool ajudam em escrita acadêmica?",o:["Geram referências","Traduzem papers","Formatam LaTeX","Verificam gramática, estilo e clareza do texto em inglês (suporte para escrita não-nativa)"],a:3},
{q:"O que é Connected Papers?",o:["Rede social acadêmica","Base de dados","Ferramenta visual que mostra grafo de papers relacionados a partir de um paper semente","Papers conectados por cabo"],a:2},
{q:"O que é Semantic Scholar?",o:["Scholar do Google","Repositório de dados","Tipo de DOI","Buscador acadêmico com IA que extrai entidades, mostra influência e recomenda papers relevantes"],a:3},
{q:"O que é Research Rabbit?",o:["Tipo de Zotero","Buscador web","Ferramenta que sugere papers relevantes baseado na sua coleção (discovery + alerts)","Coelho de pesquisa"],a:2},
{q:"O que é Weights & Biases (W&B) para pesquisa em ML?",o:["Plataforma de experiment tracking: registra métricas, hiperparâmetros, visualiza e compara runs","Tipo de MLflow","Framework de treino","Balança digital"],a:0},
{q:"O que é Docker para reprodutibilidade científica?",o:["Tipo de VM","Tipo de Git","Container com todo ambiente (dependências, versões) para que qualquer pessoa reproduza o experimento","Backup de dados"],a:2},
{q:"O que é DVC (Data Version Control) para pesquisa?",o:["Versionamento de datasets e modelos grandes (funciona com Git mas para arquivos pesados)","Banco de dados","Backup de dados","Tipo de GitHub"],a:0},
{q:"O que é Sci-Hub e qual a controvérsia?",o:["Site que disponibiliza papers com paywall gratuitamente; controverso por violar copyright de editoras","Buscador acadêmico","Repositório oficial","Editora científica"],a:0}
];

QUIZZES["Desenvolvimento de Carreira Tech"] = [
{q:"O que é active recall como técnica de estudo?",o:["Sublinhar texto","Assistir vídeos","Reler anotações","Testar-se ativamente forçando o cérebro a recuperar informação (flashcards, quizzes, perguntas)"],a:3},
{q:"O que é spaced repetition?",o:["Estudar sem parar","Repetir tudo diariamente","Revisar conteúdo em intervalos crescentes baseados na curva de esquecimento (Anki, SuperMemo)","Revisar uma vez"],a:2},
{q:"O que um bom portfólio de desenvolvedor deve conter?",o:["Só GitHub","Certificados","Muitos repos vazios","Projetos com README, código limpo, deploy funcional, processo documentado e diversidade de tecnologias"],a:3},
{q:"O que são certificações como OSCP, CEH, CompTIA?",o:["Cursos online","Badges de LinkedIn","Diplomas universitários","Certificações profissionais de segurança que validam habilidades práticas para o mercado"],a:3},
{q:"Qual é a diferença entre Junior, Pleno e Senior?",o:["Só salário","Junior: executa com ajuda; pleno: executa e decide; senior: projeta, mentorea e influencia arquitetura","São iguais","Só tempo de experiência"],a:1},
{q:"O que é Staff Engineer/Principal Engineer?",o:["IC (individual contributor) sênior que define direção técnica, resolve problemas cross-team e mentorea seniors","CTO","Gerente","Arquiteto junior"],a:0},
{q:"O que é leetcode grinding e quando vale a pena?",o:["Sempre vale","Praticar algoritmos para entrevistas de big tech; vale quando mirando FAANG, não como forma principal de estudo","Substituir projetos","Nunca vale"],a:1},
{q:"O que é networking profissional efetivo em tech?",o:["Contribuir em comunidades, conferências, open source; construir relações genuínas baseadas em valor mútuo","Adicionar todos no LinkedIn","Só ir a meetups","Spam de mensagens"],a:0},
{q:"O que é burnout em tech e como prevenir?",o:["Trabalhar pouco","Esgotamento físico e mental por estresse crônico; prevenir com limites, descanso e comunicação","Não existe em tech","Preguiça"],a:1},
{q:"O que é a regra de Feynman para aprender?",o:["Fórmula de física","Ler 3 vezes","Decorar fórmulas","Explique o conceito como se fosse para uma criança de 12 anos; se não consegue, não entendeu de verdade"],a:3},
{q:"O que é blue team vs red team como carreira?",o:["Red team: ataque/pentest; blue team: defesa/monitoramento/resposta a incidentes","Times esportivos","Red é melhor","São o mesmo trabalho"],a:0},
{q:"O que é T-shaped professional?",o:["Tipo de camiseta","Especialista puro","Generalista puro","Profissional com conhecimento amplo em várias áreas e profundo em uma especialidade"],a:3},
{q:"O que é um career ladder (trilha de carreira)?",o:["Estrutura que define níveis, expectativas e critérios de promoção em cada nível (IC e gestão)","Plano de estudos","Tipo de organograma","Escada física"],a:0},
{q:"O que considerar ao escolher entre startup e big tech?",o:["Big tech sempre melhor","Salário é tudo","Startup: mais escopo, crescimento rápido, risco; big tech: escala, mentoria, estabilidade, especialização","Startup sempre melhor"],a:2},
{q:"O que é síndrome do impostor em tech?",o:["Sentir que não merece conquistas apesar de evidências; muito comum em tech, especialmente no início","Falta de habilidade","Preguiça","Fingir saber"],a:0}
];

QUIZZES["Lideranca & Gestao"] = [
{q:"Qual é a diferença entre líder e gerente?",o:["Líder inspira e dá direção; gerente organiza, planeja e executa (idealmente combina ambos)","Gerente é melhor","São iguais","Líder é melhor"],a:0},
{q:"O que é product-led engineering?",o:["Tipo de Agile","Engenharia de produto","Marketing","Engenheiro entende o 'porquê' de negócio das decisões técnicas e otimiza para impacto no usuário"],a:3},
{q:"O que OKRs (Objectives and Key Results) fazem?",o:["Framework de alinhamento: Objective (qualitativo, inspirador) + Key Results (quantitativo, mensurável)","Tipo de KPI","Tipo de sprint","Avaliação de desempenho"],a:0},
{q:"O que é servant leadership?",o:["Tipo de Agile","Líder autoritário","Servir café","Líder que prioriza crescimento e bem-estar do time, removendo obstáculos e empoderando decisões"],a:3},
{q:"O que é uma tech spec (design document)?",o:["Documento que descreve problema, soluções consideradas, decisão, tradeoffs e plano de implementação","Spec de hardware","Tipo de ticket","README do projeto"],a:0},
{q:"O que é engineering metrics (DORA metrics)?",o:["Linhas de código","Deployment frequency, lead time, change failure rate, recovery time — medem eficácia de entrega","Métricas de vendas","Métricas de código"],a:1},
{q:"O que é 1:1 (one-on-one) meeting?",o:["Reunião de time","Reunião periódica entre líder e liderado para feedback, alinhamento, desenvolvimento e support","Retrospectiva","Standup"],a:1},
{q:"O que é technical debt e como gerenciar?",o:["Atalhos técnicos que acumulam custo futuro; gerenciar: tornar visível, priorizar, alocar tempo fixo","Ignorar sempre","Dívida financeira","Reescrever tudo"],a:0},
{q:"O que é blameless postmortem?",o:["Análise de incidente focada em sistemas e processos (não em culpar pessoas) para prevenir recorrência","Autopsia médica","Demitir responsável","Tipo de bug report"],a:0},
{q:"O que é engineering budget e capacity planning?",o:["Orçamento financeiro","Planejar quanto tempo/pessoas alocar entre features, debt, manutenção e crescimento por quarter","Comprar equipamento","Tipo de sprint planning"],a:1},
{q:"O que é stakeholder management?",o:["Gerenciar pessoas","Gerenciar ações","Alinhar expectativas, comunicar progresso e negociar prioridades com partes interessadas (PMs, execs, users)","Tipo de RACI"],a:2},
{q:"O que é making the invisible visible em gestão de engenharia?",o:["Dashboards bonitos","Documentação","Tipo de monitoring","Tornar trabalho técnico (infra, debt, segurança) legível para não-técnicos para conseguir prioridade"],a:3},
{q:"O que é scope creep?",o:["Bug de CSS","Feature flag","Expansão descontrolada do escopo do projeto sem ajuste de timeline/recursos","Tipo de deploy"],a:2},
{q:"O que é a regra de dois pizzas da Amazon?",o:["Time não deve ser maior do que pode ser alimentado por duas pizzas (~6-8 pessoas) para manter agilidade","Regra de deploy","Regra de almoço","Regra de orçamento"],a:0},
{q:"O que é ritmo de entrega sustentável?",o:["Sprint de 1 dia","Entregar o máximo possível","Crunch constante","Velocidade que o time mantém sem degradar qualidade, saúde ou moral ao longo do tempo"],a:3}
];

QUIZZES["Lideranca Tecnica"] = [
{q:"O que um Tech Lead faz diferente de um Senior Engineer?",o:["Além de contribuir tecnicamente, é responsável por direção técnica, alinhamento e eficácia do time","Mais código","Só reuniões","Menos código"],a:0},
{q:"O que é architectural decision record (ADR)?",o:["Design system","Documento que registra decisão arquitetural: contexto, opções consideradas, decisão e consequências","Ata de reunião","Tipo de ticket"],a:1},
{q:"O que é RFC (Request for Comments) em engenharia?",o:["Bug report","Protocolo de internet","Documento propondo mudança técnica significativa, aberto para feedback do time antes de implementar","Tipo de PR"],a:2},
{q:"O que é comunicação em crise técnica?",o:["Informar stakeholders com: o que aconteceu, impacto, ações tomadas, ETA e próximos updates (transparência)","Culpar terceiros","Enviar email","Esconder o problema"],a:0},
{q:"O que é technical mentoring?",o:["Guiar crescimento técnico: pair programming, code review construtivo, desafios graduais, career advice","Só indicar cursos","Fazer pelo mentorado","Dar respostas"],a:0},
{q:"O que é leading without authority?",o:["Influenciar decisões e alinhar pessoas sem ser chefe formal: via expertise, confiança e comunicação","Tipo de gestão","Ser autoritário","Impossível"],a:0},
{q:"O que é runbook?",o:["Documento operacional com passos para resolver incidentes específicos (diagnóstico, mitigação, recovery)","Manual de código","Tipo de README","Livro de corrida"],a:0},
{q:"O que é gestão de projetos ágil vs waterfall?",o:["Waterfall não existe mais","Ágil: iterativo, adaptativo, entregas incrementais; waterfall: sequencial, planejamento upfront completo","São iguais","Ágil é sempre melhor"],a:1},
{q:"O que é estimativa de software e por que é difícil?",o:["Multiplicar por 3","Não estimar nunca","Fácil e precisa","Prever esforço é incerto: complexidade emergente, dependências e unknowns; usar ranges e técnicas como planning poker"],a:3},
{q:"O que é priorização MoSCoW?",o:["Método de estimativa","Capital da Rússia","Must have, Should have, Could have, Won't have — classificar features por importância para escopo","Tipo de Kanban"],a:2},
{q:"O que é status page e por que times de infra precisam?",o:["Página pública mostrando saúde dos serviços, incidentes ativos e histórico (transparência com usuários)","Dashboard interno","Tipo de monitoring","Página de status HTTP"],a:0},
{q:"O que é chaos engineering?",o:["Tipo de pentest","Bagunçar produção","Debugging","Injetar falhas controladas em produção para descobrir fraquezas antes que causem incidentes reais"],a:3},
{q:"O que é on-call rotation?",o:["Tipo de sprint","Trabalhar à noite","Reunião diária","Escala de engenheiros de plantão para responder alertas e incidentes fora do horário"],a:3},
{q:"O que é platform engineering?",o:["Construir ferramentas e abstrações internas para que devs façam deploy, monitorem e operem sem ajuda de ops","Frontend para plataformas","Engenharia de plataformas petrolíferas","Tipo de DevOps"],a:0},
{q:"O que é build vs buy decision?",o:["Construir sempre","Comprar sempre","Avaliar se é melhor construir solução interna ou comprar/usar SaaS: considerar custo, manutenção, diferenciação","Depende do orçamento só"],a:2}
];

QUIZZES["Produto & Estrategia"] = [
{q:"O que é product-market fit?",o:["Produto bonito","Quando o produto resolve problema real de um mercado grande o suficiente (pessoas precisam e pagam)","MVP pronto","Muitos features"],a:1},
{q:"O que é MVP (Minimum Viable Product)?",o:["Beta testing","Produto mínimo sem valor","Protótipo completo","Versão mais simples do produto que entrega valor e permite validar hipóteses com usuários reais"],a:3},
{q:"O que é discovery vs delivery em produto?",o:["Discovery: descobrir O QUE construir (pesquisa, hipóteses); delivery: COMO construir (engenharia, deploy)","Discovery é mais importante","São iguais","Delivery é discovery"],a:0},
{q:"O que é North Star Metric?",o:["Uma métrica que melhor captura o valor que o produto entrega aos usuários (guia toda a estratégia)","Revenue sempre","Métrica de astronomia","Número de usuários sempre"],a:0},
{q:"O que são user stories?",o:["Como [persona], eu quero [ação] para [benefício] — descreve necessidade do usuário, não solução técnica","Tipo de ticket","Histórias de ficção","Bug report"],a:0},
{q:"O que é design thinking?",o:["Método de design UI","Pensar em design gráfico","Tipo de Agile","Framework de resolução de problemas: empatia → definição → ideação → prototipação → teste (centrado no humano)"],a:3},
{q:"O que é o framework RICE para priorização?",o:["Método de planning","Tipo de estimativa","Tipo de arroz","Reach × Impact × Confidence ÷ Effort = score para priorizar features objetivamente"],a:3},
{q:"O que é churn rate?",o:["Taxa de confusão","Percentual de clientes/usuários que param de usar o produto em dado período","Taxa de crescimento","Taxa de conversão"],a:1},
{q:"O que é product-led growth?",o:["Marketing do produto","Growth hacking","Produto é o principal motor de aquisição, conversão e expansão (ex: Figma, Slack, Notion)","Vendas tradicionais"],a:2},
{q:"O que é jobs to be done (JTBD)?",o:["Kanban board","Lista de tarefas","Framework que foca no 'trabalho' que o usuário contrata o produto para fazer (motivação real)","Tipo de user story"],a:2},
{q:"O que é feature flag (feature toggle)?",o:["Mecanismo que permite ligar/desligar features em produção sem deploy (A/B test, rollout gradual)","Bug flag","Bandeira no código","Tipo de branch"],a:0},
{q:"O que é roadmap de produto?",o:["Mapa rodoviário","Sprint planning","Plano visual de alto nível mostrando direção do produto: temas, problemas a resolver, timeline indicativa","Lista de features detalhada"],a:2},
{q:"O que é retention curve?",o:["Curva de crescimento","Tipo de funil","Gráfico mostrando % de usuários que continuam usando o produto ao longo do tempo (flat = bom)","Curva de aprendizado"],a:2},
{q:"O que é dogfooding?",o:["Beta testing","Alpha testing","Usar seu próprio produto internamente antes de lançar para encontrar problemas e ter empatia com o usuário","Comida de cachorro"],a:2},
{q:"O que é cohort analysis?",o:["Análise de grupo","Análise demográfica","Agrupar usuários por período de aquisição e comparar comportamento ao longo do tempo (retenção, revenue)","Tipo de A/B test"],a:2}
];

QUIZZES["Gestao de Pessoas"] = [
{q:"O que é feedback construtivo?",o:["Só elogiar","Crítica pessoal","Elogio vago","Observação específica, baseada em comportamento observado, com sugestão concreta de melhoria"],a:3},
{q:"O que é psychological safety em times?",o:["Ambiente onde pessoas se sentem seguras para assumir riscos, errar e discordar sem medo de punição","Bem-estar psicológico","Segurança do prédio","Tipo de benefício"],a:0},
{q:"O que é situational leadership?",o:["Liderar em situações","Liderar por exemplo","Adaptar estilo de liderança (direcionar, coaching, apoiar, delegar) ao nível de maturidade do liderado","Tipo de Agile"],a:2},
{q:"O que são skip-levels?",o:["Reuniões 1:1 entre gestor de nível N e colaboradores de nível N-2 (pulando o gestor direto)","Promoção dupla","Tipo de escalação","Pular reuniões"],a:0},
{q:"O que é performance review efetivo?",o:["Ranking forçado","Nota de 1 a 5","Avaliação periódica com evidências, feedback 360°, metas claras e plano de desenvolvimento","Review de código"],a:2},
{q:"O que é delegation efetiva?",o:["Fazer tudo sozinho","Atribuir responsabilidade com contexto, autoridade e expectativas claras; acompanhar sem microgerenciar","Jogar trabalho","Microgerenciar"],a:1},
{q:"O que é hiring bar em tech?",o:["Nível mínimo de competência e cultural fit que candidatos devem atingir para ser contratados","Tipo de entrevista","Bar de contratação","Número de vagas"],a:0},
{q:"O que é onboarding efetivo de engenheiro?",o:["Ler documentação sozinho","Mostrar mesa e login","Trial by fire","Programa estruturado: buddy, primeira tarefa guiada, overview da stack, acessos, 1:1s frequentes, 30/60/90 goals"],a:3},
{q:"O que é retention de talentos?",o:["Aumentar salário só","Reter informações","Prender no contrato","Manter bons profissionais: crescimento, compensação justa, desafios, autonomia, propósito e cultura saudável"],a:3},
{q:"O que é matrix vs flat organization?",o:["Matrix é melhor sempre","Matrix: reporta a função + projeto (dual); flat: poucos níveis hierárquicos, mais autonomia","Flat não funciona","São iguais"],a:1},
{q:"O que é managing up?",o:["Comunicar proativamente com seu gestor: alinhar expectativas, compartilhar contexto, pedir recursos","Gerenciar superiores","Ignorar gestão","Bajular chefe"],a:0},
{q:"O que é cultura de engenharia?",o:["Linguagem de programação","Tipo de benefício","Decoração do escritório","Valores e práticas compartilhadas: code review, testing, autonomia, aprendizado, comunicação aberta"],a:3},
{q:"O que é PIP (Performance Improvement Plan)?",o:["Tipo de feedback","Promoção","Plano formal com metas e prazo para melhorar performance insuficiente antes de decisão de desligamento","Instalar pacote"],a:2},
{q:"O que é diversity and inclusion em tech?",o:["Contratar qualquer um","RH cuida disso","Construir times diversos (gênero, raça, background) com ambiente inclusivo onde todos contribuem e pertencem","Não importa em tech"],a:2},
{q:"O que é career conversation?",o:["Discussão estruturada sobre aspirações, forças, gaps e oportunidades de crescimento do liderado","Entrevista de emprego","Performance review","Conversa informal"],a:0}
];

QUIZZES["Estrategia, Negocio & Empreendedorismo"] = [
{q:"O que é competitive advantage (vantagem competitiva)?",o:["Ser mais barato","Algo que diferencia sua empresa/produto e é difícil de copiar (tecnologia, rede, dados, marca)","Ter mais features","Ser primeiro"],a:1},
{q:"O que é unit economics?",o:["Tipo de ROI","Economia universitária","Microeconomia","Receita e custo por unidade (CAC vs LTV): cada cliente gera mais valor do que custa adquirir?"],a:3},
{q:"O que é venture capital (VC)?",o:["IPO","Empréstimo bancário","Capital de aventura","Investimento de risco em startups em troca de equity: Series A, B, C escalando investimento"],a:3},
{q:"O que é product moat (fosso)?",o:["Barreira que protege negócio de competidores: network effects, switching costs, dados, marca, regulação","Fosso medieval","Marketing","Tipo de feature"],a:0},
{q:"O que é lean startup methodology?",o:["Framework de código","Método de gestão","Build → Measure → Learn: ciclo rápido de validar hipóteses com mínimo investimento antes de escalar","Startup magra"],a:2},
{q:"O que é runway de uma startup?",o:["Pista de corrida","Pista de decolagem","Tempo que a empresa sobrevive com o dinheiro que tem antes de precisar de nova receita/investimento","Tempo até IPO"],a:2},
{q:"O que é platform thinking?",o:["Pensamento estratégico","Construir ecossistema onde múltiplos lados (produtores e consumidores) criam valor mutuamente (marketplace)","Pensar sobre plataformas","Tipo de infraestrutura"],a:1},
{q:"O que é TAM, SAM, SOM?",o:["Tipo de segmentação","Métricas de produto","Métricas de marketing","Total Addressable Market, Serviceable Addressable Market, Serviceable Obtainable Market (funil de oportunidade)"],a:3},
{q:"O que é bootstrapping vs raising capital?",o:["Bootstrapping é melhor","Raising é melhor","Bootstrapping: crescer com receita própria (sem investidor); raising: captar investimento externo para crescer rápido","São iguais"],a:2},
{q:"O que é pivoting em startup?",o:["Mudar fundamentalmente estratégia/produto baseado em aprendizado (Slack era jogo, YouTube era dating)","Pivotar na dança","Desistir","Tipo de sprint"],a:0},
{q:"O que é network effect?",o:["Produto se torna mais valioso conforme mais pessoas usam (telefone, redes sociais, marketplaces)","Efeito de rede social","Efeito viral","Tipo de marketing"],a:0},
{q:"O que é SaaS (Software as a Service) como modelo de negócio?",o:["Software gratuito","Download único","Tipo de licença","Software vendido como assinatura recorrente via cloud (MRR, churn, LTV são métricas-chave)"],a:3},
{q:"O que é due diligence em investimento/aquisição?",o:["Investigação detalhada de aspectos técnicos, financeiros, legais e operacionais antes de investir/comprar","Tipo de audit","Devida diligência moral","Entrevista"],a:0},
{q:"O que é equity e vesting para engenheiros em startups?",o:["Salário fixo","Participação acionária com vesting schedule (tipicamente 4 anos com 1 ano de cliff)","Bônus anual","Tipo de benefício"],a:1},
{q:"O que é flywheel effect?",o:["Ciclo virtuoso onde cada elemento reforça o próximo, criando momentum crescente (Amazon: seleção → preço → tráfego → sellers)","Efeito de roda","Tipo de growth hack","Efeito de rede"],a:0}
];

QUIZZES["Redes de Computadores"] = [
{q:"Quantas camadas tem o modelo OSI e qual é a camada de transporte?",o:["5 camadas, camada 3","6 camadas, camada 5","7 camadas, camada 4 (Transporte)","4 camadas, camada 2"],a:2},
{q:"Qual é a diferença principal entre TCP e UDP?",o:["São iguais mas com nomes diferentes","TCP garante entrega ordenada e confiável; UDP é rápido mas sem garantias","TCP é mais rápido","UDP é mais seguro"],a:1},
{q:"O que é subnetting e para que serve?",o:["Dividir rede em sub-redes menores usando máscaras para organizar e isolar tráfego","Tipo de DNS","Compressão de pacotes","Criar sub-sites"],a:0},
{q:"O que NAT (Network Address Translation) faz?",o:["Traduz IPs privados em IP público para que redes internas acessem a internet","Criptografa tráfego","Traduz nomes em IPs","Roteia pacotes"],a:2},
{q:"O que o 3-way handshake do TCP faz?",o:["Criptografa dados","Estabelece conexão confiável: SYN → SYN-ACK → ACK entre cliente e servidor","Autentica usuário","Comprime pacotes"],a:1},
{q:"Qual protocolo de roteamento conecta ISPs na internet (backbone)?",o:["RIP","DNS","OSPF","BGP (Border Gateway Protocol) conecta sistemas autônomos"],a:3},
{q:"O que ARP faz em uma rede local?",o:["Criptografa dados","Roteia pacotes","Atribui IPs automaticamente","Mapeia endereço IP para endereço MAC na mesma rede"],a:3},
{q:"O que DHCP faz?",o:["Atribui endereços IP automaticamente aos dispositivos (Discover, Offer, Request, Ack)","Criptografa conexão","Filtra tráfego","Resolve nomes DNS"],a:0},
{q:"O que uma VLAN permite fazer?",o:["Criar VPN","Comprimir pacotes","Acelerar a rede","Segmentar um switch físico em redes lógicas separadas sem hardware adicional"],a:3},
{q:"Qual é a diferença entre firewall stateful e stateless?",o:["Stateless é mais seguro","Stateful rastreia estado das conexões; stateless avalia cada pacote isoladamente","Stateful é mais rápido","São iguais"],a:1},
{q:"O que TLS/HTTPS garante na comunicação?",o:["Velocidade","Roteamento","Criptografia, autenticidade (certificado) e integridade dos dados em trânsito","Compressão"],a:2},
{q:"Quantos endereços de host uma rede /24 (máscara 255.255.255.0) pode ter?",o:["256","1024","255","254 hosts utilizáveis (256 menos rede e broadcast)"],a:3},
{q:"O que é congestion control no TCP?",o:["Bloquear conexões","TCP reduz velocidade de envio quando detecta congestionamento na rede (slow start, congestion avoidance)","Tipo de firewall","Controlar tráfego de carros"],a:1},
{q:"O que HTTP/3 usa de diferente do HTTP/2?",o:["Mesma base","TCP mais rápido","HTTP binário","QUIC baseado em UDP em vez de TCP, eliminando head-of-line blocking"],a:3},
{q:"O que um registro DNS do tipo MX indica?",o:["O servidor de email responsável por receber emails do domínio","Alias de domínio","Endereço IPv4","Endereço IPv6"],a:0}
];

QUIZZES["Arquitetura de Computadores"] = [
{q:"Qual é a diferença fundamental entre RISC e CISC?",o:["RISC usa instruções simples e uniformes; CISC usa instruções complexas que fazem mais por instrução","CISC é mais moderno","RISC é mais lento","São iguais internamente"],a:0},
{q:"O que pipeline de CPU faz para aumentar throughput?",o:["Aumenta clock speed","Divide execução em estágios (IF/ID/EX/MEM/WB) e executa múltiplas instruções simultaneamente","Executa uma instrução mais rápido","Usa mais memória"],a:1},
{q:"O que é um data hazard em pipeline?",o:["Instrução precisa de resultado que ainda não foi calculado pela instrução anterior no pipeline","Overflow de registrador","Bug de software","Dados corrompidos"],a:0},
{q:"O que branch prediction faz?",o:["Adivinha se um branch será tomado para evitar stall no pipeline (errar = flush)","Prediz bugs","Prevê crashes","Otimiza memória"],a:0},
{q:"O que é cache L1 e por que é tão rápida?",o:["RAM rápida","Cache de disco","Memória SRAM pequena (~64KB) dentro da CPU com latência de ~1 nanosegundo","Cache de rede"],a:2},
{q:"Quais são os 3 tipos de cache miss (3C's)?",o:["Crash, Corrupt, Conflict","CPU, Cache, Clock","Compulsory (primeiro acesso), Capacity (cache cheia), Conflict (mapeamento colide)","Connect, Compute, Compare"],a:2},
{q:"O que TLB (Translation Lookaside Buffer) acelera?",o:["Transferência de rede","Acesso a disco","Compilação","Tradução de endereço virtual para físico (cache da page table)"],a:3},
{q:"O que ISA (Instruction Set Architecture) define?",o:["Interface entre hardware e software: instruções, registradores, modos de endereçamento","Linguagem de programação","Sistema operacional","Layout da placa-mãe"],a:0},
{q:"O que CPI (Cycles Per Instruction) mede?",o:["Instruções por ciclo","Ciclos por segundo","Cache hits","Média de ciclos de clock necessários para executar uma instrução"],a:3},
{q:"O que forwarding/bypassing resolve em pipeline?",o:["Data hazards: encaminha resultado diretamente sem esperar writeback no registrador","Memory hazards","Controle de branches","Bugs de cache"],a:0},
{q:"O que execução out-of-order permite?",o:["CPU reordena instruções para evitar stalls, executando independentes enquanto espera dependentes","Rodar código inválido","Executar programas fora de ordem","Pular instruções"],a:0},
{q:"O que é RISC-V e por que é importante?",o:["Novo processador Intel","ISA aberta e gratuita usada em educação e indústria, sem royalties (alternativa a ARM/x86)","Framework de software","Sistema operacional"],a:1},
{q:"O que é hierarquia de memória?",o:["Tipo de filesystem","Registradores → L1 → L2 → L3 → RAM → SSD → HDD: cada nível maior, mais lento e mais barato","Organograma de RAM","Particionamento"],a:1},
{q:"O que é set-associative cache?",o:["Cada endereço pode mapear para N posições no set (equilíbrio entre direct-mapped e fully-associative)","Cache de sets matemáticos","Tipo de RAM","Cache de banco de dados"],a:0},
{q:"O que um calling convention define?",o:["Regras de como funções passam argumentos, retornam valores e preservam registradores na stack","Convenção de nomes","Protocolo de rede","Estilo de código"],a:0}
];

QUIZZES["Sinais e Sistemas"] = [
{q:"O que a Transformada de Fourier faz com um sinal?",o:["Decompõe sinal do domínio do tempo em suas componentes de frequência","Filtra ruído automaticamente","Comprime o sinal","Amplifica o sinal"],a:0},
{q:"O que o Teorema de Nyquist-Shannon exige para amostragem sem perda?",o:["Qualquer taxa funciona","Taxa de amostragem ≥ 2× a frequência máxima do sinal","Taxa de amostragem ≥ frequência máxima","Taxa de amostragem = frequência"],a:1},
{q:"O que é aliasing?",o:["Frequências fantasma que surgem quando amostragem viola o teorema de Nyquist","Distorção de amplitude","Tipo de ruído","Tipo de filtro"],a:0},
{q:"O que é um sistema LTI?",o:["Tipo de filtro","Sistema de login","Sistema Linear e Invariante no Tempo: saída é convolução da entrada com resposta ao impulso","Sistema de tempo real"],a:2},
{q:"Qual é a diferença entre filtro FIR e IIR?",o:["IIR é mais simples","São iguais","FIR é mais rápido","FIR tem resposta finita (sempre estável); IIR tem feedback (menos coeficientes, pode ser instável)"],a:3},
{q:"O que FFT (Fast Fourier Transform) melhora sobre DFT?",o:["Complexidade: O(n²) da DFT para O(n log n), viabilizando análise em tempo real","Resolução","Memória","Precisão"],a:0},
{q:"O que um espectrograma mostra?",o:["Frequências ao longo do tempo (eixo X=tempo, Y=frequência, cor=intensidade)","Fase do sinal","Forma de onda","Amplitude no tempo"],a:0},
{q:"O que a Transformada de Laplace faz?",o:["Transforma coordenadas","Transforma imagens","Comprime dados","Converte equações diferenciais em equações algébricas no domínio s (análise de sistemas contínuos)"],a:3},
{q:"O que a Transformada Z é?",o:["Versão contínua de Fourier","Versão discreta da Transformada de Laplace para análise de sistemas e filtros digitais","Transformada de zoom","Tipo de compressão"],a:1},
{q:"O que convolução representa em sistemas LTI?",o:["Multiplicação de sinais","Tipo de filtro","Operação que calcula a saída do sistema somando contribuições ponderadas de cada amostra de entrada","Divisão de frequências"],a:2},
{q:"O que ADC (Analog-to-Digital Converter) faz?",o:["Acelera processamento","Converte sinal contínuo (analógico) em valores discretos (digital) com resolução em bits","Amplifica sinal","Converte dados"],a:1},
{q:"O que é janelamento (windowing) na STFT?",o:["Tipo de filtro","Aplicar função (Hann, Hamming) que atenua bordas do segmento para reduzir vazamento espectral","Abrir janelas","Dividir em frames"],a:1},
{q:"Para que MFCC é usado em processamento de áudio?",o:["Filtrar ruído","Extrair features de áudio que representam como humanos percebem som (usado em speech recognition)","Gerar música","Compressão MP3"],a:1},
{q:"O que polos e zeros de H(s) determinam?",o:["Volume do som","Estabilidade e resposta em frequência do sistema (polos no semi-plano direito = instável)","Frequência do sinal","Tipo de filtro"],a:1},
{q:"O que é um filtro passa-baixa e onde é usado?",o:["Amplifica baixas","Passa sinais altos","Bloqueia tudo","Permite frequências baixas e atenua altas (usado para remover ruído, suavizar sinais, anti-aliasing)"],a:3}
];

QUIZZES["__FINAL_GREEN__"] = [
{q:"O que 'clock' de 3.5 GHz em um processador significa?",o:["3.5 milhões de instruções por segundo","3.5 bilhões de ciclos por segundo","Consome 3.5 watts","Tem 3.5 bilhões de transistores"],a:1},
{q:"Qual técnica de debugging envolve explicar o problema em voz alta para encontrar a solução?",o:["Print debugging","Step-through debugging","Log analysis","Rubber duck debugging"],a:3},
{q:"O que o comando 'find / -name \"*.log\"' faz?",o:["Busca todos os arquivos .log a partir da raiz","Deleta todos os .log","Lista diretórios","Comprime logs"],a:0},
{q:"O que é swap no contexto de sistemas operacionais?",o:["Área do disco usada quando a RAM está cheia","Tipo de partição","Trocar dois processos","Backup automático"],a:0},
{q:"O que o operador walrus (:=) faz em Python?",o:["É um smiley","Compara e atribui","Cria constante","Atribui valor a uma variável dentro de uma expressão"],a:3},
{q:"O que filter(func, iterable) retorna?",o:["Transforma cada elemento","Remove duplicatas","Elementos para os quais func retorna True","Ordena elementos"],a:2},
{q:"O que frozenset é em Python?",o:["Set imutável que pode ser chave de dicionário","Set ordenado","Set vazio","Set congelado na memória"],a:0},
{q:"O que o Princípio do Pombal (Pigeonhole) afirma?",o:["Toda função é injetora","Pombos voam","Todos os grafos são conexos","Se n+1 objetos vão em n caixas, pelo menos uma caixa tem 2+"],a:3},
{q:"O que f''(x) > 0 indica sobre o gráfico de f?",o:["Concavidade para baixo","Função crescente","Concavidade para cima","Ponto de inflexão"],a:2},
{q:"O que eliminação de Gauss resolve?",o:["Equações diferenciais","Derivadas","Sistemas de equações lineares","Integrais"],a:2},
{q:"O que o Princípio de Arquimedes afirma?",o:["Pressão é constante em fluidos","Toda matéria é feita de átomos","Fluidos são incompressíveis","O empuxo é igual ao peso do fluido deslocado"],a:3},
{q:"O que significa dopagem tipo N em semicondutor?",o:["Remover átomos","Adicionar buracos","Aquecer o material","Adicionar elétrons extras com impurezas doadoras como fósforo"],a:3},
{q:"O que optional chaining (?.) faz em JavaScript?",o:["Encadeia promises","Cria optional","Cria condição","Acessa propriedade sem erro se anterior for null/undefined"],a:3},
{q:"O que 'git bisect' faz?",o:["Busca binária no histórico para encontrar qual commit introduziu um bug","Comprime commits","Bisecta branches","Divide o repositório"],a:0},
{q:"O que 'position: sticky' faz em CSS?",o:["Elemento se comporta como relative até scroll atingir, então vira fixed","Fixa o elemento no viewport sempre","Remove do fluxo","Centraliza o elemento"],a:0},
{q:"O que 'desnormalizar' um banco significa?",o:["Adicionar redundância intencionalmente para melhorar performance de leitura","Corrigir erros","Normalizar de novo","Remover tabelas"],a:0},
{q:"Qual é a diferença entre DELETE e TRUNCATE em SQL?",o:["DELETE remove a tabela","São iguais","DELETE pode ter WHERE e é logado; TRUNCATE remove tudo rapidamente","TRUNCATE é mais lento"],a:2},
{q:"Qual é a diferença entre Mealy e Moore em máquinas de estados?",o:["Mealy usa menos memória","Moore é mais rápido","São iguais","Mealy: saída depende de estado + entrada; Moore: saída depende só do estado"],a:3},
{q:"O que um PLL (Phase-Locked Loop) faz?",o:["Sincroniza frequência de saída com referência, gerando frequências precisas","Amplifica fase","Filtra DC","Mede temperatura"],a:0},
{q:"Em qual ordem você deveria aprender: Python, Estruturas de Dados, ou Machine Learning?",o:["ML → ED → Python","ED → Python → ML","Qualquer ordem","Python → ED → ML"],a:3}
];

QUIZZES["__FINAL_YELLOW__"] = [
{q:"Qual é a complexidade de busca em uma árvore binária de busca balanceada?",o:["O(1)","O(n²)","O(log n)","O(n)"],a:2},
{q:"O que o padrão Iterator implementa em Python (__iter__ e __next__)?",o:["Sorting","Loop fixo","Protocolo para percorrer coleção sem expor estrutura interna","Filtering"],a:2},
{q:"O que dangling pointer é em C?",o:["Ponteiro para stack","Ponteiro para NULL","Ponteiro constante","Ponteiro que aponta para memória já liberada (free'd)"],a:3},
{q:"O que JIT compilation faz na JVM?",o:["Compila antes de executar","Otimiza garbage collection","Compila bytecode frequente para código nativo em runtime, melhorando performance","Interpreta bytecode linha a linha"],a:2},
{q:"Quais são as 4 condições necessárias para deadlock (Coffman)?",o:["Exclusão mútua, posse e espera, sem preempção, espera circular","FCFS, SJF, RR, Priority","Mutex, semáforo, monitor, barrier","Race condition, starvation, thrashing, paging"],a:0},
{q:"O que forwarding/bypassing resolve em pipeline de CPU?",o:["Cache misses","Hazards de controle","Data hazards: encaminha resultado sem esperar writeback","Structural hazards"],a:2},
{q:"O que a Lei de Amdahl limita?",o:["Memória máxima","Número de threads","Tamanho do programa","Speedup máximo: limitado pela fração serial do programa"],a:3},
{q:"O que o princípio Open/Closed (SOLID) diz?",o:["Aberto e fechado ao mesmo tempo","Classes nunca mudam","Classes devem ser abertas","Aberto para extensão, fechado para modificação"],a:3},
{q:"O que o Halting Problem prova?",o:["Programas sempre terminam","P = NP","Compiladores são perfeitos","Existe problema que nenhum algoritmo pode resolver (indecidível)"],a:3},
{q:"O que o gradiente descendente minimiza?",o:["Número de features","Dados","Variância","A função de custo/loss atualizando parâmetros na direção oposta ao gradiente"],a:3},
{q:"Por que o Teorema de Nyquist é essencial para digitalizar sinais?",o:["Comprime dados","Melhora qualidade","Define que amostragem deve ser ≥ 2× frequência máxima para evitar aliasing","Reduz ruído"],a:2},
{q:"O que N+1 query problem é em aplicações full-stack?",o:["Para cada item de uma lista, fazer query separada ao banco (deveria ser JOIN/batch)","Problema de cache","Query lenta","Erro de SQL"],a:0},
{q:"Por que Go é popular para microsserviços e ferramentas cloud-native?",o:["É orientada a objetos","Tem mais bibliotecas","Binário estático, concorrência nativa (goroutines), startup rápido, baixo uso de memória","É a mais antiga"],a:2},
{q:"O que acontece se W+R ≤ N em subnetting: quantos hosts uma rede /25 suporta?",o:["256","128","126 hosts utilizáveis (128 menos rede e broadcast)","64"],a:2},
{q:"O que SQL injection explora?",o:["XSS","Input não sanitizado que permite executar SQL malicioso no banco","Buffer overflow","Bugs de CSS"],a:1},
{q:"O que Rate Monotonic scheduling garante em RTOS?",o:["Menor latência","Fairness","Task com menor período recebe maior prioridade (escalonável se utilização ≤ ~69%)","Round-robin"],a:2},
{q:"Em um sistema Full-Stack com Docker, qual a ordem correta de inicialização?",o:["Não importa a ordem","Tudo junto","Banco → Backend → Frontend (dependências de baixo para cima)","Frontend → Backend → Banco"],a:2},
{q:"O que containerização resolve comparado a 'funciona na minha máquina'?",o:["Ambiente idêntico em dev, staging e produção (dependências empacotadas)","Nada","Só velocidade","Só segurança"],a:0},
{q:"Qual é o papel de um message broker (RabbitMQ, Kafka) em sistemas distribuídos?",o:["Desacopla serviços: comunicação assíncrona via filas/tópicos de mensagens","Roteia HTTP","Balanceia carga","Armazena dados"],a:0},
{q:"Por que testes são importantes em CI/CD?",o:["São opcionais","Garantem que mudanças não quebram funcionalidade existente antes do deploy automático","Deixam o código bonito","Só para empresas grandes"],a:1}
];

QUIZZES["__FINAL_ORANGE__"] = [
{q:"O que acontece se um microsserviço falha em um sistema com circuit breaker?",o:["Ignora a falha","Circuit breaker abre, retorna fallback e tenta reconectar depois (fail gracefully)","Reinicia todo o cluster","Sistema todo cai"],a:1},
{q:"O que attention scores em um Transformer representam?",o:["Quanto cada token deve 'prestar atenção' a cada outro token na sequência","Tamanho do modelo","Notas de prova","Velocidade de treino"],a:0},
{q:"O que é chunk overlap em RAG e por que é importante?",o:["Tipo de compressão","Sobreposição entre chunks garante que contexto não é cortado na fronteira","Duplicação de dados","Erro de indexação"],a:1},
{q:"O que é variant calling em genômica?",o:["Sequenciamento","Ligar para variantes","Identificar diferenças (SNPs, indels) entre sequência amostrada e genoma de referência","Tipo de alinhamento"],a:2},
{q:"Quando usar Redis vs PostgreSQL para um dado específico?",o:["Redis para dados temporários/cache com acesso ultrarrápido; PostgreSQL para dados persistentes e relacionais","Sempre PostgreSQL","São intercambiáveis","Sempre Redis"],a:0},
{q:"O que é idempotência em pipelines de dados e por que importa?",o:["Re-executar pipeline produz mesmo resultado (essencial para retries e recovery sem dados duplicados)","Schema evolution","Tipo de transformação","Performance"],a:0},
{q:"O que é o trilema da blockchain (escalabilidade, segurança, descentralização)?",o:["Resolvido","É difícil otimizar os 3 simultaneamente: melhorar um geralmente compromete outro","São independentes","Só importa segurança"],a:1},
{q:"O que é o difference entre Deployment e StatefulSet no Kubernetes?",o:["Deployment: pods intercambiáveis; StatefulSet: identidade estável, storage persistente por pod (bancos)","Deployment é mais novo","StatefulSet é deprecated","São iguais"],a:0},
{q:"O que é a diferença entre SAST e DAST?",o:["São iguais","SAST é mais completo","SAST analisa código estático (source code); DAST testa aplicação rodando (black-box)","DAST substitui SAST"],a:2},
{q:"O que é IDOR (Insecure Direct Object Reference)?",o:["Tipo de link","Acessar recursos de outros usuários manipulando ID no request (ex: /api/user/123 → /api/user/456)","Buffer overflow","Tipo de XSS"],a:1},
{q:"O que é o loop perception-planning-action em robótica?",o:["Tipo de SLAM","Ciclo contínuo: perceber ambiente → planejar ação → executar → perceber resultado → repetir","Loop infinito","Tipo de PID"],a:1},
{q:"Por que event-driven architecture é melhor que REST síncrono para microsserviços desacoplados?",o:["É mais simples","REST é deprecated","Serviços não esperam resposta; comunicação assíncrona permite escalabilidade e resiliência independentes","São iguais"],a:2},
{q:"O que é observability-driven development?",o:["Instrumentar código com logs, métricas e traces desde o início para entender comportamento em qualquer ambiente","Debugging avançado","Tipo de TDD","Só monitorar produção"],a:0},
{q:"O que é data contract entre serviços?",o:["Contrato jurídico","Tipo de API","Acordo formal sobre schema, formato e SLA dos dados entre produtor e consumidor","Tipo de teste"],a:2},
{q:"O que é blue-green vs canary deployment?",o:["Canary é instantâneo","Blue-green é gradual","São iguais","Blue-green: troca total instantânea; canary: rollout gradual para percentual de usuários"],a:3},
{q:"Por que container scanning é crítico em CI/CD?",o:["Só para compliance","Imagens podem herdar vulnerabilidades de base images e dependências que entram em produção","Melhora performance","Opcional"],a:1},
{q:"O que é graceful degradation em sistemas distribuídos?",o:["Desligar serviços","Sistema morre elegantemente","Sistema continua funcionando com funcionalidade reduzida quando componente falha","Tipo de rollback"],a:2},
{q:"Como IA e edge computing se complementam em IoT industrial?",o:["Não se relacionam","IA substitui edge","Edge processa dados localmente (baixa latência), IA infere anomalias sem depender de cloud","Edge substitui IA"],a:2},
{q:"O que é GitOps e qual é o benefício principal?",o:["Git como backup","Git como fonte de verdade: infraestrutura declarativa, auditável, versionada e auto-sincronizada","Framework web","Tipo de CI/CD"],a:1},
{q:"Por que fine-tuning nem sempre é a melhor abordagem para customizar LLMs?",o:["É sempre a melhor","RAG é mais barato, não precisa de dados de treino, mantém modelo atualizado e evita catastrophic forgetting","São equivalentes","Fine-tuning é impossível"],a:1}
];

QUIZZES["__FINAL_RED__"] = [
{q:"O que acontece se W+R ≤ N em um sistema de quorum?",o:["Sistema falha","Leituras podem retornar dados desatualizados (consistência eventual, não forte)","Nada muda","Consistência forte"],a:1},
{q:"Por que CRDTs são preferíveis a locks em sistemas distribuídos de alta disponibilidade?",o:["Locks não existem em distribuídos","São mais simples","São mais rápidos","Convergem automaticamente sem coordenação, evitando latência e indisponibilidade de locks distribuídos"],a:3},
{q:"O que é training-serving skew e como detectar?",o:["Overfitting","Bug de GPU","Features computadas diferentemente em treino vs produção; detectar comparando distribuições de features","Tipo de drift"],a:2},
{q:"Por que feature store é importante em MLOps?",o:["Tipo de banco","Armazena modelos","Garante que features são consistentes entre treino e serving, reutilizáveis entre equipes e versionadas","Opcional"],a:2},
{q:"O que é reward hacking em RL?",o:["Agente encontra forma de maximizar reward sem realmente resolver o problema intencionado","Bug de código","Tipo de exploit","Hackear recompensas"],a:0},
{q:"Por que computação quântica ameaça criptografia RSA?",o:["Não ameaça","Quantum já quebrou RSA","Algoritmo de Shor fatora números grandes eficientemente, quebrando a premissa de RSA","Quantum é mais rápido em tudo"],a:2},
{q:"O que é order of volatility em forense e por que importa?",o:["Ordem alfabética","Não importa a ordem","Ordem de importância","Coletar evidências da mais volátil (RAM, cache) para menos volátil (disco) antes que desapareçam"],a:3},
{q:"O que timestomping é em anti-forensics?",o:["Sincronizar relógio","Tipo de backup","Alterar timestamps de arquivos para confundir timeline analysis e esconder atividade","Carimbar tempo"],a:2},
{q:"Como garantir integridade de evidências em um sistema distribuído?",o:["Hash criptográfico de cada evidência replicado via consenso: qualquer alteração é detectável","Backup suficiente","Criptografar tudo","Confiar nos nós"],a:0},
{q:"Por que monitoramento de model drift é especialmente crítico em sistemas de detecção de malware?",o:["Atacantes evoluem táticas constantemente, então distribuição de inputs muda (adversarial drift)","Malware não muda","Não é crítico","Drift é lento em segurança"],a:0},
{q:"O que é Byzantine fault tolerance e quando é necessário?",o:["Consenso mesmo com nós maliciosos; necessário quando nós não são confiáveis (blockchain, militar)","Nunca necessário","Sempre necessário","Tolerância a bugs"],a:0},
{q:"Como RL pode ser aplicado a incident response automatizado?",o:["Agente aprende política de containment otimizando: minimizar dano, tempo de resposta e falsos positivos","Não pode","Só com regras manuais","Só com supervised learning"],a:0},
{q:"O que é post-quantum cryptography?",o:["Criptografia pós-apocalipse","Algoritmos criptográficos resistentes a ataques de computadores quânticos (lattice-based, hash-based)","Tipo de RSA","Criptografia quântica"],a:1},
{q:"Por que idempotência é crucial em pipelines de MLOps distribuídos?",o:["Re-execuções (retries, crashes) não devem duplicar dados/treinos nem corromper model registry","Tipo de consistência","Melhora performance","Não é importante"],a:0},
{q:"O que diferencia forense de memória de forense de disco?",o:["Memória não tem evidências","Memória é volátil (desaparece ao desligar) e contém estado em execução: processos, chaves, malware fileless","Disco é mais útil","São iguais"],a:1},
{q:"Como escalar inferência de modelos ML em sistema distribuído?",o:["Não é possível","Só usar GPU maior","Load balancing entre réplicas do modelo, batching de requests, model sharding para modelos grandes","Só vertical scaling"],a:2},
{q:"O que é o princípio de Locard em forense digital?",o:["Lei de Amdahl","Tipo de hash","Lei de programação","Todo contato deixa rastro: atacante sempre deixa evidência e sempre leva algo consigo (logs, artifacts)"],a:3},
{q:"Qual é o papel de vector clocks em um sistema de log forense distribuído?",o:["Não são úteis","Sincronizar relógios","Ordenar eventos causalmente entre nós sem depender de relógios sincronizados","Tipo de timestamp"],a:2},
{q:"Por que quantum error correction é o maior desafio prático da computação quântica?",o:["Qubits são extremamente sensíveis a ruído; correção requer muitos qubits físicos por qubit lógico","É fácil de resolver","Hardware já resolveu","Não é desafio"],a:0},
{q:"Como combinar threat hunting proativo com ML em um SOC?",o:["ML substitui analistas","São incompatíveis","ML detecta anomalias e prioriza alertas; analista humano formula hipóteses e investiga com contexto","Só regras manuais funcionam"],a:2}
];

QUIZZES["__FINAL_BLUE__"] = [
{q:"O que uma boa seção de Related Work deve fazer além de listar papers?",o:["Citar todos os papers existentes","Só listar","Comparar abordagens, identificar gaps e posicionar sua contribuição em relação ao estado da arte","Criticar papers"],a:2},
{q:"Por que reprodutibilidade é um pilar fundamental da ciência?",o:["Permite verificar resultados independentemente; sem ela, descobertas não podem ser validadas pela comunidade","É opcional","Não é importante em CS","Só para exatas"],a:0},
{q:"O que diferencia uma boa pergunta de pesquisa de uma pergunta vaga?",o:["Tamanho da pergunta","Boa pergunta é específica, testável, relevante e delimitada em escopo","Qualquer pergunta serve","Precisa ser ampla"],a:1},
{q:"Por que é importante fazer revisão de literatura ANTES de começar experimentos?",o:["Não é importante","Só após resultados","Para não reinventar a roda, entender estado da arte e refinar hipóteses e metodologia","Para encher o paper"],a:2},
{q:"O que uma contribuição de mestrado deve demonstrar?",o:["Descoberta revolucionária","Código perfeito","Muitas publicações","Capacidade de conduzir pesquisa independente com rigor metodológico e contribuição incremental"],a:3},
{q:"Qual é o papel do orientador vs do mestrando?",o:["Orientador guia com experiência e feedback; mestrando executa pesquisa com autonomia crescente","Mestrando é independente desde o dia 1","Orientador só assina","Orientador faz tudo"],a:0},
{q:"O que é originalidade em uma tese de doutorado?",o:["Contribuição substancial e inédita: novo método, novo framework, nova teoria ou nova evidência significativa","Tema diferente","Mais dados","Nunca feito antes"],a:0},
{q:"O que é impact factor e por que não é a única métrica relevante?",o:["É a única que importa","Mede citações do periódico, não do paper individual; qualidade da contribuição e citações individuais também importam","Não existe","Métrica perfeita"],a:1},
{q:"Por que Docker é importante para reprodutibilidade científica?",o:["Empacota ambiente completo (OS, dependências, versões) para que experimento rode identicamente em qualquer máquina","Moda de DevOps","Melhora performance","Só para deploy"],a:0},
{q:"O que Zotero/Mendeley resolvem que BibTeX manual não resolve bem?",o:["São iguais","Gerenciamento automático de PDFs, metadados, citações em múltiplos estilos e sincronização entre dispositivos","Nada","BibTeX é melhor"],a:1},
{q:"Como a revisão por pares, apesar de imperfeita, protege a ciência?",o:["Não protege","Filtro de qualidade: especialistas verificam validade, metodologia e contribuição antes de publicação","É perfeita","Deveria ser abolida"],a:1},
{q:"Qual é a relação entre IC, mestrado e doutorado na formação de pesquisador?",o:["Progressão: IC desenvolve habilidades básicas de pesquisa, mestrado aprofunda, doutorado cria contribuição original","São independentes","IC substitui mestrado","Só doutorado importa"],a:0},
{q:"Por que open access é um debate importante na ciência?",o:["Open access é pior","Conhecimento financiado publicamente deveria ser acessível a todos, mas editoras lucram com paywalls","Já foi resolvido","Não é importante"],a:1},
{q:"O que um pipeline de pesquisa reproduzível deve conter?",o:["Só os resultados","Só o código","Só o paper","Código versionado + dados (ou link) + ambiente (Docker/conda) + instruções claras + automatização (Make/DVC)"],a:3},
{q:"Por que escrever bem é tão importante quanto pesquisar bem?",o:["Não é importante","Escrita é secundária","Pesquisa que não é comunicada claramente não impacta; escrita é o veículo da contribuição","Código é suficiente"],a:2},
{q:"Qual é o papel de conferências vs periódicos em Computação?",o:["Periódicos são melhores","São iguais","Conferências são venues primárias em CS (rápidas, peer-reviewed, competitivas); periódicos são mais detalhados","Conferências são informais"],a:2},
{q:"Como IA e ferramentas como LLMs estão mudando a pesquisa acadêmica?",o:["Substituem pesquisadores","São proibidos","Auxiliam em revisão de literatura, escrita e análise, mas levantam questões de autoria e integridade","Não têm impacto"],a:2},
{q:"O que é ética em pesquisa computacional?",o:["Só para biomédica","Não existe em CS","Considerar impacto social, viés em dados, privacidade, reprodutibilidade e uso responsável de resultados","Só seguir a lei"],a:2},
{q:"Por que manter Lattes e ORCID atualizados é importante para pesquisadores brasileiros?",o:["São usados em avaliações de bolsas, concursos e financiamento; ORCID integra internacionalmente","Só Lattes importa","Ninguém confere","Burocracia desnecessária"],a:0},
{q:"O que é revisão sistemática de literatura e quando usar?",o:["Revisão narrativa é melhor","Ler papers aleatórios","Busca estruturada e reproduzível com protocolo definido; usar quando se quer mapear estado da arte rigorosamente","Só para doutorado"],a:2}
];

QUIZZES["__FINAL_PURPLE__"] = [
{q:"Por que aprender a aprender é a habilidade mais importante em tech?",o:["Tecnologias mudam rápido; quem aprende eficientemente se adapta; meta-learning > qualquer tecnologia específica","Só saber programar basta","Não é","Experiência é tudo"],a:0},
{q:"O que é a diferença entre IC track e management track?",o:["São iguais","IC é melhor","Management é melhor","IC: crescer em profundidade técnica e impacto (Staff, Principal); management: crescer liderando pessoas e times"],a:3},
{q:"O que são DORA metrics e por que são melhores que linhas de código?",o:["Métricas de código","LOC é mais preciso","Medem eficácia de entrega (deploy frequency, lead time, failure rate, recovery); LOC não mede valor","São iguais"],a:2},
{q:"O que é a diferença entre urgente e importante na priorização?",o:["Urgente é mais importante","Importante pode esperar sempre","São iguais","Urgente precisa de ação imediata; importante contribui para objetivos de longo prazo (Eisenhower matrix)"],a:3},
{q:"Por que documentar decisões técnicas (ADRs) é mais valioso que documentar código?",o:["Não é","ADRs capturam O PORQUÊ de decisões; código mostra O QUÊ; contexto perdido é irrecuperável","ADRs são burocráticos","Código documenta sozinho"],a:1},
{q:"O que é a diferença entre on-call saudável e on-call tóxico?",o:["On-call é sempre tóxico","On-call é opcional","São iguais","Saudável: runbooks, rotação justa, baixo volume de alertas; tóxico: alertas constantes, sem documentação, sem rotação"],a:3},
{q:"Por que falar com usuários é mais valioso que intuição para decisões de produto?",o:["São igualmente valiosos","Usuários não sabem o que querem","Intuição basta","Usuários revelam problemas reais que devs não antecipam; dados > opinião para validar hipóteses"],a:3},
{q:"O que é a diferença entre output e outcome em produto?",o:["Output: features entregues (o que fizemos); outcome: impacto no usuário/negócio (o que conseguimos)","Output é mais importante","Outcome é imensurável","São iguais"],a:0},
{q:"O que é psychological safety e por que é o fator #1 de times de alta performance?",o:["Segurança para correr riscos e discordar sem medo; Google Project Aristotle mostrou ser o preditor mais forte","Conforto sem desafio","Não é comprovado","Skill individual é mais importante"],a:0},
{q:"Por que feedback frequente é melhor que review anual?",o:["Curso-correção rápida, comportamento ainda é recente, menos surpresas, crescimento contínuo","Feedback cansa pessoas","Review anual é mais justo","Não é melhor"],a:0},
{q:"O que é moat (fosso competitivo) e por que importa para engenheiros?",o:["Não é relevante para devs","Só para executivos","Engenheiro que entende moat toma melhores decisões técnicas: o que construir, como diferenciar","Moat é só marketing"],a:2},
{q:"O que é a relação entre velocidade de entrega e qualidade?",o:["São opostos","Velocidade > qualidade","A longo prazo são complementares: qualidade (testes, CI/CD, good code) ACELERA entrega sustentável","Qualidade > velocidade"],a:2},
{q:"O que é a diferença entre carreira e emprego?",o:["Emprego é mais importante","São iguais","Emprego: posição atual; carreira: trajetória de longo prazo com skills, rede e reputação acumulados","Carreira é ficção"],a:2},
{q:"Por que engenheiros devem entender negócio?",o:["Não devem","Negócio é para MBAs","Decisões técnicas impactam negócio; entender contexto permite priorizar o que gera mais valor","É trabalho do PM"],a:2},
{q:"O que é mentoria reversa e por que é valiosa?",o:["Senior sabe tudo","Pessoa mais junior mentorea senior em novas tecnologias/perspectivas; ambos aprendem","Não existe","É desrespeitoso"],a:1},
{q:"Como equilíbrio entre habilidades técnicas e soft skills evolui com senioridade?",o:["São sempre 50/50","Mais senior = mais soft skills (comunicação, influência, visão); técnico continua mas proporção muda","Técnico sempre domina","Soft skills não importam"],a:1},
{q:"O que é compound learning (aprendizado composto)?",o:["Habilidades se acumulam e reforçam mutuamente ao longo do tempo, como juros compostos","Aprender tudo de uma vez","Estudar muito rápido","Tipo de spaced repetition"],a:0},
{q:"Por que contribuir para open source é bom para carreira?",o:["Só beneficia a empresa","Demonstra habilidade publicamente, expande rede, aprende com code review de experts, constrói reputação","Trabalho de graça","Não é valorizado"],a:1},
{q:"O que é a diferença entre liderar e gerenciar?",o:["Liderar é melhor","Liderar: definir direção, inspirar, inovar; gerenciar: organizar, planejar, executar (ambos necessários)","São iguais","Gerenciar é mais útil"],a:1},
{q:"Qual é o conselho mais importante para quem está começando em tech?",o:["Memorizar algoritmos","Só fazer cursos","Construir projetos reais, aprender consistentemente, ser curioso, pedir ajuda e não ter medo de errar","Aprender tudo de uma vez"],a:2}
];

QUIZZES["Java & Ecossistema JVM"] = [
{q:"Qual é a diferença entre JDK, JRE e JVM?",o:["São iguais","JDK = compilador + JRE; JRE = JVM + bibliotecas; JVM executa bytecode","JDK é mais rápido","JVM é uma linguagem"],a:1},
{q:"O que são checked exceptions em Java?",o:["Exceções de runtime","Erros de compilação","Exceções que o compilador OBRIGA você a tratar (try/catch ou throws)","Exceções que sempre crasham"],a:2},
{q:"O que Streams API (Java 8+) permite fazer?",o:["Ler arquivos","Streaming de vídeo","Processar coleções declarativamente com map/filter/reduce sem loops explícitos","Criar threads"],a:2},
{q:"O que Spring Boot faz?",o:["Framework que auto-configura aplicação Java com servidor embarcado para desenvolvimento rápido de APIs","Banco de dados","Linguagem de programação","Sistema operacional"],a:0},
{q:"O que JPA/Hibernate faz?",o:["Gerencia threads","Comprime Java","Mapeia objetos Java para tabelas SQL automaticamente (ORM), permitindo trabalhar com banco sem SQL direto","Compila código"],a:2},
{q:"O que é Garbage Collection na JVM?",o:["Otimizar CPU","Compilar código","Gerenciamento automático de memória: JVM identifica e libera objetos sem referências","Deletar arquivos"],a:2},
{q:"O que são Generics em Java?",o:["Tipos genéricos do SO","Annotations","Tipos parametrizados (List<String>) que garantem type safety em tempo de compilação","Classes abstratas"],a:2},
{q:"O que Maven e Gradle fazem?",o:["Testam código","Criam interfaces","Gerenciam dependências, build lifecycle, plugins e empacotamento (JAR/WAR)","Compilam Java"],a:2},
{q:"O que é uma interface em Java e como difere de abstract class?",o:["Interface é mais rápida","Interface define contrato sem implementação (múltipla); abstract pode ter implementação parcial (única herança)","Abstract é deprecated","São iguais"],a:1},
{q:"O que ExecutorService faz em Java?",o:["Gerencia memória","Gerencia pool de threads para executar tarefas concorrentes sem criar threads manualmente","Executa o sistema","Executa SQL"],a:1},
{q:"O que são Records em Java 16+?",o:["Tipo de log","Tipo de banco","Gravações de áudio","Classes imutáveis de dados que geram automaticamente construtor, equals, hashCode e toString"],a:3},
{q:"O que é Spring Security?",o:["Firewall","Criptografia Java","Antivírus","Framework de autenticação e autorização: filter chain, JWT, OAuth2, roles, CSRF protection"],a:3},
{q:"O que JIT (Just-In-Time) compilation faz na JVM?",o:["Interpreta sempre","Compila para bytecode","Compila bytecode frequente para código nativo em runtime, melhorando performance progressivamente","Compila antes de executar"],a:2},
{q:"Qual é a diferença entre ArrayList e LinkedList?",o:["São iguais","ArrayList é mais lenta","ArrayList: acesso O(1) por índice, inserção O(n). LinkedList: inserção O(1), acesso O(n)","LinkedList usa menos memória"],a:2},
{q:"O que é o padrão Optional em Java?",o:["Campo opcional em classe","Tipo primitivo","Annotation","Container que pode ou não ter valor, evitando NullPointerException com isPresent/orElse/map"],a:3}
];

QUIZZES["Go (Golang)"] = [
{q:"O que são goroutines em Go?",o:["Processos do SO","Coroutines Python","Threads pesadas","Lightweight threads gerenciadas pelo runtime Go (milhares simultâneas com pouca memória)"],a:3},
{q:"O que channels fazem em Go?",o:["Streams de arquivo","Canais de TV","Conexões de rede","Comunicação tipada e segura entre goroutines (enviar e receber valores)"],a:3},
{q:"Como Go lida com erros?",o:["Panic sempre","Erros são valores retornados (error interface), tratados explicitamente com if err != nil","Ignora erros","Exceptions como Java"],a:1},
{q:"O que 'go mod' faz?",o:["Modifica Go","Instala Go","Compila código","Gerencia módulos e dependências do projeto Go (go.mod define módulo e versões)"],a:3},
{q:"Por que Go é popular em cloud-native (K8s, Docker)?",o:["É a mais antiga","Compila para binário estático único, concorrência nativa, startup rápido, baixo uso de memória","Tem mais bibliotecas","É orientada a objetos"],a:1},
{q:"O que é select em Go?",o:["Selecionar goroutine","Multiplexar operações em múltiplos channels (espera o primeiro que estiver pronto)","Consulta SQL","Loop de eventos"],a:1},
{q:"O que são interfaces em Go?",o:["Classes abstratas","Como Java interfaces","Conjuntos de métodos satisfeitos implicitamente (duck typing estático, sem implements)","Tipos genéricos"],a:2},
{q:"O que 'defer' faz em Go?",o:["Adia compilação","Executa função ao sair do escopo atual (LIFO) — ideal para cleanup (fechar arquivo, unlock)","Cancela operação","Cria goroutine"],a:1},
{q:"O que é context.Context em Go?",o:["Contexto de execução do SO","Tipo de variável","Mecanismo para timeout, cancelamento e passagem de valores entre goroutines em cadeia","Config de ambiente"],a:2},
{q:"O que é o race detector do Go?",o:["Ferramenta (-race flag) que detecta data races em runtime durante testes","Detector de corrida de carros","Profiler","Benchmark tool"],a:0},
{q:"O que é cobra/viper no ecossistema Go?",o:["ORM","Web frameworks","Cobra: framework para CLI commands. Viper: gerenciamento de configuração (flags, env, config files)","Animais"],a:2},
{q:"Qual é a filosofia de design do Go?",o:["Simplicidade: poucos keywords, sem herança, sem generics (até 1.18), formatação automática (gofmt)","Programação funcional","Máxima abstração","Maximizar features"],a:0},
{q:"O que é pprof em Go?",o:["Tipo de logging","Profiler de pré-processador","Ferramenta de profiling nativa: CPU profile, memory profile, goroutine profile, flame graphs","Benchmark tool"],a:2},
{q:"Como Go compila para múltiplas plataformas?",o:["GOOS e GOARCH: cross-compile para qualquer OS/arch de qualquer máquina (ex: GOOS=linux GOARCH=arm64)","Precisa compilar na plataforma alvo","Precisa de VM em cada","Usa Docker"],a:0},
{q:"O que é o 'zero value' em Go?",o:["Constante zero","Toda variável tem valor padrão se não inicializada: 0 para int, '' para string, nil para ponteiros, false para bool","Valor nulo como null","Erro de inicialização"],a:1}
];

