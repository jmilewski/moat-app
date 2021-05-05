import React, { useState, useEffect } from "react";
import axios from 'axios';
import "antd/dist/antd.css";
import { Table } from "antd";

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    }
  ];

function TableWithData(props) {
  
  const [coin, setCoin] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      let qs = '?start=1&limit=20&convert=USD'
      const result = await axios(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest' + qs, {
          headers: { "X-CMC_PRO_API_KEY": 'e14f8f11-49bd-47b1-9c14-39c303b2a68a' }
        }
      );
      var resultData = result.data.data;
      console.log(resultData);
      var resultClean = resultData.map(item => ({
          id: item.id,
          name: item.name,
          symbol: item.symbol,
          price: item.quote['USD'].price
      }));
      console.log(resultClean);
      setCoin(resultClean);
    };
    fetchData();
  }, []);

  return (
    <>
        <div style={{ margin: "auto", marginTop: 32, marginRight: 500 }}>
          {<Table columns={columns} dataSource={coin} />}
        </div>
    </>
  );
}

export default TableWithData;