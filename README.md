# ✈️ Europa 2026 — Travel Dashboard

> **Dashboard de viagem pessoal e interativo** para gerenciar, consultar e acompanhar cada detalhe de uma viagem de **29 dias por 8 países da Europa** — desde passagens aéreas e reservas de hotéis até ingressos de passeios e roteiros dia a dia.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss&logoColor=white&style=flat-square)
![i18n](https://img.shields.io/badge/i18n-PT%20%7C%20EN-green?style=flat-square)
![Deploy](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white&style=flat-square)

---

## 📸 Visão Geral

O **Europa 2026** é um SPA (Single Page Application) desenvolvido para ser um hub centralizado de informações de viagem. Em vez de arquivos espalhados em e-mails, PDFs e grupos de WhatsApp, tudo fica em um único lugar — bonito, responsivo e acessível de qualquer dispositivo.

---

## 🗺️ Funcionalidades Principais

### 🏠 Home — Painel Central
- **Hero dinâmico** com cidades e fotos de capa
- **Contagem regressiva** em tempo real até a decolagem (dias, horas, minutos, segundos)
- **Cards de cidades** agrupados por status: `Visitando`, `Próxima`, `A Visitar`, `Visitada`
- Flags dos países renderizadas com imagens reais via **flagcdn.com**
- Acesso rápido a todos os módulos do app

### 📅 Dashboard — Lembretes e Próximos Eventos
- **Card em destaque** do próximo evento da viagem (baseado na data/hora atual)
- Contagem regressiva individual por evento
- Listagem de todos os lembretes com status dinâmico: `Concluído`, `Hoje`, `Próximo`, `Por Vir`
- Filtro por status e tipo de evento
- Cards com countdown de dias, formatação de data localizada por idioma

### 🗓️ Timeline — Linha do Tempo da Viagem
- Visualização cronológica de todos os eventos: voos, trens, check-ins, passeios, check-outs
- Ícones diferenciados por tipo de evento
- Agrupamento por data com formatação localizada (pt-BR / en-GB)
- Modo compacto e expandido

### ✈️ Transport — Logística de Passagens
- **Seção de voos**: cards visuais com origem → destino, bandeiras dos países, código do localizador, data e hora de embarque
- **Seção de trens**: tabela com todos os trechos ferroviários (rota, operador, data, partida, chegada, duração)
- **Modal de detalhes** ao clicar em qualquer voo/trem:
  - Layout estilo "passagem" com bandeiras, horários e código de reserva
  - **Countdown em tempo real** para embarque e para check-in
  - Informação de abertura do check-in online
  - Botão de download da passagem digital com opções de compartilhamento
- Filtro de busca por origem, destino ou cidade
- Componente `CopyableText` para copiar localizadores com um clique

### 🏨 Hospedagem — Acomodações
- Cards completos de cada acomodação: nome, tipo, cidade, datas, endereço, telefone e link de reserva
- Botão de ligar direto (tel:) e abrir no Google Maps
- Seção de observações importantes por acomodação
- Indicador de noites e período de estadia

### 🎟️ Ingressos — Tickets & Passeios
- Agrupamento de ingressos por cidade
- Status dinâmico por ingresso: `Realizado` / `Hoje` / `Por Vir`
- Contador de ingressos por cidade com badge "Concluído" quando todos foram realizados
- Bandeiras das cidades de cada ingresso (via flagcdn)
- Modal de download / visualização de arquivo do ingresso
- Busca por nome, cidade ou data
- Estatísticas: total, por vir, realizados

### 📄 Documentos Pessoais
- Organização por viajante (Bruno, Eduarda) + seção "Outros Documentos"
- Cards de documentos com categoria (Identificação, Saúde, Viagem, etc.)
- Botão de download/visualização com modal de ação de arquivo
- Busca por nome de documento ou categoria
- Suporte a múltiplos formatos (PDF, imagem, links)

### 💰 Gastos — Controle Financeiro
- Tabela ordenável de todas as despesas da viagem
- Colunas: categoria, descrição, valor, moeda, por pessoa
- **Toggle de privacidade** para ocultar todos os valores monetários com um clique
- Ordenação por coluna (clique no header)
- Totalizador de gastos
- Conversion rate e suporte a múltiplas moedas (EUR, USD, BRL, etc.)

### 🗺️ Mapa Interativo
- Mapa com **Leaflet + OpenStreetMap** mostrando a rota completa da viagem
- Marcadores customizados por cidade visitada
- Linha de rota conectando as cidades na ordem de visita
- Popups com nome da cidade e país ao clicar nos marcadores

### 🏙️ Detalhe de Cidade — Roteiro Completo
- Página individual por cidade com foto hero de capa
- **Roteiro dia a dia** com horário, ícone e descrição de cada atividade
- Filtro de atividades dentro do roteiro
- **Modal de informações** ao clicar em pontos marcados com "INFO":
  - História do local
  - Curiosidades
  - Destaques
  - Dica de ouro (insider tip)
  - Tempo recomendado de visita
  - Links para buscar no **Google**, **Google Maps**, **ChatGPT** e **Gemini**
- Seção de hospedagem vinculada à cidade
- Card de "Próxima Parada" com link para a cidade seguinte
- Atalhos para outras cidades do roteiro

### 🔍 Busca Global
- Busca unificada em todo o conteúdo do app (cidades, atividades, acomodações, transportes, etc.)
- Resultados agrupados por tipo com navegação direta ao item

---

## 🌐 Internacionalização (i18n)

O app está **100% disponível em Português (padrão) e Inglês**, com troca dinâmica em tempo real.

- **Seletor de idioma** na navbar: botão com a bandeira do idioma ativo → clique abre **popover** com 🇧🇷 Português / 🇬🇧 English
- Tradução completa de todas as páginas, labels, placeholders, badges e mensagens de estado
- Formatação de datas automática por locale (`pt-BR` ou `en-GB`)
- Persistência do idioma escolhido no `localStorage`
- Fallback automático para Português em caso de chave ausente

---

## 🛠️ Stack Tecnológica

### Frontend Core
| Tecnologia | Versão | Uso |
|---|---|---|
| **React** | 19 | UI framework |
| **TypeScript** | 5.9 | Tipagem estática |
| **Vite** | 8 | Build tool & dev server |
| **React Router DOM** | 7 | Roteamento SPA |

### Estilo & UI
| Tecnologia | Versão | Uso |
|---|---|---|
| **Tailwind CSS** | 3.4 | Utilitários de estilo |
| **Lucide React** | latest | Ícones |
| **Radix UI** | latest | Componentes acessíveis (Dialog, Accordion, Tabs, etc.) |
| **clsx + tailwind-merge** | latest | Composição de classes CSS |

### Dados & Estado
| Tecnologia | Versão | Uso |
|---|---|---|
| **TanStack Table** | 8 | Tabela ordenável de gastos |
| **date-fns** | 4 | Manipulação e formatação de datas |
| **Sonner** | 2 | Notificações toast |

### Mapas
| Tecnologia | Versão | Uso |
|---|---|---|
| **Leaflet** | 1.9 | Engine de mapas |
| **React Leaflet** | 5 | Integração React com Leaflet |
| **OpenStreetMap** | — | Tiles do mapa (gratuito) |

### Internacionalização
| Tecnologia | Versão | Uso |
|---|---|---|
| **i18next** | 26 | Core i18n |
| **react-i18next** | 17 | Integração com React (hook `useTranslation`) |
| **i18next-browser-languagedetector** | 8 | Detecção automática de idioma |

### Serviços Externos
| Serviço | Uso |
|---|---|
| **flagcdn.com** | Imagens de bandeiras de países em alta resolução |
| **OpenStreetMap** | Tiles para o mapa interativo |
| **Google Maps** (link) | Abrir endereços externos |
| **Google Search / Gemini / ChatGPT** | Links de pesquisa contextual nas páginas de cidade |

---

## 📁 Estrutura de Arquivos

```
viagem-europa-2026/
├── public/
│   └── _redirects              # Regra de roteamento para Netlify (SPA)
│
├── src/
│   ├── components/             # Componentes reutilizáveis
│   │   ├── CityCard.tsx        # Card de cidade com status e bandeira
│   │   ├── CopyableText.tsx    # Texto clicável para copiar (localizadores)
│   │   ├── FileActionModal.tsx # Modal de download/compartilhamento de arquivo
│   │   ├── Modal.tsx           # Modal genérico
│   │   ├── Navbar.tsx          # Navegação principal + seletor de idioma
│   │   └── ScrollToTop.tsx     # Scroll para o topo na troca de página
│   │
│   ├── context/
│   │   └── PrivacyContext.tsx  # Contexto global de privacidade (ocultar valores)
│   │
│   ├── data/                   # Dados estáticos da viagem (sem banco de dados)
│   │   ├── tripData.ts         # Cidades, voos, trens, acomodações, tickets, docs, gastos, lembretes
│   │   ├── itinerariesData.ts  # Roteiros dia a dia por cidade
│   │   ├── placesInfo.ts       # Informações detalhadas dos pontos turísticos (história, curiosidades, etc.)
│   │   └── places.ts           # Coordenadas e metadados dos lugares para o mapa
│   │
│   ├── locales/                # Arquivos de tradução
│   │   ├── pt.json             # Português (padrão)
│   │   └── en.json             # English
│   │
│   ├── pages/                  # Páginas principais (uma por rota)
│   │   ├── Home.tsx            # Dashboard inicial / Visão geral
│   │   ├── Dashboard.tsx       # Lembretes e próximos eventos
│   │   ├── Timeline.tsx        # Linha do tempo da viagem
│   │   ├── Transport.tsx       # Voos e trens com modal de detalhes
│   │   ├── Accommodations.tsx  # Lista de acomodações
│   │   ├── Tickets.tsx         # Ingressos e passeios
│   │   ├── Documents.tsx       # Documentos pessoais por viajante
│   │   ├── Expenses.tsx        # Controle de gastos com tabela ordenável
│   │   ├── MapView.tsx         # Mapa interativo com rota
│   │   ├── CityDetail.tsx      # Roteiro detalhado por cidade
│   │   └── GlobalSearch.tsx    # Busca global no conteúdo
│   │
│   ├── lib/
│   │   └── utils.ts            # Utilitário `cn()` para merge de classes
│   │
│   ├── i18n.ts                 # Configuração do i18next
│   ├── App.tsx                 # Roteador + layout principal
│   ├── main.tsx                # Ponto de entrada React
│   └── index.css               # Estilos globais e tokens de design
│
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.app.json
└── package.json
```

---

## ⚙️ Como Replicar o Projeto

### Pré-requisitos
- **Node.js** v18 ou superior
- **npm** v9 ou superior (ou `pnpm` / `yarn`)

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/viagem-europa-2026.git
cd viagem-europa-2026
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

---

## 🔧 Personalizar para Sua Viagem

Todos os dados estão centralizados em arquivos TypeScript dentro de `src/data/`. Não há banco de dados — editar esses arquivos é tudo que você precisa para adaptar o app para outra viagem.

### `src/data/tripData.ts`
Arquivo principal. Contém os arrays exportados:

```ts
// Cidades da viagem
export const cities: City[] = [...]

// Voos
export const flights: Flight[] = [...]

// Trens
export const trains: Train[] = [...]

// Acomodações
export const accommodations: Accommodation[] = [...]

// Ingressos e passeios
export const tickets: Ticket[] = [...]

// Documentos pessoais
export const documents: Document[] = [...]

// Gastos
export const expenses: Expense[] = [...]

// Lembretes / Próximos eventos
export const reminders: Reminder[] = [...]
```

### `src/data/itinerariesData.ts`
Roteiro dia a dia de cada cidade, indexado pelo `city.id`:

```ts
export const itineraries: Record<string, Day[]> = {
  "amsterda": [
    {
      day: "Dia 1 — Chegada",
      activities: [
        { time: "14:00", icon: "🛬", description: "Chegada no Aeroporto Schiphol" },
        // ...
      ]
    }
  ]
}
```

### `src/data/placesInfo.ts`
Informações ricas sobre cada ponto turístico do roteiro (aparece no modal de "INFO"):

```ts
export const placesInfo: PlaceInfo[] = [
  {
    placeId: "rijksmuseum",
    history: "...",
    curiosities: ["...", "..."],
    highlights: ["Ronda da Noite", "Cerâmica de Delft"],
    insiderTip: "...",
    recommendedTime: "3-4 horas"
  }
]
```

### Traduções (`src/locales/`)
Para adicionar um novo idioma, crie um novo arquivo JSON (ex: `es.json`) seguindo a mesma estrutura de `pt.json` e registre-o em `src/i18n.ts`.

---

## 🚀 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para visualizar o build localmente:

```bash
npm run preview
```

---

## ☁️ Deploy na Netlify

O projeto está configurado para deploy contínuo na **Netlify**.

### Configuração automática
O arquivo `public/_redirects` garante que o roteamento SPA funcione corretamente:
```
/* /index.html 200
```

### Passos manuais
1. Acesse [netlify.com](https://netlify.com) e conecte o repositório
2. Configure as opções de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Clique em **Deploy site**

---

## 🎨 Design System

O app utiliza um **design de tema escuro** (dark mode padrão) com efeito **glassmorphism**:

- **Paleta**: tons de `slate` escuro + azul primário vibrante
- **Tipografia**: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- **Componentes**: bordas arredondadas, backdrop-blur, sombras suaves
- **Animações**: transições suaves de página (`page-transition`), hover effects, micro-animações em badges e cards
- **Responsividade**: mobile-first, com bottom tab bar em mobile e navbar completa em desktop

---

## 🔒 Modo Privacidade

Um toggle de privacidade global (ícone de olho na navbar) **oculta todos os valores financeiros** do app — útil para compartilhar a tela (streaming, reuniões, fotos) sem expor gastos pessoais. O estado é gerenciado pelo `PrivacyContext` e persistido no `localStorage`.

---

## 📱 Navegação Mobile

Em dispositivos móveis, a navbar do topo é substituída por uma **bottom tab bar** com os 4 atalhos mais usados (Home, Lembretes, Passagens, Ingressos) + botão "Mais" que abre o menu completo em overlay.

---

## 🌍 Destinos da Viagem

| País | Cidade(s) | Dias |
|---|---|---|
| 🇵🇹 Portugal | Lisboa | 3 |
| 🇳🇱 Países Baixos | Amsterdã | 3 |
| 🇩🇪 Alemanha | Colônia / Rothenburg | 2 |
| 🇱🇺 Luxemburgo | Luxemburgo | 1 |
| 🇧🇪 Bélgica | Bruges + Ghent | 2 |
| 🇫🇷 França | Paris | 5 |
| 🇬🇧 Reino Unido | Londres | 5 |
| 🇪🇸 Espanha | Barcelona | 4 |

**Total: 29 dias | 8 países | 10 cidades**

---

## 📝 Licença

Este projeto é de uso **pessoal**. Sinta-se à vontade para utilizá-lo como base para criar o seu próprio dashboard de viagem.

---

<p align="center">
  Feito com ❤️ para uma viagem inesquecível · Bruno & Eduarda · 2026
</p>
