import logoWhatsapp from "../../assets/icons/whatsapp-logo.png";
import { WhatsButton } from "./style";

export function Widget() {
  return (
    <WhatsButton
      target={"_blank"}
      href="https://wa.me/message/ECHLT45IPHXLF1"
    >
      <img width={"60px"} src={logoWhatsapp} alt="Whatsapp Logo" />
    </WhatsButton>
  );
}
