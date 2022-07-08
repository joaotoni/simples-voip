import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2%;
  @media (max-width: 764px) {
    width: auto;
    margin: 0 15px;
  }
`;

export const H1Styled = styled.h1`
  display: block;
  margin-block-start: 1em;
  margin-bottom: 50px;
  letter-spacing: 1px;
  font-size: 42px;
`;

export const Pstyled = styled.p`
  color: #8b8d94;
  line-height: 31px;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 27px;
  width: 400px;
  @media (max-width: 764px) {
    width: auto;
  }
`;
export const ImgStyled = styled.img`
  margin-top: 20%;
`;
