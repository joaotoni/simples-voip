import styled from "styled-components"

export const LinkStyled =  styled.a`
            display: flex;
            align-items: center;
            position: relative;
            margin: auto;
            text-decoration: none;
            color:  #007bff;
            transition: 200ms;
            
            > img {
               padding-left: 5px ;
               color: #007bff;
            }
      :hover{
            color:#1ebbf0;
      }
      :hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
      }
      :after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: #1ebbf0;
            transform-origin: bottom right;
            transition: transform 0.3s ease-out;
      }
`
export const LinkStyle =  styled.a`
            display: flex;
            align-items: center;
            position: relative;
            margin: auto;
            text-decoration: none;
            color:  #007bff;
            transition: 200ms;
            
            > img {
               padding-left: 5px ;
               color: #007bff;
            }
      :hover{
            color:#1ebbf0;
      }
      :hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
      }
      :after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: #1ebbf0;
            transform-origin: bottom right;
            transition: transform 0.3s ease-out;
      }
`

export const LinkStyl =  styled.a`
            display: flex;
            align-items: center;
            position: relative;
            margin: auto;
            text-decoration: none;
            color:  #007bff;
            
            
            > img {
               padding-left: 5px ;
               color: #007bff;
            }
      :hover{
            color:#1ebbf0;
      }
      :hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
      }
      :after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: #1ebbf0;
            
      }
`