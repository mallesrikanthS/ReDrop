import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Text,
    Label,LabelList, ResponsiveContainer } from 'recharts';


class BChart extends PureComponent {
    state = {
        data: [
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
        ],
        activeIndex: 0,
        };
    
        handleClick = (data, index) => {
        this.setState({
            activeIndex: index,
        });
        };
    
        render() {
        const { activeIndex, data } = this.state;
        const activeItem = data[activeIndex];
    
        return (
            <div>
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
                <XAxis dataKey="name" stroke='green'>
                <Label value='Pages label' offset={0} position="insideBottom" />
                </XAxis>
                <YAxis stroke='#8884d8' label={{ value: 'pv-uv-amt', angle: -90, position: 'left', textAnchor: 'middle' }} />
                <YAxis yAxisId='left' orientation='right' stroke='red'/>
                <Tooltip separator=' ** ' />            
                <Legend verticalAlign='top' iconType='diamond'height={30}/>
                <Text />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" onClick={this.handleClick} />                       
                <Bar yAxisId='left' dataKey="amt" stackId="a" fill="red" onClick={this.handleClick} />
                <Bar dataKey="uv" fill="#ffc658" onClick={this.handleClick} >
                <LabelList dataKey="uv" position="top" />                
                </Bar>                
            </BarChart>                        
            </ResponsiveContainer>
            <p className="content">{` "${activeItem.name}"- Uv of : ${activeItem.uv} Pv : ${activeItem.pv} amt : ${activeItem.amt} `}</p>
            
            </div>            
        );    
    }
}



export default BChart;
