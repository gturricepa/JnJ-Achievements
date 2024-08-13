import React from "react"
import * as Styled from './styled' 
import world from "../../assets/world.png";
import logo from "../../assets/logo.png";

import { Form } from "../Form";
export const Login = () =>{
    return (
        <Styled.Holder2Lines>
            <Styled.Logo src={logo} alt="Logo" />
            <Styled.HolderTwoColluns>
                <Styled.Left>

                    <Form></Form>
                </Styled.Left>
                <Styled.Right> 
                    <Styled.WorldImg src={world} alt="World" />
                </Styled.Right>
           </Styled.HolderTwoColluns>
        </Styled.Holder2Lines>

    )
}