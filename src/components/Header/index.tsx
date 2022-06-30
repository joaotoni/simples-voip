import { Navbar } from "./Navbar";
import {HeaderStyled, ImgDivStyled, NavbarDivStyled, SpacingDivStyled} from "./style"

export function Header() {

  return (
    <HeaderStyled>
      <SpacingDivStyled>
        <ImgDivStyled src="asdads" alt="Logo Simple Voip" />
        <NavbarDivStyled>
          <Navbar text={"Recursos"}/>
          <Navbar text={"Planos"}/>
          <Navbar text={"Contato"}/>
        </NavbarDivStyled>
      </SpacingDivStyled>
    </HeaderStyled>
  )
}
