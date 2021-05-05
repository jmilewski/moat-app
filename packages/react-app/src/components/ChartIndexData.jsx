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


export default function ChartIndexData() {


  useEffect(() => {
    const tokenSymbols = ['AAVE', 'COMP', 'MKR', 'SNX', 'UNI'];
    const fetchListingsHistorical = async () => {
        let qs = '?symbol=UNI,MKR,AAVE,SNX,COMP&interval=weekly'
        const result = await axios(
          'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/historical' + qs, {
            headers: { "X-CMC_PRO_API_KEY": 'e14f8f11-49bd-47b1-9c14-39c303b2a68a' }
          }
        );
        var resultData = result.data.data;
        console.log(resultData);
    }
    fetchListingsHistorical();
    // const computeIndexOverTime = () => {
    //   tokenSymbols.forEach(item => {
    //       let quotes = resultData[item].quotes;
    //       quotes.forEach(item2 => {
    //         let  = item2.timestamp;
    //         let price = item2.quote['USD'].price;

    //       })
    //   })
    // }
  }, []);



  const [coinUNI, setCoinUNI] = useState([]);
  const [coinMKR, setCoinMKR] = useState([]);
  const [coinAAVE, setCoinAAVE] = useState([]);
  const [coinSNX, setCoinSNX] = useState([]);
  const [coinCOMP, setCoinCOMP] = useState([]);
  
  useEffect(() => {
    const fetchIndividualTokenChartData = async () => {
      let qs = '?symbol=UNI,MKR,AAVE,SNX,COMP&interval=weekly'
      const result = await axios(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/historical' + qs, {
          headers: { "X-CMC_PRO_API_KEY": 'e14f8f11-49bd-47b1-9c14-39c303b2a68a' }
        }
      );
      var resultData = result.data.data;
      var quotesUNI = result.data.data["UNI"].quotes;
      var quotesMKR = result.data.data["MKR"].quotes;
      var quotesAAVE = result.data.data["AAVE"].quotes;
      var quotesSNX = result.data.data["SNX"].quotes;
      var quotesCOMP = result.data.data["COMP"].quotes;
      console.log(resultData);
      console.log(quotesUNI);
      console.log(quotesMKR);
      console.log(quotesAAVE);
      console.log(quotesSNX);
      console.log(quotesCOMP);

      var cleanUNI = quotesUNI.map(item => ({
          name: "UNI",
          price: item.quote['USD'].price
      }));
      console.log(cleanUNI);
      setCoinUNI(cleanUNI);

      var cleanMKR = quotesMKR.map(item => ({
        name: "MKR",
        price: item.quote['USD'].price
      }));
      console.log(cleanMKR);
      setCoinMKR(cleanMKR);

      var cleanAAVE = quotesAAVE.map(item => ({
        name: "AAVE",
        price: item.quote['USD'].price
      }));
      console.log(cleanAAVE);
      setCoinAAVE(cleanAAVE);

      var cleanSNX = quotesSNX.map(item => ({
        name: "SNX",
        price: item.quote['USD'].price
      }));
      console.log(cleanSNX);
      setCoinSNX(cleanSNX);

      var cleanCOMP = quotesCOMP.map(item => ({
        name: "COMP",
        price: item.quote['USD'].price
      }));
      console.log(cleanCOMP);
      setCoinCOMP(cleanCOMP);

    };
    fetchIndividualTokenChartData();
  }, []);

// Token CMC IDs:
// UNI: 7083
// MKR: 1518
// AAVE: 7278
// SNX: 2586
// COMP: 5692

  const [supplyUNI, setSupplyUNI] = useState([]);

  useEffect(() => {
    const computeIndexValue = async () => {
      const result = await axios(
          'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: { "X-CMC_PRO_API_KEY": 'e14f8f11-49bd-47b1-9c14-39c303b2a68a' }
          }
      );
      var resultData = result.data.data;
      console.log(resultData);
      var circulatingSupplyUNI;
      var circulatingSupplyMKR;
      var circulatingSupplyAAVE;
      var circulatingSupplySNX;
      var circulatingSupplyCOMP;
      var priceUNI;
      var priceMKR;
      var priceAAVE;
      var priceSNX;
      var priceCOMP;

      const getCirculatingSupplyUNI = () => {
        var objectUNI = resultData.filter(obj => { return obj.id === 7083 });
        circulatingSupplyUNI = objectUNI[0].circulating_supply;
        priceUNI = objectUNI[0].quote['USD'].price;
      }
      getCirculatingSupplyUNI();
      console.log("Supply: " + circulatingSupplyUNI + " | " + "Price: " + priceUNI);

      const getCirculatingSupplyMKR = () => {
        var objectMKR = resultData.filter(obj => { return obj.id === 1518 });
        circulatingSupplyMKR = objectMKR[0].circulating_supply;
        priceMKR = objectMKR[0].quote['USD'].price;
      }
      getCirculatingSupplyMKR();
      console.log("Supply: " + circulatingSupplyMKR + " | " + "Price: " + priceMKR);

      const getCirculatingSupplyAAVE = () => {
        var objectAAVE = resultData.filter(obj => { return obj.id === 7278 });
        circulatingSupplyAAVE = objectAAVE[0].circulating_supply;
        priceAAVE = objectAAVE[0].quote['USD'].price;
      }
      getCirculatingSupplyAAVE();
      console.log("Supply: " + circulatingSupplyAAVE + " | " + "Price: " + priceAAVE);

      const getCirculatingSupplySNX = () => {
        var objectSNX = resultData.filter(obj => { return obj.id === 2586 });
        circulatingSupplySNX = objectSNX[0].circulating_supply;
        priceSNX = objectSNX[0].quote['USD'].price;
      }
      getCirculatingSupplySNX();
      console.log("Supply: " + circulatingSupplySNX + " | " + "Price: " + priceSNX);

      const getCirculatingSupplyCOMP = () => {
        var objectCOMP = resultData.filter(obj => { return obj.id === 5692 });
        circulatingSupplyCOMP = objectCOMP[0].circulating_supply;
        priceCOMP = objectCOMP[0].quote['USD'].price;
      }
      getCirculatingSupplyCOMP();
      console.log("Supply: " + circulatingSupplyCOMP + " | " + "Price: " + priceCOMP);

      var indexValue = ((circulatingSupplyUNI*priceUNI)+(circulatingSupplyMKR*priceMKR)+(circulatingSupplyAAVE*priceAAVE)+(circulatingSupplySNX*priceSNX)+(circulatingSupplyCOMP*priceCOMP))/300000000;
      console.log(indexValue);

      

    };
    computeIndexValue();
  }, []);


  return (
    <LineChart
      width={600}
      height={200}
      data={coinUNI}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
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
