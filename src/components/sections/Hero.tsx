import { useTranslation } from "react-i18next";
import listVerification from "/assets/images/hero/list-verification.svg";
import hero1 from "/assets/images/hero/hero1.png";
import hero2 from "/assets/images/hero/image1.webp";
import hero3 from "/assets/images/hero/hero3.png";
import CtaButton from "../gadgets/ctaButton";
import { Container } from "../shared/Container";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative w-full min-h-[80vh] pt-20">
      <div className="flex flex-col lg:flex-row h-full relative">
        
        {/* Lado izquierdo: imagen (sobremontada sobre azul) */}
        {/* <div className="h-[500px] w-full lg:w-1/2 flex items-center justify-center bg-white relative z-20">
          <img
            src={hero1}
            alt="Hero team"
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 30%" }} 
          />
        </div> */}
        {/* <div className="h-[500px] w-full lg:w-1/2 flex items-center justify-center bg-white relative z-20">
          <img
            src={hero2}
            alt="Hero team"
            className="w-full h-full object-cover"
            style={{ objectPosition: "70% 10%" }} 
          />
        </div> */}
<div className="static h-[500px] w-full lg:w-1/2 overflow-hidden bg-transparent z-20">
  <img
    src={hero3}
    alt="Hero team"
    className="w-[140%] h-full object-cover"
  />
</div>

        {/* Lado derecho: bloque azul con diagonal */}
        <div
          className="
            w-full lg:w-1/2 bg-color-hero text-white flex flex-col justify-center 
            px-8 lg:px-16 relative z-10
            [clip-path:polygon(0%_0,100%_0,100%_100%,0_100%)]
            md:[clip-path:polygon(0%_0,100%_0,100%_100%,0_100%)]
            lg:[clip-path:polygon(5%_0,100%_0,100%_100%,0_100%)]
          "
        >
          <Container className="relative z-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t("hero.title")}
            </h1>

            <ul>
              {Object.values(t("hero.list", { returnObjects: true })).map((item, index) => (
                <li
                  key={index}
                  className="text-lg mt-3 flex items-start"
                >
                  <img width={20} src={listVerification} alt="" className="mr-2 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 mb-2">
              <CtaButton />
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};
