import { Container } from "../shared/Container";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
// import L from "leaflet";
import "leaflet.markercluster";
import { Title } from "../shared/Title";
import { useThemeStore } from "../../store/ThemeStore";
import { t } from "i18next";
// import { GeoJSON } from "react-leaflet";
// import laBoundary from "../../../assets/geojson/LosAngeles.geojson";
import { CtaButtonBlueRotating } from "../gadgets/ctaButtonBlueRotating";


// --- Íconos personalizados ---




/*
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
*/
// --- Ejemplo de área de cobertura (polígono) ---
const coverageArea: LatLngTuple[] = [
  [34.038249178070316, -118.55326140163413],[34.05965544872467, -118.51180386021927],[34.07657762519756, -118.48991647114744],[34.109203704948975, -118.45489664863246],[34.127323870242854, -118.3921527999598],[34.12973959891542, -118.32794979201569],[34.1333630624833, -118.25791014698574],[34.14171071885661, -118.2278355275678],[34.14522240968725, -118.20520595812971],[34.14054012281074, -118.18399073678148],[34.12297923618599, -118.17621182228713],[34.1024869244978, -118.17409030015232],[34.08491813496439, -118.16277551543328],[34.06441660566481, -118.16772573374784],[34.05914398188037, -118.19176965127583],[34.04156620030482, -118.19318399936571],[34.02808743334262, -118.19389117341066],[34.02808743334262, -118.19389117341066],[34.0140203499838, -118.21439922071391],[34.01284798780439, -118.23490726801722],[33.998778379031336, -118.23773596419699],[33.990570030900955, -118.25400096723061],[33.97766959600989, -118.25682966341037],[33.96594022897719, -118.25824401150025],[33.954209244174294, -118.25541531532048],[33.950689633308386, -118.24268618251156],[33.94892977328703, -118.23207857183745],[33.93719644319471, -118.23207857183745],[33.93074242233302, -118.24339335655648],[33.93015566890864, -118.2575368374553],[33.92604828175348, -118.26885162217437],[33.921940696533525, -118.28087358093836],[33.90726913263938, -118.28511662520799],[33.89963892123949, -118.3077461946461],[33.89787800624657, -118.41523664947705],[33.92604828175348, -118.43433034869047],[33.96007493878022, -118.45625274408361],[33.99467430409483, -118.48595405397113],[34.02750135141785, -118.51989840812828],[34.039808221776944, -118.547478192511],
];

export const MapPoints = () => {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  const tileUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}";
  const tileAttribution =
    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>';
  return (
    <section id="map-points" className="relative mt-6">
      <div className="text-center mb-10">
        <Title>{t("map.title")}</Title>
      </div>
      <Container>
        <div className="flex justify-center">
          <MapContainer
            center={[34.04859775030643, -118.404629035433]} // centro aproximado de EE. UU.
            zoom={10}
            className="w-full max-w-4xl h-80 md:h-96 lg:h-[400px] rounded-xl shadow-lg"
          >
            {/* Base layer with theme-aware tiles */}
            <TileLayer
              url={tileUrl}
              // url="http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}" //{"Google Satellite"}
              // url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}" //{"Google Hybrid"}
              // url="https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}" //{"Google Terrain"}
              // url="https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}" //{"Google Traffic"}
              // url="https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}" //{"Google Roads"}
              
              // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" //ESRI Imagery/Satellite
              // url="http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}" //ESRI National Geographic
              //NO DISPONIBLE url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}" //ESRI Physical
              // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}" //ESRI Streets
              // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}" //ESRI Terrain
              // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}" //ESRI Topo
              // url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}" //ESRI Transportation

              attribution={tileAttribution}
            />

            {/* Área de cobertura */}
            <Polygon positions={coverageArea} color={isDark ? "#6EA8FF" : "#5472FF"} />




            {/* Círculo de resalte */}
            {/* <Circle center={highlightCenter} radius={30000} color="red" /> */}

            {/* Marcadores dinámicos */}
            {/*points.map((p) => (
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
            ))*/}
          </MapContainer>
        </div>
        <div className="flex justify-center pt-5">
                  <CtaButtonBlueRotating />
                </div>
      </Container>
    </section>
  );
};
