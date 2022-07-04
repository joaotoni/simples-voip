import Banner from "../../../assets/images/banner1.png"
import FirstLink from "../Links/FirsLink/FirstLink"
import { FormStyled, TitleStyled, PStyled, ImgStyled } from "./style"

export default function First_Banner(){ 
return(
    <div>
        <FormStyled >
            <div>
                <TitleStyled>Atenda seus clientes de forma simultânea e automática!</TitleStyled>
                <PStyled>Tenha diversos atendentes prestando atendimentos através de um único
                    número do whatsapp.</PStyled>
                <FirstLink texto= "Solicitar Demonstração" redirect  = "/whats"/>
            </div>
            <div>
                <ImgStyled src={Banner} alt="" width={"355px"} height={"324px"}/>
            </div>
        </FormStyled>
    </div>
)
}