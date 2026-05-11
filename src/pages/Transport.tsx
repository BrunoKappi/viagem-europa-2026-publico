import { Plane, Train, Calendar, Clock, ArrowRight, Tag, Users, Briefcase, Download, Search } from "lucide-react"
import { flights, trains, type Flight, type Train as TrainType } from "@/data/tripData"
import { useState, useEffect } from "react"
import Modal from "@/components/Modal"
import CopyableText from "@/components/CopyableText"
import { cn } from "@/lib/utils"
import { FileActionModal } from "@/components/FileActionModal"
import { useTranslation } from "react-i18next"

type TransportItem = { type: 'flight'; data: Flight } | { type: 'train'; data: TrainType }

const cityFlagMap: Record<string, string> = {
  "Lisboa": "pt",
  "Amsterdam": "nl",
  "São Paulo": "br",
  "Porto Alegre": "br",
  "Londres": "gb",
  "Madrid": "es",
  "Colônia": "de",
  "Luxemburgo": "lu",
  "Bruxelas": "be",
  "Bruges": "be",
  "Ghent": "be",
  "Paris": "fr"
}

const getFlag = (cityName: string) => {
  const cleanName = cityName.split(' (')[0].trim()
  return cityFlagMap[cleanName] || "eu"
}

const CountdownTimer = ({ dateStr, timeStr, label }: { dateStr: string, timeStr: string, label: string }) => {
  const [timeLeft, setTimeLeft] = useState<{ d: number, h: number, m: number, s: number } | null>(null);

  useEffect(() => {
    if (!dateStr || !timeStr) return;
    const [day, month, year] = dateStr.split('/');
    const [hour, minute] = timeStr.split(':');
    if (!day || !month || !year || !hour || !minute) return;

    let parsedYear = year;
    if (parsedYear.length === 2) parsedYear = "20" + parsedYear;

    const targetDate = new Date(parseInt(parsedYear), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));

    const checkTime = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft(null);
        return false;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft({ d, h, m, s });
      return true;
    };

    if (checkTime()) {
      const interval = setInterval(checkTime, 1000);
      return () => clearInterval(interval);
    }
  }, [dateStr, timeStr]);

  if (!timeLeft) return null;

  return (
    <div className="bg-primary/10 rounded-xl p-3 flex flex-col items-center justify-center border border-primary/20 shadow-inner flex-1 min-w-0">
      <p className="text-[8px] font-black uppercase text-primary tracking-widest mb-1 flex items-center text-center leading-tight">
        <Clock className="w-2.5 h-2.5 mr-0.5 shrink-0" /> {label}
      </p>
      <div className="flex gap-1 text-center text-primary">
        <div className="flex flex-col"><span className="text-base font-black tabular-nums leading-none">{timeLeft.d}</span><span className="text-[6px] uppercase font-black tracking-widest mt-0.5">Dias</span></div>
        <span className="text-base font-black opacity-50 tabular-nums leading-none">:</span>
        <div className="flex flex-col"><span className="text-base font-black tabular-nums leading-none">{timeLeft.h.toString().padStart(2, '0')}</span><span className="text-[6px] uppercase font-black tracking-widest mt-0.5">Hrs</span></div>
        <span className="text-base font-black opacity-50 tabular-nums leading-none">:</span>
        <div className="flex flex-col"><span className="text-base font-black tabular-nums leading-none">{timeLeft.m.toString().padStart(2, '0')}</span><span className="text-[6px] uppercase font-black tracking-widest mt-0.5">Min</span></div>
        <span className="text-base font-black opacity-50 tabular-nums leading-none">:</span>
        <div className="flex flex-col"><span className="text-base font-black tabular-nums leading-none">{timeLeft.s.toString().padStart(2, '0')}</span><span className="text-[6px] uppercase font-black tracking-widest mt-0.5">Seg</span></div>
      </div>
    </div>
  );
}

export default function Transport() {
  const { t } = useTranslation()
  const [selectedItem, setSelectedItem] = useState<TransportItem | null>(null)
  const [filterTerm, setFilterTerm] = useState('')

  const normalizeString = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
  }

  const filteredFlights = flights.filter(f => {
    const term = normalizeString(filterTerm);
    return normalizeString(f.from).includes(term) || normalizeString(f.to).includes(term) || normalizeString(f.locator || '').includes(term);
  });

  const filteredTrains = trains.filter(t => {
    const term = normalizeString(filterTerm);
    return normalizeString(t.from).includes(term) || normalizeString(t.to).includes(term) || normalizeString(t.operator || '').includes(term) || normalizeString(t.locator || '').includes(term);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 page-transition">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between space-y-4 md:space-y-0 text-center md:text-left">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tight flex items-center justify-center md:justify-start">
             {t('transport.title')}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">{t('transport.subtitle')}</p>
        </div>
        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-muted-foreground/20 rounded-xl leading-5 bg-white/50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm backdrop-blur-sm transition-all"
            placeholder={t('transport.filter_placeholder')}
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Flights Section */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 border-b-2 border-primary w-fit pb-2 mx-auto md:mx-0">
          <Plane className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-black uppercase">{t('transport.flights')}</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {filteredFlights.length === 0 && (
             <div className="text-center py-16 text-muted-foreground bg-muted/20 rounded-2xl border-dashed border-2">
                <Plane className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p className="text-lg font-bold">{t('transport.no_flights_found')} "{filterTerm}"</p>
             </div>
          )}
          {filteredFlights.map((flight, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedItem({ type: 'flight', data: flight })}
              className="glass rounded-[2.5rem] border overflow-hidden shadow-xl hover:shadow-2xl transition-all group flex flex-col lg:flex-row cursor-pointer hover:border-primary/50 min-h-[160px]"
            >
              {/* Colored Side Cap */}
              <div className="w-full lg:w-36 bg-gradient-to-br from-primary to-primary/60 p-5 lg:p-4 flex flex-row lg:flex-col items-center justify-center text-primary-foreground shrink-0 gap-3 lg:gap-2">
                <Plane className="w-10 h-10 lg:w-12 lg:h-12 drop-shadow-md" />
                <div className="text-center">
                  <span className="text-xs font-black uppercase tracking-widest block">{t('transport.flights').slice(0,-1)}</span>
                  <span className="text-xl font-black">#{i + 1}</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="bg-muted/30 px-6 py-4 border-b flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img src={`https://flagcdn.com/w40/${getFlag(flight.from)}.png`} className="w-4 h-3 rounded-[2px] object-cover border border-muted" alt="Flag" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-muted-foreground">{flight.from.split(' (')[0]}</span>
                    <span className="text-muted-foreground/40 font-black mx-1">→</span>
                    <span className="text-[11px] font-black uppercase tracking-wider text-muted-foreground">{flight.to.split(' (')[0]}</span>
                    <img src={`https://flagcdn.com/w40/${getFlag(flight.to)}.png`} className="w-4 h-3 rounded-[2px] object-cover border border-muted" alt="Flag" />
                  </div>
                  <div className="flex items-center bg-primary/10 text-primary px-3 py-1.5 rounded-lg border border-primary/20">
                    <Tag className="w-3.5 h-3.5 mr-2" />
                    <CopyableText 
                      value={flight.locator} 
                      label="Localizador"
                      className="text-xs font-black tabular-nums"
                      iconClassName="bg-transparent group-hover:bg-transparent p-0 ml-1"
                    />
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.origin')}</p>
                      <h4 className="text-xl font-black tabular-nums leading-tight">{flight.from.split(' (')[0]}</h4>
                      <p className="text-[9px] text-muted-foreground uppercase">{flight.from.split('(')[1]?.replace(')', '') || ""}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-px bg-muted-foreground/30 relative flex justify-center">
                        <Plane className="w-4 h-4 absolute -top-2 text-primary bg-background/80 px-0.5" />
                      </div>
                      <span className="mt-3 text-[8px] font-black text-muted-foreground uppercase tracking-widest">{flight.duration}</span>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.destination')}</p>
                      <h4 className="text-xl font-black tabular-nums leading-tight">{flight.to.split(' (')[0]}</h4>
                      <p className="text-[9px] text-muted-foreground uppercase">{flight.to.split('(')[1]?.replace(')', '') || ""}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-muted/40 px-4 py-3 rounded-2xl border text-center">
                      <div className="flex items-center text-[8px] font-black text-muted-foreground uppercase tracking-widest mb-1">
                        <Calendar className="w-2.5 h-2.5 mr-1" /> {t('transport.date').toUpperCase()}
                      </div>
                      <p className="text-xs font-black">{flight.date}</p>
                    </div>
                    <div className="bg-muted/40 px-4 py-3 rounded-2xl border text-center">
                      <div className="flex items-center text-[8px] font-black text-muted-foreground uppercase tracking-widest mb-1">
                        <Clock className="w-2.5 h-2.5 mr-1" /> {t('transport.boarding').toUpperCase()}
                      </div>
                      <p className="text-xs font-black tabular-nums">{flight.time}</p>
                    </div>
                  </div>
                </div>

                {/* Passenger Badges */}
                <div className="px-6 pb-4 pt-0 flex flex-wrap gap-1.5">
                  {flight.passengers.split(',').map((passenger, pIdx) => (
                    <span key={pIdx} className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/5 text-[9px] font-black text-primary border border-primary/10 uppercase tracking-tight">
                      <Users className="w-2.5 h-2.5 mr-1.5" /> {passenger.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trains Section */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 border-b-2 border-primary w-fit pb-2 mx-auto md:mx-0">
          <Train className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-black uppercase">{t('transport.trains')}</h2>
        </div>

        <div className="glass rounded-[2rem] border overflow-hidden shadow-xl overflow-x-auto">
           <table className="w-full text-left min-w-[850px]">
              <thead>
                <tr className="bg-muted/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest border-b">
                  <th className="px-8 py-5">{t('transport.route')}</th>
                  <th className="px-8 py-5">{t('transport.type_operator')}</th>
                  <th className="px-8 py-5 text-center">{t('transport.date')}</th>
                  <th className="px-8 py-5 text-center">{t('transport.boarding')}</th>
                  <th className="px-8 py-5 text-center">{t('transport.arrival')}</th>
                  <th className="px-8 py-5 text-right">{t('transport.duration')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted font-black">
                {filteredTrains.length === 0 && (
                   <tr>
                     <td colSpan={6}>
                       <div className="text-center py-16 text-muted-foreground bg-muted/20 border-dashed border-b-2">
                          <Train className="w-12 h-12 mx-auto mb-4 opacity-20" />
                          <p className="text-lg font-bold">{t('transport.no_trains_found')} "{filterTerm}"</p>
                       </div>
                     </td>
                   </tr>
                )}
                {filteredTrains.map((train, i) => (
                  <tr 
                    key={i} 
                    onClick={() => setSelectedItem({ type: 'train', data: train })}
                    className="hover:bg-muted/30 transition-all group cursor-pointer"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                           <img 
                             src={`https://flagcdn.com/w40/${getFlag(train.from)}.png`} 
                             className="w-5 h-3.5 rounded-sm object-cover border border-muted shadow-sm"
                             alt="Flag"
                           />
                           <span className="text-base uppercase">{train.from}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                        <div className="flex items-center space-x-2">
                           <span className="text-base uppercase">{train.to}</span>
                           <img 
                             src={`https://flagcdn.com/w40/${getFlag(train.to)}.png`} 
                             className="w-5 h-3.5 rounded-sm object-cover border border-muted shadow-sm"
                             alt="Flag"
                           />
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                       <div className="flex flex-col">
                          <span className="text-xs font-black uppercase text-primary">{train.type}</span>
                          <span className="text-[9px] text-muted-foreground uppercase opacity-60">{train.operator}</span>
                       </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-center text-muted-foreground whitespace-nowrap">{train.date}</td>
                    <td className="px-8 py-6 tabular-nums text-center">{train.time}</td>
                    <td className="px-8 py-6 tabular-nums text-center text-primary">{train.arrivalTime}</td>
                    <td className="px-8 py-6 text-right whitespace-nowrap">
                       <span className="text-sm text-muted-foreground opacity-70">{train.duration}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>
      </section>

      {/* Details Modal */}
      <Modal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.type === 'flight' ? t('transport.airline_ticket') : t('transport.rail_ticket')}
      >
        {selectedItem?.type === 'flight' && (
          <div className="space-y-4">
            {/* Ticket-style card */}
            <div className="bg-primary/5 p-4 sm:p-5 rounded-2xl border border-primary/10">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-dashed border-primary/20">
                <div className="flex items-center text-primary gap-2">
                  <Plane className="w-5 h-5" />
                  <span className="font-black uppercase tracking-widest text-xs">{t('transport.airline_ticket')}</span>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg flex items-center">
                   <Tag className="w-3 h-3 mr-1.5 shrink-0" />
                   <CopyableText 
                     value={selectedItem.data.locator} 
                     label="Localizador"
                     className="text-[10px] font-black tracking-widest"
                   />
                </div>
              </div>

              {/* Origin → Destination compact */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex-1 min-w-0">
                  <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.origin')}</p>
                  <div className="flex items-center gap-1.5">
                    <img src={`https://flagcdn.com/w40/${getFlag(selectedItem.data.from)}.png`} className="w-5 h-3.5 rounded-sm shadow-sm shrink-0" alt="f" />
                    <p className="text-lg font-black truncate leading-tight">{selectedItem.data.from.split(' (')[0]}</p>
                  </div>
                  <p className="text-[9px] text-muted-foreground uppercase">{selectedItem.data.from.split('(')[1]?.replace(')', '')}</p>
                </div>

                <div className="shrink-0 flex flex-col items-center px-2">
                  <div className="w-12 flex items-center">
                    <div className="h-[2px] bg-primary/20 flex-1"></div>
                    <Plane className="w-4 h-4 text-primary mx-1" />
                    <div className="h-[2px] bg-primary/20 flex-1"></div>
                  </div>
                  <span className="text-[8px] font-black text-muted-foreground mt-1">{selectedItem.data.duration}</span>
                </div>

                <div className="flex-1 min-w-0 text-right">
                  <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.destination')}</p>
                  <div className="flex items-center justify-end gap-1.5">
                    <p className="text-lg font-black truncate leading-tight">{selectedItem.data.to.split(' (')[0]}</p>
                    <img src={`https://flagcdn.com/w40/${getFlag(selectedItem.data.to)}.png`} className="w-5 h-3.5 rounded-sm shadow-sm shrink-0" alt="f" />
                  </div>
                  <p className="text-[9px] text-muted-foreground uppercase">{selectedItem.data.to.split('(')[1]?.replace(')', '')}</p>
                </div>
              </div>

              {/* Embarque / Chegada */}
              <div className="grid grid-cols-2 gap-3 bg-white/60 dark:bg-black/30 p-3 rounded-xl border border-primary/10 mb-4">
                <div>
                  <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest flex items-center">
                    <Calendar className="w-2.5 h-2.5 mr-1" /> {t('transport.boarding')}
                  </p>
                  <p className="text-[10px] font-black">{selectedItem.data.date}</p>
                  <p className="text-lg font-black text-primary leading-tight">{selectedItem.data.time}</p>
                </div>
                {selectedItem.data.arrivalTime && (
                <div className="border-l border-primary/10 pl-3">
                  <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest flex items-center">
                    <Clock className="w-2.5 h-2.5 mr-1" /> {t('transport.arrival')}
                  </p>
                  <p className="text-[10px] font-black">{selectedItem.data.date}</p>
                  <p className="text-lg font-black leading-tight">{selectedItem.data.arrivalTime}</p>
                </div>
                )}
              </div>

              {/* Check-in info */}
              {selectedItem.data.checkinDate && selectedItem.data.checkinTime && (
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-2.5 mb-4">
                  <p className="text-[8px] font-black uppercase text-amber-600 dark:text-amber-400 tracking-widest mb-0.5 flex items-center">
                    <Clock className="w-2.5 h-2.5 mr-1" /> {t('transport.checkin_opens')}
                  </p>
                  <p className="text-sm font-black">{selectedItem.data.checkinDate} · {selectedItem.data.checkinTime}</p>
                </div>
              )}

              {/* Countdowns side-by-side */}
              <div className="flex gap-2">
                {selectedItem.data.checkinDate && selectedItem.data.checkinTime && (
                  <CountdownTimer dateStr={selectedItem.data.checkinDate} timeStr={selectedItem.data.checkinTime} label="Check-in" />
                )}
                <CountdownTimer dateStr={selectedItem.data.date} timeStr={selectedItem.data.time} label={t('transport.countdown_boarding')} />
              </div>
            </div>

            {/* Passengers + Baggage + Download */}
            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-2xl border shadow-sm flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-muted pb-3">
                 <div className="flex items-center space-x-2 text-muted-foreground w-full sm:w-auto">
                    <Users className="w-4 h-4 shrink-0" />
                    <div className="flex flex-wrap gap-1.5 flex-1">
                       {selectedItem.data.passengers.split(',').map((p, idx) => (
                         <span key={idx} className="bg-primary/10 text-primary px-2 py-0.5 rounded-md text-[9px] font-black uppercase shadow-sm">
                           {p.trim()}
                         </span>
                       ))}
                    </div>
                 </div>
                 
                 <div className="flex items-center space-x-3 bg-muted/30 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase shrink-0">
                    <div className="flex items-center space-x-1">
                       <Briefcase className="w-3 h-3" /> <span>{t('transport.baggage_included')}</span>
                    </div>
                    <div className="h-3 w-px bg-muted-foreground/30"></div>
                    <div className="flex items-center space-x-1 text-green-500">
                       <Clock className="w-3 h-3" /> <span>OK</span>
                    </div>
                 </div>
              </div>

              {selectedItem.data.fileLink && (
                <FileActionModal
                  fileLink={selectedItem.data.fileLink}
                  triggerClassName="flex items-center justify-center w-full bg-primary text-primary-foreground py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-md"
                  triggerText={t('transport.download_ticket')}
                />
              )}
            </div>
          </div>
        )}

        {selectedItem?.type === 'train' && (
          <div className="space-y-6">
            <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
              <div className="flex items-center text-primary mb-8 justify-between">
                 <div className="flex items-center">
                    <Train className="w-6 h-6 mr-3" />
                    <span className="font-black uppercase tracking-widest text-sm">{t('transport.rail_ticket')}</span>
                 </div>
                 <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg flex items-center">
                    <Tag className="w-3 h-3 mr-1.5 shrink-0" />
                    <CopyableText 
                      value={selectedItem.data.locator} 
                      label={t('transport.locator')}
                      className="text-[10px] font-black tracking-widest"
                    />
                 </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-white/50 dark:bg-black/40 rounded-[2rem] border mb-8 shadow-inner relative">
                <div className="text-center flex-1 space-y-2">
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.boarding')}</p>
                  <div className="flex flex-col items-center max-w-full">
                     <img src={`https://flagcdn.com/w40/${getFlag(selectedItem.data.from)}.png`} className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-[2px] sm:rounded shadow-sm mb-1" alt="f" />
                     <p className="text-sm sm:text-xl font-black uppercase text-center">{selectedItem.data.from}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center px-1 sm:px-4">
                   <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                   <span className="text-[8px] sm:text-[9px] font-black text-muted-foreground mt-1 whitespace-nowrap">{selectedItem.data.duration}</span>
                </div>
                <div className="text-center flex-1 space-y-2">
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.arrival')}</p>
                  <div className="flex flex-col items-center max-w-full">
                     <img src={`https://flagcdn.com/w40/${getFlag(selectedItem.data.to)}.png`} className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-[2px] sm:rounded shadow-sm mb-1" alt="f" />
                     <p className="text-sm sm:text-xl font-black uppercase text-center">{selectedItem.data.to}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8 pt-6 sm:pt-8 border-t border-primary/10">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.date')}</p>
                  <p className="text-base font-black">{selectedItem.data.date}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.boarding')}</p>
                  <p className="text-base font-black tabular-nums">{selectedItem.data.time}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.arrival')}</p>
                  <p className="text-base font-black tabular-nums text-primary">{selectedItem.data.arrivalTime}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.operator')}</p>
                  <p className="text-xs font-black uppercase text-primary leading-tight">{selectedItem.data.operator}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.type')}</p>
                  <p className="text-xs font-black uppercase leading-tight">{selectedItem.data.type}</p>
                </div>
                 <div className="space-y-1 text-left sm:text-right col-span-2 sm:col-span-1 border-t sm:border-0 border-primary/10 pt-4 sm:pt-0">
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Ticket</p>
                   <p className="text-xs font-black text-muted-foreground">{t('transport.ticket_digital')}</p>
                 </div>
              </div>
              <div className="mt-4">
                 <CountdownTimer dateStr={selectedItem.data.date} timeStr={selectedItem.data.time} label={t('transport.countdown_departure')} />
              </div>
            </div>
            
            {selectedItem.data.fileLink && (
              <FileActionModal
                fileLink={selectedItem.data.fileLink}
                triggerClassName="flex items-center justify-center w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors mb-6"
                triggerText={t('transport.download_ticket')}
              />
            )}

            <div className="bg-muted/30 p-6 rounded-3xl border flex items-center space-x-6 shadow-sm">
              <div className="p-4 bg-white dark:bg-black/20 rounded-2xl border shadow-inner flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{t('transport.travel_info')}</p>
                 <p className="text-xs font-bold leading-relaxed text-muted-foreground">
                   {t('transport.travel_info_desc', { from: selectedItem.data.from, to: selectedItem.data.to })}
                 </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
