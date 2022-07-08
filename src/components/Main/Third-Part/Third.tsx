import { recursosArray } from "../../../assets/images";
import { FormStyled, PStyled, DivFormStyled, H4Styled, DivTitleStyled } from "./style";

export default function Third() {
  return (
    <div>
      <DivTitleStyled id="recursos">
        <H4Styled>Recursos</H4Styled>
      </DivTitleStyled>
      <FormStyled>
        {recursosArray.map((element, index) => (
          <DivFormStyled key={element.title + index}>
            <img src={element.img} alt={element.title} />
            <H4Styled>{element.title}</H4Styled>
            <PStyled>{element.text}</PStyled>
          </DivFormStyled>
        ))}
      </FormStyled>
    </div>
  );
}
