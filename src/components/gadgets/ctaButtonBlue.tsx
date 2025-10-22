// import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../shared/Button";
import { t } from "i18next";

export const CtaButtonBlue = () => (
  <div className="flex justify-center lg:justify-start">
    <Button
      className=" bg-blue-500 hover:bg-yellow-600 text-white inline-flex items-center gap-3 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 w-auto h-auto"

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

export default CtaButtonBlue;
