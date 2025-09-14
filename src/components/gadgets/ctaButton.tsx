import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../shared/Button";
import { t } from "i18next";

export const CtaButton = () => (
  <div className="flex justify-center lg:justify-start mt-8">
    <Button
      className="bg-green-500 hover:bg-yellow-500 text-white inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg transition-all duration-300 w-auto h-auto"

      as="a"
      href={`https://wa.me/+${t("common.phoneNumber")}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* <FaWhatsapp size={25} /> */}
      <span className="ml-2 text-lg  font-semibold">{t("common.contactMe")}</span>
    </Button>
  </div>
);

export default CtaButton;
