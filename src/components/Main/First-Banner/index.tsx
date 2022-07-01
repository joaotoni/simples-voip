import Banner from "../../../assets/images/banner1.png"
import FirstLink from "../Links/FirstLink"
import { FormStyled, titleStyled, pStyled, imgStyled } from "./style"

export default function First_Banner(){ 
return(
    <div>
        <FormStyled >
            <div>
                <h2>Atenda seus clientes de forma simultânea e automática!</h2>
                <p>Tenha diversos atendentes prestando atendimento atraves de um unico
                    numero do whatsapp.</p>
                <FirstLink texto= "whats" redirect  = "/whats"/>
            </div>
            <div>
                <img src={Banner} alt="" width={"500px"} height={"457px"}/>
            </div>
        </FormStyled>
    </div>
)
}