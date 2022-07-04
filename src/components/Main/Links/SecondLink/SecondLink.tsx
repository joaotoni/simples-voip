import {AStyledd} from "./Second"
    interface LinkProps{
        texto: string;
        redirect: string;
    }
export default function FirstLink (props: LinkProps){
    return (
        <AStyledd className="link-banner" href={props.redirect} target= "_blank">
            {props.texto}
        </AStyledd>
    )
}