export const itineraries: Record<string, { day: string; activities: { time: string; description: string; icon?: string; cityId: string; placeId?: string; type?: string }[] }[]> = {
  lisboa: [
    {
      day: '04/04/2026 (Sábado)',
      activities: [
        { time: '10:35', description: 'Chegada e imigração', icon: '🛬', cityId: 'lisboa', placeId: 'imigracao-lisboa' },
        { time: '11:30', description: 'Pegar o Lisboa Card 🎫', icon: '🎫', cityId: 'lisboa', placeId: 'lisboa-card' },
        { time: '12:00', description: 'Deslocamento até o Hostel (WOT Patio Social)', icon: '🚌', cityId: 'lisboa', placeId: 'hostel-wot-lisboa' },
        { time: '13:30', description: 'Avenida da Liberdade', icon: '🍽️', cityId: 'lisboa', placeId: 'avenida-liberdade' },
        { time: '15:30', description: 'Baixa de Lisboa', icon: '🚶‍♂️', cityId: 'lisboa', placeId: 'baixa-lisboa' },
        { time: '18:00', description: 'Praça do Comércio', icon: '📸', cityId: 'lisboa', placeId: 'praca-comercio' },
        { time: '19:00', description: 'Time Out Market', icon: '🍲', cityId: 'lisboa', placeId: 'time-out-market' },
      ],
    },
    {
      day: '05/04/2026 (Domingo)',
      activities: [
        { time: '07:00', description: 'Café da Manhã no Hostel', icon: '☕', cityId: 'lisboa', placeId: 'hostel-wot-lisboa' },
        { time: '08:40', description: 'Mosteiro dos Jerônimos', icon: '🏛️', cityId: 'lisboa', placeId: 'mosteiro-jeronimos' },
        { time: '09:30', description: 'Padrão dos Descobrimentos', icon: '🚢', cityId: 'lisboa', placeId: 'padrao-descobrimentos' },
        { time: '09:30', description: 'Praça do Império', icon: '🚢', cityId: 'lisboa', placeId: 'praca-imperio' },
        { time: '10:30', description: 'Torre de Belém', icon: '🏰', cityId: 'lisboa', placeId: 'torre-belem' },
        { time: '12:00', description: 'Potato Project', icon: '🍟', cityId: 'lisboa', placeId: 'potato-project' },
        { time: '12:30', description: 'Arco da Rua Augusta', icon: '🏛️', cityId: 'lisboa', placeId: 'arco-rua-augusta' },
        { time: '13:00', description: 'Sé de Lisboa', icon: '⛪', cityId: 'lisboa', placeId: 'se-lisboa' },
        { time: '13:30', description: 'Miradouro de Santa Luzia', icon: '🖼️', cityId: 'lisboa', placeId: 'miradouro-santa-luzia' },
        { time: '14:00', description: 'Castelo de São Jorge', icon: '🏰', cityId: 'lisboa', placeId: 'castelo-sao-jorge' },
        { time: '15:30', description: 'Miradouro da Graça', icon: '🌄', cityId: 'lisboa', placeId: 'miradouro-graca' },
        { time: '16:00', description: 'Igreja de São Vicente de Fora', icon: '⛪', cityId: 'lisboa', placeId: 'igreja-sao-vicente' },
        { time: '16:30', description: 'Panteão Nacional', icon: '🏛️', cityId: 'lisboa', placeId: 'panteao-nacional' },
        { time: '17:00', description: 'Feira da Ladra', icon: '🛍️', cityId: 'lisboa', placeId: 'feira-ladra' },
      ],
    },
    {
      day: '06/04/2026 (Segunda)',
      activities: [
        { time: '07:00', description: 'Café da Manhã no Hostel', icon: '☕', cityId: 'lisboa', placeId: 'hostel-wot-lisboa' },
        { time: '08:00', description: 'Shopping Amoreiras', icon: '🛍️', cityId: 'lisboa', placeId: 'shopping-amoreiras' },
        { time: '12:00', description: 'Almoço', icon: '🍽️', cityId: 'lisboa' },
        { time: '15:00', description: 'Tempo livre para explorar o centro historico', icon: '🚶‍♂️', cityId: 'lisboa' },
      ],
    },
    {
      day: '07/04/2026 (Terça)',
      activities: [
        { time: '07:00', description: 'Café da Manhã no Hostel', icon: '☕', cityId: 'lisboa', placeId: 'hostel-wot-lisboa' },
        { time: '08:00', description: 'Parque Eduardo VII e últimas compras', icon: '🌳', cityId: 'lisboa', placeId: 'parque-eduardo-vii' },
        { time: '12:00', description: 'Almoço em Lisboa', icon: '🍽️', cityId: 'lisboa' },
        { time: '13:40', description: 'Deslocamento para o aeroporto', icon: '🚕', cityId: 'lisboa' },
        { time: '14:35', description: 'Voo para Amsterdam ✈️', icon: '🎫', cityId: 'lisboa', type: 'flight' },
      ],
    },
  ],
  amsterdam: [
    {
      day: '07/04/2026 (Terça)',
      activities: [
        { time: '14:35', description: 'Voo para Amsterdam', icon: '🎫', cityId: 'amsterdam', type: 'flight' },
        { time: '18:40', description: 'Acomodação no Hostel', icon: '🏨', cityId: 'amsterdam' },
        { time: '20:00', description: 'Red Light District 🔥🔞', icon: '🚶‍♂️', cityId: 'amsterdam', placeId: 'red-light-district' },
      ],
    },
    {
      day: '08/04/2026 (Quarta)',
      activities: [
        { time: '08:00', description: 'Café da Manhã no Hostel', icon: '☕', cityId: 'amsterdam' },
        { time: '09:00', description: 'Canais de Amsterdam', icon: '⛴️', cityId: 'amsterdam', placeId: 'canais-amsterdam' },
        { time: '11:00', description: 'Casa de Anne Frank', icon: '🏠', cityId: 'amsterdam', placeId: 'anne-frank' },
        { time: '13:00', description: 'Foodhallen', icon: '🍔', cityId: 'amsterdam', placeId: 'foodhallen' },
        { time: '15:00', description: 'Vondelpark', icon: '🌳', cityId: 'amsterdam', placeId: 'vondelpark' },
        { time: '17:00', description: 'Rijksmuseum', icon: '🏛️', cityId: 'amsterdam', placeId: 'rijksmuseum' },
        { time: '17:00', description: 'Praça dos Museus', icon: '🏛️', cityId: 'amsterdam', placeId: 'praca-museus' },
        { time: '20:00', description: 'Jantar', icon: '🍝', cityId: 'amsterdam' },
      ],
    },
    {
      day: '09/04/2026 (Quinta)',
      activities: [
        { time: '08:30', description: 'Zaanse Schans (Moinhos)', icon: '🎡', cityId: 'amsterdam', placeId: 'zaanse-schans' },
        { time: '14:00', description: 'Kalverstraat', icon: '🛍️', cityId: 'amsterdam', placeId: 'kalverstraat' },
        { time: '19:00', description: 'Heineken Experience 🍻', icon: '🍺', cityId: 'amsterdam', placeId: 'heineken-exp' },
      ],
    },
    {
      day: '10/04/2026 (Sexta)',
      activities: [
        { time: '09:00', description: 'Keukenhof (Campos de Tulipas) 🌷', icon: '🌷', cityId: 'amsterdam', placeId: 'keukenhof' },
        { time: '16:00', description: 'Retorno para Amsterdam e tempo livre', icon: '🚶‍♂️', cityId: 'amsterdam' },
        { time: '20:00', description: 'Jantar de Despedida', icon: '🍷', cityId: 'amsterdam' },
      ],
    },
    {
      day: '11/04/2026 (Sábado)',
      activities: [
        { time: '08:00', description: 'Check-out e deslocamento para estação', icon: '🚉', cityId: 'amsterdam' },
        { time: '10:00', description: 'Trem para Colônia', icon: '🎫', cityId: 'amsterdam', type: 'train' },
      ],
    },
  ],
  colonia: [
    {
      day: '12/04/2026 (Domingo)',
      activities: [
        { time: '10:30', description: 'Trem para Colônia 🎫', icon: '🎫', cityId: 'colonia', type: 'train' },
        { time: '13:18', description: 'Köln Hbf e check-in', icon: '🏨', cityId: 'colonia', placeId: 'koln-hbf' },
        { time: '13:40', description: 'Almoço', icon: '🍽️', cityId: 'colonia' },
        { time: '14:40', description: 'Catedral de Colônia (Kölner Dom)', icon: '⛪', cityId: 'colonia', placeId: 'catedral-colonia' },
        { time: '16:00', description: 'Ponte Hohenzollern', icon: '🌉', cityId: 'colonia', placeId: 'ponte-hohenzollern' },
        { time: '16:00', description: 'Domplatte', icon: '🌉', cityId: 'colonia', placeId: 'domplatte' },
        { time: '17:30', description: 'Altstadt (Cidade Velha)', icon: '🏰', cityId: 'colonia', placeId: 'altstadt-colonia' },
        { time: '18:30', description: 'Jantar e Cerveja Kölsch 🍻', icon: '🍺', cityId: 'colonia' },
        { time: '20:00', description: 'Margem do Reno', icon: '🚶‍♂️', cityId: 'colonia', placeId: 'margem-reno' },
      ],
    },
    {
      day: '13/04/2026 (Segunda)',
      activities: [
        { time: '08:00', description: 'Café da manhã no Hotel', icon: '☕', cityId: 'colonia' },
        { time: '09:00', description: 'Museu do Chocolate', icon: '🍫', cityId: 'colonia', placeId: 'museu-chocolate' },
        { time: '10:30', description: 'Margem do Reno', icon: '⚓', cityId: 'colonia', placeId: 'margem-reno' },
        { time: '10:30', description: 'Rheinauhafen', icon: '⚓', cityId: 'colonia', placeId: 'rheinauhafen' },
        { time: '12:00', description: 'Almoço e compras rápidas', icon: '🛍️', cityId: 'colonia' },
        { time: '13:30', description: 'Organização das malas', icon: '💼', cityId: 'colonia' },
        { time: '14:17', description: 'Trem para Luxemburgo 🎫', icon: '🎫', cityId: 'colonia', type: 'train' },
      ],
    },
  ],
  luxemburgo: [
    {
      day: '13/04/2026 (Segunda)',
      activities: [
        { time: '14:17', description: 'Trem para Luxemburgo 🎫', icon: '🎫', cityId: 'luxemburgo', type: 'train' },
        { time: '17:48', description: 'Chegada e check-in', icon: '🏨', cityId: 'luxemburgo' },
        { time: '19:30', description: 'Ville Haute', icon: '🚶‍♂️', cityId: 'luxemburgo', placeId: 'ville-haute' },
        { time: '20:00', description: 'Place d\'Armes e Jantar', icon: '🍽️', cityId: 'luxemburgo', placeId: 'place-armes' },
        { time: '22:00', description: 'Chemin de la Corniche', icon: '🖼️', cityId: 'luxemburgo', placeId: 'chemin-corniche' },
      ],
    },
    {
      day: '14/04/2026 (Terça)',
      activities: [
        { time: '07:00', description: 'Café da manhã no hotel', icon: '☕', cityId: 'luxemburgo' },
        { time: '08:30', description: 'Palácio Grão-Ducal', icon: '🏛️', cityId: 'luxemburgo', placeId: 'palacio-grao-ducal' },
        { time: '09:00', description: 'Catedral de Notre-Dame', icon: '⛪', cityId: 'luxemburgo', placeId: 'catedral-notre-dame-lux' },
        { time: '09:45', description: 'Place Guillaume II', icon: '🏛️', cityId: 'luxemburgo', placeId: 'place-guillaume' },
        { time: '10:15', description: 'Bock Casemates', icon: '🏰', cityId: 'luxemburgo', placeId: 'bock-casemates' },
        { time: '11:30', description: 'Bairro Grund e Almoço', icon: '🍽️', cityId: 'luxemburgo', placeId: 'bairro-grund' },
        { time: '14:30', description: 'Elevador Panorâmico Pfaffenthal', icon: '🔭', cityId: 'luxemburgo', placeId: 'elevador-pfaffenthal' },
        { time: '15:00', description: 'Ponte Adolphe', icon: '🌉', cityId: 'luxemburgo', placeId: 'ponte-adolphe' },
        { time: '17:11', description: 'Trem para Bruxelas 🎫', icon: '🎫', cityId: 'luxemburgo', type: 'train' },
      ],
    },
  ],
  bruxelas: [
    {
      day: '14/04/2026 (Terça)',
      activities: [
        { time: '17:11', description: 'Trem para Bruxelas 🎫', icon: '🎫', cityId: 'bruxelas', type: 'train' },
        { time: '20:30', description: 'Chegada e check-in', icon: '🏨', cityId: 'bruxelas' },
        { time: '21:45', description: 'Grand Place', icon: '🏛️', cityId: 'bruxelas', placeId: 'grand-place' },
        { time: '22:15', description: 'Manneken Pis', icon: '⛲', cityId: 'bruxelas', placeId: 'manneken-pis' },
        { time: '22:30', description: 'Delirium Café 🍺', icon: '🍺', cityId: 'bruxelas', placeId: 'delirium-cafe' },
      ],
    },
    {
      day: '15/04/2026 (Quarta)',
      activities: [
        { time: '08:00', description: 'Palácio da Justiça', icon: '🏛️', cityId: 'bruxelas', placeId: 'palacio-justica' },
        { time: '08:00', description: 'Poelaert Viewpoint', icon: '🏛️', cityId: 'bruxelas', placeId: 'poelaert' },
        { time: '09:00', description: 'Palácio Real', icon: '🏛️', cityId: 'bruxelas', placeId: 'palacio-real' },
        { time: '09:00', description: 'Mont des Arts', icon: '🏛️', cityId: 'bruxelas', placeId: 'mont-des-arts' },
        { time: '10:00', description: 'Parc de Bruxelles', icon: '🌳', cityId: 'bruxelas', placeId: 'parc-bruxelles' },
        { time: '10:30', description: 'Catedral de São Miguel', icon: '⛪', cityId: 'bruxelas', placeId: 'catedral-sao-miguel' },
        { time: '11:30', description: 'Galeries Royales Saint-Hubert', icon: '🛍️', cityId: 'bruxelas', placeId: 'galeries-royales' },
        { time: '12:30', description: 'Almoço (Waffles e Chocolates!)', icon: '🧇', cityId: 'bruxelas' },
        { time: '19:30', description: 'Jantar', icon: '🍽️', cityId: 'bruxelas' },
      ],
    },
    {
      day: '16/04/2026 (Quinta) - Bate e Volta',
      activities: [
        { time: '08:00', description: 'Trem para Bruges 🏛️', icon: '🎫', cityId: 'bruxelas', type: 'train' },
        { time: '09:15', description: 'Markt Bruges', icon: '🏛️', cityId: 'bruxelas', placeId: 'markt-bruges' },
        { time: '09:15', description: 'Belfry', icon: '🏛️', cityId: 'bruxelas', placeId: 'belfry' },
        { time: '11:30', description: 'Canais de Bruges', icon: '⛴️', cityId: 'bruxelas', placeId: 'canais-bruges' },
        { time: '14:00', description: 'Trem para Ghent ⚓', icon: '🎫', cityId: 'bruxelas', type: 'train' },
        { time: '15:15', description: 'Gravensteen', icon: '🏰', cityId: 'bruxelas', placeId: 'gravensteen' },
        { time: '15:15', description: 'Canais de Ghent', icon: '🏰', cityId: 'bruxelas', placeId: 'canais-ghent' },
        { time: '18:00', description: 'Retorno para Bruxelas', icon: '🚆', cityId: 'bruxelas', type: 'train' },
      ],
    },
    {
      day: '18/04/2026 (Sábado)',
      activities: [
        { time: '08:30', description: 'Check-out', icon: '💼', cityId: 'bruxelas' },
        { time: '11:00', description: 'Deslocamento para estação', icon: '🚌', cityId: 'bruxelas' },
        { time: '17:15', description: 'Trem para Paris 🎫', icon: '🎫', cityId: 'bruxelas', type: 'train' },
      ],
    },
  ],
  paris: [
    {
      day: '18/04/2026 (Sábado)',
      activities: [
        { time: '17:15', description: 'Trem para Paris 🎫', icon: '🎫', cityId: 'paris', type: 'train' },
        { time: '18:45', description: 'Chegada e check-in em Montmartre', icon: '🏨', cityId: 'paris' },
        { time: '20:45', description: 'Torre Eiffel iluminada', icon: '🗼', cityId: 'paris', placeId: 'torre-eiffel' },
        { time: '20:45', description: 'Champ de Mars 🗼', icon: '🗼', cityId: 'paris', placeId: 'champ-mars' },
      ],
    },
    {
      day: '19/04/2026 (Domingo)',
      activities: [
        { time: '08:30', description: 'Bairro Montmartre', icon: '🚶‍♂️', cityId: 'paris', placeId: 'montmartre' },
        { time: '09:00', description: 'Basílica de Sacré-Cœur', icon: '⛪', cityId: 'paris', placeId: 'sacre-coeur' },
        { time: '09:00', description: 'Muro do Eu Te Amo', icon: '⛪', cityId: 'paris', placeId: 'muro-eu-te-amo' },
        { time: '10:00', description: 'Place du Tertre', icon: '🎨', cityId: 'paris', placeId: 'place-tertre' },
        { time: '10:00', description: 'Maison Rose', icon: '🎨', cityId: 'paris', placeId: 'maison-rose' },
        { time: '11:30', description: 'Moulin Rouge', icon: '💃', cityId: 'paris', placeId: 'moulin-rouge' },
        { time: '14:00', description: 'Galeries Lafayette (Terraço)', icon: '🛍️', cityId: 'paris', placeId: 'galeries-lafayette' },
        { time: '14:30', description: 'Cedric Grolet Café 🥐', icon: '🥐', cityId: 'paris', placeId: 'cedric-grolet' },
        { time: '15:30', description: 'Ópera Garnier', icon: '🏛️', cityId: 'paris', placeId: 'opera-garnier' },
        { time: '17:00', description: 'Rue Haussmann', icon: '🛍️', cityId: 'paris', placeId: 'rue-haussmann' },
      ],
    },
    {
      day: '20/04/2026 (Segunda)',
      activities: [
        { time: '08:00', description: 'Louvre', icon: '🏛️', cityId: 'paris', placeId: 'louvre' },
        { time: '08:00', description: 'Palais Royal', icon: '🏛️', cityId: 'paris', placeId: 'palais-royal' },
        { time: '14:00', description: 'Jardim das Tulherias', icon: '🌳', cityId: 'paris', placeId: 'tulherias' },
        { time: '15:00', description: 'Place de la Concorde', icon: '🏛️', cityId: 'paris', placeId: 'place-concorde' },
        { time: '15:00', description: 'Petit Palais', icon: '🏛️', cityId: 'paris', placeId: 'petit-palais' },
        { time: '15:00', description: 'Grand Palais', icon: '🏛️', cityId: 'paris', placeId: 'grand-palais' },
        { time: '16:00', description: 'Champs-Élysées', icon: '🏛️', cityId: 'paris', placeId: 'champs-elysees' },
        { time: '16:00', description: 'Arco do Triunfo', icon: '🏛️', cityId: 'paris', placeId: 'arco-triunfo' },
        { time: '20:00', description: 'Passeio de Barco no Sena 🚢', icon: '🚢', cityId: 'paris', placeId: 'barco-sena' },
      ],
    },
    {
      day: '21/04/2026 (Terça)',
      activities: [
        { time: '09:00', description: 'Sessão de Fotos na Torre Eiffel 📸', icon: '📸', cityId: 'paris', placeId: 'torre-eiffel' },
        { time: '10:30', description: 'Trocadéro', icon: '🏛️', cityId: 'paris', placeId: 'trocadero' },
        { time: '11:30', description: 'Les Invalides', icon: '🏛️', cityId: 'paris', placeId: 'invalides' },
        { time: '14:30', description: 'Museu d\'Orsay', icon: '🏛️', cityId: 'paris', placeId: 'museu-orsay' },
        { time: '17:30', description: 'Pont Alexandre III', icon: '🌉', cityId: 'paris', placeId: 'pont-alexandre' },
      ],
    },
    {
      day: '22/04/2026 (Quarta)',
      activities: [
        { time: '08:30', description: 'Notre-Dame', icon: '⛪', cityId: 'paris', placeId: 'notre-dame' },
        { time: '08:30', description: 'Sainte-Chapelle', icon: '⛪', cityId: 'paris', placeId: 'sainte-chapelle' },
        { time: '11:30', description: 'Quartier Latin', icon: '🏘️', cityId: 'paris', placeId: 'quartier-latin' },
        { time: '14:00', description: 'Jardim de Luxemburgo', icon: '🌳', cityId: 'paris', placeId: 'jardim-luxemburgo' },
        { time: '16:00', description: 'Panthéon', icon: '🏛️', cityId: 'paris', placeId: 'pantheon' },
      ],
    },
    {
      day: '23/04/2026 (Quinta)',
      activities: [
        { time: '07:00', description: 'Café da manhã e check-out', icon: '💼', cityId: 'paris' },
        { time: '12:00', description: 'Almoço', icon: '🍽️', cityId: 'paris' },
        { time: '15:00', description: 'Trem para Londres 🎫', icon: '🎫', cityId: 'paris', type: 'train' },
      ],
    },
  ],
  londres: [
    {
      day: '23/04/2026 (Quinta)',
      activities: [
        { time: '15:00', description: 'Trem para Londres 🎫', icon: '🎫', cityId: 'londres', type: 'train' },
        { time: '16:35', description: 'St Pancras', icon: '🚆', cityId: 'londres', placeId: 'st-pancras' },
        { time: '17:00', description: 'Kings Cross', icon: '🧙‍♂️', cityId: 'londres', placeId: 'kings-cross' },
        { time: '17:00', description: 'Plataforma 9¾ ⚡', icon: '🧙‍♂️', cityId: 'londres', placeId: 'plataforma-9' },
        { time: '19:30', description: 'Big Ben', icon: '🗼', cityId: 'londres', placeId: 'big-ben' },
        { time: '19:30', description: 'Palácio de Westminster à noite', icon: '🗼', cityId: 'londres', placeId: 'palacio-westminster' },
      ],
    },
    {
      day: '24/04/2026 (Sexta)',
      activities: [
        { time: '09:00', description: 'Tower of London', icon: '🏰', cityId: 'londres', placeId: 'tower-london' },
        { time: '09:00', description: 'Tower Bridge', icon: '🏰', cityId: 'londres', placeId: 'tower-bridge' },
        { time: '12:00', description: 'Borough Market', icon: '🥧', cityId: 'londres', placeId: 'borough-market' },
        { time: '13:30', description: 'Millennium Bridge', icon: '⛪', cityId: 'londres', placeId: 'millennium-bridge' },
        { time: '13:30', description: 'Catedral de São Paulo', icon: '⛪', cityId: 'londres', placeId: 'catedral-sao-paulo' },
        { time: '15:30', description: 'Westminster Abbey', icon: '🏛️', cityId: 'londres', placeId: 'westminster-abbey' },
        { time: '17:00', description: 'Trafalgar Square', icon: '🏛️', cityId: 'londres', placeId: 'trafalgar-square' },
        { time: '17:00', description: 'Leicester Square', icon: '🏛️', cityId: 'londres', placeId: 'leicester-square' },
        { time: '18:00', description: 'Piccadilly Circus', icon: '🎭', cityId: 'londres', placeId: 'piccadilly' },
        { time: '18:00', description: 'Soho', icon: '🎭', cityId: 'londres', placeId: 'soho' },
        { time: '18:00', description: 'Chinatown', icon: '🎭', cityId: 'londres', placeId: 'chinatown' },
        { time: '20:00', description: 'Pub tradicional 🍻', icon: '🍺', cityId: 'londres', placeId: 'pub' },
      ],
    },
    {
      day: '25/04/2026 (Sábado)',
      activities: [
        { time: '09:00', description: 'Notting Hill', icon: '🛍️', cityId: 'londres', placeId: 'notting-hill' },
        { time: '09:00', description: 'Portobello Road Market', icon: '🛍️', cityId: 'londres', placeId: 'portobello' },
        { time: '11:00', description: 'Abbey Road', icon: '🎸', cityId: 'londres', placeId: 'abbey-road' },
        { time: '12:00', description: 'Camden Town', icon: '🕶️', cityId: 'londres', placeId: 'camden-town' },
        { time: '13:45', description: 'Sky Garden 🌿', icon: '🎫', cityId: 'londres', placeId: 'sky-garden' },
      ],
    },
    {
      day: '26/04/2026 (Domingo)',
      activities: [
        { time: '09:00', description: 'Hyde Park', icon: '🌳', cityId: 'londres', placeId: 'hyde-park' },
        { time: '11:00', description: 'Victoria and Albert Museum', icon: '🏛️', cityId: 'londres', placeId: 'victoria-albert' },
        { time: '14:00', description: 'Covent Garden', icon: '🛍️', cityId: 'londres', placeId: 'covent-garden' },
        { time: '18:30', description: 'Sky Garden (Vista Noturna) 🌿', icon: '🎫', cityId: 'londres', placeId: 'sky-garden' },
      ],
    },
    {
      day: '27/04/2026 (Segunda)',
      activities: [
        { time: '11:00', description: 'Buckingham Palace', icon: '💂‍♂️', cityId: 'londres', placeId: 'buckingham' },
        { time: '12:00', description: 'St James Park', icon: '🌳', cityId: 'londres', placeId: 'st-james-park' },
      ],
    },
    {
      day: '28/04/2026 (Terça)',
      activities: [
        { time: '07:00', description: 'Café da manhã', icon: '☕', cityId: 'londres' },
        { time: '14:00', description: 'Heatrhow', icon: '🚌', cityId: 'londres', placeId: 'heatrhow' },
        { time: '17:10', description: 'Voo para Madrid ✈️', icon: '🎫', cityId: 'londres', type: 'flight' },
      ],
    },
  ],
  madrid: [
    {
      day: '28/04/2026 (Terça)',
      activities: [
        { time: '17:10', description: 'Voo para Madrid 🎫', icon: '🎫', cityId: 'madrid', type: 'flight' },
        { time: '20:35', description: 'Chegada e check-in', icon: '🏨', cityId: 'madrid' },
        { time: '22:45', description: 'Puerta del Sol', icon: '🏛️', cityId: 'madrid', placeId: 'puerta-sol' },
        { time: '22:45', description: 'Plaza Mayor', icon: '🏛️', cityId: 'madrid', placeId: 'plaza-mayor' },
        { time: '23:15', description: 'Mercado de São Miguel 🥘', icon: '🥘', cityId: 'madrid', placeId: 'sao-miguel' },
      ],
    },
    {
      day: '29/04/2026 (Quarta)',
      activities: [
        { time: '08:30', description: 'Palácio Real', icon: '🏛️', cityId: 'madrid', placeId: 'palacio-real-es' },
        { time: '08:30', description: 'Catedral de Almudena', icon: '🏛️', cityId: 'madrid', placeId: 'almudena' },
        { time: '10:45', description: 'Jardins de Sabatini', icon: '🌳', cityId: 'madrid', placeId: 'sabatini' },
        { time: '13:30', description: 'Gran Vía', icon: '🏙️', cityId: 'madrid', placeId: 'gran-via' },
        { time: '13:30', description: 'Edifício Metrópolis', icon: '🏙️', cityId: 'madrid', placeId: 'metropolis' },
        { time: '14:30', description: 'Chafariz de Cibeles', icon: '🏛️', cityId: 'madrid', placeId: 'chafariz-cibeles' },
        { time: '14:30', description: 'Palácio de Cibeles', icon: '🏛️', cityId: 'madrid', placeId: 'palacio-cibeles' },
        { time: '18:30', description: 'Templo de Debod (Pôr do Sol) 🌅', icon: '🌅', cityId: 'madrid', placeId: 'debod' },
      ],
    },
    {
      day: '30/04/2026 (Quinta)',
      activities: [
        { time: '08:30', description: 'Estádio Santiago Bernabéu ⚽', icon: '⚽', cityId: 'madrid', placeId: 'santiago-bernabeu' },
        { time: '11:00', description: 'Parque do Retiro', icon: '🌳', cityId: 'madrid', placeId: 'retiro' },
        { time: '11:00', description: 'Palácio de Cristal', icon: '🌳', cityId: 'madrid', placeId: 'palacio-cristal' },
        { time: '14:00', description: 'Chafariz de Netuno', icon: '🏦', cityId: 'madrid', placeId: 'netuno' },
        { time: '14:00', description: 'Banco de Espanha', icon: '🏦', cityId: 'madrid', placeId: 'banco-espanha' },
      ],
    },
    {
      day: '02/05/2026 (Sábado)',
      activities: [
        { time: '07:00', description: 'Café da manhã e check-out', icon: '💼', cityId: 'madrid' },
        { time: '13:30', description: 'Deslocamento para Aeroporto de Madrid', icon: '🚌', cityId: 'madrid' },
        { time: '16:20', description: 'Voo para Lisboa ✈️', icon: '🎫', cityId: 'madrid', type: 'flight' },
      ],
    },
  ],
};
