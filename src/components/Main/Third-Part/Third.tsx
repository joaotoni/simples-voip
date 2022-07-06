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
import { FormStyled, PStyled, DivStyled, H4Styled, DivStyledd } from "./style"

export default function Third(){
    return(
        <div>
            <DivStyledd id="recursos">
                <H4Styled>Recursos</H4Styled>
            </DivStyledd>
            <FormStyled> 
                <DivStyled>
                    <img src={MultiAtendente} alt="" />
                    <H4Styled>MultiAtendente</H4Styled>
                    <PStyled>Tenho vários atendentes com apenas um número de WhatsApp.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Transferencia} alt="" />
                    <H4Styled>Transferência</H4Styled>
                    <PStyled>O atendente pode transferir para outro atendente ou setor.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Filas_Atendimento}  />
                    <H4Styled>Filas de Atendimento</H4Styled>
                    <PStyled>Crie suas filas de atendimento como por exemplo, Suporte, Comercial, Financeiro e etc.</PStyled>
                </DivStyled>  
                <DivStyled>
                    <img src={Respostas_Rapida}  />
                    <H4Styled>Respostas Rápidas</H4Styled>
                    <PStyled>Cadastre respostas rápidas, para dar mais velocidade ao atendimento.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Mensagem}  />
                    <H4Styled>Mensagem Automáticas</H4Styled>
                    <PStyled> Mensagem de boas-vindas, atendimento finalizado e fora de expediente.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Visualizar_Atendimento}  />
                    <H4Styled>Visualizar Atendimento</H4Styled>
                    <PStyled>Os administradores poderão visualizar todas as conversas dos atendentes.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Horas_Atendimento} />
                    <H4Styled>Horários de Atendimento</H4Styled>
                    <PStyled>Configure seu horário de atendimento, e mensagem de ausência.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Avaliacao} />
                    <H4Styled>Avaliação de Atendente</H4Styled>
                    <PStyled>Avalie seu atendente, para saber a satisfação do seu cliente com o atendimento.</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={ChatBot} alt="" />
                    <H4Styled>ChatBot</H4Styled>
                    <PStyled>Deixe seu atendimento automatizado e organizado com nosssa ferramenta de ChatBot</PStyled>
                </DivStyled>
                <DivStyled>
                    <img src={Agendamento} alt="" />
                    <H4Styled>Agendamento de Mensagens</H4Styled>
                    <PStyled>Agende uma mensagem para seu cliente, escolhendo uma data e horário para esse envio</PStyled>
                </DivStyled>
            </FormStyled>
        </div>
    )
}


