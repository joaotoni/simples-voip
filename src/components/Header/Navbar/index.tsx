import { ReactNode } from "react"
import { LinkStyled } from "./style"


interface NavbarProps{
  text ?:string,
  href ?:string
  children ?: ReactNode
  redirect ?: string
}

export function Navbar(props:NavbarProps) {
  return (
      <LinkStyled href="#recursos">{props.text}{props.children}</LinkStyled>
  )
}