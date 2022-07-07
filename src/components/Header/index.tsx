import { Navbar, SecondNavbar, WhatsNavbar } from "./Navbar";
import {HeaderStyled, ImgDivStyled, NavbarDivStyled, SpacingDivStyled} from "./style"
import Whats from "../../assets/icons/whatsapp.png"
import Logo from "../../assets/images/logo.jpg"

export function Header() {

  return (
    <HeaderStyled>
      <SpacingDivStyled>
        <ImgDivStyled src={Logo} alt="Logo Simple Voip" height={"90px"} />
        <NavbarDivStyled>
          <Navbar text={"Recursos"} redirect={"#recursos"} />
          <SecondNavbar text={"Planos"} redirect={"#plano"} />
          <WhatsNavbar text ={"Falar com atendente "} redirect={"https://api.whatsapp.com/send?phone=5511955505449&text=Temos%20interesse%20na%20plataforma%20Simples%20VOIP%20De%20Multi%20Atendimento"}>
            <img src={Whats} alt="Logo Whatsapp"  height={16} />
          </WhatsNavbar>
        </NavbarDivStyled>
      </SpacingDivStyled>
    </HeaderStyled>
  )
}
