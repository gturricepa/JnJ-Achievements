import styled from "styled-components";

export const Holder = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
margin-top: 50px;
`

export const Btn = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #333333;
border-radius: 5px;

font-family: "Roboto";
height: 50px;
width: 200px;
cursor: pointer;
&:hover{
    background-color: #333333;
    color: white;}
`
