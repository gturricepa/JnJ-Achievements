import styled from "styled-components"
import {} from '../../../../public/svg.png'

export const Holder = styled.div`
  width: 280px;
  min-height: 100px;

  border-radius: 5px;
  box-sizing: border-box; 
  margin-left: 40px; 
  margin-top: 35px;
  margin-bottom: 75px;
  border: 1px solid #061a27c5;
  background: #fefbfb;

box-shadow:  35px 35px 27px #f4f1f1,
             -35px -35px 27px #ffffff;

  &:hover {
    transition: box-shadow 0.2s ease; 
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.3); 
  }
`;

export const Title = styled.div`
display: flex;
padding-left: 15px;
padding-top: 5px;
color:  white;
border-bottom: 1px solid #061a27c5;;
background-color: #061a27c5;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
font-family: "Roboto";
font-size: 1.2rem;

  word-wrap: break-word;

`

export const Value = styled.h2`
display: flex;
justify-content: center;
align-items: center;
color: #061a27c5;
font-size: 2.2rem;
align-items: center;
/* background-image: url('../../../../public/wave (5).svg');
  background-size:   80% 100% ; 
  */
  background-repeat: no-repeat;
`
