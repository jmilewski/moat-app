/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from "react";
import axios from 'axios';
import "antd/dist/antd.css";
import { Button, Typography, Table, Tag, Space, Input } from "antd";
import { useQuery, gql } from '@apollo/client';
import { Address } from "../components";
import fetch from 'isomorphic-fetch';
import DeFiPulseChart from "../components/DeFiPulseChart";
import ChartWithData from "../components/ChartWithData";
import CheckBoxes from "../components/CheckBoxes";
import { formatEther } from "@ethersproject/units";
import { SelectOutlined } from "@ant-design/icons";
import TableIndexPrice from "../components/TableIndexPrice";
import ChartIndividualToken from "../components/ChartIndividualToken";

  const highlight = { marginLeft: 4, marginRight: 8, /*backgroundColor: "#f9f9f9",*/ padding: 4, borderRadius: 4, fontWeight: "bolder" }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Quantity per token',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Value per token',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Allocation',
      dataIndex: 'allocation',
      key: 'allocation',
    },
    {
      title: '24hr change',
      dataIndex: 'change',
      key: 'change',
    },
  ];

function DeFiPulse(props) {
  
  const [holdings, setHoldings] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      let qs = '?symbol=UNI,MKR,AAVE,SNX,COMP'
      const result = await axios(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest' + qs, {
          headers: { "X-CMC_PRO_API_KEY": 'e14f8f11-49bd-47b1-9c14-39c303b2a68a' }
        }
      );
      console.log(result.data.data);

      var tokenSymbols = ['AAVE', 'COMP', 'MKR', 'SNX', 'UNI'];

      var currentIndexPrice = 140.00;

      var holdingsData = [];

      tokenSymbols.forEach(item => (holdingsData.push({
        name: item,
        quantity: ((1/result.data.data[item].quote['USD'].price)*(currentIndexPrice*(result.data.data[item].quote['USD'].market_cap/(result.data.data['AAVE'].quote['USD'].market_cap+result.data.data['COMP'].quote['USD'].market_cap+result.data.data['MKR'].quote['USD'].market_cap+result.data.data['SNX'].quote['USD'].market_cap+result.data.data['UNI'].quote['USD'].market_cap)))).toFixed(6),
        value: (currentIndexPrice*(result.data.data[item].quote['USD'].market_cap/(result.data.data['AAVE'].quote['USD'].market_cap+result.data.data['COMP'].quote['USD'].market_cap+result.data.data['MKR'].quote['USD'].market_cap+result.data.data['SNX'].quote['USD'].market_cap+result.data.data['UNI'].quote['USD'].market_cap))).toFixed(2),
        allocation: (result.data.data[item].quote['USD'].market_cap/(result.data.data['AAVE'].quote['USD'].market_cap+result.data.data['COMP'].quote['USD'].market_cap+result.data.data['MKR'].quote['USD'].market_cap+result.data.data['SNX'].quote['USD'].market_cap+result.data.data['UNI'].quote['USD'].market_cap)).toFixed(2),
        change: (result.data.data[item].quote['USD'].percent_change_24h).toFixed(2),
      })));

      console.log(holdingsData);
      setHoldings(holdingsData);

    };
    fetchData();
  }, []);

  let tryComp = (props.componentsDeFiPulse) ? props.componentsDeFiPulse : ["Loading"];
  var arrComponentsDeFiPulse = [];
  for (let i = 0; i < tryComp.length; i++) {
      //console.log(tryComp[i]);
      arrComponentsDeFiPulse.push({ name: tryComp[i] });
  }
  console.log(arrComponentsDeFiPulse);

  return (
      <>
        <div style={{ marginLeft: 32 }}>
          <div style={{ textAlign: "left", margin: "auto", marginTop: 32 }}>
            <h1>Blue Crypts Index Fund (MBCI)</h1>
          </div>
          {/* <div style={{ margin: "auto", marginTop: 32 }}>
            {<DeFiPulseChart />}
          </div> */}
          <div style={{ textAlign: "left", margin: "auto", marginTop: 32 }}>
            Weekly Performance Chart
          </div>
          <div style={{ margin: "auto", marginTop: 32 }}>
            {<ChartIndividualToken coin={props.indexPrices} />}
          </div>
          {/* <div style={{ margin: "auto", marginTop: 32, marginRight: 500 }}>
            {<Table columns={columns} dataSource={arrComponentsDeFiPulse} />}
          </div> */}
          <div style={{ textAlign: "left", margin: "auto", marginTop: 32 }}>
            The Moat Blue Crypts Index Fund is a concentrated portfolio of top protocols in the DeFi space.
            The index is caluclated using market cap weights. 
          </div>
          <div style={{ textAlign: "left", margin: "auto", marginTop: 32 }}>
            Holdings:
          </div>
          <div style={{ margin: "auto", marginTop: 32, marginRight: 500 }}>
            {<Table columns={columns} dataSource={holdings} />}
          </div>
          {/* <div style={{ margin: "auto", marginTop: 32 }}>
            Components: {arrComponentsDeFiPulse[0].name}
          </div> */}
          {/* <div style={{ margin: "auto", marginTop: 32 }}>
            {<CheckBoxes />}
          </div> */}
          <div style={{ textAlign: "left", margin: "auto", marginTop: 32 }}>
            Weekly Index Price:
          </div>
          <div style={{ margin: "auto", marginTop: 32 }}>
            {<TableIndexPrice indexPrices={props.indexPrices}/>}
          </div>
          <div style={{ margin: "auto", marginTop: 32 }}>
            Balance: {formatEther(props.yourLocalBalance?props.yourLocalBalance:0)}
          </div>
          <div style={{padding:64}}>
          ...
          </div>
        </div>
      </>
  );
}

export default DeFiPulse;







/* ReactDOM.render(<Table columns={columns} dataSource={data} />, mountNode);*/ 