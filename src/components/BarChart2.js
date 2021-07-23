import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Text,
    ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function BChart() {
    return (
        <ResponsiveContainer width="100%" aspect= {2}>
        <BarChart        
            width= {400}            
            height={200}
            data={data}
            margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />            
            <YAxis />
            <Tooltip />
            <Legend verticalAlign='top' iconType='star'height={30}/>
            <Text />
            <Bar dataKey="pv" stackId="a" fill="green" />                       
            <Bar dataKey="amt" stackId="a" fill="red" />
            <Bar dataKey="uv" fill="#ffc658" background={{ fill: "#eee" }}/>            
        </BarChart>
        </ResponsiveContainer>
    );    
}

export default BChart;
