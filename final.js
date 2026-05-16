// Final level data
const FINAL_LEVEL = {};

FINAL_LEVEL["green"] = {
  project: {
    title: "🏆 Projeto Final do Iniciante: Plataforma Pessoal de Estudos",
    desc: "Construa uma plataforma pessoal de estudos que integra TODAS as 8 áreas do nível Iniciante:\n\n• Fundamentos de Computação: página 'Como Computadores Funcionam' com diagramas de hardware (CPU, RAM, SSD) e explicação do ciclo fetch-decode-execute em suas palavras\n• SO & Terminal: script shell (.sh) que automatiza o setup do projeto (criar pastas, instalar dependências, inicializar Git)\n• Python: backend em Python que gerencia matérias, notas, e calcula médias. Lê/escreve dados em arquivo JSON\n• Matemática: módulo que gera gráficos de progresso com matplotlib (barras de notas por matéria, evolução ao longo do tempo, probabilidade de aprovação)\n• Física & Química: calculadora de fórmulas de física (F=ma, V=IR, E=mc²) integrada na plataforma com conversão de unidades\n• Web, Git & Ferramentas: frontend em HTML + CSS + JavaScript com design responsivo. Projeto inteiro versionado no GitHub com README detalhado e deploy no GitHub Pages\n• Banco de Dados: armazenamento em SQLite com tabelas (matérias, notas, metas). Queries SQL para relatórios (média por matéria, matéria com menor nota)\n• Eletrônica & Hardware: integração com LED RGB (Arduino/ESP32) que muda de cor baseado na nota média — verde (>=7), amarelo (>=5), vermelho (<5) via serial/MQTT",
    deliverable: "Repositório GitHub com: site HTML/CSS/JS no GitHub Pages, backend Python com SQLite, script shell de setup, gráficos matplotlib, calculadora de física, firmware Arduino/ESP32, README com screenshots e instruções de uso"
  }
};

FINAL_LEVEL["yellow"] = {
  project: {
    title: "🏆 Projeto Final do Intermediário: Plataforma de Gestão de Projetos",
    desc: "Construa plataforma de gestão de projetos que integra TODAS as 20 áreas do nível Intermediário:\n\n• Estruturas de Dados: Kanban board com drag-and-drop usando arrays, filas de prioridade para ordenar tarefas\n• Python OOP: backend FastAPI com classes (Projeto, Tarefa, Usuário) seguindo SOLID, decorators para auth e logging\n• C/Rust: módulo CLI em Rust que analisa logs do projeto e gera relatório de performance\n• Java: microsserviço Spring Boot de notificações com JPA e RabbitMQ que envia alertas de prazos\n• SO: configurar limites de memória e CPU do servidor, monitorar processos\n• Arquitetura de Computadores: otimizar queries pensando em cache locality e hierarquia de memória\n• Concorrência: WebSocket para atualizações em tempo real entre múltiplos usuários conectados simultaneamente\n• Engenharia de Software: TDD com 80%+ coverage, CI/CD com GitHub Actions, documentação seguindo Diátaxis\n• Teoria/Compiladores: mini DSL para filtros avançados de tarefas (ex: 'status:done AND assignee:kaio AND date>2024-01')\n• Matemática p/ ML: gráficos de burndown com regressão linear para prever data de conclusão do projeto\n• Sinais e Sistemas: notificação sonora customizada usando Web Audio API (sintetizar tom de alerta com frequência específica)\n• IA & ML: classificação automática de prioridade de tarefas com NLP (TF-IDF + modelo treinado no scikit-learn)\n• Full-Stack: React + TypeScript frontend com Next.js, FastAPI backend, PostgreSQL, JWT auth completo\n• Computação Gráfica: gráfico de Gantt interativo renderizado com Canvas/SVG com zoom e drag\n• Mobile: versão mobile com React Native (pelo menos visualização e criação de tarefas)\n• DevOps: Docker Compose (app + banco + redis + rabbit), deploy com CI/CD, health checks, Prometheus metrics\n• Go: worker service em Go com goroutines que processa jobs pesados assíncronos (gerar PDFs, exports CSV)\n• Redes: configuração de rede com HTTPS/TLS, DNS, firewall rules, reverse proxy Nginx\n• Segurança: rate limiting, input validation/sanitization, CORS, security headers (CSP, HSTS), OWASP compliance, audit log\n• Embarcados/IoT: botão físico ESP32 que marca tarefa como concluída via MQTT + buzzer para alarme de prazo",
    deliverable: "Monorepo GitHub com: frontend React/Next.js, backend FastAPI, microsserviço Spring Boot, worker Go, app React Native, CLI Rust, firmware ESP32, Docker Compose, pipeline CI/CD green, testes 80%+, README com diagrama de arquitetura"
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
    desc: "Construa visão de carreira integrada que exercita TODAS as 7 áreas do nível Carreira:\n\n• Aprendizado & Preparação: Auto-avaliação de skills (T-shape), plano de estudo de 12 meses com spaced repetition, portfolio GitHub completo\n• Trilhas, Crescimento & Transições: Mapear 3 trilhas de carreira, definir roadmap de 5 anos com milestones, entrevistar profissionais\n• Liderança & Gestão: Definir métricas de sucesso (DORA-inspired) para seus projetos, escrever tech spec de algo que quer construir\n• Liderança Técnica: Escrever 3 ADRs para decisões técnicas de projetos anteriores, criar runbook para seu projeto mais complexo\n• Produto & Estratégia: Fazer discovery de uma ideia: pesquisa com 5 usuários, wireframes, North Star Metric, priorização RICE\n• Gestão de Pessoas: Criar framework de feedback pessoal, documentar 3 mentorias dadas/recebidas, plano de onboarding para projeto OSS\n• Estratégia & Empreendedorismo: Business Model Canvas para sua ideia, análise competitiva, pitch deck de 10 slides",
    deliverable: "Documento de visão de carreira com T-shape, roadmap 5 anos, 3 ADRs, tech spec, discovery de produto, pitch deck, framework de feedback e contribuição open source documentada"
  }
};

QUIZZES["__FINAL_GREEN__"] = [
{q:"O que 'clock' de 3.5 GHz em um processador significa?",o:["Consome 3.5 watts","3.5 bilhões de ciclos por segundo","Tem 3.5 bilhões de transistores","3.5 milhões de instruções por segundo"],a:1},
{q:"Qual técnica de debugging envolve explicar o problema em voz alta para encontrar a solução?",o:["Log analysis","Step-through debugging","Rubber duck debugging","Print debugging"],a:2},
{q:"O que o comando 'find / -name \"*.log\"' faz?",o:["Comprime logs","Lista diretórios","Deleta todos os .log","Busca todos os arquivos .log a partir da raiz"],a:3},
{q:"O que é swap no contexto de sistemas operacionais?",o:["Tipo de partição","Backup automático","Área do disco usada quando a RAM está cheia","Trocar dois processos"],a:2},
{q:"O que o operador walrus (:=) faz em Python?",o:["Compara e atribui","Atribui valor a uma variável dentro de uma expressão","É um smiley","Cria constante"],a:1},
{q:"O que filter(func, iterable) retorna?",o:["Elementos para os quais func retorna True","Remove duplicatas","Transforma cada elemento","Ordena elementos"],a:0},
{q:"O que frozenset é em Python?",o:["Set vazio","Set ordenado","Set congelado na memória","Set imutável que pode ser chave de dicionário"],a:3},
{q:"O que o Princípio do Pombal (Pigeonhole) afirma?",o:["Pombos voam","Todos os grafos são conexos","Se n+1 objetos vão em n caixas, pelo menos uma caixa tem 2+","Toda função é injetora"],a:2},
{q:"O que f''(x) > 0 indica sobre o gráfico de f?",o:["Função crescente","Concavidade para cima","Ponto de inflexão","Concavidade para baixo"],a:1},
{q:"O que eliminação de Gauss resolve?",o:["Sistemas de equações lineares","Equações diferenciais","Derivadas","Integrais"],a:0},
{q:"O que o Princípio de Arquimedes afirma?",o:["Fluidos são incompressíveis","Pressão é constante em fluidos","Toda matéria é feita de átomos","O empuxo é igual ao peso do fluido deslocado"],a:3},
{q:"O que significa dopagem tipo N em semicondutor?",o:["Remover átomos","Adicionar buracos","Adicionar elétrons extras com impurezas doadoras como fósforo","Aquecer o material"],a:2},
{q:"O que optional chaining (?.) faz em JavaScript?",o:["Cria condição","Acessa propriedade sem erro se anterior for null/undefined","Cria optional","Encadeia promises"],a:1},
{q:"O que 'git bisect' faz?",o:["Busca binária no histórico para encontrar qual commit introduziu um bug","Comprime commits","Bisecta branches","Divide o repositório"],a:0},
{q:"O que 'position: sticky' faz em CSS?",o:["Centraliza o elemento","Fixa o elemento no viewport sempre","Remove do fluxo","Elemento se comporta como relative até scroll atingir, então vira fixed"],a:3},
{q:"O que 'desnormalizar' um banco significa?",o:["Normalizar de novo","Corrigir erros","Adicionar redundância intencionalmente para melhorar performance de leitura","Remover tabelas"],a:2},
{q:"Qual é a diferença entre DELETE e TRUNCATE em SQL?",o:["DELETE pode ter WHERE e é logado; TRUNCATE remove tudo rapidamente","São iguais","TRUNCATE é mais lento","DELETE remove a tabela"],a:0},
{q:"Qual é a diferença entre Mealy e Moore em máquinas de estados?",o:["São iguais","Mealy usa menos memória","Moore é mais rápido","Mealy: saída depende de estado + entrada; Moore: saída depende só do estado"],a:3},
{q:"O que um PLL (Phase-Locked Loop) faz?",o:["Mede temperatura","Filtra DC","Amplifica fase","Sincroniza frequência de saída com referência, gerando frequências precisas"],a:3},
{q:"Em qual ordem você deveria aprender: Python, Estruturas de Dados, ou Machine Learning?",o:["Python → ED → ML","Qualquer ordem","ED → Python → ML","ML → ED → Python"],a:0}
];

QUIZZES["__FINAL_YELLOW__"] = [
{q:"Qual é a complexidade de busca em uma árvore binária de busca balanceada?",o:["O(log n)","O(1)","O(n)","O(n²)"],a:0},
{q:"O que o padrão Iterator implementa em Python (__iter__ e __next__)?",o:["Protocolo para percorrer coleção sem expor estrutura interna","Filtering","Loop fixo","Sorting"],a:0},
{q:"O que dangling pointer é em C?",o:["Ponteiro para stack","Ponteiro para NULL","Ponteiro que aponta para memória já liberada (free'd)","Ponteiro constante"],a:2},
{q:"O que JIT compilation faz na JVM?",o:["Otimiza garbage collection","Compila antes de executar","Compila bytecode frequente para código nativo em runtime, melhorando performance","Interpreta bytecode linha a linha"],a:2},
{q:"Quais são as 4 condições necessárias para deadlock (Coffman)?",o:["Mutex, semáforo, monitor, barrier","FCFS, SJF, RR, Priority","Race condition, starvation, thrashing, paging","Exclusão mútua, posse e espera, sem preempção, espera circular"],a:3},
{q:"O que forwarding/bypassing resolve em pipeline de CPU?",o:["Data hazards: encaminha resultado sem esperar writeback","Structural hazards","Cache misses","Hazards de controle"],a:0},
{q:"O que a Lei de Amdahl limita?",o:["Memória máxima","Tamanho do programa","Número de threads","Speedup máximo: limitado pela fração serial do programa"],a:3},
{q:"O que o princípio Open/Closed (SOLID) diz?",o:["Classes devem ser abertas","Classes nunca mudam","Aberto para extensão, fechado para modificação","Aberto e fechado ao mesmo tempo"],a:2},
{q:"O que o Halting Problem prova?",o:["P = NP","Existe problema que nenhum algoritmo pode resolver (indecidível)","Programas sempre terminam","Compiladores são perfeitos"],a:1},
{q:"O que o gradiente descendente minimiza?",o:["A função de custo/loss atualizando parâmetros na direção oposta ao gradiente","Dados","Número de features","Variância"],a:0},
{q:"Por que o Teorema de Nyquist é essencial para digitalizar sinais?",o:["Comprime dados","Reduz ruído","Melhora qualidade","Define que amostragem deve ser ≥ 2× frequência máxima para evitar aliasing"],a:3},
{q:"O que N+1 query problem é em aplicações full-stack?",o:["Erro de SQL","Query lenta","Para cada item de uma lista, fazer query separada ao banco (deveria ser JOIN/batch)","Problema de cache"],a:2},
{q:"Por que Go é popular para microsserviços e ferramentas cloud-native?",o:["É orientada a objetos","Binário estático, concorrência nativa (goroutines), startup rápido, baixo uso de memória","É a mais antiga","Tem mais bibliotecas"],a:1},
{q:"O que acontece se W+R ≤ N em subnetting: quantos hosts uma rede /25 suporta?",o:["126 hosts utilizáveis (128 menos rede e broadcast)","64","128","256"],a:0},
{q:"O que SQL injection explora?",o:["Bugs de CSS","Buffer overflow","XSS","Input não sanitizado que permite executar SQL malicioso no banco"],a:3},
{q:"O que Rate Monotonic scheduling garante em RTOS?",o:["Menor latência","Fairness","Task com menor período recebe maior prioridade (escalonável se utilização ≤ ~69%)","Round-robin"],a:2},
{q:"Em um sistema Full-Stack com Docker, qual a ordem correta de inicialização?",o:["Frontend → Backend → Banco","Tudo junto","Não importa a ordem","Banco → Backend → Frontend (dependências de baixo para cima)"],a:3},
{q:"O que é o zero value em Go e por que é importante?",o:["Constante zero","Erro de inicialização","Toda variável tem valor padrão sem inicializar (0, '', nil, false) — evita undefined behavior","Valor nulo como null"],a:2},
{q:"O que rasterização faz na pipeline gráfica?",o:["Aplica filtro","Comprime imagem","Vetoriza imagem","Converte primitivas geométricas (triângulos) em pixels na tela"],a:3},
{q:"O que a tríade CIA em segurança da informação representa?",o:["Confidencialidade, Integridade e Disponibilidade (Availability)","Agência dos EUA","Certificado, ID, Acesso","Criptografia, Identificação, Autorização"],a:0}
];

QUIZZES["__FINAL_ORANGE__"] = [
{q:"O que acontece se um microsserviço falha em um sistema com circuit breaker?",o:["Sistema todo cai","Circuit breaker abre, retorna fallback e tenta reconectar depois (fail gracefully)","Ignora a falha","Reinicia todo o cluster"],a:1},
{q:"O que attention scores em um Transformer representam?",o:["Quanto cada token deve 'prestar atenção' a cada outro token na sequência","Notas de prova","Velocidade de treino","Tamanho do modelo"],a:0},
{q:"O que é chunk overlap em RAG e por que é importante?",o:["Erro de indexação","Tipo de compressão","Duplicação de dados","Sobreposição entre chunks garante que contexto não é cortado na fronteira"],a:3},
{q:"O que é variant calling em genômica?",o:["Tipo de alinhamento","Ligar para variantes","Identificar diferenças (SNPs, indels) entre sequência amostrada e genoma de referência","Sequenciamento"],a:2},
{q:"Quando usar Redis vs PostgreSQL para um dado específico?",o:["Sempre Redis","Sempre PostgreSQL","Redis para dados temporários/cache com acesso ultrarrápido; PostgreSQL para dados persistentes e relacionais","São intercambiáveis"],a:2},
{q:"O que é idempotência em pipelines de dados e por que importa?",o:["Schema evolution","Re-executar pipeline produz mesmo resultado (essencial para retries e recovery sem dados duplicados)","Tipo de transformação","Performance"],a:1},
{q:"O que é o trilema da blockchain (escalabilidade, segurança, descentralização)?",o:["Só importa segurança","São independentes","Resolvido","É difícil otimizar os 3 simultaneamente: melhorar um geralmente compromete outro"],a:3},
{q:"O que é o difference entre Deployment e StatefulSet no Kubernetes?",o:["Deployment é mais novo","São iguais","Deployment: pods intercambiáveis; StatefulSet: identidade estável, storage persistente por pod (bancos)","StatefulSet é deprecated"],a:2},
{q:"O que é a diferença entre SAST e DAST?",o:["DAST substitui SAST","SAST analisa código estático (source code); DAST testa aplicação rodando (black-box)","São iguais","SAST é mais completo"],a:1},
{q:"O que é IDOR (Insecure Direct Object Reference)?",o:["Acessar recursos de outros usuários manipulando ID no request (ex: /api/user/123 → /api/user/456)","Buffer overflow","Tipo de link","Tipo de XSS"],a:0},
{q:"O que é o loop perception-planning-action em robótica?",o:["Tipo de SLAM","Tipo de PID","Loop infinito","Ciclo contínuo: perceber ambiente → planejar ação → executar → perceber resultado → repetir"],a:3},
{q:"Por que event-driven architecture é melhor que REST síncrono para microsserviços desacoplados?",o:["São iguais","É mais simples","Serviços não esperam resposta; comunicação assíncrona permite escalabilidade e resiliência independentes","REST é deprecated"],a:2},
{q:"O que é observability-driven development?",o:["Só monitorar produção","Instrumentar código com logs, métricas e traces desde o início para entender comportamento em qualquer ambiente","Tipo de TDD","Debugging avançado"],a:1},
{q:"O que é data contract entre serviços?",o:["Acordo formal sobre schema, formato e SLA dos dados entre produtor e consumidor","Tipo de teste","Contrato jurídico","Tipo de API"],a:0},
{q:"O que é blue-green vs canary deployment?",o:["Canary é instantâneo","São iguais","Blue-green é gradual","Blue-green: troca total instantânea; canary: rollout gradual para percentual de usuários"],a:3},
{q:"Por que container scanning é crítico em CI/CD?",o:["Só para compliance","Opcional","Imagens podem herdar vulnerabilidades de base images e dependências que entram em produção","Melhora performance"],a:2},
{q:"O que é graceful degradation em sistemas distribuídos?",o:["Desligar serviços","Sistema continua funcionando com funcionalidade reduzida quando componente falha","Tipo de rollback","Sistema morre elegantemente"],a:1},
{q:"Como IA e edge computing se complementam em IoT industrial?",o:["Edge substitui IA","Edge processa dados localmente (baixa latência), IA infere anomalias sem depender de cloud","IA substitui edge","Não se relacionam"],a:1},
{q:"O que é GitOps e qual é o benefício principal?",o:["Tipo de CI/CD","Framework web","Git como backup","Git como fonte de verdade: infraestrutura declarativa, auditável, versionada e auto-sincronizada"],a:3},
{q:"Por que fine-tuning nem sempre é a melhor abordagem para customizar LLMs?",o:["É sempre a melhor","Fine-tuning é impossível","RAG é mais barato, não precisa de dados de treino, mantém modelo atualizado e evita catastrophic forgetting","São equivalentes"],a:2}
];

QUIZZES["__FINAL_RED__"] = [
{q:"O que acontece se W+R ≤ N em um sistema de quorum?",o:["Consistência forte","Leituras podem retornar dados desatualizados (consistência eventual, não forte)","Nada muda","Sistema falha"],a:1},
{q:"Por que CRDTs são preferíveis a locks em sistemas distribuídos de alta disponibilidade?",o:["Convergem automaticamente sem coordenação, evitando latência e indisponibilidade de locks distribuídos","Locks não existem em distribuídos","São mais rápidos","São mais simples"],a:0},
{q:"O que é training-serving skew e como detectar?",o:["Tipo de drift","Overfitting","Bug de GPU","Features computadas diferentemente em treino vs produção; detectar comparando distribuições de features"],a:3},
{q:"Por que feature store é importante em MLOps?",o:["Tipo de banco","Opcional","Garante que features são consistentes entre treino e serving, reutilizáveis entre equipes e versionadas","Armazena modelos"],a:2},
{q:"O que é reward hacking em RL?",o:["Tipo de exploit","Agente encontra forma de maximizar reward sem realmente resolver o problema intencionado","Bug de código","Hackear recompensas"],a:1},
{q:"Por que computação quântica ameaça criptografia RSA?",o:["Algoritmo de Shor fatora números grandes eficientemente, quebrando a premissa de RSA","Não ameaça","Quantum é mais rápido em tudo","Quantum já quebrou RSA"],a:0},
{q:"O que é order of volatility em forense e por que importa?",o:["Não importa a ordem","Ordem de importância","Ordem alfabética","Coletar evidências da mais volátil (RAM, cache) para menos volátil (disco) antes que desapareçam"],a:3},
{q:"O que timestomping é em anti-forensics?",o:["Sincronizar relógio","Carimbar tempo","Alterar timestamps de arquivos para confundir timeline analysis e esconder atividade","Tipo de backup"],a:2},
{q:"Como garantir integridade de evidências em um sistema distribuído?",o:["Hash criptográfico de cada evidência replicado via consenso: qualquer alteração é detectável","Confiar nos nós","Backup suficiente","Criptografar tudo"],a:0},
{q:"Por que monitoramento de model drift é especialmente crítico em sistemas de detecção de malware?",o:["Atacantes evoluem táticas constantemente, então distribuição de inputs muda (adversarial drift)","Malware não muda","Drift é lento em segurança","Não é crítico"],a:0},
{q:"O que é Byzantine fault tolerance e quando é necessário?",o:["Nunca necessário","Consenso mesmo com nós maliciosos; necessário quando nós não são confiáveis (blockchain, militar)","Sempre necessário","Tolerância a bugs"],a:1},
{q:"Como RL pode ser aplicado a incident response automatizado?",o:["Agente aprende política de containment otimizando: minimizar dano, tempo de resposta e falsos positivos","Não pode","Só com supervised learning","Só com regras manuais"],a:0},
{q:"O que é post-quantum cryptography?",o:["Criptografia pós-apocalipse","Algoritmos criptográficos resistentes a ataques de computadores quânticos (lattice-based, hash-based)","Tipo de RSA","Criptografia quântica"],a:1},
{q:"Por que idempotência é crucial em pipelines de MLOps distribuídos?",o:["Re-execuções (retries, crashes) não devem duplicar dados/treinos nem corromper model registry","Tipo de consistência","Não é importante","Melhora performance"],a:0},
{q:"O que diferencia forense de memória de forense de disco?",o:["Memória não tem evidências","São iguais","Disco é mais útil","Memória é volátil (desaparece ao desligar) e contém estado em execução: processos, chaves, malware fileless"],a:3},
{q:"Como escalar inferência de modelos ML em sistema distribuído?",o:["Não é possível","Só usar GPU maior","Só vertical scaling","Load balancing entre réplicas do modelo, batching de requests, model sharding para modelos grandes"],a:3},
{q:"O que é o princípio de Locard em forense digital?",o:["Todo contato deixa rastro: atacante sempre deixa evidência e sempre leva algo consigo (logs, artifacts)","Tipo de hash","Lei de Amdahl","Lei de programação"],a:0},
{q:"Qual é o papel de vector clocks em um sistema de log forense distribuído?",o:["Tipo de timestamp","Não são úteis","Sincronizar relógios","Ordenar eventos causalmente entre nós sem depender de relógios sincronizados"],a:3},
{q:"Por que quantum error correction é o maior desafio prático da computação quântica?",o:["Hardware já resolveu","É fácil de resolver","Não é desafio","Qubits são extremamente sensíveis a ruído; correção requer muitos qubits físicos por qubit lógico"],a:3},
{q:"Como combinar threat hunting proativo com ML em um SOC?",o:["ML substitui analistas","São incompatíveis","ML detecta anomalias e prioriza alertas; analista humano formula hipóteses e investiga com contexto","Só regras manuais funcionam"],a:2}
];

QUIZZES["__FINAL_BLUE__"] = [
{q:"O que uma boa seção de Related Work deve fazer além de listar papers?",o:["Criticar papers","Comparar abordagens, identificar gaps e posicionar sua contribuição em relação ao estado da arte","Só listar","Citar todos os papers existentes"],a:1},
{q:"Por que reprodutibilidade é um pilar fundamental da ciência?",o:["Permite verificar resultados independentemente; sem ela, descobertas não podem ser validadas pela comunidade","Só para exatas","É opcional","Não é importante em CS"],a:0},
{q:"O que diferencia uma boa pergunta de pesquisa de uma pergunta vaga?",o:["Tamanho da pergunta","Precisa ser ampla","Qualquer pergunta serve","Boa pergunta é específica, testável, relevante e delimitada em escopo"],a:3},
{q:"Por que é importante fazer revisão de literatura ANTES de começar experimentos?",o:["Só após resultados","Para encher o paper","Para não reinventar a roda, entender estado da arte e refinar hipóteses e metodologia","Não é importante"],a:2},
{q:"O que uma contribuição de mestrado deve demonstrar?",o:["Descoberta revolucionária","Capacidade de conduzir pesquisa independente com rigor metodológico e contribuição incremental","Muitas publicações","Código perfeito"],a:1},
{q:"Qual é o papel do orientador vs do mestrando?",o:["Mestrando é independente desde o dia 1","Orientador faz tudo","Orientador só assina","Orientador guia com experiência e feedback; mestrando executa pesquisa com autonomia crescente"],a:3},
{q:"O que é originalidade em uma tese de doutorado?",o:["Mais dados","Tema diferente","Nunca feito antes","Contribuição substancial e inédita: novo método, novo framework, nova teoria ou nova evidência significativa"],a:3},
{q:"O que é impact factor e por que não é a única métrica relevante?",o:["Mede citações do periódico, não do paper individual; qualidade da contribuição e citações individuais também importam","Não existe","Métrica perfeita","É a única que importa"],a:0},
{q:"Por que Docker é importante para reprodutibilidade científica?",o:["Só para deploy","Empacota ambiente completo (OS, dependências, versões) para que experimento rode identicamente em qualquer máquina","Moda de DevOps","Melhora performance"],a:1},
{q:"O que Zotero/Mendeley resolvem que BibTeX manual não resolve bem?",o:["Gerenciamento automático de PDFs, metadados, citações em múltiplos estilos e sincronização entre dispositivos","BibTeX é melhor","Nada","São iguais"],a:0},
{q:"Como a revisão por pares, apesar de imperfeita, protege a ciência?",o:["Filtro de qualidade: especialistas verificam validade, metodologia e contribuição antes de publicação","Deveria ser abolida","É perfeita","Não protege"],a:0},
{q:"Qual é a relação entre IC, mestrado e doutorado na formação de pesquisador?",o:["Só doutorado importa","Progressão: IC desenvolve habilidades básicas de pesquisa, mestrado aprofunda, doutorado cria contribuição original","São independentes","IC substitui mestrado"],a:1},
{q:"Por que open access é um debate importante na ciência?",o:["Open access é pior","Conhecimento financiado publicamente deveria ser acessível a todos, mas editoras lucram com paywalls","Já foi resolvido","Não é importante"],a:1},
{q:"O que um pipeline de pesquisa reproduzível deve conter?",o:["Código versionado + dados (ou link) + ambiente (Docker/conda) + instruções claras + automatização (Make/DVC)","Só os resultados","Só o paper","Só o código"],a:0},
{q:"Por que escrever bem é tão importante quanto pesquisar bem?",o:["Escrita é secundária","Código é suficiente","Não é importante","Pesquisa que não é comunicada claramente não impacta; escrita é o veículo da contribuição"],a:3},
{q:"Qual é o papel de conferências vs periódicos em Computação?",o:["Periódicos são melhores","Conferências são venues primárias em CS (rápidas, peer-reviewed, competitivas); periódicos são mais detalhados","São iguais","Conferências são informais"],a:1},
{q:"Como IA e ferramentas como LLMs estão mudando a pesquisa acadêmica?",o:["Substituem pesquisadores","São proibidos","Auxiliam em revisão de literatura, escrita e análise, mas levantam questões de autoria e integridade","Não têm impacto"],a:2},
{q:"O que é ética em pesquisa computacional?",o:["Considerar impacto social, viés em dados, privacidade, reprodutibilidade e uso responsável de resultados","Não existe em CS","Só para biomédica","Só seguir a lei"],a:0},
{q:"Por que manter Lattes e ORCID atualizados é importante para pesquisadores brasileiros?",o:["Burocracia desnecessária","Ninguém confere","Só Lattes importa","São usados em avaliações de bolsas, concursos e financiamento; ORCID integra internacionalmente"],a:3},
{q:"O que é revisão sistemática de literatura e quando usar?",o:["Revisão narrativa é melhor","Só para doutorado","Busca estruturada e reproduzível com protocolo definido; usar quando se quer mapear estado da arte rigorosamente","Ler papers aleatórios"],a:2}
];

QUIZZES["__FINAL_PURPLE__"] = [
{q:"Por que aprender a aprender é a habilidade mais importante em tech?",o:["Experiência é tudo","Tecnologias mudam rápido; quem aprende eficientemente se adapta; meta-learning > qualquer tecnologia específica","Só saber programar basta","Não é"],a:1},
{q:"O que é a diferença entre IC track e management track?",o:["IC: crescer em profundidade técnica e impacto (Staff, Principal); management: crescer liderando pessoas e times","IC é melhor","São iguais","Management é melhor"],a:0},
{q:"O que são DORA metrics e por que são melhores que linhas de código?",o:["Métricas de código","LOC é mais preciso","São iguais","Medem eficácia de entrega (deploy frequency, lead time, failure rate, recovery); LOC não mede valor"],a:3},
{q:"O que é a diferença entre urgente e importante na priorização?",o:["São iguais","Importante pode esperar sempre","Urgente precisa de ação imediata; importante contribui para objetivos de longo prazo (Eisenhower matrix)","Urgente é mais importante"],a:2},
{q:"Por que documentar decisões técnicas (ADRs) é mais valioso que documentar código?",o:["Código documenta sozinho","ADRs capturam O PORQUÊ de decisões; código mostra O QUÊ; contexto perdido é irrecuperável","ADRs são burocráticos","Não é"],a:1},
{q:"O que é a diferença entre on-call saudável e on-call tóxico?",o:["Saudável: runbooks, rotação justa, baixo volume de alertas; tóxico: alertas constantes, sem documentação, sem rotação","On-call é opcional","São iguais","On-call é sempre tóxico"],a:0},
{q:"Por que falar com usuários é mais valioso que intuição para decisões de produto?",o:["São igualmente valiosos","Usuários não sabem o que querem","Intuição basta","Usuários revelam problemas reais que devs não antecipam; dados > opinião para validar hipóteses"],a:3},
{q:"O que é a diferença entre output e outcome em produto?",o:["Output é mais importante","São iguais","Output: features entregues (o que fizemos); outcome: impacto no usuário/negócio (o que conseguimos)","Outcome é imensurável"],a:2},
{q:"O que é psychological safety e por que é o fator #1 de times de alta performance?",o:["Conforto sem desafio","Segurança para correr riscos e discordar sem medo; Google Project Aristotle mostrou ser o preditor mais forte","Não é comprovado","Skill individual é mais importante"],a:1},
{q:"Por que feedback frequente é melhor que review anual?",o:["Curso-correção rápida, comportamento ainda é recente, menos surpresas, crescimento contínuo","Review anual é mais justo","Feedback cansa pessoas","Não é melhor"],a:0},
{q:"O que é moat (fosso competitivo) e por que importa para engenheiros?",o:["Só para executivos","Moat é só marketing","Não é relevante para devs","Engenheiro que entende moat toma melhores decisões técnicas: o que construir, como diferenciar"],a:3},
{q:"O que é a relação entre velocidade de entrega e qualidade?",o:["Velocidade > qualidade","Qualidade > velocidade","A longo prazo são complementares: qualidade (testes, CI/CD, good code) ACELERA entrega sustentável","São opostos"],a:2},
{q:"O que é a diferença entre carreira e emprego?",o:["Emprego é mais importante","Emprego: posição atual; carreira: trajetória de longo prazo com skills, rede e reputação acumulados","São iguais","Carreira é ficção"],a:1},
{q:"Por que engenheiros devem entender negócio?",o:["Decisões técnicas impactam negócio; entender contexto permite priorizar o que gera mais valor","É trabalho do PM","Não devem","Negócio é para MBAs"],a:0},
{q:"O que é mentoria reversa e por que é valiosa?",o:["Senior sabe tudo","É desrespeitoso","Não existe","Pessoa mais junior mentorea senior em novas tecnologias/perspectivas; ambos aprendem"],a:3},
{q:"Como equilíbrio entre habilidades técnicas e soft skills evolui com senioridade?",o:["Soft skills não importam","São sempre 50/50","Técnico sempre domina","Mais senior = mais soft skills (comunicação, influência, visão); técnico continua mas proporção muda"],a:3},
{q:"O que é compound learning (aprendizado composto)?",o:["Habilidades se acumulam e reforçam mutuamente ao longo do tempo, como juros compostos","Estudar muito rápido","Tipo de spaced repetition","Aprender tudo de uma vez"],a:0},
{q:"Por que contribuir para open source é bom para carreira?",o:["Demonstra habilidade publicamente, expande rede, aprende com code review de experts, constrói reputação","Só beneficia a empresa","Não é valorizado","Trabalho de graça"],a:0},
{q:"O que é a diferença entre liderar e gerenciar?",o:["Liderar é melhor","São iguais","Gerenciar é mais útil","Liderar: definir direção, inspirar, inovar; gerenciar: organizar, planejar, executar (ambos necessários)"],a:3},
{q:"O que é North Star Metric e por que todo produto precisa de uma?",o:["Uma métrica que melhor captura o valor entregue aos usuários e guia toda a estratégia do produto","Métrica de astronomia","Número de usuários sempre","Revenue sempre"],a:0}
];

