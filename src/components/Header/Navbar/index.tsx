import { ReactNode } from "react";
import { LinkStyled, LinkStyle, LinkStyl } from "./style";

interface NavbarProps {
  text?: string;
  href?: string;
  children?: ReactNode;
  redirect?: string;
}

export function Navbar(props: NavbarProps) {
  return (
    <>
      <LinkStyled href="#recursos">
        {props.text}
        {props.children}
      </LinkStyled>
    </>
  );
}
export function SecondNavbar(props: NavbarProps) {
  return (
    <>
      <LinkStyle href="#plano">
        {props.text}
        {props.children}
      </LinkStyle>
    </>
  );
}

export function WhatsNavbar(props: NavbarProps) {
  return (
    <>
      <LinkStyl
        target={"_blank"}
        href="https://api.whatsapp.com/send?phone=5511955505449&text=Temos%20interesse%20na%20plataforma%20Simples%20VOIP%20De%20Multi%20Atendimento"
      >
        {props.text}
        {props.children}
      </LinkStyl>
    </>
  );
}
