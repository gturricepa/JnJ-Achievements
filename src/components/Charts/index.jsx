import React from 'react';
import { TwoColumnsPizza } from './TwoColumnsPizza';
import * as Styled from './styles'


export const Charts = ({ data, country }) => {

    const colunsToUseTwoColumnsUSA = ['Pledge', 'Data Privacy Policy',
         'Manager Pledge','MVR Release Form', 'SAFE FLEET Policy Acceptance'];

            const total = Array.isArray(data) 
            ? data.filter(item => item['Driver'] && item['title'] !== '' && item['title'] !== '-').length
            : 0;



    if (country === 'US') {
        return(
            <Styled.Holder>
            {colunsToUseTwoColumnsUSA.map(column => (
                <TwoColumnsPizza
                    key={column} //
                    title={column}
                    data={data} 
                    total={total}
                />
            ))}
        </Styled.Holder>
        )
    }
 

};