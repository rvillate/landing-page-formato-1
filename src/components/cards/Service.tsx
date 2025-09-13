import { FaWhatsapp } from "react-icons/fa";
import ImageTarget1 from "../shared/ImageTarget1";
import { Paragraph } from "../shared/Paragraph";
import { t } from "i18next";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

export const Service = ({ title, description, icon, alt }: ServiceProps) => {
  return (
    <div
      className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                 shadow-box-shadow relative overflow-hidden
                 transition duration-500 ease-in-out transform
                 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl "
    >
      <div className="flex items-center justify-center">
        <ImageTarget1 param1={icon} param2={t(alt)} />
      </div>
      <div className="mt-6 space-y-4 relative mb-10">
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">
          {t(title)}
        </h2>
        <Paragraph>{t(description)}</Paragraph>
      </div>
      <div className="flex items-center gap-3 absolute left-5 bottom-5">
        <a
          href="https://wa.me/13001112233"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white 
                     w-12 h-12 rounded-full flex items-center justify-center 
                     shadow-lg transition-transform duration-300 hover:scale-110"
        >
          <FaWhatsapp size={24} />
        </a>
        <a href="https://wa.me/13001112233">
          <span className="text-base font-medium text-green-700">+13001112233 Contactame</span>
        </a>
      </div>
    </div>
  );
};
