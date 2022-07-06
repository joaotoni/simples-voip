import { Navbar, SecondNavbar } from "./Navbar";
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
          <Navbar text ={"Falar com atendente"}>
            <img src={Whats} alt="Logo Whatsapp" height={16} />
          </Navbar>
        </NavbarDivStyled>
      </SpacingDivStyled>
    </HeaderStyled>
  )
}
