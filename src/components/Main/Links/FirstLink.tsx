
    interface LinkProps{
        texto: string;
        redirect: string;
    }
export default function FirstLink (props: LinkProps){
    return (
        <a className="link-banner" href={props.redirect} target= "_blank">
            {props.texto}
        </a>
    )
}