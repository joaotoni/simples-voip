import ChatBot from "../../../assets/images/Chat-Bot.png"
import Filas_Atendimento from "../../../assets/images/Filas-Atendimento.png"
import Horas_Atendimento from "../../../assets/images/Horas-Atendimento.png"
import Mensagem from "../../../assets/images/Mensagem.png"
import MultiAtendente from "../../../assets/images/MultiAtendente.png"
import Respostas_Rapida from "../../../assets/images/Respostas-Rapida.png"
import Transferencia from "../../../assets/images/Transferencia.png"
import Visualizar_Atendimento from "../../../assets/images/Visualizar-Atendimento.png"
import Avaliacao from "../../../assets/images/Avaliacao-Atendente.png"
import Agendamento from "../../../assets/images/Agendamento-Mensagens.png"
import { FormStyled, PStyled, DivStyled } from "./style"

export default function Third(){
    return(
        <div>
            <div id="recursos">
                <h4>Recursos</h4>
            </div>
            <FormStyled> 
                <DivStyled>
                    <img src={MultiAtendente} alt="" />
                    <h4>MultiAtendente</h4>
                    <PStyled>Tenho vários atendentes com apenas um número de WhatsApp.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Transferencia} alt="" />
                    <h4>Transferência</h4>
                    <PStyled>O atendente pode transferir para outro atendente ou setor.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Filas_Atendimento}  />
                    <h4>Filas de Atendimento</h4>
                    <PStyled>Crie suas filas de atendimento como por exemplo, Suporte, Comercial, Financeiro e etc.</PStyled>
                </DivStyled>  
                <DivStyled>
                    <img src={Respostas_Rapida}  />
                    <h4>Respostas Rápidas</h4>
                    <PStyled>Cadastre respostas rápidas, para dar mais velocidade ao atendimento.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Mensagem}  />
                    <h4>Mensagem Automáticas</h4>
                    <PStyled> Mensagem de boas-vindas, atendimento finalizado e fora de expediente.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Visualizar_Atendimento}  />
                    <h4>Visualizar Atendimento</h4>
                    <PStyled>Os administradores poderão visualizar todas as conversas dos atendentes.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Horas_Atendimento} />
                    <h4>Horários de Atendimento</h4>
                    <PStyled>Configure seu horário de atendimento, e mensagem de ausência.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Avaliacao} />
                    <h4>Avaliação de Atendente</h4>
                    <PStyled>Avalie seu atendente, para saber a satisfação do seu cliente com o atendimento.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={ChatBot} alt="" />
                    <h4>ChatBot</h4>
                    <PStyled>Deixe seu atendimento automatizado e organizado com nosssa ferramenta de ChatBot</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Agendamento} alt="" />
                    <h4>Agendamento de Mensagens</h4>
                    <PStyled>Agende uma mensagem para seu cliente, escolhendo uma data e horário para esse envio</PStyled>
                </DivStyled>
            </FormStyled>
        </div>
    )
}


