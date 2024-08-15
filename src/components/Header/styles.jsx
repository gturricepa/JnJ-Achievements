import styled from "styled-components";


export const Header = styled.header`
width:100%;
height: 3rem;
border-bottom: 2px solid transparent;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
display: flex;
justify-content: flex-end;
position: fixed;
top: 0;
background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px); 
  z-index: 5555;
  padding-bottom: 10px;
`
export const button = styled.button`
  all: unset; 
  display: inline;
  cursor: pointer;
  padding: 15px;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;

  &:hover{
    background-color:white;
    border-bottom:1px solid grey;
  }
`

export const Logo = styled.img`

display: flex;
justify-content: center;
align-items: center;
height: 80%;
align-self: flex-end;
margin-right: 52rem;

`