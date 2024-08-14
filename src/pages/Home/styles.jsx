import styled from "styled-components";

export const Master = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  box-sizing: border-box;
  position: fixed;
  top: 0; 
  left: 0;
  height: 100vh; 
  padding: 35px;
background-color: red;
  overflow-y: auto; 
  z-index: 1000; 
  margin-top: 35px;
`;

export const Title = styled.h3`
  margin-right: 5px;
`;

export const LabelHolderRadio = styled.div`

  display: flex;
`;

//--------------------------------------

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin-left: 20%; 
  height: 100vh; 
  padding: 15px;
  box-sizing: border-box;
`;

export const LabelHolder = styled.div`

`;

export const LabelHolderCheck = styled.div`

`;
