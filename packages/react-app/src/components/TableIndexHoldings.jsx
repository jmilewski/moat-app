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

function TableIndexHoldings(props) {
  
  return (
    <>
        <div style={{ margin: "auto", marginTop: 32, marginRight: 500 }}>
          {<Table columns={columns} dataSource={coin} />}
        </div>
    </>
  );
}

export default TableIndexHoldings;