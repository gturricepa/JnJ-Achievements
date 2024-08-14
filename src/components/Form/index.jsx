import React from 'react';
import * as Styled from './styles';
import { Autocomplete, TextField } from '@mui/material';

export const Form = () => {
    // Estado para o valor do Autocomplete
    const [autocompleteValue, setAutocompleteValue] = React.useState(null);

    // Estados para os valores dos campos de entrada
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    // Opções para o Autocomplete
    const options = ['United States of America'];

    // Manipuladores de eventos para os campos de entrada
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

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
            <Styled.BtnLogin>Login</Styled.BtnLogin>

            <Styled.AutoComplete>
            <Autocomplete
                value={autocompleteValue}
                onChange={(event, newValue) => setAutocompleteValue(newValue)}
                options={options}
                renderInput={(params) => <TextField {...params} label="Country" />}
            />
            </Styled.AutoComplete>
        </Styled.Holder>
    );
};
