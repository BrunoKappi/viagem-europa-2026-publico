import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { useTranslation } from 'react-i18next';

const customIcon = new Icon({
  iconRetinaUrl, iconUrl, shadowUrl,
  iconSize: [25, 41], iconAnchor: [12, 41],
  popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41]
});

const locations = [
  { name: 'Porto Alegre (POA)', coords: [-30.0346, -51.2177] as [number,number], description: 'Origem da viagem e retorno', country: 'Brasil', flag: '🇧🇷' },
  { name: 'São Paulo (GRU)', coords: [-23.4273, -46.4781] as [number,number], description: 'Conexão internacional', country: 'Brasil', flag: '🇧🇷' },
  { name: 'Lisboa', coords: [38.7169, -9.1399] as [number,number], description: 'Início da jornada na Europa', country: 'Portugal', flag: '🇵🇹' },
  { name: 'Amsterdam', coords: [52.3676, 4.9041] as [number,number], description: 'Canais românticos e Keukenhof', country: 'Países Baixos', flag: '🇳🇱' },
  { name: 'Colônia', coords: [50.9375, 6.9603] as [number,number], description: 'Catedral Gótica e Rio Reno', country: 'Alemanha', flag: '🇩🇪' },
  { name: 'Luxemburgo', coords: [49.6116, 6.1319] as [number,number], description: 'Baluartes e casamatas históricas', country: 'Luxemburgo', flag: '🇱🇺' },
  { name: 'Bruxelas', coords: [50.8503, 4.3517] as [number,number], description: 'Waffles, chocolates e Grand-Place', country: 'Bélgica', flag: '🇧🇪' },
  { name: 'Paris', coords: [48.8566, 2.3522] as [number,number], description: 'Torre Eiffel, Sena e Montmartre', country: 'França', flag: '🇫🇷' },
  { name: 'Londres', coords: [51.5074, -0.1278] as [number,number], description: 'Big Ben, Sky Garden e Notting Hill', country: 'Reino Unido', flag: '🇬🇧' },
  { name: 'Madrid', coords: [40.4168, -3.7038] as [number,number], description: 'Tapas, Palácio Real e Bernabéu', country: 'Espanha', flag: '🇪🇸' },
];

export default function MapView() {
  const { t } = useTranslation();
  const polylineCoords = [...locations.map(loc => loc.coords), locations[0].coords];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 page-transition">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black uppercase tracking-tight">{t("map.title")}</h1>
        <p className="text-muted-foreground text-lg">{t("map.subtitle")}</p>
      </div>
      <div className="relative h-[650px] w-full rounded-3xl overflow-hidden glass border shadow-2xl z-0">
        <MapContainer center={[15.0, -20.0]} zoom={3} scrollWheelZoom={true} className="h-full w-full rounded-3xl z-0">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Polyline positions={polylineCoords} pathOptions={{ color: 'hsl(var(--primary))', weight: 4, opacity: 0.6, dashArray: '10' }} />
          {locations.map((loc, idx) => (
            <Marker key={idx} position={loc.coords} icon={customIcon}>
              <Popup className="rounded-xl font-sans">
                <div className="text-center p-1">
                  <h3 className="font-black text-lg text-foreground tracking-tight mb-1">{loc.name} {loc.flag}</h3>
                  <p className="text-xs text-muted-foreground font-medium mb-1">{loc.country}</p>
                  <div className="h-px w-full bg-border my-2" />
                  <p className="text-xs font-semibold">{loc.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
