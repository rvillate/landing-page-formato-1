import { useTranslation } from "react-i18next";
import listVerification from "/assets/images/hero/list-verification.svg";
import hero3 from "/assets/images/hero/img_initial_1.jpg";
import CtaButtonBlueRotating from "../gadgets/ctaButtonBlueRotating";

import { Container } from "../shared/Container";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative w-full min-h-[80vh] pt-20">
      <div className="flex flex-col lg:flex-row h-full relative">
        {/* Lado izquierdo: imagen (no tocar) */}
        <div className="static h-[570px] w-full lg:w-1/2 overflow-hidden bg-transparent z-10">
          <img
            src={hero3}
            alt="Mobile locksmith service"
            className="w-[140%] h-full object-cover"
          />
        </div>

        {/* Lado derecho: bloque azul con diagonal */}
        <div
          className="
            w-full lg:w-1/2 bg-color-hero text-white flex flex-col justify-center 
            px-8 lg:px-16 relative z-30 lg:-ml-10
            [clip-path:polygon(0%_0,100%_0,100%_100%,0_100%)]
            md:[clip-path:polygon(0%_0,100%_0,100%_100%,0_100%)]
            lg:[clip-path:polygon(5%_0,100%_0,100%_100%,0_100%)]
          "
        >
          <Container className="relative z-20">
            {/* Título principal (H1) con la info de emergencia */}
            <h1
              className="
                mx-auto mt-2 text-center
                text-4xl sm:text-5xl md:text-6xl
                font-extrabold leading-tight tracking-tight
                text-white
              "
              aria-label={`${t("emergency.title")} ${t("emergency.title2")} ${t("emergency.recurrency")}`}
            >
              <span className="inline-block rounded-2xl bg-white/10 ring-1 ring-white/15 px-4 py-2">
                {t("emergency.title")} · {t("emergency.title2")} ·{" "}
                <span className="text-emerald-300">{t("emergency.recurrency")}</span>
              </span>
            </h1>

            {/* CTA */}
            <div className="mt-8 mb-2 flex justify-center lg:justify-center">
              <CtaButtonBlueRotating />
            </div>

            {/* H2 (antes era H1): lo usarás como texto normal */}
            <h2
              className="
                mt-5 text-xl sm:text-2xl md:text-3xl
                font-semibold text-white/90
                text-center lg:text-left leading-snug
              "
            >
              {t("hero.title")}
            </h2>

            {/* Descripción (párrafo de apoyo) */}
            <p className="mt-3 text-base sm:text-lg text-white/80 text-center lg:text-left max-w-2xl">
              {t("emergency.description")}
            </p>

            {/* Lista de beneficios */}
            <ul className="mt-6 space-y-2 max-w-2xl mx-auto lg:mx-0">
              {Object.values(t("hero.list", { returnObjects: true }) as Record<string, string>).map(
                (item: string, index: number) => (
                  <li key={index} className="text-base sm:text-lg flex items-start">
                    <img
                      width={20}
                      height={20}
                      src={listVerification}
                      alt=""
                      className="mr-2 mt-1 select-none"
                    />
                    <span className="text-white/90">{item}</span>
                  </li>
                )
              )}
            </ul>

            
          </Container>

        </div>
      </div>
    </section>
  );
};
