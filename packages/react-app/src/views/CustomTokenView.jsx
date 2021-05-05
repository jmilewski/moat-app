/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Typography, Table, Tag, Space, Input } from "antd";
import { useQuery, gql } from '@apollo/client';
import { Address } from "../components";
import fetch from 'isomorphic-fetch';
import DeFiPulseChart from "../components/DeFiPulseChart";
import CheckBoxes from "../components/CheckBoxes";
import TableWithData from "../components/TableWithData";
import ChartWithData from "../components/ChartWithData";
import ChartIndexData from "../components/ChartIndexData";
import ChartIndividualToken from "../components/ChartIndividualToken";
import TableIndexPrice from "../components/TableIndexPrice";
import { formatEther } from "@ethersproject/units";

  const highlight = { marginLeft: 4, marginRight: 8, /*backgroundColor: "#f9f9f9",*/ padding: 4, borderRadius: 4, fontWeight: "bolder" }


function CustomTokenView(props) {
  
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
            Custom index based on modern portfolio theory. Select a basket of tokens and the amount you're wanting to invest. Moat will build an optimized token fund.
          </div>
          {/* <div style={{ textAlign: "left", margin: "auto", marginTop: 32 }}>
            Components: {arrComponentsDeFiPulse[0].name}
          </div> */}
          <div style={{ margin: "auto", marginTop: 32 }}>
            {<CheckBoxes address={props.address} />}
          </div>
          {/* <div style={{ margin: "auto", marginTop: 32 }}>
            {<TableWithData />}
          </div>
          <div style={{ margin: "auto", marginTop: 32 }}>
            {<ChartWithData />}
          </div>
          <div style={{ margin: "auto", marginTop: 32 }}>
            {<ChartIndexData />}
          </div>
          <div style={{ margin: "auto", marginTop: 32 }}>
            {<ChartIndividualToken coin={props.coinUNI} />}
          </div>
          <div style={{ margin: "auto", marginTop: 32 }}>
            {<ChartIndividualToken coin={props.coinMKR} />}
          </div>
          <div style={{ margin: "auto", marginTop: 32 }}>
            {<ChartIndividualToken coin={props.coinAAVE} />}
          </div>
          <div style={{ margin: "auto", marginTop: 32 }}>
            {<ChartIndividualToken coin={props.coinSNX} />}
          </div>
          <div style={{ margin: "auto", marginTop: 32 }}>
            {<ChartIndividualToken coin={props.coinCOMP} />}
          </div>
          <div style={{ margin: "auto", marginTop: 32 }}>
            {<TableIndexPrice indexPrices={props.indexPrices}/>}
          </div> */}
          <div style={{padding:64}}>
          ...
          </div>
        </div>
      </>
  );
}

export default CustomTokenView;