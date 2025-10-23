import { useEffect, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
import { Paragraph } from "../shared/Paragraph";
import { t } from "i18next";
// import CtaButton from "../gadgets/ctaButton";
import { CtaButtonBlueRotating } from "../gadgets/ctaButtonBlueRotating";

interface ServiceProps {
  title: string;
  description: string;
  images: string[];
  alt: string;
}

export const Service = ({ title, description, images, alt }: ServiceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // cada 4s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
  className="group relative p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
             shadow-box-shadow overflow-hidden transition duration-500 ease-in-out transform
             hover:scale-105 hover:-translate-y-2 hover:shadow-2xl "
>
  {/* Contenedor de la imagen con efecto */}
  <div className="relative flex items-center justify-center w-full h-48">
    
    
    {/* Glow difuminado al pasar mouse sobre la tarjeta */}
    {/* <div
      className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-200 to-yellow-600 opacity-0
                 group-hover:opacity-100 blur-2xl transition duration-500"
    ></div> */}

    {/* Imagen */}
    {images.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={t(alt)}
        className={`absolute transition-opacity duration-1000 ease-in-out w-auto h-full object-contain z-10
          ${idx === currentIndex ? "opacity-100" : "opacity-0"}`}
      />
    ))}
  </div>

  {/* Texto */}
  <div className="mt-6 space-y-4 relative mb-13">
    <h2 className="text-lg md:text-xl font-semibold text-heading-2">
      {t(title)}
    </h2>
    <Paragraph>{t(description)}</Paragraph>
  </div>

  {/* Botón WhatsApp */}
  <div className="flex items-center gap-3 absolute left-5 bottom-5">
    {/* <a
      href={`https://wa.me/${t("common.phoneNumber")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white 
                 w-12 h-12 rounded-full flex items-center justify-center 
                 shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <FaWhatsapp size={24} />
    </a>
    <a href={`https://wa.me/${t("common.phoneNumber")}`}>
      <span className="ml-2 text-lg md:text-xl font-semibold text-green-700">
        {t("common.contactMe")}
      </span>
    </a> */}

    <div className="flex justify-center mt-8 ">
                  <CtaButtonBlueRotating />
                </div>
  </div>
</div>


  );
};
