import { Plane, Train, Hotel, Calendar, Clock, MapPin, ChevronRight } from "lucide-react"
import { flights, trains, accommodations, itineraries } from "@/data/tripData"
import { useTranslation } from "react-i18next"

type TimelineEvent = {
  date: string; time: string;
  type: 'flight' | 'train' | 'accommodation' | 'activity';
  title: string; subtitle: string; location: string; details?: string;
}

export default function Timeline() {
  const { t } = useTranslation()

  const allEvents: TimelineEvent[] = [
    ...flights.map(f => ({
      date: f.date, time: f.time, type: 'flight' as const,
      title: `${t("transport.flights").slice(0,-1)}: ${f.from.split(' (')[0]} → ${f.to.split(' (')[0]}`,
      subtitle: `${t("transport.locator")}: ${f.locator}`,
      location: f.from, details: `${t("transport.duration")}: ${f.duration}`
    })),
    ...trains.map(tr => ({
      date: tr.date, time: tr.time, type: 'train' as const,
      title: `Trem: ${tr.from} → ${tr.to}`,
      subtitle: `${tr.type} (${tr.operator})`,
      location: tr.from, details: `${t("transport.arrival")}: ${tr.arrivalTime}`
    })),
    ...accommodations.map(a => ({
      date: a.dateRange.split(' → ')[0], time: "15:00", type: 'accommodation' as const,
      title: `Check-in: ${a.name}`,
      subtitle: `${a.type} em ${a.city}`,
      location: a.city, details: `${t("accommodations.reservation_number")}: ${a.reservationNumber}`
    })),
    ...Object.entries(itineraries).flatMap(([cityKey, days]) =>
      days.flatMap(day => {
        const dateMatch = day.day.match(/^(\d{2}\/\d{2}\/\d{4})/)
        const date = dateMatch ? dateMatch[1] : ""
        return day.activities
          .filter((activity: any) => activity.type !== 'flight' && activity.type !== 'train')
          .map((activity: any) => ({
            date, time: activity.time, type: 'activity' as const,
            title: activity.description,
            subtitle: `${cityKey.charAt(0).toUpperCase() + cityKey.slice(1)}`,
            location: cityKey,
            details: activity.icon ? `${activity.icon}` : undefined
          }))
      })
    )
  ].filter(e => e.date !== "").sort((a, b) => {
    const dateA = a.date.split('/').reverse().join('')
    const dateB = b.date.split('/').reverse().join('')
    if (dateA !== dateB) return dateA.localeCompare(dateB)
    return a.time.localeCompare(b.time)
  })

  const groupedEvents = allEvents.reduce((acc, event) => {
    if (!acc[event.date]) acc[event.date] = []
    acc[event.date].push(event)
    return acc
  }, {} as Record<string, TimelineEvent[]>)

  const sortedDates = Object.keys(groupedEvents).sort((a, b) =>
    a.split('/').reverse().join('').localeCompare(b.split('/').reverse().join(''))
  )

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 page-transition">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black uppercase tracking-tight">{t("timeline.title")}</h1>
        <p className="text-muted-foreground text-lg">{t("timeline.subtitle")}</p>
      </div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
        {sortedDates.map((date, dateIdx) => (
          <div key={dateIdx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all group-hover:scale-125 group-hover:bg-primary group-hover:text-primary-foreground absolute left-0 md:left-1/2 -translate-x-1/2">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl glass border shadow-xl transition-all hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 ml-16 md:ml-0">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-primary font-black uppercase tracking-widest text-xs">{date}</span>
                  <div className="flex items-center text-muted-foreground text-[10px] font-bold">
                    <Clock className="w-3 h-3 mr-1" /> {t("timeline.scheduled").toUpperCase()}
                  </div>
                </div>
                <div className="space-y-6">
                  {groupedEvents[date].map((event, eventIdx) => (
                    <div key={eventIdx} className="space-y-3 relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-muted-foreground/20">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            {event.type === 'flight' && <Plane className="w-4 h-4 text-blue-500" />}
                            {event.type === 'train' && <Train className="w-4 h-4 text-green-500" />}
                            {event.type === 'accommodation' && <Hotel className="w-4 h-4 text-yellow-500" />}
                            {event.type === 'activity' && <MapPin className="w-4 h-4 text-red-500" />}
                            <h3 className="font-black text-sm uppercase leading-tight">{event.title}</h3>
                          </div>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">{event.subtitle}</p>
                        </div>
                        <span className="text-[10px] font-black tabular-nums bg-muted px-2 py-0.5 rounded-md">{event.time}</span>
                      </div>
                      {event.details && (
                        <div className="bg-primary/5 rounded-xl p-3 border border-primary/10 flex items-center justify-between">
                          <span className="text-[9px] font-black text-primary uppercase">{event.details}</span>
                          <ChevronRight className="w-3 h-3 text-primary opacity-50" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
