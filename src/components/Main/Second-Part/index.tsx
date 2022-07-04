import Banner2 from "../../../assets/images/banner2.png"
import FirstLink from "../Links/SecondLink/SecondLink"
import { FormStyledd, Pstyledd, H1Styled, ImgStyledd } from "./style"

export default function Second_Banner(){ 
    return(
        <div>
            <FormStyledd >
                <div>
                    <H1Styled>Otimize  o atendimento<br></br> por WhatsApp da sua empresa</H1Styled>
                    <Pstyledd>Simplifique a Comunicação via WhatsApp entre Clientes e sua Empresa 
                        com uma linha centralizada de WhatsApp para vários usuários e dispositivos.<br></br>
                        Direcione as solicitações a cada área, através do nosso Chatbot. 
                    </Pstyledd>
                    <div>
                        <FirstLink texto= "Solicitar Demonstração" redirect  = "/whats"/>
                    </div>
                </div>
                <div>
                    <ImgStyledd src={Banner2} alt="" width={"400px"} height={"340px"}/>
                </div>
            </FormStyledd>
        </div>
    )
    }