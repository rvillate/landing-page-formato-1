import { Layout } from "./components/Layout";
import { MapPoints } from "./components/sections/MapPoints";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <Services />
      <Trust/>
      <PromotionsUrgency/>
      <VisualGallery/>
      <MapPoints/>
      <AboutUs />
      <Brands />
      <Pricing />
      <CTA />
      <Footer/>
    </Layout>
  );
}

export default App;
