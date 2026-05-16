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
                "w": "O que e um computador? Hardware vs Software",
                "s": "what is a computer hardware software | o que e computador hardware software | computer basics | computador? Hardware Software tutorial portugues",
                "d": "Hardware: parte fisica (teclado, tela, placa). Software: programas (SO, apps, jogos). Hardware sem software e uma caixa cara. Software sem hardware nao roda."
              },
              {
                "w": "Arquitetura: CPU, RAM, Disco, Barramento, Cache",
                "s": "computer architecture basics CPU RAM | arquitetura computadores basico | Arquitetura Disco Barramento tutorial 2025 | Arquitetura Disco Barramento explained",
                "d": "CPU processa. RAM = memoria rapida temporaria. Disco = permanente. Barramento conecta tudo. Cache L1/L2/L3 dentro da CPU. Hierarquia: registradores > cache > RAM > SSD > HDD."
              },
              {
                "w": "Sistema Binario, Hexadecimal, Representacao de Dados",
                "s": "binary hexadecimal number systems | sistema binario hexadecimal computacao | Sistema Binario Hexadecimal tutorial 2025 | Sistema Binario Hexadecimal explained",
                "d": "Binario (base 2): 1010=10. Hex (base 16): 0xFF=255. ASCII: A=65. UTF-8 suporta emojis. Imagens: pixels RGB. Pratique conversoes decimal-binario-hex."
              },
              {
                "w": "Ponto flutuante (IEEE 754): por que 0.1 + 0.2 != 0.3",
                "s": "IEEE 754 floating point | ponto flutuante erros | why 0.1 + 0.2 not 0.3 | Ponto flutuante IEEE tutorial portugues",
                "d": "Computador representa decimais em binario (mantissa * 2^expoente). Nem todo decimal tem representacao exata. 0.1 + 0.2 = 0.30000000000000004. Solucao: comparar com tolerancia (abs(a-b) < 1e-9), ou usar Decimal pra dinheiro. Bug famoso: Patriot missile (1991)."
              },
              {
                "w": "Ciclo Fetch-Decode-Execute e Clock",
                "s": "fetch decode execute cycle | ciclo instrucao CPU | how CPU processes instructions | Ciclo Fetch-Decode-Execute Clock tutorial portugues",
                "d": "CPU: busca instrucao da memoria, decodifica, executa, repete bilhoes de vezes/segundo. Clock (GHz) = ciclos/segundo. 3GHz = 3 bilhoes de ciclos/s."
              },
              {
                "w": "Memoria Volatil vs Nao-Volatil, Hierarquia de Memoria",
                "s": "volatile non-volatile memory | RAM ROM SSD difference | memory hierarchy | Memoria Volatil Nao-Volatil tutorial portugues",
                "d": "Volatil (RAM): perde dados ao desligar. Nao-volatil (SSD/HDD): mantem. Registradores > Cache > RAM > SSD > HDD. Mais rapido = mais caro = menor."
              },
              {
                "w": "GPU, Placa-mae, Fonte, Perifericos",
                "s": "GPU graphics card | motherboard components | computer peripherals explained | Placa-mae Fonte Perifericos tutorial portugues",
                "d": "GPU: processamento paralelo (graficos, IA). Placa-mae: conecta tudo. Fonte: energia. USB, HDMI, Bluetooth, WiFi."
              },
              {
                "w": "Como software e executado: compilacao vs interpretacao",
                "s": "compiled vs interpreted languages | compilacao interpretacao | how code runs | Como software executado tutorial portugues",
                "d": "Compilado: C/C++ (traduz tudo antes). Interpretado: Python/JS (traduz linha a linha). JIT: Java/C# (mistura). Mais perto do hardware = mais rapido."
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
                "w": "Decomposicao de Problemas",
                "s": "problem decomposition computer science | decomposicao problemas computacao | CS Unplugged | Decomposicao Problemas tutorial portugues",
                "d": "Quebre problemas grandes em menores. Fazer bolo = comprar + pre-aquecer + misturar + assar. Na programacao cada pedaco vira funcao. Pratique com CS Unplugged."
              },
              {
                "w": "Reconhecimento de Padroes e Abstracao",
                "s": "pattern recognition abstraction CS | reconhecimento padroes abstracao | computational thinking | Reconhecimento Padroes Abstracao tutorial portugues",
                "d": "Padroes: ordenar cartas e nomes usa mesma logica. Abstracao: focar no essencial (mapa = abstracao da cidade). Programar e criar camadas de abstracao."
              },
              {
                "w": "Generalizacao: criar solucoes que funcionam pra varios casos, nao so um",
                "s": "generalization computational thinking | generalizacao pensamento computacional | abstract solutions | Generalizacao criar solucoes tutorial portugues",
                "d": "Nao resolva SO o problema especifico — generalize. Ao inves de 'somar 3 numeros', crie 'somar N numeros'. Funcoes com parametros. Loops ao inves de repeticao manual. Pensamento generico = codigo reutilizavel."
              },
              {
                "w": "Algoritmos, Pseudocodigo e Fluxogramas",
                "s": "algorithm pseudocode flowchart beginners | pseudocodigo fluxograma | how to write algorithms | Algoritmos Pseudocodigo Fluxogramas tutorial portugues",
                "d": "Algoritmo = passos finitos. Pseudocodigo: SE nota>=7 ENTAO Aprovado. Fluxograma: retangulo=processo, losango=decisao. Escreva algoritmo ANTES de programar. Use draw.io."
              },
              {
                "w": "Depuracao (debugging): encontrar e corrigir erros sistematicamente",
                "s": "debugging thinking | depuracao sistematica | how to debug systematically | Depuracao debugging encontrar tutorial portugues",
                "d": "Bug: erro no programa (Grace Hopper, 1947: mariposa real no computador). Depurar: ler o erro, isolar onde acontece, testar hipoteses, corrigir, testar de novo. Print debugging: colocar print() pra ver valores. Rubber duck: explicar o problema em voz alta."
              },
              {
                "w": "Complexidade intuitiva: por que alguns problemas sao mais dificeis",
                "s": "algorithm complexity intuition | por que algoritmos sao lentos | computational complexity basics | Complexidade intuitiva alguns tutorial portugues",
                "d": "Buscar em lista: olhar 1 por 1 (lento) vs dividir no meio (rapido). Ordenar: N comparacoes vs N*N. Intuicao agora, formalizacao depois em Big O."
              },
              {
                "w": "Simulacao e modelagem: representar o mundo real no computador",
                "s": "simulation modeling computational thinking | simulacao modelagem computacional | computational models | Simulacao modelagem representar tutorial portugues",
                "d": "Modelo: versao simplificada da realidade. Simulacao: rodar o modelo no computador. Exemplos: previsao do tempo, propagacao de doencas, mercado financeiro, fisica de jogos. Tudo comeca com: quais variaveis importam? Quais regras governam?"
              },
              {
                "w": "Pratica: CS Unplugged, Scratch, exercicios de logica (sem computador)",
                "s": "CS Unplugged activities | Scratch programming | logic exercises no computer | Pratica Unplugged Scratch tutorial portugues",
                "d": "CS Unplugged (csunplugged.org): atividades de computacao SEM computador (ordenacao com cartas, busca binaria com numeros). Scratch: programacao visual (arrastar blocos). Exercicios: sequencia logica, enigmas, puzzles. Construir intuicao ANTES de escrever codigo."
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
                "w": "O que e internet: ISP, roteadores, pacotes, IP",
                "s": "how internet works basics | como funciona internet | internet ISP packets routing | internet roteadores pacotes explained",
                "d": "Internet = rede de redes. Seu PC > roteador > ISP > backbone > servidor. Dados viajam em pacotes. IP: endereco do dispositivo (ex: 192.168.1.1)."
              },
              {
                "w": "DNS, HTTP/HTTPS, cliente-servidor, URLs",
                "s": "DNS explained | HTTP HTTPS client server | how websites work URL | HTTP/HTTPS cliente-servidor URLs tutorial portugues",
                "d": "Voce digita google.com > DNS traduz pra IP > navegador envia HTTP request > servidor responde HTML. HTTPS: criptografado (cadeado). URL: protocolo://dominio/caminho."
              },
              {
                "w": "WiFi, Ethernet, Bluetooth, enderecos MAC e IP",
                "s": "WiFi Ethernet Bluetooth explained | MAC address vs IP address | network basics | WiFi Ethernet Bluetooth tutorial portugues",
                "d": "WiFi: sem fio (802.11). Ethernet: cabo (mais estavel). Bluetooth: curto alcance. MAC: ID fisico da placa. IP: endereco logico na rede."
              },
              {
                "w": "Portas, protocolos de aplicacao: HTTP(80), HTTPS(443), SSH(22), FTP(21), SMTP(25)",
                "s": "network ports protocols | portas de rede protocolos | common ports HTTP SSH FTP | Portas protocolos aplicacao tutorial portugues",
                "d": "Porta = numero que identifica o servico. HTTP:80, HTTPS:443, SSH:22, FTP:21, SMTP:25 (email), DNS:53, MySQL:3306, PostgreSQL:5432. IP + porta = endereco completo. Firewall: bloquear/liberar portas. netstat/ss: ver portas abertas."
              },
              {
                "w": "Como email funciona: SMTP, IMAP, POP3, DNS MX records",
                "s": "how email works SMTP IMAP | como email funciona | email protocol SMTP MX record | Como email funciona explained",
                "d": "Enviar: SMTP (Simple Mail Transfer Protocol). Receber: IMAP (sincroniza, mantem no servidor) ou POP3 (baixa e remove). DNS MX: diz qual servidor recebe email do dominio. Spam: SPF/DKIM/DMARC verificam autenticidade. Email e um dos protocolos mais antigos da internet (1971)."
              },
              {
                "w": "O que acontece quando voce acessa um site (passo a passo)",
                "s": "what happens when you type URL | DNS lookup TCP handshake | web request lifecycle | acontece quando voce tutorial portugues",
                "d": "Digitar URL > DNS resolve IP > TCP handshake (3-way) > HTTP GET request > servidor processa > envia HTML/CSS/JS > navegador renderiza. Tudo em milissegundos."
              },
              {
                "w": "Seguranca basica da internet: HTTPS, criptografia, senhas, 2FA",
                "s": "internet security basics HTTPS passwords 2FA | seguranca internet basico | how HTTPS works simple | Seguranca basica internet tutorial portugues",
                "d": "HTTP: texto aberto (qualquer um no WiFi pode ler). HTTPS: criptografado (cadeado no navegador). Senhas: longas e unicas por site (use gerenciador: Bitwarden). 2FA: segundo fator (app ou chave fisica). Phishing: link falso que parece real. Verificar URL antes de digitar senha."
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
                "s": "what is operating system kernel | sistema operacional fundamentals | OS concepts | kernel processos filesystem tutorial portugues",
                "d": "SO gerencia hardware. Kernel = nucleo. Processo = programa rodando. Filesystem = organizacao de arquivos. O SO decide quem usa CPU e RAM."
              },
              {
                "w": "Boot process: BIOS/UEFI, bootloader (GRUB), kernel, init/systemd",
                "s": "boot process BIOS UEFI GRUB | processo boot computador | how computer boots | Boot process BIOS/UEFI tutorial portugues",
                "d": "Ligar PC → BIOS/UEFI (firmware, POST) → bootloader (GRUB: escolher SO) → kernel (carregar drivers, montar filesystem) → init/systemd (iniciar servicos). Dual boot: GRUB mostra menu pra escolher Windows ou Linux. UEFI: moderno, mais rapido que BIOS."
              },
              {
                "w": "Tipos de SO: Windows, Linux, macOS. Distribuicoes Linux",
                "s": "linux distributions comparison | tipos SO windows linux macOS | ubuntu vs mint vs fedora | Tipos Windows Linux tutorial portugues",
                "d": "Windows: mais usado desktop. Linux: servidores, dev, gratuito. macOS: Apple. Distros Linux: Ubuntu(iniciante), Mint(Windows-like), Fedora(bleeding edge), Arch(avancado)."
              },
              {
                "w": "Tipos de kernel: monolitico (Linux), microkernel (Minix), hibrido (Windows/macOS)",
                "s": "monolithic vs microkernel | tipos kernel monolitico micro | Linux kernel vs microkernel | Tipos kernel monolitico tutorial portugues",
                "d": "Monolitico (Linux): tudo no kernel (drivers, filesystem, rede). Rapido, menos isolamento. Microkernel (Minix, QNX): minimo no kernel, resto em user space. Mais seguro, mais lento. Hibrido (Windows NT, macOS XNU): mistura. Debate Torvalds vs Tanenbaum (1992): monolitico vs micro."
              },
              {
                "w": "Processos vs Threads, multitarefa, escalonamento",
                "s": "processes vs threads OS | multitasking scheduling | processos threads sistema operacional | Processos Threads multitarefa tutorial portugues",
                "d": "Processo: programa rodando com sua memoria. Thread: sub-processo (compartilha memoria). Multitarefa: SO alterna rapido. Escalonador: decide quem roda."
              },
              {
                "w": "Gerenciamento de memoria: RAM, swap, memoria virtual",
                "s": "memory management OS | virtual memory swap | gerenciamento memoria sistema operacional | Gerenciamento memoria swap tutorial portugues",
                "d": "RAM dividida entre processos. Swap: usa disco quando RAM enche (lento). Memoria virtual: cada processo acha que tem toda RAM pra si."
              },
              {
                "w": "Device drivers: como SO conversa com hardware, conceito de abstracoes",
                "s": "device drivers concept | drivers hardware SO | operating system hardware abstraction | Device drivers como tutorial portugues",
                "d": "Driver: software que traduz pedidos do SO pra linguagem do hardware. SO nao precisa saber detalhes de cada placa de video — o driver abstrai. Abstracoes: arquivo (disco), socket (rede), process (CPU). SO = camada de abstracoes sobre hardware."
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
                "s": "install ubuntu dual boot | linux virtual machine VirtualBox | WSL2 windows | Instalar Linux dual tutorial portugues",
                "d": "VM (VirtualBox) = mais seguro pra comecar. Dual boot = melhor performance. WSL2 = Linux dentro do Windows. Ubuntu ou Mint pra iniciantes."
              },
              {
                "w": "Filesystem Linux: /, /home, /etc, /var, /tmp, /usr, /bin",
                "s": "linux filesystem hierarchy | estrutura diretorios linux | linux directory structure | Filesystem Linux /home tutorial portugues",
                "d": "/ = raiz. /home = seus arquivos. /etc = configuracoes. /var = logs. /tmp = temporarios. /usr = programas. Tudo e arquivo no Linux, ate dispositivos!"
              },
              {
                "w": "Comandos essenciais: ls, cd, mkdir, cp, mv, rm, cat, grep, find, chmod, sudo",
                "s": "linux terminal commands beginners | comandos linux essenciais terminal | linux CLI tutorial | Comandos essenciais mkdir explained",
                "d": "ls (listar), cd (navegar), pwd (onde estou), mkdir (criar pasta), cp/mv/rm, cat/less/head/tail, grep (buscar texto), find (buscar arquivo), chmod (permissoes), sudo (admin)."
              },
              {
                "w": "Editores no terminal: nano (facil) e vim (poderoso)",
                "s": "nano editor tutorial | vim basics tutorial | linux text editors terminal | Editores terminal nano explained",
                "d": "nano: Ctrl+O salvar, Ctrl+X sair. Simples. vim: i(inserir), Esc(sair modo), :wq(salvar+sair), :q!(sair sem salvar). Curva ingreme mas vale aprender o basico."
              },
              {
                "w": "Pacotes: apt, snap, flatpak. Repositorios e PPAs",
                "s": "apt package manager ubuntu | linux package management | snap flatpak comparison | Pacotes snap flatpak. tutorial portugues",
                "d": "apt update/upgrade/install/remove. snap/flatpak: apps empacotados. PPA: repositorios extras. Sempre apt update antes de apt install."
              },
              {
                "w": "Processos: ps, top/htop, kill, systemctl, cron",
                "s": "linux processes ps top kill | systemctl services | crontab scheduled tasks | Processos top/htop kill tutorial portugues",
                "d": "ps aux lista. top/htop monitora. kill PID. systemctl start/stop/enable servicos. cron: agendar tarefas (crontab -e)."
              },
              {
                "w": "Permissoes rwx, usuarios, grupos, chown",
                "s": "linux permissions rwx chmod chown | linux users groups | file permissions | Permissoes usuarios grupos tutorial portugues",
                "d": "rwx = read/write/execute pra owner/group/others. chmod 755. chown user:group arquivo. Grupos: compartilhar acesso."
              },
              {
                "w": "Variaveis de ambiente, PATH, .bashrc/.zshrc",
                "s": "environment variables PATH linux | bashrc zshrc config | linux shell configuration | Variaveis ambiente PATH tutorial portugues",
                "d": "export VAR=valor. $PATH diz onde achar executaveis. ~/.bashrc carrega ao abrir terminal. Aliases: alias ll='ls -la'."
              },
              {
                "w": "Shell scripting: bash, pipes, redirecionamento, condicoes",
                "s": "bash scripting tutorial | linux pipes redirection | shell script if for while | Shell scripting bash explained",
                "d": "#!/bin/bash. chmod +x script.sh. Pipes: ls | grep .py. > (sobrescreve) >> (adiciona). if/then/fi. for f in *.txt; do ... done."
              },
              {
                "w": "SSH, SCP, chaves publicas/privadas",
                "s": "SSH tutorial beginners | SSH key pair | SCP file transfer linux | chaves publicas/privadas explained",
                "d": "ssh user@servidor. ssh-keygen -t ed25519. Copiar chave: ssh-copy-id. SCP: scp arquivo user@host:/caminho. Mais seguro que senha."
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
                "s": "install python 3.12 VS Code setup 2025 | configurar python vscode | Instalar Python 3.12+ tutorial 2025 | Instalar Python 3.12+ explained",
                "d": "python.org/downloads. Windows: marque Add to PATH. Linux: sudo apt install python3. VS Code + extensao Python (Microsoft). Teste: python3 -c \"print('Oi')\""
              },
              {
                "w": "REPL interativo e Jupyter Notebook",
                "s": "python REPL interactive | jupyter notebook tutorial | google colab python | REPL interativo Jupyter explained",
                "d": "python3 no terminal = modo interativo (>>>). Jupyter: pip install notebook. Google Colab: online gratis."
              },
              {
                "w": "Variaveis, tipos (int, float, str, bool, None), type()",
                "s": "python variables data types | variaveis tipos python | python type function | Variaveis tipos float tutorial portugues",
                "d": "nome='Kaio'(str), idade=20(int), pi=3.14(float), ativo=True(bool), vazio=None. type(x) mostra tipo. Tipagem dinamica."
              },
              {
                "w": "Operadores: aritmeticos, comparacao, logicos, atribuicao",
                "s": "python operators arithmetic comparison logical | operadores python | python == != and or not | Operadores aritmeticos comparacao tutorial portugues",
                "d": "+ - * / // % **. == != > < >= <=. and or not. = += -= *=. CUIDADO: = vs ==."
              },
              {
                "w": "input(), print(), f-strings",
                "s": "python input print f-string | entrada saida python | python string formatting | input print f-strings tutorial portugues",
                "d": "print(f'Tenho {idade} anos'). input() retorna STRING, converta: int(input('Num: ')). f'{preco:.2f}' = 2 decimais."
              },
              {
                "w": "Comentarios, boas praticas de nomeacao, PEP 8",
                "s": "python comments PEP 8 style | comentarios python boas praticas | PEP 8 style guide | python naming conventions",
                "d": "# comentario. '''docstring'''. PEP 8: guia de estilo oficial. snake_case pra variaveis/funcoes, PascalCase pra classes. 4 espacos de indentacao. Linhas ate 79 chars. Use linter (flake8/ruff) pra checar automaticamente."
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
                "s": "python strings basics immutable | strings python criacao concatenacao | python escape characters | Criacao concatenacao repeticao tutorial portugues",
                "d": "'Oi' + ' mundo' = 'Oi mundo'. 'ha'*3 = 'hahaha'. Multilinha: '''texto'''. Strings sao IMUTAVEIS (s[0]='X' da erro). Raw strings: r'\\n' (nao interpreta). Escape: \\n (nova linha), \\t (tab), \\\\ (barra), \\' (aspas)."
              },
              {
                "w": "Indexacao, fatiamento: s[0], s[2:5], s[::-1]",
                "s": "python string slicing indexing | fatiamento strings python | python slice | Indexacao fatiamento s[0] tutorial portugues",
                "d": "s[0]=primeiro, s[-1]=ultimo, s[2:5]=2 ao 4, s[::-1]=invertida. Indice comeca em 0! Strings sao IMUTAVEIS."
              },
              {
                "w": "Metodos: upper, lower, strip, split, join, replace, find, count, in",
                "s": "python string methods | metodos string python | python split join replace | Metodos upper lower tutorial portugues",
                "d": ".upper() .lower() .strip() .split(',') .join() .replace() .find() .count(). 'py' in 'python'=True."
              },
              {
                "w": "Encoding: ASCII, UTF-8, bytes vs str, encode/decode",
                "s": "python encoding UTF-8 bytes str | python unicode encoding | python bytes vs string | Encoding ASCII UTF-8 tutorial portugues",
                "d": "ASCII: 128 caracteres (ingles). UTF-8: suporta todos idiomas + emojis. Python 3: str = Unicode, bytes = sequencia de bytes. 'oi'.encode('utf-8') → b'oi'. b'oi'.decode('utf-8') → 'oi'. Importante pra arquivos, APIs, web scraping."
              },
              {
                "w": "F-strings avancadas e regex basico (modulo re)",
                "s": "python f-string advanced | python regex re module | expressoes regulares python | F-strings avancadas regex tutorial portugues",
                "d": "f'{val:.2f}' f'{val:,}'. import re. re.findall(r'\\d+', texto). Padroes: \\d \\w \\s . + * ?."
              },
              {
                "w": "String formatting completo: f-string, .format(), % operator, template strings",
                "s": "python string formatting complete | python f-string vs format | python string template | String formatting completo tutorial portugues",
                "d": "f'{nome}' (melhor, Python 3.6+). '{}'.format(nome) (Python 3). '%s' % nome (antigo, evite). f'{preco:.2f}' (decimais), f'{num:>10}' (alinhar), f'{pct:.1%}' (percentual). Template: from string import Template (quando input vem do usuario — mais seguro)."
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
                "s": "python if elif else tutorial | condicionais python | python conditional statements | elif else indentacao explained",
                "d": "if cond: (4 espacos). elif: (senao se). else: (senao). Ternario: x='par' if n%2==0 else 'impar'. match-case (3.10+)."
              },
              {
                "w": "for: range(), enumerate(), zip()",
                "s": "python for loop range enumerate zip | loop for python | python iterate | range enumerate tutorial portugues",
                "d": "for i in range(10): (0 a 9). enumerate(): indice+valor. zip(): 2 listas em paralelo. range(start,stop,step)."
              },
              {
                "w": "while, break, continue, else em loops",
                "s": "python while break continue | loop while python | python loop else | while break continue tutorial portugues",
                "d": "while cond: repete. break: sai. continue: pula. for...else: roda se NAO houve break. Cuidado loop infinito!"
              },
              {
                "w": "Loops aninhados e padroes comuns",
                "s": "python nested loops patterns | loops aninhados python | python loop exercises | Loops aninhados padroes tutorial portugues",
                "d": "for i in range(3): for j in range(3): = O(n2). Exercicio: piramide de *, tabuada, pattern printing."
              },
              {
                "w": "Operador ternario, match-case (Python 3.10+), walrus operator (:=)",
                "s": "python ternary operator match case | python walrus operator | python 3.10 match case | operador ternario python",
                "d": "Ternario: x = 'par' if n%2==0 else 'impar'. Match-case: match status: case 200: 'ok' case 404: 'not found'. Walrus: if (n := len(lista)) > 10: print(f'{n} items'). Usar com moderacao — legibilidade primeiro."
              },
              {
                "w": "Exercicios praticos: FizzBuzz, triangulo de Pascal, sequencia Collatz",
                "s": "python exercises FizzBuzz | exercicios python iniciante | python practice problems | Collatz sequence python",
                "d": "FizzBuzz: classico de entrevista. Triangulo Pascal: combinatoria. Collatz: se par divide por 2, se impar 3n+1 (sempre chega em 1?). Pratique: HackerRank Easy, Beecrowd, Exercism. 1 exercicio/dia no inicio."
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
                "s": "python lists tutorial | listas python metodos | python list operations | Listas criacao indexacao explained",
                "d": "nums=[1,2,3]. .append .insert .pop .remove .sort .reverse .index len(). Fatiamento. Mutaveis."
              },
              {
                "w": "Tuplas: imutaveis, unpacking, namedtuple",
                "s": "python tuples unpacking | tuplas python | python namedtuple | Tuplas imutaveis unpacking tutorial portugues",
                "d": "t=(1,2,3). Imutavel. a,b,c=t. Usar pra coordenadas, retornos multiplos, chaves de dict."
              },
              {
                "w": "Dicionarios: chave-valor, metodos, iteracao",
                "s": "python dict tutorial | dicionarios python | python dictionary methods | Dicionarios chave-valor metodos explained",
                "d": "d={'nome':'Kaio'}. d.get('x','default'). .keys() .values() .items(). for k,v in d.items():. O(1)."
              },
              {
                "w": "Sets: sem duplicatas, operacoes de conjunto",
                "s": "python sets operations | sets python | python set union intersection | Sets duplicatas operacoes tutorial portugues",
                "d": "s={1,2,3}. | (uniao) & (intersecao) - (diferenca). x in s = O(1)."
              },
              {
                "w": "Comprehensions e desempacotamento (*)",
                "s": "python comprehensions | list dict set comprehension | python unpacking star | Comprehensions desempacotamento tutorial portugues",
                "d": "[x**2 for x in range(10)]. {k:v for ...}. a,*rest=[1,2,3,4]. a,b=b,a."
              },
              {
                "w": "Escolher a estrutura certa: quando usar list vs tuple vs dict vs set",
                "s": "python when to use list tuple dict set | escolher estrutura dados python | python data structure comparison | list vs dict performance python",
                "d": "Lista: colecao ordenada mutavel. Tupla: imutavel (chaves de dict, retorno multiplo). Dict: lookup por chave O(1). Set: unicidade, pertinencia O(1). Regra: se precisa de ordem → list/tuple. Se precisa buscar por chave → dict. Se precisa checar 'esta em?' → set."
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
                "s": "python functions def return | funcoes python parametros | python docstrings | parametros return docstrings tutorial portugues",
                "d": "def media(notas): '''Calcula media.''' return sum(notas)/len(notas). Uma funcao faz UMA coisa."
              },
              {
                "w": "Default, *args, **kwargs, escopo LEGB",
                "s": "python args kwargs default | python scope LEGB | python function arguments | Default *args **kwargs tutorial portugues",
                "d": "def f(x,y=10). *args: tupla. **kwargs: dict. LEGB: Local>Enclosing>Global>Built-in."
              },
              {
                "w": "Lambda, funcoes como objetos, decorators",
                "s": "python lambda decorators | python first class functions | python decorator tutorial | Lambda funcoes como explained",
                "d": "lambda x: x*2. Funcoes sao objetos. @decorator = wrapper. @property @staticmethod."
              },
              {
                "w": "Recursao: caso base, caso recursivo",
                "s": "python recursion tutorial | recursao python | recursive functions factorial fibonacci | Recursao caso base explained",
                "d": "Funcao chama a si mesma. Caso base + caso recursivo. factorial, fibonacci, torre de Hanoi. Limite ~1000."
              },
              {
                "w": "Funcoes built-in uteis: map, filter, sorted, zip, enumerate, any, all, min, max",
                "s": "python built-in functions map filter | funcoes built-in python | python sorted zip enumerate | python any all functions",
                "d": "map(func, iterable): aplicar funcao a cada item. filter(func, iterable): filtrar. sorted(iterable, key=func). any(): pelo menos 1 True. all(): todos True. min/max com key. Combinadas com lambda sao poderosas. Mas comprehension e geralmente mais legivel."
              },
              {
                "w": "Type hints basicos e documentacao: -> int, : str, docstrings Google style",
                "s": "python type hints basics | type hints python tutorial | python docstring Google style | python function documentation",
                "d": "def soma(a: int, b: int) -> int: '''Soma dois numeros.'''. Type hints NAO fazem checagem em runtime — sao documentacao. Google style docstring: Args, Returns, Raises. Ajuda IDEs, ajuda colegas, ajuda voce daqui 3 meses."
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
                "s": "python file handling json csv | ler escrever arquivos python | python pathlib | Ler/escrever with open tutorial portugues",
                "d": "with open('arq','r') as f: f.read(). json.load/dump. csv.DictReader. Path().exists()."
              },
              {
                "w": "try/except/else/finally, excecoes customizadas",
                "s": "python error handling try except | tratamento excecoes python | python custom exception | try/except/else/finally excecoes customizadas tutorial portugues",
                "d": "try: arriscado / except ValueError: tratar / else: se ok / finally: sempre. raise CustomError()."
              },
              {
                "w": "Modulos, imports, pip, venv (ambientes virtuais)",
                "s": "python modules imports pip venv | ambiente virtual python | python virtual environment | Modulos imports venv tutorial portugues",
                "d": "import math. pip install pacote. python3 -m venv .venv. requirements.txt. NUNCA instale globalmente."
              },
              {
                "w": "Biblioteca padrao: os, sys, math, random, datetime, collections, itertools",
                "s": "python standard library useful modules | biblioteca padrao python | python os sys random datetime | Biblioteca padrao math tutorial portugues",
                "d": "os: sistema. math: sqrt,pi. random: randint,choice. datetime: now,strftime. collections: Counter,defaultdict,deque."
              },
              {
                "w": "Trabalhando com APIs: requests, response, status codes, JSON parsing",
                "s": "python requests library API | python API tutorial requests | python parse JSON API | consuming REST API python",
                "d": "pip install requests. r = requests.get(url). r.status_code, r.json(). POST: requests.post(url, json=data). Headers: requests.get(url, headers={'Authorization': 'Bearer token'}). Exercicio: consumir PokeAPI, GitHub API, OpenWeather."
              },
              {
                "w": "Web scraping basico: BeautifulSoup, seletores CSS, etica de scraping",
                "s": "python BeautifulSoup web scraping | web scraping python tutorial | beautiful soup css selectors | ethical web scraping",
                "d": "pip install beautifulsoup4 requests. soup = BeautifulSoup(html, 'html.parser'). soup.find('h1'), soup.select('.classe'), soup.find_all('a'). Etica: respeite robots.txt, nao sobrecarregue servidores, use rate limiting. Alternativa: Selenium pra sites dinamicos."
              },
              {
                "w": "Debugging em Python: print debugging, debugger do VS Code (breakpoints, step, watch), pdb, logging básico",
                "s": "Python debugging | VS Code debugger | breakpoint | step | pdb | logging",
                "d": "Debugging é skill essencial: print() é o básico, mas debugger do VS Code mostra variáveis em tempo real. pdb para terminal. logging > print em projetos reais"
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
                "s": "python calculator project | projeto calculadora python | python beginner project | Projeto Calculadora menu tutorial portugues",
                "d": "Menu interativo, funcoes por operacao, historico, salvar em arquivo. Exercita: input, condicionais, funcoes, loops, arquivos."
              },
              {
                "w": "Projeto 2: Jogo (adivinhacao / forca / quiz)",
                "s": "python game project | jogo forca python | python text game | Projeto Jogo adivinhacao tutorial portugues",
                "d": "random + dicas + pontuacao. Exercita: random, loops, strings, listas."
              },
              {
                "w": "Projeto 3: Gerenciador CRUD com JSON",
                "s": "python CRUD json project | gerenciador tarefas python | python todo list | Projeto Gerenciador CRUD tutorial portugues",
                "d": "Adicionar, listar, buscar, editar, remover + JSON. Seu primeiro CRUD!"
              },
              {
                "w": "Projeto 4: Consumir API publica com requests",
                "s": "python requests API project | python consume API | python API tutorial | Projeto Consumir publica explained",
                "d": "pip install requests. PokeAPI, GitHub API, OpenWeather. Processar JSON. Exercita: pip, requests, dicts."
              },
              {
                "w": "Projeto 5: Automatizar tarefa chata",
                "s": "python automation project | automatizar tarefas python | python script automate | Projeto Automatizar tarefa tutorial portugues",
                "d": "Renomear arquivos, organizar downloads, web scraping (BeautifulSoup), enviar emails. AUTOMACAO = superpoder."
              },
              {
                "w": "Projeto 6: CLI tool com argparse ou click (ferramenta de terminal propria)",
                "s": "python CLI tool argparse click | python command line tool project | python argparse tutorial | build CLI python",
                "d": "Criar ferramenta de terminal: conversor de unidades, gerador de senhas, organizador de arquivos. argparse (built-in) ou click (mais elegante). Publicar no PyPI = portfolio. Exercita: modulos, CLI, empacotamento."
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
                "s": "arithmetic fractions percentages | aritmetica fracoes porcentagem | math review basics | Aritmetica fracoes porcentagem tutorial portugues",
                "d": "1/2 + 1/3 = 5/6. 25% de 200 = 50. Proporcao direta/inversa. Notacao cientifica: 3.2 x 10^6. Esses sao blocos basicos pra TUDO que vem depois."
              },
              {
                "w": "Algebra basica: equacoes, inequacoes, fatoracao, polinomios",
                "s": "algebra basics equations | algebra basica equacoes | solving linear quadratic equations | Algebra basica equacoes tutorial portugues",
                "d": "2x + 3 = 7 -> x=2. Fatorar: x2-4=(x+2)(x-2). Bhaskara: x=(-b+-sqrt(b2-4ac))/2a. Se nao dominar isso, calculo vai ser impossivel."
              },
              {
                "w": "Funcoes: conceito, dominio, imagem, grafico, tipos (linear, quadratica, exponencial, log)",
                "s": "functions math domain range graph | funcoes matematica tipos graficos | linear quadratic exponential | Funcoes conceito dominio tutorial portugues",
                "d": "f(x) = regra que transforma entrada em saida. Linear: reta. Quadratica: parabola. Exponencial: crescimento rapido. Log: inversa da exponencial. ENTENDA graficos!"
              },
              {
                "w": "Trigonometria basica: sen, cos, tan, circulo unitario",
                "s": "trigonometry basics sin cos tan | trigonometria basica | unit circle tutorial | Trigonometria basica circulo explained",
                "d": "SOH-CAH-TOA. Circulo unitario: sen=y, cos=x. Radianos: pi=180. Identidades: sen2+cos2=1. Aparece em sinais, rotacoes, ondas."
              },
              {
                "w": "Geometria analitica: plano cartesiano, distancia, reta, circunferencia",
                "s": "analytic geometry basics | geometria analitica plano cartesiano | coordinate geometry | Geometria analitica plano tutorial portugues",
                "d": "Ponto (x,y). Distancia entre pontos. Equacao da reta: y=mx+b. Coeficiente angular = inclinacao. Circunferencia: (x-a)2+(y-b)2=r2."
              },
              {
                "w": "Sequencias, series e somatorios (notacao sigma)",
                "s": "sequences series summation notation | sequencias series somatorio | sigma notation math | Sequencias series somatorios tutorial portugues",
                "d": "Aritmetica: a, a+d, a+2d. Geometrica: a, ar, ar2. Somatorio: Sigma de i=1 ate n de f(i). PA e PG. Fatorial: 5!=120. Precisa pra analise de algoritmos e probabilidade."
              },
              {
                "w": "Logaritmos: propriedades, log base 10, ln, log base 2 (essencial em CS)",
                "s": "logarithms properties log base 2 | logaritmos propriedades | log base 2 computer science | Logaritmos propriedades base tutorial portugues",
                "d": "log_b(x) = 'quantas vezes multiplico b pra chegar em x'. log2(8)=3. Propriedades: log(ab)=log(a)+log(b), log(a^n)=n*log(a). Em CS: log2 aparece SEMPRE (busca binaria O(log n), arvores, bits necessarios). ln: base e (calculo). log10: notacao cientifica."
              },
              {
                "w": "Matrizes 2x2 intro: soma, multiplicacao, determinante (preview pra algebra linear)",
                "s": "matrices 2x2 introduction | matrizes 2x2 basico | matrix multiplication simple | Matrizes intro soma tutorial portugues",
                "d": "Matriz = tabela de numeros. [[1,2],[3,4]]. Soma: elemento a elemento. Multiplicacao: linha x coluna (AB != BA!). Determinante 2x2: ad-bc. Se det=0, nao tem inversa. Preview: algebra linear no proximo nivel aprofunda. Transformacoes geometricas: rotacao, escala."
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
                "s": "propositional logic truth tables | logica proposicional tabela verdade | discrete math logic | Logica Proposicional tabelas tutorial portugues",
                "d": "Conectivos: AND OR NOT -> <->. Tabelas verdade. De Morgan: NOT(A AND B) = (NOT A) OR (NOT B). Diretamente aplicavel a if/and/or em codigo."
              },
              {
                "w": "Logica de Predicados: quantificadores universal e existencial",
                "s": "predicate logic quantifiers | logica predicados quantificadores | forall exists logic | Logica Predicados quantificadores tutorial portugues",
                "d": "Para todo (universal): todo aluno tem nota. Existe (existencial): existe aluno com nota 10. Base de queries SQL e provas formais."
              },
              {
                "w": "Teoria dos Conjuntos: operacoes, diagramas de Venn, complemento",
                "s": "set theory operations Venn | teoria conjuntos operacoes | sets math basics | Teoria Conjuntos operacoes tutorial portugues",
                "d": "Uniao, intersecao, diferenca, complemento. Diagramas de Venn. Pertinencia (esta em), subconjunto (contido em). Base dos tipos de dados Set."
              },
              {
                "w": "Funcoes e Relacoes: injetora, sobrejetora, bijetora, equivalencia",
                "s": "functions relations discrete math | funcoes injetora sobrejetora bijetora | equivalence relations | Funcoes Relacoes injetora tutorial portugues",
                "d": "Funcao: cada entrada tem 1 saida. Injetora: entradas diferentes, saidas diferentes. Sobrejetora: cobre toda imagem. Bijetora: ambas. Relacao de equivalencia: reflexiva+simetrica+transitiva."
              },
              {
                "w": "Inducao matematica: base + passo indutivo",
                "s": "mathematical induction tutorial | inducao matematica | proof by induction examples | Inducao matematica base explained",
                "d": "Provar pra n=1 (base). Assumir verdade pra k, provar pra k+1 (passo). Prova que algo vale pra TODOS os naturais. Fundamental pra provar correcao de algoritmos."
              },
              {
                "w": "Contagem: permutacao, combinacao, principio multiplicativo, pigeonhole",
                "s": "permutations combinations counting | permutacao combinacao | combinatorics basics | Contagem permutacao combinacao tutorial portugues",
                "d": "P(n,k)=n!/(n-k)!. C(n,k)=n!/(k!(n-k)!). Multiplicativo: 3 camisas x 2 calcas = 6 looks. Pigeonhole: se 13 pessoas, pelo menos 2 nascem no mesmo mes."
              },
              {
                "w": "Teoria dos Grafos intro: vertices, arestas, grau, caminhos, ciclos, arvores",
                "s": "graph theory basics | teoria grafos vertices arestas | graphs paths cycles trees | Teoria Grafos intro tutorial portugues",
                "d": "Grafo = vertices + arestas. Grau: quantas arestas. Caminho: sequencia de vertices. Ciclo: caminho fechado. Arvore: grafo conexo sem ciclo. Base de redes sociais, mapas, algoritmos."
              },
              {
                "w": "Relacoes de recorrencia: Fibonacci, Torre de Hanoi",
                "s": "recurrence relations Fibonacci | relacoes recorrencia | recurrence relation examples | Relacoes recorrencia Fibonacci tutorial portugues",
                "d": "T(n) = T(n-1) + T(n-2) (Fibonacci). T(n) = 2T(n-1)+1 (Hanoi). Resolve com arvore de recursao ou teorema mestre. Liga matematica com programacao."
              },
              {
                "w": "Teoria dos numeros basica: divisibilidade, MDC, MMC, numeros primos, congruencia modular",
                "s": "number theory basics GCD primes | teoria numeros MDC primos | modular arithmetic | Teoria numeros basica tutorial portugues",
                "d": "MDC (Euclides): gcd(a,b) = gcd(b, a%b). Primos: divisiveis so por 1 e si. Crivo de Eratostenes. Congruencia modular: a ≡ b (mod n). Aplicacao DIRETA: criptografia RSA usa primos grandes. Hash functions. Relogio: 15h = 3h (mod 12)."
              },
              {
                "w": "Logica aplicada a programacao: predicados como funcoes, provas como programas",
                "s": "logic programming connection | Curry-Howard correspondence | logic proofs algorithms | Logica aplicada programacao tutorial portugues",
                "d": "Proposicao = tipo. Prova = programa. IF = implicacao. AND = tupla. OR = union. Curry-Howard: correspondencia profunda entre logica e programacao. Pratico: escrever assert em testes = provar propriedade. Type systems = logica. Entender logica = escrever codigo mais correto."
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
                "s": "probability basics sample space event | probabilidade conceitos basicos | probability fundamentals | Conceitos experimento espaco tutorial portugues",
                "d": "Experimento: jogar dado. Espaco amostral: {1,2,3,4,5,6}. Evento: sair par = {2,4,6}. Frequencia relativa: repetir e contar. Probabilidade = casos favoraveis / total."
              },
              {
                "w": "Probabilidade: regra da soma, produto, complementar",
                "s": "probability rules addition multiplication | regras probabilidade soma produto | probability complement | Probabilidade regra soma tutorial portugues",
                "d": "P(A ou B) = P(A)+P(B)-P(A e B). P(A e B) = P(A)*P(B|A). Complementar: P(nao A) = 1-P(A). Independencia: P(A e B) = P(A)*P(B)."
              },
              {
                "w": "Probabilidade condicional e Teorema de Bayes (intro)",
                "s": "conditional probability Bayes theorem intro | probabilidade condicional Bayes | Bayes beginner | Probabilidade condicional Teorema tutorial portugues",
                "d": "P(A|B) = P(B|A)*P(A)/P(B). Exemplo: teste medico positivo, qual chance de ter doenca? Bayes atualiza crencas com evidencia. Base de filtros de spam, diagnostico."
              },
              {
                "w": "Estatistica descritiva: media, mediana, moda, variancia, desvio padrao",
                "s": "descriptive statistics mean median mode variance | estatistica descritiva media variancia | standard deviation | Estatistica descritiva media tutorial portugues",
                "d": "Media: soma/n. Mediana: valor do meio. Moda: mais frequente. Variancia: dispersao. Desvio padrao: raiz da variancia. Histograma, boxplot. Sempre olhe os dados antes de modelar."
              },
              {
                "w": "Distribuicao Normal (Gaussiana): curva de sino, 68-95-99.7",
                "s": "normal distribution bell curve | distribuicao normal gaussiana | 68 95 99 rule | Distribuicao Normal Gaussiana tutorial portugues",
                "d": "Media=centro, desvio padrao=largura. 68% dentro de 1 sigma, 95% em 2, 99.7% em 3. Aparece em TUDO: notas, alturas, erros de medicao, ruido. Teorema Central do Limite: medias tendem a Normal."
              },
              {
                "w": "Graficos e visualizacao de dados: histograma, boxplot, scatter, correlacao",
                "s": "data visualization histogram boxplot scatter | visualizacao dados graficos | correlation coefficient | Graficos visualizacao dados tutorial portugues",
                "d": "Histograma: distribuicao. Boxplot: mediana+quartis+outliers. Scatter: relacao entre 2 variaveis. Correlacao: -1 a +1 (forca da relacao LINEAR). Correlacao != causalidade!"
              },
              {
                "w": "Combinatoria aplicada: counting problems, lottery, poker, birthday paradox",
                "s": "combinatorics applied problems | birthday paradox | counting probability problems | Combinatoria aplicada counting tutorial portugues",
                "d": "Lottery: C(60,6) = 50 milhoes de combinacoes. Poker: flush = C(4,1)*C(13,5)/C(52,5). Birthday paradox: com 23 pessoas, >50% chance de 2 terem mesmo aniversario! Contra-intuitivo. Aplicacao: hash collisions, security (brute force), randomized algorithms."
              },
              {
                "w": "Introducao a simulacao: Monte Carlo, random sampling, Lei dos Grandes Numeros",
                "s": "Monte Carlo simulation | random sampling probability | law of large numbers | Introducao simulacao Monte tutorial portugues",
                "d": "Monte Carlo: estimar resultado com simulacao aleatoria. Exemplo: estimar pi jogando dardos num quadrado com circulo inscrito. Lei dos Grandes Numeros: mais tentativas = media se aproxima do valor real. Python: import random, simular 1 milhao de vezes. Intuicao > formulas no inicio."
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
                "s": "limits calculus intuition | limites calculo 1 | limits properties lateral | Limites intuicao propriedades tutorial portugues",
                "d": "Limite = valor que f(x) se aproxima quando x tende a c. Propriedades: soma, produto, quociente. Laterais: pela esquerda e direita. Limites infinitos: assintotas."
              },
              {
                "w": "Limites: tecnicas de resolucao (substituicao, fatoracao, L'Hopital)",
                "s": "limit solving techniques | resolver limites calculo | L'Hopital rule indeterminate | Limites tecnicas resolucao tutorial portugues",
                "d": "Substituicao direta (se nao der 0/0). Fatoracao. Racionalizacao. L'Hopital: derivar em cima e embaixo quando 0/0 ou inf/inf. Limites notaveis: sen(x)/x->1."
              },
              {
                "w": "Continuidade: definicao, tipos de descontinuidade",
                "s": "continuity calculus | continuidade funcoes calculo | types of discontinuity | Continuidade definicao tipos tutorial portugues",
                "d": "Continua em c: f(c) existe, lim existe, lim = f(c). Descontinuidade: removivel (furo), salto, infinita. TVI: se continua e f(a)<0<f(b), existe raiz entre a e b."
              },
              {
                "w": "Derivadas: definicao, interpretacao geometrica (reta tangente), taxa de variacao",
                "s": "derivatives definition tangent line | derivadas definicao reta tangente | rate of change calculus | Derivadas definicao interpretacao tutorial portugues",
                "d": "Derivada = limite da razao incremental = inclinacao da reta tangente = taxa de variacao instantanea. f'(x) = lim (f(x+h)-f(x))/h. Velocidade = derivada da posicao."
              },
              {
                "w": "Regras de derivacao: potencia, produto, quociente, cadeia",
                "s": "derivative rules power product quotient chain | regras derivacao | chain rule calculus | Regras derivacao potencia tutorial portugues",
                "d": "Potencia: (x^n)'=nx^(n-1). Produto: (fg)'=f'g+fg'. Quociente: (f/g)'=(f'g-fg')/g2. Cadeia: (f(g(x)))'=f'(g(x))*g'(x). CADEIA e a mais importante!"
              },
              {
                "w": "Derivadas de trig, exponencial, log",
                "s": "derivative trigonometric exponential logarithm | derivadas trig exp log | Derivadas trig exponencial tutorial 2025 | Derivadas trig exponencial explained",
                "d": "(sen x)'=cos x. (cos x)'=-sen x. (e^x)'=e^x. (ln x)'=1/x. (a^x)'=a^x ln a. Combinando com regra da cadeia resolve quase tudo."
              },
              {
                "w": "Aplicacoes: max/min, otimizacao, taxas relacionadas",
                "s": "calculus optimization max min | aplicacoes derivadas otimizacao | related rates | Aplicacoes max/min otimizacao tutorial portugues",
                "d": "f'=0 nos pontos criticos. f''>0 minimo, f''<0 maximo. Otimizacao: maximizar area/minimizar custo. Gradiente descendente em ML e derivada pura!"
              },
              {
                "w": "Integrais: anti-derivada, integral definida, TFC",
                "s": "integrals antiderivative definite | integral definida TFC | fundamental theorem calculus | Integrais anti-derivada integral tutorial portugues",
                "d": "Integral indefinida = anti-derivada + C. Integral definida = area sob a curva. TFC: integral de a ate b de f(x)dx = F(b)-F(a). Liga derivada com integral."
              },
              {
                "w": "Tecnicas de integracao: substituicao, partes, fracoes parciais",
                "s": "integration techniques substitution parts | tecnicas integracao | integration by parts substitution | Tecnicas integracao substituicao tutorial portugues",
                "d": "Substituicao: u=g(x). Partes: integral(u dv)=uv-integral(v du). Fracoes parciais: decompor racional. Integrais trig. Aplicacao em probabilidade: P(a<X<b) = integral de f(x)."
              },
              {
                "w": "Teorema do Valor Medio, Rolle, Teorema Fundamental: interpretacoes e aplicacoes",
                "s": "mean value theorem Rolle | teorema valor medio | fundamental theorem calculus applications | Teorema Valor Medio tutorial portugues",
                "d": "TVM: existe ponto onde derivada = taxa media. Rolle: se f(a)=f(b), existe c com f'(c)=0. TFC: integral e anti-derivada = area. Interpretacao: velocidade media = velocidade instantanea em algum momento. Conecta derivadas e integrais."
              },
              {
                "w": "Graficos de funcoes: crescimento, concavidade, pontos de inflexao, assintotas",
                "s": "curve sketching calculus | analise grafica funcoes | asymptotes inflection points | Graficos funcoes crescimento tutorial portugues",
                "d": "f'>0: crescente. f'<0: decrescente. f''>0: concava pra cima. f''<0: concava pra baixo. f''=0: ponto de inflexao. Assintotas: horizontal (lim x→∞), vertical (lim x→a = ∞). Sketch: dominio → assint → criticos → inflexao → grafico. Visualizar e entender."
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
                "s": "infinite series convergence Taylor series | series infinitas convergencia Taylor | power series calculus | Series infinitas convergencia tutorial portugues",
                "d": "Serie = soma infinita. Converge ou diverge? Testes: razao, raiz, comparacao. Serie de Taylor: aproximar funcoes por polinomios. e^x = 1+x+x2/2!+... Usado em computacao numerica."
              },
              {
                "w": "Equacoes diferenciais de 1a ordem: separaveis, lineares, fator integrante",
                "s": "first order ODE separable linear | equacoes diferenciais 1a ordem | ODE solving techniques | Equacoes diferenciais ordem tutorial portugues",
                "d": "dy/dx = f(x,y). Separavel: separar x e y, integrar. Linear: y'+P(x)y=Q(x), fator integrante. Modela: crescimento populacional, circuitos RC, resfriamento (Newton)."
              },
              {
                "w": "EDOs de 2a ordem: coeficientes constantes, oscilacoes, circuitos RLC",
                "s": "second order ODE constant coefficients | EDO 2a ordem oscilacoes | RLC circuit differential equation | EDOs ordem coeficientes tutorial portugues",
                "d": "y''+ay'+by=0. Eq. caracteristica: r2+ar+b=0. Raizes reais: exponenciais. Complexas: oscilacao (sen/cos). Aplicacao direta: circuito RLC, massa-mola, controle PID!"
              },
              {
                "w": "Transformada de Laplace: resolver EDOs, funcao de transferencia",
                "s": "Laplace transform ODE | transformada Laplace | transfer function control systems | Transformada Laplace resolver tutorial portugues",
                "d": "L{f(t)} = F(s). Transforma EDO em algebra (mais facil). Tabela de transformadas. Funcao de transferencia: H(s) = saida/entrada no dominio s. FUNDAMENTAL pra teoria de controle."
              },
              {
                "w": "Introducao a integrais multiplas: dupla, tripla (volume, massa)",
                "s": "double triple integral calculus | integrais duplas triplas | multiple integrals | Introducao integrais multiplas tutorial portugues",
                "d": "Integral dupla: area/volume. Integral tripla: volume 3D. Coordenadas polares, cilindricas, esfericas. Aplicacao: centro de massa, momento de inercia. Usado em eletromagnetismo."
              },
              {
                "w": "Aplicacoes de EDOs: circuitos eletricos, mecanica, populacoes, calor",
                "s": "ODE applications engineering | aplicacoes equacoes diferenciais | differential equations circuits mechanics | ODE real world examples",
                "d": "Circuito RC: V = V0*e^(-t/RC) (carga/descarga). Massa-mola: mx'' + bx' + kx = F (oscilacao). Populacao: dP/dt = rP (crescimento exponencial). Resfriamento Newton: dT/dt = -k(T-Tamb). EDOs sao a LINGUAGEM da engenharia."
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
                "s": "vectors linear algebra operations | vetores algebra linear | vector dot product norm projection | Vetores operacoes produto tutorial portugues",
                "d": "Vetor = lista de numeros = direcao+magnitude. Soma, escalar, dot product (similaridade), norma (comprimento), projecao. Em ML cada dado e um vetor."
              },
              {
                "w": "Matrizes: operacoes, multiplicacao, transposta",
                "s": "matrix operations multiplication | matrizes operacoes multiplicacao | matrix tutorial | Matrizes operacoes multiplicacao explained",
                "d": "Soma, escalar, multiplicacao (AB != BA!), transposta. Matriz = transformacao linear. Rotacao, escala, cisalhamento."
              },
              {
                "w": "Determinante e Inversa: quando existe, como calcular",
                "s": "matrix determinant inverse | determinante inversa matriz | invertible matrix | Determinante Inversa quando tutorial portugues",
                "d": "det(A)!=0 -> inversivel. Inversa: AA^{-1}=I. 2x2: formula direta. 3x3: cofatores. np.linalg.inv(A)."
              },
              {
                "w": "Sistemas lineares: eliminacao de Gauss, escalonamento",
                "s": "gaussian elimination linear systems | sistemas lineares Gauss | row echelon form | Sistemas lineares eliminacao tutorial portugues",
                "d": "Ax=b. Escalonar matriz aumentada [A|b]. Forma escada. Solucao unica, infinitas, ou nenhuma. np.linalg.solve(A,b)."
              },
              {
                "w": "Espacos vetoriais: base, dimensao, subespacos, independencia linear",
                "s": "vector spaces basis dimension | espacos vetoriais base dimensao | linear independence | Espacos vetoriais base tutorial portugues",
                "d": "Base: vetores minimos que geram o espaco. Dimensao: tamanho da base. LI: nenhum e combinacao dos outros. R^n: espaco n-dimensional."
              },
              {
                "w": "Transformacoes lineares: rotacao, escala, projecao, como matrizes representam",
                "s": "linear transformations matrix | transformacoes lineares matrizes | matrix rotation scaling | geometric interpretation linear algebra",
                "d": "Matriz = transformacao linear. [[cos,-sin],[sin,cos]] = rotacao. [[s,0],[0,s]] = escala. Projecao: projetar vetor em outro. Composicao: multiplicar matrizes = aplicar transformacoes em sequencia. CG usa isso pra TUDO. ML usa pra transformar dados."
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
                "s": "kinematics physics | cinematica MRU MRUV | position velocity acceleration | Cinematica posicao velocidade tutorial portugues",
                "d": "Posicao x(t). Velocidade = dx/dt (derivada!). Aceleracao = dv/dt. MRU: v constante. MRUV: a constante. Graficos x-t, v-t, a-t. Calculo aplicado!"
              },
              {
                "w": "Leis de Newton: forca, massa, acao-reacao, atrito, plano inclinado",
                "s": "Newton's laws physics | leis de Newton forca massa | friction inclined plane | Leis Newton forca tutorial portugues",
                "d": "F=ma. 1a: inercia. 2a: forca=massa*aceleracao. 3a: acao-reacao. Atrito: f=uN. Plano inclinado: decompor forcas. Diagrama de corpo livre SEMPRE."
              },
              {
                "w": "Trabalho, energia cinetica, potencial, conservacao de energia",
                "s": "work energy theorem | trabalho energia cinetica potencial | conservation of energy | Trabalho energia cinetica tutorial portugues",
                "d": "W=F*d*cos(theta). Ec=mv2/2. Ep=mgh. Conservacao: Ec+Ep=constante (sem atrito). Potencia=W/t. Joule, Watt."
              },
              {
                "w": "Momento linear, impulso, colisoes, centro de massa",
                "s": "momentum impulse collisions | momento linear impulso | elastic inelastic collision | Momento linear impulso tutorial portugues",
                "d": "p=mv. Impulso=F*dt=dp. Conservacao do momento. Colisoes: elastica (conserva Ec) vs inelastica. Centro de massa: ponto medio ponderado."
              },
              {
                "w": "Rotacao: torque, momento de inercia, momento angular",
                "s": "rotational motion torque | momento inercia torque | angular momentum physics | Rotacao torque momento tutorial portugues",
                "d": "Torque=r*F*sen(theta). I=sum(mr2). L=Iw. Conservacao do momento angular. Robotica: TUDO e rotacao (motores, juntas, rodas)."
              },
              {
                "w": "Gravitacao universal: lei de Newton, orbitas, satelites, peso vs massa",
                "s": "universal gravitation Newton | gravitacao universal orbitas | weight vs mass | Gravitacao universal Newton tutorial portugues",
                "d": "F = GMm/r2. Peso = mg (depende do planeta). Massa: quantidade de materia (constante). Orbita: queda livre em curva (satelite 'cai' mas a Terra curva). GPS: correcao relativistica! Velocidade de escape: ~11 km/s na Terra."
              },
              {
                "w": "Fluidos basico: pressao, empuxo (Arquimedes), equacao de Bernoulli",
                "s": "fluid mechanics pressure buoyancy Bernoulli | fluidos pressao empuxo | Archimedes principle | Fluidos basico pressao tutorial portugues",
                "d": "Pressao = F/A. Pascal: P transmitida igualmente. Arquimedes: empuxo = peso do fluido deslocado (por que barcos flutuam). Bernoulli: velocidade sobe, pressao desce (por que avioes voam). Aplicacao em engenharia: hidraulica, ventilacao, cooling de servidores."
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
                "s": "electric charge Coulomb's law | carga eletrica campo eletrico | electric field | Carga eletrica Coulomb tutorial portugues",
                "d": "Carga: positiva/negativa. Coulomb: F=kq1q2/r2. Campo E=F/q. Linhas de campo. Principio da superposicao. Base de TUDO eletronico."
              },
              {
                "w": "Potencial eletrico, tensao, capacitores, energia armazenada",
                "s": "electric potential voltage capacitor | potencial eletrico tensao | capacitor energy | Potencial eletrico tensao tutorial portugues",
                "d": "V=kq/r. Tensao=diferenca de potencial. Capacitor: C=Q/V. Energia: U=CV2/2. Capacitores em serie/paralelo. Filtros RC."
              },
              {
                "w": "Corrente, resistencia, Lei de Ohm, circuitos DC (Kirchhoff)",
                "s": "electric current resistance Ohm's law Kirchhoff | corrente resistencia circuitos DC | Corrente resistencia circuitos tutorial 2025 | Corrente resistencia circuitos explained",
                "d": "I=dq/dt. V=RI. Potencia=VI=I2R. Kirchhoff: soma tensoes no laco=0, soma correntes no no=0. Resolver circuitos com malhas."
              },
              {
                "w": "Campo magnetico, forca de Lorentz, Lei de Ampere, indutores",
                "s": "magnetic field Lorentz force Ampere | campo magnetico forca Lorentz | inductors | Campo magnetico forca tutorial portugues",
                "d": "Campo B: gerado por corrente. Forca: F=qv*B. Ampere: B proporcional a I. Indutores: armazenam energia no campo magnetico. L=V/(dI/dt)."
              },
              {
                "w": "Inducao eletromagnetica, Lei de Faraday, geradores, transformadores",
                "s": "electromagnetic induction Faraday's law | inducao eletromagnetica Faraday | generators transformers | Inducao eletromagnetica Faraday tutorial portugues",
                "d": "Faraday: variacao de fluxo magnetico gera tensao. Geradores: mecanico>eletrico. Transformadores: mudar tensao. Motor eletrico: inverso do gerador."
              },
              {
                "w": "Ondas eletromagneticas, espectro, luz, comunicacao wireless",
                "s": "electromagnetic waves spectrum | ondas eletromagneticas espectro | wireless communication physics | Ondas eletromagneticas espectro tutorial portugues",
                "d": "Onda EM: E e B oscilando. c=3*10^8 m/s. Espectro: radio < micro < IR < visivel < UV < raio-X < gama. WiFi, Bluetooth, 5G = ondas EM em diferentes frequencias."
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
                "s": "waves frequency wavelength | ondas frequencia comprimento onda | wave superposition | Ondas frequencia periodo tutorial portugues",
                "d": "f=1/T. v=f*lambda. Transversal vs longitudinal. Superposicao: construtiva/destrutiva. Som = onda mecanica. Sinais digitais = ondas."
              },
              {
                "w": "Optica: reflexao, refracao, lentes, fibra optica",
                "s": "optics reflection refraction lenses | optica reflexao refracao | fiber optics | Optica reflexao refracao tutorial portugues",
                "d": "Reflexao: angulo incidencia=reflexao. Refracao: Snell (n1*sen1=n2*sen2). Lentes: convergente/divergente. Fibra optica: reflexao total interna = internet de alta velocidade."
              },
              {
                "w": "Termodinamica: temperatura, calor, leis, entropia",
                "s": "thermodynamics laws entropy | termodinamica leis entropia | heat transfer | Termodinamica temperatura calor tutorial portugues",
                "d": "0a lei: equilibrio termico. 1a: conservacao energia (dU=Q-W). 2a: entropia aumenta. Calor especifico. Conducao, conveccao, radiacao. Cooling de computadores!"
              },
              {
                "w": "Semicondutores: band gap, dopagem tipo N e P, juncao PN",
                "s": "semiconductor physics band gap | semicondutores dopagem tipo N P | PN junction | Semicondutores band dopagem tutorial portugues",
                "d": "Silicio: 4 eletrons de valencia. Dopagem N: eletrons extras (fosforo). P: buracos (boro). Juncao PN = diodo. Transistor = 2 juncoes. BASE de toda computacao moderna!"
              },
              {
                "w": "Acustica: som, frequencia, amplitude, decibeis, ressonancia, efeito Doppler",
                "s": "acoustics sound waves frequency | acustica som frequencia decibeis | Doppler effect sound | resonance vibration",
                "d": "Som = onda mecanica longitudinal. Frequencia: grave (20Hz) a agudo (20kHz). Amplitude: volume. Decibeis: escala logaritmica (10dB = 2x). Ressonancia: frequencia natural amplificada. Doppler: ambulancia passando. Aplicacao: sonar, microfones, processamento de audio."
              },
              {
                "w": "Fisica moderna intro: relatividade especial, quantica, dualidade onda-particula",
                "s": "modern physics introduction | relatividade especial intro | quantum physics basics | wave particle duality",
                "d": "Relatividade: nada viaja mais rapido que luz. E=mc2 (energia e massa sao a mesma coisa). Quantica: no nivel atomico, particulas se comportam como ondas. Dualidade: eletron e onda E particula. Principio da incerteza: nao da pra saber posicao e velocidade exatas ao mesmo tempo."
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
                "s": "atomic structure periodic table chemical bonds | estrutura atomica ligacoes quimicas | chemistry basics | Estrutura atomica tabela tutorial portugues",
                "d": "Atomo: protons+neutrons+eletrons. Tabela periodica: grupos e periodos. Ligacoes: ionica (transfere e-), covalente (compartilha e-), metalica. Propriedades dos materiais dependem das ligacoes."
              },
              {
                "w": "Materiais: metais, ceramicas, polimeros, semicondutores, compositos",
                "s": "materials science metals semiconductors polymers | ciencia materiais semicondutores | engineering materials | Materiais metais ceramicas tutorial portugues",
                "d": "Metais: conduzem (fios, dissipadores). Ceramicas: isolantes (PCB). Polimeros: plasticos (carcacas). Semicondutores: silicio, germanio (chips). Compositos: fibra de carbono (drones)."
              },
              {
                "w": "Eletroquimica: baterias, corrosao, galvanizacao",
                "s": "electrochemistry batteries corrosion | eletroquimica baterias | battery chemistry lithium | Eletroquimica baterias corrosao tutorial portugues",
                "d": "Bateria: reacao quimica > eletricidade. Li-ion: leve, alta densidade. Ciclos de carga. Corrosao: oxidacao de metais. Galvanizacao: proteger com zinco. Relevante: baterias de IoT, robos, laptops."
              },
              {
                "w": "Quimica dos semicondutores: silicio, processos de fabricacao de chips",
                "s": "silicon semiconductor fabrication | quimica semicondutores fabricacao chips | chip manufacturing process | Quimica semicondutores silicio tutorial portugues",
                "d": "Silicio purificado > lingote > wafer > litografia > dopagem > camadas > corte > encapsulamento. Processo de nm (7nm, 5nm, 3nm). Clean rooms. Por que chips sao caros e complexos."
              },
              {
                "w": "Reacoes quimicas: balanceamento, estequiometria, energia de ativacao, catalise",
                "s": "chemical reactions balancing | reacoes quimicas balanceamento | activation energy catalysis | stoichiometry basics",
                "d": "Balancear: mesma quantidade de atomos dos dois lados. Estequiometria: proporcoes. Energia de ativacao: barreira pra reacao comecar. Catalisador: reduz barreira sem ser consumido. Enzimas (biologia) = catalisadores biologicos. Relevante: baterias, processos de fabricacao, corrosao."
              },
              {
                "w": "Nanotecnologia intro: escala nanometrica, aplicacoes em chips, sensores, materiais",
                "s": "nanotechnology basics | nanotecnologia introducao | nanoscale chip manufacturing | nanomaterials applications",
                "d": "1 nanometro = 10^-9 m (1 bilionesimo de metro). Transistor moderno: 3-5nm. Nanotubos de carbono: fortissimos e conduzem eletricidade. Quantum dots: displays. Nano-sensores: medicina. Chips: litografia EUV pra imprimir circuitos nanometricos. Engenharia de computacao toca nisso diretamente."
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
                "s": "HTML document structure | html head body meta | HTML basics tutorial | Estrutura DOCTYPE html explained",
                "d": "<!DOCTYPE html> declara HTML5. <html> <head>(meta, title, links) <body>(conteudo visivel). Meta: charset, viewport."
              },
              {
                "w": "Tags semanticas: header, nav, main, section, article, footer, aside",
                "s": "HTML semantic tags | html5 semantico | semantic HTML best practices | Tags semanticas header tutorial portugues",
                "d": "Semantica = significado. <header> nao e <div class=header>. Acessibilidade, SEO, legibilidade. Screen readers usam semantica."
              },
              {
                "w": "Formularios: input, select, textarea, radio, checkbox, button, labels",
                "s": "HTML forms tutorial | html formularios input types | HTML form validation | Formularios input select explained",
                "d": "<form action method>. Tipos: text, email, password, number, date, file. required, placeholder, pattern. Label + for = acessibilidade."
              },
              {
                "w": "Tabelas, listas, links, imagens, multimedia",
                "s": "HTML tables lists links images | html tags completo | HTML media elements | Tabelas listas links tutorial portugues",
                "d": "<table> <tr> <td>. <ul> <ol> <li>. <a href>. <img src alt>. <video> <audio>. <iframe>. Sempre alt em imagens."
              },
              {
                "w": "Acessibilidade: ARIA, alt text, contraste, teclado",
                "s": "web accessibility ARIA | acessibilidade web | HTML accessibility best practices | Acessibilidade ARIA text tutorial portugues",
                "d": "ARIA roles/labels pra screen readers. Alt descritivo em imagens. Contraste minimo 4.5:1. Tudo navegavel por teclado (Tab)."
              },
              {
                "w": "SEO basico: meta tags, Open Graph, sitemap, robots.txt, semantica pra Google",
                "s": "HTML SEO basics meta tags | SEO basico HTML | Open Graph meta tags | sitemap robots.txt SEO",
                "d": "title: titulo na aba/Google. meta description: texto no resultado do Google. Open Graph: og:title, og:image (preview em redes sociais). sitemap.xml: mapa pro Google. robots.txt: o que nao indexar. Semantica (h1, article, nav) ajuda o Google entender sua pagina."
              },
              {
                "w": "Web performance basics: lazy loading de imagens, minificação, CDN, Lighthouse audit, Core Web Vitals",
                "s": "web performance | lazy loading | minification | CDN | Lighthouse | Core Web Vitals",
                "d": "Sites rápidos ranqueiam melhor e retêm mais usuários. Lighthouse audita performance. Core Web Vitals (LCP, FID, CLS) são métricas do Google"
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
                "s": "CSS selectors specificity cascade | seletores CSS especificidade | CSS inheritance | Seletores cascata especificidade tutorial portugues",
                "d": "Seletores: tag, .classe, #id, [attr], :pseudo. Especificidade: inline > id > classe > tag. !important (evite). Heranca: color sim, padding nao."
              },
              {
                "w": "Box Model: content, padding, border, margin",
                "s": "CSS box model tutorial | box model CSS | CSS margin padding border | Model content padding explained",
                "d": "Tudo e caixa. content > padding > border > margin. box-sizing: border-box (inclui padding no width). Margens colapsam verticalmente."
              },
              {
                "w": "Flexbox: eixos, alinhamento, distribuicao",
                "s": "CSS flexbox tutorial complete | flexbox layout | flexbox froggy game | Flexbox eixos alinhamento explained",
                "d": "display:flex. flex-direction: row/column. justify-content (eixo principal). align-items (eixo cruzado). flex-grow, flex-shrink, flex-basis. Jogue Flexbox Froggy!"
              },
              {
                "w": "Grid: linhas, colunas, areas, template",
                "s": "CSS grid tutorial complete | grid layout CSS | CSS grid garden game | Grid linhas colunas explained",
                "d": "display:grid. grid-template-columns/rows. fr unit. grid-area. gap. repeat(). minmax(). Jogue CSS Grid Garden!"
              },
              {
                "w": "Responsividade: media queries, mobile-first, unidades relativas",
                "s": "CSS responsive design media queries | mobile first CSS | responsive units rem em vw vh | Responsividade media queries tutorial portugues",
                "d": "@media (max-width: 768px). Mobile-first: comece pequeno, adicione complexidade. rem/em: relativo a font-size. vw/vh: viewport. clamp() pra fluid."
              },
              {
                "w": "Variaveis CSS, transicoes, animacoes, pseudo-elementos",
                "s": "CSS custom properties variables | CSS transitions animations | pseudo elements before after | Variaveis transicoes animacoes tutorial portugues",
                "d": "--cor: #333; var(--cor). transition: all 0.3s. @keyframes. ::before ::after. transform: scale, rotate, translate. Perfomance: use transform e opacity."
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
                "s": "javascript types variables let const | javascript basics tutorial | JS data types | Tipos variaveis let/const/var explained",
                "d": "let: reatribuivel. const: fixo. var: evite (escopo confuso). Tipos: string, number, boolean, null, undefined, object, symbol. typeof."
              },
              {
                "w": "Funcoes: declaration, expression, arrow, closures",
                "s": "javascript functions arrow closure | funcoes javascript | JS function types | Funcoes declaration expression tutorial portugues",
                "d": "function nome(){} vs const nome = () => {}. Closures: funcao interna acessa escopo externo. Callback: funcao como argumento."
              },
              {
                "w": "Arrays e objetos: metodos, destructuring, spread",
                "s": "javascript arrays objects methods | JS destructuring spread | array map filter reduce | Arrays objetos metodos tutorial portugues",
                "d": ".map .filter .reduce .find .some .every .forEach. Destructuring: const {nome} = obj. Spread: {...obj, novo: 1}. Objetos: chave-valor."
              },
              {
                "w": "DOM: querySelector, createElement, classList, eventos",
                "s": "javascript DOM manipulation | DOM events addEventListener | javascript DOM tutorial | querySelector createElement classList explained",
                "d": "document.querySelector('.classe'). .textContent .innerHTML .classList.add/remove/toggle. addEventListener('click', fn). Event delegation."
              },
              {
                "w": "Fetch API, Promises, async/await, JSON",
                "s": "javascript fetch API async await | promises javascript | JS API call tutorial | Fetch Promises async/await explained",
                "d": "fetch(url).then(r=>r.json()).then(data=>...). async/await: mais legivel. try/catch pra erros. JSON.parse/stringify."
              },
              {
                "w": "ES6+: template literals, modules (import/export), optional chaining, nullish coalescing",
                "s": "javascript ES6 features | ES6 modules import export | JS modern features | ES6+ template literals tutorial portugues",
                "d": "Template: `Oi ${nome}`. Modules: export/import. ?. (optional chaining): obj?.prop. ?? (nullish): valor ?? default. Classes, symbols, iterators."
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
                "s": "git concepts repository staging commit | conceitos git basico | git workflow explained | Conceitos repositorio staging tutorial portugues",
                "d": "Working dir > staging (git add) > commit (snapshot). Branch: linha paralela. Remote: copia no servidor (GitHub). Clone: copiar. Push: enviar. Pull: receber."
              },
              {
                "w": "Comandos: init, add, commit, status, log, diff, checkout, reset",
                "s": "git commands tutorial | comandos git essenciais | git init add commit log | Comandos init commit explained",
                "d": "git init. git add . / git add arquivo. git commit -m 'feat: msg'. git status. git log --oneline. git diff. git checkout -- arquivo (desfazer)."
              },
              {
                "w": "Branches: criar, trocar, merge, resolver conflitos",
                "s": "git branch merge conflicts | git branches tutorial | resolve merge conflicts | Branches criar trocar explained",
                "d": "git branch nome. git checkout -b nome. git merge. Conflitos: <<<< ==== >>>> editar manualmente. git rebase: reescrever historico (limpo mas cuidado)."
              },
              {
                "w": "GitHub: repos, fork, clone, PRs, issues, code review",
                "s": "github tutorial complete | github pull request | github fork clone workflow | GitHub repos fork explained",
                "d": "Fork: copiar repo de outro. Clone: baixar local. PR: propor mudancas. Code review: revisar antes de merge. Issues: rastrear bugs/features."
              },
              {
                "w": "Commits semanticos: conventional commits (feat, fix, docs, refactor)",
                "s": "conventional commits | commits semanticos | git commit message best practices | Commits semanticos conventional tutorial portugues",
                "d": "feat: nova funcionalidade. fix: correcao. docs: documentacao. refactor: reestruturar. chore: manutenção. BREAKING CHANGE: incompativel. Historico limpo e pesquisavel."
              },
              {
                "w": "GitHub Actions e GitHub Pages: CI/CD e hospedagem",
                "s": "github actions CI CD tutorial | github pages deploy | github actions workflow | GitHub Actions GitHub explained",
                "d": "Actions: YAML workflow. On push/PR. Steps: lint, test, build, deploy. Pages: hospedar site estatico gratis. Settings > Pages > branch main."
              },
              {
                "w": ".gitignore, tags, stash, cherry-pick, bisect",
                "s": "gitignore template | git stash cherry-pick bisect | git advanced commands | .gitignore tags stash tutorial portugues",
                "d": ".gitignore: node_modules/, .env, __pycache__/. git stash: guardar mudancas temporariamente. git tag v1.0. cherry-pick: pegar commit especifico. bisect: achar bug."
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
                "s": "VS Code productivity tips extensions | VS Code debugging | VS Code shortcuts | Code atalhos extensoes tutorial portugues",
                "d": "Ctrl+P (arquivo), Ctrl+Shift+P (comando), Ctrl+D (selecionar), Alt+up/down (mover linha). Extensions: Python, Prettier, GitLens, Error Lens, Thunder Client. F5 debug."
              },
              {
                "w": "Markdown: sintaxe, READMEs, documentacao",
                "s": "markdown tutorial complete | markdown syntax | writing good README github | Markdown sintaxe READMEs explained",
                "d": "# Titulo. **negrito**. *italico*. [link](url). ```codigo```. - lista. README: descricao, install, uso, licenca. Documentar e profissional."
              },
              {
                "w": "Terminal multiplexers: tmux (multiplas sessoes)",
                "s": "tmux tutorial beginners | tmux terminal multiplexer | tmux cheatsheet | Terminal multiplexers tmux explained",
                "d": "tmux: rodar multiplos terminais em 1 janela. Sessoes persistem se desconectar (SSH). Ctrl+B c(nova janela), Ctrl+B %(split). Muito util em servidores."
              },
              {
                "w": "Ferramentas de linha: curl, wget, jq, awk, sed, xargs",
                "s": "curl wget jq command line | linux command line tools | awk sed tutorial | Ferramentas linha curl explained",
                "d": "curl: HTTP requests. wget: download. jq: processar JSON. awk: processar texto. sed: substituir texto. xargs: pipeline. Combinadas sao poderosas."
              },
              {
                "w": "Gerenciadores de pacotes do SO: Homebrew (macOS), Chocolatey/Winget (Windows), apt",
                "s": "Homebrew macOS | Chocolatey Winget Windows | package manager developer tools | Gerenciadores pacotes Homebrew tutorial portugues",
                "d": "Homebrew: brew install node (macOS/Linux). Winget: winget install Git.Git (Windows nativo). Chocolatey: choco install python (Windows). Instalar ferramentas via terminal e mais rapido e reproduzivel que baixar .exe de sites."
              },
              {
                "w": "Dotfiles: versionar configuracoes (.bashrc, .gitconfig, .vimrc) no GitHub",
                "s": "dotfiles GitHub | versionar configuracoes | dotfiles management | Dotfiles versionar configuracoes tutorial portugues",
                "d": "Dotfiles: arquivos de configuracao que comecam com ponto. Versionar no GitHub: configurar maquina nova em minutos. Stow ou chezmoi: gerenciar symlinks. Configuracoes: .bashrc (terminal), .gitconfig (git), .vimrc (vim), VS Code settings.json. Um dev senior tem dotfiles afiados."
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
                "s": "what is database relational vs NoSQL | banco de dados relacional | database types comparison | banco dados? Relacional tutorial portugues",
                "d": "BD organiza dados pra consulta eficiente. Relacional: tabelas com relacoes (SQL). NoSQL: documentos, chave-valor, grafos. 90% dos casos: comece com relacional."
              },
              {
                "w": "Tabelas, colunas, linhas, tipos de dados (INT, VARCHAR, DATE, BOOLEAN...)",
                "s": "SQL data types | tipos dados SQL | database table columns rows | Tabelas colunas linhas tutorial portugues",
                "d": "Tabela = entidade. Coluna = atributo. Linha = registro. INT: numeros. VARCHAR(255): texto. DATE: data. BOOLEAN: true/false. DECIMAL: dinheiro."
              },
              {
                "w": "Chaves primarias (PK), estrangeiras (FK), unicidade",
                "s": "primary key foreign key | chave primaria estrangeira | SQL constraints unique | Chaves primarias estrangeiras tutorial portugues",
                "d": "PK: identifica unico (nunca nulo). FK: referencia outra tabela. UNIQUE: sem duplicatas. NOT NULL. DEFAULT. CHECK."
              },
              {
                "w": "Relacionamentos: 1:1, 1:N, N:N (tabela ponte)",
                "s": "database relationships one to many | relacionamentos banco dados | many to many junction table | Relacionamentos tabela ponte tutorial portugues",
                "d": "1:1: pessoa-CPF. 1:N: autor-livros. N:N: alunos-materias (precisa tabela ponte). Diagramas ER: retangulo=entidade, losango=relacao."
              },
              {
                "w": "Normalizacao: 1NF, 2NF, 3NF, quando desnormalizar",
                "s": "database normalization 1NF 2NF 3NF | normalizacao banco dados | when to denormalize | Normalizacao quando desnormalizar tutorial portugues",
                "d": "1NF: atomico (sem listas). 2NF: sem dependencia parcial. 3NF: sem dependencia transitiva. Normalizar = menos duplicacao. Desnormalizar = mais velocidade (trade-off)."
              },
              {
                "w": "Diagramas ER: entidades, atributos, relacionamentos, cardinalidade, ferramentas",
                "s": "ER diagram tutorial | diagrama entidade relacionamento | database ER modeling | draw.io ER diagram",
                "d": "Entidade: retangulo (Usuario, Produto). Atributo: oval (nome, preco). Relacionamento: losango (compra). Cardinalidade: 1:1, 1:N, N:N. Ferramentas: draw.io (gratuito), dbdiagram.io, Lucidchart. SEMPRE desenhe o diagrama ANTES de criar tabelas. Economiza horas de refatoracao."
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
                "s": "SQL CREATE TABLE tutorial | SQL DDL commands | SQL constraints tutorial | CREATE TABLE ALTER explained",
                "d": "CREATE TABLE usuarios (id SERIAL PK, nome VARCHAR(100) NOT NULL, email VARCHAR(255) UNIQUE). ALTER TABLE ADD/DROP COLUMN. DROP TABLE (cuidado!)."
              },
              {
                "w": "INSERT, SELECT, UPDATE, DELETE com WHERE",
                "s": "SQL CRUD tutorial | SQL SELECT INSERT UPDATE DELETE | SQL WHERE clause | INSERT SELECT UPDATE explained",
                "d": "INSERT INTO t (col) VALUES (val). SELECT col FROM t WHERE cond ORDER BY col LIMIT n. UPDATE t SET col=val WHERE cond. NUNCA esqueca WHERE no UPDATE/DELETE!"
              },
              {
                "w": "Filtros: WHERE, AND/OR, IN, BETWEEN, LIKE, IS NULL",
                "s": "SQL WHERE filters | SQL LIKE IN BETWEEN | SQL filter conditions | Filtros WHERE AND/OR tutorial portugues",
                "d": "WHERE idade > 18 AND cidade='SP'. IN ('SP','RJ'). BETWEEN 10 AND 20. LIKE 'Jo%' (comeca com Jo). IS NULL / IS NOT NULL."
              },
              {
                "w": "ORDER BY, LIMIT, OFFSET, DISTINCT, aliases",
                "s": "SQL ORDER BY LIMIT DISTINCT | SQL aliases AS | SQL sorting pagination | ORDER LIMIT OFFSET tutorial portugues",
                "d": "ORDER BY col ASC/DESC. LIMIT 10 OFFSET 20 (paginacao). DISTINCT: sem duplicatas. AS: alias pra colunas e tabelas."
              },
              {
                "w": "JOINs: INNER, LEFT, RIGHT, FULL, CROSS, self-join",
                "s": "SQL JOINs tutorial visual | SQL JOIN types explained | SQL INNER LEFT RIGHT JOIN | JOINs INNER LEFT explained",
                "d": "INNER: ambas tem match. LEFT: todos da esquerda + match. RIGHT: inverso. FULL: todos. CROSS: produto cartesiano. Self-join: tabela consigo mesma."
              },
              {
                "w": "Agregacoes: COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING",
                "s": "SQL aggregate functions GROUP BY HAVING | SQL COUNT SUM AVG | SQL grouping | Agregacoes COUNT GROUP tutorial portugues",
                "d": "SELECT cidade, COUNT(*) FROM t GROUP BY cidade HAVING COUNT(*)>5. Agregacao = resumir dados. HAVING filtra DEPOIS de agrupar (WHERE filtra antes)."
              },
              {
                "w": "Subqueries e CTEs (Common Table Expressions)",
                "s": "SQL subquery CTE tutorial | SQL WITH clause | SQL nested queries | Subqueries CTEs Common explained",
                "d": "Subquery: SELECT * FROM t WHERE id IN (SELECT id FROM ...). CTE: WITH nome AS (SELECT ...) SELECT * FROM nome. CTEs sao mais legiveis."
              },
              {
                "w": "SQLite pra praticar + ferramentas visuais",
                "s": "SQLite tutorial python | DB Browser SQLite | online SQL practice | SQLite praticar ferramentas explained",
                "d": "Banco em arquivo. DB Browser: GUI gratis. Python: import sqlite3. Online: sqliteonline.com, w3schools SQL. Projetos: contatos, catalogo, gastos."
              },
              {
                "w": "Projeto: modelar e implementar BD de e-commerce (usuarios, produtos, pedidos, reviews)",
                "s": "database design e-commerce project | modelagem banco dados projeto | SQL project practice | Projeto modelar implementar tutorial portugues",
                "d": "Exercicio completo: desenhar ER diagram, criar tabelas (CREATE TABLE), popular (INSERT), consultas reais (produtos mais vendidos, receita por mes, clientes que nunca compraram). Exercita: modelagem, JOINs, agregacoes, subqueries. Dificuldade progressiva."
              },
              {
                "w": "Projeto: sistema de blog/wiki (posts, categorias, tags N:N, comentarios, busca)",
                "s": "blog database design SQL project | tag system database | full text search SQL | Projeto sistema blog/wiki tutorial portugues",
                "d": "Desafio: relacao N:N (posts<>tags via tabela ponte). Busca por texto (LIKE ou full-text search). Paginacao. Ordenar por data, popularidade. CTE pra comentarios aninhados (resposta de resposta). SQLite pra comecar, migrar pra PostgreSQL depois."
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
                "s": "voltage current resistance power | tensao corrente resistencia | basic electricity concepts | Tensao corrente resistencia tutorial portugues",
                "d": "Tensao (V): pressao eletrica. Corrente (A): fluxo de eletrons. Resistencia (Ohm): oposicao. Potencia (W) = V*I. Analogia: agua no cano."
              },
              {
                "w": "Lei de Ohm: V = R * I, circuitos serie e paralelo",
                "s": "ohm's law circuits series parallel | lei de Ohm circuitos | series parallel resistance | circuitos serie paralelo tutorial portugues",
                "d": "V=RI. Serie: mesma corrente, tensoes somam, R_total = R1+R2. Paralelo: mesma tensao, correntes somam, 1/R_total = 1/R1+1/R2."
              },
              {
                "w": "Componentes: resistor, capacitor, indutor, diodo, LED, transistor",
                "s": "electronic components basics | componentes eletronicos basicos | resistor capacitor diode transistor | Componentes resistor capacitor tutorial portugues",
                "d": "Resistor: limita corrente (codigo cores). Capacitor: armazena carga. Diodo: corrente 1 direcao. LED: luz. Transistor: chave/amplificador (base da computacao!)."
              },
              {
                "w": "Protoboard, multimetro, fonte, soldagem basica",
                "s": "breadboard tutorial | multimeter basics | soldering beginners | Protoboard multimetro fonte explained",
                "d": "Protoboard: prototipar sem solda. Multimetro: medir V, I, R, continuidade. Fonte: fornecer tensao estavel. Soldagem: habilidade essencial pra projetos."
              },
              {
                "w": "Leis de Kirchhoff: lei dos nos (correntes), lei das malhas (tensoes)",
                "s": "Kirchhoff's laws circuits | leis de Kirchhoff circuitos | KVL KCL circuit analysis | Kirchhoff current voltage law",
                "d": "KCL (nos): soma das correntes entrando = soma saindo. KVL (malhas): soma das tensoes no laco fechado = 0. Com Ohm + Kirchhoff resolve QUALQUER circuito DC. Metodo: identificar nos e malhas, montar equacoes, resolver sistema linear."
              },
              {
                "w": "Leitura de esquematicos: simbolos, convencoes, como seguir o circuito",
                "s": "reading circuit schematics | leitura esquematicos eletronicos | electronic schematic symbols | how to read circuit diagram",
                "d": "Cada componente tem simbolo padrao (resistor: zigzag, capacitor: barras paralelas, LED: triangulo com seta). GND: terra (referencia 0V). VCC/VDD: alimentacao. Seguir o fluxo: da fonte, pelo circuito, de volta ao terra. KiCad/Fritzing pra desenhar."
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
                "s": "logic gates AND OR NOT NAND | portas logicas eletronica digital | logic gates truth table | Portas logicas NAND tutorial portugues",
                "d": "Fisicamente: transistores combinados. AND: ambos 1. OR: pelo menos 1. NOT: inverte. NAND: NOT AND (universal). XOR: diferente. Tabelas verdade."
              },
              {
                "w": "Algebra booleana, simplificacao, mapas de Karnaugh",
                "s": "boolean algebra simplification | Karnaugh map | algebra booleana simplificacao | Algebra booleana simplificacao tutorial portugues",
                "d": "A+A'=1. A*A'=0. De Morgan. Karnaugh: simplificacao visual (2-4 variaveis). Minimizar logica = menos portas = mais barato/rapido."
              },
              {
                "w": "Circuitos combinacionais: somador, MUX, decodificador, comparador",
                "s": "combinational circuits adder MUX | circuitos combinacionais somador | multiplexer decoder | Circuitos combinacionais somador tutorial portugues",
                "d": "Somador: half-adder (2 bits) e full-adder (3 bits, com carry). MUX: seleciona 1 de N entradas. Decodificador: N bits > 2^N saidas."
              },
              {
                "w": "Flip-flops (SR, D, JK, T), registradores, contadores",
                "s": "flip flops SR D JK | registradores contadores | sequential circuits tutorial | Flip-flops registradores contadores explained",
                "d": "Flip-flop: armazena 1 bit (memoria!). D: mais usado (dado + clock). Registrador: grupo de flip-flops. Contador: sequencia automatica."
              },
              {
                "w": "Maquina de estados finitos (FSM): Mealy e Moore",
                "s": "finite state machine FSM | maquina de estados | Mealy Moore state machine | Maquina estados finitos tutorial portugues",
                "d": "FSM: estados + transicoes + entradas + saidas. Mealy: saida depende de estado+entrada. Moore: saida so depende do estado. Usada em protocolos, controle, parsers."
              },
              {
                "w": "Conversores: binario-decimal-hex, BCD, codificadores, displays 7 segmentos",
                "s": "binary decimal hex converter | conversor binario decimal | BCD encoder decoder | 7 segment display circuit",
                "d": "BCD (Binary Coded Decimal): cada digito decimal em 4 bits. Encoder: 2^n entradas → n saidas. Decoder: inverso. Display 7 segmentos: 7 LEDs formando numeros. Projeto classico: contador com flip-flops + decoder + display. Pratica essencial de eletronica digital."
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
                "s": "transistor switch amplifier BJT MOSFET | transistor como chave amplificador | transistor basics | Transistor como chave explained",
                "d": "BJT: base controla corrente (NPN/PNP). MOSFET: gate controla com tensao (mais eficiente). Como chave: saturacao/corte (digital). Como amplificador: regiao ativa (analogico). MOSFET e o mais usado em chips."
              },
              {
                "w": "Amplificadores operacionais (Op-Amp): inversor, nao-inversor, somador, comparador",
                "s": "operational amplifier op-amp circuits | amplificador operacional circuitos | op-amp tutorial | Amplificadores operacionais Op-Amp explained",
                "d": "Op-Amp ideal: ganho infinito, impedancia infinita. Inversor: Vout=-Rf/Ri*Vin. Nao-inversor: Vout=(1+Rf/Ri)*Vin. Comparador: compara 2 tensoes. Usado em sensores, filtros, DAC/ADC."
              },
              {
                "w": "Filtros: passa-baixa, passa-alta, passa-banda (RC, RL, RLC)",
                "s": "RC RL RLC filter circuits | filtros passa baixa alta banda | low pass high pass filter | Filtros passa-baixa passa-alta tutorial portugues",
                "d": "RC passa-baixa: frequencias altas atenuadas (suavizar sinal). Passa-alta: bloqueia DC. Frequencia de corte: fc=1/(2*pi*RC). Aplicacao: filtrar ruido em sensores, audio."
              },
              {
                "w": "Conversao analogico-digital (ADC) e digital-analogico (DAC)",
                "s": "ADC DAC converter | conversor analogico digital | ADC resolution sampling | Conversao analogico-digital digital-analogico tutorial portugues",
                "d": "ADC: converte tensao analogica em numero digital (ex: sensor de temperatura). Resolucao: 8-bit=256 niveis, 10-bit=1024. Taxa de amostragem: Nyquist (2x frequencia maxima). DAC: numero>tensao (audio, controle motor)."
              },
              {
                "w": "Fontes de alimentacao: reguladores lineares, switching, buck/boost",
                "s": "power supply regulator linear switching | fonte alimentacao regulador | buck boost converter | Fontes alimentacao reguladores tutorial portugues",
                "d": "Linear (LM7805): simples mas desperica calor. Switching (buck/boost): eficiente mas ruido. Buck: reduz tensao. Boost: aumenta. LDO: low dropout. Toda placa precisa de alimentacao estavel."
              },
              {
                "w": "Osciladores: 555 timer, cristal, PLL, geracao de clock",
                "s": "555 timer circuit oscillator | oscilador cristal PLL | clock generation electronics | 555 timer tutorial",
                "d": "555 timer: CI classico (monoestavel, astavel, biestavel). Cristal: oscilador preciso (relogios, microcontroladores). PLL (Phase-Locked Loop): sincronizar frequencias. Clock: sinal quadrado que sincroniza circuitos digitais. Cada CPU tem um cristal que gera o clock (ex: 3.5 GHz)."
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
                "s": "array techniques two pointers sliding window | prefix sum array | Kadane's algorithm | Arrays profundidade pointers tutorial portugues",
                "d": "Array = estrutura mais basica mas com MUITAS tecnicas. Two pointers: 2 indices andando (pair sum, remove duplicates). Sliding window: janela deslizante (max subarray de tamanho k). Prefix sum: somas acumuladas. Kadane: max subarray sum em O(n). LeetCode Easy>Medium pra praticar."
              },
              {
                "w": "Listas Ligadas: simples, dupla, circular, inverter, detectar ciclos (Floyd)",
                "s": "linked list python reverse detect cycle | lista ligada inverter ciclo Floyd | linked list problems | Listas Ligadas simples tutorial portugues",
                "d": "Cada no aponta pro proximo. Insercao O(1), busca O(n). Problemas classicos: inverter lista (iterativo e recursivo), detectar ciclo (Floyd's tortoise and hare — 2 ponteiros, lento e rapido), encontrar meio, merge 2 sorted lists. Implemente TUDO do zero."
              },
              {
                "w": "Pilhas (LIFO) e Filas (FIFO): implementacao, problemas classicos",
                "s": "stack queue implementation problems | stack problems valid parentheses | monotonic stack queue | Pilhas LIFO Filas tutorial portugues",
                "d": "Pilha: push/pop. Problemas: valid parentheses, min stack, evaluate reverse polish, daily temperatures (monotonic stack). Fila: enqueue/dequeue. Problemas: BFS, sliding window max (monotonic deque). Deque: duas pontas. Monotonic stack/queue: padrao poderoso que aparece muito."
              },
              {
                "w": "Tabelas Hash: funcao hash, colisoes, Dict",
                "s": "hash table python | tabela hash colisoes | hash map implementation | Tabelas Hash funcao tutorial portugues",
                "d": "Chave>indice via hash. Colisao: chaining ou open addressing. Dict do Python = hash table. O(1) medio."
              },
              {
                "w": "Hash Maps na pratica: counting, frequency, two sum, group by, cache (LRU)",
                "s": "hash map problems | two sum hash map | frequency counting algorithm | LRU cache implementation",
                "d": "Hash map = ferramenta mais usada em entrevistas. Two Sum: hash de complemento O(n). Frequency count: contar ocorrencias. Group anagrams: hash de sorted string. Subarray sum = k: prefix sum + hash. LRU Cache: OrderedDict ou hash+doubly linked list. Se nao sabe por onde comecar num problema, pense em hash map."
              },
              {
                "w": "Arvores: binaria, BST, AVL, Heap. Traversals: inorder, preorder, postorder, level-order (BFS)",
                "s": "binary tree traversals inorder preorder postorder | BST AVL heap python | tree BFS DFS level order | Arvores binaria Heap. tutorial portugues",
                "d": "BST: esquerda<raiz<direita. Inserir, buscar, remover. Traversals: inorder (esq>raiz>dir = ordenado em BST), preorder (raiz>esq>dir = serializar), postorder (esq>dir>raiz = deletar), level-order (BFS com fila). AVL: auto-balanceia. Heap: min/max no topo = fila prioridade. Problemas: height, diameter, LCA, validate BST."
              },
              {
                "w": "Grafos: lista/matriz adjacencia",
                "s": "graph data structure python | grafos lista adjacencia | graph representation | Grafos lista/matriz adjacencia tutorial portugues",
                "d": "Dict: {A:[(B,5),(C,3)]}. Dirigido vs nao. Ponderado (custos nas arestas)."
              },
              {
                "w": "Trie, Segment Tree, Union-Find",
                "s": "trie segment tree union find | advanced data structures python | Trie Segment Tree tutorial 2025 | Trie Segment Tree explained",
                "d": "Trie: autocompletar. Segment: range queries. Union-Find: componentes conectados."
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
                "s": "big O notation tutorial | complexidade algoritmos | time space complexity | analise complexidade explained",
                "d": "O(1)<O(log n)<O(n)<O(n log n)<O(n2)<O(2^n). Analise cada loop."
              },
              {
                "w": "Busca linear e binaria",
                "s": "binary search python | busca binaria | binary search variations | Busca linear binaria tutorial portugues",
                "d": "Linear O(n). Binaria O(log n) em dados ordenados. 1 bilhao = ~30 passos."
              },
              {
                "w": "Bit Manipulation: AND OR XOR NOT, shifts, mascaras, truques classicos",
                "s": "bit manipulation algorithms | bitwise tricks | bit manipulation problems LeetCode | Manipulation shifts mascaras tutorial portugues",
                "d": "AND(&) OR(|) XOR(^) NOT(~) shift(<<>>). Truques: n&(n-1) remove ultimo bit 1. n&(-n) isola ultimo bit 1. XOR: a^a=0, a^0=a (encontrar unico elemento). Checar potencia de 2: n&(n-1)==0. Contar bits (popcount). Swap sem temp: a^=b; b^=a; a^=b. Aparece em entrevistas!"
              },
              {
                "w": "Strings: pattern matching (KMP, Rabin-Karp), anagramas, palindromos, substrings",
                "s": "string algorithms KMP Rabin-Karp | string problems palindrome anagram | longest substring without repeating | Strings pattern matching tutorial portugues",
                "d": "Pattern matching: KMP O(n+m) vs brute force O(nm). Rabin-Karp: hash rolling. Problemas classicos: longest substring without repeating chars (sliding window), valid anagram (counting), longest palindromic substring, group anagrams. Strings = arrays de chars, mesmas tecnicas aplicam."
              },
              {
                "w": "Ordenacao: bubble, merge, quick, heap, counting, radix",
                "s": "sorting algorithms comparison python | algoritmos ordenacao | merge quick sort | Ordenacao bubble merge tutorial portugues",
                "d": "O(n2): bubble, selection. O(n log n): merge, quick, heap. O(n+k): counting, radix."
              },
              {
                "w": "Recursao, Divide & Conquer, Backtracking",
                "s": "divide conquer backtracking | backtracking N queens sudoku python | Recursao Divide Conquer tutorial 2025 | Recursao Divide Conquer explained",
                "d": "D&C: dividir>resolver>combinar. Backtracking: explorar+podar (N-Queens, Sudoku)."
              },
              {
                "w": "Algoritmos Gulosos (Greedy)",
                "s": "greedy algorithm examples python | algoritmo guloso | greedy vs DP | Algoritmos Gulosos Greedy tutorial portugues",
                "d": "Escolha otima local. Scheduling, Huffman, Kruskal, Dijkstra."
              },
              {
                "w": "Programacao Dinamica: memoization e tabulacao",
                "s": "dynamic programming python | programacao dinamica | DP classic problems | Programacao Dinamica memoization tutorial portugues",
                "d": "Top-down (cache) e bottom-up (tabela). Fibonacci, knapsack, coin change, LCS."
              },
              {
                "w": "Grafos: BFS, DFS, Dijkstra, Kruskal, Topological Sort",
                "s": "graph algorithms BFS DFS Dijkstra python | shortest path MST | Grafos Dijkstra Kruskal tutorial 2025 | Grafos Dijkstra Kruskal explained",
                "d": "BFS: fila. DFS: pilha/recursao. Dijkstra: pesos positivos. MST: Kruskal/Prim."
              },
              {
                "w": "Pratica estruturada: LeetCode por categoria, NeetCode 150, Blind 75, Beecrowd",
                "s": "leetcode study plan | NeetCode 150 roadmap | Blind 75 problems | como estudar leetcode",
                "d": "Nao faca problemas aleatorios! Siga: NeetCode 150 (curado por topico) ou Blind 75 (classicos de entrevista). Por categoria: arrays > two pointers > sliding window > stack > binary search > linked list > trees > graphs > DP. Easy ate se sentir confortavel, depois Medium. 1 problema/dia. Beecrowd (BR): bom pra comecar."
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
                "s": "python classes OOP tutorial | programacao orientada objetos python | python __init__ | Classes objetos __init__ explained",
                "d": "class Pessoa: def __init__(self,nome): self.nome=nome. Objeto: p=Pessoa('Kaio')."
              },
              {
                "w": "Encapsulamento, heranca, polimorfismo, ABC",
                "s": "python OOP inheritance polymorphism | pilares OOP python | python ABC abstract | Encapsulamento heranca polimorfismo tutorial portugues",
                "d": "_protected, __private. class Dog(Animal). Polimorfismo: mesmo metodo, diferente comportamento. ABC: classes abstratas."
              },
              {
                "w": "Dunder methods e dataclasses",
                "s": "python magic methods dunder | python dataclass tutorial | python __str__ __eq__ | Dunder methods dataclasses explained",
                "d": "__str__ __repr__ __eq__ __lt__ __len__ __getitem__. @dataclass gera init, repr, eq automatico."
              },
              {
                "w": "Composicao vs heranca, SOLID em Python",
                "s": "composition vs inheritance python | SOLID python | python design principles | Composicao heranca SOLID tutorial portugues",
                "d": "Composicao (tem-um) > heranca (e-um). SOLID: responsabilidade unica, aberto/fechado, Liskov, segregacao, inversao."
              },
              {
                "w": "Protocolos e duck typing: __iter__, __next__, __enter__, __exit__, Protocols (PEP 544)",
                "s": "python protocols duck typing | python iterator protocol | python PEP 544 Protocol | duck typing python explained",
                "d": "Duck typing: 'se anda como pato e faz quack, e um pato'. Python nao exige heranca — so precisa ter os metodos certos. Protocols (PEP 544): typing.Protocol pra duck typing com type hints. __iter__/__next__: iteravel. __enter__/__exit__: context manager. Pythonico > Javanico."
              },
              {
                "w": "Projeto OOP: sistema bancario, jogo RPG, ou loja virtual com classes",
                "s": "python OOP project | projeto orientado objetos python | python class project bank | OOP practice python",
                "d": "Projeto bancario: Conta (abstrata) > ContaCorrente, ContaPoupanca. Cliente tem Conta. Transacao: deposito, saque, transferencia. Heranca, polimorfismo, encapsulamento na pratica. Projeto RPG: Personagem > Guerreiro, Mago. Inventario, combate. Melhor forma de aprender OOP."
              },
              {
                "w": "ABC (Abstract Base Classes): definir interfaces formais, @abstractmethod, quando usar Protocol vs ABC",
                "s": "ABC | abstract base class | abstractmethod | Protocol vs ABC | interface",
                "d": "ABC força subclasses a implementar métodos. Protocol é structural subtyping (duck typing tipado). ABC = herança explícita, Protocol = implícita"
              },
              {
                "w": "Mixins e composição vs herança: quando cada padrão é melhor, diamond problem, MRO em Python",
                "s": "mixin | composition vs inheritance | diamond problem | MRO | method resolution order",
                "d": "Herança cria acoplamento forte. Composição (tem-um) é geralmente melhor que herança (é-um). Mixins adicionam funcionalidade sem herança profunda"
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
                "s": "python generators itertools | generators yield python | python lazy evaluation | Generators iterators itertools tutorial portugues",
                "d": "yield: lazy (nao carrega tudo). itertools: chain, product, combinations, groupby."
              },
              {
                "w": "Context managers, type hints, mypy",
                "s": "python context manager with | python type hints mypy | python typing | Context managers type tutorial portugues",
                "d": "with: __enter__/__exit__. def f(x: int) -> str. mypy pra checagem estatica."
              },
              {
                "w": "Testing: pytest, TDD, coverage",
                "s": "python pytest TDD tutorial | python testing | pytest fixtures parametrize | Testing pytest coverage explained",
                "d": "def test_soma(): assert soma(2,3)==5. Fixtures, parametrize. TDD: test>code>refactor."
              },
              {
                "w": "Concorrencia: threading, multiprocessing, asyncio",
                "s": "python threading asyncio multiprocessing | python concurrency | python async await | Concorrencia threading multiprocessing tutorial portugues",
                "d": "Threading: I/O-bound (GIL). Multiprocessing: CPU-bound. Asyncio: event loop, non-blocking."
              },
              {
                "w": "Metaprogramacao: metaclasses, descriptors, __new__, introspeccao",
                "s": "python metaclasses descriptors | python metaprogramming | python __new__ vs __init__ | python introspection",
                "d": "Metaclass: classe de classes (type e a metaclass padrao). Descriptor: __get__/__set__/__delete__ (como @property funciona por baixo). __new__: controlar criacao do objeto. Introspeccao: dir(), getattr(), inspect. Avancado — use quando PRECISA, nao por diversao."
              },
              {
                "w": "Packaging: criar bibliotecas, pyproject.toml, PyPI, documentacao (Sphinx/MkDocs)",
                "s": "python packaging PyPI | python create library package | pyproject.toml tutorial | python documentation Sphinx MkDocs",
                "d": "pyproject.toml: config moderna (substitui setup.py). Build: python -m build. Upload: twine upload dist/*. PyPI: pip install sua_lib. Documentacao: Sphinx (RST) ou MkDocs (Markdown). Read the Docs: hosting gratuito. Versioning: semver (major.minor.patch). Publicar lib = contribuir pro ecossistema."
              },
              {
                "w": "Descriptors: __get__, __set__, __delete__ — como @property funciona por baixo",
                "s": "descriptors | __get__ __set__ __delete__ | property internals | descriptor protocol",
                "d": "Descriptors são o mecanismo por trás de @property, @classmethod, @staticmethod. Entender descriptors = entender Python profundamente"
              },
              {
                "w": "Concurrency em Python: threading vs multiprocessing vs asyncio — quando usar cada, GIL impact",
                "s": "threading multiprocessing asyncio | GIL | concurrency Python | when to use each",
                "d": "Threading: I/O-bound (GIL limita CPU). Multiprocessing: CPU-bound (processos separados). Asyncio: muitas conexões I/O (event loop single-thread)"
              },
              {
                "w": "Profiling Python: cProfile, line_profiler, memory_profiler, py-spy, snakeviz — encontrar bottlenecks",
                "s": "Python profiling | cProfile | line_profiler | memory_profiler | py-spy | snakeviz",
                "d": "Antes de otimizar, medir: cProfile mostra tempo por função, line_profiler por linha, memory_profiler uso de memória. py-spy para produção"
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
                "s": "C programming tutorial beginners | compilar C gcc | C language basics printf scanf | Setup compilacao tipos explained",
                "d": "gcc arquivo.c -o programa. ./programa. Tipos: int, float, double, char. printf('Oi %s, %d anos\\n', nome, idade). scanf('%d', &num). & = endereco! C e a base de Linux, embarcados, drivers."
              },
              {
                "w": "Controle de fluxo, arrays, strings (char[]), funcoes",
                "s": "C arrays strings functions | arrays strings em C | C function parameters | Controle fluxo arrays tutorial portugues",
                "d": "if/else, for, while, switch. Arrays: int nums[10]. Strings: char nome[50] (terminam em \\0). Funcoes: declarar antes de usar ou usar prototipos. Passagem por valor (copia)."
              },
              {
                "w": "Ponteiros: enderecos, aritmetica, ponteiro pra ponteiro",
                "s": "C pointers tutorial | ponteiros em C | pointer arithmetic C | Ponteiros enderecos aritmetica explained",
                "d": "int *p = &x. *p = valor apontado. p++ avanca sizeof(int) bytes. Arrays sao ponteiros! ptr[i] = *(ptr+i). Ponteiro pra ponteiro: int **pp. CONCEITO MAIS IMPORTANTE de C."
              },
              {
                "w": "Alocacao dinamica: malloc, calloc, realloc, free. Memory leaks",
                "s": "C malloc free dynamic memory | alocacao dinamica C | memory leak C | Alocacao dinamica malloc tutorial portugues",
                "d": "malloc(n * sizeof(int)). Retorna ponteiro ou NULL. SEMPRE free() depois. Memory leak: alocou e nao liberou. Valgrind detecta leaks. Gerenciamento manual = poder + responsabilidade."
              },
              {
                "w": "Structs, unions, enums, typedef",
                "s": "C struct union enum typedef | struct em C | C data structures | Structs unions enums tutorial portugues",
                "d": "struct Ponto { int x, y; }. Union: compartilha memoria. Enum: constantes nomeadas. Typedef: atalho de tipo. struct = 'objeto' mais simples. Base de qualquer estrutura de dados em C."
              },
              {
                "w": "Preprocessador: #include, #define, #ifdef, macros, header files (.h)",
                "s": "C preprocessor macros header files | preprocessador C | C header files include guards | Preprocessador #include #define tutorial portugues",
                "d": "#include <stdio.h>. #define PI 3.14. #ifdef DEBUG. Include guards: #ifndef HEADER_H. Separar .h (declaracoes) e .c (implementacao). Compilacao: preprocessar > compilar > linkar."
              },
              {
                "w": "Manipulacao de bits: AND OR XOR NOT, shift, mascaras, flags",
                "s": "C bitwise operations | manipulacao bits C | bit masking flags C | Manipulacao bits shift tutorial portugues",
                "d": "& | ^ ~ << >>. Mascaras: ligar/desligar/testar bits. Flags: int flags = FLAG_A | FLAG_C. Muito usado em embarcados (registradores), protocolos, compressao."
              },
              {
                "w": "Arquivos em C: fopen, fprintf, fscanf, fread/fwrite (binario)",
                "s": "C file handling fopen fprintf | arquivos em C | C binary file read write | Arquivos fopen fprintf tutorial portugues",
                "d": "FILE *f = fopen('arq.txt', 'r'). fprintf, fscanf, fgets. fread/fwrite: binario (structs direto no disco). fclose() SEMPRE. Errno pra erros."
              },
              {
                "w": "Makefiles e compilacao separada, bibliotecas estaticas/dinamicas",
                "s": "Makefile tutorial C | compilacao separada C | static dynamic library C | Makefiles compilacao separada explained",
                "d": "Makefile: automatizar compilacao. gcc -c (compilar), gcc -o (linkar). Bibliotecas: .a (estatica), .so (dinamica). Separar em modulos = projetos maiores manteveis."
              },
              {
                "w": "Debugging avançado em C: GDB (breakpoints, watchpoints, backtrace), valgrind (memcheck), AddressSanitizer, strace, ltrace",
                "s": "GDB | valgrind | AddressSanitizer | strace | ltrace | debugging C advanced",
                "d": "GDB para step-through e inspeção. Valgrind para memory leaks. ASan detecta buffer overflow em compilação. strace mostra syscalls. Ferramentas essenciais"
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
                "s": "C++ classes tutorial | C++ OOP basics | C++ constructor destructor new delete | basico classes construtores explained",
                "d": "class Ponto { int x,y; public: Ponto(int x, int y): x(x), y(y) {} }. new = malloc+construtor. delete = destrutor+free. RAII: recurso atrelado ao tempo de vida do objeto."
              },
              {
                "w": "Heranca, polimorfismo, virtual, templates (generics)",
                "s": "C++ inheritance polymorphism virtual | C++ templates | C++ OOP advanced | Heranca polimorfismo virtual tutorial portugues",
                "d": "class Dog : public Animal {}. virtual: polimorfismo em runtime. Templates: template<typename T> (generics). STL usa templates pesadamente."
              },
              {
                "w": "STL: vector, map, set, string, algorithm, iterators",
                "s": "C++ STL tutorial | C++ vector map set | STL algorithms | vector string algorithm explained",
                "d": "vector<int> v. map<string,int> m. set<int> s. sort(), find(), accumulate(). Iterators: for(auto it = v.begin(); it != v.end(); ++it). Range-for: for(auto& x : v)."
              },
              {
                "w": "Smart pointers: unique_ptr, shared_ptr, weak_ptr. RAII",
                "s": "C++ smart pointers unique shared | smart pointers C++ | RAII C++ | Smart pointers unique_ptr tutorial portugues",
                "d": "unique_ptr: dono unico (move, nao copia). shared_ptr: contagem de referencias. weak_ptr: observador. NUNCA use raw new/delete em C++ moderno. Smart pointers = sem memory leak."
              },
              {
                "w": "C++ pra robotica (ROS2) e sistemas de alta performance",
                "s": "C++ robotics ROS2 | C++ high performance systems | when to use C++ | robotica ROS2 sistemas tutorial portugues",
                "d": "ROS2: nodes em C++ (performance) ou Python (prototipagem). Games: Unreal (C++). Sistemas: banco de dados, compiladores, browsers. C++ = quando cada milissegundo importa."
              },
              {
                "w": "Concorrencia em C++: std::thread, mutex, condition_variable, async/future, atomic",
                "s": "C++ concurrency threads mutex | C++ async future | C++ atomic operations | C++ multithreading tutorial",
                "d": "std::thread t(func). mutex.lock()/unlock() ou lock_guard (RAII). condition_variable: wait/notify. async/future: resultado assincrono. atomic: operacoes thread-safe sem lock. C++17: parallel algorithms (execution policy). Performance critica: C++ concurrency > Python."
              },
              {
                "w": "C++17/20 moderno: auto, structured bindings, std::optional, ranges, concepts, modules, coroutines",
                "s": "C++17 C++20 | auto | structured bindings | optional | ranges | concepts | coroutines",
                "d": "C++ moderno é muito diferente de C++98: auto deduz tipos, concepts restringem templates, ranges simplificam iteração, coroutines para async"
              },
              {
                "w": "Move semantics e perfect forwarding: std::move, rvalue references (&&), forwarding references, copy elision",
                "s": "move semantics | rvalue reference | std::move | perfect forwarding | copy elision",
                "d": "Move semantics transfere ownership sem copiar (eficiente). Rvalue references (&&) permitem distinguir temporários. Essential para performance"
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
                "s": "Rust tutorial beginners | Rust ownership borrowing | Rust programming basics | Setup cargo tipos explained",
                "d": "cargo new projeto. Ownership: cada valor tem 1 dono. Move semantics. Borrowing: &x (emprestimo imutavel), &mut x (mutavel, so 1 por vez). Lifetimes: compilador garante que referencia e valida. ZERO memory bugs em compile time."
              },
              {
                "w": "Structs, enums, pattern matching, Option, Result, error handling",
                "s": "Rust structs enums pattern matching | Rust Option Result | Rust error handling | Structs enums pattern tutorial portugues",
                "d": "Structs: dados agrupados. Enums: algebraic data types. Pattern matching: match x { Some(v) => ..., None => ... }. Option<T>: Some ou None (sem null!). Result<T,E>: Ok ou Err. ? operator: propagar erro elegantemente."
              },
              {
                "w": "Traits, generics, iterators, closures",
                "s": "Rust traits generics | Rust iterators closures | Rust polymorphism | Traits generics iterators tutorial portugues",
                "d": "Trait: interface (impl Trait for Struct). Generics: fn<T: Display>(x: T). Iterators: .iter().map().filter().collect(). Closures: |x| x*2. Zero-cost abstractions: tao rapido quanto C."
              },
              {
                "w": "Concorrencia segura: threads, channels, Arc, Mutex. async/await",
                "s": "Rust concurrency threads channels | Rust async await tokio | fearless concurrency | Concorrencia segura threads tutorial portugues",
                "d": "Rust previne data races em COMPILE TIME. Channels: comunicacao entre threads. Arc<Mutex<T>>: compartilhar dados. Tokio: runtime async. 'Fearless concurrency': se compilou, nao tem race condition."
              },
              {
                "w": "Quando usar Rust: sistemas, CLI, WebAssembly, embarcados",
                "s": "when to use Rust | Rust use cases systems CLI WASM | Rust vs C++ comparison | Quando usar Rust tutorial portugues",
                "d": "Rust = performance de C + seguranca de linguagem moderna. Sistemas: Servo, ripgrep. CLI: clap. WASM: rodar no browser. Embarcados: embedded-hal. Linux kernel aceita Rust. Crescendo rapido."
              },
              {
                "w": "Ecossistema Rust: crates.io, Cargo workspaces, testing, documentacao, CI",
                "s": "Rust ecosystem crates.io | Cargo workspace Rust | Rust testing documentation | Rust CI GitHub Actions",
                "d": "crates.io: repositorio de pacotes (como PyPI). Cargo: build, test, doc, publish tudo integrado. Workspaces: monorepo. cargo test: testes inline com #[test]. cargo doc: gera documentacao do codigo. clippy: linter. rustfmt: formatador. CI: cargo test no GitHub Actions."
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
                "s": "Java setup | JDK JRE JVM | javac | IntelliJ | Maven Gradle",
                "d": "JDK = compilador + JRE. JRE = JVM + bibliotecas. JVM executa bytecode. Maven/Gradle gerenciam dependências e build"
              },
              {
                "w": "Sintaxe Java: tipos primitivos, strings, arrays, controle de fluxo, classes, packages",
                "s": "Java syntax | primitive types | String | array | class | package",
                "d": "Java é tipada estaticamente: int, double, boolean, char. Strings são imutáveis. Tudo vive dentro de classes. Packages organizam código"
              },
              {
                "w": "OOP em Java: classes, herança, interfaces, abstract, polimorfismo, encapsulamento",
                "s": "Java OOP | inheritance | interface | abstract | polymorphism | encapsulation",
                "d": "Java é OOP por design: tudo é classe. Interface define contrato, abstract é parcialmente implementada. Polimorfismo via overriding"
              },
              {
                "w": "Collections Framework: List (ArrayList, LinkedList), Set (HashSet, TreeSet), Map (HashMap, TreeMap), Queue",
                "s": "Java Collections | ArrayList | HashMap | TreeSet | LinkedList | Queue",
                "d": "Framework rico de estruturas de dados: List (ordenada), Set (sem duplicata), Map (chave-valor), Queue (FIFO). Generics tipam coleções"
              },
              {
                "w": "Generics, Annotations, Enums, Records (Java 16+), Sealed classes (Java 17+)",
                "s": "Java generics | annotations | enum | record | sealed class | modern Java",
                "d": "Generics: tipos parametrizados (List<String>). Annotations: metadata (@Override). Records: data classes imutáveis. Sealed: herança controlada"
              },
              {
                "w": "Exception handling: checked vs unchecked, try-with-resources, custom exceptions, best practices",
                "s": "Java exception | checked unchecked | try-with-resources | custom exception",
                "d": "Checked exceptions forçam tratamento (IOException). Unchecked não (NullPointerException). try-with-resources fecha recursos automaticamente"
              },
              {
                "w": "Streams API e Lambdas (Java 8+): programação funcional em Java, map/filter/reduce, Optional",
                "s": "Java Streams | lambda | functional | map filter reduce | Optional",
                "d": "Streams processam coleções declarativamente: list.stream().filter(x -> x > 5).map(x -> x*2).collect(). Optional evita NullPointerException"
              },
              {
                "w": "Concorrência em Java: Thread, Runnable, ExecutorService, CompletableFuture, synchronized, volatile",
                "s": "Java concurrency | Thread | ExecutorService | CompletableFuture | synchronized",
                "d": "Java tem suporte rico a concorrência: threads, pools de threads (ExecutorService), futures assíncronos, synchronized para exclusão mútua"
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
                "s": "Spring Boot | auto-config | starter | embedded server | backend Java",
                "d": "Spring Boot simplifica Java para web: auto-configura tudo, embedded Tomcat, starters adicionam funcionalidade (spring-boot-starter-web)"
              },
              {
                "w": "Spring MVC: controllers, REST APIs, request mapping, validação, DTOs, response entities",
                "s": "Spring MVC | controller | REST API | request mapping | DTO | validation",
                "d": "Spring MVC mapeia HTTP para métodos Java: @GetMapping, @PostMapping. DTOs transferem dados. @Valid + Bean Validation para validação"
              },
              {
                "w": "Spring Data JPA: ORM com Hibernate, repositories, queries derivadas, paginação, relacionamentos",
                "s": "Spring Data JPA | Hibernate | repository | derived query | pagination",
                "d": "JPA abstrai SQL: define entidades com @Entity, Spring gera queries por nome do método (findByName). Hibernate implementa JPA por baixo"
              },
              {
                "w": "Spring Security: autenticação, autorização, JWT, OAuth2, CORS, CSRF protection",
                "s": "Spring Security | authentication | authorization | JWT | OAuth2 | CORS",
                "d": "Spring Security protege APIs: filter chain intercepta requests, autentica (JWT/OAuth2), autoriza por role (@PreAuthorize), previne CSRF"
              },
              {
                "w": "Maven e Gradle: build tools, dependências, lifecycle, plugins, multi-module projects",
                "s": "Maven Gradle | build tool | dependency management | lifecycle | plugin",
                "d": "Maven usa pom.xml (convenção), Gradle usa build.gradle (flexível). Ambos: gerenciar dependências, compilar, testar, empacotar JAR/WAR"
              },
              {
                "w": "Testing em Java: JUnit 5, Mockito, TestContainers, integration tests com Spring Boot Test",
                "s": "JUnit 5 | Mockito | TestContainers | Spring Boot Test | Java testing",
                "d": "JUnit 5 para testes unitários, Mockito para mocks, TestContainers para banco real em Docker, @SpringBootTest para integration tests"
              },
              {
                "w": "JVM internals: bytecode, class loading, garbage collection (G1, ZGC), JIT compilation, profiling (VisualVM, JFR)",
                "s": "JVM internals | bytecode | class loading | GC G1 ZGC | JIT | profiling VisualVM",
                "d": "JVM compila bytecode para nativo (JIT). GC gerencia memória (G1 = default, ZGC = low latency). Profiling com VisualVM/JFR encontra bottlenecks"
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
                "s": "OS processes fork exec | process control block context switch | inter-process communication | Processos criacao fork/exec tutorial portugues",
                "d": "Processo: programa em execucao com seu espaco de memoria. fork(): cria copia. exec(): substitui por outro programa. Estados: new>ready>running>waiting>terminated. PCB: struct que guarda info do processo. Context switch: salvar/restaurar estado (caro!). IPC: pipes, shared memory, message queues."
              },
              {
                "w": "Threads: criacao, modelo user vs kernel, pthreads, race conditions",
                "s": "threads user kernel space | pthreads tutorial | race condition thread safety | Threads criacao modelo explained",
                "d": "Thread: 'processo leve' (compartilha memoria). User threads vs kernel threads. pthreads (C): pthread_create, pthread_join. Race condition: 2 threads escrevem na mesma variavel. Resultado depende da ordem (nondeterministic). Bug mais dificil de reproduzir."
              },
              {
                "w": "Sincronizacao: mutex, semaforo, monitor, condition variables, barriers",
                "s": "mutex semaphore monitor synchronization | OS synchronization primitives | condition variable | Sincronizacao mutex semaforo tutorial portugues",
                "d": "Mutex: lock/unlock (1 thread por vez). Semaforo: contador (N threads). Monitor: mutex + condition variable (Java synchronized). Condition variable: esperar ate condicao ser verdadeira. Barrier: todos esperam ate o ultimo chegar. Escolher o certo = evitar bugs e deadlocks."
              },
              {
                "w": "Deadlock: condicoes, prevencao, deteccao, recuperacao, Banker's algorithm",
                "s": "deadlock conditions prevention detection | Banker's algorithm | deadlock OS | Deadlock condicoes prevencao tutorial portugues",
                "d": "4 condicoes (todas necessarias): mutual exclusion + hold and wait + no preemption + circular wait. Prevenir: quebrar 1 condicao. Detectar: grafo de alocacao de recursos. Banker's: verificar se estado e seguro antes de alocar. Na pratica: lock ordering + timeout."
              },
              {
                "w": "Scheduling: FCFS, SJF, Round Robin, prioridade, MLFQ, CFS (Linux)",
                "s": "CPU scheduling algorithms | Round Robin MLFQ CFS | process scheduling OS | Scheduling FCFS Round tutorial portugues",
                "d": "FCFS: primeiro a chegar. SJF: mais curto primeiro (otimo mas impossivel prever). Round Robin: time quantum (fairness). MLFQ: multiplas filas de prioridade. CFS (Linux): Completely Fair Scheduler (arvore rubro-negra). Preemptive vs non-preemptive."
              },
              {
                "w": "IPC em detalhe: pipes, named pipes, shared memory, message queues, signals",
                "s": "IPC inter-process communication | Linux pipes shared memory | IPC message queue signals | IPC mechanisms comparison",
                "d": "Pipe: ls | grep (unidirecional). Named pipe (FIFO): mkfifo, persistente. Shared memory: mais rapido (mesmo espaco de endereco). Message queue: mensagens tipadas. Signals: SIGINT (Ctrl+C), SIGTERM, SIGKILL. Socket: IPC entre maquinas (rede). Escolher: velocidade vs complexidade vs caso de uso."
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
                "s": "virtual memory address translation MMU | virtual vs physical address | memory management unit | Enderecos virtuais fisicos tutorial portugues",
                "d": "Cada processo acha que tem toda memoria pra si (virtual address space). MMU: hardware que traduz virtual>fisico. Protecao: processo A nao acessa memoria de B. Base + bounds (simples). Segmentacao. Paginacao (moderno)."
              },
              {
                "w": "Paginacao: page table, TLB, page fault, multi-level page tables",
                "s": "paging page table TLB | page fault handling | multi-level page table OS | Paginacao page table tutorial portugues",
                "d": "Pagina: bloco fixo (4KB tipicamente). Page table: mapeia pagina virtual > frame fisico. TLB: cache de traducoes (hit = rapido, miss = lento). Page fault: pagina nao na RAM, buscar no disco. Multi-level: economizar memoria da page table."
              },
              {
                "w": "Swap, demand paging, page replacement: FIFO, LRU, Clock, thrashing",
                "s": "page replacement algorithms LRU FIFO | demand paging swap | thrashing OS | Swap demand paging tutorial portugues",
                "d": "Demand paging: so carregar pagina quando acessada. Swap: mover paginas pro disco quando RAM cheia. Replacement: FIFO (simples), LRU (melhor, caro), Clock (aproximacao de LRU). Thrashing: mais tempo fazendo swap que executando. Solucao: mais RAM ou menos processos."
              },
              {
                "w": "Alocacao de memoria: malloc internals, fragmentacao, buddy system, slab allocator",
                "s": "malloc internals memory allocation | memory fragmentation | buddy system slab allocator | Alocacao memoria malloc tutorial portugues",
                "d": "malloc: pede ao OS (brk/mmap) e gerencia blocos. Fragmentacao: externa (espacos entre blocos) e interna (bloco maior que preciso). Buddy system: dividir em potencias de 2. Slab allocator (Linux): cache de objetos do mesmo tamanho. Entender malloc = entender performance."
              },
              {
                "w": "Protecao de memoria: segmentacao, isolamento de processos, buffer overflow prevencao",
                "s": "memory protection segmentation | buffer overflow prevention DEP ASLR | memory isolation processes | stack canary protection",
                "d": "Cada processo tem espaco isolado (MMU garante). Segmentation fault: acessar memoria proibida. DEP: nao executar dados. ASLR: randomizar enderecos. Stack canary: detectar overflow. NX bit: pagina nao-executavel. Todas essas protecoes existem por causa de ATAQUES (buffer overflow)."
              },
              {
                "w": "Garbage collection vs manual: como Java, Python, Go gerenciam memoria",
                "s": "garbage collection vs manual memory | GC Java Python Go | memory management comparison | reference counting mark sweep",
                "d": "Manual (C): malloc/free (voce controla, voce erra). Reference counting (Python): conta referencias, libera quando 0. Mark-and-sweep (Java, Go): pausa, marca vivos, libera mortos. Rust: ownership (sem GC, sem erros). Trade-off: controle vs seguranca vs pausas."
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
                "s": "file system internals inodes | ext4 internals journaling | how file systems work | File system internals tutorial portugues",
                "d": "Inode: metadados do arquivo (permissoes, tamanho, ponteiros pra blocos). Directory: lista de (nome, inode). Superblock: metadados do filesystem. Journaling (ext4): log de operacoes pra recuperar de crash. Write-ahead log: escrever no journal ANTES de alterar dados."
              },
              {
                "w": "System calls: open, read, write, close, mmap, ioctl, strace",
                "s": "system calls OS | Linux syscalls strace | open read write close mmap | System calls open tutorial portugues",
                "d": "Syscall: pedido ao kernel (modo usuario > modo kernel). open(): abrir arquivo (retorna file descriptor). read()/write(): ler/escrever. mmap(): mapear arquivo na memoria. strace: rastrear syscalls de um processo. Entender syscalls = entender o OS."
              },
              {
                "w": "I/O: polling vs interrupts, DMA, buffers, disk scheduling",
                "s": "IO polling interrupts DMA | disk scheduling algorithms | OS IO management | polling interrupts buffers tutorial portugues",
                "d": "Polling: CPU fica perguntando 'chegou?'. Interrupt: dispositivo avisa a CPU. DMA: transferir dados sem CPU. Buffers: intermediario entre app e disco. Disk scheduling: SCAN, C-SCAN, SSTF. SSD muda tudo: random access ~= sequential."
              },
              {
                "w": "Projeto pratico: explorar xv6 (kernel didatico do MIT), modificar scheduler/syscall",
                "s": "xv6 operating system MIT | xv6 lab projects | build simple OS kernel | Projeto pratico explorar tutorial portugues",
                "d": "xv6: OS educacional do MIT (RISC-V). Codigo limpo, ~10K linhas C. Labs: implementar syscall, scheduler, virtual memory, file system. Melhor forma de entender SO: MEXER no codigo de um. Alternativa: fazer mini-OS com bare metal (OSDev)."
              },
              {
                "w": "Virtualizacao: hypervisor tipo 1/2, containers vs VMs, overlay filesystem",
                "s": "virtualization hypervisor type 1 2 | VMs vs containers | overlay filesystem Docker | virtualization concepts OS",
                "d": "Hypervisor tipo 1 (bare metal): VMware ESXi, Xen. Tipo 2 (hosted): VirtualBox, VMware Workstation. Container: compartilha kernel, mais leve. Overlay FS: camadas empilhadas (como Docker layers). Virtualizacao = como cloud funciona por baixo."
              },
              {
                "w": "Linux internals: /proc, /sys, cgroups, namespaces (base de containers)",
                "s": "Linux proc sys cgroups namespaces | Linux internals containers | cgroups resource limits | Linux namespaces isolation",
                "d": "/proc: info de processos (/proc/cpuinfo, /proc/meminfo). /sys: hardware. cgroups: limitar CPU, memoria por grupo de processos. Namespaces: isolar PID, rede, filesystem. Docker = cgroups + namespaces + overlay FS. Entender isso = entender containers de verdade."
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
                "s": "ISA | instruction set architecture | hardware software interface",
                "d": "ISA define instruções que a CPU entende: aritméticas, load/store, branch. É o contrato entre hardware e compilador"
              },
              {
                "w": "RISC vs CISC: filosofias de design (ARM/RISC-V vs x86), trade-offs de complexidade",
                "s": "RISC vs CISC | ARM RISC-V x86 | reduced complex instruction set",
                "d": "RISC: instruções simples e rápidas (ARM, RISC-V). CISC: instruções complexas (x86). Modernos x86 decodificam CISC em micro-ops RISC"
              },
              {
                "w": "Registradores, ALU, Unidade de Controle: datapath de uma CPU simples (single-cycle)",
                "s": "registers | ALU | control unit | datapath | single cycle CPU",
                "d": "CPU básica: registradores armazenam operandos, ALU opera, unidade de controle decodifica instrução e gera sinais. Tudo em 1 ciclo"
              },
              {
                "w": "Modos de endereçamento: imediato, direto, indireto, indexado, baseado, relativo ao PC",
                "s": "addressing modes | immediate direct indirect indexed PC-relative",
                "d": "Como instruções localizam operandos: imediato (valor na instrução), direto (endereço fixo), indexado (base + offset). Afeta flexibilidade"
              },
              {
                "w": "Formatos de instrução: R-type, I-type, S-type, B-type (RISC-V como exemplo didático)",
                "s": "instruction format | R-type I-type S-type | RISC-V encoding | opcode",
                "d": "Instruções são codificadas em bits: opcode + registradores + imediato. RISC-V tem formatos claros que facilitam decodificação"
              },
              {
                "w": "Assembly básico: MOV, ADD, SUB, LW, SW, BEQ, JAL — ler e escrever assembly RISC-V/ARM",
                "s": "assembly | MOV ADD SUB | LW SW BEQ JAL | RISC-V ARM assembly",
                "d": "Entender assembly é essencial: traduzir C para assembly manualmente, debugar com GDB, entender o que o compilador gera"
              },
              {
                "w": "Chamadas de função em assembly: stack frame, calling convention, caller/callee saved registers",
                "s": "function call | stack frame | calling convention | caller callee saved",
                "d": "Chamadas usam stack: empurra return address, salva registradores, reserva espaço local. Calling convention define regras entre funções"
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
                "s": "pipeline | IF ID EX MEM WB | stages | throughput | instruction level",
                "d": "Pipeline executa múltiplas instruções simultaneamente em estágios diferentes. 5 estágios clássicos: Fetch, Decode, Execute, Memory, Writeback"
              },
              {
                "w": "Hazards: data hazards (RAW, WAW, WAR), control hazards (branches), structural hazards",
                "s": "hazards | data hazard RAW WAW WAR | control hazard | structural",
                "d": "Pipeline tem conflitos: data hazard (instrução precisa de resultado anterior), control hazard (branch não resolvido), structural (recurso compartilhado)"
              },
              {
                "w": "Soluções para hazards: forwarding/bypassing, stalls, branch prediction (estático e dinâmico)",
                "s": "forwarding bypassing | stall | branch prediction | static dynamic",
                "d": "Forwarding encaminha resultado sem esperar writeback. Branch prediction adivinha se branch é tomado. Previsão errada = flush do pipeline"
              },
              {
                "w": "Superscalar e Out-of-Order: executar múltiplas instruções por ciclo, reordenação dinâmica",
                "s": "superscalar | out-of-order execution | multiple issue | ILP",
                "d": "CPUs modernas despacham 4-8 instruções por ciclo, reordenam para evitar stalls. Tomasulo's algorithm, reservation stations, ROB"
              },
              {
                "w": "Hierarquia de memória: registradores → L1 → L2 → L3 → RAM → SSD → HDD (latência e tamanho)",
                "s": "memory hierarchy | L1 L2 L3 cache | RAM | latency | locality",
                "d": "Cada nível: mais rápido e menor. L1: ~1ns, 64KB. L2: ~4ns, 256KB. L3: ~10ns, 8MB. RAM: ~100ns, 16GB. Explorar localidade"
              },
              {
                "w": "Cache: direct-mapped, set-associative, fully-associative, write-back vs write-through, cache miss types (compulsory, capacity, conflict)",
                "s": "cache | direct mapped | set associative | write-back | cache miss | compulsory capacity conflict",
                "d": "Cache guarda dados frequentes perto da CPU. Set-associative balanceia flexibilidade e velocidade. 3C's: compulsory, capacity, conflict misses"
              },
              {
                "w": "Memória virtual: page table, TLB (Translation Lookaside Buffer), page walk, huge pages",
                "s": "virtual memory | page table | TLB | page walk | huge pages",
                "d": "Memória virtual mapeia endereços virtuais para físicos. TLB é cache de traduções. Page walk percorre page table hierárquica quando TLB miss"
              },
              {
                "w": "Métricas de performance: CPI, IPC, clock speed, benchmark (SPEC), Lei de Amdahl aplicada",
                "s": "CPI IPC | clock speed | SPEC benchmark | Amdahl law | performance",
                "d": "Performance = instruções × CPI × período do clock. IPC (Instructions Per Cycle) mede eficiência. SPEC benchmarks comparam CPUs objetivamente"
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
                "s": "concurrency vs parallelism | concorrencia vs paralelismo | concurrent parallel programming | Concorrencia paralelismo definicoes tutorial portugues",
                "d": "Concorrencia: lidar com muitas coisas ao mesmo tempo (estrutura). Paralelismo: fazer muitas coisas ao mesmo tempo (execucao). Concorrencia: 1 cozinheiro, 3 pratos. Paralelismo: 3 cozinheiros, 3 pratos. Python: concorrencia (GIL) mas nao paralelismo (use multiprocessing)."
              },
              {
                "w": "Modelos: shared memory, message passing, actor model, CSP",
                "s": "shared memory message passing | actor model CSP | concurrency models comparison | Modelos shared memory tutorial portugues",
                "d": "Shared memory: threads compartilham (mutex pra proteger). Message passing: comunicar via mensagens (channels). Actor model (Erlang, Akka): atores independentes trocam mensagens. CSP (Go): goroutines + channels. Cada modelo tem trade-offs. Go e Rust tornaram concorrencia mais acessivel."
              },
              {
                "w": "Lock-free e wait-free: CAS, atomics, ABA problem",
                "s": "lock-free data structures CAS | atomic operations | ABA problem concurrency | Lock-free wait-free atomics tutorial portugues",
                "d": "Lock-free: pelo menos 1 thread progride (sem deadlock). Wait-free: todas progridem. CAS: Compare-And-Swap (instrucao atomica do CPU). Atomics: operacoes indivisiveis. ABA: valor muda A>B>A, CAS nao percebe. Dificil mas altissima performance."
              },
              {
                "w": "Programacao paralela: OpenMP, MPI, MapReduce, divide-and-conquer paralelo",
                "s": "OpenMP MPI parallel programming | MapReduce parallel | parallel algorithms | Programacao paralela OpenMP tutorial portugues",
                "d": "OpenMP: pragmas em C/C++ (#pragma omp parallel for). MPI: comunicacao entre maquinas (cluster HPC). MapReduce: map(transformar) + reduce(agregar) em paralelo (Hadoop, Spark). Amdahl's law: speedup limitado pela parte sequencial."
              },
              {
                "w": "GPU computing: CUDA em profundidade, kernels, warps, memory hierarchy, occupancy",
                "s": "CUDA programming deep | GPU kernel warp | CUDA memory hierarchy occupancy | computing CUDA profundidade tutorial portugues",
                "d": "CUDA kernel: funcao que roda em milhares de threads. Grid > blocks > threads. Warps: 32 threads executam juntas. Memory: global (lenta), shared (rapida), registers (mais rapida). Occupancy: usar GPU ao maximo. Coalesced access: threads acessando memoria sequencialmente. Essencial pra ML de verdade."
              },
              {
                "w": "Problemas classicos: producer-consumer, readers-writers, dining philosophers, barrier",
                "s": "producer consumer problem | dining philosophers | readers writers problem | classic concurrency problems",
                "d": "Producer-consumer: fila compartilhada com mutex+condition variable. Readers-writers: muitos leitores OU 1 escritor. Dining philosophers: deadlock classico (5 filosofos, 5 garfos). Barrier: todos esperam ate o ultimo. Implementar esses problemas = entender concorrencia de verdade."
              },
              {
                "w": "Deadlock: 4 condições de Coffman, prevenção (ordenar locks), detecção, recovery",
                "s": "deadlock | Coffman conditions | prevention | detection | lock ordering",
                "d": "Deadlock: 4 condições simultâneas (exclusão mútua, hold & wait, no preemption, circular wait). Prevenir quebrando uma delas"
              },
              {
                "w": "Memory model: happens-before, sequential consistency, relaxed ordering, fences/barriers",
                "s": "memory model | happens-before | sequential consistency | memory barrier | fence",
                "d": "CPUs e compiladores reordenam instruções. Memory model define garantias de ordenação. Barriers forçam visibilidade entre threads"
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
                "s": "GIL | global interpreter lock | Python | multiprocessing",
                "d": "GIL impede threads Python de executar bytecode simultaneamente. Use multiprocessing ou asyncio para contornar"
              },
              {
                "w": "Async I/O: event loop, coroutines, asyncio em Python, tokio em Rust",
                "s": "async IO | event loop | coroutine | asyncio | tokio",
                "d": "Async não é paralelo: uma thread faz I/O não-bloqueante via event loop. Ideal para I/O-bound (web servers, scrapers)"
              },
              {
                "w": "Thread safety: data races, mutex poisoning, RwLock, condições de corrida comuns e como evitar",
                "s": "thread safety | data race | mutex | RwLock | race condition",
                "d": "Data race = dois threads acessam dado simultaneamente e um modifica. Mutex serializa acesso, RwLock permite leituras paralelas"
              },
              {
                "w": "Lei de Amdahl vs Lei de Gustafson: limites teóricos do paralelismo",
                "s": "Amdahl law | Gustafson law | speedup limit | parallel fraction",
                "d": "Amdahl: speedup limitado pela parte serial. Gustafson: com mais cores, resolvemos problemas maiores (mais otimista)"
              },
              {
                "w": "Padrões: pipeline, fan-out/fan-in, work stealing, futures/promises",
                "s": "pipeline | fan-out fan-in | work stealing | futures promises",
                "d": "Pipeline: estágios em cadeia. Fan-out: distribuir trabalho. Fan-in: combinar resultados. Futures: resultado eventual de async"
              },
              {
                "w": "Benchmarking de concorrência: medir speedup real, overhead de sincronização, false sharing",
                "s": "benchmark | speedup | overhead | false sharing | cache line",
                "d": "Medir se paralelismo realmente acelera: overhead de criar threads, false sharing (cache line contention) pode anular ganhos"
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
                "s": "SOLID principles explained | principios SOLID | single responsibility open closed | SOLID principios design tutorial portugues",
                "d": "S: responsabilidade unica (1 classe = 1 motivo pra mudar). O: aberto/fechado (extender sem modificar). L: Liskov (subclasse substitui a pai). I: segregacao de interface (interfaces pequenas). D: inversao de dependencia (dependa de abstracoes)."
              },
              {
                "w": "DRY, KISS, YAGNI, SoC, Law of Demeter",
                "s": "DRY KISS YAGNI principles | separation of concerns | law of demeter | KISS YAGNI Demeter tutorial portugues",
                "d": "DRY: nao repita codigo. KISS: mantenha simples. YAGNI: nao construa o que nao precisa AGORA. SoC: separar responsabilidades. Law of Demeter: fale so com vizinhos diretos (a.b.c.d() = code smell)."
              },
              {
                "w": "Design Patterns: Creational (Factory, Builder, Singleton)",
                "s": "design patterns creational factory builder singleton | padroes criacao | Design Patterns Creational tutorial 2025 | Design Patterns Creational explained",
                "d": "Factory: criar objetos sem expor logica. Abstract Factory: familias de objetos. Builder: construir objeto complexo passo a passo. Singleton: 1 instancia global (usar com cuidado — dificulta testes)."
              },
              {
                "w": "Design Patterns: Structural (Adapter, Decorator, Facade, Proxy)",
                "s": "design patterns structural adapter decorator facade | padroes estruturais | Design Patterns Structural tutorial 2025 | Design Patterns Structural explained",
                "d": "Adapter: compatibilizar interfaces. Decorator: adicionar comportamento sem heranca. Facade: interface simples pra subsistema complexo. Proxy: intermediario (lazy loading, cache, access control)."
              },
              {
                "w": "Design Patterns: Behavioral (Observer, Strategy, Command, State, Iterator)",
                "s": "design patterns behavioral observer strategy command | padroes comportamentais | Design Patterns Behavioral tutorial 2025 | Design Patterns Behavioral explained",
                "d": "Observer: notificar mudancas (event listeners). Strategy: trocar algoritmo em runtime. Command: encapsular acao como objeto (undo/redo). State: comportamento muda com estado. Iterator: percorrer colecao."
              },
              {
                "w": "Agile: Scrum (sprints, daily, review, retro), Kanban, XP",
                "s": "agile scrum kanban XP | metodologia agil scrum sprints | extreme programming | Agile Scrum sprints tutorial portugues",
                "d": "Scrum: sprints 2 semanas, roles (PO, SM, Dev), cerimonias (planning, daily, review, retro). Kanban: fluxo continuo, WIP limit. XP: pair programming, TDD, continuous integration. User stories: 'Como [persona], quero [acao], pra [beneficio]'."
              },
              {
                "w": "Code review: boas praticas, o que revisar, ferramentas, cultura",
                "s": "code review best practices | como fazer code review | pull request review tips | Code review boas explained",
                "d": "Revisar: logica, edge cases, naming, testes, seguranca. NAO revisar: estilo (use linter). Feedback construtivo: 'Que tal X?' nao 'Isso ta errado'. Aprovar com comentarios. Max 400 linhas por PR. Revisar em <24h. Ferramentas: GitHub PR, Reviewable."
              },
              {
                "w": "Documentação como skill: Diátaxis framework (tutorial/howto/reference/explanation), docs-as-code, ADRs, changelogs",
                "s": "documentation | Diataxis | docs-as-code | ADR | changelog | writing",
                "d": "Boa documentação é skill raro: Diátaxis separa em 4 tipos. Docs-as-code: versionar com o código. ADRs registram decisões. Changelogs comunicam mudanças"
              },
              {
                "w": "Monorepo vs Polyrepo: trade-offs, tooling (Nx, Turborepo, Bazel), quando usar cada estratégia",
                "s": "monorepo polyrepo | Nx Turborepo Bazel | repository strategy | tradeoffs",
                "d": "Monorepo: todo código junto (Google, Facebook), facilita refactoring. Polyrepo: repos separados, mais autonomia. Nx/Turborepo otimizam monorepos"
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
                "s": "testing pyramid unit integration e2e | piramide testes software | test types comparison | Piramide testes unitario tutorial portugues",
                "d": "Unitario: funcao isolada (rapido, muitos). Integracao: componentes juntos (API+DB). E2E: usuario real (lento, poucos). Piramide: muitos unitarios, poucos e2e. Custo sobe conforme sobe na piramide."
              },
              {
                "w": "Testes unitarios: pytest, Jest, mocks, stubs, fixtures, parametrize",
                "s": "unit testing pytest Jest mocks | testes unitarios | mocking stubs fixtures | Testes unitarios pytest tutorial portugues",
                "d": "Mock: simular dependencia (API, DB). Stub: resposta fixa. Fixture: setup/teardown. Parametrize: mesmo teste com dados diferentes. Cobertura: pytest --cov (80%+ e bom, 100% e utopia)."
              },
              {
                "w": "Testes de integracao: testar API+DB juntos, testcontainers",
                "s": "integration testing API database | testes integracao | testcontainers tutorial | Testes integracao testar explained",
                "d": "Testar fluxo real: request > controller > service > repository > DB. Testcontainers: subir DB real em Docker pra teste. Mais lento mas pega bugs que unitario nao pega."
              },
              {
                "w": "Testes E2E: Cypress, Playwright, Selenium. Fluxos criticos do usuario",
                "s": "e2e testing Cypress Playwright | testes end to end | browser automation testing | Testes Cypress Playwright tutorial portugues",
                "d": "Playwright/Cypress: simular clique, digitacao, navegacao no browser. Testar fluxos criticos: login, checkout, cadastro. Fragil (muda UI, quebra teste). Poucos mas valiosos."
              },
              {
                "w": "Testes de carga e performance: k6, Locust, metricas (p50, p95, p99)",
                "s": "load testing k6 Locust | testes carga performance | latency percentiles p99 | Testes carga performance tutorial portugues",
                "d": "k6 (JS) ou Locust (Python): simular centenas/milhares de usuarios. Metricas: throughput (req/s), latency p50/p95/p99 (percentis). Encontrar gargalos ANTES de ir pra producao."
              },
              {
                "w": "TDD e BDD: test-first, red-green-refactor, Gherkin/Cucumber",
                "s": "TDD BDD test driven development | TDD red green refactor | BDD Gherkin Cucumber | test-first red-green-refactor Gherkin/Cucumber tutorial portugues",
                "d": "TDD: escrever teste ANTES do codigo. Red (falha) > Green (implementar minimo) > Refactor (melhorar). BDD: Given-When-Then (linguagem de negocio). Disciplina que melhora design do codigo."
              },
              {
                "w": "Cobertura de código: line, branch, condition, MC/DC — métricas e quando são enganosas",
                "s": "code coverage | line branch condition | MC/DC | coverage metrics",
                "d": "Cobertura mede quanto código os testes exercitam. Line é superficial, branch é melhor. 100% cobertura ≠ 0 bugs (pode ter lógica errada)"
              },
              {
                "w": "Mutation testing: injetar bugs no código e verificar se testes detectam (PIT, mutmut)",
                "s": "mutation testing | PIT mutmut | inject bugs | test quality | kill mutants",
                "d": "Mutation testing altera código (ex: troca > por <) e verifica se testes falham. Se não falham, testes são fracos. Mede qualidade dos testes"
              },
              {
                "w": "Property-based testing: Hypothesis (Python), fast-check (JS) — gerar inputs aleatórios automaticamente",
                "s": "property-based testing | Hypothesis | fast-check | random inputs | invariants",
                "d": "Em vez de escrever casos manualmente, define propriedades (ex: sort(x) sempre ordenado) e framework gera milhares de inputs. Encontra edge cases"
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
                "s": "tech ethics algorithmic bias | etica tecnologia vies algoritmico | AI fairness bias | Etica tecnologia vies tutorial portugues",
                "d": "Algoritmos refletem vieses dos dados. Exemplo: reconhecimento facial pior pra pele escura. Transparencia: explicar decisoes automatizadas. Fairness: metricas de justica. Impacto real em vidas reais."
              },
              {
                "w": "LGPD / GDPR: dados pessoais, consentimento, direitos do titular",
                "s": "LGPD Brasil dados pessoais | GDPR data protection | privacy law developers | LGPD GDPR dados tutorial portugues",
                "d": "LGPD (Brasil) / GDPR (Europa). Dados pessoais: qualquer info que identifica alguem. Consentimento explicito. Direitos: acesso, correcao, exclusao, portabilidade. Multas pesadas. Dev precisa saber!"
              },
              {
                "w": "Privacidade by design, minimizacao de dados, anonimizacao",
                "s": "privacy by design | data minimization anonymization | privacy engineering | Privacidade design minimizacao tutorial portugues",
                "d": "Privacy by design: privacidade desde o inicio do projeto, nao depois. Coletar MINIMO necessario. Anonimizar quando possivel. Encriptar em repouso e transito. Hash de dados sensiveis."
              },
              {
                "w": "Impacto social da automacao: trabalho, acessibilidade, inclusao digital",
                "s": "social impact automation technology | impacto social tecnologia | digital inclusion accessibility | Impacto social automacao tutorial portugues",
                "d": "Automacao elimina empregos mas cria outros. Acessibilidade: 15% da populacao tem deficiencia. Inclusao digital: nem todos tem acesso. Como engenheiro, voce tem responsabilidade pelo que constroi."
              },
              {
                "w": "IA responsavel: fairness, accountability, transparency, explicabilidade",
                "s": "responsible AI fairness accountability | IA responsavel transparencia | AI ethics fairness | explainable AI XAI",
                "d": "Fairness: modelo trata grupos diferentes igualmente? Metricas: demographic parity, equalized odds. Accountability: quem e responsavel quando IA erra? Transparency: usuario sabe que e IA? Explicabilidade (XAI): LIME, SHAP mostram POR QUE modelo decidiu. EU AI Act: regulacao por risco."
              },
              {
                "w": "Sustentabilidade em tech: green computing, carbon footprint, eficiencia energetica",
                "s": "green computing sustainability | tech carbon footprint | sustainable software engineering | energy efficient computing",
                "d": "Treinar GPT-4: ~300 toneladas de CO2. Data centers: 1-2% da eletricidade global. Green computing: otimizar codigo, usar menos recursos, cache, CDN. Cloud carbon footprint: medir. Escolher regiao do datacenter com energia limpa. Codigo eficiente = menos servidores = menos energia."
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
                "s": "DFA NFA finite automata | automatos finitos DFA NFA | finite state machine theory | Automatos finitos deterministas tutorial portugues",
                "d": "DFA: cada estado + entrada = proximo estado unico. NFA: pode ter multiplos caminhos. Equivalentes em poder! Usados em regex, parsing, protocolos. Descrever com diagrama de estados."
              },
              {
                "w": "Expressoes regulares (teoria), linguagens regulares, lema do bombeamento",
                "s": "regular expressions theory | linguagens regulares | pumping lemma regular | Expressoes regulares teoria tutorial portugues",
                "d": "Regex descreve linguagens regulares. Todo DFA = 1 regex e vice-versa. Lema do bombeamento: prova que algo NAO e regular (ex: a^n b^n). Limitacao: regex nao conta."
              },
              {
                "w": "Gramaticas livres de contexto, automatos de pilha, parsing",
                "s": "context free grammar pushdown automata | gramatica livre contexto | CFG parsing | Gramaticas livres contexto tutorial portugues",
                "d": "CFG: regras S -> aSb | ab. Mais poderoso que regex (consegue contar). Automato de pilha: DFA + pilha infinita. Arvore de derivacao. Base de compiladores e linguagens de programacao."
              },
              {
                "w": "Maquinas de Turing, decidibilidade, problema da parada",
                "s": "Turing machine halting problem | maquina de Turing decidibilidade | computability theory | Maquinas Turing decidibilidade tutorial portugues",
                "d": "MT: fita infinita + cabecote + estados. Pode computar TUDO que e computavel. Problema da parada: impossivel decidir se programa para ou nao (Turing 1936). Existem problemas sem solucao algoritmica!"
              },
              {
                "w": "Classes de complexidade: P, NP, NP-completo, NP-hard",
                "s": "P NP NP-complete complexity classes | classes complexidade P NP | NP complete problems | Classes complexidade NP-completo tutorial portugues",
                "d": "P: resolvivel em tempo polinomial. NP: verificavel em polinomial. NP-completo: mais dificil de NP (SAT, TSP, Knapsack). P=NP? Problema do milenio (1 milhao de dolares). Na pratica: se NP-completo, use heuristica."
              },
              {
                "w": "Reducao e completude: provar que problema A e tao dificil quanto B",
                "s": "reduction NP-completeness proof | reducao completude NP | proving NP-complete | computational reduction",
                "d": "Reducao: transformar problema A em problema B. Se B e facil e A reduz a B → A tambem e facil. Se A e dificil e A reduz a B → B tambem e dificil. Cook-Levin: SAT e NP-completo. Pra provar NP-completo: reduzir SAT (ou outro NP-completo) ao seu problema. Ferramenta fundamental em teoria."
              },
              {
                "w": "Classes de complexidade: P, NP, NP-hard, NP-complete, co-NP, PSPACE — hierarquia e exemplos",
                "s": "complexity classes | P NP NP-hard NP-complete | co-NP PSPACE | hierarchy",
                "d": "P: resolvível em tempo polinomial. NP: verificável em tempo polinomial. NP-completo: os mais difíceis de NP (SAT, TSP). P=NP? problema aberto"
              },
              {
                "w": "Reduções: provar NP-completude reduzindo problema conhecido (SAT) para novo problema",
                "s": "reduction | NP-completeness proof | SAT reduction | polynomial reduction",
                "d": "Para provar que problema X é NP-completo: mostrar que está em NP e reduzir SAT (ou outro NP-completo) para X em tempo polinomial"
              },
              {
                "w": "Computabilidade avançada: hierarquia aritmética, graus de Turing, oráculos — problemas além de decidível/indecidível",
                "s": "arithmetical hierarchy | Turing degrees | oracle machine | computability beyond",
                "d": "Nem todos problemas indecidíveis são igualmente difíceis. Hierarquia aritmética classifica por nível. Oracle machines exploram o que seria possível com oráculo"
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
                "s": "compiler phases lexer parser AST | fases compilador | lexical analysis tokenization | Fases analise lexica tutorial portugues",
                "d": "Codigo fonte > tokens (lexer: 'if', '(', 'x', '>', '0') > AST (parser: arvore da estrutura). Regex pra tokens. CFG pra gramatica. Cada fase simplifica a proxima."
              },
              {
                "w": "Analise semantica, tabela de simbolos, checagem de tipos",
                "s": "semantic analysis symbol table type checking | analise semantica compilador | type checking compiler | Analise semantica tabela tutorial portugues",
                "d": "AST pronta > verificar: variavel declarada? tipos compativeis? Tabela de simbolos: registra variaveis e seus tipos. Type checking: int + string = erro. Escopos: bloco, funcao, global."
              },
              {
                "w": "Geracao de codigo, otimizacao, bytecode vs codigo nativo",
                "s": "code generation compiler optimization | geracao codigo compilador | bytecode vs native code | Geracao codigo otimizacao tutorial portugues",
                "d": "AST > codigo intermediario > otimizar > codigo final. Bytecode: instrucoes pra VM (Java, Python). Nativo: instrucoes pro CPU (C, Rust). Otimizacoes: inlining, dead code elimination, constant folding."
              },
              {
                "w": "Projeto pratico: construir interpretador simples (Crafting Interpreters)",
                "s": "build interpreter tutorial | construir interpretador | Crafting Interpreters project | Projeto pratico construir explained",
                "d": "Melhor forma de entender: CONSTRUIR um. Crafting Interpreters (gratuito, craftinginterpreters.com): faz 2 interpretadores do zero. Comece pela parte 1 (tree-walk em Java/Python). Projeto transformador."
              },
              {
                "w": "Maquinas virtuais e bytecode: JVM, CPython bytecode, V8, LLVM IR",
                "s": "virtual machine bytecode JVM | CPython bytecode dis | LLVM IR compilation | V8 JavaScript engine",
                "d": "JVM: Java compila pra bytecode, JVM interpreta/JIT. CPython: .pyc = bytecode (dis.dis() mostra). V8 (Chrome): JS compilado JIT. LLVM: compilador intermediario (Clang, Rust usam). Vantagem: escrever 1 backend (VM) e suportar muitas linguagens. Desvantagem: overhead vs nativo."
              },
              {
                "w": "LLVM, WebAssembly (WASM), Just-In-Time (JIT) compilation",
                "s": "LLVM compiler infrastructure | WebAssembly WASM tutorial | JIT compilation explained | LLVM WASM JIT",
                "d": "LLVM: infraestrutura de compilador (frontend qualquer → LLVM IR → backend qualquer). WASM: bytecode pro browser (performance quase nativa). Compila de C/C++/Rust pra WASM. JIT: compilar em runtime (V8, PyPy, LuaJIT). Futuro: WASM fora do browser (WASI), edge computing, plugins."
              },
              {
                "w": "Parsers LL e LR: top-down vs bottom-up, LALR(1), ferramentas (ANTLR, Bison/Yacc)",
                "s": "LL parser | LR parser | LALR | top-down bottom-up | ANTLR Bison Yacc",
                "d": "LL: top-down (preditivo, recursive descent). LR: bottom-up (shift-reduce, mais poderoso). LALR(1) é usado na maioria dos compiladores reais"
              },
              {
                "w": "Type checking e type inference: sistemas de tipos, Hindley-Milner, TypeScript como exemplo prático",
                "s": "type checking | type inference | Hindley-Milner | type system | TypeScript",
                "d": "Type checker verifica tipos em compilação. Type inference deduz tipos automaticamente (Rust, Haskell). TypeScript é exemplo acessível de tipos estáticos"
              },
              {
                "w": "Verificação formal: provar que software está correto matematicamente (Coq, Lean, TLA+, model checking)",
                "s": "formal verification | Coq Lean TLA+ | model checking | correctness proof",
                "d": "Além de testes: provar matematicamente que código é correto. TLA+ para sistemas distribuídos, Coq/Lean para provas. Usado em aviação, hardware, criptografia"
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
                "s": "partial derivatives gradient | derivadas parciais gradiente | multivariable calculus | Derivadas parciais gradiente tutorial portugues",
                "d": "Derivada parcial: derivar em relacao a uma variavel, fixando as outras. Gradiente: vetor de todas parciais = direcao de maior crescimento. Base do gradient descent!"
              },
              {
                "w": "Regra da cadeia multivariavel, Jacobiano",
                "s": "chain rule multivariable jacobian | regra cadeia multivariavel | jacobian matrix | Regra cadeia multivariavel tutorial portugues",
                "d": "Cadeia multi: dy/dt = (dy/dx1)(dx1/dt) + (dy/dx2)(dx2/dt). Jacobiano: matriz de todas derivadas parciais. Essencial pra backpropagation em redes neurais."
              },
              {
                "w": "Hessiana, pontos criticos, convexidade",
                "s": "hessian matrix critical points | hessiana otimizacao | convex optimization basics | Hessiana pontos criticos tutorial portugues",
                "d": "Hessiana: matriz de segundas derivadas. Positiva definida = minimo local. Convexidade: funcao em forma de bacia (1 so minimo). Loss functions convexas sao mais faceis."
              },
              {
                "w": "Otimizacao: SGD, Momentum, Adam, learning rate",
                "s": "SGD Adam optimizer | gradient descent variants | optimization deep learning | Otimizacao Momentum Adam tutorial portugues",
                "d": "SGD: atualizar pesos na direcao oposta ao gradiente. Momentum: acumula velocidade. Adam: adapta lr por parametro. Learning rate scheduling: warmup, cosine decay."
              },
              {
                "w": "Funcoes de custo em ML: MSE, cross-entropy, hinge loss, suas derivadas",
                "s": "loss functions ML MSE cross-entropy | funcoes custo machine learning | loss function derivatives | gradient of cross entropy",
                "d": "MSE: (y-y_hat)^2 (regressao). Cross-entropy: -y*log(y_hat) (classificacao). Hinge loss: max(0, 1-y*y_hat) (SVM). Derivada da loss + chain rule = gradiente pra backpropagation. Escolher loss errada = modelo aprendendo a coisa errada."
              },
              {
                "w": "Otimizacao com restricoes: Lagrange multipliers, KKT, programacao linear (intro)",
                "s": "Lagrange multipliers optimization | KKT conditions constrained | linear programming intro | optimization constraints",
                "d": "Lagrange: otimizar f(x) sujeito a g(x)=0. Gradientes paralelos no ponto otimo. KKT: generalizacao pra desigualdades. Programacao linear: otimizar funcao linear com restricoes lineares (simplex). Aplicacoes: SVM usa KKT, alocacao de recursos usa LP. scipy.optimize.linprog."
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
                "s": "eigenvalues eigenvectors diagonalization | autovalores autovetores | eigendecomposition | Autovalores autovetores diagonalizacao tutorial portugues",
                "d": "Av = lambda*v. Autovetor: direcao que nao muda. Autovalor: quanto escala. PCA usa autovetores da covariancia. Diagonalizacao: A = PDP^-1."
              },
              {
                "w": "SVD: Singular Value Decomposition",
                "s": "SVD singular value decomposition | SVD explained | SVD applications ML | Singular Value Decomposition tutorial portugues",
                "d": "A = U*Sigma*V'. Decompoe qualquer matriz. Aplicacoes: PCA, compressao de imagem, sistemas de recomendacao, reducao de dimensionalidade."
              },
              {
                "w": "Normas L1, L2, Frobenius, produto interno em espacos de funcoes",
                "s": "L1 L2 norm Frobenius | normas algebra linear | inner product spaces | Normas Frobenius produto tutorial portugues",
                "d": "L1: soma dos absolutos (sparse). L2: raiz da soma dos quadrados (Euclidiana). Frobenius: norma de matriz. Regularizacao: L1 = Lasso, L2 = Ridge."
              },
              {
                "w": "Decomposicoes: LU, QR, Cholesky",
                "s": "LU QR Cholesky decomposition | decomposicoes matrizes | matrix factorization | Decomposicoes Cholesky tutorial portugues",
                "d": "LU: resolver sistemas. QR: minimos quadrados. Cholesky: matrizes simetricas positivas definidas (muito eficiente). Todas usadas em ML internamente."
              },
              {
                "w": "PCA: Principal Component Analysis, reducao de dimensionalidade, variancia explicada",
                "s": "PCA principal component analysis | PCA dimensionality reduction | PCA explained variance | PCA sklearn tutorial",
                "d": "PCA: encontrar direcoes de maxima variancia. Autovetores da covariancia = componentes principais. Projetar dados nessas direcoes = reduzir dimensoes. Variancia explicada: quantos PCs pra capturar 95%? Aplicacao: visualizar dados de alta dimensao, remover ruido, acelerar modelos."
              },
              {
                "w": "Transformacoes lineares em ML: projecoes, kernel trick, feature spaces",
                "s": "linear transformations ML | kernel trick SVM | feature space mapping | reproducing kernel Hilbert space",
                "d": "Kernel trick: mapear dados pra espaco de alta dimensao SEM calcular as coordenadas. RBF kernel: pontos perto ficam similares. Polynomial kernel. Feature space: espaco onde dados sao linearmente separaveis. SVM + kernel = classificar dados nao-lineares. Matematicamente elegante."
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
                "s": "probability axioms conditional Bayes | probabilidade condicional Bayes | Bayes theorem | Probabilidade axiomas condicional tutorial portugues",
                "d": "P(A|B)=P(B|A)P(A)/P(B). Independencia: P(A e B)=P(A)*P(B). Bayes: atualizar crencas com evidencia. Spam filter, diagnostico medico."
              },
              {
                "w": "Variaveis aleatorias: discreta, continua, PMF, PDF, CDF",
                "s": "random variables PMF PDF CDF | variaveis aleatorias | probability distributions | Variaveis aleatorias discreta tutorial portugues",
                "d": "Discreta: dado, moeda (PMF). Continua: altura, peso (PDF). CDF: P(X<=x). Esperanca E[X], variancia Var(X). Propriedades de linearidade."
              },
              {
                "w": "Distribuicoes: Bernoulli, Binomial, Poisson, Normal, Exponencial, Uniforme",
                "s": "probability distributions Bernoulli Binomial Poisson Normal | distribuicoes probabilidade | Distribuicoes Bernoulli Binomial tutorial 2025 | Distribuicoes Bernoulli Binomial explained",
                "d": "Bernoulli: 1 tentativa (cara/coroa). Binomial: N tentativas. Poisson: eventos raros. Normal: bell curve (CLT!). Exponencial: tempo entre eventos."
              },
              {
                "w": "MLE, MAP, estimadores, viés, variancia, trade-off",
                "s": "MLE MAP estimation | maximum likelihood estimation | bias variance tradeoff | estimadores viés variancia tutorial portugues",
                "d": "MLE: parametros que maximizam P(dados|theta). MAP: MLE + prior. Vies: erro sistematico. Variancia: erro por ruido. Trade-off: modelo simples (vies alto) vs complexo (variancia alta)."
              },
              {
                "w": "Testes de hipotese: p-valor, intervalo de confianca, CLT",
                "s": "hypothesis testing p-value | teste hipotese p-valor | central limit theorem | Testes hipotese p-valor tutorial portugues",
                "d": "H0 (nulo) vs H1 (alternativa). p-valor: probabilidade de ver resultado tao extremo se H0 for verdade. <0.05: rejeitar. CLT: media amostral tende a Normal. IC: range provavel do parametro."
              },
              {
                "w": "Inferencia bayesiana: prior, likelihood, posterior, updating beliefs",
                "s": "bayesian inference tutorial | inferencia bayesiana | Bayes prior posterior | bayesian statistics python",
                "d": "Prior: crenca antes de ver dados. Likelihood: P(dados|hipotese). Posterior = Prior * Likelihood / Evidence. Updating: conforme ve mais dados, posterior se refina. PyMC: inferencia bayesiana em Python. Bayesiano vs frequentista: debate eterno."
              },
              {
                "w": "Rigor estatístico: p-hacking, multiple comparisons, reprodutibilidade, effect size, confidence intervals vs p-values",
                "s": "p-hacking | multiple comparisons | effect size | statistical rigor | reproducibility",
                "d": "P-values são mal usados: p-hacking (testar até encontrar p<0.05). Effect size importa mais que significância. Reproducibility crisis é real em ML"
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
                "s": "numerical errors truncation rounding | numerical stability conditioning | floating point errors | Erros numericos truncamento tutorial portugues",
                "d": "Truncamento: cortar serie infinita (Taylor). Arredondamento: IEEE 754 (0.1+0.2!=0.3). Estabilidade: algoritmo amplifica erros? Condicionamento: problema e sensivel a perturbacoes? Numero de condicao da matriz: se alto, cuidado com linalg.solve."
              },
              {
                "w": "Metodos numericos: raizes (Newton-Raphson), integracao (Simpson), EDOs (Euler, RK4)",
                "s": "numerical methods Newton Raphson | numerical integration Simpson | Euler Runge-Kutta ODE | Metodos numericos raizes tutorial portugues",
                "d": "Newton-Raphson: encontrar raiz iterativamente (x_new = x - f(x)/f'(x)). Simpson: integral numerica. Euler: EDO mais simples (pouco preciso). RK4: padrao pra EDOs. scipy.integrate, scipy.optimize. Quando formula analitica nao existe, metodo numerico resolve."
              },
              {
                "w": "scipy: optimize, integrate, interpolate, linalg, signal, sparse",
                "s": "scipy tutorial scientific computing | scipy optimize integrate | Python scientific computing | scipy optimize integrate explained",
                "d": "scipy.optimize: minimize, curve_fit, root. scipy.integrate: quad, solve_ivp. scipy.interpolate: interp1d, spline. scipy.linalg: eig, svd, solve. scipy.signal: filtros, FFT. scipy.sparse: matrizes enormes com muitos zeros. Numpy+Scipy = MATLAB gratuito."
              },
              {
                "w": "Interpolacao e ajuste de curvas: Lagrange, splines, curve fitting, minimos quadrados",
                "s": "interpolation curve fitting | Lagrange spline interpolation | least squares fitting | Interpolacao ajuste curvas tutorial portugues",
                "d": "Interpolacao: passar por todos os pontos. Lagrange: polinomio exato. Splines: polinomios por trecho (suave). Curve fitting: achar melhor curva que APROXIMA (nao necessariamente passa por todos). Minimos quadrados: minimizar soma dos erros ao quadrado. scipy.interpolate, numpy.polyfit."
              },
              {
                "w": "Sistemas lineares numericos: condicionamento, metodos iterativos (Jacobi, Gauss-Seidel)",
                "s": "numerical linear algebra iterative methods | Jacobi Gauss-Seidel | condition number matrix | Sistemas lineares numericos tutorial portugues",
                "d": "Sistemas grandes: eliminacao de Gauss e lenta (O(n3)). Metodos iterativos: Jacobi, Gauss-Seidel, gradiente conjugado — convergem pra solucao. Condicionamento: numero de condicao alto = resultado sensivel a erros. Matrizes esparsas: a maioria dos problemas reais. scipy.sparse.linalg."
              },
              {
                "w": "FFT (Fast Fourier Transform): decompor sinais em frequencias, aplicacoes",
                "s": "FFT fast Fourier transform | FFT signal processing python | numpy fft tutorial | Fourier transform applications",
                "d": "FFT: O(n log n) vs DFT O(n2). Aplicacoes: processamento de audio (equalizer), compressao (JPEG, MP3), telecomunicacoes. numpy.fft. Frequencia > tempo e vice-versa. Usado em ML pra features de audio, processamento de imagens, analise de sinais de sensores."
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
                "s": "continuous discrete signals | periodic aperiodic | energy power signal",
                "d": "Sinais contínuos variam no tempo (áudio). Discretos são amostrados (digital). Classificar ajuda a escolher ferramentas de análise"
              },
              {
                "w": "Sistemas LTI (Lineares e Invariantes no Tempo): superposição, resposta ao impulso, convolução",
                "s": "LTI system | linear time invariant | impulse response | convolution",
                "d": "Sistemas LTI são previsíveis: saída é convolução da entrada com resposta ao impulso. Base de filtros digitais e processamento de sinais"
              },
              {
                "w": "Transformada de Fourier: decompor sinal em frequências, espectro, DFT e FFT",
                "s": "Fourier transform | frequency spectrum | DFT FFT | frequency domain",
                "d": "Fourier converte sinal do domínio do tempo para frequências. FFT é algoritmo rápido (O(n log n)). Essencial para áudio, imagens, comunicação"
              },
              {
                "w": "Teorema de Nyquist-Shannon: taxa de amostragem ≥ 2× frequência máxima, aliasing",
                "s": "Nyquist Shannon | sampling theorem | aliasing | sample rate",
                "d": "Para digitalizar sinal sem perda: amostrar pelo menos 2× a maior frequência. Violação causa aliasing (frequências fantasma)"
              },
              {
                "w": "Transformada de Laplace: análise de sistemas contínuos, função de transferência H(s), polos e zeros",
                "s": "Laplace transform | transfer function H(s) | poles zeros | s-domain",
                "d": "Laplace transforma equações diferenciais em álgebra. Polos determinam estabilidade do sistema. Zeros afetam resposta em frequência"
              },
              {
                "w": "Transformada Z: versão discreta de Laplace, análise de filtros digitais, ROC (Region of Convergence)",
                "s": "Z transform | discrete Laplace | digital filter analysis | ROC",
                "d": "Transformada Z analisa sistemas discretos como Laplace analisa contínuos. Fundamental para projetar filtros digitais"
              },
              {
                "w": "Convolução: operação fundamental de sistemas LTI, convolução circular vs linear, overlap-add",
                "s": "convolution | circular linear | overlap-add | LTI fundamental operation",
                "d": "Convolução calcula saída de sistema LTI: somar contribuições de cada amostra da entrada. Implementada eficientemente via FFT no domínio da frequência"
              },
              {
                "w": "Teoria da Informação: entropia de Shannon, codificação de fonte (Huffman), capacidade de canal, compressão",
                "s": "information theory | Shannon entropy | Huffman coding | channel capacity | compression",
                "d": "Shannon definiu entropia como medida de informação. Huffman coding comprime baseado em frequência. Capacidade de canal limita taxa máxima de comunicação confiável"
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
                "s": "digital filter | FIR IIR | finite infinite impulse response | filter design",
                "d": "FIR: sempre estável, fase linear, mais coeficientes. IIR: menos coeficientes, pode ser instável. Escolher baseado na aplicação"
              },
              {
                "w": "Filtros práticos: passa-baixa, passa-alta, passa-banda, rejeita-banda, Butterworth, Chebyshev",
                "s": "lowpass highpass bandpass | Butterworth Chebyshev | filter types",
                "d": "Tipos de filtro por frequência: passa-baixa (remover ruído), passa-alta (remover DC), passa-banda (isolar faixa). Butterworth = resposta suave"
              },
              {
                "w": "DSP em Python: scipy.signal para filtros, numpy.fft para Fourier, librosa para áudio",
                "s": "DSP Python | scipy.signal | numpy.fft | librosa | audio processing",
                "d": "Python para DSP: scipy.signal projeta e aplica filtros, numpy.fft calcula FFT, librosa analisa áudio (espectrogramas, pitch, MFCC)"
              },
              {
                "w": "Espectrograma: representação tempo-frequência, STFT (Short-Time Fourier Transform), janelas",
                "s": "spectrogram | STFT | short-time Fourier | windowing | Hann Hamming",
                "d": "Espectrograma mostra como frequências mudam no tempo. STFT aplica FFT em janelas deslizantes. Janelas (Hann, Hamming) reduzem vazamento espectral"
              },
              {
                "w": "Aplicações de DSP: compressão de áudio (MP3), reconhecimento de voz, radar, telecomunicação, imagens médicas",
                "s": "DSP applications | audio compression MP3 | speech recognition | radar | telecom",
                "d": "DSP está em tudo: MP3 comprime via masking psicoacústico, reconhecimento de voz usa MFCC+ML, radar processa eco, imagens médicas filtram ruído"
              },
              {
                "w": "ADC e DAC: conversão analógico-digital e digital-analógico, resolução (bits), taxa de amostragem",
                "s": "ADC DAC | analog digital conversion | resolution bits | sample rate",
                "d": "ADC converte sinal contínuo em discreto (sensor → número). DAC faz o inverso (número → som). Resolução (12/16/24 bits) determina precisão"
              },
              {
                "w": "Projeto prático: analisador de espectro de áudio em tempo real (microfone → FFT → visualização)",
                "s": "spectrum analyzer | real-time audio | microphone FFT | visualization",
                "d": "Capturar áudio do microfone, aplicar FFT, visualizar espectro em tempo real com matplotlib ou web. Projeto que integra todos os conceitos"
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
                "s": "numpy tutorial | numpy arrays broadcasting | numpy linear algebra | NumPy arrays broadcasting explained",
                "d": "10-100x mais rapido que listas. Broadcasting, reshaping, random, linalg."
              },
              {
                "w": "Pandas: DataFrame, limpeza, merge, groupby, pivot",
                "s": "pandas tutorial complete | pandas dataframe groupby | data cleaning pandas | Pandas DataFrame limpeza explained",
                "d": "read_csv, fillna, dropna, groupby, merge, pivot_table, apply. Datetime."
              },
              {
                "w": "Matplotlib + Seaborn: graficos e visualizacao",
                "s": "matplotlib seaborn tutorial | data visualization python | seaborn plots | Matplotlib Seaborn graficos explained",
                "d": "plot, bar, scatter, hist, heatmap, boxplot, pairplot. Sempre rotule eixos."
              },
              {
                "w": "EDA e Estatistica: distribuicoes, correlacoes, Bayes",
                "s": "EDA tutorial python | exploratory data analysis | probability Bayes | Estatistica distribuicoes correlacoes explained",
                "d": "Media, mediana, desvio padrao, correlacao, outliers. P(A|B)=P(B|A)P(A)/P(B). Normal, Binomial, Poisson."
              },
              {
                "w": "Limpeza de dados: valores faltantes, outliers, duplicatas, inconsistencias",
                "s": "data cleaning pandas | limpeza dados python | handling missing values outliers | data quality pandas",
                "d": "80% do tempo de data science e limpeza. Missing values: fillna(media), dropna(), ou modelo pra prever. Outliers: IQR method, Z-score. Duplicatas: df.duplicated(). Inconsistencias: 'SP' vs 'sp' vs 'Sao Paulo'. dtypes errados: '42' como string. Sempre EDA ANTES de modelar."
              },
              {
                "w": "Feature Engineering: criar features, encoding categorico, datetime features",
                "s": "feature engineering tutorial | encoding categorico one-hot label | datetime features ML | feature creation pandas",
                "d": "Criar features: idade a partir de data_nascimento. Encoding: one-hot (get_dummies), label encoding, target encoding. Datetime: dia_semana, hora, is_weekend, dias_desde_evento. Texto: len, word_count, has_emoji. Feature engineering bom > modelo complexo. Dominio do problema importa."
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
                "s": "types machine learning | tipos aprendizado maquina | supervised unsupervised | Tipos supervisionado nao-sup tutorial portugues",
                "d": "Supervisionado: com rotulos. Nao-sup: sem. Semi: poucos. RL: recompensas."
              },
              {
                "w": "Regressao Linear e Logistica (do zero + sklearn)",
                "s": "linear logistic regression scratch | regressao linear sklearn | gradient descent | Regressao Linear Logistica tutorial portugues",
                "d": "Linear: y=wx+b, MSE, gradiente. Logistica: sigmoid, classificacao. Implemente do zero primeiro!"
              },
              {
                "w": "KNN, SVM, Naive Bayes, Clustering (K-Means, DBSCAN)",
                "s": "KNN SVM naive bayes clustering | K-means DBSCAN python | classification | Naive Bayes Clustering tutorial portugues",
                "d": "KNN: vizinhos. SVM: hiperplano. NB: probabilistico. K-Means: centroides. DBSCAN: densidade."
              },
              {
                "w": "Arvores, Random Forest, XGBoost/LightGBM",
                "s": "decision tree random forest XGBoost | ensemble methods | gradient boosting | Arvores Random Forest tutorial portugues",
                "d": "Gini/entropia. Bagging (RF) vs Boosting (XGB). Muito usados em producao e Kaggle."
              },
              {
                "w": "Feature Engineering, Scaling, Regularizacao L1/L2",
                "s": "feature engineering scaling | regularization L1 L2 | overfitting bias variance | Feature Engineering Scaling tutorial portugues",
                "d": "StandardScaler/MinMax. L1(Lasso) L2(Ridge) ElasticNet. Dropout, early stopping."
              },
              {
                "w": "Pipeline, Cross-Validation, GridSearch, Metricas",
                "s": "sklearn pipeline cross validation GridSearch | ML metrics precision recall F1 | Pipeline Cross-Validation GridSearch tutorial 2025 | Pipeline Cross-Validation GridSearch explained",
                "d": "Pipeline encadeia. K-Fold CV. Grid/RandomSearch. Accuracy, Precision, Recall, F1, ROC-AUC."
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
                "s": "ML project end to end | machine learning project lifecycle | ML pipeline complete | Projeto end-to-end problema tutorial portugues",
                "d": "1. Definir problema (classificacao? regressao?). 2. Coletar/limpar dados. 3. EDA. 4. Feature engineering. 5. Treinar modelos. 6. Avaliar (cross-val). 7. Deploy. 8. Monitorar. Kaggle pra praticar."
              },
              {
                "w": "Automacao com Python: scrapers, bots, ETL, schedulers",
                "s": "python automation scrapers bots ETL | automacao python | python scheduled tasks | Automacao Python scrapers tutorial portugues",
                "d": "Scrapers: BeautifulSoup, Selenium, Playwright. Bots: Telegram, Discord (python-telegram-bot). ETL: extrair-transformar-carregar dados. Schedule: APScheduler, cron. Airflow pra pipelines maiores."
              },
              {
                "w": "Visao computacional basica: OpenCV, deteccao, classificacao de imagens",
                "s": "OpenCV computer vision basics | visao computacional OpenCV python | image classification tutorial | Visao computacional basica explained",
                "d": "OpenCV: ler/escrever imagens, filtros, deteccao de bordas (Canny), contornos, transformacoes. Classificacao: treinar CNN simples (MNIST, CIFAR). Aplicacao: contar objetos, detectar defeitos."
              },
              {
                "w": "Processamento de sinais: FFT, filtros digitais, audio, sensores",
                "s": "digital signal processing FFT | processamento sinais python | audio signal processing | Processamento sinais filtros tutorial portugues",
                "d": "FFT: decomor sinal em frequencias. Filtros digitais: passa-baixa, passa-alta. scipy.signal. Aplicacao: processar audio, filtrar ruido de sensores, vibracoes em robos."
              },
              {
                "w": "IA na borda (Edge AI): TensorFlow Lite, ONNX, inferencia em microcontroladores",
                "s": "edge AI TensorFlow Lite | AI microcontroller inference | TinyML ESP32 | borda Edge TensorFlow tutorial portugues",
                "d": "TFLite: modelo comprimido pra mobile. ONNX: formato universal. TinyML: ML em ESP32/Arduino (deteccao de som, gesto). Quantizacao: float32>int8 pra caber em hardware limitado."
              },
              {
                "w": "AutoML: ferramentas automaticas (AutoSklearn, FLAML, H2O), quando usar",
                "s": "AutoML tools AutoSklearn FLAML | AutoML machine learning | automated machine learning | H2O AutoML tutorial",
                "d": "AutoML: automatizar selecao de modelo, hiperparametros, features. AutoSklearn, FLAML (Microsoft), H2O. Bom pra baseline rapido. Nao substitui entendimento — voce precisa saber por que o modelo funciona. Use como ponto de partida, depois refine manualmente."
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
                "s": "storytelling with data | data visualization choosing chart type | data narrative | Storytelling dados narrativa tutorial portugues",
                "d": "Nao mostre dados — conte uma HISTORIA. Audiencia: quem vai ver? (C-level quer resumo, analista quer detalhe). Grafico certo: comparacao (bar), tendencia (line), composicao (pie/stacked), distribuicao (histogram), relacao (scatter). Menos e mais. Remova chart junk."
              },
              {
                "w": "Ferramentas de BI: Metabase, Tableau, Power BI, Looker, Streamlit",
                "s": "Metabase Tableau Power BI | business intelligence tools | Streamlit dashboard Python | Ferramentas Metabase Tableau tutorial portugues",
                "d": "Metabase: open-source, facil (SQL ou click). Tableau: poderoso, caro. Power BI: Microsoft (integra com Excel/Azure). Looker: Google (LookML). Streamlit: dashboard em Python (pra devs). Pra prototipo rapido: Streamlit. Pra empresa: Metabase ou Looker."
              },
              {
                "w": "SQL pra analytics: window functions, CTEs, pivots, date operations",
                "s": "SQL analytics window functions | SQL for data analysis | analytical SQL queries | analytics window functions tutorial portugues",
                "d": "Window functions: ROW_NUMBER, RANK, LAG, LEAD, running totals. CTEs: legibilidade. Date: DATE_TRUNC, EXTRACT, intervals. Pivoting: CASE WHEN ou CROSSTAB. Cohort analysis em SQL puro. SQL analytics = skill mais pedida em data."
              },
              {
                "w": "Streamlit: criar dashboard interativo em Python em minutos",
                "s": "Streamlit tutorial Python | Streamlit dashboard data | Streamlit app deploy | Streamlit interactive",
                "d": "pip install streamlit. st.title('Meu App'). st.dataframe(df). st.line_chart(data). st.selectbox(), st.slider(). streamlit run app.py. Deploy gratis: Streamlit Cloud. Em 50 linhas de Python voce tem um dashboard interativo. Melhor pra devs que Tableau."
              },
              {
                "w": "Design de dashboard: hierarquia visual, KPIs no topo, filtros, drill-down",
                "s": "dashboard design principles | dashboard best practices | KPI dashboard layout | data dashboard UX",
                "d": "Topo: KPIs principais (numeros grandes). Meio: graficos de tendencia. Baixo: detalhes/tabelas. Filtros: data, regiao, categoria. Drill-down: clicar pra ver detalhe. Cores: vermelho=ruim, verde=bom (cuidado daltonicos). Menos graficos = mais clareza. Pergunte: que decisao esse dashboard ajuda a tomar?"
              },
              {
                "w": "Metricas de negocio: como escolher o que medir, vanity metrics vs actionable metrics",
                "s": "business metrics vanity vs actionable | metricas negocio | north star metric | data driven decisions",
                "d": "Vanity metrics: page views, downloads (parecem bons, nao informam decisao). Actionable: retention, NPS, conversion rate, revenue per user. North Star Metric: 1 metrica que resume valor do produto (Airbnb: noites reservadas). Correlation != causation. Sempre pergunte: e o que faco com esse numero?"
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
                "s": "react components JSX props | react composition | react tutorial 2025 | React componentes props explained",
                "d": "Componente = funcao que retorna JSX. Props: dados do pai. Children: conteudo aninhado. Composicao > heranca: combinar componentes pequenos pra criar complexos. Key em listas."
              },
              {
                "w": "State e hooks: useState, useEffect, useRef, useCallback, useMemo",
                "s": "react hooks useState useEffect useRef | react hooks complete | useMemo useCallback | State hooks useState tutorial portugues",
                "d": "useState: estado local. useEffect: side effects (fetch, timers) + cleanup. useRef: referencia ao DOM ou valor persistente. useCallback: memoizar funcao. useMemo: memoizar valor. Rules of hooks: top level, so em componentes/hooks."
              },
              {
                "w": "State management: Context API, Zustand, Redux Toolkit, quando usar cada",
                "s": "react state management Zustand Redux | Context API vs Redux | global state react | State management Context tutorial portugues",
                "d": "Context: estado simples compartilhado (tema, auth). Zustand: leve, simples, popular. Redux Toolkit: robusto, pra apps grandes. Server state: React Query/TanStack Query (cache de API). Regra: comece com useState, escale conforme precisar."
              },
              {
                "w": "TypeScript com React: tipos, interfaces, generics, props tipadas",
                "s": "TypeScript React tutorial | React TypeScript props | TS generics components | TypeScript React tipos explained",
                "d": "interface Props { name: string; age?: number }. FC<Props>. Generics: <T>(items: T[]) => T. Tipar eventos: React.ChangeEvent<HTMLInputElement>. Tipar hooks: useState<User | null>(null). TS pega bugs antes de rodar."
              },
              {
                "w": "Tailwind CSS, CSS Modules, Styled Components: estilizacao moderna",
                "s": "Tailwind CSS React | CSS Modules vs Styled Components | react styling 2025 | Tailwind Modules Styled tutorial portugues",
                "d": "Tailwind: utility-first (className='flex gap-4 p-2'). CSS Modules: escopo local. Styled Components: CSS-in-JS. Tailwind domina o mercado em 2025. Responsive: sm: md: lg:. Dark mode: dark:."
              },
              {
                "w": "React Router, Next.js (SSR/SSG), formularios (React Hook Form)",
                "s": "React Router tutorial | Next.js SSR SSG | React Hook Form validation | React Router Next.js explained",
                "d": "React Router: SPA navigation. Next.js: SSR (server-side rendering) + SSG (static) + API routes + App Router. React Hook Form + Zod: formularios com validacao eficiente. Next.js e o framework React mais usado em producao."
              },
              {
                "w": "Testes frontend: Jest + React Testing Library, Storybook, Cypress/Playwright",
                "s": "react testing library jest | Storybook component testing | Cypress e2e react | Testes frontend Jest tutorial portugues",
                "d": "RTL: testar comportamento (nao implementacao). Storybook: documentar + testar componentes visualmente. Cypress/Playwright: e2e. Coverage: jest --coverage. Testar: renders, interacoes, async, error states."
              },
              {
                "w": "Next.js em profundidade: App Router, Server Components, SSR/SSG/ISR, API routes, middleware, deploy na Vercel",
                "s": "Next.js | App Router | Server Components | SSR SSG ISR | Vercel | middleware",
                "d": "Next.js é o framework React dominante: Server Components reduzem JS no cliente, SSR/SSG para performance/SEO, API routes para backend, deploy trivial na Vercel"
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
                "s": "REST API tutorial express fastapi | API design | HTTP status codes | REST Express.js FastAPI explained",
                "d": "GET POST PUT DELETE. 200 201 400 404 500. Middleware. Error handling. Rotas."
              },
              {
                "w": "Estrutura de projeto: rotas, controllers, services, repositories",
                "s": "API project structure | clean architecture API | separation of concerns backend | Estrutura projeto rotas tutorial portugues",
                "d": "Separar responsabilidades: routes (URLs) > controllers (receber request) > services (logica de negocio) > repositories (acesso a dados). Cada camada so conhece a proxima. Facilita testes e manutencao."
              },
              {
                "w": "Error handling, logging estruturado, middleware de erros",
                "s": "API error handling middleware | structured logging | express error middleware | Error handling logging tutorial portugues",
                "d": "Middleware de erro: catch-all no final. Erros operacionais (404, validation) vs programacao (bug). Logging: winston/pino (Node), loguru (Python). Structured: JSON com timestamp, level, request_id. NUNCA exponha stack trace pro cliente."
              },
              {
                "w": "Auth (JWT/OAuth), validacao, WebSockets, Swagger",
                "s": "JWT authentication | OAuth 2.0 | API validation Zod Pydantic | swagger openapi",
                "d": "JWT: tokens stateless. OAuth: login social. Validacao: Zod/Pydantic. Swagger: docs. WebSocket: real-time."
              },
              {
                "w": "Rate limiting, CORS, helmet, sanitizacao de input",
                "s": "API rate limiting | CORS configuration | helmet security headers | input sanitization",
                "d": "Rate limit: express-rate-limit / slowapi. CORS: quem pode acessar sua API. Helmet: headers de seguranca. Sanitizar input: nunca confiar no cliente. Validacao: Zod/Joi (Node), Pydantic (Python). Defense in depth."
              },
              {
                "w": "Deploy de API: Docker, variáveis de ambiente, health checks, graceful shutdown",
                "s": "deploy API Docker | environment variables production | health check endpoint API | Deploy Docker variáveis tutorial portugues",
                "d": "Dockerfile pra API. .env pra config (nunca hardcode secrets). Health check: GET /health retorna 200. Graceful shutdown: terminar requests em andamento antes de morrer. 12-factor app: metodologia pra apps cloud-native."
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
                "s": "PostgreSQL indexes explain analyze | PostgreSQL JSONB views | database optimization | PostgreSQL avancado indices tutorial portugues",
                "d": "B-tree (padrao), GIN (full-text, JSONB), GiST (geometria). EXPLAIN ANALYZE: ver plano de execucao. JSONB: semi-estruturado dentro do relacional. Views materializadas: cache de query complexa."
              },
              {
                "w": "ORM: Prisma (JS) / SQLAlchemy (Py), migrations, seeders",
                "s": "ORM Prisma SQLAlchemy tutorial | database migrations | ORM vs raw SQL | Prisma SQLAlchemy migrations explained",
                "d": "ORM: mapeia tabela>classe, linha>objeto. Prisma: schema declarativo, auto-complete. SQLAlchemy: flexivel. Migrations: versionar mudancas no schema (como git pro banco). Seeders: dados iniciais."
              },
              {
                "w": "Modelagem avancada: heranca, polimorfismo, soft delete, audit trail",
                "s": "database modeling patterns | soft delete audit trail | database design patterns | Modelagem avancada heranca tutorial portugues",
                "d": "Heranca: single-table, class-table, concrete. Soft delete: deleted_at ao inves de apagar. Audit trail: quem mudou o que quando. Timestamps: created_at, updated_at em toda tabela."
              },
              {
                "w": "NoSQL: MongoDB (documentos), Redis (cache + pub/sub + filas)",
                "s": "MongoDB tutorial | Redis cache patterns | NoSQL when to use | NoSQL MongoDB documentos explained",
                "d": "MongoDB: documentos flexiveis (JSON), bom pra dados heterogeneos. Redis: cache sub-ms, pub/sub, filas, rate limiting, sessoes. Quando NoSQL: dados nao-relacionais, cache, tempo real."
              },
              {
                "w": "Transacoes ACID, isolamento, locks, deadlocks, connection pooling",
                "s": "ACID transactions isolation levels | database locks deadlocks | connection pooling | Transacoes ACID isolamento tutorial portugues",
                "d": "ACID: Atomicidade, Consistencia, Isolamento, Durabilidade. Niveis: Read Uncommitted < Read Committed < Repeatable Read < Serializable. Deadlock: 2 transacoes esperando uma pela outra. PgBouncer: pool de conexoes."
              },
              {
                "w": "Data warehousing intro: OLTP vs OLAP, Star Schema, desnormalizacao",
                "s": "OLTP vs OLAP data warehouse | star schema dimensional modeling | data warehousing basics | Data warehousing intro tutorial portugues",
                "d": "OLTP: transacional (app). OLAP: analitico (BI). Star schema: fato + dimensoes. Desnormalizar pra leitura rapida. Ferramentas: BigQuery, Redshift, Snowflake. dbt pra transformacoes."
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
                "s": "GraphQL tutorial complete | GraphQL schema resolvers | Apollo GraphQL | GraphQL schema queries explained",
                "d": "Schema-first: definir types e queries. Client pede EXATAMENTE o que quer (sem over/under-fetching). Mutations: escrita. Subscriptions: real-time (WebSocket). Resolvers: funcoes que buscam dados. Apollo Server + Apollo Client. N+1 problem: DataLoader."
              },
              {
                "w": "gRPC: Protocol Buffers, service definition, streaming, quando usar",
                "s": "gRPC tutorial | Protocol Buffers | gRPC streaming | gRPC vs REST",
                "d": "gRPC: RPC framework (Google). Protocol Buffers: serializacao binaria (menor e mais rapido que JSON). Service definition em .proto. Streaming: unary, server, client, bidirectional. Quando: comunicacao entre microservicos (interno). REST: clientes externos/browsers."
              },
              {
                "w": "WebSockets em profundidade: Socket.io, rooms, scaling, heartbeat",
                "s": "WebSocket Socket.io tutorial | WebSocket scaling | real-time web application | WebSockets profundidade Socket.io explained",
                "d": "WebSocket: conexao persistente bidirecional. Socket.io: abstrai + fallbacks + rooms + namespaces. Rooms: agrupar conexoes (chat por sala). Scaling: Redis adapter (multiplos servidores). Heartbeat: detectar desconexao. Use cases: chat, live updates, gaming, collaboration."
              },
              {
                "w": "Server-Sent Events (SSE), webhooks, long polling, comparacao de padroes real-time",
                "s": "SSE server sent events | webhooks tutorial | real-time patterns comparison | Server-Sent Events webhooks explained",
                "d": "SSE: servidor envia eventos (1 direcao, HTTP simples). Webhooks: servidor chama URL quando evento acontece (GitHub, Stripe). Long polling: request que espera resposta (fallback). Comparacao: WebSocket (bidirecional) > SSE (servidor>cliente) > polling (simples). Escolha pelo use case."
              },
              {
                "w": "API versioning: URL path, header, query param, estrategias de deprecacao",
                "s": "API versioning strategies | REST API versioning | API deprecation strategy | API backward compatibility",
                "d": "URL: /api/v1/users (mais comum). Header: Accept: application/vnd.api+json;version=2. Query: ?version=2. Deprecacao: anunciar com antecedencia, sunset header, manter versao antiga por X meses. Breaking change: sempre nova versao. Backward compatibility: adicionar campos, nao remover."
              },
              {
                "w": "Rate limiting, throttling, pagination: cursor vs offset, caching de API",
                "s": "API rate limiting throttling | cursor pagination vs offset | API caching strategies | API pagination best practices",
                "d": "Rate limit: X requests/minuto por IP/token (429 Too Many Requests). Throttling: desacelerar gradualmente. Pagination: offset (?page=2&limit=20) vs cursor (?cursor=abc123, melhor pra dados que mudam). Cache: ETag, Cache-Control, Redis. API bem projetada = clientes felizes."
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
                "s": "graphics pipeline rendering | pipeline grafico | rasterization vertex fragment shader | Pipeline grafico vertices tutorial portugues",
                "d": "Dados 3D > transformar (model/view/projection) > recortar > rasterizar (triangulos > pixels) > shaders > tela. GPU faz tudo isso em paralelo. Entender o pipeline = entender a GPU."
              },
              {
                "w": "Transformacoes: translacao, rotacao, escala, matrizes 4x4, projecao",
                "s": "3D transformations matrix | transformacoes 3D matrizes | projection perspective orthographic | Transformacoes translacao rotacao tutorial portugues",
                "d": "Matrizes 4x4 (homogeneas). Model: posicionar objeto. View: posicionar camera. Projection: perspectiva ou ortografica. MVP matrix. Algebra linear aplicada!"
              },
              {
                "w": "Shaders: GLSL, vertex shader, fragment shader, iluminacao (Phong)",
                "s": "GLSL shaders tutorial | vertex fragment shader | Phong lighting model | Shaders GLSL vertex explained",
                "d": "Vertex shader: transforma vertices. Fragment shader: calcula cor de cada pixel. GLSL: linguagem de shaders. Phong: ambient + diffuse + specular. Roda na GPU (massivamente paralelo)."
              },
              {
                "w": "WebGL / Three.js: 3D no navegador, projeto pratico",
                "s": "WebGL Three.js tutorial | 3D web browser | three.js beginner project | WebGL Three.js navegador explained",
                "d": "Three.js: abstrai WebGL. Scene, Camera, Renderer, Mesh, Material, Light. Interacao com mouse. Animacao com requestAnimationFrame. Projeto: visualizador 3D, jogo simples."
              },
              {
                "w": "Ray tracing intro, texturas, GPU computing (CUDA conceito)",
                "s": "ray tracing basics | textures UV mapping | CUDA GPU computing intro | tracing intro texturas tutorial portugues",
                "d": "Ray tracing: simular luz fisicamente (reflexao, refracao, sombras). Mais realista, mais lento. Texturas: imagem mapeada na superficie (UV mapping). CUDA: programar GPU pra calculos gerais (ML, simulacao)."
              },
              {
                "w": "Game Engines: Unity (C#), Unreal (C++), Godot (GDScript/C#), quando usar cada",
                "s": "Unity vs Unreal vs Godot | game engine comparison | game development beginner | Game Engines Unity tutorial portugues",
                "d": "Unity: mais usado (mobile, indie, VR). C#. Asset Store enorme. Unreal: AAA graphics, C++ ou Blueprints (visual). Godot: open-source, leve, GDScript (parecido Python). Pra aprender CG na pratica: faca um jogo simples. Pra simulacao/robotica: Unity+ROS ou Isaac Sim."
              },
              {
                "w": "Compute shaders e GPU computing: paralelismo massivo, simulacoes, particulas",
                "s": "compute shader GPU | GPU computing graphics | particle simulation GPU | Compute shaders computing tutorial portugues",
                "d": "Compute shader: usar GPU pra calculos genericos (nao so graficos). Simulacao de fluidos, particulas, fisica. WebGPU: compute no browser. CUDA: NVIDIA (ML, simulacao). GPU: milhares de cores simples vs CPU poucos cores complexos. Paralelismo e o futuro."
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
                "s": "Three.js | scene camera light | geometry material | animation",
                "d": "Three.js abstrai WebGL: criar cena 3D com poucas linhas. Scene, Camera (Perspective/Ortho), Renderer, Mesh = Geometry + Material"
              },
              {
                "w": "Iluminação e materiais: Phong, PBR (Physically Based Rendering), texturas, normal maps",
                "s": "lighting | Phong PBR | physically based rendering | normal map",
                "d": "PBR simula materiais realistas (metal, vidro, tecido) usando propriedades físicas. Normal maps adicionam detalhe sem geometria extra"
              },
              {
                "w": "Animação: keyframes, interpolação (lerp, slerp), skeleton animation, morph targets",
                "s": "animation | keyframe | lerp slerp | skeleton | morph targets",
                "d": "Animar objetos: keyframes definem poses, interpolação suaviza. Skeleton animation movimenta personagens com bones"
              },
              {
                "w": "Projeto: game loop, input handling, colisão básica (AABB, raycasting), estado do jogo",
                "s": "game loop | input | collision AABB | raycasting | game state",
                "d": "Game loop: update(dt) → render(). Input do teclado/mouse. Colisão AABB (caixas) ou raycasting (raio laser). Estado: menu, playing, gameover"
              },
              {
                "w": "Otimização 3D: LOD, frustum culling, instancing, draw calls, profiling GPU",
                "s": "LOD | frustum culling | instancing | draw calls | GPU profiling",
                "d": "Otimizar performance: LOD reduz detalhe à distância, frustum culling ignora objetos fora da câmera, instancing renderiza muitas cópias"
              },
              {
                "w": "WebGPU: próxima geração de gráficos no navegador, diferenças vs WebGL, compute shaders",
                "s": "WebGPU | next gen graphics | compute shader | vs WebGL",
                "d": "WebGPU é o sucessor do WebGL: acesso moderno à GPU, compute shaders no navegador, melhor performance e mais controle"
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
                "s": "mobile development native vs cross platform | React Native vs Flutter | mobile app development | Mobile landscape nativo tutorial portugues",
                "d": "Nativo: melhor performance, acesso total a APIs. Cross-platform: 1 codebase pra iOS+Android. React Native: JavaScript (se ja sabe React). Flutter: Dart (UI bonita). Pra comecar: escolha 1 e faca um app."
              },
              {
                "w": "React Native: componentes, navegacao, estado, APIs nativas",
                "s": "React Native tutorial 2025 | React Native navigation | React Native getting started | React Native componentes explained",
                "d": "Mesmo modelo mental de React (componentes, hooks, state). React Navigation: telas e tabs. Expo: simplifica setup. Acesso a camera, GPS, notificacoes via bibliotecas. Hot reload: ve mudancas instantaneamente."
              },
              {
                "w": "Flutter: widgets, Material/Cupertino, state management, Dart basics",
                "s": "Flutter tutorial beginners | Flutter widgets Dart | Flutter state management | Flutter widgets Material/Cupertino explained",
                "d": "Tudo e widget. Material (Android look) ou Cupertino (iOS look). State: setState, Provider, Riverpod, BLoC. Dart: tipado, async/await, null safety. Hot reload tambem. Performance proxima de nativo."
              },
              {
                "w": "Publicacao: Google Play Store, Apple App Store, CI/CD mobile",
                "s": "publish app Google Play Apple Store | mobile CI CD | app store deployment | Publicacao Google Play tutorial portugues",
                "d": "Google Play: conta dev ($25 uma vez). Apple: $99/ano. Build: APK/AAB (Android), IPA (iOS). CI/CD: Fastlane, Codemagic, EAS (Expo). Revisao Apple: mais rigorosa (1-3 dias). Versioning: semver."
              },
              {
                "w": "Conceitos mobile: offline-first, push notifications, deep linking, responsividade",
                "s": "mobile offline first | push notifications mobile | deep linking app | Conceitos mobile offline-first tutorial portugues",
                "d": "Offline-first: app funciona sem internet (SQLite local, sync depois). Push: Firebase Cloud Messaging. Deep linking: URL abre tela especifica do app. Responsividade: adaptar a diferentes tamanhos de tela."
              },
              {
                "w": "PWA (Progressive Web App): offline, install, service workers, quando usar vs nativo",
                "s": "PWA progressive web app tutorial | service worker offline | PWA vs native app | progressive web app 2025",
                "d": "PWA: site que funciona como app (offline, install na home screen, push notifications). Service Worker: proxy entre app e rede (cache, offline). Quando: app simples, budget baixo, todos os devices. Quando NAO: acesso a hardware especifico, performance critica. Starbucks, Twitter Lite sao PWAs."
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
                "s": "state management | Redux Zustand | Riverpod BLoC | global state",
                "d": "State management controla dados compartilhados entre telas. Redux/Zustand em RN, Riverpod/BLoC em Flutter. Escolha afeta arquitetura inteira"
              },
              {
                "w": "Navegação avançada: deep linking, nested navigators, autenticação guards, tab + stack",
                "s": "deep linking | nested navigation | auth guards | tab stack",
                "d": "Navegação em apps é complexa: tabs com stacks internos, login guards, deep links que abrem telas específicas via URL"
              },
              {
                "w": "APIs nativas: câmera, GPS, sensores, biometria, permissões no iOS e Android",
                "s": "native APIs | camera GPS sensors | biometrics | permissions",
                "d": "Acessar hardware nativo requer bridges (RN) ou plugins (Flutter). Cada plataforma tem sistema de permissões diferente"
              },
              {
                "w": "Performance mobile: lazy loading, FlatList/ListView, imagem caching, memory leaks",
                "s": "mobile performance | lazy loading | FlatList | image cache",
                "d": "Mobile tem memória limitada. Lazy loading carrega sob demanda, FlatList virtualiza listas grandes, cache evita re-downloads"
              },
              {
                "w": "Testing mobile: unit tests, widget tests (Flutter), component tests (RN), E2E com Detox/Patrol",
                "s": "mobile testing | widget test | Detox Patrol | E2E testing",
                "d": "Testar em mobile: unit (lógica), widget/component (UI isolada), E2E (app inteira em simulador). Detox para RN, Patrol para Flutter"
              },
              {
                "w": "Deploy: CI/CD mobile (Fastlane, EAS Build), código signing, TestFlight/Play Console, OTA updates",
                "s": "mobile deploy | Fastlane EAS | code signing | TestFlight | OTA",
                "d": "Deploy mobile é mais complexo que web: build nativo, code signing (certificados), review da loja, OTA updates para patches rápidos"
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
                "s": "OSI model TCP IP layers | modelo OSI camadas | networking layers explained | Modelo TCP/IP camadas tutorial portugues",
                "d": "OSI: 7 camadas (fisica > enlace > rede > transporte > sessao > apresentacao > aplicacao). TCP/IP: 4 camadas. Cada camada resolve um problema."
              },
              {
                "w": "TCP vs UDP, portas, sockets",
                "s": "TCP vs UDP difference | network ports sockets | TCP handshake | portas sockets tutorial portugues",
                "d": "TCP: confiavel, 3-way handshake (SYN-SYN/ACK-ACK). UDP: rapido, sem garantia (streaming, jogos). Portas: 80(HTTP), 443(HTTPS), 22(SSH), 5432(Postgres)."
              },
              {
                "w": "HTTP/1.1 vs HTTP/2 vs HTTP/3, metodos, headers, cookies",
                "s": "HTTP protocol methods headers | HTTP/2 HTTP/3 | HTTP cookies session | HTTP/1.1 HTTP/2 HTTP/3 tutorial portugues",
                "d": "GET POST PUT PATCH DELETE. Headers: Content-Type, Authorization, Cache-Control. Cookies: sessao no navegador. HTTP/2: multiplexing. HTTP/3: QUIC/UDP."
              },
              {
                "w": "REST, GraphQL, WebSockets: quando usar cada",
                "s": "REST vs GraphQL vs WebSocket | API protocols comparison | when to use GraphQL | REST GraphQL WebSockets tutorial portugues",
                "d": "REST: recurso-orientado (maioria). GraphQL: cliente pede exatamente o que quer (mobile). WebSocket: real-time bidirecional (chat, jogos). gRPC: entre servicos."
              },
              {
                "w": "Programacao de sockets: TCP client/server em Python, netcat, comunicacao raw",
                "s": "socket programming Python TCP | python socket tutorial | netcat network tool | TCP client server python",
                "d": "import socket. server: socket() > bind() > listen() > accept() > recv/send. client: socket() > connect() > send/recv. Netcat (nc): canivete suico de rede. Entender sockets = entender como TODA comunicacao de rede funciona por baixo (HTTP, WebSocket, gRPC = tudo e socket)."
              },
              {
                "w": "Ferramentas de rede: ping, traceroute, dig, curl, nslookup, iptables basico",
                "s": "network tools ping traceroute dig | ferramentas rede Linux | iptables firewall basics | curl network debugging",
                "d": "ping: host esta acessivel? traceroute: caminho ate o host. dig/nslookup: resolver DNS. curl: HTTP requests. netstat/ss: portas abertas. iptables: firewall Linux (INPUT, OUTPUT, FORWARD). tcpdump: capturar pacotes. Dominar essas ferramentas = debugar problemas de rede rapidamente."
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
                "s": "what are containers Docker | containers vs VMs | docker explained beginners | containers isolamento imagem tutorial portugues",
                "d": "Container = processo isolado com suas dependencias. Imagem: template (read-only). Container: instancia rodando. Mais leve que VM (compartilha kernel)."
              },
              {
                "w": "Dockerfile: FROM, RUN, COPY, CMD, EXPOSE, multi-stage",
                "s": "dockerfile tutorial | dockerfile best practices | multi-stage docker build | Dockerfile FROM COPY explained",
                "d": "FROM python:3.12. RUN pip install. COPY . /app. CMD ['python','app.py']. EXPOSE 8000. Multi-stage: build numa imagem, copiar resultado pra imagem menor."
              },
              {
                "w": "Docker Compose: multi-container, volumes, networks",
                "s": "docker compose tutorial | docker compose multi container | docker volumes networks | Docker Compose multi-container explained",
                "d": "docker-compose.yml: definir multiplos servicos. volumes: persistir dados. networks: comunicacao entre containers. docker compose up -d."
              },
              {
                "w": "Docker Hub, registries, tags, .dockerignore",
                "s": "docker hub registry | docker image tags | dockerignore file | Docker registries tags tutorial portugues",
                "d": "Docker Hub: repositorio de imagens. docker push/pull. Tags: versoes (app:v1.2, app:latest). .dockerignore: excluir node_modules, .git, .env."
              },
              {
                "w": "Boas praticas de Dockerfile: camadas, cache, .dockerignore, nao rodar como root",
                "s": "Dockerfile best practices | Docker layer caching | Docker security best practices | Dockerfile optimization",
                "d": "Ordenar: deps que mudam pouco no topo (cache). COPY requirements.txt antes de COPY . (cache deps). .dockerignore: node_modules, .git, .env. USER nao-root. Multi-stage: build stage grande, prod stage minimo. Healthcheck. Nao instalar ferramentas desnecessarias. Imagem pequena = deploy rapido + menos vulnerabilidades."
              },
              {
                "w": "Debugging containers: docker logs, exec, inspect, network troubleshooting",
                "s": "docker debugging logs exec | docker container troubleshooting | docker network debugging | docker inspect tutorial",
                "d": "docker logs container_id. docker exec -it container bash (entrar no container). docker inspect: ver config, rede, mounts. docker network ls/inspect: problemas de rede. docker stats: CPU/memoria. docker-compose logs -f: seguir logs. 90% dos problemas: permissoes, rede, ou variavel de ambiente faltando."
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
                "s": "CI CD pipeline tutorial | GitHub Actions workflow | continuous integration delivery | CI/CD conceito pipeline explained",
                "d": "CI: testar automaticamente a cada push. CD: deploy automatico apos testes. GitHub Actions: YAML workflow. Stages: lint > test > build > deploy."
              },
              {
                "w": "Cloud: IaaS, PaaS, SaaS, modelos de pricing",
                "s": "cloud computing IaaS PaaS SaaS | cloud pricing models | AWS vs GCP vs Azure | Cloud IaaS PaaS tutorial portugues",
                "d": "IaaS: servidor virtual (EC2). PaaS: plataforma gerenciada (Heroku, Railway). SaaS: software pronto (Gmail). Pay-as-you-go. Free tier pra aprender."
              },
              {
                "w": "AWS essenciais: EC2, S3, RDS, Lambda, IAM, VPC",
                "s": "AWS essentials EC2 S3 RDS Lambda | AWS tutorial beginner | AWS IAM VPC | essenciais Lambda explained",
                "d": "EC2: servidor. S3: storage de arquivos. RDS: banco gerenciado. Lambda: serverless. IAM: permissoes. VPC: rede isolada. Comece pelo free tier!"
              },
              {
                "w": "Deploy: Vercel, Railway, Render, Fly.io",
                "s": "deploy Vercel Railway Render | modern deployment platforms | deploy fullstack app | Deploy Vercel Railway tutorial portugues",
                "d": "Vercel: frontend (Next.js). Railway/Render: backend + DB. Fly.io: containers. Todos tem free tier. Conectam com GitHub pra deploy automatico."
              },
              {
                "w": "DNS, dominios, HTTPS, certificados SSL/TLS",
                "s": "DNS domain setup tutorial | HTTPS SSL TLS certificate | how DNS works | dominios HTTPS certificados explained",
                "d": "DNS: nome > IP. A record, CNAME. Comprar dominio: Namecheap, Cloudflare. HTTPS: Let's Encrypt (gratis). TLS: criptografia em transito."
              },
              {
                "w": "Infrastructure monitoring: uptime, status pages, alertas, Pingdom, UptimeRobot",
                "s": "infrastructure monitoring uptime | status page setup | Pingdom UptimeRobot | uptime monitoring alerting",
                "d": "UptimeRobot: monitor gratis (ping a cada 5min). Pingdom: mais robusto. Status page: statuspage.io ou Cachet (self-hosted). Alertas: Slack, PagerDuty, email. SLA 99.9% = 8.7h downtime/ano. Monitore ANTES de ter usuarios reclamando."
              },
              {
                "w": "Kubernetes intro: por que existe, pods vs containers, kubectl basics, minikube/kind para local",
                "s": "Kubernetes intro | pods | kubectl | minikube kind | container orchestration",
                "d": "K8s orquestra containers em escala: pods agrupam containers, kubectl gerencia cluster. Minikube/kind para aprender local antes de cloud"
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
                "s": "observability three pillars metrics logs traces | monitoring vs observability | observability engineering | pilares metricas logs tutorial portugues",
                "d": "Monitoramento: dashboards pre-definidos (CPU, memoria). Observabilidade: investigar problemas NOVOS sem saber de antemao. Metricas: numeros ao longo do tempo (Prometheus). Logs: eventos textuais (Loki/ELK). Traces: caminho do request entre servicos (Jaeger/Tempo). Os 3 juntos = poder total."
              },
              {
                "w": "APM: Sentry (error tracking), New Relic, Datadog, aplicacao real-time",
                "s": "APM application performance monitoring | Sentry error tracking | Datadog New Relic | Sentry error tracking tutorial portugues",
                "d": "APM: ver performance da SUA aplicacao (nao so infra). Sentry: capturar erros com stack trace + contexto (gratis pra open-source). Datadog/New Relic: metricas de app (response time, error rate, throughput). Real User Monitoring (RUM): experiencia do usuario real. Alertas: PagerDuty, OpsGenie."
              },
              {
                "w": "Structured logging: JSON logs, correlation IDs, log levels, ELK/Loki",
                "s": "structured logging JSON | correlation ID logging | ELK Loki centralized logging | Structured logging JSON tutorial portugues",
                "d": "Structured: JSON ao inves de texto livre. {timestamp, level, message, request_id, user_id}. Correlation ID: rastrear 1 request entre servicos. Log levels: DEBUG<INFO<WARN<ERROR<FATAL. Centralizar: ELK (ElasticSearch+Logstash+Kibana) ou Loki+Grafana. Nao logar dados sensiveis!"
              },
              {
                "w": "Health checks, SLIs, SLOs, SLAs, error budgets",
                "s": "SLI SLO SLA error budget | health check endpoint | site reliability engineering basics | Health checks SLIs tutorial portugues",
                "d": "Health check: GET /health (200=ok, 503=problema). SLI: indicador (% requests <200ms). SLO: objetivo (99.9% dos requests <200ms). SLA: contrato com cliente (com penalidades). Error budget: 0.1% de falha permitida (100% e impossivel). Se budget acabou: pare features, foque em confiabilidade."
              },
              {
                "w": "Dashboards: Grafana, metricas chave (RED/USE), alertas sem fadiga",
                "s": "Grafana dashboard best practices | RED USE method metrics | alert fatigue prevention | Dashboards Grafana metricas tutorial portugues",
                "d": "RED (servicos): Rate, Errors, Duration. USE (infra): Utilization, Saturation, Errors. Grafana: dashboards customizaveis com Prometheus. Alertas: nao alerte tudo — alert fatigue (ignorar alertas por excesso). Alerte no SINTOMA (error rate alta), investigue a CAUSA."
              },
              {
                "w": "OpenTelemetry: padrao aberto de observabilidade, instrumentacao, exporters",
                "s": "OpenTelemetry observability standard | OpenTelemetry tutorial | OTEL instrumentation | OpenTelemetry traces metrics logs",
                "d": "OpenTelemetry (OTel): padrao aberto que unifica metricas, logs e traces. Instrumentacao: adicionar ao codigo (auto ou manual). Exporters: enviar pra Jaeger, Prometheus, Grafana, Datadog. Vendor-neutral: trocar backend sem mudar codigo. O futuro da observabilidade."
              },
              {
                "w": "Profiling de aplicação: flame graphs, CPU/memory profiling (py-spy, pprof), bottleneck identification",
                "s": "profiling | flame graph | py-spy pprof | CPU memory profiling | bottleneck",
                "d": "Flame graphs visualizam onde CPU gasta tempo. py-spy (Python), pprof (Go), perf (Linux). Identificar bottleneck antes de otimizar prematuramente"
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
                "s": "Go basics | struct | interface | slice | map | error handling | value",
                "d": "Go é simples por design: sem herança, sem exceptions. Errors são valores retornados. Interfaces são implícitas (duck typing). Slices > arrays"
              },
              {
                "w": "Goroutines e Channels: concorrência leve, go keyword, channels tipados, select, buffered channels",
                "s": "goroutine | channel | go keyword | select | buffered channel | CSP",
                "d": "Goroutines são lightweight threads (milhares simultâneas). Channels comunicam entre goroutines de forma segura. Select multiplexa channels"
              },
              {
                "w": "Patterns de concorrência em Go: fan-out/fan-in, pipeline, worker pool, context para cancelamento",
                "s": "Go concurrency patterns | fan-out fan-in | worker pool | context | pipeline",
                "d": "Go incentiva patterns composáveis: pipeline de channels, worker pool para paralelismo, context.Context para timeout/cancelamento"
              },
              {
                "w": "Pacotes e módulos: go mod, dependências, pacotes standard (net/http, encoding/json, os, io)",
                "s": "go mod | packages | standard library | net/http | encoding/json",
                "d": "Go modules gerenciam dependências (go.mod). Standard library é rica: net/http para servers, encoding/json para JSON, os para filesystem"
              },
              {
                "w": "Go para CLI tools: cobra/viper, flags, stdin/stdout, cross-compilation, single binary",
                "s": "Go CLI | cobra viper | cross-compilation | single binary | flags",
                "d": "Go compila para binário estático único (sem dependências). Cobra/Viper para CLIs profissionais. Cross-compile para Linux/Mac/Windows trivialmente"
              },
              {
                "w": "Go para web: net/http, Gin/Echo/Fiber, middleware, JSON APIs, templates, testing",
                "s": "Go web | Gin Echo Fiber | middleware | JSON API | net/http | testing",
                "d": "net/http é poderoso sozinho (não precisa de framework). Gin/Echo adicionam routing, middleware, validação. Testes com testing package nativo"
              },
              {
                "w": "Go em produção: Docker (imagens tiny com scratch/distroless), profiling (pprof), race detector, linting",
                "s": "Go production | Docker scratch | pprof | race detector | linting | golangci-lint",
                "d": "Go brilha em produção: imagens Docker de 5MB (FROM scratch), pprof para profiling, -race flag detecta data races, golangci-lint para qualidade"
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
                "s": "OSI model | 7 camadas | physical data network transport",
                "d": "Modelo de referência com 7 camadas que padroniza funções de comunicação em rede, cada camada com responsabilidade específica"
              },
              {
                "w": "Modelo TCP/IP: 4 camadas (Enlace, Internet, Transporte, Aplicação)",
                "s": "TCP/IP model | 4 camadas | internet protocol suite",
                "d": "Modelo prático usado na internet com 4 camadas: como dados viajam do app até o fio físico"
              },
              {
                "w": "Encapsulamento: como dados ganham headers em cada camada (PDU: segmento, pacote, quadro)",
                "s": "encapsulation | PDU | segment packet frame | headers",
                "d": "Em cada camada, dados recebem header adicional: aplicação→segmento→pacote→quadro→bits"
              },
              {
                "w": "Comparação OSI vs TCP/IP: mapeamento entre camadas, onde cada protocolo vive",
                "s": "OSI vs TCP/IP | layer mapping | protocol layers",
                "d": "OSI é referência teórica (7 camadas); TCP/IP é o modelo real da internet (4 camadas). HTTP=Aplicação, TCP=Transporte, IP=Rede"
              },
              {
                "w": "Protocolos por camada: Ethernet (L2), IP (L3), TCP/UDP (L4), HTTP/DNS/SMTP (L7)",
                "s": "protocols per layer | ethernet IP TCP UDP HTTP",
                "d": "Cada camada tem seus protocolos: Ethernet no enlace, IP na rede, TCP/UDP no transporte, HTTP/DNS/FTP na aplicação"
              },
              {
                "w": "Análise de pacotes: Wireshark para visualizar encapsulamento real de cada camada",
                "s": "packet analysis | wireshark | capture | dissect layers",
                "d": "Wireshark mostra visualmente como um pacote HTTP contém TCP dentro de IP dentro de Ethernet, tornando o modelo concreto"
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
                "s": "IPv4 | 32 bit address | classes A B C | dotted decimal",
                "d": "IPv4 usa endereços de 32 bits (4 bilhões), divididos em classes históricas. Ex: 192.168.1.1"
              },
              {
                "w": "Sub-redes (Subnetting): máscara, CIDR (/24, /16), cálculo de hosts e redes",
                "s": "subnetting | CIDR | subnet mask | network host calculation",
                "d": "Dividir rede em sub-redes menores com máscaras. /24 = 256 endereços, /25 = 128. Essencial pra engenheiro de redes"
              },
              {
                "w": "IPv6: endereçamento de 128 bits, notação, dual-stack, transição IPv4→IPv6",
                "s": "IPv6 | 128 bit | dual stack | transition | address format",
                "d": "IPv6 resolve a escassez de IPv4 com 128 bits (3.4×10³⁸ endereços). Coexiste com IPv4 via dual-stack"
              },
              {
                "w": "NAT (Network Address Translation): como redes privadas acessam a internet",
                "s": "NAT | network address translation | private IP | port forwarding",
                "d": "NAT traduz IPs privados (192.168.x.x) para IP público. É por isso que vários dispositivos compartilham um IP externo"
              },
              {
                "w": "Roteamento: estático vs dinâmico, tabela de rotas, default gateway, hop-by-hop",
                "s": "routing | static dynamic | routing table | default gateway | hop",
                "d": "Roteadores decidem pra onde enviar cada pacote baseado na tabela de rotas. Estático=manual, dinâmico=protocolos"
              },
              {
                "w": "Protocolos de roteamento: RIP, OSPF, BGP — como a internet se conecta",
                "s": "RIP OSPF BGP | routing protocols | autonomous system | AS",
                "d": "RIP (simples), OSPF (link-state, intra-AS) e BGP (inter-AS, espinha dorsal da internet). BGP conecta ISPs ao mundo"
              },
              {
                "w": "ICMP: ping, traceroute, mensagens de erro, TTL (Time To Live)",
                "s": "ICMP | ping | traceroute | TTL | time to live | error messages",
                "d": "ICMP é protocolo de diagnóstico: ping testa conectividade, traceroute mostra o caminho, TTL evita loops infinitos"
              },
              {
                "w": "ARP (Address Resolution Protocol): mapear IP para MAC na rede local",
                "s": "ARP | address resolution | IP to MAC | arp table | broadcast",
                "d": "ARP descobre qual MAC address corresponde a um IP na mesma rede. Broadcast pergunta 'quem tem 192.168.1.5?' e o dono responde"
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
                "s": "TCP | reliable | 3-way handshake | SYN ACK | ordered delivery",
                "d": "TCP garante entrega ordenada e sem erros via handshake de 3 vias, confirmação (ACK) e retransmissão"
              },
              {
                "w": "UDP: sem conexão, sem garantia, mas rápido (streaming, games, DNS, VoIP)",
                "s": "UDP | connectionless | unreliable | fast | streaming gaming DNS",
                "d": "UDP envia datagramas sem confirmar recebimento. Ideal quando velocidade importa mais que confiabilidade"
              },
              {
                "w": "Portas e multiplexação: como múltiplas apps usam a mesma conexão de rede",
                "s": "ports | multiplexing | well-known ports | ephemeral | socket",
                "d": "Portas (0-65535) identificam apps. HTTP=80, HTTPS=443, SSH=22. Portas efêmeras (49152+) para conexões de cliente"
              },
              {
                "w": "Controle de fluxo TCP: sliding window, receiver buffer, advertised window",
                "s": "flow control | sliding window | receiver buffer | TCP window",
                "d": "TCP ajusta velocidade de envio baseado no que o receptor consegue processar, evitando overflow no buffer"
              },
              {
                "w": "Controle de congestionamento: slow start, congestion avoidance, fast retransmit",
                "s": "congestion control | slow start | congestion avoidance | cwnd",
                "d": "TCP detecta congestionamento na rede e reduz taxa de envio. Começa devagar (slow start) e adapta dinamicamente"
              },
              {
                "w": "Programação de sockets: TCP client/server em Python, select/poll/epoll",
                "s": "socket programming | TCP server client | select poll epoll",
                "d": "Sockets são a API para comunicação de rede. Criar server (bind/listen/accept) e client (connect) em Python ou C"
              },
              {
                "w": "Ferramentas: netcat, ss, netstat, tcpdump, nmap para diagnóstico de rede",
                "s": "netcat | ss | netstat | tcpdump | nmap | network tools",
                "d": "Ferramentas essenciais: nc para testar conexões, ss/netstat para ver portas abertas, tcpdump para capturar pacotes"
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
                "s": "DNS | hierarchy | root TLD authoritative | A AAAA CNAME MX NS TXT",
                "d": "DNS traduz nomes em IPs. Hierarquia: root servers → TLD (.com, .br) → authoritative. Registros: A=IPv4, MX=email, CNAME=alias"
              },
              {
                "w": "DHCP: como dispositivos recebem IP automaticamente (DORA: Discover, Offer, Request, Ack)",
                "s": "DHCP | automatic IP | DORA | discover offer request ack | lease",
                "d": "DHCP atribui IPs automaticamente. Processo DORA: dispositivo pede (Discover), servidor oferece (Offer), confirma (Request/Ack)"
              },
              {
                "w": "HTTP/2 e HTTP/3: multiplexação, server push, QUIC (UDP-based), header compression",
                "s": "HTTP/2 HTTP/3 | multiplexing | QUIC | server push | HPACK",
                "d": "HTTP/2 multiplexa streams em uma conexão TCP. HTTP/3 usa QUIC (baseado em UDP) para eliminar head-of-line blocking"
              },
              {
                "w": "TLS/SSL: handshake, certificados, cipher suites, HTTPS, PKI (Public Key Infrastructure)",
                "s": "TLS SSL | handshake | certificate | cipher suite | PKI | HTTPS",
                "d": "TLS criptografa comunicação. Handshake troca chaves, verifica certificado (CA), negocia cipher. HTTPS = HTTP + TLS"
              },
              {
                "w": "Firewalls: stateful vs stateless, regras, iptables/nftables, zonas de segurança",
                "s": "firewall | stateful stateless | iptables nftables | rules | DMZ",
                "d": "Firewalls filtram tráfego por regras. Stateful rastreia conexões, stateless avalia cada pacote isoladamente. DMZ para servidores públicos"
              },
              {
                "w": "VPN: tipos (site-to-site, remote access), IPSec, WireGuard, OpenVPN, túneis",
                "s": "VPN | IPSec | WireGuard | OpenVPN | tunnel | site-to-site",
                "d": "VPN cria túnel criptografado sobre a internet. WireGuard é moderno e rápido, IPSec é padrão empresarial"
              },
              {
                "w": "VLAN: segmentação lógica de rede, trunking (802.1Q), inter-VLAN routing",
                "s": "VLAN | virtual LAN | 802.1Q | trunking | network segmentation",
                "d": "VLANs dividem switch físico em redes lógicas separadas. Isolam tráfego sem precisar de switches separados"
              },
              {
                "w": "Projeto prático: configurar rede virtual com VLANs, sub-redes, firewall e NAT (GNS3/Packet Tracer)",
                "s": "GNS3 | Packet Tracer | network lab | virtual network | practice",
                "d": "Monte lab virtual: 2+ sub-redes, roteamento entre elas, firewall com regras, NAT para internet. GNS3 ou Cisco Packet Tracer"
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
                "s": "ethical hacking definition | what is ethical hacking | rules of engagement pentest | ethical hacking permissao tutorial portugues",
                "d": "Ethical hacking = testar seguranca COM PERMISSAO. Sem permissao = crime (Art. 154-A do Codigo Penal brasileiro). Regras de engajamento: documento que define o que pode e nao pode testar, horarios, alvos permitidos. SEMPRE por escrito."
              },
              {
                "w": "Leis brasileiras: Marco Civil, LGPD, Art. 154-A (crimes digitais)",
                "s": "leis brasileiras seguranca digital | Marco Civil Internet | crimes digitais Brasil lei | Leis brasileiras Marco tutorial portugues",
                "d": "Art. 154-A: invadir dispositivo alheio = 1-4 anos de reclusao. Marco Civil: garantias de privacidade. LGPD: protecao de dados. Bug bounty com escopo definido = legal. Teste sem autorizacao = CRIME, mesmo com boas intencoes."
              },
              {
                "w": "Codigo de etica: EC-Council, PTES, responsabilidade profissional",
                "s": "ethical hacking code of ethics | PTES standard | responsible disclosure | Codigo etica EC-Council tutorial portugues",
                "d": "Responsible disclosure: encontrou vulnerabilidade? Reporte ao dono PRIMEIRO, de prazo pra corrigir, so depois publique. Full disclosure vs coordinated disclosure. Nunca explore pra ganho pessoal. Proteja os dados que encontrar durante testes."
              },
              {
                "w": "Documentacao e relatorios: escopo, findings, severidade, remediacoes",
                "s": "pentest report template | security assessment report | vulnerability severity CVSS | Documentacao relatorios escopo tutorial portugues",
                "d": "Relatorio: sumario executivo (pra gestao) + tecnico (pra devs). Cada finding: descricao, severidade (CVSS), evidencia (screenshot), impacto, remediacao. Classificacao: Critical > High > Medium > Low > Info. Relatorio BEM escrito = diferencial profissional."
              },
              {
                "w": "Tipos de teste: black box, white box, gray box, red team vs pentest",
                "s": "black box white box gray box testing | red team vs penetration testing | security testing types | pentest scope types",
                "d": "Black box: testador nao sabe nada (simula atacante externo). White box: acesso total ao codigo/infra (mais profundo). Gray box: acesso parcial (credenciais de usuario). Red team: simular APT completo (meses, sigilo). Pentest: escopo definido, prazo curto. Escolher depende do objetivo e orcamento."
              },
              {
                "w": "NDA, contrato, escopo: documentos essenciais antes de qualquer teste",
                "s": "pentest NDA contract scope | pentesting legal documents | rules of engagement pentest | pentest agreement template",
                "d": "NUNCA teste sem contrato assinado. Documentos: NDA (confidencialidade), contrato de servico, escopo (o que pode/nao pode), regras de engajamento (horarios, contato de emergencia), autorizacao por escrito. Sem isso: voce esta cometendo crime, mesmo com boas intencoes."
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
                "s": "CIA triad cybersecurity | principios seguranca informacao | CIA security fundamentals | Triad Confidencialidade Integridade tutorial portugues",
                "d": "Confidencialidade: so quem deve ve. Integridade: dados nao alterados. Disponibilidade: sistema acessivel. Todo controle de seguranca protege pelo menos 1."
              },
              {
                "w": "OWASP Top 10: Injection, XSS, CSRF, Broken Auth",
                "s": "OWASP top 10 explained | SQL injection XSS prevention | OWASP vulnerabilities | OWASP Injection CSRF tutorial portugues",
                "d": "SQL Injection: parameterized queries. XSS: sanitizar input/output. CSRF: tokens. Broken Auth: senhas fracas, sessoes mal gerenciadas. Leia owasp.org."
              },
              {
                "w": "Autenticacao vs Autorizacao, sessoes, tokens",
                "s": "authentication vs authorization | session token security | auth security best practices | Autenticacao Autorizacao sessoes tutorial portugues",
                "d": "Autenticacao: quem e voce (login). Autorizacao: o que pode fazer (permissoes). Sessoes: server-side. JWT: stateless token. OAuth2: delegar autenticacao (Login com Google)."
              },
              {
                "w": "Criptografia: hashing (bcrypt/Argon2), simetrica (AES), assimetrica (RSA/ECC)",
                "s": "cryptography hashing encryption | bcrypt Argon2 password hashing | AES RSA encryption | Criptografia hashing bcrypt/Argon2 tutorial portugues",
                "d": "Hash: funcao 1 via (senhas). bcrypt/Argon2: lentas de proposito (dificultar brute force). AES: mesma chave encripta/decripta. RSA/ECC: par chave publica/privada. TLS usa ambas."
              },
              {
                "w": "HTTPS, TLS handshake, certificados, CORS, CSP",
                "s": "TLS handshake explained | HTTPS security | CORS CSP headers security | HTTPS handshake certificados tutorial portugues",
                "d": "TLS: cliente e servidor negociam chave simetrica via assimetrica. Certificado: CA confirma identidade. CORS: controle de acesso cross-origin. CSP: prevenir XSS via headers."
              },
              {
                "w": "Principios: minimo privilegio, defesa em profundidade, fail-safe",
                "s": "security principles least privilege defense depth | principios seguranca | security design principles | Principios minimo privilegio tutorial portugues",
                "d": "Minimo privilegio: dar so o necessario. Defesa em profundidade: multiplas camadas. Fail-safe: falha segura (negar acesso se der erro). Security by design."
              },
              {
                "w": "Criptografia assimétrica detalhada: RSA (geração de chaves, exponenciação modular), Diffie-Hellman (troca de chaves)",
                "s": "RSA detailed | key generation | modular exponentiation | Diffie-Hellman | key exchange",
                "d": "RSA: escolher primos p,q, calcular n=p×q, e (público), d (privado). Diffie-Hellman permite dois lados combinarem chave secreta em canal público"
              },
              {
                "w": "Curvas elípticas (ECC): por que são mais eficientes que RSA, ECDSA, ECDH, uso em TLS e Bitcoin",
                "s": "elliptic curve | ECC | ECDSA ECDH | TLS Bitcoin | smaller keys",
                "d": "ECC oferece mesma segurança que RSA com chaves muito menores (256-bit ECC ≈ 3072-bit RSA). Usada em TLS moderno, SSH, Bitcoin"
              },
              {
                "w": "Protocolos criptográficos: TLS 1.3 handshake detalhado, Perfect Forward Secrecy, certificate pinning",
                "s": "TLS 1.3 | handshake detailed | perfect forward secrecy | certificate pinning",
                "d": "TLS 1.3: 1-RTT handshake, só cipher suites fortes, PFS garante que comprometer chave futura não decifra tráfego passado"
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
                "s": "OSINT techniques tools | Google dorking | Shodan search | theHarvester",
                "d": "OSINT: informacao publica disponivel. Google dorks: site: filetype: inurl: intext:. Shodan: buscar dispositivos conectados. theHarvester: emails, subdomains. Maltego: grafos de relacionamentos. Recon-ng: framework. Tudo PUBLICO e legal."
              },
              {
                "w": "Enumeracao de dominios: subdomains, DNS records, WHOIS, certificados",
                "s": "subdomain enumeration | DNS reconnaissance | WHOIS lookup | certificate transparency",
                "d": "Subdomains: Amass, Subfinder, crt.sh (certificate transparency). DNS: dig, nslookup (A, MX, NS, TXT records). WHOIS: info do registrante. ASN: blocos de IP da organizacao. Mapear a superficie de ataque ANTES de testar."
              },
              {
                "w": "Fingerprinting: tecnologias, versoes, WAF detection",
                "s": "web fingerprinting technology detection | Wappalyzer | WAF detection | Fingerprinting tecnologias versoes tutorial portugues",
                "d": "Wappalyzer/BuiltWith: identificar stack (framework, CMS, servidor). Nmap version scan: -sV. WhatWeb. WAF detection: wafw00f. Saber a tecnologia = saber vulnerabilidades conhecidas. Banner grabbing: nc ou curl."
              },
              {
                "w": "Nmap: port scanning, service detection, scripts NSE, stealth scan",
                "s": "nmap tutorial port scanning | nmap scripts NSE | nmap stealth scan techniques | Nmap port scanning explained",
                "d": "nmap -sS (stealth SYN). -sV (version). -sC (default scripts). -O (OS detection). -p- (todas portas). NSE scripts: vuln, brute, discovery. Output: -oN (normal), -oX (XML). Portas abertas = servicos expostos = superficie de ataque."
              },
              {
                "w": "Social engineering reconnaissance: LinkedIn, redes sociais, email gathering",
                "s": "social engineering OSINT | LinkedIn reconnaissance | email gathering OSINT | social media intelligence",
                "d": "LinkedIn: cargo, tecnologias, colegas. Redes sociais: habitos, localizacao, relacoes. Email gathering: hunter.io, phonebook.cz, padroes (nome.sobrenome@empresa). Metadata: documentos publicos contem autor, software, datas. Tudo PUBLICO. Social engineering: maior vetor de ataque (phishing). Defesa: awareness training."
              },
              {
                "w": "Ferramentas OSINT: Maltego, SpiderFoot, Recon-ng, framework de recon",
                "s": "Maltego OSINT tutorial | SpiderFoot recon | Recon-ng framework | OSINT tools framework",
                "d": "Maltego: grafos visuais de relacoes (dominio > IPs > emails > pessoas). SpiderFoot: automatiza tudo. Recon-ng: framework modular (como Metasploit pra recon). Shodan: devices na internet. Censys: certificados. crt.sh: certificate transparency. Combine ferramentas: automatize o tedioso, investigue o interessante."
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
                "s": "HackTheBox tutorial | TryHackMe beginner | PortSwigger Web Security Academy | Labs pratica HackTheBox explained",
                "d": "TryHackMe: iniciante (guided rooms). HackTheBox: intermediario (maquinas reais). PortSwigger: web hacking (MELHOR recurso gratis pra web). VulnHub: VMs pra baixar. OWASP Juice Shop: app vulneravel pra praticar. Comece por TryHackMe."
              },
              {
                "w": "CTFs: Capture The Flag, tipos (Jeopardy, Attack-Defense), como comecar",
                "s": "CTF capture the flag | CTF beginner guide | how to start CTF competitions | CTFs Capture Flag tutorial portugues",
                "d": "CTF: competicao de hacking. Jeopardy: desafios por categoria (web, crypto, pwn, forensics, reverse). Attack-Defense: defender seu servidor + atacar dos outros. Plataformas: CTFtime.org, picoCTF (iniciante), HTB CTF. Time: junte 3-5 pessoas com skills diferentes."
              },
              {
                "w": "Montar lab proprio: VMs vulneraveis (Metasploitable, DVWA, Juice Shop), rede isolada",
                "s": "hacking lab setup VMs | Metasploitable DVWA setup | vulnerable VM lab | Montar proprio vulneraveis tutorial portugues",
                "d": "VirtualBox + Kali Linux (atacante) + Metasploitable/DVWA (alvos). Rede interna isolada (nao conecte na internet!). OWASP Juice Shop: app web vulneravel moderna. VulnHub: dezenas de VMs pra praticar. Tudo local, tudo legal."
              },
              {
                "w": "Kali Linux: ferramentas pre-instaladas, quando usar, customizacao",
                "s": "Kali Linux tutorial beginner | Kali Linux tools | Kali Linux setup pentest | Kali Linux ferramentas explained",
                "d": "Kali: distro com 600+ ferramentas de seguranca pre-instaladas. Use como VM (nao como SO principal). Ferramentas essenciais: nmap, burpsuite, metasploit, john, hashcat, gobuster, sqlmap. Aprenda as ferramentas uma de cada vez."
              },
              {
                "w": "Plataformas gratuitas: PicoCTF, OverTheWire, CyberDefenders, LetsDefend",
                "s": "PicoCTF beginner | OverTheWire bandit wargames | CyberDefenders blue team | LetsDefend SOC training",
                "d": "PicoCTF: CTF pra iniciantes absolutos (Carnegie Mellon). OverTheWire Bandit: aprender Linux via desafios. CyberDefenders: blue team labs (forense, malware). LetsDefend: simular SOC analyst. Todos gratuitos. Progresso: OverTheWire > PicoCTF > TryHackMe > HackTheBox."
              },
              {
                "w": "Documentar aprendizado: writeups, blog, GitHub, construir reputacao",
                "s": "CTF writeup blog | security blog beginner | document hacking learning | infosec writeup github",
                "d": "Cada lab/CTF resolvido: escreva writeup (problema, tentativas, solucao, aprendizado). Blog: dev.to, Medium, GitHub Pages. GitHub: scripts, tools, configs. Twitter/X: compartilhe aprendizados. A comunidade de seguranca e generosa com quem compartilha. Reputacao > certificacoes."
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
                "s": "arduino tutorial beginners | arduino setup loop | arduino digital analog | Arduino setup/loop digitalRead/Write explained",
                "d": "setup(): roda 1 vez. loop(): repete. digitalRead/Write: 0 ou 1. analogRead: 0-1023. analogWrite(PWM): 0-255. Pinos: digitais e analogicos."
              },
              {
                "w": "Sensores: ultrassonico, temperatura (DHT), luz (LDR), PIR, IR",
                "s": "arduino sensors tutorial | sensores arduino | HC-SR04 DHT11 LDR PIR | Sensores ultrassonico temperatura explained",
                "d": "HC-SR04: distancia. DHT11/22: temperatura+umidade. LDR: luz. PIR: movimento. IR: controle remoto. Cada sensor tem biblioteca propria."
              },
              {
                "w": "Atuadores: LED, motor DC, servo, buzzer, rele",
                "s": "arduino motors servo relay | atuadores arduino | arduino motor driver L298N | Atuadores motor servo tutorial portugues",
                "d": "LED: output basico. Motor DC: driver L298N/L293D. Servo: angulo preciso. Buzzer: som. Rele: ligar/desligar aparelhos 110V/220V."
              },
              {
                "w": "Comunicacao: Serial (UART), I2C, SPI, displays (LCD, OLED)",
                "s": "arduino serial I2C SPI | arduino LCD OLED display | arduino communication protocols | Comunicacao Serial UART tutorial portugues",
                "d": "Serial: debug (Serial.println). I2C: 2 fios, multiplos devices (endereco). SPI: rapido, 4 fios. LCD 16x2. OLED: graficos. Wire.h (I2C), SPI.h."
              },
              {
                "w": "Projeto integrado: estacao meteorologica, robo seguidor de linha",
                "s": "arduino project weather station | arduino line follower robot | arduino project ideas | Projeto integrado estacao tutorial portugues",
                "d": "Estacao: DHT + display + log SD card. Seguidor: sensores IR + motores + PID simples. Exercita: sensores + atuadores + logica + comunicacao."
              },
              {
                "w": "Programacao Arduino avancada: interrupcoes, timers, sleep modes, watchdog",
                "s": "Arduino interrupts timers watchdog | Arduino sleep mode power | Arduino advanced programming | Arduino timer interrupt",
                "d": "Interrupcoes: reagir instantaneamente a evento (botao, sensor). Timers: acoes periodicas sem delay(). Sleep modes: economizar bateria. Watchdog: resetar se travar. attachInterrupt(pin, funcao, RISING). Essencial pra projetos reais (nao usar delay() em producao)."
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
                "s": "ESP32 WiFi tutorial | ESP32 MQTT IoT | ESP32 web server project | ESP32 WiFi deep explained",
                "d": "ESP32: Arduino-compativel + WiFi + BLE. MQTT: protocolo leve pra IoT (pub/sub). Web server: controlar pela rede. Deep sleep: economia de energia."
              },
              {
                "w": "Raspberry Pi: Linux embarcado, GPIO, camera, projetos",
                "s": "raspberry pi tutorial beginners | raspberry pi GPIO python | raspberry pi projects | Raspberry Linux embarcado explained",
                "d": "RPi: computador completo com Linux + GPIO. Python: RPi.GPIO ou gpiozero. Camera module. Projetos: servidor, retro gaming, automacao residencial, NAS."
              },
              {
                "w": "RTOS (FreeRTOS): tarefas, prioridades, semaforos, filas, interrupcoes",
                "s": "FreeRTOS tutorial ESP32 | RTOS real-time operating system | FreeRTOS tasks semaphores | RTOS FreeRTOS tarefas explained",
                "d": "RTOS: SO pra tempo real (resposta garantida em X ms). FreeRTOS: mais popular (ESP32 usa nativamente). Tasks: funcoes concorrentes. Semaforo: sincronizar. Queue: comunicar entre tasks. ISR: interrupcao de hardware."
              },
              {
                "w": "Interrupcoes, DMA, Watchdog, low-power modes",
                "s": "interrupts DMA watchdog timer | interrupcoes microcontrolador | embedded low power modes | Interrupcoes Watchdog low-power tutorial portugues",
                "d": "Interrupcao: parar tudo e atender evento (botao, timer, UART). DMA: transferir dados sem CPU (eficiente). Watchdog: reseta se travar. Low-power: deep sleep, light sleep. Critico pra IoT com bateria."
              },
              {
                "w": "Protocolos IoT: MQTT, HTTP, CoAP, WebSocket",
                "s": "IoT protocols MQTT HTTP CoAP | protocolos IoT | MQTT broker mosquitto | Protocolos MQTT HTTP tutorial portugues",
                "d": "MQTT: leve, pub/sub (broker Mosquitto). HTTP: pesado mas universal. CoAP: REST pra IoT. WebSocket: real-time. Escolha: MQTT pra sensores, HTTP pra APIs."
              },
              {
                "w": "PID control: conceito e implementacao basica",
                "s": "PID control tutorial | controle PID basico | PID controller Arduino | control conceito implementacao explained",
                "d": "P: proporcional ao erro (reage). I: integral do erro (corrige steady-state). D: derivada do erro (amortece). Tuning: Ziegler-Nichols. Usado em equilibrio de robos, termostatos."
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
                "s": "CPU architecture pipeline cache | arquitetura processadores pipeline | branch prediction superscalar | Arquitetura processadores pipeline tutorial portugues",
                "d": "Pipeline: dividir instrucao em etapas (fetch/decode/execute/memory/writeback). Cache miss: penalidade. Branch prediction: adivinhar saltos. Superscalar: multiplas instrucoes por ciclo."
              },
              {
                "w": "Barramentos: SPI, I2C, UART, CAN, USB, PCIe",
                "s": "bus protocols SPI I2C UART CAN USB PCIe | protocolos barramento | communication buses | Barramentos UART PCIe tutorial portugues",
                "d": "UART: serial simples (2 fios). SPI: rapido (4 fios, master-slave). I2C: 2 fios, multiplos devices. CAN: automotivo/industrial. USB: universal. PCIe: alta velocidade (GPU, SSD)."
              },
              {
                "w": "Memoria: SRAM, DRAM, Flash, EEPROM, DDR, memoria cache",
                "s": "memory types SRAM DRAM Flash EEPROM DDR | tipos memoria | memory hierarchy detail | Memoria SRAM DRAM tutorial portugues",
                "d": "SRAM: rapida, cara (cache). DRAM: precisa refresh (RAM principal). Flash: nao-volatil (SSD, pendrive). EEPROM: configuracao. DDR4/DDR5: taxa de transferencia."
              },
              {
                "w": "FPGA: o que e, HDL (Verilog/VHDL), sintese, casos de uso",
                "s": "FPGA tutorial Verilog VHDL | FPGA programming beginners | what is FPGA | FPGA Verilog/VHDL sintese explained",
                "d": "FPGA: hardware RECONFIGURAVEL. Voce programa a logica (nao software!). Verilog/VHDL: linguagens de descricao de hardware. Mais rapido que software pra tarefas paralelas. Usado em: telecom, financas, prototipagem de chips."
              },
              {
                "w": "Design de PCB: esquematico, layout, KiCad, fabricacao",
                "s": "PCB design KiCad tutorial | design placa circuito impresso | PCB layout beginners | Design esquematico layout explained",
                "d": "KiCad (gratuito): esquematico > footprints > layout > roteamento > Gerber files > fabricar (JLCPCB, PCBWay). Regras: largura trilha, espaçamento, plano terra, desacoplamento."
              },
              {
                "w": "ARM, RISC-V: arquiteturas de processadores embarcados",
                "s": "ARM architecture tutorial | RISC-V processor | embedded processor architectures | RISC-V arquiteturas processadores explained",
                "d": "ARM: domina mobile e embarcado (Cortex-M, Cortex-A). RISC-V: open-source, crescendo rapido. RISC vs CISC. STM32 (ARM Cortex-M): profissional pra embarcados."
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
                "s": "industrial automation basics | automacao industrial conceitos | open closed loop control | Conceitos automacao instrumentacao tutorial portugues",
                "d": "Automacao: substituir trabalho manual por maquinas/software. Instrumentacao: medir (sensores) e controlar (atuadores). Malha aberta: sem feedback. Malha fechada: com feedback (PID)."
              },
              {
                "w": "PLCs (Controladores Logicos Programaveis): ladder, structured text",
                "s": "PLC programming tutorial ladder | CLP programacao ladder | structured text IEC 61131 | PLCs Controladores Logicos explained",
                "d": "PLC/CLP: computador industrial robusto. Linguagens: Ladder (visual, eletricistas entendem), Structured Text (parecido com Pascal). IEC 61131-3. Siemens, Allen-Bradley, Schneider."
              },
              {
                "w": "Sensores industriais: temperatura, pressao, vazao, nivel, proximidade",
                "s": "industrial sensors temperature pressure flow | sensores industriais | industrial instrumentation | Sensores industriais temperatura tutorial portugues",
                "d": "RTD/termopar: temperatura. Bourdon/piezoeletrico: pressao. Eletromagnetico/vortex: vazao. Ultrassonico/capacitivo: nivel. Indutivo/capacitivo: proximidade. 4-20mA: sinal padrao."
              },
              {
                "w": "Redes industriais: Modbus, PROFINET, EtherNet/IP, OPC UA",
                "s": "industrial networks Modbus PROFINET EtherNet/IP | redes industriais | OPC UA protocol | Redes industriais Modbus tutorial portugues",
                "d": "Modbus: simples, antigo, ainda usado (RTU/TCP). PROFINET: Siemens. EtherNet/IP: Allen-Bradley. OPC UA: padrao moderno de interoperabilidade. Industria 4.0: IT + OT convergindo."
              },
              {
                "w": "SCADA, HMI, MES: supervisao e controle",
                "s": "SCADA HMI system | sistemas supervisorios SCADA | MES manufacturing execution | SCADA supervisao controle tutorial portugues",
                "d": "HMI: tela de operacao. SCADA: supervisao + controle remoto. MES: gestao da producao. Piramide da automacao: campo > controle > supervisao > gestao. Cybersecurity OT e critico."
              },
              {
                "w": "Seguranca industrial: NR-12, SIL (Safety Integrity Level), funcoes de seguranca",
                "s": "industrial safety NR-12 SIL | seguranca industrial normas | safety integrity level | industrial machine safety",
                "d": "NR-12: norma brasileira de seguranca em maquinas. SIL: nivel de integridade de seguranca (1 a 4). Funcoes de seguranca: parada de emergencia, cortina de luz, tapete de seguranca. Safety PLC: controlador dedicado a seguranca (redundante). Em automacao, seguranca e OBRIGACAO legal."
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
                "s": "real-time | hard soft | deadline | determinism | jitter | latency",
                "d": "Hard real-time: perder deadline é falha catastrófica (airbag). Soft real-time: tolerável (streaming). Determinismo = previsibilidade de tempo"
              },
              {
                "w": "FreeRTOS: tasks, prioridades, preemptive scheduling, idle task, tick interrupt",
                "s": "FreeRTOS | tasks | priority | preemptive scheduling | tick interrupt",
                "d": "FreeRTOS é RTOS gratuito popular: criar tasks com prioridades, scheduler preemptivo interrompe task de menor prioridade quando maior fica pronta"
              },
              {
                "w": "Sincronização em RTOS: semáforos, mutex, queues, event groups, notificações entre tasks",
                "s": "RTOS synchronization | semaphore mutex | queue | event group | notification",
                "d": "Tasks comunicam via: queues (dados), semáforos (sinalização), mutex (exclusão mútua), event groups (múltiplos eventos). Cuidado com deadlock"
              },
              {
                "w": "Escalonamento de tempo real: Rate Monotonic (RM), Earliest Deadline First (EDF), análise de escalonabilidade",
                "s": "rate monotonic | earliest deadline first | EDF | schedulability analysis",
                "d": "RM: prioridade pela frequência (mais rápido = mais prioritário). EDF: prioridade pelo deadline mais próximo. Análise verifica se todos cumprem deadlines"
              },
              {
                "w": "Inversão de prioridade: problema clássico, priority inheritance protocol, priority ceiling",
                "s": "priority inversion | priority inheritance | priority ceiling | Mars Pathfinder",
                "d": "Task de alta prioridade bloqueada por task de baixa via mutex (bug no Mars Pathfinder!). Priority inheritance: empresta prioridade temporariamente"
              },
              {
                "w": "Watchdog timer, interrupt latency, bare-metal vs RTOS: quando cada abordagem é adequada",
                "s": "watchdog timer | interrupt latency | bare-metal vs RTOS | when to use",
                "d": "Watchdog reseta sistema se travar. Bare-metal: simples, determinístico. RTOS: multi-task, abstrações. Escolher baseado em complexidade e requisitos de timing"
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
                "s": "microservices vs monolith | event driven architecture | CQRS event sourcing | Microservices monolito event-driven tutorial portugues",
                "d": "Monolito: simples pra comecar. Micro: escala independente. Event-driven: desacoplado. CQRS: leitura/escrita separadas."
              },
              {
                "w": "Message queues: Kafka, RabbitMQ, Redis Pub/Sub",
                "s": "message queue Kafka RabbitMQ | event streaming | async communication | Message queues Kafka tutorial portugues",
                "d": "Kafka: streaming de eventos. RabbitMQ: filas tradicionais. Desacoplar servicos. Resiliencia."
              },
              {
                "w": "Caching, CDN, Load Balancing, Rate Limiting",
                "s": "caching strategies CDN | load balancing algorithms | rate limiting API | Caching Load Balancing tutorial portugues",
                "d": "Redis/Memcached. CDN: distribuir estaticos. LB: round-robin, least-connections. Rate limit: proteger API."
              },
              {
                "w": "Design Patterns avancados: Repository, UoW, Mediator, Saga",
                "s": "advanced design patterns | repository pattern | saga pattern distributed | Design Patterns avancados tutorial portugues",
                "d": "Repository: abstrair dados. UoW: transacao. Mediator: desacoplar. Saga: transacoes distribuidas."
              },
              {
                "w": "API Gateway, BFF (Backend for Frontend), GraphQL Federation",
                "s": "API gateway pattern | BFF backend for frontend | GraphQL federation architecture | Gateway Backend Frontend tutorial portugues",
                "d": "API Gateway: ponto de entrada unico (Kong, AWS API Gateway). BFF: backend customizado por cliente (mobile vs web). GraphQL Federation: combinar multiplos GraphQL services. Simplifica o frontend, complexidade no backend."
              },
              {
                "w": "Event Sourcing em detalhe: event store, projections, snapshots, CQRS completo",
                "s": "event sourcing detail | event store projections snapshots | CQRS event sourcing implementation | Event Sourcing detalhe tutorial portugues",
                "d": "Event store: append-only log de eventos. Projection: reconstruir estado a partir de eventos. Snapshot: checkpoint pra nao replay desde o inicio. CQRS: write model (eventos) separado do read model (projection). EventStoreDB, Axon Framework."
              },
              {
                "w": "Domain-Driven Design (DDD): bounded contexts, aggregates, entities, value objects, domain events, ubiquitous language",
                "s": "DDD | domain-driven design | bounded context | aggregate | entity | value object | ubiquitous language",
                "d": "DDD modela software em torno do domínio de negócio: bounded context isola domínios, aggregates garantem consistência, ubiquitous language alinha time e negócio"
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
                "s": "scalability | horizontal vertical | stateless | sharding",
                "d": "Horizontal: mais máquinas. Vertical: máquina maior. Stateless permite horizontal. Sharding distribui dados por chave"
              },
              {
                "w": "Resiliência: circuit breaker, retry com backoff, timeout, bulkhead, fallback",
                "s": "resilience | circuit breaker | retry backoff | bulkhead | fallback",
                "d": "Sistemas resilientes falham gracefully: circuit breaker para serviço quebrado, bulkhead isola falhas, fallback dá resposta alternativa"
              },
              {
                "w": "Consistência: strong vs eventual, CAP trade-offs na prática, conflict resolution",
                "s": "consistency | strong eventual | CAP tradeoff | conflict resolution",
                "d": "Strong consistency: todos veem o mesmo dado. Eventual: convergem com tempo. Na prática, escolher baseado em requisitos do negócio"
              },
              {
                "w": "Observabilidade em arquitetura: distributed tracing (Jaeger), correlation IDs, SLOs/SLIs/SLAs",
                "s": "observability | distributed tracing | correlation ID | SLO SLI SLA",
                "d": "Em microsserviços, um request passa por vários serviços. Tracing correlaciona tudo. SLOs definem metas de confiabilidade"
              },
              {
                "w": "System design interview: framework (requirements → estimation → design → deep dive → tradeoffs)",
                "s": "system design interview | framework | estimation | tradeoffs",
                "d": "Processo estruturado: entender requisitos, estimar escala (QPS, storage), desenhar componentes, aprofundar ponto crítico, discutir tradeoffs"
              },
              {
                "w": "Estudos de caso: design de Twitter, Uber, WhatsApp, YouTube — decisões reais de arquitetura",
                "s": "case study | Twitter Uber WhatsApp YouTube | real architecture",
                "d": "Analisar como sistemas reais resolvem problemas: timeline de Twitter (fan-out), Uber (geolocalização), YouTube (CDN + encoding)"
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
                "s": "neural network from scratch python | backpropagation explained | MLP tutorial | Perceptron Backpropagation zero explained",
                "d": "Neuronio: soma ponderada + ativacao. Forward pass > loss > backward pass. Implemente do zero com NumPy!"
              },
              {
                "w": "PyTorch: tensores, autograd, Dataset, DataLoader, treino",
                "s": "PyTorch tutorial 2025 | pytorch tensors autograd | pytorch training loop | PyTorch tensores autograd explained",
                "d": "torch.tensor, .backward(), nn.Module, DataLoader. GPU: .to('cuda'). Prefira PyTorch a TF."
              },
              {
                "w": "Treinamento: batch norm, dropout, lr scheduling, mixed precision",
                "s": "training tricks deep learning | batch normalization dropout | mixed precision training | Treinamento batch norm tutorial portugues",
                "d": "BatchNorm, Dropout, LR scheduling (cosine, warmup). Mixed precision (fp16). Gradient clipping."
              },
              {
                "w": "CNNs: convolucao, pooling, ResNet, transfer learning",
                "s": "CNN convolutional neural network | ResNet transfer learning PyTorch | image classification | CNNs convolucao pooling tutorial portugues",
                "d": "Conv2d, MaxPool, flatten, FC. ResNet: skip connections. Transfer learning: treinar no seu dado com modelo pre-treinado."
              },
              {
                "w": "RNNs, LSTM, GRU, Sequence-to-Sequence",
                "s": "RNN LSTM GRU tutorial | sequence to sequence | recurrent neural networks | RNNs LSTM Sequence-to-Sequence explained",
                "d": "RNN: memoria sequencial. LSTM: resolve vanishing gradient. GRU: LSTM simplificado. Seq2Seq: traducao."
              },
              {
                "w": "Transformers e Attention: o coraoco de tudo moderno",
                "s": "transformer attention mechanism | self-attention explained | attention is all you need | Transformers Attention coraoco tutorial portugues",
                "d": "Self-attention: cada token atende todos. Multi-head. Positional encoding. Base de GPT, BERT, tudo moderno."
              },
              {
                "w": "GANs, VAEs, Diffusion Models",
                "s": "GAN tutorial PyTorch | VAE generative model | diffusion models explained | GANs VAEs Diffusion explained",
                "d": "GAN: generator vs discriminator. VAE: latent space. Diffusion: denoise iterativo (Stable Diffusion)."
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
                "s": "NLP tokenization embeddings Word2Vec | BERT GPT explained | NLP fundamentals | Tokenizacao embeddings Word2Vec tutorial portugues",
                "d": "Tokenizar: texto>numeros. Embeddings: palavras como vetores. Word2Vec, BERT (bidirecional), GPT (autoregressivo)."
              },
              {
                "w": "Hugging Face Transformers: fine-tuning, pipelines",
                "s": "hugging face transformers tutorial | fine-tuning BERT | HF pipelines NLP | Hugging Face Transformers explained",
                "d": "from transformers import pipeline. Fine-tune no seu dataset. Tokenizers. Hub de modelos."
              },
              {
                "w": "Sentiment, NER, summarization, question answering",
                "s": "sentiment analysis NER | text summarization NLP | question answering transformers | Sentiment summarization question tutorial portugues",
                "d": "Tarefas NLP classicas. Pipeline HF facilita. Fine-tune pra dominio especifico."
              },
              {
                "w": "Speech e Audio: Whisper (STT), TTS, audio classification, speaker diarization",
                "s": "Whisper speech to text | TTS text to speech AI | audio classification deep learning | Speech Audio Whisper tutorial portugues",
                "d": "Whisper (OpenAI): speech-to-text state-of-the-art, multilingual. TTS: Bark, XTTS, ElevenLabs. Audio classification: genero musical, emocoes, sons ambientais. Speaker diarization: quem falou quando. Modelos multimodais unificam texto+audio+imagem."
              },
              {
                "w": "Text generation, language modeling, decoding strategies (beam, top-k, top-p)",
                "s": "text generation language model | decoding strategies beam search top-k | LLM text generation | Text generation language tutorial portugues",
                "d": "Language model: prever proxima palavra. Decoding: greedy (guloso), beam search (explorar), top-k (limitar vocabulario), top-p/nucleus (limitar por probabilidade acumulada). Temperature: criatividade vs determinismo. Base de chatbots, codigo, resumos."
              },
              {
                "w": "Multilingual NLP: modelos multilinguais, XLM-R, mBART, traducao, cross-lingual transfer",
                "s": "multilingual NLP models | XLM-R mBART multilingual | cross-lingual transfer learning | NLP Portuguese BERT",
                "d": "BERTimbau: BERT treinado em portugues. XLM-R: multilingual (100+ idiomas). mBART: traducao multilingual. Cross-lingual: treinar em ingles, usar em portugues (zero-shot). Importante: maioria dos modelos e english-centric. Pra PT-BR: BERTimbau, Sabia (Maritaca AI), ou fine-tune multilingual."
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
                "s": "OpenAI API tutorial | Anthropic Claude API | LLM API chat completion | OpenAI Anthropic chat explained",
                "d": "messages: system+user+assistant. Temperature, max_tokens, streaming. Structured outputs. Caching."
              },
              {
                "w": "Prompt Engineering: few-shot, CoT, self-consistency",
                "s": "prompt engineering techniques | chain of thought prompting | few-shot examples | Prompt Engineering few-shot tutorial portugues",
                "d": "Zero-shot, few-shot, chain-of-thought, self-consistency. System prompt design. Prompt templates."
              },
              {
                "w": "Embeddings e Vector Databases (Pinecone, Chroma, pgvector)",
                "s": "vector database embeddings | Pinecone Chroma pgvector | semantic search | Embeddings Vector Databases tutorial portugues",
                "d": "Texto>vetor (OpenAI embeddings, Sentence Transformers). Busca por similaridade. pgvector: Postgres nativo."
              },
              {
                "w": "RAG: Retrieval-Augmented Generation",
                "s": "RAG retrieval augmented generation | RAG tutorial LangChain | RAG architecture | Retrieval-Augmented Generation explained",
                "d": "Indexar docs > buscar relevantes > alimentar LLM. Chunks, overlap, re-ranking. Reduz alucinacao."
              },
              {
                "w": "Agents: LangChain, LangGraph, tool use, function calling",
                "s": "LLM agents LangChain LangGraph | function calling OpenAI | AI agent tutorial | Agents LangChain LangGraph explained",
                "d": "Agente: LLM + ferramentas. Decide qual tool usar. ReAct pattern. Multi-step reasoning."
              },
              {
                "w": "Multimodal: vision, audio, video",
                "s": "multimodal AI vision audio | GPT-4V multimodal | whisper speech recognition | Multimodal vision audio tutorial portugues",
                "d": "GPT-4V: imagem+texto. Whisper: audio>texto. Modelos multimodais unificados."
              },
              {
                "w": "Fine-tuning, LoRA, QLoRA, RLHF, DPO",
                "s": "fine-tuning LLM LoRA QLoRA | RLHF DPO alignment | parameter efficient fine-tuning | Fine-tuning LoRA QLoRA tutorial portugues",
                "d": "Fine-tune: adaptar modelo ao seu dominio. LoRA: eficiente (poucos parametros). RLHF/DPO: alinhar com preferencias humanas."
              },
              {
                "w": "Safety, guardrails, eval, red-teaming",
                "s": "LLM safety guardrails | AI evaluation benchmarks | red teaming LLM | Safety guardrails eval tutorial portugues",
                "d": "Guardrails: limitar outputs. Eval: metricas automaticas. Red-team: encontrar falhas. Responsible AI."
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
                "s": "LLM evaluation | MMLU HumanEval | BLEU ROUGE | human eval | LLM judge",
                "d": "Medir qualidade de LLM: benchmarks padronizados, métricas automáticas (BLEU pra tradução, ROUGE pra resumo), e avaliação humana"
              },
              {
                "w": "Guardrails e segurança: content filtering, input/output validation, PII detection, jailbreak prevention",
                "s": "guardrails | content filter | PII detection | jailbreak | safety",
                "d": "Proteger LLMs em produção: filtrar conteúdo tóxico, detectar dados pessoais (PII), prevenir prompt injection e jailbreaks"
              },
              {
                "w": "Fine-tuning prático: LoRA, QLoRA, dataset preparation, RLHF vs DPO, quando fine-tune vs RAG",
                "s": "fine-tuning | LoRA QLoRA | RLHF DPO | dataset prep | vs RAG",
                "d": "LoRA adapta modelo eficientemente (poucos parâmetros). DPO é alternativa mais simples ao RLHF. Fine-tune para estilo, RAG para conhecimento"
              },
              {
                "w": "Custos e otimização: token counting, caching de responses, modelo routing, model distillation",
                "s": "LLM cost | token counting | caching | model routing | distillation",
                "d": "Otimizar custos: cache responses comuns, rotear queries simples para modelos menores, distillar modelo grande em menor"
              },
              {
                "w": "Observabilidade de LLM: logging de prompts/responses, latência, qualidade ao longo do tempo",
                "s": "LLM observability | prompt logging | latency | quality monitoring",
                "d": "Monitorar LLMs em produção: log de interações, medir latência, detectar degradação de qualidade, A/B testing de prompts"
              },
              {
                "w": "Multimodal e além: vision APIs, speech-to-text, text-to-image, document understanding",
                "s": "multimodal | vision API | speech-to-text | text-to-image | document AI",
                "d": "LLMs além de texto: analisar imagens (GPT-4V), transcrever áudio (Whisper), gerar imagens (DALL-E), entender documentos"
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
                "s": "cell biology basics | biologia celular basico | prokaryotic eukaryotic cell | Celula membrana nucleo tutorial portugues",
                "d": "Celula = unidade basica da vida. Procariota (bacteria): sem nucleo. Eucariota (humanos): com nucleo. Nucleo: contem DNA. Mitocondria: energia (ATP). Ribossomos: fabricam proteinas. Membrana: controla o que entra/sai."
              },
              {
                "w": "DNA, genes, cromossomos, replicacao, mutacoes",
                "s": "DNA genes chromosomes replication | DNA estrutura replicacao | gene mutation types | genes cromossomos replicacao tutorial portugues",
                "d": "DNA: dupla helice, 4 bases (A-T, C-G). Gene: trecho de DNA que codifica proteina. Cromossomos: DNA empacotado (humanos: 23 pares). Replicacao: copiar DNA antes de dividir. Mutacao: erro na copia (pode ser bom, ruim, ou neutro). Base da evolucao e doencas geneticas."
              },
              {
                "w": "Central dogma: DNA > RNA > Proteina (transcricao e traducao)",
                "s": "central dogma biology | transcription translation protein synthesis | DNA RNA protein | Central dogma Proteina tutorial portugues",
                "d": "Transcricao: DNA > mRNA (no nucleo). Traducao: mRNA > proteina (nos ribossomos). Codons: 3 letras de RNA = 1 aminoacido. 20 aminoacidos combinados formam todas proteinas. Proteinas fazem TUDO: enzimas, estrutura, defesa, transporte."
              },
              {
                "w": "Genetica: heranca, dominante/recessivo, genoma, sequenciamento",
                "s": "genetics inheritance genome sequencing | genetica heranca Mendel | genome sequencing basics | Genetica heranca dominante/recessivo tutorial portugues",
                "d": "Mendel: dominante/recessivo. Genoma: todo o DNA de um organismo. Genoma humano: ~20.000 genes, 3 bilhoes de pares de base. Sequenciamento: 'ler' as letras do DNA. Human Genome Project (2003): primeiro genoma humano completo. Hoje custa ~$200."
              },
              {
                "w": "Evolucao: selecao natural, filogenia, por que importa pra computacao",
                "s": "evolution natural selection phylogeny | evolucao selecao natural | evolutionary algorithms | Evolucao selecao natural tutorial portugues",
                "d": "Selecao natural: quem se adapta, sobrevive e reproduz. Filogenia: arvore da vida. Pra computacao: algoritmos geneticos (otimizacao inspirada em evolucao), filogenetica computacional (rastrear virus), bioinformatica (comparar sequencias entre especies)."
              },
              {
                "w": "Microbiologia e virus: bacterias, virus, vacinas, resistencia a antibioticos",
                "s": "microbiology basics viruses bacteria | microbiologia virus bacterias | antibiotic resistance | vaccine science basics",
                "d": "Bacterias: unicelulares, reproduzem rapido. Virus: nao sao 'vivos' (precisam de hospedeiro). Vacina: ensinar imunidade sem causar doenca. Resistencia a antibioticos: evolucao em tempo real. Bioinformatica: sequenciar patogenos, rastrear mutacoes (COVID variantes), descobrir antibioticos novos com ML."
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
                "s": "bioinformatics introduction | o que e bioinformatica | computational biology basics | bioinformatica biologia computacao tutorial portugues",
                "d": "Bioinformatica: usar computacao pra analisar dados biologicos. DNA = string de 4 letras (A, T, C, G). Genoma humano: 3 bilhoes de letras. Sequenciamento ficou barato (NGS), dados explodiram. Sem computacao, impossivel analisar."
              },
              {
                "w": "DNA, RNA, proteinas: central dogma, sequencias, alinhamento",
                "s": "DNA RNA protein central dogma | sequence alignment bioinformatics | BLAST alignment | proteinas central dogma tutorial portugues",
                "d": "DNA > (transcricao) > RNA > (traducao) > Proteina. Sequencias: strings de ATCG (DNA) ou aminoacidos (proteina). Alinhamento: comparar 2 sequencias (quao parecidas?). BLAST: ferramenta #1 (buscar sequencia em bancos de dados). Programacao dinamica aplicada!"
              },
              {
                "w": "Bancos de dados biologicos: GenBank, UniProt, PDB, ENSEMBL",
                "s": "GenBank UniProt PDB biological databases | bancos dados biologicos | bioinformatics databases | Bancos dados biologicos tutorial portugues",
                "d": "GenBank/NCBI: sequencias de DNA/RNA. UniProt: proteinas. PDB: estruturas 3D de proteinas. ENSEMBL: genomas anotados. Todos gratuitos e publicos. Biopython: biblioteca Python pra acessar e processar."
              },
              {
                "w": "Genomica: sequenciamento NGS, montagem de genomas, variantes (SNPs)",
                "s": "NGS sequencing genomics | genome assembly | SNP variant calling bioinformatics | Genomica sequenciamento montagem tutorial portugues",
                "d": "NGS: sequenciar milhoes de fragmentos em paralelo. Montagem: juntar fragmentos como quebra-cabeca. Variantes (SNPs): diferencas de 1 letra entre individuos. Pipeline: FASTQ > align (BWA) > variant call (GATK) > annotate. Aplicacao: diagnostico genetico, farmacogenomica."
              },
              {
                "w": "Filogenetica: arvores evolutivas, alinhamento multiplo, UPGMA, Maximum Likelihood",
                "s": "phylogenetics evolutionary trees | multiple sequence alignment | phylogenetic analysis | Filogenetica arvores evolutivas tutorial portugues",
                "d": "Filogenetica: reconstruir historia evolutiva. Alinhamento multiplo (ClustalW, MUSCLE): comparar muitas sequencias. Arvore: quem e parente de quem. Metodos: UPGMA (simples), Neighbor-Joining, Maximum Likelihood (melhor). Aplicacao: rastrear evolucao de virus (COVID)."
              },
              {
                "w": "Proteinas: estrutura primaria/secundaria/terciaria/quaternaria, folding, funcao",
                "s": "protein structure folding | proteinas estrutura funcao | protein primary secondary tertiary | protein folding problem",
                "d": "Primaria: sequencia de aminoacidos (string). Secundaria: alpha-helix, beta-sheet (padroes locais). Terciaria: forma 3D completa. Quaternaria: multiplas cadeias juntas. Folding: como a sequencia determina a forma (problema de 50 anos, AlphaFold resolveu). Forma = funcao."
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
                "s": "AlphaFold protein structure prediction | AlphaFold2 deep learning biology | protein folding AI | AlphaFold predicao estrutura tutorial portugues",
                "d": "AlphaFold2 (DeepMind, 2021): preveu estrutura 3D de ~200M de proteinas. Problema de 50 anos resolvido. Impacto: drug discovery, engenharia de proteinas, biologia estrutural. Usa attention + MSA + evoformer. Open source. Mudou a biologia pra sempre."
              },
              {
                "w": "Drug discovery com ML: virtual screening, molecular generation, ADMET",
                "s": "drug discovery machine learning | virtual screening ML | molecular generation AI | Drug discovery virtual tutorial portugues",
                "d": "Virtual screening: testar milhoes de moleculas in silico (computador). QSAR: prever atividade a partir de estrutura. Molecular generation: gerar moleculas novas (VAE, GAN). ADMET: prever absorcao, toxicidade. Reduzir tempo de 10 anos pra meses."
              },
              {
                "w": "Genomica + ML: predicao de genes, classificacao de variantes, single-cell RNA-seq",
                "s": "genomics machine learning | gene prediction ML | single cell RNA-seq analysis | Genomica predicao genes tutorial portugues",
                "d": "Prever funcao de genes. Classificar variantes: patogenica ou benigna (ClinVar). Single-cell: analisar expressao gene-a-gene em cada celula individual (milhares de celulas). Clustering pra descobrir tipos celulares. Ferramentas: Scanpy, Seurat."
              },
              {
                "w": "Ferramentas: Biopython, RDKit (moleculas), PyMOL (visualizacao 3D), Galaxy",
                "s": "Biopython tutorial | RDKit molecular toolkit | PyMOL protein visualization | Galaxy bioinformatics",
                "d": "Biopython: ler FASTA, acessar NCBI, alinhamento. RDKit: manipular moleculas (SMILES, fingerprints, descriptors). PyMOL: visualizar proteinas 3D. Galaxy: plataforma web pra pipelines (sem programar). Jupyter + pandas + sklearn = bioinformatica pratica."
              },
              {
                "w": "Protein language models: ESM, ProtTrans, representacao aprendida de proteinas",
                "s": "protein language models ESM | ProtTrans protein representation | learned protein embeddings | protein ML models",
                "d": "ESM (Meta): treinado em milhoes de sequencias de proteinas (como BERT pra texto). ProtTrans: similar. Embeddings de proteinas: capturar funcao, estrutura, evolucao. Aplicacao: prever funcao, classificar familias, design de proteinas novas. Revolucionando biologia computacional."
              },
              {
                "w": "Dados de saude e IA: prontuarios eletronicos, imagens medicas, etica e privacidade",
                "s": "AI healthcare medical imaging | IA saude prontuario eletronico | medical image classification CNN | health data ethics privacy",
                "d": "Imagens medicas: CNN pra detectar cancer (mamografia, raio-X, histopatologia). NLP pra prontuarios (extrair diagnosticos). Wearables: dados continuos (batimentos, ECG). Desafios: dados desbalanceados, privacidade (HIPAA, LGPD), vies (dataset predominantemente branco/masculino). IA nao substitui medico — auxilia."
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
                "s": "PostgreSQL window functions CTE recursive | PL/pgSQL stored procedures | PostgreSQL Window Functions tutorial 2025 | PostgreSQL Window Functions explained",
                "d": "ROW_NUMBER, RANK, LAG, LEAD. WITH RECURSIVE: hierarquias, grafos. PL/pgSQL: logica no banco (triggers, procedures). Lateral joins. GENERATE_SERIES. FILTER clause."
              },
              {
                "w": "Indices avancados: GiST, GIN, BRIN, partial, expression, covering",
                "s": "PostgreSQL GiST GIN BRIN index | partial expression index | covering index | Indices avancados GiST tutorial portugues",
                "d": "GiST: geometria, full-text. GIN: JSONB, arrays, full-text. BRIN: dados ordenados por data (muito eficiente). Partial: WHERE ativo=true. Expression: lower(email). Covering (INCLUDE): evitar table lookup."
              },
              {
                "w": "Particionamento: range, list, hash, partition pruning",
                "s": "PostgreSQL table partitioning | partition pruning | database partitioning strategies | Particionamento range list tutorial portugues",
                "d": "Tabela com bilhoes de linhas? Particionar por data (range), tipo (list), hash. Partition pruning: query so acessa particoes relevantes. ATTACH/DETACH: adicionar/remover particoes. Manutencao mais facil (drop particao antiga vs delete)."
              },
              {
                "w": "Replicacao: streaming, logical, failover, PgBouncer, connection pooling",
                "s": "PostgreSQL replication streaming logical | PgBouncer connection pool | database failover | Replicacao streaming logical tutorial portugues",
                "d": "Streaming: replica bit-a-bit (read replicas). Logical: replicar tabelas especificas. Failover: promover replica se primario cai (Patroni). PgBouncer: pool de conexoes (app abre 1000, PgBouncer usa 50 pro Postgres). pgpool-II: load balancing."
              },
              {
                "w": "Backup: pg_dump, pg_basebackup, PITR, WAL archiving",
                "s": "PostgreSQL backup PITR | pg_dump pg_basebackup | WAL archiving recovery | Backup pg_dump pg_basebackup tutorial portugues",
                "d": "pg_dump: logico (SQL). pg_basebackup: fisico (binario). PITR: Point-In-Time Recovery (restaurar ate minuto X). WAL archiving: guardar logs de transacao. Testar restore REGULARMENTE (backup que nao foi testado nao e backup)."
              },
              {
                "w": "Performance: EXPLAIN ANALYZE BUFFERS, pg_stat_statements, vacuum, autovacuum",
                "s": "PostgreSQL EXPLAIN ANALYZE | pg_stat_statements | vacuum autovacuum tuning | Performance EXPLAIN ANALYZE tutorial portugues",
                "d": "EXPLAIN ANALYZE BUFFERS: plano de execucao + tempo real + IO. Seq scan vs index scan. pg_stat_statements: queries mais lentas. VACUUM: limpar dead tuples (MVCC). Autovacuum: automatico mas precisa tuning. shared_buffers, work_mem, effective_cache_size."
              },
              {
                "w": "JSONB: indexacao, operadores, quando usar SQL vs document",
                "s": "PostgreSQL JSONB indexing | JSONB vs relacional | PostgreSQL document store | JSONB indexacao operadores tutorial portugues",
                "d": "JSONB: dados semi-estruturados dentro do Postgres. Operadores: -> ->> @> ?. GIN index: busca rapida. Quando: schema flexivel, configuracoes, metadados. NAO usar: dados altamente relacionais. PostgreSQL = relacional + document store."
              },
              {
                "w": "Seguranca: roles, Row Level Security (RLS), encriptacao, audit",
                "s": "PostgreSQL security RLS | row level security | database encryption audit | Seguranca roles Level tutorial portugues",
                "d": "Roles: GRANT/REVOKE (principio do minimo privilegio). RLS: controlar acesso por linha (multi-tenant). pgcrypto: encriptar dados. SSL: conexao criptografada. pgAudit: log de quem acessou o que. Nao use superuser na aplicacao!"
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
                "s": "MongoDB | document model | aggregation | sharding | replica set",
                "d": "MongoDB armazena documentos JSON flexíveis. Aggregation pipeline para queries complexas. Sharding para escalar horizontalmente"
              },
              {
                "w": "Redis em profundidade: data structures (sorted sets, streams, HyperLogLog), persistence, Lua scripting",
                "s": "Redis | sorted set | streams | HyperLogLog | Lua | persistence",
                "d": "Redis vai além de cache: sorted sets para rankings, streams para event sourcing, HyperLogLog para contagem aproximada"
              },
              {
                "w": "Cassandra/ScyllaDB: wide-column, eventual consistency, write-heavy workloads, partition design",
                "s": "Cassandra ScyllaDB | wide column | partition key | write heavy",
                "d": "Cassandra escala horizontalmente para bilhões de linhas. Design de partition key é crucial para performance"
              },
              {
                "w": "Elasticsearch: full-text search, inverted index, analyzers, agregações, ELK stack",
                "s": "Elasticsearch | full-text search | inverted index | ELK | analyzers",
                "d": "Elasticsearch indexa texto para busca rápida (type-ahead, fuzzy). ELK stack (Elasticsearch + Logstash + Kibana) para logs"
              },
              {
                "w": "NewSQL: CockroachDB, TiDB — SQL distribuído com consistência forte e escala horizontal",
                "s": "NewSQL | CockroachDB TiDB | distributed SQL | strong consistency",
                "d": "NewSQL combina SQL (ACID, schema) com escala horizontal de NoSQL. CockroachDB: PostgreSQL-compatible e distribuído"
              },
              {
                "w": "Estratégia polyglot: escolher o banco certo para cada caso (relacional, document, graph, time-series, vector)",
                "s": "polyglot persistence | database selection | graph time-series vector",
                "d": "Usar múltiplos bancos: PostgreSQL para transações, Redis para cache, Neo4j para grafos, InfluxDB para métricas, Pinecone para vetores"
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
                "s": "ETL vs ELT data pipeline | batch vs streaming processing | data engineering architecture | batch streaming data tutorial portugues",
                "d": "ETL: extrair > transformar > carregar (tradicional). ELT: carregar primeiro, transformar depois (moderno, cloud). Batch: processar em lotes (diario). Streaming: processar em tempo real. Escolher depende do caso."
              },
              {
                "w": "Apache Spark: processamento distribuido, PySpark, DataFrames",
                "s": "Apache Spark PySpark tutorial | Spark distributed processing | Spark DataFrame | Apache Spark processamento explained",
                "d": "Spark: processar TB/PB de dados em cluster. PySpark: API Python. DataFrames: tabelas distribuidas. Transformacoes lazy. Actions: collect, count, write. Substitui MapReduce (10-100x mais rapido)."
              },
              {
                "w": "Kafka Streams, Flink: processamento de eventos em tempo real",
                "s": "Kafka Streams Flink | stream processing real-time | event streaming architecture | Kafka Streams Flink tutorial portugues",
                "d": "Kafka: fila de eventos distribuida. Kafka Streams: processar streams em Java/Scala. Flink: mais poderoso (janelas, state). Use case: fraude em tempo real, recomendacoes, dashboards live."
              },
              {
                "w": "Data Lake vs Data Warehouse vs Lakehouse (Delta Lake, Iceberg)",
                "s": "data lake data warehouse lakehouse | Delta Lake Iceberg | modern data architecture | Data Lake Data tutorial portugues",
                "d": "Warehouse: dados estruturados (Snowflake, BigQuery, Redshift). Lake: raw data barato (S3). Lakehouse: combina ambos (Delta Lake, Apache Iceberg). Schema-on-read vs schema-on-write."
              },
              {
                "w": "Orquestracao: Airflow, Dagster, Prefect. dbt pra transformacoes",
                "s": "Apache Airflow Dagster Prefect | data orchestration | dbt data transformation | Orquestracao Airflow Dagster tutorial portugues",
                "d": "Airflow: DAGs em Python (padrao de mercado). Dagster/Prefect: alternativas modernas. dbt: SQL transformations com versionamento, testes, docs. Data lineage: rastrear origem dos dados."
              },
              {
                "w": "Qualidade de dados: great_expectations, validacao, observabilidade",
                "s": "data quality great expectations | data validation observability | data quality monitoring | Qualidade dados great_expectations tutorial portugues",
                "d": "Dados ruins = modelos ruins. great_expectations: testes pra dados (coluna nao nula, range valido). Data contracts: acordo entre produtor e consumidor. Observabilidade: freshness, volume, schema changes."
              },
              {
                "w": "Snowflake, BigQuery, Redshift, Databricks: data warehouses modernos cloud-native, comparação e quando usar",
                "s": "Snowflake | BigQuery | Redshift | Databricks | cloud data warehouse | comparison",
                "d": "Snowflake: separação compute/storage. BigQuery: serverless SQL. Redshift: AWS nativo. Databricks: lakehouse unificado. Escolher baseado em stack e necessidades"
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
                "s": "data quality | Great Expectations | dbt tests | data contracts",
                "d": "Garantir qualidade: validar schema, completude, unicidade, freshness. Data contracts formalizam SLA entre produtor e consumidor de dados"
              },
              {
                "w": "Data governance: catálogo de dados, linhagem (lineage), controle de acesso, PII, LGPD/GDPR",
                "s": "data governance | catalog | lineage | access control | PII LGPD GDPR",
                "d": "Governança controla quem acessa quais dados, rastreia origem (lineage), protege PII e garante conformidade com leis de privacidade"
              },
              {
                "w": "Data mesh: domínios como donos dos dados, data products, self-serve platform, federated governance",
                "s": "data mesh | domain ownership | data product | self-serve | federated",
                "d": "Descentralizar dados: cada time de negócio é dono dos seus data products com qualidade e documentação. Plataforma compartilhada"
              },
              {
                "w": "Lakehouse: Delta Lake, Iceberg, Hudi — ACID em data lakes, schema evolution, time travel",
                "s": "lakehouse | Delta Lake Iceberg Hudi | ACID | schema evolution | time travel",
                "d": "Lakehouse combina data lake (custo) com warehouse (qualidade): transações ACID em Parquet, viajar no tempo, evoluir schema"
              },
              {
                "w": "Dimensional modeling: star schema, snowflake, fact tables, dimension tables, slowly changing dimensions",
                "s": "dimensional modeling | star schema | fact dimension | SCD | Kimball",
                "d": "Modelar dados para analytics: fatos (vendas, cliques) e dimensões (tempo, produto, região). Star schema é o padrão"
              },
              {
                "w": "Observabilidade de dados: Monte Carlo, Bigeye — monitorar freshness, volume, schema, distribution",
                "s": "data observability | Monte Carlo Bigeye | freshness volume schema",
                "d": "Monitorar pipelines como monitoramos apps: alertar quando dados atrasam, schema muda inesperadamente, ou distribuição diverge"
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
                "s": "blockchain fundamentals how it works | blockchain ledger distribuido | blockchain basics explained | blockchain ledger distribuido tutorial portugues",
                "d": "Blockchain = lista de blocos encadeados por hash. Cada bloco: transacoes + hash anterior + nonce. Imutavel: alterar 1 bloco invalida todos depois. Distribuido: milhares de copias. Nao precisa confiar em ninguem (trustless). Inventado por Satoshi Nakamoto (2008)."
              },
              {
                "w": "Consenso: Proof of Work, Proof of Stake, BFT, trade-offs",
                "s": "blockchain consensus PoW PoS BFT | proof of work vs proof of stake | consensus mechanisms | Consenso Proof Work tutorial portugues",
                "d": "PoW (Bitcoin): resolver puzzle computacional (gasta energia). PoS (Ethereum 2.0): apostar moedas como garantia (eficiente). BFT: tolerancia a falhas bizantinas. Trade-offs: seguranca vs velocidade vs descentralizacao (trilema). Cada chain escolhe diferente."
              },
              {
                "w": "Bitcoin: UTXO, mineracao, halving, Lightning Network",
                "s": "Bitcoin UTXO mining halving | how Bitcoin works | Lightning Network explained | Bitcoin UTXO mineracao tutorial portugues",
                "d": "UTXO: modelo de transacao (inputs/outputs). Mineracao: encontrar nonce que gera hash com N zeros. Halving: recompensa cai pela metade a cada 4 anos. Lightning: canal de pagamento off-chain (transacoes instantaneas). Bitcoin = ouro digital, reserva de valor."
              },
              {
                "w": "Ethereum: accounts, gas, EVM, transacoes, blocos",
                "s": "Ethereum EVM gas accounts | how Ethereum works | Ethereum virtual machine | Ethereum accounts transacoes tutorial portugues",
                "d": "Ethereum = computador mundial. Accounts: EOA (usuario) e Contract. Gas: custo computacional (evita loops infinitos). EVM: maquina virtual que executa contratos. Transacao: assinada com chave privada. Blocos a cada ~12s."
              },
              {
                "w": "Criptografia aplicada: hashing (SHA-256, Keccak), assinaturas digitais (ECDSA), Merkle trees",
                "s": "blockchain cryptography SHA-256 ECDSA | Merkle tree blockchain | digital signatures crypto | Criptografia aplicada hashing tutorial portugues",
                "d": "SHA-256: hash de 256 bits (Bitcoin). Keccak-256: Ethereum. ECDSA: assinar transacoes com chave privada, verificar com publica. Merkle tree: verificar que transacao esta no bloco sem baixar tudo. Zero-knowledge proofs: provar sem revelar (ZK-SNARKs, ZK-STARKs)."
              },
              {
                "w": "Web3 vs Web2: diferencas de arquitetura, descentralizacao, trade-offs",
                "s": "Web3 vs Web2 architecture | web3 decentralization tradeoffs | blockchain vs traditional architecture | decentralized vs centralized",
                "d": "Web2: cliente > servidor centralizado (Google, Meta controlam). Web3: cliente > blockchain (descentralizado, censura-resistente). Trade-offs: Web3 e mais lento, mais caro, pior UX, mas sem intermediario. Descentralizacao e espectro, nao binario. Maioria dos projetos Web3 ainda depende de infra centralizada."
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
                "s": "Solidity smart contract tutorial | Solidity programming basics | learn Solidity 2025 | Solidity tipos funcoes explained",
                "d": "Solidity: linguagem de smart contracts (parecida com JS). contract MeuToken { mapping(address => uint) balances; function transfer(...) }. Compilar com solc. Deploy na blockchain. IMUTAVEL depois de deployed (cuidado!)."
              },
              {
                "w": "Padroes: ERC-20 (tokens), ERC-721 (NFTs), ERC-1155, proxy upgradeable",
                "s": "ERC-20 ERC-721 token standard | NFT smart contract | upgradeable proxy pattern | Padroes ERC-20 tokens tutorial portugues",
                "d": "ERC-20: token fungivel (USDT, UNI). ERC-721: NFT (unico). ERC-1155: multi-token. OpenZeppelin: biblioteca de contratos auditados. Proxy pattern: contornar imutabilidade (storage + logic separados)."
              },
              {
                "w": "Seguranca de smart contracts: reentrancy, overflow, front-running, auditorias",
                "s": "smart contract security vulnerabilities | reentrancy attack | smart contract audit | Seguranca smart contracts tutorial portugues",
                "d": "Reentrancy: The DAO hack ($60M). Overflow: antes do Solidity 0.8. Front-running: bots veem transacao pendente e se adiantam. Auditorias: Slither, Mythril (ferramentas). OpenZeppelin Defender. Bug bounties: Immunefi. 1 bug = milhoes perdidos."
              },
              {
                "w": "DApps: frontend (ethers.js/web3.js), wallets (MetaMask), IPFS, The Graph",
                "s": "DApp development ethers.js | MetaMask integration | IPFS decentralized storage The Graph | DApps frontend ethers.js/web3.js tutorial portugues",
                "d": "Frontend: React + ethers.js conecta a blockchain. MetaMask: wallet no browser. IPFS: storage descentralizado (arquivos, metadata NFT). The Graph: indexar dados da blockchain (subgraphs). Full-stack Web3 = React + Solidity + ethers + IPFS."
              },
              {
                "w": "DeFi, DAOs, Layer 2 (Rollups), futuro do Web3",
                "s": "DeFi decentralized finance | DAO governance | Layer 2 rollups Ethereum | DeFi DAOs Layer tutorial portugues",
                "d": "DeFi: financas sem banco (Uniswap, Aave, Compound). DAO: organizacao governada por token holders. Layer 2: Optimistic Rollups (Arbitrum, Optimism), ZK Rollups (zkSync, StarkNet) — transacoes baratas. Web3: internet descentralizada (visao, nao realidade ainda)."
              },
              {
                "w": "Testing e deploy: Hardhat, Foundry, testnets (Sepolia, Mumbai), Etherscan",
                "s": "Hardhat Foundry smart contract testing | Solidity testing tutorial | Sepolia testnet deploy | Etherscan verify contract",
                "d": "Hardhat (JS) ou Foundry (Solidity, mais rapido): framework de dev. Testes: simular blockchain local, testar edge cases. Testnets: Sepolia (Ethereum), Mumbai (Polygon) — deploy sem gastar dinheiro real. Etherscan: verificar contrato (publicar codigo-fonte). Deploy em mainnet: so apos auditorias."
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
                "s": "kubernetes tutorial 2025 | K8s pods services deployments | helm charts | Kubernetes pods services explained",
                "d": "Pod: menor unidade. Service: expor. Deployment: declarativo. Ingress: roteamento. Helm: pacotes."
              },
              {
                "w": "IaC: Terraform, Ansible, GitOps (ArgoCD/Flux)",
                "s": "terraform tutorial | ansible infrastructure | GitOps ArgoCD Flux | Terraform Ansible GitOps explained",
                "d": "Terraform: infra como codigo (HCL). Ansible: configuracao. GitOps: git como fonte de verdade."
              },
              {
                "w": "Podman, containerd, alternativas ao Docker. OCI standards",
                "s": "Podman vs Docker | containerd OCI | container alternatives Docker | Podman containerd alternativas tutorial portugues",
                "d": "Podman: rootless, daemonless (mais seguro). containerd: runtime que K8s usa internamente. OCI: padrao aberto de imagens/runtimes. Docker nao e o unico — K8s nao usa Docker daemon desde 2022."
              },
              {
                "w": "Observabilidade: Prometheus, Grafana, ELK/Loki, tracing",
                "s": "prometheus grafana monitoring | ELK stack logging | distributed tracing | Observabilidade Prometheus Grafana tutorial portugues",
                "d": "Metricas (Prometheus), Logs (Loki/ELK), Traces (Jaeger/Tempo). Alertas. Dashboards Grafana."
              },
              {
                "w": "Cloud avancado: VPC, IAM, Load Balancers, auto-scaling",
                "s": "AWS VPC IAM tutorial | cloud networking | auto scaling load balancer | Cloud avancado Load explained",
                "d": "VPC: rede isolada. IAM: permissoes granulares. ALB/NLB. Auto-scaling groups."
              },
              {
                "w": "Service mesh: Istio, Linkerd. Sidecar pattern, mTLS, traffic management",
                "s": "service mesh Istio Linkerd | sidecar pattern mTLS | service mesh tutorial | Service mesh Istio explained",
                "d": "Service mesh: camada de rede entre servicos. Sidecar: proxy ao lado de cada pod. mTLS: criptografia entre servicos automatica. Traffic management: canary, blue-green, circuit breaking. Linkerd: mais leve que Istio."
              },
              {
                "w": "Serverless: AWS Lambda, Google Cloud Functions, Azure Functions — event-driven, pay-per-execution, cold starts",
                "s": "serverless | AWS Lambda | Cloud Functions | Azure Functions | cold start | event-driven",
                "d": "Serverless executa código sem gerenciar servidores: trigger por evento (HTTP, S3, queue), escala automaticamente, paga por execução. Cold start é o trade-off"
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
                "s": "StatefulSet DaemonSet | Job CronJob | init container | sidecar",
                "d": "Além de Deployments: StatefulSets para bancos (identidade estável), DaemonSets em todo nó, Jobs para tarefas batch"
              },
              {
                "w": "K8s networking: CNI, Network Policies, DNS interno, Service types (ClusterIP, NodePort, LoadBalancer)",
                "s": "K8s networking | CNI | Network Policy | DNS | Service types",
                "d": "Networking em K8s: CNI plugins gerenciam rede, Network Policies isolam tráfego entre pods, cada Service tem DNS automático"
              },
              {
                "w": "K8s storage: PersistentVolumes, StorageClasses, CSI drivers, snapshots, resize",
                "s": "K8s storage | PersistentVolume | StorageClass | CSI | snapshots",
                "d": "Storage persistente em K8s: PV/PVC abstraem disco, StorageClasses provisionam automaticamente, CSI drivers para cada cloud"
              },
              {
                "w": "Terraform em profundidade: modules, workspaces, state management, remote backend, drift detection",
                "s": "Terraform | modules | workspaces | state | remote backend | drift",
                "d": "IaC com Terraform: modules para reutilizar, workspaces para ambientes, state remoto (S3) compartilhado, detectar drift de configuração"
              },
              {
                "w": "Multi-cloud e cloud-native: evitar vendor lock-in, abstrações portáteis, Crossplane",
                "s": "multi-cloud | vendor lock-in | Crossplane | portable abstractions",
                "d": "Usar abstrações cloud-agnostic: Terraform, Crossplane (K8s-native), containers. Reduzir dependência de APIs específicas do provider"
              },
              {
                "w": "FinOps: custo de cloud, right-sizing, spot instances, reserved instances, cost monitoring",
                "s": "FinOps | cloud cost | right-sizing | spot instances | cost monitoring",
                "d": "Cloud pode ficar cara: right-size recursos, usar spot/preemptible para workloads tolerantes, monitorar custo por serviço/time"
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
                "s": "SAST DAST SCA security pipeline | DevSecOps CI CD security | shift left security | SAST DAST seguranca tutorial portugues",
                "d": "SAST: codigo estatico (Semgrep, SonarQube). DAST: app rodando (OWASP ZAP). SCA: dependencias (Snyk, Trivy). Shift left: seguranca CEDO no pipeline, nao no fim. Falhar build se vulnerabilidade critica."
              },
              {
                "w": "Secret scanning: detectar credenciais no codigo (GitLeaks, TruffleHog)",
                "s": "secret scanning GitLeaks TruffleHog | detect secrets in code | git secret scanning | Secret scanning detectar tutorial portugues",
                "d": "Problema #1: chaves de API, senhas, tokens commitados no git. GitLeaks/TruffleHog: scanear historico do git. Pre-commit hook: prevenir antes de commitar. GitHub secret scanning: alerta automatico. Rotacionar IMEDIATAMENTE se vazou."
              },
              {
                "w": "Container security: scan imagens, rootless, seccomp, AppArmor, distroless",
                "s": "container security Docker scan | rootless containers distroless | seccomp AppArmor | Container security scan tutorial portugues",
                "d": "Scan: Trivy (open-source). Rootless: nao rodar como root. Distroless: imagem sem shell (menor superficie). Seccomp: limitar syscalls. Multi-stage builds: imagem final menor. Nao instalar ferramentas desnecessarias."
              },
              {
                "w": "Dependency management: Dependabot, Renovate, SBOM, supply chain security",
                "s": "Dependabot Renovate dependency updates | SBOM software bill of materials | supply chain security | Dependency management Dependabot tutorial portugues",
                "d": "Dependabot/Renovate: PRs automaticos pra atualizar dependencias. SBOM: inventario de tudo que esta no software. Supply chain: Log4Shell mostrou o risco. Lockfiles: package-lock.json/poetry.lock. Verificar checksums. Pinnar versoes."
              },
              {
                "w": "SBOM, threat modeling (STRIDE), security gates no pipeline",
                "s": "threat modeling STRIDE | security gates CI CD pipeline | SBOM generation | SBOM threat modeling tutorial portugues",
                "d": "STRIDE: Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation. Threat model ANTES de construir. Security gates: build falha se high/critical. Quality gates: SonarQube. Aceitar risco consciente (nao ignorar)."
              },
              {
                "w": "Kubernetes security: RBAC, Network Policies, Pod Security, OPA/Gatekeeper",
                "s": "Kubernetes security RBAC | network policies K8s | OPA Gatekeeper policy | Kubernetes security RBAC tutorial portugues",
                "d": "RBAC: quem pode o que (ServiceAccount por namespace). Network Policies: isolar pods (default deny). Pod Security Standards: restricted/baseline/privileged. OPA Gatekeeper: politicas customizadas (nao permitir latest tag, exigir resource limits)."
              },
              {
                "w": "Compliance: SOC 2, ISO 27001, PCI-DSS, frameworks de seguranca",
                "s": "SOC 2 compliance engineering | ISO 27001 | PCI-DSS compliance | security compliance framework",
                "d": "SOC 2: controles de seguranca (startups SaaS). ISO 27001: gestao de seguranca da informacao. PCI-DSS: quem processa cartao de credito. HIPAA: dados de saude. Compliance nao e checkbox — e cultura. Automatizar evidencias: Vanta, Drata."
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
                "s": "threat modeling | STRIDE DREAD | attack tree | data flow | attack surface",
                "d": "Antes de construir, modelar ameaças: STRIDE categoriza (Spoofing, Tampering, etc.), data flow diagrams mostram onde dados fluem"
              },
              {
                "w": "Runtime security: Falco, Sysdig — detectar comportamento anômalo em containers em produção",
                "s": "runtime security | Falco Sysdig | anomaly detection | container runtime",
                "d": "Detectar em tempo real: container executando shell inesperado, lendo /etc/shadow, fazendo conexão externa suspeita"
              },
              {
                "w": "Compliance as code: OPA (Open Policy Agent), Sentinel, políticas automatizadas em CI/CD",
                "s": "compliance as code | OPA | Sentinel | policy automation | CI/CD",
                "d": "Codificar políticas de segurança: 'todo container deve ser non-root', 'imagens só de registry aprovado'. Verificar automaticamente"
              },
              {
                "w": "Supply chain security: Sigstore, SLSA framework, provenance, software attestation",
                "s": "supply chain | Sigstore | SLSA | provenance | attestation",
                "d": "Garantir que software não foi adulterado: assinar artefatos (Sigstore), atestar proveniência (SLSA), verificar integridade"
              },
              {
                "w": "Incident response em DevSecOps: playbooks automatizados, containment, forensics, post-mortem",
                "s": "incident response | playbook | containment | forensics | post-mortem",
                "d": "Quando breach acontece: playbook automatizado isola sistema, preserva evidências, equipe investiga, post-mortem documenta lições"
              },
              {
                "w": "Security champions: cultura de segurança, treinamento de devs, gamification, security office hours",
                "s": "security champions | security culture | training | gamification",
                "d": "Cada time tem um security champion: dev que advoga por segurança, revisa PRs críticos, faz treinamentos e conecta time ao security team"
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
                "s": "SQL injection tutorial | SQLi blind time-based | SQLMap automated injection | Injection classica blind explained",
                "d": "Input do usuario vai direto na query SQL. ' OR 1=1-- Tipos: error-based (ve o erro), blind (sim/nao), time-based (delay). UNION: extrair dados de outras tabelas. SQLMap: automatiza. Defesa: prepared statements/parameterized queries SEMPRE."
              },
              {
                "w": "XSS: reflected, stored, DOM-based, bypass de filtros, CSP",
                "s": "XSS cross site scripting types | XSS stored reflected DOM | XSS bypass filters | reflected stored DOM-based tutorial portugues",
                "d": "Reflected: URL maliciosa. Stored: salvo no banco (pior). DOM: manipulacao client-side. Payloads: <script>alert(1)</script>, event handlers, SVG. Bypass: encoding, mutation. Defesa: sanitizar output, CSP header, HttpOnly cookies."
              },
              {
                "w": "CSRF, SSRF, IDOR: falsificacao de requests e referencias inseguras",
                "s": "CSRF SSRF IDOR vulnerability | server side request forgery | insecure direct object reference | CSRF SSRF IDOR tutorial portugues",
                "d": "CSRF: forcar usuario a executar acao (transferir dinheiro). SSRF: forcar SERVIDOR a fazer request interno (acessar metadata AWS). IDOR: mudar ID na URL pra acessar dados de outro usuario (/user/123 > /user/124). Todos exploram confianca."
              },
              {
                "w": "Authentication bugs: brute force, session fixation, JWT attacks, OAuth flaws",
                "s": "authentication vulnerabilities | JWT attack | session fixation | OAuth security flaws",
                "d": "Brute force: testar senhas (Hydra, Burp Intruder). Session fixation: fixar session ID. JWT: none algorithm, key confusion, expiry bypass. OAuth: redirect URI manipulation, state parameter missing. 2FA bypass: race conditions."
              },
              {
                "w": "File upload, LFI/RFI, path traversal, command injection",
                "s": "file upload vulnerability | LFI RFI path traversal | command injection OS | File upload LFI/RFI tutorial portugues",
                "d": "File upload: enviar webshell (.php, .jsp). LFI: ler arquivos do servidor (../../etc/passwd). RFI: incluir arquivo remoto. Command injection: ; ls -la ou $(whoami). Path traversal: ../ pra escapar diretorio. Defesa: whitelist, sandbox, sanitize."
              },
              {
                "w": "Desserializacao insegura, XXE, SSTI, business logic flaws",
                "s": "insecure deserialization | XXE XML external entity | SSTI template injection | Desserializacao insegura SSTI tutorial portugues",
                "d": "Desserializacao: objeto malicioso vira codigo (Java, PHP, Python). XXE: XML externo le arquivos. SSTI: injetar template (Jinja2, Twig). Business logic: comprar com preco negativo, skip de etapas. Mais dificil de automatizar = mais valioso."
              },
              {
                "w": "Ferramentas: Burp Suite, OWASP ZAP, ffuf, httpx, nuclei",
                "s": "Burp Suite tutorial | OWASP ZAP proxy | web hacking tools | Ferramentas Burp Suite explained",
                "d": "Burp Suite: proxy interceptador (ferramenta #1). Repeater: reenviar requests modificados. Intruder: fuzzing/brute force. ZAP: alternativa gratis. ffuf: fuzzing de diretorios/parametros. httpx: probe HTTP. Aprenda Burp Suite profundamente."
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
                "s": "network sniffing Wireshark | ARP spoofing MITM attack | tcpdump tutorial | Sniffing Wireshark tcpdump explained",
                "d": "Wireshark: capturar e analisar trafego. Filtros: http, tcp.port==443, ip.addr==x. ARP spoof: redirecionar trafego (Bettercap). MITM: interceptar comunicacao entre 2 partes. Detectar: ARP watch, criptografia e2e. Fazer: SOMENTE em redes que voce tem permissao."
              },
              {
                "w": "Password attacks: cracking (hashcat, John), spraying, pass-the-hash",
                "s": "password cracking hashcat John | password spraying | pass the hash attack | Password attacks cracking tutorial portugues",
                "d": "Hashcat: GPU cracking (MD5, SHA, bcrypt). John the Ripper: CPU. Wordlists: rockyou.txt, SecLists. Password spraying: 1 senha em muitos usuarios (evita lockout). Pass-the-hash: usar hash NTLM sem saber a senha. Rainbow tables: pre-computed."
              },
              {
                "w": "Wireless: WPA2 cracking, evil twin, rogue AP, deauth",
                "s": "WiFi hacking WPA2 crack | evil twin attack | wireless security testing | Wireless WPA2 cracking tutorial portugues",
                "d": "Aircrack-ng: capturar handshake WPA2 + crack com wordlist. Evil twin: AP falso com mesmo nome. Deauth: desconectar clientes (forcar reconexao pra capturar handshake). Ferramentas: airmon-ng, airodump-ng, aireplay-ng. SOMENTE em suas redes."
              },
              {
                "w": "Active Directory: Kerberoasting, AS-REP roasting, BloodHound, lateral movement",
                "s": "Active Directory pentesting | Kerberoasting | BloodHound AD | lateral movement",
                "d": "AD: alvo #1 em empresas. Kerberoasting: extrair tickets e crackear offline. BloodHound: mapear caminhos ate Domain Admin. Lateral movement: psexec, WMI, RDP. Mimikatz: extrair credenciais da memoria. 90% dos pentests corporativos envolvem AD."
              },
              {
                "w": "Man-in-the-Middle avancado: SSL stripping, HSTS bypass, DNS poisoning",
                "s": "MITM SSL stripping | HSTS bypass attack | DNS poisoning cache | advanced man in the middle",
                "d": "SSL stripping: forcar HTTP ao inves de HTTPS (sslstrip). HSTS: header que forca HTTPS (protecao). HSTS bypass: se primeira visita nao teve HSTS. DNS poisoning: responder DNS com IP falso. ARP spoofing + DNS spoof = redirecionar todo trafego. Defesa: HSTS preload, DNSSEC, certificado pinning."
              },
              {
                "w": "Network pivoting: proxychains, SSH tunnels, double pivoting, SOCKS proxy",
                "s": "network pivoting proxychains | SSH tunnel pivoting | double pivot pentest | SOCKS proxy penetration testing",
                "d": "Cenario: voce comprometeu maquina A que tem acesso a rede interna. Pivoting: usar A como proxy pra alcancar B (que voce nao alcanca direto). proxychains: rotear ferramentas pelo proxy. SSH -D: SOCKS proxy. Double pivot: A > B > C. Metasploit autoroute. Essencial em pentests corporativos."
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
                "s": "Linux privilege escalation techniques | Linux privesc SUID sudo | LinPEAS | Linux privilege escalation tutorial portugues",
                "d": "LinPEAS/LinEnum: scripts de enumeracao. SUID: binario roda como root (find / -perm -4000). Sudo -l: o que posso rodar como root? Cron: tarefas agendadas com permissao errada. GTFOBins: binarios exploraveis. Kernel: uname -a + searchsploit."
              },
              {
                "w": "Windows privilege escalation: services, registry, tokens, unquoted paths",
                "s": "Windows privilege escalation | Windows privesc techniques | WinPEAS | Windows privilege escalation tutorial portugues",
                "d": "WinPEAS: enumeracao automatica. Services: permissao de escrita + restart. Registry: AlwaysInstallElevated. Token impersonation: SeImpersonatePrivilege (PrintSpoofer, Potato). Unquoted paths: espacos no caminho do servico. PowerUp: PowerShell privesc."
              },
              {
                "w": "Shells e payloads: reverse shell, bind shell, msfvenom, web shells",
                "s": "reverse shell tutorial | msfvenom payload | web shell upload pentest | Shells payloads reverse explained",
                "d": "Reverse shell: alvo conecta de volta pra voce. Bind shell: alvo escuta, voce conecta. msfvenom: gerar payloads (.exe, .php, .py). Netcat: nc -lvnp 4444. Estabilizar shell: python -c 'import pty;pty.spawn(\"/bin/bash\")'. Obfuscar pra evitar AV."
              },
              {
                "w": "Buffer overflow basico: stack, EIP/RIP, shellcode, DEP/ASLR",
                "s": "buffer overflow tutorial | stack overflow exploit | buffer overflow basics | Buffer overflow basico explained",
                "d": "Buffer overflow: escrever alem do buffer, sobrescrever return address. Stack: LIFO. EIP (32-bit) / RIP (64-bit): ponteiro de instrucao. Shellcode: codigo em assembly injetado. DEP: nao-execucao de stack. ASLR: randomizar enderecos. NOP sled. Pratica: vulnserver, pwn challenges."
              },
              {
                "w": "Metasploit Framework: modules, exploits, payloads, meterpreter, post-exploitation",
                "s": "Metasploit Framework tutorial | meterpreter commands | Metasploit exploit modules | Metasploit post exploitation",
                "d": "Metasploit: framework #1 de exploitation. use exploit/..., set RHOSTS, exploit. Payloads: reverse_tcp, meterpreter (shell avancado). Meterpreter: upload/download, screenshot, keylog, hashdump, migrate. Post-modules: recon, privesc, pivot. OSCP: usar Metasploit com restricao (so 1 maquina). Aprenda manual primeiro."
              },
              {
                "w": "Antivirus evasion: obfuscacao, encoding, crypters, living-off-the-land (LOLBins)",
                "s": "antivirus evasion techniques | AV bypass obfuscation | LOLBins living off the land | payload obfuscation pentest",
                "d": "AV detecta: signatures (hash), heuristica (comportamento). Bypass: encoding (shikata_ga_nai), custom crypters, mudar strings. LOLBins: usar ferramentas legitimas do Windows (certutil, bitsadmin, PowerShell) pra fins maliciosos. Na pratica: AV moderno (EDR) e MUITO bom. Evasion e gato-e-rato constante."
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
                "s": "service enumeration SMB FTP SSH | enumerate services pentest | SMB enumeration | Enumeracao servicos HTTP tutorial portugues",
                "d": "Cada servico tem suas ferramentas. SMB: smbclient, enum4linux. FTP: anonymous login. SSH: versao (vulns conhecidas). HTTP: diretórios (gobuster, ffuf). SNMP: snmpwalk. Enumeracao = extrair o maximo de info de cada servico."
              },
              {
                "w": "Vulnerability scanning: Nessus, OpenVAS, Nuclei, resultados vs falsos positivos",
                "s": "vulnerability scanner Nessus OpenVAS Nuclei | vulnerability scanning tools | false positives | Vulnerability scanning Nessus tutorial portugues",
                "d": "Nessus (comercial), OpenVAS (gratis): scanners automatizados. Nuclei: templates YAML, rapido, comunitario. IMPORTANTE: scanners geram falsos positivos. SEMPRE valide manualmente antes de reportar. Scan != pentest (scan e automatizado, pentest e manual+criativo)."
              },
              {
                "w": "Metodologias: PTES, OWASP Testing Guide, NIST, OSSTMM",
                "s": "penetration testing methodology PTES | OWASP testing guide | pentest methodology | Metodologias PTES OWASP tutorial portugues",
                "d": "PTES: Pre-engagement > Recon > Threat Modeling > Exploitation > Post-exploitation > Reporting. OWASP Testing Guide: web-specific. NIST SP 800-115: framework governamental. Ter metodologia = nao esquecer nada + ser profissional."
              },
              {
                "w": "Web app scanning: nikto, wpscan, dirsearch, API fuzzing com ffuf/wfuzz",
                "s": "web application scanning nikto wpscan | API fuzzing ffuf wfuzz | web vulnerability scanner | scanning nikto wpscan tutorial portugues",
                "d": "nikto: scanner web rapido (headers, configs). wpscan: WordPress especifico. dirsearch/gobuster: encontrar diretorios e arquivos ocultos. ffuf/wfuzz: fuzzing de parametros, headers, paths. API scanning: testar endpoints com payloads maliciosos. Automatize o tedioso, investigue o interessante."
              },
              {
                "w": "Reconhecimento ativo vs passivo: quando usar cada, riscos legais",
                "s": "active vs passive reconnaissance | recon ativo vs passivo | reconnaissance risks legal | Reconhecimento ativo passivo tutorial portugues",
                "d": "Passivo: coleta sem tocar no alvo (OSINT, DNS, Google). Ativo: interage com o alvo (nmap, scanning). Passivo: legal, nao detectavel. Ativo: precisa de permissao, pode ser detectado (IDS/IPS). Na pratica: maximo passivo primeiro, ativo so com escopo definido."
              },
              {
                "w": "Reporting de vulnerabilidades: CVSS scoring, prioridade, evidencias, remediacoes",
                "s": "CVSS vulnerability scoring | vulnerability reporting | security finding prioritization | pentest finding documentation",
                "d": "CVSS: Common Vulnerability Scoring System (0-10). Base score: vetor de ataque, complexidade, impacto. Critical (9-10): corrigir IMEDIATAMENTE. High (7-8.9): esta semana. Medium (4-6.9): proximo sprint. Low (0-3.9): backlog. Cada finding: descricao, CVSS, evidencia (screenshot), remediacao sugerida."
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
                "s": "post exploitation techniques | pivoting lateral movement | persistence backdoor pentest | Post-exploitation persistence pivoting tutorial portugues",
                "d": "Depois de entrar: manter acesso (persistence: cron, startup, backdoor). Pivoting: usar maquina comprometida pra acessar rede interna. Lateral movement: ir pra outras maquinas. Data exfiltration: extrair dados sem ser detectado. TUDO documentado no relatorio."
              },
              {
                "w": "Covering tracks: limpar logs, anti-forensics (conceito, nao pratica maliciosa)",
                "s": "covering tracks pentest | anti forensics awareness | log cleaning detection | Covering tracks limpar tutorial portugues",
                "d": "Atacantes reais limpam rastros. Como pentester, voce DOCUMENTA o que fez (nao limpa). Mas precisa ENTENDER as tecnicas pra defender: limpar event logs, timestomping, rootkits. Blue team: detectar essas tecnicas."
              },
              {
                "w": "Escrevendo relatorio profissional: executive summary, findings, PoC, remediacoes",
                "s": "pentest report writing | professional pentest report template | vulnerability report | Escrevendo relatorio profissional tutorial portugues",
                "d": "Executive summary: 1 pagina pra C-level (sem jargao). Findings: severidade (CVSS), descricao, evidencia (screenshots), impacto, remediacao. PoC: prova de conceito (como reproduzir). Priorizacao: critical primeiro. Um bom relatorio e 50% do valor do pentest."
              },
              {
                "w": "Tunneling e port forwarding: SSH tunnels, chisel, ligolo, pivoting em redes internas",
                "s": "SSH tunnel port forwarding | chisel pivoting | tunneling post exploitation | Tunneling port forwarding tutorial portugues",
                "d": "SSH tunnel: ssh -L 8080:interno:80 user@pivot (acessar servico interno via maquina comprometida). Chisel/Ligolo: tunneling mais avancado. SOCKS proxy: proxychains pra rotear ferramentas pelo tunel. Pivoting: usar maquina A pra acessar rede de B. Essencial em pentests corporativos."
              },
              {
                "w": "Data exfiltration: tecnicas, deteccao, DNS tunneling, steganografia conceito",
                "s": "data exfiltration techniques | DNS tunneling exfiltration | steganography concept | Data exfiltration tecnicas tutorial portugues",
                "d": "Exfiltrar: tirar dados do ambiente comprometido. Tecnicas: HTTP/HTTPS (parece trafego normal), DNS tunneling (dados em queries DNS), email. Steganografia: esconder dados em imagens. Deteccao: DLP (Data Loss Prevention), volume anormal. Como pentester: documente que dados PODERIAM ser exfiltrados, nao exfiltre dados reais."
              },
              {
                "w": "Clean up: restaurar sistemas ao estado original apos o teste",
                "s": "pentest cleanup procedures | restore systems after pentest | post engagement cleanup | pentest decommission",
                "d": "Apos o teste: remover TODOS os artefatos (backdoors, usuarios criados, arquivos, ferramentas). Documentar o que foi alterado. Restaurar configs modificadas. Verificar que nada ficou pra tras. Entrega: relatorio + checklist de cleanup. Profissionalismo: deixar o ambiente MELHOR do que encontrou."
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
                "s": "ROS2 tutorial 2025 | ROS2 nodes topics services | robot operating system | ROS2 nodes topics explained",
                "d": "ROS2: framework padrao. Nodes: processos. Topics: pub/sub. Services: req/res. Actions: longa duracao."
              },
              {
                "w": "Visao computacional: OpenCV, deteccao, tracking",
                "s": "OpenCV python tutorial | computer vision detection tracking | image processing | Visao computacional OpenCV explained",
                "d": "OpenCV: captura, filtros, deteccao de bordas/faces. YOLO: object detection real-time."
              },
              {
                "w": "Cinematica, SLAM, sensores (LIDAR, IMU, cameras)",
                "s": "robot kinematics SLAM | LIDAR IMU sensor fusion | autonomous navigation | Cinematica SLAM sensores tutorial portugues",
                "d": "Cinematica: geometria do movimento. SLAM: mapear+localizar. Sensor fusion: combinar dados."
              },
              {
                "w": "Controle: PID avancado, MPC, path planning (A*, RRT)",
                "s": "PID controller advanced | MPC model predictive control | path planning A* RRT | Controle avancado path tutorial portugues",
                "d": "PID: tuning. MPC: otimizacao com modelo. A*/RRT: planejamento de caminho."
              },
              {
                "w": "Simulacao: Gazebo, Isaac Sim, MuJoCo",
                "s": "robot simulation Gazebo Isaac Sim MuJoCo | simulacao robotica | ROS2 Gazebo | Simulacao Gazebo Isaac tutorial portugues",
                "d": "Gazebo: simulador padrao com ROS2. Isaac Sim (NVIDIA): fotorealistico + GPU. MuJoCo: rapido pra RL. Simular antes de construir = mais barato e seguro."
              },
              {
                "w": "Navegacao autonoma: mapeamento, localizacao, Nav2",
                "s": "autonomous navigation Nav2 ROS2 | navegacao autonoma robotica | robot navigation mapping | Navegacao autonoma mapeamento tutorial portugues",
                "d": "Nav2 (ROS2): stack completa de navegacao. Mapa: SLAM gera. Localizacao: AMCL. Planejamento: global (A*) + local (DWB). Costmaps: obstaculos. Recovery behaviors."
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
                "s": "YOLO object detection robotics | semantic segmentation | point cloud 3D perception | Percepcao YOLO segmentacao tutorial portugues",
                "d": "YOLO: deteccao real-time. Segmentacao: pixel a pixel. Depth: monocular ou stereo. Point clouds: LIDAR > nuvem 3D. Open3D, PCL. Percepcao e os 'olhos' do robo."
              },
              {
                "w": "RL pra robotica: sim-to-real, domain randomization, reward shaping",
                "s": "reinforcement learning robotics sim to real | RL robot control | domain randomization | robotica sim-to-real domain tutorial portugues",
                "d": "Treinar em simulacao, transferir pro real (sim-to-real gap). Domain randomization: variar parametros na simulacao. Reward shaping: guiar o agente. PPO e SAC sao populares pra robotica."
              },
              {
                "w": "Manipulacao: grasping, motion planning, MoveIt2",
                "s": "robot manipulation grasping MoveIt2 | motion planning robotics | robot arm control | Manipulacao grasping motion tutorial portugues",
                "d": "MoveIt2: framework ROS2 pra planejamento de movimento. Cinematica inversa: dado ponto, achar angulos das juntas. Grasping: pegar objetos (dificil!). Force/torque sensing."
              },
              {
                "w": "Veiculos autonomos: percepcao, fusao sensorial, planejamento, AUTOWARE",
                "s": "autonomous vehicles perception planning | veiculos autonomos | AUTOWARE self driving | Veiculos autonomos percepcao tutorial portugues",
                "d": "Camera + LIDAR + radar + GPS/IMU. Fusao sensorial: combinar tudo. Percepcao > Predicao > Planejamento > Controle. AUTOWARE: stack open-source pra veiculos autonomos."
              },
              {
                "w": "Drones: controle de voo, PX4/ArduPilot, visao aerea, enxames",
                "s": "drone programming PX4 ArduPilot | programacao drones | drone swarm autonomous | Drones controle PX4/ArduPilot tutorial portugues",
                "d": "PX4/ArduPilot: autopilots open-source. MAVLink: protocolo de comunicacao. Controle: PID em 3 eixos. Visao aerea: mapeamento, inspecao. Enxames: multiplos drones coordenados."
              },
              {
                "w": "Aprendizado por imitacao: imitation learning, learning from demonstration, GAIL",
                "s": "imitation learning robotics | learning from demonstration | GAIL generative adversarial imitation | behavioral cloning robot",
                "d": "Behavioral cloning: copiar demonstracoes humanas (obs,action pairs). DAgger: corrigir erros iterativamente. GAIL: usar GAN pra imitar. Aplicacao: ensinar robo a dobrar roupa, cozinhar, montar pecas. Mais facil que definir reward function (RL). Combinar com RL: imitacao pra bootstrap + RL pra refinar."
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
                "s": "digital twin technology | gemeo digital industria | digital twin IoT | Digital Twins modelo tutorial portugues",
                "d": "Digital twin: copia virtual que espelha o fisico em tempo real. Sensores alimentam o modelo. Prever falhas, otimizar, simular mudancas antes de aplicar. Azure Digital Twins, AWS IoT TwinMaker."
              },
              {
                "w": "ML pra manutencao preditiva: anomaly detection, time series, RUL",
                "s": "predictive maintenance ML | manutencao preditiva machine learning | anomaly detection time series | manutencao preditiva anomaly tutorial portugues",
                "d": "Vibracoes, temperatura, corrente > modelo preve falha ANTES de acontecer. Isolation Forest, autoencoders pra anomalia. LSTM pra series temporais. RUL: Remaining Useful Life."
              },
              {
                "w": "Visao industrial: inspecao de qualidade, contagem, OCR",
                "s": "machine vision industrial inspection | visao industrial qualidade | industrial OCR defect detection | Visao industrial inspecao tutorial portugues",
                "d": "Cameras industriais + iluminacao controlada + processamento de imagem. Detectar defeitos (rachaduras, falhas de solda). Contar pecas. Ler codigos/textos (OCR). Aplicacao direta de CNN."
              },
              {
                "w": "Edge computing + IoT em escala: MQTT brokers, dashboards, alertas",
                "s": "edge computing IoT architecture | IoT platform dashboard | MQTT broker scalable | Edge computing escala tutorial portugues",
                "d": "Edge: processar proximo ao sensor (baixa latencia). Nuvem: armazenar e analisar. MQTT broker (Mosquitto, EMQX). Dashboards: Grafana, Node-RED. Alertas: threshold + ML. InfluxDB pra time series."
              },
              {
                "w": "Robos colaborativos (cobots): seguranca, standards (ISO 10218, TS 15066), integração",
                "s": "collaborative robots cobots | ISO 10218 robot safety | cobot integration industry | Robos colaborativos cobots tutorial portugues",
                "d": "Cobots: robos que trabalham AO LADO de humanos (sem gaiola). Universal Robots, FANUC, ABB. Safety: limitar forca/velocidade, sensores de contato. ISO 10218: seguranca de robos industriais. TS 15066: cobots especificamente. Mercado em explosao: cobots sao acessiveis pra PMEs."
              },
              {
                "w": "Controle avancado: MPC (Model Predictive Control), controle adaptativo, sistemas nao-lineares",
                "s": "MPC model predictive control industrial | adaptive control | nonlinear control systems | Controle avancado Model tutorial portugues",
                "d": "MPC: otimiza controle olhando pra frente (preve o futuro com modelo). Mais caro computacionalmente que PID, mas muito melhor pra sistemas complexos. Controle adaptativo: ajusta parametros online. Sistemas nao-lineares: a maioria do mundo real. Ferramentas: MATLAB/Simulink, Python (control library)."
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
                "s": "CAP theorem PACELC | Raft Paxos consensus | eventual consistency | PACELC consenso Raft/Paxos tutorial portugues",
                "d": "CAP: Consistency vs Availability em particao. Raft: consenso pratico. Eventual consistency."
              },
              {
                "w": "Escalabilidade: sharding, partitioning, replicacao",
                "s": "database sharding partitioning | horizontal scaling | data replication strategies | Escalabilidade sharding partitioning tutorial portugues",
                "d": "Shard: dividir dados. Replica: copiar. Horizontal: mais maquinas. Vertical: maquina maior."
              },
              {
                "w": "Tolerancia a falhas, circuit breaker, retry, idempotencia",
                "s": "fault tolerance distributed systems | circuit breaker pattern | idempotency | Tolerancia falhas circuit tutorial portugues",
                "d": "Circuit breaker: parar de chamar servico com falha. Retry com backoff. Idempotencia: mesma chamada = mesmo efeito."
              },
              {
                "w": "gRPC, Protocol Buffers, service mesh (Istio)",
                "s": "gRPC protocol buffers | service mesh Istio | microservices communication | gRPC Protocol Buffers tutorial portugues",
                "d": "gRPC: rapido, tipado. Protobuf: serializacao eficiente. Service mesh: observabilidade entre servicos."
              },
              {
                "w": "Event sourcing, CQRS em pratica, eventual consistency patterns",
                "s": "event sourcing CQRS practice | eventual consistency patterns | distributed system patterns | Event sourcing CQRS tutorial portugues",
                "d": "Event sourcing: armazenar eventos (nao estado atual). Replay pra reconstruir. CQRS: modelo de leitura separado do de escrita. Patterns: saga, outbox, idempotent consumer. Compensacao: desfazer em caso de falha."
              },
              {
                "w": "Observabilidade distribuida: tracing (OpenTelemetry), correlation IDs",
                "s": "distributed tracing OpenTelemetry | correlation ID microservices | observability distributed | Observabilidade distribuida tracing tutorial portugues",
                "d": "Quando um request passa por 10 servicos, como achar o problema? Distributed tracing: cada request tem um trace ID. OpenTelemetry: padrao aberto. Spans: cada servico registra sua parte. Jaeger/Tempo: visualizar traces."
              },
              {
                "w": "Bancos distribuidos: Cassandra, CockroachDB, Spanner, DynamoDB, trade-offs",
                "s": "distributed database Cassandra CockroachDB Spanner | distributed DB comparison | Bancos distribuidos Cassandra tutorial 2025 | Bancos distribuidos Cassandra explained",
                "d": "Cassandra: AP (disponivel, tolerante a particao, eventualmente consistente). CockroachDB: CP (consistente, Spanner-like). Spanner (Google): globalmente consistente (TrueTime). DynamoDB: managed, key-value. Cada um faz trade-offs diferentes no CAP."
              },
              {
                "w": "Distributed caching: Redis Cluster, Memcached, cache invalidation, consistency",
                "s": "distributed caching Redis Cluster | cache invalidation strategies | caching patterns | Distributed caching Redis tutorial portugues",
                "d": "Cache invalidation: 'one of the two hard things in CS'. Patterns: cache-aside, write-through, write-behind. TTL: expiracao. Redis Cluster: sharding automatico. Memcached: mais simples. Problemas: thundering herd, cache stampede, stale data."
              },
              {
                "w": "Sistemas de arquivos distribuídos: HDFS, GFS, Ceph — como armazenar petabytes em cluster",
                "s": "HDFS | GFS | Ceph | distributed file system | petabyte storage",
                "d": "HDFS (Hadoop): blocos replicados em data nodes, name node coordena. GFS (Google): chunks de 64MB. Ceph: object-based, sem single point of failure"
              },
              {
                "w": "Consistência e consenso na prática: Zookeeper, etcd, Consul — coordenação distribuída",
                "s": "Zookeeper | etcd | Consul | distributed coordination | leader election",
                "d": "Zookeeper/etcd coordenam serviços: leader election, config distribuído, locks distribuídos. etcd é o cérebro do Kubernetes"
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
                "s": "communication patterns | sync async | gRPC REST | message queue | event streaming",
                "d": "Sync: request-response imediato (simples, acoplado). Async: fire-and-forget via fila (desacoplado, resiliente). Escolher baseado em requisitos de latência e coupling"
              },
              {
                "w": "Transações distribuídas: 2PC, Saga pattern (choreography vs orchestration), compensação, idempotência",
                "s": "distributed transactions | 2PC | Saga | choreography orchestration | compensation | idempotency",
                "d": "2PC é simples mas bloqueia. Saga divide em transações locais com compensação. Choreography: eventos. Orchestration: coordenador central. Idempotência para retries"
              },
              {
                "w": "Service discovery, health checks, load balancing: como serviços se encontram em ambiente dinâmico",
                "s": "service discovery | health check | load balancing | dynamic environment | Consul",
                "d": "Em K8s/cloud, IPs mudam constantemente. Service discovery (DNS, Consul) resolve nomes. Health checks removem instâncias doentes. Load balancer distribui tráfego"
              },
              {
                "w": "Observabilidade distribuída: OpenTelemetry, distributed tracing, log correlation, exemplar linking",
                "s": "distributed observability | OpenTelemetry | distributed tracing | log correlation | exemplar",
                "d": "Em microsserviços, um request passa por 5+ serviços. OpenTelemetry instrumenta traces, métricas e logs. Correlation IDs conectam logs entre serviços"
              },
              {
                "w": "Chaos engineering: Chaos Monkey, Litmus, experimentos em produção, blast radius, steady state",
                "s": "chaos engineering | Chaos Monkey | Litmus | blast radius | steady state | resilience",
                "d": "Injetar falhas controladas para descobrir fraquezas: matar pods, adicionar latência, particionar rede. Blast radius limita impacto. Netflix pioneira"
              },
              {
                "w": "Casos reais: como Google Spanner, Amazon DynamoDB e Apache Kafka resolvem problemas distribuídos",
                "s": "Google Spanner | DynamoDB | Apache Kafka | real world distributed | case study",
                "d": "Spanner: SQL global com TrueTime. DynamoDB: eventual consistency com tunable reads. Kafka: log distribuído para streaming. Cada um resolve problemas diferentes"
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
                "s": "MLflow W&B experiment tracking | ML experiment management | model registry | MLflow Weights Biases tutorial portugues",
                "d": "Track: metricas, parametros, artefatos. Compare runs. Model registry. Reproducibilidade."
              },
              {
                "w": "Feature Stores, Data Pipelines (Airflow, dbt)",
                "s": "feature store ML | Apache Airflow dbt | ML data pipeline | Feature Stores Data tutorial portugues",
                "d": "Feature store: features reutilizaveis. Airflow: orquestrar. dbt: transformar dados."
              },
              {
                "w": "Model Serving: TorchServe, Triton, BentoML, endpoints",
                "s": "model serving TorchServe Triton | ML model deployment | inference optimization | Model Serving TorchServe tutorial portugues",
                "d": "REST/gRPC endpoint. Batching. GPU inference. Quantizacao (INT8). ONNX Runtime."
              },
              {
                "w": "Monitoring: data drift, model drift, A/B testing",
                "s": "ML model monitoring drift detection | A/B testing ML | model performance monitoring | Monitoring data drift tutorial portugues",
                "d": "Data drift: distribuicao mudou. Model drift: performance caiu. A/B: comparar modelos. Retrain triggers."
              },
              {
                "w": "CI/CD para ML, testes de modelo, reproducibilidade",
                "s": "ML CI CD pipeline | ML testing | reproducibility machine learning | CI/CD para testes tutorial portugues",
                "d": "Testar dados, modelo, pipeline. DVC: versionar dados. Docker + pipeline = reproduzivel."
              },
              {
                "w": "LLMOps: deploy de LLMs, inference optimization, quantization, vLLM, TGI",
                "s": "LLMOps deploy LLM | vLLM TGI inference | LLM quantization deployment | LLMOps deploy LLMs tutorial portugues",
                "d": "LLMs sao CAROS pra servir. vLLM: PagedAttention (batching eficiente). TGI (HuggingFace): production-ready. Quantizacao: float16 > int8 > int4 (GPTQ, AWQ). KV cache. Speculative decoding. GPU memory management. Custo: otimizar tokens/segundo/dolar."
              },
              {
                "w": "Data versioning: DVC, LakeFS, Delta Lake versioning, lineage",
                "s": "data versioning DVC LakeFS | data lineage tracking | ML data management | Data versioning LakeFS tutorial portugues",
                "d": "DVC: git pra dados (trackeia datasets sem colocar no repo). LakeFS: Git-like pra data lakes (branch, commit, merge). Delta Lake: time travel (versoes de tabelas). Data lineage: de onde veio cada feature? Quem transformou? Reproduzir pipeline de 3 meses atras."
              },
              {
                "w": "Feature stores: Feast, Tecton, online vs offline serving",
                "s": "feature store Feast Tecton | online offline feature serving | ML feature management | Feature stores Feast tutorial portugues",
                "d": "Feature store: repositorio centralizado de features. Offline: batch (treino). Online: low-latency (inferencia). Feast: open-source. Tecton: managed. Point-in-time correctness: evitar data leakage. Reusar features entre modelos e times."
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
                "s": "LLMOps | vLLM TGI Ollama | quantization GPTQ AWQ GGUF | inference optimization",
                "d": "Servir LLMs é caro: vLLM usa PagedAttention para throughput. Quantização reduz modelo de 16-bit para 4-bit. Ollama facilita rodar local"
              },
              {
                "w": "ML distribuído: data parallelism, model parallelism, pipeline parallelism (DeepSpeed, FSDP, Megatron)",
                "s": "distributed ML | data parallel | model parallel | pipeline parallel | DeepSpeed FSDP",
                "d": "Modelos grandes não cabem em 1 GPU: data parallel replica modelo, model parallel divide camadas, pipeline parallel combina ambos"
              },
              {
                "w": "Responsible AI em produção: bias monitoring, fairness metrics, model cards, AI incident database",
                "s": "responsible AI | bias monitoring | fairness metrics | model cards | AI incident",
                "d": "Monitorar bias em produção: disparidade entre grupos, fairness metrics (equal opportunity, demographic parity). Model cards documentam limitações"
              },
              {
                "w": "Cost optimization de ML: spot instances para treino, caching de embeddings, modelo routing (grande vs pequeno)",
                "s": "ML cost optimization | spot instances | embedding cache | model routing | cost",
                "d": "Treino com spot instances (70% mais barato). Cache embeddings frequentes. Rotear queries simples para modelo pequeno (barato) e complexas para grande"
              },
              {
                "w": "Feature platforms: Feast, Tecton, Hopsworks — online serving, offline training, feature consistency, point-in-time correctness",
                "s": "feature platform | Feast Tecton Hopsworks | online offline serving | point-in-time",
                "d": "Feature stores garantem que features são iguais em treino e serving. Point-in-time correctness evita data leakage. Online serving com latência baixa"
              },
              {
                "w": "ML testing: data validation (Great Expectations), model testing (behavioral, invariance, directional), shadow deployment",
                "s": "ML testing | data validation | behavioral testing | shadow deployment | Great Expectations",
                "d": "Testar ML vai além de acurácia: validar dados de entrada, testar invariância (input parecido → output parecido), shadow deploy compara modelo novo vs atual"
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
                "s": "reinforcement learning PPO Q-learning | RL tutorial | deep reinforcement learning | Reinforcement Learning Q-Learning explained",
                "d": "MDP: estado-acao-recompensa. Q-Learning: tabular. DQN, PPO, GRPO. Ambientes: Gymnasium."
              },
              {
                "w": "Multimodal: CLIP, LLaVA, modelos unificados",
                "s": "multimodal AI CLIP LLaVA | vision language models | multimodal learning | Multimodal CLIP LLaVA tutorial portugues",
                "d": "CLIP: imagem+texto embeddings. LLaVA: VLM. Modelos gerais que entendem multiplas modalidades."
              },
              {
                "w": "Scaling Laws, Mixture of Experts, Sparse Models",
                "s": "scaling laws LLM | mixture of experts MoE | sparse models efficiency | Scaling Laws Mixture tutorial portugues",
                "d": "Mais dados + mais parametros = melhor (ate certo ponto). MoE: ativar subset. Eficiencia."
              },
              {
                "w": "Ler papers: arXiv, Papers With Code, conferencias",
                "s": "how to read ML papers | arXiv ML | Papers With Code | NeurIPS ICML",
                "d": "arXiv: pre-prints. PWC: papers+codigo. Conferencias: NeurIPS, ICML, ICLR, CVPR, ACL. Leia 1 paper/semana."
              },
              {
                "w": "AI Safety, Alignment, Interpretability",
                "s": "AI safety alignment | mechanistic interpretability | AI ethics | Safety Alignment Interpretability tutorial portugues",
                "d": "Alignment: IA fazendo o que queremos. Interpretability: entender COMO decide. Safety: prevenir riscos."
              },
              {
                "w": "Foundation Models pra Robotica: RT-2, SayCan, robos genericos",
                "s": "foundation models robotics RT-2 SayCan | robot foundation models | general purpose robots | Foundation Models Robotica tutorial portugues",
                "d": "RT-2: modelo visao-linguagem-acao. SayCan: LLM decide, robo executa. Objetivo: robos que entendem linguagem natural e se adaptam. Fronteira mais quente em robotica."
              },
              {
                "w": "Research Engineering: papel entre pesquisador e engenheiro, skills, onde trabalhar",
                "s": "research engineer role | ML research engineer | research scientist vs research engineer | Research Engineering papel tutorial portugues",
                "d": "Research Engineer: implementar papers, escalar experimentos, infra de ML. Diferente de Research Scientist (publica papers). Google, DeepMind, Meta FAIR, OpenAI, Anthropic contratam. Skills: Python, PyTorch, distributed training, Linux, cloud. Salarios altos. Nao precisa de PhD (mas ajuda)."
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
                "s": "quantum computing basics qubits superposition | computacao quantica fundamentos | qubit superposition entanglement | Fundamentos qubits superposicao tutorial portugues",
                "d": "Bit classico: 0 ou 1. Qubit: superposicao de 0 E 1 simultaneamente. Entrelagamento: 2 qubits correlacionados instantaneamente. Medicao: colapsa superposicao. Com N qubits, 2^N estados simultaneos. Poder exponencial pra certos problemas."
              },
              {
                "w": "Portas quanticas: Hadamard, CNOT, Pauli (X, Y, Z), Toffoli, circuitos",
                "s": "quantum gates Hadamard CNOT Pauli | quantum circuits | quantum gate operations | Portas quanticas Hadamard tutorial portugues",
                "d": "Hadamard (H): cria superposicao. CNOT: entrelagamento (controlled-NOT). Pauli-X: NOT quantico. Circuito quantico: sequencia de portas. Analogia: portas logicas classicas (AND, OR) vs portas quanticas. Reversibilidade: toda operacao quantica e reversivel."
              },
              {
                "w": "Algoritmos quanticos: Deutsch-Jozsa, Grover (busca), Shor (fatoracao)",
                "s": "quantum algorithms Grover Shor | algoritmos quanticos | Grover search Shor factoring | Algoritmos quanticos Deutsch-Jozsa tutorial portugues",
                "d": "Grover: busca em lista N em sqrt(N) vs N classico. Shor: fatorar numeros grandes em tempo polinomial (quebraria RSA!). Deutsch-Jozsa: primeiro a mostrar vantagem quantica. VQE/QAOA: otimizacao hibrida classica-quantica."
              },
              {
                "w": "Qiskit (IBM), Cirq (Google), Pennylane: programar computadores quanticos",
                "s": "Qiskit tutorial quantum programming | Cirq Google quantum | Pennylane quantum ML | Qiskit Cirq Google explained",
                "d": "Qiskit (IBM): framework Python mais popular. IBM Quantum: rodar em hardware quantico REAL de graca. Cirq (Google): focado em NISQ. Pennylane: quantum ML. Simulador local: ate ~30 qubits. Hardware real: ruidoso, poucos qubits (100-1000 em 2025)."
              },
              {
                "w": "Quantum ML, quantum error correction, NISQ era, futuro",
                "s": "quantum machine learning | quantum error correction | NISQ quantum computing future | Quantum quantum error tutorial portugues",
                "d": "NISQ: Noisy Intermediate-Scale Quantum (era atual). Qubits com erro. Error correction: muitos qubits fisicos pra 1 qubit logico. Quantum ML: kernel methods, variational circuits. Vantagem quantica pratica: ainda nao comprovada pra maioria dos problemas. Futuro: 5-15 anos pra impacto real."
              },
              {
                "w": "Computacao neuromorfica: chips que imitam neuronios (Loihi, SpiNNaker)",
                "s": "neuromorphic computing Intel Loihi SpiNNaker | computacao neuromorfica | brain inspired computing | Computacao neuromorfica chips tutorial portugues",
                "d": "Neuromorfico: hardware que imita estrutura do cerebro. Spiking neural networks. Intel Loihi, SpiNNaker (Manchester). Ultra baixo consumo de energia. Bom pra edge AI, sensores, robotica. Complementar a GPUs, nao substituto. Area de pesquisa ativa."
              },
              {
                "w": "Criptografia pós-quântica: lattice-based (Kyber, Dilithium), NIST standards, migração",
                "s": "post-quantum cryptography | lattice-based | Kyber Dilithium | NIST | migration",
                "d": "Quando quantum computers quebrarem RSA/ECC, precisamos de alternativas. NIST padronizou Kyber (key exchange) e Dilithium (assinaturas). Migração já começou"
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
                "s": "AWS security testing | S3 bucket public | AWS SSRF metadata | IAM misconfiguration",
                "d": "S3 publico: dados expostos. SSRF: acessar http://169.254.169.254 pra roubar credenciais IAM. IAM: politicas permissivas demais (*:*). Lambda: funcoes com segredos hardcoded. CloudTrail: detectar atividade suspeita."
              },
              {
                "w": "Azure e GCP security: managed identity, storage accounts, metadata endpoints",
                "s": "Azure security testing | GCP security assessment | multi-cloud security | Azure security managed tutorial portugues",
                "d": "Azure: Managed Identity (como IAM roles). Storage accounts publicos. Metadata: 169.254.169.254 tambem. GCP: service accounts com permissoes demais. Cada cloud tem suas pegadinhas. Multi-cloud = multiplicar superficie de ataque."
              },
              {
                "w": "Serverless security: Lambda/Functions injection, event injection, cold start",
                "s": "serverless security Lambda | serverless vulnerabilities | Lambda injection attack | Serverless security Lambda/Functions tutorial portugues",
                "d": "Serverless NAO e invulneravel. Event injection: input malicioso no trigger (S3 event, API Gateway). Permissoes: principio do minimo privilegio por funcao. Cold start: timing attacks. Logs: CloudWatch/equivalente. Sem SSH = sem backdoor tradicional."
              },
              {
                "w": "Identity attacks: privilege escalation IAM, role chaining, cross-account",
                "s": "IAM privilege escalation cloud | role chaining attack | cross account access AWS | Identity attacks privilege tutorial portugues",
                "d": "IAM privesc: achar caminho de user normal ate admin. Role chaining: assumir role que assume outra role. Cross-account: trust policies mal configuradas. Ferramentas: Pacu, CloudMapper. Enumerate primeiro, escalar depois."
              },
              {
                "w": "Container escape: Docker breakout, K8s pod escape, container misconfigs",
                "s": "Docker container escape | Kubernetes pod escape | container security testing | Container escape Docker tutorial portugues",
                "d": "Docker: --privileged, mounted socket, cap_sys_admin. K8s: service account com permissoes demais, hostPID, hostNetwork. Escape: montar filesystem do host. Ferramentas: deepce, CDK. Defesa: rootless, seccomp, AppArmor."
              },
              {
                "w": "Ferramentas: ScoutSuite, Prowler, CloudSploit, Pacu, CloudMapper",
                "s": "cloud security tools ScoutSuite Prowler | Pacu AWS exploitation | CloudMapper visualization | Ferramentas ScoutSuite Prowler tutorial portugues",
                "d": "ScoutSuite: audit multi-cloud (AWS+Azure+GCP). Prowler: AWS compliance + security. CloudSploit: vulnerabilidades. Pacu: exploitation framework AWS. CloudMapper: visualizar rede AWS. Todas open-source. Sempre com permissao escrita."
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
                "s": "SOC security operations center | SIEM Splunk ELK | security monitoring alerting | monitoramento 24/7 SIEM tutorial portugues",
                "d": "SOC: time que monitora seguranca. SIEM: Security Information and Event Management (centralizar logs + alertar). Splunk/ELK/Sentinel. Triage: priorizar alertas (muitos falsos positivos). Playbooks: procedimento pra cada tipo de alerta."
              },
              {
                "w": "Incident Response: preparacao, deteccao, contencao, erradicacao, recuperacao, licoes",
                "s": "incident response plan | DFIR process | security incident handling NIST | Incident Response preparacao tutorial portugues",
                "d": "NIST framework: Prepare > Detect > Contain > Eradicate > Recover > Lessons. Preparacao: ter plano ANTES do incidente. Contencao: isolar sistema comprometido. Preservar evidencias. Chain of custody. Comunicacao: quem avisar, quando, como."
              },
              {
                "w": "Threat Intelligence: IoCs, MITRE ATT&CK, threat hunting, feeds",
                "s": "threat intelligence IoC | MITRE ATT&CK framework | threat hunting techniques | Threat Intelligence IoCs tutorial portugues",
                "d": "MITRE ATT&CK: framework de taticas e tecnicas de atacantes. IoC: Indicators of Compromise (IPs, hashes, dominios maliciosos). Threat hunting: buscar proativamente (nao esperar alerta). Feeds: OTX, VirusTotal, AbuseIPDB. TTP > IoC (taticas > indicadores)."
              },
              {
                "w": "Forense digital: aquisicao de evidencias, analise de memoria (Volatility), disco, rede",
                "s": "digital forensics Volatility | forensic analysis memory disk | digital evidence acquisition | Forense digital aquisicao tutorial portugues",
                "d": "Volatility: analisar dump de memoria (processos, conexoes, malware). Autopsy/FTK: analise de disco. Wireshark: captura de rede. Chain of custody: documentar quem tocou na evidencia. Write blocker: nao alterar evidencia. Hashes pra integridade."
              },
              {
                "w": "Malware analysis basica: estatica (strings, PE), dinamica (sandbox), YARA rules",
                "s": "malware analysis static dynamic | YARA rules malware | malware sandbox analysis | Malware analysis basica tutorial portugues",
                "d": "Estatica: analisar SEM executar (strings, imports, PE headers, VirusTotal). Dinamica: executar em sandbox (ANY.RUN, Cuckoo) e observar comportamento. YARA: regras pra detectar malware por patterns. Nao analise malware no seu PC real — use VM isolada!"
              },
              {
                "w": "Purple Teaming: red + blue colaborando, testar deteccoes, melhorar defesas",
                "s": "purple team security | purple teaming exercises | red blue team collaboration | Purple Teaming blue tutorial portugues",
                "d": "Purple team: red ataca, blue tenta detectar, depois comparam. Objetivo: melhorar deteccoes e playbooks. Atomic Red Team: testes unitarios de deteccao. MITRE ATT&CK como framework comum. Mais eficiente que red e blue separados."
              },
              {
                "w": "Security Automation: SOAR, playbooks automatizados, auto-remediation",
                "s": "SOAR security orchestration automation | automated security playbooks | security automation | Security Automation SOAR tutorial portugues",
                "d": "SOAR: Security Orchestration, Automation and Response. Playbook automatizado: alerta de malware > isolar maquina > coletar evidencia > notificar time. Ferramentas: Shuffle (open-source), Splunk SOAR, Palo Alto XSOAR. Reduz tempo de resposta de horas pra minutos."
              },
              {
                "w": "Malware analysis formal: estática (PE/ELF headers, strings, Ghidra/IDA), dinâmica (sandbox, API monitoring, behavior analysis)",
                "s": "malware analysis | PE ELF format | Ghidra IDA | sandbox | static dynamic analysis",
                "d": "Análise estática: examinar binário sem executar (strings, imports, disassembly em Ghidra). Dinâmica: executar em sandbox (Any.Run, Cuckoo) e observar comportamento"
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
                "s": "digital forensics fundamentals | forense digital principios | chain of custody forensics | forense digital principios tutorial portugues",
                "d": "Forense digital: coletar, preservar, analisar e apresentar evidencias digitais. Cadeia de custodia: documentar QUEM tocou, QUANDO, O QUE fez. Admissibilidade: evidencia deve ser integra e rastreavel. Hashes (MD5/SHA-256) comprovam que nada foi alterado. Principio de Locard: todo contato deixa rastro."
              },
              {
                "w": "Processo forense: identificacao, preservacao, coleta, exame, analise, apresentacao",
                "s": "forensic process methodology | processo forense digital etapas | forensic investigation steps | Processo forense identificacao tutorial portugues",
                "d": "1. Identificar: o que e relevante? 2. Preservar: nao alterar (write blocker). 3. Coletar: imagem forense bit-a-bit (dd, FTK Imager). 4. Examinar: extrair dados. 5. Analisar: correlacionar evidencias. 6. Apresentar: relatorio tecnico + laudo pericial. Cada etapa documentada."
              },
              {
                "w": "Imagem forense: dd, dc3dd, FTK Imager, E01 vs RAW, write blockers",
                "s": "forensic imaging dd FTK Imager | forensic disk image E01 | write blocker forensics | Imagem forense dc3dd tutorial portugues",
                "d": "Imagem forense: copia EXATA bit-a-bit do disco (nao so arquivos). dd if=/dev/sda of=imagem.raw bs=4M. FTK Imager: GUI, gera E01 (comprimido + hash). SEMPRE use write blocker (impede escrita no disco original). Verificar hash antes e depois. 1 bit diferente = evidencia comprometida."
              },
              {
                "w": "Tipos de forense: disco, memoria, rede, mobile, cloud, IoT",
                "s": "types digital forensics disk memory network mobile | tipos forense digital | forensics specializations | Tipos forense disco tutorial portugues",
                "d": "Disco: arquivos, deletados, timeline. Memoria (RAM): processos, senhas, malware em execucao. Rede: captura de trafego, logs. Mobile: celulares (Cellebrite, Magnet AXIOM). Cloud: logs de AWS/Azure/GCP. IoT: firmware, sensores. Cada tipo tem ferramentas e tecnicas proprias."
              },
              {
                "w": "Ordem de volatilidade: o que coletar primeiro (RFC 3227), triage",
                "s": "order of volatility RFC 3227 | ordem volatilidade forense | evidence collection priority | forensic triage",
                "d": "RFC 3227: registradores > cache > RAM > disco > logs remotos > backup. Regra: mais volatil primeiro! Se desligar PC antes de capturar RAM = perde processos, senhas, malware fileless. Triage: avaliacao rapida — esse incidente merece investigacao completa? Ferramentas de triage: KAPE, Velociraptor."
              },
              {
                "w": "Anti-forense: o que atacantes fazem pra destruir evidencias, como detectar",
                "s": "anti-forensics techniques detection | anti forense tecnicas | detecting anti-forensics | timestamp manipulation detection",
                "d": "Atacantes tentam: limpar logs, timestomp (alterar datas), usar encriptacao, wipe tools, rootkits. Detectar: inconsistencias em timestamps (MFT vs $LogFile), artefatos residuais, logs de outros sistemas (firewall, SIEM). Axioma: eliminar TODOS os rastros e quase impossivel. Sempre sobra algo."
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
                "s": "NTFS ext4 APFS forensics | file system forensic analysis | how data stored disk | Sistemas arquivos NTFS tutorial portugues",
                "d": "NTFS (Windows): MFT (Master File Table) registra tudo. ext4 (Linux): inodes + journal. APFS (Mac): copy-on-write. FAT32: simples (pendrives). Entender o filesystem = saber onde procurar evidencias. $MFT, $LogFile, $UsnJrnl no NTFS sao minas de ouro."
              },
              {
                "w": "Recuperacao de arquivos deletados: carving, slack space, journal analysis",
                "s": "deleted file recovery forensics | file carving | slack space forensics journal | Recuperacao arquivos deletados tutorial portugues",
                "d": "Deletar = remover referencia, nao o dado. File carving: buscar headers/footers de arquivos no disco (Scalpel, PhotoRec). Slack space: espaco entre fim do arquivo e fim do cluster (pode conter dados antigos). Journal: log de operacoes do filesystem. Unallocated space: onde arquivos deletados vivem."
              },
              {
                "w": "Timeline analysis: MAC times, filesystem events, supertimeline (Plaso/log2timeline)",
                "s": "timeline analysis forensics | MAC times forensics | Plaso log2timeline supertimeline | Timeline analysis times tutorial portugues",
                "d": "MAC times: Modified, Accessed, Created (+ Entry modified no NTFS = MACE). Timeline: ordenar TODOS eventos por tempo. Plaso/log2timeline: combinar eventos de filesystem, registry, logs, browser em 1 timeline. Responde: o que aconteceu e quando? Ferramenta mais poderosa de forense."
              },
              {
                "w": "Registry forensics (Windows): SAM, SYSTEM, SOFTWARE, NTUSER, AmCache, ShimCache",
                "s": "Windows registry forensics | SAM SYSTEM registry analysis | AmCache ShimCache forensics | Registry forensics Windows tutorial portugues",
                "d": "Registry = banco de dados do Windows. SAM: usuarios e senhas (hashes). SYSTEM: config de boot, timezone. SOFTWARE: programas instalados. NTUSER.DAT: atividade do usuario (recent docs, typed URLs). AmCache/ShimCache: historico de execucao de programas. RegRipper: parser automatico."
              },
              {
                "w": "Artifacts do usuario: browser history, prefetch, LNK files, recycle bin, USB history",
                "s": "forensic artifacts browser prefetch LNK | user activity forensics | USB forensic artifacts | Artifacts usuario browser tutorial portugues",
                "d": "Browser: historico, cookies, downloads, cache (cada browser em local diferente). Prefetch: programas executados recentemente (C:\\Windows\\Prefetch). LNK: atalhos = evidencia de acesso. Recycle Bin: $I (metadados) + $R (conteudo). USB: USBSTOR no registry, setupapi.dev.log. Cada artifact conta uma historia."
              },
              {
                "w": "Ferramentas de forense de disco: Autopsy, FTK, X-Ways, Sleuth Kit, KAPE",
                "s": "Autopsy forensic tool | FTK forensic toolkit | Sleuth Kit tutorial | KAPE forensic triage",
                "d": "Autopsy: GUI gratuita (Sleuth Kit por baixo). FTK: comercial, potente. X-Ways: leve, rapido, forense alemao. Sleuth Kit: command-line (fls, icat, mactime). KAPE: coleta rapida de artefatos (triage). Comece com Autopsy (gratuito) + KAPE pra triage. Industria usa FTK ou X-Ways."
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
                "s": "memory forensics importance | why analyze RAM forensics | volatile data forensics | memoria processos conexoes tutorial portugues",
                "d": "RAM contem o que o disco NAO tem: processos em execucao, conexoes de rede ativas, chaves de criptografia, senhas em plaintext, malware fileless (so na memoria). Dados volateis: desligou o PC, perdeu. Capturar memoria ANTES de desligar e critico."
              },
              {
                "w": "Captura de memoria: WinPmem, LiME, DumpIt, Magnet RAM Capture",
                "s": "memory capture WinPmem LiME DumpIt | capturar dump memoria | RAM acquisition forensics | Captura memoria WinPmem tutorial portugues",
                "d": "WinPmem: Windows (open source). LiME: Linux (kernel module). DumpIt: Windows (1 clique). Magnet RAM Capture: GUI. Formato: raw dump. Tamanho = tamanho da RAM (8GB RAM = 8GB dump). Capturar via rede se possivel (evitar alterar a maquina)."
              },
              {
                "w": "Volatility 3: plugins, processos, DLLs, conexoes, registry, timeline",
                "s": "Volatility 3 tutorial | Volatility memory analysis plugins | memory forensics Volatility | Volatility plugins processos explained",
                "d": "Volatility: framework #1 de analise de memoria. Plugins: pslist (processos), netscan (conexoes), dlllist, malfind (injecao), hashdump (senhas), hivelist+printkey (registry). Volatility 3: reescrito em Python 3, mais rapido. Identificar SO automaticamente."
              },
              {
                "w": "Detectar malware na memoria: code injection, hollowing, rootkits, hooks",
                "s": "detect malware memory forensics | process hollowing detection | rootkit memory analysis | Detectar malware memoria tutorial portugues",
                "d": "Malfind: detecta injecao de codigo em processos. Process hollowing: substituir codigo de processo legítimo. Rootkit: esconder processos/conexoes. API hooking: interceptar chamadas do sistema. Comparar PEB vs VAD. Se malfind encontra codigo executavel em regiao nao-imagem = suspeito."
              },
              {
                "w": "Extrair evidencias da memoria: senhas, chaves, clipboards, command history",
                "s": "extract passwords memory dump | cryptographic keys RAM | clipboard memory forensics | Extrair evidencias memoria tutorial portugues",
                "d": "Mimikatz (offline): extrair senhas/hashes do dump. Chaves de criptografia: AES key schedule na memoria (Bitlocker, TrueCrypt). Clipboard: ultimo ctrl+C. Command history: cmd, PowerShell. Strings: buscar URLs, IPs, emails no dump. Bulk_extractor: extrai automaticamente."
              },
              {
                "w": "Casos reais: como forense de memoria revelou malware fileless, APTs, ransomware",
                "s": "memory forensics case studies | fileless malware detection memory | APT memory analysis | ransomware memory forensics",
                "d": "Caso: malware PowerShell so na memoria (nada em disco). Volatility encontrou: processo powershell.exe com string base64 encodada. Decodificou: C2 beacon. Outro caso: ransomware — chave de criptografia ainda na RAM (recuperar arquivos!). Forense de memoria e ESSENCIAL pra ameacas modernas que evitam disco."
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
                "s": "network forensics Wireshark tcpdump | packet capture forensics | network traffic analysis | Captura trafego Wireshark tutorial portugues",
                "d": "Wireshark: analisar PCAPs. tcpdump: capturar na linha de comando. Full packet capture: gravar TUDO (precisa muito storage). NetworkMiner: extrair arquivos, imagens, credenciais do trafego. Filtros Wireshark: tcp.port==443, http.request.method==POST, ip.addr==x."
              },
              {
                "w": "Analise de logs: syslog, Windows Event Logs, web server logs, correlacao",
                "s": "log analysis forensics | Windows Event Log forensics | syslog analysis correlation | Analise logs syslog tutorial portugues",
                "d": "Syslog: formato padrao Linux (/var/log). Windows Event: Security.evtx (logon 4624, logoff 4634, failed 4625). Web: access.log (IP, URL, status, user-agent). Correlacao: cruzar eventos de multiplas fontes por timestamp. ELK stack pra centralizar e buscar."
              },
              {
                "w": "Analise de email: headers, spoofing, phishing, SPF/DKIM/DMARC",
                "s": "email forensics headers analysis | email spoofing detection | SPF DKIM DMARC forensics | Analise email headers tutorial portugues",
                "d": "Headers: rota do email (Received:), remetente real vs forjado. SPF: quais IPs podem enviar pelo dominio. DKIM: assinatura criptografica. DMARC: politica de rejeicao. Phishing: analisar URLs, anexos (sandbox). Email e vetor de ataque #1."
              },
              {
                "w": "Forense em cloud: logs AWS CloudTrail, Azure Activity, GCP Audit, preservacao",
                "s": "cloud forensics AWS CloudTrail | cloud log analysis forensics | cloud evidence preservation | Forense cloud logs tutorial portugues",
                "d": "CloudTrail (AWS): quem fez o que quando. Azure Activity Log. GCP Audit Log. Desafio: dados em jurisdicoes diferentes, volatilidade (instancias destroidas), multi-tenant. Preservar: exportar logs ANTES que expirem. Snapshots de volumes. IAM: quem tinha acesso?"
              },
              {
                "w": "Analise de malware em rede: C2 beaconing, DNS tunneling detection, IOCs de rede",
                "s": "network malware analysis C2 | C2 beaconing detection | DNS tunneling network forensics | network IOC indicators",
                "d": "C2 (Command & Control): malware comunica com atacante. Beaconing: conexoes periodicas (a cada 60s). Detectar: Zeek/Bro (analise de trafego), JA3/JA3S (fingerprint TLS). DNS tunneling: dados encoded em queries DNS (alto volume, nomes longos). IOCs de rede: IPs, dominios, URLs, user-agents maliciosos."
              },
              {
                "w": "Timeline de rede: correlacionar eventos de multiplas fontes, reconstituir ataque",
                "s": "network timeline analysis | correlating network events | reconstructing attack timeline | network forensics correlation",
                "d": "Combinar: firewall logs + IDS alerts + DNS logs + proxy logs + PCAP. Correlacionar por: IP, timestamp, session ID. Reconstituir: atacante escaneou (14:01) > explorou vuln (14:03) > estabeleceu C2 (14:05) > exfiltrou (14:30). Ferramentas: Splunk, ELK, Moloch/Arkime. Timeline = historia do ataque."
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
                "s": "mobile forensics acquisition | smartphone forensics tools | logical vs physical acquisition | Forense mobile aquisicao tutorial portugues",
                "d": "Logica: extrair dados acessiveis (backup, API). Filesystem: acesso completo (requer root/jailbreak). Fisica: copia bit-a-bit (chip-off, JTAG, ISP). Ferramentas: Cellebrite UFED (comercial), Magnet AXIOM, Autopsy + plugin Android. Cada nivel extrai mais dados."
              },
              {
                "w": "Android forensics: partitions, SQLite databases, app data, ADB extraction",
                "s": "Android forensics ADB extraction | Android SQLite databases | Android partition forensics | Android forensics partitions tutorial portugues",
                "d": "Particoes: /data (usuario), /system, /cache. ADB: extrair sem root (limitado). Root: acesso completo. Apps: /data/data/com.app/ (banco SQLite, shared prefs, cache). WhatsApp: msgstore.db. Navegador: history, cookies. Fotos: EXIF com GPS."
              },
              {
                "w": "iOS forensics: backups iTunes/iCloud, keychain, plist, filesystem encryption",
                "s": "iOS forensics backup | iPhone forensics keychain | iOS filesystem encryption | forensics backups iTunes/iCloud tutorial portugues",
                "d": "iOS: mais fechado que Android. iTunes backup: dados parciais (sem keychain se nao encriptado). iCloud: com credenciais. Keychain: senhas, tokens. Plist: configuracoes de apps. Encriptacao filesystem: hardware key + passcode. Ferramentas: iLEAPP, MEAT."
              },
              {
                "w": "Artifacts mobile: SMS, chamadas, WhatsApp, Telegram, GPS, fotos EXIF, deleted data",
                "s": "mobile forensic artifacts WhatsApp Telegram | smartphone GPS EXIF | deleted data recovery mobile | Artifacts mobile chamadas tutorial portugues",
                "d": "SMS/chamadas: bancos SQLite. WhatsApp: msgstore.db (criptografado). Telegram: cache local. GPS: fotos EXIF, Google Timeline, Waze, apps de corrida. Dados deletados: SQLite WAL, free pages. SIM card: ICCID, contatos, SMS antigos."
              },
              {
                "w": "Forense de veiculos: ECU, CAN bus, infotainment, EDR (event data recorder)",
                "s": "vehicle forensics CAN bus | car forensics EDR | automotive forensics infotainment | Forense veiculos infotainment tutorial portugues",
                "d": "Carros modernos = computadores sobre rodas. CAN bus: rede interna do veiculo. ECU: modulos de controle. Infotainment: GPS, chamadas, contatos sincronizados. EDR (caixa preta): velocidade, freio, cinto antes de colisao. Evidencia crucial em acidentes."
              },
              {
                "w": "Forense IoT: firmware extraction (binwalk), cloud correlation, smart home, wearables",
                "s": "IoT forensics firmware binwalk | smart home forensics | wearable device forensics | Forense firmware extraction tutorial portugues",
                "d": "Firmware: binwalk pra extrair filesystem. Flash dump: hardware (JTAG, SPI). Smart home: Alexa/Google logs, camera recordings, rotinas. Wearables: GPS, batimentos, sono (alibi ou contradizer). Cloud: onde device envia dados? API sniffing com mitmproxy."
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
                "s": "scientific method research | metodo cientifico pesquisa | experimental methodology | Metodo cientifico hipotese tutorial portugues",
                "d": "Pergunta > hipotese > experimento > analise > conclusao. Controle de variaveis. Reproducibilidade: outro pesquisador deve conseguir replicar. Ablation studies em ML: remover componente e medir impacto."
              },
              {
                "w": "LaTeX: escrita tecnica, formulas, artigos, TCC",
                "s": "LaTeX tutorial beginners | LaTeX artigo academico | LaTeX math formulas | LaTeX escrita tecnica explained",
                "d": "LaTeX: padrao pra documentos academicos. Overleaf: editor online. \\section{}, \\begin{equation}, \\cite{}, \\ref{}. Templates: IEEE, ACM. BibTeX pra referencias. Muito mais bonito que Word pra formulas."
              },
              {
                "w": "Como ler e escrever papers: estrutura, abstract, related work, experiments",
                "s": "how to read write research papers | como ler artigos cientificos | paper writing tips | Como escrever papers explained",
                "d": "Estrutura: Abstract > Intro > Related Work > Method > Experiments > Conclusion. Ler: abstract+conclusion primeiro, depois method. Escrever: figures first, then story around them."
              },
              {
                "w": "TCC / projeto de graduacao: escolher tema, orientador, cronograma",
                "s": "TCC engenharia computacao | undergraduate thesis tips | projeto graduacao | projeto graduacao escolher tutorial portugues",
                "d": "Escolha tema que te empolga. Orientador: professor da area + compatibilidade. Comece cedo (6+ meses). Escopo realista. Revisao bibliografica primeiro. Resultados parciais > perfeicao tardia."
              },
              {
                "w": "Revisao bibliografica: como buscar, organizar e citar fontes",
                "s": "literature review how to | revisao bibliografica | Google Scholar Zotero Mendeley | Revisao bibliografica como tutorial portugues",
                "d": "Google Scholar: buscar papers. Zotero/Mendeley: gerenciar referencias. Snowballing: ler referencias do paper bom. Fichamento: anotar contribuicao, metodo, resultados de cada paper. Revisao sistematica vs narrativa."
              },
              {
                "w": "Ferramentas: Overleaf (LaTeX online), Zotero, BibTeX, draw.io, Google Scholar",
                "s": "academic tools Overleaf Zotero BibTeX | ferramentas academicas | Overleaf LaTeX collaboration | Ferramentas Overleaf LaTeX tutorial portugues",
                "d": "Overleaf: LaTeX colaborativo (como Google Docs pra LaTeX). Zotero: salvar papers + gerar BibTeX. draw.io: diagramas. Google Scholar: buscar + ver citacoes. Sci-Hub: acesso a papers (zona cinza legal). Connected Papers: grafo visual de papers relacionados."
              },
              {
                "w": "Como escrever um bom abstract: estrutura, tamanho, o que incluir, erros comuns",
                "s": "how to write abstract research paper | como escrever abstract artigo | abstract writing tips | research paper abstract structure",
                "d": "Estrutura: contexto (1 frase) > problema (1 frase) > o que voce fez (1-2 frases) > resultados (1-2 frases) > impacto (1 frase). 150-250 palavras. Erros: muito longo, sem resultados, vago. O abstract e a parte MAIS LIDA do paper — muita gente so le o abstract. Escreva por ULTIMO (quando sabe tudo)."
              },
              {
                "w": "Related work: como posicionar seu trabalho, taxonomia, gap identification",
                "s": "related work section writing | como escrever related work | literature review positioning | research gap identification",
                "d": "Related work nao e lista de resumos de papers. E: organizar trabalhos por categoria/abordagem > comparar > mostrar o GAP (o que ninguem fez). Taxonomia: dividir em abordagens (ML-based vs rule-based vs hybrid). Sua contribuicao preenche o gap. Tabela comparativa: features vs papers (muito eficaz)."
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
                "s": "research paper structure computer science | como escrever artigo cientifico | paper writing CS | Estrutura paper abstract explained",
                "d": "Abstract: 150 palavras resumindo tudo. Intro: motivacao + gap + contribuicao. Related: o que ja existe e por que nao resolve. Metodo: como fez (reproduzivel!). Resultados: tabelas, graficos, analise. Conclusao: contribuicoes + trabalhos futuros."
              },
              {
                "w": "Figuras, tabelas e graficos cientificos: matplotlib, pgfplots, tikz",
                "s": "scientific figures matplotlib | pgfplots LaTeX | scientific visualization publication | Figuras tabelas graficos tutorial portugues",
                "d": "Figuras vendem o paper. matplotlib: Python (savefig alta resolucao). pgfplots/tikz: diretamente em LaTeX (mais bonito). Regras: fontes legiveis, labels claros, sem 3D desnecessario, colorblind-friendly. Uma boa figura vale 1000 palavras."
              },
              {
                "w": "Revisao por pares: como funciona, como responder, como revisar",
                "s": "peer review process | how to respond to reviewers | reviewing papers tips | Revisao pares como tutorial portugues",
                "d": "Submeter > editores atribuem revisores > 2-4 revisores leem > accept/minor revision/major revision/reject. Responder: ponto a ponto, educado, mudancas em azul. Revisar: seja construtivo, especifico, justo. Anonimato: double-blind."
              },
              {
                "w": "Conferencias e journals em Computacao: onde publicar, rankings, Qualis",
                "s": "computer science conferences journals ranking | conferencias computacao | Qualis CAPES | Conferencias journals Computacao tutorial portugues",
                "d": "Top conferences: NeurIPS, ICML, CVPR, ACL, SIGMOD, SOSP. Journals: IEEE, ACM, Springer. Qualis CAPES: ranking brasileiro (A1-A4, B1-B4). Em CS, conferencias > journals (diferente de outras areas). Accept rate: ~20-25% nas top."
              },
              {
                "w": "Ingles academico: writing style, common mistakes, phrasebank, Grammarly",
                "s": "academic English writing | phrasebank academic writing | common mistakes scientific writing | Grammarly academic",
                "d": "Academico e formal: sem contracoes (don't→do not), sem 1a pessoa (I→we ou passiva). Phrasebank (Manchester): frases prontas pra cada secao. Erros comuns BR: false cognates, artigos (a/the). Grammarly: correcao automatica. Leia papers em ingles DIARIAMENTE — absorver o estilo."
              },
              {
                "w": "Responder reviewers: ponto a ponto, tom profissional, destacar mudancas",
                "s": "responding to reviewers | rebuttal letter template | reviewer response academic | how to respond paper reviews",
                "d": "Para cada comentario: quote do reviewer + sua resposta + o que mudou no paper. Tom: agradeca, nunca seja defensivo. Se discorda: argumente com evidencia. Highlight mudancas em azul no paper revisado. Deadline de resubmissao: nao perca! Response letter bem feita = diferenca entre accept e reject."
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
                "d": "Regra: 1 ideia por slide. Figura > texto. Fonte minima 24pt. Sem paragrafos — use bullet points curtos. Fundo claro ou escuro consistente. Template: beamer (LaTeX), Google Slides, Keynote. Numere slides. Inclua backup slides pro Q&A."
              },
              {
                "w": "Estrutura da apresentacao: motivacao, problema, metodo, resultados, conclusao",
                "s": "research presentation structure | how to present research | academic talk structure | Estrutura apresentacao motivacao tutorial portugues",
                "d": "1. Hook: por que alguem deveria se importar? (1-2 slides). 2. Problema: o que nao se sabe/funciona. 3. Metodo: como resolveu. 4. Resultados: graficos claros, comparacoes. 5. Conclusao: contribuicao + futuro. Timing: ensaie pra caber no tempo (10min conferencia, 40min defesa)."
              },
              {
                "w": "Poster cientifico: layout, fluxo visual, chamar atencao em 30 segundos",
                "s": "scientific poster design | research poster layout | academic poster template | Poster cientifico layout tutorial portugues",
                "d": "Layout: titulo grande (legivel a 3m) > intro > metodo > resultados > conclusao. Fluxo: esquerda>direita ou colunas. Figuras GRANDES. Pouco texto. QR code pro paper/repo. Prepare pitch de 2min (elevator pitch). A0 ou tamanho do evento."
              },
              {
                "w": "Elevator pitch: explicar sua pesquisa em 2 minutos pra nao-especialista",
                "s": "research elevator pitch | explain research simply | science communication tips | Elevator pitch explicar tutorial portugues",
                "d": "Formato: Problema que todos entendem > por que e dificil > o que voce faz de diferente > resultado/impacto. Sem jargao. Use analogias. Pratique com amigos de outras areas. Se sua mae nao entende o problema, simplifique mais."
              },
              {
                "w": "Responder perguntas: como lidar com perguntas dificeis, hostis, ou que nao sabe",
                "s": "handling questions after presentation | como responder perguntas defesa | dealing with hostile questions | academic Q&A tips",
                "d": "Repita a pergunta (ganha tempo, garante que entendeu). Se nao sabe: 'Boa pergunta, nao investiguei isso ainda, mas minha hipotese seria...' NUNCA invente. Se hostil: mantenha calma, reconheca o ponto, redirecione pra sua contribuicao. Prepare 10 perguntas dificeis antes da apresentacao e ensaie respostas."
              },
              {
                "w": "Demo tecnica: como demonstrar software/sistema em apresentacao academica",
                "s": "technical demo presentation | live demo research presentation | software demo academic | how to give tech demo",
                "d": "Demo ao vivo: impressiona mais, mas pode falhar. Backup: video gravado E slides com screenshots. Mostrar: input > processamento > output. Nao mostrar: setup, instalacao, codigo (a menos que seja a contribuicao). Se falhar: 'como viram no video preparado...' Sempre ter backup. Testar antes 3x."
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
                "d": "IC = pesquisa na graduacao com orientador. PIBIC (CNPq): 12 meses, bolsa ~R$700. FAPESP (SP): 12 meses, bolsa ~R$1100. 12-20h/semana. Beneficios: diferencial pra mestrado, aprender a pesquisar, publicar, networking."
              },
              {
                "w": "Como escolher orientador e tema: afinidade, producao, laboratorio",
                "s": "choosing research advisor | como escolher orientador IC | research lab undergraduate | Como escolher orientador explained",
                "d": "Pesquise: Lattes do professor, artigos recentes, projetos. Afinidade: tema que te empolga + professor acessivel. Laboratorio: infra, alunos, recursos. Converse com alunos atuais. Nao tenha medo de mandar email — professores QUEREM alunos motivados."
              },
              {
                "w": "Plano de pesquisa: problema, objetivo, metodologia, cronograma",
                "s": "research proposal plan | plano pesquisa IC | how to write research plan | Plano pesquisa problema tutorial portugues",
                "d": "Problema: o que nao se sabe / o que pode melhorar. Objetivo: o que voce vai fazer pra resolver. Metodologia: como vai fazer (experimentos, metricas, datasets). Cronograma: mes a mes. Revisao bibliografica: o que ja foi feito. 3-5 paginas tipicamente."
              },
              {
                "w": "Apresentacoes: SIICUSP, congressos estudantis, poster, pitch de pesquisa",
                "s": "undergraduate research presentation | SIICUSP apresentacao IC | research poster | Apresentacoes SIICUSP congressos tutorial portugues",
                "d": "SIICUSP (USP), CONIC, congressos da SBC. Poster: visual + 5min explicacao. Apresentacao oral: 10-15min + perguntas. Dicas: conte uma historia, menos texto nos slides, ensaie, prepare pra perguntas. Networking em coffee break!"
              },
              {
                "w": "Etica em pesquisa: plagio, fabricacao, Comite de Etica, integridade",
                "s": "research ethics plagiarism | etica pesquisa | academic integrity | Etica pesquisa plagio tutorial portugues",
                "d": "Plagio: NUNCA copie sem citar. Auto-plagio tambem existe. Fabricacao/falsificacao de dados: carreira destruida. Comite de Etica: necessario pra pesquisa com humanos. Turnitin/iThenticate: detectam plagio. Cite TUDO. Na duvida, cite."
              },
              {
                "w": "Laboratorio: como funciona um lab de pesquisa, equipamentos, cultura, seminarios",
                "s": "research lab culture | como funciona laboratorio pesquisa | research group meetings | lab seminars PhD",
                "d": "Lab de pesquisa: reunioes semanais (paper reading, progress reports). Seminarios: apresentar e assistir. Cultura: colaboracao, compartilhar codigo/dados. Equipamentos: servidores GPU, clusters. Slack/Discord do lab. Cafe e fundamental. Cada lab tem cultura diferente — visite antes de entrar."
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
                "s": "meeting research advisor tips | reuniao orientador IC | advisor meeting preparation | Reunioes orientador preparar tutorial portugues",
                "d": "Antes: prepare slides/anotacoes com o que fez, resultados, duvidas. Durante: anote feedback. Depois: envie resumo por email. Mostre progresso mesmo pequeno. Nao tenha medo de dizer 'nao sei' ou 'travei'."
              },
              {
                "w": "Caderno de pesquisa: registrar experimentos, ideias, resultados, decisoes",
                "s": "research notebook lab journal | caderno pesquisa | research log keeping | Caderno pesquisa registrar tutorial portugues",
                "d": "Anote TUDO: parametros, resultados, erros, ideias. Digital (Notion, Obsidian) ou fisico. Data + o que fez + resultado + proximos passos. Voce ESQUECE — o caderno nao. Reproduzir experimento de 3 meses atras sem anotacao e pesadelo."
              },
              {
                "w": "Leitura de papers: rotina semanal, fichamento, paper reading group",
                "s": "how to read papers weekly | paper reading group | reading research papers efficiently | Leitura papers rotina tutorial portugues",
                "d": "Leia 2-3 papers/semana. 1o pass: abstract+conclusion (2min). 2o pass: figuras+metodo (15min). 3o pass: detalhes (1h). Fichamento: contribuicao, metodo, limitacoes, ideias. Reading group: discutir com colegas semanalmente."
              },
              {
                "w": "Implementacao e experimentos: reproducir papers, ablation studies, baselines",
                "s": "reproducing research papers | ablation study | research experiment baseline | Implementacao experimentos reproducir tutorial portugues",
                "d": "Comece reproduzindo paper existente (aprende metodo + valida entendimento). Baseline: resultado simples pra comparar. Ablation: remover componentes pra entender contribuicao de cada. Sempre fixe seeds pra reproducibilidade."
              },
              {
                "w": "Relatorio final, apresentacao SIICUSP/CONIC, primeiro artigo",
                "s": "IC final report | presenting research undergraduate | first research paper | Relatorio final apresentacao tutorial portugues",
                "d": "Relatorio: ~20 paginas, formato artigo expandido. Apresentacao: 10min + 5min perguntas (pratique!). Primeiro artigo: workshop ou conferencia nacional (mais acessivel). Co-autoria com orientador. Celebre — e uma conquista enorme!"
              },
              {
                "w": "Lidar com frustracao: experimentos falham, codigo nao funciona, resultados ruins",
                "s": "dealing with research frustration | lidar frustracao pesquisa | research failure normal | resilience in research",
                "d": "Pesquisa e 90% fracasso, 10% eureka. Experimentos falham: hipotese errada, bug no codigo, dados ruins. NORMAL. Documente o que NAO funcionou (util pro paper: 'tentamos X mas Y'). Converse com orientador quando travar. Pause, durma, volte amanha. O unico fracasso real e desistir."
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
                "d": "PIBIC (CNPq): 12 meses, ~R$700, via universidade. FAPESP (SP): 12 meses, ~R$1100, mais exigente. PIBITI: focada em inovacao/patentes. Voluntaria: sem bolsa mas conta como experiencia. Algumas universidades tem bolsas proprias (PRP, PRPG)."
              },
              {
                "w": "Como escrever projeto pra bolsa: problema, justificativa, objetivos, cronograma, orcamento",
                "s": "como escrever projeto bolsa IC | research proposal writing | projeto PIBIC modelo | Como escrever projeto explained",
                "d": "Titulo claro. Resumo: 200 palavras. Introducao: contexto + gap. Justificativa: por que importa. Objetivos: geral + especificos. Metodologia: como vai fazer. Cronograma: mes a mes (Gantt). Orcamento (FAPESP): material, viagem. Referencias. 5-10 paginas."
              },
              {
                "w": "Programas internacionais: MITACS, RISE (Alemanha), Amgen Scholars, SURF",
                "s": "international undergraduate research | MITACS internship | DAAD RISE Germany | summer research abroad",
                "d": "MITACS Globalink (Canada): 12 semanas, bolsa completa. DAAD RISE (Alemanha): estagio em lab. Amgen Scholars (Europa/Asia): 8-10 semanas. SURF (Caltech, MIT): verao. Requisitos: ingles fluente, bom historico, carta do orientador. Aplique no 3o/4o ano."
              },
              {
                "w": "Premios e competicoes: melhor IC, hackathons academicos, desafios de dados",
                "s": "premios iniciacao cientifica | academic hackathon | data science competition academic | Premios competicoes melhor tutorial portugues",
                "d": "Premio melhor IC: SIICUSP, CONIC, SBC. Hackathons: HackMIT, TreeHacks, hackathons locais. Kaggle competitions. Maratona de programacao (ICPC). Olimpiada de Seguranca (OBI/CriptoHack). Cada premio e uma linha no Lattes e no CV."
              },
              {
                "w": "Relatorio FAPESP: como escrever relatorio parcial e final, o que a FAPESP espera",
                "s": "relatorio FAPESP IC | FAPESP report writing | como escrever relatorio bolsa | scientific report funding agency",
                "d": "FAPESP exige: relatorio parcial (6 meses) e final (12 meses). Estrutura: atividades realizadas, resultados, producao (artigos, apresentacoes), plano futuro. Seja HONESTO: se algo nao deu certo, explique por que e o que fez diferente. Atraso e normal. FAPESP cancela bolsa se relatorio nao e entregue."
              },
              {
                "w": "Curriculo Lattes: como preencher, o que incluir, dicas pra iniciantes",
                "s": "curriculo Lattes como preencher | Lattes platform Brazil | academic CV Lattes | Lattes dicas iniciante",
                "d": "Lattes: curriculo academico oficial do Brasil (obrigatorio pra bolsas). lattes.cnpq.br. Incluir: formacao, IC, publicacoes, apresentacoes, premios, eventos, idiomas. Atualizar SEMPRE que publicar/apresentar algo. Avaliadores de bolsa/pos olham seu Lattes. Lattes bem preenchido = profissionalismo."
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
                "s": "mestrado academico vs profissional | master degree CS | quando fazer mestrado computacao | Academico Profissional diferenca tutorial portugues",
                "d": "Academico: pesquisa + dissertacao (2 anos, bolsa CAPES/FAPESP). Profissional: aplicado, sem bolsa, mais caro. Academico: pra quem quer pesquisar, dar aula, ou aprofundar. Profissional: pra quem quer titulo pro mercado. Em CS, experiencia > titulo na maioria dos casos."
              },
              {
                "w": "Processo seletivo: prova, projeto, entrevista, Lattes, cartas",
                "s": "mestrado computacao processo seletivo | graduate school application CS | Lattes curriculum | Processo seletivo prova tutorial portugues",
                "d": "Prova especifica (algoritmos, mate, programacao). Projeto de pesquisa: 5-10 paginas. Entrevista com banca. Lattes: curriculo academico. Cartas de recomendacao (orientador IC). POSCOMP: prova unificada que varias universidades aceitam."
              },
              {
                "w": "Disciplinas, creditos, qualificacao, dissertacao, defesa",
                "s": "mestrado disciplinas qualificacao defesa | master thesis defense | mestrado computacao etapas | Disciplinas creditos qualificacao tutorial portugues",
                "d": "~8 disciplinas (1o ano). Qualificacao: apresentar proposta (meio do 2o ano). Dissertacao: documento completo (~80-120 paginas). Defesa: apresentar pra banca (3 professores). Publicar 1+ artigo e ideal. Prazo: 24 meses."
              },
              {
                "w": "Bolsas: CAPES, CNPq, FAPESP, FAPERJ. Valores, requisitos, dedicacao exclusiva",
                "s": "bolsa mestrado CAPES CNPq FAPESP | graduate scholarship Brazil | bolsa pesquisa mestrado | Bolsas CAPES CNPq tutorial portugues",
                "d": "CAPES: ~R$2.100. CNPq: ~R$2.100. FAPESP (SP): ~R$3.700 (melhor, mas exige mais). Dedicacao exclusiva: nao pode ter emprego formal. Reserva tecnica: verba pra congresso e material. Dura 24 meses."
              },
              {
                "w": "Melhores programas de pos em Computacao no Brasil: USP, UNICAMP, UFMG, UFRGS, PUC-Rio",
                "s": "melhores mestrados computacao Brasil | top computer science programs Brazil | ranking pos graduacao | Melhores programas Computacao tutorial portugues",
                "d": "Nota CAPES 7 (maximo): IME-USP, IC-UNICAMP, DCC-UFMG, INF-UFRGS, PUC-Rio. Nota 6: UFPE, UFRJ, UFF, UFSC. Conceito CAPES avalia: publicacoes, corpo docente, formacao, internacionalizacao. Escolha pela area de pesquisa, nao so pelo nome."
              },
              {
                "w": "POSCOMP: prova unificada, como estudar, peso no processo seletivo",
                "s": "POSCOMP prova mestrado | como estudar POSCOMP | POSCOMP preparation | POSCOMP computer science exam Brazil",
                "d": "POSCOMP: prova anual (SBC) aceita por ~50 programas de pos. Conteudo: matematica, fundamentos, tecnologia. 70 questoes multipla escolha. Nota usada como parte do processo seletivo (peso varia). Como estudar: provas anteriores + livros base (CLRS, Tanenbaum, Nussenzveig). Fazer mesmo se nao obrigatorio (mais opcoes)."
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
                "s": "first year masters CS | mestrado primeiro ano | defining research problem | Primeiro disciplinas revisao tutorial portugues",
                "d": "Disciplinas: aproveite pra explorar areas e conhecer professores. Revisao: mapeie o estado da arte. Problema: o que falta? O que pode melhorar? Converse MUITO com orientador. Ler > escrever nessa fase."
              },
              {
                "w": "Segundo ano: experimentos, escrever dissertacao, submeter artigo, defender",
                "s": "writing masters thesis | mestrado segundo ano defesa | submitting paper conference | Segundo experimentos escrever tutorial portugues",
                "d": "Experimentos: itere rapido (MVP de pesquisa). Escrever: comece pelos capitulos de metodo e resultados. Artigo: submeta pra conferencia/workshop (deadline driven!). Defesa: 40min apresentacao + arguicao da banca."
              },
              {
                "w": "Sindrome do impostor, saude mental, equilibrio na pos-graduacao",
                "s": "imposter syndrome graduate school | saude mental pos graduacao | mental health PhD masters | Sindrome impostor saude tutorial portugues",
                "d": "Sindrome do impostor: normal, todo mundo tem. Comparar com colegas e armadilha. Saude mental: terapia (muitas universidades oferecem gratis). Exercicio, sono, hobbies. Falar com colegas. Nao e so voce. Pos e maratona, nao sprint."
              },
              {
                "w": "Networking academico: conferencias, workshops, lab visits, colaboracoes",
                "s": "academic networking conferences | networking pos graduacao | research collaboration tips | Networking academico conferencias tutorial portugues",
                "d": "Conferencias: va, apresente, converse no coffee break. Workshops: mais intimos, feedback melhor. Lab visits: visite labs de interesse (email frio funciona!). Colaboracoes: papers com outros labs = mais impacto + aprendizado."
              },
              {
                "w": "Depois do mestrado: doutorado, industria, ou mestrado profissional?",
                "s": "after masters degree career | depois mestrado carreira | masters to PhD industry | Depois mestrado doutorado tutorial portugues",
                "d": "Doutorado: se amou pesquisar e quer ir mais fundo. Industria: mestrado e diferencial (ML engineer, research engineer). Cargos research: Google, Meta, Microsoft pagam bem pra MSc. Avalie: voce gosta mais de pesquisar ou construir?"
              },
              {
                "w": "Orientador: como manter relacao saudavel, frequencia de reunioes, expectativas",
                "s": "advisor relationship masters | relacao orientador mestrado | managing advisor expectations | advisor meetings frequency",
                "d": "Reunioes: semanal ou quinzenal (combinar). Prepare pauta: o que fiz, resultados, duvidas, proximos passos. Mande por email antes. Se orientador nao responde: insista educadamente. Se relacao nao funciona: troque (e possivel, nao e tabu). Bom orientador = diferenca entre sofrer e aproveitar o mestrado."
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
                "s": "publication strategy masters | where to publish first paper | workshop vs conference | Estrategia publicacao workshop tutorial portugues",
                "d": "Primeiro paper: workshop (taxa aceitacao ~40-60%, feedback bom). Depois: conferencia regional (SBRC, SBBD, SBSC, SBMF). Amadureceu: conferencia top (ACM/IEEE). Nao mire no top logo — workshop te da experiencia e feedback."
              },
              {
                "w": "Co-autoria: regras, contribuicao, ordem dos autores, CRediT taxonomy",
                "s": "co-authorship rules | author order research paper | CRediT contributor roles | Co-autoria regras contribuicao tutorial portugues",
                "d": "1o autor: fez o trabalho. Ultimo: orientador (convencao em CS). Meio: contribuicoes intermediarias. CRediT: taxonomia de contribuicoes (conceptualization, methodology, software, writing). Discuta autoria ANTES de comecar. Evite conflitos."
              },
              {
                "w": "Processo de submissao: formatacao, camera-ready, registro, apresentacao",
                "s": "paper submission process | camera ready paper | conference registration | Processo submissao formatacao tutorial portugues",
                "d": "Formatar no template (LaTeX). Submeter via EasyChair/CMT/OpenReview. Esperar review (~2-4 meses). Se aceito: camera-ready (versao final) + registrar na conferencia + preparar apresentacao. Se rejeitado: melhorar com base nos reviews e resubmeter."
              },
              {
                "w": "Lidar com rejeicao: e normal, como melhorar, resubmeter",
                "s": "dealing with paper rejection | how to handle rejection research | improving rejected paper | Lidar rejeicao normal tutorial portugues",
                "d": "Taxa de aceitacao em conferencias top: 20-25%. Rejeicao e NORMAL — ate pesquisadores seniors sao rejeitados. Leia reviews com calma (espere 24h). Extraia feedback construtivo. Melhore e resubmeta em outro venue. Cada rejeicao melhora o paper."
              },
              {
                "w": "Escolher venue: como avaliar conferencias/journals, rankings, taxa de aceitacao",
                "s": "choosing conference publish paper | como escolher conferencia publicar | conference ranking computer science | acceptance rate venues",
                "d": "Conferencias top CS (20-25% aceitacao): NeurIPS, ICML, CVPR, ACL, SIGMOD. Tier B (30-40%): mais acessiveis, bom feedback. Workshops: taxa alta, otimo pra primeiro paper. Journals: IEEE Trans, ACM Computing Surveys. Qualis CAPES: A1 a B4. Core Ranking: A* A B C. Mire realista: primeiro paper em workshop ou B, depois suba."
              },
              {
                "w": "Open access, preprints, arXiv: como e por que disponibilizar seu trabalho",
                "s": "open access research paper | arXiv preprint | como publicar arXiv | open science preprint",
                "d": "arXiv: pre-print gratuito (publique ANTES da conferencia, marque territorio). Open access: qualquer pessoa pode ler (importante pra impacto). Green OA: postar preprint no seu site/arXiv. Gold OA: journal publica aberto (as vezes caro). SEMPRE poste preprint no arXiv — aumenta citacoes e visibilidade."
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
                "s": "PhD computer science | doutorado computacao | what is a PhD for | doutorado contribuicao original tutorial portugues",
                "d": "Doutorado = produzir conhecimento NOVO que ninguem no mundo produziu. Tese: documento de 150-300 paginas. 4-5 anos. Pra quem: quer ser professor, pesquisador (Google Brain, DeepMind, labs), ou resolver problemas na fronteira."
              },
              {
                "w": "Qualificacao, exame de proficiencia, publicacoes durante o doutorado",
                "s": "PhD qualification exam | doutorado qualificacao publicacoes | PhD milestones | Qualificacao exame proficiencia tutorial portugues",
                "d": "Proficiencia em idioma (ingles). Qualificacao: ~18 meses, apresentar proposta + progresso. Publicar: 2-4 papers em conferencias/journals. Co-autoria com orientador e colegas. Quantidade varia por programa e area."
              },
              {
                "w": "Orientacao: relacao orientador-aluno, co-orientacao, sanduiche (exterior)",
                "s": "PhD advisor relationship | doutorado sanduiche exterior | co-advisor PhD | Orientacao relacao orientador-aluno tutorial portugues",
                "d": "Relacao mais importante da pos. Reunioes semanais/quinzenais. Co-orientador: expertise complementar. Sanduiche: 6-12 meses em universidade no exterior (CAPES/FAPESP pagam). Networking internacional. Experiencia transformadora."
              },
              {
                "w": "Bolsas doutorado: CAPES, CNPq, FAPESP. Doutorado no exterior",
                "s": "bolsa doutorado CAPES FAPESP | PhD abroad scholarship | doutorado exterior | Bolsas doutorado CAPES tutorial portugues",
                "d": "CAPES: ~R$3.100. FAPESP (SP): ~R$5.400. Exterior: CAPES Print, Fulbright (EUA), CSC (China), DAAD (Alemanha). PhD nos EUA: 5-6 anos, funding como TA/RA, tuition waiver. Top schools: MIT, Stanford, CMU, Berkeley."
              },
              {
                "w": "Pos-doc, carreira academica: concurso, tenure, pesquisa independente",
                "s": "postdoc academic career | carreira academica professor | tenure track university | Pos-doc carreira academica tutorial portugues",
                "d": "Pos-doc: 1-3 anos de pesquisa apos PhD. Concurso publico: prova didatica + titulos + memorial. Tenure (efetivacao): ~5 anos de professor. Carreira: pesquisa, orientacao, aulas, extensao, gestao. Publicar continuamente. Captacao de recursos (FAPESP, CNPq)."
              },
              {
                "w": "Saude mental no doutorado: burnout, isolamento, sindrome do impostor, quando pedir ajuda",
                "s": "PhD mental health burnout | saude mental doutorado | PhD imposter syndrome | when to quit PhD",
                "d": "40-50% dos doutorandos reportam problemas de saude mental. Burnout: excesso de trabalho sem resultado visivel. Isolamento: pesquisa e solitaria. Impostor: 'nao mereco estar aqui' (TODO MUNDO sente). Pedir ajuda: terapia (universidade oferece), conversar com colegas, orientador. NAO e fraqueza. E inteligencia."
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
                "s": "choosing PhD thesis topic | escopo tese doutorado | PhD research question | Escolher problema tese tutorial portugues",
                "d": "Nem grande demais (impossivel), nem pequeno demais (nao vale PhD). Contribuicao ORIGINAL: algo que ninguem fez. Teste: consigo explicar em 1 frase o que e novo? Orientador ajuda a calibrar scope. Pivot e normal (2-3 vezes tipicamente)."
              },
              {
                "w": "Publicar durante o PhD: estrategia, conferencias vs journals, autoria",
                "s": "publishing during PhD strategy | PhD publication strategy | first author papers | Publicar durante estrategia tutorial portugues",
                "d": "Meta: 2-4 papers first-author em conferencias top. Estrategia: workshop paper > conferencia B > conferencia A. Autoria: primeiro autor = quem fez o trabalho. Ultimo = orientador (convencao). Rejeicao e normal (50-80% das submissoes). Persistencia."
              },
              {
                "w": "Sanduiche no exterior: como aplicar, lab host, funding, experiencia",
                "s": "PhD sandwich abroad program | doutorado sanduiche CAPES FAPESP | visiting researcher PhD | Sanduiche exterior como tutorial portugues",
                "d": "BEPE (FAPESP): 3-12 meses, bolsa completa. CAPES Print: programas selecionados. Fulbright: EUA. Escolha lab: leia papers, contacte professor (email personalizado!). Experiencia transformadora: outra cultura de pesquisa, networking global, independencia."
              },
              {
                "w": "Escrevendo a tese: estrutura, capitulos, revisao, timeline",
                "s": "writing PhD thesis | estrutura tese doutorado | PhD dissertation writing tips | Escrevendo tese estrutura tutorial portugues",
                "d": "Capitulos: Intro > Background > Related Work > Contribuicao 1 (paper 1) > Contrib 2 > Contrib 3 > Conclusao. Comece cedo (nao espere acabar os experimentos). Escreva 1 pagina/dia = tese em 6 meses. Revisao: orientador, colegas, Grammarly."
              },
              {
                "w": "Defesa de tese: preparacao, banca, arguicao, dicas",
                "s": "PhD thesis defense tips | defesa tese doutorado | PhD viva preparation | Defesa tese preparacao tutorial portugues",
                "d": "Apresentacao: 40-50min. Banca: 3-5 membros (1-2 externos). Arguicao: cada membro faz perguntas ~30min. Prepare: FAQ de perguntas dificeis. Conheca o trabalho dos membros da banca. Ensaie 3+ vezes. Depois: titulo de doutor!"
              },
              {
                "w": "Carreira pos-PhD: professor, pos-doc, industry research, startups deep-tech",
                "s": "career after PhD | pos doutorado carreira | PhD industry research career | Carreira pos-PhD professor tutorial portugues",
                "d": "Professor: concurso publico (Brasil) ou tenure track (exterior). Pos-doc: 1-3 anos de pesquisa intensiva. Industry research: Google DeepMind, Meta FAIR, MSR. Research engineer: aplicar pesquisa em producao. Startup deep-tech: comercializar sua pesquisa."
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
                "s": "academic reputation h-index | becoming reviewer program committee | academic career building | Construir reputacao h-index tutorial portugues",
                "d": "h-index: h papers com pelo menos h citacoes. Google Scholar profile: obrigatorio. Ser reviewer: peca ao orientador pra indicar. Program committee: apos varios reviews. Convidar e ser convidado pra palestras. Networking > metricas."
              },
              {
                "w": "Colaboracoes internacionais: como iniciar, email frio, visitas, co-orientacao",
                "s": "international research collaboration | cold email professor research | visiting researcher | Colaboracoes internacionais como tutorial portugues",
                "d": "Email frio: 3 paragrafos (quem sou, por que VOCE, o que proponho). Leia 2-3 papers da pessoa antes. Proponha algo concreto. Taxa de resposta: ~10-20%. Conferencias: melhor lugar pra conhecer pessoalmente. Visitas: 1 semana pode iniciar colaboracao de anos."
              },
              {
                "w": "Pos-doc: como conseguir, onde procurar, negociar, transicao pra professor",
                "s": "postdoc position how to find | postdoc computer science | postdoc to professor transition | Pos-doc como conseguir tutorial portugues",
                "d": "Onde: academicjobs.com, jobs.ac.uk, LinkedIn, site dos labs. Candidatura: CV + research statement + teaching statement + cartas. Duracaoo: 1-3 anos. Neg: salario, funding pra conferencias, liberdade de pesquisa. Transicao: publicar muito, dar aulas, construir lab."
              },
              {
                "w": "Concurso publico no Brasil: provas, titulos, memorial, aula publica",
                "s": "concurso professor universidade | concurso publico docente | academic hiring Brazil | Concurso publico Brasil tutorial portugues",
                "d": "Edital: requisitos (doutorado), vagas, cronograma. Provas: didatica (aula publica pra banca), escrita (dissertacao em 4h), titulos (pontuacao do Lattes). Memorial: sua trajetoria academica. Prepare MESES antes. Cada universidade tem regras diferentes."
              },
              {
                "w": "Captacao de recursos: FAPESP tematico, CNPq Universal, editais, parcerias",
                "s": "research funding proposal Brazil | FAPESP tematico | CNPq Universal grant writing | Captacao recursos FAPESP tutorial portugues",
                "d": "FAPESP Auxilio Regular: 1 pesquisador, 2 anos. FAPESP Tematico: grupo, 5 anos, milhoes. CNPq Universal: nacional. Edital: leia TUDO antes de escrever. Orcamento realista. Justifique cada item. Parcerias industria: Google, Samsung, Huawei tem programas."
              },
              {
                "w": "Industry research labs: Google DeepMind, Meta FAIR, MSR, Anthropic, OpenAI, como entrar",
                "s": "industry research labs Google DeepMind | Meta FAIR research | how to get into research lab | AI research career industry",
                "d": "Google DeepMind, Meta FAIR, MSR, OpenAI, Anthropic: publicam papers top E constroem produtos. Requisito tipico: PhD + publicacoes em top venues. Research Engineer: sem PhD mas forte em implementacao. Processo: aplicar online + referrals. Salarios: $200-500k+ total comp (EUA). Alternativa ao caminho academico tradicional."
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
                "s": "LaTeX IEEE ACM template | beamer presentation LaTeX | LaTeX advanced academic | LaTeX avancado templates tutorial portugues",
                "d": "Templates: IEEE (2 colunas), ACM (especifico por conferencia), LNCS (Springer). Beamer: slides em LaTeX (consistente com o paper). TikZ: diagramas. Algorithm2e: pseudocodigo. Overleaf: colaboracao real-time."
              },
              {
                "w": "Gerenciamento de experimentos: MLflow, Weights & Biases, notebooks reproduziveis",
                "s": "experiment tracking research | reproducible research notebooks | MLflow research | Gerenciamento experimentos MLflow tutorial portugues",
                "d": "MLflow/W&B: track hiperparametros, metricas, artefatos. Jupyter + papermill: notebooks parametrizados. Seeds fixas pra reproducibilidade. Docker pra ambiente. README com instrucoes de reproducao."
              },
              {
                "w": "Computacao cientifica: cluster, SLURM, GPU na nuvem (Colab, Lambda, vast.ai)",
                "s": "HPC cluster SLURM | GPU cloud research | Google Colab Pro research | Computacao cientifica cluster tutorial portugues",
                "d": "Cluster da universidade: SLURM (sbatch, squeue). GPU na nuvem: Colab Pro, Lambda Labs, vast.ai, AWS Spot. Multi-GPU: DataParallel, DistributedDataParallel. Custo: otimize batch size, use mixed precision."
              },
              {
                "w": "Versionamento de dados e modelos: DVC, Git LFS, HuggingFace Hub",
                "s": "DVC data version control | Git LFS large files | HuggingFace Hub models | Versionamento dados modelos tutorial portugues",
                "d": "DVC: git pra dados (trackea datasets grandes sem colocar no git). Git LFS: arquivos grandes. HuggingFace Hub: compartilhar modelos e datasets. Reproducibilidade: codigo (git) + dados (DVC) + ambiente (Docker) + config (YAML)."
              },
              {
                "w": "Plataformas academicas: Google Scholar, DBLP, Semantic Scholar, arXiv, OpenReview",
                "s": "academic platforms Google Scholar DBLP | arXiv preprint | OpenReview conference | Plataformas academicas Google tutorial portugues",
                "d": "Google Scholar: perfil + citacoes + h-index. DBLP: indice de publicacoes em CS. Semantic Scholar: AI-powered search. arXiv: pre-prints (publicar antes da conferencia). OpenReview: reviews publicos (ICLR, NeurIPS). ResearchGate: rede social academica."
              },
              {
                "w": "Financiamento: FAPESP projetos, CNPq Universal, editais, parcerias industria",
                "s": "research funding Brazil FAPESP CNPq | financiamento pesquisa | industry partnership research | Financiamento FAPESP projetos tutorial portugues",
                "d": "FAPESP: projetos tematicos, auxilio pesquisa. CNPq: Universal, produtividade. Editais: FINEP, CAPES. Parcerias: Google Research Awards, Microsoft Research, Samsung, Huawei. Patentes: proteger inovacao. Tech transfer: levar pesquisa pra industria."
              },
              {
                "w": "Gestao de conhecimento: Obsidian, Notion, Zettelkasten method pra pesquisa",
                "s": "Obsidian Zettelkasten research | knowledge management research | Notion academic | Gestao conhecimento Obsidian tutorial portugues",
                "d": "Zettelkasten: notas atomicas interconectadas (como seu cerebro). Obsidian: Markdown + links + grafos (gratis, local). Notion: mais estruturado. Logseq: alternativa. Linka notas de papers, ideias, reunioes. Depois de 1 ano, seu 'segundo cerebro' e invaluavel."
              },
              {
                "w": "Escrita colaborativa: Overleaf, Git + LaTeX, Google Docs, revisao e controle de versao",
                "s": "collaborative writing research | Overleaf collaboration | Git LaTeX academic writing | Escrita colaborativa Overleaf tutorial portugues",
                "d": "Overleaf: melhor pra LaTeX colaborativo (como Google Docs). Git + LaTeX: pra quem quer controle total (diff de texto). Google Docs: rascunhos rapidos com orientador. Track changes: marcar o que mudou entre versoes. Branch por secao se usar git."
              },
              {
                "w": "Reproducibilidade: Docker, conda environments, seeds, config files, README detalhado",
                "s": "reproducible research Docker conda | reproducibility machine learning | research code README | Reproducibilidade Docker conda tutorial portugues",
                "d": "Codigo que ninguem reproduz = codigo inutil. requirements.txt / environment.yml. Docker: ambiente identico. Seeds: random.seed(42). Config: YAML/JSON (nao hardcode). README: como instalar, como rodar, como reproduzir cada tabela/figura do paper. Zenodo: DOI pro seu codigo."
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
                "s": "active learning Feynman technique | aprendizado ativo tecnica Feynman | spaced repetition study | Aprendizado ativo Feynman tutorial portugues",
                "d": "Tecnica Feynman: explique como se fosse pra uma crianca. Se travar, volte e estude. Recall ativo: feche o material e tente lembrar (melhor que reler). Espacamento: revisar em intervalos crescentes (Anki)."
              },
              {
                "w": "Gestao de tempo: Pomodoro, time blocking, rotina de estudo",
                "s": "Pomodoro technique study | gestao tempo estudo | time blocking productivity | Gestao tempo Pomodoro tutorial portugues",
                "d": "Pomodoro: 25min foco + 5min pausa. Time blocking: agendar blocos no calendario. 1-2h/dia consistente > 8h no sabado. Eliminar distracoes: celular no silencioso, app blocker."
              },
              {
                "w": "Projetos > teoria: aprender fazendo, portfolio no GitHub",
                "s": "learn by doing projects | portfolio github developer | project based learning programming | Projetos teoria aprender tutorial portugues",
                "d": "Teoria sem pratica = esquecimento. Pra cada topico: leia, pratique, construa algo. GitHub = seu portfolio. Recrutadores olham seus repos. README bem feito em cada projeto."
              },
              {
                "w": "Comunidade: Discord, Reddit, meetups, conferencias, open source",
                "s": "developer community Discord Reddit | comunidade programacao | open source contribution beginner | Comunidade Discord Reddit tutorial portugues",
                "d": "r/learnprogramming, r/cscareerquestions. Discord: Python Brasil, He4rt Devs. Meetups locais. Conferencias: Python Brasil, TDC. Contribuir em open source: comece por issues 'good first issue'."
              },
              {
                "w": "Como aprender programacao: ler docs, copiar e modificar, construir projetos proprios",
                "s": "how to learn programming effectively | como aprender programacao | learn coding by building | self-taught programmer tips",
                "d": "Nao assista tutoriais passivamente. Ciclo: ler/assistir (20%) > copiar codigo do tutorial (30%) > modificar e quebrar (20%) > construir algo proprio (30%). Tutorial hell: ficar preso em cursos sem nunca construir nada. Saia do tutorial e CONSTRUA."
              },
              {
                "w": "Quando pedir ajuda: Stack Overflow, documentacao oficial, como fazer boas perguntas",
                "s": "how to ask good questions programming | Stack Overflow guide | RTFM read documentation | debugging before asking",
                "d": "Antes de perguntar: leia o erro, Google o erro, leia a documentacao, tente 3 abordagens diferentes. Se ainda travou: formule a pergunta (o que tentei, o que esperava, o que aconteceu). Stack Overflow: pesquise antes de postar. Documentacao oficial > tutoriais random."
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
                "s": "LinkedIn developer profile tips | LinkedIn programador | LinkedIn tech career | LinkedIn perfil conexoes tutorial portugues",
                "d": "Foto profissional. Headline: 'Estudante de Eng. Computacao | Python | IA'. Sobre: o que voce faz e busca. Projetos no featured. Conectar com devs da area. Postar aprendizados."
              },
              {
                "w": "Portfolio e GitHub: o que mostrar, como organizar, README",
                "s": "developer portfolio github | portfolio programador | github profile README projects | Portfolio GitHub mostrar tutorial portugues",
                "d": "Pin 4-6 melhores repos. Cada repo: README com descricao, como rodar, screenshots. GitHub Profile README. Deploye projetos (Vercel, Pages). Qualidade > quantidade."
              },
              {
                "w": "Entrevistas tecnicas: algoritmos, system design, behavioral",
                "s": "technical interview preparation | entrevista tecnica programacao | coding interview tips | Entrevistas tecnicas algoritmos tutorial portugues",
                "d": "Algoritmos: LeetCode (Easy→Medium). System design: como projetar Twitter/Uber. Behavioral: STAR method (Situacao-Tarefa-Acao-Resultado). Pratique em voz alta. Mock interviews."
              },
              {
                "w": "Estagios, freelance, CLT, PJ: opcoes no Brasil e remoto",
                "s": "estagio programacao Brasil | trabalho remoto programador | freelance developer career | Estagios freelance opcoes tutorial portugues",
                "d": "Estagio: a partir do 2o ano (Gupy, LinkedIn, CIEE). Freelance: Workana, Upwork (experiencia + portfolio). CLT vs PJ: entenda a diferenca. Remoto internacional: paga em dolar, mas exige ingles."
              },
              {
                "w": "Primeiro emprego em tech: o que empresas esperam de um junior",
                "s": "first tech job expectations | o que empresas esperam junior | junior developer skills | entry level software engineer",
                "d": "Empresas esperam de junior: fundamentos solidos (nao frameworks da moda), capacidade de aprender rapido, comunicacao, humildade. NAO esperam: saber tudo, resolver tudo sozinho. Diferencial: projetos proprios no GitHub, contribuicao open source, blog tecnico."
              },
              {
                "w": "Curriculo e CV tecnico: o que incluir, o que evitar, ATS-friendly",
                "s": "tech resume tips | curriculo programador | developer CV template | ATS friendly resume",
                "d": "1 pagina. Secoes: contato, resumo (2 linhas), experiencia (STAR: situacao-tarefa-acao-resultado), projetos, skills, educacao. Quantifique: 'reduzi tempo de deploy de 2h pra 5min'. Sem foto (ATS). Skills: liste tecnologias que REALMENTE sabe. GitHub linkado."
              },
              {
                "w": "Negociacao salarial: pesquisa de mercado, como negociar, equity, beneficios",
                "s": "salary negotiation tech | negociacao salarial programador | tech compensation negotiation | glassdoor levels.fyi",
                "d": "Pesquise: Glassdoor, levels.fyi, Pesquisa Robert Half. Nunca diga seu salario atual primeiro. Fale em faixa. Negocie TUDO: salario, bonus, equity, remote, PTO, equipamento. Startup: equity vale pouco (99% falham). Big tech: RSU vale muito. Total comp = salario + bonus + equity + beneficios."
              },
              {
                "w": "Contribuir para open source: encontrar projetos (good first issue), fork → branch → PR, code review, etiqueta, upstream sync",
                "s": "open source contribution | good first issue | fork PR | upstream sync | community",
                "d": "Contribuir para OSS: buscar good first issues, ler CONTRIBUTING.md, fazer PR pequeno e limpo, responder code review. Constrói reputação e network"
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
                "s": "security certifications path | eJPT OSCP certification | cybersecurity certification roadmap | Certificacoes CompTIA Security+ tutorial portugues",
                "d": "Caminho: Security+ (fundacao) > eJPT (primeiro pentest) > CEH (teoria) > OSCP (hands-on, gold standard, 24h exam) > OSWE (web avancado) > CRTP (Active Directory). OSCP: exige hackear 5 maquinas em 24h + relatorio. Muitas vagas exigem OSCP."
              },
              {
                "w": "Carreira: pentest, red team, blue team, GRC, security engineer, bug bounty full-time",
                "s": "cybersecurity career paths | pentest career | bug bounty full time career | Carreira pentest team tutorial portugues",
                "d": "Pentester: testar seguranca de clientes. Red team: simular atacante real (mais sofisticado). Blue team: defender (SOC, IR, threat hunting). Security engineer: construir seguranca no produto. GRC: governanca, risco, compliance. Bug bounty: freelance (top hunters ganham $100k+/ano)."
              },
              {
                "w": "Bug Bounty: HackerOne, Bugcrowd, Intigriti, como ganhar seus primeiros bounties",
                "s": "bug bounty platforms | HackerOne Bugcrowd how to start | first bug bounty tips | Bounty HackerOne Bugcrowd tutorial portugues",
                "d": "Plataformas: HackerOne, Bugcrowd, Intigriti, YesWeHack. Comece: programas com escopo amplo + muitos assets. Foco: IDOR, XSS, info disclosure (mais acessiveis). Recon pesado: subdomains, JS analysis, endpoints esquecidos. Primeiro bounty: $50-500. Persistencia > talento."
              },
              {
                "w": "Portfolio de seguranca: CTF writeups, blog tecnico, GitHub com tools/scripts",
                "s": "security portfolio CTF writeups | cybersecurity blog portfolio | security tools github | Portfolio seguranca writeups tutorial portugues",
                "d": "CTF writeups: documentar como resolveu challenges (blog ou GitHub). Blog: artigos tecnicos sobre vulns que encontrou (em labs, nao em producao). GitHub: scripts de automacao, ferramentas, configs. Portfolio diferencia voce de quem so tem certificacoes. Mostre o que SABE FAZER."
              },
              {
                "w": "Networking na area: BSides, DEF CON, conferencias brasileiras (H2HC, Roadsec)",
                "s": "cybersecurity conferences BSides DEF CON | H2HC Roadsec Brasil | infosec community | Networking area BSides tutorial portugues",
                "d": "BSides: conferencias comunitarias (varias cidades). DEF CON: a maior (Las Vegas). H2HC: a maior do Brasil. Roadsec: itinerante pelo Brasil. Meetups locais: OWASP chapters. Twitter/X: infosec community e muito ativa. Networking > certificacoes pra conseguir emprego."
              },
              {
                "w": "Transicao de carreira: de dev pra seguranca, primeiros passos, skills transferiveis",
                "s": "career transition to cybersecurity | developer to security | cybersecurity career change | Transicao carreira seguranca tutorial portugues",
                "d": "De dev: voce ja sabe codigo, arquitetura, debug. Vantagem enorme! Adicione: OWASP Top 10 na pratica, 1 certificacao (eJPT ou Security+), labs (TryHackMe), 1 especialidade (web hacking se e dev web). Bug bounty: comece em paralelo. 6-12 meses focado = pronto pra vaga junior em seguranca."
              },
              {
                "w": "Especializacoes em seguranca: AppSec, CloudSec, Pentest, IR, Threat Intel, GRC, Forense",
                "s": "cybersecurity specializations | AppSec CloudSec career | security career specialization | infosec career paths detailed",
                "d": "AppSec: seguranca de aplicacoes (SAST, code review). CloudSec: seguranca em cloud (AWS, Azure). Pentest: testar invasao. IR: resposta a incidentes. Threat Intel: inteligencia de ameacas. GRC: governanca, risco, compliance. Forense: investigacao digital. Escolha 1 pra se aprofundar."
              },
              {
                "w": "Day-in-the-life: como e o dia a dia de um pentester, analista SOC, security engineer",
                "s": "day in life pentester | SOC analyst daily work | security engineer role | infosec daily routine",
                "d": "Pentester: recon > exploit > report, projetos de 1-4 semanas. SOC analyst: monitorar alertas, triage, investigar, escalar. Security engineer: design + implementar controles, automatizar, code review. Todos: muito leitura, pesquisa constante, colaboracao."
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
                "s": "software engineer career ladder | career levels engineering | junior to senior developer | staff principal engineer",
                "d": "Junior: aprende, executa tarefas definidas. Pleno: executa com autonomia, mentora juniors. Senior: define solucoes, influencia time. Staff: impacto cross-team, define direcao tecnica. Principal: impacto na organizacao. O que muda: scope de impacto, autonomia, ambiguidade."
              },
              {
                "w": "IC track vs Manager track: como decidir, quando trocar, pendulum",
                "s": "IC vs manager track | individual contributor vs management | engineering career track | manager pendulum",
                "d": "IC (Individual Contributor): foco tecnico, codigo, arquitetura, pesquisa. Manager: foco em pessoas, processos, estrategia. Nenhum e melhor — depende do que te energiza. Pendulum: alternar entre IC e manager ao longo da carreira (comum). Experimente manager por 6 meses antes de decidir."
              },
              {
                "w": "Marca pessoal: blog tecnico, palestras, open source, Twitter/X, YouTube",
                "s": "developer personal brand | tech blog programming | developer conference speaking | building audience developer",
                "d": "Blog: escreva o que aprendeu (dev.to, Medium, pessoal). Palestras: comece em meetups locais, depois conferencias. Open source: contribua e mantenha projetos. Twitter/X: compartilhe aprendizados e opinioes. YouTube: tutoriais e projetos. Consistencia > viralizar. 1 post/semana por 1 ano = reputacao."
              },
              {
                "w": "Trabalho remoto: produtividade, comunicacao async, fuso horario, isolamento",
                "s": "remote work developer tips | trabalho remoto programador | async communication remote | remote developer productivity",
                "d": "Async-first: escreva mais, reuna menos. Over-communicate: ninguem ve voce trabalhando. Rotina: horario fixo, espaco dedicado, sair de casa. Fuso: overlap de 4h com o time e suficiente. Isolamento: co-working, coffee chats virtuais, meetups presenciais. Remote paga bem mas exige disciplina."
              },
              {
                "w": "Salarios e mercado tech: Brasil, exterior, remoto internacional, freelance",
                "s": "tech salary Brazil | developer salary international remote | programador salario mercado | freelance developer rates",
                "d": "Brasil CLT: Junior R$3-6k, Pleno R$7-12k, Senior R$12-20k+. Remoto internacional: Junior $3-5k/mes, Senior $8-15k/mes (USD). Freelance: Toptal, Turing, Arc (mais seletivos, pagam mais). LATAM premium: empresas dos EUA contratam BR por custo menor que US mas maior que India."
              },
              {
                "w": "Aprendizado continuo: como se manter atualizado sem burnout, curadoria de fontes",
                "s": "continuous learning developer | como se manter atualizado tech | tech newsletter podcast | avoiding tutorial fatigue",
                "d": "Nao tente aprender TUDO — selecione. Newsletters: TLDR, Bytes, This Week in ML. Podcasts: Lex Fridman, Hipsters.tech (BR). Twitter/X: siga pesquisadores e devs da sua area. 30min/dia de leitura > 8h de curso no fds. Aprenda o que PRECISA agora, nao o que e hype. T-shaped: profundo em 1 area, superficial em varias."
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
                "s": "developer to data scientist | transition to ML engineer | career change data science | dev to AI career",
                "d": "Skills que ja tem: programacao, SQL, lógica. Falta: estatistica, ML, ferramentas (pandas, sklearn, PyTorch). Caminho: curso de ML (Andrew Ng) > projetos Kaggle > portfolio com 3-5 projetos > aplicar pra ML Engineer. 6-12 meses de estudo focado."
              },
              {
                "w": "Dev > Security: como transicionar, certificacoes, portfolio",
                "s": "developer to security | career transition cybersecurity | dev to pentester | application security career",
                "d": "Vantagem: ja sabe codigo e arquitetura. Adicione: OWASP Top 10, TryHackMe/HTB, eJPT cert. AppSec: natural pra devs (code review + security). Bug bounty: portfolio pratico. 6-12 meses ate junior em seguranca."
              },
              {
                "w": "Dev > DevOps/SRE: como transicionar, skills, dia a dia",
                "s": "developer to DevOps SRE | career change DevOps | SRE transition developer | platform engineering career",
                "d": "Skills que ja tem: codigo, git, debug. Adicione: Linux avancado, Docker/K8s, CI/CD, cloud (AWS), Terraform, monitoring. SRE: foco em reliability (SLOs, incident response). Platform eng: ferramentas pra outros devs. Caminho: automatize o deploy do SEU projeto, depois expanda."
              },
              {
                "w": "Dev > Product Manager: como transicionar, skills, diferencial tecnico",
                "s": "developer to product manager | engineer to PM transition | technical product manager | career change PM",
                "d": "Dev que vira PM tem superpoder: entende trade-offs tecnicos, estima melhor, ganha respeito do time de eng. Skills novas: discovery, user interviews, metricas, priorizacao. Caminho: comece participando de product decisions no seu time. Leia Inspired (Cagan). Faca transicao interna (mais facil)."
              },
              {
                "w": "Trabalhar no exterior: visto, processo, empresas que patrocinam, relocation",
                "s": "work abroad developer | tech visa sponsorship | software engineer relocation | working abroad programmer",
                "d": "EUA: H-1B (loteria) ou L-1 (transferencia). Europa: Blue Card (Alemanha, facilidade). Canada: Express Entry (pontos). Portugal: visto D7 ou tech visa. Empresas que patrocinam: FAANG, startups em crescimento. Processo: aplicar > entrevista > oferta > visto > mudar. 3-12 meses de processo."
              },
              {
                "w": "Empreender em tech: quando sair do emprego, side project, validar ideia, bootstrapping",
                "s": "tech entrepreneurship when to quit | side project to startup | bootstrapping startup | validate startup idea",
                "d": "Nao largue o emprego pra empreender — comece como side project. Valide: alguem pagaria por isso? (pre-venda). MVP em 1-2 meses. Bootstrapping: crescer com receita propria (sem investidor). MicroSaaS: SaaS pequeno pra nicho (1 pessoa, $5-50k MRR). Indie hacker: comunidade de empreendedores solo."
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
                "s": "product discovery techniques | product roadmap prioritization | product metrics OKR | Product Discovery priorizacao tutorial portugues",
                "d": "Discovery: entrevistar usuarios. Priorizacao: RICE, MoSCoW. OKRs. Metricas: MAU, retention, NPS."
              },
              {
                "w": "1:1s, feedback, coaching, hiring, demissao",
                "s": "engineering manager 1on1 | giving feedback | technical hiring interview | feedback coaching hiring tutorial portugues",
                "d": "1:1 semanal. Feedback: SBI (Situacao-Comportamento-Impacto). Coaching > telling. Hiring: pair programming."
              },
              {
                "w": "Team Topologies, postmortems, cultura de engenharia",
                "s": "team topologies | blameless postmortems | engineering culture | Team Topologies postmortems tutorial portugues",
                "d": "Stream-aligned, platform, enabling, complicated-subsystem. Postmortem blameless. Cultura: safety psicologica."
              },
              {
                "w": "Comunicacao tecnica, ADRs, RFCs, documentacao",
                "s": "architecture decision records | RFC engineering | technical writing | Comunicacao tecnica ADRs tutorial portugues",
                "d": "ADR: registrar decisoes. RFC: propor mudancas. Docs: escrever pra quem nao tem contexto."
              },
              {
                "w": "Scaling teams: hiring pipeline, onboarding, cultura de engenharia",
                "s": "scaling engineering teams | engineering hiring pipeline | developer onboarding | Scaling teams hiring tutorial portugues",
                "d": "Hiring: job description clara > screening > coding challenge > system design > cultural fit. Onboarding: buddy system, documentacao, primeiro PR na primeira semana. Cultura: valores vividos no dia a dia, nao posters na parede."
              },
              {
                "w": "Budget, headcount, planejamento anual, ROI de projetos tecnicos",
                "s": "engineering budget planning | headcount planning | technical project ROI | Budget headcount planejamento tutorial portugues",
                "d": "Budget: quanto custa o time (salarios, infra, ferramentas). Headcount: quantas pessoas preciso? Justifique com impacto em metricas. ROI: este projeto de 3 meses gera quanto de valor? Falar a lingua do CFO."
              },
              {
                "w": "Arquitetura organizacional: Conway's Law, team topologies, platform teams",
                "s": "Conway's law team topologies | platform engineering team | organizational architecture | Arquitetura organizacional Conway's tutorial portugues",
                "d": "Conway's Law: arquitetura do sistema espelha a estrutura da organizacao. Team Topologies: stream-aligned, platform, enabling, complicated-subsystem. Platform team: ferramentas + infra pra outros times. Inverse Conway: estruture times pra obter a arquitetura desejada."
              },
              {
                "w": "Engineering metrics: DORA, SPACE, developer experience (DevEx)",
                "s": "engineering metrics DORA SPACE | developer experience DevEx | engineering productivity | Engineering metrics DORA tutorial portugues",
                "d": "DORA: deploy frequency, lead time, MTTR, change failure rate. SPACE: satisfaction, performance, activity, communication, efficiency. DevEx: como devs se SENTEM (surveys). Nao otimize metricas — otimize outcomes. Goodhart's law: metrica vira meta, deixa de ser boa metrica."
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
                "s": "tech lead vs engineering manager | tech lead responsibilities | IC vs manager career | Tech Lead Manager tutorial portugues",
                "d": "Tech Lead: lider tecnico, decide arquitetura, mentora, continua codando. Manager: gestao de pessoas, 1:1s, hiring. Algumas empresas separam, outras misturam. IC track: Junior > Mid > Senior > Staff > Principal."
              },
              {
                "w": "Tomada de decisao tecnica: ADRs, trade-offs, build vs buy",
                "s": "technical decision making ADR | build vs buy decision | engineering trade-offs | Tomada decisao tecnica tutorial portugues",
                "d": "ADR (Architecture Decision Record): documentar decisoes e POR QUE. Trade-offs: performance vs custo, velocidade vs qualidade, build vs buy. Sempre documente o contexto — voce futuro vai agradecer."
              },
              {
                "w": "Mentoria e coaching: crescer outros engenheiros, pair programming",
                "s": "engineering mentorship coaching | mentoring junior developers | pair programming benefits | Mentoria coaching crescer tutorial portugues",
                "d": "Mentoria: compartilhar experiencia. Coaching: fazer perguntas que levam a pessoa a descobrir sozinha. Pair programming: 2 devs, 1 teclado — transferencia de conhecimento. Code review como ferramenta de ensino."
              },
              {
                "w": "Comunicacao com stakeholders: traduzir tecnico pra negocio e vice-versa",
                "s": "technical communication stakeholders | communicating with non-technical | engineering leadership communication | Comunicacao stakeholders traduzir tutorial portugues",
                "d": "Stakeholder quer saber: quanto custa, quando fica pronto, qual o risco. Traduza: 'refatorar o monolito' = 'reduzir tempo de deploy de 2h pra 5min'. Use numeros, impacto em usuarios, custo de NAO fazer."
              },
              {
                "w": "Influencia sem autoridade: convencer, alinhar, resolver conflitos",
                "s": "influence without authority engineering | resolving technical disagreements | building consensus | Influencia autoridade convencer tutorial portugues",
                "d": "Nem sempre voce decide. Convenca com dados, prototipos, exemplos. Disagree and commit: discordou mas o time decidiu? Execute com energia. Conflitos tecnicos: foque no problema, nao na pessoa."
              },
              {
                "w": "Architecture reviews: como avaliar e dar feedback em propostas tecnicas, RFCs",
                "s": "architecture review RFC feedback | technical design review | RFC engineering process | architecture decision review",
                "d": "RFC: documento propondo mudanca tecnica. Reviewers: questionam trade-offs, riscos, alternativas. Boas perguntas: 'o que acontece se X falhar?', 'como escala pra 10x?', 'ja considerou Y?'. Feedback construtivo: 'E se...' > 'Isso ta errado'. Template: contexto, proposta, alternativas, decisao."
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
                "s": "software estimation techniques | story points estimation | cone of uncertainty | Estimativas story points tutorial portugues",
                "d": "Story points: esforco relativo (Fibonacci: 1,2,3,5,8,13). T-shirt: S/M/L/XL (mais rapido). PERT: (otimista + 4*provavel + pessimista)/6. Cone de incerteza: no inicio, estimativas erram 4x. Seja honesto sobre incerteza."
              },
              {
                "w": "Priorizacao: RICE, MoSCoW, Eisenhower, custo de atraso",
                "s": "prioritization RICE MoSCoW framework | feature prioritization | cost of delay | Priorizacao RICE MoSCoW tutorial portugues",
                "d": "RICE: Reach * Impact * Confidence / Effort. MoSCoW: Must/Should/Could/Won't. Eisenhower: urgente vs importante. Custo de atraso: quanto custa NAO fazer isso agora? Priorizar e dizer NAO pra quase tudo."
              },
              {
                "w": "Metricas de engenharia: DORA, lead time, deployment frequency, MTTR",
                "s": "DORA metrics engineering | lead time deployment frequency | engineering productivity metrics | Metricas engenharia DORA tutorial portugues",
                "d": "DORA: 4 metricas que predizem performance de times. Lead time: commit ate producao. Deploy frequency: quantas vezes por dia/semana. MTTR: tempo pra recuperar de falha. Change failure rate: % de deploys que causam problema."
              },
              {
                "w": "Postmortems blameless, incident management, on-call",
                "s": "blameless postmortem template | incident management process | on-call engineering | Postmortems blameless incident tutorial portugues",
                "d": "Postmortem: o que aconteceu, por que, como prevenir. BLAMELESS: foco no sistema, nao na pessoa. Incident: detectar > comunicar > mitigar > resolver > postmortem. On-call: rotacao, runbooks, alertas bem configurados."
              },
              {
                "w": "Technical debt: identificar, quantificar, negociar tempo pra pagar",
                "s": "technical debt management | managing technical debt | tech debt negotiation | Technical debt identificar tutorial portugues",
                "d": "Tech debt = atalhos que custam no futuro. Nem todo debt e ruim (startup precisa de velocidade). Quantifique: 'gastamos 30% do sprint em workarounds'. Negocie: 20% do sprint pra tech debt. Boy scout rule: deixe o codigo melhor do que encontrou."
              },
              {
                "w": "Stakeholder management: alinhar expectativas, dizer nao, negociar prazo/escopo",
                "s": "stakeholder management engineering | managing expectations PM | saying no stakeholders | scope negotiation engineering",
                "d": "Triangulo: escopo, prazo, qualidade — escolha 2. 'Sim, podemos fazer A e B no prazo, mas C fica pro proximo ciclo.' Dizer nao com dados: 'se adicionarmos isso, atrasa 2 semanas — vale?' Update semanal: 1 paragrafo de status. Nunca surpresa negativa: avise CEDO se vai atrasar."
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
                "s": "incident management war room | incident commander role | system outage response | Quando sistema room tutorial portugues",
                "d": "Incident commander: 1 pessoa lidera (decide, delega, comunica). War room: canal dedicado (Slack). Roles: IC (lidera), comms (atualiza stakeholders), tech (investiga/corrige). Status page: comunicar pro publico. Cadencia: update a cada 30min."
              },
              {
                "w": "Comunicacao de crise: status pages, transparencia, comunicar pra clientes e imprensa",
                "s": "crisis communication tech | status page incident | communicating outage customers | Comunicacao crise status tutorial portugues",
                "d": "Statuspage.io / Atlassian Status. Template: 'Estamos cientes de [problema]. Impacto: [quem afeta]. Estamos trabalhando em [acao]. Proximo update: [quando].' Transparencia > spin. Clientes perdoam falhas, nao mentiras. Post-mortem publico: constroi confianca."
              },
              {
                "w": "Data breach response: contencao, notificacao LGPD, comunicacao, remediacoes",
                "s": "data breach response plan | LGPD breach notification | data breach communication | Data breach response tutorial portugues",
                "d": "LGPD: notificar ANPD e titulares em prazo razoavel. Passos: conter > avaliar escopo > preservar evidencias > notificar legal > notificar afetados > remediar > postmortem. Nao destrua evidencias. Envolva juridico CEDO. Ter plano ANTES do breach acontecer."
              },
              {
                "w": "Postmortem blameless: o que aconteceu, timeline, root cause, action items",
                "s": "blameless postmortem template | incident postmortem writing | learning from failure | Postmortem blameless aconteceu tutorial portugues",
                "d": "Blameless: foco no SISTEMA, nao na PESSOA. Template: summary > timeline > root cause > contributing factors > impact > action items > lessons learned. 5 Whys: perguntar 'por que' 5 vezes. Publicar internamente. Action items com dono e prazo. Cultura de aprendizado."
              },
              {
                "w": "Simulacoes e game days: praticar incidentes antes que acontecam",
                "s": "incident simulation game day | chaos engineering game day | disaster recovery drill | incident response practice",
                "d": "Game day: simular incidente (ex: 'banco de dados caiu as 14h de terça'). Time pratica roles, comunicacao, procedimentos. Chaos engineering (Netflix): injetar falhas de proposito em producao. Roda de fogo: derrubar servico e ver se time recupera em X minutos. Praticar = resposta mais rapida quando for real."
              },
              {
                "w": "Disaster Recovery e Business Continuity: RTO, RPO, failover, runbooks",
                "s": "disaster recovery RTO RPO | business continuity planning | DR failover strategy | runbook incident response",
                "d": "RTO: tempo maximo pra restaurar (Recovery Time Objective). RPO: dados maximos que pode perder (Recovery Point Objective). Failover: automatico vs manual. Runbook: passo a passo documentado pra cada tipo de incidente. Backup: 3-2-1 (3 copias, 2 midias, 1 off-site). Testar DR regularmente!"
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
                "s": "product discovery user interviews | jobs to be done framework | rapid prototyping | Product Discovery entrevistar tutorial portugues",
                "d": "Nao construa o que o usuario PEDE — descubra o que ele PRECISA. Jobs-to-be-done: qual 'trabalho' o usuario contrata seu produto pra fazer? Prototipo: testar ideia antes de construir (Figma, papel, MVP)."
              },
              {
                "w": "Metricas de produto: MAU, DAU, retention, NPS, funnel, cohort",
                "s": "product metrics MAU retention NPS | product analytics funnel | cohort analysis | Metricas produto retention tutorial portugues",
                "d": "MAU/DAU: usuarios ativos. Retention: voltam depois de 7/30 dias? NPS: recomendaria? Funnel: onde usuarios desistem. Cohort: agrupar por data de entrada. North Star Metric: 1 metrica que resume o valor do produto."
              },
              {
                "w": "OKRs: Objectives and Key Results, alinhamento de time",
                "s": "OKR objectives key results | OKR engineering teams | goal setting framework | OKRs Objectives Results tutorial portugues",
                "d": "Objective: qualitativo, inspirador ('Ser referencia em onboarding'). Key Results: quantitativo, mensuravel ('Reduzir churn de 15% pra 8%'). Ciclo trimestral. Ambicioso (70% de atingimento = sucesso). Alinhar time com estrategia."
              },
              {
                "w": "A/B testing, feature flags, experimentacao orientada a dados",
                "s": "A/B testing product | feature flags LaunchDarkly | data driven decisions | testing feature flags tutorial portugues",
                "d": "A/B test: dividir usuarios em 2 grupos, medir diferenca. Feature flags: ligar/desligar funcionalidade sem deploy. Estatisticamente significante: precisa de volume. Decisoes baseadas em dados, nao em opiniao do HiPPO (Highest Paid Person's Opinion)."
              },
              {
                "w": "Product-Led Growth (PLG): free trial, freemium, viral loops, activation",
                "s": "product led growth PLG | freemium strategy | viral growth loops | Product-Led Growth free tutorial portugues",
                "d": "PLG: produto se vende sozinho (Slack, Figma, Notion). Freemium: gratis ate X, paga depois. Free trial: experimentar antes de comprar. Viral loop: usar > convidar > usar. Activation: momento aha! (Slack: 2000 mensagens = time fica). Onboarding e tudo."
              },
              {
                "w": "Roadmap: discovery > delivery, dual-track agile, opportunity solution tree",
                "s": "product roadmap dual track agile | opportunity solution tree | product discovery delivery | Roadmap discovery delivery tutorial portugues",
                "d": "Dual-track: discovery (o que construir?) + delivery (construir bem) em paralelo. Opportunity Solution Tree (Teresa Torres): outcome > opportunities > solutions > experiments. Roadmap baseado em outcomes, nao features. Evite 'feature factory'."
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
                "s": "one on one meetings engineering manager | 1on1 structure questions | effective 1:1 meetings | efetivos frequencia estrutura tutorial portugues",
                "d": "Semanal, 30min. DELES, nao seu. Perguntas: como voce ta? o que te bloqueia? como posso ajudar? O que voce quer aprender? Anote action items. Acompanhe na proxima. 1:1 e a ferramenta mais poderosa de um manager."
              },
              {
                "w": "Feedback: SBI, radical candor, feedback positivo e construtivo",
                "s": "giving feedback SBI model | radical candor feedback | engineering feedback | Feedback radical candor tutorial portugues",
                "d": "SBI: Situacao (quando/onde) > Comportamento (o que fez) > Impacto (resultado). Radical candor: care personally + challenge directly. Positivo: especifico e publico. Construtivo: privado, sobre comportamento (nao pessoa). Frequente > anual."
              },
              {
                "w": "Career development: career ladder, growth plans, promoções",
                "s": "career ladder engineering | growth plan developer | engineering promotion criteria | Career development career tutorial portugues",
                "d": "Ladder: Junior > Mid > Senior > Staff > Principal. Cada nivel: expectativas claras de scope, impacto, autonomia. Growth plan: gaps + acoes + timeline. Promocao: demonstre o nivel ANTES de ser promovido. Documente impacto."
              },
              {
                "w": "Demissao e performance management: PIPs, conversas dificeis",
                "s": "performance improvement plan PIP | firing engineering | difficult conversations manager | Demissao performance management tutorial portugues",
                "d": "Low performer: feedback claro > plano de melhoria (PIP) com prazo > se nao melhorar, desligar. Conversa dificil: seja direto, empático, factual. Demissao: rapida, respeitosa, sem surpresas. Restante do time: transparencia sem detalhes."
              },
              {
                "w": "Diversidade, inclusao, seguranca psicologica no time",
                "s": "diversity inclusion engineering teams | psychological safety team | inclusive engineering culture | Diversidade inclusao seguranca tutorial portugues",
                "d": "Diversidade: times diversos tomam decisoes melhores (pesquisa comprova). Inclusao: todos se sentem seguros pra contribuir. Seguranca psicologica (Edmondson): posso errar sem ser punido, posso discordar sem ser excluido. Leader modela: admita erros, peca opinioes."
              },
              {
                "w": "Gerenciar remotamente: async communication, rituais, trust",
                "s": "managing remote engineering teams | remote team rituals | async communication | Gerenciar remotamente async tutorial portugues",
                "d": "Async-first: escreva (nao reuna pra tudo). Documenter: decisions, discussions, context. Rituais: daily async standup, weekly video sync, monthly retrospective. Trust: output-based (nao hora-nalga). Fusos: respeite. Loneliness: coffee chats."
              },
              {
                "w": "Construir cultura de engenharia: valores, rituais, documentacao, knowledge sharing",
                "s": "engineering culture building | knowledge sharing engineering | engineering team rituals | Construir cultura engenharia tutorial portugues",
                "d": "Cultura = o que acontece quando ninguem ta olhando. Rituais: tech talks, demo days, hackathons internos, postmortems. Documentacao: ADRs, runbooks, onboarding guides. Knowledge sharing: guilds/chapters por interesse (frontend guild, ML chapter). Celebrar aprendizado, nao so entregas."
              },
              {
                "w": "Managing managers: skip-levels, alignment, developing leaders",
                "s": "managing engineering managers | skip level meetings | developing engineering leaders | Managing managers skip-levels tutorial portugues",
                "d": "Skip-level: conversar diretamente com ICs (1x/mes). Nao pra micromanage — pra sentir o pulso. Desenvolver managers: coaching, feedback, shadow. Alignment: seus managers precisam tomar decisoes que VOCE tomaria na ausencia. Delegate outcomes, nao tarefas."
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
                "s": "business models tech companies | SaaS marketplace revenue | how tech companies make money | Modelo negocios como tutorial portugues",
                "d": "SaaS: assinatura mensal (Slack, Notion). Marketplace: taxa sobre transacao (Uber, Airbnb). Ads: vender atencao (Google, Meta). Open-core: gratis + premium (GitLab, Elastic). Freemium: gratis ate X, paga depois. Entender o negocio = tomar decisoes melhores."
              },
              {
                "w": "Unit economics: CAC, LTV, MRR, ARR, churn, burn rate, runway",
                "s": "unit economics startup | CAC LTV MRR ARR | startup metrics financial | Unit economics churn tutorial portugues",
                "d": "CAC: quanto custa adquirir 1 cliente. LTV: quanto ele gera de receita total. LTV/CAC > 3 = saudavel. MRR: receita recorrente mensal. Churn: taxa de cancelamento. Burn rate: quanto gasta/mes. Runway: meses ate o dinheiro acabar."
              },
              {
                "w": "Empreendedorismo tech: MVP, validacao, pivot, fundraising, equity",
                "s": "tech startup MVP validation | startup fundraising equity | lean startup methodology | Empreendedorismo tech validacao tutorial portugues",
                "d": "MVP: versao minima pra testar hipotese. Validate: usuarios querem isso? pagariam? Pivot: mudar direcao (Instagram comecou como Burbn). Fundraising: pre-seed > seed > Series A/B/C. Equity: porcentagem da empresa. Vesting: 4 anos cliff 1 ano."
              },
              {
                "w": "Entender o mercado: TAM/SAM/SOM, concorrencia, moats, timing",
                "s": "TAM SAM SOM market sizing | competitive analysis | startup moat | Entender mercado TAM/SAM/SOM tutorial portugues",
                "d": "TAM: mercado total. SAM: segmento acessivel. SOM: fatia realista. Moat: vantagem competitiva (network effect, switching cost, brand, tech). Timing: cedo demais e tao ruim quanto tarde demais. Pesquise o mercado ANTES de construir."
              },
              {
                "w": "Due diligence tecnica: avaliar stack, debito tecnico, time, riscos",
                "s": "technical due diligence startup | evaluating engineering team | tech stack assessment | diligence tecnica avaliar tutorial portugues",
                "d": "Investidor/comprador quer saber: stack e moderna? Debito tecnico e gerenciavel? Time e retido? Tem testes? Tem CI/CD? Seguranca ok? Escalabilidade? Documentacao? IP: quem e dono do codigo? Como CTO/VP: prepare o time pra passar nessa avaliacao."
              },
              {
                "w": "Open source como estrategia: community, governance, monetizacao (open-core, SaaS)",
                "s": "open source business strategy | open core monetization | open source community building | Open source como tutorial portugues",
                "d": "Open-core: nucleo gratis, enterprise features pagas (GitLab, Elastic). SaaS hosted: versao gerenciada (MongoDB Atlas, Confluent Cloud). Community: contribuidores = evangelistas gratuitos. Governance: licenca, CoC, decision making. Risco: fork (Amazon vs Elastic)."
              }
            ]
          }
        ]
      }
    ]
  }
];
