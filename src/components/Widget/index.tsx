import logoWhatsapp from "../../assets/icons/whatsapp-logo.png"
import { WhatsButton } from "./style"

export function Widget() {
    return (
        <WhatsButton href=""><img width={"60px"} src={logoWhatsapp} alt="Whatsapp Logo" /></WhatsButton>
    )
}