import './chart.scss'
import { AreaChart, Area, XAxis, YAxis,CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { getChartData } from '../../../services/admin-service';







const datas= [
  
];

getChartData()
        .then((data) => {
            if (data.error) {
                console.log(data.error)
            }
            else {
              
              for (var key in data) {
                const jsn={name:key , cases:data[key]}
                datas.push(jsn)
               
            }
            
            
                
            }
        })

const Chart = () => {

  
  const [chart,setChart]=useState([])
  
  useEffect(() => {
  
    getChartData()
        .then((data) => {
            if (data.error) {
                console.log(data.error)
                
  
            }
            else {
             
              setChart(data);
              
              for (var key in chart) {
                const jsn={name:key , uv:chart[key]}
                datas.push(jsn)
               
            }
            
             console.log(datas)
                
            }
        })
  
  },[])

  return (
    <div className='chart'>
      <div className="title"> Covid Cases</div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={datas}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="cases" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart



