import { useState, useMemo } from "react"
import { Search, Plane, Train, Hotel, Map, Ticket, FileText, CreditCard, ArrowRight, Calendar, X } from "lucide-react"
import { expenses, accommodations, flights, trains, cities, tickets, itineraries } from "@/data/tripData"
import { brunoDocuments, eduardaDocuments, otherDocuments } from "@/pages/Documents"
import { cn } from "@/lib/utils"
import { FileActionModal } from "@/components/FileActionModal"
import { Link } from "react-router-dom"
import { usePrivacy } from "@/context/PrivacyContext"
import { useTranslation } from "react-i18next"

type SearchResult = {
  id: string,
  type: string,
  title: string,
  subtitle: string,
  icon: any,
  link?: string,
  fileLink?: string,
  color: string,
  hasInfoModal?: boolean,
}

export default function GlobalSearch() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")
  const { formatCurrency, isPrivate } = usePrivacy()

  const normalizeText = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

  const allData = useMemo(() => {
    const results: SearchResult[] = []

    const allDocs = [...brunoDocuments, ...eduardaDocuments, ...otherDocuments]
    allDocs.forEach(doc => {
      results.push({
        id: `doc-${doc.id}`,
        type: t('search.types.document'),
        title: doc.name,
        subtitle: `${doc.type} - ${doc.owner}`,
        icon: FileText,
        fileLink: doc.fileLink,
        link: '/documents',
        color: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
      })
    })

    flights.forEach((flight, idx) => {
      results.push({
        id: `flight-${idx}`,
        type: t('search.types.flight'),
        title: `${flight.from} ➔ ${flight.to}`,
        subtitle: `${flight.date} ${t('common.at')} ${flight.time} | ${t('common.locator')}: ${flight.locator}`,
        icon: Plane,
        fileLink: flight.fileLink,
        link: '/transport',
        color: 'bg-sky-500/20 text-sky-600 dark:text-sky-400',
      })
    })

    trains.forEach((train, idx) => {
      results.push({
        id: `train-${idx}`,
        type: t('search.types.train'),
        title: `${train.from} ➔ ${train.to}`,
        subtitle: `${train.date} ${t('common.at')} ${train.time} | ${t('common.locator')}: ${train.locator}`,
        icon: Train,
        fileLink: train.fileLink,
        link: '/transport',
        color: 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
      })
    })

    accommodations.forEach(acc => {
      results.push({
        id: `acc-${acc.id}`,
        type: acc.type,
        title: acc.name,
        subtitle: `${acc.city}, ${acc.country} | Check-in: ${acc.dateRange.split('→')[0].trim()}`,
        icon: Hotel,
        fileLink: acc.fileLink,
        link: '/accommodations',
        color: 'bg-rose-500/20 text-rose-600 dark:text-rose-400',
      })
    })

    tickets.forEach(ticket => {
      results.push({
        id: `ticket-${ticket.id}`,
        type: t('search.types.ticket'),
        title: ticket.name,
        subtitle: `${ticket.city} | ${ticket.date} ${ticket.time ? `${t('common.at')} ${ticket.time}` : ''}`,
        icon: Ticket,
        fileLink: ticket.fileLink,
        link: '/tickets',
        color: 'bg-violet-500/20 text-violet-600 dark:text-violet-400',
      })
    })

    cities.forEach(city => {
      results.push({
        id: `city-${city.id}`,
        type: t('search.types.destination'),
        title: `${city.name}, ${city.country}`,
        subtitle: `${t('accommodations.period')}: ${city.dateRange}`,
        icon: Map,
        link: `/city/${city.id}`,
        color: 'bg-amber-500/20 text-amber-600 dark:text-amber-400',
      })
    })

    expenses.forEach(exp => {
      results.push({
        id: `exp-${exp.id}`,
        type: t('search.types.expense'),
        title: exp.name,
        subtitle: `${exp.category} | ${formatCurrency(exp.amount)}`,
        icon: CreditCard,
        link: '/expenses',
        color: 'bg-orange-500/20 text-orange-600 dark:text-orange-400',
      })
    })

    Object.entries(itineraries).forEach(([cityId, days]) => {
       days.forEach(day => {
         day.activities.forEach((act, actIdx) => {
            results.push({
               id: `itinerary-${cityId}-${day.day}-${actIdx}`,
               type: t('search.types.itinerary'),
               title: act.description,
               subtitle: `${cityId.charAt(0).toUpperCase() + cityId.slice(1)} | ${day.day.split(' ')[0]} ${t('common.at')} ${act.time}`,
               icon: Calendar,
               link: act.placeId ? `/city/${cityId}?placeId=${act.placeId}` : '/timeline',
               hasInfoModal: !!act.placeId,
               color: 'bg-teal-500/20 text-teal-600 dark:text-teal-400',
            })
         })
       })
    })

    return results;
  }, [formatCurrency, isPrivate, t])

  const filteredResults = useMemo(() => {
    if (!searchTerm.trim()) return []
    const rawTerms = searchTerm.trim().split(/\s+/);
    const normalizedTerms = rawTerms.map(term => normalizeText(term));

    return allData.filter(item => {
      // Create a super string containing all relevant text data
      const searchSpace = normalizeText(
        `${item.title} ${item.subtitle} ${item.type} ${item.color} ${item.id}`
      );
      // Check if ALL words typed are present in the search space
      return normalizedTerms.every(term => searchSpace.includes(term));
    });
  }, [searchTerm, allData])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 page-transition flex flex-col min-h-[calc(100vh-8rem)]">
      
      <div className="text-center space-y-6 mb-10">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">
          {t('search.title')}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
          {t('search.subtitle')}
        </p>
      </div>

      <div className="group sticky top-16 z-40 bg-background/80 backdrop-blur-xl py-4 -mx-4 px-4 sm:mx-0 sm:px-0 rounded-b-xl">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-primary" />
        </div>
        <input
          type="text"
          className="block w-full pl-16 pr-14 py-6 text-xl border-2 border-primary/20 rounded-full leading-5 bg-background focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary shadow-xl transition-all font-bold placeholder:text-muted-foreground/50"
          placeholder={t('search.placeholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-6 flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        )}
      </div>

      <div className="mt-8 flex-1">
        {!searchTerm.trim() ? (
          <div className="flex flex-col items-center justify-center h-64 text-muted-foreground/30 space-y-4">
            <Search className="w-24 h-24 mb-4" />
            <p className="text-2xl font-black uppercase tracking-widest text-center px-4">{t('search.empty_title')}</p>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-muted-foreground space-y-4 bg-muted/10 rounded-3xl border border-dashed p-8">
            <p className="text-2xl font-black uppercase tracking-widest text-center">{t('search.no_results')}</p>
            <p className="text-center font-medium">{t('search.no_results_desc', { term: searchTerm })}</p>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-6 px-2">
              <span className="text-sm font-black uppercase tracking-widest text-muted-foreground">{t('search.results_label')}</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black">{filteredResults.length} {t('search.found_label')}</span>
            </div>
            
            {filteredResults.map((result) => (
              <div 
                key={result.id} 
                className="group bg-background hover:bg-muted/30 border shadow-sm hover:shadow-md rounded-2xl p-4 md:p-6 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 relative overflow-hidden"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0", result.color)}>
                    <result.icon className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col flex-1 justify-center min-w-0">
                     <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                       {result.type}
                     </span>
                     <h3 className="text-lg font-bold mb-1 truncate text-foreground pr-4">
                       {result.title}
                     </h3>
                     <p className="text-sm font-medium text-muted-foreground truncate max-w-full">
                       {result.subtitle}
                     </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l md:pl-6 shrink-0 justify-between md:justify-end">
                  {result.fileLink && (
                    <FileActionModal
                      fileLink={result.fileLink}
                      triggerClassName="flex flex-1 md:flex-auto items-center justify-center bg-primary/10 text-primary px-6 py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary/20 transition-colors"
                      triggerText={t('search.download_btn')}
                    />
                  )}
                  {result.link && (
                    <Link
                      to={result.link}
                      className={cn(
                        "flex flex-1 md:flex-auto items-center justify-center px-6 py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors group-hover:pr-4",
                        result.hasInfoModal 
                          ? "bg-amber-500 text-amber-950 hover:bg-amber-400" 
                          : "bg-foreground text-background hover:bg-foreground/90"
                      )}
                    >
                      {result.hasInfoModal ? t('search.view_info_btn') : t('search.go_to_btn')}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 -mr-6 group-hover:opacity-100 group-hover:mr-0 transition-all" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
