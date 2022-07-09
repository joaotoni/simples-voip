import { FooterStyled } from "./style";

export function Footer() {
  return (
    <FooterStyled>

      <p>Todos os direitos reservados. Copyright ©{new Date().getFullYear()} SIMPLES VOIP</p>

    </FooterStyled>
  );
}