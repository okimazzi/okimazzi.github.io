const ROADMAP = [
  {
    "id": "beginner",
    "name": "🟢 INICIANTE",
    "css": "green",
    "time": "~6-12 meses",
    "desc": "Fundacao solida. Na ordem — cada area depende da anterior.",
    "areas": [
      {
        "name": "🧠 Fundamentos de Computacao",
        "topics": [
          {
            "name": "Como Computadores Funcionam",
            "books": [
              "Code: The Hidden Language — Charles Petzold",
              "Organizacao Estruturada de Computadores — Tanenbaum",
              "But How Do It Know? — J. Clark Scott"
            ],
            "items": [
              {
                "w": "Sistema binário: como computadores representam TUDO com 0s e 1s",
                "s": "sistema binário explicado para iniciantes | como computador usa zeros e uns | binary number system tutorial | converter decimal para binário passo a passo",
                "d": "• O que estudar: base 2 vs base 10, converter decimal↔binário manualmente, tabela de potências de 2 (1,2,4,8,16,32,64,128,256), por que computadores usam binário (transistores = on/off)"
              },
              {
                "w": "Bits e Bytes: unidades de informação digital (8 bits = 1 byte)",
                "s": "bits e bytes explicação simples | diferença bit byte kilobyte megabyte | unidades de medida computador | how bits and bytes work tutorial",
                "d": "• O que estudar: 1 bit = 0 ou 1, 8 bits = 1 byte = 1 caractere, tabela completa (KB=1024B, MB=1024KB, GB, TB, PB), por que 1024 e não 1000\n• Saber calcular: quantos bytes um arquivo de 5MB tem, quantas fotos de 3MB cabem em 16GB, por que pendrive de 64GB mostra ~59GB"
              },
              {
                "w": "Representação de dados: como texto (ASCII/Unicode), números (int, float, IEEE 754) e imagens (pixels RGB) viram bits",
                "s": "como computador armazena texto ASCII Unicode | IEEE 754 floating point explicado | como imagem digital funciona pixels RGB | representação de dados no computador | representao de dados tutorial beginners",
                "d": "• Texto: ASCII (A=65, a=97, 0-127), Unicode/UTF-8 (emojis, caracteres especiais, suporta todas as línguas), tabela ASCII\n• Números inteiros: complemento de 2 para negativos, overflow (255+1=0 em 8 bits), signed vs unsigned\n• Decimais: IEEE 754 (sinal + expoente + mantissa), por que 0.1+0.2≠0.3 em qualquer linguagem\n• Imagens: cada pixel = 3 valores RGB (0-255), resolução 1920×1080 = 2M pixels × 3 bytes = ~6MB raw"
              },
              {
                "w": "Hardware: CPU, RAM, SSD/HDD, placa-mãe — o que cada peça faz e como se conectam",
                "s": "componentes do computador explicado para iniciantes | o que cada peça do PC faz | CPU RAM SSD placa mãe explicação | computer hardware basics beginners",
                "d": "• CPU: cérebro, executa instruções, medida em GHz (bilhões de operações/seg), cores = processadores paralelos\n• RAM: memória temporária (volátil), rápida (~10ns), 8-32GB típico, dados somem ao desligar\n• SSD: armazenamento permanente, mais lento que RAM (~0.1ms), 256GB-2TB típico, NVMe > SATA\n• HDD: disco magnético giratório, mais lento (~10ms), mais barato por GB, bom pra backup\n• Placa-mãe: conecta tudo, tem chipset, slots PCIe, portas USB, BIOS/UEFI\n• GPU: processador gráfico, milhares de cores simples, essencial pra jogos e ML"
              },
              {
                "w": "Ciclo fetch-decode-execute: como a CPU realmente executa instruções passo a passo",
                "s": "fetch decode execute cycle explained | ciclo de instrução CPU tutorial | como CPU executa programa | instruction cycle computer science",
                "d": "• Fetch: CPU busca próxima instrução da RAM usando o Program Counter (endereço)\n• Decode: decodifica a instrução (qual operação? quais dados?)\n• Execute: ALU faz a operação (soma, compara, move dados)\n• Store: resultado volta pra registrador ou RAM\n• Clock speed: 3GHz = 3 bilhões de ciclos/seg, cada instrução leva 1+ ciclos\n• Prática: simular mentalmente ADD R1, R2, R3 (somar registradores 2 e 3, guardar em 1)"
              },
              {
                "w": "Sistemas operacionais: o que é SO, kernel, drivers, por que precisamos de um",
                "s": "o que é sistema operacional para iniciantes | kernel explicado simples | para que serve o SO tutorial | operating system basics explained",
                "d": "• SO gerencia: CPU (escalonamento de processos), RAM (alocação de memória), disco (file system), periféricos (drivers)\n• Kernel: parte central do SO, controla hardware diretamente, roda em modo privilegiado\n• Tipos: monolítico (Linux), microkernel (Minix), híbrido (Windows, macOS)\n• Exemplos: Windows (desktop), macOS (Apple), Linux (servidores, embarcados), Android (mobile, é Linux)\n• Drivers: traduzem entre SO e hardware específico (placa de vídeo, impressora, WiFi)"
              },
              {
                "w": "Números e lógica booleana: AND, OR, NOT, XOR — a base de TUDO em computação",
                "s": "lógica booleana explicada para iniciantes | AND OR NOT XOR tabela verdade | boolean logic computer science | portas lógicas explicação | nmeros e lgica booleana tutorial beginners",
                "d": "• AND: ambos 1 → 1 (só verdadeiro se AMBOS forem)\n• OR: pelo menos um 1 → 1 (verdadeiro se QUALQUER um for)\n• NOT: inverte (0→1, 1→0)\n• XOR: diferente → 1 (verdadeiro se forem DIFERENTES)\n• Tabelas verdade: desenhar para cada porta com todas combinações\n• Aplicação: if (idade >= 18 AND tem_carteira): pode dirigir\n• Portas lógicas são transistores no chip — tudo no computador é combinação dessas operações"
              }
            ]
          },
          {
            "name": "Pensamento Computacional",
            "books": [
              "Think Like a Programmer — V. Anton Spraul",
              "Computational Thinking — Denning & Tedre",
              "Bem-vindo a Computacao — Manzano & Oliveira"
            ],
            "items": [
              {
                "w": "Decomposição: dividir problemas complexos em partes menores e gerenciáveis",
                "s": "decomposição pensamento computacional | como dividir problema em partes menores | decomposition computational thinking | problem solving step by step programming",
                "d": "• O que estudar: pegar um problema grande (ex: 'fazer um site') e dividir em sub-problemas (layout, conteúdo, navegação, deploy)\n• Na programação: cada função resolve UM sub-problema, funções se combinam pra resolver o todo"
              },
              {
                "w": "Reconhecimento de padrões: encontrar similaridades e regularidades em dados/problemas",
                "s": "reconhecimento de padrões programação | pattern recognition computational thinking | encontrar padrões em problemas | pattern recognition examples beginners",
                "d": "• O que estudar: observar que problemas diferentes têm soluções similares (ex: buscar em lista = buscar em agenda = buscar em dicionário)\n• Exemplos: sequência 2,4,6,8 → padrão +2; todo login tem: input usuario + input senha + botão entrar → padrão de formulário\n• Na programação: padrões viram funções reutilizáveis, loops substituem repetição manual"
              },
              {
                "w": "Abstração: ignorar detalhes irrelevantes e focar no que importa",
                "s": "abstração pensamento computacional exemplos | abstraction computational thinking | o que é abstração em programação | abstraction examples for beginners",
                "d": "• O que estudar: mapa é abstração da cidade (ignora detalhes irrelevantes como cor dos prédios), função é abstração de código (chama soma() sem saber como funciona por dentro)\n• Níveis: usuário vê botão → programador vê função → SO vê syscall → CPU vê instrução → transistor vê voltagem"
              },
              {
                "w": "Algoritmos: sequência finita de passos para resolver um problema",
                "s": "o que é algoritmo explicação simples | algorithm explained for beginners | como criar algoritmo passo a passo | primeiro algoritmo programação",
                "d": "• O que estudar: algoritmo = receita de bolo do computador. Tem entrada, processamento e saída\n• Criar algoritmos no dia-a-dia: 'Como fazer café' em 8 passos exatos (computador precisa de cada detalhe)\n• Fluxograma: desenhar decisões (losango), ações (retângulo), início/fim (oval)\n• Pseudocódigo: escrever em português estruturado antes de programar"
              },
              {
                "w": "Lógica de programação: variáveis, condições (se/senão), repetições (loops)",
                "s": "lógica de programação para iniciantes | variáveis condições loops explicação | programming logic basics | lógica programação exercícios resolvidos",
                "d": "• Variáveis: caixas com nome que guardam valores (idade=25, nome='Ana'). Mudam ao longo do programa\n• Condições: SE (if) idade >= 18 ENTÃO pode votar SENÃO (else) não pode\n• Repetições: ENQUANTO (while) tiver item na lista, processar. PARA CADA (for) aluno, calcular média\n• Ordem importa: computador executa linha por linha, de cima pra baixo"
              }
            ]
          },
          {
            "name": "Como a Internet Funciona",
            "books": [
              "Computer Networking: A Top-Down Approach — Kurose & Ross",
              "How the Internet Works — Preston Gralla",
              "Redes de Computadores — Tanenbaum"
            ],
            "items": [
              {
                "w": "O que é a Internet: rede global de computadores conectados, não é a mesma coisa que Web",
                "s": "como a internet funciona explicação simples | internet vs web diferença | how does the internet work beginners | o que é a internet realmente",
                "d": "• Internet ≠ Web. Internet = infraestrutura (cabos, roteadores, servidores). Web = sites que rodam SOBRE a internet (HTTP)\n• Outros serviços na internet: email (SMTP), transferência de arquivo (FTP), streaming, jogos online\n• Fisicamente: cabos submarinos de fibra óptica conectam continentes, ISPs conectam sua casa à rede"
              },
              {
                "w": "Modelo cliente-servidor: seu navegador (cliente) pede, servidor responde",
                "s": "modelo cliente servidor explicado | client server model explained | como navegador conversa com servidor | request response HTTP explicação",
                "d": "• Cliente = seu navegador (Chrome, Firefox). Faz PEDIDO (request)\n• Servidor = computador remoto que hospeda o site. Dá RESPOSTA (response)\n• Fluxo: você digita URL → navegador envia HTTP GET → servidor processa → retorna HTML/CSS/JS → navegador renderiza\n• Código de status: 200=OK, 404=não encontrado, 500=erro do servidor, 301=redirecionou"
              },
              {
                "w": "DNS: o 'catálogo telefônico' da internet — traduz nomes (google.com) em IPs (142.250.80.14)",
                "s": "como DNS funciona explicação simples | DNS explained for beginners | o que é DNS servidor de nomes | how DNS resolves domain names step by step",
                "d": "• Você digita google.com → computador pergunta ao DNS 'qual é o IP?' → DNS responde 142.250.80.14 → navegador conecta nesse IP\n• Hierarquia: Root servers (.com, .br, .org) → TLD servers → Authoritative servers (do domínio específico)\n• Cache: seu computador e seu ISP guardam respostas DNS pra não perguntar toda vez\n• Testar: abra terminal, digite 'nslookup google.com' ou 'dig google.com' pra ver o IP"
              },
              {
                "w": "IP e portas: endereço da máquina (IP) + porta específica do serviço (80=HTTP, 443=HTTPS, 22=SSH)",
                "s": "endereço IP e porta explicação | IP address and ports explained | portas de rede mais comuns | what are network ports beginners",
                "d": "• IP = endereço da máquina na rede (como CEP). Ex: 192.168.1.1 (privado), 8.8.8.8 (DNS do Google)\n• Porta = qual serviço naquela máquina. Um servidor pode ter web (porta 80), email (porta 25), SSH (porta 22) no mesmo IP\n• IPv4: 4 números de 0-255 (4 bilhões de endereços, estão acabando). IPv6: muito mais endereços\n• Localhost: 127.0.0.1 = seu próprio computador. Usado pra desenvolvimento"
              },
              {
                "w": "HTTP/HTTPS: protocolo que define como navegador e servidor conversam",
                "s": "HTTP e HTTPS diferença explicação | como funciona protocolo HTTP | HTTP methods GET POST explained | HTTPS criptografia explicação simples",
                "d": "• HTTP: protocolo de comunicação da web. Request tem: método (GET/POST), URL, headers, body\n• GET: pedir dados (abrir página). POST: enviar dados (submeter formulário). PUT: atualizar. DELETE: remover\n• HTTPS = HTTP + criptografia TLS. Cadeado no navegador = seguro. Sem cadeado = dados visíveis pra qualquer um na rede\n• Headers: metadata (tipo do conteúdo, cookies, autenticação, cache)\n• Testar: abra DevTools (F12) → aba Network → recarregue página → veja cada request/response"
              },
              {
                "w": "Protocolos e APIs: como programas conversam entre si pela internet (REST, JSON)",
                "s": "o que é API explicação simples | REST API para iniciantes | JSON formato dados explicação | what is an API explained simply",
                "d": "• API (Application Programming Interface): forma padronizada de dois programas conversarem\n• REST: padrão de API web. Usa HTTP methods (GET/POST/PUT/DELETE) com URLs que representam recursos\n• JSON: formato de dados que APIs usam. Parece dicionário Python: {\"nome\": \"Ana\", \"idade\": 25}\n• Exemplo real: app de clima chama API → envia cidade → recebe JSON com temperatura, umidade, previsão\n• Testar: abra navegador, acesse https://api.github.com/users/torvalds → veja JSON do perfil do Linus"
              }
            ]
          }
        ]
      },
      {
        "name": "💻 Sistemas Operacionais & Terminal",
        "topics": [
          {
            "name": "Conceitos de SO",
            "books": [
              "Operating Systems: Three Easy Pieces — Arpaci-Dusseau (gratuito)",
              "How Linux Works — Brian Ward",
              "Sistemas Operacionais Modernos — Tanenbaum"
            ],
            "items": [
              {
                "w": "O que e um SO: kernel, processos, filesystem, memoria",
                "s": "kernel processos filesystem tutorial portugues | sistema operacional fundamentals | o que e um so explained for beginners | o que e um so explicação em português",
                "d": "• O que é: SO gerencia hardware..\n• Conceitos-chave: Kernel = nucleo.. Processo = programa rodando.. Filesystem = organizacao de arquivos.. O SO decide quem usa CPU e RAM.\n• O que estudar: kernel, processos, filesystem, memoria."
              },
              {
                "w": "Boot process: BIOS/UEFI, bootloader (GRUB), kernel, init/systemd",
                "s": "Boot process BIOS/UEFI tutorial portugues | processo boot computador tutorial | boot process explained for beginners | boot process explicação em português",
                "d": "• O que é: Ligar PC → BIOS/UEFI (firmware, POST) → bootloader (GRUB: escolher SO) → kernel (carregar drivers, montar filesystem) → init/systemd (iniciar servicos)..\n• Conceitos-chave: Dual boot: GRUB mostra menu pra escolher Windows ou Linux.. UEFI: moderno, mais rapido que BIOS.\n• O que estudar: BIOS/UEFI, bootloader (GRUB), kernel, init/systemd."
              },
              {
                "w": "Tipos de SO: Windows, Linux, macOS. Distribuicoes Linux",
                "s": "Tipos Windows Linux tutorial portugues | ubuntu vs mint vs fedora tutorial | tipos de so explained for beginners | tipos de so explicação em português",
                "d": "• O que é: Windows: mais usado desktop..\n• Conceitos-chave: Linux: servidores, dev, gratuito.. macOS: Apple.. Distros Linux: Ubuntu(iniciante), Mint(Windows-like), Fedora(bleeding edge), Arch(avancado).\n• O que estudar: Windows, Linux, macOS. Distribuicoes Linux."
              },
              {
                "w": "Tipos de kernel: monolitico (Linux), microkernel (Minix), hibrido (Windows/macOS)",
                "s": "Tipos kernel monolitico tutorial portugues | tipos kernel monolitico micro | tipos de kernel explained for beginners | tipos de kernel explicação em português",
                "d": "• O que é: Monolitico (Linux): tudo no kernel (drivers, filesystem, rede)..\n• Conceitos-chave: Rapido, menos isolamento.. Microkernel (Minix, QNX): minimo no kernel, resto em user space.. Mais seguro, mais lento.. Hibrido (Windows NT, macOS XNU): mistura.. Debate Torvalds vs Tanenbaum (1992): monolitico vs micro.\n• O que estudar: monolitico (Linux), microkernel (Minix), hibrido (Windows/macOS)."
              },
              {
                "w": "Processos vs Threads, multitarefa, escalonamento",
                "s": "Processos Threads multitarefa tutorial portugues | processos threads sistema operacional | processos vs threads multitarefa escalonamento explained for beginners | processos vs threads multitarefa escalonamento explicação em português",
                "d": "• O que é: Processo: programa rodando com sua memoria..\n• Conceitos-chave: Thread: sub-processo (compartilha memoria).. Multitarefa: SO alterna rapido.. Escalonador: decide quem roda."
              },
              {
                "w": "Gerenciamento de memoria: RAM, swap, memoria virtual",
                "s": "Gerenciamento memoria swap tutorial portugues | gerenciamento memoria sistema operacional | gerenciamento de memoria explained for beginners | gerenciamento de memoria explicação em português",
                "d": "• O que é: RAM dividida entre processos..\n• Conceitos-chave: Swap: usa disco quando RAM enche (lento).. Memoria virtual: cada processo acha que tem toda RAM pra si.\n• O que estudar: RAM, swap, memoria virtual."
              },
              {
                "w": "Device drivers: como SO conversa com hardware, conceito de abstracoes",
                "s": "Device drivers como tutorial portugues | operating system hardware abstraction | device drivers explained for beginners | Device drivers examples and practice",
                "d": "• O que é: Driver: software que traduz pedidos do SO pra linguagem do hardware..\n• Conceitos-chave: SO nao precisa saber detalhes de cada placa de video — o driver abstrai.. Abstracoes: arquivo (disco), socket (rede), process (CPU).. SO = camada de abstracoes sobre hardware.\n• O que estudar: como SO conversa com hardware, conceito de abstracoes."
              }
            ]
          },
          {
            "name": "Linux e Linha de Comando",
            "books": [
              "The Linux Command Line — William Shotts",
              "How Linux Works — Brian Ward",
              "Guia Foca Linux — Gleydson da Silva (gratuito)"
            ],
            "items": [
              {
                "w": "Instalar Linux: dual boot, VM ou WSL2",
                "s": "Instalar Linux dual tutorial portugues | install ubuntu dual boot tutorial | instalar linux explained for beginners | instalar linux explicação em português",
                "d": "• O que é: VM (VirtualBox) = mais seguro pra comecar..\n• Conceitos-chave: Dual boot = melhor performance.. WSL2 = Linux dentro do Windows.. Ubuntu ou Mint pra iniciantes.\n• O que estudar: dual boot, VM ou WSL2."
              },
              {
                "w": "Filesystem Linux: /, /home, /etc, /var, /tmp, /usr, /bin",
                "s": "Filesystem Linux /home tutorial portugues | linux filesystem hierarchy | filesystem linux explained for beginners | filesystem linux explicação em português",
                "d": "• O que é: /home = seus arquivos..\n• Conceitos-chave: /etc = configuracoes.. /var = logs.. /tmp = temporarios.. /usr = programas.. Tudo e arquivo no Linux, ate dispositivos!.\n• O que estudar: /, /home, /etc, /var, /tmp, /usr, /bin."
              },
              {
                "w": "Comandos essenciais: ls, cd, mkdir, cp, mv, rm, cat, grep, find, chmod, sudo",
                "s": "Comandos essenciais explicação português | Comandos essenciais mkdir explained | comandos essenciais tutorial completo | Comandos essenciais examples and practice",
                "d": "• O que é: ls (listar), cd (navegar), pwd (onde estou), mkdir (criar pasta), cp/mv/rm, cat/less/head/tail, grep (buscar texto), find (buscar arquivo), chmod (permissoes), sudo (admin).\n• O que estudar: ls, cd, mkdir, cp, mv, rm, cat, grep, find, chmod, sudo."
              },
              {
                "w": "Editores no terminal: nano (facil) e vim (poderoso)",
                "s": "Editores no terminal explicação português | Editores terminal nano explained | editores no terminal tutorial completo | Editores no terminal examples and practice",
                "d": "• O que é: nano: Ctrl+O salvar, Ctrl+X sair..\n• Conceitos-chave: vim: i(inserir), Esc(sair modo), :wq(salvar+sair), :q!(sair sem salvar).. Curva ingreme mas vale aprender o basico.\n• O que estudar: nano (facil) e vim (poderoso)."
              },
              {
                "w": "Pacotes: apt, snap, flatpak. Repositorios e PPAs",
                "s": "Pacotes snap flatpak. tutorial portugues | linux package management tutorial | pacotes explained for beginners | pacotes explicação em português",
                "d": "• O que é: apt update/upgrade/install/remove..\n• Conceitos-chave: snap/flatpak: apps empacotados.. PPA: repositorios extras.. Sempre apt update antes de apt install.\n• O que estudar: apt, snap, flatpak. Repositorios e PPAs."
              },
              {
                "w": "Processos: ps, top/htop, kill, systemctl, cron",
                "s": "Processos top/htop kill tutorial portugues | crontab scheduled tasks tutorial | processos explained for beginners | processos explicação em português",
                "d": "• O que é: ps aux lista..\n• Conceitos-chave: top/htop monitora.. systemctl start/stop/enable servicos.. cron: agendar tarefas (crontab -e).\n• O que estudar: ps, top/htop, kill, systemctl, cron."
              },
              {
                "w": "Permissoes rwx, usuarios, grupos, chown",
                "s": "Permissoes usuarios grupos tutorial portugues | linux permissions rwx chmod chown | permissoes rwx usuarios grupos chown explicação em português | Permissoes rwx usuarios grupos chown examples and practice",
                "d": "• O que é: rwx = read/write/execute pra owner/group/others..\n• Conceitos-chave: chown user:group arquivo.. Grupos: compartilhar acesso."
              },
              {
                "w": "Variaveis de ambiente, PATH, .bashrc/.zshrc",
                "s": "Variaveis ambiente PATH tutorial portugues | environment variables PATH linux | variaveis de ambiente path bashrc/zshrc explained for beginners | variaveis de ambiente path bashrc/zshrc explicação em português",
                "d": "• O que é: export VAR=valor..\n• Conceitos-chave: $PATH diz onde achar executaveis.. ~/.bashrc carrega ao abrir terminal.. Aliases: alias ll='ls -la'."
              },
              {
                "w": "Shell scripting: bash, pipes, redirecionamento, condicoes",
                "s": "Shell scripting explicação português | linux pipes redirection tutorial | shell scripting explained for beginners | Shell scripting examples and practice",
                "d": "• O que é: #!/bin/bash..\n• Conceitos-chave: chmod +x script.sh.. Pipes: ls | grep .py.. > (sobrescreve) >> (adiciona).. for f in *.txt; do ..\n• O que estudar: bash, pipes, redirecionamento, condicoes."
              },
              {
                "w": "SSH, SCP, chaves publicas/privadas",
                "s": "SSH SCP chaves publicasprivadas explicação português | chaves publicas/privadas explained | ssh scp chaves publicas/privadas tutorial completo | SSH SCP chaves publicas/privadas examples and practice",
                "d": "• O que é: ssh user@servidor..\n• Conceitos-chave: ssh-keygen -t ed25519.. Copiar chave: ssh-copy-id.. SCP: scp arquivo user@host:/caminho.. Mais seguro que senha."
              }
            ]
          }
        ]
      },
      {
        "name": "🐍 Logica de Programacao com Python",
        "topics": [
          {
            "name": "Setup e Primeiros Passos",
            "books": [
              "Python Crash Course — Eric Matthes",
              "Automate the Boring Stuff — Al Sweigart (gratuito)",
              "Introducao a Programacao com Python — Nilo Ney Menezes"
            ],
            "items": [
              {
                "w": "Instalar Python 3.12+ e configurar VS Code",
                "s": "Instalar Python 312 e configurar VS Code explicação português | install python 3.12 VS Code setup 2025 | instalar python 312+ e configurar vs code tutorial completo | instalar python 312+ e configurar vs code explained for beginners",
                "d": "• O que é: python.org/downloads..\n• Conceitos-chave: Windows: marque Add to PATH.. Linux: sudo apt install python3.. VS Code + extensao Python (Microsoft).. Teste: python3 -c \"print('Oi')\"."
              },
              {
                "w": "REPL interativo e Jupyter Notebook",
                "s": "REPL interativo e Jupyter Notebook explicação português | REPL interativo Jupyter explained | repl interativo e jupyter notebook tutorial completo | REPL interativo e Jupyter Notebook examples and practice",
                "d": "• O que é: python3 no terminal = modo interativo (>>>)..\n• Conceitos-chave: Jupyter: pip install notebook.. Google Colab: online gratis."
              },
              {
                "w": "Variaveis, tipos (int, float, str, bool, None), type()",
                "s": "Variaveis tipos float tutorial portugues | variaveis tipos python tutorial | variaveis tipos int float str bool none type explained for beginners | variaveis tipos int float str bool none type explicação em português",
                "d": "• O que é: nome='Kaio'(str), idade=20(int), pi=3.14(float), ativo=True(bool), vazio=None..\n• Conceitos-chave: Tipagem dinamica.\n• Exemplos: type(x) mostra tipo.."
              },
              {
                "w": "Operadores: aritmeticos, comparacao, logicos, atribuicao",
                "s": "Operadores aritmeticos comparacao tutorial portugues | python operators arithmetic comparison logical | operadores explained for beginners | operadores explicação em português",
                "d": "• O que é: + - * / // % **..\n• Conceitos-chave: == != > < >= <=.. CUIDADO: = vs ==.\n• O que estudar: aritmeticos, comparacao, logicos, atribuicao."
              },
              {
                "w": "input(), print(), f-strings",
                "s": "input print f-strings tutorial portugues | python string formatting tutorial | input print fstrings explained for beginners | input print fstrings explicação em português",
                "d": "• O que é: print(f'Tenho {idade} anos')..\n• Conceitos-chave: input() retorna STRING, converta: int(input('Num: ')).. f'{preco:.2f}' = 2 decimais."
              },
              {
                "w": "Comentarios, boas praticas de nomeacao, PEP 8",
                "s": "Comentarios boas praticas de nomeacao PEP 8 explicação português | comentarios python boas praticas | comentarios boas praticas de nomeacao pep 8 tutorial completo | comentarios boas praticas de nomeacao pep 8 explained for beginners",
                "d": "• O que é: # comentario..\n• Conceitos-chave: '''docstring'''.. PEP 8: guia de estilo oficial.. snake_case pra variaveis/funcoes, PascalCase pra classes.. 4 espacos de indentacao.. Linhas ate 79 chars.. Use linter (flake8/ruff) pra checar automaticamente."
              }
            ]
          },
          {
            "name": "Strings",
            "books": [
              "Python Crash Course — Eric Matthes",
              "Learning Python — Mark Lutz",
              "Automate the Boring Stuff — Al Sweigart"
            ],
            "items": [
              {
                "w": "Criacao, concatenacao, repeticao, imutabilidade, escape characters",
                "s": "Criacao concatenacao repeticao tutorial portugues | strings python criacao concatenacao | criacao concatenacao repeticao imutabilidade escape characters explained for beginners | criacao concatenacao repeticao imutabilidade escape characters explicação em português",
                "d": "• O que é: 'Oi' + ' mundo' = 'Oi mundo'..\n• Conceitos-chave: 'ha'*3 = 'hahaha'.. Multilinha: '''texto'''.. Strings sao IMUTAVEIS (s[0]='X' da erro).. Raw strings: r'\\n' (nao interpreta).. Escape: \\n (nova linha), \\t (tab), \\\\ (barra), \\' (aspas)."
              },
              {
                "w": "Indexacao, fatiamento: s[0], s[2:5], s[::-1]",
                "s": "Indexacao fatiamento s[0] tutorial portugues | python string slicing indexing | indexacao fatiamento explained for beginners | indexacao fatiamento explicação em português",
                "d": "• O que é: s[0]=primeiro, s[-1]=ultimo, s[2:5]=2 ao 4, s[::-1]=invertida..\n• Conceitos-chave: Indice comeca em 0!. Strings sao IMUTAVEIS.\n• O que estudar: s[0], s[2:5], s[::-1]."
              },
              {
                "w": "Metodos: upper, lower, strip, split, join, replace, find, count, in",
                "s": "Metodos upper lower tutorial portugues | python string methods tutorial | metodos explained for beginners | metodos explicação em português",
                "d": "• O que é: .upper() .lower() .strip() .split(',') .join() .replace() .find() .count()..\n• Conceitos-chave: 'py' in 'python'=True.\n• O que estudar: upper, lower, strip, split, join, replace, find, count, in."
              },
              {
                "w": "Encoding: ASCII, UTF-8, bytes vs str, encode/decode",
                "s": "Encoding ASCII UTF-8 tutorial portugues | python unicode encoding tutorial | encoding explained for beginners | encoding explicação em português",
                "d": "• O que é: ASCII: 128 caracteres (ingles)..\n• Conceitos-chave: UTF-8: suporta todos idiomas + emojis.. Python 3: str = Unicode, bytes = sequencia de bytes.. 'oi'.encode('utf-8') → b'oi'.. b'oi'.decode('utf-8') → 'oi'.. Importante pra arquivos, APIs, web scraping.\n• O que estudar: ASCII, UTF-8, bytes vs str, encode/decode."
              },
              {
                "w": "F-strings avancadas e regex basico (modulo re)",
                "s": "F-strings avancadas regex tutorial portugues | python f-string advanced tutorial | fstrings avancadas e regex basico modulo re explained for beginners | fstrings avancadas e regex basico modulo re explicação em português",
                "d": "• O que é: f'{val:.2f}' f'{val:,}'..\n• Conceitos-chave: re.findall(r'\\d+', texto).. Padroes: \\d \\w \\s."
              },
              {
                "w": "String formatting completo: f-string, .format(), % operator, template strings",
                "s": "String formatting completo tutorial portugues | python string formatting complete | string formatting completo explained for beginners | string formatting completo explicação em português",
                "d": "• O que é: f'{nome}' (melhor, Python 3.6+)..\n• Conceitos-chave: '{}'.format(nome) (Python 3).. '%s' % nome (antigo, evite).. f'{preco:.2f}' (decimais), f'{num:>10}' (alinhar), f'{pct:.1%}' (percentual).. Template: from string import Template (quando input vem do usuario — mais seguro).\n• O que estudar: f-string, .format(), % operator, template strings."
              }
            ]
          },
          {
            "name": "Controle de Fluxo",
            "books": [
              "Python Crash Course — Eric Matthes",
              "Think Python — Allen Downey (gratuito)",
              "Introducao a Programacao com Python — Nilo Ney Menezes"
            ],
            "items": [
              {
                "w": "if / elif / else com indentacao",
                "s": "if  elif  else com indentacao explicação português | elif else indentacao explained | if / elif / else com indentacao tutorial completo | if / elif / else com indentacao examples and practice",
                "d": "• O que é: if cond: (4 espacos)..\n• Conceitos-chave: elif: (senao se).. else: (senao).. Ternario: x='par' if n%2==0 else 'impar'.. match-case (3.10+)."
              },
              {
                "w": "for: range(), enumerate(), zip()",
                "s": "python for loop range enumerate zip | loop for python tutorial | python iterate tutorial | range enumerate tutorial portugues",
                "d": "• O que é: for i in range(10): (0 a 9)..\n• Conceitos-chave: enumerate(): indice+valor.. zip(): 2 listas em paralelo.. range(start,stop,step).\n• O que estudar: range(), enumerate(), zip()."
              },
              {
                "w": "while, break, continue, else em loops",
                "s": "while break continue tutorial portugues | python while break continue | while break continue else em loops explained for beginners | while break continue else em loops explicação em português",
                "d": "• O que é: while cond: repete..\n• Conceitos-chave: continue: pula.. for...else: roda se NAO houve break.. Cuidado loop infinito!."
              },
              {
                "w": "Loops aninhados e padroes comuns",
                "s": "Loops aninhados padroes tutorial portugues | loops aninhados python tutorial | loops aninhados e padroes comuns explained for beginners | loops aninhados e padroes comuns explicação em português",
                "d": "• O que é: for i in range(3): for j in range(3): = O(n2)..\n• Conceitos-chave: Exercicio: piramide de *, tabuada, pattern printing."
              },
              {
                "w": "Operador ternario, match-case (Python 3.10+), walrus operator (:=)",
                "s": "Operador ternario matchcase Python 310 walrus operator explicação português | python ternary operator match case | operador ternario matchcase python 310+ walrus operator tutorial completo | operador ternario matchcase python 310+ walrus operator explained for beginners",
                "d": "• O que é: Ternario: x = 'par' if n%2==0 else 'impar'..\n• Conceitos-chave: Match-case: match status: case 200: 'ok' case 404: 'not found'.. Walrus: if (n := len(lista)) > 10: print(f'{n} items').. Usar com moderacao — legibilidade primeiro."
              },
              {
                "w": "Exercicios praticos: FizzBuzz, triangulo de Pascal, sequencia Collatz",
                "s": "Exercicios praticos explicação português | python practice problems tutorial | exercicios praticos explained for beginners | Exercicios praticos examples and practice",
                "d": "• O que é: FizzBuzz: classico de entrevista..\n• Conceitos-chave: Triangulo Pascal: combinatoria.. Collatz: se par divide por 2, se impar 3n+1 (sempre chega em 1?).. Pratique: HackerRank Easy, Beecrowd, Exercism.. 1 exercicio/dia no inicio.\n• O que estudar: FizzBuzz, triangulo de Pascal, sequencia Collatz."
              }
            ]
          },
          {
            "name": "Estruturas de Dados Nativas",
            "books": [
              "Python Crash Course — Eric Matthes",
              "Python Fluente — Luciano Ramalho",
              "Data Structures in Python — Goodrich et al."
            ],
            "items": [
              {
                "w": "Listas: criacao, indexacao, metodos (append, pop, sort...)",
                "s": "Listas criacao indexacao explained | python list operations tutorial | listas explicação em português | Listas examples and practice",
                "d": "• O que é: nums=[1,2,3]..\n• Conceitos-chave: .append .insert .pop .remove .sort .reverse .index len().\n• O que estudar: criacao, indexacao, metodos (append, pop, sort...)."
              },
              {
                "w": "Tuplas: imutaveis, unpacking, namedtuple",
                "s": "Tuplas imutaveis unpacking tutorial portugues | python tuples unpacking tutorial | tuplas explained for beginners | tuplas explicação em português",
                "d": "• O que é: t=(1,2,3).\n• Conceitos-chave: Imutavel. Usar pra coordenadas, retornos multiplos, chaves de dict.\n• O que estudar: imutaveis, unpacking, namedtuple."
              },
              {
                "w": "Dicionarios: chave-valor, metodos, iteracao",
                "s": "Dicionarios chave-valor metodos explained | Dicionarios explicação português | dicionarios tutorial completo | Dicionarios examples and practice",
                "d": "• O que é: d={'nome':'Kaio'}..\n• Conceitos-chave: d.get('x','default').. .keys() .values() .items().. for k,v in d.items():.\n• O que estudar: chave-valor, metodos, iteracao."
              },
              {
                "w": "Sets: sem duplicatas, operacoes de conjunto",
                "s": "Sets duplicatas operacoes tutorial portugues | python sets operations tutorial | sets explained for beginners | sets explicação em português",
                "d": "• O que é: | (uniao) & (intersecao) - (diferenca)..\n• Conceitos-chave: x in s = O(1).\n• O que estudar: sem duplicatas, operacoes de conjunto."
              },
              {
                "w": "Comprehensions e desempacotamento (*)",
                "s": "Comprehensions desempacotamento tutorial portugues | python comprehensions tutorial | comprehensions e desempacotamento explained for beginners | comprehensions e desempacotamento explicação em português",
                "d": "• O que é: [x**2 for x in range(10)]..\n• Conceitos-chave: {k:v for ...}.. a,*rest=[1,2,3,4]."
              },
              {
                "w": "Escolher a estrutura certa: quando usar list vs tuple vs dict vs set",
                "s": "Escolher a estrutura certa explicação português | escolher a estrutura certa tutorial beginners | escolher a estrutura certa explained for beginners | Escolher a estrutura certa examples and practice",
                "d": "• O que é: Lista: colecao ordenada mutavel..\n• Conceitos-chave: Tupla: imutavel (chaves de dict, retorno multiplo).. Dict: lookup por chave O(1).. Set: unicidade, pertinencia O(1).. Regra: se precisa de ordem → list/tuple.. Se precisa buscar por chave → dict.. Se precisa checar 'esta em?' → set.\n• O que estudar: quando usar list vs tuple vs dict vs set."
              }
            ]
          },
          {
            "name": "Funcoes",
            "books": [
              "Clean Code — Robert Martin",
              "Think Python — Allen Downey (gratuito)",
              "Effective Python — Brett Slatkin"
            ],
            "items": [
              {
                "w": "def, parametros, return, docstrings",
                "s": "parametros return docstrings tutorial portugues | python functions def return | def parametros return docstrings explained for beginners | def parametros return docstrings explicação em português",
                "d": "• O que é: def media(notas): '''Calcula media.''' return sum(notas)/len(notas)..\n• Conceitos-chave: Uma funcao faz UMA coisa."
              },
              {
                "w": "Default, *args, **kwargs, escopo LEGB",
                "s": "Default *args **kwargs tutorial portugues | python args kwargs default | default args kwargs escopo legb explained for beginners | default args kwargs escopo legb explicação em português",
                "d": "• O que é: def f(x,y=10)..\n• Conceitos-chave: *args: tupla.. **kwargs: dict.. LEGB: Local>Enclosing>Global>Built-in."
              },
              {
                "w": "Lambda, funcoes como objetos, decorators",
                "s": "python lambda decorators tutorial | python first class functions | python decorator tutorial | Lambda funcoes como explained",
                "d": "• O que é: lambda x: x*2..\n• Conceitos-chave: Funcoes sao objetos.. @decorator = wrapper.. @property @staticmethod."
              },
              {
                "w": "Recursao: caso base, caso recursivo",
                "s": "recursive functions factorial fibonacci | Recursao explicação português | recursao tutorial completo | recursao explained for beginners",
                "d": "• O que é: Funcao chama a si mesma..\n• Conceitos-chave: Caso base + caso recursivo.. factorial, fibonacci, torre de Hanoi.. Limite ~1000.\n• O que estudar: caso base, caso recursivo."
              },
              {
                "w": "Funcoes built-in uteis: map, filter, sorted, zip, enumerate, any, all, min, max",
                "s": "Funcoes builtin uteis explicação português | python built-in functions map filter | funcoes builtin uteis tutorial completo | funcoes builtin uteis explained for beginners",
                "d": "• O que é: map(func, iterable): aplicar funcao a cada item..\n• Conceitos-chave: filter(func, iterable): filtrar.. sorted(iterable, key=func).. any(): pelo menos 1 True.. all(): todos True.. min/max com key.. Combinadas com lambda sao poderosas.. Mas comprehension e geralmente mais legivel.\n• O que estudar: map, filter, sorted, zip, enumerate, any, all, min, max."
              },
              {
                "w": "Type hints basicos e documentacao: -> int, : str, docstrings Google style",
                "s": "Type hints basicos e documentacao explicação português | python type hints basics tutorial | type hints basicos e documentacao explained for beginners | Type hints basicos e documentacao examples and practice",
                "d": "• O que é: def soma(a: int, b: int) -> int: '''Soma dois numeros.'''..\n• Conceitos-chave: Type hints NAO fazem checagem em runtime — sao documentacao.. Google style docstring: Args, Returns, Raises.. Ajuda IDEs, ajuda colegas, ajuda voce daqui 3 meses.\n• O que estudar: -> int, : str, docstrings Google style."
              }
            ]
          },
          {
            "name": "Arquivos, Erros e Modulos",
            "books": [
              "Automate the Boring Stuff — Al Sweigart (gratuito)",
              "Python Cookbook — Beazley & Jones",
              "Fluent Python — Luciano Ramalho"
            ],
            "items": [
              {
                "w": "Ler/escrever: with open(), JSON, CSV, pathlib",
                "s": "Ler/escrever with open tutorial portugues | python file handling json csv | ler/escrever explained for beginners | ler/escrever explicação em português",
                "d": "• O que é: with open('arq','r') as f: f.read()..\n• Conceitos-chave: json.load/dump.. csv.DictReader.. Path().exists().\n• O que estudar: with open(), JSON, CSV, pathlib."
              },
              {
                "w": "try/except/else/finally, excecoes customizadas",
                "s": "try/except/else/finally excecoes customizadas tutorial portugues | python error handling try except | try/except/else/finally excecoes customizadas explained for beginners | try/except/else/finally excecoes customizadas explicação em português",
                "d": "• O que é: try: arriscado / except ValueError: tratar / else: se ok / finally: sempre..\n• Conceitos-chave: raise CustomError()."
              },
              {
                "w": "Modulos, imports, pip, venv (ambientes virtuais)",
                "s": "Modulos imports venv tutorial portugues | ambiente virtual python tutorial | modulos imports pip venv ambientes virtuais explained for beginners | modulos imports pip venv ambientes virtuais explicação em português",
                "d": "• O que é: import math..\n• Conceitos-chave: pip install pacote.. python3 -m venv .venv.. requirements.txt.. NUNCA instale globalmente."
              },
              {
                "w": "Biblioteca padrao: os, sys, math, random, datetime, collections, itertools",
                "s": "Biblioteca padrao math tutorial portugues | python standard library useful modules | biblioteca padrao explained for beginners | biblioteca padrao explicação em português",
                "d": "• O que é: os: sistema..\n• Conceitos-chave: math: sqrt,pi.. random: randint,choice.. datetime: now,strftime.. collections: Counter,defaultdict,deque.\n• O que estudar: os, sys, math, random, datetime, collections, itertools."
              },
              {
                "w": "Trabalhando com APIs: requests, response, status codes, JSON parsing",
                "s": "Trabalhando com APIs explicação português | python parse JSON API tutorial | trabalhando com apis explained for beginners | Trabalhando com APIs examples and practice",
                "d": "• O que é: pip install requests..\n• Conceitos-chave: r = requests.get(url).. r.status_code, r.json().. POST: requests.post(url, json=data).. Headers: requests.get(url, headers={'Authorization': 'Bearer token'}).. Exercicio: consumir PokeAPI, GitHub API, OpenWeather.\n• O que estudar: requests, response, status codes, JSON parsing."
              },
              {
                "w": "Web scraping basico: BeautifulSoup, seletores CSS, etica de scraping",
                "s": "Web scraping basico explicação português | python BeautifulSoup web scraping | web scraping basico tutorial completo | web scraping basico explained for beginners",
                "d": "• O que é: pip install beautifulsoup4 requests..\n• Conceitos-chave: soup = BeautifulSoup(html, 'html.parser').. soup.find('h1'), soup.select('.classe'), soup.find_all('a').. Etica: respeite robots.txt, nao sobrecarregue servidores, use rate limiting.. Alternativa: Selenium pra sites dinamicos.\n• O que estudar: BeautifulSoup, seletores CSS, etica de scraping."
              },
              {
                "w": "Debugging em Python: print debugging, debugger do VS Code (breakpoints, step, watch), pdb, logging básico",
                "s": "Debugging em Python explicação português | Python debugging tutorial | debugging em python explained for beginners | Debugging em Python examples and practice",
                "d": "• O que é: Debugging é skill essencial: print() é o básico, mas debugger do VS Code mostra variáveis em tempo real..\n• Conceitos-chave: pdb para terminal.. logging > print em projetos reais.\n• O que estudar: print debugging, debugger do VS Code (breakpoints, step, watch), pdb, logging básico."
              }
            ]
          },
          {
            "name": "Projetos Praticos",
            "books": [
              "Automate the Boring Stuff — Al Sweigart",
              "Python Projects for Beginners — Connor Milliken",
              "Impractical Python Projects — Lee Vaughan"
            ],
            "items": [
              {
                "w": "Projeto 1: Calculadora com menu e historico",
                "s": "Projeto Calculadora menu tutorial portugues | python beginner project tutorial | projeto 1 explained for beginners | projeto 1 explicação em português",
                "d": "• O que é: Menu interativo, funcoes por operacao, historico, salvar em arquivo..\n• Conceitos-chave: Exercita: input, condicionais, funcoes, loops, arquivos.\n• O que estudar: Calculadora com menu e historico."
              },
              {
                "w": "Projeto 2: Jogo (adivinhacao / forca / quiz)",
                "s": "Projeto Jogo adivinhacao tutorial portugues | python game project tutorial | projeto 2 explained for beginners | projeto 2 explicação em português",
                "d": "• O que é: random + dicas + pontuacao..\n• Conceitos-chave: Exercita: random, loops, strings, listas.\n• O que estudar: Jogo (adivinhacao / forca / quiz)."
              },
              {
                "w": "Projeto 3: Gerenciador CRUD com JSON",
                "s": "Projeto Gerenciador CRUD tutorial portugues | python CRUD json project tutorial | projeto 3 explained for beginners | projeto 3 explicação em português",
                "d": "• O que é: Adicionar, listar, buscar, editar, remover + JSON..\n• Conceitos-chave: Seu primeiro CRUD!.\n• O que estudar: Gerenciador CRUD com JSON."
              },
              {
                "w": "Projeto 4: Consumir API publica com requests",
                "s": "Projeto Consumir publica explained | Projeto 4 explicação português | projeto 4 tutorial completo | Projeto 4 examples and practice",
                "d": "• O que é: pip install requests..\n• Conceitos-chave: PokeAPI, GitHub API, OpenWeather.. Processar JSON.. Exercita: pip, requests, dicts.\n• O que estudar: Consumir API publica com requests."
              },
              {
                "w": "Projeto 5: Automatizar tarefa chata",
                "s": "Projeto Automatizar tarefa tutorial portugues | python script automate tutorial | projeto 5 explained for beginners | projeto 5 explicação em português",
                "d": "• O que é: Renomear arquivos, organizar downloads, web scraping (BeautifulSoup), enviar emails..\n• Conceitos-chave: AUTOMACAO = superpoder.\n• O que estudar: Automatizar tarefa chata."
              },
              {
                "w": "Projeto 6: CLI tool com argparse ou click (ferramenta de terminal propria)",
                "s": "python command line tool project | python CLI tool argparse click | projeto 6 tutorial completo | projeto 6 explained for beginners | projeto 6 explicação em português",
                "d": "• O que é: Criar ferramenta de terminal: conversor de unidades, gerador de senhas, organizador de arquivos..\n• Conceitos-chave: argparse (built-in) ou click (mais elegante).. Publicar no PyPI = portfolio.. Exercita: modulos, CLI, empacotamento.\n• O que estudar: CLI tool com argparse ou click (ferramenta de terminal propria)."
              }
            ]
          }
        ]
      },
      {
        "name": "📐 Matematica Fundamental",
        "topics": [
          {
            "name": "Pre-Calculo e Revisao",
            "books": [
              "Pre-Calculo — Demana, Waits & Foley",
              "Matematica Basica — Iezzi & Murakami",
              "Khan Academy Pre-Algebra + Algebra (gratuito)"
            ],
            "items": [
              {
                "w": "Aritmetica: fracoes, porcentagem, proporcao, notacao cientifica",
                "s": "Aritmetica fracoes porcentagem tutorial portugues | arithmetic fractions percentages | aritmetica explained for beginners | aritmetica explicação em português",
                "d": "• O que é: 1/2 + 1/3 = 5/6..\n• Conceitos-chave: 25% de 200 = 50.. Proporcao direta/inversa.. Notacao cientifica: 3.2 x 10^6.. Esses sao blocos basicos pra TUDO que vem depois.\n• O que estudar: fracoes, porcentagem, proporcao, notacao cientifica."
              },
              {
                "w": "Algebra basica: equacoes, inequacoes, fatoracao, polinomios",
                "s": "Algebra basica equacoes tutorial portugues | solving linear quadratic equations | algebra basica explained for beginners | algebra basica explicação em português",
                "d": "• O que é: 2x + 3 = 7 -> x=2..\n• Conceitos-chave: Fatorar: x2-4=(x+2)(x-2).. Bhaskara: x=(-b+-sqrt(b2-4ac))/2a.. Se nao dominar isso, calculo vai ser impossivel.\n• O que estudar: equacoes, inequacoes, fatoracao, polinomios."
              },
              {
                "w": "Funcoes: conceito, dominio, imagem, grafico, tipos (linear, quadratica, exponencial, log)",
                "s": "Funcoes conceito dominio tutorial portugues | functions math domain range graph | funcoes explained for beginners | funcoes explicação em português",
                "d": "• O que é: f(x) = regra que transforma entrada em saida..\n• Conceitos-chave: Linear: reta.. Quadratica: parabola.. Exponencial: crescimento rapido.. Log: inversa da exponencial.. ENTENDA graficos!.\n• O que estudar: conceito, dominio, imagem, grafico, tipos (linear, quadratica, exponencial, log)."
              },
              {
                "w": "Trigonometria basica: sen, cos, tan, circulo unitario",
                "s": "Trigonometria basica explicação português | Trigonometria basica circulo explained | trigonometria basica tutorial completo | Trigonometria basica examples and practice",
                "d": "• O que é: SOH-CAH-TOA..\n• Conceitos-chave: Circulo unitario: sen=y, cos=x.. Radianos: pi=180.. Identidades: sen2+cos2=1..\n• Exemplos: Aparece em sinais, rotacoes, ondas.\n• O que estudar: sen, cos, tan, circulo unitario."
              },
              {
                "w": "Geometria analitica: plano cartesiano, distancia, reta, circunferencia",
                "s": "Geometria analitica plano tutorial portugues | geometria analitica plano cartesiano | geometria analitica explained for beginners | geometria analitica explicação em português",
                "d": "• O que é: Ponto (x,y)..\n• Conceitos-chave: Distancia entre pontos.. Equacao da reta: y=mx+b.. Coeficiente angular = inclinacao.. Circunferencia: (x-a)2+(y-b)2=r2.\n• O que estudar: plano cartesiano, distancia, reta, circunferencia."
              },
              {
                "w": "Sequencias, series e somatorios (notacao sigma)",
                "s": "Sequencias series somatorios tutorial portugues | sequences series summation notation | sequencias series e somatorios notacao sigma explained for beginners | sequencias series e somatorios notacao sigma explicação em português",
                "d": "• O que é: Aritmetica: a, a+d, a+2d..\n• Conceitos-chave: Geometrica: a, ar, ar2.. Somatorio: Sigma de i=1 ate n de f(i).. Fatorial: 5!=120.. Precisa pra analise de algoritmos e probabilidade."
              },
              {
                "w": "Logaritmos: propriedades, log base 10, ln, log base 2 (essencial em CS)",
                "s": "Logaritmos propriedades base tutorial portugues | logarithms properties log base 2 | logaritmos explained for beginners | logaritmos explicação em português",
                "d": "• O que é: log_b(x) = 'quantas vezes multiplico b pra chegar em x'..\n• Conceitos-chave: Propriedades: log(ab)=log(a)+log(b), log(a^n)=n*log(a).. ln: base e (calculo).. log10: notacao cientifica.\n• Exemplos: Em CS: log2 aparece SEMPRE (busca binaria O(log n), arvores, bits necessarios)..\n• O que estudar: propriedades, log base 10, ln, log base 2 (essencial em CS)."
              },
              {
                "w": "Matrizes 2x2 intro: soma, multiplicacao, determinante (preview pra algebra linear)",
                "s": "Matrizes intro soma tutorial portugues | matrizes 2x2 basico tutorial | matrizes 2x2 intro explained for beginners | matrizes 2x2 intro explicação em português",
                "d": "• O que é: Matriz = tabela de numeros..\n• Conceitos-chave: [[1,2],[3,4]].. Soma: elemento a elemento.. Multiplicacao: linha x coluna (AB != BA!).. Determinante 2x2: ad-bc.. Se det=0, nao tem inversa.. Preview: algebra linear no proximo nivel aprofunda.. Transformacoes geometricas: rotacao, escala.\n• O que estudar: soma, multiplicacao, determinante (preview pra algebra linear)."
              }
            ]
          },
          {
            "name": "Matematica Discreta",
            "books": [
              "Discrete Mathematics — Kenneth Rosen",
              "Mathematics for Computer Science — MIT (gratuito)",
              "Matematica Discreta — Rosen (traducao BR)"
            ],
            "items": [
              {
                "w": "Logica Proposicional: AND OR NOT, tabelas verdade, De Morgan",
                "s": "Logica Proposicional tabelas tutorial portugues | logica proposicional tabela verdade | logica proposicional explained for beginners | logica proposicional explicação em português",
                "d": "• O que é: Conectivos: AND OR NOT -> <->..\n• Conceitos-chave: Tabelas verdade.. De Morgan: NOT(A AND B) = (NOT A) OR (NOT B).. Diretamente aplicavel a if/and/or em codigo.\n• O que estudar: AND OR NOT, tabelas verdade, De Morgan."
              },
              {
                "w": "Logica de Predicados: quantificadores universal e existencial",
                "s": "Logica Predicados quantificadores tutorial portugues | logica predicados quantificadores | logica de predicados explained for beginners | logica de predicados explicação em português",
                "d": "• O que é: Para todo (universal): todo aluno tem nota..\n• Conceitos-chave: Existe (existencial): existe aluno com nota 10.. Base de queries SQL e provas formais.\n• O que estudar: quantificadores universal e existencial."
              },
              {
                "w": "Teoria dos Conjuntos: operacoes, diagramas de Venn, complemento",
                "s": "Teoria Conjuntos operacoes tutorial portugues | set theory operations Venn | teoria dos conjuntos explained for beginners | teoria dos conjuntos explicação em português",
                "d": "• O que é: Uniao, intersecao, diferenca, complemento..\n• Conceitos-chave: Diagramas de Venn.. Pertinencia (esta em), subconjunto (contido em)..\n• Exemplos: Base dos tipos de dados Set.\n• O que estudar: operacoes, diagramas de Venn, complemento."
              },
              {
                "w": "Funcoes e Relacoes: injetora, sobrejetora, bijetora, equivalencia",
                "s": "Funcoes Relacoes injetora tutorial portugues | funcoes injetora sobrejetora bijetora | funcoes e relacoes explained for beginners | funcoes e relacoes explicação em português",
                "d": "• O que é: Funcao: cada entrada tem 1 saida..\n• Conceitos-chave: Injetora: entradas diferentes, saidas diferentes.. Sobrejetora: cobre toda imagem.. Bijetora: ambas.. Relacao de equivalencia: reflexiva+simetrica+transitiva.\n• O que estudar: injetora, sobrejetora, bijetora, equivalencia."
              },
              {
                "w": "Inducao matematica: base + passo indutivo",
                "s": "Inducao matematica explicação português | Inducao matematica base explained | inducao matematica tutorial completo | Inducao matematica examples and practice",
                "d": "• O que é: Provar pra n=1 (base)..\n• Conceitos-chave: Assumir verdade pra k, provar pra k+1 (passo).. Prova que algo vale pra TODOS os naturais.. Fundamental pra provar correcao de algoritmos.\n• O que estudar: base + passo indutivo."
              },
              {
                "w": "Contagem: permutacao, combinacao, principio multiplicativo, pigeonhole",
                "s": "Contagem permutacao combinacao tutorial portugues | permutations combinations counting | contagem explained for beginners | contagem explicação em português",
                "d": "• O que é: P(n,k)=n!/(n-k)!..\n• Conceitos-chave: C(n,k)=n!/(k!(n-k)!).. Multiplicativo: 3 camisas x 2 calcas = 6 looks.. Pigeonhole: se 13 pessoas, pelo menos 2 nascem no mesmo mes.\n• O que estudar: permutacao, combinacao, principio multiplicativo, pigeonhole."
              },
              {
                "w": "Teoria dos Grafos intro: vertices, arestas, grau, caminhos, ciclos, arvores",
                "s": "Teoria Grafos intro tutorial portugues | teoria grafos vertices arestas | teoria dos grafos intro explained for beginners | teoria dos grafos intro explicação em português",
                "d": "• O que é: Grafo = vertices + arestas..\n• Conceitos-chave: Grau: quantas arestas.. Caminho: sequencia de vertices.. Ciclo: caminho fechado.. Arvore: grafo conexo sem ciclo.. Base de redes sociais, mapas, algoritmos.\n• O que estudar: vertices, arestas, grau, caminhos, ciclos, arvores."
              },
              {
                "w": "Relacoes de recorrencia: Fibonacci, Torre de Hanoi",
                "s": "Relacoes recorrencia Fibonacci tutorial portugues | recurrence relations Fibonacci | relacoes de recorrencia explained for beginners | relacoes de recorrencia explicação em português",
                "d": "• O que é: T(n) = T(n-1) + T(n-2) (Fibonacci)..\n• Conceitos-chave: T(n) = 2T(n-1)+1 (Hanoi).. Resolve com arvore de recursao ou teorema mestre.. Liga matematica com programacao.\n• O que estudar: Fibonacci, Torre de Hanoi."
              },
              {
                "w": "Teoria dos numeros basica: divisibilidade, MDC, MMC, numeros primos, congruencia modular",
                "s": "Teoria numeros basica tutorial portugues | number theory basics GCD primes | teoria dos numeros basica explained for beginners | teoria dos numeros basica explicação em português",
                "d": "• O que é: MDC (Euclides): gcd(a,b) = gcd(b, a%b)..\n• Conceitos-chave: Primos: divisiveis so por 1 e si.. Crivo de Eratostenes.. Congruencia modular: a ≡ b (mod n).. Aplicacao DIRETA: criptografia RSA usa primos grandes.. Hash functions.. Relogio: 15h = 3h (mod 12).\n• O que estudar: divisibilidade, MDC, MMC, numeros primos, congruencia modular."
              },
              {
                "w": "Logica aplicada a programacao: predicados como funcoes, provas como programas",
                "s": "Logica aplicada programacao tutorial portugues | logic proofs algorithms tutorial | logica aplicada a programacao explained for beginners | logica aplicada a programacao explicação em português",
                "d": "• O que é: Proposicao = tipo..\n• Conceitos-chave: Prova = programa.. IF = implicacao.. AND = tupla.. Curry-Howard: correspondencia profunda entre logica e programacao.. Pratico: escrever assert em testes = provar propriedade.. Type systems = logica.. Entender logica = escrever codigo mais correto.\n• O que estudar: predicados como funcoes, provas como programas."
              }
            ]
          },
          {
            "name": "Probabilidade e Estatistica Basica",
            "books": [
              "Estatistica Basica — Bussab & Morettin",
              "Head First Statistics — Dawn Griffiths",
              "Khan Academy Statistics (gratuito)"
            ],
            "items": [
              {
                "w": "Conceitos: experimento, espaco amostral, evento, frequencia",
                "s": "Conceitos experimento espaco tutorial portugues | probability basics sample space event | conceitos explained for beginners | conceitos explicação em português",
                "d": "• O que é: Experimento: jogar dado..\n• Conceitos-chave: Espaco amostral: {1,2,3,4,5,6}.. Evento: sair par = {2,4,6}.. Frequencia relativa: repetir e contar.. Probabilidade = casos favoraveis / total.\n• O que estudar: experimento, espaco amostral, evento, frequencia."
              },
              {
                "w": "Probabilidade: regra da soma, produto, complementar",
                "s": "Probabilidade regra soma tutorial portugues | probability rules addition multiplication | probabilidade explained for beginners | probabilidade explicação em português",
                "d": "• O que é: P(A ou B) = P(A)+P(B)-P(A e B)..\n• Conceitos-chave: P(A e B) = P(A)*P(B|A).. Complementar: P(nao A) = 1-P(A).. Independencia: P(A e B) = P(A)*P(B).\n• O que estudar: regra da soma, produto, complementar."
              },
              {
                "w": "Probabilidade condicional e Teorema de Bayes (intro)",
                "s": "Probabilidade condicional Teorema tutorial portugues | conditional probability Bayes theorem intro | probabilidade condicional e teorema de bayes intro explained for beginners | probabilidade condicional e teorema de bayes intro explicação em português",
                "d": "• O que é: P(A|B) = P(B|A)*P(A)/P(B)..\n• Conceitos-chave: Base de filtros de spam, diagnostico.\n• Exemplos: Exemplo: teste medico positivo, qual chance de ter doenca? Bayes atualiza crencas com evidencia.."
              },
              {
                "w": "Estatistica descritiva: media, mediana, moda, variancia, desvio padrao",
                "s": "descriptive statistics mean median mode variance | Estatistica descritiva media tutorial portugues | estatistica descritiva explained for beginners | estatistica descritiva explicação em português",
                "d": "• O que é: Media: soma/n..\n• Conceitos-chave: Mediana: valor do meio.. Moda: mais frequente.. Variancia: dispersao.. Desvio padrao: raiz da variancia.. Histograma, boxplot.. Sempre olhe os dados antes de modelar.\n• O que estudar: media, mediana, moda, variancia, desvio padrao."
              },
              {
                "w": "Distribuicao Normal (Gaussiana): curva de sino, 68-95-99.7",
                "s": "Distribuicao Normal Gaussiana tutorial portugues | normal distribution bell curve | distribuicao normal gaussiana explained for beginners | distribuicao normal gaussiana explicação em português",
                "d": "• O que é: Media=centro, desvio padrao=largura..\n• Conceitos-chave: 68% dentro de 1 sigma, 95% em 2, 99.7% em 3.. Teorema Central do Limite: medias tendem a Normal.\n• Exemplos: Aparece em TUDO: notas, alturas, erros de medicao, ruido..\n• O que estudar: curva de sino, 68-95-99.7."
              },
              {
                "w": "Graficos e visualizacao de dados: histograma, boxplot, scatter, correlacao",
                "s": "Graficos visualizacao dados tutorial portugues | data visualization histogram boxplot scatter | graficos e visualizacao de dados explained for beginners | graficos e visualizacao de dados explicação em português",
                "d": "• O que é: Histograma: distribuicao..\n• Conceitos-chave: Boxplot: mediana+quartis+outliers.. Scatter: relacao entre 2 variaveis.. Correlacao: -1 a +1 (forca da relacao LINEAR).. Correlacao != causalidade!.\n• O que estudar: histograma, boxplot, scatter, correlacao."
              },
              {
                "w": "Combinatoria aplicada: counting problems, lottery, poker, birthday paradox",
                "s": "Combinatoria aplicada counting tutorial portugues | combinatorics applied problems | combinatoria aplicada explained for beginners | combinatoria aplicada explicação em português",
                "d": "• O que é: Lottery: C(60,6) = 50 milhoes de combinacoes..\n• Conceitos-chave: Poker: flush = C(4,1)*C(13,5)/C(52,5).. Birthday paradox: com 23 pessoas, >50% chance de 2 terem mesmo aniversario!. Contra-intuitivo.. Aplicacao: hash collisions, security (brute force), randomized algorithms.\n• O que estudar: counting problems, lottery, poker, birthday paradox."
              },
              {
                "w": "Introducao a simulacao: Monte Carlo, random sampling, Lei dos Grandes Numeros",
                "s": "Introducao simulacao Monte tutorial portugues | Monte Carlo simulation tutorial | introducao a simulacao explained for beginners | introducao a simulacao explicação em português",
                "d": "• O que é: Monte Carlo: estimar resultado com simulacao aleatoria..\n• Conceitos-chave: Lei dos Grandes Numeros: mais tentativas = media se aproxima do valor real.. Python: import random, simular 1 milhao de vezes.. Intuicao > formulas no inicio.\n• Exemplos: Exemplo: estimar pi jogando dardos num quadrado com circulo inscrito..\n• O que estudar: Monte Carlo, random sampling, Lei dos Grandes Numeros."
              }
            ]
          },
          {
            "name": "Calculo I",
            "books": [
              "Calculo Vol.1 — James Stewart",
              "Calculus Made Easy — Thompson (gratuito)",
              "Calculo Vol.1 — Guidorizzi"
            ],
            "items": [
              {
                "w": "Limites: intuicao, propriedades, limites laterais, infinitos",
                "s": "Limites intuicao propriedades tutorial portugues | limites calculo 1 tutorial | limites explained for beginners | limites explicação em português",
                "d": "• O que é: Limite = valor que f(x) se aproxima quando x tende a c..\n• Conceitos-chave: Propriedades: soma, produto, quociente.. Laterais: pela esquerda e direita.. Limites infinitos: assintotas.\n• O que estudar: intuicao, propriedades, limites laterais, infinitos."
              },
              {
                "w": "Limites: tecnicas de resolucao (substituicao, fatoracao, L'Hopital)",
                "s": "Limites tecnicas resolucao tutorial portugues | limit solving techniques tutorial | limites explained for beginners | limites explicação em português",
                "d": "• O que é: Substituicao direta (se nao der 0/0)..\n• Conceitos-chave: Racionalizacao.. L'Hopital: derivar em cima e embaixo quando 0/0 ou inf/inf.. Limites notaveis: sen(x)/x->1.\n• O que estudar: tecnicas de resolucao (substituicao, fatoracao, L'Hopital)."
              },
              {
                "w": "Continuidade: definicao, tipos de descontinuidade",
                "s": "Continuidade definicao tipos tutorial portugues | types of discontinuity tutorial | continuidade explained for beginners | continuidade explicação em português",
                "d": "• O que é: Continua em c: f(c) existe, lim existe, lim = f(c)..\n• Conceitos-chave: Descontinuidade: removivel (furo), salto, infinita.. TVI: se continua e f(a)<0<f(b), existe raiz entre a e b.\n• O que estudar: definicao, tipos de descontinuidade."
              },
              {
                "w": "Derivadas: definicao, interpretacao geometrica (reta tangente), taxa de variacao",
                "s": "Derivadas definicao interpretacao tutorial portugues | derivatives definition tangent line | derivadas explained for beginners | derivadas explicação em português",
                "d": "• O que é: Derivada = limite da razao incremental = inclinacao da reta tangente = taxa de variacao instantanea..\n• Conceitos-chave: f'(x) = lim (f(x+h)-f(x))/h.. Velocidade = derivada da posicao.\n• O que estudar: definicao, interpretacao geometrica (reta tangente), taxa de variacao."
              },
              {
                "w": "Regras de derivacao: potencia, produto, quociente, cadeia",
                "s": "derivative rules power product quotient chain | Regras derivacao potencia tutorial portugues | regras de derivacao explained for beginners | regras de derivacao explicação em português",
                "d": "• O que é: Potencia: (x^n)'=nx^(n-1)..\n• Conceitos-chave: Produto: (fg)'=f'g+fg'.. Quociente: (f/g)'=(f'g-fg')/g2.. Cadeia: (f(g(x)))'=f'(g(x))*g'(x).. CADEIA e a mais importante!.\n• O que estudar: potencia, produto, quociente, cadeia."
              },
              {
                "w": "Derivadas de trig, exponencial, log",
                "s": "Derivadas de trig exponencial log explicação português | derivative trigonometric exponential logarithm | derivadas de trig exponencial log tutorial completo | derivadas de trig exponencial log explained for beginners",
                "d": "• O que é: (sen x)'=cos x..\n• Conceitos-chave: (cos x)'=-sen x.. (ln x)'=1/x.. (a^x)'=a^x ln a.. Combinando com regra da cadeia resolve quase tudo."
              },
              {
                "w": "Aplicacoes: max/min, otimizacao, taxas relacionadas",
                "s": "Aplicacoes max/min otimizacao tutorial portugues | aplicacoes derivadas otimizacao | aplicacoes explained for beginners | aplicacoes explicação em português",
                "d": "• O que é: f'=0 nos pontos criticos..\n• Conceitos-chave: f''>0 minimo, f''<0 maximo.. Otimizacao: maximizar area/minimizar custo.. Gradiente descendente em ML e derivada pura!.\n• O que estudar: max/min, otimizacao, taxas relacionadas."
              },
              {
                "w": "Integrais: anti-derivada, integral definida, TFC",
                "s": "Integrais anti-derivada integral tutorial portugues | integrals antiderivative definite | integrais explained for beginners | integrais explicação em português",
                "d": "• O que é: Integral indefinida = anti-derivada + C..\n• Conceitos-chave: Integral definida = area sob a curva.. TFC: integral de a ate b de f(x)dx = F(b)-F(a).. Liga derivada com integral.\n• O que estudar: anti-derivada, integral definida, TFC."
              },
              {
                "w": "Tecnicas de integracao: substituicao, partes, fracoes parciais",
                "s": "Tecnicas integracao substituicao tutorial portugues | integration techniques substitution parts | tecnicas de integracao explained for beginners | tecnicas de integracao explicação em português",
                "d": "• O que é: Substituicao: u=g(x)..\n• Conceitos-chave: Partes: integral(u dv)=uv-integral(v du).. Fracoes parciais: decompor racional.. Integrais trig.. Aplicacao em probabilidade: P(a<X<b) = integral de f(x).\n• O que estudar: substituicao, partes, fracoes parciais."
              },
              {
                "w": "Teorema do Valor Medio, Rolle, Teorema Fundamental: interpretacoes e aplicacoes",
                "s": "fundamental theorem calculus applications | Teorema Valor Medio tutorial portugues | teorema do valor medio rolle teorema fundamental explained for beginners | teorema do valor medio rolle teorema fundamental explicação em português",
                "d": "• O que é: TVM: existe ponto onde derivada = taxa media..\n• Conceitos-chave: Rolle: se f(a)=f(b), existe c com f'(c)=0.. TFC: integral e anti-derivada = area.. Interpretacao: velocidade media = velocidade instantanea em algum momento.. Conecta derivadas e integrais.\n• O que estudar: interpretacoes e aplicacoes."
              },
              {
                "w": "Graficos de funcoes: crescimento, concavidade, pontos de inflexao, assintotas",
                "s": "Graficos funcoes crescimento tutorial portugues | curve sketching calculus tutorial | graficos de funcoes explained for beginners | graficos de funcoes explicação em português",
                "d": "• O que é: f'>0: crescente..\n• Conceitos-chave: f'<0: decrescente.. f''>0: concava pra cima.. f''<0: concava pra baixo.. f''=0: ponto de inflexao.. Assintotas: horizontal (lim x→∞), vertical (lim x→a = ∞).. Sketch: dominio → assint → criticos → inflexao → grafico.. Visualizar e entender.\n• O que estudar: crescimento, concavidade, pontos de inflexao, assintotas."
              }
            ]
          },
          {
            "name": "Calculo II & Equacoes Diferenciais",
            "books": [
              "Calculo Vol.2 — James Stewart",
              "Equacoes Diferenciais — Boyce & DiPrima",
              "Calculo Vol.2 — Guidorizzi"
            ],
            "items": [
              {
                "w": "Series infinitas: convergencia, testes, series de potencia, Taylor/Maclaurin",
                "s": "Series infinitas convergencia tutorial portugues | infinite series convergence Taylor series | series infinitas explained for beginners | series infinitas explicação em português",
                "d": "• O que é: Serie = soma infinita..\n• Conceitos-chave: Converge ou diverge? Testes: razao, raiz, comparacao.. Serie de Taylor: aproximar funcoes por polinomios.. e^x = 1+x+x2/2!+.... Usado em computacao numerica.\n• O que estudar: convergencia, testes, series de potencia, Taylor/Maclaurin."
              },
              {
                "w": "Equacoes diferenciais de 1a ordem: separaveis, lineares, fator integrante",
                "s": "Equacoes diferenciais ordem tutorial portugues | first order ODE separable linear | equacoes diferenciais de 1a ordem explained for beginners | equacoes diferenciais de 1a ordem explicação em português",
                "d": "• O que é: dy/dx = f(x,y)..\n• Conceitos-chave: Separavel: separar x e y, integrar.. Linear: y'+P(x)y=Q(x), fator integrante.. Modela: crescimento populacional, circuitos RC, resfriamento (Newton).\n• O que estudar: separaveis, lineares, fator integrante."
              },
              {
                "w": "EDOs de 2a ordem: coeficientes constantes, oscilacoes, circuitos RLC",
                "s": "EDOs ordem coeficientes tutorial portugues | second order ODE constant coefficients | edos de 2a ordem explained for beginners | edos de 2a ordem explicação em português",
                "d": "• O que é: y''+ay'+by=0..\n• Conceitos-chave: caracteristica: r2+ar+b=0.. Raizes reais: exponenciais.. Complexas: oscilacao (sen/cos).. Aplicacao direta: circuito RLC, massa-mola, controle PID!.\n• O que estudar: coeficientes constantes, oscilacoes, circuitos RLC."
              },
              {
                "w": "Transformada de Laplace: resolver EDOs, funcao de transferencia",
                "s": "Transformada Laplace resolver tutorial portugues | transfer function control systems | transformada de laplace explained for beginners | transformada de laplace explicação em português",
                "d": "• O que é: L{f(t)} = F(s)..\n• Conceitos-chave: Transforma EDO em algebra (mais facil).. Tabela de transformadas.. Funcao de transferencia: H(s) = saida/entrada no dominio s.. FUNDAMENTAL pra teoria de controle.\n• O que estudar: resolver EDOs, funcao de transferencia."
              },
              {
                "w": "Introducao a integrais multiplas: dupla, tripla (volume, massa)",
                "s": "Introducao integrais multiplas tutorial portugues | integrais duplas triplas tutorial | introducao a integrais multiplas explained for beginners | introducao a integrais multiplas explicação em português",
                "d": "• O que é: Integral dupla: area/volume..\n• Conceitos-chave: Integral tripla: volume 3D.. Coordenadas polares, cilindricas, esfericas.. Aplicacao: centro de massa, momento de inercia.. Usado em eletromagnetismo.\n• O que estudar: dupla, tripla (volume, massa)."
              },
              {
                "w": "Aplicacoes de EDOs: circuitos eletricos, mecanica, populacoes, calor",
                "s": "differential equations circuits mechanics | Aplicacoes de EDOs explicação português | aplicacoes de edos tutorial completo | aplicacoes de edos explained for beginners",
                "d": "• O que é: Circuito RC: V = V0*e^(-t/RC) (carga/descarga)..\n• Conceitos-chave: Massa-mola: mx'' + bx' + kx = F (oscilacao).. Populacao: dP/dt = rP (crescimento exponencial).. Resfriamento Newton: dT/dt = -k(T-Tamb).. EDOs sao a LINGUAGEM da engenharia.\n• O que estudar: circuitos eletricos, mecanica, populacoes, calor."
              }
            ]
          },
          {
            "name": "Algebra Linear (Inicio)",
            "books": [
              "Algebra Linear — David C. Lay",
              "Intro to Linear Algebra — Gilbert Strang",
              "Coding the Matrix — Philip Klein"
            ],
            "items": [
              {
                "w": "Vetores: operacoes, produto escalar, norma, projecao",
                "s": "Vetores operacoes produto tutorial portugues | vector dot product norm projection | vetores explained for beginners | vetores explicação em português",
                "d": "• O que é: Vetor = lista de numeros = direcao+magnitude..\n• Conceitos-chave: Soma, escalar, dot product (similaridade), norma (comprimento), projecao.. Em ML cada dado e um vetor.\n• O que estudar: operacoes, produto escalar, norma, projecao."
              },
              {
                "w": "Matrizes: operacoes, multiplicacao, transposta",
                "s": "Matrizes operacoes multiplicacao explained | matrix operations multiplication | matrizes tutorial completo | matrizes explicação em português",
                "d": "• O que é: Soma, escalar, multiplicacao (AB != BA!), transposta..\n• Conceitos-chave: Matriz = transformacao linear.. Rotacao, escala, cisalhamento.\n• O que estudar: operacoes, multiplicacao, transposta."
              },
              {
                "w": "Determinante e Inversa: quando existe, como calcular",
                "s": "Determinante Inversa quando tutorial portugues | determinante inversa matriz | determinante e inversa explained for beginners | determinante e inversa explicação em português",
                "d": "• O que é: det(A)!=0 -> inversivel..\n• Conceitos-chave: Inversa: AA^{-1}=I.. 2x2: formula direta.. 3x3: cofatores.. np.linalg.inv(A).\n• O que estudar: quando existe, como calcular."
              },
              {
                "w": "Sistemas lineares: eliminacao de Gauss, escalonamento",
                "s": "Sistemas lineares eliminacao tutorial portugues | gaussian elimination linear systems | sistemas lineares explained for beginners | sistemas lineares explicação em português",
                "d": "• O que é: Escalonar matriz aumentada [A|b]..\n• Conceitos-chave: Forma escada.. Solucao unica, infinitas, ou nenhuma.. np.linalg.solve(A,b).\n• O que estudar: eliminacao de Gauss, escalonamento."
              },
              {
                "w": "Espacos vetoriais: base, dimensao, subespacos, independencia linear",
                "s": "Espacos vetoriais base tutorial portugues | espacos vetoriais base dimensao | espacos vetoriais explained for beginners | espacos vetoriais explicação em português",
                "d": "• O que é: Base: vetores minimos que geram o espaco..\n• Conceitos-chave: Dimensao: tamanho da base.. LI: nenhum e combinacao dos outros.. R^n: espaco n-dimensional.\n• O que estudar: base, dimensao, subespacos, independencia linear."
              },
              {
                "w": "Transformacoes lineares: rotacao, escala, projecao, como matrizes representam",
                "s": "Transformacoes lineares explicação português | geometric interpretation linear algebra | transformacoes lineares tutorial completo | transformacoes lineares explained for beginners",
                "d": "• O que é: Matriz = transformacao linear..\n• Conceitos-chave: [[cos,-sin],[sin,cos]] = rotacao.. [[s,0],[0,s]] = escala.. Projecao: projetar vetor em outro.. Composicao: multiplicar matrizes = aplicar transformacoes em sequencia.. CG usa isso pra TUDO.. ML usa pra transformar dados.\n• O que estudar: rotacao, escala, projecao, como matrizes representam."
              }
            ]
          }
        ]
      },
      {
        "name": "🌌 Fisica & Quimica p/ Engenharia",
        "topics": [
          {
            "name": "Mecanica Classica",
            "books": [
              "Fisica Vol.1 — Halliday, Resnick & Walker",
              "Fundamentos de Fisica: Mecanica — Nussenzveig",
              "University Physics — Young & Freedman"
            ],
            "items": [
              {
                "w": "Cinematica: posicao, velocidade, aceleracao, MRU, MRUV",
                "s": "Cinematica posicao velocidade tutorial portugues | position velocity acceleration | cinematica explained for beginners | cinematica explicação em português",
                "d": "• O que é: Posicao x(t)..\n• Conceitos-chave: Velocidade = dx/dt (derivada!).. Aceleracao = dv/dt.. MRU: v constante.. MRUV: a constante.. Graficos x-t, v-t, a-t.. Calculo aplicado!.\n• O que estudar: posicao, velocidade, aceleracao, MRU, MRUV."
              },
              {
                "w": "Leis de Newton: forca, massa, acao-reacao, atrito, plano inclinado",
                "s": "Leis Newton forca tutorial portugues | friction inclined plane tutorial | leis de newton explained for beginners | leis de newton explicação em português",
                "d": "• O que é: 1a: inercia..\n• Conceitos-chave: 2a: forca=massa*aceleracao.. 3a: acao-reacao.. Atrito: f=uN.. Plano inclinado: decompor forcas.. Diagrama de corpo livre SEMPRE.\n• O que estudar: forca, massa, acao-reacao, atrito, plano inclinado."
              },
              {
                "w": "Trabalho, energia cinetica, potencial, conservacao de energia",
                "s": "Trabalho energia cinetica tutorial portugues | trabalho energia cinetica potencial | trabalho energia cinetica potencial conservacao de energia explained for beginners | trabalho energia cinetica potencial conservacao de energia explicação em português",
                "d": "• O que é: W=F*d*cos(theta)..\n• Conceitos-chave: Conservacao: Ec+Ep=constante (sem atrito).. Potencia=W/t.. Joule, Watt."
              },
              {
                "w": "Momento linear, impulso, colisoes, centro de massa",
                "s": "Momento linear impulso tutorial portugues | momento linear impulso tutorial | momento linear impulso colisoes centro de massa explained for beginners | momento linear impulso colisoes centro de massa explicação em português",
                "d": "• O que é: Impulso=F*dt=dp..\n• Conceitos-chave: Conservacao do momento.. Colisoes: elastica (conserva Ec) vs inelastica.. Centro de massa: ponto medio ponderado."
              },
              {
                "w": "Rotacao: torque, momento de inercia, momento angular",
                "s": "Rotacao torque momento tutorial portugues | rotational motion torque tutorial | rotacao explained for beginners | rotacao explicação em português",
                "d": "• O que é: Torque=r*F*sen(theta)..\n• Conceitos-chave: Conservacao do momento angular.. Robotica: TUDO e rotacao (motores, juntas, rodas).\n• O que estudar: torque, momento de inercia, momento angular."
              },
              {
                "w": "Gravitacao universal: lei de Newton, orbitas, satelites, peso vs massa",
                "s": "Gravitacao universal Newton tutorial portugues | universal gravitation Newton | gravitacao universal explained for beginners | gravitacao universal explicação em português",
                "d": "• O que é: Peso = mg (depende do planeta)..\n• Conceitos-chave: Massa: quantidade de materia (constante).. Orbita: queda livre em curva (satelite 'cai' mas a Terra curva).. GPS: correcao relativistica!. Velocidade de escape: ~11 km/s na Terra.\n• O que estudar: lei de Newton, orbitas, satelites, peso vs massa."
              },
              {
                "w": "Fluidos basico: pressao, empuxo (Arquimedes), equacao de Bernoulli",
                "s": "fluid mechanics pressure buoyancy Bernoulli | Fluidos basico pressao tutorial portugues | fluidos basico explained for beginners | fluidos basico explicação em português",
                "d": "• O que é: Pressao = F/A..\n• Conceitos-chave: Pascal: P transmitida igualmente.. Arquimedes: empuxo = peso do fluido deslocado (por que barcos flutuam).. Bernoulli: velocidade sobe, pressao desce (por que avioes voam).. Aplicacao em engenharia: hidraulica, ventilacao, cooling de servidores.\n• O que estudar: pressao, empuxo (Arquimedes), equacao de Bernoulli."
              }
            ]
          },
          {
            "name": "Eletromagnetismo",
            "books": [
              "Fisica Vol.3 — Halliday, Resnick & Walker",
              "Eletromagnetismo — Nussenzveig",
              "Introduction to Electrodynamics — Griffiths"
            ],
            "items": [
              {
                "w": "Carga eletrica, Lei de Coulomb, campo eletrico",
                "s": "Carga eletrica Coulomb tutorial portugues | electric charge Coulomb's law | carga eletrica lei de coulomb campo eletrico explained for beginners | carga eletrica lei de coulomb campo eletrico explicação em português",
                "d": "• O que é: Carga: positiva/negativa..\n• Conceitos-chave: Coulomb: F=kq1q2/r2.. Campo E=F/q.. Linhas de campo.. Principio da superposicao.. Base de TUDO eletronico."
              },
              {
                "w": "Potencial eletrico, tensao, capacitores, energia armazenada",
                "s": "Potencial eletrico tensao tutorial portugues | electric potential voltage capacitor | potencial eletrico tensao capacitores energia armazenada explained for beginners | potencial eletrico tensao capacitores energia armazenada explicação em português",
                "d": "• O que é: Tensao=diferenca de potencial..\n• Conceitos-chave: Capacitor: C=Q/V.. Energia: U=CV2/2.. Capacitores em serie/paralelo.. Filtros RC."
              },
              {
                "w": "Corrente, resistencia, Lei de Ohm, circuitos DC (Kirchhoff)",
                "s": "Corrente resistencia Lei de Ohm circuitos DC Kirchhoff explicação português | electric current resistance Ohm's law Kirchhoff | corrente resistencia lei de ohm circuitos dc kirchhoff tutorial completo | corrente resistencia lei de ohm circuitos dc kirchhoff explained for beginners",
                "d": "• O que é: Potencia=VI=I2R..\n• Conceitos-chave: Kirchhoff: soma tensoes no laco=0, soma correntes no no=0.. Resolver circuitos com malhas."
              },
              {
                "w": "Campo magnetico, forca de Lorentz, Lei de Ampere, indutores",
                "s": "Campo magnetico forca tutorial portugues | magnetic field Lorentz force Ampere | campo magnetico forca de lorentz lei de ampere indutores explained for beginners | campo magnetico forca de lorentz lei de ampere indutores explicação em português",
                "d": "• O que é: Campo B: gerado por corrente..\n• Conceitos-chave: Forca: F=qv*B.. Ampere: B proporcional a I.. Indutores: armazenam energia no campo magnetico.. L=V/(dI/dt)."
              },
              {
                "w": "Inducao eletromagnetica, Lei de Faraday, geradores, transformadores",
                "s": "Inducao eletromagnetica Faraday tutorial portugues | electromagnetic induction Faraday's law | inducao eletromagnetica lei de faraday geradores transformadores explained for beginners | inducao eletromagnetica lei de faraday geradores transformadores explicação em português",
                "d": "• O que é: Faraday: variacao de fluxo magnetico gera tensao..\n• Conceitos-chave: Geradores: mecanico>eletrico.. Transformadores: mudar tensao.. Motor eletrico: inverso do gerador."
              },
              {
                "w": "Ondas eletromagneticas, espectro, luz, comunicacao wireless",
                "s": "Ondas eletromagneticas espectro tutorial portugues | ondas eletromagneticas espectro | ondas eletromagneticas espectro luz comunicacao wireless explained for beginners | ondas eletromagneticas espectro luz comunicacao wireless explicação em português",
                "d": "• O que é: Onda EM: E e B oscilando..\n• Conceitos-chave: c=3*10^8 m/s.. Espectro: radio < micro < IR < visivel < UV < raio-X < gama.. WiFi, Bluetooth, 5G = ondas EM em diferentes frequencias."
              }
            ]
          },
          {
            "name": "Ondas, Optica e Termodinamica",
            "books": [
              "Fisica Vol.2 e Vol.4 — Halliday, Resnick & Walker",
              "Fundamentos de Fisica — Nussenzveig",
              "Physics for Scientists — Serway & Jewett"
            ],
            "items": [
              {
                "w": "Ondas: frequencia, periodo, comprimento, velocidade, superposicao",
                "s": "Ondas frequencia periodo tutorial portugues | ondas frequencia comprimento onda | ondas explained for beginners | ondas explicação em português",
                "d": "• O que é: Transversal vs longitudinal..\n• Conceitos-chave: Superposicao: construtiva/destrutiva.. Som = onda mecanica.. Sinais digitais = ondas.\n• O que estudar: frequencia, periodo, comprimento, velocidade, superposicao."
              },
              {
                "w": "Optica: reflexao, refracao, lentes, fibra optica",
                "s": "Optica reflexao refracao tutorial portugues | optics reflection refraction lenses | optica explained for beginners | optica explicação em português",
                "d": "• O que é: Reflexao: angulo incidencia=reflexao..\n• Conceitos-chave: Refracao: Snell (n1*sen1=n2*sen2).. Lentes: convergente/divergente.. Fibra optica: reflexao total interna = internet de alta velocidade.\n• O que estudar: reflexao, refracao, lentes, fibra optica."
              },
              {
                "w": "Termodinamica: temperatura, calor, leis, entropia",
                "s": "Termodinamica temperatura calor tutorial portugues | thermodynamics laws entropy | termodinamica explained for beginners | termodinamica explicação em português",
                "d": "• O que é: 0a lei: equilibrio termico..\n• Conceitos-chave: 1a: conservacao energia (dU=Q-W).. 2a: entropia aumenta.. Calor especifico.. Conducao, conveccao, radiacao.. Cooling de computadores!.\n• O que estudar: temperatura, calor, leis, entropia."
              },
              {
                "w": "Semicondutores: band gap, dopagem tipo N e P, juncao PN",
                "s": "Semicondutores band dopagem tutorial portugues | semicondutores dopagem tipo N P | semicondutores explained for beginners | semicondutores explicação em português",
                "d": "• O que é: Silicio: 4 eletrons de valencia..\n• Conceitos-chave: Dopagem N: eletrons extras (fosforo).. P: buracos (boro).. Juncao PN = diodo.. Transistor = 2 juncoes.. BASE de toda computacao moderna!.\n• O que estudar: band gap, dopagem tipo N e P, juncao PN."
              },
              {
                "w": "Acustica: som, frequencia, amplitude, decibeis, ressonancia, efeito Doppler",
                "s": "acustica som frequencia decibeis | acoustics sound waves frequency | acustica tutorial completo | acustica explained for beginners | acustica explicação em português",
                "d": "• O que é: Som = onda mecanica longitudinal..\n• Conceitos-chave: Frequencia: grave (20Hz) a agudo (20kHz).. Amplitude: volume.. Decibeis: escala logaritmica (10dB = 2x).. Ressonancia: frequencia natural amplificada.. Doppler: ambulancia passando.. Aplicacao: sonar, microfones, processamento de audio.\n• O que estudar: som, frequencia, amplitude, decibeis, ressonancia, efeito Doppler."
              },
              {
                "w": "Fisica moderna intro: relatividade especial, quantica, dualidade onda-particula",
                "s": "Fisica moderna intro explicação português | quantum physics basics tutorial | fisica moderna intro explained for beginners | Fisica moderna intro examples and practice",
                "d": "• O que é: Relatividade: nada viaja mais rapido que luz..\n• Conceitos-chave: E=mc2 (energia e massa sao a mesma coisa).. Dualidade: eletron e onda E particula.. Principio da incerteza: nao da pra saber posicao e velocidade exatas ao mesmo tempo.\n• Exemplos: Quantica: no nivel atomico, particulas se comportam como ondas..\n• O que estudar: relatividade especial, quantica, dualidade onda-particula."
              }
            ]
          },
          {
            "name": "Quimica p/ Engenharia",
            "books": [
              "Quimica Geral — Atkins & Jones",
              "Chemistry for Engineers — Brown, LeMay & Bursten",
              "Ciencia e Engenharia de Materiais — Callister"
            ],
            "items": [
              {
                "w": "Estrutura atomica, tabela periodica, ligacoes quimicas",
                "s": "atomic structure periodic table chemical bonds | Estrutura atomica tabela tutorial portugues | estrutura atomica tabela periodica ligacoes quimicas explained for beginners | estrutura atomica tabela periodica ligacoes quimicas explicação em português",
                "d": "• O que é: Atomo: protons+neutrons+eletrons..\n• Conceitos-chave: Tabela periodica: grupos e periodos.. Ligacoes: ionica (transfere e-), covalente (compartilha e-), metalica.. Propriedades dos materiais dependem das ligacoes."
              },
              {
                "w": "Materiais: metais, ceramicas, polimeros, semicondutores, compositos",
                "s": "materials science metals semiconductors polymers | Materiais metais ceramicas tutorial portugues | materiais explained for beginners | materiais explicação em português",
                "d": "• O que é: Metais: conduzem (fios, dissipadores)..\n• Conceitos-chave: Ceramicas: isolantes (PCB).. Polimeros: plasticos (carcacas).. Semicondutores: silicio, germanio (chips).. Compositos: fibra de carbono (drones).\n• O que estudar: metais, ceramicas, polimeros, semicondutores, compositos."
              },
              {
                "w": "Eletroquimica: baterias, corrosao, galvanizacao",
                "s": "Eletroquimica baterias corrosao tutorial portugues | electrochemistry batteries corrosion | eletroquimica explained for beginners | eletroquimica explicação em português",
                "d": "• O que é: Bateria: reacao quimica > eletricidade..\n• Conceitos-chave: Li-ion: leve, alta densidade.. Ciclos de carga.. Corrosao: oxidacao de metais.. Galvanizacao: proteger com zinco.. Relevante: baterias de IoT, robos, laptops.\n• O que estudar: baterias, corrosao, galvanizacao."
              },
              {
                "w": "Quimica dos semicondutores: silicio, processos de fabricacao de chips",
                "s": "Quimica semicondutores silicio tutorial portugues | quimica semicondutores fabricacao chips | quimica dos semicondutores explained for beginners | quimica dos semicondutores explicação em português",
                "d": "• O que é: Silicio purificado > lingote > wafer > litografia > dopagem > camadas > corte > encapsulamento..\n• Conceitos-chave: Processo de nm (7nm, 5nm, 3nm).. Clean rooms.. Por que chips sao caros e complexos.\n• O que estudar: silicio, processos de fabricacao de chips."
              },
              {
                "w": "Reacoes quimicas: balanceamento, estequiometria, energia de ativacao, catalise",
                "s": "Reacoes quimicas explicação português | reacoes quimicas balanceamento | reacoes quimicas tutorial completo | reacoes quimicas explained for beginners",
                "d": "• O que é: Balancear: mesma quantidade de atomos dos dois lados..\n• Conceitos-chave: Estequiometria: proporcoes.. Energia de ativacao: barreira pra reacao comecar.. Catalisador: reduz barreira sem ser consumido.. Enzimas (biologia) = catalisadores biologicos.. Relevante: baterias, processos de fabricacao, corrosao.\n• O que estudar: balanceamento, estequiometria, energia de ativacao, catalise."
              },
              {
                "w": "Nanotecnologia intro: escala nanometrica, aplicacoes em chips, sensores, materiais",
                "s": "Nanotecnologia intro explicação português | nanotechnology basics tutorial | nanotecnologia intro explained for beginners | Nanotecnologia intro examples and practice",
                "d": "• O que é: 1 nanometro = 10^-9 m (1 bilionesimo de metro)..\n• Conceitos-chave: Transistor moderno: 3-5nm.. Nanotubos de carbono: fortissimos e conduzem eletricidade.. Quantum dots: displays.. Nano-sensores: medicina.. Chips: litografia EUV pra imprimir circuitos nanometricos.. Engenharia de computacao toca nisso diretamente.\n• O que estudar: escala nanometrica, aplicacoes em chips, sensores, materiais."
              }
            ]
          }
        ]
      },
      {
        "name": "🌐 Web, Git & Ferramentas",
        "topics": [
          {
            "name": "HTML",
            "books": [
              "HTML & CSS — Jon Duckett",
              "Learning Web Design — Jennifer Robbins",
              "MDN Web Docs (gratuito)"
            ],
            "items": [
              {
                "w": "Estrutura: DOCTYPE, html, head, body, meta tags",
                "s": "HTML document structure tutorial | Estrutura DOCTYPE html explained | estrutura explicação em português | Estrutura examples and practice",
                "d": "• O que é: <!DOCTYPE html> declara HTML5..\n• Conceitos-chave: <html> <head>(meta, title, links) <body>(conteudo visivel).. Meta: charset, viewport.\n• O que estudar: DOCTYPE, html, head, body, meta tags."
              },
              {
                "w": "Tags semanticas: header, nav, main, section, article, footer, aside",
                "s": "Tags semanticas header tutorial portugues | semantic HTML best practices | tags semanticas explained for beginners | tags semanticas explicação em português",
                "d": "• O que é: Semantica = significado..\n• Conceitos-chave: <header> nao e <div class=header>.. Acessibilidade, SEO, legibilidade.. Screen readers usam semantica.\n• O que estudar: header, nav, main, section, article, footer, aside."
              },
              {
                "w": "Formularios: input, select, textarea, radio, checkbox, button, labels",
                "s": "Formularios input select explained | Formularios explicação português | formularios tutorial completo | Formularios examples and practice",
                "d": "• O que é: <form action method>..\n• Conceitos-chave: required, placeholder, pattern.. Label + for = acessibilidade.\n• Exemplos: Tipos: text, email, password, number, date, file..\n• O que estudar: input, select, textarea, radio, checkbox, button, labels."
              },
              {
                "w": "Tabelas, listas, links, imagens, multimedia",
                "s": "Tabelas listas links tutorial portugues | HTML tables lists links images | tabelas listas links imagens multimedia explained for beginners | tabelas listas links imagens multimedia explicação em português",
                "d": "• O que é: <table> <tr> <td>..\n• Conceitos-chave: <ul> <ol> <li>.. <img src alt>.. <video> <audio>.. Sempre alt em imagens."
              },
              {
                "w": "Acessibilidade: ARIA, alt text, contraste, teclado",
                "s": "Acessibilidade ARIA text tutorial portugues | HTML accessibility best practices | acessibilidade explained for beginners | acessibilidade explicação em português",
                "d": "• O que é: ARIA roles/labels pra screen readers..\n• Conceitos-chave: Alt descritivo em imagens.. Contraste minimo 4.5:1.. Tudo navegavel por teclado (Tab).\n• O que estudar: ARIA, alt text, contraste, teclado."
              },
              {
                "w": "SEO basico: meta tags, Open Graph, sitemap, robots.txt, semantica pra Google",
                "s": "sitemap robots.txt SEO tutorial | SEO basico explicação português | seo basico explained for beginners | SEO basico examples and practice",
                "d": "• O que é: title: titulo na aba/Google..\n• Conceitos-chave: meta description: texto no resultado do Google.. Open Graph: og:title, og:image (preview em redes sociais).. sitemap.xml: mapa pro Google.. robots.txt: o que nao indexar.. Semantica (h1, article, nav) ajuda o Google entender sua pagina.\n• O que estudar: meta tags, Open Graph, sitemap, robots.txt, semantica pra Google."
              },
              {
                "w": "Web performance basics: lazy loading de imagens, minificação, CDN, Lighthouse audit, Core Web Vitals",
                "s": "Web performance basics explicação português | web performance tutorial | web performance basics explained for beginners | Web performance basics examples and practice",
                "d": "• O que é: Sites rápidos ranqueiam melhor e retêm mais usuários..\n• Conceitos-chave: Lighthouse audita performance.. Core Web Vitals (LCP, FID, CLS) são métricas do Google.\n• O que estudar: lazy loading de imagens, minificação, CDN, Lighthouse audit, Core Web Vitals."
              }
            ]
          },
          {
            "name": "CSS",
            "books": [
              "CSS in Depth — Keith Grant",
              "HTML & CSS — Jon Duckett",
              "CSS Tricks (gratuito)"
            ],
            "items": [
              {
                "w": "Seletores, cascata, especificidade, heranca",
                "s": "Seletores cascata especificidade tutorial portugues | CSS selectors specificity cascade | seletores cascata especificidade heranca explained for beginners | seletores cascata especificidade heranca explicação em português",
                "d": "• O que é: Seletores: tag, .classe, #id, [attr], :pseudo..\n• Conceitos-chave: Especificidade: inline > id > classe > tag.. !important (evite).. Heranca: color sim, padding nao."
              },
              {
                "w": "Box Model: content, padding, border, margin",
                "s": "Model content padding explained | Box Model explicação português | box model tutorial completo | Box Model examples and practice",
                "d": "• O que é: Tudo e caixa..\n• Conceitos-chave: content > padding > border > margin.. box-sizing: border-box (inclui padding no width).. Margens colapsam verticalmente.\n• O que estudar: content, padding, border, margin."
              },
              {
                "w": "Flexbox: eixos, alinhamento, distribuicao",
                "s": "Flexbox eixos alinhamento explained | CSS flexbox tutorial complete | flexbox explicação em português | Flexbox examples and practice",
                "d": "• O que é: display:flex..\n• Conceitos-chave: flex-direction: row/column.. justify-content (eixo principal).. align-items (eixo cruzado).. flex-grow, flex-shrink, flex-basis.. Jogue Flexbox Froggy!.\n• O que estudar: eixos, alinhamento, distribuicao."
              },
              {
                "w": "Grid: linhas, colunas, areas, template",
                "s": "CSS grid garden game tutorial | Grid linhas colunas explained | grid explicação em português | Grid examples and practice",
                "d": "• O que é: display:grid..\n• Conceitos-chave: grid-template-columns/rows.. Jogue CSS Grid Garden!.\n• O que estudar: linhas, colunas, areas, template."
              },
              {
                "w": "Responsividade: media queries, mobile-first, unidades relativas",
                "s": "Responsividade media queries tutorial portugues | CSS responsive design media queries | responsividade explained for beginners | responsividade explicação em português",
                "d": "• O que é: @media (max-width: 768px)..\n• Conceitos-chave: Mobile-first: comece pequeno, adicione complexidade.. rem/em: relativo a font-size.. vw/vh: viewport.. clamp() pra fluid.\n• O que estudar: media queries, mobile-first, unidades relativas."
              },
              {
                "w": "Variaveis CSS, transicoes, animacoes, pseudo-elementos",
                "s": "Variaveis transicoes animacoes tutorial portugues | CSS custom properties variables | variaveis css transicoes animacoes pseudoelementos explained for beginners | variaveis css transicoes animacoes pseudoelementos explicação em português",
                "d": "• O que é: --cor: #333; var(--cor)..\n• Conceitos-chave: transition: all 0.3s.. ::before ::after.. transform: scale, rotate, translate.. Perfomance: use transform e opacity."
              }
            ]
          },
          {
            "name": "JavaScript Basico",
            "books": [
              "Eloquent JavaScript — Haverbeke (gratuito)",
              "JavaScript: The Good Parts — Crockford",
              "You Don't Know JS — Kyle Simpson (gratuito)"
            ],
            "items": [
              {
                "w": "Tipos, variaveis (let/const/var), operadores",
                "s": "Tipos variaveis letconstvar operadores explicação português | Tipos variaveis let/const/var explained | tipos variaveis let/const/var operadores tutorial completo | Tipos variaveis let/const/var operadores examples and practice",
                "d": "• O que é: let: reatribuivel..\n• Conceitos-chave: const: fixo.. var: evite (escopo confuso)..\n• Exemplos: Tipos: string, number, boolean, null, undefined, object, symbol."
              },
              {
                "w": "Funcoes: declaration, expression, arrow, closures",
                "s": "Funcoes declaration expression tutorial portugues | javascript functions arrow closure | funcoes explained for beginners | funcoes explicação em português",
                "d": "• O que é: function nome(){} vs const nome = () => {}..\n• Conceitos-chave: Closures: funcao interna acessa escopo externo..\n• Exemplos: Callback: funcao como argumento.\n• O que estudar: declaration, expression, arrow, closures."
              },
              {
                "w": "Arrays e objetos: metodos, destructuring, spread",
                "s": "Arrays objetos metodos tutorial portugues | javascript arrays objects methods | arrays e objetos explained for beginners | arrays e objetos explicação em português",
                "d": "• O que é: .map .filter .reduce .find .some .every .forEach..\n• Conceitos-chave: Destructuring: const {nome} = obj.. Spread: {...obj, novo: 1}.. Objetos: chave-valor.\n• O que estudar: metodos, destructuring, spread."
              },
              {
                "w": "DOM: querySelector, createElement, classList, eventos",
                "s": "javascript DOM manipulation | DOM events addEventListener | javascript DOM tutorial | querySelector createElement classList explained",
                "d": "• O que é: document.querySelector('.classe')..\n• Conceitos-chave: .textContent .innerHTML .classList.add/remove/toggle.. addEventListener('click', fn).. Event delegation.\n• O que estudar: querySelector, createElement, classList, eventos."
              },
              {
                "w": "Fetch API, Promises, async/await, JSON",
                "s": "Fetch API Promises asyncawait JSON explicação português | Fetch Promises async/await explained | fetch api promises async/await json tutorial completo | Fetch API Promises async/await JSON examples and practice",
                "d": "• O que é: fetch(url).then(r=>r.json()).then(data=>...)..\n• Conceitos-chave: async/await: mais legivel.. try/catch pra erros.. JSON.parse/stringify."
              },
              {
                "w": "ES6+: template literals, modules (import/export), optional chaining, nullish coalescing",
                "s": "ES6+ template literals tutorial portugues | javascript ES6 features tutorial | es6+ explained for beginners | es6+ explicação em português",
                "d": "• O que é: Template: `Oi ${nome}`..\n• Conceitos-chave: Modules: export/import.. (optional chaining): obj?.prop.. ?? (nullish): valor ?? default.. Classes, symbols, iterators.\n• O que estudar: template literals, modules (import/export), optional chaining, nullish coalescing."
              }
            ]
          },
          {
            "name": "Git & GitHub",
            "books": [
              "Pro Git — Scott Chacon (gratuito)",
              "Learning Git — Anna Skoulikari",
              "Git Pocket Guide — Silverman"
            ],
            "items": [
              {
                "w": "Conceitos: repositorio, staging area, commit, branch, remote",
                "s": "Conceitos repositorio staging tutorial portugues | git concepts repository staging commit | conceitos explained for beginners | conceitos explicação em português",
                "d": "• O que é: Working dir > staging (git add) > commit (snapshot)..\n• Conceitos-chave: Branch: linha paralela.. Remote: copia no servidor (GitHub).. Clone: copiar.. Push: enviar.. Pull: receber.\n• O que estudar: repositorio, staging area, commit, branch, remote."
              },
              {
                "w": "Comandos: init, add, commit, status, log, diff, checkout, reset",
                "s": "comandos git essenciais tutorial | git init add commit log tutorial | comandos explained for beginners | comandos explicação em português",
                "d": "• O que é: / git add arquivo..\n• Conceitos-chave: git commit -m 'feat: msg'.. git log --oneline.. git checkout -- arquivo (desfazer).\n• O que estudar: init, add, commit, status, log, diff, checkout, reset."
              },
              {
                "w": "Branches: criar, trocar, merge, resolver conflitos",
                "s": "resolve merge conflicts tutorial | Branches criar trocar explained | branches explicação em português | Branches examples and practice",
                "d": "• O que é: git branch nome..\n• Conceitos-chave: git checkout -b nome.. Conflitos: <<<< ==== >>>> editar manualmente.. git rebase: reescrever historico (limpo mas cuidado).\n• O que estudar: criar, trocar, merge, resolver conflitos."
              },
              {
                "w": "GitHub: repos, fork, clone, PRs, issues, code review",
                "s": "github pull request tutorial | GitHub repos fork explained | github explicação em português | GitHub examples and practice",
                "d": "• O que é: Fork: copiar repo de outro..\n• Conceitos-chave: Clone: baixar local.. PR: propor mudancas.. Code review: revisar antes de merge.. Issues: rastrear bugs/features.\n• O que estudar: repos, fork, clone, PRs, issues, code review."
              },
              {
                "w": "Commits semanticos: conventional commits (feat, fix, docs, refactor)",
                "s": "Commits semanticos conventional tutorial portugues | git commit message best practices | commits semanticos explained for beginners | commits semanticos explicação em português",
                "d": "• O que é: feat: nova funcionalidade..\n• Conceitos-chave: fix: correcao.. docs: documentacao.. refactor: reestruturar.. chore: manutenção.. BREAKING CHANGE: incompativel.\n• O que estudar: conventional commits (feat, fix, docs, refactor)."
              },
              {
                "w": "GitHub Actions e GitHub Pages: CI/CD e hospedagem",
                "s": "GitHub Actions e GitHub Pages explicação português | github actions workflow tutorial | github actions e github pages explained for beginners | GitHub Actions e GitHub Pages examples and practice",
                "d": "• O que é: Actions: YAML workflow..\n• Conceitos-chave: Steps: lint, test, build, deploy.. Pages: hospedar site estatico gratis.. Settings > Pages > branch main.\n• O que estudar: CI/CD e hospedagem."
              },
              {
                "w": ".gitignore, tags, stash, cherry-pick, bisect",
                "s": ".gitignore tags stash tutorial portugues | git advanced commands tutorial | gitignore tags stash cherrypick bisect explained for beginners | gitignore tags stash cherrypick bisect explicação em português",
                "d": "• O que é: .gitignore: node_modules/, .env, __pycache__/..\n• Conceitos-chave: git stash: guardar mudancas temporariamente.. git tag v1.0.. cherry-pick: pegar commit especifico.. bisect: achar bug."
              }
            ]
          },
          {
            "name": "Ferramentas do Dev",
            "books": [
              "The Missing Semester — MIT (gratuito)",
              "Practical Vim — Drew Neil",
              "Unix & Linux SysAdmin — Nemeth"
            ],
            "items": [
              {
                "w": "VS Code: atalhos, extensoes, debugging, settings sync",
                "s": "Code atalhos extensoes tutorial portugues | VS Code productivity tips extensions | vs code explained for beginners | vs code explicação em português",
                "d": "• O que é: Ctrl+P (arquivo), Ctrl+Shift+P (comando), Ctrl+D (selecionar), Alt+up/down (mover linha)..\n• Conceitos-chave: Extensions: Python, Prettier, GitLens, Error Lens, Thunder Client.\n• O que estudar: atalhos, extensoes, debugging, settings sync."
              },
              {
                "w": "Markdown: sintaxe, READMEs, documentacao",
                "s": "Markdown sintaxe READMEs explained | Markdown explicação português | markdown tutorial completo | Markdown examples and practice",
                "d": "• O que é: **negrito**..\n• Conceitos-chave: [link](url).. ```codigo```.. README: descricao, install, uso, licenca.. Documentar e profissional.\n• O que estudar: sintaxe, READMEs, documentacao."
              },
              {
                "w": "Terminal multiplexers: tmux (multiplas sessoes)",
                "s": "Terminal multiplexers explicação português | Terminal multiplexers tmux explained | terminal multiplexers tutorial completo | Terminal multiplexers examples and practice",
                "d": "• O que é: tmux: rodar multiplos terminais em 1 janela..\n• Conceitos-chave: Sessoes persistem se desconectar (SSH).. Ctrl+B c(nova janela), Ctrl+B %(split).. Muito util em servidores.\n• O que estudar: tmux (multiplas sessoes)."
              },
              {
                "w": "Ferramentas de linha: curl, wget, jq, awk, sed, xargs",
                "s": "Ferramentas de linha explicação português | linux command line tools tutorial | ferramentas de linha explained for beginners | Ferramentas de linha examples and practice",
                "d": "• O que é: curl: HTTP requests..\n• Conceitos-chave: wget: download.. jq: processar JSON.. awk: processar texto.. sed: substituir texto.. xargs: pipeline.. Combinadas sao poderosas.\n• O que estudar: curl, wget, jq, awk, sed, xargs."
              },
              {
                "w": "Gerenciadores de pacotes do SO: Homebrew (macOS), Chocolatey/Winget (Windows), apt",
                "s": "Gerenciadores pacotes Homebrew tutorial portugues | package manager developer tools | gerenciadores de pacotes do so explained for beginners | gerenciadores de pacotes do so explicação em português",
                "d": "• O que é: Homebrew: brew install node (macOS/Linux)..\n• Conceitos-chave: Winget: winget install Git.Git (Windows nativo).. Chocolatey: choco install python (Windows).. Instalar ferramentas via terminal e mais rapido e reproduzivel que baixar .exe de sites.\n• O que estudar: Homebrew (macOS), Chocolatey/Winget (Windows), apt."
              },
              {
                "w": "Dotfiles: versionar configuracoes (.bashrc, .gitconfig, .vimrc) no GitHub",
                "s": "Dotfiles versionar configuracoes tutorial portugues | versionar configuracoes tutorial | dotfiles explained for beginners | dotfiles explicação em português",
                "d": "• O que é: Dotfiles: arquivos de configuracao que comecam com ponto..\n• Conceitos-chave: Versionar no GitHub: configurar maquina nova em minutos.. Stow ou chezmoi: gerenciar symlinks.. Configuracoes: .bashrc (terminal), .gitconfig (git), .vimrc (vim), VS Code settings.json.. Um dev senior tem dotfiles afiados.\n• O que estudar: versionar configuracoes (.bashrc, .gitconfig, .vimrc) no GitHub."
              }
            ]
          }
        ]
      },
      {
        "name": "🗄️ Banco de Dados Introducao",
        "topics": [
          {
            "name": "Conceitos Fundamentais",
            "books": [
              "Database System Concepts — Silberschatz",
              "Learning SQL — Alan Beaulieu",
              "SQL em 10 Minutos — Ben Forta"
            ],
            "items": [
              {
                "w": "O que e banco de dados? Relacional vs nao-relacional",
                "s": "banco dados? Relacional tutorial portugues | what is database relational vs NoSQL | o que e banco de dados relacional vs naorelacional explicação em português | O que e banco de dados Relacional vs naorelac explained for beginners",
                "d": "• O que é: BD organiza dados pra consulta eficiente..\n• Conceitos-chave: Relacional: tabelas com relacoes (SQL).. NoSQL: documentos, chave-valor, grafos.. 90% dos casos: comece com relacional."
              },
              {
                "w": "Tabelas, colunas, linhas, tipos de dados (INT, VARCHAR, DATE, BOOLEAN...)",
                "s": "Tabelas colunas linhas tutorial portugues | database table columns rows | tabelas colunas linhas tipos de dados int varchar date boolean explained for beginners | tabelas colunas linhas tipos de dados int varchar date boolean explicação em português",
                "d": "• O que é: Tabela = entidade..\n• Conceitos-chave: Coluna = atributo.. Linha = registro.. INT: numeros.. VARCHAR(255): texto.. BOOLEAN: true/false.. DECIMAL: dinheiro."
              },
              {
                "w": "Chaves primarias (PK), estrangeiras (FK), unicidade",
                "s": "Chaves primarias estrangeiras tutorial portugues | primary key foreign key tutorial | chaves primarias pk estrangeiras fk unicidade explained for beginners | chaves primarias pk estrangeiras fk unicidade explicação em português",
                "d": "• O que é: PK: identifica unico (nunca nulo)..\n• Conceitos-chave: FK: referencia outra tabela.. UNIQUE: sem duplicatas."
              },
              {
                "w": "Relacionamentos: 1:1, 1:N, N:N (tabela ponte)",
                "s": "Relacionamentos tabela ponte tutorial portugues | database relationships one to many | relacionamentos explained for beginners | relacionamentos explicação em português",
                "d": "• O que é: 1:1: pessoa-CPF..\n• Conceitos-chave: 1:N: autor-livros.. N:N: alunos-materias (precisa tabela ponte).. Diagramas ER: retangulo=entidade, losango=relacao.\n• O que estudar: 1:1, 1:N, N:N (tabela ponte)."
              },
              {
                "w": "Normalizacao: 1NF, 2NF, 3NF, quando desnormalizar",
                "s": "Normalizacao quando desnormalizar tutorial portugues | database normalization 1NF 2NF 3NF | normalizacao explained for beginners | normalizacao explicação em português",
                "d": "• O que é: 1NF: atomico (sem listas)..\n• Conceitos-chave: 2NF: sem dependencia parcial.. 3NF: sem dependencia transitiva.. Normalizar = menos duplicacao.. Desnormalizar = mais velocidade (trade-off).\n• O que estudar: 1NF, 2NF, 3NF, quando desnormalizar."
              },
              {
                "w": "Diagramas ER: entidades, atributos, relacionamentos, cardinalidade, ferramentas",
                "s": "Diagramas ER explicação português | diagrama entidade relacionamento | diagramas er tutorial completo | diagramas er explained for beginners",
                "d": "• O que é: Entidade: retangulo (Usuario, Produto)..\n• Conceitos-chave: Atributo: oval (nome, preco).. Relacionamento: losango (compra).. Cardinalidade: 1:1, 1:N, N:N.. Ferramentas: draw.io (gratuito), dbdiagram.io, Lucidchart.. SEMPRE desenhe o diagrama ANTES de criar tabelas.. Economiza horas de refatoracao.\n• O que estudar: entidades, atributos, relacionamentos, cardinalidade, ferramentas."
              }
            ]
          },
          {
            "name": "SQL na Pratica",
            "books": [
              "Learning SQL — Alan Beaulieu",
              "SQL em 10 Minutos — Ben Forta",
              "The Art of SQL — Faroult"
            ],
            "items": [
              {
                "w": "CREATE TABLE, ALTER, DROP, constraints",
                "s": "CREATE TABLE ALTER DROP constraints explicação português | CREATE TABLE ALTER explained | create table alter drop constraints tutorial completo | CREATE TABLE ALTER DROP constraints examples and practice",
                "d": "• O que é: CREATE TABLE usuarios (id SERIAL PK, nome VARCHAR(100) NOT NULL, email VARCHAR(255) UNIQUE)..\n• Conceitos-chave: ALTER TABLE ADD/DROP COLUMN.. DROP TABLE (cuidado!)."
              },
              {
                "w": "INSERT, SELECT, UPDATE, DELETE com WHERE",
                "s": "INSERT SELECT UPDATE DELETE com WHERE explicação português | SQL SELECT INSERT UPDATE DELETE | insert select update delete com where tutorial completo | insert select update delete com where explained for beginners",
                "d": "• O que é: INSERT INTO t (col) VALUES (val)..\n• Conceitos-chave: SELECT col FROM t WHERE cond ORDER BY col LIMIT n.. UPDATE t SET col=val WHERE cond.. NUNCA esqueca WHERE no UPDATE/DELETE!."
              },
              {
                "w": "Filtros: WHERE, AND/OR, IN, BETWEEN, LIKE, IS NULL",
                "s": "Filtros WHERE AND/OR tutorial portugues | SQL filter conditions tutorial | filtros explained for beginners | filtros explicação em português",
                "d": "• O que é: WHERE idade > 18 AND cidade='SP'..\n• Conceitos-chave: IN ('SP','RJ').. BETWEEN 10 AND 20.. LIKE 'Jo%' (comeca com Jo).. IS NULL / IS NOT NULL.\n• O que estudar: WHERE, AND/OR, IN, BETWEEN, LIKE, IS NULL."
              },
              {
                "w": "ORDER BY, LIMIT, OFFSET, DISTINCT, aliases",
                "s": "ORDER LIMIT OFFSET tutorial portugues | SQL sorting pagination tutorial | order by limit offset distinct aliases explained for beginners | order by limit offset distinct aliases explicação em português",
                "d": "• O que é: ORDER BY col ASC/DESC..\n• Conceitos-chave: LIMIT 10 OFFSET 20 (paginacao).. DISTINCT: sem duplicatas.. AS: alias pra colunas e tabelas."
              },
              {
                "w": "JOINs: INNER, LEFT, RIGHT, FULL, CROSS, self-join",
                "s": "JOINs INNER LEFT explained | JOINs explicação português | joins tutorial completo | JOINs examples and practice",
                "d": "• O que é: INNER: ambas tem match..\n• Conceitos-chave: LEFT: todos da esquerda + match.. RIGHT: inverso.. FULL: todos.. CROSS: produto cartesiano.. Self-join: tabela consigo mesma.\n• O que estudar: INNER, LEFT, RIGHT, FULL, CROSS, self-join."
              },
              {
                "w": "Agregacoes: COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING",
                "s": "Agregacoes COUNT GROUP tutorial portugues | SQL aggregate functions GROUP BY HAVING | agregacoes explained for beginners | agregacoes explicação em português",
                "d": "• O que é: SELECT cidade, COUNT(*) FROM t GROUP BY cidade HAVING COUNT(*)>5..\n• Conceitos-chave: Agregacao = resumir dados.. HAVING filtra DEPOIS de agrupar (WHERE filtra antes).\n• O que estudar: COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING."
              },
              {
                "w": "Subqueries e CTEs (Common Table Expressions)",
                "s": "Subqueries e CTEs Common Table Expressions explicação português | Subqueries CTEs Common explained | subqueries e ctes common table expressions tutorial completo | Subqueries e CTEs Common Table Expressions examples and practice",
                "d": "• O que é: Subquery: SELECT * FROM t WHERE id IN (SELECT id FROM ...)..\n• Conceitos-chave: CTE: WITH nome AS (SELECT ...) SELECT * FROM nome.. CTEs sao mais legiveis."
              },
              {
                "w": "SQLite pra praticar + ferramentas visuais",
                "s": "SQLite pra praticar  ferramentas visuais explicação português | SQLite praticar ferramentas explained | sqlite pra praticar + ferramentas visuais tutorial completo | SQLite pra praticar + ferramentas visuais examples and practice",
                "d": "• O que é: Banco em arquivo..\n• Conceitos-chave: DB Browser: GUI gratis.. Python: import sqlite3.. Online: sqliteonline.com, w3schools SQL.. Projetos: contatos, catalogo, gastos."
              },
              {
                "w": "Projeto: modelar e implementar BD de e-commerce (usuarios, produtos, pedidos, reviews)",
                "s": "Projeto modelar implementar tutorial portugues | database design e-commerce project | projeto explained for beginners | projeto explicação em português",
                "d": "• O que é: Exercicio completo: desenhar ER diagram, criar tabelas (CREATE TABLE), popular (INSERT), consultas reais (produtos mais vendidos, receita por mes, clientes que nunca compraram)..\n• Conceitos-chave: Exercita: modelagem, JOINs, agregacoes, subqueries.. Dificuldade progressiva.\n• O que estudar: modelar e implementar BD de e-commerce (usuarios, produtos, pedidos, reviews)."
              },
              {
                "w": "Projeto: sistema de blog/wiki (posts, categorias, tags N:N, comentarios, busca)",
                "s": "Projeto sistema blog/wiki tutorial portugues | blog database design SQL project | projeto explained for beginners | projeto explicação em português",
                "d": "• O que é: Desafio: relacao N:N (posts<>tags via tabela ponte)..\n• Conceitos-chave: Busca por texto (LIKE ou full-text search).. Ordenar por data, popularidade.. CTE pra comentarios aninhados (resposta de resposta).. SQLite pra comecar, migrar pra PostgreSQL depois.\n• O que estudar: sistema de blog/wiki (posts, categorias, tags N:N, comentarios, busca)."
              }
            ]
          }
        ]
      },
      {
        "name": "🔌 Eletronica & Hardware",
        "topics": [
          {
            "name": "Eletricidade Basica",
            "books": [
              "Practical Electronics for Inventors — Scherz & Monk",
              "Make: Electronics — Charles Platt",
              "Elementos de Eletronica Digital — Idoeta & Capuano"
            ],
            "items": [
              {
                "w": "Tensao (V), corrente (A), resistencia (Ohm), potencia (W)",
                "s": "Tensao corrente resistencia tutorial portugues | voltage current resistance power | tensao v corrente a resistencia ohm potencia w explained for beginners | tensao v corrente a resistencia ohm potencia w explicação em português",
                "d": "• O que é: Tensao (V): pressao eletrica..\n• Conceitos-chave: Corrente (A): fluxo de eletrons.. Resistencia (Ohm): oposicao.. Potencia (W) = V*I.. Analogia: agua no cano."
              },
              {
                "w": "Lei de Ohm: V = R * I, circuitos serie e paralelo",
                "s": "circuitos serie paralelo tutorial portugues | ohm's law circuits series parallel | lei de ohm explained for beginners | lei de ohm explicação em português",
                "d": "• O que é: Serie: mesma corrente, tensoes somam, R_total = R1+R2..\n• Conceitos-chave: Paralelo: mesma tensao, correntes somam, 1/R_total = 1/R1+1/R2.\n• O que estudar: V = R * I, circuitos serie e paralelo."
              },
              {
                "w": "Componentes: resistor, capacitor, indutor, diodo, LED, transistor",
                "s": "Componentes resistor capacitor tutorial portugues | resistor capacitor diode transistor | componentes explained for beginners | componentes explicação em português",
                "d": "• O que é: Resistor: limita corrente (codigo cores)..\n• Conceitos-chave: Capacitor: armazena carga.. Diodo: corrente 1 direcao.. Transistor: chave/amplificador (base da computacao!).\n• O que estudar: resistor, capacitor, indutor, diodo, LED, transistor."
              },
              {
                "w": "Protoboard, multimetro, fonte, soldagem basica",
                "s": "Protoboard multimetro fonte soldagem basica explicação português | Protoboard multimetro fonte explained | protoboard multimetro fonte soldagem basica tutorial completo | Protoboard multimetro fonte soldagem basica examples and practice",
                "d": "• O que é: Protoboard: prototipar sem solda..\n• Conceitos-chave: Multimetro: medir V, I, R, continuidade.. Fonte: fornecer tensao estavel.. Soldagem: habilidade essencial pra projetos."
              },
              {
                "w": "Leis de Kirchhoff: lei dos nos (correntes), lei das malhas (tensoes)",
                "s": "Leis de Kirchhoff explicação português | KVL KCL circuit analysis tutorial | leis de kirchhoff explained for beginners | Leis de Kirchhoff examples and practice",
                "d": "• O que é: KCL (nos): soma das correntes entrando = soma saindo..\n• Conceitos-chave: KVL (malhas): soma das tensoes no laco fechado = 0.. Com Ohm + Kirchhoff resolve QUALQUER circuito DC.. Metodo: identificar nos e malhas, montar equacoes, resolver sistema linear.\n• O que estudar: lei dos nos (correntes), lei das malhas (tensoes)."
              },
              {
                "w": "Leitura de esquematicos: simbolos, convencoes, como seguir o circuito",
                "s": "Leitura de esquematicos explicação português | leitura esquematicos eletronicos | leitura de esquematicos tutorial completo | leitura de esquematicos explained for beginners",
                "d": "• O que é: Cada componente tem simbolo padrao (resistor: zigzag, capacitor: barras paralelas, LED: triangulo com seta)..\n• Conceitos-chave: GND: terra (referencia 0V).. VCC/VDD: alimentacao.. Seguir o fluxo: da fonte, pelo circuito, de volta ao terra.. KiCad/Fritzing pra desenhar.\n• O que estudar: simbolos, convencoes, como seguir o circuito."
              }
            ]
          },
          {
            "name": "Eletronica Digital",
            "books": [
              "Digital Design — Morris Mano",
              "Elementos de Eletronica Digital — Idoeta & Capuano",
              "Digital Fundamentals — Floyd"
            ],
            "items": [
              {
                "w": "Portas logicas: AND, OR, NOT, NAND, NOR, XOR, XNOR",
                "s": "Portas logicas NAND tutorial portugues | portas logicas eletronica digital | portas logicas explained for beginners | portas logicas explicação em português",
                "d": "• O que é: Fisicamente: transistores combinados..\n• Conceitos-chave: AND: ambos 1.. OR: pelo menos 1.. NOT: inverte.. NAND: NOT AND (universal).. XOR: diferente.. Tabelas verdade.\n• O que estudar: AND, OR, NOT, NAND, NOR, XOR, XNOR."
              },
              {
                "w": "Algebra booleana, simplificacao, mapas de Karnaugh",
                "s": "Algebra booleana simplificacao tutorial portugues | boolean algebra simplification | algebra booleana simplificacao mapas de karnaugh explained for beginners | algebra booleana simplificacao mapas de karnaugh explicação em português",
                "d": "• O que é: Karnaugh: simplificacao visual (2-4 variaveis)..\n• Conceitos-chave: Minimizar logica = menos portas = mais barato/rapido."
              },
              {
                "w": "Circuitos combinacionais: somador, MUX, decodificador, comparador",
                "s": "Circuitos combinacionais somador tutorial portugues | combinational circuits adder MUX | circuitos combinacionais explained for beginners | circuitos combinacionais explicação em português",
                "d": "• O que é: Somador: half-adder (2 bits) e full-adder (3 bits, com carry)..\n• Conceitos-chave: MUX: seleciona 1 de N entradas.. Decodificador: N bits > 2^N saidas.\n• O que estudar: somador, MUX, decodificador, comparador."
              },
              {
                "w": "Flip-flops (SR, D, JK, T), registradores, contadores",
                "s": "Flipflops SR D JK T registradores contadores explicação português | Flip-flops registradores contadores explained | flipflops sr d jk t registradores contadores tutorial completo | Flipflops SR D JK T registradores contadores examples and practice",
                "d": "• O que é: Flip-flop: armazena 1 bit (memoria!)..\n• Conceitos-chave: D: mais usado (dado + clock).. Registrador: grupo de flip-flops.. Contador: sequencia automatica."
              },
              {
                "w": "Maquina de estados finitos (FSM): Mealy e Moore",
                "s": "Maquina estados finitos tutorial portugues | finite state machine FSM tutorial | maquina de estados finitos fsm explained for beginners | maquina de estados finitos fsm explicação em português",
                "d": "• O que é: FSM: estados + transicoes + entradas + saidas..\n• Conceitos-chave: Mealy: saida depende de estado+entrada.. Moore: saida so depende do estado.. Usada em protocolos, controle, parsers.\n• O que estudar: Mealy e Moore."
              },
              {
                "w": "Conversores: binario-decimal-hex, BCD, codificadores, displays 7 segmentos",
                "s": "Conversores explicação português | binary decimal hex converter | conversores tutorial completo | conversores explained for beginners",
                "d": "• O que é: BCD (Binary Coded Decimal): cada digito decimal em 4 bits..\n• Conceitos-chave: Encoder: 2^n entradas → n saidas.. Decoder: inverso.. Display 7 segmentos: 7 LEDs formando numeros.. Projeto classico: contador com flip-flops + decoder + display.. Pratica essencial de eletronica digital.\n• O que estudar: binario-decimal-hex, BCD, codificadores, displays 7 segmentos."
              }
            ]
          },
          {
            "name": "Eletronica Analogica",
            "books": [
              "Microelectronic Circuits — Sedra & Smith",
              "Practical Electronics for Inventors — Scherz & Monk",
              "The Art of Electronics — Horowitz & Hill"
            ],
            "items": [
              {
                "w": "Transistor como chave e como amplificador (BJT, MOSFET)",
                "s": "transistor switch amplifier BJT MOSFET | transistor como chave amplificador | transistor como chave e como amplificador bjt mosfet tutorial completo | transistor como chave e como amplificador bjt mosfet explained for beginners",
                "d": "• O que é: BJT: base controla corrente (NPN/PNP)..\n• Conceitos-chave: MOSFET: gate controla com tensao (mais eficiente).. MOSFET e o mais usado em chips.\n• Exemplos: Como chave: saturacao/corte (digital).. Como amplificador: regiao ativa (analogico).."
              },
              {
                "w": "Amplificadores operacionais (Op-Amp): inversor, nao-inversor, somador, comparador",
                "s": "Amplificadores operacionais OpAmp explicação português | Amplificadores operacionais Op-Amp explained | amplificadores operacionais opamp tutorial completo | Amplificadores operacionais OpAmp examples and practice",
                "d": "• O que é: Op-Amp ideal: ganho infinito, impedancia infinita..\n• Conceitos-chave: Inversor: Vout=-Rf/Ri*Vin.. Nao-inversor: Vout=(1+Rf/Ri)*Vin.. Comparador: compara 2 tensoes.. Usado em sensores, filtros, DAC/ADC.\n• O que estudar: inversor, nao-inversor, somador, comparador."
              },
              {
                "w": "Filtros: passa-baixa, passa-alta, passa-banda (RC, RL, RLC)",
                "s": "Filtros passa-baixa passa-alta tutorial portugues | filtros passa baixa alta banda | filtros explained for beginners | filtros explicação em português",
                "d": "• O que é: RC passa-baixa: frequencias altas atenuadas (suavizar sinal)..\n• Conceitos-chave: Passa-alta: bloqueia DC.. Frequencia de corte: fc=1/(2*pi*RC).. Aplicacao: filtrar ruido em sensores, audio.\n• O que estudar: passa-baixa, passa-alta, passa-banda (RC, RL, RLC)."
              },
              {
                "w": "Conversao analogico-digital (ADC) e digital-analogico (DAC)",
                "s": "Conversao analogico-digital digital-analogico tutorial portugues | ADC resolution sampling tutorial | conversao analogicodigital adc e digitalanalogico dac explained for beginners | conversao analogicodigital adc e digitalanalogico dac explicação em português",
                "d": "• O que é: ADC: converte tensao analogica em numero digital (ex: sensor de temperatura)..\n• Conceitos-chave: Resolucao: 8-bit=256 niveis, 10-bit=1024.. Taxa de amostragem: Nyquist (2x frequencia maxima).. DAC: numero>tensao (audio, controle motor)."
              },
              {
                "w": "Fontes de alimentacao: reguladores lineares, switching, buck/boost",
                "s": "Fontes alimentacao reguladores tutorial portugues | power supply regulator linear switching | fontes de alimentacao explained for beginners | fontes de alimentacao explicação em português",
                "d": "• O que é: Linear (LM7805): simples mas desperica calor..\n• Conceitos-chave: Switching (buck/boost): eficiente mas ruido.. Buck: reduz tensao.. Boost: aumenta.. LDO: low dropout.. Toda placa precisa de alimentacao estavel.\n• O que estudar: reguladores lineares, switching, buck/boost."
              },
              {
                "w": "Osciladores: 555 timer, cristal, PLL, geracao de clock",
                "s": "Osciladores explicação português | oscilador cristal PLL tutorial | osciladores explained for beginners | Osciladores examples and practice",
                "d": "• O que é: 555 timer: CI classico (monoestavel, astavel, biestavel)..\n• Conceitos-chave: Cristal: oscilador preciso (relogios, microcontroladores).. PLL (Phase-Locked Loop): sincronizar frequencias.. Clock: sinal quadrado que sincroniza circuitos digitais..\n• Exemplos: Cada CPU tem um cristal que gera o clock (ex: 3.5 GHz).\n• O que estudar: 555 timer, cristal, PLL, geracao de clock."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "intermediate",
    "name": "🟡 INTERMEDIARIO",
    "css": "yellow",
    "time": "~12-24 meses",
    "desc": "Profundidade. Voce ja programa — agora entenda COMO e POR QUE.",
    "areas": [
      {
        "name": "📊 Estruturas de Dados & Algoritmos",
        "topics": [
          {
            "name": "Estruturas de Dados",
            "books": [
              "Entendendo Algoritmos — Aditya Bhargava",
              "Introduction to Algorithms (CLRS) — Cormen et al.",
              "Data Structures in Python — Goodrich et al."
            ],
            "items": [
              {
                "w": "Arrays em profundidade: two pointers, sliding window, prefix sum, kadane",
                "s": "Arrays profundidade pointers tutorial portugues | array techniques two pointers sliding window | arrays em profundidade explained for beginners | arrays em profundidade explicação em português",
                "d": "• O que é: Array = estrutura mais basica mas com MUITAS tecnicas..\n• Conceitos-chave: Two pointers: 2 indices andando (pair sum, remove duplicates).. Sliding window: janela deslizante (max subarray de tamanho k).. Prefix sum: somas acumuladas.. Kadane: max subarray sum em O(n).. LeetCode Easy>Medium pra praticar.\n• O que estudar: two pointers, sliding window, prefix sum, kadane."
              },
              {
                "w": "Listas Ligadas: simples, dupla, circular, inverter, detectar ciclos (Floyd)",
                "s": "Listas Ligadas simples tutorial portugues | linked list python reverse detect cycle | listas ligadas explained for beginners | listas ligadas explicação em português",
                "d": "• O que é: Cada no aponta pro proximo..\n• Conceitos-chave: Insercao O(1), busca O(n).. Problemas classicos: inverter lista (iterativo e recursivo), detectar ciclo (Floyd's tortoise and hare — 2 ponteiros, lento e rapido), encontrar meio, merge 2 sorted lists..\n• O que estudar: simples, dupla, circular, inverter, detectar ciclos (Floyd)."
              },
              {
                "w": "Pilhas (LIFO) e Filas (FIFO): implementacao, problemas classicos",
                "s": "Pilhas LIFO Filas tutorial portugues | stack queue implementation problems | pilhas lifo e filas fifo explained for beginners | pilhas lifo e filas fifo explicação em português",
                "d": "• O que é: Pilha: push/pop..\n• Conceitos-chave: Problemas: valid parentheses, min stack, evaluate reverse polish, daily temperatures (monotonic stack).. Fila: enqueue/dequeue.. Problemas: BFS, sliding window max (monotonic deque).. Deque: duas pontas..\n• Exemplos: Monotonic stack/queue: padrao poderoso que aparece muito.\n• O que estudar: implementacao, problemas classicos."
              },
              {
                "w": "Tabelas Hash: funcao hash, colisoes, Dict",
                "s": "Tabelas Hash funcao tutorial portugues | hash map implementation tutorial | tabelas hash explained for beginners | tabelas hash explicação em português",
                "d": "• O que é: Chave>indice via hash..\n• Conceitos-chave: Colisao: chaining ou open addressing.. Dict do Python = hash table.. O(1) medio.\n• O que estudar: funcao hash, colisoes, Dict."
              },
              {
                "w": "Hash Maps na pratica: counting, frequency, two sum, group by, cache (LRU)",
                "s": "Hash Maps na pratica explicação português | LRU cache implementation tutorial | hash maps na pratica explained for beginners | Hash Maps na pratica examples and practice",
                "d": "• O que é: Hash map = ferramenta mais usada em entrevistas..\n• Conceitos-chave: Two Sum: hash de complemento O(n).. Frequency count: contar ocorrencias.. Group anagrams: hash de sorted string.. Subarray sum = k: prefix sum + hash.. LRU Cache: OrderedDict ou hash+doubly linked list.. Se nao sabe por onde comecar num problema, pense em hash map.\n• O que estudar: counting, frequency, two sum, group by, cache (LRU)."
              },
              {
                "w": "Arvores: binaria, BST, AVL, Heap. Traversals: inorder, preorder, postorder, level-order (BFS)",
                "s": "binary tree traversals inorder preorder postorder | Arvores binaria Heap. tutorial portugues | arvores explained for beginners | arvores explicação em português",
                "d": "• O que é: BST: esquerda<raiz<direita..\n• Conceitos-chave: Inserir, buscar, remover.. Traversals: inorder (esq>raiz>dir = ordenado em BST), preorder (raiz>esq>dir = serializar), postorder (esq>dir>raiz = deletar), level-order (BFS com fila).. AVL: auto-balanceia.. Heap: min/max no topo = fila prioridade.. Problemas: height, diameter, LCA, validate BST.\n• O que estudar: binaria, BST, AVL, Heap. Traversals: inorder, preorder, postorder, level-order (BFS)."
              },
              {
                "w": "Grafos: lista/matriz adjacencia",
                "s": "Grafos lista/matriz adjacencia tutorial portugues | grafos lista adjacencia tutorial | grafos explained for beginners | grafos explicação em português",
                "d": "• O que é: Dict: {A:[(B,5),(C,3)]}..\n• Conceitos-chave: Dirigido vs nao.. Ponderado (custos nas arestas).\n• O que estudar: lista/matriz adjacencia."
              },
              {
                "w": "Trie, Segment Tree, Union-Find",
                "s": "Trie Segment Tree UnionFind explicação português | advanced data structures python | trie segment tree unionfind tutorial completo | trie segment tree unionfind explained for beginners",
                "d": "• O que é: Trie: autocompletar..\n• Conceitos-chave: Segment: range queries.. Union-Find: componentes conectados."
              }
            ]
          },
          {
            "name": "Algoritmos",
            "books": [
              "Entendendo Algoritmos — Aditya Bhargava",
              "Algorithm Design Manual — Skiena",
              "Competitive Programming — Halim"
            ],
            "items": [
              {
                "w": "Big O: analise de complexidade",
                "s": "complexidade algoritmos tutorial | time space complexity tutorial | big o explained for beginners | big o explicação em português",
                "d": "• O que é: O(1)<O(log n)<O(n)<O(n log n)<O(n2)<O(2^n)..\n• Conceitos-chave: Analise cada loop.\n• O que estudar: analise de complexidade."
              },
              {
                "w": "Busca linear e binaria",
                "s": "Busca linear binaria tutorial portugues | binary search variations tutorial | busca linear e binaria explained for beginners | busca linear e binaria explicação em português",
                "d": "• O que é: Linear O(n)..\n• Conceitos-chave: Binaria O(log n) em dados ordenados.. 1 bilhao = ~30 passos."
              },
              {
                "w": "Bit Manipulation: AND OR XOR NOT, shifts, mascaras, truques classicos",
                "s": "Manipulation shifts mascaras tutorial portugues | bit manipulation problems LeetCode | bit manipulation explained for beginners | bit manipulation explicação em português",
                "d": "• O que é: AND(&) OR(|) XOR(^) NOT(~) shift(<<>>)..\n• Conceitos-chave: Truques: n&(n-1) remove ultimo bit 1.. n&(-n) isola ultimo bit 1.. XOR: a^a=0, a^0=a (encontrar unico elemento).. Checar potencia de 2: n&(n-1)==0.. Contar bits (popcount).. Swap sem temp: a^=b; b^=a; a^=b..\n• Exemplos: Aparece em entrevistas!.\n• O que estudar: AND OR XOR NOT, shifts, mascaras, truques classicos."
              },
              {
                "w": "Strings: pattern matching (KMP, Rabin-Karp), anagramas, palindromos, substrings",
                "s": "Strings pattern matching tutorial portugues | longest substring without repeating | strings explained for beginners | strings explicação em português",
                "d": "• O que é: Pattern matching: KMP O(n+m) vs brute force O(nm)..\n• Conceitos-chave: Rabin-Karp: hash rolling.. Problemas classicos: longest substring without repeating chars (sliding window), valid anagram (counting), longest palindromic substring, group anagrams.. Strings = arrays de chars, mesmas tecnicas aplicam.\n• O que estudar: pattern matching (KMP, Rabin-Karp), anagramas, palindromos, substrings."
              },
              {
                "w": "Ordenacao: bubble, merge, quick, heap, counting, radix",
                "s": "Ordenacao bubble merge tutorial portugues | sorting algorithms comparison python | ordenacao explained for beginners | ordenacao explicação em português",
                "d": "• O que é: O(n2): bubble, selection..\n• Conceitos-chave: O(n log n): merge, quick, heap.. O(n+k): counting, radix.\n• O que estudar: bubble, merge, quick, heap, counting, radix."
              },
              {
                "w": "Recursao, Divide & Conquer, Backtracking",
                "s": "Recursao Divide  Conquer Backtracking explicação português | Recursao Divide Conquer tutorial 2025 | recursao divide & conquer backtracking explained for beginners | Recursao Divide & Conquer Backtracking examples and practice",
                "d": "• O que é: D&C: dividir>resolver>combinar..\n• Conceitos-chave: Backtracking: explorar+podar (N-Queens, Sudoku)."
              },
              {
                "w": "Algoritmos Gulosos (Greedy)",
                "s": "Algoritmos Gulosos Greedy tutorial portugues | greedy algorithm examples python | algoritmos gulosos greedy explained for beginners | algoritmos gulosos greedy explicação em português",
                "d": "• O que é: Escolha otima local..\n• Conceitos-chave: Scheduling, Huffman, Kruskal, Dijkstra."
              },
              {
                "w": "Programacao Dinamica: memoization e tabulacao",
                "s": "Programacao Dinamica memoization tutorial portugues | programacao dinamica tutorial | programacao dinamica explained for beginners | programacao dinamica explicação em português",
                "d": "• O que é: Top-down (cache) e bottom-up (tabela)..\n• Conceitos-chave: Fibonacci, knapsack, coin change, LCS.\n• O que estudar: memoization e tabulacao."
              },
              {
                "w": "Grafos: BFS, DFS, Dijkstra, Kruskal, Topological Sort",
                "s": "graph algorithms BFS DFS Dijkstra python | Grafos Dijkstra Kruskal tutorial 2025 | grafos explained for beginners | grafos explicação em português",
                "d": "• O que é: DFS: pilha/recursao..\n• Conceitos-chave: Dijkstra: pesos positivos.. MST: Kruskal/Prim.\n• O que estudar: BFS, DFS, Dijkstra, Kruskal, Topological Sort."
              },
              {
                "w": "Pratica estruturada: LeetCode por categoria, NeetCode 150, Blind 75, Beecrowd",
                "s": "NeetCode 150 roadmap tutorial | leetcode study plan tutorial | pratica estruturada explained for beginners | pratica estruturada explicação em português",
                "d": "• O que é: Nao faca problemas aleatorios!.\n• Conceitos-chave: Siga: NeetCode 150 (curado por topico) ou Blind 75 (classicos de entrevista).. Por categoria: arrays > two pointers > sliding window > stack > binary search > linked list > trees > graphs > DP.. Easy ate se sentir confortavel, depois Medium.. 1 problema/dia.. Beecrowd (BR): bom pra comecar.\n• O que estudar: LeetCode por categoria, NeetCode 150, Blind 75, Beecrowd."
              }
            ]
          }
        ]
      },
      {
        "name": "🐍 Python Intermediario & OOP",
        "topics": [
          {
            "name": "OOP em Python",
            "books": [
              "Python Fluente — Luciano Ramalho",
              "Head First OOP — McLaughlin et al.",
              "OO Thought Process — Weisfeld"
            ],
            "items": [
              {
                "w": "Classes, objetos, __init__, self",
                "s": "Classes objetos __init__ self explicação português | programacao orientada objetos python | classes objetos __init__ self tutorial completo | classes objetos __init__ self explained for beginners",
                "d": "• O que é: class Pessoa: def __init__(self,nome): self.nome=nome..\n• Conceitos-chave: Objeto: p=Pessoa('Kaio')."
              },
              {
                "w": "Encapsulamento, heranca, polimorfismo, ABC",
                "s": "Encapsulamento heranca polimorfismo tutorial portugues | python OOP inheritance polymorphism | encapsulamento heranca polimorfismo abc explained for beginners | encapsulamento heranca polimorfismo abc explicação em português",
                "d": "• O que é: _protected, __private..\n• Conceitos-chave: class Dog(Animal).. Polimorfismo: mesmo metodo, diferente comportamento.. ABC: classes abstratas."
              },
              {
                "w": "Dunder methods e dataclasses",
                "s": "Dunder methods e dataclasses explicação português | Dunder methods dataclasses explained | dunder methods e dataclasses tutorial completo | Dunder methods e dataclasses examples and practice",
                "d": "• O que é: __str__ __repr__ __eq__ __lt__ __len__ __getitem__..\n• Conceitos-chave: @dataclass gera init, repr, eq automatico."
              },
              {
                "w": "Composicao vs heranca, SOLID em Python",
                "s": "Composicao heranca SOLID tutorial portugues | composition vs inheritance python | composicao vs heranca solid em python explained for beginners | composicao vs heranca solid em python explicação em português",
                "d": "• O que é: Composicao (tem-um) > heranca (e-um)..\n• Conceitos-chave: SOLID: responsabilidade unica, aberto/fechado, Liskov, segregacao, inversao."
              },
              {
                "w": "Protocolos e duck typing: __iter__, __next__, __enter__, __exit__, Protocols (PEP 544)",
                "s": "Protocolos e duck typing explicação português | python iterator protocol tutorial | protocolos e duck typing explained for beginners | Protocolos e duck typing examples and practice",
                "d": "• O que é: Duck typing: 'se anda como pato e faz quack, e um pato'..\n• Conceitos-chave: Python nao exige heranca — so precisa ter os metodos certos.. Protocols (PEP 544): typing.Protocol pra duck typing com type hints.. __iter__/__next__: iteravel.. __enter__/__exit__: context manager.. Pythonico > Javanico.\n• O que estudar: __iter__, __next__, __enter__, __exit__, Protocols (PEP 544)."
              },
              {
                "w": "Projeto OOP: sistema bancario, jogo RPG, ou loja virtual com classes",
                "s": "projeto orientado objetos python | Projeto OOP explicação português | projeto oop tutorial completo | projeto oop explained for beginners",
                "d": "• O que é: Projeto bancario: Conta (abstrata) > ContaCorrente, ContaPoupanca..\n• Conceitos-chave: Cliente tem Conta.. Transacao: deposito, saque, transferencia.. Heranca, polimorfismo, encapsulamento na pratica.. Projeto RPG: Personagem > Guerreiro, Mago.. Inventario, combate.. Melhor forma de aprender OOP.\n• O que estudar: sistema bancario, jogo RPG, ou loja virtual com classes."
              },
              {
                "w": "ABC (Abstract Base Classes): definir interfaces formais, @abstractmethod, quando usar Protocol vs ABC",
                "s": "ABC Abstract Base Classes explicação português | abstract base class tutorial | abc abstract base classes explained for beginners | ABC Abstract Base Classes examples and practice",
                "d": "• O que é: ABC força subclasses a implementar métodos..\n• Conceitos-chave: Protocol é structural subtyping (duck typing tipado).. ABC = herança explícita, Protocol = implícita.\n• O que estudar: definir interfaces formais, @abstractmethod, quando usar Protocol vs ABC."
              },
              {
                "w": "Mixins e composição vs herança: quando cada padrão é melhor, diamond problem, MRO em Python",
                "s": "Mixins e composio vs herana explicação português | method resolution order tutorial | mixins e composio vs herana explained for beginners | Mixins e composição vs herança examples and practice",
                "d": "• O que é: Herança cria acoplamento forte..\n• Conceitos-chave: Composição (tem-um) é geralmente melhor que herança (é-um).. Mixins adicionam funcionalidade sem herança profunda.\n• O que estudar: quando cada padrão é melhor, diamond problem, MRO em Python."
              }
            ]
          },
          {
            "name": "Python Avancado",
            "books": [
              "Effective Python — Brett Slatkin",
              "Python Fluente — Luciano Ramalho",
              "Python Cookbook — Beazley & Jones"
            ],
            "items": [
              {
                "w": "Generators, iterators, itertools",
                "s": "Generators iterators itertools tutorial portugues | generators yield python tutorial | generators iterators itertools explained for beginners | generators iterators itertools explicação em português",
                "d": "• O que é: yield: lazy (nao carrega tudo)..\n• Conceitos-chave: itertools: chain, product, combinations, groupby."
              },
              {
                "w": "Context managers, type hints, mypy",
                "s": "Context managers type tutorial portugues | python type hints mypy tutorial | context managers type hints mypy explained for beginners | context managers type hints mypy explicação em português",
                "d": "• O que é: with: __enter__/__exit__..\n• Conceitos-chave: def f(x: int) -> str.. mypy pra checagem estatica."
              },
              {
                "w": "Testing: pytest, TDD, coverage",
                "s": "Testing pytest coverage explained | Testing explicação português | testing tutorial completo | Testing examples and practice",
                "d": "• O que é: def test_soma(): assert soma(2,3)==5..\n• Conceitos-chave: Fixtures, parametrize.. TDD: test>code>refactor.\n• O que estudar: pytest, TDD, coverage."
              },
              {
                "w": "Concorrencia: threading, multiprocessing, asyncio",
                "s": "Concorrencia threading multiprocessing tutorial portugues | python threading asyncio multiprocessing | concorrencia explained for beginners | concorrencia explicação em português",
                "d": "• O que é: Threading: I/O-bound (GIL)..\n• Conceitos-chave: Multiprocessing: CPU-bound.. Asyncio: event loop, non-blocking.\n• O que estudar: threading, multiprocessing, asyncio."
              },
              {
                "w": "Metaprogramacao: metaclasses, descriptors, __new__, introspeccao",
                "s": "Metaprogramacao explicação português | python metaprogramming tutorial | metaprogramacao explained for beginners | Metaprogramacao examples and practice",
                "d": "• O que é: Metaclass: classe de classes (type e a metaclass padrao)..\n• Conceitos-chave: __new__: controlar criacao do objeto.. Introspeccao: dir(), getattr(), inspect.. Avancado — use quando PRECISA, nao por diversao.\n• Exemplos: Descriptor: __get__/__set__/__delete__ (como @property funciona por baixo)..\n• O que estudar: metaclasses, descriptors, __new__, introspeccao."
              },
              {
                "w": "Packaging: criar bibliotecas, pyproject.toml, PyPI, documentacao (Sphinx/MkDocs)",
                "s": "python documentation Sphinx MkDocs | python packaging PyPI tutorial | packaging explained for beginners | packaging explicação em português",
                "d": "• O que é: pyproject.toml: config moderna (substitui setup.py)..\n• Conceitos-chave: Build: python -m build.. Upload: twine upload dist/*.. PyPI: pip install sua_lib.. Documentacao: Sphinx (RST) ou MkDocs (Markdown).. Read the Docs: hosting gratuito.. Versioning: semver (major.minor.patch).. Publicar lib = contribuir pro ecossistema.\n• O que estudar: criar bibliotecas, pyproject.toml, PyPI, documentacao (Sphinx/MkDocs)."
              },
              {
                "w": "Descriptors: __get__, __set__, __delete__ — como @property funciona por baixo",
                "s": "Descriptors explicação português | descriptor protocol tutorial | descriptors explained for beginners | Descriptors examples and practice",
                "d": "• O que é: Descriptors são o mecanismo por trás de @property, @classmethod, @staticmethod..\n• Conceitos-chave: Entender descriptors = entender Python profundamente.\n• O que estudar: __get__, __set__, __delete__ — como @property funciona por baixo."
              },
              {
                "w": "Concurrency em Python: threading vs multiprocessing vs asyncio — quando usar cada, GIL impact",
                "s": "Concurrency em Python explicação português | threading multiprocessing asyncio | concurrency em python tutorial completo | concurrency em python explained for beginners",
                "d": "• O que é: Threading: I/O-bound (GIL limita CPU)..\n• Conceitos-chave: Multiprocessing: CPU-bound (processos separados).. Asyncio: muitas conexões I/O (event loop single-thread).\n• O que estudar: threading vs multiprocessing vs asyncio — quando usar cada, GIL impact."
              },
              {
                "w": "Profiling Python: cProfile, line_profiler, memory_profiler, py-spy, snakeviz — encontrar bottlenecks",
                "s": "Profiling Python explicação português | Python profiling tutorial | profiling python explained for beginners | Profiling Python examples and practice",
                "d": "• O que é: Antes de otimizar, medir: cProfile mostra tempo por função, line_profiler por linha, memory_profiler uso de memória..\n• Conceitos-chave: py-spy para produção.\n• O que estudar: cProfile, line_profiler, memory_profiler, py-spy, snakeviz — encontrar bottlenecks."
              }
            ]
          }
        ]
      },
      {
        "name": "⚙️ C, C++ & Rust",
        "topics": [
          {
            "name": "C: A Linguagem do Hardware",
            "books": [
              "The C Programming Language (K&R) — Kernighan & Ritchie",
              "C Programming: A Modern Approach — K.N. King",
              "Head First C — Griffiths & Griffiths"
            ],
            "items": [
              {
                "w": "Setup, compilacao (gcc), tipos, printf/scanf, operadores",
                "s": "Setup compilacao gcc tipos printfscanf operadores explicação português | C programming tutorial beginners | setup compilacao gcc tipos printf/scanf operadores explained for beginners | Setup compilacao gcc tipos printf/scanf opera examples and practice",
                "d": "• O que é: gcc arquivo.c -o programa..\n• Conceitos-chave: printf('Oi %s, %d anos\\n', nome, idade).. scanf('%d', &num).. & = endereco!. C e a base de Linux, embarcados, drivers.\n• Exemplos: Tipos: int, float, double, char.."
              },
              {
                "w": "Controle de fluxo, arrays, strings (char[]), funcoes",
                "s": "Controle fluxo arrays tutorial portugues | C function parameters tutorial | controle de fluxo arrays strings char funcoes explained for beginners | controle de fluxo arrays strings char funcoes explicação em português",
                "d": "• O que é: if/else, for, while, switch..\n• Conceitos-chave: Arrays: int nums[10].. Strings: char nome[50] (terminam em \\0).. Passagem por valor (copia).\n• Exemplos: Funcoes: declarar antes de usar ou usar prototipos.."
              },
              {
                "w": "Ponteiros: enderecos, aritmetica, ponteiro pra ponteiro",
                "s": "Ponteiros enderecos aritmetica explained | Ponteiros explicação português | ponteiros tutorial completo | Ponteiros examples and practice",
                "d": "• O que é: int *p = &x..\n• Conceitos-chave: *p = valor apontado.. p++ avanca sizeof(int) bytes.. Arrays sao ponteiros!. ptr[i] = *(ptr+i).. Ponteiro pra ponteiro: int **pp.. CONCEITO MAIS IMPORTANTE de C.\n• O que estudar: enderecos, aritmetica, ponteiro pra ponteiro."
              },
              {
                "w": "Alocacao dinamica: malloc, calloc, realloc, free. Memory leaks",
                "s": "Alocacao dinamica malloc tutorial portugues | C malloc free dynamic memory | alocacao dinamica explained for beginners | alocacao dinamica explicação em português",
                "d": "• O que é: malloc(n * sizeof(int))..\n• Conceitos-chave: Retorna ponteiro ou NULL.. SEMPRE free() depois.. Memory leak: alocou e nao liberou.. Valgrind detecta leaks.. Gerenciamento manual = poder + responsabilidade.\n• O que estudar: malloc, calloc, realloc, free. Memory leaks."
              },
              {
                "w": "Structs, unions, enums, typedef",
                "s": "Structs unions enums tutorial portugues | C struct union enum typedef | structs unions enums typedef explained for beginners | structs unions enums typedef explicação em português",
                "d": "• O que é: struct Ponto { int x, y; }..\n• Conceitos-chave: Union: compartilha memoria.. Enum: constantes nomeadas.. struct = 'objeto' mais simples.. Base de qualquer estrutura de dados em C.\n• Exemplos: Typedef: atalho de tipo.."
              },
              {
                "w": "Preprocessador: #include, #define, #ifdef, macros, header files (.h)",
                "s": "Preprocessador #include #define tutorial portugues | C preprocessor macros header files | preprocessador explained for beginners | preprocessador explicação em português",
                "d": "• O que é: #include <stdio.h>..\n• Conceitos-chave: #define PI 3.14.. #ifdef DEBUG.. Include guards: #ifndef HEADER_H.. Compilacao: preprocessar > compilar > linkar.\n• O que estudar: #include, #define, #ifdef, macros, header files (.h)."
              },
              {
                "w": "Manipulacao de bits: AND OR XOR NOT, shift, mascaras, flags",
                "s": "Manipulacao bits shift tutorial portugues | C bitwise operations tutorial | manipulacao de bits explained for beginners | manipulacao de bits explicação em português",
                "d": "• O que é: & | ^ ~ << >>..\n• Conceitos-chave: Mascaras: ligar/desligar/testar bits.. Flags: int flags = FLAG_A | FLAG_C.. Muito usado em embarcados (registradores), protocolos, compressao.\n• O que estudar: AND OR XOR NOT, shift, mascaras, flags."
              },
              {
                "w": "Arquivos em C: fopen, fprintf, fscanf, fread/fwrite (binario)",
                "s": "Arquivos fopen fprintf tutorial portugues | C binary file read write tutorial | arquivos em c explained for beginners | arquivos em c explicação em português",
                "d": "• O que é: FILE *f = fopen('arq.txt', 'r')..\n• Conceitos-chave: fprintf, fscanf, fgets.. fread/fwrite: binario (structs direto no disco).. fclose() SEMPRE.. Errno pra erros.\n• O que estudar: fopen, fprintf, fscanf, fread/fwrite (binario)."
              },
              {
                "w": "Makefiles e compilacao separada, bibliotecas estaticas/dinamicas",
                "s": "Makefiles e compilacao separada bibliotecas estaticasdinamicas explicação português | Makefiles compilacao separada explained | makefiles e compilacao separada bibliotecas estaticas/dinamicas tutorial completo | Makefiles e compilacao separada bibliotecas e examples and practice",
                "d": "• O que é: Makefile: automatizar compilacao..\n• Conceitos-chave: gcc -c (compilar), gcc -o (linkar).. Bibliotecas: .a (estatica), .so (dinamica).. Separar em modulos = projetos maiores manteveis."
              },
              {
                "w": "Debugging avançado em C: GDB (breakpoints, watchpoints, backtrace), valgrind (memcheck), AddressSanitizer, strace, ltrace",
                "s": "Debugging avanado em C explicação português | debugging C advanced tutorial | debugging avanado em c explained for beginners | Debugging avançado em C examples and practice",
                "d": "• O que é: GDB para step-through e inspeção..\n• Conceitos-chave: Valgrind para memory leaks.. ASan detecta buffer overflow em compilação.. strace mostra syscalls.. Ferramentas essenciais.\n• O que estudar: GDB (breakpoints, watchpoints, backtrace), valgrind (memcheck), AddressSanitizer, strace, ltrace."
              }
            ]
          },
          {
            "name": "C++: OOP e Performance",
            "books": [
              "A Tour of C++ — Bjarne Stroustrup",
              "Effective Modern C++ — Scott Meyers",
              "C++ Primer — Lippman, Lajoie & Moo"
            ],
            "items": [
              {
                "w": "C++ basico: classes, construtores, destrutores, this, new/delete",
                "s": "C++ constructor destructor new delete | basico classes construtores explained | c++ basico tutorial completo | c++ basico explicação em português",
                "d": "• O que é: class Ponto { int x,y; public: Ponto(int x, int y): x(x), y(y) {} }..\n• Conceitos-chave: new = malloc+construtor.. delete = destrutor+free.. RAII: recurso atrelado ao tempo de vida do objeto.\n• O que estudar: classes, construtores, destrutores, this, new/delete."
              },
              {
                "w": "Heranca, polimorfismo, virtual, templates (generics)",
                "s": "Heranca polimorfismo virtual tutorial portugues | C++ inheritance polymorphism virtual | heranca polimorfismo virtual templates generics explained for beginners | heranca polimorfismo virtual templates generics explicação em português",
                "d": "• O que é: class Dog : public Animal {}..\n• Conceitos-chave: virtual: polimorfismo em runtime.. Templates: template<typename T> (generics).. STL usa templates pesadamente."
              },
              {
                "w": "STL: vector, map, set, string, algorithm, iterators",
                "s": "C++ STL tutorial | C++ vector map set tutorial | STL algorithms tutorial | vector string algorithm explained",
                "d": "• O que é: vector<int> v..\n• Conceitos-chave: map<string,int> m.. sort(), find(), accumulate().. Iterators: for(auto it = v.begin(); it != v.end(); ++it).. Range-for: for(auto& x : v).\n• O que estudar: vector, map, set, string, algorithm, iterators."
              },
              {
                "w": "Smart pointers: unique_ptr, shared_ptr, weak_ptr. RAII",
                "s": "Smart pointers unique_ptr tutorial portugues | C++ smart pointers unique shared | smart pointers explained for beginners | smart pointers explicação em português",
                "d": "• O que é: unique_ptr: dono unico (move, nao copia)..\n• Conceitos-chave: shared_ptr: contagem de referencias.. weak_ptr: observador.. NUNCA use raw new/delete em C++ moderno.. Smart pointers = sem memory leak.\n• O que estudar: unique_ptr, shared_ptr, weak_ptr. RAII."
              },
              {
                "w": "C++ pra robotica (ROS2) e sistemas de alta performance",
                "s": "robotica ROS2 sistemas tutorial portugues | C++ high performance systems | c++ pra robotica ros2 e sistemas de alta performance explained for beginners | c++ pra robotica ros2 e sistemas de alta performance explicação em português",
                "d": "• O que é: ROS2: nodes em C++ (performance) ou Python (prototipagem)..\n• Conceitos-chave: Games: Unreal (C++).. Sistemas: banco de dados, compiladores, browsers.. C++ = quando cada milissegundo importa."
              },
              {
                "w": "Concorrencia em C++: std::thread, mutex, condition_variable, async/future, atomic",
                "s": "Concorrencia em C explicação português | C++ atomic operations tutorial | concorrencia em c++ explained for beginners | Concorrencia em C++ examples and practice",
                "d": "• O que é: std::thread t(func)..\n• Conceitos-chave: mutex.lock()/unlock() ou lock_guard (RAII).. condition_variable: wait/notify.. async/future: resultado assincrono.. atomic: operacoes thread-safe sem lock.. C++17: parallel algorithms (execution policy).. Performance critica: C++ concurrency > Python.\n• O que estudar: std::thread, mutex, condition_variable, async/future, atomic."
              },
              {
                "w": "C++17/20 moderno: auto, structured bindings, std::optional, ranges, concepts, modules, coroutines",
                "s": "C1720 moderno explicação português | structured bindings tutorial | c++17/20 moderno explained for beginners | C++17/20 moderno examples and practice",
                "d": "• O que é: C++ moderno é muito diferente de C++98: auto deduz tipos, concepts restringem templates, ranges simplificam iteração, coroutines para async.\n• O que estudar: auto, structured bindings, std::optional, ranges, concepts, modules, coroutines."
              },
              {
                "w": "Move semantics e perfect forwarding: std::move, rvalue references (&&), forwarding references, copy elision",
                "s": "Move semantics e perfect forwarding explicação português | perfect forwarding tutorial | move semantics e perfect forwarding explained for beginners | Move semantics e perfect forwarding examples and practice",
                "d": "• O que é: Move semantics transfere ownership sem copiar (eficiente)..\n• Conceitos-chave: Rvalue references (&&) permitem distinguir temporários.. Essential para performance.\n• O que estudar: std::move, rvalue references (&&), forwarding references, copy elision."
              }
            ]
          },
          {
            "name": "Rust: Seguranca sem Garbage Collector",
            "books": [
              "The Rust Programming Language — Klabnik & Nichols (gratuito)",
              "Programming Rust — Blandy, Orendorff & Tindall",
              "Rust in Action — Tim McNamara"
            ],
            "items": [
              {
                "w": "Setup, cargo, tipos, ownership, borrowing, lifetimes",
                "s": "Setup cargo tipos ownership borrowing lifetimes explicação português | Rust ownership borrowing tutorial | setup cargo tipos ownership borrowing lifetimes explained for beginners | Setup cargo tipos ownership borrowing lifetim examples and practice",
                "d": "• O que é: cargo new projeto..\n• Conceitos-chave: Ownership: cada valor tem 1 dono.. Move semantics.. Borrowing: &x (emprestimo imutavel), &mut x (mutavel, so 1 por vez).. Lifetimes: compilador garante que referencia e valida.. ZERO memory bugs em compile time."
              },
              {
                "w": "Structs, enums, pattern matching, Option, Result, error handling",
                "s": "Structs enums pattern tutorial portugues | Rust structs enums pattern matching | structs enums pattern matching option result error handling explained for beginners | structs enums pattern matching option result error handling explicação em português",
                "d": "• O que é: Structs: dados agrupados..\n• Conceitos-chave: Enums: algebraic data types.. Pattern matching: match x { Some(v) => ..., None => .... Option<T>: Some ou None (sem null!).. Result<T,E>: Ok ou Err.. ? operator: propagar erro elegantemente."
              },
              {
                "w": "Traits, generics, iterators, closures",
                "s": "Traits generics iterators tutorial portugues | Rust iterators closures tutorial | traits generics iterators closures explained for beginners | traits generics iterators closures explicação em português",
                "d": "• O que é: Trait: interface (impl Trait for Struct)..\n• Conceitos-chave: Generics: fn<T: Display>(x: T).. Iterators: .iter().map().filter().collect().. Closures: |x| x*2.. Zero-cost abstractions: tao rapido quanto C."
              },
              {
                "w": "Concorrencia segura: threads, channels, Arc, Mutex. async/await",
                "s": "Concorrencia segura threads tutorial portugues | Rust concurrency threads channels | concorrencia segura explained for beginners | concorrencia segura explicação em português",
                "d": "• O que é: Rust previne data races em COMPILE TIME..\n• Conceitos-chave: Channels: comunicacao entre threads.. Arc<Mutex<T>>: compartilhar dados.. Tokio: runtime async.. 'Fearless concurrency': se compilou, nao tem race condition.\n• O que estudar: threads, channels, Arc, Mutex. async/await."
              },
              {
                "w": "Quando usar Rust: sistemas, CLI, WebAssembly, embarcados",
                "s": "Quando usar Rust tutorial portugues | Rust use cases systems CLI WASM | quando usar rust explained for beginners | quando usar rust explicação em português",
                "d": "• O que é: Rust = performance de C + seguranca de linguagem moderna..\n• Conceitos-chave: Sistemas: Servo, ripgrep.. WASM: rodar no browser.. Embarcados: embedded-hal.. Linux kernel aceita Rust.. Crescendo rapido.\n• O que estudar: sistemas, CLI, WebAssembly, embarcados."
              },
              {
                "w": "Ecossistema Rust: crates.io, Cargo workspaces, testing, documentacao, CI",
                "s": "Ecossistema Rust explicação português | Rust ecosystem crates.io tutorial | ecossistema rust explained for beginners | Ecossistema Rust examples and practice",
                "d": "• O que é: crates.io: repositorio de pacotes (como PyPI)..\n• Conceitos-chave: Cargo: build, test, doc, publish tudo integrado.. Workspaces: monorepo.. cargo test: testes inline com #[test].. cargo doc: gera documentacao do codigo.. clippy: linter.. rustfmt: formatador.. CI: cargo test no GitHub Actions.\n• O que estudar: crates.io, Cargo workspaces, testing, documentacao, CI."
              }
            ]
          }
        ]
      },
      {
        "name": "☕ Java & Ecossistema JVM",
        "topics": [
          {
            "name": "Java: Linguagem e OOP",
            "books": [
              "Effective Java — Joshua Bloch",
              "Head First Java — Kathy Sierra & Bert Bates",
              "Java: The Complete Reference — Herbert Schildt"
            ],
            "items": [
              {
                "w": "Setup Java: JDK, JRE, JVM, javac, IntelliJ IDEA, Maven/Gradle básico",
                "s": "Setup Java explicação português | Maven Gradle tutorial | setup java explained for beginners | Setup Java examples and practice",
                "d": "• O que é: JDK = compilador + JRE..\n• Conceitos-chave: JRE = JVM + bibliotecas.. JVM executa bytecode.. Maven/Gradle gerenciam dependências e build.\n• O que estudar: JDK, JRE, JVM, javac, IntelliJ IDEA, Maven/Gradle básico."
              },
              {
                "w": "Sintaxe Java: tipos primitivos, strings, arrays, controle de fluxo, classes, packages",
                "s": "Sintaxe Java explicação português | primitive types tutorial | sintaxe java explained for beginners | Sintaxe Java examples and practice",
                "d": "• O que é: Java é tipada estaticamente: int, double, boolean, char..\n• Conceitos-chave: Strings são imutáveis.. Tudo vive dentro de classes.. Packages organizam código.\n• O que estudar: tipos primitivos, strings, arrays, controle de fluxo, classes, packages."
              },
              {
                "w": "OOP em Java: classes, herança, interfaces, abstract, polimorfismo, encapsulamento",
                "s": "OOP em Java explicação português | encapsulation tutorial | oop em java explained for beginners | OOP em Java examples and practice",
                "d": "• O que é: Java é OOP por design: tudo é classe..\n• Conceitos-chave: Polimorfismo via overriding.\n• O que estudar: classes, herança, interfaces, abstract, polimorfismo, encapsulamento."
              },
              {
                "w": "Collections Framework: List (ArrayList, LinkedList), Set (HashSet, TreeSet), Map (HashMap, TreeMap), Queue",
                "s": "Collections Framework explicação português | Java Collections tutorial | collections framework explained for beginners | Collections Framework examples and practice",
                "d": "• O que é: Framework rico de estruturas de dados: List (ordenada), Set (sem duplicata), Map (chave-valor), Queue (FIFO)..\n• Conceitos-chave: Generics tipam coleções.\n• O que estudar: List (ArrayList, LinkedList), Set (HashSet, TreeSet), Map (HashMap, TreeMap), Queue."
              },
              {
                "w": "Generics, Annotations, Enums, Records (Java 16+), Sealed classes (Java 17+)",
                "s": "Generics Annotations Enums Records Java 16 Sealed classes Java 17 explicação português | Java generics tutorial | generics annotations enums records java 16+ sealed classes java 17+ explained for beginners | Generics Annotations Enums Records Java 16+ S examples and practice",
                "d": "• O que é: Generics: tipos parametrizados (List<String>)..\n• Conceitos-chave: Annotations: metadata (@Override).. Records: data classes imutáveis.. Sealed: herança controlada."
              },
              {
                "w": "Exception handling: checked vs unchecked, try-with-resources, custom exceptions, best practices",
                "s": "Exception handling explicação português | try-with-resources tutorial | exception handling explained for beginners | Exception handling examples and practice",
                "d": "• O que é: Checked exceptions forçam tratamento (IOException)..\n• Conceitos-chave: Unchecked não (NullPointerException).. try-with-resources fecha recursos automaticamente.\n• O que estudar: checked vs unchecked, try-with-resources, custom exceptions, best practices."
              },
              {
                "w": "Streams API e Lambdas (Java 8+): programação funcional em Java, map/filter/reduce, Optional",
                "s": "Streams API e Lambdas Java 8 explicação português | map filter reduce tutorial | streams api e lambdas java 8+ explained for beginners | Streams API e Lambdas Java 8+ examples and practice",
                "d": "• O que é: Streams processam coleções declarativamente: list.stream().filter(x -> x > 5).map(x -> x*2).collect()..\n• Conceitos-chave: Optional evita NullPointerException.\n• O que estudar: programação funcional em Java, map/filter/reduce, Optional."
              },
              {
                "w": "Concorrência em Java: Thread, Runnable, ExecutorService, CompletableFuture, synchronized, volatile",
                "s": "Concorrncia em Java explicação português | CompletableFuture tutorial | concorrncia em java explained for beginners | Concorrência em Java examples and practice",
                "d": "• O que é: Java tem suporte rico a concorrência: threads, pools de threads (ExecutorService), futures assíncronos, synchronized para exclusão mútua.\n• O que estudar: Thread, Runnable, ExecutorService, CompletableFuture, synchronized, volatile."
              }
            ]
          },
          {
            "name": "Ecossistema Java: Spring, Build, Deploy",
            "books": [
              "Spring in Action — Craig Walls",
              "Modern Java in Action — Raoul-Gabriel Urma",
              "Java Performance — Scott Oaks"
            ],
            "items": [
              {
                "w": "Spring Boot: framework #1 de backend Java, auto-configuration, starters, embedded server",
                "s": "Spring Boot explicação português | embedded server tutorial | spring boot explained for beginners | Spring Boot examples and practice",
                "d": "• O que é: Spring Boot simplifica Java para web: auto-configura tudo, embedded Tomcat, starters adicionam funcionalidade (spring-boot-starter-web).\n• O que estudar: framework #1 de backend Java, auto-configuration, starters, embedded server."
              },
              {
                "w": "Spring MVC: controllers, REST APIs, request mapping, validação, DTOs, response entities",
                "s": "Spring MVC explicação português | request mapping tutorial | spring mvc explained for beginners | Spring MVC examples and practice",
                "d": "• O que é: Spring MVC mapeia HTTP para métodos Java: @GetMapping, @PostMapping..\n• Conceitos-chave: DTOs transferem dados.. @Valid + Bean Validation para validação.\n• O que estudar: controllers, REST APIs, request mapping, validação, DTOs, response entities."
              },
              {
                "w": "Spring Data JPA: ORM com Hibernate, repositories, queries derivadas, paginação, relacionamentos",
                "s": "Spring Data JPA explicação português | Spring Data JPA tutorial | spring data jpa explained for beginners | Spring Data JPA examples and practice",
                "d": "• O que é: JPA abstrai SQL: define entidades com @Entity, Spring gera queries por nome do método (findByName)..\n• O que estudar: ORM com Hibernate, repositories, queries derivadas, paginação, relacionamentos."
              },
              {
                "w": "Spring Security: autenticação, autorização, JWT, OAuth2, CORS, CSRF protection",
                "s": "Spring Security explicação português | Spring Security tutorial | spring security explained for beginners | Spring Security examples and practice",
                "d": "• O que é: Spring Security protege APIs: filter chain intercepta requests, autentica (JWT/OAuth2), autoriza por role (@PreAuthorize), previne CSRF.\n• O que estudar: autenticação, autorização, JWT, OAuth2, CORS, CSRF protection."
              },
              {
                "w": "Maven e Gradle: build tools, dependências, lifecycle, plugins, multi-module projects",
                "s": "Maven e Gradle explicação português | dependency management tutorial | maven e gradle explained for beginners | Maven e Gradle examples and practice",
                "d": "• O que é: Maven usa pom.xml (convenção), Gradle usa build.gradle (flexível)..\n• Conceitos-chave: Ambos: gerenciar dependências, compilar, testar, empacotar JAR/WAR.\n• O que estudar: build tools, dependências, lifecycle, plugins, multi-module projects."
              },
              {
                "w": "Testing em Java: JUnit 5, Mockito, TestContainers, integration tests com Spring Boot Test",
                "s": "Testing em Java explicação português | Spring Boot Test tutorial | testing em java explained for beginners | Testing em Java examples and practice",
                "d": "• O que é: JUnit 5 para testes unitários, Mockito para mocks, TestContainers para banco real em Docker, @SpringBootTest para integration tests.\n• O que estudar: JUnit 5, Mockito, TestContainers, integration tests com Spring Boot Test."
              },
              {
                "w": "JVM internals: bytecode, class loading, garbage collection (G1, ZGC), JIT compilation, profiling (VisualVM, JFR)",
                "s": "JVM internals explicação português | profiling VisualVM tutorial | jvm internals explained for beginners | JVM internals examples and practice",
                "d": "• O que é: JVM compila bytecode para nativo (JIT)..\n• Conceitos-chave: GC gerencia memória (G1 = default, ZGC = low latency).. Profiling com VisualVM/JFR encontra bottlenecks.\n• O que estudar: bytecode, class loading, garbage collection (G1, ZGC), JIT compilation, profiling (VisualVM, JFR)."
              }
            ]
          }
        ]
      },
      {
        "name": "🖥️ Sistemas Operacionais (Disciplina)",
        "topics": [
          {
            "name": "Processos e Threads",
            "books": [
              "Operating Systems: Three Easy Pieces (OSTEP) — Arpaci-Dusseau (gratuito)",
              "Modern Operating Systems — Tanenbaum",
              "Operating System Concepts — Silberschatz (Dinosaur Book)"
            ],
            "items": [
              {
                "w": "Processos: criacao (fork/exec), estados, PCB, context switch, IPC",
                "s": "Processos criacao fork/exec tutorial portugues | process control block context switch | processos explained for beginners | processos explicação em português",
                "d": "• O que é: Processo: programa em execucao com seu espaco de memoria..\n• Conceitos-chave: fork(): cria copia.. exec(): substitui por outro programa.. Estados: new>ready>running>waiting>terminated.. PCB: struct que guarda info do processo.. Context switch: salvar/restaurar estado (caro!).. IPC: pipes, shared memory, message queues.\n• O que estudar: criacao (fork/exec), estados, PCB, context switch, IPC."
              },
              {
                "w": "Threads: criacao, modelo user vs kernel, pthreads, race conditions",
                "s": "Threads criacao modelo explained | race condition thread safety | threads tutorial completo | threads explicação em português",
                "d": "• O que é: Thread: 'processo leve' (compartilha memoria)..\n• Conceitos-chave: User threads vs kernel threads.. pthreads (C): pthread_create, pthread_join.. Race condition: 2 threads escrevem na mesma variavel.. Resultado depende da ordem (nondeterministic).. Bug mais dificil de reproduzir.\n• O que estudar: criacao, modelo user vs kernel, pthreads, race conditions."
              },
              {
                "w": "Sincronizacao: mutex, semaforo, monitor, condition variables, barriers",
                "s": "Sincronizacao mutex semaforo tutorial portugues | mutex semaphore monitor synchronization | sincronizacao explained for beginners | sincronizacao explicação em português",
                "d": "• O que é: Mutex: lock/unlock (1 thread por vez)..\n• Conceitos-chave: Semaforo: contador (N threads).. Monitor: mutex + condition variable (Java synchronized).. Condition variable: esperar ate condicao ser verdadeira.. Barrier: todos esperam ate o ultimo chegar.. Escolher o certo = evitar bugs e deadlocks.\n• O que estudar: mutex, semaforo, monitor, condition variables, barriers."
              },
              {
                "w": "Deadlock: condicoes, prevencao, deteccao, recuperacao, Banker's algorithm",
                "s": "Deadlock condicoes prevencao tutorial portugues | deadlock conditions prevention detection | deadlock explained for beginners | deadlock explicação em português",
                "d": "• O que é: 4 condicoes (todas necessarias): mutual exclusion + hold and wait + no preemption + circular wait..\n• Conceitos-chave: Prevenir: quebrar 1 condicao.. Detectar: grafo de alocacao de recursos.. Banker's: verificar se estado e seguro antes de alocar.. Na pratica: lock ordering + timeout.\n• O que estudar: condicoes, prevencao, deteccao, recuperacao, Banker's algorithm."
              },
              {
                "w": "Scheduling: FCFS, SJF, Round Robin, prioridade, MLFQ, CFS (Linux)",
                "s": "Scheduling FCFS Round tutorial portugues | process scheduling OS tutorial | scheduling explained for beginners | scheduling explicação em português",
                "d": "• O que é: FCFS: primeiro a chegar..\n• Conceitos-chave: SJF: mais curto primeiro (otimo mas impossivel prever).. Round Robin: time quantum (fairness).. MLFQ: multiplas filas de prioridade.. CFS (Linux): Completely Fair Scheduler (arvore rubro-negra).. Preemptive vs non-preemptive.\n• O que estudar: FCFS, SJF, Round Robin, prioridade, MLFQ, CFS (Linux)."
              },
              {
                "w": "IPC em detalhe: pipes, named pipes, shared memory, message queues, signals",
                "s": "IPC em detalhe explicação português | ipc em detalhe tutorial beginners | ipc em detalhe explained for beginners | IPC em detalhe examples and practice",
                "d": "• O que é: Pipe: ls | grep (unidirecional)..\n• Conceitos-chave: Named pipe (FIFO): mkfifo, persistente.. Shared memory: mais rapido (mesmo espaco de endereco).. Message queue: mensagens tipadas.. Signals: SIGINT (Ctrl+C), SIGTERM, SIGKILL.. Socket: IPC entre maquinas (rede).. Escolher: velocidade vs complexidade vs caso de uso.\n• O que estudar: pipes, named pipes, shared memory, message queues, signals."
              }
            ]
          },
          {
            "name": "Gerenciamento de Memoria",
            "books": [
              "OSTEP — Arpaci-Dusseau (gratuito)",
              "Computer Systems: A Programmer's Perspective — Bryant & O'Hallaron",
              "Linux Kernel Development — Robert Love"
            ],
            "items": [
              {
                "w": "Enderecos virtuais vs fisicos, MMU, address translation",
                "s": "Enderecos virtuais fisicos tutorial portugues | virtual memory address translation MMU | enderecos virtuais vs fisicos mmu address translation explained for beginners | enderecos virtuais vs fisicos mmu address translation explicação em português",
                "d": "• O que é: Cada processo acha que tem toda memoria pra si (virtual address space)..\n• Conceitos-chave: MMU: hardware que traduz virtual>fisico.. Protecao: processo A nao acessa memoria de B.. Base + bounds (simples).. Segmentacao.. Paginacao (moderno)."
              },
              {
                "w": "Paginacao: page table, TLB, page fault, multi-level page tables",
                "s": "Paginacao page table tutorial portugues | paging page table TLB tutorial | paginacao explained for beginners | paginacao explicação em português",
                "d": "• O que é: Pagina: bloco fixo (4KB tipicamente)..\n• Conceitos-chave: Page table: mapeia pagina virtual > frame fisico.. TLB: cache de traducoes (hit = rapido, miss = lento).. Page fault: pagina nao na RAM, buscar no disco.. Multi-level: economizar memoria da page table.\n• O que estudar: page table, TLB, page fault, multi-level page tables."
              },
              {
                "w": "Swap, demand paging, page replacement: FIFO, LRU, Clock, thrashing",
                "s": "Swap demand paging tutorial portugues | page replacement algorithms LRU FIFO | swap demand paging page replacement explained for beginners | swap demand paging page replacement explicação em português",
                "d": "• O que é: Demand paging: so carregar pagina quando acessada..\n• Conceitos-chave: Swap: mover paginas pro disco quando RAM cheia.. Replacement: FIFO (simples), LRU (melhor, caro), Clock (aproximacao de LRU).. Thrashing: mais tempo fazendo swap que executando.. Solucao: mais RAM ou menos processos.\n• O que estudar: FIFO, LRU, Clock, thrashing."
              },
              {
                "w": "Alocacao de memoria: malloc internals, fragmentacao, buddy system, slab allocator",
                "s": "Alocacao memoria malloc tutorial portugues | malloc internals memory allocation | alocacao de memoria explained for beginners | alocacao de memoria explicação em português",
                "d": "• O que é: malloc: pede ao OS (brk/mmap) e gerencia blocos..\n• Conceitos-chave: Fragmentacao: externa (espacos entre blocos) e interna (bloco maior que preciso).. Buddy system: dividir em potencias de 2.. Slab allocator (Linux): cache de objetos do mesmo tamanho.. Entender malloc = entender performance.\n• O que estudar: malloc internals, fragmentacao, buddy system, slab allocator."
              },
              {
                "w": "Protecao de memoria: segmentacao, isolamento de processos, buffer overflow prevencao",
                "s": "Protecao de memoria explicação português | buffer overflow prevention DEP ASLR | protecao de memoria tutorial completo | protecao de memoria explained for beginners",
                "d": "• O que é: Cada processo tem espaco isolado (MMU garante)..\n• Conceitos-chave: Segmentation fault: acessar memoria proibida.. DEP: nao executar dados.. ASLR: randomizar enderecos.. Stack canary: detectar overflow.. NX bit: pagina nao-executavel.. Todas essas protecoes existem por causa de ATAQUES (buffer overflow).\n• O que estudar: segmentacao, isolamento de processos, buffer overflow prevencao."
              },
              {
                "w": "Garbage collection vs manual: como Java, Python, Go gerenciam memoria",
                "s": "Garbage collection vs manual explicação português | garbage collection vs manual memory | garbage collection vs manual tutorial completo | garbage collection vs manual explained for beginners",
                "d": "• O que é: Manual (C): malloc/free (voce controla, voce erra)..\n• Conceitos-chave: Reference counting (Python): conta referencias, libera quando 0.. Mark-and-sweep (Java, Go): pausa, marca vivos, libera mortos.. Rust: ownership (sem GC, sem erros).. Trade-off: controle vs seguranca vs pausas.\n• O que estudar: como Java, Python, Go gerenciam memoria."
              }
            ]
          },
          {
            "name": "File Systems e I/O",
            "books": [
              "OSTEP — Arpaci-Dusseau (gratuito)",
              "Linux System Programming — Robert Love",
              "The Design and Implementation of FreeBSD OS — McKusick et al."
            ],
            "items": [
              {
                "w": "File system internals: inodes, directory entries, superblock, journaling",
                "s": "File system internals tutorial portugues | how file systems work tutorial | file system internals explicação em português | File system internals examples and practice",
                "d": "• O que é: Inode: metadados do arquivo (permissoes, tamanho, ponteiros pra blocos)..\n• Conceitos-chave: Directory: lista de (nome, inode).. Superblock: metadados do filesystem.. Journaling (ext4): log de operacoes pra recuperar de crash.. Write-ahead log: escrever no journal ANTES de alterar dados.\n• O que estudar: inodes, directory entries, superblock, journaling."
              },
              {
                "w": "System calls: open, read, write, close, mmap, ioctl, strace",
                "s": "System calls open tutorial portugues | Linux syscalls strace tutorial | system calls explained for beginners | system calls explicação em português",
                "d": "• O que é: Syscall: pedido ao kernel (modo usuario > modo kernel)..\n• Conceitos-chave: open(): abrir arquivo (retorna file descriptor).. read()/write(): ler/escrever.. mmap(): mapear arquivo na memoria.. strace: rastrear syscalls de um processo.. Entender syscalls = entender o OS.\n• O que estudar: open, read, write, close, mmap, ioctl, strace."
              },
              {
                "w": "I/O: polling vs interrupts, DMA, buffers, disk scheduling",
                "s": "IO polling interrupts DMA | disk scheduling algorithms | OS IO management tutorial | polling interrupts buffers tutorial portugues",
                "d": "• O que é: Polling: CPU fica perguntando 'chegou?'..\n• Conceitos-chave: Interrupt: dispositivo avisa a CPU.. DMA: transferir dados sem CPU.. Buffers: intermediario entre app e disco.. Disk scheduling: SCAN, C-SCAN, SSTF.. SSD muda tudo: random access ~= sequential.\n• O que estudar: polling vs interrupts, DMA, buffers, disk scheduling."
              },
              {
                "w": "Projeto pratico: explorar xv6 (kernel didatico do MIT), modificar scheduler/syscall",
                "s": "Projeto pratico explorar tutorial portugues | xv6 operating system MIT tutorial | projeto pratico explained for beginners | projeto pratico explicação em português",
                "d": "• O que é: xv6: OS educacional do MIT (RISC-V)..\n• Conceitos-chave: Codigo limpo, ~10K linhas C.. Melhor forma de entender SO: MEXER no codigo de um.. Alternativa: fazer mini-OS com bare metal (OSDev).\n• O que estudar: explorar xv6 (kernel didatico do MIT), modificar scheduler/syscall."
              },
              {
                "w": "Virtualizacao: hypervisor tipo 1/2, containers vs VMs, overlay filesystem",
                "s": "virtualization hypervisor type 1 2 | Virtualizacao explicação português | virtualizacao tutorial completo | virtualizacao explained for beginners",
                "d": "• O que é: Hypervisor tipo 1 (bare metal): VMware ESXi, Xen..\n• Conceitos-chave: Container: compartilha kernel, mais leve..\n• Exemplos: Tipo 2 (hosted): VirtualBox, VMware Workstation.. Overlay FS: camadas empilhadas (como Docker layers).. Virtualizacao = como cloud funciona por baixo.\n• O que estudar: hypervisor tipo 1/2, containers vs VMs, overlay filesystem."
              },
              {
                "w": "Linux internals: /proc, /sys, cgroups, namespaces (base de containers)",
                "s": "Linux internals explicação português | Linux proc sys cgroups namespaces | linux internals tutorial completo | linux internals explained for beginners",
                "d": "• O que é: /proc: info de processos (/proc/cpuinfo, /proc/meminfo)..\n• Conceitos-chave: /sys: hardware.. cgroups: limitar CPU, memoria por grupo de processos.. Namespaces: isolar PID, rede, filesystem.. Docker = cgroups + namespaces + overlay FS.. Entender isso = entender containers de verdade.\n• O que estudar: /proc, /sys, cgroups, namespaces (base de containers)."
              }
            ]
          }
        ]
      },
      {
        "name": "🖥️ Arquitetura de Computadores",
        "topics": [
          {
            "name": "Conjunto de Instruções e Organização da CPU",
            "books": [
              "Computer Organization and Design — Patterson & Hennessy",
              "Computer Architecture: A Quantitative Approach — Hennessy & Patterson",
              "Structured Computer Organization — Andrew S. Tanenbaum"
            ],
            "items": [
              {
                "w": "ISA (Instruction Set Architecture): interface entre hardware e software, o que o programador vê",
                "s": "ISA Instruction Set Architecture explicação português | isa instruction set architecture tutorial beginners | isa instruction set architecture explained for beginners | ISA Instruction Set Architecture examples and practice",
                "d": "• O que é: ISA define instruções que a CPU entende: aritméticas, load/store, branch..\n• Conceitos-chave: É o contrato entre hardware e compilador.\n• O que estudar: interface entre hardware e software, o que o programador vê."
              },
              {
                "w": "RISC vs CISC: filosofias de design (ARM/RISC-V vs x86), trade-offs de complexidade",
                "s": "RISC vs CISC explicação português | reduced complex instruction set | risc vs cisc tutorial completo | risc vs cisc explained for beginners",
                "d": "• O que é: RISC: instruções simples e rápidas (ARM, RISC-V)..\n• Conceitos-chave: CISC: instruções complexas (x86).. Modernos x86 decodificam CISC em micro-ops RISC.\n• O que estudar: filosofias de design (ARM/RISC-V vs x86), trade-offs de complexidade."
              },
              {
                "w": "Registradores, ALU, Unidade de Controle: datapath de uma CPU simples (single-cycle)",
                "s": "Registradores ALU Unidade de Controle explicação português | single cycle CPU tutorial | registradores alu unidade de controle explained for beginners | Registradores ALU Unidade de Controle examples and practice",
                "d": "• O que é: CPU básica: registradores armazenam operandos, ALU opera, unidade de controle decodifica instrução e gera sinais..\n• Conceitos-chave: Tudo em 1 ciclo.\n• O que estudar: datapath de uma CPU simples (single-cycle)."
              },
              {
                "w": "Modos de endereçamento: imediato, direto, indireto, indexado, baseado, relativo ao PC",
                "s": "immediate direct indirect indexed PC-relative | Modos de endereamento explicação português | modos de endereamento tutorial completo | modos de endereamento explained for beginners",
                "d": "• O que é: Como instruções localizam operandos: imediato (valor na instrução), direto (endereço fixo), indexado (base + offset)..\n• Conceitos-chave: Afeta flexibilidade.\n• O que estudar: imediato, direto, indireto, indexado, baseado, relativo ao PC."
              },
              {
                "w": "Formatos de instrução: R-type, I-type, S-type, B-type (RISC-V como exemplo didático)",
                "s": "Formatos de instruo explicação português | R-type I-type S-type tutorial | formatos de instruo explained for beginners | Formatos de instrução examples and practice",
                "d": "• O que é: Instruções são codificadas em bits: opcode + registradores + imediato..\n• Conceitos-chave: RISC-V tem formatos claros que facilitam decodificação.\n• O que estudar: R-type, I-type, S-type, B-type (RISC-V como exemplo didático)."
              },
              {
                "w": "Assembly básico: MOV, ADD, SUB, LW, SW, BEQ, JAL — ler e escrever assembly RISC-V/ARM",
                "s": "Assembly bsico explicação português | RISC-V ARM assembly tutorial | assembly bsico explained for beginners | Assembly básico examples and practice",
                "d": "• O que é: Entender assembly é essencial: traduzir C para assembly manualmente, debugar com GDB, entender o que o compilador gera.\n• O que estudar: MOV, ADD, SUB, LW, SW, BEQ, JAL — ler e escrever assembly RISC-V/ARM."
              },
              {
                "w": "Chamadas de função em assembly: stack frame, calling convention, caller/callee saved registers",
                "s": "Chamadas de funo em assembly explicação português | caller callee saved tutorial | chamadas de funo em assembly explained for beginners | Chamadas de função em assembly examples and practice",
                "d": "• O que é: Chamadas usam stack: empurra return address, salva registradores, reserva espaço local..\n• Conceitos-chave: Calling convention define regras entre funções.\n• O que estudar: stack frame, calling convention, caller/callee saved registers."
              }
            ]
          },
          {
            "name": "Pipeline, Cache e Performance",
            "books": [
              "Computer Organization and Design — Patterson & Hennessy",
              "Computer Architecture: A Quantitative Approach — Hennessy & Patterson",
              "Digital Design and Computer Architecture — Harris & Harris"
            ],
            "items": [
              {
                "w": "Pipeline: dividir execução em estágios (IF, ID, EX, MEM, WB) para throughput maior",
                "s": "Pipeline explicação português | instruction level tutorial | pipeline explained for beginners | Pipeline examples and practice",
                "d": "• O que é: Pipeline executa múltiplas instruções simultaneamente em estágios diferentes..\n• Conceitos-chave: 5 estágios clássicos: Fetch, Decode, Execute, Memory, Writeback.\n• O que estudar: dividir execução em estágios (IF, ID, EX, MEM, WB) para throughput maior."
              },
              {
                "w": "Hazards: data hazards (RAW, WAW, WAR), control hazards (branches), structural hazards",
                "s": "data hazard RAW WAW WAR tutorial | Hazards explicação português | hazards explained for beginners | Hazards examples and practice",
                "d": "• O que é: Pipeline tem conflitos: data hazard (instrução precisa de resultado anterior), control hazard (branch não resolvido), structural (recurso compartilhado).\n• O que estudar: data hazards (RAW, WAW, WAR), control hazards (branches), structural hazards."
              },
              {
                "w": "Soluções para hazards: forwarding/bypassing, stalls, branch prediction (estático e dinâmico)",
                "s": "Solues para hazards explicação português | forwarding bypassing tutorial | solues para hazards explained for beginners | Soluções para hazards examples and practice",
                "d": "• O que é: Forwarding encaminha resultado sem esperar writeback..\n• Conceitos-chave: Branch prediction adivinha se branch é tomado.. Previsão errada = flush do pipeline.\n• O que estudar: forwarding/bypassing, stalls, branch prediction (estático e dinâmico)."
              },
              {
                "w": "Superscalar e Out-of-Order: executar múltiplas instruções por ciclo, reordenação dinâmica",
                "s": "Superscalar e OutofOrder explicação português | out-of-order execution tutorial | superscalar e outoforder explained for beginners | Superscalar e OutofOrder examples and practice",
                "d": "• O que é: CPUs modernas despacham 4-8 instruções por ciclo, reordenam para evitar stalls..\n• Conceitos-chave: Tomasulo's algorithm, reservation stations, ROB.\n• O que estudar: executar múltiplas instruções por ciclo, reordenação dinâmica."
              },
              {
                "w": "Hierarquia de memória: registradores → L1 → L2 → L3 → RAM → SSD → HDD (latência e tamanho)",
                "s": "Hierarquia de memria explicação português | memory hierarchy tutorial | hierarquia de memria explained for beginners | Hierarquia de memória examples and practice",
                "d": "• O que é: Cada nível: mais rápido e menor..\n• Conceitos-chave: L1: ~1ns, 64KB.. L2: ~4ns, 256KB.. L3: ~10ns, 8MB.. RAM: ~100ns, 16GB.. Explorar localidade.\n• O que estudar: registradores → L1 → L2 → L3 → RAM → SSD → HDD (latência e tamanho)."
              },
              {
                "w": "Cache: direct-mapped, set-associative, fully-associative, write-back vs write-through, cache miss types (compulsory, capacity, conflict)",
                "s": "compulsory capacity conflict | Cache explicação português | cache tutorial completo | cache explained for beginners",
                "d": "• O que é: Cache guarda dados frequentes perto da CPU..\n• Conceitos-chave: Set-associative balanceia flexibilidade e velocidade.. 3C's: compulsory, capacity, conflict misses.\n• O que estudar: direct-mapped, set-associative, fully-associative, write-back vs write-through, cache miss types (compulsory, capacity, conflict)."
              },
              {
                "w": "Memória virtual: page table, TLB (Translation Lookaside Buffer), page walk, huge pages",
                "s": "Memria virtual explicação português | virtual memory tutorial | memria virtual explained for beginners | Memória virtual examples and practice",
                "d": "• O que é: Memória virtual mapeia endereços virtuais para físicos..\n• Conceitos-chave: TLB é cache de traduções.. Page walk percorre page table hierárquica quando TLB miss.\n• O que estudar: page table, TLB (Translation Lookaside Buffer), page walk, huge pages."
              },
              {
                "w": "Métricas de performance: CPI, IPC, clock speed, benchmark (SPEC), Lei de Amdahl aplicada",
                "s": "Mtricas de performance explicação português | SPEC benchmark tutorial | mtricas de performance explained for beginners | Métricas de performance examples and practice",
                "d": "• O que é: Performance = instruções × CPI × período do clock..\n• Conceitos-chave: IPC (Instructions Per Cycle) mede eficiência.. SPEC benchmarks comparam CPUs objetivamente.\n• O que estudar: CPI, IPC, clock speed, benchmark (SPEC), Lei de Amdahl aplicada."
              }
            ]
          }
        ]
      },
      {
        "name": "⚡ Concorrencia e Paralelismo",
        "topics": [
          {
            "name": "Programacao Concorrente e Paralela",
            "books": [
              "The Art of Multiprocessor Programming — Herlihy & Shavit",
              "Concurrency in Go — Katherine Cox-Buday",
              "Java Concurrency in Practice — Goetz et al."
            ],
            "items": [
              {
                "w": "Concorrencia vs paralelismo: definicoes, quando usar cada",
                "s": "Concorrencia paralelismo definicoes tutorial portugues | concurrent parallel programming | concorrencia vs paralelismo explained for beginners | concorrencia vs paralelismo explicação em português",
                "d": "• O que é: Concorrencia: lidar com muitas coisas ao mesmo tempo (estrutura)..\n• Conceitos-chave: Paralelismo: fazer muitas coisas ao mesmo tempo (execucao).. Concorrencia: 1 cozinheiro, 3 pratos.. Paralelismo: 3 cozinheiros, 3 pratos.. Python: concorrencia (GIL) mas nao paralelismo (use multiprocessing).\n• O que estudar: definicoes, quando usar cada."
              },
              {
                "w": "Modelos: shared memory, message passing, actor model, CSP",
                "s": "Modelos shared memory tutorial portugues | shared memory message passing | modelos explained for beginners | modelos explicação em português",
                "d": "• O que é: Shared memory: threads compartilham (mutex pra proteger)..\n• Conceitos-chave: Message passing: comunicar via mensagens (channels).. Actor model (Erlang, Akka): atores independentes trocam mensagens.. CSP (Go): goroutines + channels.. Cada modelo tem trade-offs.. Go e Rust tornaram concorrencia mais acessivel.\n• O que estudar: shared memory, message passing, actor model, CSP."
              },
              {
                "w": "Lock-free e wait-free: CAS, atomics, ABA problem",
                "s": "Lock-free wait-free atomics tutorial portugues | ABA problem concurrency tutorial | lockfree e waitfree explained for beginners | lockfree e waitfree explicação em português",
                "d": "• O que é: Lock-free: pelo menos 1 thread progride (sem deadlock)..\n• Conceitos-chave: Wait-free: todas progridem.. CAS: Compare-And-Swap (instrucao atomica do CPU).. Atomics: operacoes indivisiveis.. ABA: valor muda A>B>A, CAS nao percebe.. Dificil mas altissima performance.\n• O que estudar: CAS, atomics, ABA problem."
              },
              {
                "w": "Programacao paralela: OpenMP, MPI, MapReduce, divide-and-conquer paralelo",
                "s": "Programacao paralela OpenMP tutorial portugues | OpenMP MPI parallel programming | programacao paralela explained for beginners | programacao paralela explicação em português",
                "d": "• O que é: OpenMP: pragmas em C/C++ (#pragma omp parallel for)..\n• Conceitos-chave: MPI: comunicacao entre maquinas (cluster HPC).. MapReduce: map(transformar) + reduce(agregar) em paralelo (Hadoop, Spark).. Amdahl's law: speedup limitado pela parte sequencial.\n• O que estudar: OpenMP, MPI, MapReduce, divide-and-conquer paralelo."
              },
              {
                "w": "GPU computing: CUDA em profundidade, kernels, warps, memory hierarchy, occupancy",
                "s": "computing CUDA profundidade tutorial portugues | CUDA memory hierarchy occupancy | gpu computing explained for beginners | gpu computing explicação em português",
                "d": "• O que é: CUDA kernel: funcao que roda em milhares de threads..\n• Conceitos-chave: Grid > blocks > threads.. Warps: 32 threads executam juntas.. Memory: global (lenta), shared (rapida), registers (mais rapida).. Occupancy: usar GPU ao maximo.. Coalesced access: threads acessando memoria sequencialmente.. Essencial pra ML de verdade.\n• O que estudar: CUDA em profundidade, kernels, warps, memory hierarchy, occupancy."
              },
              {
                "w": "Problemas classicos: producer-consumer, readers-writers, dining philosophers, barrier",
                "s": "Problemas classicos explicação português | readers writers problem tutorial | problemas classicos explained for beginners | Problemas classicos examples and practice",
                "d": "• O que é: Producer-consumer: fila compartilhada com mutex+condition variable..\n• Conceitos-chave: Readers-writers: muitos leitores OU 1 escritor.. Dining philosophers: deadlock classico (5 filosofos, 5 garfos).. Barrier: todos esperam ate o ultimo..\n• O que estudar: producer-consumer, readers-writers, dining philosophers, barrier."
              },
              {
                "w": "Deadlock: 4 condições de Coffman, prevenção (ordenar locks), detecção, recovery",
                "s": "Deadlock explicação português | Coffman conditions tutorial | deadlock explained for beginners | Deadlock examples and practice",
                "d": "• O que é: Deadlock: 4 condições simultâneas (exclusão mútua, hold & wait, no preemption, circular wait)..\n• Conceitos-chave: Prevenir quebrando uma delas.\n• O que estudar: 4 condições de Coffman, prevenção (ordenar locks), detecção, recovery."
              },
              {
                "w": "Memory model: happens-before, sequential consistency, relaxed ordering, fences/barriers",
                "s": "Memory model explicação português | sequential consistency tutorial | memory model explained for beginners | Memory model examples and practice",
                "d": "• O que é: CPUs e compiladores reordenam instruções..\n• Conceitos-chave: Memory model define garantias de ordenação.. Barriers forçam visibilidade entre threads.\n• O que estudar: happens-before, sequential consistency, relaxed ordering, fences/barriers."
              }
            ]
          },
          {
            "name": "Padrões e Prática de Concorrência",
            "books": [
              "Java Concurrency in Practice — Brian Goetz",
              "Programming Rust — Jim Blandy & Jason Orendorff",
              "Concurrency in Go — Katherine Cox-Buday"
            ],
            "items": [
              {
                "w": "GIL do Python: o que é, por que existe, como contornar (multiprocessing, C extensions)",
                "s": "GIL do Python explicação português | global interpreter lock tutorial | gil do python explained for beginners | GIL do Python examples and practice",
                "d": "• O que é: GIL impede threads Python de executar bytecode simultaneamente..\n• Conceitos-chave: Use multiprocessing ou asyncio para contornar.\n• O que estudar: o que é, por que existe, como contornar (multiprocessing, C extensions)."
              },
              {
                "w": "Async I/O: event loop, coroutines, asyncio em Python, tokio em Rust",
                "s": "Async IO explicação português | event loop tutorial | async i/o explained for beginners | Async I/O examples and practice",
                "d": "• O que é: Async não é paralelo: uma thread faz I/O não-bloqueante via event loop..\n• Conceitos-chave: Ideal para I/O-bound (web servers, scrapers).\n• O que estudar: event loop, coroutines, asyncio em Python, tokio em Rust."
              },
              {
                "w": "Thread safety: data races, mutex poisoning, RwLock, condições de corrida comuns e como evitar",
                "s": "Thread safety explicação português | race condition tutorial | thread safety explained for beginners | Thread safety examples and practice",
                "d": "• O que é: Data race = dois threads acessam dado simultaneamente e um modifica..\n• Conceitos-chave: Mutex serializa acesso, RwLock permite leituras paralelas.\n• O que estudar: data races, mutex poisoning, RwLock, condições de corrida comuns e como evitar."
              },
              {
                "w": "Lei de Amdahl vs Lei de Gustafson: limites teóricos do paralelismo",
                "s": "Lei de Amdahl vs Lei de Gustafson explicação português | parallel fraction tutorial | lei de amdahl vs lei de gustafson explained for beginners | Lei de Amdahl vs Lei de Gustafson examples and practice",
                "d": "• O que é: Amdahl: speedup limitado pela parte serial..\n• Conceitos-chave: Gustafson: com mais cores, resolvemos problemas maiores (mais otimista).\n• O que estudar: limites teóricos do paralelismo."
              },
              {
                "w": "Padrões: pipeline, fan-out/fan-in, work stealing, futures/promises",
                "s": "Padres explicação português | futures promises tutorial | padres explained for beginners | Padrões examples and practice",
                "d": "• O que é: Pipeline: estágios em cadeia..\n• Conceitos-chave: Fan-out: distribuir trabalho.. Fan-in: combinar resultados.. Futures: resultado eventual de async.\n• O que estudar: pipeline, fan-out/fan-in, work stealing, futures/promises."
              },
              {
                "w": "Benchmarking de concorrência: medir speedup real, overhead de sincronização, false sharing",
                "s": "Benchmarking de concorrncia explicação português | false sharing tutorial | benchmarking de concorrncia explained for beginners | Benchmarking de concorrência examples and practice",
                "d": "• O que é: Medir se paralelismo realmente acelera: overhead de criar threads, false sharing (cache line contention) pode anular ganhos.\n• O que estudar: medir speedup real, overhead de sincronização, false sharing."
              }
            ]
          }
        ]
      },
      {
        "name": "🏗️ Engenharia de Software",
        "topics": [
          {
            "name": "Principios, Agile, Patterns",
            "books": [
              "Clean Code — Robert Martin",
              "The Pragmatic Programmer — Hunt & Thomas",
              "Software Engineering at Google — Winters et al."
            ],
            "items": [
              {
                "w": "SOLID: 5 principios de design orientado a objetos",
                "s": "SOLID principios design tutorial portugues | single responsibility open closed | solid explained for beginners | solid explicação em português",
                "d": "• O que é: S: responsabilidade unica (1 classe = 1 motivo pra mudar)..\n• Conceitos-chave: O: aberto/fechado (extender sem modificar).. L: Liskov (subclasse substitui a pai).. I: segregacao de interface (interfaces pequenas).. D: inversao de dependencia (dependa de abstracoes).\n• O que estudar: 5 principios de design orientado a objetos."
              },
              {
                "w": "DRY, KISS, YAGNI, SoC, Law of Demeter",
                "s": "KISS YAGNI Demeter tutorial portugues | separation of concerns tutorial | dry kiss yagni soc law of demeter explained for beginners | dry kiss yagni soc law of demeter explicação em português",
                "d": "• O que é: DRY: nao repita codigo..\n• Conceitos-chave: KISS: mantenha simples.. YAGNI: nao construa o que nao precisa AGORA.. SoC: separar responsabilidades.. Law of Demeter: fale so com vizinhos diretos (a.b.c.d() = code smell)."
              },
              {
                "w": "Design Patterns: Creational (Factory, Builder, Singleton)",
                "s": "design patterns creational factory builder singleton | Design Patterns Creational tutorial 2025 | design patterns explained for beginners | design patterns explicação em português",
                "d": "• O que é: Factory: criar objetos sem expor logica..\n• Conceitos-chave: Abstract Factory: familias de objetos.. Builder: construir objeto complexo passo a passo.. Singleton: 1 instancia global (usar com cuidado — dificulta testes).\n• O que estudar: Creational (Factory, Builder, Singleton)."
              },
              {
                "w": "Design Patterns: Structural (Adapter, Decorator, Facade, Proxy)",
                "s": "design patterns structural adapter decorator facade | Design Patterns Structural tutorial 2025 | design patterns explained for beginners | design patterns explicação em português",
                "d": "• O que é: Adapter: compatibilizar interfaces..\n• Conceitos-chave: Decorator: adicionar comportamento sem heranca.. Facade: interface simples pra subsistema complexo.. Proxy: intermediario (lazy loading, cache, access control).\n• O que estudar: Structural (Adapter, Decorator, Facade, Proxy)."
              },
              {
                "w": "Design Patterns: Behavioral (Observer, Strategy, Command, State, Iterator)",
                "s": "design patterns behavioral observer strategy command | Design Patterns Behavioral tutorial 2025 | design patterns explained for beginners | design patterns explicação em português",
                "d": "• O que é: Observer: notificar mudancas (event listeners)..\n• Conceitos-chave: Strategy: trocar algoritmo em runtime.. State: comportamento muda com estado.. Iterator: percorrer colecao.\n• Exemplos: Command: encapsular acao como objeto (undo/redo)..\n• O que estudar: Behavioral (Observer, Strategy, Command, State, Iterator)."
              },
              {
                "w": "Agile: Scrum (sprints, daily, review, retro), Kanban, XP",
                "s": "Agile Scrum sprints tutorial portugues | agile scrum kanban XP tutorial | agile explained for beginners | agile explicação em português",
                "d": "• O que é: Scrum: sprints 2 semanas, roles (PO, SM, Dev), cerimonias (planning, daily, review, retro)..\n• Conceitos-chave: Kanban: fluxo continuo, WIP limit.. XP: pair programming, TDD, continuous integration..\n• Exemplos: User stories: 'Como [persona], quero [acao], pra [beneficio]'.\n• O que estudar: Scrum (sprints, daily, review, retro), Kanban, XP."
              },
              {
                "w": "Code review: boas praticas, o que revisar, ferramentas, cultura",
                "s": "pull request review tips tutorial | code review best practices | code review explained for beginners | code review explicação em português",
                "d": "• O que é: Revisar: logica, edge cases, naming, testes, seguranca..\n• Conceitos-chave: NAO revisar: estilo (use linter).. Feedback construtivo: 'Que tal X?' nao 'Isso ta errado'.. Aprovar com comentarios.. Max 400 linhas por PR.. Revisar em <24h.. Ferramentas: GitHub PR, Reviewable.\n• O que estudar: boas praticas, o que revisar, ferramentas, cultura."
              },
              {
                "w": "Documentação como skill: Diátaxis framework (tutorial/howto/reference/explanation), docs-as-code, ADRs, changelogs",
                "s": "Documentao como skill explicação português | documentation tutorial | documentao como skill explained for beginners | Documentação como skill examples and practice",
                "d": "• O que é: Boa documentação é skill raro: Diátaxis separa em 4 tipos..\n• Conceitos-chave: Docs-as-code: versionar com o código.. ADRs registram decisões.. Changelogs comunicam mudanças.\n• O que estudar: Diátaxis framework (tutorial/howto/reference/explanation), docs-as-code, ADRs, changelogs."
              },
              {
                "w": "Monorepo vs Polyrepo: trade-offs, tooling (Nx, Turborepo, Bazel), quando usar cada estratégia",
                "s": "Monorepo vs Polyrepo explicação português | repository strategy tutorial | monorepo vs polyrepo explained for beginners | Monorepo vs Polyrepo examples and practice",
                "d": "• O que é: Monorepo: todo código junto (Google, Facebook), facilita refactoring..\n• Conceitos-chave: Polyrepo: repos separados, mais autonomia.. Nx/Turborepo otimizam monorepos.\n• O que estudar: trade-offs, tooling (Nx, Turborepo, Bazel), quando usar cada estratégia."
              }
            ]
          },
          {
            "name": "Testes de Software",
            "books": [
              "The Art of Software Testing — Myers, Sandler & Badgett",
              "Testing JavaScript Applications — Caio Gondim",
              "Python Testing with pytest — Brian Okken"
            ],
            "items": [
              {
                "w": "Piramide de testes: unitario, integracao, e2e. Quando usar cada",
                "s": "Piramide testes unitario tutorial portugues | testing pyramid unit integration e2e | piramide de testes explained for beginners | piramide de testes explicação em português",
                "d": "• O que é: Unitario: funcao isolada (rapido, muitos)..\n• Conceitos-chave: Integracao: componentes juntos (API+DB).. E2E: usuario real (lento, poucos).. Piramide: muitos unitarios, poucos e2e.. Custo sobe conforme sobe na piramide.\n• O que estudar: unitario, integracao, e2e. Quando usar cada."
              },
              {
                "w": "Testes unitarios: pytest, Jest, mocks, stubs, fixtures, parametrize",
                "s": "Testes unitarios pytest tutorial portugues | mocking stubs fixtures tutorial | testes unitarios explained for beginners | testes unitarios explicação em português",
                "d": "• O que é: Mock: simular dependencia (API, DB)..\n• Conceitos-chave: Stub: resposta fixa.. Fixture: setup/teardown.. Parametrize: mesmo teste com dados diferentes.. Cobertura: pytest --cov (80%+ e bom, 100% e utopia).\n• O que estudar: pytest, Jest, mocks, stubs, fixtures, parametrize."
              },
              {
                "w": "Testes de integracao: testar API+DB juntos, testcontainers",
                "s": "Testes de integracao explicação português | Testes integracao testar explained | testes de integracao tutorial completo | Testes de integracao examples and practice",
                "d": "• O que é: Testar fluxo real: request > controller > service > repository > DB..\n• Conceitos-chave: Testcontainers: subir DB real em Docker pra teste.. Mais lento mas pega bugs que unitario nao pega.\n• O que estudar: testar API+DB juntos, testcontainers."
              },
              {
                "w": "Testes E2E: Cypress, Playwright, Selenium. Fluxos criticos do usuario",
                "s": "Testes Cypress Playwright tutorial portugues | e2e testing Cypress Playwright | testes e2e explained for beginners | testes e2e explicação em português",
                "d": "• O que é: Playwright/Cypress: simular clique, digitacao, navegacao no browser..\n• Conceitos-chave: Testar fluxos criticos: login, checkout, cadastro.. Fragil (muda UI, quebra teste).. Poucos mas valiosos.\n• O que estudar: Cypress, Playwright, Selenium. Fluxos criticos do usuario."
              },
              {
                "w": "Testes de carga e performance: k6, Locust, metricas (p50, p95, p99)",
                "s": "Testes carga performance tutorial portugues | testes carga performance tutorial | testes de carga e performance explained for beginners | testes de carga e performance explicação em português",
                "d": "• O que é: k6 (JS) ou Locust (Python): simular centenas/milhares de usuarios..\n• Conceitos-chave: Metricas: throughput (req/s), latency p50/p95/p99 (percentis).. Encontrar gargalos ANTES de ir pra producao.\n• O que estudar: k6, Locust, metricas (p50, p95, p99)."
              },
              {
                "w": "TDD e BDD: test-first, red-green-refactor, Gherkin/Cucumber",
                "s": "test-first red-green-refactor Gherkin/Cucumber tutorial portugues | TDD BDD test driven development | tdd e bdd explained for beginners | tdd e bdd explicação em português",
                "d": "• O que é: TDD: escrever teste ANTES do codigo..\n• Conceitos-chave: BDD: Given-When-Then (linguagem de negocio).. Disciplina que melhora design do codigo.\n• O que estudar: test-first, red-green-refactor, Gherkin/Cucumber."
              },
              {
                "w": "Cobertura de código: line, branch, condition, MC/DC — métricas e quando são enganosas",
                "s": "Cobertura de cdigo explicação português | line branch condition tutorial | cobertura de cdigo explained for beginners | Cobertura de código examples and practice",
                "d": "• O que é: Cobertura mede quanto código os testes exercitam..\n• Conceitos-chave: Line é superficial, branch é melhor.. 100% cobertura ≠ 0 bugs (pode ter lógica errada).\n• O que estudar: line, branch, condition, MC/DC — métricas e quando são enganosas."
              },
              {
                "w": "Mutation testing: injetar bugs no código e verificar se testes detectam (PIT, mutmut)",
                "s": "Mutation testing explicação português | mutation testing tutorial | mutation testing explained for beginners | Mutation testing examples and practice",
                "d": "• O que é: Mutation testing altera código (ex: troca > por <) e verifica se testes falham..\n• Conceitos-chave: Se não falham, testes são fracos.. Mede qualidade dos testes.\n• O que estudar: injetar bugs no código e verificar se testes detectam (PIT, mutmut)."
              },
              {
                "w": "Property-based testing: Hypothesis (Python), fast-check (JS) — gerar inputs aleatórios automaticamente",
                "s": "Propertybased testing explicação português | property-based testing tutorial | propertybased testing explained for beginners | Propertybased testing examples and practice",
                "d": "• O que é: Em vez de escrever casos manualmente, define propriedades (ex: sort(x) sempre ordenado) e framework gera milhares de inputs..\n• Conceitos-chave: Encontra edge cases.\n• O que estudar: Hypothesis (Python), fast-check (JS) — gerar inputs aleatórios automaticamente."
              }
            ]
          },
          {
            "name": "Etica, LGPD e Impacto Social",
            "books": [
              "Weapons of Math Destruction — Cathy O'Neil",
              "The Ethical Algorithm — Kearns & Roth",
              "LGPD na Pratica — Viviane Maldonado"
            ],
            "items": [
              {
                "w": "Etica em tecnologia: vies algoritmico, discriminacao, transparencia",
                "s": "Etica tecnologia vies tutorial portugues | etica tecnologia vies algoritmico | etica em tecnologia explained for beginners | etica em tecnologia explicação em português",
                "d": "• O que é: Algoritmos refletem vieses dos dados..\n• Conceitos-chave: Transparencia: explicar decisoes automatizadas.. Fairness: metricas de justica.. Impacto real em vidas reais.\n• Exemplos: Exemplo: reconhecimento facial pior pra pele escura..\n• O que estudar: vies algoritmico, discriminacao, transparencia."
              },
              {
                "w": "LGPD / GDPR: dados pessoais, consentimento, direitos do titular",
                "s": "LGPD GDPR dados tutorial portugues | privacy law developers tutorial | lgpd / gdpr explained for beginners | lgpd / gdpr explicação em português",
                "d": "• O que é: LGPD (Brasil) / GDPR (Europa)..\n• Conceitos-chave: Dados pessoais: qualquer info que identifica alguem.. Consentimento explicito.. Direitos: acesso, correcao, exclusao, portabilidade.. Multas pesadas.. Dev precisa saber!.\n• O que estudar: dados pessoais, consentimento, direitos do titular."
              },
              {
                "w": "Privacidade by design, minimizacao de dados, anonimizacao",
                "s": "Privacidade design minimizacao tutorial portugues | data minimization anonymization | privacidade by design minimizacao de dados anonimizacao explained for beginners | privacidade by design minimizacao de dados anonimizacao explicação em português",
                "d": "• O que é: Privacy by design: privacidade desde o inicio do projeto, nao depois..\n• Conceitos-chave: Coletar MINIMO necessario.. Anonimizar quando possivel.. Encriptar em repouso e transito.. Hash de dados sensiveis."
              },
              {
                "w": "Impacto social da automacao: trabalho, acessibilidade, inclusao digital",
                "s": "Impacto social automacao tutorial portugues | social impact automation technology | impacto social da automacao explained for beginners | impacto social da automacao explicação em português",
                "d": "• O que é: Automacao elimina empregos mas cria outros..\n• Conceitos-chave: Acessibilidade: 15% da populacao tem deficiencia.. Inclusao digital: nem todos tem acesso..\n• Exemplos: Como engenheiro, voce tem responsabilidade pelo que constroi.\n• O que estudar: trabalho, acessibilidade, inclusao digital."
              },
              {
                "w": "IA responsavel: fairness, accountability, transparency, explicabilidade",
                "s": "responsible AI fairness accountability | IA responsavel explicação português | ia responsavel tutorial completo | ia responsavel explained for beginners",
                "d": "• O que é: Fairness: modelo trata grupos diferentes igualmente? Metricas: demographic parity, equalized odds..\n• Conceitos-chave: Accountability: quem e responsavel quando IA erra? Transparency: usuario sabe que e IA? Explicabilidade (XAI): LIME, SHAP mostram POR QUE modelo decidiu.. EU AI Act: regulacao por risco.\n• O que estudar: fairness, accountability, transparency, explicabilidade."
              },
              {
                "w": "Sustentabilidade em tech: green computing, carbon footprint, eficiencia energetica",
                "s": "Sustentabilidade em tech explicação português | sustainable software engineering | sustentabilidade em tech tutorial completo | sustentabilidade em tech explained for beginners",
                "d": "• O que é: Treinar GPT-4: ~300 toneladas de CO2..\n• Conceitos-chave: Data centers: 1-2% da eletricidade global.. Green computing: otimizar codigo, usar menos recursos, cache, CDN.. Cloud carbon footprint: medir.. Escolher regiao do datacenter com energia limpa.. Codigo eficiente = menos servidores = menos energia.\n• O que estudar: green computing, carbon footprint, eficiencia energetica."
              }
            ]
          }
        ]
      },
      {
        "name": "📖 Teoria da Computacao & Compiladores",
        "topics": [
          {
            "name": "Teoria da Computacao",
            "books": [
              "Introduction to the Theory of Computation — Michael Sipser",
              "Linguagens Formais e Automatos — Menezes",
              "Computational Complexity — Arora & Barak"
            ],
            "items": [
              {
                "w": "Automatos finitos deterministas (DFA) e nao-deterministas (NFA)",
                "s": "Automatos finitos deterministas tutorial portugues | DFA NFA finite automata tutorial | automatos finitos deterministas dfa e naodeterministas nfa explained for beginners | automatos finitos deterministas dfa e naodeterministas nfa explicação em português",
                "d": "• O que é: DFA: cada estado + entrada = proximo estado unico..\n• Conceitos-chave: NFA: pode ter multiplos caminhos.. Equivalentes em poder!. Usados em regex, parsing, protocolos.. Descrever com diagrama de estados."
              },
              {
                "w": "Expressoes regulares (teoria), linguagens regulares, lema do bombeamento",
                "s": "Expressoes regulares teoria tutorial portugues | pumping lemma regular tutorial | expressoes regulares teoria linguagens regulares lema do bombeamento explained for beginners | expressoes regulares teoria linguagens regulares lema do bombeamento explicação em português",
                "d": "• O que é: Regex descreve linguagens regulares..\n• Conceitos-chave: Todo DFA = 1 regex e vice-versa.. Limitacao: regex nao conta.\n• Exemplos: Lema do bombeamento: prova que algo NAO e regular (ex: a^n b^n).."
              },
              {
                "w": "Gramaticas livres de contexto, automatos de pilha, parsing",
                "s": "Gramaticas livres contexto tutorial portugues | context free grammar pushdown automata | gramaticas livres de contexto automatos de pilha parsing explained for beginners | gramaticas livres de contexto automatos de pilha parsing explicação em português",
                "d": "• O que é: CFG: regras S -> aSb | ab..\n• Conceitos-chave: Mais poderoso que regex (consegue contar).. Automato de pilha: DFA + pilha infinita.. Arvore de derivacao.. Base de compiladores e linguagens de programacao."
              },
              {
                "w": "Maquinas de Turing, decidibilidade, problema da parada",
                "s": "Maquinas Turing decidibilidade tutorial portugues | maquina de Turing decidibilidade | maquinas de turing decidibilidade problema da parada explained for beginners | maquinas de turing decidibilidade problema da parada explicação em português",
                "d": "• O que é: MT: fita infinita + cabecote + estados..\n• Conceitos-chave: Pode computar TUDO que e computavel.. Problema da parada: impossivel decidir se programa para ou nao (Turing 1936).. Existem problemas sem solucao algoritmica!."
              },
              {
                "w": "Classes de complexidade: P, NP, NP-completo, NP-hard",
                "s": "Classes complexidade NP-completo tutorial portugues | P NP NP-complete complexity classes | classes de complexidade explained for beginners | classes de complexidade explicação em português",
                "d": "• O que é: P: resolvivel em tempo polinomial..\n• Conceitos-chave: NP: verificavel em polinomial.. NP-completo: mais dificil de NP (SAT, TSP, Knapsack).. P=NP? Problema do milenio (1 milhao de dolares).. Na pratica: se NP-completo, use heuristica.\n• O que estudar: P, NP, NP-completo, NP-hard."
              },
              {
                "w": "Reducao e completude: provar que problema A e tao dificil quanto B",
                "s": "Reducao e completude explicação português | computational reduction tutorial | reducao e completude explained for beginners | Reducao e completude examples and practice",
                "d": "• O que é: Reducao: transformar problema A em problema B..\n• Conceitos-chave: Se B e facil e A reduz a B → A tambem e facil.. Se A e dificil e A reduz a B → B tambem e dificil.. Cook-Levin: SAT e NP-completo.. Pra provar NP-completo: reduzir SAT (ou outro NP-completo) ao seu problema.. Ferramenta fundamental em teoria.\n• O que estudar: provar que problema A e tao dificil quanto B."
              },
              {
                "w": "Classes de complexidade: P, NP, NP-hard, NP-complete, co-NP, PSPACE — hierarquia e exemplos",
                "s": "Classes de complexidade explicação português | P NP NP-hard NP-complete tutorial | classes de complexidade explained for beginners | Classes de complexidade examples and practice",
                "d": "• O que é: P: resolvível em tempo polinomial..\n• Conceitos-chave: NP: verificável em tempo polinomial.. NP-completo: os mais difíceis de NP (SAT, TSP).. P=NP? problema aberto.\n• O que estudar: P, NP, NP-hard, NP-complete, co-NP, PSPACE — hierarquia e exemplos."
              },
              {
                "w": "Reduções: provar NP-completude reduzindo problema conhecido (SAT) para novo problema",
                "s": "NP-completeness proof tutorial | polynomial reduction tutorial | redues explained for beginners | redues explicação em português",
                "d": "• O que é: Para provar que problema X é NP-completo: mostrar que está em NP e reduzir SAT (ou outro NP-completo) para X em tempo polinomial.\n• O que estudar: provar NP-completude reduzindo problema conhecido (SAT) para novo problema."
              },
              {
                "w": "Computabilidade avançada: hierarquia aritmética, graus de Turing, oráculos — problemas além de decidível/indecidível",
                "s": "Computabilidade avanada explicação português | arithmetical hierarchy tutorial | computabilidade avanada explained for beginners | Computabilidade avançada examples and practice",
                "d": "• O que é: Nem todos problemas indecidíveis são igualmente difíceis..\n• Conceitos-chave: Hierarquia aritmética classifica por nível.. Oracle machines exploram o que seria possível com oráculo.\n• O que estudar: hierarquia aritmética, graus de Turing, oráculos — problemas além de decidível/indecidível."
              }
            ]
          },
          {
            "name": "Compiladores (Intro)",
            "books": [
              "Crafting Interpreters — Robert Nystrom (gratuito)",
              "Compilers: Principles — Aho et al. (Dragon Book)",
              "Writing an Interpreter in Go — Thorsten Ball"
            ],
            "items": [
              {
                "w": "Fases: analise lexica (tokenizacao), analise sintatica (parsing), AST",
                "s": "Fases analise lexica tutorial portugues | compiler phases lexer parser AST | fases explained for beginners | fases explicação em português",
                "d": "• O que é: Codigo fonte > tokens (lexer: 'if', '(', 'x', '>', '0') > AST (parser: arvore da estrutura)..\n• Conceitos-chave: Regex pra tokens.. CFG pra gramatica.. Cada fase simplifica a proxima.\n• O que estudar: analise lexica (tokenizacao), analise sintatica (parsing), AST."
              },
              {
                "w": "Analise semantica, tabela de simbolos, checagem de tipos",
                "s": "semantic analysis symbol table type checking | Analise semantica tabela tutorial portugues | analise semantica tabela de simbolos checagem de tipos explained for beginners | analise semantica tabela de simbolos checagem de tipos explicação em português",
                "d": "• O que é: AST pronta > verificar: variavel declarada? tipos compativeis? Tabela de simbolos: registra variaveis e seus tipos..\n• Conceitos-chave: Type checking: int + string = erro.. Escopos: bloco, funcao, global."
              },
              {
                "w": "Geracao de codigo, otimizacao, bytecode vs codigo nativo",
                "s": "Geracao codigo otimizacao tutorial portugues | code generation compiler optimization | geracao de codigo otimizacao bytecode vs codigo nativo explained for beginners | geracao de codigo otimizacao bytecode vs codigo nativo explicação em português",
                "d": "• O que é: AST > codigo intermediario > otimizar > codigo final..\n• Conceitos-chave: Bytecode: instrucoes pra VM (Java, Python).. Nativo: instrucoes pro CPU (C, Rust).. Otimizacoes: inlining, dead code elimination, constant folding."
              },
              {
                "w": "Projeto pratico: construir interpretador simples (Crafting Interpreters)",
                "s": "Projeto pratico explicação português | Projeto pratico construir explained | projeto pratico tutorial completo | Projeto pratico examples and practice",
                "d": "• O que é: Melhor forma de entender: CONSTRUIR um..\n• Conceitos-chave: Crafting Interpreters (gratuito, craftinginterpreters.com): faz 2 interpretadores do zero.. Comece pela parte 1 (tree-walk em Java/Python).. Projeto transformador.\n• O que estudar: construir interpretador simples (Crafting Interpreters)."
              },
              {
                "w": "Maquinas virtuais e bytecode: JVM, CPython bytecode, V8, LLVM IR",
                "s": "Maquinas virtuais e bytecode explicação português | CPython bytecode dis tutorial | maquinas virtuais e bytecode explained for beginners | Maquinas virtuais e bytecode examples and practice",
                "d": "• O que é: JVM: Java compila pra bytecode, JVM interpreta/JIT..\n• Conceitos-chave: CPython: .pyc = bytecode (dis.dis() mostra).. V8 (Chrome): JS compilado JIT.. LLVM: compilador intermediario (Clang, Rust usam).. Vantagem: escrever 1 backend (VM) e suportar muitas linguagens.. Desvantagem: overhead vs nativo.\n• O que estudar: JVM, CPython bytecode, V8, LLVM IR."
              },
              {
                "w": "LLVM, WebAssembly (WASM), Just-In-Time (JIT) compilation",
                "s": "LLVM WebAssembly WASM JustInTime JIT compilation explicação português | LLVM compiler infrastructure | llvm webassembly wasm justintime jit compilation tutorial completo | llvm webassembly wasm justintime jit compilation explained for beginners",
                "d": "• O que é: LLVM: infraestrutura de compilador (frontend qualquer → LLVM IR → backend qualquer)..\n• Conceitos-chave: WASM: bytecode pro browser (performance quase nativa).. Compila de C/C++/Rust pra WASM.. JIT: compilar em runtime (V8, PyPy, LuaJIT).. Futuro: WASM fora do browser (WASI), edge computing, plugins."
              },
              {
                "w": "Parsers LL e LR: top-down vs bottom-up, LALR(1), ferramentas (ANTLR, Bison/Yacc)",
                "s": "Parsers LL e LR explicação português | top-down bottom-up tutorial | parsers ll e lr explained for beginners | Parsers LL e LR examples and practice",
                "d": "• O que é: LL: top-down (preditivo, recursive descent)..\n• Conceitos-chave: LR: bottom-up (shift-reduce, mais poderoso).. LALR(1) é usado na maioria dos compiladores reais.\n• O que estudar: top-down vs bottom-up, LALR(1), ferramentas (ANTLR, Bison/Yacc)."
              },
              {
                "w": "Type checking e type inference: sistemas de tipos, Hindley-Milner, TypeScript como exemplo prático",
                "s": "Type checking e type inference explicação português | type inference tutorial | type checking e type inference explained for beginners | Type checking e type inference examples and practice",
                "d": "• O que é: Type checker verifica tipos em compilação..\n• Exemplos: Type inference deduz tipos automaticamente (Rust, Haskell).. TypeScript é exemplo acessível de tipos estáticos.\n• O que estudar: sistemas de tipos, Hindley-Milner, TypeScript como exemplo prático."
              },
              {
                "w": "Verificação formal: provar que software está correto matematicamente (Coq, Lean, TLA+, model checking)",
                "s": "Verificao formal explicação português | formal verification tutorial | verificao formal explained for beginners | Verificação formal examples and practice",
                "d": "• O que é: Além de testes: provar matematicamente que código é correto..\n• Conceitos-chave: TLA+ para sistemas distribuídos, Coq/Lean para provas.. Usado em aviação, hardware, criptografia.\n• O que estudar: provar que software está correto matematicamente (Coq, Lean, TLA+, model checking)."
              }
            ]
          }
        ]
      },
      {
        "name": "📐 Matematica p/ ML",
        "topics": [
          {
            "name": "Calculo Multivariavel",
            "books": [
              "Mathematics for Machine Learning — Deisenroth (gratuito)",
              "Calculo Vol.2 — James Stewart",
              "Vector Calculus — Marsden & Tromba"
            ],
            "items": [
              {
                "w": "Derivadas parciais e gradiente",
                "s": "Derivadas parciais gradiente tutorial portugues | multivariable calculus tutorial | derivadas parciais e gradiente explained for beginners | derivadas parciais e gradiente explicação em português",
                "d": "• O que é: Derivada parcial: derivar em relacao a uma variavel, fixando as outras..\n• Conceitos-chave: Gradiente: vetor de todas parciais = direcao de maior crescimento.. Base do gradient descent!."
              },
              {
                "w": "Regra da cadeia multivariavel, Jacobiano",
                "s": "Regra cadeia multivariavel tutorial portugues | chain rule multivariable jacobian | regra da cadeia multivariavel jacobiano explained for beginners | regra da cadeia multivariavel jacobiano explicação em português",
                "d": "• O que é: Cadeia multi: dy/dt = (dy/dx1)(dx1/dt) + (dy/dx2)(dx2/dt)..\n• Conceitos-chave: Jacobiano: matriz de todas derivadas parciais.. Essencial pra backpropagation em redes neurais."
              },
              {
                "w": "Hessiana, pontos criticos, convexidade",
                "s": "Hessiana pontos criticos tutorial portugues | hessian matrix critical points | hessiana pontos criticos convexidade explained for beginners | hessiana pontos criticos convexidade explicação em português",
                "d": "• O que é: Hessiana: matriz de segundas derivadas..\n• Conceitos-chave: Positiva definida = minimo local.. Convexidade: funcao em forma de bacia (1 so minimo).. Loss functions convexas sao mais faceis."
              },
              {
                "w": "Otimizacao: SGD, Momentum, Adam, learning rate",
                "s": "Otimizacao Momentum Adam tutorial portugues | SGD Adam optimizer tutorial | otimizacao explained for beginners | otimizacao explicação em português",
                "d": "• O que é: SGD: atualizar pesos na direcao oposta ao gradiente..\n• Conceitos-chave: Momentum: acumula velocidade.. Adam: adapta lr por parametro.. Learning rate scheduling: warmup, cosine decay.\n• O que estudar: SGD, Momentum, Adam, learning rate."
              },
              {
                "w": "Funcoes de custo em ML: MSE, cross-entropy, hinge loss, suas derivadas",
                "s": "Funcoes de custo em ML explicação português | funcoes de custo em ml tutorial beginners | funcoes de custo em ml explained for beginners | Funcoes de custo em ML examples and practice",
                "d": "• O que é: MSE: (y-y_hat)^2 (regressao)..\n• Conceitos-chave: Cross-entropy: -y*log(y_hat) (classificacao).. Hinge loss: max(0, 1-y*y_hat) (SVM).. Derivada da loss + chain rule = gradiente pra backpropagation.. Escolher loss errada = modelo aprendendo a coisa errada.\n• O que estudar: MSE, cross-entropy, hinge loss, suas derivadas."
              },
              {
                "w": "Otimizacao com restricoes: Lagrange multipliers, KKT, programacao linear (intro)",
                "s": "Otimizacao com restricoes explicação português | Lagrange multipliers optimization | otimizacao com restricoes tutorial completo | otimizacao com restricoes explained for beginners",
                "d": "• O que é: Lagrange: otimizar f(x) sujeito a g(x)=0..\n• Conceitos-chave: Gradientes paralelos no ponto otimo.. KKT: generalizacao pra desigualdades.. Programacao linear: otimizar funcao linear com restricoes lineares (simplex).. Aplicacoes: SVM usa KKT, alocacao de recursos usa LP.. scipy.optimize.linprog.\n• O que estudar: Lagrange multipliers, KKT, programacao linear (intro)."
              }
            ]
          },
          {
            "name": "Algebra Linear Avancada",
            "books": [
              "Linear Algebra Done Right — Axler",
              "Mathematics for Machine Learning — Deisenroth (gratuito)",
              "Matrix Computations — Golub & Van Loan"
            ],
            "items": [
              {
                "w": "Autovalores e autovetores: diagonalizacao",
                "s": "Autovalores autovetores diagonalizacao tutorial portugues | eigenvalues eigenvectors diagonalization | autovalores e autovetores explained for beginners | autovalores e autovetores explicação em português",
                "d": "• O que é: Av = lambda*v..\n• Conceitos-chave: Autovetor: direcao que nao muda.. Autovalor: quanto escala.. PCA usa autovetores da covariancia.. Diagonalizacao: A = PDP^-1.\n• O que estudar: diagonalizacao."
              },
              {
                "w": "SVD: Singular Value Decomposition",
                "s": "SVD singular value decomposition | SVD explained | SVD applications ML tutorial | Singular Value Decomposition tutorial portugues",
                "d": "• O que é: A = U*Sigma*V'..\n• Conceitos-chave: Decompoe qualquer matriz.. Aplicacoes: PCA, compressao de imagem, sistemas de recomendacao, reducao de dimensionalidade.\n• O que estudar: Singular Value Decomposition."
              },
              {
                "w": "Normas L1, L2, Frobenius, produto interno em espacos de funcoes",
                "s": "Normas Frobenius produto tutorial portugues | normas algebra linear tutorial | normas l1 l2 frobenius produto interno em espacos de funcoes explained for beginners | normas l1 l2 frobenius produto interno em espacos de funcoes explicação em português",
                "d": "• O que é: L1: soma dos absolutos (sparse)..\n• Conceitos-chave: L2: raiz da soma dos quadrados (Euclidiana).. Frobenius: norma de matriz.. Regularizacao: L1 = Lasso, L2 = Ridge."
              },
              {
                "w": "Decomposicoes: LU, QR, Cholesky",
                "s": "Decomposicoes Cholesky tutorial portugues | decomposicoes matrizes tutorial | decomposicoes explained for beginners | decomposicoes explicação em português",
                "d": "• O que é: LU: resolver sistemas..\n• Conceitos-chave: QR: minimos quadrados.. Cholesky: matrizes simetricas positivas definidas (muito eficiente).. Todas usadas em ML internamente.\n• O que estudar: LU, QR, Cholesky."
              },
              {
                "w": "PCA: Principal Component Analysis, reducao de dimensionalidade, variancia explicada",
                "s": "PCA principal component analysis | PCA dimensionality reduction | PCA explained variance | PCA sklearn tutorial",
                "d": "• O que é: PCA: encontrar direcoes de maxima variancia..\n• Conceitos-chave: Autovetores da covariancia = componentes principais.. Projetar dados nessas direcoes = reduzir dimensoes.. Variancia explicada: quantos PCs pra capturar 95%? Aplicacao: visualizar dados de alta dimensao, remover ruido, acelerar modelos.\n• O que estudar: Principal Component Analysis, reducao de dimensionalidade, variancia explicada."
              },
              {
                "w": "Transformacoes lineares em ML: projecoes, kernel trick, feature spaces",
                "s": "Transformacoes lineares em ML explicação português | reproducing kernel Hilbert space | transformacoes lineares em ml tutorial completo | transformacoes lineares em ml explained for beginners",
                "d": "• O que é: Kernel trick: mapear dados pra espaco de alta dimensao SEM calcular as coordenadas..\n• Conceitos-chave: RBF kernel: pontos perto ficam similares.. Polynomial kernel.. Feature space: espaco onde dados sao linearmente separaveis.. SVM + kernel = classificar dados nao-lineares.. Matematicamente elegante.\n• O que estudar: projecoes, kernel trick, feature spaces."
              }
            ]
          },
          {
            "name": "Probabilidade e Estatistica",
            "books": [
              "All of Statistics — Wasserman",
              "Estatistica Pratica p/ Cientistas de Dados — Bruce & Bruce",
              "Introduction to Probability — Blitzstein & Hwang"
            ],
            "items": [
              {
                "w": "Probabilidade: axiomas, condicional, independencia, Bayes",
                "s": "Probabilidade axiomas condicional tutorial portugues | probability axioms conditional Bayes | probabilidade explained for beginners | probabilidade explicação em português",
                "d": "• O que é: P(A|B)=P(B|A)P(A)/P(B)..\n• Conceitos-chave: Independencia: P(A e B)=P(A)*P(B).. Bayes: atualizar crencas com evidencia.. Spam filter, diagnostico medico.\n• O que estudar: axiomas, condicional, independencia, Bayes."
              },
              {
                "w": "Variaveis aleatorias: discreta, continua, PMF, PDF, CDF",
                "s": "Variaveis aleatorias discreta tutorial portugues | variaveis aleatorias tutorial | variaveis aleatorias explained for beginners | variaveis aleatorias explicação em português",
                "d": "• O que é: Discreta: dado, moeda (PMF)..\n• Conceitos-chave: Continua: altura, peso (PDF).. CDF: P(X<=x).. Esperanca E[X], variancia Var(X).. Propriedades de linearidade.\n• O que estudar: discreta, continua, PMF, PDF, CDF."
              },
              {
                "w": "Distribuicoes: Bernoulli, Binomial, Poisson, Normal, Exponencial, Uniforme",
                "s": "probability distributions Bernoulli Binomial Poisson Normal | Distribuicoes Bernoulli Binomial tutorial 2025 | distribuicoes explained for beginners | distribuicoes explicação em português",
                "d": "• O que é: Bernoulli: 1 tentativa (cara/coroa)..\n• Conceitos-chave: Binomial: N tentativas.. Poisson: eventos raros.. Normal: bell curve (CLT!).. Exponencial: tempo entre eventos.\n• O que estudar: Bernoulli, Binomial, Poisson, Normal, Exponencial, Uniforme."
              },
              {
                "w": "MLE, MAP, estimadores, viés, variancia, trade-off",
                "s": "estimadores viés variancia tutorial portugues | bias variance tradeoff tutorial | mle map estimadores vis variancia tradeoff explained for beginners | mle map estimadores vis variancia tradeoff explicação em português",
                "d": "• O que é: MLE: parametros que maximizam P(dados|theta)..\n• Conceitos-chave: MAP: MLE + prior.. Vies: erro sistematico.. Variancia: erro por ruido.. Trade-off: modelo simples (vies alto) vs complexo (variancia alta)."
              },
              {
                "w": "Testes de hipotese: p-valor, intervalo de confianca, CLT",
                "s": "Testes hipotese p-valor tutorial portugues | teste hipotese p-valor tutorial | testes de hipotese explained for beginners | testes de hipotese explicação em português",
                "d": "• O que é: H0 (nulo) vs H1 (alternativa)..\n• Conceitos-chave: p-valor: probabilidade de ver resultado tao extremo se H0 for verdade.. <0.05: rejeitar.. CLT: media amostral tende a Normal.. IC: range provavel do parametro.\n• O que estudar: p-valor, intervalo de confianca, CLT."
              },
              {
                "w": "Inferencia bayesiana: prior, likelihood, posterior, updating beliefs",
                "s": "Inferencia bayesiana explicação português | Bayes prior posterior tutorial | inferencia bayesiana explained for beginners | Inferencia bayesiana examples and practice",
                "d": "• O que é: Prior: crenca antes de ver dados..\n• Conceitos-chave: Likelihood: P(dados|hipotese).. Posterior = Prior * Likelihood / Evidence.. Updating: conforme ve mais dados, posterior se refina.. PyMC: inferencia bayesiana em Python.. Bayesiano vs frequentista: debate eterno.\n• O que estudar: prior, likelihood, posterior, updating beliefs."
              },
              {
                "w": "Rigor estatístico: p-hacking, multiple comparisons, reprodutibilidade, effect size, confidence intervals vs p-values",
                "s": "Rigor estatstico explicação português | multiple comparisons tutorial | rigor estatstico explained for beginners | Rigor estatístico examples and practice",
                "d": "• O que é: P-values são mal usados: p-hacking (testar até encontrar p<0.05)..\n• Conceitos-chave: Effect size importa mais que significância.. Reproducibility crisis é real em ML.\n• O que estudar: p-hacking, multiple comparisons, reprodutibilidade, effect size, confidence intervals vs p-values."
              }
            ]
          },
          {
            "name": "Computacao Numerica e Erros",
            "books": [
              "Numerical Recipes — Press et al.",
              "Numerical Linear Algebra — Trefethen & Bau",
              "Scientific Computing with Python — Langtangen"
            ],
            "items": [
              {
                "w": "Erros numericos: truncamento, arredondamento, estabilidade, condicionamento",
                "s": "Erros numericos truncamento tutorial portugues | numerical errors truncation rounding | erros numericos explained for beginners | erros numericos explicação em português",
                "d": "• O que é: Truncamento: cortar serie infinita (Taylor)..\n• Conceitos-chave: Arredondamento: IEEE 754 (0.1+0.2!=0.3).. Estabilidade: algoritmo amplifica erros? Condicionamento: problema e sensivel a perturbacoes? Numero de condicao da matriz: se alto, cuidado com linalg.solve.\n• O que estudar: truncamento, arredondamento, estabilidade, condicionamento."
              },
              {
                "w": "Metodos numericos: raizes (Newton-Raphson), integracao (Simpson), EDOs (Euler, RK4)",
                "s": "Metodos numericos raizes tutorial portugues | numerical methods Newton Raphson | metodos numericos explained for beginners | metodos numericos explicação em português",
                "d": "• O que é: Newton-Raphson: encontrar raiz iterativamente (x_new = x - f(x)/f'(x))..\n• Conceitos-chave: Simpson: integral numerica.. Euler: EDO mais simples (pouco preciso).. RK4: padrao pra EDOs.. scipy.integrate, scipy.optimize.. Quando formula analitica nao existe, metodo numerico resolve.\n• O que estudar: raizes (Newton-Raphson), integracao (Simpson), EDOs (Euler, RK4)."
              },
              {
                "w": "scipy: optimize, integrate, interpolate, linalg, signal, sparse",
                "s": "scipy tutorial scientific computing | scipy optimize integrate explained | scipy explicação em português | scipy examples and practice",
                "d": "• O que é: scipy.optimize: minimize, curve_fit, root..\n• Conceitos-chave: scipy.integrate: quad, solve_ivp.. scipy.interpolate: interp1d, spline.. scipy.linalg: eig, svd, solve.. scipy.signal: filtros, FFT.. scipy.sparse: matrizes enormes com muitos zeros.. Numpy+Scipy = MATLAB gratuito.\n• O que estudar: optimize, integrate, interpolate, linalg, signal, sparse."
              },
              {
                "w": "Interpolacao e ajuste de curvas: Lagrange, splines, curve fitting, minimos quadrados",
                "s": "Interpolacao ajuste curvas tutorial portugues | least squares fitting tutorial | interpolacao e ajuste de curvas explained for beginners | interpolacao e ajuste de curvas explicação em português",
                "d": "• O que é: Interpolacao: passar por todos os pontos..\n• Conceitos-chave: Lagrange: polinomio exato.. Splines: polinomios por trecho (suave).. Curve fitting: achar melhor curva que APROXIMA (nao necessariamente passa por todos).. Minimos quadrados: minimizar soma dos erros ao quadrado.. scipy.interpolate, numpy.polyfit.\n• O que estudar: Lagrange, splines, curve fitting, minimos quadrados."
              },
              {
                "w": "Sistemas lineares numericos: condicionamento, metodos iterativos (Jacobi, Gauss-Seidel)",
                "s": "Sistemas lineares numericos tutorial portugues | numerical linear algebra iterative methods | sistemas lineares numericos explained for beginners | sistemas lineares numericos explicação em português",
                "d": "• O que é: Sistemas grandes: eliminacao de Gauss e lenta (O(n3))..\n• Conceitos-chave: Metodos iterativos: Jacobi, Gauss-Seidel, gradiente conjugado — convergem pra solucao.. Condicionamento: numero de condicao alto = resultado sensivel a erros.. Matrizes esparsas: a maioria dos problemas reais.. scipy.sparse.linalg.\n• O que estudar: condicionamento, metodos iterativos (Jacobi, Gauss-Seidel)."
              },
              {
                "w": "FFT (Fast Fourier Transform): decompor sinais em frequencias, aplicacoes",
                "s": "FFT Fast Fourier Transform explicação português | Fourier transform applications | fft fast fourier transform tutorial completo | fft fast fourier transform explained for beginners",
                "d": "• O que é: FFT: O(n log n) vs DFT O(n2)..\n• Conceitos-chave: Aplicacoes: processamento de audio (equalizer), compressao (JPEG, MP3), telecomunicacoes.. Frequencia > tempo e vice-versa.. Usado em ML pra features de audio, processamento de imagens, analise de sinais de sensores.\n• O que estudar: decompor sinais em frequencias, aplicacoes."
              }
            ]
          }
        ]
      },
      {
        "name": "📡 Sinais e Sistemas",
        "topics": [
          {
            "name": "Sinais, Transformadas e Amostragem",
            "books": [
              "Signals and Systems — Alan V. Oppenheim & Alan S. Willsky",
              "Digital Signal Processing — John G. Proakis & Dimitris G. Manolakis",
              "Understanding Digital Signal Processing — Richard G. Lyons"
            ],
            "items": [
              {
                "w": "Sinais contínuos e discretos: representação, classificação (periódico, aperiódico, energia, potência)",
                "s": "Sinais contnuos e discretos explicação português | energy power signal tutorial | sinais contnuos e discretos explained for beginners | Sinais contínuos e discretos examples and practice",
                "d": "• O que é: Sinais contínuos variam no tempo (áudio)..\n• Conceitos-chave: Discretos são amostrados (digital).. Classificar ajuda a escolher ferramentas de análise.\n• O que estudar: representação, classificação (periódico, aperiódico, energia, potência)."
              },
              {
                "w": "Sistemas LTI (Lineares e Invariantes no Tempo): superposição, resposta ao impulso, convolução",
                "s": "Sistemas LTI Lineares e Invariantes no Tempo explicação português | linear time invariant tutorial | sistemas lti lineares e invariantes no tempo explained for beginners | Sistemas LTI Lineares e Invariantes no Tempo examples and practice",
                "d": "• O que é: Sistemas LTI são previsíveis: saída é convolução da entrada com resposta ao impulso..\n• Conceitos-chave: Base de filtros digitais e processamento de sinais.\n• O que estudar: superposição, resposta ao impulso, convolução."
              },
              {
                "w": "Transformada de Fourier: decompor sinal em frequências, espectro, DFT e FFT",
                "s": "Transformada de Fourier explicação português | frequency spectrum tutorial | transformada de fourier explained for beginners | Transformada de Fourier examples and practice",
                "d": "• O que é: Fourier converte sinal do domínio do tempo para frequências..\n• Conceitos-chave: FFT é algoritmo rápido (O(n log n)).. Essencial para áudio, imagens, comunicação.\n• O que estudar: decompor sinal em frequências, espectro, DFT e FFT."
              },
              {
                "w": "Teorema de Nyquist-Shannon: taxa de amostragem ≥ 2× frequência máxima, aliasing",
                "s": "Teorema de NyquistShannon explicação português | sampling theorem tutorial | teorema de nyquistshannon explained for beginners | Teorema de NyquistShannon examples and practice",
                "d": "• O que é: Para digitalizar sinal sem perda: amostrar pelo menos 2× a maior frequência..\n• Conceitos-chave: Violação causa aliasing (frequências fantasma).\n• O que estudar: taxa de amostragem ≥ 2× frequência máxima, aliasing."
              },
              {
                "w": "Transformada de Laplace: análise de sistemas contínuos, função de transferência H(s), polos e zeros",
                "s": "Transformada de Laplace explicação português | transfer function H(s) tutorial | transformada de laplace explained for beginners | Transformada de Laplace examples and practice",
                "d": "• O que é: Laplace transforma equações diferenciais em álgebra..\n• Conceitos-chave: Polos determinam estabilidade do sistema.. Zeros afetam resposta em frequência.\n• O que estudar: análise de sistemas contínuos, função de transferência H(s), polos e zeros."
              },
              {
                "w": "Transformada Z: versão discreta de Laplace, análise de filtros digitais, ROC (Region of Convergence)",
                "s": "Transformada Z explicação português | digital filter analysis tutorial | transformada z explained for beginners | Transformada Z examples and practice",
                "d": "• O que é: Transformada Z analisa sistemas discretos como Laplace analisa contínuos..\n• Conceitos-chave: Fundamental para projetar filtros digitais.\n• O que estudar: versão discreta de Laplace, análise de filtros digitais, ROC (Region of Convergence)."
              },
              {
                "w": "Convolução: operação fundamental de sistemas LTI, convolução circular vs linear, overlap-add",
                "s": "Convoluo explicação português | LTI fundamental operation | convoluo tutorial completo | convoluo explained for beginners",
                "d": "• O que é: Convolução calcula saída de sistema LTI: somar contribuições de cada amostra da entrada..\n• O que estudar: operação fundamental de sistemas LTI, convolução circular vs linear, overlap-add."
              },
              {
                "w": "Teoria da Informação: entropia de Shannon, codificação de fonte (Huffman), capacidade de canal, compressão",
                "s": "Teoria da Informao explicação português | information theory tutorial | teoria da informao explained for beginners | Teoria da Informação examples and practice",
                "d": "• O que é: Shannon definiu entropia como medida de informação..\n• Conceitos-chave: Huffman coding comprime baseado em frequência.. Capacidade de canal limita taxa máxima de comunicação confiável.\n• O que estudar: entropia de Shannon, codificação de fonte (Huffman), capacidade de canal, compressão."
              }
            ]
          },
          {
            "name": "Processamento Digital de Sinais (DSP)",
            "books": [
              "Understanding Digital Signal Processing — Richard G. Lyons",
              "The Scientist and Engineer's Guide to Digital Signal Processing — Steven W. Smith",
              "Think DSP — Allen B. Downey"
            ],
            "items": [
              {
                "w": "Filtros digitais: FIR (resposta finita) vs IIR (resposta infinita), projeto e trade-offs",
                "s": "Filtros digitais explicação português | finite infinite impulse response | filtros digitais tutorial completo | filtros digitais explained for beginners",
                "d": "• O que é: FIR: sempre estável, fase linear, mais coeficientes..\n• Conceitos-chave: IIR: menos coeficientes, pode ser instável.. Escolher baseado na aplicação.\n• O que estudar: FIR (resposta finita) vs IIR (resposta infinita), projeto e trade-offs."
              },
              {
                "w": "Filtros práticos: passa-baixa, passa-alta, passa-banda, rejeita-banda, Butterworth, Chebyshev",
                "s": "Filtros prticos explicação português | Butterworth Chebyshev tutorial | filtros prticos explained for beginners | Filtros práticos examples and practice",
                "d": "• O que é: Tipos de filtro por frequência: passa-baixa (remover ruído), passa-alta (remover DC), passa-banda (isolar faixa)..\n• Conceitos-chave: Butterworth = resposta suave.\n• O que estudar: passa-baixa, passa-alta, passa-banda, rejeita-banda, Butterworth, Chebyshev."
              },
              {
                "w": "DSP em Python: scipy.signal para filtros, numpy.fft para Fourier, librosa para áudio",
                "s": "DSP em Python explicação português | audio processing tutorial | dsp em python explained for beginners | DSP em Python examples and practice",
                "d": "• O que é: Python para DSP: scipy.signal projeta e aplica filtros, numpy.fft calcula FFT, librosa analisa áudio (espectrogramas, pitch, MFCC).\n• O que estudar: scipy.signal para filtros, numpy.fft para Fourier, librosa para áudio."
              },
              {
                "w": "Espectrograma: representação tempo-frequência, STFT (Short-Time Fourier Transform), janelas",
                "s": "Espectrograma explicação português | short-time Fourier tutorial | espectrograma explained for beginners | Espectrograma examples and practice",
                "d": "• O que é: Espectrograma mostra como frequências mudam no tempo..\n• Conceitos-chave: STFT aplica FFT em janelas deslizantes.. Janelas (Hann, Hamming) reduzem vazamento espectral.\n• O que estudar: representação tempo-frequência, STFT (Short-Time Fourier Transform), janelas."
              },
              {
                "w": "Aplicações de DSP: compressão de áudio (MP3), reconhecimento de voz, radar, telecomunicação, imagens médicas",
                "s": "Aplicaes de DSP explicação português | audio compression MP3 tutorial | aplicaes de dsp explained for beginners | Aplicações de DSP examples and practice",
                "d": "• O que é: DSP está em tudo: MP3 comprime via masking psicoacústico, reconhecimento de voz usa MFCC+ML, radar processa eco, imagens médicas filtram ruído.\n• O que estudar: compressão de áudio (MP3), reconhecimento de voz, radar, telecomunicação, imagens médicas."
              },
              {
                "w": "ADC e DAC: conversão analógico-digital e digital-analógico, resolução (bits), taxa de amostragem",
                "s": "ADC e DAC explicação português | analog digital conversion | adc e dac tutorial completo | adc e dac explained for beginners",
                "d": "• O que é: ADC converte sinal contínuo em discreto (sensor → número)..\n• Conceitos-chave: DAC faz o inverso (número → som).. Resolução (12/16/24 bits) determina precisão.\n• O que estudar: conversão analógico-digital e digital-analógico, resolução (bits), taxa de amostragem."
              },
              {
                "w": "Projeto prático: analisador de espectro de áudio em tempo real (microfone → FFT → visualização)",
                "s": "Projeto prtico explicação português | spectrum analyzer tutorial | projeto prtico explained for beginners | Projeto prático examples and practice",
                "d": "• O que é: Capturar áudio do microfone, aplicar FFT, visualizar espectro em tempo real com matplotlib ou web..\n• Conceitos-chave: Projeto que integra todos os conceitos.\n• O que estudar: analisador de espectro de áudio em tempo real (microfone → FFT → visualização)."
              }
            ]
          }
        ]
      },
      {
        "name": "🤖 Introducao a IA & ML",
        "topics": [
          {
            "name": "Data Science: NumPy, Pandas, Visualizacao",
            "books": [
              "Python for Data Analysis — Wes McKinney",
              "Storytelling with Data — Knaflic",
              "Estatistica Pratica p/ Cientistas de Dados — Bruce & Bruce"
            ],
            "items": [
              {
                "w": "NumPy: arrays, broadcasting, operacoes vetorizadas",
                "s": "NumPy arrays broadcasting explained | numpy linear algebra tutorial | numpy explicação em português | NumPy examples and practice",
                "d": "• O que é: 10-100x mais rapido que listas..\n• Conceitos-chave: Broadcasting, reshaping, random, linalg.\n• O que estudar: arrays, broadcasting, operacoes vetorizadas."
              },
              {
                "w": "Pandas: DataFrame, limpeza, merge, groupby, pivot",
                "s": "Pandas DataFrame limpeza explained | pandas dataframe groupby tutorial | pandas explicação em português | Pandas examples and practice",
                "d": "• O que é: read_csv, fillna, dropna, groupby, merge, pivot_table, apply.\n• Conceitos-chave: Datetime.\n• O que estudar: DataFrame, limpeza, merge, groupby, pivot."
              },
              {
                "w": "Matplotlib + Seaborn: graficos e visualizacao",
                "s": "Matplotlib  Seaborn explicação português | Matplotlib Seaborn graficos explained | matplotlib + seaborn tutorial completo | Matplotlib + Seaborn examples and practice",
                "d": "• O que é: plot, bar, scatter, hist, heatmap, boxplot, pairplot..\n• Conceitos-chave: Sempre rotule eixos.\n• O que estudar: graficos e visualizacao."
              },
              {
                "w": "EDA e Estatistica: distribuicoes, correlacoes, Bayes",
                "s": "Estatistica distribuicoes correlacoes explained | EDA e Estatistica explicação português | eda e estatistica tutorial completo | EDA e Estatistica examples and practice",
                "d": "• O que é: Media, mediana, desvio padrao, correlacao, outliers..\n• Conceitos-chave: P(A|B)=P(B|A)P(A)/P(B).. Normal, Binomial, Poisson.\n• O que estudar: distribuicoes, correlacoes, Bayes."
              },
              {
                "w": "Limpeza de dados: valores faltantes, outliers, duplicatas, inconsistencias",
                "s": "Limpeza de dados explicação português | handling missing values outliers | limpeza de dados tutorial completo | limpeza de dados explained for beginners",
                "d": "• O que é: 80% do tempo de data science e limpeza..\n• Conceitos-chave: Missing values: fillna(media), dropna(), ou modelo pra prever.. Outliers: IQR method, Z-score.. Duplicatas: df.duplicated().. Inconsistencias: 'SP' vs 'sp' vs 'Sao Paulo'.. Sempre EDA ANTES de modelar.\n• Exemplos: dtypes errados: '42' como string..\n• O que estudar: valores faltantes, outliers, duplicatas, inconsistencias."
              },
              {
                "w": "Feature Engineering: criar features, encoding categorico, datetime features",
                "s": "Feature Engineering explicação português | encoding categorico one-hot label | feature engineering tutorial completo | feature engineering explained for beginners",
                "d": "• O que é: Criar features: idade a partir de data_nascimento..\n• Conceitos-chave: Encoding: one-hot (get_dummies), label encoding, target encoding.. Datetime: dia_semana, hora, is_weekend, dias_desde_evento.. Texto: len, word_count, has_emoji.. Feature engineering bom > modelo complexo.. Dominio do problema importa.\n• O que estudar: criar features, encoding categorico, datetime features."
              }
            ]
          },
          {
            "name": "ML Classico (Scikit-Learn)",
            "books": [
              "Hands-On Machine Learning — Aurelien Geron",
              "ISLR — James et al. (gratuito)",
              "Pattern Recognition & ML — Bishop"
            ],
            "items": [
              {
                "w": "Tipos: supervisionado, nao-sup, semi, RL",
                "s": "Tipos supervisionado nao-sup tutorial portugues | supervised unsupervised tutorial | tipos explained for beginners | tipos explicação em português",
                "d": "• O que é: Supervisionado: com rotulos..\n• Conceitos-chave: Nao-sup: sem.. Semi: poucos.. RL: recompensas.\n• O que estudar: supervisionado, nao-sup, semi, RL."
              },
              {
                "w": "Regressao Linear e Logistica (do zero + sklearn)",
                "s": "Regressao Linear Logistica tutorial portugues | linear logistic regression scratch | regressao linear e logistica do zero + sklearn explained for beginners | regressao linear e logistica do zero + sklearn explicação em português",
                "d": "• O que é: Linear: y=wx+b, MSE, gradiente..\n• Conceitos-chave: Logistica: sigmoid, classificacao.."
              },
              {
                "w": "KNN, SVM, Naive Bayes, Clustering (K-Means, DBSCAN)",
                "s": "Naive Bayes Clustering tutorial portugues | KNN SVM naive bayes clustering | knn svm naive bayes clustering kmeans dbscan explained for beginners | knn svm naive bayes clustering kmeans dbscan explicação em português",
                "d": "• O que é: KNN: vizinhos..\n• Conceitos-chave: SVM: hiperplano.. NB: probabilistico.. K-Means: centroides.. DBSCAN: densidade."
              },
              {
                "w": "Arvores, Random Forest, XGBoost/LightGBM",
                "s": "Arvores Random Forest tutorial portugues | decision tree random forest XGBoost | arvores random forest xgboost/lightgbm explained for beginners | arvores random forest xgboost/lightgbm explicação em português",
                "d": "• O que é: Gini/entropia..\n• Conceitos-chave: Bagging (RF) vs Boosting (XGB).. Muito usados em producao e Kaggle."
              },
              {
                "w": "Feature Engineering, Scaling, Regularizacao L1/L2",
                "s": "Feature Engineering Scaling tutorial portugues | regularization L1 L2 tutorial | feature engineering scaling regularizacao l1/l2 explained for beginners | feature engineering scaling regularizacao l1/l2 explicação em português",
                "d": "• O que é: StandardScaler/MinMax..\n• Conceitos-chave: L1(Lasso) L2(Ridge) ElasticNet.. Dropout, early stopping."
              },
              {
                "w": "Pipeline, Cross-Validation, GridSearch, Metricas",
                "s": "Pipeline CrossValidation GridSearch Metricas explicação português | Pipeline Cross-Validation GridSearch tutorial 2025 | pipeline crossvalidation gridsearch metricas explained for beginners | Pipeline CrossValidation GridSearch Metricas examples and practice",
                "d": "• O que é: Pipeline encadeia..\n• Conceitos-chave: Grid/RandomSearch.. Accuracy, Precision, Recall, F1, ROC-AUC."
              }
            ]
          },
          {
            "name": "ML Aplicado & Automacao com IA",
            "books": [
              "Applied Machine Learning — Kelleher & Tierney",
              "Hands-On Machine Learning — Geron",
              "AI for Robotics — Thrun (Udacity, gratuito)"
            ],
            "items": [
              {
                "w": "Projeto ML end-to-end: problema > dados > modelo > deploy > monitorar",
                "s": "Projeto end-to-end problema tutorial portugues | machine learning project lifecycle | projeto ml endtoend explained for beginners | projeto ml endtoend explicação em português",
                "d": "• O que é: Definir problema (classificacao? regressao?)..\n• Conceitos-chave: Coletar/limpar dados.. Feature engineering.. Treinar modelos.. Avaliar (cross-val).. Kaggle pra praticar.\n• O que estudar: problema > dados > modelo > deploy > monitorar."
              },
              {
                "w": "Automacao com Python: scrapers, bots, ETL, schedulers",
                "s": "Automacao Python scrapers tutorial portugues | python automation scrapers bots ETL | automacao com python explained for beginners | automacao com python explicação em português",
                "d": "• O que é: Scrapers: BeautifulSoup, Selenium, Playwright..\n• Conceitos-chave: Bots: Telegram, Discord (python-telegram-bot).. ETL: extrair-transformar-carregar dados.. Schedule: APScheduler, cron.. Airflow pra pipelines maiores.\n• O que estudar: scrapers, bots, ETL, schedulers."
              },
              {
                "w": "Visao computacional basica: OpenCV, deteccao, classificacao de imagens",
                "s": "Visao computacional basica explicação português | Visao computacional basica explained | visao computacional basica tutorial completo | Visao computacional basica examples and practice",
                "d": "• O que é: OpenCV: ler/escrever imagens, filtros, deteccao de bordas (Canny), contornos, transformacoes..\n• Conceitos-chave: Classificacao: treinar CNN simples (MNIST, CIFAR).. Aplicacao: contar objetos, detectar defeitos.\n• O que estudar: OpenCV, deteccao, classificacao de imagens."
              },
              {
                "w": "Processamento de sinais: FFT, filtros digitais, audio, sensores",
                "s": "Processamento sinais filtros tutorial portugues | audio signal processing tutorial | processamento de sinais explained for beginners | processamento de sinais explicação em português",
                "d": "• O que é: FFT: decomor sinal em frequencias..\n• Conceitos-chave: Filtros digitais: passa-baixa, passa-alta.. scipy.signal.. Aplicacao: processar audio, filtrar ruido de sensores, vibracoes em robos.\n• O que estudar: FFT, filtros digitais, audio, sensores."
              },
              {
                "w": "IA na borda (Edge AI): TensorFlow Lite, ONNX, inferencia em microcontroladores",
                "s": "borda Edge TensorFlow tutorial portugues | edge AI TensorFlow Lite tutorial | ia na borda edge ai explained for beginners | ia na borda edge ai explicação em português",
                "d": "• O que é: TFLite: modelo comprimido pra mobile..\n• Conceitos-chave: ONNX: formato universal.. TinyML: ML em ESP32/Arduino (deteccao de som, gesto).. Quantizacao: float32>int8 pra caber em hardware limitado.\n• O que estudar: TensorFlow Lite, ONNX, inferencia em microcontroladores."
              },
              {
                "w": "AutoML: ferramentas automaticas (AutoSklearn, FLAML, H2O), quando usar",
                "s": "AutoML machine learning tutorial | AutoML tools AutoSklearn FLAML | automl explained for beginners | automl explicação em português",
                "d": "• O que é: AutoML: automatizar selecao de modelo, hiperparametros, features..\n• Conceitos-chave: AutoSklearn, FLAML (Microsoft), H2O.. Bom pra baseline rapido.. Nao substitui entendimento — voce precisa saber por que o modelo funciona..\n• Exemplos: Use como ponto de partida, depois refine manualmente.\n• O que estudar: ferramentas automaticas (AutoSklearn, FLAML, H2O), quando usar."
              }
            ]
          },
          {
            "name": "Dashboards e Visualizacao pra Negocios",
            "books": [
              "Storytelling with Data — Cole Knaflic",
              "The Big Book of Dashboards — Wexler, Shaffer & Cotgreave",
              "Information Dashboard Design — Stephen Few"
            ],
            "items": [
              {
                "w": "Storytelling com dados: narrativa, audiencia, escolher o grafico certo",
                "s": "Storytelling dados narrativa tutorial portugues | data visualization choosing chart type | storytelling com dados explained for beginners | storytelling com dados explicação em português",
                "d": "• O que é: Nao mostre dados — conte uma HISTORIA..\n• Conceitos-chave: Audiencia: quem vai ver? (C-level quer resumo, analista quer detalhe).. Grafico certo: comparacao (bar), tendencia (line), composicao (pie/stacked), distribuicao (histogram), relacao (scatter).. Menos e mais.. Remova chart junk.\n• O que estudar: narrativa, audiencia, escolher o grafico certo."
              },
              {
                "w": "Ferramentas de BI: Metabase, Tableau, Power BI, Looker, Streamlit",
                "s": "Ferramentas Metabase Tableau tutorial portugues | business intelligence tools | ferramentas de bi explained for beginners | ferramentas de bi explicação em português",
                "d": "• O que é: Metabase: open-source, facil (SQL ou click)..\n• Conceitos-chave: Tableau: poderoso, caro.. Power BI: Microsoft (integra com Excel/Azure).. Looker: Google (LookML).. Streamlit: dashboard em Python (pra devs).. Pra empresa: Metabase ou Looker.\n• Exemplos: Pra prototipo rapido: Streamlit..\n• O que estudar: Metabase, Tableau, Power BI, Looker, Streamlit."
              },
              {
                "w": "SQL pra analytics: window functions, CTEs, pivots, date operations",
                "s": "analytics window functions tutorial portugues | analytical SQL queries tutorial | sql pra analytics explained for beginners | sql pra analytics explicação em português",
                "d": "• O que é: Window functions: ROW_NUMBER, RANK, LAG, LEAD, running totals..\n• Conceitos-chave: CTEs: legibilidade.. Date: DATE_TRUNC, EXTRACT, intervals.. Pivoting: CASE WHEN ou CROSSTAB.. Cohort analysis em SQL puro.. SQL analytics = skill mais pedida em data.\n• O que estudar: window functions, CTEs, pivots, date operations."
              },
              {
                "w": "Streamlit: criar dashboard interativo em Python em minutos",
                "s": "Streamlit dashboard data tutorial | Streamlit interactive tutorial | streamlit explained for beginners | streamlit explicação em português",
                "d": "• O que é: pip install streamlit..\n• Conceitos-chave: st.title('Meu App').. st.dataframe(df).. st.line_chart(data).. st.selectbox(), st.slider().. streamlit run app.py.. Deploy gratis: Streamlit Cloud.. Em 50 linhas de Python voce tem um dashboard interativo.. Melhor pra devs que Tableau.\n• O que estudar: criar dashboard interativo em Python em minutos."
              },
              {
                "w": "Design de dashboard: hierarquia visual, KPIs no topo, filtros, drill-down",
                "s": "Design de dashboard explicação português | dashboard best practices tutorial | design de dashboard explained for beginners | Design de dashboard examples and practice",
                "d": "• O que é: Topo: KPIs principais (numeros grandes)..\n• Conceitos-chave: Meio: graficos de tendencia.. Baixo: detalhes/tabelas.. Filtros: data, regiao, categoria.. Drill-down: clicar pra ver detalhe.. Cores: vermelho=ruim, verde=bom (cuidado daltonicos).. Menos graficos = mais clareza.. Pergunte: que decisao esse dashboard ajuda a tomar?.\n• O que estudar: hierarquia visual, KPIs no topo, filtros, drill-down."
              },
              {
                "w": "Metricas de negocio: como escolher o que medir, vanity metrics vs actionable metrics",
                "s": "Metricas de negocio explicação português | business metrics vanity vs actionable | metricas de negocio tutorial completo | metricas de negocio explained for beginners",
                "d": "• O que é: Vanity metrics: page views, downloads (parecem bons, nao informam decisao)..\n• Conceitos-chave: Actionable: retention, NPS, conversion rate, revenue per user.. North Star Metric: 1 metrica que resume valor do produto (Airbnb: noites reservadas).. Correlation != causation.. Sempre pergunte: e o que faco com esse numero?.\n• O que estudar: como escolher o que medir, vanity metrics vs actionable metrics."
              }
            ]
          }
        ]
      },
      {
        "name": "🌐 Full-Stack",
        "topics": [
          {
            "name": "Frontend: React + TypeScript",
            "books": [
              "Learning React — Banks & Porcello",
              "Programming TypeScript — Boris Cherny",
              "Road to React — Robin Wieruch"
            ],
            "items": [
              {
                "w": "React: componentes, JSX, props, children, composicao",
                "s": "React componentes props explained | react components JSX props | react tutorial completo | react explicação em português",
                "d": "• O que é: Componente = funcao que retorna JSX..\n• Conceitos-chave: Props: dados do pai.. Children: conteudo aninhado.. Composicao > heranca: combinar componentes pequenos pra criar complexos.. Key em listas.\n• O que estudar: componentes, JSX, props, children, composicao."
              },
              {
                "w": "State e hooks: useState, useEffect, useRef, useCallback, useMemo",
                "s": "State hooks useState tutorial portugues | react hooks useState useEffect useRef | state e hooks explained for beginners | state e hooks explicação em português",
                "d": "• O que é: useState: estado local..\n• Conceitos-chave: useEffect: side effects (fetch, timers) + cleanup.. useRef: referencia ao DOM ou valor persistente.. useCallback: memoizar funcao.. useMemo: memoizar valor.. Rules of hooks: top level, so em componentes/hooks.\n• O que estudar: useState, useEffect, useRef, useCallback, useMemo."
              },
              {
                "w": "State management: Context API, Zustand, Redux Toolkit, quando usar cada",
                "s": "State management Context tutorial portugues | react state management Zustand Redux | state management explained for beginners | state management explicação em português",
                "d": "• O que é: Context: estado simples compartilhado (tema, auth)..\n• Conceitos-chave: Zustand: leve, simples, popular.. Redux Toolkit: robusto, pra apps grandes.. Server state: React Query/TanStack Query (cache de API).. Regra: comece com useState, escale conforme precisar.\n• O que estudar: Context API, Zustand, Redux Toolkit, quando usar cada."
              },
              {
                "w": "TypeScript com React: tipos, interfaces, generics, props tipadas",
                "s": "TypeScript com React explicação português | TypeScript React tipos explained | typescript com react tutorial completo | TypeScript com React examples and practice",
                "d": "• O que é: interface Props { name: string; age?: number }..\n• Conceitos-chave: Generics: <T>(items: T[]) => T.. Tipar eventos: React.ChangeEvent<HTMLInputElement>.. Tipar hooks: useState<User | null>(null).. TS pega bugs antes de rodar.\n• O que estudar: tipos, interfaces, generics, props tipadas."
              },
              {
                "w": "Tailwind CSS, CSS Modules, Styled Components: estilizacao moderna",
                "s": "Tailwind Modules Styled tutorial portugues | CSS Modules vs Styled Components | tailwind css css modules styled components explained for beginners | tailwind css css modules styled components explicação em português",
                "d": "• O que é: Tailwind: utility-first (className='flex gap-4 p-2')..\n• Conceitos-chave: CSS Modules: escopo local.. Styled Components: CSS-in-JS.. Tailwind domina o mercado em 2025.. Responsive: sm: md: lg:.. Dark mode: dark:.\n• O que estudar: estilizacao moderna."
              },
              {
                "w": "React Router, Next.js (SSR/SSG), formularios (React Hook Form)",
                "s": "React Router Nextjs SSRSSG formularios React Hook Form explicação português | React Router Next.js explained | react router nextjs ssr/ssg formularios react hook form tutorial completo | React Router Nextjs SSR/SSG formularios React examples and practice",
                "d": "• O que é: React Router: SPA navigation..\n• Conceitos-chave: Next.js: SSR (server-side rendering) + SSG (static) + API routes + App Router.. React Hook Form + Zod: formularios com validacao eficiente.. Next.js e o framework React mais usado em producao."
              },
              {
                "w": "Testes frontend: Jest + React Testing Library, Storybook, Cypress/Playwright",
                "s": "Testes frontend Jest tutorial portugues | Storybook component testing | testes frontend explained for beginners | testes frontend explicação em português",
                "d": "• O que é: RTL: testar comportamento (nao implementacao)..\n• Conceitos-chave: Storybook: documentar + testar componentes visualmente.. Cypress/Playwright: e2e.. Coverage: jest --coverage.. Testar: renders, interacoes, async, error states.\n• O que estudar: Jest + React Testing Library, Storybook, Cypress/Playwright."
              },
              {
                "w": "Next.js em profundidade: App Router, Server Components, SSR/SSG/ISR, API routes, middleware, deploy na Vercel",
                "s": "Nextjs em profundidade explicação português | Server Components tutorial | nextjs em profundidade explained for beginners | Nextjs em profundidade examples and practice",
                "d": "• O que é: Next.js é o framework React dominante: Server Components reduzem JS no cliente, SSR/SSG para performance/SEO, API routes para backend, deploy trivial na Vercel.\n• O que estudar: App Router, Server Components, SSR/SSG/ISR, API routes, middleware, deploy na Vercel."
              }
            ]
          },
          {
            "name": "Backend: APIs REST",
            "books": [
              "Node.js Design Patterns — Casciaro",
              "Flask Web Development — Grinberg",
              "Designing Data-Intensive Apps — Kleppmann"
            ],
            "items": [
              {
                "w": "REST API: Express.js ou FastAPI, CRUD, status codes",
                "s": "REST API tutorial express fastapi | REST Express.js FastAPI explained | rest api explicação em português | REST API examples and practice",
                "d": "• O que é: GET POST PUT DELETE..\n• Conceitos-chave: 200 201 400 404 500.. Error handling.\n• O que estudar: Express.js ou FastAPI, CRUD, status codes."
              },
              {
                "w": "Estrutura de projeto: rotas, controllers, services, repositories",
                "s": "Estrutura projeto rotas tutorial portugues | clean architecture API tutorial | estrutura de projeto explained for beginners | estrutura de projeto explicação em português",
                "d": "• O que é: Separar responsabilidades: routes (URLs) > controllers (receber request) > services (logica de negocio) > repositories (acesso a dados)..\n• Conceitos-chave: Cada camada so conhece a proxima.. Facilita testes e manutencao.\n• O que estudar: rotas, controllers, services, repositories."
              },
              {
                "w": "Error handling, logging estruturado, middleware de erros",
                "s": "Error handling logging tutorial portugues | express error middleware tutorial | error handling logging estruturado middleware de erros explained for beginners | error handling logging estruturado middleware de erros explicação em português",
                "d": "• O que é: Middleware de erro: catch-all no final..\n• Conceitos-chave: Erros operacionais (404, validation) vs programacao (bug).. Logging: winston/pino (Node), loguru (Python).. Structured: JSON com timestamp, level, request_id.. NUNCA exponha stack trace pro cliente."
              },
              {
                "w": "Auth (JWT/OAuth), validacao, WebSockets, Swagger",
                "s": "Auth JWTOAuth validacao WebSockets Swagger explicação português | JWT authentication tutorial | auth jwt/oauth validacao websockets swagger explained for beginners | Auth JWT/OAuth validacao WebSockets Swagger examples and practice",
                "d": "• O que é: JWT: tokens stateless..\n• Conceitos-chave: OAuth: login social.. Validacao: Zod/Pydantic.. Swagger: docs.. WebSocket: real-time."
              },
              {
                "w": "Rate limiting, CORS, helmet, sanitizacao de input",
                "s": "Rate limiting CORS helmet sanitizacao de input explicação português | helmet security headers tutorial | rate limiting cors helmet sanitizacao de input explained for beginners | Rate limiting CORS helmet sanitizacao de inpu examples and practice",
                "d": "• O que é: Rate limit: express-rate-limit / slowapi..\n• Conceitos-chave: CORS: quem pode acessar sua API.. Helmet: headers de seguranca.. Sanitizar input: nunca confiar no cliente.. Validacao: Zod/Joi (Node), Pydantic (Python).. Defense in depth."
              },
              {
                "w": "Deploy de API: Docker, variáveis de ambiente, health checks, graceful shutdown",
                "s": "Deploy Docker variáveis tutorial portugues | environment variables production | deploy de api explained for beginners | deploy de api explicação em português",
                "d": "• O que é: Dockerfile pra API..\n• Conceitos-chave: .env pra config (nunca hardcode secrets).. Health check: GET /health retorna 200.. Graceful shutdown: terminar requests em andamento antes de morrer.. 12-factor app: metodologia pra apps cloud-native.\n• O que estudar: Docker, variáveis de ambiente, health checks, graceful shutdown."
              }
            ]
          },
          {
            "name": "Banco de Dados Intermediario",
            "books": [
              "PostgreSQL Up and Running — Obe & Hsu",
              "MongoDB Definitive Guide — Bradshaw",
              "Redis in Action — Carlson"
            ],
            "items": [
              {
                "w": "PostgreSQL avancado: indices, EXPLAIN ANALYZE, JSONB, views materializadas",
                "s": "PostgreSQL avancado indices tutorial portugues | PostgreSQL indexes explain analyze | postgresql avancado explained for beginners | postgresql avancado explicação em português",
                "d": "• O que é: B-tree (padrao), GIN (full-text, JSONB), GiST (geometria)..\n• Conceitos-chave: EXPLAIN ANALYZE: ver plano de execucao.. JSONB: semi-estruturado dentro do relacional.. Views materializadas: cache de query complexa.\n• O que estudar: indices, EXPLAIN ANALYZE, JSONB, views materializadas."
              },
              {
                "w": "ORM: Prisma (JS) / SQLAlchemy (Py), migrations, seeders",
                "s": "ORM Prisma SQLAlchemy tutorial | database migrations tutorial | ORM vs raw SQL tutorial | Prisma SQLAlchemy migrations explained",
                "d": "• O que é: ORM: mapeia tabela>classe, linha>objeto..\n• Conceitos-chave: Prisma: schema declarativo, auto-complete.. SQLAlchemy: flexivel.. Seeders: dados iniciais.\n• Exemplos: Migrations: versionar mudancas no schema (como git pro banco)..\n• O que estudar: Prisma (JS) / SQLAlchemy (Py), migrations, seeders."
              },
              {
                "w": "Modelagem avancada: heranca, polimorfismo, soft delete, audit trail",
                "s": "Modelagem avancada heranca tutorial portugues | database design patterns tutorial | modelagem avancada explained for beginners | modelagem avancada explicação em português",
                "d": "• O que é: Heranca: single-table, class-table, concrete..\n• Conceitos-chave: Soft delete: deleted_at ao inves de apagar.. Audit trail: quem mudou o que quando.. Timestamps: created_at, updated_at em toda tabela.\n• O que estudar: heranca, polimorfismo, soft delete, audit trail."
              },
              {
                "w": "NoSQL: MongoDB (documentos), Redis (cache + pub/sub + filas)",
                "s": "NoSQL MongoDB documentos explained | Redis cache patterns tutorial | nosql explicação em português | NoSQL examples and practice",
                "d": "• O que é: MongoDB: documentos flexiveis (JSON), bom pra dados heterogeneos..\n• Conceitos-chave: Redis: cache sub-ms, pub/sub, filas, rate limiting, sessoes.. Quando NoSQL: dados nao-relacionais, cache, tempo real.\n• O que estudar: MongoDB (documentos), Redis (cache + pub/sub + filas)."
              },
              {
                "w": "Transacoes ACID, isolamento, locks, deadlocks, connection pooling",
                "s": "Transacoes ACID isolamento tutorial portugues | ACID transactions isolation levels | transacoes acid isolamento locks deadlocks connection pooling explained for beginners | transacoes acid isolamento locks deadlocks connection pooling explicação em português",
                "d": "• O que é: ACID: Atomicidade, Consistencia, Isolamento, Durabilidade..\n• Conceitos-chave: Niveis: Read Uncommitted < Read Committed < Repeatable Read < Serializable.. Deadlock: 2 transacoes esperando uma pela outra.. PgBouncer: pool de conexoes."
              },
              {
                "w": "Data warehousing intro: OLTP vs OLAP, Star Schema, desnormalizacao",
                "s": "Data warehousing intro tutorial portugues | star schema dimensional modeling | data warehousing intro explained for beginners | data warehousing intro explicação em português",
                "d": "• O que é: OLTP: transacional (app)..\n• Conceitos-chave: OLAP: analitico (BI).. Star schema: fato + dimensoes.. Desnormalizar pra leitura rapida.. Ferramentas: BigQuery, Redshift, Snowflake.. dbt pra transformacoes.\n• O que estudar: OLTP vs OLAP, Star Schema, desnormalizacao."
              }
            ]
          },
          {
            "name": "APIs Avancadas: GraphQL, gRPC, Real-time",
            "books": [
              "Learning GraphQL — Banks & Porcello",
              "gRPC Up and Running — Indrasiri & Kuruppu",
              "High Performance Browser Networking — Grigorik (gratuito)"
            ],
            "items": [
              {
                "w": "GraphQL: schema, queries, mutations, subscriptions, resolvers, Apollo/Relay",
                "s": "GraphQL schema resolvers tutorial | GraphQL schema queries explained | graphql explicação em português | GraphQL examples and practice",
                "d": "• O que é: Schema-first: definir types e queries..\n• Conceitos-chave: Client pede EXATAMENTE o que quer (sem over/under-fetching).. Mutations: escrita.. Subscriptions: real-time (WebSocket).. Resolvers: funcoes que buscam dados.. Apollo Server + Apollo Client.. N+1 problem: DataLoader.\n• O que estudar: schema, queries, mutations, subscriptions, resolvers, Apollo/Relay."
              },
              {
                "w": "gRPC: Protocol Buffers, service definition, streaming, quando usar",
                "s": "Protocol Buffers tutorial | gRPC explicação português | grpc explained for beginners | gRPC examples and practice",
                "d": "• O que é: gRPC: RPC framework (Google)..\n• Conceitos-chave: Protocol Buffers: serializacao binaria (menor e mais rapido que JSON).. Service definition em .proto.. Streaming: unary, server, client, bidirectional.. Quando: comunicacao entre microservicos (interno).. REST: clientes externos/browsers.\n• O que estudar: Protocol Buffers, service definition, streaming, quando usar."
              },
              {
                "w": "WebSockets em profundidade: Socket.io, rooms, scaling, heartbeat",
                "s": "WebSockets em profundidade explicação português | WebSockets profundidade Socket.io explained | websockets em profundidade tutorial completo | WebSockets em profundidade examples and practice",
                "d": "• O que é: WebSocket: conexao persistente bidirecional..\n• Conceitos-chave: Socket.io: abstrai + fallbacks + rooms + namespaces.. Rooms: agrupar conexoes (chat por sala).. Scaling: Redis adapter (multiplos servidores).. Heartbeat: detectar desconexao.. Use cases: chat, live updates, gaming, collaboration.\n• O que estudar: Socket.io, rooms, scaling, heartbeat."
              },
              {
                "w": "Server-Sent Events (SSE), webhooks, long polling, comparacao de padroes real-time",
                "s": "ServerSent Events SSE webhooks long polling comparacao de padroes realtime explicação português | Server-Sent Events webhooks explained | serversent events sse webhooks long polling comparacao de padroes realtime tutorial completo | ServerSent Events SSE webhooks long polling c examples and practice",
                "d": "• O que é: SSE: servidor envia eventos (1 direcao, HTTP simples)..\n• Conceitos-chave: Webhooks: servidor chama URL quando evento acontece (GitHub, Stripe).. Long polling: request que espera resposta (fallback).. Comparacao: WebSocket (bidirecional) > SSE (servidor>cliente) > polling (simples).. Escolha pelo use case."
              },
              {
                "w": "API versioning: URL path, header, query param, estrategias de deprecacao",
                "s": "API versioning explicação português | API deprecation strategy tutorial | api versioning explained for beginners | API versioning examples and practice",
                "d": "• O que é: URL: /api/v1/users (mais comum)..\n• Conceitos-chave: Header: Accept: application/vnd.api+json;version=2.. Query: ?version=2.. Deprecacao: anunciar com antecedencia, sunset header, manter versao antiga por X meses.. Breaking change: sempre nova versao.. Backward compatibility: adicionar campos, nao remover.\n• O que estudar: URL path, header, query param, estrategias de deprecacao."
              },
              {
                "w": "Rate limiting, throttling, pagination: cursor vs offset, caching de API",
                "s": "Rate limiting throttling pagination explicação português | API caching strategies tutorial | rate limiting throttling pagination explained for beginners | Rate limiting throttling pagination examples and practice",
                "d": "• O que é: Rate limit: X requests/minuto por IP/token (429 Too Many Requests)..\n• Conceitos-chave: Throttling: desacelerar gradualmente.. Pagination: offset (?page=2&limit=20) vs cursor (?cursor=abc123, melhor pra dados que mudam).. Cache: ETag, Cache-Control, Redis.. API bem projetada = clientes felizes.\n• O que estudar: cursor vs offset, caching de API."
              }
            ]
          }
        ]
      },
      {
        "name": "🎮 Computacao Grafica (Intro)",
        "topics": [
          {
            "name": "Fundamentos de CG",
            "books": [
              "Fundamentals of Computer Graphics — Marschner & Shirley",
              "WebGL Programming Guide — Matsuda & Lea",
              "OpenGL Programming Guide — Shreiner et al."
            ],
            "items": [
              {
                "w": "Pipeline grafico: vertices > rasterizacao > fragmentos > pixels",
                "s": "Pipeline grafico vertices tutorial portugues | rasterization vertex fragment shader | pipeline grafico explained for beginners | pipeline grafico explicação em português",
                "d": "• O que é: Dados 3D > transformar (model/view/projection) > recortar > rasterizar (triangulos > pixels) > shaders > tela..\n• Conceitos-chave: GPU faz tudo isso em paralelo.. Entender o pipeline = entender a GPU.\n• O que estudar: vertices > rasterizacao > fragmentos > pixels."
              },
              {
                "w": "Transformacoes: translacao, rotacao, escala, matrizes 4x4, projecao",
                "s": "Transformacoes translacao rotacao tutorial portugues | projection perspective orthographic | transformacoes explained for beginners | transformacoes explicação em português",
                "d": "• O que é: Matrizes 4x4 (homogeneas)..\n• Conceitos-chave: Model: posicionar objeto.. View: posicionar camera.. Projection: perspectiva ou ortografica.. Algebra linear aplicada!.\n• O que estudar: translacao, rotacao, escala, matrizes 4x4, projecao."
              },
              {
                "w": "Shaders: GLSL, vertex shader, fragment shader, iluminacao (Phong)",
                "s": "vertex fragment shader tutorial | Phong lighting model tutorial | shaders explained for beginners | shaders explicação em português",
                "d": "• O que é: Vertex shader: transforma vertices..\n• Conceitos-chave: Fragment shader: calcula cor de cada pixel.. GLSL: linguagem de shaders.. Phong: ambient + diffuse + specular.. Roda na GPU (massivamente paralelo).\n• O que estudar: GLSL, vertex shader, fragment shader, iluminacao (Phong)."
              },
              {
                "w": "WebGL / Three.js: 3D no navegador, projeto pratico",
                "s": "WebGL  Threejs explicação português | WebGL Three.js navegador explained | webgl / threejs tutorial completo | WebGL / Threejs examples and practice",
                "d": "• O que é: Three.js: abstrai WebGL..\n• Conceitos-chave: Scene, Camera, Renderer, Mesh, Material, Light.. Interacao com mouse.. Animacao com requestAnimationFrame.. Projeto: visualizador 3D, jogo simples.\n• O que estudar: 3D no navegador, projeto pratico."
              },
              {
                "w": "Ray tracing intro, texturas, GPU computing (CUDA conceito)",
                "s": "tracing intro texturas tutorial portugues | CUDA GPU computing intro tutorial | ray tracing intro texturas gpu computing cuda conceito explained for beginners | ray tracing intro texturas gpu computing cuda conceito explicação em português",
                "d": "• O que é: Ray tracing: simular luz fisicamente (reflexao, refracao, sombras)..\n• Conceitos-chave: Mais realista, mais lento.. Texturas: imagem mapeada na superficie (UV mapping).. CUDA: programar GPU pra calculos gerais (ML, simulacao)."
              },
              {
                "w": "Game Engines: Unity (C#), Unreal (C++), Godot (GDScript/C#), quando usar cada",
                "s": "Game Engines Unity tutorial portugues | Unity vs Unreal vs Godot tutorial | game engines explained for beginners | game engines explicação em português",
                "d": "• O que é: Unity: mais usado (mobile, indie, VR)..\n• Conceitos-chave: Asset Store enorme.. Unreal: AAA graphics, C++ ou Blueprints (visual).. Godot: open-source, leve, GDScript (parecido Python).. Pra aprender CG na pratica: faca um jogo simples.. Pra simulacao/robotica: Unity+ROS ou Isaac Sim.\n• O que estudar: Unity (C#), Unreal (C++), Godot (GDScript/C#), quando usar cada."
              },
              {
                "w": "Compute shaders e GPU computing: paralelismo massivo, simulacoes, particulas",
                "s": "Compute shaders computing tutorial portugues | particle simulation GPU tutorial | compute shaders e gpu computing explained for beginners | compute shaders e gpu computing explicação em português",
                "d": "• O que é: Compute shader: usar GPU pra calculos genericos (nao so graficos)..\n• Conceitos-chave: Simulacao de fluidos, particulas, fisica.. WebGPU: compute no browser.. CUDA: NVIDIA (ML, simulacao).. GPU: milhares de cores simples vs CPU poucos cores complexos.. Paralelismo e o futuro.\n• O que estudar: paralelismo massivo, simulacoes, particulas."
              }
            ]
          },
          {
            "name": "Prática: 3D no Navegador e Game Engines",
            "books": [
              "Learning Three.js — Jos Dirksen",
              "Unity in Action — Joe Hocking",
              "Fundamentals of Computer Graphics — Steve Marschner & Peter Shirley"
            ],
            "items": [
              {
                "w": "Three.js na prática: cenas, câmeras, luzes, geometrias, materiais, animações",
                "s": "Threejs na prtica explicação português | scene camera light tutorial | threejs na prtica explained for beginners | Threejs na prática examples and practice",
                "d": "• O que é: Three.js abstrai WebGL: criar cena 3D com poucas linhas..\n• Conceitos-chave: Scene, Camera (Perspective/Ortho), Renderer, Mesh = Geometry + Material.\n• O que estudar: cenas, câmeras, luzes, geometrias, materiais, animações."
              },
              {
                "w": "Iluminação e materiais: Phong, PBR (Physically Based Rendering), texturas, normal maps",
                "s": "Iluminao e materiais explicação português | physically based rendering | iluminao e materiais tutorial completo | iluminao e materiais explained for beginners",
                "d": "• O que é: PBR simula materiais realistas (metal, vidro, tecido) usando propriedades físicas..\n• Conceitos-chave: Normal maps adicionam detalhe sem geometria extra.\n• O que estudar: Phong, PBR (Physically Based Rendering), texturas, normal maps."
              },
              {
                "w": "Animação: keyframes, interpolação (lerp, slerp), skeleton animation, morph targets",
                "s": "Animao explicação português | morph targets tutorial | animao explained for beginners | Animação examples and practice",
                "d": "• O que é: Animar objetos: keyframes definem poses, interpolação suaviza..\n• Conceitos-chave: Skeleton animation movimenta personagens com bones.\n• O que estudar: keyframes, interpolação (lerp, slerp), skeleton animation, morph targets."
              },
              {
                "w": "Projeto: game loop, input handling, colisão básica (AABB, raycasting), estado do jogo",
                "s": "Projeto explicação português | collision AABB tutorial | projeto explained for beginners | Projeto examples and practice",
                "d": "• O que é: Game loop: update(dt) → render()..\n• Conceitos-chave: Input do teclado/mouse.. Colisão AABB (caixas) ou raycasting (raio laser).. Estado: menu, playing, gameover.\n• O que estudar: game loop, input handling, colisão básica (AABB, raycasting), estado do jogo."
              },
              {
                "w": "Otimização 3D: LOD, frustum culling, instancing, draw calls, profiling GPU",
                "s": "Otimizao 3D explicação português | frustum culling tutorial | otimizao 3d explained for beginners | Otimização 3D examples and practice",
                "d": "• O que é: Otimizar performance: LOD reduz detalhe à distância, frustum culling ignora objetos fora da câmera, instancing renderiza muitas cópias.\n• O que estudar: LOD, frustum culling, instancing, draw calls, profiling GPU."
              },
              {
                "w": "WebGPU: próxima geração de gráficos no navegador, diferenças vs WebGL, compute shaders",
                "s": "WebGPU explicação português | next gen graphics tutorial | webgpu explained for beginners | WebGPU examples and practice",
                "d": "• O que é: WebGPU é o sucessor do WebGL: acesso moderno à GPU, compute shaders no navegador, melhor performance e mais controle.\n• O que estudar: próxima geração de gráficos no navegador, diferenças vs WebGL, compute shaders."
              }
            ]
          }
        ]
      },
      {
        "name": "📱 Desenvolvimento Mobile (Intro)",
        "topics": [
          {
            "name": "Cross-platform e Nativo",
            "books": [
              "React Native in Action — Nader Dabit",
              "Flutter in Action — Eric Windmill",
              "Beginning iPhone Development with Swift — Maskrey et al."
            ],
            "items": [
              {
                "w": "Mobile landscape: nativo (Swift/Kotlin) vs cross-platform (React Native/Flutter)",
                "s": "mobile development native vs cross platform | Mobile landscape nativo tutorial portugues | mobile landscape explained for beginners | mobile landscape explicação em português",
                "d": "• O que é: Nativo: melhor performance, acesso total a APIs..\n• Conceitos-chave: Cross-platform: 1 codebase pra iOS+Android.. React Native: JavaScript (se ja sabe React).. Flutter: Dart (UI bonita).. Pra comecar: escolha 1 e faca um app.\n• O que estudar: nativo (Swift/Kotlin) vs cross-platform (React Native/Flutter)."
              },
              {
                "w": "React Native: componentes, navegacao, estado, APIs nativas",
                "s": "React Native componentes explained | React Native explicação português | react native tutorial completo | React Native examples and practice",
                "d": "• O que é: Mesmo modelo mental de React (componentes, hooks, state)..\n• Conceitos-chave: React Navigation: telas e tabs.. Expo: simplifica setup.. Acesso a camera, GPS, notificacoes via bibliotecas.. Hot reload: ve mudancas instantaneamente.\n• O que estudar: componentes, navegacao, estado, APIs nativas."
              },
              {
                "w": "Flutter: widgets, Material/Cupertino, state management, Dart basics",
                "s": "Flutter widgets Material/Cupertino explained | Flutter state management tutorial | flutter explicação em português | Flutter examples and practice",
                "d": "• O que é: Tudo e widget..\n• Conceitos-chave: Material (Android look) ou Cupertino (iOS look).. State: setState, Provider, Riverpod, BLoC.. Dart: tipado, async/await, null safety.. Hot reload tambem.. Performance proxima de nativo.\n• O que estudar: widgets, Material/Cupertino, state management, Dart basics."
              },
              {
                "w": "Publicacao: Google Play Store, Apple App Store, CI/CD mobile",
                "s": "Publicacao Google Play tutorial portugues | publish app Google Play Apple Store | publicacao explained for beginners | publicacao explicação em português",
                "d": "• O que é: Google Play: conta dev ($25 uma vez)..\n• Conceitos-chave: Apple: $99/ano.. Build: APK/AAB (Android), IPA (iOS).. CI/CD: Fastlane, Codemagic, EAS (Expo).. Revisao Apple: mais rigorosa (1-3 dias).. Versioning: semver.\n• O que estudar: Google Play Store, Apple App Store, CI/CD mobile."
              },
              {
                "w": "Conceitos mobile: offline-first, push notifications, deep linking, responsividade",
                "s": "Conceitos mobile offline-first tutorial portugues | mobile offline first tutorial | conceitos mobile explained for beginners | conceitos mobile explicação em português",
                "d": "• O que é: Offline-first: app funciona sem internet (SQLite local, sync depois)..\n• Conceitos-chave: Push: Firebase Cloud Messaging.. Deep linking: URL abre tela especifica do app.. Responsividade: adaptar a diferentes tamanhos de tela.\n• O que estudar: offline-first, push notifications, deep linking, responsividade."
              },
              {
                "w": "PWA (Progressive Web App): offline, install, service workers, quando usar vs nativo",
                "s": "PWA Progressive Web App explicação português | progressive web app 2025 tutorial | pwa progressive web app explained for beginners | PWA Progressive Web App examples and practice",
                "d": "• O que é: PWA: site que funciona como app (offline, install na home screen, push notifications)..\n• Conceitos-chave: Service Worker: proxy entre app e rede (cache, offline).. Quando: app simples, budget baixo, todos os devices.. Quando NAO: acesso a hardware especifico, performance critica.. Starbucks, Twitter Lite sao PWAs.\n• O que estudar: offline, install, service workers, quando usar vs nativo."
              }
            ]
          },
          {
            "name": "Arquitetura e Deploy de Apps Mobile",
            "books": [
              "React Native in Action — Nader Dabit",
              "Flutter in Action — Eric Windmill",
              "Mobile Design Pattern Gallery — Theresa Neil"
            ],
            "items": [
              {
                "w": "State management: Redux, Zustand (RN), Riverpod, BLoC (Flutter), quando usar cada",
                "s": "State management explicação português | state management tutorial | state management explained for beginners | State management examples and practice",
                "d": "• O que é: State management controla dados compartilhados entre telas..\n• Conceitos-chave: Redux/Zustand em RN, Riverpod/BLoC em Flutter.. Escolha afeta arquitetura inteira.\n• O que estudar: Redux, Zustand (RN), Riverpod, BLoC (Flutter), quando usar cada."
              },
              {
                "w": "Navegação avançada: deep linking, nested navigators, autenticação guards, tab + stack",
                "s": "Navegao avanada explicação português | nested navigation tutorial | navegao avanada explained for beginners | Navegação avançada examples and practice",
                "d": "• O que é: Navegação em apps é complexa: tabs com stacks internos, login guards, deep links que abrem telas específicas via URL.\n• O que estudar: deep linking, nested navigators, autenticação guards, tab + stack."
              },
              {
                "w": "APIs nativas: câmera, GPS, sensores, biometria, permissões no iOS e Android",
                "s": "APIs nativas explicação português | camera GPS sensors tutorial | apis nativas explained for beginners | APIs nativas examples and practice",
                "d": "• O que é: Acessar hardware nativo requer bridges (RN) ou plugins (Flutter)..\n• Conceitos-chave: Cada plataforma tem sistema de permissões diferente.\n• O que estudar: câmera, GPS, sensores, biometria, permissões no iOS e Android."
              },
              {
                "w": "Performance mobile: lazy loading, FlatList/ListView, imagem caching, memory leaks",
                "s": "Performance mobile explicação português | mobile performance tutorial | performance mobile explained for beginners | Performance mobile examples and practice",
                "d": "• O que é: Mobile tem memória limitada..\n• Conceitos-chave: Lazy loading carrega sob demanda, FlatList virtualiza listas grandes, cache evita re-downloads.\n• O que estudar: lazy loading, FlatList/ListView, imagem caching, memory leaks."
              },
              {
                "w": "Testing mobile: unit tests, widget tests (Flutter), component tests (RN), E2E com Detox/Patrol",
                "s": "Testing mobile explicação português | mobile testing tutorial | testing mobile explained for beginners | Testing mobile examples and practice",
                "d": "• O que é: Testar em mobile: unit (lógica), widget/component (UI isolada), E2E (app inteira em simulador)..\n• Conceitos-chave: Detox para RN, Patrol para Flutter.\n• O que estudar: unit tests, widget tests (Flutter), component tests (RN), E2E com Detox/Patrol."
              },
              {
                "w": "Deploy: CI/CD mobile (Fastlane, EAS Build), código signing, TestFlight/Play Console, OTA updates",
                "s": "Deploy explicação português | mobile deploy tutorial | deploy explained for beginners | Deploy examples and practice",
                "d": "• O que é: Deploy mobile é mais complexo que web: build nativo, code signing (certificados), review da loja, OTA updates para patches rápidos.\n• O que estudar: CI/CD mobile (Fastlane, EAS Build), código signing, TestFlight/Play Console, OTA updates."
              }
            ]
          }
        ]
      },
      {
        "name": "🔧 DevOps & Infra",
        "topics": [
          {
            "name": "Redes pra Devs",
            "books": [
              "Computer Networking — Kurose & Ross",
              "HTTP: The Definitive Guide — Gourley & Totty",
              "Redes de Computadores — Tanenbaum"
            ],
            "items": [
              {
                "w": "Modelo OSI e TCP/IP: camadas, protocolos",
                "s": "Modelo TCP/IP camadas tutorial portugues | OSI model TCP IP layers tutorial | modelo osi e tcp/ip explained for beginners | modelo osi e tcp/ip explicação em português",
                "d": "• O que é: OSI: 7 camadas (fisica > enlace > rede > transporte > sessao > apresentacao > aplicacao)..\n• Conceitos-chave: TCP/IP: 4 camadas.. Cada camada resolve um problema.\n• O que estudar: camadas, protocolos."
              },
              {
                "w": "TCP vs UDP, portas, sockets",
                "s": "portas sockets tutorial portugues | TCP vs UDP difference tutorial | tcp vs udp portas sockets explained for beginners | tcp vs udp portas sockets explicação em português",
                "d": "• O que é: TCP: confiavel, 3-way handshake (SYN-SYN/ACK-ACK)..\n• Conceitos-chave: UDP: rapido, sem garantia (streaming, jogos).. Portas: 80(HTTP), 443(HTTPS), 22(SSH), 5432(Postgres)."
              },
              {
                "w": "HTTP/1.1 vs HTTP/2 vs HTTP/3, metodos, headers, cookies",
                "s": "HTTP/1.1 HTTP/2 HTTP/3 tutorial portugues | HTTP protocol methods headers | http/11 vs http/2 vs http/3 metodos headers cookies explained for beginners | http/11 vs http/2 vs http/3 metodos headers cookies explicação em português",
                "d": "• O que é: GET POST PUT PATCH DELETE..\n• Conceitos-chave: Headers: Content-Type, Authorization, Cache-Control.. Cookies: sessao no navegador.. HTTP/2: multiplexing.. HTTP/3: QUIC/UDP."
              },
              {
                "w": "REST, GraphQL, WebSockets: quando usar cada",
                "s": "REST GraphQL WebSockets tutorial portugues | API protocols comparison tutorial | rest graphql websockets explained for beginners | rest graphql websockets explicação em português",
                "d": "• O que é: REST: recurso-orientado (maioria)..\n• Conceitos-chave: GraphQL: cliente pede exatamente o que quer (mobile).. WebSocket: real-time bidirecional (chat, jogos).. gRPC: entre servicos.\n• O que estudar: quando usar cada."
              },
              {
                "w": "Programacao de sockets: TCP client/server em Python, netcat, comunicacao raw",
                "s": "Programacao de sockets explicação português | TCP client server python tutorial | programacao de sockets explained for beginners | Programacao de sockets examples and practice",
                "d": "• O que é: import socket..\n• Conceitos-chave: server: socket() > bind() > listen() > accept() > recv/send.. client: socket() > connect() > send/recv.. Netcat (nc): canivete suico de rede..\n• Exemplos: Entender sockets = entender como TODA comunicacao de rede funciona por baixo (HTTP, WebSocket, gRPC = tudo e socket).\n• O que estudar: TCP client/server em Python, netcat, comunicacao raw."
              },
              {
                "w": "Ferramentas de rede: ping, traceroute, dig, curl, nslookup, iptables basico",
                "s": "Ferramentas de rede explicação português | network tools ping traceroute dig | ferramentas de rede tutorial completo | ferramentas de rede explained for beginners",
                "d": "• O que é: ping: host esta acessivel? traceroute: caminho ate o host..\n• Conceitos-chave: dig/nslookup: resolver DNS.. curl: HTTP requests.. netstat/ss: portas abertas.. iptables: firewall Linux (INPUT, OUTPUT, FORWARD).. tcpdump: capturar pacotes.. Dominar essas ferramentas = debugar problemas de rede rapidamente.\n• O que estudar: ping, traceroute, dig, curl, nslookup, iptables basico."
              }
            ]
          },
          {
            "name": "Docker e Containers",
            "books": [
              "Docker Deep Dive — Nigel Poulton",
              "The Docker Book — James Turnbull",
              "Docker in Practice — Miell & Sayers"
            ],
            "items": [
              {
                "w": "O que sao containers: isolamento, imagem vs container, Docker vs VM",
                "s": "containers isolamento imagem tutorial portugues | what are containers Docker | o que sao containers explained for beginners | o que sao containers explicação em português",
                "d": "• O que é: Container = processo isolado com suas dependencias..\n• Conceitos-chave: Imagem: template (read-only).. Container: instancia rodando.. Mais leve que VM (compartilha kernel).\n• O que estudar: isolamento, imagem vs container, Docker vs VM."
              },
              {
                "w": "Dockerfile: FROM, RUN, COPY, CMD, EXPOSE, multi-stage",
                "s": "multi-stage docker build tutorial | Dockerfile explicação português | dockerfile explained for beginners | Dockerfile examples and practice",
                "d": "• O que é: FROM python:3.12..\n• Conceitos-chave: RUN pip install.. CMD ['python','app.py'].. EXPOSE 8000.. Multi-stage: build numa imagem, copiar resultado pra imagem menor.\n• O que estudar: FROM, RUN, COPY, CMD, EXPOSE, multi-stage."
              },
              {
                "w": "Docker Compose: multi-container, volumes, networks",
                "s": "Docker Compose multi-container explained | Docker Compose explicação português | docker compose tutorial completo | Docker Compose examples and practice",
                "d": "• O que é: docker-compose.yml: definir multiplos servicos..\n• Conceitos-chave: volumes: persistir dados.. networks: comunicacao entre containers.. docker compose up -d.\n• O que estudar: multi-container, volumes, networks."
              },
              {
                "w": "Docker Hub, registries, tags, .dockerignore",
                "s": "Docker registries tags tutorial portugues | docker hub registry tutorial | docker hub registries tags dockerignore explained for beginners | docker hub registries tags dockerignore explicação em português",
                "d": "• O que é: Docker Hub: repositorio de imagens..\n• Conceitos-chave: docker push/pull.. Tags: versoes (app:v1.2, app:latest).. .dockerignore: excluir node_modules, .git, .env."
              },
              {
                "w": "Boas praticas de Dockerfile: camadas, cache, .dockerignore, nao rodar como root",
                "s": "Boas praticas de Dockerfile explicação português | Dockerfile optimization tutorial | boas praticas de dockerfile explained for beginners | Boas praticas de Dockerfile examples and practice",
                "d": "• O que é: Ordenar: deps que mudam pouco no topo (cache)..\n• Conceitos-chave: COPY requirements.txt antes de COPY.. (cache deps).. .dockerignore: node_modules, .git, .env.. USER nao-root.. Multi-stage: build stage grande, prod stage minimo.. Healthcheck.. Nao instalar ferramentas desnecessarias.. Imagem pequena = deploy rapido + menos vulnerabilidades.\n• O que estudar: camadas, cache, .dockerignore, nao rodar como root."
              },
              {
                "w": "Debugging containers: docker logs, exec, inspect, network troubleshooting",
                "s": "Debugging containers explicação português | docker network debugging tutorial | debugging containers explained for beginners | Debugging containers examples and practice",
                "d": "• O que é: docker logs container_id..\n• Conceitos-chave: docker exec -it container bash (entrar no container).. docker inspect: ver config, rede, mounts.. docker network ls/inspect: problemas de rede.. docker stats: CPU/memoria.. docker-compose logs -f: seguir logs.. 90% dos problemas: permissoes, rede, ou variavel de ambiente faltando.\n• O que estudar: docker logs, exec, inspect, network troubleshooting."
              }
            ]
          },
          {
            "name": "CI/CD e Cloud",
            "books": [
              "The Phoenix Project — Gene Kim",
              "Continuous Delivery — Humble & Farley",
              "AWS Certified Cloud Practitioner — Piper & Clinton"
            ],
            "items": [
              {
                "w": "CI/CD: conceito, pipeline, GitHub Actions",
                "s": "CI/CD conceito pipeline explained | GitHub Actions workflow tutorial | ci/cd explicação em português | CI/CD examples and practice",
                "d": "• O que é: CI: testar automaticamente a cada push..\n• Conceitos-chave: CD: deploy automatico apos testes.. GitHub Actions: YAML workflow.. Stages: lint > test > build > deploy.\n• O que estudar: conceito, pipeline, GitHub Actions."
              },
              {
                "w": "Cloud: IaaS, PaaS, SaaS, modelos de pricing",
                "s": "Cloud IaaS PaaS tutorial portugues | cloud computing IaaS PaaS SaaS | cloud explained for beginners | cloud explicação em português",
                "d": "• O que é: IaaS: servidor virtual (EC2)..\n• Conceitos-chave: PaaS: plataforma gerenciada (Heroku, Railway).. SaaS: software pronto (Gmail).. Pay-as-you-go.. Free tier pra aprender.\n• O que estudar: IaaS, PaaS, SaaS, modelos de pricing."
              },
              {
                "w": "AWS essenciais: EC2, S3, RDS, Lambda, IAM, VPC",
                "s": "AWS essenciais explicação português | AWS essentials EC2 S3 RDS Lambda | aws essenciais tutorial completo | aws essenciais explained for beginners",
                "d": "• O que é: EC2: servidor..\n• Conceitos-chave: S3: storage de arquivos.. RDS: banco gerenciado.. Lambda: serverless.. IAM: permissoes.. VPC: rede isolada.. Comece pelo free tier!.\n• O que estudar: EC2, S3, RDS, Lambda, IAM, VPC."
              },
              {
                "w": "Deploy: Vercel, Railway, Render, Fly.io",
                "s": "Deploy Vercel Railway tutorial portugues | deploy fullstack app tutorial | deploy explained for beginners | deploy explicação em português",
                "d": "• O que é: Vercel: frontend (Next.js)..\n• Conceitos-chave: Railway/Render: backend + DB.. Fly.io: containers.. Todos tem free tier.. Conectam com GitHub pra deploy automatico.\n• O que estudar: Vercel, Railway, Render, Fly.io."
              },
              {
                "w": "DNS, dominios, HTTPS, certificados SSL/TLS",
                "s": "DNS dominios HTTPS certificados SSLTLS explicação português | dominios HTTPS certificados explained | dns dominios https certificados ssl/tls tutorial completo | DNS dominios HTTPS certificados SSL/TLS examples and practice",
                "d": "• O que é: DNS: nome > IP..\n• Conceitos-chave: A record, CNAME.. Comprar dominio: Namecheap, Cloudflare.. HTTPS: Let's Encrypt (gratis).. TLS: criptografia em transito."
              },
              {
                "w": "Infrastructure monitoring: uptime, status pages, alertas, Pingdom, UptimeRobot",
                "s": "Infrastructure monitoring explicação português | infrastructure monitoring uptime | infrastructure monitoring tutorial completo | infrastructure monitoring explained for beginners",
                "d": "• O que é: UptimeRobot: monitor gratis (ping a cada 5min)..\n• Conceitos-chave: Pingdom: mais robusto.. Status page: statuspage.io ou Cachet (self-hosted).. Alertas: Slack, PagerDuty, email.. SLA 99.9% = 8.7h downtime/ano.. Monitore ANTES de ter usuarios reclamando.\n• O que estudar: uptime, status pages, alertas, Pingdom, UptimeRobot."
              },
              {
                "w": "Kubernetes intro: por que existe, pods vs containers, kubectl basics, minikube/kind para local",
                "s": "Kubernetes intro explicação português | container orchestration tutorial | kubernetes intro explained for beginners | Kubernetes intro examples and practice",
                "d": "• O que é: K8s orquestra containers em escala: pods agrupam containers, kubectl gerencia cluster..\n• Conceitos-chave: Minikube/kind para aprender local antes de cloud.\n• O que estudar: por que existe, pods vs containers, kubectl basics, minikube/kind para local."
              }
            ]
          },
          {
            "name": "Monitoramento e Observabilidade de Aplicacao",
            "books": [
              "Observability Engineering — Charity Majors",
              "Site Reliability Engineering — Google (gratuito)",
              "Distributed Systems Observability — Cindy Sridharan"
            ],
            "items": [
              {
                "w": "3 pilares: metricas, logs, traces. Diferenca de monitoramento vs observabilidade",
                "s": "observability three pillars metrics logs traces | pilares metricas logs tutorial portugues | 3 pilares explained for beginners | 3 pilares explicação em português",
                "d": "• O que é: Monitoramento: dashboards pre-definidos (CPU, memoria)..\n• Conceitos-chave: Observabilidade: investigar problemas NOVOS sem saber de antemao.. Metricas: numeros ao longo do tempo (Prometheus).. Logs: eventos textuais (Loki/ELK).. Traces: caminho do request entre servicos (Jaeger/Tempo).. Os 3 juntos = poder total.\n• O que estudar: metricas, logs, traces. Diferenca de monitoramento vs observabilidade."
              },
              {
                "w": "APM: Sentry (error tracking), New Relic, Datadog, aplicacao real-time",
                "s": "APM application performance monitoring | Sentry error tracking tutorial | Datadog New Relic tutorial | Sentry error tracking tutorial portugues",
                "d": "• O que é: APM: ver performance da SUA aplicacao (nao so infra)..\n• Conceitos-chave: Sentry: capturar erros com stack trace + contexto (gratis pra open-source).. Datadog/New Relic: metricas de app (response time, error rate, throughput).. Real User Monitoring (RUM): experiencia do usuario real.. Alertas: PagerDuty, OpsGenie.\n• O que estudar: Sentry (error tracking), New Relic, Datadog, aplicacao real-time."
              },
              {
                "w": "Structured logging: JSON logs, correlation IDs, log levels, ELK/Loki",
                "s": "Structured logging JSON tutorial portugues | structured logging JSON tutorial | structured logging explained for beginners | structured logging explicação em português",
                "d": "• O que é: Structured: JSON ao inves de texto livre..\n• Conceitos-chave: {timestamp, level, message, request_id, user_id}.. Correlation ID: rastrear 1 request entre servicos.. Log levels: DEBUG<INFO<WARN<ERROR<FATAL.. Centralizar: ELK (ElasticSearch+Logstash+Kibana) ou Loki+Grafana.. Nao logar dados sensiveis!.\n• O que estudar: JSON logs, correlation IDs, log levels, ELK/Loki."
              },
              {
                "w": "Health checks, SLIs, SLOs, SLAs, error budgets",
                "s": "Health checks SLIs tutorial portugues | site reliability engineering basics | health checks slis slos slas error budgets explained for beginners | health checks slis slos slas error budgets explicação em português",
                "d": "• O que é: Health check: GET /health (200=ok, 503=problema)..\n• Conceitos-chave: SLI: indicador (% requests <200ms).. SLO: objetivo (99.9% dos requests <200ms).. SLA: contrato com cliente (com penalidades).. Error budget: 0.1% de falha permitida (100% e impossivel).. Se budget acabou: pare features, foque em confiabilidade."
              },
              {
                "w": "Dashboards: Grafana, metricas chave (RED/USE), alertas sem fadiga",
                "s": "Dashboards Grafana metricas tutorial portugues | alert fatigue prevention tutorial | dashboards explained for beginners | dashboards explicação em português",
                "d": "• O que é: RED (servicos): Rate, Errors, Duration..\n• Conceitos-chave: USE (infra): Utilization, Saturation, Errors.. Grafana: dashboards customizaveis com Prometheus.. Alertas: nao alerte tudo — alert fatigue (ignorar alertas por excesso).. Alerte no SINTOMA (error rate alta), investigue a CAUSA.\n• O que estudar: Grafana, metricas chave (RED/USE), alertas sem fadiga."
              },
              {
                "w": "OpenTelemetry: padrao aberto de observabilidade, instrumentacao, exporters",
                "s": "OpenTelemetry observability standard | OpenTelemetry explicação português | opentelemetry tutorial completo | opentelemetry explained for beginners",
                "d": "• O que é: OpenTelemetry (OTel): padrao aberto que unifica metricas, logs e traces..\n• Conceitos-chave: Instrumentacao: adicionar ao codigo (auto ou manual).. Exporters: enviar pra Jaeger, Prometheus, Grafana, Datadog.. Vendor-neutral: trocar backend sem mudar codigo.. O futuro da observabilidade.\n• O que estudar: padrao aberto de observabilidade, instrumentacao, exporters."
              },
              {
                "w": "Profiling de aplicação: flame graphs, CPU/memory profiling (py-spy, pprof), bottleneck identification",
                "s": "Profiling de aplicao explicação português | CPU memory profiling tutorial | profiling de aplicao explained for beginners | Profiling de aplicação examples and practice",
                "d": "• O que é: Flame graphs visualizam onde CPU gasta tempo..\n• Conceitos-chave: py-spy (Python), pprof (Go), perf (Linux).. Identificar bottleneck antes de otimizar prematuramente.\n• O que estudar: flame graphs, CPU/memory profiling (py-spy, pprof), bottleneck identification."
              }
            ]
          }
        ]
      },
      {
        "name": "🐹 Go (Golang)",
        "topics": [
          {
            "name": "Go: Linguagem e Concorrência",
            "books": [
              "The Go Programming Language — Donovan & Kernighan",
              "Learning Go — Jon Bodner",
              "Concurrency in Go — Katherine Cox-Buday"
            ],
            "items": [
              {
                "w": "Go basics: tipos, structs, interfaces, slices, maps, error handling (error como valor, não exceção)",
                "s": "Go basics explicação português | error handling tutorial | go basics explained for beginners | Go basics examples and practice",
                "d": "• O que é: Go é simples por design: sem herança, sem exceptions..\n• Conceitos-chave: Errors são valores retornados.. Interfaces são implícitas (duck typing).. Slices > arrays.\n• O que estudar: tipos, structs, interfaces, slices, maps, error handling (error como valor, não exceção)."
              },
              {
                "w": "Goroutines e Channels: concorrência leve, go keyword, channels tipados, select, buffered channels",
                "s": "Goroutines e Channels explicação português | buffered channel tutorial | goroutines e channels explained for beginners | Goroutines e Channels examples and practice",
                "d": "• O que é: Goroutines são lightweight threads (milhares simultâneas)..\n• Conceitos-chave: Channels comunicam entre goroutines de forma segura.. Select multiplexa channels.\n• O que estudar: concorrência leve, go keyword, channels tipados, select, buffered channels."
              },
              {
                "w": "Patterns de concorrência em Go: fan-out/fan-in, pipeline, worker pool, context para cancelamento",
                "s": "Patterns de concorrncia em Go explicação português | Go concurrency patterns tutorial | patterns de concorrncia em go explained for beginners | Patterns de concorrência em Go examples and practice",
                "d": "• O que é: Go incentiva patterns composáveis: pipeline de channels, worker pool para paralelismo, context.Context para timeout/cancelamento.\n• O que estudar: fan-out/fan-in, pipeline, worker pool, context para cancelamento."
              },
              {
                "w": "Pacotes e módulos: go mod, dependências, pacotes standard (net/http, encoding/json, os, io)",
                "s": "Pacotes e mdulos explicação português | standard library tutorial | pacotes e mdulos explained for beginners | Pacotes e módulos examples and practice",
                "d": "• O que é: Go modules gerenciam dependências (go.mod)..\n• Conceitos-chave: Standard library é rica: net/http para servers, encoding/json para JSON, os para filesystem.\n• O que estudar: go mod, dependências, pacotes standard (net/http, encoding/json, os, io)."
              },
              {
                "w": "Go para CLI tools: cobra/viper, flags, stdin/stdout, cross-compilation, single binary",
                "s": "Go para CLI tools explicação português | cross-compilation tutorial | go para cli tools explained for beginners | Go para CLI tools examples and practice",
                "d": "• O que é: Go compila para binário estático único (sem dependências)..\n• Conceitos-chave: Cobra/Viper para CLIs profissionais.. Cross-compile para Linux/Mac/Windows trivialmente.\n• O que estudar: cobra/viper, flags, stdin/stdout, cross-compilation, single binary."
              },
              {
                "w": "Go para web: net/http, Gin/Echo/Fiber, middleware, JSON APIs, templates, testing",
                "s": "Go para web explicação português | Gin Echo Fiber tutorial | go para web explained for beginners | Go para web examples and practice",
                "d": "• O que é: net/http é poderoso sozinho (não precisa de framework)..\n• Conceitos-chave: Gin/Echo adicionam routing, middleware, validação.. Testes com testing package nativo.\n• O que estudar: net/http, Gin/Echo/Fiber, middleware, JSON APIs, templates, testing."
              },
              {
                "w": "Go em produção: Docker (imagens tiny com scratch/distroless), profiling (pprof), race detector, linting",
                "s": "Go em produo explicação português | Docker scratch tutorial | go em produo explained for beginners | Go em produção examples and practice",
                "d": "• O que é: Go brilha em produção: imagens Docker de 5MB (FROM scratch), pprof para profiling, -race flag detecta data races, golangci-lint para qualidade.\n• O que estudar: Docker (imagens tiny com scratch/distroless), profiling (pprof), race detector, linting."
              }
            ]
          }
        ]
      },
      {
        "name": "🌐 Redes de Computadores",
        "topics": [
          {
            "name": "Modelo OSI & TCP/IP",
            "books": [
              "Computer Networking: A Top-Down Approach — Kurose & Ross",
              "TCP/IP Illustrated, Volume 1 — W. Richard Stevens",
              "Computer Networks — Andrew S. Tanenbaum"
            ],
            "items": [
              {
                "w": "Modelo OSI: 7 camadas (Física, Enlace, Rede, Transporte, Sessão, Apresentação, Aplicação)",
                "s": "physical data network transport | Modelo OSI explicação português | modelo osi tutorial completo | modelo osi explained for beginners",
                "d": "• O que é: Modelo de referência com 7 camadas que padroniza funções de comunicação em rede, cada camada com responsabilidade específica.\n• O que estudar: 7 camadas (Física, Enlace, Rede, Transporte, Sessão, Apresentação, Aplicação)."
              },
              {
                "w": "Modelo TCP/IP: 4 camadas (Enlace, Internet, Transporte, Aplicação)",
                "s": "Modelo TCPIP explicação português | internet protocol suite tutorial | modelo tcp/ip explained for beginners | Modelo TCP/IP examples and practice",
                "d": "• O que é: Modelo prático usado na internet com 4 camadas: como dados viajam do app até o fio físico.\n• O que estudar: 4 camadas (Enlace, Internet, Transporte, Aplicação)."
              },
              {
                "w": "Encapsulamento: como dados ganham headers em cada camada (PDU: segmento, pacote, quadro)",
                "s": "Encapsulamento explicação português | segment packet frame tutorial | encapsulamento explained for beginners | Encapsulamento examples and practice",
                "d": "• O que é: Em cada camada, dados recebem header adicional: aplicação→segmento→pacote→quadro→bits.\n• O que estudar: como dados ganham headers em cada camada (PDU: segmento, pacote, quadro)."
              },
              {
                "w": "Comparação OSI vs TCP/IP: mapeamento entre camadas, onde cada protocolo vive",
                "s": "Comparao OSI vs TCPIP explicação português | protocol layers tutorial | comparao osi vs tcp/ip explained for beginners | Comparação OSI vs TCP/IP examples and practice",
                "d": "• O que é: OSI é referência teórica (7 camadas); TCP/IP é o modelo real da internet (4 camadas)..\n• Conceitos-chave: HTTP=Aplicação, TCP=Transporte, IP=Rede.\n• O que estudar: mapeamento entre camadas, onde cada protocolo vive."
              },
              {
                "w": "Protocolos por camada: Ethernet (L2), IP (L3), TCP/UDP (L4), HTTP/DNS/SMTP (L7)",
                "s": "Protocolos por camada explicação português | ethernet IP TCP UDP HTTP tutorial | protocolos por camada explained for beginners | Protocolos por camada examples and practice",
                "d": "• O que é: Cada camada tem seus protocolos: Ethernet no enlace, IP na rede, TCP/UDP no transporte, HTTP/DNS/FTP na aplicação.\n• O que estudar: Ethernet (L2), IP (L3), TCP/UDP (L4), HTTP/DNS/SMTP (L7)."
              },
              {
                "w": "Análise de pacotes: Wireshark para visualizar encapsulamento real de cada camada",
                "s": "Anlise de pacotes explicação português | packet analysis tutorial | anlise de pacotes explained for beginners | Análise de pacotes examples and practice",
                "d": "• O que é: Wireshark mostra visualmente como um pacote HTTP contém TCP dentro de IP dentro de Ethernet, tornando o modelo concreto.\n• O que estudar: Wireshark para visualizar encapsulamento real de cada camada."
              }
            ]
          },
          {
            "name": "Camada de Rede: IP, Roteamento & Sub-redes",
            "books": [
              "Computer Networking: A Top-Down Approach — Kurose & Ross",
              "Routing TCP/IP, Volume 1 — Jeff Doyle",
              "Network Warrior — Gary A. Donahue"
            ],
            "items": [
              {
                "w": "IPv4: endereçamento de 32 bits, classes (A/B/C), notação decimal pontuada",
                "s": "IPv4 explicação português | 32 bit address tutorial | ipv4 explained for beginners | IPv4 examples and practice",
                "d": "• O que é: IPv4 usa endereços de 32 bits (4 bilhões), divididos em classes históricas..\n• Exemplos: Ex: 192.168.1.1.\n• O que estudar: endereçamento de 32 bits, classes (A/B/C), notação decimal pontuada."
              },
              {
                "w": "Sub-redes (Subnetting): máscara, CIDR (/24, /16), cálculo de hosts e redes",
                "s": "Subredes Subnetting explicação português | network host calculation tutorial | subredes subnetting explained for beginners | Subredes Subnetting examples and practice",
                "d": "• O que é: Dividir rede em sub-redes menores com máscaras..\n• Conceitos-chave: /24 = 256 endereços, /25 = 128.. Essencial pra engenheiro de redes.\n• O que estudar: máscara, CIDR (/24, /16), cálculo de hosts e redes."
              },
              {
                "w": "IPv6: endereçamento de 128 bits, notação, dual-stack, transição IPv4→IPv6",
                "s": "IPv6 explicação português | address format tutorial | ipv6 explained for beginners | IPv6 examples and practice",
                "d": "• O que é: IPv6 resolve a escassez de IPv4 com 128 bits (3.4×10³⁸ endereços)..\n• Conceitos-chave: Coexiste com IPv4 via dual-stack.\n• O que estudar: endereçamento de 128 bits, notação, dual-stack, transição IPv4→IPv6."
              },
              {
                "w": "NAT (Network Address Translation): como redes privadas acessam a internet",
                "s": "NAT Network Address Translation explicação português | network address translation | nat network address translation tutorial completo | nat network address translation explained for beginners",
                "d": "• O que é: NAT traduz IPs privados (192.168.x.x) para IP público..\n• Conceitos-chave: É por isso que vários dispositivos compartilham um IP externo.\n• O que estudar: como redes privadas acessam a internet."
              },
              {
                "w": "Roteamento: estático vs dinâmico, tabela de rotas, default gateway, hop-by-hop",
                "s": "Roteamento explicação português | default gateway tutorial | roteamento explained for beginners | Roteamento examples and practice",
                "d": "• O que é: Roteadores decidem pra onde enviar cada pacote baseado na tabela de rotas..\n• Conceitos-chave: Estático=manual, dinâmico=protocolos.\n• O que estudar: estático vs dinâmico, tabela de rotas, default gateway, hop-by-hop."
              },
              {
                "w": "Protocolos de roteamento: RIP, OSPF, BGP — como a internet se conecta",
                "s": "Protocolos de roteamento explicação português | routing protocols tutorial | protocolos de roteamento explained for beginners | Protocolos de roteamento examples and practice",
                "d": "• O que é: RIP (simples), OSPF (link-state, intra-AS) e BGP (inter-AS, espinha dorsal da internet)..\n• Conceitos-chave: BGP conecta ISPs ao mundo.\n• O que estudar: RIP, OSPF, BGP — como a internet se conecta."
              },
              {
                "w": "ICMP: ping, traceroute, mensagens de erro, TTL (Time To Live)",
                "s": "ICMP explicação português | error messages tutorial | icmp explained for beginners | ICMP examples and practice",
                "d": "• O que é: ICMP é protocolo de diagnóstico: ping testa conectividade, traceroute mostra o caminho, TTL evita loops infinitos.\n• O que estudar: ping, traceroute, mensagens de erro, TTL (Time To Live)."
              },
              {
                "w": "ARP (Address Resolution Protocol): mapear IP para MAC na rede local",
                "s": "ARP Address Resolution Protocol explicação português | address resolution tutorial | arp address resolution protocol explained for beginners | ARP Address Resolution Protocol examples and practice",
                "d": "• O que é: ARP descobre qual MAC address corresponde a um IP na mesma rede..\n• Conceitos-chave: Broadcast pergunta 'quem tem 192.168.1.5?' e o dono responde.\n• O que estudar: mapear IP para MAC na rede local."
              }
            ]
          },
          {
            "name": "Camada de Transporte: TCP, UDP & Sockets",
            "books": [
              "TCP/IP Illustrated, Volume 1 — W. Richard Stevens",
              "Unix Network Programming — W. Richard Stevens",
              "Computer Networking: A Top-Down Approach — Kurose & Ross"
            ],
            "items": [
              {
                "w": "TCP: conexão confiável, 3-way handshake (SYN, SYN-ACK, ACK), ordered delivery",
                "s": "TCP | reliable tutorial | 3-way handshake tutorial | SYN ACK tutorial | ordered delivery tutorial",
                "d": "• O que é: TCP garante entrega ordenada e sem erros via handshake de 3 vias, confirmação (ACK) e retransmissão.\n• O que estudar: conexão confiável, 3-way handshake (SYN, SYN-ACK, ACK), ordered delivery."
              },
              {
                "w": "UDP: sem conexão, sem garantia, mas rápido (streaming, games, DNS, VoIP)",
                "s": "UDP | connectionless tutorial | unreliable tutorial | fast | streaming gaming DNS tutorial",
                "d": "• O que é: UDP envia datagramas sem confirmar recebimento..\n• Conceitos-chave: Ideal quando velocidade importa mais que confiabilidade.\n• O que estudar: sem conexão, sem garantia, mas rápido (streaming, games, DNS, VoIP)."
              },
              {
                "w": "Portas e multiplexação: como múltiplas apps usam a mesma conexão de rede",
                "s": "Portas e multiplexao explicação português | well-known ports tutorial | portas e multiplexao explained for beginners | Portas e multiplexação examples and practice",
                "d": "• O que é: Portas (0-65535) identificam apps..\n• Conceitos-chave: HTTP=80, HTTPS=443, SSH=22.. Portas efêmeras (49152+) para conexões de cliente.\n• O que estudar: como múltiplas apps usam a mesma conexão de rede."
              },
              {
                "w": "Controle de fluxo TCP: sliding window, receiver buffer, advertised window",
                "s": "Controle de fluxo TCP explicação português | receiver buffer tutorial | controle de fluxo tcp explained for beginners | Controle de fluxo TCP examples and practice",
                "d": "• O que é: TCP ajusta velocidade de envio baseado no que o receptor consegue processar, evitando overflow no buffer.\n• O que estudar: sliding window, receiver buffer, advertised window."
              },
              {
                "w": "Controle de congestionamento: slow start, congestion avoidance, fast retransmit",
                "s": "Controle de congestionamento explicação português | congestion avoidance tutorial | controle de congestionamento explained for beginners | Controle de congestionamento examples and practice",
                "d": "• O que é: TCP detecta congestionamento na rede e reduz taxa de envio..\n• Conceitos-chave: Começa devagar (slow start) e adapta dinamicamente.\n• O que estudar: slow start, congestion avoidance, fast retransmit."
              },
              {
                "w": "Programação de sockets: TCP client/server em Python, select/poll/epoll",
                "s": "Programao de sockets explicação português | socket programming tutorial | programao de sockets explained for beginners | Programação de sockets examples and practice",
                "d": "• O que é: Sockets são a API para comunicação de rede..\n• Conceitos-chave: Criar server (bind/listen/accept) e client (connect) em Python ou C.\n• O que estudar: TCP client/server em Python, select/poll/epoll."
              },
              {
                "w": "Ferramentas: netcat, ss, netstat, tcpdump, nmap para diagnóstico de rede",
                "s": "Ferramentas explicação português | network tools tutorial | ferramentas explained for beginners | Ferramentas examples and practice",
                "d": "• O que é: Ferramentas essenciais: nc para testar conexões, ss/netstat para ver portas abertas, tcpdump para capturar pacotes.\n• O que estudar: netcat, ss, netstat, tcpdump, nmap para diagnóstico de rede."
              }
            ]
          },
          {
            "name": "Camada de Aplicação & Segurança de Rede",
            "books": [
              "Computer Networking: A Top-Down Approach — Kurose & Ross",
              "Bulletproof SSL and TLS — Ivan Ristić",
              "DNS and BIND — Cricket Liu & Paul Albitz"
            ],
            "items": [
              {
                "w": "DNS em profundidade: hierarquia (root, TLD, authoritative), registros (A, AAAA, CNAME, MX, NS, TXT)",
                "s": "DNS em profundidade explicação português | root TLD authoritative tutorial | dns em profundidade explained for beginners | DNS em profundidade examples and practice",
                "d": "• O que é: DNS traduz nomes em IPs..\n• Conceitos-chave: Hierarquia: root servers → TLD (.com, .br) → authoritative.. Registros: A=IPv4, MX=email, CNAME=alias.\n• O que estudar: hierarquia (root, TLD, authoritative), registros (A, AAAA, CNAME, MX, NS, TXT)."
              },
              {
                "w": "DHCP: como dispositivos recebem IP automaticamente (DORA: Discover, Offer, Request, Ack)",
                "s": "discover offer request ack | DHCP explicação português | dhcp tutorial completo | dhcp explained for beginners",
                "d": "• O que é: DHCP atribui IPs automaticamente..\n• Conceitos-chave: Processo DORA: dispositivo pede (Discover), servidor oferece (Offer), confirma (Request/Ack).\n• O que estudar: como dispositivos recebem IP automaticamente (DORA: Discover, Offer, Request, Ack)."
              },
              {
                "w": "HTTP/2 e HTTP/3: multiplexação, server push, QUIC (UDP-based), header compression",
                "s": "HTTP2 e HTTP3 explicação português | HTTP/2 HTTP/3 tutorial | http/2 e http/3 explained for beginners | HTTP/2 e HTTP/3 examples and practice",
                "d": "• O que é: HTTP/2 multiplexa streams em uma conexão TCP..\n• Conceitos-chave: HTTP/3 usa QUIC (baseado em UDP) para eliminar head-of-line blocking.\n• O que estudar: multiplexação, server push, QUIC (UDP-based), header compression."
              },
              {
                "w": "TLS/SSL: handshake, certificados, cipher suites, HTTPS, PKI (Public Key Infrastructure)",
                "s": "TLSSSL explicação português | cipher suite tutorial | tls/ssl explained for beginners | TLS/SSL examples and practice",
                "d": "• O que é: TLS criptografa comunicação..\n• Conceitos-chave: Handshake troca chaves, verifica certificado (CA), negocia cipher.. HTTPS = HTTP + TLS.\n• O que estudar: handshake, certificados, cipher suites, HTTPS, PKI (Public Key Infrastructure)."
              },
              {
                "w": "Firewalls: stateful vs stateless, regras, iptables/nftables, zonas de segurança",
                "s": "Firewalls explicação português | stateful stateless tutorial | firewalls explained for beginners | Firewalls examples and practice",
                "d": "• O que é: Firewalls filtram tráfego por regras..\n• Conceitos-chave: Stateful rastreia conexões, stateless avalia cada pacote isoladamente.. DMZ para servidores públicos.\n• O que estudar: stateful vs stateless, regras, iptables/nftables, zonas de segurança."
              },
              {
                "w": "VPN: tipos (site-to-site, remote access), IPSec, WireGuard, OpenVPN, túneis",
                "s": "VPN | IPSec | WireGuard tutorial | OpenVPN tutorial | tunnel tutorial | site-to-site tutorial",
                "d": "• O que é: VPN cria túnel criptografado sobre a internet..\n• Conceitos-chave: WireGuard é moderno e rápido, IPSec é padrão empresarial.\n• O que estudar: tipos (site-to-site, remote access), IPSec, WireGuard, OpenVPN, túneis."
              },
              {
                "w": "VLAN: segmentação lógica de rede, trunking (802.1Q), inter-VLAN routing",
                "s": "network segmentation tutorial | VLAN explicação português | vlan explained for beginners | VLAN examples and practice",
                "d": "• O que é: VLANs dividem switch físico em redes lógicas separadas..\n• Conceitos-chave: Isolam tráfego sem precisar de switches separados.\n• O que estudar: segmentação lógica de rede, trunking (802.1Q), inter-VLAN routing."
              },
              {
                "w": "Projeto prático: configurar rede virtual com VLANs, sub-redes, firewall e NAT (GNS3/Packet Tracer)",
                "s": "Projeto prtico explicação português | virtual network tutorial | projeto prtico explained for beginners | Projeto prático examples and practice",
                "d": "• O que é: Monte lab virtual: 2+ sub-redes, roteamento entre elas, firewall com regras, NAT para internet..\n• Conceitos-chave: GNS3 ou Cisco Packet Tracer.\n• O que estudar: configurar rede virtual com VLANs, sub-redes, firewall e NAT (GNS3/Packet Tracer)."
              }
            ]
          }
        ]
      },
      {
        "name": "🔒 Seguranca & Ethical Hacking (Intro)",
        "topics": [
          {
            "name": "Etica, Legalidade e Escopo",
            "books": [
              "The Ethics of Hacking — Sunde",
              "Cyber Law — Pavan Duggal",
              "Marco Civil da Internet (Lei 12.965/2014)"
            ],
            "items": [
              {
                "w": "O que e ethical hacking: permissao, escopo, regras de engajamento",
                "s": "ethical hacking permissao tutorial portugues | what is ethical hacking tutorial | o que e ethical hacking explicação em português | O que e ethical hacking explained for beginners",
                "d": "• O que é: Ethical hacking = testar seguranca COM PERMISSAO..\n• Conceitos-chave: Sem permissao = crime (Art.. 154-A do Codigo Penal brasileiro).. Regras de engajamento: documento que define o que pode e nao pode testar, horarios, alvos permitidos.. SEMPRE por escrito.\n• O que estudar: permissao, escopo, regras de engajamento."
              },
              {
                "w": "Leis brasileiras: Marco Civil, LGPD, Art. 154-A (crimes digitais)",
                "s": "Leis brasileiras Marco tutorial portugues | leis brasileiras seguranca digital | leis brasileiras explained for beginners | leis brasileiras explicação em português",
                "d": "• O que é: 154-A: invadir dispositivo alheio = 1-4 anos de reclusao..\n• Conceitos-chave: Marco Civil: garantias de privacidade.. LGPD: protecao de dados.. Bug bounty com escopo definido = legal.. Teste sem autorizacao = CRIME, mesmo com boas intencoes.\n• O que estudar: Marco Civil, LGPD, Art. 154-A (crimes digitais)."
              },
              {
                "w": "Codigo de etica: EC-Council, PTES, responsabilidade profissional",
                "s": "Codigo etica EC-Council tutorial portugues | responsible disclosure tutorial | codigo de etica explained for beginners | codigo de etica explicação em português",
                "d": "• O que é: Responsible disclosure: encontrou vulnerabilidade? Reporte ao dono PRIMEIRO, de prazo pra corrigir, so depois publique..\n• Conceitos-chave: Full disclosure vs coordinated disclosure.. Nunca explore pra ganho pessoal.. Proteja os dados que encontrar durante testes.\n• O que estudar: EC-Council, PTES, responsabilidade profissional."
              },
              {
                "w": "Documentacao e relatorios: escopo, findings, severidade, remediacoes",
                "s": "Documentacao relatorios escopo tutorial portugues | pentest report template tutorial | documentacao e relatorios explained for beginners | documentacao e relatorios explicação em português",
                "d": "• O que é: Relatorio: sumario executivo (pra gestao) + tecnico (pra devs)..\n• Conceitos-chave: Cada finding: descricao, severidade (CVSS), evidencia (screenshot), impacto, remediacao.. Classificacao: Critical > High > Medium > Low > Info.. Relatorio BEM escrito = diferencial profissional.\n• O que estudar: escopo, findings, severidade, remediacoes."
              },
              {
                "w": "Tipos de teste: black box, white box, gray box, red team vs pentest",
                "s": "black box white box gray box testing | Tipos de teste explicação português | tipos de teste tutorial completo | tipos de teste explained for beginners",
                "d": "• O que é: Black box: testador nao sabe nada (simula atacante externo)..\n• Conceitos-chave: White box: acesso total ao codigo/infra (mais profundo).. Gray box: acesso parcial (credenciais de usuario).. Red team: simular APT completo (meses, sigilo).. Pentest: escopo definido, prazo curto.. Escolher depende do objetivo e orcamento.\n• O que estudar: black box, white box, gray box, red team vs pentest."
              },
              {
                "w": "NDA, contrato, escopo: documentos essenciais antes de qualquer teste",
                "s": "NDA contrato escopo explicação português | nda contrato escopo tutorial beginners | nda contrato escopo explained for beginners | NDA contrato escopo examples and practice",
                "d": "• O que é: NUNCA teste sem contrato assinado..\n• Conceitos-chave: Documentos: NDA (confidencialidade), contrato de servico, escopo (o que pode/nao pode), regras de engajamento (horarios, contato de emergencia), autorizacao por escrito.. Sem isso: voce esta cometendo crime, mesmo com boas intencoes.\n• O que estudar: documentos essenciais antes de qualquer teste."
              }
            ]
          },
          {
            "name": "Fundamentos de Seguranca",
            "books": [
              "Web App Hacker's Handbook — Stuttard",
              "Hacking: Art of Exploitation — Erickson",
              "Serious Cryptography — Aumasson"
            ],
            "items": [
              {
                "w": "CIA Triad: Confidencialidade, Integridade, Disponibilidade",
                "s": "Triad Confidencialidade Integridade tutorial portugues | CIA triad cybersecurity tutorial | cia triad explained for beginners | cia triad explicação em português",
                "d": "• O que é: Confidencialidade: so quem deve ve..\n• Conceitos-chave: Integridade: dados nao alterados.. Disponibilidade: sistema acessivel.. Todo controle de seguranca protege pelo menos 1.\n• O que estudar: Confidencialidade, Integridade, Disponibilidade."
              },
              {
                "w": "OWASP Top 10: Injection, XSS, CSRF, Broken Auth",
                "s": "OWASP Injection CSRF tutorial portugues | OWASP vulnerabilities tutorial | owasp top 10 explained for beginners | owasp top 10 explicação em português",
                "d": "• O que é: SQL Injection: parameterized queries..\n• Conceitos-chave: XSS: sanitizar input/output.. CSRF: tokens.. Broken Auth: senhas fracas, sessoes mal gerenciadas.. Leia owasp.org.\n• O que estudar: Injection, XSS, CSRF, Broken Auth."
              },
              {
                "w": "Autenticacao vs Autorizacao, sessoes, tokens",
                "s": "Autenticacao Autorizacao sessoes tutorial portugues | authentication vs authorization | autenticacao vs autorizacao sessoes tokens explained for beginners | autenticacao vs autorizacao sessoes tokens explicação em português",
                "d": "• O que é: Autenticacao: quem e voce (login)..\n• Conceitos-chave: Autorizacao: o que pode fazer (permissoes).. Sessoes: server-side.. JWT: stateless token.. OAuth2: delegar autenticacao (Login com Google)."
              },
              {
                "w": "Criptografia: hashing (bcrypt/Argon2), simetrica (AES), assimetrica (RSA/ECC)",
                "s": "Criptografia hashing bcrypt/Argon2 tutorial portugues | cryptography hashing encryption | criptografia explained for beginners | criptografia explicação em português",
                "d": "• O que é: Hash: funcao 1 via (senhas)..\n• Conceitos-chave: bcrypt/Argon2: lentas de proposito (dificultar brute force).. AES: mesma chave encripta/decripta.. RSA/ECC: par chave publica/privada.. TLS usa ambas.\n• O que estudar: hashing (bcrypt/Argon2), simetrica (AES), assimetrica (RSA/ECC)."
              },
              {
                "w": "HTTPS, TLS handshake, certificados, CORS, CSP",
                "s": "HTTPS handshake certificados tutorial portugues | CORS CSP headers security | https tls handshake certificados cors csp explained for beginners | https tls handshake certificados cors csp explicação em português",
                "d": "• O que é: TLS: cliente e servidor negociam chave simetrica via assimetrica..\n• Conceitos-chave: Certificado: CA confirma identidade.. CORS: controle de acesso cross-origin.. CSP: prevenir XSS via headers."
              },
              {
                "w": "Principios: minimo privilegio, defesa em profundidade, fail-safe",
                "s": "security principles least privilege defense depth | Principios minimo privilegio tutorial portugues | principios explained for beginners | principios explicação em português",
                "d": "• O que é: Minimo privilegio: dar so o necessario..\n• Conceitos-chave: Defesa em profundidade: multiplas camadas.. Fail-safe: falha segura (negar acesso se der erro).. Security by design.\n• O que estudar: minimo privilegio, defesa em profundidade, fail-safe."
              },
              {
                "w": "Criptografia assimétrica detalhada: RSA (geração de chaves, exponenciação modular), Diffie-Hellman (troca de chaves)",
                "s": "Criptografia assimtrica detalhada explicação português | modular exponentiation tutorial | criptografia assimtrica detalhada explained for beginners | Criptografia assimétrica detalhada examples and practice",
                "d": "• O que é: RSA: escolher primos p,q, calcular n=p×q, e (público), d (privado)..\n• Conceitos-chave: Diffie-Hellman permite dois lados combinarem chave secreta em canal público.\n• O que estudar: RSA (geração de chaves, exponenciação modular), Diffie-Hellman (troca de chaves)."
              },
              {
                "w": "Curvas elípticas (ECC): por que são mais eficientes que RSA, ECDSA, ECDH, uso em TLS e Bitcoin",
                "s": "Curvas elpticas ECC explicação português | elliptic curve tutorial | curvas elpticas ecc explained for beginners | Curvas elípticas ECC examples and practice",
                "d": "• O que é: ECC oferece mesma segurança que RSA com chaves muito menores (256-bit ECC ≈ 3072-bit RSA)..\n• Conceitos-chave: Usada em TLS moderno, SSH, Bitcoin.\n• O que estudar: por que são mais eficientes que RSA, ECDSA, ECDH, uso em TLS e Bitcoin."
              },
              {
                "w": "Protocolos criptográficos: TLS 1.3 handshake detalhado, Perfect Forward Secrecy, certificate pinning",
                "s": "Protocolos criptogrficos explicação português | perfect forward secrecy tutorial | protocolos criptogrficos explained for beginners | Protocolos criptográficos examples and practice",
                "d": "• O que é: TLS 1.3: 1-RTT handshake, só cipher suites fortes, PFS garante que comprometer chave futura não decifra tráfego passado.\n• O que estudar: TLS 1.3 handshake detalhado, Perfect Forward Secrecy, certificate pinning."
              }
            ]
          },
          {
            "name": "Reconhecimento e OSINT Basico",
            "books": [
              "Open Source Intelligence Techniques — Michael Bazzell",
              "The Hacker Playbook 3 — Peter Kim",
              "RTFM: Red Team Field Manual — Ben Clark"
            ],
            "items": [
              {
                "w": "OSINT: coleta de informacao publica (Google dorking, Shodan, theHarvester, Maltego)",
                "s": "OSINT techniques tools tutorial | OSINT explicação português | osint explained for beginners | OSINT examples and practice",
                "d": "• O que é: OSINT: informacao publica disponivel..\n• Conceitos-chave: Google dorks: site: filetype: inurl: intext:.. Shodan: buscar dispositivos conectados.. theHarvester: emails, subdomains.. Maltego: grafos de relacionamentos.. Recon-ng: framework.. Tudo PUBLICO e legal.\n• O que estudar: coleta de informacao publica (Google dorking, Shodan, theHarvester, Maltego)."
              },
              {
                "w": "Enumeracao de dominios: subdomains, DNS records, WHOIS, certificados",
                "s": "Enumeracao de dominios explicação português | certificate transparency tutorial | enumeracao de dominios explained for beginners | Enumeracao de dominios examples and practice",
                "d": "• O que é: Subdomains: Amass, Subfinder, crt.sh (certificate transparency)..\n• Conceitos-chave: DNS: dig, nslookup (A, MX, NS, TXT records).. WHOIS: info do registrante.. ASN: blocos de IP da organizacao.. Mapear a superficie de ataque ANTES de testar.\n• O que estudar: subdomains, DNS records, WHOIS, certificados."
              },
              {
                "w": "Fingerprinting: tecnologias, versoes, WAF detection",
                "s": "Fingerprinting tecnologias versoes tutorial portugues | web fingerprinting technology detection | fingerprinting explained for beginners | fingerprinting explicação em português",
                "d": "• O que é: Wappalyzer/BuiltWith: identificar stack (framework, CMS, servidor)..\n• Conceitos-chave: Nmap version scan: -sV.. WAF detection: wafw00f.. Saber a tecnologia = saber vulnerabilidades conhecidas.. Banner grabbing: nc ou curl.\n• O que estudar: tecnologias, versoes, WAF detection."
              },
              {
                "w": "Nmap: port scanning, service detection, scripts NSE, stealth scan",
                "s": "nmap stealth scan techniques | Nmap port scanning explained | nmap tutorial completo | nmap explicação em português",
                "d": "• O que é: nmap -sS (stealth SYN)..\n• Conceitos-chave: -sV (version).. -sC (default scripts).. -O (OS detection).. -p- (todas portas).. NSE scripts: vuln, brute, discovery.. Output: -oN (normal), -oX (XML).. Portas abertas = servicos expostos = superficie de ataque.\n• O que estudar: port scanning, service detection, scripts NSE, stealth scan."
              },
              {
                "w": "Social engineering reconnaissance: LinkedIn, redes sociais, email gathering",
                "s": "Social engineering reconnaissance explicação português | social engineering OSINT tutorial | social engineering reconnaissance explained for beginners | Social engineering reconnaissance examples and practice",
                "d": "• O que é: LinkedIn: cargo, tecnologias, colegas..\n• Conceitos-chave: Redes sociais: habitos, localizacao, relacoes.. Email gathering: hunter.io, phonebook.cz, padroes (nome.sobrenome@empresa).. Metadata: documentos publicos contem autor, software, datas.. Tudo PUBLICO.. Social engineering: maior vetor de ataque (phishing).. Defesa: awareness training.\n• O que estudar: LinkedIn, redes sociais, email gathering."
              },
              {
                "w": "Ferramentas OSINT: Maltego, SpiderFoot, Recon-ng, framework de recon",
                "s": "Ferramentas OSINT explicação português | OSINT tools framework tutorial | ferramentas osint explained for beginners | Ferramentas OSINT examples and practice",
                "d": "• O que é: Maltego: grafos visuais de relacoes (dominio > IPs > emails > pessoas)..\n• Conceitos-chave: SpiderFoot: automatiza tudo.. Shodan: devices na internet.. Censys: certificados.. crt.sh: certificate transparency.. Combine ferramentas: automatize o tedioso, investigue o interessante.\n• Exemplos: Recon-ng: framework modular (como Metasploit pra recon)..\n• O que estudar: Maltego, SpiderFoot, Recon-ng, framework de recon."
              }
            ]
          },
          {
            "name": "Pratica: Primeiros Labs",
            "books": [
              "Penetration Testing — Georgia Weidman",
              "Bug Bounty Bootcamp — Vickie Li",
              "TryHackMe (plataforma gratuita)"
            ],
            "items": [
              {
                "w": "Labs de pratica: HackTheBox, TryHackMe, PortSwigger Web Security Academy",
                "s": "Labs de pratica explicação português | Labs pratica HackTheBox explained | labs de pratica tutorial completo | Labs de pratica examples and practice",
                "d": "• O que é: TryHackMe: iniciante (guided rooms)..\n• Conceitos-chave: HackTheBox: intermediario (maquinas reais).. PortSwigger: web hacking (MELHOR recurso gratis pra web).. VulnHub: VMs pra baixar.. OWASP Juice Shop: app vulneravel pra praticar.. Comece por TryHackMe.\n• O que estudar: HackTheBox, TryHackMe, PortSwigger Web Security Academy."
              },
              {
                "w": "CTFs: Capture The Flag, tipos (Jeopardy, Attack-Defense), como comecar",
                "s": "CTFs Capture Flag tutorial portugues | CTF capture the flag tutorial | ctfs explained for beginners | ctfs explicação em português",
                "d": "• O que é: CTF: competicao de hacking..\n• Conceitos-chave: Jeopardy: desafios por categoria (web, crypto, pwn, forensics, reverse).. Attack-Defense: defender seu servidor + atacar dos outros.. Plataformas: CTFtime.org, picoCTF (iniciante), HTB CTF.. Time: junte 3-5 pessoas com skills diferentes.\n• O que estudar: Capture The Flag, tipos (Jeopardy, Attack-Defense), como comecar."
              },
              {
                "w": "Montar lab proprio: VMs vulneraveis (Metasploitable, DVWA, Juice Shop), rede isolada",
                "s": "Montar proprio vulneraveis tutorial portugues | hacking lab setup VMs tutorial | montar lab proprio explained for beginners | montar lab proprio explicação em português",
                "d": "• O que é: VirtualBox + Kali Linux (atacante) + Metasploitable/DVWA (alvos)..\n• Conceitos-chave: Rede interna isolada (nao conecte na internet!).. OWASP Juice Shop: app web vulneravel moderna.. VulnHub: dezenas de VMs pra praticar.. Tudo local, tudo legal.\n• O que estudar: VMs vulneraveis (Metasploitable, DVWA, Juice Shop), rede isolada."
              },
              {
                "w": "Kali Linux: ferramentas pre-instaladas, quando usar, customizacao",
                "s": "Kali Linux setup pentest tutorial | Kali Linux ferramentas explained | kali linux explicação em português | Kali Linux examples and practice",
                "d": "• O que é: Kali: distro com 600+ ferramentas de seguranca pre-instaladas..\n• Conceitos-chave: Ferramentas essenciais: nmap, burpsuite, metasploit, john, hashcat, gobuster, sqlmap.. Aprenda as ferramentas uma de cada vez.\n• Exemplos: Use como VM (nao como SO principal)..\n• O que estudar: ferramentas pre-instaladas, quando usar, customizacao."
              },
              {
                "w": "Plataformas gratuitas: PicoCTF, OverTheWire, CyberDefenders, LetsDefend",
                "s": "Plataformas gratuitas explicação português | CyberDefenders blue team tutorial | plataformas gratuitas explained for beginners | Plataformas gratuitas examples and practice",
                "d": "• O que é: PicoCTF: CTF pra iniciantes absolutos (Carnegie Mellon)..\n• Conceitos-chave: OverTheWire Bandit: aprender Linux via desafios.. CyberDefenders: blue team labs (forense, malware).. LetsDefend: simular SOC analyst.. Todos gratuitos.. Progresso: OverTheWire > PicoCTF > TryHackMe > HackTheBox.\n• O que estudar: PicoCTF, OverTheWire, CyberDefenders, LetsDefend."
              },
              {
                "w": "Documentar aprendizado: writeups, blog, GitHub, construir reputacao",
                "s": "Documentar aprendizado explicação português | security blog beginner tutorial | documentar aprendizado explained for beginners | Documentar aprendizado examples and practice",
                "d": "• O que é: Cada lab/CTF resolvido: escreva writeup (problema, tentativas, solucao, aprendizado)..\n• Conceitos-chave: Blog: dev.to, Medium, GitHub Pages.. GitHub: scripts, tools, configs.. Twitter/X: compartilhe aprendizados.. A comunidade de seguranca e generosa com quem compartilha.. Reputacao > certificacoes.\n• O que estudar: writeups, blog, GitHub, construir reputacao."
              }
            ]
          }
        ]
      },
      {
        "name": "🔌 Embarcados, Hardware & Automacao",
        "topics": [
          {
            "name": "Arduino",
            "books": [
              "Arduino Cookbook — Margolis",
              "Getting Started with Arduino — Banzi",
              "Make: Electronics — Charles Platt"
            ],
            "items": [
              {
                "w": "Arduino: setup/loop, digitalRead/Write, analogRead/Write",
                "s": "Arduino setup/loop digitalRead/Write explained | arduino digital analog tutorial | arduino explicação em português | Arduino examples and practice",
                "d": "• O que é: setup(): roda 1 vez..\n• Conceitos-chave: loop(): repete.. digitalRead/Write: 0 ou 1.. analogRead: 0-1023.. analogWrite(PWM): 0-255.. Pinos: digitais e analogicos.\n• O que estudar: setup/loop, digitalRead/Write, analogRead/Write."
              },
              {
                "w": "Sensores: ultrassonico, temperatura (DHT), luz (LDR), PIR, IR",
                "s": "Sensores ultrassonico temperatura explained | HC-SR04 DHT11 LDR PIR tutorial | sensores explicação em português | Sensores examples and practice",
                "d": "• O que é: HC-SR04: distancia..\n• Conceitos-chave: DHT11/22: temperatura+umidade.. PIR: movimento.. IR: controle remoto.. Cada sensor tem biblioteca propria.\n• O que estudar: ultrassonico, temperatura (DHT), luz (LDR), PIR, IR."
              },
              {
                "w": "Atuadores: LED, motor DC, servo, buzzer, rele",
                "s": "Atuadores motor servo tutorial portugues | arduino motors servo relay | atuadores explained for beginners | atuadores explicação em português",
                "d": "• O que é: LED: output basico..\n• Conceitos-chave: Motor DC: driver L298N/L293D.. Servo: angulo preciso.. Buzzer: som.. Rele: ligar/desligar aparelhos 110V/220V.\n• O que estudar: LED, motor DC, servo, buzzer, rele."
              },
              {
                "w": "Comunicacao: Serial (UART), I2C, SPI, displays (LCD, OLED)",
                "s": "Comunicacao Serial UART tutorial portugues | arduino LCD OLED display tutorial | comunicacao explained for beginners | comunicacao explicação em português",
                "d": "• O que é: Serial: debug (Serial.println)..\n• Conceitos-chave: I2C: 2 fios, multiplos devices (endereco).. SPI: rapido, 4 fios.. OLED: graficos.. Wire.h (I2C), SPI.h.\n• O que estudar: Serial (UART), I2C, SPI, displays (LCD, OLED)."
              },
              {
                "w": "Projeto integrado: estacao meteorologica, robo seguidor de linha",
                "s": "Projeto integrado estacao tutorial portugues | arduino project weather station | projeto integrado explained for beginners | projeto integrado explicação em português",
                "d": "• O que é: Estacao: DHT + display + log SD card..\n• Conceitos-chave: Seguidor: sensores IR + motores + PID simples.. Exercita: sensores + atuadores + logica + comunicacao.\n• O que estudar: estacao meteorologica, robo seguidor de linha."
              },
              {
                "w": "Programacao Arduino avancada: interrupcoes, timers, sleep modes, watchdog",
                "s": "Programacao Arduino avancada explicação português | Arduino interrupts timers watchdog | programacao arduino avancada tutorial completo | programacao arduino avancada explained for beginners",
                "d": "• O que é: Interrupcoes: reagir instantaneamente a evento (botao, sensor)..\n• Conceitos-chave: Timers: acoes periodicas sem delay().. Sleep modes: economizar bateria.. Watchdog: resetar se travar.. attachInterrupt(pin, funcao, RISING).. Essencial pra projetos reais (nao usar delay() em producao).\n• O que estudar: interrupcoes, timers, sleep modes, watchdog."
              }
            ]
          },
          {
            "name": "ESP32, Raspberry Pi, IoT",
            "books": [
              "Internet of Things with ESP32 — Kolban",
              "Raspberry Pi Cookbook — Simon Monk",
              "Programming Robots with ROS — Quigley"
            ],
            "items": [
              {
                "w": "ESP32: WiFi, BLE, deep sleep, MQTT, web server",
                "s": "ESP32 web server project tutorial | ESP32 explicação português | esp32 explained for beginners | ESP32 examples and practice",
                "d": "• O que é: ESP32: Arduino-compativel + WiFi + BLE..\n• Conceitos-chave: MQTT: protocolo leve pra IoT (pub/sub).. Web server: controlar pela rede.. Deep sleep: economia de energia.\n• O que estudar: WiFi, BLE, deep sleep, MQTT, web server."
              },
              {
                "w": "Raspberry Pi: Linux embarcado, GPIO, camera, projetos",
                "s": "Raspberry Linux embarcado explained | raspberry pi GPIO python tutorial | raspberry pi explicação em português | Raspberry Pi examples and practice",
                "d": "• O que é: RPi: computador completo com Linux + GPIO..\n• Conceitos-chave: Python: RPi.GPIO ou gpiozero.. Camera module.. Projetos: servidor, retro gaming, automacao residencial, NAS.\n• O que estudar: Linux embarcado, GPIO, camera, projetos."
              },
              {
                "w": "RTOS (FreeRTOS): tarefas, prioridades, semaforos, filas, interrupcoes",
                "s": "RTOS FreeRTOS explicação português | RTOS real-time operating system | rtos freertos tutorial completo | rtos freertos explained for beginners",
                "d": "• O que é: RTOS: SO pra tempo real (resposta garantida em X ms)..\n• Conceitos-chave: FreeRTOS: mais popular (ESP32 usa nativamente).. Tasks: funcoes concorrentes.. Semaforo: sincronizar.. Queue: comunicar entre tasks.. ISR: interrupcao de hardware.\n• O que estudar: tarefas, prioridades, semaforos, filas, interrupcoes."
              },
              {
                "w": "Interrupcoes, DMA, Watchdog, low-power modes",
                "s": "Interrupcoes Watchdog low-power tutorial portugues | embedded low power modes tutorial | interrupcoes dma watchdog lowpower modes explained for beginners | interrupcoes dma watchdog lowpower modes explicação em português",
                "d": "• O que é: Interrupcao: parar tudo e atender evento (botao, timer, UART)..\n• Conceitos-chave: DMA: transferir dados sem CPU (eficiente).. Watchdog: reseta se travar.. Low-power: deep sleep, light sleep.. Critico pra IoT com bateria."
              },
              {
                "w": "Protocolos IoT: MQTT, HTTP, CoAP, WebSocket",
                "s": "Protocolos MQTT HTTP tutorial portugues | MQTT broker mosquitto tutorial | protocolos iot explained for beginners | protocolos iot explicação em português",
                "d": "• O que é: MQTT: leve, pub/sub (broker Mosquitto)..\n• Conceitos-chave: HTTP: pesado mas universal.. CoAP: REST pra IoT.. WebSocket: real-time.. Escolha: MQTT pra sensores, HTTP pra APIs.\n• O que estudar: MQTT, HTTP, CoAP, WebSocket."
              },
              {
                "w": "PID control: conceito e implementacao basica",
                "s": "control conceito implementacao explained | PID control explicação português | pid control tutorial completo | PID control examples and practice",
                "d": "• O que é: P: proporcional ao erro (reage)..\n• Conceitos-chave: I: integral do erro (corrige steady-state).. D: derivada do erro (amortece).. Tuning: Ziegler-Nichols.. Usado em equilibrio de robos, termostatos.\n• O que estudar: conceito e implementacao basica."
              }
            ]
          },
          {
            "name": "Hardware Avancado & FPGA",
            "books": [
              "Computer Organization and Design — Patterson & Hennessy",
              "Digital Design with RTL — Vahid",
              "FPGA Programming for Beginners — Wijesinghe"
            ],
            "items": [
              {
                "w": "Arquitetura de processadores: pipeline, cache, branch prediction, superscalar",
                "s": "Arquitetura processadores pipeline tutorial portugues | arquitetura processadores pipeline | arquitetura de processadores explained for beginners | arquitetura de processadores explicação em português",
                "d": "• O que é: Pipeline: dividir instrucao em etapas (fetch/decode/execute/memory/writeback)..\n• Conceitos-chave: Cache miss: penalidade.. Branch prediction: adivinhar saltos.. Superscalar: multiplas instrucoes por ciclo.\n• O que estudar: pipeline, cache, branch prediction, superscalar."
              },
              {
                "w": "Barramentos: SPI, I2C, UART, CAN, USB, PCIe",
                "s": "Barramentos UART PCIe tutorial portugues | bus protocols SPI I2C UART CAN USB PCIe | barramentos explained for beginners | barramentos explicação em português",
                "d": "• O que é: UART: serial simples (2 fios)..\n• Conceitos-chave: SPI: rapido (4 fios, master-slave).. I2C: 2 fios, multiplos devices.. CAN: automotivo/industrial.. USB: universal.. PCIe: alta velocidade (GPU, SSD).\n• O que estudar: SPI, I2C, UART, CAN, USB, PCIe."
              },
              {
                "w": "Memoria: SRAM, DRAM, Flash, EEPROM, DDR, memoria cache",
                "s": "memory types SRAM DRAM Flash EEPROM DDR | Memoria SRAM DRAM tutorial portugues | memoria explained for beginners | memoria explicação em português",
                "d": "• O que é: SRAM: rapida, cara (cache)..\n• Conceitos-chave: DRAM: precisa refresh (RAM principal).. Flash: nao-volatil (SSD, pendrive).. EEPROM: configuracao.. DDR4/DDR5: taxa de transferencia.\n• O que estudar: SRAM, DRAM, Flash, EEPROM, DDR, memoria cache."
              },
              {
                "w": "FPGA: o que e, HDL (Verilog/VHDL), sintese, casos de uso",
                "s": "FPGA Verilog/VHDL sintese explained | FPGA tutorial Verilog VHDL | fpga explicação em português | FPGA examples and practice",
                "d": "• O que é: FPGA: hardware RECONFIGURAVEL..\n• Conceitos-chave: Voce programa a logica (nao software!).. Verilog/VHDL: linguagens de descricao de hardware.. Mais rapido que software pra tarefas paralelas.. Usado em: telecom, financas, prototipagem de chips.\n• O que estudar: o que e, HDL (Verilog/VHDL), sintese, casos de uso."
              },
              {
                "w": "Design de PCB: esquematico, layout, KiCad, fabricacao",
                "s": "Design esquematico layout explained | Design de PCB explicação português | design de pcb tutorial completo | Design de PCB examples and practice",
                "d": "• O que é: KiCad (gratuito): esquematico > footprints > layout > roteamento > Gerber files > fabricar (JLCPCB, PCBWay)..\n• Conceitos-chave: Regras: largura trilha, espaçamento, plano terra, desacoplamento.\n• O que estudar: esquematico, layout, KiCad, fabricacao."
              },
              {
                "w": "ARM, RISC-V: arquiteturas de processadores embarcados",
                "s": "RISC-V arquiteturas processadores explained | embedded processor architectures | arm riscv tutorial completo | arm riscv explicação em português",
                "d": "• O que é: ARM: domina mobile e embarcado (Cortex-M, Cortex-A)..\n• Conceitos-chave: RISC-V: open-source, crescendo rapido.. RISC vs CISC.. STM32 (ARM Cortex-M): profissional pra embarcados.\n• O que estudar: arquiteturas de processadores embarcados."
              }
            ]
          },
          {
            "name": "Automacao Industrial Intro",
            "books": [
              "Introduction to Industrial Automation — Ahmad",
              "PLC Programming — Bolton",
              "Automacao Industrial — Moraes & Castrucci"
            ],
            "items": [
              {
                "w": "Conceitos: automacao, instrumentacao, malha aberta vs fechada",
                "s": "Conceitos automacao instrumentacao tutorial portugues | open closed loop control tutorial | conceitos explained for beginners | conceitos explicação em português",
                "d": "• O que é: Automacao: substituir trabalho manual por maquinas/software..\n• Conceitos-chave: Instrumentacao: medir (sensores) e controlar (atuadores).. Malha aberta: sem feedback.. Malha fechada: com feedback (PID).\n• O que estudar: automacao, instrumentacao, malha aberta vs fechada."
              },
              {
                "w": "PLCs (Controladores Logicos Programaveis): ladder, structured text",
                "s": "PLCs Controladores Logicos Programaveis explicação português | PLCs Controladores Logicos explained | plcs controladores logicos programaveis tutorial completo | PLCs Controladores Logicos Programaveis examples and practice",
                "d": "• O que é: PLC/CLP: computador industrial robusto..\n• Conceitos-chave: Linguagens: Ladder (visual, eletricistas entendem), Structured Text (parecido com Pascal).. IEC 61131-3.. Siemens, Allen-Bradley, Schneider.\n• O que estudar: ladder, structured text."
              },
              {
                "w": "Sensores industriais: temperatura, pressao, vazao, nivel, proximidade",
                "s": "Sensores industriais temperatura tutorial portugues | industrial sensors temperature pressure flow | sensores industriais explained for beginners | sensores industriais explicação em português",
                "d": "• O que é: RTD/termopar: temperatura..\n• Conceitos-chave: Bourdon/piezoeletrico: pressao.. Ultrassonico/capacitivo: nivel.. Indutivo/capacitivo: proximidade.. 4-20mA: sinal padrao.\n• Exemplos: Eletromagnetico/vortex: vazao..\n• O que estudar: temperatura, pressao, vazao, nivel, proximidade."
              },
              {
                "w": "Redes industriais: Modbus, PROFINET, EtherNet/IP, OPC UA",
                "s": "industrial networks Modbus PROFINET EtherNet/IP | Redes industriais Modbus tutorial portugues | redes industriais explained for beginners | redes industriais explicação em português",
                "d": "• O que é: Modbus: simples, antigo, ainda usado (RTU/TCP)..\n• Conceitos-chave: PROFINET: Siemens.. EtherNet/IP: Allen-Bradley.. OPC UA: padrao moderno de interoperabilidade.. Industria 4.0: IT + OT convergindo.\n• O que estudar: Modbus, PROFINET, EtherNet/IP, OPC UA."
              },
              {
                "w": "SCADA, HMI, MES: supervisao e controle",
                "s": "SCADA supervisao controle tutorial portugues | sistemas supervisorios SCADA | scada hmi mes explained for beginners | scada hmi mes explicação em português",
                "d": "• O que é: HMI: tela de operacao..\n• Conceitos-chave: SCADA: supervisao + controle remoto.. MES: gestao da producao.. Piramide da automacao: campo > controle > supervisao > gestao.. Cybersecurity OT e critico.\n• O que estudar: supervisao e controle."
              },
              {
                "w": "Seguranca industrial: NR-12, SIL (Safety Integrity Level), funcoes de seguranca",
                "s": "Seguranca industrial explicação português | safety integrity level tutorial | seguranca industrial explained for beginners | Seguranca industrial examples and practice",
                "d": "• O que é: NR-12: norma brasileira de seguranca em maquinas..\n• Conceitos-chave: SIL: nivel de integridade de seguranca (1 a 4).. Funcoes de seguranca: parada de emergencia, cortina de luz, tapete de seguranca.. Safety PLC: controlador dedicado a seguranca (redundante).. Em automacao, seguranca e OBRIGACAO legal.\n• O que estudar: NR-12, SIL (Safety Integrity Level), funcoes de seguranca."
              }
            ]
          },
          {
            "name": "Sistemas de Tempo Real (RTOS)",
            "books": [
              "Real-Time Systems — Jane W. S. Liu",
              "Making Embedded Systems — Elecia White",
              "Mastering the FreeRTOS Real-Time Kernel — Richard Barry"
            ],
            "items": [
              {
                "w": "Tempo real: hard vs soft real-time, deadlines, determinismo, jitter",
                "s": "Tempo real explicação português | determinism tutorial | tempo real explained for beginners | Tempo real examples and practice",
                "d": "• O que é: Hard real-time: perder deadline é falha catastrófica (airbag)..\n• Conceitos-chave: Soft real-time: tolerável (streaming).. Determinismo = previsibilidade de tempo.\n• O que estudar: hard vs soft real-time, deadlines, determinismo, jitter."
              },
              {
                "w": "FreeRTOS: tasks, prioridades, preemptive scheduling, idle task, tick interrupt",
                "s": "preemptive scheduling tutorial | FreeRTOS explicação português | freertos explained for beginners | FreeRTOS examples and practice",
                "d": "• O que é: FreeRTOS é RTOS gratuito popular: criar tasks com prioridades, scheduler preemptivo interrompe task de menor prioridade quando maior fica pronta.\n• O que estudar: tasks, prioridades, preemptive scheduling, idle task, tick interrupt."
              },
              {
                "w": "Sincronização em RTOS: semáforos, mutex, queues, event groups, notificações entre tasks",
                "s": "Sincronizao em RTOS explicação português | RTOS synchronization tutorial | sincronizao em rtos explained for beginners | Sincronização em RTOS examples and practice",
                "d": "• O que é: Tasks comunicam via: queues (dados), semáforos (sinalização), mutex (exclusão mútua), event groups (múltiplos eventos)..\n• Conceitos-chave: Cuidado com deadlock.\n• O que estudar: semáforos, mutex, queues, event groups, notificações entre tasks."
              },
              {
                "w": "Escalonamento de tempo real: Rate Monotonic (RM), Earliest Deadline First (EDF), análise de escalonabilidade",
                "s": "Escalonamento de tempo real explicação português | earliest deadline first tutorial | escalonamento de tempo real explained for beginners | Escalonamento de tempo real examples and practice",
                "d": "• O que é: RM: prioridade pela frequência (mais rápido = mais prioritário)..\n• Conceitos-chave: EDF: prioridade pelo deadline mais próximo.. Análise verifica se todos cumprem deadlines.\n• O que estudar: Rate Monotonic (RM), Earliest Deadline First (EDF), análise de escalonabilidade."
              },
              {
                "w": "Inversão de prioridade: problema clássico, priority inheritance protocol, priority ceiling",
                "s": "Inverso de prioridade explicação português | priority inheritance tutorial | inverso de prioridade explained for beginners | Inversão de prioridade examples and practice",
                "d": "• O que é: Task de alta prioridade bloqueada por task de baixa via mutex (bug no Mars Pathfinder!)..\n• Conceitos-chave: Priority inheritance: empresta prioridade temporariamente.\n• O que estudar: problema clássico, priority inheritance protocol, priority ceiling."
              },
              {
                "w": "Watchdog timer, interrupt latency, bare-metal vs RTOS: quando cada abordagem é adequada",
                "s": "Watchdog timer interrupt latency baremetal vs RTOS explicação português | bare-metal vs RTOS tutorial | watchdog timer interrupt latency baremetal vs rtos explained for beginners | Watchdog timer interrupt latency baremetal vs examples and practice",
                "d": "• O que é: Watchdog reseta sistema se travar..\n• Conceitos-chave: Bare-metal: simples, determinístico.. RTOS: multi-task, abstrações.. Escolher baseado em complexidade e requisitos de timing.\n• O que estudar: quando cada abordagem é adequada."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "advanced",
    "name": "🟠 AVANCADO",
    "css": "orange",
    "time": "~18-36 meses",
    "desc": "Especializacao e sistemas reais de producao.",
    "areas": [
      {
        "name": "🏗️ Arquitetura de Software",
        "topics": [
          {
            "name": "System Design",
            "books": [
              "System Design Interview — Alex Xu",
              "Designing Data-Intensive Apps — Kleppmann",
              "Clean Architecture — Robert Martin"
            ],
            "items": [
              {
                "w": "Microservices, monolito, event-driven, CQRS",
                "s": "Microservices monolito event-driven tutorial portugues | CQRS event sourcing tutorial | microservices monolito eventdriven cqrs explained for beginners | microservices monolito eventdriven cqrs explicação em português",
                "d": "• O que é: Monolito: simples pra comecar..\n• Conceitos-chave: Micro: escala independente.. Event-driven: desacoplado.. CQRS: leitura/escrita separadas."
              },
              {
                "w": "Message queues: Kafka, RabbitMQ, Redis Pub/Sub",
                "s": "Message queues Kafka tutorial portugues | message queue Kafka RabbitMQ | message queues explained for beginners | message queues explicação em português",
                "d": "• O que é: Kafka: streaming de eventos..\n• Conceitos-chave: RabbitMQ: filas tradicionais.. Desacoplar servicos.. Resiliencia.\n• O que estudar: Kafka, RabbitMQ, Redis Pub/Sub."
              },
              {
                "w": "Caching, CDN, Load Balancing, Rate Limiting",
                "s": "Caching Load Balancing tutorial portugues | caching strategies CDN tutorial | caching cdn load balancing rate limiting explained for beginners | caching cdn load balancing rate limiting explicação em português",
                "d": "• O que é: Redis/Memcached..\n• Conceitos-chave: CDN: distribuir estaticos.. LB: round-robin, least-connections.. Rate limit: proteger API."
              },
              {
                "w": "Design Patterns avancados: Repository, UoW, Mediator, Saga",
                "s": "Design Patterns avancados tutorial portugues | advanced design patterns tutorial | design patterns avancados explained for beginners | design patterns avancados explicação em português",
                "d": "• O que é: Repository: abstrair dados..\n• Conceitos-chave: UoW: transacao.. Mediator: desacoplar.. Saga: transacoes distribuidas.\n• O que estudar: Repository, UoW, Mediator, Saga."
              },
              {
                "w": "API Gateway, BFF (Backend for Frontend), GraphQL Federation",
                "s": "Gateway Backend Frontend tutorial portugues | BFF backend for frontend tutorial | api gateway bff backend for frontend graphql federation explained for beginners | api gateway bff backend for frontend graphql federation explicação em português",
                "d": "• O que é: API Gateway: ponto de entrada unico (Kong, AWS API Gateway)..\n• Conceitos-chave: BFF: backend customizado por cliente (mobile vs web).. GraphQL Federation: combinar multiplos GraphQL services.. Simplifica o frontend, complexidade no backend."
              },
              {
                "w": "Event Sourcing em detalhe: event store, projections, snapshots, CQRS completo",
                "s": "Event Sourcing detalhe tutorial portugues | CQRS event sourcing implementation | event sourcing em detalhe explained for beginners | event sourcing em detalhe explicação em português",
                "d": "• O que é: Event store: append-only log de eventos..\n• Conceitos-chave: Projection: reconstruir estado a partir de eventos.. Snapshot: checkpoint pra nao replay desde o inicio.. CQRS: write model (eventos) separado do read model (projection).. EventStoreDB, Axon Framework.\n• O que estudar: event store, projections, snapshots, CQRS completo."
              },
              {
                "w": "Domain-Driven Design (DDD): bounded contexts, aggregates, entities, value objects, domain events, ubiquitous language",
                "s": "DomainDriven Design DDD explicação português | domain-driven design tutorial | domaindriven design ddd explained for beginners | DomainDriven Design DDD examples and practice",
                "d": "• O que é: DDD modela software em torno do domínio de negócio: bounded context isola domínios, aggregates garantem consistência, ubiquitous language alinha time e negócio.\n• O que estudar: bounded contexts, aggregates, entities, value objects, domain events, ubiquitous language."
              }
            ]
          },
          {
            "name": "Escalabilidade e Resiliência",
            "books": [
              "Designing Data-Intensive Applications — Martin Kleppmann",
              "Building Microservices — Sam Newman",
              "Release It! — Michael T. Nygard"
            ],
            "items": [
              {
                "w": "Escalabilidade: horizontal vs vertical, stateless services, sharding strategies",
                "s": "Escalabilidade explicação português | horizontal vertical tutorial | escalabilidade explained for beginners | Escalabilidade examples and practice",
                "d": "• O que é: Horizontal: mais máquinas..\n• Conceitos-chave: Vertical: máquina maior.. Stateless permite horizontal.. Sharding distribui dados por chave.\n• O que estudar: horizontal vs vertical, stateless services, sharding strategies."
              },
              {
                "w": "Resiliência: circuit breaker, retry com backoff, timeout, bulkhead, fallback",
                "s": "Resilincia explicação português | circuit breaker tutorial | resilincia explained for beginners | Resiliência examples and practice",
                "d": "• O que é: Sistemas resilientes falham gracefully: circuit breaker para serviço quebrado, bulkhead isola falhas, fallback dá resposta alternativa.\n• O que estudar: circuit breaker, retry com backoff, timeout, bulkhead, fallback."
              },
              {
                "w": "Consistência: strong vs eventual, CAP trade-offs na prática, conflict resolution",
                "s": "Consistncia explicação português | conflict resolution tutorial | consistncia explained for beginners | Consistência examples and practice",
                "d": "• O que é: Strong consistency: todos veem o mesmo dado..\n• Conceitos-chave: Eventual: convergem com tempo..\n• O que estudar: strong vs eventual, CAP trade-offs na prática, conflict resolution."
              },
              {
                "w": "Observabilidade em arquitetura: distributed tracing (Jaeger), correlation IDs, SLOs/SLIs/SLAs",
                "s": "Observabilidade em arquitetura explicação português | distributed tracing tutorial | observabilidade em arquitetura explained for beginners | Observabilidade em arquitetura examples and practice",
                "d": "• O que é: Em microsserviços, um request passa por vários serviços..\n• Conceitos-chave: Tracing correlaciona tudo.. SLOs definem metas de confiabilidade.\n• O que estudar: distributed tracing (Jaeger), correlation IDs, SLOs/SLIs/SLAs."
              },
              {
                "w": "System design interview: framework (requirements → estimation → design → deep dive → tradeoffs)",
                "s": "System design interview explicação português | system design interview tutorial | system design interview explained for beginners | System design interview examples and practice",
                "d": "• O que é: Processo estruturado: entender requisitos, estimar escala (QPS, storage), desenhar componentes, aprofundar ponto crítico, discutir tradeoffs.\n• O que estudar: framework (requirements → estimation → design → deep dive → tradeoffs)."
              },
              {
                "w": "Estudos de caso: design de Twitter, Uber, WhatsApp, YouTube — decisões reais de arquitetura",
                "s": "Estudos de caso explicação português | Twitter Uber WhatsApp YouTube | estudos de caso tutorial completo | estudos de caso explained for beginners",
                "d": "• O que é: Analisar como sistemas reais resolvem problemas: timeline de Twitter (fan-out), Uber (geolocalização), YouTube (CDN + encoding).\n• O que estudar: design de Twitter, Uber, WhatsApp, YouTube — decisões reais de arquitetura."
              }
            ]
          }
        ]
      },
      {
        "name": "🧠 Deep Learning",
        "topics": [
          {
            "name": "Redes Neurais e Frameworks",
            "books": [
              "Deep Learning — Goodfellow et al. (gratuito)",
              "Hands-On Machine Learning — Geron (parte 2)",
              "Deep Learning with Python — Francois Chollet"
            ],
            "items": [
              {
                "w": "Perceptron, MLP, Backpropagation (do zero)",
                "s": "Perceptron MLP Backpropagation do zero explicação português | Perceptron Backpropagation zero explained | perceptron mlp backpropagation do zero tutorial completo | Perceptron MLP Backpropagation do zero examples and practice",
                "d": "• O que é: Neuronio: soma ponderada + ativacao..\n• Conceitos-chave: Forward pass > loss > backward pass.."
              },
              {
                "w": "PyTorch: tensores, autograd, Dataset, DataLoader, treino",
                "s": "PyTorch tensores autograd explained | pytorch tensors autograd tutorial | pytorch explicação em português | PyTorch examples and practice",
                "d": "• O que é: torch.tensor, .backward(), nn.Module, DataLoader..\n• Conceitos-chave: GPU: .to('cuda').. Prefira PyTorch a TF.\n• O que estudar: tensores, autograd, Dataset, DataLoader, treino."
              },
              {
                "w": "Treinamento: batch norm, dropout, lr scheduling, mixed precision",
                "s": "Treinamento batch norm tutorial portugues | mixed precision training tutorial | treinamento explained for beginners | treinamento explicação em português",
                "d": "• O que é: BatchNorm, Dropout, LR scheduling (cosine, warmup)..\n• Conceitos-chave: Mixed precision (fp16).. Gradient clipping.\n• O que estudar: batch norm, dropout, lr scheduling, mixed precision."
              },
              {
                "w": "CNNs: convolucao, pooling, ResNet, transfer learning",
                "s": "CNNs convolucao pooling tutorial portugues | CNN convolutional neural network | cnns explained for beginners | cnns explicação em português",
                "d": "• O que é: Conv2d, MaxPool, flatten, FC..\n• Conceitos-chave: ResNet: skip connections.. Transfer learning: treinar no seu dado com modelo pre-treinado.\n• O que estudar: convolucao, pooling, ResNet, transfer learning."
              },
              {
                "w": "RNNs, LSTM, GRU, Sequence-to-Sequence",
                "s": "RNNs LSTM GRU SequencetoSequence explicação português | RNNs LSTM Sequence-to-Sequence explained | rnns lstm gru sequencetosequence tutorial completo | RNNs LSTM GRU SequencetoSequence examples and practice",
                "d": "• O que é: RNN: memoria sequencial..\n• Conceitos-chave: LSTM: resolve vanishing gradient.. GRU: LSTM simplificado.. Seq2Seq: traducao."
              },
              {
                "w": "Transformers e Attention: o coraoco de tudo moderno",
                "s": "Transformers Attention coraoco tutorial portugues | transformer attention mechanism | transformers e attention explained for beginners | transformers e attention explicação em português",
                "d": "• O que é: Self-attention: cada token atende todos..\n• Conceitos-chave: Positional encoding.. Base de GPT, BERT, tudo moderno.\n• O que estudar: o coraoco de tudo moderno."
              },
              {
                "w": "GANs, VAEs, Diffusion Models",
                "s": "GANs VAEs Diffusion Models explicação português | VAE generative model tutorial | gans vaes diffusion models explained for beginners | GANs VAEs Diffusion Models examples and practice",
                "d": "• O que é: GAN: generator vs discriminator..\n• Conceitos-chave: VAE: latent space.. Diffusion: denoise iterativo (Stable Diffusion)."
              }
            ]
          },
          {
            "name": "NLP",
            "books": [
              "Speech and Language Processing — Jurafsky & Martin (gratuito)",
              "NLP with Transformers — Tunstall et al.",
              "Foundations of Statistical NLP — Manning & Schutze"
            ],
            "items": [
              {
                "w": "Tokenizacao, embeddings, Word2Vec, BERT, GPT",
                "s": "Tokenizacao embeddings Word2Vec tutorial portugues | NLP tokenization embeddings Word2Vec | tokenizacao embeddings word2vec bert gpt explained for beginners | tokenizacao embeddings word2vec bert gpt explicação em português",
                "d": "• O que é: Tokenizar: texto>numeros..\n• Conceitos-chave: Word2Vec, BERT (bidirecional), GPT (autoregressivo).\n• Exemplos: Embeddings: palavras como vetores.."
              },
              {
                "w": "Hugging Face Transformers: fine-tuning, pipelines",
                "s": "Hugging Face Transformers explicação português | Hugging Face Transformers explained | hugging face transformers tutorial completo | Hugging Face Transformers examples and practice",
                "d": "• O que é: from transformers import pipeline..\n• Conceitos-chave: Fine-tune no seu dataset.. Hub de modelos.\n• O que estudar: fine-tuning, pipelines."
              },
              {
                "w": "Sentiment, NER, summarization, question answering",
                "s": "Sentiment summarization question tutorial portugues | sentiment analysis NER tutorial | sentiment ner summarization question answering explained for beginners | sentiment ner summarization question answering explicação em português",
                "d": "• O que é: Tarefas NLP classicas..\n• Conceitos-chave: Pipeline HF facilita.. Fine-tune pra dominio especifico."
              },
              {
                "w": "Speech e Audio: Whisper (STT), TTS, audio classification, speaker diarization",
                "s": "Speech Audio Whisper tutorial portugues | audio classification deep learning | speech e audio explained for beginners | speech e audio explicação em português",
                "d": "• O que é: Whisper (OpenAI): speech-to-text state-of-the-art, multilingual..\n• Conceitos-chave: TTS: Bark, XTTS, ElevenLabs.. Audio classification: genero musical, emocoes, sons ambientais.. Speaker diarization: quem falou quando.. Modelos multimodais unificam texto+audio+imagem.\n• O que estudar: Whisper (STT), TTS, audio classification, speaker diarization."
              },
              {
                "w": "Text generation, language modeling, decoding strategies (beam, top-k, top-p)",
                "s": "Text generation language tutorial portugues | decoding strategies beam search top-k | text generation language modeling decoding strategies beam topk topp explained for beginners | text generation language modeling decoding strategies beam topk topp explicação em português",
                "d": "• O que é: Language model: prever proxima palavra..\n• Conceitos-chave: Decoding: greedy (guloso), beam search (explorar), top-k (limitar vocabulario), top-p/nucleus (limitar por probabilidade acumulada).. Temperature: criatividade vs determinismo.. Base de chatbots, codigo, resumos."
              },
              {
                "w": "Multilingual NLP: modelos multilinguais, XLM-R, mBART, traducao, cross-lingual transfer",
                "s": "Multilingual NLP explicação português | XLM-R mBART multilingual tutorial | multilingual nlp explained for beginners | Multilingual NLP examples and practice",
                "d": "• O que é: BERTimbau: BERT treinado em portugues..\n• Conceitos-chave: XLM-R: multilingual (100+ idiomas).. mBART: traducao multilingual.. Cross-lingual: treinar em ingles, usar em portugues (zero-shot).. Importante: maioria dos modelos e english-centric.. Pra PT-BR: BERTimbau, Sabia (Maritaca AI), ou fine-tune multilingual.\n• O que estudar: modelos multilinguais, XLM-R, mBART, traducao, cross-lingual transfer."
              }
            ]
          }
        ]
      },
      {
        "name": "🤖 AI Engineering",
        "topics": [
          {
            "name": "LLMs, RAG, Agents, APIs",
            "books": [
              "Building LLM Apps — Valentino Gagliardi",
              "Designing ML Systems — Chip Huyen",
              "AI Engineering — Chip Huyen"
            ],
            "items": [
              {
                "w": "OpenAI API / Anthropic API: chat, system prompts, streaming",
                "s": "OpenAI API  Anthropic API explicação português | LLM API chat completion tutorial | openai api / anthropic api explained for beginners | OpenAI API / Anthropic API examples and practice",
                "d": "• O que é: messages: system+user+assistant..\n• Conceitos-chave: Temperature, max_tokens, streaming.. Structured outputs.\n• O que estudar: chat, system prompts, streaming."
              },
              {
                "w": "Prompt Engineering: few-shot, CoT, self-consistency",
                "s": "Prompt Engineering few-shot tutorial portugues | prompt engineering techniques | prompt engineering explained for beginners | prompt engineering explicação em português",
                "d": "• O que é: Zero-shot, few-shot, chain-of-thought, self-consistency..\n• Conceitos-chave: System prompt design.. Prompt templates.\n• O que estudar: few-shot, CoT, self-consistency."
              },
              {
                "w": "Embeddings e Vector Databases (Pinecone, Chroma, pgvector)",
                "s": "Embeddings Vector Databases tutorial portugues | Pinecone Chroma pgvector tutorial | embeddings e vector databases pinecone chroma pgvector explained for beginners | embeddings e vector databases pinecone chroma pgvector explicação em português",
                "d": "• O que é: Texto>vetor (OpenAI embeddings, Sentence Transformers)..\n• Conceitos-chave: Busca por similaridade.. pgvector: Postgres nativo."
              },
              {
                "w": "RAG: Retrieval-Augmented Generation",
                "s": "RAG retrieval augmented generation | RAG tutorial LangChain | RAG architecture tutorial | Retrieval-Augmented Generation explained",
                "d": "• O que é: Indexar docs > buscar relevantes > alimentar LLM..\n• Conceitos-chave: Chunks, overlap, re-ranking.. Reduz alucinacao.\n• O que estudar: Retrieval-Augmented Generation."
              },
              {
                "w": "Agents: LangChain, LangGraph, tool use, function calling",
                "s": "Agents LangChain LangGraph explained | function calling OpenAI tutorial | agents explicação em português | Agents examples and practice",
                "d": "• O que é: Agente: LLM + ferramentas..\n• Conceitos-chave: Decide qual tool usar.. ReAct pattern.. Multi-step reasoning.\n• O que estudar: LangChain, LangGraph, tool use, function calling."
              },
              {
                "w": "Multimodal: vision, audio, video",
                "s": "Multimodal vision audio tutorial portugues | multimodal AI vision audio | multimodal explained for beginners | multimodal explicação em português",
                "d": "• O que é: GPT-4V: imagem+texto..\n• Conceitos-chave: Whisper: audio>texto.. Modelos multimodais unificados.\n• O que estudar: vision, audio, video."
              },
              {
                "w": "Fine-tuning, LoRA, QLoRA, RLHF, DPO",
                "s": "Fine-tuning LoRA QLoRA tutorial portugues | parameter efficient fine-tuning | finetuning lora qlora rlhf dpo explained for beginners | finetuning lora qlora rlhf dpo explicação em português",
                "d": "• O que é: Fine-tune: adaptar modelo ao seu dominio..\n• Conceitos-chave: LoRA: eficiente (poucos parametros).. RLHF/DPO: alinhar com preferencias humanas."
              },
              {
                "w": "Safety, guardrails, eval, red-teaming",
                "s": "Safety guardrails eval tutorial portugues | AI evaluation benchmarks tutorial | safety guardrails eval redteaming explained for beginners | safety guardrails eval redteaming explicação em português",
                "d": "• O que é: Guardrails: limitar outputs..\n• Conceitos-chave: Eval: metricas automaticas.. Red-team: encontrar falhas.. Responsible AI."
              }
            ]
          },
          {
            "name": "Avaliação, Segurança e Produção de LLMs",
            "books": [
              "Building LLM-Powered Applications — Valentina Alto",
              "Prompt Engineering for Generative AI — James Phoenix & Mike Taylor",
              "AI Engineering — Chip Huyen"
            ],
            "items": [
              {
                "w": "Avaliação de LLMs: benchmarks (MMLU, HumanEval), métricas (BLEU, ROUGE), human eval, LLM-as-judge",
                "s": "Avaliao de LLMs explicação português | LLM evaluation tutorial | avaliao de llms explained for beginners | Avaliação de LLMs examples and practice",
                "d": "• O que é: Medir qualidade de LLM: benchmarks padronizados, métricas automáticas (BLEU pra tradução, ROUGE pra resumo), e avaliação humana.\n• O que estudar: benchmarks (MMLU, HumanEval), métricas (BLEU, ROUGE), human eval, LLM-as-judge."
              },
              {
                "w": "Guardrails e segurança: content filtering, input/output validation, PII detection, jailbreak prevention",
                "s": "Guardrails e segurana explicação português | content filter tutorial | guardrails e segurana explained for beginners | Guardrails e segurança examples and practice",
                "d": "• O que é: Proteger LLMs em produção: filtrar conteúdo tóxico, detectar dados pessoais (PII), prevenir prompt injection e jailbreaks.\n• O que estudar: content filtering, input/output validation, PII detection, jailbreak prevention."
              },
              {
                "w": "Fine-tuning prático: LoRA, QLoRA, dataset preparation, RLHF vs DPO, quando fine-tune vs RAG",
                "s": "Finetuning prtico explicação português | dataset prep tutorial | finetuning prtico explained for beginners | Finetuning prático examples and practice",
                "d": "• O que é: LoRA adapta modelo eficientemente (poucos parâmetros)..\n• Conceitos-chave: DPO é alternativa mais simples ao RLHF.. Fine-tune para estilo, RAG para conhecimento.\n• O que estudar: LoRA, QLoRA, dataset preparation, RLHF vs DPO, quando fine-tune vs RAG."
              },
              {
                "w": "Custos e otimização: token counting, caching de responses, modelo routing, model distillation",
                "s": "Custos e otimizao explicação português | token counting tutorial | custos e otimizao explained for beginners | Custos e otimização examples and practice",
                "d": "• O que é: Otimizar custos: cache responses comuns, rotear queries simples para modelos menores, distillar modelo grande em menor.\n• O que estudar: token counting, caching de responses, modelo routing, model distillation."
              },
              {
                "w": "Observabilidade de LLM: logging de prompts/responses, latência, qualidade ao longo do tempo",
                "s": "Observabilidade de LLM explicação português | quality monitoring tutorial | observabilidade de llm explained for beginners | Observabilidade de LLM examples and practice",
                "d": "• O que é: Monitorar LLMs em produção: log de interações, medir latência, detectar degradação de qualidade, A/B testing de prompts.\n• O que estudar: logging de prompts/responses, latência, qualidade ao longo do tempo."
              },
              {
                "w": "Multimodal e além: vision APIs, speech-to-text, text-to-image, document understanding",
                "s": "Multimodal e alm explicação português | speech-to-text tutorial | multimodal e alm explained for beginners | Multimodal e além examples and practice",
                "d": "• O que é: LLMs além de texto: analisar imagens (GPT-4V), transcrever áudio (Whisper), gerar imagens (DALL-E), entender documentos.\n• O que estudar: vision APIs, speech-to-text, text-to-image, document understanding."
              }
            ]
          }
        ]
      },
      {
        "name": "🧬 Bioinformatica & Computacao Biologica",
        "topics": [
          {
            "name": "Biologia Essencial pra Computacao",
            "books": [
              "Biologia Molecular da Celula — Alberts et al.",
              "Genetics: From Genes to Genomes — Hartwell et al.",
              "Khan Academy Biology (gratuito)"
            ],
            "items": [
              {
                "w": "Celula: membrana, nucleo, organelas, procariota vs eucariota",
                "s": "Celula membrana nucleo tutorial portugues | biologia celular basico tutorial | celula explained for beginners | celula explicação em português",
                "d": "• O que é: Celula = unidade basica da vida..\n• Conceitos-chave: Procariota (bacteria): sem nucleo.. Eucariota (humanos): com nucleo.. Nucleo: contem DNA.. Mitocondria: energia (ATP).. Ribossomos: fabricam proteinas.. Membrana: controla o que entra/sai.\n• O que estudar: membrana, nucleo, organelas, procariota vs eucariota."
              },
              {
                "w": "DNA, genes, cromossomos, replicacao, mutacoes",
                "s": "genes cromossomos replicacao tutorial portugues | DNA genes chromosomes replication | dna genes cromossomos replicacao mutacoes explained for beginners | dna genes cromossomos replicacao mutacoes explicação em português",
                "d": "• O que é: DNA: dupla helice, 4 bases (A-T, C-G)..\n• Conceitos-chave: Gene: trecho de DNA que codifica proteina.. Cromossomos: DNA empacotado (humanos: 23 pares).. Replicacao: copiar DNA antes de dividir.. Mutacao: erro na copia (pode ser bom, ruim, ou neutro).. Base da evolucao e doencas geneticas."
              },
              {
                "w": "Central dogma: DNA > RNA > Proteina (transcricao e traducao)",
                "s": "transcription translation protein synthesis | Central dogma Proteina tutorial portugues | central dogma explained for beginners | central dogma explicação em português",
                "d": "• O que é: Transcricao: DNA > mRNA (no nucleo)..\n• Conceitos-chave: Traducao: mRNA > proteina (nos ribossomos).. Codons: 3 letras de RNA = 1 aminoacido.. 20 aminoacidos combinados formam todas proteinas.. Proteinas fazem TUDO: enzimas, estrutura, defesa, transporte.\n• O que estudar: DNA > RNA > Proteina (transcricao e traducao)."
              },
              {
                "w": "Genetica: heranca, dominante/recessivo, genoma, sequenciamento",
                "s": "Genetica heranca dominante/recessivo tutorial portugues | genetics inheritance genome sequencing | genetica explained for beginners | genetica explicação em português",
                "d": "• O que é: Mendel: dominante/recessivo..\n• Conceitos-chave: Genoma: todo o DNA de um organismo.. Genoma humano: ~20.000 genes, 3 bilhoes de pares de base.. Sequenciamento: 'ler' as letras do DNA.. Human Genome Project (2003): primeiro genoma humano completo.. Hoje custa ~$200.\n• O que estudar: heranca, dominante/recessivo, genoma, sequenciamento."
              },
              {
                "w": "Evolucao: selecao natural, filogenia, por que importa pra computacao",
                "s": "Evolucao selecao natural tutorial portugues | evolution natural selection phylogeny | evolucao explained for beginners | evolucao explicação em português",
                "d": "• O que é: Selecao natural: quem se adapta, sobrevive e reproduz..\n• Conceitos-chave: Filogenia: arvore da vida.. Pra computacao: algoritmos geneticos (otimizacao inspirada em evolucao), filogenetica computacional (rastrear virus), bioinformatica (comparar sequencias entre especies).\n• O que estudar: selecao natural, filogenia, por que importa pra computacao."
              },
              {
                "w": "Microbiologia e virus: bacterias, virus, vacinas, resistencia a antibioticos",
                "s": "Microbiologia e virus explicação português | microbiology basics viruses bacteria | microbiologia e virus tutorial completo | microbiologia e virus explained for beginners",
                "d": "• O que é: Bacterias: unicelulares, reproduzem rapido..\n• Conceitos-chave: Virus: nao sao 'vivos' (precisam de hospedeiro).. Vacina: ensinar imunidade sem causar doenca.. Resistencia a antibioticos: evolucao em tempo real.. Bioinformatica: sequenciar patogenos, rastrear mutacoes (COVID variantes), descobrir antibioticos novos com ML.\n• O que estudar: bacterias, virus, vacinas, resistencia a antibioticos."
              }
            ]
          },
          {
            "name": "Fundamentos de Bioinformatica",
            "books": [
              "Bioinformatics Algorithms — Compeau & Pevzner",
              "Bioinformatics: Sequence and Genome Analysis — Mount",
              "Introduction to Bioinformatics — Lesk"
            ],
            "items": [
              {
                "w": "O que e bioinformatica: biologia + computacao, por que importa",
                "s": "bioinformatica biologia computacao tutorial portugues | o que e bioinformatica tutorial | o que e bioinformatica explained for beginners | o que e bioinformatica explicação em português",
                "d": "• O que é: Bioinformatica: usar computacao pra analisar dados biologicos..\n• Conceitos-chave: DNA = string de 4 letras (A, T, C, G).. Genoma humano: 3 bilhoes de letras.. Sequenciamento ficou barato (NGS), dados explodiram.. Sem computacao, impossivel analisar.\n• O que estudar: biologia + computacao, por que importa."
              },
              {
                "w": "DNA, RNA, proteinas: central dogma, sequencias, alinhamento",
                "s": "proteinas central dogma tutorial portugues | sequence alignment bioinformatics | dna rna proteinas explained for beginners | dna rna proteinas explicação em português",
                "d": "• O que é: DNA > (transcricao) > RNA > (traducao) > Proteina..\n• Conceitos-chave: Sequencias: strings de ATCG (DNA) ou aminoacidos (proteina).. Alinhamento: comparar 2 sequencias (quao parecidas?).. BLAST: ferramenta #1 (buscar sequencia em bancos de dados).. Programacao dinamica aplicada!.\n• O que estudar: central dogma, sequencias, alinhamento."
              },
              {
                "w": "Bancos de dados biologicos: GenBank, UniProt, PDB, ENSEMBL",
                "s": "Bancos dados biologicos tutorial portugues | GenBank UniProt PDB biological databases | bancos de dados biologicos explained for beginners | bancos de dados biologicos explicação em português",
                "d": "• O que é: GenBank/NCBI: sequencias de DNA/RNA..\n• Conceitos-chave: UniProt: proteinas.. PDB: estruturas 3D de proteinas.. ENSEMBL: genomas anotados.. Todos gratuitos e publicos.. Biopython: biblioteca Python pra acessar e processar.\n• O que estudar: GenBank, UniProt, PDB, ENSEMBL."
              },
              {
                "w": "Genomica: sequenciamento NGS, montagem de genomas, variantes (SNPs)",
                "s": "Genomica sequenciamento montagem tutorial portugues | SNP variant calling bioinformatics | genomica explained for beginners | genomica explicação em português",
                "d": "• O que é: NGS: sequenciar milhoes de fragmentos em paralelo..\n• Conceitos-chave: Variantes (SNPs): diferencas de 1 letra entre individuos.. Pipeline: FASTQ > align (BWA) > variant call (GATK) > annotate.. Aplicacao: diagnostico genetico, farmacogenomica.\n• Exemplos: Montagem: juntar fragmentos como quebra-cabeca..\n• O que estudar: sequenciamento NGS, montagem de genomas, variantes (SNPs)."
              },
              {
                "w": "Filogenetica: arvores evolutivas, alinhamento multiplo, UPGMA, Maximum Likelihood",
                "s": "Filogenetica arvores evolutivas tutorial portugues | phylogenetics evolutionary trees | filogenetica explained for beginners | filogenetica explicação em português",
                "d": "• O que é: Filogenetica: reconstruir historia evolutiva..\n• Conceitos-chave: Alinhamento multiplo (ClustalW, MUSCLE): comparar muitas sequencias.. Arvore: quem e parente de quem.. Metodos: UPGMA (simples), Neighbor-Joining, Maximum Likelihood (melhor).. Aplicacao: rastrear evolucao de virus (COVID).\n• O que estudar: arvores evolutivas, alinhamento multiplo, UPGMA, Maximum Likelihood."
              },
              {
                "w": "Proteinas: estrutura primaria/secundaria/terciaria/quaternaria, folding, funcao",
                "s": "protein primary secondary tertiary | protein folding problem tutorial | proteinas explained for beginners | proteinas explicação em português",
                "d": "• O que é: Primaria: sequencia de aminoacidos (string)..\n• Conceitos-chave: Secundaria: alpha-helix, beta-sheet (padroes locais).. Terciaria: forma 3D completa.. Quaternaria: multiplas cadeias juntas.. Forma = funcao.\n• Exemplos: Folding: como a sequencia determina a forma (problema de 50 anos, AlphaFold resolveu)..\n• O que estudar: estrutura primaria/secundaria/terciaria/quaternaria, folding, funcao."
              }
            ]
          },
          {
            "name": "ML e IA em Biologia",
            "books": [
              "Deep Learning for the Life Sciences — Bharath Ramsundar",
              "Machine Learning in Bioinformatics — Baldi & Brunak",
              "AlphaFold paper (Nature, 2021)"
            ],
            "items": [
              {
                "w": "AlphaFold: predicao de estrutura de proteinas, impacto revolucionario",
                "s": "AlphaFold predicao estrutura tutorial portugues | AlphaFold protein structure prediction | alphafold explained for beginners | alphafold explicação em português",
                "d": "• O que é: AlphaFold2 (DeepMind, 2021): preveu estrutura 3D de ~200M de proteinas..\n• Conceitos-chave: Problema de 50 anos resolvido.. Impacto: drug discovery, engenharia de proteinas, biologia estrutural.. Usa attention + MSA + evoformer.. Open source.. Mudou a biologia pra sempre.\n• O que estudar: predicao de estrutura de proteinas, impacto revolucionario."
              },
              {
                "w": "Drug discovery com ML: virtual screening, molecular generation, ADMET",
                "s": "Drug discovery virtual tutorial portugues | molecular generation AI tutorial | drug discovery com ml explained for beginners | drug discovery com ml explicação em português",
                "d": "• O que é: Virtual screening: testar milhoes de moleculas in silico (computador)..\n• Conceitos-chave: QSAR: prever atividade a partir de estrutura.. Molecular generation: gerar moleculas novas (VAE, GAN).. ADMET: prever absorcao, toxicidade.. Reduzir tempo de 10 anos pra meses.\n• O que estudar: virtual screening, molecular generation, ADMET."
              },
              {
                "w": "Genomica + ML: predicao de genes, classificacao de variantes, single-cell RNA-seq",
                "s": "Genomica predicao genes tutorial portugues | single cell RNA-seq analysis | genomica + ml explained for beginners | genomica + ml explicação em português",
                "d": "• O que é: Prever funcao de genes..\n• Conceitos-chave: Classificar variantes: patogenica ou benigna (ClinVar).. Single-cell: analisar expressao gene-a-gene em cada celula individual (milhares de celulas).. Ferramentas: Scanpy, Seurat.\n• Exemplos: Clustering pra descobrir tipos celulares..\n• O que estudar: predicao de genes, classificacao de variantes, single-cell RNA-seq."
              },
              {
                "w": "Ferramentas: Biopython, RDKit (moleculas), PyMOL (visualizacao 3D), Galaxy",
                "s": "RDKit molecular toolkit tutorial | Ferramentas explicação português | ferramentas explained for beginners | Ferramentas examples and practice",
                "d": "• O que é: Biopython: ler FASTA, acessar NCBI, alinhamento..\n• Conceitos-chave: RDKit: manipular moleculas (SMILES, fingerprints, descriptors).. PyMOL: visualizar proteinas 3D.. Galaxy: plataforma web pra pipelines (sem programar).. Jupyter + pandas + sklearn = bioinformatica pratica.\n• O que estudar: Biopython, RDKit (moleculas), PyMOL (visualizacao 3D), Galaxy."
              },
              {
                "w": "Protein language models: ESM, ProtTrans, representacao aprendida de proteinas",
                "s": "Protein language models explicação português | ProtTrans protein representation | protein language models tutorial completo | protein language models explained for beginners",
                "d": "• O que é: ESM (Meta): treinado em milhoes de sequencias de proteinas (como BERT pra texto)..\n• Conceitos-chave: ProtTrans: similar.. Embeddings de proteinas: capturar funcao, estrutura, evolucao.. Aplicacao: prever funcao, classificar familias, design de proteinas novas.. Revolucionando biologia computacional.\n• O que estudar: ESM, ProtTrans, representacao aprendida de proteinas."
              },
              {
                "w": "Dados de saude e IA: prontuarios eletronicos, imagens medicas, etica e privacidade",
                "s": "Dados de saude e IA explicação português | dados de saude e ia tutorial beginners | dados de saude e ia explained for beginners | Dados de saude e IA examples and practice",
                "d": "• O que é: Imagens medicas: CNN pra detectar cancer (mamografia, raio-X, histopatologia)..\n• Conceitos-chave: NLP pra prontuarios (extrair diagnosticos).. Wearables: dados continuos (batimentos, ECG).. Desafios: dados desbalanceados, privacidade (HIPAA, LGPD), vies (dataset predominantemente branco/masculino).. IA nao substitui medico — auxilia.\n• O que estudar: prontuarios eletronicos, imagens medicas, etica e privacidade."
              }
            ]
          }
        ]
      },
      {
        "name": "🗄️ Banco de Dados Avancado",
        "topics": [
          {
            "name": "PostgreSQL DBA & NoSQL",
            "books": [
              "PostgreSQL Internals — Suzuki",
              "Designing Data-Intensive Apps — Kleppmann",
              "Database Internals — Alex Petrov"
            ],
            "items": [
              {
                "w": "PostgreSQL: Window Functions, CTEs recursivas, PL/pgSQL",
                "s": "PostgreSQL window functions CTE recursive | PostgreSQL Window Functions tutorial 2025 | postgresql explained for beginners | postgresql explicação em português",
                "d": "• O que é: ROW_NUMBER, RANK, LAG, LEAD..\n• Conceitos-chave: WITH RECURSIVE: hierarquias, grafos.. PL/pgSQL: logica no banco (triggers, procedures).. Lateral joins.. GENERATE_SERIES.. FILTER clause.\n• O que estudar: Window Functions, CTEs recursivas, PL/pgSQL."
              },
              {
                "w": "Indices avancados: GiST, GIN, BRIN, partial, expression, covering",
                "s": "Indices avancados GiST tutorial portugues | partial expression index tutorial | indices avancados explained for beginners | indices avancados explicação em português",
                "d": "• O que é: GiST: geometria, full-text..\n• Conceitos-chave: GIN: JSONB, arrays, full-text.. BRIN: dados ordenados por data (muito eficiente).. Partial: WHERE ativo=true.. Expression: lower(email).. Covering (INCLUDE): evitar table lookup.\n• O que estudar: GiST, GIN, BRIN, partial, expression, covering."
              },
              {
                "w": "Particionamento: range, list, hash, partition pruning",
                "s": "Particionamento range list tutorial portugues | database partitioning strategies | particionamento explained for beginners | particionamento explicação em português",
                "d": "• O que é: Tabela com bilhoes de linhas? Particionar por data (range), tipo (list), hash..\n• Conceitos-chave: Partition pruning: query so acessa particoes relevantes.. ATTACH/DETACH: adicionar/remover particoes.. Manutencao mais facil (drop particao antiga vs delete).\n• O que estudar: range, list, hash, partition pruning."
              },
              {
                "w": "Replicacao: streaming, logical, failover, PgBouncer, connection pooling",
                "s": "Replicacao streaming logical tutorial portugues | PostgreSQL replication streaming logical | replicacao explained for beginners | replicacao explicação em português",
                "d": "• O que é: Streaming: replica bit-a-bit (read replicas)..\n• Conceitos-chave: Logical: replicar tabelas especificas.. Failover: promover replica se primario cai (Patroni).. PgBouncer: pool de conexoes (app abre 1000, PgBouncer usa 50 pro Postgres).. pgpool-II: load balancing.\n• O que estudar: streaming, logical, failover, PgBouncer, connection pooling."
              },
              {
                "w": "Backup: pg_dump, pg_basebackup, PITR, WAL archiving",
                "s": "Backup pg_dump pg_basebackup tutorial portugues | PostgreSQL backup PITR tutorial | backup explained for beginners | backup explicação em português",
                "d": "• O que é: pg_dump: logico (SQL)..\n• Conceitos-chave: pg_basebackup: fisico (binario).. PITR: Point-In-Time Recovery (restaurar ate minuto X).. WAL archiving: guardar logs de transacao.. Testar restore REGULARMENTE (backup que nao foi testado nao e backup).\n• O que estudar: pg_dump, pg_basebackup, PITR, WAL archiving."
              },
              {
                "w": "Performance: EXPLAIN ANALYZE BUFFERS, pg_stat_statements, vacuum, autovacuum",
                "s": "Performance EXPLAIN ANALYZE tutorial portugues | vacuum autovacuum tuning tutorial | performance explained for beginners | performance explicação em português",
                "d": "• O que é: EXPLAIN ANALYZE BUFFERS: plano de execucao + tempo real + IO..\n• Conceitos-chave: Seq scan vs index scan.. pg_stat_statements: queries mais lentas.. VACUUM: limpar dead tuples (MVCC).. Autovacuum: automatico mas precisa tuning.. shared_buffers, work_mem, effective_cache_size.\n• O que estudar: EXPLAIN ANALYZE BUFFERS, pg_stat_statements, vacuum, autovacuum."
              },
              {
                "w": "JSONB: indexacao, operadores, quando usar SQL vs document",
                "s": "JSONB indexacao operadores tutorial portugues | JSONB vs relacional tutorial | jsonb explained for beginners | jsonb explicação em português",
                "d": "• O que é: JSONB: dados semi-estruturados dentro do Postgres..\n• Conceitos-chave: Operadores: -> ->> @> ?.. Quando: schema flexivel, configuracoes, metadados.. NAO usar: dados altamente relacionais.. PostgreSQL = relacional + document store.\n• Exemplos: GIN index: busca rapida..\n• O que estudar: indexacao, operadores, quando usar SQL vs document."
              },
              {
                "w": "Seguranca: roles, Row Level Security (RLS), encriptacao, audit",
                "s": "Seguranca roles Level tutorial portugues | PostgreSQL security RLS tutorial | seguranca explained for beginners | seguranca explicação em português",
                "d": "• O que é: Roles: GRANT/REVOKE (principio do minimo privilegio)..\n• Conceitos-chave: RLS: controlar acesso por linha (multi-tenant).. pgcrypto: encriptar dados.. SSL: conexao criptografada.. pgAudit: log de quem acessou o que.. Nao use superuser na aplicacao!.\n• O que estudar: roles, Row Level Security (RLS), encriptacao, audit."
              }
            ]
          },
          {
            "name": "NoSQL, NewSQL e Estratégias de Dados",
            "books": [
              "Designing Data-Intensive Applications — Martin Kleppmann",
              "MongoDB: The Definitive Guide — Shannon Bradshaw",
              "Redis in Action — Josiah Carlson"
            ],
            "items": [
              {
                "w": "MongoDB: document model, aggregation pipeline, índices, sharding, replica sets",
                "s": "MongoDB explicação português | document model tutorial | mongodb explained for beginners | MongoDB examples and practice",
                "d": "• O que é: MongoDB armazena documentos JSON flexíveis..\n• Conceitos-chave: Aggregation pipeline para queries complexas.. Sharding para escalar horizontalmente.\n• O que estudar: document model, aggregation pipeline, índices, sharding, replica sets."
              },
              {
                "w": "Redis em profundidade: data structures (sorted sets, streams, HyperLogLog), persistence, Lua scripting",
                "s": "Redis em profundidade explicação português | HyperLogLog tutorial | redis em profundidade explained for beginners | Redis em profundidade examples and practice",
                "d": "• O que é: Redis vai além de cache: sorted sets para rankings, streams para event sourcing, HyperLogLog para contagem aproximada.\n• O que estudar: data structures (sorted sets, streams, HyperLogLog), persistence, Lua scripting."
              },
              {
                "w": "Cassandra/ScyllaDB: wide-column, eventual consistency, write-heavy workloads, partition design",
                "s": "CassandraScyllaDB explicação português | Cassandra ScyllaDB tutorial | cassandra/scylladb explained for beginners | Cassandra/ScyllaDB examples and practice",
                "d": "• O que é: Cassandra escala horizontalmente para bilhões de linhas..\n• Conceitos-chave: Design de partition key é crucial para performance.\n• O que estudar: wide-column, eventual consistency, write-heavy workloads, partition design."
              },
              {
                "w": "Elasticsearch: full-text search, inverted index, analyzers, agregações, ELK stack",
                "s": "Elasticsearch explicação português | full-text search tutorial | elasticsearch explained for beginners | Elasticsearch examples and practice",
                "d": "• O que é: Elasticsearch indexa texto para busca rápida (type-ahead, fuzzy)..\n• Conceitos-chave: ELK stack (Elasticsearch + Logstash + Kibana) para logs.\n• O que estudar: full-text search, inverted index, analyzers, agregações, ELK stack."
              },
              {
                "w": "NewSQL: CockroachDB, TiDB — SQL distribuído com consistência forte e escala horizontal",
                "s": "strong consistency tutorial | NewSQL explicação português | newsql explained for beginners | NewSQL examples and practice",
                "d": "• O que é: NewSQL combina SQL (ACID, schema) com escala horizontal de NoSQL..\n• Conceitos-chave: CockroachDB: PostgreSQL-compatible e distribuído.\n• O que estudar: CockroachDB, TiDB — SQL distribuído com consistência forte e escala horizontal."
              },
              {
                "w": "Estratégia polyglot: escolher o banco certo para cada caso (relacional, document, graph, time-series, vector)",
                "s": "Estratgia polyglot explicação português | graph time-series vector tutorial | estratgia polyglot explained for beginners | Estratégia polyglot examples and practice",
                "d": "• O que é: Usar múltiplos bancos: PostgreSQL para transações, Redis para cache, Neo4j para grafos, InfluxDB para métricas, Pinecone para vetores.\n• O que estudar: escolher o banco certo para cada caso (relacional, document, graph, time-series, vector)."
              }
            ]
          }
        ]
      },
      {
        "name": "📊 Data Engineering",
        "topics": [
          {
            "name": "Pipelines, Streaming e Data Lakes",
            "books": [
              "Fundamentals of Data Engineering — Reis & Housley",
              "Designing Data-Intensive Apps — Kleppmann",
              "Spark: The Definitive Guide — Chambers & Zaharia"
            ],
            "items": [
              {
                "w": "ETL vs ELT, batch vs streaming, data pipeline architecture",
                "s": "batch streaming data tutorial portugues | ETL vs ELT data pipeline tutorial | etl vs elt batch vs streaming data pipeline architecture explained for beginners | etl vs elt batch vs streaming data pipeline architecture explicação em português",
                "d": "• O que é: ETL: extrair > transformar > carregar (tradicional)..\n• Conceitos-chave: ELT: carregar primeiro, transformar depois (moderno, cloud).. Batch: processar em lotes (diario).. Streaming: processar em tempo real.. Escolher depende do caso."
              },
              {
                "w": "Apache Spark: processamento distribuido, PySpark, DataFrames",
                "s": "Apache Spark processamento explained | Apache Spark explicação português | apache spark tutorial completo | Apache Spark examples and practice",
                "d": "• O que é: Spark: processar TB/PB de dados em cluster..\n• Conceitos-chave: PySpark: API Python.. DataFrames: tabelas distribuidas.. Transformacoes lazy.. Actions: collect, count, write.. Substitui MapReduce (10-100x mais rapido).\n• O que estudar: processamento distribuido, PySpark, DataFrames."
              },
              {
                "w": "Kafka Streams, Flink: processamento de eventos em tempo real",
                "s": "Kafka Streams Flink tutorial portugues | Kafka Streams Flink tutorial | kafka streams flink explained for beginners | kafka streams flink explicação em português",
                "d": "• O que é: Kafka: fila de eventos distribuida..\n• Conceitos-chave: Kafka Streams: processar streams em Java/Scala.. Flink: mais poderoso (janelas, state).. Use case: fraude em tempo real, recomendacoes, dashboards live.\n• O que estudar: processamento de eventos em tempo real."
              },
              {
                "w": "Data Lake vs Data Warehouse vs Lakehouse (Delta Lake, Iceberg)",
                "s": "data lake data warehouse lakehouse | modern data architecture tutorial | data lake vs data warehouse vs lakehouse delta lake iceberg explained for beginners | data lake vs data warehouse vs lakehouse delta lake iceberg explicação em português",
                "d": "• O que é: Warehouse: dados estruturados (Snowflake, BigQuery, Redshift)..\n• Conceitos-chave: Lake: raw data barato (S3).. Lakehouse: combina ambos (Delta Lake, Apache Iceberg).. Schema-on-read vs schema-on-write."
              },
              {
                "w": "Orquestracao: Airflow, Dagster, Prefect. dbt pra transformacoes",
                "s": "Orquestracao Airflow Dagster tutorial portugues | dbt data transformation tutorial | orquestracao explained for beginners | orquestracao explicação em português",
                "d": "• O que é: Airflow: DAGs em Python (padrao de mercado)..\n• Conceitos-chave: Dagster/Prefect: alternativas modernas.. dbt: SQL transformations com versionamento, testes, docs.. Data lineage: rastrear origem dos dados.\n• O que estudar: Airflow, Dagster, Prefect. dbt pra transformacoes."
              },
              {
                "w": "Qualidade de dados: great_expectations, validacao, observabilidade",
                "s": "Qualidade dados great_expectations tutorial portugues | data quality monitoring tutorial | qualidade de dados explained for beginners | qualidade de dados explicação em português",
                "d": "• O que é: Dados ruins = modelos ruins..\n• Conceitos-chave: great_expectations: testes pra dados (coluna nao nula, range valido).. Data contracts: acordo entre produtor e consumidor.. Observabilidade: freshness, volume, schema changes.\n• O que estudar: great_expectations, validacao, observabilidade."
              },
              {
                "w": "Snowflake, BigQuery, Redshift, Databricks: data warehouses modernos cloud-native, comparação e quando usar",
                "s": "Snowflake BigQuery Redshift Databricks explicação português | cloud data warehouse tutorial | snowflake bigquery redshift databricks explained for beginners | Snowflake BigQuery Redshift Databricks examples and practice",
                "d": "• O que é: Snowflake: separação compute/storage..\n• Conceitos-chave: BigQuery: serverless SQL.. Redshift: AWS nativo.. Databricks: lakehouse unificado.. Escolher baseado em stack e necessidades.\n• O que estudar: data warehouses modernos cloud-native, comparação e quando usar."
              }
            ]
          },
          {
            "name": "Qualidade, Governança e Arquitetura Moderna",
            "books": [
              "Fundamentals of Data Engineering — Joe Reis & Matt Housley",
              "Data Mesh — Zhamak Dehghani",
              "The Data Warehouse Toolkit — Ralph Kimball"
            ],
            "items": [
              {
                "w": "Data quality: Great Expectations, dbt tests, anomaly detection, data contracts entre times",
                "s": "Data quality explicação português | Great Expectations tutorial | data quality explained for beginners | Data quality examples and practice",
                "d": "• O que é: Garantir qualidade: validar schema, completude, unicidade, freshness..\n• Conceitos-chave: Data contracts formalizam SLA entre produtor e consumidor de dados.\n• O que estudar: Great Expectations, dbt tests, anomaly detection, data contracts entre times."
              },
              {
                "w": "Data governance: catálogo de dados, linhagem (lineage), controle de acesso, PII, LGPD/GDPR",
                "s": "Data governance explicação português | data governance tutorial | data governance explained for beginners | Data governance examples and practice",
                "d": "• O que é: Governança controla quem acessa quais dados, rastreia origem (lineage), protege PII e garante conformidade com leis de privacidade.\n• O que estudar: catálogo de dados, linhagem (lineage), controle de acesso, PII, LGPD/GDPR."
              },
              {
                "w": "Data mesh: domínios como donos dos dados, data products, self-serve platform, federated governance",
                "s": "Data mesh explicação português | domain ownership tutorial | data mesh explained for beginners | Data mesh examples and practice",
                "d": "• O que é: Descentralizar dados: cada time de negócio é dono dos seus data products com qualidade e documentação..\n• Conceitos-chave: Plataforma compartilhada.\n• O que estudar: domínios como donos dos dados, data products, self-serve platform, federated governance."
              },
              {
                "w": "Lakehouse: Delta Lake, Iceberg, Hudi — ACID em data lakes, schema evolution, time travel",
                "s": "Delta Lake Iceberg Hudi tutorial | Lakehouse explicação português | lakehouse explained for beginners | Lakehouse examples and practice",
                "d": "• O que é: Lakehouse combina data lake (custo) com warehouse (qualidade): transações ACID em Parquet, viajar no tempo, evoluir schema.\n• O que estudar: Delta Lake, Iceberg, Hudi — ACID em data lakes, schema evolution, time travel."
              },
              {
                "w": "Dimensional modeling: star schema, snowflake, fact tables, dimension tables, slowly changing dimensions",
                "s": "Dimensional modeling explicação português | dimensional modeling tutorial | dimensional modeling explained for beginners | Dimensional modeling examples and practice",
                "d": "• O que é: Modelar dados para analytics: fatos (vendas, cliques) e dimensões (tempo, produto, região)..\n• Conceitos-chave: Star schema é o padrão.\n• O que estudar: star schema, snowflake, fact tables, dimension tables, slowly changing dimensions."
              },
              {
                "w": "Observabilidade de dados: Monte Carlo, Bigeye — monitorar freshness, volume, schema, distribution",
                "s": "Observabilidade de dados explicação português | freshness volume schema tutorial | observabilidade de dados explained for beginners | Observabilidade de dados examples and practice",
                "d": "• O que é: Monitorar pipelines como monitoramos apps: alertar quando dados atrasam, schema muda inesperadamente, ou distribuição diverge.\n• O que estudar: Monte Carlo, Bigeye — monitorar freshness, volume, schema, distribution."
              }
            ]
          }
        ]
      },
      {
        "name": "⛓️ Blockchain & Web3",
        "topics": [
          {
            "name": "Fundamentos de Blockchain",
            "books": [
              "Mastering Bitcoin — Andreas Antonopoulos (gratuito)",
              "Mastering Ethereum — Antonopoulos & Wood (gratuito)",
              "Blockchain Basics — Daniel Drescher"
            ],
            "items": [
              {
                "w": "O que e blockchain: ledger distribuido, blocos, hash chain, consenso",
                "s": "blockchain ledger distribuido tutorial portugues | blockchain fundamentals how it works | o que e blockchain explicação em português | O que e blockchain examples and practice",
                "d": "• O que é: Blockchain = lista de blocos encadeados por hash..\n• Conceitos-chave: Cada bloco: transacoes + hash anterior + nonce.. Imutavel: alterar 1 bloco invalida todos depois.. Distribuido: milhares de copias.. Nao precisa confiar em ninguem (trustless).. Inventado por Satoshi Nakamoto (2008).\n• O que estudar: ledger distribuido, blocos, hash chain, consenso."
              },
              {
                "w": "Consenso: Proof of Work, Proof of Stake, BFT, trade-offs",
                "s": "Consenso Proof Work tutorial portugues | blockchain consensus PoW PoS BFT | consenso explained for beginners | consenso explicação em português",
                "d": "• O que é: PoW (Bitcoin): resolver puzzle computacional (gasta energia)..\n• Conceitos-chave: BFT: tolerancia a falhas bizantinas.. Trade-offs: seguranca vs velocidade vs descentralizacao (trilema).. Cada chain escolhe diferente.\n• Exemplos: PoS (Ethereum 2.0): apostar moedas como garantia (eficiente)..\n• O que estudar: Proof of Work, Proof of Stake, BFT, trade-offs."
              },
              {
                "w": "Bitcoin: UTXO, mineracao, halving, Lightning Network",
                "s": "Bitcoin UTXO mineracao tutorial portugues | Bitcoin UTXO mining halving | bitcoin explained for beginners | bitcoin explicação em português",
                "d": "• O que é: UTXO: modelo de transacao (inputs/outputs)..\n• Conceitos-chave: Mineracao: encontrar nonce que gera hash com N zeros.. Halving: recompensa cai pela metade a cada 4 anos.. Lightning: canal de pagamento off-chain (transacoes instantaneas).. Bitcoin = ouro digital, reserva de valor.\n• O que estudar: UTXO, mineracao, halving, Lightning Network."
              },
              {
                "w": "Ethereum: accounts, gas, EVM, transacoes, blocos",
                "s": "Ethereum accounts transacoes tutorial portugues | Ethereum virtual machine tutorial | ethereum explained for beginners | ethereum explicação em português",
                "d": "• O que é: Ethereum = computador mundial..\n• Conceitos-chave: Accounts: EOA (usuario) e Contract.. Gas: custo computacional (evita loops infinitos).. EVM: maquina virtual que executa contratos.. Transacao: assinada com chave privada.. Blocos a cada ~12s.\n• O que estudar: accounts, gas, EVM, transacoes, blocos."
              },
              {
                "w": "Criptografia aplicada: hashing (SHA-256, Keccak), assinaturas digitais (ECDSA), Merkle trees",
                "s": "Criptografia aplicada hashing tutorial portugues | blockchain cryptography SHA-256 ECDSA | criptografia aplicada explained for beginners | criptografia aplicada explicação em português",
                "d": "• O que é: SHA-256: hash de 256 bits (Bitcoin)..\n• Conceitos-chave: Keccak-256: Ethereum.. ECDSA: assinar transacoes com chave privada, verificar com publica.. Merkle tree: verificar que transacao esta no bloco sem baixar tudo.. Zero-knowledge proofs: provar sem revelar (ZK-SNARKs, ZK-STARKs).\n• O que estudar: hashing (SHA-256, Keccak), assinaturas digitais (ECDSA), Merkle trees."
              },
              {
                "w": "Web3 vs Web2: diferencas de arquitetura, descentralizacao, trade-offs",
                "s": "blockchain vs traditional architecture | Web3 vs Web2 explicação português | web3 vs web2 tutorial completo | web3 vs web2 explained for beginners",
                "d": "• O que é: Web2: cliente > servidor centralizado (Google, Meta controlam)..\n• Conceitos-chave: Web3: cliente > blockchain (descentralizado, censura-resistente).. Trade-offs: Web3 e mais lento, mais caro, pior UX, mas sem intermediario.. Descentralizacao e espectro, nao binario.. Maioria dos projetos Web3 ainda depende de infra centralizada.\n• O que estudar: diferencas de arquitetura, descentralizacao, trade-offs."
              }
            ]
          },
          {
            "name": "Smart Contracts e DApps",
            "books": [
              "Mastering Ethereum — Antonopoulos & Wood (gratuito)",
              "Solidity Programming Essentials — Ritesh Modi",
              "Building Ethereum DApps — Roberto Infante"
            ],
            "items": [
              {
                "w": "Solidity: tipos, funcoes, modifiers, events, heranca, interfaces",
                "s": "Solidity smart contract tutorial | Solidity tipos funcoes explained | solidity explicação em português | Solidity examples and practice",
                "d": "• O que é: Solidity: linguagem de smart contracts (parecida com JS)..\n• Conceitos-chave: contract MeuToken { mapping(address => uint) balances; function transfer(...) }.. Compilar com solc.. Deploy na blockchain.. IMUTAVEL depois de deployed (cuidado!).\n• O que estudar: tipos, funcoes, modifiers, events, heranca, interfaces."
              },
              {
                "w": "Padroes: ERC-20 (tokens), ERC-721 (NFTs), ERC-1155, proxy upgradeable",
                "s": "Padroes ERC-20 tokens tutorial portugues | ERC-20 ERC-721 token standard | padroes explained for beginners | padroes explicação em português",
                "d": "• O que é: ERC-20: token fungivel (USDT, UNI)..\n• Conceitos-chave: ERC-721: NFT (unico).. ERC-1155: multi-token.. OpenZeppelin: biblioteca de contratos auditados.. Proxy pattern: contornar imutabilidade (storage + logic separados).\n• O que estudar: ERC-20 (tokens), ERC-721 (NFTs), ERC-1155, proxy upgradeable."
              },
              {
                "w": "Seguranca de smart contracts: reentrancy, overflow, front-running, auditorias",
                "s": "Seguranca smart contracts tutorial portugues | smart contract security vulnerabilities | seguranca de smart contracts explained for beginners | seguranca de smart contracts explicação em português",
                "d": "• O que é: Reentrancy: The DAO hack ($60M)..\n• Conceitos-chave: Overflow: antes do Solidity 0.8.. Front-running: bots veem transacao pendente e se adiantam.. Auditorias: Slither, Mythril (ferramentas).. OpenZeppelin Defender.. Bug bounties: Immunefi.. 1 bug = milhoes perdidos.\n• O que estudar: reentrancy, overflow, front-running, auditorias."
              },
              {
                "w": "DApps: frontend (ethers.js/web3.js), wallets (MetaMask), IPFS, The Graph",
                "s": "DApps frontend ethers.js/web3.js tutorial portugues | IPFS decentralized storage The Graph | dapps explained for beginners | dapps explicação em português",
                "d": "• O que é: Frontend: React + ethers.js conecta a blockchain..\n• Conceitos-chave: MetaMask: wallet no browser.. IPFS: storage descentralizado (arquivos, metadata NFT).. The Graph: indexar dados da blockchain (subgraphs).. Full-stack Web3 = React + Solidity + ethers + IPFS.\n• O que estudar: frontend (ethers.js/web3.js), wallets (MetaMask), IPFS, The Graph."
              },
              {
                "w": "DeFi, DAOs, Layer 2 (Rollups), futuro do Web3",
                "s": "DeFi DAOs Layer tutorial portugues | Layer 2 rollups Ethereum tutorial | defi daos layer 2 rollups futuro do web3 explained for beginners | defi daos layer 2 rollups futuro do web3 explicação em português",
                "d": "• O que é: DeFi: financas sem banco (Uniswap, Aave, Compound)..\n• Conceitos-chave: DAO: organizacao governada por token holders.. Layer 2: Optimistic Rollups (Arbitrum, Optimism), ZK Rollups (zkSync, StarkNet) — transacoes baratas.. Web3: internet descentralizada (visao, nao realidade ainda)."
              },
              {
                "w": "Testing e deploy: Hardhat, Foundry, testnets (Sepolia, Mumbai), Etherscan",
                "s": "Hardhat Foundry smart contract testing | Testing e deploy explicação português | testing e deploy tutorial completo | testing e deploy explained for beginners",
                "d": "• O que é: Hardhat (JS) ou Foundry (Solidity, mais rapido): framework de dev..\n• Conceitos-chave: Testes: simular blockchain local, testar edge cases.. Testnets: Sepolia (Ethereum), Mumbai (Polygon) — deploy sem gastar dinheiro real.. Etherscan: verificar contrato (publicar codigo-fonte).. Deploy em mainnet: so apos auditorias.\n• O que estudar: Hardhat, Foundry, testnets (Sepolia, Mumbai), Etherscan."
              }
            ]
          }
        ]
      },
      {
        "name": "☁️ Cloud & Kubernetes",
        "topics": [
          {
            "name": "IaC, K8s, Observabilidade",
            "books": [
              "Kubernetes Up and Running — Burns et al.",
              "Terraform Up and Running — Brikman",
              "Site Reliability Engineering — Google (gratuito)"
            ],
            "items": [
              {
                "w": "Kubernetes: pods, services, deployments, ingress, helm",
                "s": "Kubernetes pods services explained | Kubernetes explicação português | kubernetes tutorial completo | Kubernetes examples and practice",
                "d": "• O que é: Pod: menor unidade..\n• Conceitos-chave: Service: expor.. Deployment: declarativo.. Ingress: roteamento.. Helm: pacotes.\n• O que estudar: pods, services, deployments, ingress, helm."
              },
              {
                "w": "IaC: Terraform, Ansible, GitOps (ArgoCD/Flux)",
                "s": "terraform tutorial | ansible infrastructure tutorial | GitOps ArgoCD Flux tutorial | Terraform Ansible GitOps explained",
                "d": "• O que é: Terraform: infra como codigo (HCL)..\n• Conceitos-chave: Ansible: configuracao..\n• Exemplos: GitOps: git como fonte de verdade.\n• O que estudar: Terraform, Ansible, GitOps (ArgoCD/Flux)."
              },
              {
                "w": "Podman, containerd, alternativas ao Docker. OCI standards",
                "s": "Podman containerd alternativas tutorial portugues | container alternatives Docker | podman containerd alternativas ao docker oci standards explained for beginners | podman containerd alternativas ao docker oci standards explicação em português",
                "d": "• O que é: Podman: rootless, daemonless (mais seguro)..\n• Conceitos-chave: containerd: runtime que K8s usa internamente.. OCI: padrao aberto de imagens/runtimes.. Docker nao e o unico — K8s nao usa Docker daemon desde 2022."
              },
              {
                "w": "Observabilidade: Prometheus, Grafana, ELK/Loki, tracing",
                "s": "Observabilidade Prometheus Grafana tutorial portugues | prometheus grafana monitoring | observabilidade explained for beginners | observabilidade explicação em português",
                "d": "• O que é: Metricas (Prometheus), Logs (Loki/ELK), Traces (Jaeger/Tempo)..\n• Conceitos-chave: Dashboards Grafana.\n• O que estudar: Prometheus, Grafana, ELK/Loki, tracing."
              },
              {
                "w": "Cloud avancado: VPC, IAM, Load Balancers, auto-scaling",
                "s": "Cloud avancado explicação português | Cloud avancado Load explained | cloud avancado tutorial completo | Cloud avancado examples and practice",
                "d": "• O que é: VPC: rede isolada..\n• Conceitos-chave: IAM: permissoes granulares.. Auto-scaling groups.\n• O que estudar: VPC, IAM, Load Balancers, auto-scaling."
              },
              {
                "w": "Service mesh: Istio, Linkerd. Sidecar pattern, mTLS, traffic management",
                "s": "Service mesh explicação português | sidecar pattern mTLS tutorial | service mesh explained for beginners | Service mesh examples and practice",
                "d": "• O que é: Service mesh: camada de rede entre servicos..\n• Conceitos-chave: Sidecar: proxy ao lado de cada pod.. mTLS: criptografia entre servicos automatica.. Traffic management: canary, blue-green, circuit breaking.. Linkerd: mais leve que Istio.\n• O que estudar: Istio, Linkerd. Sidecar pattern, mTLS, traffic management."
              },
              {
                "w": "Serverless: AWS Lambda, Google Cloud Functions, Azure Functions — event-driven, pay-per-execution, cold starts",
                "s": "Serverless explicação português | Cloud Functions tutorial | serverless explained for beginners | Serverless examples and practice",
                "d": "• O que é: Serverless executa código sem gerenciar servidores: trigger por evento (HTTP, S3, queue), escala automaticamente, paga por execução..\n• Conceitos-chave: Cold start é o trade-off.\n• O que estudar: AWS Lambda, Google Cloud Functions, Azure Functions — event-driven, pay-per-execution, cold starts."
              }
            ]
          },
          {
            "name": "Kubernetes Avançado e Multi-Cloud",
            "books": [
              "Kubernetes in Action — Marko Lukša",
              "Cloud Native DevOps with Kubernetes — John Arundel & Justin Domingus",
              "Terraform: Up & Running — Yevgeniy Brikman"
            ],
            "items": [
              {
                "w": "K8s avançado: StatefulSets, DaemonSets, Jobs/CronJobs, init containers, sidecars",
                "s": "K8s avanado explicação português | StatefulSet DaemonSet tutorial | k8s avanado explained for beginners | K8s avançado examples and practice",
                "d": "• O que é: Além de Deployments: StatefulSets para bancos (identidade estável), DaemonSets em todo nó, Jobs para tarefas batch.\n• O que estudar: StatefulSets, DaemonSets, Jobs/CronJobs, init containers, sidecars."
              },
              {
                "w": "K8s networking: CNI, Network Policies, DNS interno, Service types (ClusterIP, NodePort, LoadBalancer)",
                "s": "K8s networking explicação português | K8s networking tutorial | k8s networking explained for beginners | K8s networking examples and practice",
                "d": "• O que é: Networking em K8s: CNI plugins gerenciam rede, Network Policies isolam tráfego entre pods, cada Service tem DNS automático.\n• O que estudar: CNI, Network Policies, DNS interno, Service types (ClusterIP, NodePort, LoadBalancer)."
              },
              {
                "w": "K8s storage: PersistentVolumes, StorageClasses, CSI drivers, snapshots, resize",
                "s": "K8s storage explicação português | PersistentVolume tutorial | k8s storage explained for beginners | K8s storage examples and practice",
                "d": "• O que é: Storage persistente em K8s: PV/PVC abstraem disco, StorageClasses provisionam automaticamente, CSI drivers para cada cloud.\n• O que estudar: PersistentVolumes, StorageClasses, CSI drivers, snapshots, resize."
              },
              {
                "w": "Terraform em profundidade: modules, workspaces, state management, remote backend, drift detection",
                "s": "Terraform em profundidade explicação português | remote backend tutorial | terraform em profundidade explained for beginners | Terraform em profundidade examples and practice",
                "d": "• O que é: IaC com Terraform: modules para reutilizar, workspaces para ambientes, state remoto (S3) compartilhado, detectar drift de configuração.\n• O que estudar: modules, workspaces, state management, remote backend, drift detection."
              },
              {
                "w": "Multi-cloud e cloud-native: evitar vendor lock-in, abstrações portáteis, Crossplane",
                "s": "Multicloud e cloudnative explicação português | portable abstractions tutorial | multicloud e cloudnative explained for beginners | Multicloud e cloudnative examples and practice",
                "d": "• O que é: Usar abstrações cloud-agnostic: Terraform, Crossplane (K8s-native), containers..\n• Conceitos-chave: Reduzir dependência de APIs específicas do provider.\n• O que estudar: evitar vendor lock-in, abstrações portáteis, Crossplane."
              },
              {
                "w": "FinOps: custo de cloud, right-sizing, spot instances, reserved instances, cost monitoring",
                "s": "FinOps explicação português | cost monitoring tutorial | finops explained for beginners | FinOps examples and practice",
                "d": "• O que é: Cloud pode ficar cara: right-size recursos, usar spot/preemptible para workloads tolerantes, monitorar custo por serviço/time.\n• O que estudar: custo de cloud, right-sizing, spot instances, reserved instances, cost monitoring."
              }
            ]
          }
        ]
      },
      {
        "name": "🛡️ DevSecOps & Seguranca",
        "topics": [
          {
            "name": "Security Pipeline, Container Security",
            "books": [
              "DevSecOps — Jim Bird",
              "Container Security — Liz Rice",
              "Kubernetes Security — Karambelkar"
            ],
            "items": [
              {
                "w": "SAST, DAST, SCA: seguranca no pipeline CI/CD",
                "s": "SAST DAST seguranca tutorial portugues | DevSecOps CI CD security tutorial | sast dast sca explained for beginners | sast dast sca explicação em português",
                "d": "• O que é: SAST: codigo estatico (Semgrep, SonarQube)..\n• Conceitos-chave: DAST: app rodando (OWASP ZAP).. SCA: dependencias (Snyk, Trivy).. Shift left: seguranca CEDO no pipeline, nao no fim.. Falhar build se vulnerabilidade critica.\n• O que estudar: seguranca no pipeline CI/CD."
              },
              {
                "w": "Secret scanning: detectar credenciais no codigo (GitLeaks, TruffleHog)",
                "s": "Secret scanning detectar tutorial portugues | secret scanning GitLeaks TruffleHog | secret scanning explained for beginners | secret scanning explicação em português",
                "d": "• O que é: Problema #1: chaves de API, senhas, tokens commitados no git..\n• Conceitos-chave: GitLeaks/TruffleHog: scanear historico do git.. Pre-commit hook: prevenir antes de commitar.. GitHub secret scanning: alerta automatico.. Rotacionar IMEDIATAMENTE se vazou.\n• O que estudar: detectar credenciais no codigo (GitLeaks, TruffleHog)."
              },
              {
                "w": "Container security: scan imagens, rootless, seccomp, AppArmor, distroless",
                "s": "Container security scan tutorial portugues | container security Docker scan | container security explained for beginners | container security explicação em português",
                "d": "• O que é: Scan: Trivy (open-source)..\n• Conceitos-chave: Distroless: imagem sem shell (menor superficie).. Seccomp: limitar syscalls.. Multi-stage builds: imagem final menor.. Nao instalar ferramentas desnecessarias.\n• Exemplos: Rootless: nao rodar como root..\n• O que estudar: scan imagens, rootless, seccomp, AppArmor, distroless."
              },
              {
                "w": "Dependency management: Dependabot, Renovate, SBOM, supply chain security",
                "s": "Dependency management Dependabot tutorial portugues | Dependabot Renovate dependency updates | dependency management explained for beginners | dependency management explicação em português",
                "d": "• O que é: Dependabot/Renovate: PRs automaticos pra atualizar dependencias..\n• Conceitos-chave: SBOM: inventario de tudo que esta no software.. Supply chain: Log4Shell mostrou o risco.. Lockfiles: package-lock.json/poetry.lock.. Verificar checksums.. Pinnar versoes.\n• O que estudar: Dependabot, Renovate, SBOM, supply chain security."
              },
              {
                "w": "SBOM, threat modeling (STRIDE), security gates no pipeline",
                "s": "SBOM threat modeling tutorial portugues | threat modeling STRIDE tutorial | sbom threat modeling stride security gates no pipeline explained for beginners | sbom threat modeling stride security gates no pipeline explicação em português",
                "d": "• O que é: STRIDE: Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation..\n• Conceitos-chave: Threat model ANTES de construir.. Security gates: build falha se high/critical.. Quality gates: SonarQube.. Aceitar risco consciente (nao ignorar)."
              },
              {
                "w": "Kubernetes security: RBAC, Network Policies, Pod Security, OPA/Gatekeeper",
                "s": "Kubernetes security RBAC tutorial portugues | Kubernetes security RBAC tutorial | kubernetes security explained for beginners | kubernetes security explicação em português",
                "d": "• O que é: RBAC: quem pode o que (ServiceAccount por namespace)..\n• Conceitos-chave: Network Policies: isolar pods (default deny).. Pod Security Standards: restricted/baseline/privileged.. OPA Gatekeeper: politicas customizadas (nao permitir latest tag, exigir resource limits).\n• O que estudar: RBAC, Network Policies, Pod Security, OPA/Gatekeeper."
              },
              {
                "w": "Compliance: SOC 2, ISO 27001, PCI-DSS, frameworks de seguranca",
                "s": "Compliance explicação português | security compliance framework | compliance tutorial completo | compliance explained for beginners",
                "d": "• O que é: SOC 2: controles de seguranca (startups SaaS)..\n• Conceitos-chave: ISO 27001: gestao de seguranca da informacao.. PCI-DSS: quem processa cartao de credito.. HIPAA: dados de saude.. Compliance nao e checkbox — e cultura.. Automatizar evidencias: Vanta, Drata.\n• O que estudar: SOC 2, ISO 27001, PCI-DSS, frameworks de seguranca."
              }
            ]
          },
          {
            "name": "Compliance, Threat Modeling e Runtime Security",
            "books": [
              "Threat Modeling: Designing for Security — Adam Shostack",
              "Practical Cloud Security — Chris Dotson",
              "Container Security — Liz Rice"
            ],
            "items": [
              {
                "w": "Threat modeling: STRIDE, DREAD, attack trees, data flow diagrams, identificar superfícies de ataque",
                "s": "Threat modeling explicação português | threat modeling tutorial | threat modeling explained for beginners | Threat modeling examples and practice",
                "d": "• O que é: Antes de construir, modelar ameaças: STRIDE categoriza (Spoofing, Tampering, etc.), data flow diagrams mostram onde dados fluem.\n• O que estudar: STRIDE, DREAD, attack trees, data flow diagrams, identificar superfícies de ataque."
              },
              {
                "w": "Runtime security: Falco, Sysdig — detectar comportamento anômalo em containers em produção",
                "s": "Runtime security explicação português | anomaly detection tutorial | runtime security explained for beginners | Runtime security examples and practice",
                "d": "• O que é: Detectar em tempo real: container executando shell inesperado, lendo /etc/shadow, fazendo conexão externa suspeita.\n• O que estudar: Falco, Sysdig — detectar comportamento anômalo em containers em produção."
              },
              {
                "w": "Compliance as code: OPA (Open Policy Agent), Sentinel, políticas automatizadas em CI/CD",
                "s": "Compliance as code explicação português | compliance as code tutorial | compliance as code explained for beginners | Compliance as code examples and practice",
                "d": "• O que é: Codificar políticas de segurança: 'todo container deve ser non-root', 'imagens só de registry aprovado'..\n• Conceitos-chave: Verificar automaticamente.\n• O que estudar: OPA (Open Policy Agent), Sentinel, políticas automatizadas em CI/CD."
              },
              {
                "w": "Supply chain security: Sigstore, SLSA framework, provenance, software attestation",
                "s": "Supply chain security explicação português | supply chain tutorial | supply chain security explained for beginners | Supply chain security examples and practice",
                "d": "• O que é: Garantir que software não foi adulterado: assinar artefatos (Sigstore), atestar proveniência (SLSA), verificar integridade.\n• O que estudar: Sigstore, SLSA framework, provenance, software attestation."
              },
              {
                "w": "Incident response em DevSecOps: playbooks automatizados, containment, forensics, post-mortem",
                "s": "Incident response em DevSecOps explicação português | incident response tutorial | incident response em devsecops explained for beginners | Incident response em DevSecOps examples and practice",
                "d": "• O que é: Quando breach acontece: playbook automatizado isola sistema, preserva evidências, equipe investiga, post-mortem documenta lições.\n• O que estudar: playbooks automatizados, containment, forensics, post-mortem."
              },
              {
                "w": "Security champions: cultura de segurança, treinamento de devs, gamification, security office hours",
                "s": "Security champions explicação português | security champions tutorial | security champions explained for beginners | Security champions examples and practice",
                "d": "• O que é: Cada time tem um security champion: dev que advoga por segurança, revisa PRs críticos, faz treinamentos e conecta time ao security team.\n• O que estudar: cultura de segurança, treinamento de devs, gamification, security office hours."
              }
            ]
          }
        ]
      },
      {
        "name": "🕵️ Ethical Hacking: Web & Redes",
        "topics": [
          {
            "name": "Vulnerabilidades Web: OWASP Top 10 na Pratica",
            "books": [
              "The Web Application Hacker's Handbook — Stuttard & Pinto",
              "Bug Bounty Bootcamp — Vickie Li",
              "OWASP Testing Guide (gratuito)"
            ],
            "items": [
              {
                "w": "SQL Injection: classica, blind, time-based, UNION-based, SQLMap",
                "s": "Injection classica blind explained | SQL Injection explicação português | sql injection tutorial completo | SQL Injection examples and practice",
                "d": "• O que é: Input do usuario vai direto na query SQL..\n• Conceitos-chave: UNION: extrair dados de outras tabelas.. SQLMap: automatiza.. Defesa: prepared statements/parameterized queries SEMPRE.\n• Exemplos: ' OR 1=1-- Tipos: error-based (ve o erro), blind (sim/nao), time-based (delay)..\n• O que estudar: classica, blind, time-based, UNION-based, SQLMap."
              },
              {
                "w": "XSS: reflected, stored, DOM-based, bypass de filtros, CSP",
                "s": "XSS cross site scripting types | XSS stored reflected DOM tutorial | XSS bypass filters tutorial | reflected stored DOM-based tutorial portugues",
                "d": "• O que é: Reflected: URL maliciosa..\n• Conceitos-chave: Stored: salvo no banco (pior).. DOM: manipulacao client-side.. Payloads: <script>alert(1)</script>, event handlers, SVG.. Bypass: encoding, mutation.. Defesa: sanitizar output, CSP header, HttpOnly cookies.\n• O que estudar: reflected, stored, DOM-based, bypass de filtros, CSP."
              },
              {
                "w": "CSRF, SSRF, IDOR: falsificacao de requests e referencias inseguras",
                "s": "CSRF SSRF IDOR tutorial portugues | insecure direct object reference | csrf ssrf idor explained for beginners | csrf ssrf idor explicação em português",
                "d": "• O que é: CSRF: forcar usuario a executar acao (transferir dinheiro)..\n• Conceitos-chave: SSRF: forcar SERVIDOR a fazer request interno (acessar metadata AWS).. IDOR: mudar ID na URL pra acessar dados de outro usuario (/user/123 > /user/124).. Todos exploram confianca.\n• O que estudar: falsificacao de requests e referencias inseguras."
              },
              {
                "w": "Authentication bugs: brute force, session fixation, JWT attacks, OAuth flaws",
                "s": "Authentication bugs explicação português | authentication vulnerabilities | authentication bugs tutorial completo | authentication bugs explained for beginners",
                "d": "• O que é: Brute force: testar senhas (Hydra, Burp Intruder)..\n• Conceitos-chave: Session fixation: fixar session ID.. JWT: none algorithm, key confusion, expiry bypass.. OAuth: redirect URI manipulation, state parameter missing.. 2FA bypass: race conditions.\n• O que estudar: brute force, session fixation, JWT attacks, OAuth flaws."
              },
              {
                "w": "File upload, LFI/RFI, path traversal, command injection",
                "s": "File upload LFI/RFI tutorial portugues | LFI RFI path traversal tutorial | file upload lfi/rfi path traversal command injection explained for beginners | file upload lfi/rfi path traversal command injection explicação em português",
                "d": "• O que é: File upload: enviar webshell (.php, .jsp)..\n• Conceitos-chave: LFI: ler arquivos do servidor (../../etc/passwd).. RFI: incluir arquivo remoto.. Command injection: ; ls -la ou $(whoami).. Path traversal: ../ pra escapar diretorio.. Defesa: whitelist, sandbox, sanitize."
              },
              {
                "w": "Desserializacao insegura, XXE, SSTI, business logic flaws",
                "s": "Desserializacao insegura SSTI tutorial portugues | insecure deserialization tutorial | desserializacao insegura xxe ssti business logic flaws explained for beginners | desserializacao insegura xxe ssti business logic flaws explicação em português",
                "d": "• O que é: Desserializacao: objeto malicioso vira codigo (Java, PHP, Python)..\n• Conceitos-chave: XXE: XML externo le arquivos.. SSTI: injetar template (Jinja2, Twig).. Business logic: comprar com preco negativo, skip de etapas.. Mais dificil de automatizar = mais valioso."
              },
              {
                "w": "Ferramentas: Burp Suite, OWASP ZAP, ffuf, httpx, nuclei",
                "s": "Ferramentas Burp Suite explained | Ferramentas explicação português | ferramentas tutorial completo | Ferramentas examples and practice",
                "d": "• O que é: Burp Suite: proxy interceptador (ferramenta #1)..\n• Conceitos-chave: Repeater: reenviar requests modificados.. Intruder: fuzzing/brute force.. ZAP: alternativa gratis.. ffuf: fuzzing de diretorios/parametros.. httpx: probe HTTP.. Aprenda Burp Suite profundamente.\n• O que estudar: Burp Suite, OWASP ZAP, ffuf, httpx, nuclei."
              }
            ]
          },
          {
            "name": "Network Hacking",
            "books": [
              "Penetration Testing — Georgia Weidman",
              "Hacking: Art of Exploitation — Erickson",
              "The Hacker Playbook 3 — Peter Kim"
            ],
            "items": [
              {
                "w": "Sniffing: Wireshark, tcpdump, ARP spoofing, MITM",
                "s": "Sniffing Wireshark tcpdump explained | ARP spoofing MITM attack tutorial | sniffing explicação em português | Sniffing examples and practice",
                "d": "• O que é: Wireshark: capturar e analisar trafego..\n• Conceitos-chave: Filtros: http, tcp.port==443, ip.addr==x.. ARP spoof: redirecionar trafego (Bettercap).. MITM: interceptar comunicacao entre 2 partes.. Detectar: ARP watch, criptografia e2e.. Fazer: SOMENTE em redes que voce tem permissao.\n• O que estudar: Wireshark, tcpdump, ARP spoofing, MITM."
              },
              {
                "w": "Password attacks: cracking (hashcat, John), spraying, pass-the-hash",
                "s": "Password attacks cracking tutorial portugues | password cracking hashcat John | password attacks explained for beginners | password attacks explicação em português",
                "d": "• O que é: Hashcat: GPU cracking (MD5, SHA, bcrypt)..\n• Conceitos-chave: John the Ripper: CPU.. Wordlists: rockyou.txt, SecLists.. Password spraying: 1 senha em muitos usuarios (evita lockout).. Pass-the-hash: usar hash NTLM sem saber a senha.. Rainbow tables: pre-computed.\n• O que estudar: cracking (hashcat, John), spraying, pass-the-hash."
              },
              {
                "w": "Wireless: WPA2 cracking, evil twin, rogue AP, deauth",
                "s": "Wireless WPA2 cracking tutorial portugues | WiFi hacking WPA2 crack tutorial | wireless explained for beginners | wireless explicação em português",
                "d": "• O que é: Aircrack-ng: capturar handshake WPA2 + crack com wordlist..\n• Conceitos-chave: Evil twin: AP falso com mesmo nome.. Deauth: desconectar clientes (forcar reconexao pra capturar handshake).. Ferramentas: airmon-ng, airodump-ng, aireplay-ng.. SOMENTE em suas redes.\n• O que estudar: WPA2 cracking, evil twin, rogue AP, deauth."
              },
              {
                "w": "Active Directory: Kerberoasting, AS-REP roasting, BloodHound, lateral movement",
                "s": "Active Directory explicação português | Active Directory pentesting | active directory tutorial completo | active directory explained for beginners",
                "d": "• O que é: AD: alvo #1 em empresas..\n• Conceitos-chave: Kerberoasting: extrair tickets e crackear offline.. BloodHound: mapear caminhos ate Domain Admin.. Lateral movement: psexec, WMI, RDP.. Mimikatz: extrair credenciais da memoria.. 90% dos pentests corporativos envolvem AD.\n• O que estudar: Kerberoasting, AS-REP roasting, BloodHound, lateral movement."
              },
              {
                "w": "Man-in-the-Middle avancado: SSL stripping, HSTS bypass, DNS poisoning",
                "s": "ManintheMiddle avancado explicação português | DNS poisoning cache tutorial | maninthemiddle avancado explained for beginners | ManintheMiddle avancado examples and practice",
                "d": "• O que é: SSL stripping: forcar HTTP ao inves de HTTPS (sslstrip)..\n• Conceitos-chave: HSTS: header que forca HTTPS (protecao).. HSTS bypass: se primeira visita nao teve HSTS.. DNS poisoning: responder DNS com IP falso.. ARP spoofing + DNS spoof = redirecionar todo trafego.. Defesa: HSTS preload, DNSSEC, certificado pinning.\n• O que estudar: SSL stripping, HSTS bypass, DNS poisoning."
              },
              {
                "w": "Network pivoting: proxychains, SSH tunnels, double pivoting, SOCKS proxy",
                "s": "Network pivoting explicação português | SOCKS proxy penetration testing | network pivoting tutorial completo | network pivoting explained for beginners",
                "d": "• O que é: Cenario: voce comprometeu maquina A que tem acesso a rede interna..\n• Conceitos-chave: proxychains: rotear ferramentas pelo proxy.. SSH -D: SOCKS proxy.. Double pivot: A > B > C.. Metasploit autoroute.. Essencial em pentests corporativos.\n• Exemplos: Pivoting: usar A como proxy pra alcancar B (que voce nao alcanca direto)..\n• O que estudar: proxychains, SSH tunnels, double pivoting, SOCKS proxy."
              }
            ]
          },
          {
            "name": "Linux e Windows Exploitation",
            "books": [
              "Hacking: Art of Exploitation — Erickson",
              "The Shellcoder's Handbook — Anley et al.",
              "Windows Internals — Russinovich & Solomon"
            ],
            "items": [
              {
                "w": "Linux privilege escalation: SUID, cron, kernel exploits, sudo misconfig",
                "s": "Linux privilege escalation tutorial portugues | Linux privilege escalation techniques | linux privilege escalation explained for beginners | linux privilege escalation explicação em português",
                "d": "• O que é: LinPEAS/LinEnum: scripts de enumeracao..\n• Conceitos-chave: GTFOBins: binarios exploraveis.. Kernel: uname -a + searchsploit.\n• Exemplos: SUID: binario roda como root (find / -perm -4000).. Sudo -l: o que posso rodar como root? Cron: tarefas agendadas com permissao errada..\n• O que estudar: SUID, cron, kernel exploits, sudo misconfig."
              },
              {
                "w": "Windows privilege escalation: services, registry, tokens, unquoted paths",
                "s": "Windows privilege escalation tutorial portugues | Windows privilege escalation | windows privilege escalation explained for beginners | windows privilege escalation explicação em português",
                "d": "• O que é: WinPEAS: enumeracao automatica..\n• Conceitos-chave: Services: permissao de escrita + restart.. Registry: AlwaysInstallElevated.. Token impersonation: SeImpersonatePrivilege (PrintSpoofer, Potato).. Unquoted paths: espacos no caminho do servico.. PowerUp: PowerShell privesc.\n• O que estudar: services, registry, tokens, unquoted paths."
              },
              {
                "w": "Shells e payloads: reverse shell, bind shell, msfvenom, web shells",
                "s": "Shells e payloads explicação português | web shell upload pentest tutorial | shells e payloads explained for beginners | Shells e payloads examples and practice",
                "d": "• O que é: Reverse shell: alvo conecta de volta pra voce..\n• Conceitos-chave: Bind shell: alvo escuta, voce conecta.. msfvenom: gerar payloads (.exe, .php, .py).. Netcat: nc -lvnp 4444.. Estabilizar shell: python -c 'import pty;pty.spawn(\"/bin/bash\")'.. Obfuscar pra evitar AV.\n• O que estudar: reverse shell, bind shell, msfvenom, web shells."
              },
              {
                "w": "Buffer overflow basico: stack, EIP/RIP, shellcode, DEP/ASLR",
                "s": "Buffer overflow basico explicação português | Buffer overflow basico explained | buffer overflow basico tutorial completo | Buffer overflow basico examples and practice",
                "d": "• O que é: Buffer overflow: escrever alem do buffer, sobrescrever return address..\n• Conceitos-chave: Stack: LIFO.. EIP (32-bit) / RIP (64-bit): ponteiro de instrucao.. Shellcode: codigo em assembly injetado.. DEP: nao-execucao de stack.. ASLR: randomizar enderecos.. Pratica: vulnserver, pwn challenges.\n• O que estudar: stack, EIP/RIP, shellcode, DEP/ASLR."
              },
              {
                "w": "Metasploit Framework: modules, exploits, payloads, meterpreter, post-exploitation",
                "s": "Metasploit Framework explicação português | Metasploit Framework tutorial | metasploit framework explained for beginners | Metasploit Framework examples and practice",
                "d": "• O que é: Metasploit: framework #1 de exploitation..\n• Conceitos-chave: use exploit/..., set RHOSTS, exploit.. Payloads: reverse_tcp, meterpreter (shell avancado).. Meterpreter: upload/download, screenshot, keylog, hashdump, migrate.. Post-modules: recon, privesc, pivot.. OSCP: usar Metasploit com restricao (so 1 maquina).. Aprenda manual primeiro.\n• O que estudar: modules, exploits, payloads, meterpreter, post-exploitation."
              },
              {
                "w": "Antivirus evasion: obfuscacao, encoding, crypters, living-off-the-land (LOLBins)",
                "s": "Antivirus evasion explicação português | AV bypass obfuscation tutorial | antivirus evasion explained for beginners | Antivirus evasion examples and practice",
                "d": "• O que é: AV detecta: signatures (hash), heuristica (comportamento)..\n• Conceitos-chave: Bypass: encoding (shikata_ga_nai), custom crypters, mudar strings.. LOLBins: usar ferramentas legitimas do Windows (certutil, bitsadmin, PowerShell) pra fins maliciosos.. Na pratica: AV moderno (EDR) e MUITO bom.. Evasion e gato-e-rato constante.\n• O que estudar: obfuscacao, encoding, crypters, living-off-the-land (LOLBins)."
              }
            ]
          },
          {
            "name": "Scanning Avancado e Vulnerability Assessment",
            "books": [
              "Network Security Assessment — McNab",
              "Nmap Network Scanning — Gordon Lyon",
              "The Web Application Hacker's Handbook — Stuttard"
            ],
            "items": [
              {
                "w": "Enumeracao de servicos: SMB, FTP, SSH, HTTP, SNMP, LDAP, RDP",
                "s": "Enumeracao servicos HTTP tutorial portugues | service enumeration SMB FTP SSH | enumeracao de servicos explained for beginners | enumeracao de servicos explicação em português",
                "d": "• O que é: Cada servico tem suas ferramentas..\n• Conceitos-chave: SMB: smbclient, enum4linux.. FTP: anonymous login.. SSH: versao (vulns conhecidas).. HTTP: diretórios (gobuster, ffuf).. SNMP: snmpwalk.. Enumeracao = extrair o maximo de info de cada servico.\n• O que estudar: SMB, FTP, SSH, HTTP, SNMP, LDAP, RDP."
              },
              {
                "w": "Vulnerability scanning: Nessus, OpenVAS, Nuclei, resultados vs falsos positivos",
                "s": "Vulnerability scanning Nessus tutorial portugues | vulnerability scanner Nessus OpenVAS Nuclei | vulnerability scanning explained for beginners | vulnerability scanning explicação em português",
                "d": "• O que é: Nessus (comercial), OpenVAS (gratis): scanners automatizados..\n• Conceitos-chave: Nuclei: templates YAML, rapido, comunitario.. IMPORTANTE: scanners geram falsos positivos.. SEMPRE valide manualmente antes de reportar.. Scan != pentest (scan e automatizado, pentest e manual+criativo).\n• O que estudar: Nessus, OpenVAS, Nuclei, resultados vs falsos positivos."
              },
              {
                "w": "Metodologias: PTES, OWASP Testing Guide, NIST, OSSTMM",
                "s": "Metodologias PTES OWASP tutorial portugues | penetration testing methodology PTES | metodologias explained for beginners | metodologias explicação em português",
                "d": "• O que é: PTES: Pre-engagement > Recon > Threat Modeling > Exploitation > Post-exploitation > Reporting..\n• Conceitos-chave: OWASP Testing Guide: web-specific.. NIST SP 800-115: framework governamental.. Ter metodologia = nao esquecer nada + ser profissional.\n• O que estudar: PTES, OWASP Testing Guide, NIST, OSSTMM."
              },
              {
                "w": "Web app scanning: nikto, wpscan, dirsearch, API fuzzing com ffuf/wfuzz",
                "s": "scanning nikto wpscan tutorial portugues | web application scanning nikto wpscan | web app scanning explained for beginners | web app scanning explicação em português",
                "d": "• O que é: nikto: scanner web rapido (headers, configs)..\n• Conceitos-chave: wpscan: WordPress especifico.. dirsearch/gobuster: encontrar diretorios e arquivos ocultos.. ffuf/wfuzz: fuzzing de parametros, headers, paths.. API scanning: testar endpoints com payloads maliciosos.. Automatize o tedioso, investigue o interessante.\n• O que estudar: nikto, wpscan, dirsearch, API fuzzing com ffuf/wfuzz."
              },
              {
                "w": "Reconhecimento ativo vs passivo: quando usar cada, riscos legais",
                "s": "Reconhecimento ativo passivo tutorial portugues | active vs passive reconnaissance | reconhecimento ativo vs passivo explained for beginners | reconhecimento ativo vs passivo explicação em português",
                "d": "• O que é: Passivo: coleta sem tocar no alvo (OSINT, DNS, Google)..\n• Conceitos-chave: Ativo: interage com o alvo (nmap, scanning).. Passivo: legal, nao detectavel.. Ativo: precisa de permissao, pode ser detectado (IDS/IPS).. Na pratica: maximo passivo primeiro, ativo so com escopo definido.\n• O que estudar: quando usar cada, riscos legais."
              },
              {
                "w": "Reporting de vulnerabilidades: CVSS scoring, prioridade, evidencias, remediacoes",
                "s": "Reporting de vulnerabilidades explicação português | vulnerability reporting tutorial | reporting de vulnerabilidades explained for beginners | Reporting de vulnerabilidades examples and practice",
                "d": "• O que é: CVSS: Common Vulnerability Scoring System (0-10)..\n• Conceitos-chave: Base score: vetor de ataque, complexidade, impacto.. Critical (9-10): corrigir IMEDIATAMENTE.. High (7-8.9): esta semana.. Medium (4-6.9): proximo sprint.. Low (0-3.9): backlog.. Cada finding: descricao, CVSS, evidencia (screenshot), remediacao sugerida.\n• O que estudar: CVSS scoring, prioridade, evidencias, remediacoes."
              }
            ]
          },
          {
            "name": "Post-Exploitation e Reporting",
            "books": [
              "Post-Exploitation — Georgia Weidman",
              "Red Team Development — Joe Vest",
              "The Hacker Playbook 3 — Peter Kim"
            ],
            "items": [
              {
                "w": "Post-exploitation: persistence, pivoting, lateral movement, data exfiltration",
                "s": "Post-exploitation persistence pivoting tutorial portugues | post exploitation techniques | postexploitation explained for beginners | postexploitation explicação em português",
                "d": "• O que é: Depois de entrar: manter acesso (persistence: cron, startup, backdoor)..\n• Conceitos-chave: Pivoting: usar maquina comprometida pra acessar rede interna.. Lateral movement: ir pra outras maquinas.. Data exfiltration: extrair dados sem ser detectado.. TUDO documentado no relatorio.\n• O que estudar: persistence, pivoting, lateral movement, data exfiltration."
              },
              {
                "w": "Covering tracks: limpar logs, anti-forensics (conceito, nao pratica maliciosa)",
                "s": "Covering tracks limpar tutorial portugues | anti forensics awareness tutorial | covering tracks explained for beginners | covering tracks explicação em português",
                "d": "• O que é: Atacantes reais limpam rastros..\n• Conceitos-chave: Mas precisa ENTENDER as tecnicas pra defender: limpar event logs, timestomping, rootkits.. Blue team: detectar essas tecnicas.\n• Exemplos: Como pentester, voce DOCUMENTA o que fez (nao limpa)..\n• O que estudar: limpar logs, anti-forensics (conceito, nao pratica maliciosa)."
              },
              {
                "w": "Escrevendo relatorio profissional: executive summary, findings, PoC, remediacoes",
                "s": "Escrevendo relatorio profissional tutorial portugues | professional pentest report template | escrevendo relatorio profissional explained for beginners | escrevendo relatorio profissional explicação em português",
                "d": "• O que é: Executive summary: 1 pagina pra C-level (sem jargao)..\n• Conceitos-chave: Findings: severidade (CVSS), descricao, evidencia (screenshots), impacto, remediacao.. Priorizacao: critical primeiro.. Um bom relatorio e 50% do valor do pentest.\n• Exemplos: PoC: prova de conceito (como reproduzir)..\n• O que estudar: executive summary, findings, PoC, remediacoes."
              },
              {
                "w": "Tunneling e port forwarding: SSH tunnels, chisel, ligolo, pivoting em redes internas",
                "s": "Tunneling port forwarding tutorial portugues | tunneling post exploitation | tunneling e port forwarding explained for beginners | tunneling e port forwarding explicação em português",
                "d": "• O que é: SSH tunnel: ssh -L 8080:interno:80 user@pivot (acessar servico interno via maquina comprometida)..\n• Conceitos-chave: Chisel/Ligolo: tunneling mais avancado.. SOCKS proxy: proxychains pra rotear ferramentas pelo tunel.. Pivoting: usar maquina A pra acessar rede de B.. Essencial em pentests corporativos.\n• O que estudar: SSH tunnels, chisel, ligolo, pivoting em redes internas."
              },
              {
                "w": "Data exfiltration: tecnicas, deteccao, DNS tunneling, steganografia conceito",
                "s": "Data exfiltration tecnicas tutorial portugues | steganography concept tutorial | data exfiltration explained for beginners | data exfiltration explicação em português",
                "d": "• O que é: Exfiltrar: tirar dados do ambiente comprometido..\n• Conceitos-chave: Steganografia: esconder dados em imagens.. Deteccao: DLP (Data Loss Prevention), volume anormal..\n• Exemplos: Tecnicas: HTTP/HTTPS (parece trafego normal), DNS tunneling (dados em queries DNS), email.. Como pentester: documente que dados PODERIAM ser exfiltrados, nao exfiltre dados reais.\n• O que estudar: tecnicas, deteccao, DNS tunneling, steganografia conceito."
              },
              {
                "w": "Clean up: restaurar sistemas ao estado original apos o teste",
                "s": "post engagement cleanup tutorial | restore systems after pentest | clean up explained for beginners | clean up explicação em português",
                "d": "• O que é: Apos o teste: remover TODOS os artefatos (backdoors, usuarios criados, arquivos, ferramentas)..\n• Conceitos-chave: Documentar o que foi alterado.. Restaurar configs modificadas.. Verificar que nada ficou pra tras.. Entrega: relatorio + checklist de cleanup.. Profissionalismo: deixar o ambiente MELHOR do que encontrou.\n• O que estudar: restaurar sistemas ao estado original apos o teste."
              }
            ]
          }
        ]
      },
      {
        "name": "🔌 Robotica, IoT & Automacao Avancada",
        "topics": [
          {
            "name": "ROS, Visao, Controle",
            "books": [
              "Programming Robots with ROS — Quigley et al.",
              "Robotics Vision & Control — Peter Corke",
              "Introduction to Autonomous Robots — Correll (gratuito)"
            ],
            "items": [
              {
                "w": "ROS2: nodes, topics, services, actions, launch",
                "s": "robot operating system tutorial | ROS2 nodes topics explained | ros2 explicação em português | ROS2 examples and practice",
                "d": "• O que é: ROS2: framework padrao..\n• Conceitos-chave: Nodes: processos.. Topics: pub/sub.. Services: req/res.. Actions: longa duracao.\n• O que estudar: nodes, topics, services, actions, launch."
              },
              {
                "w": "Visao computacional: OpenCV, deteccao, tracking",
                "s": "Visao computacional explicação português | Visao computacional OpenCV explained | visao computacional tutorial completo | Visao computacional examples and practice",
                "d": "• O que é: OpenCV: captura, filtros, deteccao de bordas/faces..\n• Conceitos-chave: YOLO: object detection real-time.\n• O que estudar: OpenCV, deteccao, tracking."
              },
              {
                "w": "Cinematica, SLAM, sensores (LIDAR, IMU, cameras)",
                "s": "Cinematica SLAM sensores tutorial portugues | LIDAR IMU sensor fusion tutorial | cinematica slam sensores lidar imu cameras explained for beginners | cinematica slam sensores lidar imu cameras explicação em português",
                "d": "• O que é: Cinematica: geometria do movimento..\n• Conceitos-chave: SLAM: mapear+localizar.. Sensor fusion: combinar dados."
              },
              {
                "w": "Controle: PID avancado, MPC, path planning (A*, RRT)",
                "s": "Controle avancado path tutorial portugues | PID controller advanced tutorial | controle explained for beginners | controle explicação em português",
                "d": "• O que é: PID: tuning..\n• Conceitos-chave: MPC: otimizacao com modelo.. A*/RRT: planejamento de caminho.\n• O que estudar: PID avancado, MPC, path planning (A*, RRT)."
              },
              {
                "w": "Simulacao: Gazebo, Isaac Sim, MuJoCo",
                "s": "Simulacao Gazebo Isaac tutorial portugues | robot simulation Gazebo Isaac Sim MuJoCo | simulacao explained for beginners | simulacao explicação em português",
                "d": "• O que é: Gazebo: simulador padrao com ROS2..\n• Conceitos-chave: Isaac Sim (NVIDIA): fotorealistico + GPU.. MuJoCo: rapido pra RL.. Simular antes de construir = mais barato e seguro.\n• O que estudar: Gazebo, Isaac Sim, MuJoCo."
              },
              {
                "w": "Navegacao autonoma: mapeamento, localizacao, Nav2",
                "s": "Navegacao autonoma mapeamento tutorial portugues | robot navigation mapping tutorial | navegacao autonoma explained for beginners | navegacao autonoma explicação em português",
                "d": "• O que é: Nav2 (ROS2): stack completa de navegacao..\n• Conceitos-chave: Mapa: SLAM gera.. Localizacao: AMCL.. Planejamento: global (A*) + local (DWB).. Costmaps: obstaculos.. Recovery behaviors.\n• O que estudar: mapeamento, localizacao, Nav2."
              }
            ]
          },
          {
            "name": "IA aplicada a Robotica",
            "books": [
              "Probabilistic Robotics — Thrun, Burgard & Fox",
              "Deep Learning for Robotics — Sunderhauf et al.",
              "Reinforcement Learning for Robotics — Kober et al."
            ],
            "items": [
              {
                "w": "Percepcao: YOLO, segmentacao semantica, depth estimation, point clouds",
                "s": "Percepcao YOLO segmentacao tutorial portugues | YOLO object detection robotics | percepcao explained for beginners | percepcao explicação em português",
                "d": "• O que é: YOLO: deteccao real-time..\n• Conceitos-chave: Segmentacao: pixel a pixel.. Depth: monocular ou stereo.. Point clouds: LIDAR > nuvem 3D.. Open3D, PCL.. Percepcao e os 'olhos' do robo.\n• O que estudar: YOLO, segmentacao semantica, depth estimation, point clouds."
              },
              {
                "w": "RL pra robotica: sim-to-real, domain randomization, reward shaping",
                "s": "robotica sim-to-real domain tutorial portugues | reinforcement learning robotics sim to real | rl pra robotica explained for beginners | rl pra robotica explicação em português",
                "d": "• O que é: Treinar em simulacao, transferir pro real (sim-to-real gap)..\n• Conceitos-chave: Domain randomization: variar parametros na simulacao.. Reward shaping: guiar o agente.. PPO e SAC sao populares pra robotica.\n• O que estudar: sim-to-real, domain randomization, reward shaping."
              },
              {
                "w": "Manipulacao: grasping, motion planning, MoveIt2",
                "s": "Manipulacao grasping motion tutorial portugues | robot manipulation grasping MoveIt2 | manipulacao explained for beginners | manipulacao explicação em português",
                "d": "• O que é: MoveIt2: framework ROS2 pra planejamento de movimento..\n• Conceitos-chave: Cinematica inversa: dado ponto, achar angulos das juntas.. Grasping: pegar objetos (dificil!).. Force/torque sensing.\n• O que estudar: grasping, motion planning, MoveIt2."
              },
              {
                "w": "Veiculos autonomos: percepcao, fusao sensorial, planejamento, AUTOWARE",
                "s": "Veiculos autonomos percepcao tutorial portugues | autonomous vehicles perception planning | veiculos autonomos explained for beginners | veiculos autonomos explicação em português",
                "d": "• O que é: Camera + LIDAR + radar + GPS/IMU..\n• Conceitos-chave: Fusao sensorial: combinar tudo.. Percepcao > Predicao > Planejamento > Controle.. AUTOWARE: stack open-source pra veiculos autonomos.\n• O que estudar: percepcao, fusao sensorial, planejamento, AUTOWARE."
              },
              {
                "w": "Drones: controle de voo, PX4/ArduPilot, visao aerea, enxames",
                "s": "Drones controle PX4/ArduPilot tutorial portugues | drone programming PX4 ArduPilot | drones explained for beginners | drones explicação em português",
                "d": "• O que é: PX4/ArduPilot: autopilots open-source..\n• Conceitos-chave: MAVLink: protocolo de comunicacao.. Controle: PID em 3 eixos.. Visao aerea: mapeamento, inspecao.. Enxames: multiplos drones coordenados.\n• O que estudar: controle de voo, PX4/ArduPilot, visao aerea, enxames."
              },
              {
                "w": "Aprendizado por imitacao: imitation learning, learning from demonstration, GAIL",
                "s": "Aprendizado por imitacao explicação português | GAIL generative adversarial imitation | aprendizado por imitacao tutorial completo | aprendizado por imitacao explained for beginners",
                "d": "• O que é: Behavioral cloning: copiar demonstracoes humanas (obs,action pairs)..\n• Conceitos-chave: DAgger: corrigir erros iterativamente.. GAIL: usar GAN pra imitar.. Aplicacao: ensinar robo a dobrar roupa, cozinhar, montar pecas.. Mais facil que definir reward function (RL).. Combinar com RL: imitacao pra bootstrap + RL pra refinar.\n• O que estudar: imitation learning, learning from demonstration, GAIL."
              }
            ]
          },
          {
            "name": "Automacao Avancada & Industria 4.0",
            "books": [
              "Industry 4.0 — Gilchrist",
              "Digital Twins — Grieves",
              "Smart Manufacturing — Davis et al."
            ],
            "items": [
              {
                "w": "Digital Twins: modelo virtual de sistema fisico, sincronizacao em tempo real",
                "s": "Digital Twins modelo tutorial portugues | digital twin technology tutorial | digital twins explained for beginners | digital twins explicação em português",
                "d": "• O que é: Digital twin: copia virtual que espelha o fisico em tempo real..\n• Conceitos-chave: Sensores alimentam o modelo.. Prever falhas, otimizar, simular mudancas antes de aplicar.. Azure Digital Twins, AWS IoT TwinMaker.\n• O que estudar: modelo virtual de sistema fisico, sincronizacao em tempo real."
              },
              {
                "w": "ML pra manutencao preditiva: anomaly detection, time series, RUL",
                "s": "manutencao preditiva anomaly tutorial portugues | manutencao preditiva machine learning | ml pra manutencao preditiva explained for beginners | ml pra manutencao preditiva explicação em português",
                "d": "• O que é: Vibracoes, temperatura, corrente > modelo preve falha ANTES de acontecer..\n• Conceitos-chave: Isolation Forest, autoencoders pra anomalia.. LSTM pra series temporais.. RUL: Remaining Useful Life.\n• O que estudar: anomaly detection, time series, RUL."
              },
              {
                "w": "Visao industrial: inspecao de qualidade, contagem, OCR",
                "s": "Visao industrial inspecao tutorial portugues | machine vision industrial inspection | visao industrial explained for beginners | visao industrial explicação em português",
                "d": "• O que é: Cameras industriais + iluminacao controlada + processamento de imagem..\n• Conceitos-chave: Detectar defeitos (rachaduras, falhas de solda).. Contar pecas.. Ler codigos/textos (OCR).. Aplicacao direta de CNN.\n• O que estudar: inspecao de qualidade, contagem, OCR."
              },
              {
                "w": "Edge computing + IoT em escala: MQTT brokers, dashboards, alertas",
                "s": "Edge computing escala tutorial portugues | edge computing IoT architecture | edge computing + iot em escala explained for beginners | edge computing + iot em escala explicação em português",
                "d": "• O que é: Edge: processar proximo ao sensor (baixa latencia)..\n• Conceitos-chave: Nuvem: armazenar e analisar.. MQTT broker (Mosquitto, EMQX).. Dashboards: Grafana, Node-RED.. Alertas: threshold + ML.. InfluxDB pra time series.\n• O que estudar: MQTT brokers, dashboards, alertas."
              },
              {
                "w": "Robos colaborativos (cobots): seguranca, standards (ISO 10218, TS 15066), integração",
                "s": "Robos colaborativos cobots tutorial portugues | ISO 10218 robot safety tutorial | robos colaborativos cobots explained for beginners | robos colaborativos cobots explicação em português",
                "d": "• O que é: Cobots: robos que trabalham AO LADO de humanos (sem gaiola)..\n• Conceitos-chave: Universal Robots, FANUC, ABB.. Safety: limitar forca/velocidade, sensores de contato.. ISO 10218: seguranca de robos industriais.. TS 15066: cobots especificamente.. Mercado em explosao: cobots sao acessiveis pra PMEs.\n• O que estudar: seguranca, standards (ISO 10218, TS 15066), integração."
              },
              {
                "w": "Controle avancado: MPC (Model Predictive Control), controle adaptativo, sistemas nao-lineares",
                "s": "Controle avancado Model tutorial portugues | MPC model predictive control industrial | controle avancado explained for beginners | controle avancado explicação em português",
                "d": "• O que é: MPC: otimiza controle olhando pra frente (preve o futuro com modelo)..\n• Conceitos-chave: Mais caro computacionalmente que PID, mas muito melhor pra sistemas complexos.. Controle adaptativo: ajusta parametros online.. Sistemas nao-lineares: a maioria do mundo real.. Ferramentas: MATLAB/Simulink, Python (control library).\n• O que estudar: MPC (Model Predictive Control), controle adaptativo, sistemas nao-lineares."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "expert",
    "name": "🔴 MUITO AVANCADO",
    "css": "red",
    "time": "Continuo",
    "desc": "MLOps, pesquisa, lideranca, seguranca ofensiva. Carreira senior+.",
    "areas": [
      {
        "name": "🚀 Sistemas Distribuidos",
        "topics": [
          {
            "name": "Teoria e Pratica",
            "books": [
              "Designing Data-Intensive Apps — Kleppmann",
              "Distributed Systems — Maarten van Steen",
              "Understanding Distributed Systems — Vitillo"
            ],
            "items": [
              {
                "w": "CAP, PACELC, consenso (Raft/Paxos), consistencia eventual",
                "s": "PACELC consenso Raft/Paxos tutorial portugues | Raft Paxos consensus tutorial | cap pacelc consenso raft/paxos consistencia eventual explained for beginners | cap pacelc consenso raft/paxos consistencia eventual explicação em português",
                "d": "• O que é: CAP: Consistency vs Availability em particao..\n• Conceitos-chave: Raft: consenso pratico.. Eventual consistency."
              },
              {
                "w": "Escalabilidade: sharding, partitioning, replicacao",
                "s": "Escalabilidade sharding partitioning tutorial portugues | database sharding partitioning | escalabilidade explained for beginners | escalabilidade explicação em português",
                "d": "• O que é: Shard: dividir dados..\n• Conceitos-chave: Replica: copiar.. Horizontal: mais maquinas.. Vertical: maquina maior.\n• O que estudar: sharding, partitioning, replicacao."
              },
              {
                "w": "Tolerancia a falhas, circuit breaker, retry, idempotencia",
                "s": "Tolerancia falhas circuit tutorial portugues | fault tolerance distributed systems | tolerancia a falhas circuit breaker retry idempotencia explained for beginners | tolerancia a falhas circuit breaker retry idempotencia explicação em português",
                "d": "• O que é: Circuit breaker: parar de chamar servico com falha..\n• Conceitos-chave: Retry com backoff.. Idempotencia: mesma chamada = mesmo efeito."
              },
              {
                "w": "gRPC, Protocol Buffers, service mesh (Istio)",
                "s": "gRPC Protocol Buffers tutorial portugues | gRPC protocol buffers tutorial | grpc protocol buffers service mesh istio explained for beginners | grpc protocol buffers service mesh istio explicação em português",
                "d": "• O que é: gRPC: rapido, tipado..\n• Conceitos-chave: Protobuf: serializacao eficiente.. Service mesh: observabilidade entre servicos."
              },
              {
                "w": "Event sourcing, CQRS em pratica, eventual consistency patterns",
                "s": "Event sourcing CQRS tutorial portugues | eventual consistency patterns | event sourcing cqrs em pratica eventual consistency patterns explained for beginners | event sourcing cqrs em pratica eventual consistency patterns explicação em português",
                "d": "• O que é: Event sourcing: armazenar eventos (nao estado atual)..\n• Conceitos-chave: Replay pra reconstruir.. CQRS: modelo de leitura separado do de escrita.. Patterns: saga, outbox, idempotent consumer.. Compensacao: desfazer em caso de falha."
              },
              {
                "w": "Observabilidade distribuida: tracing (OpenTelemetry), correlation IDs",
                "s": "Observabilidade distribuida tracing tutorial portugues | distributed tracing OpenTelemetry | observabilidade distribuida explained for beginners | observabilidade distribuida explicação em português",
                "d": "• O que é: Quando um request passa por 10 servicos, como achar o problema? Distributed tracing: cada request tem um trace ID..\n• Conceitos-chave: OpenTelemetry: padrao aberto.. Spans: cada servico registra sua parte.. Jaeger/Tempo: visualizar traces.\n• O que estudar: tracing (OpenTelemetry), correlation IDs."
              },
              {
                "w": "Bancos distribuidos: Cassandra, CockroachDB, Spanner, DynamoDB, trade-offs",
                "s": "distributed database Cassandra CockroachDB Spanner | Bancos distribuidos Cassandra tutorial 2025 | bancos distribuidos explained for beginners | bancos distribuidos explicação em português",
                "d": "• O que é: Cassandra: AP (disponivel, tolerante a particao, eventualmente consistente)..\n• Conceitos-chave: CockroachDB: CP (consistente, Spanner-like).. Spanner (Google): globalmente consistente (TrueTime).. DynamoDB: managed, key-value.. Cada um faz trade-offs diferentes no CAP.\n• O que estudar: Cassandra, CockroachDB, Spanner, DynamoDB, trade-offs."
              },
              {
                "w": "Distributed caching: Redis Cluster, Memcached, cache invalidation, consistency",
                "s": "Distributed caching Redis tutorial portugues | distributed caching Redis Cluster | distributed caching explained for beginners | distributed caching explicação em português",
                "d": "• O que é: Cache invalidation: 'one of the two hard things in CS'..\n• Conceitos-chave: Patterns: cache-aside, write-through, write-behind.. TTL: expiracao.. Redis Cluster: sharding automatico.. Memcached: mais simples.. Problemas: thundering herd, cache stampede, stale data.\n• O que estudar: Redis Cluster, Memcached, cache invalidation, consistency."
              },
              {
                "w": "Sistemas de arquivos distribuídos: HDFS, GFS, Ceph — como armazenar petabytes em cluster",
                "s": "Sistemas de arquivos distribudos explicação português | distributed file system tutorial | sistemas de arquivos distribudos explained for beginners | Sistemas de arquivos distribuídos examples and practice",
                "d": "• O que é: HDFS (Hadoop): blocos replicados em data nodes, name node coordena..\n• Conceitos-chave: GFS (Google): chunks de 64MB.. Ceph: object-based, sem single point of failure.\n• O que estudar: HDFS, GFS, Ceph — como armazenar petabytes em cluster."
              },
              {
                "w": "Consistência e consenso na prática: Zookeeper, etcd, Consul — coordenação distribuída",
                "s": "Consistncia e consenso na prtica explicação português | distributed coordination tutorial | consistncia e consenso na prtica explained for beginners | Consistência e consenso na prática examples and practice",
                "d": "• O que é: Zookeeper/etcd coordenam serviços: leader election, config distribuído, locks distribuídos..\n• Conceitos-chave: etcd é o cérebro do Kubernetes.\n• O que estudar: Zookeeper, etcd, Consul — coordenação distribuída."
              }
            ]
          },
          {
            "name": "Prática de Sistemas Distribuídos",
            "books": [
              "Designing Data-Intensive Applications — Martin Kleppmann",
              "Building Microservices — Sam Newman",
              "Database Internals — Alex Petrov"
            ],
            "items": [
              {
                "w": "Padrões de comunicação: sync (gRPC, REST) vs async (message queues, event streaming), trade-offs",
                "s": "Padres de comunicao explicação português | communication patterns tutorial | padres de comunicao explained for beginners | Padrões de comunicação examples and practice",
                "d": "• O que é: Sync: request-response imediato (simples, acoplado)..\n• Conceitos-chave: Async: fire-and-forget via fila (desacoplado, resiliente).. Escolher baseado em requisitos de latência e coupling.\n• O que estudar: sync (gRPC, REST) vs async (message queues, event streaming), trade-offs."
              },
              {
                "w": "Transações distribuídas: 2PC, Saga pattern (choreography vs orchestration), compensação, idempotência",
                "s": "Transaes distribudas explicação português | distributed transactions tutorial | transaes distribudas explained for beginners | Transações distribuídas examples and practice",
                "d": "• O que é: 2PC é simples mas bloqueia..\n• Conceitos-chave: Saga divide em transações locais com compensação.. Choreography: eventos.. Orchestration: coordenador central.. Idempotência para retries.\n• O que estudar: 2PC, Saga pattern (choreography vs orchestration), compensação, idempotência."
              },
              {
                "w": "Service discovery, health checks, load balancing: como serviços se encontram em ambiente dinâmico",
                "s": "Service discovery health checks load balancing explicação português | dynamic environment tutorial | service discovery health checks load balancing explained for beginners | Service discovery health checks load balancin examples and practice",
                "d": "• O que é: Em K8s/cloud, IPs mudam constantemente..\n• Conceitos-chave: Service discovery (DNS, Consul) resolve nomes.. Health checks removem instâncias doentes.. Load balancer distribui tráfego.\n• O que estudar: como serviços se encontram em ambiente dinâmico."
              },
              {
                "w": "Observabilidade distribuída: OpenTelemetry, distributed tracing, log correlation, exemplar linking",
                "s": "Observabilidade distribuda explicação português | distributed tracing tutorial | observabilidade distribuda explained for beginners | Observabilidade distribuída examples and practice",
                "d": "• O que é: Em microsserviços, um request passa por 5+ serviços..\n• Conceitos-chave: OpenTelemetry instrumenta traces, métricas e logs.. Correlation IDs conectam logs entre serviços.\n• O que estudar: OpenTelemetry, distributed tracing, log correlation, exemplar linking."
              },
              {
                "w": "Chaos engineering: Chaos Monkey, Litmus, experimentos em produção, blast radius, steady state",
                "s": "Chaos engineering explicação português | chaos engineering tutorial | chaos engineering explained for beginners | Chaos engineering examples and practice",
                "d": "• O que é: Injetar falhas controladas para descobrir fraquezas: matar pods, adicionar latência, particionar rede..\n• Conceitos-chave: Blast radius limita impacto.. Netflix pioneira.\n• O que estudar: Chaos Monkey, Litmus, experimentos em produção, blast radius, steady state."
              },
              {
                "w": "Casos reais: como Google Spanner, Amazon DynamoDB e Apache Kafka resolvem problemas distribuídos",
                "s": "Casos reais explicação português | real world distributed tutorial | casos reais explained for beginners | Casos reais examples and practice",
                "d": "• O que é: Spanner: SQL global com TrueTime..\n• Conceitos-chave: DynamoDB: eventual consistency com tunable reads.. Kafka: log distribuído para streaming.. Cada um resolve problemas diferentes.\n• O que estudar: como Google Spanner, Amazon DynamoDB e Apache Kafka resolvem problemas distribuídos."
              }
            ]
          }
        ]
      },
      {
        "name": "⚙️ MLOps & Producao",
        "topics": [
          {
            "name": "Pipeline ML em Producao",
            "books": [
              "Designing ML Systems — Chip Huyen",
              "MLOps — Kreuzberger et al.",
              "Building ML Powered Apps — Ameisen"
            ],
            "items": [
              {
                "w": "MLflow, Weights & Biases: experiment tracking",
                "s": "MLflow Weights Biases tutorial portugues | ML experiment management tutorial | mlflow weights & biases explained for beginners | mlflow weights & biases explicação em português",
                "d": "• O que é: Track: metricas, parametros, artefatos..\n• Conceitos-chave: Compare runs.. Model registry.. Reproducibilidade.\n• O que estudar: experiment tracking."
              },
              {
                "w": "Feature Stores, Data Pipelines (Airflow, dbt)",
                "s": "Feature Stores Data tutorial portugues | Apache Airflow dbt tutorial | feature stores data pipelines airflow dbt explained for beginners | feature stores data pipelines airflow dbt explicação em português",
                "d": "• O que é: Feature store: features reutilizaveis..\n• Conceitos-chave: Airflow: orquestrar.. dbt: transformar dados."
              },
              {
                "w": "Model Serving: TorchServe, Triton, BentoML, endpoints",
                "s": "Model Serving TorchServe tutorial portugues | model serving TorchServe Triton | model serving explained for beginners | model serving explicação em português",
                "d": "• O que é: REST/gRPC endpoint..\n• Conceitos-chave: GPU inference.. Quantizacao (INT8).. ONNX Runtime.\n• O que estudar: TorchServe, Triton, BentoML, endpoints."
              },
              {
                "w": "Monitoring: data drift, model drift, A/B testing",
                "s": "Monitoring data drift tutorial portugues | ML model monitoring drift detection | monitoring explained for beginners | monitoring explicação em português",
                "d": "• O que é: Data drift: distribuicao mudou..\n• Conceitos-chave: Model drift: performance caiu.. A/B: comparar modelos.. Retrain triggers.\n• O que estudar: data drift, model drift, A/B testing."
              },
              {
                "w": "CI/CD para ML, testes de modelo, reproducibilidade",
                "s": "CI/CD para testes tutorial portugues | reproducibility machine learning | ci/cd para ml testes de modelo reproducibilidade explained for beginners | ci/cd para ml testes de modelo reproducibilidade explicação em português",
                "d": "• O que é: Testar dados, modelo, pipeline..\n• Conceitos-chave: DVC: versionar dados.. Docker + pipeline = reproduzivel."
              },
              {
                "w": "LLMOps: deploy de LLMs, inference optimization, quantization, vLLM, TGI",
                "s": "LLMOps deploy LLMs tutorial portugues | vLLM TGI inference tutorial | llmops explained for beginners | llmops explicação em português",
                "d": "• O que é: LLMs sao CAROS pra servir..\n• Conceitos-chave: vLLM: PagedAttention (batching eficiente).. TGI (HuggingFace): production-ready.. Quantizacao: float16 > int8 > int4 (GPTQ, AWQ).. Speculative decoding.. GPU memory management.. Custo: otimizar tokens/segundo/dolar.\n• O que estudar: deploy de LLMs, inference optimization, quantization, vLLM, TGI."
              },
              {
                "w": "Data versioning: DVC, LakeFS, Delta Lake versioning, lineage",
                "s": "Data versioning LakeFS tutorial portugues | data lineage tracking tutorial | data versioning explained for beginners | data versioning explicação em português",
                "d": "• O que é: DVC: git pra dados (trackeia datasets sem colocar no repo)..\n• Conceitos-chave: LakeFS: Git-like pra data lakes (branch, commit, merge).. Delta Lake: time travel (versoes de tabelas).. Data lineage: de onde veio cada feature? Quem transformou? Reproduzir pipeline de 3 meses atras.\n• O que estudar: DVC, LakeFS, Delta Lake versioning, lineage."
              },
              {
                "w": "Feature stores: Feast, Tecton, online vs offline serving",
                "s": "Feature stores Feast tutorial portugues | online offline feature serving | feature stores explained for beginners | feature stores explicação em português",
                "d": "• O que é: Feature store: repositorio centralizado de features..\n• Conceitos-chave: Offline: batch (treino).. Online: low-latency (inferencia).. Feast: open-source.. Tecton: managed.. Point-in-time correctness: evitar data leakage.. Reusar features entre modelos e times.\n• O que estudar: Feast, Tecton, online vs offline serving."
              }
            ]
          },
          {
            "name": "LLMOps e ML em Escala",
            "books": [
              "Designing Machine Learning Systems — Chip Huyen",
              "Reliable Machine Learning — Cathy Chen et al.",
              "Machine Learning Engineering — Andriy Burkov"
            ],
            "items": [
              {
                "w": "LLMOps: deploy de LLMs (vLLM, TGI, Ollama), quantização (GPTQ, AWQ, GGUF), inference optimization",
                "s": "inference optimization tutorial | LLMOps explicação português | llmops explained for beginners | LLMOps examples and practice",
                "d": "• O que é: Servir LLMs é caro: vLLM usa PagedAttention para throughput..\n• Conceitos-chave: Quantização reduz modelo de 16-bit para 4-bit.. Ollama facilita rodar local.\n• O que estudar: deploy de LLMs (vLLM, TGI, Ollama), quantização (GPTQ, AWQ, GGUF), inference optimization."
              },
              {
                "w": "ML distribuído: data parallelism, model parallelism, pipeline parallelism (DeepSpeed, FSDP, Megatron)",
                "s": "ML distribudo explicação português | pipeline parallel tutorial | ml distribudo explained for beginners | ML distribuído examples and practice",
                "d": "• O que é: Modelos grandes não cabem em 1 GPU: data parallel replica modelo, model parallel divide camadas, pipeline parallel combina ambos.\n• O que estudar: data parallelism, model parallelism, pipeline parallelism (DeepSpeed, FSDP, Megatron)."
              },
              {
                "w": "Responsible AI em produção: bias monitoring, fairness metrics, model cards, AI incident database",
                "s": "Responsible AI em produo explicação português | fairness metrics tutorial | responsible ai em produo explained for beginners | Responsible AI em produção examples and practice",
                "d": "• O que é: Monitorar bias em produção: disparidade entre grupos, fairness metrics (equal opportunity, demographic parity)..\n• Conceitos-chave: Model cards documentam limitações.\n• O que estudar: bias monitoring, fairness metrics, model cards, AI incident database."
              },
              {
                "w": "Cost optimization de ML: spot instances para treino, caching de embeddings, modelo routing (grande vs pequeno)",
                "s": "Cost optimization de ML explicação português | ML cost optimization tutorial | cost optimization de ml explained for beginners | Cost optimization de ML examples and practice",
                "d": "• O que é: Treino com spot instances (70% mais barato)..\n• Conceitos-chave: Cache embeddings frequentes.. Rotear queries simples para modelo pequeno (barato) e complexas para grande.\n• O que estudar: spot instances para treino, caching de embeddings, modelo routing (grande vs pequeno)."
              },
              {
                "w": "Feature platforms: Feast, Tecton, Hopsworks — online serving, offline training, feature consistency, point-in-time correctness",
                "s": "Feature platforms explicação português | Feast Tecton Hopsworks tutorial | feature platforms explained for beginners | Feature platforms examples and practice",
                "d": "• O que é: Feature stores garantem que features são iguais em treino e serving..\n• Conceitos-chave: Point-in-time correctness evita data leakage.. Online serving com latência baixa.\n• O que estudar: Feast, Tecton, Hopsworks — online serving, offline training, feature consistency, point-in-time correctness."
              },
              {
                "w": "ML testing: data validation (Great Expectations), model testing (behavioral, invariance, directional), shadow deployment",
                "s": "ML testing explicação português | behavioral testing tutorial | ml testing explained for beginners | ML testing examples and practice",
                "d": "• O que é: Testar ML vai além de acurácia: validar dados de entrada, testar invariância (input parecido → output parecido), shadow deploy compara modelo novo vs atual.\n• O que estudar: data validation (Great Expectations), model testing (behavioral, invariance, directional), shadow deployment."
              }
            ]
          }
        ]
      },
      {
        "name": "🧬 Pesquisa & Fronteira",
        "topics": [
          {
            "name": "RL, Multimodal, Scaling Laws",
            "books": [
              "Reinforcement Learning — Sutton & Barto (gratuito)",
              "Deep RL Hands-On — Maxim Lapan",
              "The Alignment Problem — Brian Christian"
            ],
            "items": [
              {
                "w": "Reinforcement Learning: MDP, Q-Learning, PPO, GRPO",
                "s": "Reinforcement Learning Q-Learning explained | Reinforcement Learning explicação português | reinforcement learning tutorial completo | Reinforcement Learning examples and practice",
                "d": "• O que é: MDP: estado-acao-recompensa..\n• Conceitos-chave: Q-Learning: tabular.. DQN, PPO, GRPO.. Ambientes: Gymnasium.\n• O que estudar: MDP, Q-Learning, PPO, GRPO."
              },
              {
                "w": "Multimodal: CLIP, LLaVA, modelos unificados",
                "s": "Multimodal CLIP LLaVA tutorial portugues | multimodal AI CLIP LLaVA tutorial | multimodal explained for beginners | multimodal explicação em português",
                "d": "• O que é: CLIP: imagem+texto embeddings..\n• Conceitos-chave: Modelos gerais que entendem multiplas modalidades.\n• O que estudar: CLIP, LLaVA, modelos unificados."
              },
              {
                "w": "Scaling Laws, Mixture of Experts, Sparse Models",
                "s": "Scaling Laws Mixture tutorial portugues | sparse models efficiency tutorial | scaling laws mixture of experts sparse models explained for beginners | scaling laws mixture of experts sparse models explicação em português",
                "d": "• O que é: Mais dados + mais parametros = melhor (ate certo ponto)..\n• Conceitos-chave: MoE: ativar subset.. Eficiencia."
              },
              {
                "w": "Ler papers: arXiv, Papers With Code, conferencias",
                "s": "Ler papers explicação português | Papers With Code tutorial | ler papers explained for beginners | Ler papers examples and practice",
                "d": "• O que é: arXiv: pre-prints..\n• Conceitos-chave: PWC: papers+codigo.. Conferencias: NeurIPS, ICML, ICLR, CVPR, ACL.. Leia 1 paper/semana.\n• O que estudar: arXiv, Papers With Code, conferencias."
              },
              {
                "w": "AI Safety, Alignment, Interpretability",
                "s": "Safety Alignment Interpretability tutorial portugues | AI safety alignment tutorial | ai safety alignment interpretability explained for beginners | ai safety alignment interpretability explicação em português",
                "d": "• O que é: Alignment: IA fazendo o que queremos..\n• Conceitos-chave: Safety: prevenir riscos.\n• Exemplos: Interpretability: entender COMO decide.."
              },
              {
                "w": "Foundation Models pra Robotica: RT-2, SayCan, robos genericos",
                "s": "Foundation Models Robotica tutorial portugues | foundation models robotics RT-2 SayCan | foundation models pra robotica explained for beginners | foundation models pra robotica explicação em português",
                "d": "• O que é: RT-2: modelo visao-linguagem-acao..\n• Conceitos-chave: SayCan: LLM decide, robo executa.. Objetivo: robos que entendem linguagem natural e se adaptam.. Fronteira mais quente em robotica.\n• O que estudar: RT-2, SayCan, robos genericos."
              },
              {
                "w": "Research Engineering: papel entre pesquisador e engenheiro, skills, onde trabalhar",
                "s": "Research Engineering papel tutorial portugues | research scientist vs research engineer | research engineering explained for beginners | research engineering explicação em português",
                "d": "• O que é: Research Engineer: implementar papers, escalar experimentos, infra de ML..\n• Conceitos-chave: Diferente de Research Scientist (publica papers).. Google, DeepMind, Meta FAIR, OpenAI, Anthropic contratam.. Skills: Python, PyTorch, distributed training, Linux, cloud.. Salarios altos.. Nao precisa de PhD (mas ajuda).\n• O que estudar: papel entre pesquisador e engenheiro, skills, onde trabalhar."
              }
            ]
          },
          {
            "name": "Computacao Quantica",
            "books": [
              "Quantum Computing: An Applied Approach — Jack Hidary",
              "Quantum Computation and Quantum Information — Nielsen & Chuang",
              "Dancing with Qubits — Robert Sutor"
            ],
            "items": [
              {
                "w": "Fundamentos: qubits, superposicao, entrelagamento, medicao",
                "s": "Fundamentos qubits superposicao tutorial portugues | quantum computing basics qubits superposition | fundamentos explained for beginners | fundamentos explicação em português",
                "d": "• O que é: Bit classico: 0 ou 1..\n• Conceitos-chave: Qubit: superposicao de 0 E 1 simultaneamente.. Entrelagamento: 2 qubits correlacionados instantaneamente.. Medicao: colapsa superposicao.. Com N qubits, 2^N estados simultaneos.. Poder exponencial pra certos problemas.\n• O que estudar: qubits, superposicao, entrelagamento, medicao."
              },
              {
                "w": "Portas quanticas: Hadamard, CNOT, Pauli (X, Y, Z), Toffoli, circuitos",
                "s": "Portas quanticas Hadamard tutorial portugues | quantum gates Hadamard CNOT Pauli | portas quanticas explained for beginners | portas quanticas explicação em português",
                "d": "• O que é: Hadamard (H): cria superposicao..\n• Conceitos-chave: CNOT: entrelagamento (controlled-NOT).. Pauli-X: NOT quantico.. Circuito quantico: sequencia de portas.. Analogia: portas logicas classicas (AND, OR) vs portas quanticas.. Reversibilidade: toda operacao quantica e reversivel.\n• O que estudar: Hadamard, CNOT, Pauli (X, Y, Z), Toffoli, circuitos."
              },
              {
                "w": "Algoritmos quanticos: Deutsch-Jozsa, Grover (busca), Shor (fatoracao)",
                "s": "Algoritmos quanticos Deutsch-Jozsa tutorial portugues | quantum algorithms Grover Shor | algoritmos quanticos explained for beginners | algoritmos quanticos explicação em português",
                "d": "• O que é: Grover: busca em lista N em sqrt(N) vs N classico..\n• Conceitos-chave: Shor: fatorar numeros grandes em tempo polinomial (quebraria RSA!).. Deutsch-Jozsa: primeiro a mostrar vantagem quantica.. VQE/QAOA: otimizacao hibrida classica-quantica.\n• O que estudar: Deutsch-Jozsa, Grover (busca), Shor (fatoracao)."
              },
              {
                "w": "Qiskit (IBM), Cirq (Google), Pennylane: programar computadores quanticos",
                "s": "Qiskit IBM Cirq Google Pennylane explicação português | Qiskit tutorial quantum programming | qiskit ibm cirq google pennylane explained for beginners | Qiskit IBM Cirq Google Pennylane examples and practice",
                "d": "• O que é: Qiskit (IBM): framework Python mais popular..\n• Conceitos-chave: IBM Quantum: rodar em hardware quantico REAL de graca.. Cirq (Google): focado em NISQ.. Pennylane: quantum ML.. Simulador local: ate ~30 qubits.. Hardware real: ruidoso, poucos qubits (100-1000 em 2025).\n• O que estudar: programar computadores quanticos."
              },
              {
                "w": "Quantum ML, quantum error correction, NISQ era, futuro",
                "s": "Quantum quantum error tutorial portugues | quantum machine learning tutorial | quantum ml quantum error correction nisq era futuro explained for beginners | quantum ml quantum error correction nisq era futuro explicação em português",
                "d": "• O que é: NISQ: Noisy Intermediate-Scale Quantum (era atual)..\n• Conceitos-chave: Qubits com erro.. Error correction: muitos qubits fisicos pra 1 qubit logico.. Quantum ML: kernel methods, variational circuits.. Vantagem quantica pratica: ainda nao comprovada pra maioria dos problemas.. Futuro: 5-15 anos pra impacto real."
              },
              {
                "w": "Computacao neuromorfica: chips que imitam neuronios (Loihi, SpiNNaker)",
                "s": "neuromorphic computing Intel Loihi SpiNNaker | computacao neuromorfica tutorial | brain inspired computing tutorial | Computacao neuromorfica chips tutorial portugues",
                "d": "• O que é: Neuromorfico: hardware que imita estrutura do cerebro.\n• Detalhe: Spiking neural networks.\n• Detalhe: Intel Loihi, SpiNNaker (Manchester).\n• Detalhe: Ultra baixo consumo de energia.\n• Detalhe: Bom pra edge AI, sensores, robotica.\n• Detalhe: Complementar a GPUs, nao substituto."
              },
              {
                "w": "Criptografia pós-quântica: lattice-based (Kyber, Dilithium), NIST standards, migração",
                "s": "Criptografia psquntica explicação português | post-quantum cryptography | criptografia psquntica tutorial completo | criptografia psquntica explained for beginners",
                "d": "• O que é: Quando quantum computers quebrarem RSA/ECC, precisamos de alternativas..\n• Conceitos-chave: NIST padronizou Kyber (key exchange) e Dilithium (assinaturas).. Migração já começou.\n• O que estudar: lattice-based (Kyber, Dilithium), NIST standards, migração."
              }
            ]
          }
        ]
      },
      {
        "name": "🕵️ Ethical Hacking: Cloud, Defesa & Carreira",
        "topics": [
          {
            "name": "Cloud Security Testing",
            "books": [
              "Hacking the Cloud — Frichette (gratuito)",
              "AWS Penetration Testing — Sehgal",
              "Cloud Security Handbook — Raina"
            ],
            "items": [
              {
                "w": "AWS security: IAM misconfigs, S3 publico, metadata SSRF (169.254.169.254)",
                "s": "AWS security explicação português | AWS security testing tutorial | aws security explained for beginners | AWS security examples and practice",
                "d": "• O que é: S3 publico: dados expostos..\n• Conceitos-chave: SSRF: acessar http://169.254.169.254 pra roubar credenciais IAM.. IAM: politicas permissivas demais (*:*).. Lambda: funcoes com segredos hardcoded.. CloudTrail: detectar atividade suspeita.\n• O que estudar: IAM misconfigs, S3 publico, metadata SSRF (169.254.169.254)."
              },
              {
                "w": "Azure e GCP security: managed identity, storage accounts, metadata endpoints",
                "s": "Azure security managed tutorial portugues | GCP security assessment tutorial | azure e gcp security explained for beginners | azure e gcp security explicação em português",
                "d": "• O que é: Azure: Managed Identity (como IAM roles)..\n• Conceitos-chave: Storage accounts publicos.. Metadata: 169.254.169.254 tambem.. GCP: service accounts com permissoes demais.. Cada cloud tem suas pegadinhas.. Multi-cloud = multiplicar superficie de ataque.\n• O que estudar: managed identity, storage accounts, metadata endpoints."
              },
              {
                "w": "Serverless security: Lambda/Functions injection, event injection, cold start",
                "s": "Serverless security Lambda/Functions tutorial portugues | Lambda injection attack tutorial | serverless security explained for beginners | serverless security explicação em português",
                "d": "• O que é: Serverless NAO e invulneravel..\n• Conceitos-chave: Event injection: input malicioso no trigger (S3 event, API Gateway).. Permissoes: principio do minimo privilegio por funcao.. Cold start: timing attacks.. Logs: CloudWatch/equivalente.. Sem SSH = sem backdoor tradicional.\n• O que estudar: Lambda/Functions injection, event injection, cold start."
              },
              {
                "w": "Identity attacks: privilege escalation IAM, role chaining, cross-account",
                "s": "Identity attacks privilege tutorial portugues | cross account access AWS tutorial | identity attacks explained for beginners | identity attacks explicação em português",
                "d": "• O que é: IAM privesc: achar caminho de user normal ate admin..\n• Conceitos-chave: Role chaining: assumir role que assume outra role.. Cross-account: trust policies mal configuradas.. Ferramentas: Pacu, CloudMapper.. Enumerate primeiro, escalar depois.\n• O que estudar: privilege escalation IAM, role chaining, cross-account."
              },
              {
                "w": "Container escape: Docker breakout, K8s pod escape, container misconfigs",
                "s": "Container escape Docker tutorial portugues | Docker container escape tutorial | container escape explained for beginners | container escape explicação em português",
                "d": "• O que é: Docker: --privileged, mounted socket, cap_sys_admin..\n• Conceitos-chave: K8s: service account com permissoes demais, hostPID, hostNetwork.. Escape: montar filesystem do host.. Ferramentas: deepce, CDK.. Defesa: rootless, seccomp, AppArmor.\n• O que estudar: Docker breakout, K8s pod escape, container misconfigs."
              },
              {
                "w": "Ferramentas: ScoutSuite, Prowler, CloudSploit, Pacu, CloudMapper",
                "s": "Ferramentas ScoutSuite Prowler tutorial portugues | cloud security tools ScoutSuite Prowler | ferramentas explained for beginners | ferramentas explicação em português",
                "d": "• O que é: ScoutSuite: audit multi-cloud (AWS+Azure+GCP)..\n• Conceitos-chave: Prowler: AWS compliance + security.. CloudSploit: vulnerabilidades.. Pacu: exploitation framework AWS.. CloudMapper: visualizar rede AWS.. Todas open-source.. Sempre com permissao escrita.\n• O que estudar: ScoutSuite, Prowler, CloudSploit, Pacu, CloudMapper."
              }
            ]
          },
          {
            "name": "Seguranca Defensiva",
            "books": [
              "Blue Team Handbook — Alan White",
              "Practical Malware Analysis — Sikorski & Honig",
              "Intelligence-Driven Incident Response — Roberts & Brown"
            ],
            "items": [
              {
                "w": "SOC: monitoramento 24/7, SIEM (Splunk, ELK), alertas, triage",
                "s": "SOC security operations center | SIEM Splunk ELK tutorial | security monitoring alerting | monitoramento 24/7 SIEM tutorial portugues",
                "d": "• O que é: SOC: time que monitora seguranca..\n• Conceitos-chave: SIEM: Security Information and Event Management (centralizar logs + alertar).. Splunk/ELK/Sentinel.. Triage: priorizar alertas (muitos falsos positivos)..\n• Exemplos: Playbooks: procedimento pra cada tipo de alerta.\n• O que estudar: monitoramento 24/7, SIEM (Splunk, ELK), alertas, triage."
              },
              {
                "w": "Incident Response: preparacao, deteccao, contencao, erradicacao, recuperacao, licoes",
                "s": "Incident Response preparacao tutorial portugues | incident response plan tutorial | incident response explained for beginners | incident response explicação em português",
                "d": "• O que é: NIST framework: Prepare > Detect > Contain > Eradicate > Recover > Lessons..\n• Conceitos-chave: Preparacao: ter plano ANTES do incidente.. Contencao: isolar sistema comprometido.. Preservar evidencias.. Chain of custody.. Comunicacao: quem avisar, quando, como.\n• O que estudar: preparacao, deteccao, contencao, erradicacao, recuperacao, licoes."
              },
              {
                "w": "Threat Intelligence: IoCs, MITRE ATT&CK, threat hunting, feeds",
                "s": "Threat Intelligence IoCs tutorial portugues | threat intelligence IoC tutorial | threat intelligence explained for beginners | threat intelligence explicação em português",
                "d": "• O que é: MITRE ATT&CK: framework de taticas e tecnicas de atacantes..\n• Conceitos-chave: IoC: Indicators of Compromise (IPs, hashes, dominios maliciosos).. Threat hunting: buscar proativamente (nao esperar alerta).. Feeds: OTX, VirusTotal, AbuseIPDB.. TTP > IoC (taticas > indicadores).\n• O que estudar: IoCs, MITRE ATT&CK, threat hunting, feeds."
              },
              {
                "w": "Forense digital: aquisicao de evidencias, analise de memoria (Volatility), disco, rede",
                "s": "Forense digital aquisicao tutorial portugues | forensic analysis memory disk | forense digital explained for beginners | forense digital explicação em português",
                "d": "• O que é: Volatility: analisar dump de memoria (processos, conexoes, malware)..\n• Conceitos-chave: Autopsy/FTK: analise de disco.. Wireshark: captura de rede.. Chain of custody: documentar quem tocou na evidencia.. Write blocker: nao alterar evidencia.. Hashes pra integridade.\n• O que estudar: aquisicao de evidencias, analise de memoria (Volatility), disco, rede."
              },
              {
                "w": "Malware analysis basica: estatica (strings, PE), dinamica (sandbox), YARA rules",
                "s": "Malware analysis basica tutorial portugues | malware sandbox analysis tutorial | malware analysis basica explained for beginners | malware analysis basica explicação em português",
                "d": "• O que é: Estatica: analisar SEM executar (strings, imports, PE headers, VirusTotal)..\n• Conceitos-chave: Dinamica: executar em sandbox (ANY.RUN, Cuckoo) e observar comportamento.. YARA: regras pra detectar malware por patterns.. Nao analise malware no seu PC real — use VM isolada!.\n• O que estudar: estatica (strings, PE), dinamica (sandbox), YARA rules."
              },
              {
                "w": "Purple Teaming: red + blue colaborando, testar deteccoes, melhorar defesas",
                "s": "Purple Teaming blue tutorial portugues | purple teaming exercises tutorial | purple teaming explained for beginners | purple teaming explicação em português",
                "d": "• O que é: Purple team: red ataca, blue tenta detectar, depois comparam..\n• Conceitos-chave: Objetivo: melhorar deteccoes e playbooks.. Atomic Red Team: testes unitarios de deteccao.. Mais eficiente que red e blue separados.\n• Exemplos: MITRE ATT&CK como framework comum..\n• O que estudar: red + blue colaborando, testar deteccoes, melhorar defesas."
              },
              {
                "w": "Security Automation: SOAR, playbooks automatizados, auto-remediation",
                "s": "Security Automation SOAR tutorial portugues | SOAR security orchestration automation | security automation explained for beginners | security automation explicação em português",
                "d": "• O que é: SOAR: Security Orchestration, Automation and Response..\n• Conceitos-chave: Playbook automatizado: alerta de malware > isolar maquina > coletar evidencia > notificar time.. Ferramentas: Shuffle (open-source), Splunk SOAR, Palo Alto XSOAR.. Reduz tempo de resposta de horas pra minutos.\n• O que estudar: SOAR, playbooks automatizados, auto-remediation."
              },
              {
                "w": "Malware analysis formal: estática (PE/ELF headers, strings, Ghidra/IDA), dinâmica (sandbox, API monitoring, behavior analysis)",
                "s": "Malware analysis formal explicação português | static dynamic analysis tutorial | malware analysis formal explained for beginners | Malware analysis formal examples and practice",
                "d": "• O que é: Análise estática: examinar binário sem executar (strings, imports, disassembly em Ghidra)..\n• Conceitos-chave: Dinâmica: executar em sandbox (Any.Run, Cuckoo) e observar comportamento.\n• O que estudar: estática (PE/ELF headers, strings, Ghidra/IDA), dinâmica (sandbox, API monitoring, behavior analysis)."
              }
            ]
          },
          {
            "name": "Forense Digital: Fundamentos e Metodologia",
            "books": [
              "Digital Forensics with Kali Linux — Parasram",
              "File System Forensic Analysis — Brian Carrier",
              "Incident Response & Computer Forensics — Luttgens, Pepe & Mandia"
            ],
            "items": [
              {
                "w": "O que e forense digital: principios, cadeia de custodia, admissibilidade legal",
                "s": "forense digital principios tutorial portugues | digital forensics fundamentals | o que e forense digital explained for beginners | o que e forense digital explicação em português",
                "d": "• O que é: Forense digital: coletar, preservar, analisar e apresentar evidencias digitais..\n• Conceitos-chave: Cadeia de custodia: documentar QUEM tocou, QUANDO, O QUE fez.. Admissibilidade: evidencia deve ser integra e rastreavel.. Hashes (MD5/SHA-256) comprovam que nada foi alterado.. Principio de Locard: todo contato deixa rastro.\n• O que estudar: principios, cadeia de custodia, admissibilidade legal."
              },
              {
                "w": "Processo forense: identificacao, preservacao, coleta, exame, analise, apresentacao",
                "s": "Processo forense identificacao tutorial portugues | processo forense digital etapas | processo forense explained for beginners | processo forense explicação em português",
                "d": "• O que é: Identificar: o que e relevante? 2..\n• Conceitos-chave: Preservar: nao alterar (write blocker).. Coletar: imagem forense bit-a-bit (dd, FTK Imager).. Examinar: extrair dados.. Analisar: correlacionar evidencias.. Apresentar: relatorio tecnico + laudo pericial.. Cada etapa documentada.\n• O que estudar: identificacao, preservacao, coleta, exame, analise, apresentacao."
              },
              {
                "w": "Imagem forense: dd, dc3dd, FTK Imager, E01 vs RAW, write blockers",
                "s": "Imagem forense dc3dd tutorial portugues | forensic disk image E01 tutorial | imagem forense explained for beginners | imagem forense explicação em português",
                "d": "• O que é: Imagem forense: copia EXATA bit-a-bit do disco (nao so arquivos)..\n• Conceitos-chave: dd if=/dev/sda of=imagem.raw bs=4M.. FTK Imager: GUI, gera E01 (comprimido + hash).. SEMPRE use write blocker (impede escrita no disco original).. Verificar hash antes e depois.. 1 bit diferente = evidencia comprometida.\n• O que estudar: dd, dc3dd, FTK Imager, E01 vs RAW, write blockers."
              },
              {
                "w": "Tipos de forense: disco, memoria, rede, mobile, cloud, IoT",
                "s": "types digital forensics disk memory network mobile | Tipos forense disco tutorial portugues | tipos de forense explained for beginners | tipos de forense explicação em português",
                "d": "• O que é: Disco: arquivos, deletados, timeline..\n• Conceitos-chave: Memoria (RAM): processos, senhas, malware em execucao.. Rede: captura de trafego, logs.. Mobile: celulares (Cellebrite, Magnet AXIOM).. Cloud: logs de AWS/Azure/GCP.. IoT: firmware, sensores..\n• Exemplos: Cada tipo tem ferramentas e tecnicas proprias.\n• O que estudar: disco, memoria, rede, mobile, cloud, IoT."
              },
              {
                "w": "Ordem de volatilidade: o que coletar primeiro (RFC 3227), triage",
                "s": "Ordem de volatilidade explicação português | order of volatility RFC 3227 | ordem de volatilidade tutorial completo | ordem de volatilidade explained for beginners",
                "d": "• O que é: RFC 3227: registradores > cache > RAM > disco > logs remotos > backup..\n• Conceitos-chave: Regra: mais volatil primeiro!. Se desligar PC antes de capturar RAM = perde processos, senhas, malware fileless.. Triage: avaliacao rapida — esse incidente merece investigacao completa? Ferramentas de triage: KAPE, Velociraptor.\n• O que estudar: o que coletar primeiro (RFC 3227), triage."
              },
              {
                "w": "Anti-forense: o que atacantes fazem pra destruir evidencias, como detectar",
                "s": "anti-forensics techniques detection | detecting anti-forensics tutorial | antiforense explained for beginners | antiforense explicação em português",
                "d": "• O que é: Atacantes tentam: limpar logs, timestomp (alterar datas), usar encriptacao, wipe tools, rootkits..\n• Conceitos-chave: Detectar: inconsistencias em timestamps (MFT vs $LogFile), artefatos residuais, logs de outros sistemas (firewall, SIEM).. Axioma: eliminar TODOS os rastros e quase impossivel.. Sempre sobra algo.\n• O que estudar: o que atacantes fazem pra destruir evidencias, como detectar."
              }
            ]
          },
          {
            "name": "Forense de Disco e Sistema de Arquivos",
            "books": [
              "File System Forensic Analysis — Brian Carrier",
              "The Art of Memory Forensics — Ligh et al.",
              "Practical Forensic Imaging — Bruce Nikkel"
            ],
            "items": [
              {
                "w": "Sistemas de arquivos: NTFS, ext4, APFS, FAT32, como dados sao armazenados",
                "s": "Sistemas arquivos NTFS tutorial portugues | NTFS ext4 APFS forensics tutorial | sistemas de arquivos explained for beginners | sistemas de arquivos explicação em português",
                "d": "• O que é: NTFS (Windows): MFT (Master File Table) registra tudo..\n• Conceitos-chave: ext4 (Linux): inodes + journal.. APFS (Mac): copy-on-write.. FAT32: simples (pendrives).. Entender o filesystem = saber onde procurar evidencias.. $MFT, $LogFile, $UsnJrnl no NTFS sao minas de ouro.\n• O que estudar: NTFS, ext4, APFS, FAT32, como dados sao armazenados."
              },
              {
                "w": "Recuperacao de arquivos deletados: carving, slack space, journal analysis",
                "s": "Recuperacao arquivos deletados tutorial portugues | deleted file recovery forensics | recuperacao de arquivos deletados explained for beginners | recuperacao de arquivos deletados explicação em português",
                "d": "• O que é: Deletar = remover referencia, nao o dado..\n• Conceitos-chave: File carving: buscar headers/footers de arquivos no disco (Scalpel, PhotoRec).. Slack space: espaco entre fim do arquivo e fim do cluster (pode conter dados antigos).. Journal: log de operacoes do filesystem.. Unallocated space: onde arquivos deletados vivem.\n• O que estudar: carving, slack space, journal analysis."
              },
              {
                "w": "Timeline analysis: MAC times, filesystem events, supertimeline (Plaso/log2timeline)",
                "s": "Timeline analysis times tutorial portugues | Plaso log2timeline supertimeline | timeline analysis explained for beginners | timeline analysis explicação em português",
                "d": "• O que é: MAC times: Modified, Accessed, Created (+ Entry modified no NTFS = MACE)..\n• Conceitos-chave: Timeline: ordenar TODOS eventos por tempo.. Plaso/log2timeline: combinar eventos de filesystem, registry, logs, browser em 1 timeline.. Responde: o que aconteceu e quando? Ferramenta mais poderosa de forense.\n• O que estudar: MAC times, filesystem events, supertimeline (Plaso/log2timeline)."
              },
              {
                "w": "Registry forensics (Windows): SAM, SYSTEM, SOFTWARE, NTUSER, AmCache, ShimCache",
                "s": "Registry forensics Windows tutorial portugues | SAM SYSTEM registry analysis | registry forensics windows explained for beginners | registry forensics windows explicação em português",
                "d": "• O que é: Registry = banco de dados do Windows..\n• Conceitos-chave: SAM: usuarios e senhas (hashes).. SYSTEM: config de boot, timezone.. SOFTWARE: programas instalados.. NTUSER.DAT: atividade do usuario (recent docs, typed URLs).. AmCache/ShimCache: historico de execucao de programas.. RegRipper: parser automatico.\n• O que estudar: SAM, SYSTEM, SOFTWARE, NTUSER, AmCache, ShimCache."
              },
              {
                "w": "Artifacts do usuario: browser history, prefetch, LNK files, recycle bin, USB history",
                "s": "Artifacts usuario browser tutorial portugues | forensic artifacts browser prefetch LNK | artifacts do usuario explained for beginners | artifacts do usuario explicação em português",
                "d": "• O que é: Browser: historico, cookies, downloads, cache (cada browser em local diferente)..\n• Conceitos-chave: Prefetch: programas executados recentemente (C:\\Windows\\Prefetch).. LNK: atalhos = evidencia de acesso.. Recycle Bin: $I (metadados) + $R (conteudo).. USB: USBSTOR no registry, setupapi.dev.log.. Cada artifact conta uma historia.\n• O que estudar: browser history, prefetch, LNK files, recycle bin, USB history."
              },
              {
                "w": "Ferramentas de forense de disco: Autopsy, FTK, X-Ways, Sleuth Kit, KAPE",
                "s": "Ferramentas de forense de disco explicação português | Autopsy forensic tool tutorial | ferramentas de forense de disco explained for beginners | Ferramentas de forense de disco examples and practice",
                "d": "• O que é: Autopsy: GUI gratuita (Sleuth Kit por baixo)..\n• Conceitos-chave: FTK: comercial, potente.. X-Ways: leve, rapido, forense alemao.. Sleuth Kit: command-line (fls, icat, mactime).. KAPE: coleta rapida de artefatos (triage).. Comece com Autopsy (gratuito) + KAPE pra triage.. Industria usa FTK ou X-Ways.\n• O que estudar: Autopsy, FTK, X-Ways, Sleuth Kit, KAPE."
              }
            ]
          },
          {
            "name": "Forense de Memoria (RAM)",
            "books": [
              "The Art of Memory Forensics — Ligh, Case, Levy & Walters",
              "Practical Memory Forensics — Oleg Skulkin",
              "Malware Analyst's Cookbook — Ligh et al."
            ],
            "items": [
              {
                "w": "Por que memoria: processos, conexoes, senhas, malware fileless, dados transientes",
                "s": "memoria processos conexoes tutorial portugues | volatile data forensics tutorial | por que memoria explained for beginners | por que memoria explicação em português",
                "d": "• O que é: RAM contem o que o disco NAO tem: processos em execucao, conexoes de rede ativas, chaves de criptografia, senhas em plaintext, malware fileless (so na memoria)..\n• Conceitos-chave: Dados volateis: desligou o PC, perdeu.. Capturar memoria ANTES de desligar e critico.\n• O que estudar: processos, conexoes, senhas, malware fileless, dados transientes."
              },
              {
                "w": "Captura de memoria: WinPmem, LiME, DumpIt, Magnet RAM Capture",
                "s": "Captura memoria WinPmem tutorial portugues | memory capture WinPmem LiME DumpIt | captura de memoria explained for beginners | captura de memoria explicação em português",
                "d": "• O que é: WinPmem: Windows (open source)..\n• Conceitos-chave: LiME: Linux (kernel module).. DumpIt: Windows (1 clique).. Magnet RAM Capture: GUI.. Formato: raw dump.. Tamanho = tamanho da RAM (8GB RAM = 8GB dump).. Capturar via rede se possivel (evitar alterar a maquina).\n• O que estudar: WinPmem, LiME, DumpIt, Magnet RAM Capture."
              },
              {
                "w": "Volatility 3: plugins, processos, DLLs, conexoes, registry, timeline",
                "s": "Volatility plugins processos explained | Volatility memory analysis plugins | volatility 3 tutorial completo | volatility 3 explicação em português",
                "d": "• O que é: Volatility: framework #1 de analise de memoria..\n• Conceitos-chave: Plugins: pslist (processos), netscan (conexoes), dlllist, malfind (injecao), hashdump (senhas), hivelist+printkey (registry).. Volatility 3: reescrito em Python 3, mais rapido.. Identificar SO automaticamente.\n• O que estudar: plugins, processos, DLLs, conexoes, registry, timeline."
              },
              {
                "w": "Detectar malware na memoria: code injection, hollowing, rootkits, hooks",
                "s": "Detectar malware memoria tutorial portugues | rootkit memory analysis tutorial | detectar malware na memoria explained for beginners | detectar malware na memoria explicação em português",
                "d": "• O que é: Malfind: detecta injecao de codigo em processos..\n• Conceitos-chave: Process hollowing: substituir codigo de processo legítimo.. Rootkit: esconder processos/conexoes.. API hooking: interceptar chamadas do sistema.. Comparar PEB vs VAD.. Se malfind encontra codigo executavel em regiao nao-imagem = suspeito.\n• O que estudar: code injection, hollowing, rootkits, hooks."
              },
              {
                "w": "Extrair evidencias da memoria: senhas, chaves, clipboards, command history",
                "s": "Extrair evidencias memoria tutorial portugues | cryptographic keys RAM tutorial | extrair evidencias da memoria explained for beginners | extrair evidencias da memoria explicação em português",
                "d": "• O que é: Mimikatz (offline): extrair senhas/hashes do dump..\n• Conceitos-chave: Chaves de criptografia: AES key schedule na memoria (Bitlocker, TrueCrypt).. Clipboard: ultimo ctrl+C.. Command history: cmd, PowerShell.. Strings: buscar URLs, IPs, emails no dump.. Bulk_extractor: extrai automaticamente.\n• O que estudar: senhas, chaves, clipboards, command history."
              },
              {
                "w": "Casos reais: como forense de memoria revelou malware fileless, APTs, ransomware",
                "s": "fileless malware detection memory | Casos reais explicação português | casos reais tutorial completo | casos reais explained for beginners",
                "d": "• O que é: Caso: malware PowerShell so na memoria (nada em disco)..\n• Conceitos-chave: Volatility encontrou: processo powershell.exe com string base64 encodada.. Decodificou: C2 beacon.. Outro caso: ransomware — chave de criptografia ainda na RAM (recuperar arquivos!).. Forense de memoria e ESSENCIAL pra ameacas modernas que evitam disco.\n• O que estudar: como forense de memoria revelou malware fileless, APTs, ransomware."
              }
            ]
          },
          {
            "name": "Forense de Rede e Logs",
            "books": [
              "Network Forensics — Ric Messier",
              "Applied Network Security Monitoring — Sanders & Smith",
              "The Practice of Network Security Monitoring — Bejtlich"
            ],
            "items": [
              {
                "w": "Captura de trafego: Wireshark, tcpdump, NetworkMiner, full packet capture",
                "s": "Captura trafego Wireshark tutorial portugues | network forensics Wireshark tcpdump | captura de trafego explained for beginners | captura de trafego explicação em português",
                "d": "• O que é: Wireshark: analisar PCAPs..\n• Conceitos-chave: tcpdump: capturar na linha de comando.. Full packet capture: gravar TUDO (precisa muito storage).. NetworkMiner: extrair arquivos, imagens, credenciais do trafego.. Filtros Wireshark: tcp.port==443, http.request.method==POST, ip.addr==x.\n• O que estudar: Wireshark, tcpdump, NetworkMiner, full packet capture."
              },
              {
                "w": "Analise de logs: syslog, Windows Event Logs, web server logs, correlacao",
                "s": "Analise logs syslog tutorial portugues | log analysis forensics tutorial | analise de logs explained for beginners | analise de logs explicação em português",
                "d": "• O que é: Syslog: formato padrao Linux (/var/log)..\n• Conceitos-chave: Windows Event: Security.evtx (logon 4624, logoff 4634, failed 4625).. Web: access.log (IP, URL, status, user-agent).. Correlacao: cruzar eventos de multiplas fontes por timestamp.. ELK stack pra centralizar e buscar.\n• O que estudar: syslog, Windows Event Logs, web server logs, correlacao."
              },
              {
                "w": "Analise de email: headers, spoofing, phishing, SPF/DKIM/DMARC",
                "s": "Analise email headers tutorial portugues | email spoofing detection tutorial | analise de email explained for beginners | analise de email explicação em português",
                "d": "• O que é: Headers: rota do email (Received:), remetente real vs forjado..\n• Conceitos-chave: SPF: quais IPs podem enviar pelo dominio.. DKIM: assinatura criptografica.. DMARC: politica de rejeicao.. Phishing: analisar URLs, anexos (sandbox).. Email e vetor de ataque #1.\n• O que estudar: headers, spoofing, phishing, SPF/DKIM/DMARC."
              },
              {
                "w": "Forense em cloud: logs AWS CloudTrail, Azure Activity, GCP Audit, preservacao",
                "s": "Forense cloud logs tutorial portugues | cloud forensics AWS CloudTrail | forense em cloud explained for beginners | forense em cloud explicação em português",
                "d": "• O que é: CloudTrail (AWS): quem fez o que quando..\n• Conceitos-chave: Azure Activity Log.. GCP Audit Log.. Desafio: dados em jurisdicoes diferentes, volatilidade (instancias destroidas), multi-tenant.. Preservar: exportar logs ANTES que expirem.. Snapshots de volumes.. IAM: quem tinha acesso?.\n• O que estudar: logs AWS CloudTrail, Azure Activity, GCP Audit, preservacao."
              },
              {
                "w": "Analise de malware em rede: C2 beaconing, DNS tunneling detection, IOCs de rede",
                "s": "Analise de malware em rede explicação português | C2 beaconing detection tutorial | analise de malware em rede explained for beginners | Analise de malware em rede examples and practice",
                "d": "• O que é: C2 (Command & Control): malware comunica com atacante..\n• Conceitos-chave: Beaconing: conexoes periodicas (a cada 60s).. Detectar: Zeek/Bro (analise de trafego), JA3/JA3S (fingerprint TLS).. DNS tunneling: dados encoded em queries DNS (alto volume, nomes longos).. IOCs de rede: IPs, dominios, URLs, user-agents maliciosos.\n• O que estudar: C2 beaconing, DNS tunneling detection, IOCs de rede."
              },
              {
                "w": "Timeline de rede: correlacionar eventos de multiplas fontes, reconstituir ataque",
                "s": "Timeline de rede explicação português | timeline de rede tutorial beginners | timeline de rede explained for beginners | Timeline de rede examples and practice",
                "d": "• O que é: Combinar: firewall logs + IDS alerts + DNS logs + proxy logs + PCAP..\n• Conceitos-chave: Correlacionar por: IP, timestamp, session ID.. Reconstituir: atacante escaneou (14:01) > explorou vuln (14:03) > estabeleceu C2 (14:05) > exfiltrou (14:30).. Ferramentas: Splunk, ELK, Moloch/Arkime.. Timeline = historia do ataque.\n• O que estudar: correlacionar eventos de multiplas fontes, reconstituir ataque."
              }
            ]
          },
          {
            "name": "Forense Mobile e IoT",
            "books": [
              "Practical Mobile Forensics — Oleg Skulkin",
              "Learning Android Forensics — Tamma & Tindall",
              "IoT Forensics — Ruan"
            ],
            "items": [
              {
                "w": "Forense mobile: aquisicao logica vs fisica vs filesystem, ferramentas",
                "s": "Forense mobile aquisicao tutorial portugues | logical vs physical acquisition | forense mobile explained for beginners | forense mobile explicação em português",
                "d": "• O que é: Logica: extrair dados acessiveis (backup, API)..\n• Conceitos-chave: Filesystem: acesso completo (requer root/jailbreak).. Fisica: copia bit-a-bit (chip-off, JTAG, ISP).. Ferramentas: Cellebrite UFED (comercial), Magnet AXIOM, Autopsy + plugin Android.. Cada nivel extrai mais dados.\n• O que estudar: aquisicao logica vs fisica vs filesystem, ferramentas."
              },
              {
                "w": "Android forensics: partitions, SQLite databases, app data, ADB extraction",
                "s": "Android forensics partitions tutorial portugues | Android SQLite databases tutorial | android forensics explained for beginners | android forensics explicação em português",
                "d": "• O que é: Particoes: /data (usuario), /system, /cache..\n• Conceitos-chave: ADB: extrair sem root (limitado).. Root: acesso completo.. Apps: /data/data/com.app/ (banco SQLite, shared prefs, cache).. WhatsApp: msgstore.db.. Navegador: history, cookies.. Fotos: EXIF com GPS.\n• O que estudar: partitions, SQLite databases, app data, ADB extraction."
              },
              {
                "w": "iOS forensics: backups iTunes/iCloud, keychain, plist, filesystem encryption",
                "s": "forensics backups iTunes/iCloud tutorial portugues | iOS forensics backup tutorial | ios forensics explained for beginners | ios forensics explicação em português",
                "d": "• O que é: iOS: mais fechado que Android..\n• Conceitos-chave: iTunes backup: dados parciais (sem keychain se nao encriptado).. iCloud: com credenciais.. Keychain: senhas, tokens.. Plist: configuracoes de apps.. Encriptacao filesystem: hardware key + passcode.. Ferramentas: iLEAPP, MEAT.\n• O que estudar: backups iTunes/iCloud, keychain, plist, filesystem encryption."
              },
              {
                "w": "Artifacts mobile: SMS, chamadas, WhatsApp, Telegram, GPS, fotos EXIF, deleted data",
                "s": "Artifacts mobile chamadas tutorial portugues | mobile forensic artifacts WhatsApp Telegram | artifacts mobile explained for beginners | artifacts mobile explicação em português",
                "d": "• O que é: SMS/chamadas: bancos SQLite..\n• Conceitos-chave: WhatsApp: msgstore.db (criptografado).. Telegram: cache local.. GPS: fotos EXIF, Google Timeline, Waze, apps de corrida.. Dados deletados: SQLite WAL, free pages.. SIM card: ICCID, contatos, SMS antigos.\n• O que estudar: SMS, chamadas, WhatsApp, Telegram, GPS, fotos EXIF, deleted data."
              },
              {
                "w": "Forense de veiculos: ECU, CAN bus, infotainment, EDR (event data recorder)",
                "s": "Forense veiculos infotainment tutorial portugues | automotive forensics infotainment | forense de veiculos explained for beginners | forense de veiculos explicação em português",
                "d": "• O que é: Carros modernos = computadores sobre rodas..\n• Conceitos-chave: CAN bus: rede interna do veiculo.. ECU: modulos de controle.. Infotainment: GPS, chamadas, contatos sincronizados.. EDR (caixa preta): velocidade, freio, cinto antes de colisao.. Evidencia crucial em acidentes.\n• O que estudar: ECU, CAN bus, infotainment, EDR (event data recorder)."
              },
              {
                "w": "Forense IoT: firmware extraction (binwalk), cloud correlation, smart home, wearables",
                "s": "Forense firmware extraction tutorial portugues | IoT forensics firmware binwalk | forense iot explained for beginners | forense iot explicação em português",
                "d": "• O que é: Firmware: binwalk pra extrair filesystem..\n• Conceitos-chave: Flash dump: hardware (JTAG, SPI).. Smart home: Alexa/Google logs, camera recordings, rotinas.. Wearables: GPS, batimentos, sono (alibi ou contradizer).. Cloud: onde device envia dados? API sniffing com mitmproxy.\n• O que estudar: firmware extraction (binwalk), cloud correlation, smart home, wearables."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "academia",
    "name": "🎓 ACADEMIA & PESQUISA",
    "css": "blue",
    "time": "Paralelo a carreira",
    "desc": "Iniciacao cientifica, mestrado, doutorado, publicacoes e vida academica.",
    "areas": [
      {
        "name": "📝 Escrita e Metodologia Cientifica",
        "topics": [
          {
            "name": "Metodologia Cientifica & Escrita Academica",
            "books": [
              "How to Write a Great Research Paper — Simon Peyton Jones (gratuito)",
              "Metodologia Cientifica — Marconi & Lakatos",
              "The Craft of Research — Booth, Colomb & Williams"
            ],
            "items": [
              {
                "w": "Metodo cientifico: hipotese, experimento, analise, reproducibilidade",
                "s": "scientific method research | metodo cientifico pesquisa | experimental methodology tutorial | Metodo cientifico hipotese tutorial portugues",
                "d": "• O que é: Pergunta > hipotese > experimento > analise > conclusao.\n• Detalhe: Controle de variaveis.\n• Detalhe: Reproducibilidade: outro pesquisador deve conseguir replicar.\n• Importante: Ablation studies em ML: remover componente e medir impacto."
              },
              {
                "w": "LaTeX: escrita tecnica, formulas, artigos, TCC",
                "s": "LaTeX tutorial beginners | LaTeX artigo academico tutorial | LaTeX math formulas tutorial | LaTeX escrita tecnica explained | LaTeX explicação português",
                "d": "• O que é: LaTeX: padrao pra documentos academicos.\n• Detalhe: Overleaf: editor online.\n• Detalhe: \\section{}, \\begin{equation}, \\cite{}, \\ref{}.\n• Detalhe: Templates: IEEE, ACM.\n• Detalhe: BibTeX pra referencias.\n• Importante: Muito mais bonito que Word pra formulas."
              },
              {
                "w": "Como ler e escrever papers: estrutura, abstract, related work, experiments",
                "s": "how to read write research papers | como ler artigos cientificos | paper writing tips tutorial | Como escrever papers explained",
                "d": "• O que é: Estrutura: Abstract > Intro > Related Work > Method > Experiments > Conclusion.\n• Detalhe: Ler: abstract+conclusion primeiro, depois method.\n• Importante: Escrever: figures first, then story around them."
              },
              {
                "w": "TCC / projeto de graduacao: escolher tema, orientador, cronograma",
                "s": "TCC engenharia computacao | undergraduate thesis tips | projeto graduacao tutorial | projeto graduacao escolher tutorial portugues",
                "d": "• O que é: Escolha tema que te empolga.\n• Detalhe: Orientador: professor da area + compatibilidade.\n• Detalhe: Comece cedo (6+ meses).\n• Detalhe: Escopo realista.\n• Detalhe: Revisao bibliografica primeiro.\n• Importante: Resultados parciais > perfeicao tardia."
              },
              {
                "w": "Revisao bibliografica: como buscar, organizar e citar fontes",
                "s": "literature review how to | revisao bibliografica tutorial | Google Scholar Zotero Mendeley | Revisao bibliografica como tutorial portugues",
                "d": "• O que é: Google Scholar: buscar papers.\n• Detalhe: Zotero/Mendeley: gerenciar referencias.\n• Detalhe: Snowballing: ler referencias do paper bom.\n• Detalhe: Fichamento: anotar contribuicao, metodo, resultados de cada paper.\n• Importante: Revisao sistematica vs narrativa."
              },
              {
                "w": "Ferramentas: Overleaf (LaTeX online), Zotero, BibTeX, draw.io, Google Scholar",
                "s": "academic tools Overleaf Zotero BibTeX | ferramentas academicas tutorial | Overleaf LaTeX collaboration | Ferramentas Overleaf LaTeX tutorial portugues",
                "d": "• O que é: Overleaf: LaTeX colaborativo (como Google Docs pra LaTeX).\n• Detalhe: Zotero: salvar papers + gerar BibTeX.\n• Detalhe: draw.io: diagramas.\n• Detalhe: Google Scholar: buscar + ver citacoes.\n• Detalhe: Sci-Hub: acesso a papers (zona cinza legal).\n• Importante: Connected Papers: grafo visual de papers relacionados."
              },
              {
                "w": "Como escrever um bom abstract: estrutura, tamanho, o que incluir, erros comuns",
                "s": "how to write abstract research paper | como escrever abstract artigo | abstract writing tips tutorial | research paper abstract structure",
                "d": "• O que é: Estrutura: contexto (1 frase) > problema (1 frase) > o que voce fez (1-2 frases) > resultados (1-2 frases) > impacto (1 frase).\n• Detalhe: 150-250 palavras.\n• Detalhe: Erros: muito longo, sem resultados, vago.\n• Detalhe: O abstract e a parte MAIS LIDA do paper — muita gente so le o abstract.\n• Importante: Escreva por ULTIMO (quando sabe tudo)."
              },
              {
                "w": "Related work: como posicionar seu trabalho, taxonomia, gap identification",
                "s": "related work section writing | como escrever related work | literature review positioning | research gap identification | related work tutorial beginners",
                "d": "• O que é: Related work nao e lista de resumos de papers.\n• Detalhe: E: organizar trabalhos por categoria/abordagem > comparar > mostrar o GAP (o que ninguem fez).\n• Detalhe: Taxonomia: dividir em abordagens (ML-based vs rule-based vs hybrid).\n• Detalhe: Sua contribuicao preenche o gap.\n• Importante: Tabela comparativa: features vs papers (muito eficaz)."
              }
            ]
          },
          {
            "name": "Escrita Academica em Computacao",
            "books": [
              "Writing for Computer Science — Justin Zobel",
              "The Elements of Style — Strunk & White",
              "How to Write a Great Research Paper — Simon Peyton Jones"
            ],
            "items": [
              {
                "w": "Estrutura de paper: abstract, introducao, related work, metodo, resultados, conclusao",
                "s": "research paper structure computer science | como escrever artigo cientifico | paper writing CS tutorial | Estrutura paper abstract explained",
                "d": "• O que é: Abstract: 150 palavras resumindo tudo.\n• Detalhe: Intro: motivacao + gap + contribuicao.\n• Detalhe: Related: o que ja existe e por que nao resolve.\n• Detalhe: Metodo: como fez (reproduzivel!).\n• Detalhe: Resultados: tabelas, graficos, analise.\n• Importante: Conclusao: contribuicoes + trabalhos futuros."
              },
              {
                "w": "Figuras, tabelas e graficos cientificos: matplotlib, pgfplots, tikz",
                "s": "scientific figures matplotlib | pgfplots LaTeX tutorial | scientific visualization publication | Figuras tabelas graficos tutorial portugues",
                "d": "• O que é: Figuras vendem o paper.\n• Detalhe: matplotlib: Python (savefig alta resolucao).\n• Detalhe: pgfplots/tikz: diretamente em LaTeX (mais bonito).\n• Detalhe: Regras: fontes legiveis, labels claros, sem 3D desnecessario, colorblind-friendly.\n• Importante: Uma boa figura vale 1000 palavras."
              },
              {
                "w": "Revisao por pares: como funciona, como responder, como revisar",
                "s": "peer review process tutorial | how to respond to reviewers | reviewing papers tips tutorial | Revisao pares como tutorial portugues",
                "d": "• O que é: Submeter > editores atribuem revisores > 2-4 revisores leem > accept/minor revision/major revision/reject.\n• Detalhe: Responder: ponto a ponto, educado, mudancas em azul.\n• Detalhe: Revisar: seja construtivo, especifico, justo.\n• Importante: Anonimato: double-blind."
              },
              {
                "w": "Conferencias e journals em Computacao: onde publicar, rankings, Qualis",
                "s": "computer science conferences journals ranking | conferencias computacao tutorial | Qualis CAPES tutorial | Conferencias journals Computacao tutorial portugues",
                "d": "• O que é: Top conferences: NeurIPS, ICML, CVPR, ACL, SIGMOD, SOSP.\n• Detalhe: Journals: IEEE, ACM, Springer.\n• Detalhe: Qualis CAPES: ranking brasileiro (A1-A4, B1-B4).\n• Detalhe: Em CS, conferencias > journals (diferente de outras areas).\n• Importante: Accept rate: ~20-25% nas top."
              },
              {
                "w": "Ingles academico: writing style, common mistakes, phrasebank, Grammarly",
                "s": "academic English writing tutorial | phrasebank academic writing | common mistakes scientific writing | Grammarly academic tutorial | Ingles academico explicação português",
                "d": "• O que é: Academico e formal: sem contracoes (don't→do not), sem 1a pessoa (I→we ou passiva).\n• Detalhe: Phrasebank (Manchester): frases prontas pra cada secao.\n• Detalhe: Erros comuns BR: false cognates, artigos (a/the).\n• Detalhe: Grammarly: correcao automatica.\n• Importante: Leia papers em ingles DIARIAMENTE — absorver o estilo."
              },
              {
                "w": "Responder reviewers: ponto a ponto, tom profissional, destacar mudancas",
                "s": "responding to reviewers tutorial | rebuttal letter template tutorial | reviewer response academic | how to respond paper reviews | Responder reviewers explicação português",
                "d": "• O que é: Para cada comentario: quote do reviewer + sua resposta + o que mudou no paper.\n• Detalhe: Tom: agradeca, nunca seja defensivo.\n• Detalhe: Se discorda: argumente com evidencia.\n• Detalhe: Highlight mudancas em azul no paper revisado.\n• Importante: Deadline de resubmissao: nao perca! Response letter bem feita = diferenca entre accept e reject."
              }
            ]
          },
          {
            "name": "Apresentacoes e Comunicacao Cientifica",
            "books": [
              "Presentation Zen — Garr Reynolds",
              "The Craft of Scientific Presentations — Michael Alley",
              "slide:ology — Nancy Duarte"
            ],
            "items": [
              {
                "w": "Slides cientificos: menos texto, mais figuras, fontes legiveis, template limpo",
                "s": "scientific presentation slides tips | academic presentation design | less text more figures slides | Slides cientificos menos tutorial portugues",
                "d": "• O que é: Regra: 1 ideia por slide.\n• Detalhe: Figura > texto.\n• Detalhe: Fonte minima 24pt.\n• Detalhe: Sem paragrafos — use bullet points curtos.\n• Detalhe: Fundo claro ou escuro consistente.\n• Detalhe: Template: beamer (LaTeX), Google Slides, Keynote.\n• Detalhe: Numere slides.\n• Importante: Inclua backup slides pro Q&A."
              },
              {
                "w": "Estrutura da apresentacao: motivacao, problema, metodo, resultados, conclusao",
                "s": "research presentation structure | how to present research | academic talk structure tutorial | Estrutura apresentacao motivacao tutorial portugues",
                "d": "• O que é: Hook: por que alguem deveria se importar? (1-2 slides).\n• Detalhe: Problema: o que nao se sabe/funciona.\n• Detalhe: Metodo: como resolveu.\n• Detalhe: Resultados: graficos claros, comparacoes.\n• Detalhe: Conclusao: contribuicao + futuro.\n• Importante: Timing: ensaie pra caber no tempo (10min conferencia, 40min defesa)."
              },
              {
                "w": "Poster cientifico: layout, fluxo visual, chamar atencao em 30 segundos",
                "s": "scientific poster design tutorial | research poster layout tutorial | academic poster template tutorial | Poster cientifico layout tutorial portugues",
                "d": "• O que é: Layout: titulo grande (legivel a 3m) > intro > metodo > resultados > conclusao.\n• Detalhe: Fluxo: esquerda>direita ou colunas.\n• Detalhe: Figuras GRANDES.\n• Detalhe: Pouco texto.\n• Detalhe: QR code pro paper/repo.\n• Detalhe: Prepare pitch de 2min (elevator pitch).\n• Importante: A0 ou tamanho do evento."
              },
              {
                "w": "Elevator pitch: explicar sua pesquisa em 2 minutos pra nao-especialista",
                "s": "research elevator pitch tutorial | explain research simply tutorial | science communication tips | Elevator pitch explicar tutorial portugues",
                "d": "• O que é: Formato: Problema que todos entendem > por que e dificil > o que voce faz de diferente > resultado/impacto.\n• Detalhe: Use analogias.\n• Detalhe: Pratique com amigos de outras areas.\n• Importante: Se sua mae nao entende o problema, simplifique mais."
              },
              {
                "w": "Responder perguntas: como lidar com perguntas dificeis, hostis, ou que nao sabe",
                "s": "handling questions after presentation | como responder perguntas defesa | dealing with hostile questions | academic Q&A tips tutorial",
                "d": "• O que é: Repita a pergunta (ganha tempo, garante que entendeu).\n• Detalhe: Se nao sabe: 'Boa pergunta, nao investiguei isso ainda, mas minha hipotese seria...' NUNCA invente.\n• Detalhe: Se hostil: mantenha calma, reconheca o ponto, redirecione pra sua contribuicao.\n• Importante: Prepare 10 perguntas dificeis antes da apresentacao e ensaie respostas."
              },
              {
                "w": "Demo tecnica: como demonstrar software/sistema em apresentacao academica",
                "s": "technical demo presentation | live demo research presentation | software demo academic tutorial | how to give tech demo | Demo tecnica explicação português",
                "d": "• O que é: Demo ao vivo: impressiona mais, mas pode falhar.\n• Detalhe: Backup: video gravado E slides com screenshots.\n• Detalhe: Mostrar: input > processamento > output.\n• Detalhe: Nao mostrar: setup, instalacao, codigo (a menos que seja a contribuicao).\n• Detalhe: Se falhar: 'como viram no video preparado...' Sempre ter backup.\n• Importante: Testar antes 3x."
              }
            ]
          }
        ]
      },
      {
        "name": "🔬 Iniciacao Cientifica (IC)",
        "topics": [
          {
            "name": "Primeiros Passos na Pesquisa",
            "books": [
              "Undergraduate Research in CS — Treu & Skinner",
              "A PhD Is Not Enough — Peter Feibelman",
              "Metodologia Cientifica — Marconi & Lakatos"
            ],
            "items": [
              {
                "w": "O que e IC: bolsas (PIBIC/FAPESP), como funciona, carga horaria, beneficios",
                "s": "iniciacao cientifica PIBIC FAPESP | undergraduate research Brazil | como fazer IC | bolsas PIBIC/FAPESP como explained",
                "d": "• O que é: IC = pesquisa na graduacao com orientador.\n• Detalhe: PIBIC (CNPq): 12 meses, bolsa ~R$700.\n• Detalhe: FAPESP (SP): 12 meses, bolsa ~R$1100.\n• Detalhe: 12-20h/semana."
              },
              {
                "w": "Como escolher orientador e tema: afinidade, producao, laboratorio",
                "s": "choosing research advisor | como escolher orientador IC | research lab undergraduate | Como escolher orientador explained",
                "d": "• O que é: Pesquise: Lattes do professor, artigos recentes, projetos.\n• Detalhe: Afinidade: tema que te empolga + professor acessivel.\n• Detalhe: Laboratorio: infra, alunos, recursos.\n• Detalhe: Converse com alunos atuais.\n• Importante: Nao tenha medo de mandar email — professores QUEREM alunos motivados."
              },
              {
                "w": "Plano de pesquisa: problema, objetivo, metodologia, cronograma",
                "s": "research proposal plan tutorial | plano pesquisa IC tutorial | how to write research plan | Plano pesquisa problema tutorial portugues",
                "d": "• O que é: Problema: o que nao se sabe / o que pode melhorar.\n• Detalhe: Objetivo: o que voce vai fazer pra resolver.\n• Detalhe: Metodologia: como vai fazer (experimentos, metricas, datasets).\n• Detalhe: Cronograma: mes a mes.\n• Detalhe: Revisao bibliografica: o que ja foi feito.\n• Importante: 3-5 paginas tipicamente."
              },
              {
                "w": "Apresentacoes: SIICUSP, congressos estudantis, poster, pitch de pesquisa",
                "s": "undergraduate research presentation | SIICUSP apresentacao IC tutorial | research poster tutorial | Apresentacoes SIICUSP congressos tutorial portugues",
                "d": "• O que é: SIICUSP (USP), CONIC, congressos da SBC.\n• Detalhe: Poster: visual + 5min explicacao.\n• Detalhe: Apresentacao oral: 10-15min + perguntas.\n• Detalhe: Dicas: conte uma historia, menos texto nos slides, ensaie, prepare pra perguntas.\n• Importante: Networking em coffee break!"
              },
              {
                "w": "Etica em pesquisa: plagio, fabricacao, Comite de Etica, integridade",
                "s": "research ethics plagiarism | etica pesquisa tutorial | academic integrity tutorial | Etica pesquisa plagio tutorial portugues",
                "d": "• O que é: Plagio: NUNCA copie sem citar.\n• Detalhe: Auto-plagio tambem existe.\n• Detalhe: Fabricacao/falsificacao de dados: carreira destruida.\n• Detalhe: Comite de Etica: necessario pra pesquisa com humanos.\n• Detalhe: Turnitin/iThenticate: detectam plagio.\n• Importante: Na duvida, cite."
              },
              {
                "w": "Laboratorio: como funciona um lab de pesquisa, equipamentos, cultura, seminarios",
                "s": "research lab culture tutorial | como funciona laboratorio pesquisa | research group meetings tutorial | lab seminars PhD tutorial",
                "d": "• O que é: Lab de pesquisa: reunioes semanais (paper reading, progress reports).\n• Detalhe: Seminarios: apresentar e assistir.\n• Detalhe: Cultura: colaboracao, compartilhar codigo/dados.\n• Detalhe: Equipamentos: servidores GPU, clusters.\n• Detalhe: Slack/Discord do lab.\n• Detalhe: Cafe e fundamental.\n• Importante: Cada lab tem cultura diferente — visite antes de entrar."
              }
            ]
          },
          {
            "name": "Durante a IC: Dia a Dia da Pesquisa",
            "books": [
              "A Guide to the Scientific Career — Hasan",
              "Research Skills for Students — Allison & Race",
              "Surviving Your Stupid Stupid Decision to Go to Grad School — Ruben"
            ],
            "items": [
              {
                "w": "Reunioes com orientador: preparar pauta, mostrar resultados, pedir feedback",
                "s": "meeting research advisor tips | reuniao orientador IC tutorial | advisor meeting preparation | Reunioes orientador preparar tutorial portugues",
                "d": "• O que é: Antes: prepare slides/anotacoes com o que fez, resultados, duvidas.\n• Detalhe: Durante: anote feedback.\n• Detalhe: Depois: envie resumo por email.\n• Detalhe: Mostre progresso mesmo pequeno.\n• Importante: Nao tenha medo de dizer 'nao sei' ou 'travei'."
              },
              {
                "w": "Caderno de pesquisa: registrar experimentos, ideias, resultados, decisoes",
                "s": "research notebook lab journal | caderno pesquisa tutorial | research log keeping tutorial | Caderno pesquisa registrar tutorial portugues",
                "d": "• O que é: Anote TUDO: parametros, resultados, erros, ideias.\n• Detalhe: Digital (Notion, Obsidian) ou fisico.\n• Detalhe: Data + o que fez + resultado + proximos passos.\n• Detalhe: Voce ESQUECE — o caderno nao.\n• Importante: Reproduzir experimento de 3 meses atras sem anotacao e pesadelo."
              },
              {
                "w": "Leitura de papers: rotina semanal, fichamento, paper reading group",
                "s": "how to read papers weekly | paper reading group tutorial | reading research papers efficiently | Leitura papers rotina tutorial portugues",
                "d": "• O que é: Leia 2-3 papers/semana.\n• Detalhe: 1o pass: abstract+conclusion (2min).\n• Detalhe: 2o pass: figuras+metodo (15min).\n• Detalhe: 3o pass: detalhes (1h).\n• Detalhe: Fichamento: contribuicao, metodo, limitacoes, ideias.\n• Importante: Reading group: discutir com colegas semanalmente."
              },
              {
                "w": "Implementacao e experimentos: reproducir papers, ablation studies, baselines",
                "s": "reproducing research papers | ablation study tutorial | research experiment baseline | Implementacao experimentos reproducir tutorial portugues",
                "d": "• O que é: Comece reproduzindo paper existente (aprende metodo + valida entendimento).\n• Detalhe: Baseline: resultado simples pra comparar.\n• Detalhe: Ablation: remover componentes pra entender contribuicao de cada.\n• Importante: Sempre fixe seeds pra reproducibilidade."
              },
              {
                "w": "Relatorio final, apresentacao SIICUSP/CONIC, primeiro artigo",
                "s": "IC final report tutorial | presenting research undergraduate | first research paper tutorial | Relatorio final apresentacao tutorial portugues",
                "d": "• O que é: Relatorio: ~20 paginas, formato artigo expandido.\n• Detalhe: Apresentacao: 10min + 5min perguntas (pratique!).\n• Detalhe: Primeiro artigo: workshop ou conferencia nacional (mais acessivel).\n• Detalhe: Co-autoria com orientador.\n• Importante: Celebre — e uma conquista enorme!"
              },
              {
                "w": "Lidar com frustracao: experimentos falham, codigo nao funciona, resultados ruins",
                "s": "dealing with research frustration | lidar frustracao pesquisa | research failure normal tutorial | resilience in research tutorial | Lidar com frustracao explicação português",
                "d": "• O que é: Pesquisa e 90% fracasso, 10% eureka.\n• Detalhe: Experimentos falham: hipotese errada, bug no codigo, dados ruins.\n• Detalhe: Documente o que NAO funcionou (util pro paper: 'tentamos X mas Y').\n• Detalhe: Converse com orientador quando travar.\n• Detalhe: Pause, durma, volte amanha.\n• Importante: O unico fracasso real e desistir."
              }
            ]
          },
          {
            "name": "Bolsas, Editais e Oportunidades na IC",
            "books": [
              "Manual de Iniciacao Cientifica — CNPq",
              "Guia do Bolsista FAPESP",
              "PIBIC: Guia Pratico"
            ],
            "items": [
              {
                "w": "Tipos de bolsa: PIBIC (CNPq), FAPESP IC, PIBITI (inovacao), voluntaria",
                "s": "bolsa IC PIBIC FAPESP PIBITI | tipos bolsa iniciacao cientifica | undergraduate research funding Brazil | Tipos bolsa PIBIC tutorial portugues",
                "d": "• O que é: PIBIC (CNPq): 12 meses, ~R$700, via universidade.\n• Detalhe: FAPESP (SP): 12 meses, ~R$1100, mais exigente.\n• Detalhe: PIBITI: focada em inovacao/patentes.\n• Detalhe: Voluntaria: sem bolsa mas conta como experiencia.\n• Importante: Algumas universidades tem bolsas proprias (PRP, PRPG)."
              },
              {
                "w": "Como escrever projeto pra bolsa: problema, justificativa, objetivos, cronograma, orcamento",
                "s": "como escrever projeto bolsa IC | research proposal writing | projeto PIBIC modelo tutorial | Como escrever projeto explained",
                "d": "• O que é: Titulo claro.\n• Detalhe: Resumo: 200 palavras.\n• Detalhe: Introducao: contexto + gap.\n• Detalhe: Justificativa: por que importa.\n• Detalhe: Objetivos: geral + especificos.\n• Detalhe: Metodologia: como vai fazer.\n• Detalhe: Cronograma: mes a mes (Gantt).\n• Detalhe: Orcamento (FAPESP): material, viagem.\n• Detalhe: Referencias.\n• Importante: 5-10 paginas."
              },
              {
                "w": "Programas internacionais: MITACS, RISE (Alemanha), Amgen Scholars, SURF",
                "s": "international undergraduate research | MITACS internship tutorial | DAAD RISE Germany tutorial | summer research abroad tutorial | Programas internacionais explicação português",
                "d": "• O que é: MITACS Globalink (Canada): 12 semanas, bolsa completa.\n• Detalhe: DAAD RISE (Alemanha): estagio em lab.\n• Detalhe: Amgen Scholars (Europa/Asia): 8-10 semanas.\n• Detalhe: SURF (Caltech, MIT): verao.\n• Detalhe: Requisitos: ingles fluente, bom historico, carta do orientador.\n• Importante: Aplique no 3o/4o ano."
              },
              {
                "w": "Premios e competicoes: melhor IC, hackathons academicos, desafios de dados",
                "s": "premios iniciacao cientifica | academic hackathon tutorial | data science competition academic | Premios competicoes melhor tutorial portugues",
                "d": "• O que é: Premio melhor IC: SIICUSP, CONIC, SBC.\n• Detalhe: Hackathons: HackMIT, TreeHacks, hackathons locais.\n• Detalhe: Kaggle competitions.\n• Detalhe: Maratona de programacao (ICPC).\n• Detalhe: Olimpiada de Seguranca (OBI/CriptoHack).\n• Importante: Cada premio e uma linha no Lattes e no CV."
              },
              {
                "w": "Relatorio FAPESP: como escrever relatorio parcial e final, o que a FAPESP espera",
                "s": "relatorio FAPESP IC tutorial | FAPESP report writing tutorial | como escrever relatorio bolsa | scientific report funding agency",
                "d": "• O que é: FAPESP exige: relatorio parcial (6 meses) e final (12 meses).\n• Detalhe: Estrutura: atividades realizadas, resultados, producao (artigos, apresentacoes), plano futuro.\n• Detalhe: Seja HONESTO: se algo nao deu certo, explique por que e o que fez diferente.\n• Detalhe: Atraso e normal.\n• Importante: FAPESP cancela bolsa se relatorio nao e entregue."
              },
              {
                "w": "Curriculo Lattes: como preencher, o que incluir, dicas pra iniciantes",
                "s": "curriculo Lattes como preencher | Lattes platform Brazil tutorial | academic CV Lattes tutorial | Lattes dicas iniciante tutorial",
                "d": "• O que é: Lattes: curriculo academico oficial do Brasil (obrigatorio pra bolsas).\n• Detalhe: lattes.cnpq.br.\n• Detalhe: Incluir: formacao, IC, publicacoes, apresentacoes, premios, eventos, idiomas.\n• Detalhe: Atualizar SEMPRE que publicar/apresentar algo.\n• Detalhe: Avaliadores de bolsa/pos olham seu Lattes.\n• Importante: Lattes bem preenchido = profissionalismo."
              }
            ]
          }
        ]
      },
      {
        "name": "🏫 Mestrado",
        "topics": [
          {
            "name": "Mestrado Academico em Computacao",
            "books": [
              "Getting What You Came For — Robert Peters",
              "A PhD Is Not Enough — Peter Feibelman",
              "The Unwritten Rules of PhD Research — Rugg & Petre"
            ],
            "items": [
              {
                "w": "Academico vs Profissional: diferenca, quando fazer, pra quem serve",
                "s": "mestrado academico vs profissional | master degree CS tutorial | quando fazer mestrado computacao | Academico Profissional diferenca tutorial portugues",
                "d": "• O que é: Academico: pesquisa + dissertacao (2 anos, bolsa CAPES/FAPESP).\n• Detalhe: Profissional: aplicado, sem bolsa, mais caro.\n• Detalhe: Academico: pra quem quer pesquisar, dar aula, ou aprofundar.\n• Detalhe: Profissional: pra quem quer titulo pro mercado.\n• Importante: Em CS, experiencia > titulo na maioria dos casos."
              },
              {
                "w": "Processo seletivo: prova, projeto, entrevista, Lattes, cartas",
                "s": "mestrado computacao processo seletivo | graduate school application CS | Lattes curriculum tutorial | Processo seletivo prova tutorial portugues",
                "d": "• O que é: Prova especifica (algoritmos, mate, programacao).\n• Detalhe: Projeto de pesquisa: 5-10 paginas.\n• Detalhe: Entrevista com banca.\n• Detalhe: Lattes: curriculo academico.\n• Detalhe: Cartas de recomendacao (orientador IC).\n• Importante: POSCOMP: prova unificada que varias universidades aceitam."
              },
              {
                "w": "Disciplinas, creditos, qualificacao, dissertacao, defesa",
                "s": "mestrado disciplinas qualificacao defesa | master thesis defense tutorial | mestrado computacao etapas | Disciplinas creditos qualificacao tutorial portugues",
                "d": "• O que é: ~8 disciplinas (1o ano).\n• Detalhe: Qualificacao: apresentar proposta (meio do 2o ano).\n• Detalhe: Dissertacao: documento completo (~80-120 paginas).\n• Detalhe: Defesa: apresentar pra banca (3 professores).\n• Detalhe: Publicar 1+ artigo e ideal.\n• Importante: Prazo: 24 meses."
              },
              {
                "w": "Bolsas: CAPES, CNPq, FAPESP, FAPERJ. Valores, requisitos, dedicacao exclusiva",
                "s": "bolsa mestrado CAPES CNPq FAPESP | graduate scholarship Brazil | bolsa pesquisa mestrado tutorial | Bolsas CAPES CNPq tutorial portugues",
                "d": "• O que é: CAPES: ~R$2.100.\n• Detalhe: CNPq: ~R$2.100.\n• Detalhe: FAPESP (SP): ~R$3.700 (melhor, mas exige mais).\n• Detalhe: Dedicacao exclusiva: nao pode ter emprego formal.\n• Detalhe: Reserva tecnica: verba pra congresso e material.\n• Importante: Dura 24 meses."
              },
              {
                "w": "Melhores programas de pos em Computacao no Brasil: USP, UNICAMP, UFMG, UFRGS, PUC-Rio",
                "s": "melhores mestrados computacao Brasil | top computer science programs Brazil | ranking pos graduacao tutorial | Melhores programas Computacao tutorial portugues",
                "d": "• O que é: Nota CAPES 7 (maximo): IME-USP, IC-UNICAMP, DCC-UFMG, INF-UFRGS, PUC-Rio.\n• Detalhe: Nota 6: UFPE, UFRJ, UFF, UFSC.\n• Detalhe: Conceito CAPES avalia: publicacoes, corpo docente, formacao, internacionalizacao."
              },
              {
                "w": "POSCOMP: prova unificada, como estudar, peso no processo seletivo",
                "s": "POSCOMP prova mestrado tutorial | como estudar POSCOMP | POSCOMP preparation tutorial | POSCOMP computer science exam Brazil",
                "d": "• O que é: POSCOMP: prova anual (SBC) aceita por ~50 programas de pos.\n• Detalhe: Conteudo: matematica, fundamentos, tecnologia.\n• Detalhe: 70 questoes multipla escolha.\n• Detalhe: Nota usada como parte do processo seletivo (peso varia).\n• Detalhe: Como estudar: provas anteriores + livros base (CLRS, Tanenbaum, Nussenzveig).\n• Importante: Fazer mesmo se nao obrigatorio (mais opcoes)."
              }
            ]
          },
          {
            "name": "Vida no Mestrado: Pesquisa e Rotina",
            "books": [
              "How to Write a Better Thesis — Evans & Gruba",
              "The Craft of Research — Booth, Colomb & Williams",
              "Tomorrow's Professor — Reis"
            ],
            "items": [
              {
                "w": "Primeiro ano: disciplinas, revisao de literatura, definir problema de pesquisa",
                "s": "first year masters CS tutorial | mestrado primeiro ano tutorial | defining research problem | Primeiro disciplinas revisao tutorial portugues",
                "d": "• O que é: Disciplinas: aproveite pra explorar areas e conhecer professores.\n• Detalhe: Revisao: mapeie o estado da arte.\n• Detalhe: Problema: o que falta? O que pode melhorar? Converse MUITO com orientador.\n• Importante: Ler > escrever nessa fase."
              },
              {
                "w": "Segundo ano: experimentos, escrever dissertacao, submeter artigo, defender",
                "s": "writing masters thesis tutorial | mestrado segundo ano defesa | submitting paper conference | Segundo experimentos escrever tutorial portugues",
                "d": "• O que é: Experimentos: itere rapido (MVP de pesquisa).\n• Detalhe: Escrever: comece pelos capitulos de metodo e resultados.\n• Detalhe: Artigo: submeta pra conferencia/workshop (deadline driven!).\n• Importante: Defesa: 40min apresentacao + arguicao da banca."
              },
              {
                "w": "Sindrome do impostor, saude mental, equilibrio na pos-graduacao",
                "s": "imposter syndrome graduate school | saude mental pos graduacao | mental health PhD masters | Sindrome impostor saude tutorial portugues",
                "d": "• O que é: Sindrome do impostor: normal, todo mundo tem.\n• Detalhe: Comparar com colegas e armadilha.\n• Detalhe: Saude mental: terapia (muitas universidades oferecem gratis).\n• Detalhe: Exercicio, sono, hobbies.\n• Detalhe: Falar com colegas.\n• Detalhe: Nao e so voce.\n• Importante: Pos e maratona, nao sprint."
              },
              {
                "w": "Networking academico: conferencias, workshops, lab visits, colaboracoes",
                "s": "academic networking conferences | networking pos graduacao tutorial | research collaboration tips | Networking academico conferencias tutorial portugues",
                "d": "• O que é: Conferencias: va, apresente, converse no coffee break.\n• Detalhe: Workshops: mais intimos, feedback melhor.\n• Detalhe: Lab visits: visite labs de interesse (email frio funciona!).\n• Importante: Colaboracoes: papers com outros labs = mais impacto + aprendizado."
              },
              {
                "w": "Depois do mestrado: doutorado, industria, ou mestrado profissional?",
                "s": "after masters degree career | depois mestrado carreira tutorial | masters to PhD industry tutorial | Depois mestrado doutorado tutorial portugues",
                "d": "• O que é: Doutorado: se amou pesquisar e quer ir mais fundo.\n• Detalhe: Industria: mestrado e diferencial (ML engineer, research engineer).\n• Detalhe: Cargos research: Google, Meta, Microsoft pagam bem pra MSc."
              },
              {
                "w": "Orientador: como manter relacao saudavel, frequencia de reunioes, expectativas",
                "s": "advisor relationship masters | relacao orientador mestrado | managing advisor expectations | advisor meetings frequency | Orientador explicação português | orientador tutorial beginners",
                "d": "• O que é: Reunioes: semanal ou quinzenal (combinar).\n• Detalhe: Prepare pauta: o que fiz, resultados, duvidas, proximos passos.\n• Detalhe: Mande por email antes.\n• Detalhe: Se orientador nao responde: insista educadamente.\n• Detalhe: Se relacao nao funciona: troque (e possivel, nao e tabu).\n• Importante: Bom orientador = diferenca entre sofrer e aproveitar o mestrado."
              }
            ]
          },
          {
            "name": "Publicar no Mestrado",
            "books": [
              "Writing Your Journal Article in 12 Weeks — Belcher",
              "How to Write a Good Scientific Paper — Mack",
              "Publish or Perish — Harzing"
            ],
            "items": [
              {
                "w": "Estrategia de publicacao: workshop > conferencia regional > conferencia top",
                "s": "publication strategy masters | where to publish first paper | workshop vs conference tutorial | Estrategia publicacao workshop tutorial portugues",
                "d": "• O que é: Primeiro paper: workshop (taxa aceitacao ~40-60%, feedback bom).\n• Detalhe: Depois: conferencia regional (SBRC, SBBD, SBSC, SBMF).\n• Detalhe: Amadureceu: conferencia top (ACM/IEEE).\n• Importante: Nao mire no top logo — workshop te da experiencia e feedback."
              },
              {
                "w": "Co-autoria: regras, contribuicao, ordem dos autores, CRediT taxonomy",
                "s": "co-authorship rules tutorial | author order research paper | CRediT contributor roles tutorial | Co-autoria regras contribuicao tutorial portugues",
                "d": "• O que é: 1o autor: fez o trabalho.\n• Detalhe: Ultimo: orientador (convencao em CS).\n• Detalhe: Meio: contribuicoes intermediarias.\n• Detalhe: CRediT: taxonomia de contribuicoes (conceptualization, methodology, software, writing).\n• Detalhe: Discuta autoria ANTES de comecar.\n• Importante: Evite conflitos."
              },
              {
                "w": "Processo de submissao: formatacao, camera-ready, registro, apresentacao",
                "s": "paper submission process tutorial | camera ready paper tutorial | conference registration tutorial | Processo submissao formatacao tutorial portugues",
                "d": "• O que é: Formatar no template (LaTeX).\n• Detalhe: Submeter via EasyChair/CMT/OpenReview.\n• Detalhe: Esperar review (~2-4 meses).\n• Detalhe: Se aceito: camera-ready (versao final) + registrar na conferencia + preparar apresentacao.\n• Importante: Se rejeitado: melhorar com base nos reviews e resubmeter."
              },
              {
                "w": "Lidar com rejeicao: e normal, como melhorar, resubmeter",
                "s": "dealing with paper rejection | how to handle rejection research | improving rejected paper tutorial | Lidar rejeicao normal tutorial portugues",
                "d": "• O que é: Taxa de aceitacao em conferencias top: 20-25%.\n• Detalhe: Rejeicao e NORMAL — ate pesquisadores seniors sao rejeitados.\n• Detalhe: Leia reviews com calma (espere 24h).\n• Detalhe: Extraia feedback construtivo.\n• Detalhe: Melhore e resubmeta em outro venue.\n• Importante: Cada rejeicao melhora o paper."
              },
              {
                "w": "Escolher venue: como avaliar conferencias/journals, rankings, taxa de aceitacao",
                "s": "choosing conference publish paper | como escolher conferencia publicar | conference ranking computer science | acceptance rate venues tutorial",
                "d": "• O que é: Conferencias top CS (20-25% aceitacao): NeurIPS, ICML, CVPR, ACL, SIGMOD.\n• Detalhe: Tier B (30-40%): mais acessiveis, bom feedback.\n• Detalhe: Workshops: taxa alta, otimo pra primeiro paper.\n• Detalhe: Journals: IEEE Trans, ACM Computing Surveys.\n• Detalhe: Qualis CAPES: A1 a B4.\n• Detalhe: Core Ranking: A* A B C.\n• Importante: Mire realista: primeiro paper em workshop ou B, depois suba."
              },
              {
                "w": "Open access, preprints, arXiv: como e por que disponibilizar seu trabalho",
                "s": "open access research paper | arXiv preprint tutorial | como publicar arXiv | open science preprint tutorial",
                "d": "• O que é: arXiv: pre-print gratuito (publique ANTES da conferencia, marque territorio).\n• Detalhe: Open access: qualquer pessoa pode ler (importante pra impacto).\n• Detalhe: Green OA: postar preprint no seu site/arXiv.\n• Detalhe: Gold OA: journal publica aberto (as vezes caro).\n• Importante: SEMPRE poste preprint no arXiv — aumenta citacoes e visibilidade."
              }
            ]
          }
        ]
      },
      {
        "name": "🧑‍🎓 Doutorado",
        "topics": [
          {
            "name": "Doutorado em Computacao",
            "books": [
              "The PhD Grind — Philip Guo (gratuito)",
              "How to Get a PhD — Phillips & Pugh",
              "A PhD Is Not Enough — Peter Feibelman"
            ],
            "items": [
              {
                "w": "O que e doutorado: contribuicao original, tese, 4-5 anos, pra quem serve",
                "s": "PhD computer science tutorial | doutorado computacao tutorial | what is a PhD for tutorial | doutorado contribuicao original tutorial portugues",
                "d": "• O que é: Doutorado = produzir conhecimento NOVO que ninguem no mundo produziu.\n• Detalhe: Tese: documento de 150-300 paginas."
              },
              {
                "w": "Qualificacao, exame de proficiencia, publicacoes durante o doutorado",
                "s": "PhD qualification exam tutorial | doutorado qualificacao publicacoes | PhD milestones tutorial | Qualificacao exame proficiencia tutorial portugues",
                "d": "• O que é: Proficiencia em idioma (ingles).\n• Detalhe: Qualificacao: ~18 meses, apresentar proposta + progresso.\n• Detalhe: Publicar: 2-4 papers em conferencias/journals.\n• Detalhe: Co-autoria com orientador e colegas.\n• Importante: Quantidade varia por programa e area."
              },
              {
                "w": "Orientacao: relacao orientador-aluno, co-orientacao, sanduiche (exterior)",
                "s": "PhD advisor relationship tutorial | doutorado sanduiche exterior | co-advisor PhD tutorial | Orientacao relacao orientador-aluno tutorial portugues",
                "d": "• O que é: Relacao mais importante da pos.\n• Detalhe: Reunioes semanais/quinzenais.\n• Detalhe: Co-orientador: expertise complementar.\n• Detalhe: Sanduiche: 6-12 meses em universidade no exterior (CAPES/FAPESP pagam).\n• Detalhe: Networking internacional.\n• Importante: Experiencia transformadora."
              },
              {
                "w": "Bolsas doutorado: CAPES, CNPq, FAPESP. Doutorado no exterior",
                "s": "bolsa doutorado CAPES FAPESP | PhD abroad scholarship tutorial | doutorado exterior tutorial | Bolsas doutorado CAPES tutorial portugues",
                "d": "• O que é: CAPES: ~R$3.100.\n• Detalhe: FAPESP (SP): ~R$5.400.\n• Detalhe: Exterior: CAPES Print, Fulbright (EUA), CSC (China), DAAD (Alemanha).\n• Detalhe: PhD nos EUA: 5-6 anos, funding como TA/RA, tuition waiver.\n• Importante: Top schools: MIT, Stanford, CMU, Berkeley."
              },
              {
                "w": "Pos-doc, carreira academica: concurso, tenure, pesquisa independente",
                "s": "postdoc academic career tutorial | carreira academica professor | tenure track university tutorial | Pos-doc carreira academica tutorial portugues",
                "d": "• O que é: Pos-doc: 1-3 anos de pesquisa apos PhD.\n• Detalhe: Concurso publico: prova didatica + titulos + memorial.\n• Detalhe: Tenure (efetivacao): ~5 anos de professor.\n• Detalhe: Carreira: pesquisa, orientacao, aulas, extensao, gestao.\n• Detalhe: Publicar continuamente.\n• Importante: Captacao de recursos (FAPESP, CNPq)."
              },
              {
                "w": "Saude mental no doutorado: burnout, isolamento, sindrome do impostor, quando pedir ajuda",
                "s": "PhD mental health burnout | saude mental doutorado tutorial | PhD imposter syndrome tutorial | when to quit PhD tutorial | Saude mental no doutorado explicação português",
                "d": "• O que é: 40-50% dos doutorandos reportam problemas de saude mental.\n• Detalhe: Burnout: excesso de trabalho sem resultado visivel.\n• Detalhe: Isolamento: pesquisa e solitaria.\n• Detalhe: Impostor: 'nao mereco estar aqui' (TODO MUNDO sente).\n• Detalhe: Pedir ajuda: terapia (universidade oferece), conversar com colegas, orientador.\n• Detalhe: NAO e fraqueza.\n• Importante: E inteligencia."
              }
            ]
          },
          {
            "name": "Vida no Doutorado: Da Pesquisa a Tese",
            "books": [
              "The PhD Grind — Philip Guo (gratuito)",
              "Writing Your Dissertation in 15min/Day — Bolker",
              "Authoring a PhD — Dunleavy"
            ],
            "items": [
              {
                "w": "Escolher problema de tese: scope, originalidade, viabilidade em 4 anos",
                "s": "choosing PhD thesis topic | escopo tese doutorado tutorial | PhD research question tutorial | Escolher problema tese tutorial portugues",
                "d": "• O que é: Nem grande demais (impossivel), nem pequeno demais (nao vale PhD).\n• Detalhe: Contribuicao ORIGINAL: algo que ninguem fez.\n• Detalhe: Teste: consigo explicar em 1 frase o que e novo? Orientador ajuda a calibrar scope.\n• Importante: Pivot e normal (2-3 vezes tipicamente)."
              },
              {
                "w": "Publicar durante o PhD: estrategia, conferencias vs journals, autoria",
                "s": "publishing during PhD strategy | PhD publication strategy tutorial | first author papers tutorial | Publicar durante estrategia tutorial portugues",
                "d": "• O que é: Meta: 2-4 papers first-author em conferencias top.\n• Detalhe: Estrategia: workshop paper > conferencia B > conferencia A.\n• Detalhe: Autoria: primeiro autor = quem fez o trabalho.\n• Detalhe: Ultimo = orientador (convencao).\n• Detalhe: Rejeicao e normal (50-80% das submissoes).\n• Importante: Persistencia."
              },
              {
                "w": "Sanduiche no exterior: como aplicar, lab host, funding, experiencia",
                "s": "PhD sandwich abroad program | doutorado sanduiche CAPES FAPESP | visiting researcher PhD tutorial | Sanduiche exterior como tutorial portugues",
                "d": "• O que é: BEPE (FAPESP): 3-12 meses, bolsa completa.\n• Detalhe: CAPES Print: programas selecionados.\n• Detalhe: Fulbright: EUA.\n• Detalhe: Escolha lab: leia papers, contacte professor (email personalizado!)."
              },
              {
                "w": "Escrevendo a tese: estrutura, capitulos, revisao, timeline",
                "s": "writing PhD thesis tutorial | estrutura tese doutorado tutorial | PhD dissertation writing tips | Escrevendo tese estrutura tutorial portugues",
                "d": "• O que é: Capitulos: Intro > Background > Related Work > Contribuicao 1 (paper 1) > Contrib 2 > Contrib 3 > Conclusao.\n• Detalhe: Comece cedo (nao espere acabar os experimentos).\n• Detalhe: Escreva 1 pagina/dia = tese em 6 meses.\n• Importante: Revisao: orientador, colegas, Grammarly."
              },
              {
                "w": "Defesa de tese: preparacao, banca, arguicao, dicas",
                "s": "PhD thesis defense tips tutorial | defesa tese doutorado tutorial | PhD viva preparation tutorial | Defesa tese preparacao tutorial portugues",
                "d": "• O que é: Apresentacao: 40-50min.\n• Detalhe: Banca: 3-5 membros (1-2 externos).\n• Detalhe: Arguicao: cada membro faz perguntas ~30min.\n• Detalhe: Prepare: FAQ de perguntas dificeis.\n• Detalhe: Conheca o trabalho dos membros da banca.\n• Detalhe: Ensaie 3+ vezes.\n• Importante: Depois: titulo de doutor!"
              },
              {
                "w": "Carreira pos-PhD: professor, pos-doc, industry research, startups deep-tech",
                "s": "career after PhD tutorial | pos doutorado carreira tutorial | PhD industry research career | Carreira pos-PhD professor tutorial portugues",
                "d": "• O que é: Professor: concurso publico (Brasil) ou tenure track (exterior).\n• Detalhe: Pos-doc: 1-3 anos de pesquisa intensiva.\n• Detalhe: Industry research: Google DeepMind, Meta FAIR, MSR.\n• Detalhe: Research engineer: aplicar pesquisa em producao."
              }
            ]
          },
          {
            "name": "Carreira Academica e Internacionalizacao",
            "books": [
              "The Professor Is In — Karen Kelsky",
              "A PhD Is Not Enough — Peter Feibelman",
              "Academic Writing for Graduate Students — Swales & Feak"
            ],
            "items": [
              {
                "w": "Construir reputacao: h-index, citacoes, reviewer, program committee, keynotes",
                "s": "academic reputation h-index | becoming reviewer program committee | academic career building tutorial | Construir reputacao h-index tutorial portugues",
                "d": "• O que é: h-index: h papers com pelo menos h citacoes.\n• Detalhe: Google Scholar profile: obrigatorio.\n• Detalhe: Ser reviewer: peca ao orientador pra indicar.\n• Detalhe: Program committee: apos varios reviews.\n• Detalhe: Convidar e ser convidado pra palestras.\n• Importante: Networking > metricas."
              },
              {
                "w": "Colaboracoes internacionais: como iniciar, email frio, visitas, co-orientacao",
                "s": "international research collaboration | cold email professor research | visiting researcher tutorial | Colaboracoes internacionais como tutorial portugues",
                "d": "• O que é: Email frio: 3 paragrafos (quem sou, por que VOCE, o que proponho).\n• Detalhe: Leia 2-3 papers da pessoa antes.\n• Detalhe: Proponha algo concreto.\n• Detalhe: Taxa de resposta: ~10-20%.\n• Detalhe: Conferencias: melhor lugar pra conhecer pessoalmente.\n• Importante: Visitas: 1 semana pode iniciar colaboracao de anos."
              },
              {
                "w": "Pos-doc: como conseguir, onde procurar, negociar, transicao pra professor",
                "s": "postdoc position how to find | postdoc computer science tutorial | postdoc to professor transition | Pos-doc como conseguir tutorial portugues",
                "d": "• O que é: Onde: academicjobs.com, jobs.ac.uk, LinkedIn, site dos labs.\n• Detalhe: Candidatura: CV + research statement + teaching statement + cartas.\n• Detalhe: Duracaoo: 1-3 anos.\n• Detalhe: Neg: salario, funding pra conferencias, liberdade de pesquisa.\n• Importante: Transicao: publicar muito, dar aulas, construir lab."
              },
              {
                "w": "Concurso publico no Brasil: provas, titulos, memorial, aula publica",
                "s": "concurso professor universidade | concurso publico docente tutorial | academic hiring Brazil tutorial | Concurso publico Brasil tutorial portugues",
                "d": "• O que é: Edital: requisitos (doutorado), vagas, cronograma.\n• Detalhe: Provas: didatica (aula publica pra banca), escrita (dissertacao em 4h), titulos (pontuacao do Lattes).\n• Detalhe: Memorial: sua trajetoria academica.\n• Detalhe: Prepare MESES antes.\n• Importante: Cada universidade tem regras diferentes."
              },
              {
                "w": "Captacao de recursos: FAPESP tematico, CNPq Universal, editais, parcerias",
                "s": "research funding proposal Brazil | FAPESP tematico tutorial | CNPq Universal grant writing | Captacao recursos FAPESP tutorial portugues",
                "d": "• O que é: FAPESP Auxilio Regular: 1 pesquisador, 2 anos.\n• Detalhe: FAPESP Tematico: grupo, 5 anos, milhoes.\n• Detalhe: CNPq Universal: nacional.\n• Detalhe: Edital: leia TUDO antes de escrever.\n• Detalhe: Orcamento realista.\n• Detalhe: Justifique cada item.\n• Importante: Parcerias industria: Google, Samsung, Huawei tem programas."
              },
              {
                "w": "Industry research labs: Google DeepMind, Meta FAIR, MSR, Anthropic, OpenAI, como entrar",
                "s": "industry research labs Google DeepMind | Meta FAIR research tutorial | how to get into research lab | AI research career industry | Industry research labs explicação português",
                "d": "• O que é: Google DeepMind, Meta FAIR, MSR, OpenAI, Anthropic: publicam papers top E constroem produtos.\n• Detalhe: Requisito tipico: PhD + publicacoes em top venues.\n• Detalhe: Research Engineer: sem PhD mas forte em implementacao.\n• Detalhe: Processo: aplicar online + referrals.\n• Detalhe: Salarios: $200-500k+ total comp (EUA).\n• Importante: Alternativa ao caminho academico tradicional."
              }
            ]
          }
        ]
      },
      {
        "name": "🛠️ Ferramentas e Recursos Academicos",
        "topics": [
          {
            "name": "Software e Plataformas pra Pesquisa",
            "books": [
              "Research Software Engineering with Python — Wilson et al.",
              "Good Enough Practices in Scientific Computing — Wilson et al.",
              "The Practice of Reproducible Research — Kitzes et al."
            ],
            "items": [
              {
                "w": "LaTeX avancado: templates de conferencia (IEEE, ACM, LNCS), beamer pra slides",
                "s": "LaTeX IEEE ACM template tutorial | beamer presentation LaTeX | LaTeX advanced academic tutorial | LaTeX avancado templates tutorial portugues",
                "d": "• O que é: Templates: IEEE (2 colunas), ACM (especifico por conferencia), LNCS (Springer).\n• Detalhe: Beamer: slides em LaTeX (consistente com o paper).\n• Detalhe: TikZ: diagramas.\n• Detalhe: Algorithm2e: pseudocodigo.\n• Importante: Overleaf: colaboracao real-time."
              },
              {
                "w": "Gerenciamento de experimentos: MLflow, Weights & Biases, notebooks reproduziveis",
                "s": "experiment tracking research | reproducible research notebooks | MLflow research tutorial | Gerenciamento experimentos MLflow tutorial portugues",
                "d": "• O que é: MLflow/W&B: track hiperparametros, metricas, artefatos.\n• Detalhe: Jupyter + papermill: notebooks parametrizados.\n• Detalhe: Seeds fixas pra reproducibilidade.\n• Detalhe: Docker pra ambiente.\n• Importante: README com instrucoes de reproducao."
              },
              {
                "w": "Computacao cientifica: cluster, SLURM, GPU na nuvem (Colab, Lambda, vast.ai)",
                "s": "HPC cluster SLURM tutorial | GPU cloud research tutorial | Google Colab Pro research | Computacao cientifica cluster tutorial portugues",
                "d": "• O que é: Cluster da universidade: SLURM (sbatch, squeue).\n• Detalhe: GPU na nuvem: Colab Pro, Lambda Labs, vast.ai, AWS Spot.\n• Detalhe: Multi-GPU: DataParallel, DistributedDataParallel.\n• Importante: Custo: otimize batch size, use mixed precision."
              },
              {
                "w": "Versionamento de dados e modelos: DVC, Git LFS, HuggingFace Hub",
                "s": "DVC data version control tutorial | Git LFS large files tutorial | HuggingFace Hub models tutorial | Versionamento dados modelos tutorial portugues",
                "d": "• O que é: DVC: git pra dados (trackea datasets grandes sem colocar no git).\n• Detalhe: Git LFS: arquivos grandes.\n• Detalhe: HuggingFace Hub: compartilhar modelos e datasets.\n• Importante: Reproducibilidade: codigo (git) + dados (DVC) + ambiente (Docker) + config (YAML)."
              },
              {
                "w": "Plataformas academicas: Google Scholar, DBLP, Semantic Scholar, arXiv, OpenReview",
                "s": "academic platforms Google Scholar DBLP | arXiv preprint tutorial | OpenReview conference tutorial | Plataformas academicas Google tutorial portugues",
                "d": "• O que é: Google Scholar: perfil + citacoes + h-index.\n• Detalhe: DBLP: indice de publicacoes em CS.\n• Detalhe: Semantic Scholar: AI-powered search.\n• Detalhe: arXiv: pre-prints (publicar antes da conferencia).\n• Detalhe: OpenReview: reviews publicos (ICLR, NeurIPS).\n• Importante: ResearchGate: rede social academica."
              },
              {
                "w": "Financiamento: FAPESP projetos, CNPq Universal, editais, parcerias industria",
                "s": "research funding Brazil FAPESP CNPq | financiamento pesquisa tutorial | industry partnership research | Financiamento FAPESP projetos tutorial portugues",
                "d": "• O que é: FAPESP: projetos tematicos, auxilio pesquisa.\n• Detalhe: CNPq: Universal, produtividade.\n• Detalhe: Editais: FINEP, CAPES.\n• Detalhe: Parcerias: Google Research Awards, Microsoft Research, Samsung, Huawei.\n• Detalhe: Patentes: proteger inovacao."
              },
              {
                "w": "Gestao de conhecimento: Obsidian, Notion, Zettelkasten method pra pesquisa",
                "s": "Obsidian Zettelkasten research | knowledge management research | Notion academic tutorial | Gestao conhecimento Obsidian tutorial portugues",
                "d": "• O que é: Zettelkasten: notas atomicas interconectadas (como seu cerebro).\n• Detalhe: Obsidian: Markdown + links + grafos (gratis, local).\n• Detalhe: Notion: mais estruturado.\n• Detalhe: Logseq: alternativa.\n• Detalhe: Linka notas de papers, ideias, reunioes.\n• Importante: Depois de 1 ano, seu 'segundo cerebro' e invaluavel."
              },
              {
                "w": "Escrita colaborativa: Overleaf, Git + LaTeX, Google Docs, revisao e controle de versao",
                "s": "collaborative writing research | Overleaf collaboration tutorial | Git LaTeX academic writing | Escrita colaborativa Overleaf tutorial portugues",
                "d": "• O que é: Overleaf: melhor pra LaTeX colaborativo (como Google Docs).\n• Detalhe: Git + LaTeX: pra quem quer controle total (diff de texto).\n• Detalhe: Google Docs: rascunhos rapidos com orientador.\n• Detalhe: Track changes: marcar o que mudou entre versoes.\n• Importante: Branch por secao se usar git."
              },
              {
                "w": "Reproducibilidade: Docker, conda environments, seeds, config files, README detalhado",
                "s": "reproducible research Docker conda | reproducibility machine learning | research code README tutorial | Reproducibilidade Docker conda tutorial portugues",
                "d": "• O que é: Codigo que ninguem reproduz = codigo inutil.\n• Detalhe: requirements.txt / environment.yml.\n• Detalhe: Docker: ambiente identico.\n• Detalhe: Seeds: random.seed(42).\n• Detalhe: Config: YAML/JSON (nao hardcode).\n• Detalhe: README: como instalar, como rodar, como reproduzir cada tabela/figura do paper.\n• Importante: Zenodo: DOI pro seu codigo."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "career",
    "name": "💼 CARREIRA & LIDERANCA",
    "css": "purple",
    "time": "Continuo",
    "desc": "Metodos de estudo, preparacao de carreira, lideranca tecnica, gestao de pessoas e produto.",
    "areas": [
      {
        "name": "🚀 Desenvolvimento de Carreira Tech",
        "topics": [
          {
            "name": "Metodos de Estudo Eficaz",
            "books": [
              "A Mind for Numbers — Barbara Oakley",
              "Make It Stick — Brown, Roediger & McDaniel",
              "O Poder do Habito — Charles Duhigg"
            ],
            "items": [
              {
                "w": "Aprendizado ativo: Feynman Technique, recall ativo, espacamento",
                "s": "active learning Feynman technique | aprendizado ativo tecnica Feynman | spaced repetition study tutorial | Aprendizado ativo Feynman tutorial portugues",
                "d": "• O que é: Tecnica Feynman: explique como se fosse pra uma crianca.\n• Detalhe: Se travar, volte e estude.\n• Detalhe: Recall ativo: feche o material e tente lembrar (melhor que reler).\n• Importante: Espacamento: revisar em intervalos crescentes (Anki)."
              },
              {
                "w": "Gestao de tempo: Pomodoro, time blocking, rotina de estudo",
                "s": "Pomodoro technique study tutorial | gestao tempo estudo tutorial | time blocking productivity | Gestao tempo Pomodoro tutorial portugues",
                "d": "• O que é: Pomodoro: 25min foco + 5min pausa.\n• Detalhe: Time blocking: agendar blocos no calendario.\n• Detalhe: 1-2h/dia consistente > 8h no sabado.\n• Importante: Eliminar distracoes: celular no silencioso, app blocker."
              },
              {
                "w": "Projetos > teoria: aprender fazendo, portfolio no GitHub",
                "s": "learn by doing projects tutorial | portfolio github developer | project based learning programming | Projetos teoria aprender tutorial portugues",
                "d": "• O que é: Teoria sem pratica = esquecimento.\n• Detalhe: Pra cada topico: leia, pratique, construa algo.\n• Detalhe: GitHub = seu portfolio.\n• Detalhe: Recrutadores olham seus repos.\n• Importante: README bem feito em cada projeto."
              },
              {
                "w": "Comunidade: Discord, Reddit, meetups, conferencias, open source",
                "s": "developer community Discord Reddit | comunidade programacao tutorial | open source contribution beginner | Comunidade Discord Reddit tutorial portugues",
                "d": "• O que é: r/learnprogramming, r/cscareerquestions.\n• Detalhe: Discord: Python Brasil, He4rt Devs.\n• Detalhe: Meetups locais.\n• Detalhe: Conferencias: Python Brasil, TDC.\n• Importante: Contribuir em open source: comece por issues 'good first issue'."
              },
              {
                "w": "Como aprender programacao: ler docs, copiar e modificar, construir projetos proprios",
                "s": "how to learn programming effectively | como aprender programacao | learn coding by building tutorial | self-taught programmer tips",
                "d": "• O que é: Nao assista tutoriais passivamente.\n• Detalhe: Ciclo: ler/assistir (20%) > copiar codigo do tutorial (30%) > modificar e quebrar (20%) > construir algo proprio (30%).\n• Detalhe: Tutorial hell: ficar preso em cursos sem nunca construir nada.\n• Importante: Saia do tutorial e CONSTRUA."
              },
              {
                "w": "Quando pedir ajuda: Stack Overflow, documentacao oficial, como fazer boas perguntas",
                "s": "how to ask good questions programming | Stack Overflow guide tutorial | RTFM read documentation tutorial | debugging before asking tutorial | Quando pedir ajuda explicação português",
                "d": "• O que é: Antes de perguntar: leia o erro, Google o erro, leia a documentacao, tente 3 abordagens diferentes.\n• Detalhe: Se ainda travou: formule a pergunta (o que tentei, o que esperava, o que aconteceu).\n• Detalhe: Stack Overflow: pesquise antes de postar.\n• Importante: Documentacao oficial > tutoriais random."
              }
            ]
          },
          {
            "name": "Preparacao de Carreira",
            "books": [
              "Cracking the Coding Interview — Gayle McDowell",
              "The Complete Software Developer's Career Guide — Sonmez",
              "Staff Engineer — Will Larson"
            ],
            "items": [
              {
                "w": "LinkedIn: perfil, conexoes, conteudo, vagas",
                "s": "LinkedIn developer profile tips | LinkedIn programador tutorial | LinkedIn tech career tutorial | LinkedIn perfil conexoes tutorial portugues",
                "d": "• O que é: Foto profissional.\n• Detalhe: Headline: 'Estudante de Eng.\n• Detalhe: Computacao | Python | IA'.\n• Detalhe: Sobre: o que voce faz e busca.\n• Detalhe: Projetos no featured.\n• Detalhe: Conectar com devs da area.\n• Importante: Postar aprendizados."
              },
              {
                "w": "Portfolio e GitHub: o que mostrar, como organizar, README",
                "s": "developer portfolio github | portfolio programador tutorial | github profile README projects | Portfolio GitHub mostrar tutorial portugues",
                "d": "• O que é: Pin 4-6 melhores repos.\n• Detalhe: Cada repo: README com descricao, como rodar, screenshots.\n• Detalhe: GitHub Profile README.\n• Detalhe: Deploye projetos (Vercel, Pages).\n• Importante: Qualidade > quantidade."
              },
              {
                "w": "Entrevistas tecnicas: algoritmos, system design, behavioral",
                "s": "technical interview preparation | entrevista tecnica programacao | coding interview tips tutorial | Entrevistas tecnicas algoritmos tutorial portugues",
                "d": "• O que é: Algoritmos: LeetCode (Easy→Medium).\n• Detalhe: System design: como projetar Twitter/Uber.\n• Detalhe: Behavioral: STAR method (Situacao-Tarefa-Acao-Resultado).\n• Detalhe: Pratique em voz alta.\n• Importante: Mock interviews."
              },
              {
                "w": "Estagios, freelance, CLT, PJ: opcoes no Brasil e remoto",
                "s": "estagio programacao Brasil | trabalho remoto programador | freelance developer career | Estagios freelance opcoes tutorial portugues",
                "d": "• O que é: Estagio: a partir do 2o ano (Gupy, LinkedIn, CIEE).\n• Detalhe: Freelance: Workana, Upwork (experiencia + portfolio).\n• Detalhe: CLT vs PJ: entenda a diferenca.\n• Importante: Remoto internacional: paga em dolar, mas exige ingles."
              },
              {
                "w": "Primeiro emprego em tech: o que empresas esperam de um junior",
                "s": "first tech job expectations | o que empresas esperam junior | junior developer skills tutorial | entry level software engineer | Primeiro emprego em tech explicação português",
                "d": "• O que é: Empresas esperam de junior: fundamentos solidos (nao frameworks da moda), capacidade de aprender rapido, comunicacao, humildade.\n• Detalhe: NAO esperam: saber tudo, resolver tudo sozinho.\n• Importante: Diferencial: projetos proprios no GitHub, contribuicao open source, blog tecnico."
              },
              {
                "w": "Curriculo e CV tecnico: o que incluir, o que evitar, ATS-friendly",
                "s": "tech resume tips tutorial | curriculo programador tutorial | developer CV template tutorial | ATS friendly resume tutorial | Curriculo e CV tecnico explicação português",
                "d": "• O que é: Secoes: contato, resumo (2 linhas), experiencia (STAR: situacao-tarefa-acao-resultado), projetos, skills, educacao.\n• Detalhe: Quantifique: 'reduzi tempo de deploy de 2h pra 5min'.\n• Detalhe: Sem foto (ATS).\n• Detalhe: Skills: liste tecnologias que REALMENTE sabe.\n• Importante: GitHub linkado."
              },
              {
                "w": "Negociacao salarial: pesquisa de mercado, como negociar, equity, beneficios",
                "s": "salary negotiation tech tutorial | negociacao salarial programador | tech compensation negotiation | glassdoor levels.fyi tutorial | Negociacao salarial explicação português",
                "d": "• O que é: Pesquise: Glassdoor, levels.fyi, Pesquisa Robert Half.\n• Detalhe: Nunca diga seu salario atual primeiro.\n• Detalhe: Fale em faixa.\n• Detalhe: Negocie TUDO: salario, bonus, equity, remote, PTO, equipamento.\n• Detalhe: Startup: equity vale pouco (99% falham).\n• Detalhe: Big tech: RSU vale muito.\n• Importante: Total comp = salario + bonus + equity + beneficios."
              },
              {
                "w": "Contribuir para open source: encontrar projetos (good first issue), fork → branch → PR, code review, etiqueta, upstream sync",
                "s": "open source contribution tutorial | good first issue tutorial | fork PR tutorial | upstream sync tutorial | community tutorial | Contribuir para open source explicação português",
                "d": "• O que é: Contribuir para OSS: buscar good first issues, ler CONTRIBUTING.md, fazer PR pequeno e limpo, responder code review.\n• Importante: Constrói reputação e network"
              }
            ]
          },
          {
            "name": "Carreira em Cyber Security e Forense",
            "books": [
              "Cybersecurity Career Guide — Alyssa Miller",
              "Tribe of Hackers — Marcus Carey",
              "The Pentester's Blueprint — Phillip Wylie & Kim Crawley"
            ],
            "items": [
              {
                "w": "Certificacoes: CompTIA Security+, eJPT, CEH, OSCP, OSWE, CRTP",
                "s": "security certifications path | eJPT OSCP certification tutorial | cybersecurity certification roadmap | Certificacoes CompTIA Security+ tutorial portugues",
                "d": "• O que é: Caminho: Security+ (fundacao) > eJPT (primeiro pentest) > CEH (teoria) > OSCP (hands-on, gold standard, 24h exam) > OSWE (web avancado) > CRTP (Active Directory).\n• Detalhe: OSCP: exige hackear 5 maquinas em 24h + relatorio.\n• Importante: Muitas vagas exigem OSCP."
              },
              {
                "w": "Carreira: pentest, red team, blue team, GRC, security engineer, bug bounty full-time",
                "s": "cybersecurity career paths | pentest career tutorial | bug bounty full time career | Carreira pentest team tutorial portugues",
                "d": "• O que é: Pentester: testar seguranca de clientes.\n• Detalhe: Red team: simular atacante real (mais sofisticado).\n• Detalhe: Blue team: defender (SOC, IR, threat hunting).\n• Detalhe: Security engineer: construir seguranca no produto.\n• Detalhe: GRC: governanca, risco, compliance.\n• Importante: Bug bounty: freelance (top hunters ganham $100k+/ano)."
              },
              {
                "w": "Bug Bounty: HackerOne, Bugcrowd, Intigriti, como ganhar seus primeiros bounties",
                "s": "bug bounty platforms tutorial | HackerOne Bugcrowd how to start | first bug bounty tips tutorial | Bounty HackerOne Bugcrowd tutorial portugues",
                "d": "• O que é: Plataformas: HackerOne, Bugcrowd, Intigriti, YesWeHack.\n• Detalhe: Comece: programas com escopo amplo + muitos assets.\n• Detalhe: Foco: IDOR, XSS, info disclosure (mais acessiveis).\n• Detalhe: Recon pesado: subdomains, JS analysis, endpoints esquecidos.\n• Detalhe: Primeiro bounty: $50-500.\n• Importante: Persistencia > talento."
              },
              {
                "w": "Portfolio de seguranca: CTF writeups, blog tecnico, GitHub com tools/scripts",
                "s": "security portfolio CTF writeups | cybersecurity blog portfolio | security tools github tutorial | Portfolio seguranca writeups tutorial portugues",
                "d": "• O que é: CTF writeups: documentar como resolveu challenges (blog ou GitHub).\n• Detalhe: Blog: artigos tecnicos sobre vulns que encontrou (em labs, nao em producao).\n• Detalhe: GitHub: scripts de automacao, ferramentas, configs.\n• Detalhe: Portfolio diferencia voce de quem so tem certificacoes.\n• Importante: Mostre o que SABE FAZER."
              },
              {
                "w": "Networking na area: BSides, DEF CON, conferencias brasileiras (H2HC, Roadsec)",
                "s": "cybersecurity conferences BSides DEF CON | H2HC Roadsec Brasil tutorial | infosec community tutorial | Networking area BSides tutorial portugues",
                "d": "• O que é: BSides: conferencias comunitarias (varias cidades).\n• Detalhe: DEF CON: a maior (Las Vegas).\n• Detalhe: H2HC: a maior do Brasil.\n• Detalhe: Roadsec: itinerante pelo Brasil.\n• Detalhe: Meetups locais: OWASP chapters.\n• Detalhe: Twitter/X: infosec community e muito ativa.\n• Importante: Networking > certificacoes pra conseguir emprego."
              },
              {
                "w": "Transicao de carreira: de dev pra seguranca, primeiros passos, skills transferiveis",
                "s": "career transition to cybersecurity | developer to security tutorial | cybersecurity career change | Transicao carreira seguranca tutorial portugues",
                "d": "• O que é: De dev: voce ja sabe codigo, arquitetura, debug.\n• Detalhe: Vantagem enorme! Adicione: OWASP Top 10 na pratica, 1 certificacao (eJPT ou Security+), labs (TryHackMe), 1 especialidade (web hacking se e dev web).\n• Detalhe: Bug bounty: comece em paralelo.\n• Importante: 6-12 meses focado = pronto pra vaga junior em seguranca."
              },
              {
                "w": "Especializacoes em seguranca: AppSec, CloudSec, Pentest, IR, Threat Intel, GRC, Forense",
                "s": "cybersecurity specializations | AppSec CloudSec career tutorial | security career specialization | infosec career paths detailed | Especializacoes em seguranca explicação português",
                "d": "• O que é: AppSec: seguranca de aplicacoes (SAST, code review).\n• Detalhe: CloudSec: seguranca em cloud (AWS, Azure).\n• Detalhe: Pentest: testar invasao.\n• Detalhe: IR: resposta a incidentes.\n• Detalhe: Threat Intel: inteligencia de ameacas.\n• Detalhe: GRC: governanca, risco, compliance.\n• Detalhe: Forense: investigacao digital.\n• Importante: Escolha 1 pra se aprofundar."
              },
              {
                "w": "Day-in-the-life: como e o dia a dia de um pentester, analista SOC, security engineer",
                "s": "day in life pentester tutorial | SOC analyst daily work tutorial | security engineer role tutorial | infosec daily routine tutorial | Dayinthelife explicação português",
                "d": "• O que é: Pentester: recon > exploit > report, projetos de 1-4 semanas.\n• Detalhe: SOC analyst: monitorar alertas, triage, investigar, escalar.\n• Detalhe: Security engineer: design + implementar controles, automatizar, code review."
              }
            ]
          },
          {
            "name": "Crescimento Profissional: Junior a Senior+",
            "books": [
              "The Staff Engineer's Path — Tanya Reilly",
              "Staff Engineer — Will Larson",
              "The Complete Software Developer's Career Guide — Sonmez"
            ],
            "items": [
              {
                "w": "Career ladder: Junior > Pleno > Senior > Staff > Principal > Distinguished",
                "s": "software engineer career ladder | career levels engineering | junior to senior developer | staff principal engineer tutorial | Career ladder explicação português",
                "d": "• O que é: Junior: aprende, executa tarefas definidas.\n• Detalhe: Pleno: executa com autonomia, mentora juniors.\n• Detalhe: Senior: define solucoes, influencia time.\n• Detalhe: Staff: impacto cross-team, define direcao tecnica.\n• Detalhe: Principal: impacto na organizacao.\n• Importante: O que muda: scope de impacto, autonomia, ambiguidade."
              },
              {
                "w": "IC track vs Manager track: como decidir, quando trocar, pendulum",
                "s": "IC vs manager track tutorial | individual contributor vs management | engineering career track tutorial | manager pendulum tutorial | IC track vs Manager track explicação português",
                "d": "• O que é: IC (Individual Contributor): foco tecnico, codigo, arquitetura, pesquisa.\n• Detalhe: Manager: foco em pessoas, processos, estrategia.\n• Detalhe: Nenhum e melhor — depende do que te energiza.\n• Detalhe: Pendulum: alternar entre IC e manager ao longo da carreira (comum).\n• Importante: Experimente manager por 6 meses antes de decidir."
              },
              {
                "w": "Marca pessoal: blog tecnico, palestras, open source, Twitter/X, YouTube",
                "s": "developer personal brand tutorial | tech blog programming tutorial | developer conference speaking | building audience developer | Marca pessoal explicação português",
                "d": "• O que é: Blog: escreva o que aprendeu (dev.to, Medium, pessoal).\n• Detalhe: Palestras: comece em meetups locais, depois conferencias.\n• Detalhe: Open source: contribua e mantenha projetos.\n• Detalhe: Twitter/X: compartilhe aprendizados e opinioes.\n• Detalhe: YouTube: tutoriais e projetos.\n• Detalhe: Consistencia > viralizar.\n• Importante: 1 post/semana por 1 ano = reputacao."
              },
              {
                "w": "Trabalho remoto: produtividade, comunicacao async, fuso horario, isolamento",
                "s": "remote work developer tips | trabalho remoto programador | async communication remote | remote developer productivity | Trabalho remoto explicação português | trabalho remoto tutorial beginners",
                "d": "• O que é: Async-first: escreva mais, reuna menos.\n• Detalhe: Over-communicate: ninguem ve voce trabalhando.\n• Detalhe: Rotina: horario fixo, espaco dedicado, sair de casa.\n• Detalhe: Fuso: overlap de 4h com o time e suficiente.\n• Detalhe: Isolamento: co-working, coffee chats virtuais, meetups presenciais.\n• Importante: Remote paga bem mas exige disciplina."
              },
              {
                "w": "Salarios e mercado tech: Brasil, exterior, remoto internacional, freelance",
                "s": "tech salary Brazil tutorial | developer salary international remote | programador salario mercado | freelance developer rates | Salarios e mercado tech explicação português",
                "d": "• O que é: Brasil CLT: Junior R$3-6k, Pleno R$7-12k, Senior R$12-20k+.\n• Detalhe: Remoto internacional: Junior $3-5k/mes, Senior $8-15k/mes (USD).\n• Detalhe: Freelance: Toptal, Turing, Arc (mais seletivos, pagam mais).\n• Importante: LATAM premium: empresas dos EUA contratam BR por custo menor que US mas maior que India."
              },
              {
                "w": "Aprendizado continuo: como se manter atualizado sem burnout, curadoria de fontes",
                "s": "continuous learning developer | como se manter atualizado tech | tech newsletter podcast tutorial | avoiding tutorial fatigue",
                "d": "• O que é: Nao tente aprender TUDO — selecione.\n• Detalhe: Newsletters: TLDR, Bytes, This Week in ML.\n• Detalhe: Podcasts: Lex Fridman, Hipsters.tech (BR).\n• Detalhe: Twitter/X: siga pesquisadores e devs da sua area.\n• Detalhe: 30min/dia de leitura > 8h de curso no fds.\n• Detalhe: Aprenda o que PRECISA agora, nao o que e hype.\n• Importante: T-shaped: profundo em 1 area, superficial em varias."
              }
            ]
          },
          {
            "name": "Transicoes de Carreira em Tech",
            "books": [
              "Ultralearning — Scott Young",
              "So Good They Can't Ignore You — Cal Newport",
              "Designing Your Life — Burnett & Evans"
            ],
            "items": [
              {
                "w": "Dev > Data Science/ML: como transicionar, skills gap, portfolio",
                "s": "developer to data scientist | transition to ML engineer | career change data science | dev to AI career tutorial | Dev  Data ScienceML explicação português",
                "d": "• O que é: Skills que ja tem: programacao, SQL, lógica.\n• Detalhe: Falta: estatistica, ML, ferramentas (pandas, sklearn, PyTorch).\n• Detalhe: Caminho: curso de ML (Andrew Ng) > projetos Kaggle > portfolio com 3-5 projetos > aplicar pra ML Engineer.\n• Importante: 6-12 meses de estudo focado."
              },
              {
                "w": "Dev > Security: como transicionar, certificacoes, portfolio",
                "s": "developer to security tutorial | career transition cybersecurity | dev to pentester tutorial | application security career | Dev  Security explicação português",
                "d": "• O que é: Vantagem: ja sabe codigo e arquitetura.\n• Detalhe: Adicione: OWASP Top 10, TryHackMe/HTB, eJPT cert.\n• Detalhe: AppSec: natural pra devs (code review + security).\n• Detalhe: Bug bounty: portfolio pratico.\n• Importante: 6-12 meses ate junior em seguranca."
              },
              {
                "w": "Dev > DevOps/SRE: como transicionar, skills, dia a dia",
                "s": "developer to DevOps SRE tutorial | career change DevOps tutorial | SRE transition developer tutorial | platform engineering career | Dev  DevOpsSRE explicação português",
                "d": "• O que é: Skills que ja tem: codigo, git, debug.\n• Detalhe: Adicione: Linux avancado, Docker/K8s, CI/CD, cloud (AWS), Terraform, monitoring.\n• Detalhe: SRE: foco em reliability (SLOs, incident response).\n• Detalhe: Platform eng: ferramentas pra outros devs.\n• Importante: Caminho: automatize o deploy do SEU projeto, depois expanda."
              },
              {
                "w": "Dev > Product Manager: como transicionar, skills, diferencial tecnico",
                "s": "developer to product manager | engineer to PM transition | technical product manager | career change PM tutorial | Dev  Product Manager explicação português",
                "d": "• O que é: Dev que vira PM tem superpoder: entende trade-offs tecnicos, estima melhor, ganha respeito do time de eng.\n• Detalhe: Skills novas: discovery, user interviews, metricas, priorizacao.\n• Detalhe: Caminho: comece participando de product decisions no seu time.\n• Detalhe: Leia Inspired (Cagan).\n• Importante: Faca transicao interna (mais facil)."
              },
              {
                "w": "Trabalhar no exterior: visto, processo, empresas que patrocinam, relocation",
                "s": "work abroad developer tutorial | tech visa sponsorship tutorial | software engineer relocation | working abroad programmer | Trabalhar no exterior explicação português",
                "d": "• O que é: EUA: H-1B (loteria) ou L-1 (transferencia).\n• Detalhe: Europa: Blue Card (Alemanha, facilidade).\n• Detalhe: Canada: Express Entry (pontos).\n• Detalhe: Portugal: visto D7 ou tech visa.\n• Detalhe: Empresas que patrocinam: FAANG, startups em crescimento.\n• Detalhe: Processo: aplicar > entrevista > oferta > visto > mudar.\n• Importante: 3-12 meses de processo."
              },
              {
                "w": "Empreender em tech: quando sair do emprego, side project, validar ideia, bootstrapping",
                "s": "tech entrepreneurship when to quit | side project to startup tutorial | bootstrapping startup tutorial | validate startup idea tutorial | Empreender em tech explicação português",
                "d": "• O que é: Nao largue o emprego pra empreender — comece como side project.\n• Detalhe: Valide: alguem pagaria por isso? (pre-venda).\n• Detalhe: MVP em 1-2 meses.\n• Detalhe: Bootstrapping: crescer com receita propria (sem investidor).\n• Detalhe: MicroSaaS: SaaS pequeno pra nicho (1 pessoa, $5-50k MRR).\n• Importante: Indie hacker: comunidade de empreendedores solo."
              }
            ]
          }
        ]
      },
      {
        "name": "💼 Lideranca & Gestao",
        "topics": [
          {
            "name": "Product & Engineering Management",
            "books": [
              "Engineering Manager — Camille Fournier",
              "Inspired — Marty Cagan",
              "Team Topologies — Skelton & Pais"
            ],
            "items": [
              {
                "w": "Product Discovery, priorizacao, roadmap, metricas",
                "s": "product discovery techniques | product roadmap prioritization | product metrics OKR tutorial | Product Discovery priorizacao tutorial portugues",
                "d": "• O que é: Discovery: entrevistar usuarios.\n• Detalhe: Priorizacao: RICE, MoSCoW.\n• Importante: Metricas: MAU, retention, NPS."
              },
              {
                "w": "1:1s, feedback, coaching, hiring, demissao",
                "s": "engineering manager 1on1 tutorial | giving feedback tutorial | technical hiring interview | feedback coaching hiring tutorial portugues",
                "d": "• O que é: 1:1 semanal.\n• Detalhe: Feedback: SBI (Situacao-Comportamento-Impacto).\n• Detalhe: Coaching > telling.\n• Importante: Hiring: pair programming."
              },
              {
                "w": "Team Topologies, postmortems, cultura de engenharia",
                "s": "team topologies tutorial | blameless postmortems tutorial | engineering culture tutorial | Team Topologies postmortems tutorial portugues",
                "d": "• O que é: Stream-aligned, platform, enabling, complicated-subsystem.\n• Detalhe: Postmortem blameless.\n• Importante: Cultura: safety psicologica."
              },
              {
                "w": "Comunicacao tecnica, ADRs, RFCs, documentacao",
                "s": "architecture decision records | RFC engineering tutorial | technical writing tutorial | Comunicacao tecnica ADRs tutorial portugues",
                "d": "• O que é: ADR: registrar decisoes.\n• Detalhe: RFC: propor mudancas.\n• Importante: Docs: escrever pra quem nao tem contexto."
              },
              {
                "w": "Scaling teams: hiring pipeline, onboarding, cultura de engenharia",
                "s": "scaling engineering teams | engineering hiring pipeline | developer onboarding tutorial | Scaling teams hiring tutorial portugues",
                "d": "• O que é: Hiring: job description clara > screening > coding challenge > system design > cultural fit.\n• Detalhe: Onboarding: buddy system, documentacao, primeiro PR na primeira semana.\n• Importante: Cultura: valores vividos no dia a dia, nao posters na parede."
              },
              {
                "w": "Budget, headcount, planejamento anual, ROI de projetos tecnicos",
                "s": "engineering budget planning | headcount planning tutorial | technical project ROI tutorial | Budget headcount planejamento tutorial portugues",
                "d": "• O que é: Budget: quanto custa o time (salarios, infra, ferramentas).\n• Detalhe: Headcount: quantas pessoas preciso? Justifique com impacto em metricas.\n• Importante: ROI: este projeto de 3 meses gera quanto de valor? Falar a lingua do CFO."
              },
              {
                "w": "Arquitetura organizacional: Conway's Law, team topologies, platform teams",
                "s": "Conway's law team topologies | platform engineering team | organizational architecture | Arquitetura organizacional Conway's tutorial portugues",
                "d": "• O que é: Conway's Law: arquitetura do sistema espelha a estrutura da organizacao.\n• Detalhe: Team Topologies: stream-aligned, platform, enabling, complicated-subsystem.\n• Detalhe: Platform team: ferramentas + infra pra outros times.\n• Importante: Inverse Conway: estruture times pra obter a arquitetura desejada."
              },
              {
                "w": "Engineering metrics: DORA, SPACE, developer experience (DevEx)",
                "s": "engineering metrics DORA SPACE | developer experience DevEx | engineering productivity tutorial | Engineering metrics DORA tutorial portugues",
                "d": "• O que é: DORA: deploy frequency, lead time, MTTR, change failure rate.\n• Detalhe: SPACE: satisfaction, performance, activity, communication, efficiency.\n• Exemplo: DevEx: como devs se SENTEM (surveys).\n• Detalhe: Nao otimize metricas — otimize outcomes.\n• Importante: Goodhart's law: metrica vira meta, deixa de ser boa metrica."
              }
            ]
          }
        ]
      },
      {
        "name": "🤝 Lideranca Tecnica",
        "topics": [
          {
            "name": "Tech Lead & Staff Engineer",
            "books": [
              "Staff Engineer — Will Larson",
              "The Staff Engineer's Path — Tanya Reilly",
              "An Elegant Puzzle — Will Larson"
            ],
            "items": [
              {
                "w": "Tech Lead vs Manager: papeis, responsabilidades, career ladder",
                "s": "tech lead vs engineering manager | tech lead responsibilities | IC vs manager career tutorial | Tech Lead Manager tutorial portugues",
                "d": "• O que é: Tech Lead: lider tecnico, decide arquitetura, mentora, continua codando.\n• Detalhe: Manager: gestao de pessoas, 1:1s, hiring.\n• Detalhe: Algumas empresas separam, outras misturam.\n• Importante: IC track: Junior > Mid > Senior > Staff > Principal."
              },
              {
                "w": "Tomada de decisao tecnica: ADRs, trade-offs, build vs buy",
                "s": "technical decision making ADR | build vs buy decision tutorial | engineering trade-offs tutorial | Tomada decisao tecnica tutorial portugues",
                "d": "• O que é: ADR (Architecture Decision Record): documentar decisoes e POR QUE.\n• Detalhe: Trade-offs: performance vs custo, velocidade vs qualidade, build vs buy.\n• Importante: Sempre documente o contexto — voce futuro vai agradecer."
              },
              {
                "w": "Mentoria e coaching: crescer outros engenheiros, pair programming",
                "s": "engineering mentorship coaching | mentoring junior developers | pair programming benefits | Mentoria coaching crescer tutorial portugues",
                "d": "• O que é: Mentoria: compartilhar experiencia.\n• Detalhe: Coaching: fazer perguntas que levam a pessoa a descobrir sozinha.\n• Detalhe: Pair programming: 2 devs, 1 teclado — transferencia de conhecimento.\n• Importante: Code review como ferramenta de ensino."
              },
              {
                "w": "Comunicacao com stakeholders: traduzir tecnico pra negocio e vice-versa",
                "s": "technical communication stakeholders | communicating with non-technical | engineering leadership communication | Comunicacao stakeholders traduzir tutorial portugues",
                "d": "• O que é: Stakeholder quer saber: quanto custa, quando fica pronto, qual o risco.\n• Detalhe: Traduza: 'refatorar o monolito' = 'reduzir tempo de deploy de 2h pra 5min'.\n• Importante: Use numeros, impacto em usuarios, custo de NAO fazer."
              },
              {
                "w": "Influencia sem autoridade: convencer, alinhar, resolver conflitos",
                "s": "influence without authority engineering | resolving technical disagreements | building consensus tutorial | Influencia autoridade convencer tutorial portugues",
                "d": "• O que é: Nem sempre voce decide.\n• Exemplo: Convenca com dados, prototipos, exemplos.\n• Detalhe: Disagree and commit: discordou mas o time decidiu? Execute com energia.\n• Importante: Conflitos tecnicos: foque no problema, nao na pessoa."
              },
              {
                "w": "Architecture reviews: como avaliar e dar feedback em propostas tecnicas, RFCs",
                "s": "architecture review RFC feedback | technical design review tutorial | RFC engineering process tutorial | architecture decision review | Architecture reviews explicação português",
                "d": "• O que é: RFC: documento propondo mudanca tecnica.\n• Detalhe: Reviewers: questionam trade-offs, riscos, alternativas.\n• Detalhe: Boas perguntas: 'o que acontece se X falhar?', 'como escala pra 10x?', 'ja considerou Y?'.\n• Detalhe: Feedback construtivo: 'E se...' > 'Isso ta errado'.\n• Importante: Template: contexto, proposta, alternativas, decisao."
              }
            ]
          },
          {
            "name": "Gestao de Projetos e Processos",
            "books": [
              "The Phoenix Project — Gene Kim",
              "Accelerate — Forsgren, Humble & Kim",
              "Shape Up — Ryan Singer (gratuito, Basecamp)"
            ],
            "items": [
              {
                "w": "Estimativas: story points, t-shirt sizing, PERT, cone de incerteza",
                "s": "software estimation techniques | story points estimation tutorial | cone of uncertainty tutorial | Estimativas story points tutorial portugues",
                "d": "• O que é: Story points: esforco relativo (Fibonacci: 1,2,3,5,8,13).\n• Detalhe: T-shirt: S/M/L/XL (mais rapido).\n• Detalhe: PERT: (otimista + 4*provavel + pessimista)/6.\n• Detalhe: Cone de incerteza: no inicio, estimativas erram 4x.\n• Importante: Seja honesto sobre incerteza."
              },
              {
                "w": "Priorizacao: RICE, MoSCoW, Eisenhower, custo de atraso",
                "s": "prioritization RICE MoSCoW framework | feature prioritization tutorial | cost of delay tutorial | Priorizacao RICE MoSCoW tutorial portugues",
                "d": "• O que é: RICE: Reach * Impact * Confidence / Effort.\n• Detalhe: MoSCoW: Must/Should/Could/Won't.\n• Detalhe: Eisenhower: urgente vs importante.\n• Importante: Custo de atraso: quanto custa NAO fazer isso agora? Priorizar e dizer NAO pra quase tudo."
              },
              {
                "w": "Metricas de engenharia: DORA, lead time, deployment frequency, MTTR",
                "s": "DORA metrics engineering tutorial | lead time deployment frequency | engineering productivity metrics | Metricas engenharia DORA tutorial portugues",
                "d": "• O que é: DORA: 4 metricas que predizem performance de times.\n• Detalhe: Lead time: commit ate producao.\n• Detalhe: Deploy frequency: quantas vezes por dia/semana.\n• Detalhe: MTTR: tempo pra recuperar de falha.\n• Importante: Change failure rate: % de deploys que causam problema."
              },
              {
                "w": "Postmortems blameless, incident management, on-call",
                "s": "blameless postmortem template | incident management process | on-call engineering tutorial | Postmortems blameless incident tutorial portugues",
                "d": "• O que é: Postmortem: o que aconteceu, por que, como prevenir.\n• Detalhe: BLAMELESS: foco no sistema, nao na pessoa.\n• Detalhe: Incident: detectar > comunicar > mitigar > resolver > postmortem.\n• Importante: On-call: rotacao, runbooks, alertas bem configurados."
              },
              {
                "w": "Technical debt: identificar, quantificar, negociar tempo pra pagar",
                "s": "technical debt management | managing technical debt tutorial | tech debt negotiation tutorial | Technical debt identificar tutorial portugues",
                "d": "• O que é: Tech debt = atalhos que custam no futuro.\n• Detalhe: Nem todo debt e ruim (startup precisa de velocidade).\n• Detalhe: Quantifique: 'gastamos 30% do sprint em workarounds'.\n• Detalhe: Negocie: 20% do sprint pra tech debt.\n• Importante: Boy scout rule: deixe o codigo melhor do que encontrou."
              },
              {
                "w": "Stakeholder management: alinhar expectativas, dizer nao, negociar prazo/escopo",
                "s": "stakeholder management engineering | managing expectations PM tutorial | saying no stakeholders tutorial | scope negotiation engineering | Stakeholder management explicação português",
                "d": "• O que é: Triangulo: escopo, prazo, qualidade — escolha 2.\n• Detalhe: 'Sim, podemos fazer A e B no prazo, mas C fica pro proximo ciclo.' Dizer nao com dados: 'se adicionarmos isso, atrasa 2 semanas — vale?' Update semanal: 1 paragrafo de status.\n• Importante: Nunca surpresa negativa: avise CEDO se vai atrasar."
              }
            ]
          },
          {
            "name": "Gestao de Crise e Comunicacao",
            "books": [
              "The Field Guide to Understanding Human Error — Sidney Dekker",
              "Incident Management for Operations — Rob Schnepp",
              "Crucial Conversations — Patterson, Grenny et al."
            ],
            "items": [
              {
                "w": "Quando o sistema cai: war room, incident commander, comunicacao em tempo real",
                "s": "incident management war room | incident commander role tutorial | system outage response tutorial | Quando sistema room tutorial portugues",
                "d": "• O que é: Incident commander: 1 pessoa lidera (decide, delega, comunica).\n• Detalhe: War room: canal dedicado (Slack).\n• Detalhe: Roles: IC (lidera), comms (atualiza stakeholders), tech (investiga/corrige).\n• Detalhe: Status page: comunicar pro publico.\n• Importante: Cadencia: update a cada 30min."
              },
              {
                "w": "Comunicacao de crise: status pages, transparencia, comunicar pra clientes e imprensa",
                "s": "crisis communication tech | status page incident tutorial | communicating outage customers | Comunicacao crise status tutorial portugues",
                "d": "• O que é: Statuspage.io / Atlassian Status.\n• Detalhe: Template: 'Estamos cientes de [problema].\n• Detalhe: Impacto: [quem afeta].\n• Detalhe: Estamos trabalhando em [acao].\n• Detalhe: Proximo update: [quando].' Transparencia > spin.\n• Detalhe: Clientes perdoam falhas, nao mentiras.\n• Importante: Post-mortem publico: constroi confianca."
              },
              {
                "w": "Data breach response: contencao, notificacao LGPD, comunicacao, remediacoes",
                "s": "data breach response plan | LGPD breach notification tutorial | data breach communication | Data breach response tutorial portugues",
                "d": "• O que é: LGPD: notificar ANPD e titulares em prazo razoavel.\n• Detalhe: Passos: conter > avaliar escopo > preservar evidencias > notificar legal > notificar afetados > remediar > postmortem.\n• Detalhe: Nao destrua evidencias.\n• Detalhe: Envolva juridico CEDO.\n• Importante: Ter plano ANTES do breach acontecer."
              },
              {
                "w": "Postmortem blameless: o que aconteceu, timeline, root cause, action items",
                "s": "blameless postmortem template | incident postmortem writing | learning from failure tutorial | Postmortem blameless aconteceu tutorial portugues",
                "d": "• O que é: Blameless: foco no SISTEMA, nao na PESSOA.\n• Detalhe: Template: summary > timeline > root cause > contributing factors > impact > action items > lessons learned.\n• Detalhe: 5 Whys: perguntar 'por que' 5 vezes.\n• Detalhe: Publicar internamente.\n• Detalhe: Action items com dono e prazo.\n• Importante: Cultura de aprendizado."
              },
              {
                "w": "Simulacoes e game days: praticar incidentes antes que acontecam",
                "s": "incident simulation game day | chaos engineering game day | disaster recovery drill tutorial | incident response practice | Simulacoes e game days explicação português",
                "d": "• O que é: Game day: simular incidente (ex: 'banco de dados caiu as 14h de terça').\n• Detalhe: Time pratica roles, comunicacao, procedimentos.\n• Detalhe: Chaos engineering (Netflix): injetar falhas de proposito em producao.\n• Detalhe: Roda de fogo: derrubar servico e ver se time recupera em X minutos.\n• Importante: Praticar = resposta mais rapida quando for real."
              },
              {
                "w": "Disaster Recovery e Business Continuity: RTO, RPO, failover, runbooks",
                "s": "disaster recovery RTO RPO | business continuity planning | DR failover strategy tutorial | runbook incident response | Disaster Recovery e Business Continuity explicação português",
                "d": "• O que é: RTO: tempo maximo pra restaurar (Recovery Time Objective).\n• Detalhe: RPO: dados maximos que pode perder (Recovery Point Objective).\n• Detalhe: Failover: automatico vs manual.\n• Detalhe: Runbook: passo a passo documentado pra cada tipo de incidente.\n• Detalhe: Backup: 3-2-1 (3 copias, 2 midias, 1 off-site).\n• Importante: Testar DR regularmente!"
              }
            ]
          }
        ]
      },
      {
        "name": "📈 Produto & Estrategia",
        "topics": [
          {
            "name": "Product Thinking pra Engenheiros",
            "books": [
              "Inspired — Marty Cagan",
              "The Lean Startup — Eric Ries",
              "Escaping the Build Trap — Melissa Perri"
            ],
            "items": [
              {
                "w": "Product Discovery: entrevistar usuarios, jobs-to-be-done, prototipos",
                "s": "product discovery user interviews | jobs to be done framework | rapid prototyping tutorial | Product Discovery entrevistar tutorial portugues",
                "d": "• O que é: Nao construa o que o usuario PEDE — descubra o que ele PRECISA.\n• Importante: Jobs-to-be-done: qual 'trabalho' o usuario contrata seu produto pra fazer? Prototipo: testar ideia antes de construir (Figma, papel, MVP)."
              },
              {
                "w": "Metricas de produto: MAU, DAU, retention, NPS, funnel, cohort",
                "s": "product metrics MAU retention NPS | product analytics funnel tutorial | cohort analysis tutorial | Metricas produto retention tutorial portugues",
                "d": "• O que é: MAU/DAU: usuarios ativos.\n• Detalhe: Retention: voltam depois de 7/30 dias? NPS: recomendaria? Funnel: onde usuarios desistem.\n• Detalhe: Cohort: agrupar por data de entrada.\n• Importante: North Star Metric: 1 metrica que resume o valor do produto."
              },
              {
                "w": "OKRs: Objectives and Key Results, alinhamento de time",
                "s": "OKR objectives key results | OKR engineering teams tutorial | goal setting framework tutorial | OKRs Objectives Results tutorial portugues",
                "d": "• O que é: Objective: qualitativo, inspirador ('Ser referencia em onboarding').\n• Detalhe: Key Results: quantitativo, mensuravel ('Reduzir churn de 15% pra 8%').\n• Detalhe: Ciclo trimestral.\n• Detalhe: Ambicioso (70% de atingimento = sucesso).\n• Importante: Alinhar time com estrategia."
              },
              {
                "w": "A/B testing, feature flags, experimentacao orientada a dados",
                "s": "A/B testing product tutorial | feature flags LaunchDarkly | data driven decisions tutorial | testing feature flags tutorial portugues",
                "d": "• O que é: A/B test: dividir usuarios em 2 grupos, medir diferenca.\n• Detalhe: Feature flags: ligar/desligar funcionalidade sem deploy.\n• Detalhe: Estatisticamente significante: precisa de volume.\n• Importante: Decisoes baseadas em dados, nao em opiniao do HiPPO (Highest Paid Person's Opinion)."
              },
              {
                "w": "Product-Led Growth (PLG): free trial, freemium, viral loops, activation",
                "s": "product led growth PLG tutorial | freemium strategy tutorial | viral growth loops tutorial | Product-Led Growth free tutorial portugues",
                "d": "• O que é: PLG: produto se vende sozinho (Slack, Figma, Notion).\n• Detalhe: Freemium: gratis ate X, paga depois.\n• Detalhe: Free trial: experimentar antes de comprar.\n• Detalhe: Viral loop: usar > convidar > usar.\n• Detalhe: Activation: momento aha! (Slack: 2000 mensagens = time fica).\n• Importante: Onboarding e tudo."
              },
              {
                "w": "Roadmap: discovery > delivery, dual-track agile, opportunity solution tree",
                "s": "product roadmap dual track agile | opportunity solution tree | product discovery delivery | Roadmap discovery delivery tutorial portugues",
                "d": "• O que é: Dual-track: discovery (o que construir?) + delivery (construir bem) em paralelo.\n• Detalhe: Opportunity Solution Tree (Teresa Torres): outcome > opportunities > solutions > experiments.\n• Detalhe: Roadmap baseado em outcomes, nao features.\n• Importante: Evite 'feature factory'."
              }
            ]
          }
        ]
      },
      {
        "name": "👥 Gestao de Pessoas",
        "topics": [
          {
            "name": "Lideranca de Times de Engenharia",
            "books": [
              "The Manager's Path — Camille Fournier",
              "Radical Candor — Kim Scott",
              "Drive — Daniel Pink"
            ],
            "items": [
              {
                "w": "1:1s efetivos: frequencia, estrutura, perguntas, acompanhamento",
                "s": "one on one meetings engineering manager | 1on1 structure questions tutorial | effective 1:1 meetings tutorial | efetivos frequencia estrutura tutorial portugues",
                "d": "• O que é: Semanal, 30min.\n• Detalhe: DELES, nao seu.\n• Detalhe: Perguntas: como voce ta? o que te bloqueia? como posso ajudar? O que voce quer aprender? Anote action items.\n• Detalhe: Acompanhe na proxima.\n• Importante: 1:1 e a ferramenta mais poderosa de um manager."
              },
              {
                "w": "Feedback: SBI, radical candor, feedback positivo e construtivo",
                "s": "giving feedback SBI model | radical candor feedback tutorial | engineering feedback tutorial | Feedback radical candor tutorial portugues",
                "d": "• O que é: SBI: Situacao (quando/onde) > Comportamento (o que fez) > Impacto (resultado).\n• Detalhe: Radical candor: care personally + challenge directly.\n• Detalhe: Positivo: especifico e publico.\n• Detalhe: Construtivo: privado, sobre comportamento (nao pessoa).\n• Importante: Frequente > anual."
              },
              {
                "w": "Career development: career ladder, growth plans, promoções",
                "s": "career ladder engineering | growth plan developer tutorial | engineering promotion criteria | Career development career tutorial portugues",
                "d": "• O que é: Ladder: Junior > Mid > Senior > Staff > Principal.\n• Detalhe: Cada nivel: expectativas claras de scope, impacto, autonomia.\n• Detalhe: Growth plan: gaps + acoes + timeline.\n• Detalhe: Promocao: demonstre o nivel ANTES de ser promovido.\n• Importante: Documente impacto."
              },
              {
                "w": "Demissao e performance management: PIPs, conversas dificeis",
                "s": "performance improvement plan PIP | firing engineering tutorial | difficult conversations manager | Demissao performance management tutorial portugues",
                "d": "• O que é: Low performer: feedback claro > plano de melhoria (PIP) com prazo > se nao melhorar, desligar.\n• Detalhe: Conversa dificil: seja direto, empático, factual.\n• Detalhe: Demissao: rapida, respeitosa, sem surpresas.\n• Importante: Restante do time: transparencia sem detalhes."
              },
              {
                "w": "Diversidade, inclusao, seguranca psicologica no time",
                "s": "diversity inclusion engineering teams | psychological safety team | inclusive engineering culture | Diversidade inclusao seguranca tutorial portugues",
                "d": "• O que é: Diversidade: times diversos tomam decisoes melhores (pesquisa comprova).\n• Detalhe: Inclusao: todos se sentem seguros pra contribuir.\n• Detalhe: Seguranca psicologica (Edmondson): posso errar sem ser punido, posso discordar sem ser excluido.\n• Importante: Leader modela: admita erros, peca opinioes."
              },
              {
                "w": "Gerenciar remotamente: async communication, rituais, trust",
                "s": "managing remote engineering teams | remote team rituals tutorial | async communication tutorial | Gerenciar remotamente async tutorial portugues",
                "d": "• O que é: Async-first: escreva (nao reuna pra tudo).\n• Detalhe: Documenter: decisions, discussions, context.\n• Detalhe: Rituais: daily async standup, weekly video sync, monthly retrospective.\n• Detalhe: Trust: output-based (nao hora-nalga).\n• Detalhe: Fusos: respeite.\n• Importante: Loneliness: coffee chats."
              },
              {
                "w": "Construir cultura de engenharia: valores, rituais, documentacao, knowledge sharing",
                "s": "engineering culture building | knowledge sharing engineering | engineering team rituals tutorial | Construir cultura engenharia tutorial portugues",
                "d": "• O que é: Cultura = o que acontece quando ninguem ta olhando.\n• Detalhe: Rituais: tech talks, demo days, hackathons internos, postmortems.\n• Detalhe: Documentacao: ADRs, runbooks, onboarding guides.\n• Detalhe: Knowledge sharing: guilds/chapters por interesse (frontend guild, ML chapter).\n• Importante: Celebrar aprendizado, nao so entregas."
              },
              {
                "w": "Managing managers: skip-levels, alignment, developing leaders",
                "s": "managing engineering managers | skip level meetings tutorial | developing engineering leaders | Managing managers skip-levels tutorial portugues",
                "d": "• O que é: Skip-level: conversar diretamente com ICs (1x/mes).\n• Detalhe: Nao pra micromanage — pra sentir o pulso.\n• Detalhe: Desenvolver managers: coaching, feedback, shadow.\n• Detalhe: Alignment: seus managers precisam tomar decisoes que VOCE tomaria na ausencia.\n• Importante: Delegate outcomes, nao tarefas."
              }
            ]
          }
        ]
      },
      {
        "name": "💰 Estrategia, Negocio & Empreendedorismo",
        "topics": [
          {
            "name": "Pensamento Estrategico pra Engenheiros",
            "books": [
              "The Hard Thing About Hard Things — Ben Horowitz",
              "Zero to One — Peter Thiel",
              "Good Strategy Bad Strategy — Richard Rumelt"
            ],
            "items": [
              {
                "w": "Modelo de negocios: como empresas de tech ganham dinheiro (SaaS, marketplace, ads, open-core)",
                "s": "business models tech companies | SaaS marketplace revenue tutorial | how tech companies make money | Modelo negocios como tutorial portugues",
                "d": "• O que é: SaaS: assinatura mensal (Slack, Notion).\n• Detalhe: Marketplace: taxa sobre transacao (Uber, Airbnb).\n• Detalhe: Ads: vender atencao (Google, Meta).\n• Detalhe: Open-core: gratis + premium (GitLab, Elastic).\n• Detalhe: Freemium: gratis ate X, paga depois.\n• Importante: Entender o negocio = tomar decisoes melhores."
              },
              {
                "w": "Unit economics: CAC, LTV, MRR, ARR, churn, burn rate, runway",
                "s": "unit economics startup tutorial | CAC LTV MRR ARR tutorial | startup metrics financial | Unit economics churn tutorial portugues",
                "d": "• O que é: CAC: quanto custa adquirir 1 cliente.\n• Detalhe: LTV: quanto ele gera de receita total.\n• Detalhe: LTV/CAC > 3 = saudavel.\n• Detalhe: MRR: receita recorrente mensal.\n• Detalhe: Churn: taxa de cancelamento.\n• Detalhe: Burn rate: quanto gasta/mes.\n• Importante: Runway: meses ate o dinheiro acabar."
              },
              {
                "w": "Empreendedorismo tech: MVP, validacao, pivot, fundraising, equity",
                "s": "tech startup MVP validation | startup fundraising equity | lean startup methodology tutorial | Empreendedorismo tech validacao tutorial portugues",
                "d": "• O que é: MVP: versao minima pra testar hipotese.\n• Detalhe: Validate: usuarios querem isso? pagariam? Pivot: mudar direcao (Instagram comecou como Burbn).\n• Detalhe: Fundraising: pre-seed > seed > Series A/B/C.\n• Detalhe: Equity: porcentagem da empresa.\n• Importante: Vesting: 4 anos cliff 1 ano."
              },
              {
                "w": "Entender o mercado: TAM/SAM/SOM, concorrencia, moats, timing",
                "s": "TAM SAM SOM market sizing | competitive analysis tutorial | startup moat tutorial | Entender mercado TAM/SAM/SOM tutorial portugues",
                "d": "• O que é: TAM: mercado total.\n• Detalhe: SAM: segmento acessivel.\n• Detalhe: SOM: fatia realista.\n• Detalhe: Moat: vantagem competitiva (network effect, switching cost, brand, tech).\n• Detalhe: Timing: cedo demais e tao ruim quanto tarde demais."
              },
              {
                "w": "Due diligence tecnica: avaliar stack, debito tecnico, time, riscos",
                "s": "technical due diligence startup | evaluating engineering team | tech stack assessment tutorial | diligence tecnica avaliar tutorial portugues",
                "d": "Investidor/comprador quer saber: stack e moderna? Debito tecnico e gerenciavel? Time e retido? Tem testes? Tem CI/CD? Seguranca ok? Escalabilidade? Documentacao? IP: quem e dono do codigo? Como CTO/VP: prepare o time pra passar nessa avaliacao."
              },
              {
                "w": "Open source como estrategia: community, governance, monetizacao (open-core, SaaS)",
                "s": "open source business strategy | open core monetization tutorial | open source community building | Open source como tutorial portugues",
                "d": "• O que é: Open-core: nucleo gratis, enterprise features pagas (GitLab, Elastic).\n• Detalhe: SaaS hosted: versao gerenciada (MongoDB Atlas, Confluent Cloud).\n• Detalhe: Community: contribuidores = evangelistas gratuitos.\n• Detalhe: Governance: licenca, CoC, decision making.\n• Importante: Risco: fork (Amazon vs Elastic)."
              }
            ]
          }
        ]
      }
    ]
  }
];
