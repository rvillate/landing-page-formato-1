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
              <img src={logo} className="w-8 h-8" alt="Logo Locksmith" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg">
                  {t("footer.brand.name").split(" ")[0]}
                </span>
                <span className="font-bold text-lg">
                  {t("footer.brand.name").split(" ")[1]}
                </span>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.menu.digitalLocks")}</li>
              <li>{t("footer.menu.traditionalLocks")}</li>
              <li>{t("footer.menu.emergency")}</li>
              <li>{t("footer.menu.automobiles")}</li>
              <li>{t("footer.menu.aboutUs")}</li>
              <li>{t("footer.menu.contact")}</li>
            </ul>
          </div>

          {/* Columna central: contacto */}
          <div>
            <h4 className="font-semibold mb-3">{t("footer.contact.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="font-bold">{t("footer.contact.phone")}</span></li>
              <li><span className="font-bold">{t("footer.contact.email")}</span></li>
              <li><span className="font-bold">{t("footer.contact.warranty")}</span></li>
              <li><span className="font-bold">{t("footer.contact.privacyPolicy")}</span></li>
            </ul>
          </div>

          {/* Columna derecha: redes sociales */}
          <div>
            <h4 className="font-semibold mb-3">{t("footer.social.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="font-bold">{t("footer.social.tiktok")}</span></li>
              <li><span className="font-bold">{t("footer.social.facebook")}</span></li>
              <li><span className="font-bold">{t("footer.social.instagram")}</span></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};