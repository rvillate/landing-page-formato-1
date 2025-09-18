import { t } from "i18next";
import { servicesDigitalLocks } from "../../utils/services-data-digital-locks.tsx";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { SubTitle } from "../shared/SubTitle.tsx";

export const ServicesDigitalLocks = () => {
  return (
    <section id="service-digital-locks">
      {" "}
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title> {t("servicesDigitalLocks.title")}</Title>
          <SubTitle> {t("servicesDigitalLocks.subtitle")}</SubTitle>
          <Paragraph>
            {t("servicesDigitalLocks.description")}
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesDigitalLocks.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              images={service.images}
              alt={service.alt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
