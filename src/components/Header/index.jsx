import { useNavigate } from 'react-router-dom';
import * as Styled from './styles'
import { useSelector } from 'react-redux';
import { setName, setCountry, setFlag } from '../../state-management/userSlice';
import { useDispatch } from 'react-redux';
import ReactCountryFlag from "react-country-flag";

export const Header = () =>{
    const navigate = useNavigate();
    const name = useSelector((state) => state.user.name)
    const flag = useSelector((state) => state.user.flag)
    const dispatch = useDispatch();

    const handleClick = () => {

      console.log("lot")
      dispatch(setFlag(null));
      dispatch(setCountry(null));
      dispatch(setName(null))
      navigate('/'); 
    };
    return (
        <Styled.Header>
          <ReactCountryFlag
            style={{
              padding: "1.5rem",
              width: "3em",
              height: "2em",
              alignSelf: "center",
     
            }}
          countryCode={flag} svg />
          <p>Welcome, {name} </p>
       <Styled.button onClick={handleClick}>  &#x21AA;  Logout</Styled.button>
        </Styled.Header>
    )
}