import styled from "styled-components"


export const FormStyled = styled.form`
    display: flex;
    justify-content: center;
    background-color: rgb(22, 49, 107);;
    flex-wrap: wrap;
    height: 90vh;
    @media (max-width: 900px) {
        height: auto;
    }
`
export const DivStyled = styled.div`
    margin: 10% 15px;
    
    @media (max-width: 900px) {
        margin: 10px 15x;
    }

`

export const TitleStyled = styled.h2`
    color: rgb(255, 255, 255);
    opacity: 1;
    width: 593px;
    height: auto;
    font-size: 38px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 44px;
    text-align: left;
    @media (max-width: 764px) {
        width: auto;
    }
`
export const PStyled = styled.p`
    color: rgb(255, 255, 255);
    
    width: 350px;
    height: 51px;
    letter-spacing: 1px;
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 40px;
`

export const ImgStyled = styled.img`
    width: auto;
`

