import { t } from "i18next";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import CtaButton from "../gadgets/ctaButton";
import CtaButtonBlue from "../gadgets/ctaButtonBlue";

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
              <CtaButtonBlue />
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
