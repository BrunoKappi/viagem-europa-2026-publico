import { accommodations } from "@/data/tripData"
import { Hotel, MapPin, Calendar, Tag, User, Phone, Mail, Coffee, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import CopyableText from "@/components/CopyableText"
import { useState } from "react"
import { FileActionModal } from "@/components/FileActionModal"
import { useTranslation } from "react-i18next"

export default function Accommodations() {
  const { t } = useTranslation()
  const [filterTerm, setFilterTerm] = useState('')

  const normalizeString = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

  const filteredAccommodations = accommodations.filter(acc => {
    const term = normalizeString(filterTerm)
    return normalizeString(acc.name).includes(term) || normalizeString(acc.city).includes(term)
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 page-transition">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tight">{t("accommodations.title")}</h1>
          <p className="text-muted-foreground mt-2 text-lg">{t("accommodations.subtitle")}</p>
        </div>
        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-muted-foreground/20 rounded-xl leading-5 bg-white/50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm backdrop-blur-sm transition-all"
            placeholder={t("accommodations.filter_placeholder")}
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {filteredAccommodations.length === 0 && (
          <div className="text-center py-16 text-muted-foreground bg-muted/20 rounded-2xl border-dashed border-2">
            <Hotel className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="text-lg font-bold">{t("accommodations.no_results")} "{filterTerm}"</p>
          </div>
        )}
        {filteredAccommodations.map((acc, index) => (
          <div key={index} className="glass rounded-[2.5rem] overflow-hidden border shadow-xl flex flex-col lg:flex-row min-h-[380px] hover:border-primary/30 transition-colors">
            <div className={cn(
              "w-full lg:w-44 xl:w-52 bg-gradient-to-br p-8 flex flex-col items-center justify-center text-white shrink-0",
              acc.type === "Hostel" ? "from-orange-500 to-red-600" : "from-blue-500 to-indigo-600"
            )}>
              <Hotel className="w-16 h-16 mb-4 filter drop-shadow-lg" />
              <span className="text-sm font-black uppercase tracking-widest">{acc.type}</span>
            </div>

            <div className="flex-1 p-8 md:p-10 flex flex-col">
              <div className="flex-1 space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black tracking-tight leading-tight uppercase">{acc.name}</h3>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 shrink-0 text-primary" />
                      <span className="text-sm font-bold">{acc.city}, {acc.country}</span>
                    </div>
                  </div>
                  <div className={cn(
                    "px-4 py-1.5 rounded-full text-[10px] font-black uppercase flex items-center tracking-wider whitespace-nowrap shrink-0 border",
                    acc.breakfast.includes("Incluído")
                      ? "bg-green-500/10 text-green-600 border-green-500/20"
                      : "bg-red-500/10 text-red-600 border-red-500/20"
                  )}>
                    <Coffee className="w-3.5 h-3.5 mr-1.5" />
                    {acc.breakfast.includes("Incluído") ? t("accommodations.breakfast_included") : t("accommodations.breakfast_not_included")}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 pt-8 border-t border-muted">
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground text-[10px] font-black uppercase tracking-widest opacity-70">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-primary" /> {t("accommodations.period")}
                    </div>
                    <p className="text-sm font-black tracking-tight">{acc.dateRange}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground text-[10px] font-black uppercase tracking-widest opacity-70">
                      <Tag className="w-3.5 h-3.5 mr-2 text-primary" /> {t("accommodations.reservation_number")}
                    </div>
                    <CopyableText value={acc.reservationNumber} label={t("accommodations.reservation_number")} className="text-sm font-mono font-black text-primary bg-primary/5 px-2 py-1 rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground text-[10px] font-black uppercase tracking-widest opacity-70">
                      <User className="w-3.5 h-3.5 mr-2 text-primary" /> {t("accommodations.guest_name")}
                    </div>
                    <p className="text-sm font-black truncate max-w-[200px]">{acc.guestName}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground text-[10px] font-black uppercase tracking-widest opacity-70">
                      <Phone className="w-3.5 h-3.5 mr-2 text-primary" /> {t("accommodations.phone")}
                    </div>
                    <CopyableText value={acc.phone} label={t("accommodations.phone")} className="text-sm font-black" />
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-muted flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
                <div className="flex flex-col items-start space-y-2 flex-1 w-full overflow-hidden">
                  <div className="flex items-center text-muted-foreground text-[10px] font-black uppercase tracking-widest opacity-70">
                    <Mail className="w-3.5 h-3.5 mr-2 text-primary" /> {t("accommodations.contact_email")}
                  </div>
                  <CopyableText value={acc.email} label={t("accommodations.contact_email")} className="text-sm font-black truncate max-w-full" />
                </div>
                {acc.fileLink && acc.fileLink !== "#" && (
                  <div className="w-full md:w-auto shrink-0 mt-2 md:mt-0">
                    <FileActionModal
                      fileLink={acc.fileLink}
                      triggerClassName="flex w-full md:w-auto items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors shadow-sm"
                      triggerText={t("accommodations.download_reservation")}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
