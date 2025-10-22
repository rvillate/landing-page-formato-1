// import { FaWhatsapp } from "react-icons/fa";
import RotatingText from "../shared/RotatingText";

export const CtaButtonBlueRotating = () => (
  <a href=""><RotatingText
              texts={['¡Contactame!', '+14245087835']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-green-500 hover:bg-yellow-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
            /></a>
);

export default CtaButtonBlueRotating;
