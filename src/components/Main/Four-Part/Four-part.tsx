import { DivStyled, FormStyledd, DivStyle, DivStyl } from "./styled"

export default function Four(){
    return(
        <div>
             <DivStyled>
                    <h4>Nossos Planos</h4> 
            </DivStyled>
            <FormStyledd id="plano">

                <DivStyle>
                    <h2>Basic</h2>
                </DivStyle>
                <DivStyl>
                    <p>Mensal</p>
                </DivStyl>
                <div>
                    <p>150,00</p>
                </div>
                <div>
                    <p>1 numero e até 3 atendentes</p>
                </div>
                <div>
                    <p>R$49,90 por atendente adicional</p>
                </div>
                <div>
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
                </div>
            </FormStyledd>
    </div>
    )
}