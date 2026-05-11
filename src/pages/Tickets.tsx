import { Ticket, Calendar, Clock, Search, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react"
import { tickets } from "../data/tripData"
import { useState, useMemo } from "react"
import { FileActionModal } from "../components/FileActionModal"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

type TicketStatus = 'past' | 'today' | 'upcoming'

function getTicketStatus(dateStr: string, timeStr?: string): TicketStatus {
  const [day, month, year] = dateStr.split('/')
  const [hour, minute] = (timeStr ?? '00:00').split(':')
  const ticketDate = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute))
  const now = new Date()
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const todayEnd = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000 - 1)

  if (ticketDate < now) return 'past'
  if (ticketDate <= todayEnd) return 'today'
  return 'upcoming'
}

const cityFlagMap: Record<string, string> = {
  "Amsterdam": "nl",
  "Lisboa": "pt",
  "Paris": "fr",
  "Londres": "gb",
  "Madrid": "es",
  "Colônia": "de",
  "Luxemburgo": "lu",
  "Bruxelas": "be",
}

export default function Tickets() {
  const { t } = useTranslation()
  const [filterTerm, setFilterTerm] = useState('')
  const [collapsedCities, setCollapsedCities] = useState<Set<string>>(new Set())

  const normalizeString = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

  const filteredTickets = useMemo(() => tickets.filter(ticket => {
    const term = normalizeString(filterTerm)
    return normalizeString(ticket.name).includes(term) ||
      normalizeString(ticket.city).includes(term) ||
      normalizeString(ticket.date).includes(term)
  }), [filterTerm])

  // Group by city
  const groupedByCityOrdered = useMemo(() => {
    const groups: Record<string, typeof filteredTickets> = {}
    filteredTickets.forEach(t => {
      if (!groups[t.city]) groups[t.city] = []
      groups[t.city].push(t)
    })
    // Sort groups by first ticket date
    return Object.entries(groups).sort((a, b) => {
      const dateA = a[1][0].date.split('/').reverse().join('')
      const dateB = b[1][0].date.split('/').reverse().join('')
      return dateA.localeCompare(dateB)
    })
  }, [filteredTickets])

  const toggleCity = (city: string) => {
    setCollapsedCities(prev => {
      const next = new Set(prev)
      if (next.has(city)) next.delete(city)
      else next.add(city)
      return next
    })
  }

  const totalTickets = tickets.length
  const pastCount = tickets.filter(t => getTicketStatus(t.date, t.time) === 'past').length
  const upcomingCount = totalTickets - pastCount

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 page-transition">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter">
          {t('tickets.title')}
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          {t('tickets.subtitle')}
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-3">
        <div className="glass border rounded-2xl p-4 text-center shadow-sm">
          <div className="text-2xl font-black">{totalTickets}</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-0.5">{t('tickets.total')}</div>
        </div>
        <div className="glass border border-blue-500/20 rounded-2xl p-4 text-center shadow-sm bg-blue-500/5">
          <div className="text-2xl font-black text-blue-500">{upcomingCount}</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-0.5">{t('tickets.upcoming')}</div>
        </div>
        <div className="glass border border-emerald-500/20 rounded-2xl p-4 text-center shadow-sm bg-emerald-500/5">
          <div className="text-2xl font-black text-emerald-500">{pastCount}</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-0.5">{t('tickets.completed')}</div>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-muted-foreground/20 rounded-xl leading-5 bg-white/50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm backdrop-blur-sm transition-all"
          placeholder={t('tickets.search_placeholder')}
          value={filterTerm}
          onChange={(e) => setFilterTerm(e.target.value)}
        />
      </div>

      {filteredTickets.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground bg-muted/20 rounded-2xl border-dashed border-2">
          <Ticket className="w-12 h-12 mx-auto mb-4 opacity-20" />
          <p className="text-lg font-bold">{t('tickets.no_results')} "{filterTerm}"</p>
        </div>
      ) : (
        <div className="space-y-8">
          {groupedByCityOrdered.map(([city, cityTickets]) => {
            const isCollapsed = collapsedCities.has(city)
            const flagCode = cityFlagMap[city] || "eu"
            const allPast = cityTickets.every(t => getTicketStatus(t.date, t.time) === 'past')

            return (
              <div key={city} className="space-y-3">
                {/* City Header */}
                <button
                  onClick={() => toggleCity(city)}
                  className="w-full flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://flagcdn.com/w40/${flagCode}.png`}
                      alt={city}
                      className="w-7 h-5 rounded shadow-sm object-cover border"
                    />
                    <h2 className="text-lg font-black uppercase tracking-tight">{city}</h2>
                    <span className="text-xs font-black text-muted-foreground px-2 py-0.5 rounded-full bg-muted/50 border">
                      {cityTickets.length} {cityTickets.length === 1 ? t('tickets.ticket_singular') : t('tickets.ticket_plural')}
                    </span>
                    {allPast && (
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        {t('tickets.city_completed')}
                      </span>
                    )}
                  </div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                  </div>
                </button>

                {!isCollapsed && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cityTickets.map((ticket, index) => {
                      const status = getTicketStatus(ticket.date, ticket.time)

                      return (
                        <div
                          key={ticket.id || index}
                          className={cn(
                            "group relative backdrop-blur-md rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col",
                            status === 'past'
                              ? "bg-muted/20 border-muted-foreground/15"
                              : status === 'today'
                              ? "bg-green-500/5 border-green-500/30 shadow-green-500/10"
                              : "bg-white/50 dark:bg-black/20"
                          )}
                        >
                          {/* Status top bar */}
                          <div className={cn(
                            "h-1 w-full",
                            status === 'past' ? "bg-emerald-500/40" :
                            status === 'today' ? "bg-green-500" :
                            "bg-primary"
                          )} />

                          <div className="absolute top-3 right-3 z-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Ticket className="w-16 h-16 rotate-12" />
                          </div>

                          <div className="p-5 sm:p-6 flex-1 flex flex-col relative z-10">
                            {/* Status badge */}
                            <div className="mb-4 flex items-center justify-between">
                              <div className={cn(
                                "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0",
                                status === 'past' ? "bg-emerald-500/10" :
                                status === 'today' ? "bg-green-500/10" :
                                "bg-primary/10"
                              )}>
                                {status === 'past'
                                  ? <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                  : <Ticket className={cn("w-5 h-5", status === 'today' ? "text-green-500" : "text-primary")} />
                                }
                              </div>
                              <span className={cn(
                                "text-[9px] font-black uppercase px-2.5 py-1 rounded-full tracking-widest border",
                                status === 'past' ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" :
                                status === 'today' ? "bg-green-500 text-white border-green-400/50" :
                                "bg-primary/10 text-primary border-primary/20"
                              )}>
                                {status === 'past' ? t('tickets.status_past') : status === 'today' ? t('tickets.status_today') : t('tickets.status_upcoming')}
                              </span>
                            </div>

                            <h3 className={cn(
                              "text-base font-bold mb-4 line-clamp-2",
                              status === 'past' && "text-muted-foreground"
                            )}>
                              {ticket.name}
                            </h3>

                            <div className="space-y-2 mb-5 mt-auto">
                              <div className="flex items-center text-muted-foreground text-sm">
                                <img
                                  src={`https://flagcdn.com/w40/${flagCode}.png`}
                                  alt={ticket.city}
                                  className="w-5 h-3.5 rounded-sm object-cover border mr-2 shadow-sm shrink-0"
                                />
                                <span className="font-medium">{ticket.city}</span>
                              </div>
                              <div className="flex items-center text-muted-foreground text-sm">
                                <Calendar className="w-3.5 h-3.5 mr-2 text-primary shrink-0" />
                                <span className="font-medium">{ticket.date}</span>
                              </div>
                              {ticket.time && (
                                <div className="flex items-center text-muted-foreground text-sm">
                                  <Clock className="w-3.5 h-3.5 mr-2 text-primary shrink-0" />
                                  <span className="font-medium">{ticket.time}</span>
                                </div>
                              )}
                            </div>

                            <FileActionModal
                              fileLink={ticket.fileLink}
                              triggerClassName={cn(
                                "flex items-center justify-center w-full py-2.5 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors",
                                status === 'past'
                                  ? "bg-muted text-muted-foreground hover:bg-muted/80"
                                  : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                              )}
                              triggerText={status === 'past' ? t('tickets.view') : t('tickets.download')}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
