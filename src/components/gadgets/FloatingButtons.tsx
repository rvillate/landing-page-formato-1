import { t } from "i18next";
import { FaPhoneAlt, FaArrowUp } from "react-icons/fa";
//import { FaWhatsapp } from "react-icons/fa";
import apple from "/assets/apple.svg";

function normalizeE164(numberStr) {
  // deja solo dígitos
  const digits = String(numberStr || "").replace(/[^\d]/g, "");
  return digits;
}

function buildSmsUrl(phoneE164, body) {
  const ua = navigator.userAgent || "";
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const isMac = /Macintosh/.test(ua);
  const encoded = encodeURIComponent(body || "");
  // iOS/macOS suelen aceptar &body; Android prefiere ?body
  return (isIOS || isMac)
    ? `sms:+${phoneE164}&body=${encoded}`
    : `sms:+${phoneE164}?body=${encoded}`;
}

export const FloatingButtons = () => {
  const raw = t("common.phoneNumber");         // ej: 14245087835 o +1 424 508 7835
  const phone = normalizeE164(raw);            // -> "14245087835"
  const smsHref = buildSmsUrl(phone, t("common.defaultSms") || "Hola, necesito un cerrajero 24/7");
  const waHref  = `https://wa.me/${phone}`;
  const telHref = `tel:+${phone}`;

  return (
    <div className="hidden md:flex fixed bottom-6 right-1 z-50 flex flex-col gap-4">
      {/* Volver arriba */}
      <a
        href="#"
        className="bg-gray-500 hover:bg-gray-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="Volver arriba"
        title="Volver arriba"
      >
        <FaArrowUp size={24} />
      </a>

      {/* iMessage / SMS (iOS, macOS, Android) */}
      <a
        href={smsHref}
        className="bg-gray-800 hover:bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="iMessage / SMS"
        title="iMessage / SMS"
      >
        <img src={apple} alt="iMessage / SMS" className="w-7 h-7" />
      </a>

      {/* WhatsApp */}
      {/*<a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>*/}

      {/* Llamada */}
      <a
        href={telHref}
        className="bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="Llamar"
        title="Llamar"
      >
        <FaPhoneAlt size={22} />
      </a>
    </div>
  );
};
