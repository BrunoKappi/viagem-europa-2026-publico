import { useState } from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import { cities, itineraries, accommodations } from "@/data/tripData"
import { Clock, ChevronLeft, Hotel, ArrowRight, Info, Search, ExternalLink, X, BookOpen, Sparkles, Star } from "lucide-react"
import { placesInfo, placesInfoLuxemburgo, placesInfoBrugesGhent, placesInfoRest } from "@/data/placesInfo"
import type { PlaceInfo } from "@/data/placesInfo"
import { useTranslation } from "react-i18next"

const allPlacesInfo = [...placesInfo, ...placesInfoLuxemburgo, ...placesInfoBrugesGhent, ...placesInfoRest]

const flagMap: Record<string, string> = {
  "🇵🇹": "pt",
  "🇳🇱": "nl",
  "🇩🇪": "de",
  "🇱🇺": "lu",
  "🇧🇪": "be",
  "🇫🇷": "fr",
  "🇬🇧": "gb",
  "🇪🇸": "es",
}

const IconGoogle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const IconChatGPT = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.28 9.82a6.47 6.47 0 0 0-1.44-6.38 6.49 6.49 0 0 0-6.17-1.63 6.49 6.49 0 0 0-11 2.5 6.47 6.47 0 0 0-1.57 6.15 6.49 6.49 0 0 0 6.16 7.63 6.49 6.49 0 0 0 11-2.5 6.47 6.47 0 0 0 1.57-6.15zm-8.83 11a4.44 4.44 0 0 1-3.66-1.9L16 15.35v1.27a4.49 4.49 0 0 0 4.25 4.5l-6.8 1.68zm-.39-16.32v-1.27c2-.46 4.14.39 5.23 2.1l-.81 1.4-5.35-3.08a4.44 4.44 0 0 1 .93.85zm-7.6 12.52l5.35-3.09L10 12.04v7.26a4.44 4.44 0 0 1-4.54-5.5zM12 21.03v-4.49L7.33 13.5v5.3l4.67 2.23zm8.38-9.8a4.44 4.44 0 0 1-1.9 3.66l1.24-1.74-5.26 3.04.57 1.25a4.49 4.49 0 0 0 7.42-3.8l-2.07-2.4zm-9.35-7.14v4.49l4.67 2.68v-5.3L6.47 3.86a4.49 4.49 0 0 0-3.32 6.77L5 8.9V9h-.53a4.48 4.48 0 0 1-.84-2.82 4.48 4.48 0 0 1 7.4-4.09zm1.31 4L7 9.83l-1.3 2.25 5.35 3.09L15 13l-2.66-4.91zm1.38-4h.53a4.48 4.48 0 0 1 .84 2.82 4.48 4.48 0 0 1-4.44 4.47v-1.27c2 .46 4.14-.39 5.23-2.1L18 7.37z" />
  </svg>
)

const IconGemini = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M11.953 23c-1.366-4.494-4.66-7.807-9.155-9.191C7.294 12.441 10.589 9.123 11.953 4.629c1.385 4.494 4.68 7.812 9.174 9.18-4.494 1.383-7.789 4.697-9.174 9.191"/>
  </svg>
)

const IconMaps = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M16 4.92c-.67-.77-1.57-1.39-2.58-1.78l-3.23 3.86.32.18c1.39.79 1.88 2.56 1.09 3.95-.51.9-1.39 1.41-2.28 1.41l-4.5 5.37C5.9 20.57 7.02 23 9.49 23 13.9 23 16 18.06 16 14.7c0-1.12-.23-2.14-.62-2.95l.62-.71c.78-.3 1.48-.75 2.06-1.33L16 4.92Z"/>
    <path fill="#34A853" d="M5.32 17.91l4.5-5.37a2.76 2.76 0 0 1-.77-.45l-.32-.18C7.34 11.12 6.85 9.35 7.64 7.96c.51-.9 1.39-1.41 2.28-1.41l3.23-3.86a6.83 6.83 0 0 0-4.66.45C5.7 4.41 4 7.55 4 10.95c0 2.65.65 5.03 1.32 6.96Z"/>
    <path fill="#FBBC05" d="M12 2A6.81 6.81 0 0 0 8.49 3.14L11.72 7a2.78 2.78 0 0 1 1.43-.39c1.59 0 2.88 1.29 2.88 2.88 0 .47-.11.91-.3 1.3l2.87-3.41C18.15 5.56 15.35 2 12 2Z"/>
    <path fill="#EA4335" d="M16.92 6.13c-.91-1-2.11-1.75-3.49-2.13l-4.94 5.91c.21.37.52.68.89.89 1.39.79 3.16.3 3.95-1.09l.3-.59 3.29-3Z"/>
  </svg>
)

export default function CityDetail() {
  const { cityId } = useParams<{ cityId: string }>()
  const cityIndex = cities.findIndex((c) => c.id === cityId)
  const city = cities[cityIndex]
  const nextCity = cities[cityIndex + 1]
  
  const itinerary = itineraries[cityId || ""] || []
  const cityAccommodations = accommodations.filter(acc => acc.city.toLowerCase() === city?.name.toLowerCase())

  const [filterTerm, setFilterTerm] = useState('')
  const [selectedPlaceInfo, setSelectedPlaceInfo] = useState<{ info: PlaceInfo, placeName: string } | null>(null)
  const location = useLocation()
  const { t } = useTranslation()

  useState(() => {
    const params = new URLSearchParams(location.search);
    const placeIdParam = params.get('placeId');
    if (placeIdParam) {
      const info = allPlacesInfo.find(p => p.placeId === placeIdParam);
      if (info) {
        // Encontra o nome da atividade correspondente ou um fallback
        let placeName = 'Local';
        for (const day of itinerary) {
          const act = day.activities.find((a: any) => a.placeId === placeIdParam);
          if (act) placeName = act.description;
        }
        setSelectedPlaceInfo({ info, placeName });
      }
    }
  })

  const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
  }

  const filteredItinerary = itinerary.map((day: any) => {
    const term = normalizeString(filterTerm);
    const matchesDay = normalizeString(day.day).includes(term);
    const filteredActivities = day.activities.filter((act: any) => 
      normalizeString(act.time).includes(term) ||
      normalizeString(act.description).includes(term) ||
      matchesDay
    );
    return { ...day, activities: filteredActivities };
  }).filter((day: any) => day.activities.length > 0);

  const otherCities = cities.filter(c => c?.id !== city?.id && c?.id !== nextCity?.id);

  const handleGoogleClick = (e: React.MouseEvent, query: string) => {
    e.preventDefault();
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }

  const handleGeminiClick = async (e: React.MouseEvent, query: string) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(query);
      const userConfirm = window.confirm(t('cityDetail.search_on_google'));
      if (!userConfirm) return;
    } catch {
      // Ignora erro silent
    }
    
    window.open(`https://gemini.google.com/app`, '_blank');
  }

  if (!city) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <h2 className="text-4xl font-black">{t('cityDetail.city_not_found')}</h2>
        <Link to="/" className="text-primary font-bold hover:underline">{t('cityDetail.back_home')}</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-12 page-transition">
      <Link to="/" className="inline-flex items-center text-xs sm:text-sm font-black text-muted-foreground hover:text-primary transition-colors group tracking-widest uppercase">
        <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" /> {t('cityDetail.back').toUpperCase()}
      </Link>

      {/* City Hero */}
      <section className="relative h-[350px] sm:h-[450px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden glass shadow-2xl border">
        <div className="absolute inset-0 z-0">
          <img
            src={city.coverImage}
            alt={city.name}
            className="w-full h-full object-cover brightness-75 scale-105 duration-[10s] transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        </div>
        
        <div className="relative z-10 p-6 sm:p-12 h-full flex flex-col justify-end">
          <div className="flex items-center space-x-4 sm:space-x-6 mb-2 sm:mb-4">
             <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-xl border border-white/30 overflow-hidden">
               <img 
                 src={`https://flagcdn.com/w80/${flagMap[city.flag] || "eu"}.png`}
                 alt={city.country}
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-2 sm:mb-4 uppercase">
            {city.name}
          </h1>
          <p className="max-w-2xl text-base sm:text-xl text-gray-200 font-medium leading-relaxed line-clamp-3 sm:line-clamp-none">
            {city.description}
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
        {/* Roteiro Detail */}
        <div className="lg:col-span-2 space-y-8 sm:space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b pb-6 gap-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">{t('cityDetail.itinerary_title')}</h2>
              <p className="text-muted-foreground mt-1 sm:mt-2 text-sm sm:text-lg font-medium">{t('cityDetail.itinerary_subtitle', { city: city.name })}</p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={t('cityDetail.filter_placeholder')}
                value={filterTerm}
                onChange={(e) => setFilterTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-muted/30 border-transparent focus:bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm font-medium"
              />
            </div>
          </div>

          <div className="space-y-8 sm:space-y-12 relative before:absolute before:left-4 sm:before:left-8 before:top-2 before:bottom-2 before:w-0.5 before:bg-muted-foreground/20">
            {filteredItinerary.length > 0 ? (
              filteredItinerary.map((day: any, i: number) => (
                <div key={i} className="relative pl-10 sm:pl-20 group">
                  <div className="absolute left-2.5 sm:left-6 top-2 w-3.5 h-3.5 rounded-full bg-primary border-4 border-background z-10 transition-transform group-hover:scale-125 shadow-sm shadow-primary/40" />
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-black text-primary uppercase tracking-tighter mb-4 sm:mb-6 underline decoration-4 underline-offset-8 decoration-primary/30">{day.day}</h3>
                    <div className="space-y-3 sm:space-y-4">
                      {day.activities.map((act: any, j: number) => {
                        const info = allPlacesInfo.find(p => p.placeId === act.placeId);
                        return (
                        <div 
                          key={j} 
                          onClick={() => info && setSelectedPlaceInfo({ info, placeName: act.description })}
                          className={`glass p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all flex items-center space-x-3 sm:space-x-4 shadow-sm ${info ? 'cursor-pointer hover:bg-primary/5 hover:border-primary/40 hover:shadow-md' : 'hover:bg-muted/30 cursor-default'}`}
                        >
                          <div className="text-sm sm:text-base font-black text-muted-foreground w-12 sm:w-14 tabular-nums text-center sm:text-left">{act.time}</div>
                          <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-muted/50 text-base sm:text-lg flex-shrink-0">{act.icon}</div>
                          <div className="flex-1 font-bold leading-tight">
                             <div className="text-sm sm:text-base flex items-center flex-wrap gap-2">
                               {act.description}
                               {info && <span className="bg-primary/10 text-primary text-[10px] uppercase font-black px-2 py-0.5 rounded-full border border-primary/20">{t('cityDetail.info_badge')}</span>}
                             </div>
                          </div>
                        </div>
                      )})}
                    </div>
                  </div>
                </div>
              ))
            ) : filterTerm ? (
              <div className="flex flex-col items-center justify-center p-8 sm:p-12 glass rounded-2xl border text-center ml-0 space-y-6">
                <Search className="w-12 h-12 text-muted-foreground/30 mb-2" />
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight">{t('cityDetail.no_activities_title')}</h3>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base max-w-md mx-auto">
                    {t('cityDetail.no_activities_desc', { term: filterTerm, city: city.name })}
                  </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full max-w-3xl mt-4">
                  <a 
                    href={`https://www.google.com/search?q=${encodeURIComponent('Me fale informações e curiosidades sobre ' + filterTerm + ' em ' + city.name)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl bg-muted/20 hover:bg-muted font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all border shadow-sm hover:scale-[1.02]"
                  >
                     <IconGoogle className="w-3.5 h-3.5 mr-1.5" /> Google 
                  </a>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(filterTerm + ' em ' + city.name)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl bg-muted/20 hover:bg-muted font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all border shadow-sm hover:scale-[1.02]"
                  >
                     <IconMaps className="w-3.5 h-3.5 mr-1.5" /> Maps
                  </a>
                  <a 
                    href={`https://chatgpt.com/?q=${encodeURIComponent('Conte-me mais sobre ' + filterTerm + ' em ' + city.name + '. Me dê contexto histórico e curiosidades impressionantes.')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl bg-muted/20 hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/30 font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all border shadow-sm hover:scale-[1.02]"
                  >
                     <IconChatGPT className="w-3.5 h-3.5 mr-1.5 text-[#10A37F]" /> ChatGPT
                  </a>
                  <a 
                    href={`https://gemini.google.com/app?q=${encodeURIComponent('Me dê dicas imperdíveis e curiosidades sobre ' + filterTerm + ' em ' + city.name)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl bg-muted/20 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all border shadow-sm hover:scale-[1.02]"
                  >
                     <IconGemini className="w-3.5 h-3.5 mr-1.5 text-[#1a73e8]" /> Gemini
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 sm:p-12 glass rounded-2xl sm:rounded-3xl border border-dashed text-muted-foreground ml-6 sm:ml-0">
                <Info className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
                <p className="text-lg sm:text-xl font-bold uppercase tracking-widest text-center">{t('cityDetail.itinerary_in_review')}</p>
                <p className="mt-2 text-center text-sm sm:text-base">{t('cityDetail.itinerary_in_review_desc')}</p>
              </div>
            )}
          </div>

          {/* Next Station Link */}
          {nextCity && (
            <div className="pt-12">
              <Link 
                to={`/city/${nextCity.id}`}
                className="group w-full glass p-8 rounded-[2rem] border-2 border-dashed border-primary/30 hover:border-primary/60 transition-all flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-primary/5 shadow-lg"
              >
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner border border-primary/20 overflow-hidden shrink-0">
                     <img 
                       src={`https://flagcdn.com/w80/${flagMap[nextCity.flag] || "eu"}.png`}
                       alt={nextCity.country}
                       className="w-full h-full object-cover"
                     />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1 opacity-70">{t('cityDetail.next_stop')}</p>
                    <h4 className="text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{nextCity.name}</h4>
                  </div>
                </div>
                <div className="flex items-center font-black uppercase text-xs tracking-widest text-primary bg-primary/10 px-6 py-3 rounded-full group-hover:scale-105 transition-all shadow-sm border border-primary/10">
                   {t('cityDetail.continue_trip')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          )}

          {otherCities.length > 0 && (
            <div className="pt-6">
              <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-4 opacity-70 ml-2">{t('cityDetail.explore_other')}</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {otherCities.map(other => (
                  <Link 
                    key={other.id}
                    to={`/city/${other.id}`}
                    className="flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full glass border hover:border-primary/50 hover:bg-primary/5 font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all shadow-sm"
                  >
                     <img 
                       src={`https://flagcdn.com/w20/${flagMap[other.flag] || "eu"}.png`}
                       className="w-3.5 h-2.5 sm:w-4 sm:h-3 rounded-sm mr-2 shadow-sm object-cover"
                       alt="Flag"
                     />
                     {other.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6 sm:space-y-8">
          <div className="glass p-6 sm:p-8 rounded-[2rem] border shadow-xl bg-primary/5">
             <h3 className="text-base sm:text-xl font-black uppercase tracking-tight mb-4 sm:mb-6 flex items-center">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary" /> {t('cityDetail.total_period')}
            </h3>
            <div className="p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-black/20 border shadow-sm flex items-center justify-center">
              <span className="text-base sm:text-lg font-black tracking-tight text-center">{city.dateRange}</span>
            </div>
          </div>

          <div className="glass p-6 sm:p-8 rounded-[2rem] border shadow-xl">
             <h3 className="text-base sm:text-xl font-black uppercase tracking-tight mb-4 sm:mb-6 flex items-center">
              <Hotel className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary" /> {t('cityDetail.accommodation')}
            </h3>
            <div className="space-y-4">
              {cityAccommodations.length > 0 ? (
                cityAccommodations.map((acc, i) => (
                   <Link 
                     key={i} 
                     to="/accommodations"
                     className="block p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-muted/30 border border-muted-foreground/10 hover:border-primary/40 transition-all group"
                   >
                    <p className="text-[10px] font-black text-muted-foreground uppercase mb-1">{acc.type}</p>
                    <p className="text-base sm:text-lg font-black group-hover:text-primary transition-colors">{acc.name}</p>
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1 truncate">{acc.phone}</p>
                  </Link>
                ))
              ) : (
                <p className="text-muted-foreground italic text-sm">{t('cityDetail.no_accommodation')}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Place Info Modal */}
      {selectedPlaceInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300 animate-in fade-in zoom-in-95" onClick={() => setSelectedPlaceInfo(null)}>
          <div className="bg-background border shadow-2xl rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-background/90 backdrop-blur-xl border-b px-6 py-5 flex items-center justify-between z-10 shadow-sm">
              <h3 className="text-2xl font-black uppercase tracking-tighter">{selectedPlaceInfo.placeName}</h3>
              <button 
                onClick={() => setSelectedPlaceInfo(null)} 
                className="p-2 bg-muted/50 hover:bg-muted hover:text-red-500 rounded-full transition-colors border shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-8 sm:space-y-10">
              <section>
                <div className="flex items-center space-x-3 text-primary mb-4 pb-2 border-b border-primary/10">
                  <BookOpen className="w-6 h-6" />
                  <h4 className="text-xl font-black uppercase tracking-widest">{t('cityDetail.history')}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium text-base sm:text-lg">
                  {selectedPlaceInfo.info.history}
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-3 text-primary mb-4 pb-2 border-b border-primary/10">
                  <Sparkles className="w-6 h-6" />
                  <h4 className="text-xl font-black uppercase tracking-widest">{t('cityDetail.curiosities')}</h4>
                </div>
                <ul className="space-y-4">
                  {selectedPlaceInfo.info.curiosities.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2.5 h-2.5 rounded-sm bg-primary mt-2 mr-4 shrink-0 shadow-sm shadow-primary/40 rotate-45" />
                      <span className="text-muted-foreground font-medium text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="flex items-center space-x-3 text-primary mb-4 pb-2 border-b border-primary/10">
                  <Star className="w-6 h-6" />
                  <h4 className="text-xl font-black uppercase tracking-widest">{t('cityDetail.highlights')}</h4>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {selectedPlaceInfo.info.highlights.map((item, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary px-4 py-2.5 rounded-xl text-sm font-bold border border-primary/20 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              {selectedPlaceInfo.info.insiderTip && (
                <section>
                  <div className="flex items-center space-x-3 text-amber-500 mb-4 pb-2 border-b border-amber-500/10">
                    <Info className="w-6 h-6" />
                    <h4 className="text-xl font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">{t('cityDetail.golden_tip')}</h4>
                  </div>
                  <p className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 font-medium text-base">
                    {selectedPlaceInfo.info.insiderTip}
                  </p>
                </section>
              )}

              {selectedPlaceInfo.info.recommendedTime && (
                <section className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <span className="font-bold text-muted-foreground uppercase tracking-widest text-sm">{t('cityDetail.recommended_time')}</span>
                  <span className="font-black text-primary text-lg">{selectedPlaceInfo.info.recommendedTime}</span>
                </section>
              )}
            </div>

            <div className="sticky bottom-0 bg-background/90 backdrop-blur-xl border-t p-3 sm:p-4 grid grid-cols-2 sm:flex sm:flex-row gap-2">
              <button 
                onClick={(e) => handleGoogleClick(e, 'Conte-me mais, ou me fale informações e curiosidades sobre o lugar ' + selectedPlaceInfo.placeName + ' em ' + city.name)}
                className="flex-1 flex items-center justify-center p-2.5 rounded-xl bg-muted/40 hover:bg-muted font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all border shadow-sm hover:scale-[1.02]"
              >
                 <IconGoogle className="w-3.5 h-3.5 mr-1.5" /> Google
              </button>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedPlaceInfo.placeName + ' ' + city.name)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center p-2.5 rounded-xl bg-muted/40 hover:bg-muted font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all border shadow-sm hover:scale-[1.02]"
              >
                 <IconMaps className="w-3.5 h-3.5 mr-1.5" /> Maps
              </a>
              <a 
                href={`https://chatgpt.com/?q=${encodeURIComponent('Conte-me mais sobre ' + selectedPlaceInfo.placeName + ' em ' + city.name + '. Me dê contexto histórico e curiosidades impressionantes.')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center p-2.5 rounded-xl bg-muted/40 hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/30 font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all border shadow-sm hover:scale-[1.02]"
              >
                 <IconChatGPT className="w-3.5 h-3.5 mr-1.5 text-[#10A37F]" /> ChatGPT
              </a>
              <button 
                onClick={(e) => handleGeminiClick(e, 'Me dê dicas imperdíveis, os melhores detalhes sobre ' + selectedPlaceInfo.placeName + ' em ' + city.name)}
                className="flex-1 flex items-center justify-center p-2.5 rounded-xl bg-muted/40 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all border shadow-sm hover:scale-[1.02]"
              >
                 <IconGemini className="w-3.5 h-3.5 mr-1.5 text-[#1a73e8]" /> Gemini
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
