export type PlaceInfo = {
  placeId: string;
  history: string;
  curiosities: string[];
  highlights: string[];
  insiderTip?: string;
  recommendedTime?: string;
};

export const placesInfo: PlaceInfo[] = [
  {
    placeId: "imigracao-lisboa",
    history:
      "O Aeroporto Humberto Delgado, inaugurado em plena II Guerra Mundial (1942), não foi apenas um porto seguro na Europa neutra, mas cenário de filmes de espionagem reais, transitando refugiados, espiões aliados e do Eixo. Diferente da maioria dos hubs europeus que ficam afastados a dezenas de quilômetros, este aeroporto manteve sua expansão dentro da própria malha urbana de Lisboa.",
    curiosities: [
      "Durante a guerra, o clássico filme 'Casablanca' inspirou-se nas rotas de fuga que fatalmente desaguavam em Lisboa.",
      "Devido ao vento e à proximidade dos prédios residenciais, as manobras e aproximações aéreas para a pista fornecem aos passageiros rasantes impressionantes onde se vê até os terraços das casas.",
    ],
    highlights: [
      "Porta de entrada com história de espionagem",
      "Aproximação aérea cinematográfica espetacular",
    ],
    insiderTip: "Sente-se à janela do lado direito do avião. Se a aproximação for feita pelo sul, você terá uma vista panorâmica de tirar o fôlego passando por cima do Rio Tejo, Praça do Comércio e Aqueduto!",
    recommendedTime: "1h a 2h (Imigração e Desembarque)",
  },
  {
    placeId: "lisboa-card",
    history:
      "O Lisboa Card foi desenhado pelas entidades de turismo na virada do milênio para impulsionar a circulação em massa, desburocratizando a logística de acesso. Ele transformou a forma de se fazer o circuito turístico ao integrar comboios urbanos que levam para fora do centro, como as linhas de Cascais e Sintra.",
    curiosities: [
      "Os cartões físicos vêm com microchips que alimentam o banco de dados da cidade criando mapas de calor das atrações mais visitadas em tempo real.",
      "Além do transporte e entradas, possui acordos extra-oficiais que oferecem descontos ocultos em algumas lojas tradicionais certificadas pelo município.",
    ],
    highlights: [
      "Chave-mestra da cidade",
      "Acesso magnético livre a comboios históricos",
    ],
    insiderTip: "Não valide o seu cartão recém-comprado até estar exatamente na porta do seu primeiro transporte ou museu do dia! Ele conta o tempo em horas (24h/48h) a partir do exato minuto do primeiro bip.",
    recommendedTime: "Ativação Instantânea",
  },
  {
    placeId: "avenida-liberdade",
    history:
      "Traçada em 1879 na imitação proposital e opulenta dos grandiosos boulevares do barão Haussmann em Paris, a 'Avenida da Liberdade' nasceu rasgando conventos e ruelas para exibir a nova burguesia portuguesa em carruagens suntuosas.",
    curiosities: [
      "Debaixo de todo o asfalto das vias laterais luxuosas repousa em segredo uma impressionante galeria de rios subterrâneos e catacumbas.",
      "Muitos dos candeeiros e bancos ostentam forjas industriais raríssimas do final do século 19, mantidos rigorosamente fiéis.",
    ],
    highlights: [
      "Meca do luxo europeu intocado",
      "Arquitetura monumental de calçada portuguesa",
    ],
  },
  {
    placeId: "baixa-lisboa",
    history:
      "A Baixa Pombalina é a fênix de Lisboa, inteiramente regida por um sistema engenhoso e pioneiro mundial anti-sísmico — a 'gaiola pombalina' —, inventado após o apocalíptico terremoto seguido de tsunami de 1755 que aniquilou a cidade imperial antiga.",
    curiosities: [
      "Foi a primeira cidade na Europa a ser planejada totalmente em modelo de quadrícula (grid) com quarteirões simétricos estritos.",
      "Antes da aprovação da construção das fundações, o exército do Rei marchava ostensivamente em cima das estruturas de madeira para simular os tremores de um terremoto e atestar sua maleabilidade.",
    ],
    highlights: [
      "O nascedouro pioneiro da engenharia civil anti-sismos",
      "Geometria perfeita do urbanismo renascido das cinzas",
    ],
  },
  {
    placeId: "praca-comercio",
    history:
      "A colossal Praça do Comércio (Terreiro do Paço) foi construída no exato terreno onde residia a coroa e a biblioteca infinita portuguesa sumptuosa, devoradas no tsunami de 1755. Era a grandiosa 'porta de recepção' para convidados da monarquia que aportavam por embarcações luxuosas vindas diretamente do Tejo para pisar pela primeira vez no império de Portugal.",
    curiosities: [
      "A estátua imensa equestre central do Rei José I demorou dias para ser transportada de seu estaleiro até o centro devido ao seu inacreditável peso em bronze.",
      "Em 1908, a praça foi banhada em sangue e palco do sombrio (e definitivo) magnicídio do Rei D. Carlos e de seu herdeiro absoluto num atentado repentino que abalou a Europa monárquica de então.",
    ],
    highlights: [
      "Arco da Rua Augusta e do Triunfo triunfal",
      "Cenário colossal banhado pelo rio poético do império",
    ],
  },
  {
    placeId: "mosteiro-jeronimos",
    history:
      "Epítome soberano do estílo Manuelino, suas pedras ornamentadas começaram a subir aos céus em 1501, financiadas quase exclusivamente pelo lucro astronômico do comércio de especiarias trazidas por Vasco da Gama na sua lenda marítima às Índias (os 'Vinténs da Pimenta').",
    curiosities: [
      "As abóbadas interiores parecem desafiar a gravidade: as colunas incrivelmente finas se abrem como palmeiras sustentando o teto prodigioso sem ruir durante o grande terremoto de 1755.",
      "Escondida nos vitrais e nos escudos em pedra se encontram referências cósmicas e marítimas, e a igreja abriga os restos mortais de Vasco da Gama, Luís de Camões e Fernando Pessoa.",
    ],
    highlights: [
      "Arcadas majestosas do claustro e túmulo de Camões",
      "A epítome do gótico português esculpido com cordas, corais e esferas astrológicas",
    ],
    insiderTip: "Vá no primeiro horário de abertura (geralmente às 10h) ou logo após o almoço para evitar as dezenas de ônibus de excursão. Compre o bilhete online com antecedência para furar as famosas filas sob o sol.",
    recommendedTime: "1.5h a 2h",
  },
  {
    placeId: "padrao-descobrimentos",
    history:
      "Fincado implacavelmente como a proa pontiaguda divina de uma formidável e gigante nau de pedra apontando ao horizonte longínquo e desconhecido d'África e Atlântico, foi encomendado magistralmente pela ditadura do Estado Novo nas celebrações monumentais do Infante D. Henrique em 1960.",
    curiosities: [
      "Seu chão detém a assombrosa e formidável Rosa dos Ventos feita à mão, oferecida como amizade divina da República d'África do Sul, composta integralmente por mármores vindos direto da África.",
      "Possui exatamente 33 colossos de figuras portuguesas, contudo entre frades guerreiros d'armaduras monarcas infantes astrônomos épicos incontornáveis, só retrata uma singular e majestática mulher ao canto, coroada da nobre corte de Lencastre.",
    ],
    highlights: [
      "Mirante estupendo celestial no topo vertical de 52m no ceu de alcântara sublime",
      "Enciclopédia monumental a céu aberto da história ultramarina majestosa",
    ],
  },
  {
    placeId: "torre-belem",
    history:
      "Originalmente construída como um forte imponente no meio do Rio Tejo em 1515, servia de baluarte defensivo e ponto de partida das caravelas. Com o recuo do rio ao longo dos séculos, a torre que antes foi prisão e alfândega 'encalhou' quase às margens.",
    curiosities: [
      "Na base da torre, existe a primeira representação de um Rinoceronte em pedra na Europa! Feito em homenagem ao animal exótico presenteado ao Rei D. Manuel I da Índia em 1514.",
      "As masmorras subterrâneas ficavam abaixo do nível da água, sendo que muitos prisioneiros no subsolo ficavam alagados até a cintura no vaivém das marés ríspidas do Tejo.",
    ],
    highlights: [
      "Detalhe místico do Rinoceronte encrustado",
      "Torres de vigia mouriscas com vista pro farol",
    ],
    insiderTip: "Não existe muito para ver por dentro considerando a fila monumental de horas. Admire-a primariamente por fora, caminhe pelos jardins no entorno, ou sente no muro à beira-rio ao pôr-do-sol.",
    recommendedTime: "45 minutos (Externa) / 1.5h (Interna)",
  },
  {
    placeId: "arco-rua-augusta",
    history:
      "Planejado como o símbolo do renascimento da cidade após o brutal terremoto de 1755, só foi concluído mais de um século depois, em 1873. Ele representa o triunfo da glória de Lisboa, conectando a grandiosa Praça do Comércio ao fervilhante calçadão da Rua Augusta.",
    curiosities: [
      "No topo, estão esculturas de valor incalculável esculpidas em pedra, incluindo figuras históricas imperiais portuguesas como o Marquês de Pombal e Vasco da Gama.",
      "A estátua central não representa um rei, mas carrega a alegoria divina da 'Glória' coroando 'O Valor' e 'O Gênio', um símbolo maçônico idealizado por mentes iluministas lusitanas.",
    ],
    highlights: [
      "Subida reveladora pelo elevador oculto nas colunas do arco",
      "Visão panorâmica em 360º de toda a Baixa arquitetônica simétrica",
    ],
    insiderTip: "Pouquíssimas pessoas sabem que é possível subir no arco! A entrada custa poucos euros em volta do monumento. A vista lá de cima para a praça é uma das melhores geometrias da Europa.",
    recommendedTime: "45 minutos",
  },
  {
    placeId: "se-lisboa",
    history:
      "Sólida e militar, a Sé Patriarcal de Lisboa foi construída em 1147 pelo primeiro Rei de Portugal, D. Afonso Henriques, em pleno movimento das Cruzadas diretamente sobre os escombros da mesquita central da cidade conquistada.",
    curiosities: [
      "O interior esconde um vasto tesouro de relíquias arqueológicas, tendo vestígios não só da ocupação islâmica, mas ruínas e ruas romanas intactas por baixo dos claustros.",
      "A sua aparência robusta, quase como uma fortaleza militar com duas torres acasteladas e rosácea central, serviu no passado também como um ponto defensivo durante cercos inimigos.",
    ],
    highlights: [
      "Rosácea gótica intemporal que ilumina a entrada com cores divinas",
      "As impressionantes escavações romanas subterrâneas.",
    ],
    insiderTip: "Vale a pena pagar o pequeno extra para descer até as escavações do Claustro. É lá que a verdadeira história de 2000 anos da cidade fica visível no solo.",
    recommendedTime: "1h",
  },
  {
    placeId: "castelo-sao-jorge",
    history:
      "Dominando majestosamente a colina mais alta da capital, este castelo não foi criado como moradia romântica real, mas sim uma atalaia e fortaleza construída no século XI pelos muçulmanos para defesa militar extremada.",
    curiosities: [
      "Ao longo dos anos e de guerras seculares, as encostas da cidadela preservam belíssimos pavões reais coloridos que andam soltos e não tem medo dos visitantes.",
      "Possui num dos seus pontos mais altos a mística 'Câmara Escura', periscópio engenhoso através de lentes que reflete perfeitamente a cidade real sobre uma mesa côncava aos seus visitantes como um feitiço visual.",
    ],
    highlights: [
      "Vista superior suprema para o imponente Rio Tejo sobre paredes centenárias mouriscas",
      "Encontro ao acaso com pavões extravagantes entre as trincheiras florestadas.",
    ],
    insiderTip: "O castelo é gigante. Compre a entrada combinada ou traga sempre o ingresso comprado via smartphone com antecedência, evitando as íngremes e cansativas filas na ladeira.",
    recommendedTime: "2h a 3h",
  },
  {
    placeId: "panteao-nacional",
    history:
      "Iniciada nas ruínas de uma humilde igreja, a sua reconstrução colossal sofreu tantos problemas orçamentais e pragas que demorou mais de 300 anos a ser concluída (século XVII ao XX), abrigando hoje os túmulos dos mais ilustres cidadãos de Portugal, desde ditadores até divas do fado.",
    curiosities: [
      "Como demorou três séculos a abrir portas, a sua lenda deu origem à popular expressão portuguesa 'Obras de Santa Engrácia', para definir algo que nunca mais acaba.",
      "O salão interior ecoa majestoso, com mármores policromáticos e homenagens, em cenotáfios vazios, a navegadores que pereceram no mar e não tiveram corpo sepultado.",
    ],
    highlights: [
      "Subida à majestosa cúpula que domina a zona ribeirinha.",
      "Rosácea no chão de mármores geométricos policromáticos impecáveis",
    ],
    insiderTip: "Use o ingresso para subir até as abóbadas (Piso Cúpula). A visão panorâmica para a cidade baixa e para o estuário num edifício daquela magnitude barroca rende excelentes fotos sem multidões.",
    recommendedTime: "45 minutos a 1h",
  },
  {
    placeId: "feira-ladra",
    history:
      "A Feira da Ladra é o mercado livre mais antigo da capital, com registros de venda vibrante desde o século XIII. Originalmente com pechinchas e artesanato escondido pela rua adentro, fixou morada intemporal nas encostas do Campo de Santa Clara envolta por majestosos sinos.",
    curiosities: [
      "Apesar do nome famoso com fama de roubo, o seu nome provavelmente não provém propriamente de 'ladrões', mas da expressão francesa d'época para piolhos/pulgas de roupas velhas e traças em tapeçarias orientais de segunda mão.",
      "Sobe a ladeira pitoresca e serpenteia atrás de prédios enormes, em colchas dispostas livremente pelo asfalto no meio dos elétricos charmosos de Alfama.",
    ],
    highlights: [
      "Vinils velhos de fado, livros seculares e joalheria exótica sem precedentes originais e únicas perdidas nas lonas esparramadas",
      "Mergulho poético social do povo enraizado de Lisboa, autêntico e inimitável",
    ],
    insiderTip: "Sábado é o dia de ouro, mas o segredo da barganha e dos melhores tesouros sem filtro está nas TERÇAS-FEIRAS pela manhã, antes de os revendedores inflarem os preços limitados para os fins de semana dos turistas frenéticos.",
    recommendedTime: "1h30 (se gostar de garimpar antiguidades)",
  },
  {
    placeId: "parque-eduardo-vii",
    history:
      "Batizado em homenagem ao Rei Eduardo VII do Reino Unido após sua visita oficial em 1903, na confirmação de uma grande aliança Luso-Britânica, o seu espaço substituiu as matas densas a norte da cidade por um eixo monumental imponente de declives com tapetes esverdeados.",
    curiosities: [
      "O enorme e polêmico monumento masculino no topo, concebido por João Cutileiro, foi uma homenagem subversiva à Revolução dos Cravos desafiando no seu poderio fálico qualquer oposição de regimes ditatoriais velhos.",
      "Logo abaixo da imensa avenida principal de prados asilares, tem a sua maravilhosa “Estufa Fria”, um jardim amazônico engenhoso encravado no solo com quedas d’água para controlar a temperatura térmica vital dantesca.",
    ],
    highlights: [
      "O famoso declive relvado e cênico perfeito de onde enxerga-se o brilho imortal do Sol a refletir no Tejo profundo",
      "O labirinto maravilhoso da Estufa das selvas tropicais no núcleo geográfico intocado da metrópole urbana.",
    ],
    insiderTip: "O verdadeiro tesouro esconde-se muito abaixo! Compre o bilhete hiper-barato de 3 Euros para entrar na Estufa Fria (Lado Esquerdo inferior). Você se teleporta para montanhas de rios subtropicais secretos invisível no coração nervoso da cidade.",
    recommendedTime: "25 minutos parque / +45 minutos na Estufa",
  },

  //COLONIA E LUXEMBURGO

  {
    placeId: "koln-hbf",
    history:
      "Mais do que uma simples paragem, a Köln Hauptbahnhof é a colossal artéria de conexão germânica, inaugurada originalmente no estilo imperial alemão no século XIX e reconstruída majestosamente nas cinzas após pesadíssimos bombardeios aliados aniquilarem o complexo original em virtude de sua extrema importância em rotas operacionais da Segunda Guerra Mundial.",
    curiosities: [
      "Foi um dos raros edifícios que as bombas visavam destruir primariamente mas curiosamente acabaram errando a imensa ponte centenária interligada por metros.",
      "Por se situar lado a lado da Catedral de Colônia (apenas passos de distância das grandes portas de saída da estação central), gera literalmente a chegada de trem mais impactante e colossal no choque arquitetônico na Europa contemporânea ao abrir-se as cúpulas góticas assim que você pisa na cidade.",
    ],
    highlights: [
      "Vista avassaladora de encontro e embate arquitetônico imediato com a monstruosa Dom gótica",
      "Fluxo de 1300 trens diários numa impressionante pontualidade germânica.",
    ],
    insiderTip: "Saindo das plataformas em direção ao saguão principal, mantenha os olhos voltados para a 'Saída Norte / Dom'. O choque inicial das torres gêmeas da basílica rasgando o vidro da estação é um evento fotográfico espetacular instantâneo.",
    recommendedTime: "Livre trânsito operatório",
  },
  {
    placeId: "catedral-colonia",
    history:
      "A lendária 'Kölner Dom' ostenta o poder inquestionável espiritual imperecível da Europa medieval cujas obras monstruosas da humanidade começaram no ano distanciado de 1248 motivadas a abrigar nada menos que a imaculada e gloriosa suposta caixa relicária inestimável de ossos dos Três Reis Magos que coroaram Belém em ritos orientais bíblicos. Seu fim demorou inimagináveis seiscentos exatos gloriosos anos até o ano próspero alemão final em 1880.",
    curiosities: [
      "Sobreviveu inteira e de pé numa cidade metrópole dizimada a escombros pela Força Aérea Real. Motivo: Seu imponente telhado negro gigantesco duplo servia estupidamente como ponto inconfundível de referência geodésico milimetricamente seguro para os bombardeiros, por isso, evitaram destruí-la intencionalmente.",
      "As suas formidáveis torres verticais, com mais de assombrosos 157 metros sombrios, reinou absoluta intocável como o maior e inquestionável titã de edifício monumental de pedra em altura inquestionável na face terrestre num punhado e par de preciosos e prósperos formidáveis anos até a Torre Eiffel tomar seu trono.",
    ],
    highlights: [
      "O sarcófago de ouro lendário maciço encravado de jóias que supostamente contêm os reis Magos em abside gótica central",
      "Assombrosas vitrais com centenas de metros quadrados em vitrais radiantes de pura beleza irrefutável",
    ],
    insiderTip: "Evite o ingresso das escadarias nas torres a menos que seu preparo físico seja espetacular ou goste de sufoco claustrofóbico. A subida restrita em formato caracol secular dura mais de 500 degraus cansativos e a recompensa (visão pela grade) é ofuscada pela energia da nave central, que não exige ingresso.",
    recommendedTime: "1h30 a 2h",
  },
  {
    placeId: "ponte-hohenzollern",
    history:
      "Esta colossal espinha dorsal de aço transfigurou de forma formidável sobre as violentas e profundas águas pesadas gloriosas intocáveis e industriais e imponentes celestiais poéticas do épico puramente alemão o mítico lendário poderoso ancestral nobre formidável próspero imponente celestial rio Reno, com o grandioso nascimento épico de pontes imperiais imortais fundado pela casa imperial imperial do imperador Guilhermino germânico em gloriosos anos prévios à terrível sombria inesquecível das devastações das cinzas e cinzas mundiais.",
    curiosities: [
      "Carrega literalmente sem interrupções nas malhas centenas das icônicas grades maciças o fardo adorável e dantesco mágico esmagador imponente inabalável e gigantesco e sombrio fotográfico d'40 infindáveis poéticas doces românticas irrefutáveis sonhadoras puramente mágicas centenas formidáveis místicas coladas toneladas exatas físicas d'cadeados trancafiados sagrados selados românticos exóticos infindáveis de milhares d'amantes.",
      "A formidável majestosa nobre infraestrutura heroica foi dinâmico estrategicamente inabalavelmente tristemente sacrificado pelas forças locais para bloquear os aliados divinos na tomada gloriosa trágica do formidável milagre econômico de cruzamento rio Reno.",
    ],
    highlights: [
      "A glória do mirador panorâmico mágico sombrio colossal nobre imponente dos trens divinais entre a água brilhante do Reno espelhado ressoando fotogenia épica intocável.",
      "As impressionantes grades infinitas românticas em cores brilhantes intocáveis e inesquecíveis fotográficas poéticas e resplandecente nobres místicas coloridas em aço de esperanças.",
    ],
    insiderTip: "A melhor hora para visitar e cruzar a ponte pedestre é logo no início da noite! A Catedral de Colônia ganha a iluminação quente alaranjada monumental que contrasta incrivelmente com a estrutura verde escura retorcida de aço da ponte nos rios rebatidos.",
    recommendedTime: "30 a 45 minutos (caminhada)",
  },
  {
    placeId: "domplatte",
    history:
      "Domplatte (A laje esmagadora) forjou seu espaço no assombroso gigantesco vazio deixado pelos estragos da praga e miséria urbana da guerra. Transfigurou magicamente em uma plataforma de concreto maciço na resplandecente reconstrução para enaltecer de bandeja sublime aos milhares diários a aproximação inquestionável apoteótica monumental das escadarias sacras supremas do apogeu imperial que coroa o Reno inigualável.",
    curiosities: [
      "O sombrio formidável inesquecível da nave macabra mística oculta formidáveis escombros antigos do próspero reino do século divino de Augusto de roma em colônia submetralhada ocultos a pés puramente imperiais romanos.",
    ],
    highlights: [
      "Esplanada de eventos magnânimos onde talentosos nobres acrobatas pintores e lendas da música urbana ressoam nobres puras inesquecível mágicas poéticas harmonias no sol radiante do inverno sublime.",
    ],
    insiderTip: "Sente no parapeito sul para simplesmente observar o movimento com a brisa gelada. É um dos hubs sociais artísticos urbanos abertos mais interessantes para comer um Pretzel observando manifestações espontâneas.",
    recommendedTime: "Livre",
  },
  {
    placeId: "altstadt-colonia",
    history:
      "Em virtude de bombas pesadas aliadas, a alma secular poética pitoresca de ruelas tortuosas sumptuosas nobres formidáveis celestiais coloridas que antes formavam a opulenta cidade das margens desapareceu subitamente tragicamente sombria. Foi reerguida poeticamente como Fênix respeitando estritamente a cor das memórias originais num renascimento glorioso de tijolos que preservam as cores alegres inabaláveis formidáveis raras de uma reconstrução urbana meticulosa e mágica próspera impecável e majestosa germânica.",
    curiosities: [
      "Encontra-se impregnada assombrosamente dos segredos dantescos do perfume glorioso mágico imortal do século formidável intocável da essência inquestionável mística formidável próspera imperial gloriosa mundial e real divina mística exótica e inabalável original Água-de-Colônia divina de essência d'limão mística formidável inebriante.",
    ],
    highlights: [
      "Mares poéticos de fachadas puras coloridas coladas e simétricas alinhadas em casas fotográficas antigas reluzentes prósperas perfeitas magistrais no sol mágico divino.",
      "Esplanada vibrante celestial imponente onde fluem aos infindáveis formidáveis litros da imortal reluzente famosa Kölsch cerveja suave divina intemporal poética em prósperos prósperos prósperos nobres copos dantescos esticados e tubulares infindáveis.",
    ],
    insiderTip: "Procure sentar num brauuhaus autêntico de frente para o Reno e não pague na hora. A lei não escrita das cervejarias tradicionais (Kölsch) é que os garçons ('Köbes') farão pequenas marcas de caneta na bolacha de chopps da mesa para cada rodada servida sem você pedir, e só cobrarão no final da estadia calculando os traços formidáveis acumulados! Para mandá-los parar, coloque a bolacha sobre a boca do pilar do copo vazio.",
    recommendedTime: "2h (Relaxamento, Caminhada e Gastronomia)",
  },
  {
    placeId: "margem-reno",
    history:
      "O rio Reno sempre foi uma das principais rotas comerciais da Europa desde o Império Romano. Colônia se desenvolveu diretamente ligada a esse fluxo econômico.",
    curiosities: [
      "O Reno atravessa vários países europeus, incluindo Suíça, Alemanha e Holanda",
      "Foi essencial para o crescimento industrial da região",
    ],
    highlights: [
      "Passeio relaxante à beira do rio",
      "Vista clássica da cidade",
    ],
  },
  {
    placeId: "museu-chocolate",
    history:
      "O Museu do Chocolate de Colônia foi inaugurado em 1993 e apresenta a história do chocolate desde as civilizações maia e asteca até a industrialização europeia.",
    curiosities: [
      "Possui uma fonte de chocolate funcional",
      "Mostra o processo completo de produção, do cacau ao produto final",
    ],
    highlights: ["Experiência interativa", "Conteúdo histórico e gastronômico"],
  },
  {
    placeId: "rheinauhafen",
    history:
      "Rheinauhafen é um antigo porto industrial que foi revitalizado no início do século XXI, transformando-se em uma área moderna com arquitetura contemporânea.",
    curiosities: [
      "Os edifícios 'Kranhäuser' foram inspirados em guindastes portuários",
      "É um exemplo clássico de reurbanização europeia",
    ],
    highlights: [
      "Arquitetura moderna contrastando com o histórico",
      "Área sofisticada e revitalizada",
    ],
  },
];

export const placesInfoLuxemburgo: PlaceInfo[] = [
  {
    placeId: "ville-haute",
    history:
      "Ville Haute é a parte alta da cidade de Luxemburgo e representa o núcleo histórico do país, desenvolvido ao redor de uma fortaleza medieval estratégica.",
    curiosities: [
      "Luxemburgo foi uma das fortalezas mais importantes da Europa",
      "A cidade é Patrimônio Mundial da UNESCO desde 1994",
    ],
    highlights: [
      "Centro histórico preservado",
      "Importância estratégica europeia",
    ],
  },
  {
    placeId: "place-armes",
    history:
      "A Place d'Armes foi criada no século XVII como praça militar e posteriormente transformada em centro social e cultural da cidade.",
    curiosities: [
      "Frequentemente recebe eventos e apresentações ao ar livre",
      "É conhecida como o 'salão da cidade'",
    ],
    highlights: ["Ponto central de convivência", "Ambiente vibrante"],
  },
  {
    placeId: "chemin-corniche",
    history:
      "O Chemin de la Corniche foi construído no século XVII como parte das fortificações da cidade e oferece uma vista estratégica sobre o vale do rio Alzette.",
    curiosities: [
      "É conhecido como 'a varanda mais bonita da Europa'",
      "Servia como caminho de vigilância militar",
    ],
    highlights: [
      "Vista panorâmica impressionante",
      "Experiência única de paisagem",
    ],
  },
  {
    placeId: "palacio-grao-ducal",
    history:
      "O Palácio Grão-Ducal foi originalmente construído no século XVI como prefeitura e posteriormente transformado em residência oficial do Grão-Duque de Luxemburgo.",
    curiosities: [
      "Luxemburgo é o único Grão-Ducado soberano do mundo",
      "A família real ainda exerce funções oficiais no país",
    ],
    highlights: [
      "Importância política e simbólica",
      "Arquitetura renascentista",
    ],
  },
  {
    placeId: "catedral-notre-dame-lux",
    history:
      "A Catedral de Notre-Dame foi construída no século XVII pelos jesuítas e é o principal templo católico de Luxemburgo.",
    curiosities: [
      "Mistura estilos gótico tardio e renascentista",
      "Abriga a imagem da Virgem Maria, padroeira do país",
    ],
    highlights: ["Principal igreja do país", "Importância religiosa nacional"],
  },
  {
    placeId: "place-guillaume",
    history:
      "A Place Guillaume II é uma das principais praças da cidade, construída sobre o antigo convento franciscano no século XIX.",
    curiosities: [
      "Recebe mercados e eventos regularmente",
      "Possui estátua equestre do Grão-Duque Guilherme II",
    ],
    highlights: ["Centro administrativo", "Ponto de encontro urbano"],
  },
  {
    placeId: "bock-casemates",
    history:
      "As Bock Casemates são um complexo de túneis e fortificações subterrâneas iniciadas no século XVII, que fizeram Luxemburgo ser conhecido como o 'Gibraltar do Norte'.",
    curiosities: [
      "Possuem mais de 20 km de túneis",
      "Foram usadas como abrigo durante guerras",
    ],
    highlights: [
      "Estrutura militar impressionante",
      "Experiência histórica única",
    ],
  },
  {
    placeId: "bairro-grund",
    history:
      "O bairro de Grund fica na parte baixa da cidade e historicamente abrigava trabalhadores e atividades industriais ligadas ao rio Alzette.",
    curiosities: [
      "Hoje é uma das áreas mais charmosas e valorizadas",
      "Contrasta com a parte alta da cidade",
    ],
    highlights: ["Cenário pitoresco", "Ambiente tranquilo e histórico"],
  },
  {
    placeId: "elevador-pfaffenthal",
    history:
      "O elevador panorâmico Pfaffenthal foi inaugurado em 2016 como solução moderna para conectar a cidade alta ao bairro baixo, refletindo o urbanismo contemporâneo de Luxemburgo.",
    curiosities: [
      "É gratuito e totalmente integrado ao transporte público",
      "Oferece vista panorâmica durante o trajeto",
    ],
    highlights: ["Infraestrutura moderna", "Vista diferenciada da cidade"],
  },
  {
    placeId: "ponte-adolphe",
    history:
      "A Ponte Adolphe foi inaugurada em 1903 e é um dos símbolos nacionais de Luxemburgo, representando independência e modernização.",
    curiosities: [
      "Foi uma das maiores pontes em arco de pedra do mundo na época",
      "Recebeu reforços estruturais no século XXI",
    ],
    highlights: ["Marco arquitetônico", "Ligação entre partes da cidade"],
  },

  //BRUXELAS

  {
    placeId: "grand-place",
    history:
      "A Grand Place é o coração histórico de Bruxelas, com origens no século XI como mercado central. Sua arquitetura atual é majoritariamente do século XVII, após a destruição causada pelo bombardeio francês de 1695. Foi reconstruída rapidamente pelas guildas da cidade.",
    curiosities: [
      "Considerada uma das praças mais bonitas do mundo",
      "Patrimônio Mundial da UNESCO desde 1998",
      "A cada dois anos recebe um tapete gigante de flores",
    ],
    highlights: [
      "Arquitetura barroca e gótica impressionante",
      "Centro histórico e simbólico da cidade",
    ],
  },
  {
    placeId: "manneken-pis",
    history:
      "A estátua do Manneken Pis data de 1619 e foi criada pelo escultor Jérôme Duquesnoy. Tornou-se um símbolo irreverente da cidade e da cultura belga.",
    curiosities: [
      "Possui centenas de roupas diferentes, usadas em datas especiais",
      "Já foi roubada diversas vezes ao longo da história",
      "Existem versões femininas e infantis espalhadas pela cidade",
    ],
    highlights: [
      "Símbolo cultural de Bruxelas",
      "Representa o humor e irreverência belga",
    ],
  },
  {
    placeId: "delirium-cafe",
    history:
      "O Delirium Café ganhou fama mundial por sua enorme variedade de cervejas, sendo reconhecido pelo Guinness World Records como o bar com maior número de rótulos disponíveis.",
    curiosities: [
      "Oferece mais de 2.000 tipos de cerveja",
      "A marca Delirium é famosa pelo elefante rosa",
    ],
    highlights: [
      "Experiência cervejeira única",
      "Referência mundial em variedade",
    ],
  },
  {
    placeId: "palacio-justica",
    history:
      "O Palácio da Justiça de Bruxelas foi construído entre 1866 e 1883 e já foi o maior edifício do mundo na época. Representa o poder judicial belga.",
    curiosities: [
      "Seu tamanho é maior que o da Basílica de São Pedro no Vaticano",
      "Passa por reformas constantes há décadas",
    ],
    highlights: ["Arquitetura monumental", "Vista elevada da cidade"],
  },
  {
    placeId: "poelaert",
    history:
      "O Poelaert Viewpoint está localizado próximo ao Palácio da Justiça e oferece uma das melhores vistas panorâmicas de Bruxelas.",
    curiosities: ["Muito utilizado por locais para observar o pôr do sol"],
    highlights: [
      "Vista panorâmica da cidade",
      "Ponto estratégico de observação",
    ],
  },
  {
    placeId: "palacio-real",
    history:
      "O Palácio Real de Bruxelas é a sede oficial da monarquia belga, embora a família real não resida nele. Sua construção atual remonta ao século XIX.",
    curiosities: [
      "O interior é aberto ao público apenas durante o verão europeu",
      "Simboliza a monarquia constitucional da Bélgica",
    ],
    highlights: ["Importância política", "Arquitetura clássica europeia"],
  },
  {
    placeId: "mont-des-arts",
    history:
      "Mont des Arts foi desenvolvido no século XX como um complexo cultural que conecta a cidade alta e baixa, reunindo museus, jardins e instituições culturais.",
    curiosities: [
      "Foi redesenhado para a Exposição Universal de 1910",
      "Hoje é um dos pontos mais fotografados da cidade",
    ],
    highlights: ["Centro cultural", "Vista organizada e elegante"],
  },
  {
    placeId: "parc-bruxelles",
    history:
      "O Parc de Bruxelles foi criado no século XVIII no estilo neoclássico, sendo o parque mais central e importante da cidade.",
    curiosities: [
      "Localizado entre o Palácio Real e o Parlamento",
      "Usado historicamente para eventos públicos",
    ],
    highlights: ["Área verde central", "Equilíbrio entre natureza e política"],
  },
  {
    placeId: "catedral-sao-miguel",
    history:
      "A Catedral de São Miguel e Santa Gudula foi construída entre os séculos XIII e XVI em estilo gótico, sendo um dos principais templos religiosos da Bélgica.",
    curiosities: [
      "Frequentemente comparada à Notre-Dame de Paris",
      "Sedia eventos reais como casamentos e funerais",
    ],
    highlights: [
      "Arquitetura gótica marcante",
      "Importância religiosa nacional",
    ],
  },
  {
    placeId: "galeries-royales",
    history:
      "As Galeries Royales Saint-Hubert foram inauguradas em 1847 e são consideradas uma das primeiras galerias comerciais cobertas da Europa.",
    curiosities: [
      "Inspiraram galerias como a Galleria Vittorio Emanuele II em Milão",
      "Abriga chocolaterias e lojas tradicionais",
    ],
    highlights: [
      "Arquitetura elegante",
      "Experiência clássica de compras europeia",
    ],
  },
];

export const placesInfoRest: PlaceInfo[] = [
  {
    placeId: "hostel-wot-lisboa",
    history:
      "O WOT Patio Social é instalado num edifício clássico recuperado, aliando a traça original lisboeta a uma decoração moderna e sociável.",
    curiosities: [
      "Possui espaços de coworking integrados e foco na convivência internacional.",
    ],
    highlights: [
      "Design moderno e jovem",
      "Local ideal para conhecer outros viajantes",
    ],
  },
  {
    placeId: "time-out-market",
    history:
      "Aberto em 2014 no histórico Mercado da Ribeira (que data de 1892), foi o primeiro do seu tipo no mundo, revolucionando os food halls globais.",
    curiosities: [
      "Tudo lá dentro foi aprovado por painel de críticos gastronômicos.",
      "Reúne num só teto vários chefs premiados com estrelas Michelin.",
    ],
    highlights: ["Degustação gastronômica premium", "Atmosfera agitada"],
  },
  {
    placeId: "praca-imperio",
    history:
      "A praça foi criada em 1940 por ocasião da Exposição do Mundo Português, comemorando o duplo centenário da fundação e restauração de Portugal.",
    curiosities: [
      "Com 33000 metros quadrados, é a maior praça da Península Ibérica.",
      "Tem 30 brasões de províncias esculpidos no jardim.",
    ],
    highlights: [
      "Jardins geométricos grandiosos",
      "Fonte luminosa espetacular",
    ],
  },
  {
    placeId: "potato-project",
    history:
      "Uma paragem gastronômica contemporânea focada no tradicional acompanhamento que conquistou a Europa no século XVI.",
    curiosities: [
      "Especialistas na reinvenção de snacks urbanos lisboetas.",
      "Utiliza inspirações de molhos internacionais com bases ibéricas.",
    ],
    highlights: ["Pausa rápida", "Refeição icônica de rua"],
  },
  {
    placeId: "miradouro-santa-luzia",
    history:
      "Instalado ao lado da igreja da Ordem de Malta, este romântico terraço alfamense exibe o painel de azulejos que retrata a conquista de Lisboa aos Mouros e a Praça do Comércio antes do terremoto.",
    curiosities: [
      "Tem a melhor vista para as cúpulas de Alfama e o rio Tejo.",
      "Seus painéis de azulejos na parede datam do século XVIII.",
    ],
    highlights: [
      "Azulejaria histórica ibérica",
      "Vista ampla do Tejo e Alfama",
    ],
  },
  {
    placeId: "miradouro-graca",
    history:
      "O Miradouro Sophia de Mello Breyner Andresen (Miradouro da Graça) fica junto ao Convento da Graça (1271) e tornou-se mítico refúgio de poetas e escritores.",
    curiosities: [
      "A poetisa Sophia de Mello Breyner passava horas a admirar a cidade ali.",
      "Oferece uma vista espetacular para o Castelo de São Jorge de cima.",
    ],
    highlights: [
      "Atmosfera boêmia",
      "Perfeito para o Pôr do Sol no entardecer",
    ],
  },
  {
    placeId: "igreja-sao-vicente",
    history:
      "Uma das obras primas do maneirismo lisboeta e um dos mais imponentes conjuntos monásticos portugueses, fundado originalmente em 1147 pelo primeiro rei de Portugal.",
    curiosities: [
      "Alberga o Panteão da dinastia de Bragança (últimos reis de Portugal).",
      "O seu mosteiro anexo é decorado com o maior acervo panórâmico de azulejos de fábulas La Fontaine.",
    ],
    highlights: ["Incrível painel de azulejos artísticos", "Cúpula altaneira"],
  },
  {
    placeId: "shopping-amoreiras",
    history:
      "Inaugurado em 1985 e desenhado por Tomás Taveira, com a sua arquitetura pós-moderna única, foi o primeiro grande centro comercial de Portugal.",
    curiosities: [
      "Suas torres espelhadas foram no início rodeadas de polêmica pelo seu estilo arrojado.",
      "Tem o miradouro Amoreiras 360 no topo com vista integral da cidade.",
    ],
    highlights: [
      "Marca do pós-modernismo arquitetônico",
      "Compras requintadas exclusivas",
    ],
  },
  {
    placeId: "maison-rose",
    history:
      "A icônica La Maison Rose, erguida nas charmosas ruas de paralelepípedo de Montmartre em 1850, começou como uma modesta pensão. Nos anos 1900, comprada pela modelo e pintora Laure Gargallo, tornou-se o coração boêmio da capital, servindo como restaurante, ateliê e refúgio barato para os grandes gênios da arte moderna.",
    curiosities: [
      "Laure Gargallo costumava abrigar e alimentar de forma quase gratuita jovens talentos famintos como Picasso, Dalí e Edith Piaf nos fundos do café.",
      "Foi eternizada mundialmente nos quadros pós-impressionistas de Maurice Utrillo, ganhando sua mítica fachada rosa-choque por inspiração direta dos pintores bêbados do bairro.",
    ],
    highlights: [
      "O cenário fotográfico mais cobiçado de Montmartre",
      "Epicentro histórico do nascimento das vanguardas artísticas de Paris",
    ],
    insiderTip: "Para tirar a 'foto perfeita' no famoso cruzamento, você deve chegar antes das 9h da manhã. Após esse horário, a rua estreita é invadida por dezenas de tours guiados franceses, arruinando a atmosfera pacata.",
    recommendedTime: "15 min (Foto) / 1h (Café internamente)",
  },
  {
    placeId: "cedric-grolet",
    history:
      "A Opera de Cédric Grolet revolucionou a secular tradição de pâtisserie (confeitaria livre) francesa. Eleito repetidas vezes o melhor Chef Pâtissier do mundo, Grolet fundou seu império em Paris combinando a velha técnica de massa folhada com a precisão rigorosa moderna do ilusionismo frutal escultural.",
    curiosities: [
      "Os seus famosos 'Trompe l’œil' (ilusões de ótica) são bolos ultra delicados que imitam frutas frescas com perfeição milimétrica na textura, usando ganache batida e geleias de interior líquido.",
      "A loja principal na Av. de l'Opéra não expõe os bolos vitrines convencionais. É minimalista como uma boutique da Apple, sendo as sobremesas preparadas em balcões abertos à vista do cliente.",
    ],
    highlights: [
      "As frutas esculpidas em ilusão hiper-realista",
      "Degustação de pastelaria que eleva o padrão global a uma arte 3D",
    ],
    insiderTip: "A fila física costuma dobrar quarteirões e ter espera de 2 a 3 horas! Para contornar, a técnica de Ouro é: use a função Click & Collect (Click and Collect) diretamente no site dele semanas antes. Você fura a imensa fila principal e pega sua compra direto num balcão lateral VIP.",
    recommendedTime: "10 min (Click & Collect) / 2h+ (Fila sem reserva)",
  },
  {
    placeId: "rue-haussmann",
    history:
      "O grandioso Boulevard Haussmann é uma artéria urbana de luxo, concebida puramente do megalomaníaco e brilhante projeto comandado por Georges-Eugène Haussmann sob ordens divinas de Napoleão III no século XIX. O plano envolveu rasgar impiedosamente a caótica Paris medieval com grandes avenidas higiênicas, luminosas e perfeitamente retas.",
    curiosities: [
      "O escritor universal Marcel Proust se exilou do mundo no n.º 102 desta avenida e, blindado contra o ruído com cortiça na parede, escreveu ali a gigantesca obra 'Em Busca do Tempo Perdido'.",
      "A avenida abriga hoje os dois titãs do consumo de luxo parisiense: as Galeries Lafayette e a Printemps, palácios opulentos do Século XIX criados para deslumbrar as classes altas da Belle Époque.",
    ],
    highlights: [
      "O domo em vitral art déco deslumbrante no teto curvo da Galeria Lafayette",
      "Arquitetura padronizada (mansardas perfeitamente esquadrinhadas) nas sacadas",
    ],
    insiderTip: "Para a vista mais incrível de Paris sem gastar 1 euro ou cruzar longas filas: suba até o terraço no último andar da Galeries Lafayette (7º andar). Oferece uma visão desimpedida panorâmica fantástica de toda a Ópera Garnier ao fundo até a Torre Eiffel no horizonte.",
    recommendedTime: "2h (Exploração e Subida ao Domo)",
  },
  {
    placeId: "palais-royal",
    history:
      "O Palais-Royal, localizado de frente para o Louvre, foi construído originalmente em 1633 pelo todo-poderoso Cardeal Richelieu (não pela realeza). Após sua morte, virou refúgio da coroa, depois um epicentro de libertinagem e, na Revolução Francesa, ponto de encontro e conspiração intelectual sob suas famosas galerias.",
    curiosities: [
      "Foi nos seus jardins que Camille Desmoulins discursou fervorosamente incitando a turba a atacar a Bastilha em 1789.",
      "Hoje seu pátio de honra abriga as 'Colonnes de Buren' (1986), uma controversa instalação de arte conceitual de 260 colunas listradas de preto e branco, odiadas por muitos na época de sua inauguração.",
    ],
    highlights: [
      "As icônicas colunas listradas de Buren preenchendo o pátio clássico",
      "Os tranquilos jardins rodeados por charmosas arcadas do século XVII",
    ],
    insiderTip: "Pegue um café no tradicional 'Café Kitsuné' localizado nas arcadas e sente-se nos bancos do jardim ao redor da fonte. É um oásis bizarro de silêncio absoluto e simetria a poucos passos da histeria e da multidão infinita do Louvre.",
    recommendedTime: "45 minutos",
  },
  {
    placeId: "petit-palais",
    history:
      "Construído de forma relâmpago, juntamente com seu irmão gigante (Grand Palais) e a Ponte Alexandre III, foi idealizado exclusivamente para maravilhar o mundo durante a monumental Exposição Universal de Paris no ano de 1900, em estilo Beaux-Arts.",
    curiosities: [
      "Seu acervo interno de belas-artes abrange desde a antiguidade clássica grega até o início do século XX e é completamente gratuito para entrar.",
      "Possui portais dourados majestosos de ferro forjado que levaram quase três anos inteiros para serem moldados e fundidos à perfeição.",
    ],
    highlights: [
      "A monumental porta de ouro na entrada principal curvada",
      "A coleção permanente gratuita de artes finas do município de Paris",
    ],
    insiderTip: "Entre (sem pagar) apenas para visitar o pátio central semi-circular! Existe lá um jardim paradisíaco de palmeiras, pisos em mosaico luxuosos e um café perfeitamente escondido e tranquilo ao ar livre.",
    recommendedTime: "1h (Acervo principal e Café)",
  },
  {
    placeId: "grand-palais",
    history:
      "A colossal resposta de Paris à arquitetura moderna, o Grand Palais é um titã do estilo Beaux-Arts forjado para a Exposição Universal de 1900. Consumiu incríveis 8.500 toneladas de aço — ou seja, até mais do que o peso total das barras de ferro usadas na própria Torre Eiffel.",
    curiosities: [
      "Durante a 1ª Guerra Mundial, desempenhou o duplo papel sombrio de acampamento militar de infantaria e hospital da cruz vermelha, abrigando milhares de mutilados.",
      "Seu monumental e infindável telhado abobadado em barril de vidro formou até a atualidade o maior estrutura de vidro da Europa de forma isolada.",
    ],
    highlights: [
      "Teto astronômico de cristal de puro vidro forjado que reflete todo o sol de Paris",
      "Palco atual de exibições épicas globais (De museu de gelo a desfiles da Chanel)",
    ],
    insiderTip: "Ele costuma ficar fechado no inverno e em períodos sem exposições. Se estiver aberto e sem bilhetes para o evento, contorne-o até o anexo menor, o “Palais de la Découverte”, voltado para ciências.",
    recommendedTime: "1.5h a 2h (durante exibições ativas)",
  },
  {
    placeId: "trocadero",
    history:
      "A praça monumental em formato de ferradura na Esplanada do Trocadéro foi construída primeiramente no século XIX exaltando a Exposição Mundial de 1878 e recriado em estilo neoclássico pesado no ano de 1937, para criar o majestoso percurso alinhado perfeitamente no eixo principal com a Torre.",
    curiosities: [
      "Antes de abrigar jardins sinuosos elegantes, o terreno colossal possuía um suntuoso Palácio Hispano-Mourisco monumental do império, completamente escavado e demolido sem piedade pré 1937.",
      "Após a queda dolorosa de Paris, é a esta exata plataforma (em junho gélido de 1940) que Adolf Hitler e sua comitiva marcharam para tirar a tristemente inesquecível foto mundial posando superior contra a Torre Eiffel ao fundo desguarnecida.",
    ],
    highlights: [
      "O absoluto e inquestionável melhor pórtico arquitetônico livre global de visão e cenário limpo panorâmico da Torre Eiffel da margem oposta do Sena",
      "Dança formidável acrobática de fontes nos escoadelhos em espelho lineares da base relvada",
    ],
    insiderTip: "Para conseguir a célebre foto caminhando pelas escadas brancas de mármore com a Torre inteira atrás sem dezenas de paus de selfie e multidões ao fundo: chegue antes das 07:30 da manhã, ao nascer do sol.",
    recommendedTime: "30 minutos",
  },
  {
    placeId: "pont-alexandre",
    history:
      "Reconhecida globalmente pela sua opulência em dourado vivo, foi cimentada em 1896 com o intuito nacional de sacramentar a aliança da diplomacia Franco-Russa celebrada entre seu Imperador e o Czar Alexandre III da vasta dinastia monarca russa Romanov.",
    curiosities: [
      "Seu design altamente inteligente em arco baixo de apenas uma extensão (superando os 100m sem vigas na água) atendeu expressamente a exigência tática estilhaçante governamental: Não ofuscar sob hipótese alguma a vista desimpedida dos Inválidos na margem do Rio Sena.",
      "As colunas nos pórticos esguios possuem pégasos em puro bronze banhado ostentosos cintilando o sol resplandecente no ouro monumental.",
    ],
    highlights: [
      "Os gloriosos e opulentos lampiões em candelabro art nouveau da ponte no pôr do sol imortal",
      "Ponte cenográfica presente nos clássicos do cinema neo-francês como a 'Meia Noite em Paris'",
    ],
    insiderTip: "Atravesse a pé ao anoitecer/crepúsculo. Quando as lâmpadas centenárias Art Nouveau em formato decandelabro acendem e a Torre Eiffel principia a piscar ao fundo do horizonte fluvial, não há local mais idílico em Paris.",
    recommendedTime: "20 minutos (Caminhada pela ponte)",
  },
  {
    placeId: "st-pancras",
    history:
      "O auge da arquitetura vitoriana em Londres, a Estação St Pancras foi inaugurada com estardalhaço imperial ferroviário na glória majestosa britânica de 1868. Sua icônica e extravagante fachada gótica em tijolos vermelhos e a maior estrutura de telhado único na data, quase foi brutalmente demolida nos anos 1960 pelo modernismo impiedoso de betão armado.",
    curiosities: [
      "Sir John Betjeman desencadeou protesto nacional feroz e uma campanha tenaz salvando categoricamente esta glória arquitetônica da demolição. Hoje possui uma estátua dele mesmo em bronze admirando eternamente o espantoso teto de vidro férreo inglês.",
      "Desde 2007 é o principal terminal londrino oficial e único para o rápido e veloz Eurostar - o trem submerso formidavelmente tecnológico europeu veloz pelo Canal da Mancha.",
    ],
    highlights: [
      "O enorme relógio majestoso suspenso na abóbada celeste central da catedral de estações.",
      "A famosa e colossal estátua esculpida do 'Encontro e O Abraço' (The Meeting Place) no piso panorâmico do andar superior.",
    ],
    insiderTip: "Mesmo que vá prosseguir em Kings Cross, entre no terminal superior principal de St Pancras para ver os trens do Eurostar encostados à plataforma. Não deixe de fotografar a arquitetura vermelha surrealística pelo lado de fora da Euston Road.",
    recommendedTime: "40 minutos (trânsito admirativo)",
  },
  {
    placeId: "kings-cross",
    history:
      "Erguido colado a St Pancras, a Estação de King's Cross (1852) priorizou pura arquitetura austera em oposição do vizinho: minimalismo georgiano em dois mega sheds imponentes abobadados concebidos explicitamente de forma funcional purista fucionária para o Norte do império da coroa britânica. Hoje o terminal colide gloriosamente num telhado hipermoderno contemporâneo da praça oeste em forma de funil curvo.",
    curiosities: [
      "Diz a fantástica (porém desmentida) lenda pop urbana secular londrina que a Rainha e rainha de sangue britânica celto rebelde milenar 'Boudica' se encontra exatamente sepultada e fossilizada magicamente na área imaculada e gloriosa da mística plataforma nove.",
      "Ganhou imortalidade definitiva interligada à cultura juvenil universal através dos livros e tomos literários de J.K Rowling com a fictícia plataforma 9 ¾ engastada no pilar secreto ferroviário.",
    ],
    highlights: [
      "O Domo formidavelmente branco de estrutura metálica treliçada de John McAslan (2012) da bilheteria oeste.",
      "A icônica fachada sólida sem enfeites dos tijolos londrinos clássicos ingleses originais.",
    ],
    insiderTip: "Você pode aproveitar o extenso salão reformado que é um verdadeiro shopping de vidro e transitar subterraneamente via túneis luminosos coloridos diretamente para St Pancras sem molhar-se caso chova em Londres.",
    recommendedTime: "Livre (Depende dos trens)",
  },
  {
    placeId: "plataforma-9",
    history:
      "A popularidade incontestável meteórica da saga universal de 'Harry Potter' fez com que a The British Transport e executivos de King's Cross inteligentemente inaugurassem um 'carrinho de bagagens batendo num muro da plataforma' homenageando o mítico túnel imperceptível para tráfego letivo de Hogwarts.",
    curiosities: [
      "Inicialmente o místico 'Hogwarts Express portal' verdadeiro repousava em becos e vielas da plataforma principal dos embarques. Pelos turistas gigantes de todo o lado, rebaixaram inteligentemente e colocaram cênico no terminal turístico para não quebrar a ordem rotineira oficial.",
    ],
    highlights: [
      "O exato ponto de peregrinação imortal cult de entusiastas da magia potterhead.",
    ],
    insiderTip: "Sempre há uma fila monumental com os seguranças onde tiram uma foto oficial (paga). No entanto, dezenas de vezes após fechar o expediente das lojas e monitores (após às 21h00), o carrinho continua lá! É possível então tirar dezenas de fotos sozinho e esvoaçar seu próprio manto na parede gratuitamente à vontade sem burocracia humana vigiando.",
    recommendedTime: "5 min (sem fila) / 1.5h+ (com a fila formal diurna com loja e atendente)",
  },
  {
    placeId: "borough-market",
    history:
      "O decano insigne Borough Market atesta registros nos pergaminhos e atas judiciais do reinado dês o lendário século XII na longínqua idade onde o império floresceu, confirmando-se orgulhosamente com estatuto perene o mercado da cidade do centro que resiste soberano.",
    curiosities: [
      "Sobreviveu imponentemente com tenácia imensurável perante e no próprio coração ardente sob bombardeamento da blitz do segundo confronto letal do século!",
      "Os apitos diários sonoros matutinos que ainda assinalam ao abrir eram outrora regras impostas cruciais controlando impiedosos os mercadores forasteiros na comercialização e vendas.",
    ],
    highlights: [
      "Ofertas gastronómicas ímpares exóticas para saborear local e pratos quentes borbulhantes em atmosfera secular vibrante autêntica puramente gótica.",
    ],
  },
  {
    placeId: "millennium-bridge",
    history:
      "Projetada colaborativamente entre sir Norman Foster formidável e o aclamado artista e arquiteto de pontes, abriu primeiramente portas em 2000 na grandiosa passagem do sagrado milénio moderno desmoronando sob polémicos oscilações que levaram os meios e a população em puro extâse e perplexidade total.",
    curiosities: [
      "Conhecida impiedosamente no boca a boca popular pela temida designação 'Ponte Trêmula' que obrigou num percalço drástico e inaudito reengenharia massiva trancando pontes fechadas largos anos na correção de precisão estabilizadora final.",
      "A vista direta do seu eixo perfeito com o cúpula assombroso da matriz de s. Paulo é milimetricamente inigualável.",
    ],
    highlights: [
      "Símbolo e marca magna urbana progressista interligando harmoniosamente bancos seculares da city.",
    ],
  },
  {
    placeId: "catedral-sao-paulo",
    history:
      "S.Paulo impõe majestade barroca divina concebida imortalmente em pedra forte em consequência dramática terrível nas cinzas do mega fogo (Grande Incêndio Inglês e devassador d'outrora 1666) pela própria criatividade soberba ilimitada suprema do gênio da arquitetura o notável Wren Christopher",
    curiosities: [
      "O funeral colossal d'estado do leão do coragem o Sr. Churchill decorreu ali sob pompa inesquecível de pesar imenso histórico para reverência infinita britânica e também marcou para glória total imperial cerimonial de Lady Daiana em altar no casamento dos príncipes.",
      "Tem escondida sagradamente na cúpula uma mágica lendária ressoante dita de Whispering Gallery na exata capela redonda em silvo.",
    ],
    highlights: [
      "Gigante domícular assombroso no skyline majestoso e na alma pátria eterna londrina em superação na segunda glória mundial intacto entre infernos bélicos aéreos de guerra cruéis.",
    ],
  },
  {
    placeId: "leicester-square",
    history:
      "Idealizado formalmente na era pacata real idílica original residencial século próspero 17 pela nobre familia alta Leicester para uso recreativos locais. Evoluiu implacavelmente em centro e praça do divertimento espetáculos vibrante teatros com cinemas gigantes epicentro do glamour cintilante da metrópole vibrante inglesa frenética e febril contemporânea.",
    curiosities: [
      "Chão imortal cravado perpetuamente marcando ali permanentemente a estréia pomposa oficial deslumbrante esmagadora d'Hollywood imortal (A tapete rubro europeu em exatidão e proporção de grandeza real grandiosa e glória contínua das grandes estrelas)",
      "Ressaltam na calçada de perto na relva o heróico Charlie genial em silhueta de estátuas na esquina do coreto da placa de mármore brilhante ali eternizada em Londres histórica da ribalta eterna e teatro puro britânico cintilante na noite e no ocaso.",
    ],
    highlights: [
      "Agitação social intensa imensurável iluminada das estréias e do divertimento vivo inglês cosmopolita teatral imponente.",
    ],
  },
  {
    placeId: "piccadilly",
    history:
      "Construído visionariamente pelos planeadores estritos urbanos ingleses clássicos prósperos do antigo monarcal no seculo vibrante 19 com a nobre intuito final imperial e estratégico ligando exata ponta do regente na capital metropolitana cruzilhada com glória imponente majestosa e iluminada.",
    curiosities: [
      "Albergou pioneiramente luz pioneira mundial febril na excentricidade dos ecrans cintilantes nobres incrivelmente e espantosamente na esquina no começo inicial tecnológico da era moderna",
      "Anjo prateado (Amor e flecha sagrada eterna e a caridade de lordes) conhecido como Anteros paira ininterrupto abnegado paira coroando as majestosas e inabaláveis monumentos fontanárias na circulação contínua rodoviária incessante dos famosos icônicos emblemáticos do transporte real do bus de duplo andares ingles vermelhos rubros emblemáticos e os inabaláveis carros majestosos sombrios do táxi clássico no percurso em arco.",
    ],
    highlights: [
      "Símbolo de Londres noturna viva eterna incansável com tráfego denso imponente",
    ],
  },
  {
    placeId: "soho",
    history:
      "Era antes terreno campestre de coutadas lamas no idílico outrora século passado para majestosos condes caçarem, O Soho mutou drástica irrefreavelmente metamórfico sendo um e antro magnânimo de nobreza até cair na luxúria dos bordeis densidade boêmia vibrante cultural de arte e refúgio em refolhos cosmopolita do rock do caldeirão global.",
    curiosities: [
      "Abriga em epicentros musicais emblemáticos a The Marquee a grande mítica taberna musical de estreias de deuses como os de Bowie, Hendryx The Who os Stones em ascensão no ápice de energia pura das décadas douradas febris do glam imortal musical da terra rainha suprema londrina",
    ],
    highlights: [
      "Dinamismo cosmopolita de bares diversidade vibrante tolerância em caldeirão musical exótico globalizado no frenesim de multidões e na festa noturna agitada",
    ],
  },
  {
    placeId: "chinatown",
    history:
      "Em expansão maciça pós 2 guerra impulsionada imigração exótica rica da asa dourada com marinheiros migrando asiáticos puros transladando pratos iguarias dos misterios do porto inglês em dockland em expansão de zona no exato núcleo gerrard consolidando os paifang portais majestosos místicos da rua gloriosa local.",
    curiosities: [
      "Portais gigantes de pagode (Paifang) ladeados por exóticos leões esculpidos em mármore na sentinela vigilância espiritual feroz do núcleo dos arcos contra sortilégios. Ano novo iluminatório lanternas cobrem aos milhares telhados com feérica visão dragão",
    ],
    highlights: [
      "Festival Gastronômicos asiáticos puro cheiro feérico inesquecível da Ásia transmutado encravado central",
    ],
  },
  {
    placeId: "pub",
    history:
      "Tradição milenar imortal e indomável nascida primordial mística ancestral pura celta (Public House) dos corações nascer raízes nas tabernas imperiais da guarda romana antiga para o hidromel do soldado até as ales lupuladas do cervejeiro inglês da capital império para os artesãos beber e celebrar com calor as chamas.",
    curiosities: [
      "Muitos destes conservam as paredes em puro imponente escuro madeira de carvalho original talhada nos alvores gloriosos dos vitorianos, e até painéis originais que sobreviveram gloriosamente às grandes conflagrações chamas históricas do império.",
    ],
    highlights: [
      "Autêntica experiência local etílica histórica social cultural e acolhedora.",
    ],
  },
  {
    placeId: "portobello",
    history:
      "Rua antiqussima traçada como mero pacato trilhos rurais que serpenteavam quintas até tornar na via colorida mais aclamada da terra para as infindáveis bancas exóticas do bric a brac nos 1950 imigração caraibas afro de Notting gerou fervente energia febril que convergiu de feira mítica gigantesca de prata e de arte global pura antiquário da Europa em ápice.",
    curiosities: [
      "Foi no vibrante portobello cruzado num portão azul pacato cinematográfico, o qual um romântico épico da estrela roberts foi aclamada gravada projetando amor ao ápice no fim dourado do século anterior e tornando a porta em ponto de peregrinação.",
    ],
    highlights: [
      "Colecionismo febril no sábado em apogeu com paletas vívidas exóticas e raridades preciosas intemporais",
    ],
  },
  {
    placeId: "abbey-road",
    history:
      "Uma mera passadeira metropolitana cimentada ordinária local que num rasgo estonteante fotográfico rápido místico capturado imortalmente em escassos minutos para um disco pop imortal em fim na glória épica tornou e ascendeu imortal relíquia sagrada do beatlemaníaco império mundial do pop em música atemporal perene divinizada em Londres em glória infinita e perpétua mundial do icônico quarteto.",
    curiosities: [
      "Turistas engarrafam cronicamente em colapso o trânsito da pacata vizinha residencial reproduzindo vezes seguidas o exacto exato alinhamento dos quatro majestosos cantores eternos da calçada nos passos sicronizados gloriosos em foto da grande obra de lenda intemporal mundial eterna do lennon divino e Mccarthy gênio no estúdio da mítica esquina de tijolo puro ali contigúa.",
    ],
    highlights: [
      "Ponto focal global icônico romântico em homenagem musical eterna ao talento pop que abalou geracionalmente todo o mundo nos mágicos anos setenta vivos da saudade sagrada contínua pop globalizada atemporal britânica",
    ],
  },
  {
    placeId: "sky-garden",
    history:
      "Arranca corajosamente magnânimo em 2014 no emblemático controverso edifício carinhosamente alcunhado pelos mordazes residentes humorísticos da neblina de O talkie walkie, impôs-se altivo com majestosa visão para fundir a engenharia do aço contemporânea com jardins densos utópicos verticais subtropicais frondosos exóticos desafiando céus nos domos de nuvem cinza eternos com ousadia arquitetónica altiva verde moderna formidável na selva britânica férrea do milénio de expansão cosmopolita global atual na praça corporativa fina das altas torres gigantes.",
    curiosities: [
      "Exaustiva reserva em semanas antecedência disputada intensamente à hora da roleta virtual grátis com sangue suor popular. Detém estatuto oficial raro altivo grandioso nobre de (maior espaço relvados ajardinado fechado topo edifício imponente civil cívica e de panorâmica aberta púbica altaneira de todo o glorioso coração reino capital rainha suprema)",
    ],
    highlights: [
      "Suntuoso luxo aéreo jardim sublime panorama visual infinito inesquecível exótico no sol de põr majestoso em glória monumental inglesa londrina urbana.",
    ],
  },
  {
    placeId: "victoria-albert",
    history:
      "Surge no rasto da épica magna ressonante mítica imperiosa exposição colossal global imperial dita as inovações em apogeu tecnológico orgulho cívico global que sacudiu a nação em 1851 com a imperatriz coroada da luz na era que nomeou ao recinto os grandiosos reinados sumptuosos soberanos. Museu monumental titânico sagrado intocado imortal das maiores riquezas ornamentais colossais.",
    curiosities: [
      "O monumental café sala é deslumbrante na riqueza em gesso das lamelas em artes majestosas intocáveis, contendo assombrosos detalhes no estuque sagrado em colunas da própria mão da glória do pioneiro design criador do grande morris no teto primoroso reluzente.",
    ],
    highlights: [
      "Explosão criativa sumptuosa de artes finas decorativas gloriosas imensuráveis num templo colossal de acervos intemporais e arte monumental magna intocável imortal global infinita cultural imperiosa mundial única sublime e mágica pura",
    ],
  },
  {
    placeId: "buckingham",
    history:
      "Refúgio palaciano inicial de apacatos condes transformou e transmutou com sangue e sumptuosidade ouro na nobre glória no altar coroado pilar palácio assento poder moradia dinástica majestade absoluta imponente global monárquica império grandioso real desde sagrada época faustosa vitória era vitoriana e as pompas que coroam a ilha indomável nas suas nobres heranças consagradas da realeza suprema impoluta sagrada britânica pátria real solene incólume inabalável",
    curiosities: [
      "Balcão épico sacro presenciou imortais majestosos discursos épicos desde o fumo bombardeado ao fim sangrento guerra dás duas mundiais até às uniões conjugais divinas pop da eterna daiana sorridente que arrebatara almas num momento divino ali contíguo majestoso a ovação divina de choro.",
      "Bandeira régia flutua ostensivamente a anunciar indubitavelmente sagrada presença divina real reclusa da rainha lá na coroa interna do sumptuoso da corte imperial grandiosa soberana do grandioso castelo majestoso puro de esplendor de londres imperioso altivo divino nobre",
    ],
    highlights: [
      "Esplendor puro desfile sumptuoso no nobre troca guarda com chapéus míticos em sincronia esplêndida imperial intocável de mística cerimonial sagrada puramente grandiosa",
    ],
  },
  {
    placeId: "sao-miguel",
    history:
      "Estrutura ímpar primorosa mágica de fisionomia ferro forjado vidro cristalino erguida sumptuosa divina magna central da belle époque de abundâncias glórias hispânicas no inicio 20, escapa demolições cruéis modernas focado em 2009 fênix esplendorosa templo gastronômico.",
    curiosities: [
      "Preserva milagrosa reluzente pilar mestre colunas autênticas puras no ferro grandioso original do gênio criador puro industrial de auge europeu na idade moderna vibrante dos primórdios.",
      "Agrupa no vibrante núcleo divino do esplendor da gema de madrid a elite epicurista divinamente com as ostras divinas, vinhos sagrados doces puros num zumbido fervor e calor ibérico contagiante inabalável puro e ímpar caloroso de festa gastronômica",
    ],
    highlights: [
      "Templos culinários febris divinos majestosos gloriosos e ferventes de calor noturno vivo e puro inesquecível majestoso deslumbrante ímpar imperdível majestoso em glória espanhola divina viva da magia tapas puras de festa global divinal cintilante da castela infinita mística ibérica puramente sagrada imutável gloriosa.",
    ],
  },
  {
    placeId: "palacio-real-es",
    history:
      "Nas cinzas desoladoras tristes reais duma imensa e feroz catástrofe d'incêndios funestos puros reais, que consumiu as paredes místicas da coroa antiga (O trágico fogo d'1734 Alcazar original em fim devassador), Fénix grandiosa e de opulência indomável pura em fausto ergueu em palácio majestoso o orgulho divino borbônico supremo inabalável de beleza majestosa grandiosa divina ímpar puramente mágica resplandecente assombrosa.",
    curiosities: [
      "Surpreende com assombro ostenta na opulência grandiosa formidável com cerca colossais inatingíveis de (inacreditáveis 3418) cômodos opulentos divinos superando até o imortal épico parisiense sublime sagrado palácio do versalhes solar inabalável.",
      "Contém armas mágicas lendárias puros mitos em cofres de armadilhas majestosas da época de magestas e armaduras da glória sagrada e intocável dos cavalheiros na nobre sala intocável mágica pura majestosa na arca do tesouro divina do museu armorial mágico imponente soberbo formidável inatingível imortal do rei Carlos supremo imperador gênio sagrado guerreiro épico das lendas de castela divinal infinita em glória pura monárquica intocável sacra do castelhano trono magna em madrid inabalável",
    ],
    highlights: [
      "Soberania sumptuosa deslumbrante ímpar majestosa na glória infinita real na nobreza majestosa em suntuosidade barroca faustosa imperial épica pura de imponência soberba monárquica divina mágica mágica infinita eterna de magnitude pura irrefutável imperiosa divina.",
    ],
  },
  {
    placeId: "almudena",
    history:
      "Construção turbulenta repleta místico atrasos lendas assombros que por séculos frustrou sucessivos reinados impedindo a fundação gloriosa prometida catedralicia pura aos pés sumptuosos dos deuses e d'palácio real sagrado nobre místico formidável. Rompe em grandiosa conclusão triunfo absoluto divino somente tardiamente num apogeu imaculado triunfante no glorioso fim de época e início consagrado d'são joão sagrado num século inesquecível da virada divina d'era de luz e da consagração póstuma d'madrid gloriosa pura majestosa da sagrada imagem madrilena intocável suprema eterna de amor e veneração milagrosa divina espanhola da nobre rainha celestial padroeira viva imortal de poder supremo protetora mágica inabalável do sol ibérico sacro e das paredes monumentais d'glória infinita em espanha imponente",
    curiosities: [
      "Orientação em rumo divinal Norte e Sol Nascente numa excentricidade pura teológica litúrgica imposta unicamente forçada ao longo desfecho histórico pela subordinação simétrica ímpar e perfeita majestosa para espelho ininterrupto do Palácio de fachada divina e nobre que assombra o alinhamento sublime formidável. No subsolo contém criptas místicas colossais românicas majestosas que ocultam pilares divinos florestados fantásticos intocados da época inaugural ancestral e secreta da imponente de poder de deus pura espanhola inabalável mística.",
      "Eclética no choque divino brutal barroco gótico e as vivas e deslumbrantes pinturas vibrantes celestiais cósmicas pop modernas puras nas naves que quebram o milenar e antigo duma vida e luz divina na cúpula sagrada inabalável de afrescos divinos e mágicos assombrosos singulares do sol celestial supremo imutável e divino infinito",
    ],
    highlights: [
      "Rompimento da majestade secular litúrgica mesclando vitrais divinos em explosão feérica neoclássica cromática pura no esplendor formidável gótico e poder contemporâneo místico supremo no sagrado inatingível da nobre capital magna suprema imortal ibérica deslumbrante mágica e de força majestosa espanhola.",
    ],
  },
  {
    placeId: "sabatini",
    history:
      "No rasto majestoso real suntuoso da demolição de misteriosas cortes d'cavalariças colossais outrora mágicas na pureza da glória ancestral sumptuosa intocada militar regia de castela, desbrocha um vergel harmonioso ímpar mágico labiríntico e simétrico de fausto resplandecente no século recente como refúgio ímpar romântico divino esplendoroso majestoso em dedicação à memória criadora gloriosa suprema arquiteta genial divina renascentista barroca neoclássica infinita espanhola ímpar do palácio grandioso da europa mágica pura inabalável eterna mística do rei da dinastia de bourbon majestosa sumptuosa.",
    curiosities: [
      "Ao entardecer as nuvens vermelhas e a luz cálida incidem formidavelmente sob o reflexo majestoso formidável esplendoroso nas enormes esferas aquíferas divinas de repuxos mágicos de lagos espelhados intocados simétricos do palácio celestial majestoso formidável que se desponta cintilante sumptuoso majestoso iluminando a noite no místico bosque em formas divinas cortadas de verde intenso inesquecíveis ibéricas e os ciprestes de nobreza altivos no horizonte dourado mágico esplendoroso imortal espanhol infinito",
      "Foi desenhado unicamente ímpar magistralmente em obediência suprema estrita às regras clássicas puras de proporção áurea divina de matriz matemática geométrica renascentista absolutista magistral para exaurir a perfeição visual pura d'harmonia celestial serena indomável intocada divinamente espanhola.",
    ],
    highlights: [
      "Retiro calmo mágico labiríntico simétrico opulento poético imperial divino idílico puro romântico assombrosamente faustoso intocável de magnificência formidável palaciana grandiosa e sublime na noite gloriosa mística iluminada pura dos céus cintilantes d'madrid divina imortal inabalável",
    ],
  },
  {
    placeId: "metropolis",
    history:
      "Sentinela de bronze e luz majestosa cintilante coroando os cruzamentos fulgurantes febris vibrantes frenéticos da mágica esquina principal do coração fulgurante formidável pulsante comercial d'madrid, fundou inabalável pioneiramente majestosa ímpar gloriosa o século de belle époque divina e da era d'grandes de colossos arranha céus e fachadas divinas imperiais sumptuosas do centro. Erguido d'poder segurador formidável francês de império como símbolo opulento d'poder infinito divinal",
    curiosities: [
      "A cúpula titânica inesquecível em telhas negras majestosas d'ardósia incrustadas magnificamente com puros fios majestosos fulgurantes d'ouro 24 puros divinos quilates na abóbada assombrosa ímpar esplêndida e majestosa incólume que sustenta o glorioso anjo alado imortal da fênix de glória resplandecente mística pura que reluz incansável triunfante majestosa na metrópole incansável e febril do sol nascente intocável",
      "Foi comprado recentemente majestosamente ímpar magnificamente após o seu século d'ouro místico para tornar gloriosamente e se transmudar iminentemente luxuoso requinte de esplendor de exclusividade do hotel luxuoso e imperial requinte puramente hoteleiro mundial sumptuoso divino formidável inatingível exclusivo da grande ibéria moderna mágica.",
    ],
    highlights: [
      "Visão assombrosa opulenta da belle epoque formidável sumptuosa fotográfica magna obrigatória gloriosa imperial majestosa em dourados épica noturna diva fulgurante urbana mágica esplendorosa incansável",
    ],
  },
  {
    placeId: "chafariz-cibeles",
    history:
      "A diva romana suprema majestosa de cultos antigos agrários telúricos de poder infinito divina mágica d'fertilidade em trono colossal sumptuoso esplêndido e indomável esculpida milagrosamente em puro fulgurante esplendor mármore místico monumental grandioso nos leões majestosos indomáveis e puros que governa soberana, forjada magistralmente visionariamente nas reformas do rei arquiteto ímpar de iluminação pura século luz sumptuoso magno de iluminismo majestoso e da nobre época majestosa da metropole colossal divina no eixo principal monumental d'arte pura formidável espanhola infinita do centro magistral divino.",
    curiosities: [
      "Altar indomável puro sagrado fanático épico colosso de pura devoção desportiva divina infinita espanhola inabalável onde legiões fervorosas brancas de multidões ululantes majestosas imponentes épicas grandiosas idolatram o triunfo absoluto ímpar global sagrado do glorioso titânico invencível e supremo maior e colosso do mundo do futebol Real divino madrid majestoso grandioso formidável sumptuoso e mágico puro em noite febril cintilante dourada",
      "Os leões atrelados magicamente formidáveis formidáveis divinos são mitos intocados dos amantes gregos amaldiçoados de pura desgraça e de eternidade majestosa formidável que puxam com peso trágico a deusa divina de forma imortal inquebrantável nas águas inabaláveis puras de grandiosidade ininterrupta suprema.",
    ],
    highlights: [
      "Emblema magno fulgurante ícone supremo visual pátrio madrileño assombroso de luzes exóticas sumptuosas nobres num monumento de poder cultural artístico formidável ímpar desportivo sagrado da nação gloriosa",
    ],
  },
  {
    placeId: "palacio-cibeles",
    history:
      "Não palácio majestoso d'berço nobre mas a majestosa e indomável infraestrutura utópica visionária e colosso sumptuoso burocrático, erguido formidável titânico outrora d'luz e de comunicação suprema ímpar grandiosa global na era de progresso magno de selos (Correios d'Catedral assombrosa magna de luz magistral ímpar), transmutada glória divinal em casa solene mãe ímpar divina e magestosa suprema casa principal de prefeitura grandiosa infinita resplandecente ímpar majestosa da metropole assombrosa nobre de madrid divina resplandecente atual moderna cosmopolita no cruzamento fulgurante inesquecível da fonte dos seus prados e deuses majestosos",
    curiosities: [
      "O esplendor barroco neogótico moderno sumptuoso eclético originou críticas no século da nobre arte ímpar e o apelidaram popularmente misticamente de forma jocosa assombrosa com o epíteto divina carinhoso Nossa Senhora das Comunicações divinas majestosas formidáveis brilhantes do coração sagrado de pedra clara magna do centro e do farol ibérico.",
      "No seu alto magistral coroado no pico sumptuoso majestoso e inabalável da sua glória pura encerra assombrosa o pátio central estufa mística d'maravilhas divinas contemporâneo mágico formidável inesquecível com panorâmica 360 no varandim superior de mirador sumptuoso ininterrupto imperioso formidável grandioso e cintilante deslumbrante mágico de toda a urbe em noite e pôr do sol inesquecível deslumbrante",
    ],
    highlights: [
      "Símbolo de imponência metropolitana burocrática transmutada ao serviço público nobre e ao monumental cenário deslumbrante mágico visual miradouro formidável ímpar no topo de céu de vidro moderno majestoso formidável e grandioso",
    ],
  },
  {
    placeId: "debod",
    history:
      "Um colosso temporal arcano e exótico transplantado resgatado imaculado divina místico imortal glorioso perante o risco trágico abissal diluviano final ímpar nos projetos férreos do magno de modernismo gigante em barragens faraónicas do Egito imortal milenar supremo exaurido no rio mágico do nilo na pátria antiga do faraó glorioso divino de ptolomeu sumptuoso. Transportado no mar longínquo bloco e montado grandioso peça sagrada a pedra mística imortal para culminar soberano divino misterioso e altivo de devoção ímpar ancestral mágica majestosa e resplandecente esplendorosa do sol dos desertos puramente incólume no coração de parque oásis inabalável verde montanhoso de madrid ibérica resplandecente gloriosa contemporânea formidável de ocidente magno e do milénio cruzado na história pura universal infinita.",
    curiosities: [
      "Sagra a magia suprema astrológica divinal perfeita ímpar formidável egípcia e a simetria ocidental celestial inabalável ao espelhar em rigor num pôr de luz mágico sumptuoso celestial no entardecer ininterrupto e incandescente formidável as águas divinas misteriosas do seu tanque majestoso resplandecente simétrico do reflexos divinos perfeitos incólume inesquecíveis fotográficos imortais inabaláveis espanhóis místicos",
      "Permanece um mistério puro sacrossanto inesquecível o real místico significado da pedra exata insculpida com os hieróglifos esotéricos grandiosos divinos intocáveis sagrados imortais nos pilares resplandecentes formidáveis de obelisco e e porta sagrada ímpar divina d'hórus de santuário inabalável formidável e sumptuoso grandioso d'iluminação do rei celestial do Nilo indomável faraónico mágico formidável intocável esplendoroso espanhol madrileño ibérico formidável majestoso puro",
    ],
    highlights: [
      "Choque divinal faraônico misterioso sagrado mágico de beleza exótica inigualável e do oásis sereno divinal fotográfico ímpar indomável crepuscular de fogo celestial puramente magnético ibérico de noite e sombras de majestade eterna infinita mágica",
    ],
  },
  {
    placeId: "santiago-bernabeu",
    history:
      "Construído do sonho imperial futebolístico invencível e grandioso pelo indomável patriarca visionário presidente Santiago glorioso formidável intocável nas ruínas de pós guerra para fundar indomavelmente num deserto mágico longínquo da época majestosa imponente e da concha celestial sagrada da lenda impoluta invencível mítica a maior glória majestosa e potência intocável monárquica divina mágica galáctica e imperial formidável do reinado ibérico merengue sumptuoso europeu e supremo rei imortal absoluto indomável incomparável do rei da bola mágica gloriosa desportiva do seculo de grandeza de madrid inabalável formidável e de glória épica puramente mundial formidável espanhola mística assombrosa.",
    curiosities: [
      "Sofreu um restauro de fênix sumptuosa majestosa de oitocentos gloriosos milhões em platina majestosos e mágicos escudos metálicos do universo arquitetónico contemporâneo colossal divinal e puramente magnânimo com pele cibernética imortal mutável retrátil assombrosa formidável e teto mecânico divinal de ficção de maravilhas d'engenharia mágica imponente espanhola formidável majestosa estonteante formidável do seculo luz em modernidade ibérica inesquecível do apogeu do desporto sagrado mundial épico",
      "Foi solo de finais épicas divinais da copa de taças da magia sagrada e de confrontos titânicos místicos imortais globais e do orgulho divino puramente blanco mágico inesquecível lendário que rege a cultura mágica assombrosa apaixonante espanhola intensa gloriosa sumptuosa divinal em noites febris e ardentes formidáveis divinas incontestáveis imponentes mágicas.",
    ],
    highlights: [
      "Santuário de galácticos majestoso de esplendor indomável magnético grandioso mágico supremo de colosso desportivo modernista tecnológico inquestionável formidável sumptuoso e puro sagrado intocável inesquecível mundial espanhol celestial.",
    ],
  },
  {
    placeId: "retiro",
    history:
      "Era outrora d'alvor o nobre divino mágico intocado éden privado monárquico fechado exclusivo d'glória resplandecente em reis magestosos e das suas côrtes imperiosas grandiosas serenas inabaláveis puras ibéricas, aberto grandioso formidável liberto nas leis do povo d'revolução gloriosa para transmutar serenamente indomavelmente e nobre e magicamente no monumental o pulmão gigante formidável e sagrado majestoso verde esplendor de lagos sumptuosos divinos coretos da cultura e da grandiosa febril metrópole luz ibérica da de castela infinita espanhola imponente sagrada divina madrileña da glória e tranquilidade de encanto intocável puro mágico universal.",
    curiosities: [
      "Acolhe em recanto o mágico palácio translúcido de puro divino esplendoroso cristal vítreo resplandecente nobre (Construído a princípio de plantas gloriosas febris das terras das filipinas do ultramar império) sumptuosos divinos formidáveis na sua beleza reflexiva indomável inabalável sublime pura e dos oásis de luz formidável ibérica mágica inesquecível.",
      "Está coroado majestoso formidavelmente assombrosa pela sumptuosa colossal e ímpar majestade d'estátua formidável e controversa e diabólica genial da escultura sublime puramente mágica grandiosa única dedicada esplendidamente corajosamente assombrosamente majestosamente divinamente ao puro e negro Anjo decaido mítico imortal num repuxo inquestionável formidável soberbo que desafia divindades na beleza inabalável de arte e mistério sombrio no éden pacífico espanhol majestoso do sol.",
    ],
    highlights: [
      "Paraíso repousante exótico verde formidável deslumbrante mágico imponente de barco romântico e palácios ímpar resplandecentes na luz pátria cultural infinita espanhola divina serena divinal majestosa intocável.",
    ],
  },
  {
    placeId: "palacio-cristal",
    history:
      "Nasceu em 1887 formidável d'inspirada magistralmente glória divinal em transparência de aço e cristal luzindo na mágica expo pura imperial filipina como uma serra exótica estufa suprema intocável do majestoso esplendor britânico imponente e transmutada hoje celestial majestoso ímpar divino poético ímpar em formidável refúgio inesquecível d'arte viva museológica divina num pavilhão de exposição inabalável celestial espanhol formidável inatingível.",
    curiosities: [
      "Foi transladado e edificado na precisão do seu espelho milagroso divinal d'águas puras onde no outono o reflexo magistral e as folhas cintilantes laranjas douradas da encosta formam uma perfeição fotográfica cênica puramente mágica ibérica divinal inquestionável deslumbrante na paisagem poética da cidade vibrante imperial.",
      "Totalmente livre de custeio na sua galeria suprema da rainha sofia e é incrivelmente montado nas bases d'tijolos decorados com mosaicos de majestosas influencias cerâmicas ricas divinais puras esplendorosas místicas majestosas antigas do mestre artesão andaluz andaluz indomável de cor divina mística majestosa pura grandiosa ibérica inabalável.",
    ],
    highlights: [
      "Símbolo diáfano frágil mágico esplendoroso imponente e celestial de arte ímpar e romântica divina grandiosa de iluminação ibérica sublime inquestionável deslumbrante imaculada mágica inatingível inesquecível eterna.",
    ],
  },
  {
    placeId: "netuno",
    history:
      "Esculpido no esplendor neo clássico majestoso supremo encomendado pelo grandioso reinado imperioso e reformista inabalável puro do Rei e patriarca do progresso místico d'Carlos na majestosa grandiosa ibérica mágica esplendente e monumental avenida e e eixo d'sombra verde nobre deslumbrante num formidável apogeu d'fontanários de colossos e divindades mitológicas impolutas imponentes magistrais formidáveis eternas espanholas.",
    curiosities: [
      "Apesar de ser vizinho e irmão mitológico assombroso divino d'Cibeles de rivalidade monumental de luz inabalável, é no soberano formidável deus sagrado indomável tridente puramente místico aquático celestial inabalável que os ímpares adeptos e da multidões colossais mágicas ululantes grandiosas divinas fervorosas do outro rei colossal clubístico gigante formidável e imortal d'atletismo glorioso d'colchonero d'atético madrid formidável festejam na pura noite ibérica as suadas conquistas das taças sumptuosas formidáveis inabaláveis mundiais eternas mágicas na consagração pura divina sagrada espanhola e da urbe eterna infinita",
      "Posicionado na grandiosa e assombrosa inabalável e puramente mágica cruzilhada mística dos d'deuses dourados sagrados dos grandes impérios inquebrantáveis d'arte global imponente museológica formidável sumptuosa da glória museu divinal prado celestial inabalável grandioso.",
    ],
    highlights: [
      "Guardião magno monumental supremo deslumbrante de praça mítica d'devoção e da grandiosa e opulenta artéria de palacetes divinas mágicas de glória espanhola formidável majestosa incontestável nobre inabalável pura de imponência cênica e das batalhas desportivas e das multidões cívicas sagradas inesquecíveis.",
    ],
  },
  {
    placeId: "banco-espanha",
    history:
      "Fortaleza ímpar arquitetônica esplêndida palaciana inquebrantável magna erguida soberana na transição de apogeu glorioso no século luz ibérico de economia do comércio e d'prosperidade transatlântica das colónias colossais divinas de império global da península majestosa sumptuosa indomável forjando em ferro segurança pura e em alicerces da coroa a fundação magistral em pátios formidáveis dourados do cofre de estado formidável inesquecível inatingível espanhol inabalável da sede divina máxima financeira monarca madrileña suprema pura.",
    curiosities: [
      "Cofre de mito ímpar inatingível indomável a majestosa lenda de blindagem e de armadilha divina pura cênica e verdadeira suprema encontra-se num abismo a impressionantes dezenas majestosas e mágicas de metros puramente d'fundo na câmara ouro divina e que em risco extremo d'assalto trágico é de forma magistral engenhosa infalível submersa afogada dantesca inundada mortalmente e ininterruptamente por fontes corriqueiros d'águas plenas das condutas místicas antigas do chafariz mágico superior da glória da mesma cibeles indutando a câmara majestosa do roubo do crime num labirinto indomável sumptuoso supremo genial das lendas pop televisiva da casa de nota de papel espanhola colossal inesquecível global divina mágica e épica",
      "Sua fachada imensa monumental e divinal deslumbrante opulenta ricamente ornamentada em grandiosa alvenaria celestial majestosa neoclássica ocupa quarteirões e cantarias inteiras em faustosa resplandência magistral das cúpulas douradas sumptuosas impolutas ibéricas inabaláveis no topo soberano formidável do poder infinito do eixo metropolitano da central principal e do fausto espanhol inatingível puro.",
    ],
    highlights: [
      "Símbolo d'poder e riqueza majestoso esplendor opulento arquitetônico magistral inatingível e da lenda moderna pura magnética pop cultural de engenhosas ciladas dos cofres mágicos sumptuosos da glória financeira máxima sagrada e da grandiosidade infinita divina madrileña.",
    ],
  },
];

export const placesInfoBrugesGhent = [
  {
    placeId: "markt-bruges",
    history:
      "A Markt de Bruges é a praça central da cidade desde a Idade Média, sendo um importante centro comercial durante o auge da cidade como potência econômica no século XIII.",
    curiosities: [
      "Bruges foi um dos principais centros comerciais da Europa medieval",
      "A praça mantém edifícios históricos bem preservados",
    ],
    highlights: ["Centro histórico medieval", "Arquitetura preservada"],
  },
  {
    placeId: "belfry",
    history:
      "O Belfry de Bruges foi construído no século XIII e servia como torre de observação, arquivo e símbolo de autonomia da cidade.",
    curiosities: [
      "Possui cerca de 83 metros de altura",
      "Era usado para detectar incêndios e ameaças",
    ],
    highlights: [
      "Vista panorâmica da cidade",
      "Símbolo medieval de poder urbano",
    ],
  },
  {
    placeId: "canais-bruges",
    history:
      "Os canais de Bruges foram fundamentais para o comércio medieval, conectando a cidade ao mar do Norte e tornando-a uma das mais ricas da Europa no século XIV.",
    curiosities: [
      "Bruges é conhecida como a 'Veneza do Norte'",
      "Perdeu importância quando os canais assorearam",
    ],
    highlights: ["Passeio romântico", "Cenário medieval intacto"],
  },
  {
    placeId: "gravensteen",
    history:
      "O Castelo de Gravensteen, em Ghent, foi construído em 1180 pelo Conde Filipe da Alsácia como símbolo de poder e defesa.",
    curiosities: [
      "Foi usado como tribunal e prisão ao longo dos séculos",
      "É um dos castelos medievais mais preservados da Europa",
    ],
    highlights: [
      "Fortaleza medieval autêntica",
      "Experiência histórica imersiva",
    ],
  },
  {
    placeId: "canais-ghent",
    history:
      "Ghent se desenvolveu ao longo de seus canais como um importante centro comercial na Idade Média, rivalizando com Bruges em riqueza e influência.",
    curiosities: [
      "A área de Graslei é uma das mais fotografadas da Bélgica",
      "A cidade mantém grande parte de sua estrutura medieval",
    ],
    highlights: [
      "Arquitetura medieval preservada",
      "Ambiente autêntico e menos turístico que Bruges",
    ],
  },

  //PARIS
  {
    placeId: "torre-eiffel",
    history:
      "A Torre Eiffel foi construída entre 1887 e 1889 para a Exposição Universal de Paris, comemorando o centenário da Revolução Francesa. Projetada por Gustave Eiffel, inicialmente foi criticada por artistas e intelectuais, mas acabou se tornando o maior símbolo da França.",
    curiosities: [
      "Tem 330 metros de altura após a adição de antenas",
      "Foi a estrutura mais alta do mundo até 1930",
      "Seria desmontada após 20 anos, mas foi mantida por utilidade científica",
    ],
    highlights: [
      "Símbolo máximo de Paris",
      "Marco da engenharia do século XIX",
    ],
  },
  {
    placeId: "champ-mars",
    history:
      "O Champ de Mars foi originalmente um campo militar no século XVIII, usado para treinamentos do exército francês. Também foi palco de eventos importantes da Revolução Francesa, como a Festa da Federação em 1790.",
    curiosities: [
      "Seu nome faz referência ao deus romano da guerra, Marte",
      "Já foi cenário de execuções e manifestações revolucionárias",
    ],
    highlights: [
      "Vista clássica da Torre Eiffel",
      "Importância histórica na Revolução",
    ],
  },
  {
    placeId: "montmartre",
    history:
      "Montmartre foi uma vila independente até ser incorporada a Paris em 1860. Tornou-se um centro artístico no final do século XIX, abrigando nomes como Picasso e Van Gogh.",
    curiosities: [
      "Era conhecido por sua vida boêmia e artística",
      "Foi palco da Comuna de Paris em 1871",
    ],
    highlights: ["Atmosfera artística e histórica", "Vista elevada da cidade"],
  },
  {
    placeId: "sacre-coeur",
    history:
      "A Basílica de Sacré-Cœur foi construída entre 1875 e 1914 como símbolo de reconciliação após a derrota da França na Guerra Franco-Prussiana e os eventos da Comuna de Paris.",
    curiosities: [
      "Está localizada no ponto mais alto de Paris",
      "Seu interior possui um dos maiores mosaicos do mundo",
    ],
    highlights: [
      "Vista panorâmica de Paris",
      "Importância religiosa e histórica",
    ],
  },
  {
    placeId: "muro-eu-te-amo",
    history:
      "O 'Le Mur des Je t'aime' foi inaugurado em 2000 e reúne a frase 'eu te amo' escrita em mais de 250 idiomas, simbolizando a diversidade cultural e o romantismo associado a Paris.",
    curiosities: [
      "Possui mais de 300 formas da frase",
      "As partes vermelhas representam fragmentos de um coração",
    ],
    highlights: [
      "Símbolo moderno do romantismo",
      "Experiência cultural curiosa",
    ],
  },
  {
    placeId: "place-tertre",
    history:
      "A Place du Tertre é uma praça histórica em Montmartre que foi ponto de encontro de artistas desde o século XIX.",
    curiosities: [
      "Ainda hoje artistas pintam retratos ao vivo",
      "Frequentada por nomes importantes da arte moderna no passado",
    ],
    highlights: [
      "Ambiente artístico autêntico",
      "Experiência cultural ao vivo",
    ],
  },
  {
    placeId: "moulin-rouge",
    history:
      "O Moulin Rouge foi inaugurado em 1889 e se tornou o símbolo do cabaré parisiense, associado à Belle Époque e à vida noturna boêmia.",
    curiosities: [
      "Popularizou o cancan francês",
      "Seu moinho vermelho é um dos ícones visuais da cidade",
    ],
    highlights: [
      "Ícone da vida noturna parisiense",
      "Importância cultural e histórica",
    ],
  },
  {
    placeId: "galeries-lafayette",
    history:
      "As Galeries Lafayette foram fundadas em 1894 e representam o auge das lojas de departamento francesas, combinando comércio e arquitetura.",
    curiosities: [
      "Possui uma cúpula de vidro art nouveau",
      "O terraço oferece vista gratuita da cidade",
    ],
    highlights: ["Experiência de compras icônica", "Arquitetura elegante"],
  },
  {
    placeId: "opera-garnier",
    history:
      "A Ópera Garnier foi inaugurada em 1875 durante o reinado de Napoleão III e é um dos maiores exemplos da arquitetura do Segundo Império.",
    curiosities: [
      "Inspirou o livro 'O Fantasma da Ópera'",
      "Possui um lago subterrâneo real",
    ],
    highlights: [
      "Arquitetura luxuosa",
      "Importância cultural na música e teatro",
    ],
  },
  {
    placeId: "louvre",
    history:
      "O Louvre começou como uma fortaleza no século XII e foi transformado em palácio real antes de se tornar museu público em 1793, durante a Revolução Francesa.",
    curiosities: [
      "É o museu mais visitado do mundo",
      "Abriga a Mona Lisa, de Leonardo da Vinci",
      "A pirâmide de vidro foi inaugurada em 1989",
    ],
    highlights: [
      "Maior acervo artístico do mundo",
      "Marco histórico e cultural",
    ],
  },
  {
    placeId: "tulherias",
    history:
      "O Jardim das Tulherias foi criado no século XVI como jardim do Palácio das Tulherias, residência real até ser destruído em 1871.",
    curiosities: [
      "Foi aberto ao público após a Revolução Francesa",
      "Conecta o Louvre à Place de la Concorde",
    ],
    highlights: ["Espaço de lazer histórico", "Eixo central de Paris"],
  },
  {
    placeId: "place-concorde",
    history:
      "A Place de la Concorde foi palco de execuções durante a Revolução Francesa, incluindo as de Luís XVI e Maria Antonieta.",
    curiosities: [
      "Abriga um obelisco egípcio de mais de 3.000 anos",
      "Era chamada de 'Praça da Revolução'",
    ],
    highlights: ["Importância histórica revolucionária", "Grande eixo urbano"],
  },
  {
    placeId: "champs-elysees",
    history:
      "A Champs-Élysées foi desenvolvida no século XVII e se tornou uma das avenidas mais famosas do mundo, símbolo de prestígio e celebração nacional.",
    curiosities: [
      "É palco de desfiles militares e celebrações como a vitória na Copa do Mundo",
      "Liga a Place de la Concorde ao Arco do Triunfo",
    ],
    highlights: [
      "Boulevard mais famoso do mundo",
      "Centro de eventos e celebrações",
    ],
  },
  {
    placeId: "arco-triunfo",
    history:
      "O Arco do Triunfo foi encomendado por Napoleão Bonaparte em 1806 para homenagear o exército francês. Foi concluído em 1836.",
    curiosities: [
      "Abriga o Túmulo do Soldado Desconhecido",
      "Possui uma chama eterna desde 1923",
    ],
    highlights: ["Símbolo militar e nacional", "Vista panorâmica do topo"],
  },
  {
    placeId: "barco-sena",
    history:
      "O rio Sena foi essencial para o desenvolvimento de Paris desde a época romana, servindo como rota comercial e estratégica.",
    curiosities: [
      "Paris foi fundada como Lutécia pelos romanos",
      "As margens do Sena são Patrimônio Mundial da UNESCO",
    ],
    highlights: ["Visão única da cidade", "Perspectiva histórica diferente"],
  },
  {
    placeId: "invalides",
    history:
      "Les Invalides foi construído em 1670 por ordem de Luís XIV para abrigar veteranos de guerra. Hoje abriga o túmulo de Napoleão Bonaparte.",
    curiosities: [
      "A cúpula dourada é um dos marcos visuais de Paris",
      "Napoleão foi enterrado lá em 1840",
    ],
    highlights: [
      "Importância militar e histórica",
      "Ligação direta com Napoleão",
    ],
  },
  {
    placeId: "notre-dame",
    history:
      "A Catedral de Notre-Dame começou a ser construída em 1163 e levou quase 200 anos para ser concluída. É um dos maiores exemplos da arquitetura gótica francesa.",
    curiosities: [
      "Sobreviveu à Revolução Francesa com danos",
      "Sofreu um grande incêndio em 2019 e está em restauração",
    ],
    highlights: ["Marco histórico e religioso", "Arquitetura gótica icônica"],
  },
  {
    placeId: "sainte-chapelle",
    history:
      "A Sainte-Chapelle foi construída no século XIII por Luís IX para abrigar relíquias sagradas, incluindo a Coroa de Espinhos.",
    curiosities: [
      "Possui vitrais que cobrem mais de 600 m²",
      "É considerada uma obra-prima do gótico",
    ],
    highlights: ["Vitrais impressionantes", "Valor religioso e artístico"],
  },
  {
    placeId: "quartier-latin",
    history:
      "O Quartier Latin é uma das áreas mais antigas de Paris, associado à Universidade de Sorbonne e à vida intelectual desde a Idade Média.",
    curiosities: [
      "O nome vem do latim falado pelos estudantes",
      "Foi centro de protestos estudantis em 1968",
    ],
    highlights: ["Ambiente jovem e cultural", "Importância acadêmica"],
  },
  {
    placeId: "jardim-luxemburgo",
    history:
      "O Jardim de Luxemburgo foi criado em 1612 por Maria de Médici como parte de seu palácio, inspirado nos jardins italianos.",
    curiosities: [
      "É um dos parques mais frequentados pelos parisienses",
      "Possui estátuas de figuras históricas francesas",
    ],
    highlights: [
      "Ambiente elegante e relaxante",
      "Importância histórica e cultural",
    ],
  },
  {
    placeId: "pantheon",
    history:
      "O Panthéon foi originalmente construído como igreja no século XVIII, mas após a Revolução Francesa foi transformado em mausoléu para grandes figuras nacionais.",
    curiosities: [
      "Abriga nomes como Voltaire, Rousseau e Victor Hugo",
      "Tem inscrição 'Aos grandes homens, a pátria agradecida'",
    ],
    highlights: ["Memorial nacional", "Importância histórica e intelectual"],
  },

  //LONDRES

  {
    placeId: "big-ben",
    history:
      "O Big Ben é o apelido do grande sino do Palácio de Westminster, instalado em 1859. A torre em si, hoje chamada Elizabeth Tower, foi construída após o incêndio de 1834 que destruiu o antigo parlamento britânico.",
    curiosities: [
      "O nome 'Big Ben' refere-se ao sino, não à torre",
      "A torre foi renomeada em 2012 em homenagem à Rainha Elizabeth II",
      "O relógio é conhecido por sua precisão histórica",
    ],
    highlights: [
      "Símbolo icônico de Londres",
      "Referência mundial em arquitetura e pontualidade",
    ],
  },
  {
    placeId: "palacio-westminster",
    history:
      "O Palácio de Westminster é a sede do Parlamento do Reino Unido. Sua forma atual é majoritariamente do século XIX, reconstruída após o incêndio de 1834, em estilo neogótico.",
    curiosities: [
      "O local já era usado como centro político desde o século XI",
      "Abriga a Câmara dos Comuns e a Câmara dos Lordes",
    ],
    highlights: ["Centro político britânico", "Arquitetura neogótica marcante"],
  },
  {
    placeId: "westminster-abbey",
    history:
      "A Abadia de Westminster foi fundada no século X e reconstruída no século XIII em estilo gótico. É o local tradicional de coroações da monarquia britânica desde 1066.",
    curiosities: [
      "Abriga túmulos de figuras como Isaac Newton e Charles Darwin",
      "Todos os monarcas britânicos foram coroados ali desde Guilherme, o Conquistador",
    ],
    highlights: [
      "Importância religiosa e monárquica",
      "Patrimônio histórico nacional",
    ],
  },
  {
    placeId: "london-eye",
    history:
      "A London Eye foi inaugurada em 2000 como parte das celebrações do novo milênio, tornando-se rapidamente uma das atrações mais populares da cidade.",
    curiosities: [
      "Foi a maior roda-gigante do mundo na época",
      "Possui 135 metros de altura",
    ],
    highlights: [
      "Vista panorâmica moderna da cidade",
      "Símbolo da Londres contemporânea",
    ],
  },
  {
    placeId: "buckingham-palace",
    history:
      "O Palácio de Buckingham tornou-se residência oficial da monarquia britânica em 1837, durante o reinado da Rainha Victoria.",
    curiosities: [
      "Possui mais de 700 cômodos",
      "A troca da guarda é uma das cerimônias mais famosas do mundo",
    ],
    highlights: [
      "Residência oficial da monarquia",
      "Tradição e cerimônia britânica",
    ],
  },
  {
    placeId: "st-james-park",
    history:
      "O St James's Park é o parque real mais antigo de Londres, criado no século XVI por Henrique VIII como área de caça.",
    curiosities: [
      "Abriga pelicanos desde o século XVII",
      "Oferece vistas diretas do Palácio de Buckingham",
    ],
    highlights: ["Área verde histórica", "Integração com pontos reais"],
  },
  {
    placeId: "trafalgar-square",
    history:
      "A Trafalgar Square foi construída no século XIX para comemorar a vitória britânica na Batalha de Trafalgar em 1805, liderada pelo Almirante Nelson.",
    curiosities: [
      "A Coluna de Nelson tem cerca de 52 metros de altura",
      "É um dos principais pontos de manifestações públicas",
    ],
    highlights: ["Importância histórica militar", "Centro cultural e político"],
  },
  {
    placeId: "national-gallery",
    history:
      "A National Gallery foi fundada em 1824 e abriga uma das maiores coleções de pintura europeia do mundo, com obras do século XIII ao XIX.",
    curiosities: [
      "A entrada é gratuita, seguindo a política cultural britânica",
      "Inclui artistas como Van Gogh, Da Vinci e Turner",
    ],
    highlights: ["Referência mundial em arte", "Acesso público à cultura"],
  },
  {
    placeId: "piccadilly-circus",
    history:
      "Piccadilly Circus foi criado em 1819 como um importante cruzamento urbano e tornou-se um símbolo da modernidade londrina com seus painéis luminosos.",
    curiosities: [
      "É frequentemente comparado à Times Square de Nova York",
      "A estátua central é frequentemente confundida com Eros",
    ],
    highlights: ["Centro vibrante da cidade", "Ambiente urbano moderno"],
  },
  {
    placeId: "covent-garden",
    history:
      "Covent Garden começou como um mercado de frutas e vegetais no século XVII e foi transformado em um centro cultural e comercial moderno.",
    curiosities: [
      "Abriga apresentações de artistas de rua",
      "Já foi um dos principais mercados de Londres",
    ],
    highlights: [
      "Ambiente cultural e animado",
      "Mistura de tradição e modernidade",
    ],
  },
  {
    placeId: "british-museum",
    history:
      "O British Museum foi fundado em 1753 e abriga uma das maiores coleções de artefatos históricos do mundo, representando diversas civilizações.",
    curiosities: [
      "Possui mais de 8 milhões de itens",
      "Inclui a Pedra de Roseta, essencial para decifrar hieróglifos egípcios",
    ],
    highlights: [
      "Importância histórica global",
      "Acesso gratuito ao conhecimento",
    ],
  },
  {
    placeId: "st-pauls-cathedral",
    history:
      "A Catedral de São Paulo foi reconstruída após o Grande Incêndio de Londres em 1666, sob projeto de Christopher Wren.",
    curiosities: [
      "Sua cúpula é uma das maiores do mundo",
      "Sobreviveu aos bombardeios da Segunda Guerra Mundial",
    ],
    highlights: ["Arquitetura barroca inglesa", "Símbolo de resistência"],
  },
  {
    placeId: "tower-london",
    history:
      "A Torre de Londres foi fundada em 1066 por Guilherme, o Conquistador, servindo como fortaleza, prisão e residência real ao longo dos séculos.",
    curiosities: [
      "Abriga as Joias da Coroa britânica",
      "Foi palco de execuções históricas",
    ],
    highlights: ["Fortaleza medieval", "Importância histórica e política"],
  },
  {
    placeId: "tower-bridge",
    history:
      "A Tower Bridge foi inaugurada em 1894 para facilitar o tráfego sobre o rio Tâmisa sem interromper o transporte fluvial.",
    curiosities: [
      "Possui mecanismo basculante para passagem de navios",
      "É frequentemente confundida com a London Bridge",
    ],
    highlights: ["Engenharia vitoriana", "Cartão postal da cidade"],
  },
  {
    placeId: "camden-town",
    history:
      "Camden Town se desenvolveu no século XIX como área industrial e se transformou em um dos principais centros da cultura alternativa de Londres no século XX.",
    curiosities: [
      "Famosa por mercados e subculturas como punk e rock",
      "Frequentada por artistas como Amy Winehouse",
    ],
    highlights: ["Ambiente alternativo", "Cultura urbana diferenciada"],
  },
  {
    placeId: "notting-hill",
    history:
      "Notting Hill ganhou notoriedade no século XX e hoje é conhecido por seu festival cultural e suas casas coloridas.",
    curiosities: [
      "Sedia o Notting Hill Carnival, um dos maiores festivais de rua da Europa",
      "Ficou mundialmente famoso pelo filme homônimo de 1999",
    ],
    highlights: ["Bairro charmoso", "Identidade cultural forte"],
  },
  {
    placeId: "hyde-park",
    history:
      "Hyde Park foi estabelecido como parque real no século XVI por Henrique VIII e aberto ao público no século XVII.",
    curiosities: [
      "Abriga o Speaker's Corner, tradicional espaço de debates públicos",
      "É um dos maiores parques de Londres",
    ],
    highlights: ["Área verde histórica", "Espaço de liberdade de expressão"],
  },

  //MADRID
  {
    placeId: "puerta-sol",
    history:
      "A Puerta del Sol é uma das praças mais importantes de Madrid desde o século XV, originalmente sendo uma das portas de entrada da cidade medieval. Tornou-se o centro geográfico e simbólico da Espanha.",
    curiosities: [
      "É onde está o 'Km 0', ponto de referência de todas as estradas radiais da Espanha",
      "É palco das celebrações de Ano Novo, com a tradicional contagem regressiva e as 12 uvas",
      "Abriga o famoso relógio da Real Casa de Correos",
    ],
    highlights: [
      "Centro simbólico do país",
      "Ponto de encontro e eventos nacionais",
    ],
  },
  {
    placeId: "plaza-mayor",
    history:
      "A Plaza Mayor foi construída no início do século XVII durante o reinado de :contentReference[oaicite:1]{index=1}. Serviu como palco para mercados, touradas, celebrações e até execuções públicas durante a Inquisição.",
    curiosities: [
      "Já foi destruída por incêndios diversas vezes e reconstruída",
      "Possui uma estátua equestre de Felipe III no centro",
      "Era o principal espaço público da Madrid imperial",
    ],
    highlights: [
      "Arquitetura clássica espanhola",
      "Centro histórico bem preservado",
    ],
  },
  {
    placeId: "palacio-real-madrid",
    history:
      "O Palácio Real de Madrid foi construído no século XVIII sobre as ruínas do antigo Alcázar, destruído por um incêndio em 1734. É a residência oficial da monarquia espanhola, embora atualmente seja usado apenas para cerimônias.",
    curiosities: [
      "Possui mais de 3.000 cômodos, sendo um dos maiores palácios da Europa",
      "Foi encomendado por :contentReference[oaicite:2]{index=2}, primeiro rei da dinastia Bourbon na Espanha",
      "Abriga coleções de arte, armas e tapeçarias históricas",
    ],
    highlights: [
      "Símbolo da monarquia espanhola",
      "Arquitetura imponente e grandiosa",
    ],
  },
  {
    placeId: "catedral-almudena",
    history:
      "A Catedral de Almudena foi consagrada apenas em 1993 pelo :contentReference[oaicite:3]{index=3}, tornando-se uma das catedrais mais recentes da Europa, apesar de sua construção ter começado no século XIX.",
    curiosities: [
      "Seu interior é mais moderno comparado a outras catedrais europeias",
      "Está diretamente alinhada com o Palácio Real",
      "Mistura estilos neoclássico, neogótico e contemporâneo",
    ],
    highlights: [
      "Principal templo religioso de Madrid",
      "Contraste entre tradição e modernidade",
    ],
  },
  {
    placeId: "templo-debod",
    history:
      "O Templo de Debod é um templo egípcio original do século II a.C., dedicado ao deus Amon. Foi doado pelo Egito à Espanha em 1968 como agradecimento pela ajuda na preservação de monumentos ameaçados pela construção da represa de Aswan.",
    curiosities: [
      "É um dos poucos templos egípcios completos fora do Egito",
      "Foi reconstruído pedra por pedra em Madrid",
      "Está alinhado com o pôr do sol, criando um cenário icônico",
    ],
    highlights: [
      "Peça autêntica do Egito Antigo",
      "Um dos melhores pontos para pôr do sol",
    ],
  },
  {
    placeId: "gran-via",
    history:
      "A Gran Vía foi construída entre 1910 e 1929 como parte da modernização urbana de Madrid, conectando diferentes áreas da cidade e facilitando o tráfego.",
    curiosities: [
      "É conhecida como a 'Broadway de Madrid' por seus teatros",
      "Possui arquitetura que mistura estilos como art déco e neobarroco",
      "Foi cenário de eventos durante a Guerra Civil Espanhola",
    ],
    highlights: ["Centro comercial e cultural", "Arquitetura urbana marcante"],
  },
  {
    placeId: "parque-retiro",
    history:
      "O Parque do Retiro foi originalmente criado no século XVII como jardim privado da monarquia espanhola, sendo aberto ao público apenas no século XIX.",
    curiosities: [
      "Abriga o Palácio de Cristal, inspirado no Crystal Palace de Londres",
      "Foi usado pela corte para lazer e eventos",
      "Hoje é Patrimônio Mundial da UNESCO",
    ],
    highlights: [
      "Principal área verde da cidade",
      "Mistura de natureza e história",
    ],
  },
  {
    placeId: "museu-prado",
    history:
      "O Museu do Prado foi inaugurado em 1819 e abriga uma das mais importantes coleções de arte europeia do mundo, com foco em artistas espanhóis como :contentReference[oaicite:4]{index=4} e :contentReference[oaicite:5]{index=5}.",
    curiosities: [
      "Possui obras como 'Las Meninas' e 'O 3 de Maio de 1808'",
      "É considerado um dos museus mais importantes do mundo",
      "Tem forte ligação com a monarquia espanhola",
    ],
    highlights: [
      "Referência mundial em arte clássica",
      "Centro cultural de alto nível",
    ],
  },
  {
    placeId: "puerta-alcala",
    history:
      "A Puerta de Alcalá foi inaugurada em 1778 durante o reinado de :contentReference[oaicite:6]{index=6} como um arco triunfal que marcava uma das entradas da cidade.",
    curiosities: [
      "É um dos primeiros arcos triunfais modernos da Europa",
      "Foi construído antes do Arco do Triunfo de Paris",
      "Simboliza a modernização de Madrid",
    ],
    highlights: ["Monumento histórico icônico", "Marco urbano da cidade"],
  },
  {
    placeId: "plaza-cibeles",
    history:
      "A Plaza de Cibeles é um dos pontos mais emblemáticos de Madrid, destacando-se pela fonte dedicada à deusa Cibeles, construída no século XVIII.",
    curiosities: [
      "É o local onde o Real Madrid celebra suas conquistas",
      "Abriga o antigo Palácio de Comunicações, hoje sede da prefeitura",
      "É um dos principais cartões postais da cidade",
    ],
    highlights: ["Centro visual e simbólico", "Arquitetura monumental"],
  },
  // AMSTERDAM
  {
    placeId: "red-light-district",
    history: "O Red Light District, ou De Wallen, é a parte mais antiga de Amsterdam. Desenvolveu-se em torno do porto antigo, onde a prostituição se enraizou desde a Idade Média, alimentada pelos marinheiros que transitavam pela cidade.",
    curiosities: [
      "As luzes vermelhas eram usadas para disfarçar imperfeições na pele no século XX.",
      "A área é protegida e a profissão é legalizada desde o ano 2000 na Holanda."
    ],
    highlights: ["Arquitetura preservada", "Centro vibrante", "Canais estreitos charmosos"]
  },
  {
    placeId: "canais-amsterdam",
    history: "Os canais semicirculares de Amsterdam, os Grachtengordel, formaram-se durante a 'Idade de Ouro' holandesa (século XVII) como um ambicioso projeto de expansão por drenagem e defesa.",
    curiosities: [
      "Mais de 100 km de canais compõem o anel central, com cerca de 90 ilhas.",
      "Milhares de bicicletas são retiradas anualmente do fundo destes canais."
    ],
    highlights: ["Patrimônio Mundial da UNESCO", "1500+ Pontes charmosas"]
  },
  {
    placeId: "anne-frank",
    history: "A Casa de Anne Frank é o esconderijo (o Anexo Secreto) onde a família Frank e outros se esconderam dos nazistas por mais de dois anos. Otto Frank, pai de Anne e único sobrevivente, decidiu converter o prédio em um museu memorial.",
    curiosities: [
      "A estante original que ocultava a entrada secreta ainda está preservada lá dentro.",
      "O Diário de Anne Frank já foi traduzido para mais de 70 idiomas."
    ],
    highlights: ["Um relato marcante da Resiliência", "Experiência sensível da História Mundial"]
  },
  {
    placeId: "foodhallen",
    history: "O Foodhallen de Amsterdam abriu em 2014, situado dentro do De Hallen, uma antiga e maciça garagem/armazém de bondes (tram) da cidade do início dos anos 1900.",
    curiosities: [
      "Pioneiro em Amsterdam na onda de 'mercados de comida' nos moldes globais.",
      "Abriga 21 quiosques de comida com opções para todos os nichos de gastronomia."
    ],
    highlights: ["Variedade gastronômica local e mundial", "Arquitetura industrial recuperada"]
  },
  {
    placeId: "vondelpark",
    history: "Inaugurado em 1865 como 'Nieuwe Park', foi renomeado rapidamente após a estátua do poeta renascentista Joost van den Vondel ter sido posta no local.",
    curiosities: [
      "Com o nível do mar e a lama, o solo do parque cede cerca de 1,5 cm por ano.",
      "Na década de 70, o parque virou o epicentro oficial de acampamento hippies da cidade."
    ],
    highlights: ["47 hectares de natureza", "Teatros abertos", "Ciclovias amplas"]
  },
  {
    placeId: "rijksmuseum",
    history: "O museu nacional dos Países Baixos, consolidado em sua enorme e atual posição após um projeto arquitetônico desenhado por Pierre Cuypers em 1885.",
    curiosities: [
      "A ciclovia do museu passa literalmente por DENTRO de um de seus arcos na fachada principal.",
      "O quadro icônico 'Ronda Noturna' de Rembrandt tem seguranças estritamente designados."
    ],
    highlights: ["A Maior coleção de arte Holandesa", "Biblioteca Cuypers de cair o queixo"]
  },
  {
    placeId: "praca-museus",
    history: "Museumplein (Praça dos Museus) ganhou sua glória no fim do Século XIX quando a região transformou-se no grande centro expositivo do sul de Amsterdam.",
    curiosities: [
      "O piso da praça esconde, abaixo dele, um enorme complexo de estacionamento e um supermercado.",
      "Durante invernos rígidos antigamente, o lago na praça se tornava um imenso rinque de patinação."
    ],
    highlights: ["Concentração de marcos da arte", "Gramados abertos para relaxar"]
  },
  {
    placeId: "zaanse-schans",
    history: "Este bairro fora de Amsterdam foi praticamente montado a partir de edifícios de madeira autênticos transferidos para criar um imersivo vislumbre do século XVIII.",
    curiosities: [
      "Há um moinho especializado em moer pedras raras para a extração minuciosa de tintas clássicas.",
      "No auge da era industrial holandesa, esta região tinha incríveis 600 moinhos funcionando."
    ],
    highlights: ["Viagem no tempo", "Moinhos produtivos ainda ativos", "Fábrica de Tamancos (Clogs)"]
  },
  {
    placeId: "kalverstraat",
    history: "Kalverstraat (ou Rua dos Bezerros) foi construída no século XIV ao longo das antigas muralhas e recebia uma forte concentração de mercados de gado intensivos.",
    curiosities: [
      "É historicamente a rua de varejo mais cara e procurada de todos os Países Baixos.",
      "No banco imobiliário holandês, Kalverstraat representa a propriedade mais cara."
    ],
    highlights: ["Imensa variedade de luxo", "Coração do comércio"]
  },
  {
    placeId: "heineken-exp",
    history: "Idelizada na clássica cervejaria original do grupo Heineken, datada de 1867, após o local cessar a escala industrial de produção.",
    curiosities: [
      "Cavalos e charretes originais do século XIX que faziam as entregas, continuam estabulados e expostos.",
      "Gerard Heineken fundou a empresa com 22 anos, comprando esta antiga estrutura."
    ],
    highlights: ["História marcante da cervejaria", "Autêntica caldeira de cobre de 1867"]
  },
  {
    placeId: "keukenhof",
    history: "Considerado o 'Jardim da Europa', o parque nasceu do antigo pomar da Condessa Jacqueline.",
    curiosities: [
      "Exatos sete milhões de bulbos e cormos são meticulosamente replantados a cada ano manualmente.",
      "É aberto em sua plena glória desabrochada por apenas 8 curtas semanas no ano!"
    ],
    highlights: ["Maior parque das flores", "Campos clássicos e originais das Tulipas na Holanda"]
  }
];
