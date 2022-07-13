import { Navbar, SecondNavbar, WhatsNavbar } from "./Navbar";
import {
  HeaderStyled,
  ImgDivStyled,
  NavbarDivStyled,
  SpacingDivStyled,
} from "./style";
import Whats from "../../assets/icons/whatsapp.png";
import Logo from "../../assets/images/logo.jpg";

export function Header() {
  return (
    <HeaderStyled>
      <SpacingDivStyled>
        <ImgDivStyled src={Logo} alt="Logo Simple Voip" height={"90px"} />
        <NavbarDivStyled>
          <Navbar text={"Recursos"} redirect={"#recursos"} />
          <SecondNavbar text={"Planos"} redirect={"#plano"} />
          <WhatsNavbar
            text={"Falar com atendente "}
            redirect={
              "https://wa.me/message/ECHLT45IPHXLF1"
            }
          >
            <img src={Whats} alt="Logo Whatsapp" height={16} />
          </WhatsNavbar>
        </NavbarDivStyled>
      </SpacingDivStyled>
    </HeaderStyled>
  );
}
