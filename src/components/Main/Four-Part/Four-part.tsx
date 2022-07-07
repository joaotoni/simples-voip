import LastLink from "../Links/LastLink/Last"

import { DivStyled, SectionStyledd, DivStyle,DivStyl } from "./styled"
import Banner from "../../../assets/images/Banner.png"

export default function Four(){
    return(
        <DivStyled id="plano">
             <DivStyled>
                    <h4>Nosso Plano</h4> 
            </DivStyled>
            <SectionStyledd >

            <DivStyle>
                <h2>Basic</h2>
                <p className="Mensal">Mensal</p>
                <p className="Valor">150,00</p>
                <p className="aten">1 numero e até 3 atendentes</p>
                <p className="Add">R$49,90 por atendente adicional</p>
            </DivStyle>
                <DivStyl>
                    <ul>
                        <ol>Transferencia de atendente</ol>
                        <hr />
                        <ol>Transferencia de setores</ol>
                        <hr />
                        <ol>Respostas Rápidas</ol>
                        <hr />
                        <ol>Sistema Responsivo</ol>
                        <hr />
                        <ol>CHATBOT</ol>
                        <hr />
                        <ol>Opção de SUB MENU</ol>
                        <hr />
                        <ol>Respostas Rápidas</ol>
                        <hr />
                        <ol>Documentação API (Para integração)</ol>
                        <hr />
                        <ol>TAGS</ol>
                        <hr />
                        <ol>Opção de Bloquear grupos</ol>
                        <hr />
                        <ol>Suporte 7x1</ol>
                        <hr />
                        <ol>Treinamento</ol>
                    </ul>
                </DivStyl>
                <LastLink texto= "Assinar Plano" redirect  = "https://www.asaas.com/c/250742374980"/>
            </SectionStyledd>
            <img src={Banner} alt="" />
    </DivStyled>
    )
}