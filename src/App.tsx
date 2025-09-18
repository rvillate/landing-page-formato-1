import { Layout } from "./components/Layout";
import { MapPoints } from "./components/sections/MapPoints";
import { ReviewsCarousel } from "./components/sections/Review";
import { Bar } from "./components/sections/Bar";
import { Hero } from "./components/sections/Hero";
import { ServicesDigitalLocks } from "./components/sections/ServicesDigitalLocks";
import { ServicesTraditionalsLocks } from "./components/sections/ServicesTraditionalsLocks";
import { Emergency } from "./components/sections/Emergency";
import { VisualGallery } from "./components/sections/VisualGallery";
import { Numbers } from "./components/sections/Numbers";
import { Warranty } from "./components/sections/Warranty";

function App() {
  return (
    <Layout title="LocksmithLX - Locksmith Services in Los Angeles">
      <Hero />
      <Bar/>
      {/* <Numbers /> */}
      <ServicesDigitalLocks />
      <ServicesTraditionalsLocks />
      
      {/* <Bar/> */}
      
      <Emergency/>
      <Warranty/>
      <MapPoints/>
      {/* <VisualGallery/> */}
      <ReviewsCarousel />
    </Layout>
  );
}

export default App;
