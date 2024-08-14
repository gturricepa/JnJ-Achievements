import React from 'react';
import * as Styled from './styles';
import { Autocomplete, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setName, setCountry, setFlag } from '../../state-management/userSlice';
import { useDispatch } from 'react-redux';


export const Form = () => {
    const [autocompleteValue, setAutocompleteValue] = React.useState(null);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');
    const options = ['United States of America', 'Canada'];


    const selectFlag = (value) => {
        console.log(value)
      if(value === "United States of America"){
        return "US"
      }
    }


    console.log(autocompleteValue)
    const navigate = useNavigate(); 
    const dispatch = useDispatch(); 
  

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const handleLogin =  async (event) =>{
        event.preventDefault();
        event.preventDefault();
    try {
      const response = await fetch('../../../public/data/access/access.json');
      const data  = await response.json();
      
      const user = data.users.find(user => user.username === username && user.password === password);
        
      if (user && autocompleteValue) {
        dispatch(setName(user.name));
        dispatch(setCountry(autocompleteValue))
        dispatch(setFlag(selectFlag(autocompleteValue)))
        navigate('/home');
      } else {
        setMessage('Wrong User/Pass or Country');
      }
    } catch (error) {
        console.log(error)
      setMessage('Fail to load data', error);
    } 
    }


    return (
        <Styled.Holder>
            <Styled.Name>JnJ Achievement Metrics</Styled.Name>
            <Styled.Input
                type="text"
                placeholder=" Username"
                value={username}
                onChange={handleUsernameChange}
            />

            <Styled.Input
                type="password"
                placeholder=" Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <Styled.BtnLogin onClick={handleLogin}>Login</Styled.BtnLogin>

            <Styled.AutoComplete>
            <Autocomplete
                value={autocompleteValue}
                onChange={(event, newValue) => setAutocompleteValue(newValue)}
                options={options}
                renderInput={(params) => <TextField {...params} label="Country" />}
            />
            </Styled.AutoComplete>
            <p>{message}</p>
        </Styled.Holder>
    );
};
