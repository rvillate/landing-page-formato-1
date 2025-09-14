import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { useTranslation } from "react-i18next";

import heroImg from "/assets/images/hero/image1.webp";
import listVerification from "/assets/images/hero/list-verification.svg";
import CtaButton from "../gadgets/ctaButton";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-20 lg:pt-30">
      <Container className="flex flex-col lg:flex-row gap-0 lg:gap-12 pb-0 lg:pb-0">
        {/* Fondos decorativos */}
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span
            className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 
                        skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600
                        blur-xl opacity-60 lg:opacity-95 lg:block hidden"
          ></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        {/* Texto principal */}
        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                        lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6x6 font-bold">
            {t("hero.title")}
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2">
              {t("hero.highlight")}
            </span> */}
          </h1>

          <ul>
            {Object.values(t("hero.list", { returnObjects: true })).map((item, index) => (
              <li key={index} className="text-lg text-heading-2 mt-4 flex items-start text-left">
                <span className="mr-2 mt-1">
                  {/* SVG icono de viñeta */}
                  <img width={20} src={listVerification} alt="" />
                </span>
                {item}
              </li>
            ))}
          </ul>

<div className="flex justify-center">
  <CtaButton />
</div>


        </div>


        {/* Imagen hero */}
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-non lg:mx-0 mx-auto max-w-3xl">
          <img
            src={heroImg}
            alt="Hero image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-non max-h-96"
            style={{ objectPosition: "50% 30%" }}
          />
        </div>
      </Container>
    </section>
  );
};
