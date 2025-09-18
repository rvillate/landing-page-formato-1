import { t } from "i18next";
import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import CtaButtonBlue from "../gadgets/ctaButtonBlue";

export const Warranty = () => {
  return (
    <section id="warranty" className="mt-12">
      <Container className="space-y-10">
        {/* Título centrado */}
        <div className="text-center">
          <Title>{t("warranty.title")}</Title>
        </div>

        {/* Dos columnas de información */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
          <div className="shadow-box-shadow overflow-hidden transition duration-200 ease-in-out transform
             hover:scale-101 hover:-translate-y-1 hover:shadow-2xl">
            <Info
              title={t("warranty.info1.title")}
              description={t("warranty.info1.description")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Info>

          </div>
          <div className="shadow-box-shadow overflow-hidden transition duration-200 ease-in-out transform
             hover:scale-101 hover:-translate-y-1 hover:shadow-2xl">
            <Info
              title={t("warranty.info2.title")}
              description={t("warranty.info2.description")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-9.75 9.75V15h-3v6.75M15 21.75V15h3v6.75"
                />
              </svg>
            </Info>

          </div>
        

        </div>
        <div className="flex justify-center">
          <CtaButtonBlue />
        </div>
      </Container>
    </section>
  );
};
