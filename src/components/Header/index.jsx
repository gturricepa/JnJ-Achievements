import { useNavigate } from 'react-router-dom';
import * as Styled from './styles'
import { useSelector } from 'react-redux';
import { setName, setCountry } from '../../state-management/userSlice';
import { useDispatch } from 'react-redux';

export const Header = () =>{
    const navigate = useNavigate();
    const name = useSelector((state) => state.user.name)
    const dispatch = useDispatch();

    const handleClick = () => {
      navigate('/'); 
      dispatch(setCountry(null));
      dispatch(setName(null))
    };
    return (
        <Styled.Header>
          <p>Welcome, {name} </p>
       <Styled.button onClick={handleClick}>  &#x21AA;  Logout</Styled.button>
        </Styled.Header>
    )
}