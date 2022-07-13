import Banner2 from "../../../assets/images/banner2.png";
import FirstLink from "../Links/SecondLink/SecondLink";
import { FormStyled, Pstyled, H1Styled, ImgStyled } from "./style";

export default function Second_Banner() {
  return (
    <div>
      <FormStyled>
        <div>

          <H1Styled>
            Otimize o atendimento<br></br> por WhatsApp da sua empresa
          </H1Styled>
          <Pstyled>
            Simplifique a Comunicação via WhatsApp entre Clientes e sua Empresa
            com uma linha centralizada de WhatsApp para vários usuários e
            dispositivos.<br></br>
            Direcione as solicitações a cada área, através do nosso Chatbot.
          </Pstyled>
          <div>
            <FirstLink
              texto="Solicitar Demonstração"
              href="https://wa.me/message/ECHLT45IPHXLF1"
            />
          </div>

        </div>
        <div>
          <ImgStyled src={Banner2} alt="" width={"400px"} height={"340px"} />
        </div>
      </FormStyled>
    </div>
  );
}
