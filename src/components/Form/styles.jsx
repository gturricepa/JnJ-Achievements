import styled from "styled-components";


export const Holder = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

width: 100%;
height: 400px;
`

export const Input = styled.input`
width: 80%;
height: 3rem;
border: 1px solid #333333;
border-radius: 5px;
font-family: 'Roboto';
padding: 8px;
box-sizing: border-box; 

&::placeholder {
    font-family: 'Roboto';
 
    font-size: "1rem"
  }

`

export const BtnLogin = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
height: 3rem;
border: 1px solid #333333;
border-radius: 5px;
margin-top: 25px;



cursor: pointer;
&:hover{
    background-color: #333333;
    color: white;
}
`

export const AutoComplete = styled.div`
width: 80%;
height: 35px;
`

export const Name = styled.h1`
color: #333333;
`