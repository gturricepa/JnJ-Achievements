    import * as Styled from './styles'

    export const TwoColumnsCard = ({title, data}) =>{
        const count = Array.isArray(data) 
        ? data.filter(item => item[title] && item[title] !== '' && item[title] !== '-').length
        : 0;


            return(
                <Styled.Holder>
                    <Styled.Title>{title.toUpperCase()}</Styled.Title>
                    <Styled.Value>{count}
                </Styled.Value>
                    </Styled.Holder>
            )

       

    }