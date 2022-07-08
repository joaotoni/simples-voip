import logoWhatsapp from "../../assets/icons/whatsapp-logo.png";
import { WhatsButton } from "./style";

export function Widget() {
  return (
    <WhatsButton
      target={"_blank"}
      href="https://api.whatsapp.com/send?phone=5511955505449&text=Temos%20interesse%20na%20plataforma%20Simples%20VOIP%20De%20Multi%20Atendimento"
    >
      <img width={"60px"} src={logoWhatsapp} alt="Whatsapp Logo" />
    </WhatsButton>
  );
}
