import React, { useState, useEffect } from "react";
import axios from 'axios';
import "antd/dist/antd.css";
import { Table } from "antd";

const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Index Price',
      dataIndex: 'price',
      key: 'price',
    }
];

function TableIndexPrice(props) {
  
  
  return (
    <>
        <div style={{ margin: "auto", marginTop: 32, marginRight: 500 }}>
          {<Table columns={columns} dataSource={props.indexPrices} />}
        </div>
    </>
  );
}

export default TableIndexPrice;