import styled from "styled-components"

export const HeaderStyled = styled.header`
    width: 100%;
    background-color: #ffff;
    height: 90px;
    display: grid;
`

export const SpacingDivStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 90px;
    @media (max-width: 764px) {
        margin: 0 20px;
    }

`
export const ImgDivStyled = styled.img`
    @media (max-width: 764px) {
        display: none;
    }
`

export const NavbarDivStyled = styled.div`
    width: 300px;
    display: flex;
    
    @media (max-width: 764px) {
       width: 100%;
    }
`
