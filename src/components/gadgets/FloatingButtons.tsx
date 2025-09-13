import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaArrowUp } from "react-icons/fa";

export const FloatingButtons = () => {
  return (
    <div
      className="fixed bottom-6 right-1 z-50 flex flex-col gap-4"
    >
      {/* Return Up */}
      <a
        href="#"
        className="bg-gray-500 hover:bg-gray-600 text-white 
                   w-12 h-12 rounded-full flex items-center justify-center 
                   shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <FaArrowUp size={24} />
      </a>

      {/* WhatsApp */}
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

      {/* Llamada */}
      <a
        href="tel:+13001112233"
        className="bg-blue-500 hover:bg-blue-600 text-white 
                   w-12 h-12 rounded-full flex items-center justify-center 
                   shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* Correo */}
      <a
        href="mailto:info@tucorreo.com"
        className="bg-red-500 hover:bg-red-600 text-white 
                   w-12 h-12 rounded-full flex items-center justify-center 
                   shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <FaEnvelope size={22} />
      </a>
    </div>
  );
};
