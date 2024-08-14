import { Navigate, useNavigate } from 'react-router-dom'
import * as Styled from './styles'
export const NotFound = () =>{
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/home')
    }
    return (
        <Styled.Holder>
            <h2>Page not found...</h2>
            <Styled.Btn onClick={handleClick}>Back to home</Styled.Btn>
        </Styled.Holder>
    )
}