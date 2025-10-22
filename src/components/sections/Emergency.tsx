import { t } from "i18next";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
// import CtaButton from "../gadgets/ctaButton";
// import CtaButtonBlue from "../gadgets/ctaButtonBlue";
// import { ScrambleText } from "../shared/ScrambleText";
import RotatingText from "../shared/RotatingText";


export const Emergency = () => {
  return (
    <section id="emergency" className="mt-12">
      <Container className="space-y-10">
        {/* Título centrado */}
        <div className="text-center">
          <Title>{t("emergency.title")}</Title>
        </div>

        {/* Dos columnas debajo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Columna izquierda */}
          <div className="text-center md:text-right">
            <h2 className="text-heading-1 text-5xl font-bold text-black-600 text-center">{t("emergency.recurrency")}</h2>
            <div className="flex justify-center mt-8">
              {/* <CtaButtonBlue /> */}

            <a href=""><RotatingText
              texts={['¡Contactame!', '+14245087835']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-green-500 hover:bg-yellow-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={8000}
            /></a>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="text-center md:text-left">
            <Paragraph>
              {t("emergency.description")}
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  );
};
