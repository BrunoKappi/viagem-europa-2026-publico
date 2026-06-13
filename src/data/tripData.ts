export type City = {
  id: string;
  name: string;
  country: string;
  flag: string;
  dateRange: string;
  startDate: string;
  endDate: string;
  description: string;
  coverImage: string;
};

export type Flight = {
  from: string;
  to: string;
  date: string;
  time: string;
  arrivalTime?: string;
  duration: string;
  locator: string;
  passengers: string;
  fileLink?: string;
  checkinDate?: string;
  checkinTime?: string;
};

export type Train = {
  from: string;
  to: string;
  date: string;
  time: string;
  arrivalTime: string;
  type: string;
  operator: string;
  duration: string;
  locator: string;
  fileLink?: string;
};

export type Accommodation = {
  id: string;
  type: "Hostel" | "Hotel";
  name: string;
  country: string;
  city: string;
  breakfast: "🟢 Incluído" | "🔴 Não Incluído";
  dateRange: string;
  reservationNumber: string;
  guestName: string;
  email: string;
  phone: string;
  fileLink: string;
};

export type Expense = {
  id: string;
  name: string;
  amount: number;
  category: string;
  paid: boolean;
};

export const cities: City[] = [
  {
    id: "lisboa",
    name: "Lisboa",
    country: "Portugal",
    flag: "🇵🇹",
    dateRange: "04/04/2026 → 07/04/2026",
    startDate: "2026-04-04",
    endDate: "2026-04-07",
    description:
      "Início da jornada explorando Belém, degustando Pastéis de Nata tradicionais e vivenciando o Fado no Castelo de São Jorge.",
    coverImage:
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Países Baixos",
    flag: "🇳🇱",
    dateRange: "07/04/2026 → 12/04/2026",
    startDate: "2026-04-07",
    endDate: "2026-04-12",
    description:
      "Canais românticos, a história de Anne Frank e a explosão de cores dos campos de tulipas no Keukenhof.",
    coverImage:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "colonia",
    name: "Colônia",
    country: "Alemanha",
    flag: "🇩🇪",
    dateRange: "12/04/2026 → 13/04/2026",
    startDate: "2026-04-12",
    endDate: "2026-04-13",
    description:
      "Uma parada estratégica para admirar a imponente Catedral Gótica e se deliciar no Museu do Chocolate à beira do Reno.",
    coverImage:
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1200",
  },
  {
    id: "luxemburgo",
    name: "Luxemburgo",
    country: "Luxemburgo",
    flag: "🇱🇺",
    dateRange: "13/04/2026 → 14/04/2026",
    startDate: "2026-04-13",
    endDate: "2026-04-14",
    description:
      "Descoberta das fortificações históricas do Bock Casemates e as vistas panorâmicas de Chemin de la Corniche.",
    coverImage:
      "https://c1.wallpaperflare.com/preview/17/341/229/luxembourg-city-landscape-cityscape.jpg",
  },
  {
    id: "bruxelas",
    name: "Bruxelas",
    country: "Bélgica",
    flag: "🇧🇪",
    dateRange: "14/04/2026 → 18/04/2026",
    startDate: "2026-04-14",
    endDate: "2026-04-18",
    description:
      "A capital belga com pitstops para waffles na Grand-Place e um dia inesquecível de bate-e-volta em Bruges e Ghent.",
    coverImage:
      "https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=1200",
  },
  {
    id: "paris",
    name: "Paris",
    country: "França",
    flag: "🇫🇷",
    dateRange: "18/04/2026 → 23/04/2026",
    startDate: "2026-04-18",
    endDate: "2026-04-23",
    description:
      "Cinco dias de pura magia entre a Torre Eiffel, as ladeiras de Montmartre e cruzeiros românticos pelo Rio Sena.",
    coverImage:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200",
  },
  {
    id: "londres",
    name: "Londres",
    country: "Reino Unido",
    flag: "🇬🇧",
    dateRange: "23/04/2026 → 28/04/2026",
    startDate: "2026-04-23",
    endDate: "2026-04-28",
    description:
      "A clássica Londres com Big Ben, Borough Market e um pôr do sol inesquecível no jardim vertical Sky Garden.",
    coverImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200",
  },
  {
    id: "madrid",
    name: "Madrid",
    country: "Espanha",
    flag: "🇪🇸",
    dateRange: "28/04/2026 → 02/05/2026",
    startDate: "2026-04-28",
    endDate: "2026-05-02",
    description:
      "Encerramento triunfal entre tapas no Mercado de San Miguel, o Palácio Real e a emoção do Estádio Bernabéu.",
    coverImage:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1200",
  },
];

export const flights: Flight[] = [
  {
    from: "Porto Alegre (POA)",
    to: "São Paulo (GRU)",
    date: "03/04/2026",
    time: "16:05",
    arrivalTime: "17:45",
    duration: "1h 40m",
    locator: "XXXXXX",
    passengers: "BRUNO, EDUARDA",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
    checkinDate: "02/04/2026",
    checkinTime: "04:05",
  },
  {
    from: "São Paulo (GRU)",
    to: "Lisboa (LIS)",
    date: "03/04/2026",
    time: "20:45",
    arrivalTime: "10:35",
    duration: "9h 50m",
    locator: "XXXXXX",
    passengers: "BRUNO, EDUARDA",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
    checkinDate: "02/04/2026",
    checkinTime: "04:25",
  },
  {
    from: "Lisboa (LIS)",
    to: "Amsterdam (AMS)",
    date: "07/04/2026",
    time: "14:35",
    arrivalTime: "18:40",
    duration: "3h 05m",
    locator: "XXXXXX",
    passengers: "BRUNO, EDUARDA",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
    checkinDate: "06/04/2026",
    checkinTime: "02:35",
  },
  {
    from: "Londres (LHR)",
    to: "Madrid (MAD)",
    date: "28/04/2026",
    time: "17:10",
    arrivalTime: "20:35",
    duration: "2h 25m",
    locator: "XXXXXX",
    passengers: "BRUNO, EDUARDA",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
    checkinDate: "27/04/2026",
    checkinTime: "17:10",
  },
  {
    from: "Madrid (MAD)",
    to: "Lisboa (LIS)",
    date: "02/05/2026",
    time: "16:20",
    arrivalTime: "16:45",
    duration: "1h 25m",
    locator: "XXXXXX",
    passengers: "BRUNO, EDUARDA",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
    checkinDate: "01/05/2026",
    checkinTime: "04:20",
  },
  {
    from: "Lisboa (LIS)",
    to: "São Paulo (GRU)",
    date: "02/05/2026",
    time: "23:30",
    arrivalTime: "05:50",
    duration: "10h 20m",
    locator: "XXXXXX",
    passengers: "BRUNO",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
    checkinDate: "01/05/2026",
    checkinTime: "11:30",
  },
  {
    from: "Lisboa (LIS)",
    to: "São Paulo (GRU)",
    date: "02/05/2026",
    time: "23:35",
    arrivalTime: "05:50",
    duration: "10h 15m",
    locator: "XXXXXX",
    passengers: "EDUARDA",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
    checkinDate: "01/05/2026",
    checkinTime: "11:35",
  },
  {
    from: "São Paulo (GRU)",
    to: "Porto Alegre (POA)",
    date: "03/05/2026",
    time: "13:45",
    arrivalTime: "15:25",
    duration: "1h 40m",
    locator: "XXXXXX",
    passengers: "BRUNO, EDUARDA",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
    checkinDate: "30/04/2026",
    checkinTime: "13:45",
  },
];

export const trains: Train[] = [
  {
    from: "Amsterdam",
    to: "Colônia",
    date: "12/04/2026",
    time: "10:31",
    arrivalTime: "13:18",
    type: "Intercity Express (ICE)",
    operator: "DB",
    duration: "2h 47m",
    locator: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    from: "Colônia",
    to: "Luxemburgo",
    date: "13/04/2026",
    time: "14:17",
    arrivalTime: "17:48",
    type: "Regional-Express (RE)",
    operator: "DB / CFL",
    duration: "3h 31m",
    locator: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    from: "Luxemburgo",
    to: "Bruxelas",
    date: "14/04/2026",
    time: "17:11",
    arrivalTime: "20:28",
    type: "InterCity (IC)",
    operator: "SNCB / NMBS",
    duration: "3h 17m",
    locator: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    from: "Bruxelas",
    to: "Bruges",
    date: "16/04/2026",
    time: "08:00",
    arrivalTime: "23:59",
    type: "InterCity (IC)",
    operator: "SNCB / NMBS",
    duration: "Livre",
    locator: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    from: "Bruges",
    to: "Ghent",
    date: "16/04/2026",
    time: "14:00",
    arrivalTime: "23:59",
    type: "InterCity (IC)",
    operator: "SNCB / NMBS",
    duration: "Livre",
    locator: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    from: "Ghent",
    to: "Bruxelas",
    date: "16/04/2026",
    time: "18:00",
    arrivalTime: "23:59",
    type: "InterCity (IC)",
    operator: "SNCB / NMBS",
    duration: "Livre",
    locator: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    from: "Bruxelas",
    to: "Paris",
    date: "18/04/2026",
    time: "17:16",
    arrivalTime: "18:46",
    type: "Eurostar",
    operator: "Eurostar",
    duration: "1h 30m",
    locator: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    from: "Paris",
    to: "Londres",
    date: "23/04/2026",
    time: "15:07",
    arrivalTime: "16:35",
    type: "Eurostar",
    operator: "Eurostar",
    duration: "2h 28m",
    locator: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
];

export const accommodations: Accommodation[] = [
  {
    id: "wot-patio-social",
    type: "Hostel",
    name: "WOT Patio Social",
    country: "🇵🇹 Portugal",
    city: "Lisboa",
    breakfast: "🟢 Incluído",
    dateRange: "04/04/2026 → 07/04/2026",
    reservationNumber: "XXXXXX",
    guestName: "Sr. Bruno",
    email: "XXXXXX",
    phone: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "tourist-inn-amsterdam",
    type: "Hostel",
    name: "Tourist Inn Amsterdam",
    country: "🇳🇱 Países Baixos",
    city: "Amsterdam",
    breakfast: "🟢 Incluído",
    dateRange: "07/04/2026 → 12/04/2026",
    reservationNumber: "XXXXXX",
    guestName: "Sr. Bruno",
    email: "XXXXXX",
    phone: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "ibis-koeln-centrum",
    type: "Hotel",
    name: "Ibis Koeln Centrum",
    country: "🇩🇪 Alemanha",
    city: "Colônia",
    breakfast: "🟢 Incluído",
    dateRange: "12/04/2026 → 13/04/2026",
    reservationNumber: "XXXXXX",
    guestName: "Srta. Eduarda",
    email: "XXXXXX",
    phone: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "bb-hotel-luxembourg",
    type: "Hotel",
    name: "B&B HOTEL - Luxembourg Centre Cloche d'Or",
    country: "🇱🇺 Luxemburgo",
    city: "Luxemburgo",
    breakfast: "🟢 Incluído",
    dateRange: "13/04/2026 → 14/04/2026",
    reservationNumber: "XXXXXX",
    guestName: "Sr. Bruno",
    email: "XXXXXX",
    phone: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "ibis-brussels-gare-midi",
    type: "Hotel",
    name: "ibis Brussels Centre Gare Midi",
    country: "🇧🇪 Bélgica",
    city: "Bruxelas",
    breakfast: "🟢 Incluído",
    dateRange: "14/04/2026 → 18/04/2026",
    reservationNumber: "XXXXXX",
    guestName: "Sr. Bruno",
    email: "XXXXXX",
    phone: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "ibis-budget-paris-montmartre",
    type: "Hotel",
    name: "ibis budget Paris Porte de Montmartre",
    country: "🇫🇷 França",
    city: "Paris",
    breakfast: "🟢 Incluído",
    dateRange: "18/04/2026 → 23/04/2026",
    reservationNumber: "XXXXXX",
    guestName: "Sr. Bruno",
    email: "XXXXXX",
    phone: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "ibis-budget-london-whitechapel",
    type: "Hotel",
    name: "ibis budget London Whitechapel - Brick Lane",
    country: "🇬🇧 Reino Unido",
    city: "Londres",
    breakfast: "🟢 Incluído",
    dateRange: "23/04/2026 → 28/04/2026",
    reservationNumber: "XXXXXX",
    guestName: "Sr. Bruno",
    email: "XXXXXX",
    phone: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "the-hat-madrid",
    type: "Hostel",
    name: "The Hat Madrid",
    country: "🇪🇸 Espanha",
    city: "Madrid",
    breakfast: "🟢 Incluído",
    dateRange: "28/04/2026 → 02/05/2026",
    reservationNumber: "XXXXXX",
    guestName: "Sr. Bruno",
    email: "XXXXXX",
    phone: "XXXXXX",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
];

export const expenses: Expense[] = [
  // IDs changed to strings for consistency
  {
    id: "1",
    name: "Passagens Londres para Madrid",
    amount: 208,
    category: "✈️ Passagem aérea",
    paid: true,
  },
  {
    id: "2",
    name: "Taxa de Embarque Smiles",
    amount: 0,
    category: "✈️ Passagem aérea",
    paid: true,
  },
  {
    id: "3",
    name: "Taxa de Embarque TAP volta de Lisboa",
    amount: 0,
    category: "✈️ Passagem aérea",
    paid: true,
  },
  {
    id: "4",
    name: "Passagens São Paulo para POA",
    amount: 0,
    category: "✈️ Passagem aérea",
    paid: true,
  },
  {
    id: "5",
    name: "Hospedagem WOT Pátio Social",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: true,
  },
  {
    id: "6",
    name: "Hospedagem Tourist Inn Amsterdam",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: true,
  },
  {
    id: "7",
    name: "Ibis Koeln Centrum",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: true,
  },
  {
    id: "8",
    name: "B&B HOTEL - Luxembourg Centre Cloche d'Or",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: true,
  },
  {
    id: "9",
    name: "ibis Brussels Centre Gare Midi",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: true,
  },
  {
    id: "10",
    name: "ibis budget Paris Porte de Montmartre",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: true,
  },
  {
    id: "11",
    name: "ibis budget London Whitechapel",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: true,
  },
  {
    id: "12",
    name: "The Hat Madrid",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: true,
  },
  {
    id: "13",
    name: "Seguro Viagem Eduarda",
    amount: 0,
    category: "📄 Seguro",
    paid: true,
  },
  {
    id: "14",
    name: "Bagagem Adicional Londres para Madrid Iberia",
    amount: 0,
    category: "✈️ Passagem aérea",
    paid: true,
  },
  {
    id: "15",
    name: "Bagagem Adicional LIS para POA",
    amount: 0,
    category: "✈️ Passagem aérea",
    paid: true,
  },
  {
    id: "16",
    name: "Bagagem Adicional GRU para POA",
    amount: 0,
    category: "✈️ Passagem aérea",
    paid: true,
  },
  {
    id: "17",
    name: "Passagens de ida até Amsterdam",
    amount: 0,
    category: "✈️ Passagem aérea",
    paid: true,
  },
  {
    id: "18",
    name: "Passagens Madrid → Lisboa",
    amount: 0,
    category: "✈️ Passagem aérea",
    paid: true,
  },
  {
    id: "19",
    name: "Passagens Trem Amsterdam → Colônia",
    amount: 0,
    category: "🚄 Passagem Trem",
    paid: true,
  },
  {
    id: "20",
    name: "Passagens Trem Colônia → Luxemburgo",
    amount: 0,
    category: "🚄 Passagem Trem",
    paid: true,
  },
  {
    id: "21",
    name: "Passagens Trem Luxemburgo → Bruxelas",
    amount: 0,
    category: "🚄 Passagem Trem",
    paid: true,
  },
  {
    id: "22",
    name: "Passagens Trem Bruxelas → Paris",
    amount: 0,
    category: "🚄 Passagem Trem",
    paid: true,
  },
  {
    id: "23",
    name: "Passagem Bruxelas → Bruges",
    amount: 0,
    category: "🚄 Passagem Trem",
    paid: true,
  },
  {
    id: "24",
    name: "Passagem Bruges → Ghent",
    amount: 0,
    category: "🚄 Passagem Trem",
    paid: true,
  },
  {
    id: "25",
    name: "Passagem Ghent → Bruxelas",
    amount: 0,
    category: "🚄 Passagem Trem",
    paid: true,
  },
  {
    id: "26",
    name: "2 Chips de Internet 30 Dias Ilimitados",
    amount: 0,
    category: "📲 Chip de Internet",
    paid: true,
  },
  {
    id: "27",
    name: "Passeio Barco Amsterdam",
    amount: 0,
    category: "🎟️ Passeios",
    paid: true,
  },
  {
    id: "28",
    name: "Heineken Experience",
    amount: 0,
    category: "🎟️ Passeios",
    paid: true,
  },
  {
    id: "29",
    name: "Keukenhof",
    amount: 0,
    category: "🎟️ Passeios",
    paid: true,
  },
  {
    id: "30",
    name: "Passeio Barco Paris",
    amount: 0,
    category: "🎟️ Passeios",
    paid: true,
  },
  {
    id: "31",
    name: "Casa Anne Frank",
    amount: 0,
    category: "🎟️ Passeios",
    paid: true,
  },
  {
    id: "32",
    name: "Lisboa Card",
    amount: 0,
    category: "🎟️ Passeios",
    paid: true,
  },
  {
    id: "33",
    name: "Ensaio Fotográfico Paris",
    amount: 0,
    category: "📷 Ensaio Fotográfico",
    paid: true,
  },
  {
    id: "34",
    name: "Taxa Turistica Lisboa",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: false,
  },
  {
    id: "35",
    name: "Taxa Turistica Amsterdam",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: false,
  },
  {
    id: "36",
    name: "Taxa Turistica Bruxelas",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: false,
  },
  {
    id: "37",
    name: "Taxa Turistica Luxemburgo",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: false,
  },
  {
    id: "38",
    name: "Taxa Turistica Paris",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: false,
  },
  {
    id: "39",
    name: "Taxa Turistica Londres",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: false,
  },
  {
    id: "40",
    name: "Taxa Turistica Colonia",
    amount: 0,
    category: "🏨 Hospedagem",
    paid: false,
  },
];

export { itineraries } from "./itinerariesData";
export { places } from "./places";

export type Ticket = {
  id: string;
  name: string;
  date: string;
  time?: string;
  city: string;
  fileLink: string;
};

export const tickets: Ticket[] = [
  {
    id: "anne-frank",
    name: "Casa da Anne Frank",
    date: "08/04/2026",
    time: "11:00",
    city: "Amsterdam",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "cruzeiro-amsterdam",
    name: "Cruzeiro Canais Amsterdam",
    date: "08/04/2026",
    city: "Amsterdam",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "heineken",
    name: "Heineken Experience",
    date: "09/04/2026",
    time: "19:00",
    city: "Amsterdam",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "keukenhof",
    name: "Keukenhof",
    date: "10/04/2026",
    time: "09:00",
    city: "Amsterdam",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "lisboa-card",
    name: "Lisboa Card",
    date: "04/04/2026",
    city: "Lisboa",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "cruzeiro-sena",
    name: "Cruzeiro Rio Sena",
    date: "20/04/2026",
    time: "20:00",
    city: "Paris",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "fotos-paris",
    name: "Sessão de Fotos Paris",
    date: "21/04/2026",
    time: "09:00",
    city: "Paris",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "sky-garden-1",
    name: "Sky Garden 25/04",
    date: "25/04/2026",
    time: "13:45",
    city: "Londres",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "sky-garden-2",
    name: "Sky Garden Manhã",
    date: "26/04/2026",
    time: "11:15",
    city: "Londres",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
  {
    id: "sky-garden-3",
    name: "Sky Garden Noite",
    date: "26/04/2026",
    time: "18:30",
    city: "Londres",
    fileLink:
      "https://cdn.bkappi.com/ProjectsAssets/Europe2026/ExampleDocument.pdf",
  },
];
