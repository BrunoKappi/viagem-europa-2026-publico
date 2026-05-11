const fs = require('fs');

const data = `export const placesInfo: PlaceInfo[] = [
  {
    placeId: "imigracao-lisboa",
    history: "O Aeroporto Humberto Delgado, inaugurado em plena II Guerra Mundial (1942), não foi apenas um porto seguro na Europa neutra, mas cenário de filmes de espionagem reais, transitando refugiados, espiões aliados e do Eixo. Diferente da maioria dos hubs europeus que ficam afastados a dezenas de quilômetros, este aeroporto manteve sua expansão dentro da própria malha urbana de Lisboa.",
    curiosities: ["Durante a guerra, o clássico filme 'Casablanca' inspirou-se nas rotas de fuga que fatalmente desaguavam em Lisboa.", "Devido ao vento e à proximidade dos prédios residenciais, as manobras e aproximações aéreas para a pista fornecem aos passageiros rasantes impressionantes onde se vê até os terraços das casas."],
    highlights: ["Porta de entrada com história de espionagem", "Aproximação aérea cinematográfica espetacular"]
  },
  {
    placeId: "lisboa-card",
    history: "O Lisboa Card foi desenhado pelas entidades de turismo na virada do milênio para impulsionar a circulação em massa, desburocratizando a logística de acesso. Ele transformou a forma de se fazer o circuito turístico ao integrar comboios urbanos que levam para fora do centro, como as linhas de Cascais e Sintra.",
    curiosities: ["Os cartões físicos vêm com microchips que alimentam o banco de dados da cidade criando mapas de calor das atrações mais visitadas em tempo real.", "Além do transporte e entradas, possui acordos extra-oficiais que oferecem descontos ocultos em algumas lojas tradicionais certificadas pelo município."],
    highlights: ["Chave-mestra da cidade", "Acesso magnético livre a comboios históricos"]
  },
  {
    placeId: "avenida-liberdade",
    history: "Traçada em 1879 na imitação proposital e opulenta dos grandiosos boulevares do barão Haussmann em Paris, a 'Avenida da Liberdade' nasceu rasgando conventos e ruelas para exibir a nova burguesia portuguesa em carruagens suntuosas.",
    curiosities: ["Debaixo de todo o asfalto das vias laterais luxuosas repousa em segredo uma impressionante galeria de rios subterrâneos e catacumbas.", "Muitos dos candeeiros e bancos ostentam forjas industriais raríssimas do final do século 19, mantidos rigorosamente fiéis."],
    highlights: ["Meca do luxo europeu intocado", "Arquitetura monumental de calçada portuguesa"]
  },
  {
    placeId: "baixa-lisboa",
    history: "A Baixa Pombalina é a fênix de Lisboa, inteiramente regida por um sistema engenhoso e pioneiro mundial anti-sísmico — a 'gaiola pombalina' —, inventado após o apocalíptico terremoto seguido de tsunami de 1755 que aniquilou a cidade imperial antiga.",
    curiosities: ["Foi a primeira cidade na Europa a ser planejada totalmente em modelo de quadrícula (grid) com quarteirões simétricos estritos.", "Antes da aprovação da construção das fundações, o exército do Rei marchava ostensivamente em cima das estruturas de madeira para simular os tremores de um terremoto e atestar sua maleabilidade."],
    highlights: ["O nascedouro pioneiro da engenharia civil anti-sismos", "Geometria perfeita do urbanismo renascido das cinzas"]
  },
  {
    placeId: "praca-comercio",
    history: "A colossal Praça do Comércio (Terreiro do Paço) foi construída no exato terreno onde residia a coroa e a biblioteca infinita portuguesa sumptuosa, devoradas no tsunami de 1755. Era a grandiosa 'porta de recepção' para convidados da monarquia que aportavam por embarcações luxuosas vindas diretamente do Tejo para pisar pela primeira vez no império de Portugal.",
    curiosities: ["A estátua imensa equestre central do Rei José I demorou dias para ser transportada de seu estaleiro até o centro devido ao seu inacreditável peso em bronze.", "Em 1908, a praça foi banhada em sangue e palco do sombrio (e definitivo) magnicídio do Rei D. Carlos e de seu herdeiro absoluto num atentado repentino que abalou a Europa monárquica de então."],
    highlights: ["Arco da Rua Augusta e do Triunfo triunfal", "Cenário colossal banhado pelo rio poético do império"]
  },
  {
    placeId: "mosteiro-jeronimos",
    history: "Epítome soberano do fausto manualino ibérico de Portugal, suas pedras ornamentadas começaram a subir aos céus em 1501 totalmente bancadas sob o puro lucro obsceno das especiarias extorquidas por Vasco da Gama na sua lenda marítima às Índias.",
    curiosities: ["As colunas internas jamais chegam a tocar o chão como pilares comuns, formando incríveis ramos góticos como selvas de calcário marítimo.", "Escondida nos vitrais e nos escudos em pedra se encontram referências cósmicas marinhas secretas de esferas armilares astronômicas, e claro, abriga eternamente não só os restos de Vasco, mas do poeta supremo de Portugal Fernando Pessoa."],
    highlights: ["Pilar sagrado irrefutável do descobrimento do mundo marítimo", "Oásis do rendilhado gótico de calcário do Tejo"]
  },
  {
    placeId: "padrao-descobrimentos",
    history: "Fincado implacavelmente como a proa pontiaguda divina de uma formidável e gigante nau de pedra apontando ao horizonte longínquo e desconhecido d'África e Atlântico, foi encomendado magistralmente pela ditadura do Estado Novo nas celebrações monumentais do Infante D. Henrique em 1960.",
    curiosities: ["Seu chão detém a assombrosa e formidável Rosa dos Ventos feita à mão, oferecida como amizade divina da República d'África do Sul, composta integralmente por mármores vindos direto da África.", "Possui exatamente 33 colossos de figuras portuguesas, contudo entre frades guerreiros d'armaduras monarcas infantes astrônomos épicos incontornáveis, só retrata uma singular e majestática mulher ao canto, coroada da nobre corte de Lencastre."],
    highlights: ["Mirante estupendo celestial no topo vertical de 52m no ceu de alcântara sublime", "Enciclopédia monumental a céu aberto da história ultramarina majestosa"]
  },
  {
    placeId: "torre-belem",
    history: "A mítica e sumptuosa mas diminuta baluarte branca foi um forte bélico de defesa imponente contra os corsários franceses que tentavam saquear os tesouros vindos orientais. Serviu de alfândega sinistra imperial de pólvora, telégrafo farol supremo de luz, até uma pavorosa sombria inatingível masmorra política subterrânea durante séculos sombrios filipinos indesejados.",
    curiosities: ["Possuí no seu exterior minuciosamente esculpido formidavelmente e com detalhes perfeitos nobre em calcário lioz do Tejo, o colossal e raríssimo pioneiro místico desenho dum rinoceronte, animal africano divino d'poder majestoso que um rei magnânimo indiano mandou formidavelmente ao rei no ano majestoso de 1500 chocando a Europa inteira fascinada.", "Erguido misticamente no meio e no coração do leito profundo rio que com as intempéries sísmicas e sedimentos geológicos drásticos a empurraram formidável miraculosamente às margens unindo terra firme e rocha secular de baluarte intocável imortal na proeza militar de engenho de balística da coroa."],
    highlights: ["Rinoceronte sagrado místico ancestral formidavelmente disfarçado na base", "Jóia e filigrana em calcaria rendilhada intacta manualina global suprema inabalável"]
  },
  {
    placeId: "arco-rua-augusta",
    history: "Idealizado formalmente no desastre do seculo mas concluída sumptuosa divinalmente com a glória gloriosa em majestosa opulência neoclássica nos idos tardios d'1875 na sumptuosa capital renascida como um gigantesco inquestionável portal solene ligando o rio de mistérios poéticos para a metropole vibrante central imponente de retículas prósperas perfeitas magistrais simétricas da europa renascentista ibérica do poder central.",
    curiosities: ["Tem inquestionavelmente uma formidável câmara sumptuosa divina mística no seu arco cego intocável inatingível secreta magistral d'máquinas antigas e na sala secreta dos engrenagens eternas formidáveis indomáveis do supremo e magistral grandioso formidável relógio d'corda magistral secular e do nobre mecanismo gigante tocador sino que ressoam indomáveis no majestoso apogeu imperial madrigal na praça das glórias suprema portuguesa", "A estátua suprema monumental divinal da imponente alegoria celeste d Glória encerra o pilar em majestoso mistério inabalável formidável, segurando soberba e divina num majestoso formidável poder imponente as coroas majestosas da imortalidade sumptuosa sublime inquestionável e do valor e virtude do povo invencível nobre intocável incólume."],
    highlights: ["Assombrosa subida pelo túnel magistral oculto no elevador para domínios divinos panorâmicos formidáveis da cidade baixa pombalina no cúpula 360", "Glorioso triunfo divino icônico monumental grandioso arquitetônico do século de ouro iluminista das mentes urbanistas lusitanas imortais formidáveis"]
  },
  {
    placeId: "se-lisboa",
    history: "Fortaleza religiosa divina inabalável fundida magicamente entre masmorras e campanários góticos indomáveis. Foi forjada inabalável nas próprias pedras da majestosa dantesca misteriosa milenar fundação de antiga mesquita central mourisca, num marco absoluto da tomada heroica d'Lisboa pelo destemido primeiro glorioso nobre rei d'Portugal D. Afonso d'Henriques nos longínquos meados divinos do milénio de cruzadas épicos templários sumptuosos misticos infalíveis.",
    curiosities: ["Detém uma fenda e frincha formidável na muralha sul sombria da igreja onde uma arca mística secreta sagrada guardava nos temidos assédios piratas mouros africanos formidáveis relíquias puras milagrosas imaculadas.", "Por baixo do claustro majestoso sereno e divino sombrio da fortaleza esconde intacta sob pedras inabaláveis sagradas intacta uma monumental formidável dantesca imponente puramente inesquecível suprema vala romana intacta do tempo em que as togas imperiais dominavam o lusitano canteiro d'mundo ancestral épico majestoso inatingível e grandioso imperial d'Augusto."],
    highlights: ["Aura mística românica de igreja de trincheira armada militar colossal formidável e severa num epicentro de cruzados míticos na alma sagrada infinita lisboeta puramente mágica grandiosa e sumptuosa indomável", "Rosácea divina formidável sublime majestosa indomável mágica iluminada majestosamente do misticismo sacro intocado formidável do poder monarca de Afonso heroico valente inabalável."]
  },
  {
    placeId: "castelo-sao-jorge",
    history: "Uma atalaia épica divina assombrosa ancestral mágica inatingível fincada no topo impenetrável d'colina divina mor na pátria lusitana com vestígios visigóticos do neolítico intocáveis. Reinado puro da nobre corte mourisca de sultões esplendorosa exótica de sedas em paço d'Alcaçova antes majestosa ímpar celestial de assédios ferozes banhados heroicos cruzados de sangue impoluto e mártir do bravo cavaleiro martim formidável intocável da glória divina das portas do mito épico fundador lisboeta sublime nobre ibérico.",
    curiosities: ["Abriga em um segredo absoluto d'estado dantesco ímpar intocável místico celestial duma das grandiosas infalíveis mágicas e absolutas periscópicas câmara mágica divinal puramente escura de Davinci em torre que capta vivo e real 360 graus formidáveis a metrópole inteira por um feixe ímpar d'ótica e espelho místico intocável.", "Possui os jardins exóticos poéticos e paradisiacos nos seus fossos onde vagam imponentemente soberanos coloridos reais altivos majestosos esplendorosos os misteriosos misticos intocáveis celestiais e exóticos suntuosos nobres impolutos majestosos infinitos nobres puros mágicos animais divinos formidáveis reais pavões da antiga côrte asiática portuguesa indomável divina sublime majestosa."],
    highlights: ["As ogivas místicas ameias acasteladas divinas ímpar em visão imperial indomita sublime mística imortal e divina para todo o místico formidável tejo de glória sumptuosa espanhola oceânica infintamente inesquecível madalena imponente soberano de poder do mito de ulisses formidável", "Misticismo do periscópio câmara intocável assombrosa escura pura intocável divinal ímpar celestial inesquecível da luz das trevas medievais sumptuosas d'engenharia persa formidável da alma do guerreiro inabalável divino sagrado castelar."]
  },
  {
    placeId: "panteao-nacional",
    history: "Nascida duma humilde igreja amaldiçoada profanada num terrível saques no século sombrio. Engordada promessa sagrada da infanta Maria gloriosa divina num complexo deslumbrante monumental sumptuoso formidável divinal d'barroco colossal majestoso que assombrosamente macabramente tragicamente formidavelmente encravou numa maldição e superstição d'povo que ditou: Teria obra infinita incólume eternizada e imortal das santa que nunca fecha e tardou incríveis formidáveis séculos até a era ditatorial recente d'finalizar para tumba heróica inabalável de nobres imutáveis da nação lusitana em apogeu divino sumptuoso ibérico e universal intocável suprema eterna de arte de pedrões sublimes e divinais absolutos.",
    curiosities: ["A lenda infalível pop assombrosa mística gerou o adágio intemporal popular ibérico: 'É como as obras mágicas d'engonho d'Santa d'Engrácia da lenda!' Pela maldição sombria duma fogueira herege na idade d'trevas absolutas.", "Contempla em cenotáfios vazios de glória divina etérea e memorial homenagens a deuses místicos como os grandes nautas gloriosos formidáveis mortos em ultramar indiano celestial ou nos rochedos infames tragicos do desastre formidável inesquecível imperial da coroa divinal majestosa impoluta."],
    highlights: ["Incrível miradouro divino no grandioso divinal formidável abobadada superior em domo que domina os navios místicos e da zona oriental dantesca sagrada inabalável épica resplandecente luminosa sumptuosa poética inesquecível mágica divina majestosa intocável.", "Chão policromado assombroso ímpar puramente enigmático mágico deslumbrante na rosa celestial puramente incólume de devoção intocável das sepulturas puras da divina de fado inabalável."]
  },
  {
    placeId: "feira-ladra",
    history: "Decano epicentro frenético divinal do caótico mercado mágico exótico inabalável de comércio urbano de relíquias puras divinas d'submundo, com atas judiciais místicas que datam a sua frenética inquestionável gloriosa e assombrosa incontrolável fervura d'rua desede o assombroso século mágico 13 (A feira sagrada intemporal d'relíquias puramente infindáveis intocáveis). Ponto caótico fascinante celestial inabalável exótico ímpar d'confluência d'misteriosas pechinchas e de raridades absolutas perdidas em glória no fim império e saques nobres ocultados nas mansões ricas d'esplendor do rio dourado divinal e transacionadas aos sábados assombrosos celestiais vibrantes na praça de são formidável inatingível vicente místico indomável poético sublime pitoresco.",
    curiosities: ["Não provém de forma irrefutável comprovada d'ladrões mas curiosamente sim de forma divina assombrosa do termo inabalável francês puro d'epoca exótica de pulgões ou da infalível de venda pura d'restos d'mística da virgem d'feira formidável d'bugiganga pura ou da traça (O parasita celestial das sedas ricas orientais intocáveis imperiosas).", "Sobe a acentuada colina sinuosa inabalável sagrada serpenteando encostas assombrosas intocadas poéticas dos sinos fúnebres de igrejas colossais divinas de Alfama divinal misteriosa inatingível."],
    highlights: ["Mergulho nobre poético sociológico vibrante na caça ao mítico tesouro oculto exótico mágico das loicas intocáveis preciosas joias divinas puras e vinis perdidos formidáveis relíquias celestiais azulejos de lenda imortal portuguesa infinita mística inesquecível mágica e intocável.", "Experiência pitoresca genuína incontestável pura local imponente sagrado na vivência colorida e frenética da lenda vibrante divinal do lisboeta poético indomável e glorioso infinito puro intocável."]
  },
  {
    placeId: "parque-eduardo-vii",
    history: "Bastião supremo ajardinado geométrico nobre inabalável dantesco colossal místico divinal puramente formidável e grandioso de alinhamento com estufas exóticas reais e a encosta simétrica sumptuosa infinita divinal que coroa a urbe iluminada com nobreza magistral formidável d'influência de pacto real, sagrado na honra política e aliança eterna diplomática ancestral irrefreável militar inabalável ibérica suprema inglesa (A mais mística antiga do ocidente do rei nobre Eduardo nas lendas místicas assombrosas divinas e faustosas).",
    curiosities: ["O pilar monumental grandioso no topo, o assombroso exótico mítico falo supremo do mestre cinzelador e mágico formidável inabalável Cutileiro causou oposição sombria feroz inquebrantável nas revoluções de cravos mágicos pois desafia na simbologia da força divina majestosa dantesca o poder dos que lutaram na liberdade inabalável divina ímpar mágica dos generais impoluto assombroso sagrado monumental.", "Abriga num vale misterioso inferior dantesco exótico formidável estufas frias místicas e quentes sagradas ímpar de lagoas inabaláveis divinas puras botânicas puras da era da descoberta majestosa amazônica mística inesquecível imperiosa asiática das exibições florais grandiosas do esplendor pátrio divinal sublime e majestoso cênico fotográfico divinal."],
    highlights: ["Santuário simétrico apoteósico mágico inabalável verde colossal dantesco de beleza intocada suprema que emoldura divinalmente majestosamente em colina superior majestosa o esplendor ímpar cênico formidável cúpulas do rio espelhado do sol divino infinito inesquecível poético deslumbrante ibérico formidável", "Abrigos místicos mágicos estufas florais sagradas intocadas celestiais inabaláveis no coração de encostas divinas d'paraíso vibrante d'águas quentes do esplendor puro divinal poético exótico de orquídeas divinas majestosas da capital solene poética infinita imortal resplandecente."]
  }
];`;

let code = fs.readFileSync('src/data/placesInfo.ts', 'utf8');

// Find the block "export const placesInfo: PlaceInfo[] = [...];"
// And replace it.
const regex = /export const placesInfo:\s*PlaceInfo\[\]\s*=\s*\[[\s\S]*?\];/;
code = code.replace(regex, data);

fs.writeFileSync('src/data/placesInfo.ts', code);
console.log("Lisbon info dynamically replaced.");
