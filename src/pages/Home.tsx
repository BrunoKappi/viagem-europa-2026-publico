import { cities, expenses } from "@/data/tripData";
import CityCard from "@/components/CityCard";
import { CreditCard, Globe, Calendar, Clock, MapPin, Plane, Sparkles, ChevronRight } from "lucide-react";
import { usePrivacy } from "@/context/PrivacyContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function useTripStatus() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const tripStart = new Date("2026-04-03T16:05:00");
  const tripEnd = new Date("2026-05-03T15:25:00");
  const isBeforeTrip = now < tripStart;
  const isDuringTrip = now >= tripStart && now <= tripEnd;
  const isAfterTrip = now > tripEnd;
  const msToStart = tripStart.getTime() - now.getTime();
  const totalDays = 29;
  const daysPassed = isDuringTrip ? Math.floor((now.getTime() - tripStart.getTime()) / (1000 * 60 * 60 * 24)) : 0;

  const countdown = isBeforeTrip
    ? {
        days: Math.floor(msToStart / (1000 * 60 * 60 * 24)),
        hours: Math.floor((msToStart / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((msToStart / 1000 / 60) % 60),
        seconds: Math.floor((msToStart / 1000) % 60),
      }
    : null;

  const currentCity = cities.find((c) => {
    if (!isDuringTrip) return false;
    return now >= new Date(c.startDate) && now <= new Date(c.endDate);
  });

  const nextCity = !isDuringTrip ? null : cities.find((c) => new Date(c.startDate) > now);

  return { isBeforeTrip, isDuringTrip, isAfterTrip, countdown, currentCity, nextCity, daysPassed, totalDays, tripStart };
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const { formatCurrency } = usePrivacy();
  const totalPaid = expenses.reduce((acc, exp) => acc + exp.amount, 0);
  const { isBeforeTrip, isDuringTrip, isAfterTrip, countdown, currentCity, nextCity, daysPassed, totalDays, tripStart } =
    useTripStatus();

  const statusText = isAfterTrip ? t("home.status_done") : isDuringTrip ? t("home.status_ongoing") : t("home.status_planning");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16 page-transition">
      {/* Hero */}
      <section className="relative h-80 sm:h-96 rounded-3xl overflow-hidden glass shadow-2xl border flex items-center justify-center text-center p-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2000&auto=format&fit=crop"
            alt="European Landscape"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
        </div>
        <div className="relative z-10 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wide">
            <Globe className="w-4 h-4 mr-2" />
            {t("home.badge")}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tighter">
            {t("home.hero_title")} <span className="text-primary italic">{t("home.hero_highlight")}</span>
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-200">{t("home.hero_subtitle")}</p>
        </div>
      </section>

      {/* Countdown */}
      {isBeforeTrip && countdown && (
        <section className="glass border rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-primary/5 to-indigo-500/5 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-xs font-black uppercase tracking-widest text-primary mb-1 flex items-center justify-center sm:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> {t("home.countdown_label")}
              </p>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">{t("home.countdown_title")}</h2>
              <p className="text-muted-foreground text-sm mt-1">
                {tripStart.toLocaleDateString(i18n.language === "pt" ? "pt-BR" : "en-GB", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {[
                { val: countdown.days, label: t("home.days") },
                { val: countdown.hours, label: t("home.hours") },
                { val: countdown.minutes, label: t("home.minutes") },
                { val: countdown.seconds, label: t("home.seconds") },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="bg-primary/10 border border-primary/20 rounded-2xl px-3 sm:px-4 py-3 sm:py-4 text-center min-w-[56px] sm:min-w-[70px] shadow-inner">
                    <div className="text-2xl sm:text-4xl font-black text-primary tabular-nums leading-none">
                      {String(val).padStart(2, "0")}
                    </div>
                    <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Currently in city */}
      {isDuringTrip && currentCity && (
        <section className="glass border border-blue-500/20 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center shadow-inner border border-blue-400/20">
                <MapPin className="w-7 h-7 text-blue-500" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-blue-500 mb-1">{t("home.currently_in")}</p>
                <h2 className="text-2xl font-black uppercase tracking-tight">{currentCity.name}</h2>
                <p className="text-muted-foreground text-sm">
                  {currentCity.country} · {t("dashboard.day")} {daysPassed + 1} {t("dashboard.of")} {totalDays}
                </p>
              </div>
            </div>
            <Link
              to={`/city/${currentCity.id}`}
              className="flex items-center px-6 py-3 rounded-xl bg-blue-500 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-colors shadow-md">
              {t("home.view_itinerary")} <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          {nextCity && (
            <div className="mt-4 pt-4 border-t border-blue-500/10 flex items-center gap-2 text-sm text-muted-foreground">
              <Plane className="w-4 h-4 text-blue-400" />
              <span>
                {t("home.next_destination")}: <strong className="text-foreground">{nextCity.name}</strong>{" "}
                {t("home.from")} {nextCity.dateRange.split(" → ")[0]}
              </span>
            </div>
          )}
        </section>
      )}

      {/* Trip completed */}
      {isAfterTrip && (
        <section className="glass border border-emerald-500/20 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-emerald-500/10 to-green-500/5 shadow-xl text-center">
          <div className="text-5xl mb-3">🎉</div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-emerald-600 dark:text-emerald-400">{t("home.trip_completed_title")}</h2>
          <p className="text-muted-foreground mt-2">{t("home.trip_completed_desc")}</p>
        </section>
      )}

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {[
          { icon: Globe, label: t("home.stat_countries"), value: t("home.stat_countries_value"), color: "text-blue-500", bg: "bg-blue-500/10" },
          { icon: Calendar, label: t("home.stat_duration"), value: t("home.stat_duration_value"), color: "text-green-500", bg: "bg-green-500/10" },
          { icon: CreditCard, label: t("home.stat_investment"), value: formatCurrency(totalPaid), color: "text-yellow-500", bg: "bg-yellow-500/10" },
          {
            icon: Clock,
            label: t("home.stat_status"),
            value: statusText,
            color: isAfterTrip ? "text-emerald-500" : isDuringTrip ? "text-blue-500" : "text-violet-500",
            bg: isAfterTrip ? "bg-emerald-500/10" : isDuringTrip ? "bg-blue-500/10" : "bg-violet-500/10",
          },
        ].map((stat, i) => (
          <div key={i} className="glass p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 border shadow-lg hover:shadow-xl transition-all">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} shrink-0`}>
              <stat.icon className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider leading-tight">{stat.label}</p>
              <h4 className="text-base sm:text-xl font-black tracking-tight leading-tight truncate">{stat.value}</h4>
            </div>
          </div>
        ))}
      </section>

      {/* Quick Links */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-muted-foreground">{t("home.quick_access")}</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: t("home.quick_reminders"), href: "/dashboard", icon: "🔔", desc: t("home.quick_reminders_desc") },
            { label: t("home.quick_tickets_label"), href: "/transport", icon: "✈️", desc: t("home.quick_tickets_desc") },
            { label: t("home.quick_experiences"), href: "/tickets", icon: "🎟️", desc: t("home.quick_experiences_desc") },
            { label: t("home.quick_expenses"), href: "/expenses", icon: "💰", desc: t("home.quick_expenses_desc") },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="glass border rounded-2xl p-4 sm:p-5 hover:border-primary/40 hover:bg-primary/5 transition-all group shadow-sm hover:shadow-md">
              <div className="text-2xl mb-2">{link.icon}</div>
              <p className="font-black uppercase tracking-tight text-sm">{link.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="space-y-6 sm:space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 uppercase">{t("home.destinations")}</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </section>
    </div>
  );
}
