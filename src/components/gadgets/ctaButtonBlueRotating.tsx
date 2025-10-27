// CTA button using iMessage (sms:) and Apple icon
import { t } from "i18next";
import RotatingText from "../shared/RotatingText";
import apple from "/assets/apple.svg";

export const CtaButtonBlueRotating = () => {
  const phone = t("common.phoneNumber");
  const smsHref = `sms:+${phone}`;
  return (
    <a href={smsHref}>
      <RotatingText
        texts={["iMessage", `+${phone}`]}
        mainClassName="px-2 sm:px-2 md:px-3 bg-blue-500 hover:bg-blue-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={4000}
        iconSrc={apple}
        iconAlt="iMessage"
      />
    </a>
  );
};

export default CtaButtonBlueRotating;

