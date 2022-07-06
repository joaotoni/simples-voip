import { ReactNode } from "react"
import { LinkStyled, LinkStyle } from "./style"


interface NavbarProps{
  text ?:string,
  href ?:string
  children ?: ReactNode
  redirect ?: string
}

export function Navbar(props:NavbarProps) {
  return (
    <>
      <LinkStyled href="#recursos" >{props.text}{props.children}</LinkStyled>
    </>
  )
}
export function SecondNavbar(props:NavbarProps) {
  return (
    <>
<LinkStyle href="#plano" >{props.text}{props.children}</LinkStyle>
</>
  )
}