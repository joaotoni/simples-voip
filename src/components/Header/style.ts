import styled from "styled-components"

export const HeaderStyled = styled.header`
    width: 100%;
    background-color: #ffff;
    height: 90px;
    display: grid;
    position: sticky;
    top: -10px;
    box-shadow: 0 0 15px 1px rgb(0 0 0 / 7%);
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
    width: 350px;
    display: flex;
    
    @media (max-width: 764px) {
       width: 100%;
    }
`
