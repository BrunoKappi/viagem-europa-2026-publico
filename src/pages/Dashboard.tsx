import { useState, useEffect, useMemo } from "react"
import { Calendar, Plane, Hotel, Ticket, Clock, CheckCircle2, AlertCircle, MapPin, Search, Sparkles, ChevronRight } from "lucide-react"
import { expenses, accommodations, flights, trains, cities, tickets, itineraries } from "@/data/tripData"
import { usePrivacy } from "@/context/PrivacyContext"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import React from "react"
import { useTranslation } from "react-i18next"

export default function Dashboard() {
  const { t, i18n } = useTranslation()
  const { formatCurrency, isPrivate } = usePrivacy()
  const [daysLeft, setDaysLeft] = useState(0)
  const [isTripStarted, setIsTripStarted] = useState(false)
  const [filterMode, setFilterMode] = useState<'all' | 'upcoming' | 'today'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getFlagFromText = (text: string) => {
    const txt = text.toLowerCase();
    if (txt.includes('paris')) return 'fr';
    if (txt.includes('londres') || txt.includes('london')) return 'gb';
    if (txt.includes('amsterdam') || txt.includes('amsterdã')) return 'nl';
    if (txt.includes('madri') || txt.includes('madrid') || txt.includes('barcelona') || txt.includes('espanha')) return 'es';
    if (txt.includes('roma') || txt.includes('veneza') || txt.includes('milão') || txt.includes('venice')) return 'it';
    if (txt.includes('berlim') || txt.includes('berlin') || txt.includes('munique') || txt.includes('munich') || txt.includes('frankfurt') || txt.includes('colônia')) return 'de';
    if (txt.includes('lisboa') || txt.includes('porto') || txt.includes('lisbon') || txt.includes('portugal')) return 'pt';
    if (txt.includes('bruxelas') || txt.includes('brussels') || txt.includes('bélgica')) return 'be';
    if (txt.includes('viena') || txt.includes('vienna') || txt.includes('áustria')) return 'at';
    if (txt.includes('praga') || txt.includes('prague') || txt.includes('checa')) return 'cz';
    if (txt.includes('bratislava') || txt.includes('eslováquia')) return 'sk';
    if (txt.includes('budapeste') || txt.includes('budapest') || txt.includes('hungria')) return 'hu';
    if (txt.includes('luxemburgo') || txt.includes('luxembourg')) return 'lu';
    if (txt.includes('suiça') || txt.includes('zurich') || txt.includes('geneva')) return 'ch';
    if (txt.includes('dublin') || txt.includes('irlanda')) return 'ie';
    if (txt.includes('brasil') || txt.includes('poa') || txt.includes('gru') || txt.includes('são paulo') || txt.includes('porto alegre')) return 'br';
    return '';
  };

  // Trip Start: 3rd of April 2026, 16:05 (first flight POA -> GRU)
  const tripStartDate = new Date("2026-04-03T16:05:00")

  useEffect(() => {
    const today = new Date()
    const diffTime = tripStartDate.getTime() - today.getTime()
    if (diffTime <= 0) {
      setIsTripStarted(true)
      setDaysLeft(0)
    } else {
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      setDaysLeft(diffDays)
    }
  }, [])

  // --- Lembretes Inteligentes / Timeline Generation ---
  const smartTimeline = useMemo(() => {
    const parseDate = (dateStr: string, timeStr = "00:00") => {
      const cleanDate = dateStr.split(" ")[0]; // remove "(Sábado)"
      const parts = cleanDate.split("/");
      if (parts.length !== 3) return new Date();
      const [day, month, year] = parts;
      const timeParts = timeStr.replace('h', ':').split(":");
      const hours = timeParts[0] || "0";
      const minutes = timeParts[1] || "0";
      return new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
    }

    const events: any[] = [];

    // Flights & Flight Checkings
    flights.forEach(f => {
      // O Voo em Si
      events.push({ dateTime: parseDate(f.date, f.time), type: 'Voo', title: `Voo: ${f.from} ✈️ ${f.to}`, subtitle: `Locator: ${f.locator}`, icon: <Plane className="w-5 h-5 text-sky-500" /> });
      
      // O Check-in do Voo (Se for listado nas propriedades)
      if (f.checkinDate && f.checkinTime) {
        events.push({ dateTime: parseDate(f.checkinDate, f.checkinTime), type: 'Check-in de Voo', title: `Liberado Check-in do Voo`, subtitle: `Para: ${f.to} - Reserva: ${f.locator}`, icon: <CheckCircle2 className="w-5 h-5 text-cyan-500" /> });
      }
    });

    // Trains
    trains.forEach(t => {
      events.push({ dateTime: parseDate(t.date, t.time), type: 'Trem', title: `Trem: ${t.from} 🚄 ${t.to}`, subtitle: `Operadora: ${t.operator}`, icon: <MapPin className="w-5 h-5 text-indigo-500" /> });
    });

    // Accommodations (Check-in Apenas)
    accommodations.forEach(a => {
      const parts = a.dateRange.split(" → ");
      if (parts.length >= 1) {
        // Assume check-in como 14:00 por padrão europeu típico
        events.push({ dateTime: parseDate(parts[0], "14:00"), type: 'Check-in Hospedagem', title: `Check-in: ${a.name}`, subtitle: `Destino: ${a.city}`, icon: <Hotel className="w-5 h-5 text-green-500" /> });
      }
    });

    // Tickets Agendados
    tickets.forEach(ticket => {
      if (ticket.time) {
        events.push({ dateTime: parseDate(ticket.date, ticket.time), type: 'Ingresso Agendado', title: ticket.name, subtitle: `Local: ${ticket.city}`, icon: <Ticket className="w-5 h-5 text-violet-500" /> });
      }
    });

    // Sort by date ascending
    events.sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());

    // Calc status
    const now = new Date(); // To test during trip simulation, we could mock the date, but we use the real one. 
    // MOCK NOW FOR TESTING IF NEEDED: const now = new Date("2026-04-10T10:00:00");
    
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayEnd = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000 - 1);

    return events.map(e => {
      let status = 'upcoming';
      if (e.dateTime < now) status = 'past';
      else if (e.dateTime <= todayEnd) status = 'today';
      return { ...e, status };
    });
  }, [itineraries, flights, trains, accommodations]);

  const displayedTimeline = useMemo(() => {
    let list = smartTimeline;
    if (filterMode === 'upcoming') {
      list = list.filter(e => e.status !== 'past');
    } else if (filterMode === 'today') {
      list = list.filter(e => e.status === 'today');
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(e => 
        e.title.toLowerCase().includes(q) || 
        e.subtitle.toLowerCase().includes(q) || 
        e.type.toLowerCase().includes(q)
      );
    }
    return list;
  }, [smartTimeline, filterMode, searchQuery]);

  // Trip status
  const now = new Date()
  const tripStart = new Date("2026-04-03T16:05:00")
  const tripEnd = new Date("2026-05-03T15:25:00")
  const isDuringTrip = now >= tripStart && now <= tripEnd
  const isAfterTrip = now > tripEnd
  const totalTripDays = 29
  const daysPassed = isDuringTrip ? Math.floor((now.getTime() - tripStart.getTime()) / (1000 * 60 * 60 * 24)) : 0
  const progressPct = isDuringTrip ? Math.min(100, Math.round((daysPassed / totalTripDays) * 100)) : isAfterTrip ? 100 : 0

  const currentCity = cities.find(c => {
    const s = new Date(c.startDate), e = new Date(c.endDate)
    return now >= s && now <= e
  })
  const nextUpcoming = smartTimeline.find(e => e.status === 'today' || e.status === 'upcoming')

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 page-transition">

      {/* Trip Status Hero */}
      <div className="glass border rounded-3xl overflow-hidden shadow-xl">
        <div className="bg-gradient-to-br from-primary/10 to-indigo-500/5 p-5 sm:p-7 border-b">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-primary mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {isAfterTrip ? t('dashboard.trip_completed') : isDuringTrip ? t('dashboard.trip_ongoing') : t('dashboard.awaiting_start')}
              </p>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                {isAfterTrip
                  ? t('dashboard.days_completed')
                  : isDuringTrip && currentCity
                  ? `${t('dashboard.currently_in')} ${currentCity.name} ${currentCity.flag}`
                  : `${t('dashboard.takeoff_in')} ${daysLeft} ${daysLeft !== 1 ? t('common.days') : t('common.day')} ✈️`}
              </h2>
              {isDuringTrip && (
                <p className="text-sm text-muted-foreground mt-1">
                  {t('dashboard.day')} <strong>{daysPassed + 1}</strong> {t('dashboard.of')} <strong>{totalTripDays}</strong>
                </p>
              )}
            </div>
            {isDuringTrip && currentCity && (
              <Link
                to={`/city/${currentCity.id}`}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors shadow-md shrink-0"
              >
                Ver Roteiro <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

          {/* Progress Bar */}
          {(isDuringTrip || isAfterTrip) && (
            <div className="mt-5">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">
                <span>{t('dashboard.trip_progress')}</span>
                <span>{progressPct}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-muted/50 overflow-hidden border">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000 shadow-sm shadow-primary/40"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <div className="flex justify-between text-[9px] text-muted-foreground/70 mt-1.5 font-bold">
                <span>03 Abr</span>
                <span>03 Mai</span>
              </div>
            </div>
          )}
        </div>

        {/* Next Event strip */}
        {nextUpcoming && (
          <div className="px-5 sm:px-7 py-3.5 flex items-center gap-3 bg-muted/10">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-black uppercase tracking-widest shrink-0">
              <Clock className="w-3.5 h-3.5 text-primary" /> {t('dashboard.next')}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-bold truncate block">{nextUpcoming.title}</span>
            </div>
            <span className="text-xs font-black text-primary shrink-0 tabular-nums">
              {nextUpcoming.dateTime.toLocaleDateString(i18n.language === 'pt' ? 'pt-BR' : 'en-GB', { day:'2-digit', month: 'short' })} · {nextUpcoming.dateTime.toLocaleTimeString(i18n.language === 'pt' ? 'pt-BR' : 'en-GB', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        )}
      </div>

      {/* Lembretes Inteligentes / Global Timeline */}
      <div className="bg-background rounded-3xl border shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 md:p-8 border-b bg-muted/20 flex flex-col items-start gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-primary" /> {t('dashboard.smart_reminders')}
              </h2>
              <p className="text-sm font-medium text-muted-foreground mt-1">{t('dashboard.smart_reminders_desc')}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder={t('dashboard.search_placeholder')}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-xl border bg-background text-sm font-medium shadow-sm w-full sm:w-48 focus:outline-none focus:border-primary transition-all"
                />
              </div>
              <div className="flex bg-muted/50 p-1 rounded-xl shrink-0 border-none shadow-inner">
                <button 
                  onClick={() => setFilterMode('all')}
                  className={cn("px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all", filterMode === 'all' ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
                >
                  {t('dashboard.filter_all')}
                </button>
                <button 
                  onClick={() => setFilterMode('today')}
                  className={cn("px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all", filterMode === 'today' ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
                >
                  {t('dashboard.filter_today')}
                </button>
                <button 
                  onClick={() => setFilterMode('upcoming')}
                  className={cn("px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all", filterMode === 'upcoming' ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}
                >
                  {t('dashboard.filter_upcoming')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 bg-muted/5">
          <div className="flex flex-col gap-3">
            {displayedTimeline.length === 0 ? (
              <p className="text-center text-muted-foreground text-sm py-10 font-bold">{t('dashboard.no_reminders')}</p>
            ) : displayedTimeline.map((item, idx) => {
              const isPast = item.status === 'past';
              const isToday = item.status === 'today';
              const isUpcoming = item.status === 'upcoming';
              const formattedTime = item.dateTime.toLocaleTimeString(i18n.language === 'pt' ? 'pt-BR' : 'en-GB', { hour: '2-digit', minute: '2-digit' });
              const formattedDate = item.dateTime.toLocaleDateString(i18n.language === 'pt' ? 'pt-BR' : 'en-GB', { day: '2-digit', month: 'short' });
              const itemFlag = getFlagFromText(`${item.title} ${item.subtitle}`);
              
              return (
                <div 
                  key={idx} 
                  className={cn(
                    "w-full rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row justify-between transition-all relative overflow-hidden gap-4 sm:gap-6",
                    isPast ? "bg-emerald-500/5 text-emerald-800" : 
                    isToday ? "bg-primary/5 shadow-md scale-[1.01]" : 
                    "bg-background shadow-sm hover:shadow-md hover:bg-muted/10 border border-border/50"
                  )}
                >
                  <div className="flex gap-4 md:gap-5 w-full">
                    <div className={cn("w-14 h-14 flex items-center justify-center rounded-2xl shrink-0", isPast ? "bg-white/50 [&_svg]:!text-emerald-700/80" : "bg-muted/40 shadow-inner")}>
                      {item.icon}
                    </div>
                    <div className="flex flex-col flex-1 justify-center">
                      <h4 className={cn("text-base md:text-lg font-bold leading-tight", isPast && "text-emerald-700/80")}>{item.title}</h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5 md:mt-2 text-xs md:text-sm text-muted-foreground font-medium">
                         <span className="flex items-center gap-1">
                           <MapPin className="w-3.5 h-3.5" /> 
                           {item.subtitle} 
                           {itemFlag && <img src={`https://flagcdn.com/${itemFlag}.svg`} alt="" className="w-5 h-auto ml-1.5 drop-shadow-sm rounded-[2px]" />}
                         </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center self-stretch sm:self-auto min-w-[140px] pt-4 sm:pt-0 border-t sm:border-none border-dashed shrink-0">
                    <div className="flex flex-col items-start sm:items-end">
                      <span className="text-xl md:text-2xl font-black text-foreground tracking-tighter leading-none">{formattedTime}</span>
                      <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{formattedDate}</span>
                    </div>
                    <div className="flex shrink-0 mt-0 sm:mt-2">
                       {isPast && <span className="bg-emerald-500/10 text-emerald-700 text-[9px] font-black uppercase px-2.5 py-1 rounded-md tracking-widest shadow-sm">{t('dashboard.status_done')}</span>}
                       {isToday && <span className="bg-green-500 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-md tracking-widest shadow-sm">{t('dashboard.status_today')}</span>}
                       {isUpcoming && <span className="bg-blue-500 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-md tracking-widest shadow-sm">{t('dashboard.status_upcoming')}</span>}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
