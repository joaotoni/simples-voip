import Banner from "../../../assets/images/banner1.png"
import FirstLink from "../Links/FirstLink"
import { FormStyled, TitleStyled, PStyled, ImgStyled } from "./style"

export default function First_Banner(){ 
return(
    <div>
        <FormStyled >
            <div>
                <TitleStyled>Atenda seus clientes de forma simultânea e automática!</TitleStyled>
                <PStyled>Tenha diversos atendentes prestando atendimento atraves de um unico
                    numero do whatsapp.</PStyled>
                <FirstLink texto= "Solicitar Demonstração" redirect  = "/whats"/>
            </div>
            <div>
                <ImgStyled src={Banner} alt="" width={"500px"} height={"457px"}/>
            </div>
        </FormStyled>
    </div>
)
}