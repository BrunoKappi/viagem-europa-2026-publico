import { Link, useLocation } from "react-router-dom";
import {
  Plane,
  Hotel,
  CreditCard,
  Home,
  Menu,
  X,
  Sun,
  Moon,
  Eye,
  EyeOff,
  Calendar,
  Map,
  Ticket,
  FileText,
  LayoutDashboard,
  Search,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { usePrivacy } from "@/context/PrivacyContext";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "pt", label: "Português", flag: "br" },
  { code: "en", label: "English",   flag: "gb" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const langRefMobile = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return true;
  });
  const { isPrivate, togglePrivacy } = usePrivacy();
  const location = useLocation();

  const navItems = [
    { label: t("nav.home"), href: "/", icon: Home },
    { label: t("nav.search"), href: "/search", icon: Search },
    { label: t("nav.reminders"), href: "/dashboard", icon: LayoutDashboard },
    { label: t("nav.accommodation"), href: "/accommodations", icon: Hotel },
    { label: t("nav.transport"), href: "/transport", icon: Plane },
    { label: t("nav.map"), href: "/mapa", icon: Map },
    { label: t("nav.timeline"), href: "/timeline", icon: Calendar },
    { label: t("nav.tickets"), href: "/tickets", icon: Ticket },
    { label: t("nav.docs"), href: "/documents", icon: FileText },
    { label: t("nav.expenses"), href: "/expenses", icon: CreditCard },
  ];

  const bottomTabItems = [
    { label: t("nav.home"), href: "/", icon: Home },
    { label: t("nav.reminders"), href: "/dashboard", icon: LayoutDashboard },
    { label: t("nav.transport"), href: "/transport", icon: Plane },
    { label: t("nav.tickets"), href: "/tickets", icon: Ticket },
    { label: t("nav.more"), href: null as string | null, icon: Menu },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close lang popover on outside click (desktop + mobile)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const clickedOutsideDesktop = langRef.current && !langRef.current.contains(e.target as Node);
      const clickedOutsideMobile = langRefMobile.current && !langRefMobile.current.contains(e.target as Node);
      if (clickedOutsideDesktop && clickedOutsideMobile) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const selectLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  const currentLang = LANGUAGES.find(l => l.code === (i18n.language === "pt" ? "pt" : "en")) ?? LANGUAGES[0];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2 shrink-0">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner">
                <Plane className="text-primary w-5 h-5" />
              </div>
              <span className="text-base font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 whitespace-nowrap">
                Europa 2026
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap",
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:bg-muted dark:hover:bg-white/5 hover:text-foreground",
                  )}>
                  <item.icon className="w-3.5 h-3.5 mr-1.5" />
                  {item.label}
                </Link>
              ))}

              <div className="w-px h-6 bg-border mx-2" />

              {/* Language Popover */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(prev => !prev)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-muted dark:hover:bg-white/5 transition-all border border-transparent hover:border-primary/20"
                  title="Language / Idioma"
                >
                  <img
                    src={`https://flagcdn.com/w40/${currentLang.flag}.png`}
                    alt={currentLang.label}
                    className="w-6 h-4 rounded-sm object-cover shadow-sm"
                  />
                  <ChevronDown className={cn("w-3 h-3 text-muted-foreground transition-transform duration-200", langOpen && "rotate-180")} />
                </button>

                {/* Dropdown */}
                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 glass border shadow-xl rounded-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150">
                    {LANGUAGES.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code)}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-3 text-sm font-bold transition-colors hover:bg-muted/60 dark:hover:bg-white/5",
                          currentLang.code === lang.code && "bg-primary/10 text-primary"
                        )}
                      >
                        <img
                          src={`https://flagcdn.com/w40/${lang.flag}.png`}
                          alt={lang.label}
                          className="w-6 h-4 rounded-sm object-cover shadow-sm flex-shrink-0"
                        />
                        <span>{lang.label}</span>
                        {currentLang.code === lang.code && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={togglePrivacy}
                className={cn(
                  "p-2.5 rounded-full transition-colors",
                  isPrivate
                    ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
                    : "hover:bg-muted dark:hover:bg-white/5 text-muted-foreground hover:text-primary",
                )}
                aria-label="Toggle privacy">
                {isPrivate ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>

              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full hover:bg-muted dark:hover:bg-white/5 transition-colors text-muted-foreground hover:text-primary"
                aria-label="Toggle theme">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile top-right controls */}
            <div className="flex items-center md:hidden space-x-1">
              {/* Language Popover Mobile */}
              <div className="relative" ref={langRefMobile}>
                <button
                  onClick={() => setLangOpen(prev => !prev)}
                  className="p-1.5 rounded-full hover:bg-muted dark:hover:bg-white/5 transition-all flex items-center"
                  title="Language / Idioma"
                >
                  <img
                    src={`https://flagcdn.com/w40/${currentLang.flag}.png`}
                    alt={currentLang.label}
                    className="w-7 h-5 rounded-sm object-cover shadow-sm"
                  />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 glass border shadow-xl rounded-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150">
                    {LANGUAGES.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code)}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-3 text-sm font-bold transition-colors hover:bg-muted/60 dark:hover:bg-white/5",
                          currentLang.code === lang.code && "bg-primary/10 text-primary"
                        )}
                      >
                        <img
                          src={`https://flagcdn.com/w40/${lang.flag}.png`}
                          alt={lang.label}
                          className="w-6 h-4 rounded-sm object-cover shadow-sm flex-shrink-0"
                        />
                        <span>{lang.label}</span>
                        {currentLang.code === lang.code && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={togglePrivacy}
                className={cn(
                  "p-2.5 rounded-full transition-colors",
                  isPrivate ? "bg-amber-500/10 text-amber-500" : "hover:bg-muted dark:hover:bg-white/5 text-muted-foreground",
                )}>
                {isPrivate ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full hover:bg-muted dark:hover:bg-white/5 transition-colors text-muted-foreground">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[70] bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Plane className="text-primary w-5 h-5" />
              </div>
              <span className="text-base font-bold tracking-tighter">Europa 2026</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-full bg-muted/50 hover:bg-muted transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-4 rounded-2xl text-sm font-bold transition-all",
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary border border-primary/30 shadow-sm"
                      : "text-muted-foreground hover:bg-muted dark:hover:bg-white/5 border border-transparent",
                  )}>
                  <div
                    className={cn(
                      "w-9 h-9 rounded-xl flex items-center justify-center mr-3 shrink-0",
                      location.pathname === item.href ? "bg-primary/20" : "bg-muted dark:bg-white/5",
                    )}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t dark:border-white/10">
        <div className="flex items-stretch h-16">
          {bottomTabItems.map((item) => {
            const isActive = item.href ? location.pathname === item.href : isOpen;
            const isMoreBtn = item.href === null;

            if (isMoreBtn) {
              return (
                <button
                  key="more"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={cn(
                    "flex-1 flex flex-col items-center justify-center gap-0.5 transition-all",
                    isOpen ? "text-primary" : "text-muted-foreground",
                  )}>
                  <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center transition-all", isOpen ? "bg-primary/10" : "")}>
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                </button>
              );
            }

            return (
              <Link
                key={item.href}
                to={item.href!}
                className={cn(
                  "flex-1 flex flex-col items-center justify-center gap-0.5 transition-all",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}>
                <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center transition-all", isActive ? "bg-primary/10" : "")}>
                  <item.icon className={cn("w-5 h-5", isActive && "stroke-[2.5px]")} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
