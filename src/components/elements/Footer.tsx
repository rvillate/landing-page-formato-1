import { Container } from "../shared/Container";
import logo from "/assets/icon.svg";
import { t } from "i18next";

export const Footer = () => {
 return (
    <footer className="relative pt-20 rounded-t-3xl bg-box-bg text-heading-1">
      <Container className="pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Columna izquierda: logo y secciones */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} className="w-35 h-15" alt="Logo Locksmith" />
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#service-digital-locks" className="hover:underline">
                  {t("footer.menu.digitalLocks")}
                </a>
              </li>
              <li>
                <a href="#services-traditional-locks" className="hover:underline">
                  {t("footer.menu.traditionalLocks")}
                </a>
              </li>
              <li>
                <a href="#emergency" className="hover:underline">
                  {t("footer.menu.emergency")}
                </a>
              </li>
              <li>
                <a href="#services-automobiles" className="hover:underline">
                  {t("footer.menu.automobiles")}
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:underline">
                  {t("footer.menu.aboutUs")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  {t("footer.menu.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna central: contacto */}
          <div>
            <h4 className="font-semibold mb-3">{t("footer.contact.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-bold mr-2">{t("footer.contact.phone")}:</span>
                <a
                  href={`tel:${t("common.phoneNumber")}`}
                  className="text-blue-600 hover:underline"
                >
                  {t("common.phoneNumber")}
                </a>
                <span className="mx-2">·</span>
                <a
                  href={`https://wa.me/${t("common.phoneNumber")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="font-bold mr-2">{t("footer.contact.email")}:</span>
                <a
                  href={`mailto:info@tucorreo.com?subject=${encodeURIComponent(t("common.companyName"))}`}
                  className="hover:underline"
                >
                  info@tucorreo.com
                </a>
              </li>
              <li>
                <a href="#warranty" className="font-bold hover:underline">
                  {t("footer.contact.warranty")}
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="font-bold hover:underline">
                  {t("footer.contact.privacyPolicy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna derecha: redes sociales */}
          <div>
            <h4 className="font-semibold mb-3">{t("footer.social.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="font-bold hover:underline" target="_blank" rel="noopener noreferrer">
                  {t("footer.social.tiktok")}
                </a>
              </li>
              <li>
                <a href="#" className="font-bold hover:underline" target="_blank" rel="noopener noreferrer">
                  {t("footer.social.facebook")}
                </a>
              </li>
              <li>
                <a href="#" className="font-bold hover:underline" target="_blank" rel="noopener noreferrer">
                  {t("footer.social.instagram")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
