import { Layout } from "./components/Layout";
import { MapPoints } from "./components/sections/MapPoints";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { ServicesDigitalLocks } from "./components/sections/ServicesDigitalLocks";
import { ServicesTraditionalsLocks } from "./components/sections/ServicesTraditionalsLocks";
import { Trust } from "./components/sections/Trust";
import { PromotionsUrgency } from "./components/sections/PromotionsUrgency";
import { VisualGallery } from "./components/sections/VisualGallery";
import { Numbers } from "./components/sections/Numbers";

function App() {
  return (
    <Layout title="EdgeAI">
      <Hero />
      {/* <Numbers /> */}
      <ServicesDigitalLocks />
      <ServicesTraditionalsLocks />
      {/* <Trust/> */}
      {/* <PromotionsUrgency/> */}
      <VisualGallery/>
      <MapPoints/>
      {/* <AboutUs /> */}
      {/* <Brands /> */}
      {/* <Pricing /> */}
      {/* <CTA /> */}
    </Layout>
  );
}

export default App;
