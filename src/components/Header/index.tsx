import { Navbar } from "./Navbar";
import {HeaderStyled, ImgDivStyled, NavbarDivStyled, SpacingDivStyled} from "./style"
import Whats from "../../assets/icons/whats.svg"
import Logo from "../../assets/images/logo.jpg"

export function Header() {

  return (
    <HeaderStyled>
      <SpacingDivStyled>
        <ImgDivStyled src={Logo} alt="Logo Simple Voip" height={"90px"} />
        <NavbarDivStyled>
          <Navbar text={"Recursos"}/>
          <Navbar text={"Planos"}/>
          <Navbar text ={"Falar com atendente"}/>
        </NavbarDivStyled>
      </SpacingDivStyled>
    </HeaderStyled>
  )
}
