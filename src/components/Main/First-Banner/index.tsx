import Banner from "../../../assets/images/banner1.png";
import FirstLink from "../Links/FirsLink/FirstLink";
import {
  FormStyled,
  TitleStyled,
  PStyled,
  ImgStyled,
  DivStyled,
} from "./style";

export default function First_Banner() {
  return (
    <div>

      <FormStyled>
        <DivStyled>
          <TitleStyled>
            Atenda seus clientes de forma simultânea e automática!
          </TitleStyled>
          <PStyled>
            Tenha diversos atendentes prestando atendimentos através de um único
            número do whatsapp.
          </PStyled>
          <FirstLink texto="Solicitar Demonstração" href="https://api.whatsapp.com/send?phone=5511955505449&text=Temos%20interesse%20na%20plataforma%20Simples%20VOIP%20De%20Multi%20Atendimento" />
        </DivStyled>
        <DivStyled>
          <ImgStyled src={Banner} alt="" width={"355px"} height={"324px"} />
        </DivStyled>
      </FormStyled>

    </div>
  );
}
