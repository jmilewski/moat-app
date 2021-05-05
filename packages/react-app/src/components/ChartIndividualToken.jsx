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

export default function ChartIndividualToken(props) {

  return (
    <LineChart
      width={600}
      height={200}
      data={props.coin}
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