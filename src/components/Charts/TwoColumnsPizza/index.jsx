import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import * as Styled from './styles';

export const TwoColumnsPizza = ({ title, data, total }) => {
    // Contagem de registros completos
    const count = Array.isArray(data)
        ? data.filter(item => item[title] && item[title] !== '' && item[title] !== '-').length
        : 0;

    // Dados para o gráfico
    const chartData = [
        { name: 'Complete', value: count },
        { name: 'Missing', value: total - count }
    ];

    // Define as cores para as partes do gráfico
    const COLORS = ['#00C49F', '#8884d8', '#00C49F', '#FF6347', '#6A5ACD'];

    return (

        <Styled.Pizza>
            <Styled.Title>{title}</Styled.Title>
            <ResponsiveContainer width="50%" height={300}>
                <PieChart>
                            <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                       
                        fill="#8884d8"
                        dataKey="value"
                        labelLine={false}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </Styled.Pizza>

    );
};
