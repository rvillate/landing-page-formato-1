import { Container } from "../shared/Container";
import { MapContainer, TileLayer, Marker, Popup, Polygon, Circle } from "react-leaflet";
import { LatLngTuple, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import L from "leaflet";
import "leaflet.markercluster";

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
    name: "Oficina Central Bogotá",
    coords: [4.711, -74.0721],
    url: "https://goo.gl/maps/Xgq3E5oXvQjM2b6u6",
    whatsapp: "573001112233",
  },
  {
    id: 2,
    type: "store",
    name: "Sucursal Medellín",
    coords: [6.2442, -75.5812],
    url: "https://goo.gl/maps/VVkRgfX78i8y8u8t9",
    whatsapp: "573009998877",
  },
  {
    id: 3,
    type: "store",
    name: "Sucursal Cartagena",
    coords: [10.391, -75.479],
    url: "https://goo.gl/maps/TTyBZZH34P22",
  },
];

// --- Ejemplo de área de cobertura (polígono) ---
const coverageArea: LatLngTuple[] = [
  [4.7, -74.2],
  [4.8, -74.0],
  [4.6, -74.0],
];

// --- Ejemplo de círculo ---
const highlightCenter: LatLngTuple = [6.2442, -75.5812]; // Medellín

export const MapPoints = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      <Container>
        <div className="flex justify-center">
            <MapContainer
                center={[4.711, -74.0721]}
                zoom={12}
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
