import { ReactNode } from "react"
import { LinkStyled } from "./style"


interface NavbarProps{
  text ?:string,
  href ?:string
  children ?: ReactNode
}

export function Navbar(props:NavbarProps) {
  return (
      <LinkStyled href="">{props.text}{props.children}</LinkStyled>
  )
}