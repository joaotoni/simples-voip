import {AStyled} from "./style"
    interface LinkProps{
        texto: string;
        
        href?: string;
    }
export default function FirstLink (props: LinkProps){
    return (
        <AStyled className="link-banner" href="https://api.whatsapp.com/send?phone=5511955505449&text=Temos%20interesse%20na%20plataforma%20Simples%20VOIP%20De%20Multi%20Atendimento" target= "_blank">
            {props.texto}
        </AStyled>
    )
}