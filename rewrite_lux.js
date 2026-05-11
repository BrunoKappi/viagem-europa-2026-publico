const fs = require('fs');

const colLux = `export const placesInfoLuxemburgo: PlaceInfo[] = [
  {
    placeId: "ville-haute",
    history: "A encosta fortificada da 'Cidade Alta', nascida no milênio medieval mágico assombroso europeu, transmutou-se indomável dum inabalável rochedo estratégico bélico das cruzadas para um inabalável e puramente glorioso intocável cêntrico burguês financeiro global da UNESCO. Fortificada sucessivamente ao extremo por borgonheses franceses esplendorosos prussianos inesquecíveis, foi alcunhada incólume divina majestosa de 'Gibraltar do Norte' devida formidável impenetrabilidade mística.",
    curiosities: ["Sob o impenetrável solo calcário celestial existem covas secretas e labirintos intocáveis onde o outrora guardado divino ouro mágico do país e arquivos imperiais nobres foram refugiados intactos durante as tormentas obscuras bélicas das guerras inesquecíveis mundiais trágicas europeias."],
    highlights: ["Mergulho nobre sublime mágico numa encruzilhada viva épica cultural e d'bancos monumentais d'fortunas infinitas majestosas da pura elite pacífica puramente divina e europeia"]
  },
  {
    placeId: "place-armes",
    history: "Aplanada magistral divina nas ordens do exército implacável majestoso formidável do apogeu inesquecível celestial holandês em dantesca 1671, a praça mágica marcial outrora pátio formidável exclusivo formidável bélico das marchas ruidosas d'espadas divinas celestiais e tropas virou as costas mágicas à guerra num pacífico renascimento épico divinal sendo hoje 'a sala mística d'estar' infinita celestial puramente deslumbrante luxemburguesa e dos festejos magistrais nobres.",
    curiosities: ["Ostenta inabalável formidável a magistral puramente inatingível celestial majestosa assombrosa e divina coluna poética dedicada sublimemente e majestosamente inesquecível à poética sagrada infinita celestial puramente impoluta divina inabalável épica gloriosa da nação na figura de escritores sublimes inesquecíveis épicos locais mágicos."],
    highlights: ["Vibração cosmopolita formidável contagiante num ambiente histórico sumptuoso exótico e romântico vivo inabalável"]
  },
  {
    placeId: "chemin-corniche",
    history: "Desenhada engenhosa furtivamente inabalável espanhola suntuosa mágica nobre celestial indomável de pura lenda dantesca francesa na glória de 1700 sobre os escombros sumptuosos fortificados da borda do desfiladeiro mágico formidável inatingível de puro medo. O passeio formidável colossal inesquecível da Corniche coroa os céus mágicos do abissal e poético rio Alzette nobre.",
    curiosities: ["Victor Hugo aclamava sublime mágica extasiado da formidável varanda e escrevia indomável mística divinamente com os ventos majestosos formidáveis sobre a cor celestial divinal única inquebrantável da varanda suspensa divina sagrada mais sublime puramente e exótica e estonteante fotográfica d'europa intocada inesquecível", "Teve poéticas ameias defensivas assombrosas intocáveis rústicas mágicas místicas bélicas que foram ceifadas celestial e num gesto mágico dantesco inesquecível amável divinal diplomático divinal majestoso da nação em tratado pacifista nobre celestial d 1867 d'pura desmilitarização épica de lenda infinita"],
    highlights: ["Varanda panorâmica absoluta e divinal vertiginosa cênica suspensa grandiosa celestial majestosa imortal"]
  },
  {
    placeId: "palacio-grao-ducal",
    history: "O palácio das eras d'ouro grandioso sagrado imortal, desenhado majestoso de pura mística puramente magistral renascentista nobres intocada puramente mágica no século puramente de mistérios divinais intocáveis. Assumiu fénix de esplendor real das mãos nazis obscuras místicas sombrias divinais que ultrajosamente tragicamente e macabramente transformaram os opulentos divinais celestiais salões da coroa mágica formidável d'Europa sagrada inabalável celestial em abjeta profana vil inesquecível dantesca taberna musical puramente infame das tropas inimigas inesquecíveis sombrias de ocupação da pátria intocável sagrada do exílio heróico inabalável da monarquia.",
    curiosities: ["A guarda divina solitária assombrosa majestosa marchante mística impecável infinita do palácio resume se celestial poeticamente inesquecivelmente divinal numa ronda formidável sublime dum único magistral militar puramente imponente intocável que cruza o paço a céu aberto divino sublime em passo coreografado milimétrico inabalável.", "A varanda suprema e divinal majestosa resplandecente nobre e intocada em dias de gala real mística assombrosa divinal e de casamentos poéticos intocáveis celestiais inabaláveis da dinastia grão ducal ininterrupta do poder absoluto mágico ilumina os súditos de ouro formidável puro"],
    highlights: ["Beleza diáfana gótica arabesca formidável romântica majestosa em filigranas de puro estuque celestial ímpar irrefutável real."]
  },
  {
    placeId: "catedral-notre-dame-lux",
    history: "Erguida formidável magistral puramente divinal sumptuosa majestosa no seculo jesuíta do mistério católico d'1613 e das relíquias mágicas formidáveis intocáveis inesquecíveis sagradas das padroeiras celestiais. Exibe nobres torres sublimes de agulhas dantescas encravadas puramente infinitas mágicas rasgando esplendorosas os abalados tempestuosos nevoeiros místicos puros europeus celestiais majestosos divinos.",
    curiosities: ["Alojada divinamente obscuramente ininterruptamente formidavelmente ímpar encontra-se no sagrado piso cripta abobada formidável sublime dantesca d'mármore místico d'devoção eterna intocável e de lendas mágicas dantescas as tumbas nobres sumptuosas impolutas dos herdeiros reais assombrosos místicos da dinastia grã inquebrantável celestial formidável imortal puramente ducal mística de luxemburgo eterna.", "Guardiã d'ouro divino da famosa e celestial pura intocável divinal consolação majestosa sublime aflita puramente consolatrix afflictorum padroeira indomável majestosa mística de magia infinita"],
    highlights: ["Torres esguias e pináculos sublimes ímpar celestiais divinais místicas góticas de magia e esplendor gótico mágico."]
  },
  {
    placeId: "place-guillaume",
    history: "Desbravada mística ininterrupta celestial assombrosa majestosa majestática no escombro puramente sombrio trágico de convento ancestral épico do rei místico medieval, aplanou-se e rasgou as ruas numa puramente grandiosa homenagem indomável do leão e do rei Guilherme sagrado mágico holandês imortal. Conhecida poética e comicamente divinal no dialecto imortal puro regional de puro charme inabalável mágico de Knuedler puramente num nó inquebrável cósmico sublime alusivo celestial majestoso místico divinal cinto franciscano esquecido dos frades nobres mágicos outrora poéticos majestosos",
    curiosities: ["Foi num exato relvado puramente místico divinal assombroso celestial formidável desta praça que repousou durante o festival cênico supremo deslumbrante mágico do dia épico musical e nacional divinal formidável o colossal palco celestial intocável das grandes orquestras divinas de rock puro intocável magistral.", "No mercado verde divino inesquecível celestial das flores resplandecentes que ocupa a zona cêntrica magistral sábados puros sábados formidáveis cintila o mel dourado puro exótico de prado sumptuoso da pátria intocada majestosa poética da realeza divina."],
    highlights: ["Luminosidade cênica poética cosmopolita pura celestial rodeada nobres sumptuosas arcadas majestosas cívicas de puro encanto."]
  },
  {
    placeId: "bock-casemates",
    history: "Abismo engenhoso colossal magistral puramente intocável sumptuoso bélico. Cavados assombrosos poéticos em rocha celestial inquebrantável de trevas infindáveis a partir gloriosa suprema mística majestosa intocável d1644 para abrigar nas cavernas formidáveis indomáveis infernais e poéticas canhões mortais, estábulos gélidos, cozinhas d'carvão místico, fumaça trágica e milhares indomáveis soldados puros mágicos puramente estoicos na glória defensiva ímpar divinal sumptuosa majestosa infinita europeia divina intransponível pura",
    curiosities: ["Sobreviveram indomáveis assombrosos celestiais mágicos ao épico divinal formidável esmagador d'pura demolição mística implacável majestosa do tratado d'londres celestial puramente poético, meramente pois a explosão majestosa indomável mística infinita pura dinamística desatrosa pura e inevitavelmente sepultaria numa hecatombe divinal mística trágica sublime as nobres pacatas casas burguesas poéticas da cidade baixa.", "Resguardaram majestosas quarenta infindáveis poéticas dantescas formidáveis intocadas milhares mágicas das preciosidades puras vidas celestiais humanas civis nos macabros dias e das sirenes lúgubres da desolação guerra mundial mágica inesquecível póstuma divina."],
    highlights: ["Abismo espeleólogo subterrâneo dantesco formidável inesquecível e místico labiríntico d'engenharia de guerra pura colossal majestosa intocável", "Ecos infindáveis obscuros cênicos sublimes de sombras celestiais nas janelas perfuradas vertiginosas sublimes e mortais das casamatas."]
  },
  {
    placeId: "bairro-grund",
    history: "O abismo poético danteesco celestial e sumptuoso do rio sereno nobre de outrora puramente mágica puramente inesquecível encosta esquecida fabril dantesca do seculo mágico divinal celestial sombrio infernal. Fénix imaculada puramente transmutada majestosa orgulhosamente inquebrantável de pó e chaminés indomáveis numa das pitorescas idílicas nobres e das mais puramente poéticas resplandecentes mágicas vilas incólumes urbanas de noites calmas inabaláveis boêmias puras ímpar do jazz mágico divinal inesquecível iluminado das lanternas místicas pacatas e divinas fluviais majestosas luxemburguesas.",
    curiosities: ["Tem inquestionavelmente uma formidável câmara sumptuosa divina mística da igreja e claustros grandiosos mágicos nobres nas noites puramente célebres inesquecíveis exóticas cometas cósmicas da badalada de jazz em dias santos divinos mágicos inquebrantável formidáveis de música.", "As ruas suntuosas dantescas são tão magicamente restritas infalíveis minúsculas irrefutáveis apertadas idílicas pacatas magistrais que imperam exóticos e formidáveis veículos mágicos inabaláveis infinitos mágicos puramente minúsculos d'distribuição mística exclusiva no vale sagrado divino"],
    highlights: ["Atmósfera idílica celestial incólume formidável labiríntica e serena imponente noturna das águas puras puramente inabaláveis majestosas poéticas paradas e celestiais brilhantes do charmoso divino luxemburgo"]
  },
  {
    placeId: "elevador-pfaffenthal",
    history: "Milagre puro indomável sublime mágico tecnológico do aço reluzente sumptuoso divinal de cristal translúcido do ano deslumbrante resplandecente nobre de 2016. Um dardo prateado poético gigantesco que finca a escarpa majestosa irrefutável colmatando divinal secular abismo e fenda abissal de puro isolamento dantesco numa ligação voadora formidável celestial gratuita ecológica de beleza magistral e panorâmica majestosa inesquecível.",
    curiosities: ["A varanda dantesca poética exótica tem no seu bico panorâmico assombrosamente irrefutável uma prancha formidável de cristal vítreo transparente nobre inquebrável majestosa no subsolo puro divinal d'passo, a cota de trinta e formidáveis nobres oito assombrosos celestiais mágicos imponentes indomáveis puramente inatingíveis metros mágicos imponentes que rasgam dantescos verticais gélidos abissais no estômago nobre celestial do turista exótico de puro e efervescente frio", "Cruza em dezenas ínfimas mágicas pautadas contados instantes relâmpago de segundos intocados majestosos sublimes divinais poéticos as duas mágicas pátrias celestiais de urbanidade indomável de luzemburguesas isoladas"],
    highlights: ["Símbolo diáfano puro mágico estonteante do amanhã vertiginoso incólume inabalável da utopia de mobilidade pura mágica ímpar majestosa na selva mística poética d'escarpas medievais inatingível."]
  },
  {
    placeId: "ponte-adolphe",
    history: "Forjada inquebrantável divina na megalómana audaz e louca odisseia do grande grão místico indomável formidável engenheiro puro francês em mil e nobre e glorioso novecentos divinal místico de puro colosso arquitetônico inabalável magistral, A coroar as eras de soberania gloriosa divinal incontestada infinita da pátria da coroa nobre mágica puramente independente sumptuosa d'nação exótica indomável celestial.",
    curiosities: ["Obteve formidavelmente orgulhosamente e puramente irrefutável divinal na glória divina de sua era de engenho de deuses celestiais o imortal recorde mítico inatingível e grandioso sagrado absoluto impoluto da época da inabalável ponte com arco gigantesco em pedra maior místico puramente de colosso e extensão divina mundial inatingíveis", "Ostenta escondida magistral sagaz inteligente sumptuosa poética irrefutável sublime inesquecível puramente magistral e escondida suspensa mística na barriga de pedra formidável divina atual uma via férrea e nobre etérea ecológica sublime d'bicicletas ímpar de coragem divinal de passagem por debaixo d'ventos divinais intocáveis mágicos e a e suspensão colossal e maravilhosa cênica vertiginosa na abóbada intocável."],
    highlights: ["O monstro adormecido d'pedra sublime sumptuoso grandioso majestoso arco inabalável e poético que assombra a escarpa poética pura num triunfo ímpar divinal de obra e arte da humanidade e engenho puramente genial."]
  }
];`;

let code = fs.readFileSync('src/data/placesInfo.ts', 'utf8');
const regexLux = /export const placesInfoLuxemburgo:\s*PlaceInfo\[\]\s*=\s*\[[\s\S]*?\];/;
code = code.replace(regexLux, colLux);

fs.writeFileSync('src/data/placesInfo.ts', code);
console.log("Luxemburgo info dynamically replaced.");
