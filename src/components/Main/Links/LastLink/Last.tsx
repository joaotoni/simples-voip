import {AStyled} from "./style"
    interface LinkProps{
        texto: string;
        redirect: string;
    }
export default function LastLink (props: LinkProps){
    return (
        <AStyled className="link-banner" href={props.redirect} target= "_blank">
            {props.texto}
        </AStyled>
    )
}