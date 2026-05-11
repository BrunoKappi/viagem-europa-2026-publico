import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import GlobalSearch from "./pages/GlobalSearch"
import CityDetail from "./pages/CityDetail"
import Accommodations from "./pages/Accommodations"
import Expenses from "./pages/Expenses"
import Transport from "./pages/Transport"
import Timeline from "./pages/Timeline"
import MapView from "./pages/MapView"
import Tickets from "./pages/Tickets"
import Documents from "./pages/Documents"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import { PrivacyProvider } from "./context/PrivacyContext"
import { Toaster } from "sonner"

function App() {
  const { t } = useTranslation()
  return (
    <PrivacyProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-x-hidden pt-16 pb-20 md:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/search" element={<GlobalSearch />} />
              <Route path="/city/:cityId" element={<CityDetail />} />
              <Route path="/accommodations" element={<Accommodations />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/transport" element={<Transport />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/mapa" element={<MapView />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/documents" element={<Documents />} />
            </Routes>
          </main>
          <footer className="border-t py-6 text-center text-sm text-muted-foreground bg-muted/30">
            <p>{t('footer.copyright')}</p>
          </footer>
          <Toaster position="bottom-center" />
        </div>
      </Router>
    </PrivacyProvider>
  )
}

export default App
