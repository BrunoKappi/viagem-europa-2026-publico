import { Link } from "react-router-dom"
import { Calendar, ChevronRight, CheckCircle2 } from "lucide-react"
import type { City } from "@/data/tripData"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

const flagMap: Record<string, string> = {
  "🇵🇹": "pt", "🇳🇱": "nl", "🇩🇪": "de", "🇱🇺": "lu",
  "🇧🇪": "be", "🇫🇷": "fr", "🇬🇧": "gb", "🇪🇸": "es",
}

function useCityStatus(city: City) {
  const now = new Date()
  const start = new Date(city.startDate)
  const end = new Date(city.endDate)
  if (now > end) return "past" as const
  if (now >= start && now <= end) return "current" as const
  return "upcoming" as const
}

export default function CityCard({ city }: { city: City }) {
  const { t } = useTranslation()
  const countryCode = flagMap[city.flag] || "eu"
  const status = useCityStatus(city)

  return (
    <Link
      to={`/city/${city.id}`}
      className="group relative block overflow-hidden rounded-2xl bg-muted/30 transition-all hover:shadow-2xl hover:-translate-y-1 border"
    >
      {status !== "upcoming" && (
        <div className={cn(
          "absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm backdrop-blur-sm flex items-center gap-1",
          status === "current"
            ? "bg-blue-500/90 text-white border-blue-400/50"
            : "bg-emerald-500/80 text-white border-emerald-400/50"
        )}>
          {status === "current" ? (
            <><span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" /> {t("cityCard.current")}</>
          ) : (
            <><CheckCircle2 className="w-2.5 h-2.5" /> {t("cityCard.visited")}</>
          )}
        </div>
      )}

      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={city.coverImage}
          alt={city.name}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
            status === "past" && "brightness-75 saturate-75"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center space-x-2.5 mb-1.5">
          <img src={`https://flagcdn.com/w40/${countryCode}.png`} alt={city.country} className="w-7 h-5 rounded shadow-md object-cover border border-white/30" />
          <h3 className="text-xl font-black tracking-tight">{city.name}</h3>
        </div>
        <p className="text-[10px] sm:text-xs text-gray-200 line-clamp-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {city.description}
        </p>
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1.5 text-primary" />
            <span>{city.dateRange.split(" → ")[0]}</span>
          </div>
          <div className="flex items-center font-black uppercase tracking-widest text-primary text-[10px]">
            {t("cityCard.view_itinerary")} <ChevronRight className="w-3 h-3 ml-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
