import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function DeFiPulseChart() {

  const [coin, setCoin] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      let qs = '?id=1,1027'
      const result = await axios(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/historical' + qs, {
          headers: { "X-CMC_PRO_API_KEY": 'e14f8f11-49bd-47b1-9c14-39c303b2a68a' }
        }
      );
      var resultData = result.data.data;
      var bitcoinData = result.data.data[1].quotes;
      var etherData = result.data.data[1027].quotes;
      console.log(resultData);
      console.log(bitcoinData);
      console.log(etherData);
      var resultClean = etherData.map(item => ({
          name: " ",
          price: item.quote['USD'].price
      }));
      console.log(resultClean);
      setCoin(resultClean);
    };
    fetchData();
  }, []);


  return (
    <LineChart
      width={600}
      height={200}
      data={coin}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" /> */}
      <YAxis 
        hide={true}
        axisLine={false} 
        tickLine={false}
        domain={['auto', 'auto']} 
      />
      <Tooltip position={{ x: 1, y: 155 }} actve={true} contentStyle={{
		backgroundColor: 'transparent',
		opacity: '1',
		border: '0px solid black',
		borderRadius: '15px',			
		paddingLeft:'10px',
		paddingRight:'10px'
	  }} 
      wrapperStyle={{
		backgroundColor: 'transparent',
		opacity: '1',
		border: '0px transparent',
		borderRadius: '15px',			
		paddingLeft:'10px',
		paddingRight:'10px'
	  }}
      />
      <Line
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        isAnimationActive={false}
      />
    </LineChart>
  );
}
