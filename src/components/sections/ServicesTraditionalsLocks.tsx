import { t } from "i18next";
import { servicesTraditionalLocks } from "../../utils/services-data-traditionals-locks";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const ServicesTraditionalsLocks = () => {
  return (
    <section id="services-traditional-locks">
      {" "}
      <Container className="space-y-10 md:space-y-12 mt-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title> {t("servicesTraditionalLocks.title")}</Title>
          <Paragraph>
            {t("servicesTraditionalLocks.description")}
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesTraditionalLocks.map((service, key) => (
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
