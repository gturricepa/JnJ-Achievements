import {styled, keyframes}from 'styled-components'

export const Holder2Lines = styled.main`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


export const HolderTwoColluns = styled.section`
width: 100%;
display: flex;

justify-content: center;
align-items: center;
`

export const Left = styled.main`
width: 60%;
display: flex;
justify-content: center;
align-items: center;
`

export const Right = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.005);
  }
  100% {
    transform: scale(1);
  }
`;

export const WorldImg = styled.img`
width: 100%;
height: 60%;
animation: ${scaleAnimation} 3s infinite;

`
export const Logo = styled.img`
width: 400px;
height: 50px;
margin-bottom: 25px;
align-items: flex-end;

margin-right: 250px;
align-self:self-end;
`
