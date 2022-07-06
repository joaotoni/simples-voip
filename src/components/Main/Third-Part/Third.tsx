import { recursosArray } from "../../../assets/images"
import { FormStyled, PStyled, DivStyled, H4Styled, DivStyledd } from "./style"

export default function Third(){
    return(
        <div>
            <DivStyledd id="recursos">
                <H4Styled>Recursos</H4Styled>
            </DivStyledd>
            <FormStyled>
                {recursosArray.map((element,index)=>(
                    <DivStyled key={element.title+index}>
                        <img src={element.img} alt={element.title} />
                        <H4Styled>{element.title}</H4Styled>
                        <PStyled>{element.text}</PStyled>
                    </DivStyled>
                ))}
            </FormStyled>
        </div>
    )
}


