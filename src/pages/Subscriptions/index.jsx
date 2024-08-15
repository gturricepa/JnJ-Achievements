import React from 'react';
import { TwoColumnsCard } from "../../components/Cards/TwoColumnsCard";

export const Subscriptions = ({ data, country }) => {

    const colunsToUseTwoColumnsUSA = ['Driver', 'Pledge', 'Data Privacy Policy',
         'Manager Pledge','MVR Release Form', 'SAFE FLEET Policy Acceptance'];
 
    if (country === 'US') {
        return(
            <>
            {colunsToUseTwoColumnsUSA.map(column => (
                <TwoColumnsCard
                    key={column} //
                    title={column}
                    data={data} 
                />
            ))}
        </>
        )
    }
 

};