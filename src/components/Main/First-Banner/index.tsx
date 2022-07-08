import Banner from "../../../assets/images/banner1.png"
import FirstLink from "../Links/FirsLink/FirstLink"
import { FormStyled, TitleStyled, PStyled, ImgStyled, DivStyled } from "./style"

export default function First_Banner(){ 
return(
    <div>
        <FormStyled >
            <DivStyled>
                <TitleStyled>Atenda seus clientes de forma simultânea e automática!</TitleStyled>
                <PStyled>Tenha diversos atendentes prestando atendimentos através de um único
                    número do whatsapp.</PStyled>
                <FirstLink texto= "Solicitar Demonstração" />
            </DivStyled>
            <DivStyled>
                <ImgStyled src={Banner} alt="" width={"355px"} height={"324px"}/>
            </DivStyled>
        </FormStyled>
    </div>
)
}