import { Container } from "../shared/Container";
import { MapContainer, TileLayer, Marker, Popup, Polygon, Circle } from "react-leaflet";
import { LatLngTuple, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import L from "leaflet";
import "leaflet.markercluster";
import { Title } from "../shared/Title";
import { t } from "i18next";

// --- Íconos personalizados ---
const officeIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

const storeIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
  iconSize: [30, 30],
});

// --- Data dinámica (podría venir de un JSON o DB) ---
const points: {
  id: number;
  type: "office" | "store";
  name: string;
  coords: LatLngTuple;
  url: string;
  whatsapp?: string;
}[] = [
    {
      id: 1,
      type: "office",
      name: "Oficina Central Nueva York",
      coords: [40.7128, -74.006], // Nueva York
      url: "https://goo.gl/maps/74tE8dqN2YF2",
    },
    {
      id: 2,
      type: "store",
      name: "Sucursal Los Ángeles",
      coords: [34.0522, -118.2437], // Los Ángeles
      url: "https://goo.gl/maps/63ZRv7C3ZB82",
    },
    {
      id: 3,
      type: "store",
      name: "Sucursal Chicago",
      coords: [41.8781, -87.6298], // Chicago
      url: "https://goo.gl/maps/Gnqz9quAoxs",
    },
  ];

// --- Ejemplo de área de cobertura (polígono) ---
const coverageArea: LatLngTuple[] = [
  [40.9, -74.3],   // cerca de NY
  [41.0, -87.9],   // cerca de Chicago
  [34.3, -118.6],  // cerca de LA
  [34.0, -118.0],
  [40.9, -74.3],   // cerrar el polígono
];

// --- Ejemplo de círculo ---
const highlightCenter: LatLngTuple = [40.7128, -74.006];

export const MapPoints = () => {
  return (
    <section className="relative">
      <div className="text-center mb-10">
        <Title>{t("map.title")}</Title>
      </div>
      <Container>
        <div className="flex justify-center">
          <MapContainer
            center={[39.5, -98.35]} // centro aproximado de EE. UU.
            zoom={4}
            className="w-full max-w-4xl h-80 md:h-96 lg:h-[400px] rounded-xl shadow-lg"
          >
            {/* Base layer */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            />

            {/* Área de cobertura */}
            <Polygon positions={coverageArea} color="blue" />

            {/* Círculo de resalte */}
            <Circle center={highlightCenter} radius={30000} color="red" />

            {/* Marcadores dinámicos */}
            {points.map((p) => (
              <Marker
                key={p.id}
                position={p.coords}
                icon={p.type === "office" ? officeIcon : storeIcon}
              >
                <Popup>
                  <div className="text-sm space-y-2">
                    <h4 className="font-bold">{p.name}</h4>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Ver en Google Maps
                    </a>
                    {p.whatsapp && (
                      <a
                        href={`https://wa.me/${p.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-green-500 text-white text-center py-1 px-2 rounded"
                      >
                        WhatsApp
                      </a>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </Container>
    </section>
  );
};
