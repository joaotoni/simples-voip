import Banner from "../../../assets/images/banner1.png"
import FirstLink from "../Links/FirstLink"
import { FormStyled, titleStyled, pStyled, imgStyled } from "./style"

export default function First_Banner(){ 
return(
    <div>
        <FormStyled >
            <div>
                <h2></h2>
                <p></p>
                <FirstLink texto= "whats" redirect  = "/whats"/>
            </div>
            <div>
                <img src={Banner} alt="" width={"500px"} height={"457px"}/>
            </div>
        </FormStyled>
    </div>
)
}