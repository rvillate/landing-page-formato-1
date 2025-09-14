import { Layout } from "./components/Layout";
import { MapPoints } from "./components/sections/MapPoints";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { ServicesDigitalLocks } from "./components/sections/ServicesDigitalLocks";
import { ServicesTraditionalsLocks } from "./components/sections/ServicesTraditionalsLocks";
import { Emergency } from "./components/sections/Emergency";
import { PromotionsUrgency } from "./components/sections/PromotionsUrgency";
import { VisualGallery } from "./components/sections/VisualGallery";
import { Numbers } from "./components/sections/Numbers";
import { Warranty } from "./components/sections/Warranty";

function App() {
  return (
    <Layout title="LocksmithLX - Locksmith Services in Los Angeles">
      <Hero />
      {/* <Numbers /> */}
      <ServicesDigitalLocks />
      <ServicesTraditionalsLocks />
      <Emergency/>
      <Warranty/>
      {/* <PromotionsUrgency/> */}
      <MapPoints/>
      <VisualGallery/>
      {/* <AboutUs /> */}
      {/* <Brands /> */}
      {/* <Pricing /> */}
      {/* <CTA /> */}
    </Layout>
  );
}

export default App;
