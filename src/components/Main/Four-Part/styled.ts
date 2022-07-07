import styled from "styled-components";

export const DivStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h4{
        margin-top: 100px;
        margin-bottom: 50px;
    }
    
    img{
        margin-bottom: 60px;
        
        @media (max-width: 1200px) {
        width: 1000px;
    }
    @media (max-width: 1000px) {
        width: 900px;
    }
    @media (max-width: 900px) {
        width: 800px;
    }
    @media (max-width: 800px) {
        width: 700px;
    }
    @media (max-width: 700px) {
        width: 600px;
    }
    @media (max-width: 600px) {
        width: 500px;
    }
    @media (max-width: 500px) {
        width: 400px;
    }
    @media (max-width: 400px) {
        width: 300px;
    }
    }
`

export const SectionStyledd= styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const DivStyle = styled.div`
    background: #1d98d6;
    color: white;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 40px;

    h2{
        margin-bottom: -3px!important;
        
        background: #1d98d6;
        padding: 0px 18px;
        font-size: 32px;
        color: white;
        line-height: 35px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        z-index: auto;
       
        
    }

    .Mensal{
        padding: 20px 0;
        color: lightgrey;
    }

    .Valor{
        font-size: 77px;
        line-height: 1em;
        text-align: center;
        color: white;
        margin: 0;
        background: #1d98d6;
        
    }
    .aten{
        font-size: 16px;
        line-height: 20px;
        font-weight: 300;
        text-align: center;
        
        color: #1d98d6;
    }
    .Add{
        font-size: 14px;
        line-height: 20px;
        font-weight: 300;
        text-align: center;
        color: #222;
        margin: 0;
    }
`
export const DivStyl = styled.div`
    background: whitesmoke;
    
    ol{
        font-size: 15px;
        line-height: 1.6em;
        padding: 5px 16px;
        border-bottom: 1px dotted lightgrey;
    }
`


