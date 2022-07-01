import Banner2 from "../../../assets/images/banner2.png"

export default function Second_Banner(){ 
    return(
        <div>
            <form >
                <div>
                    <h3>Otimize o atendimento por WhatsApp da sua empresa</h3>
                    <p>Simplifique a Comunicação via WhatsApp entre Clientes e sua Empresa 
                        com uma linha centralizada de WhatsApp para vários usuários e dispositivos. 
                    </p>
                    <p>Direcione as solicitações a cada área, através do nosso Chatbot.</p>
                    
                </div>
                <div>
                    <img src={Banner2} alt="" width={"487px"} height={"364px"}/>
                </div>
            </form>
        </div>
    )
    }