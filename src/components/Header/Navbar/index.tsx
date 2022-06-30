import { LinkStyled } from "./style"

interface NavbarProps{
  text:string,
  href?:string
}

export function Navbar(props:NavbarProps) {
  return (
      <LinkStyled href="">{props.text}</LinkStyled>
  )
}