import {AStyled} from "./second"
    interface LinkProps{
        texto: string;
        href?: string;
    }
export default function FirstLink (props: LinkProps){
    return (
        <AStyled className="link-banner" href="https://wa.me/message/ECHLT45IPHXLF1" target= "_blank">
            {props.texto}
        </AStyled>
    )
}