import styled, { css, keyframes } from 'styled-components';

export const Holder = styled.main`
  display: flex;
`;

export const Master = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  box-sizing: border-box;
  padding-left: 35px;
  padding-top: 45px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  padding-top: 60px;
`;

export const ComponentHolderTab = styled.div`
  justify-content: space-evenly;
  display: flex;
  width: 100%;
  height: 15px;
  padding: 5px;
  height: 2.5rem;
`;

export const LeftComponent = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  box-sizing: border-box;
  border-bottom: ${props => props.active ? '2.5px solid gray' : 'none'};
  color: ${props => props.active ? 'inherit' : 'lightgray'};
  padding: 5px;
  height: 2.2rem;
  box-sizing: border-box;
  font-family: "Roboto";
  cursor: pointer;

  &:hover {
 
    border-bottom: ${props => props.active ? '2.5px solid gray' : '2.5px solid lightgray'};
    box-sizing: border-box;
    padding: 5px;
    font-family: "Roboto";
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border: 5px solid darkgrey;
  border-right: 5px solid transparent; 
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  
  align-self: center;
`;


//----------
export const Actions = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

`;
