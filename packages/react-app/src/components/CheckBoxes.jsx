import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import '../index.css';
import {
  Form,
  Select,
  InputNumber,
  Input,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';
import { Group } from "antd/lib/avatar";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const createTokenSetMetamask = function(components, units, manager, name, symbol) {
  const { ethers } = require("ethers");

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  const setTokenCreatorAddress = "0xB24F7367ee8efcB5EAbe4491B42fA222EC68d411";
  const setTokenCreatorABI = [ { "inputs": [ { "internalType": "contract IController", "name": "_controller", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "_setToken", "type": "address" }, { "indexed": false, "internalType": "address", "name": "_manager", "type": "address" }, { "indexed": false, "internalType": "string", "name": "_name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "_symbol", "type": "string" } ], "name": "SetTokenCreated", "type": "event" }, { "inputs": [], "name": "controller", "outputs": [ { "internalType": "contract IController", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "_components", "type": "address[]" }, { "internalType": "int256[]", "name": "_units", "type": "int256[]" }, { "internalType": "address[]", "name": "_modules", "type": "address[]" }, { "internalType": "address", "name": "_manager", "type": "address" }, { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" } ], "name": "create", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "nonpayable", "type": "function" } ];

  const setTokenContract = new ethers.Contract(setTokenCreatorAddress, setTokenCreatorABI, signer);

  const components = components;
  const units = units;
  const modules = ["0x8a070235a4B9b477655Bf4Eb65a1dB81051B3cC1", "0x5dB52450a8C0eb5e0B777D4e08d7A93dA5a9c848"];
  const manager = manager;
  const name = name;
  const symbol = symbol;

  setTokenContract.create(components, units, modules, manager, name, symbol)
    .then(function(result) {
      console.log(result.hash);
  });

}

export default function CheckBoxes(props) {
  
  const [ formData, setFormData ] = useState()

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    fetch('http://127.0.0.1:5000/hello', {

      headers: {
          'Content-Type': 'application/json'
      },

      method: 'POST',

      body: JSON.stringify(values)
  })
      .then(function (response) {
          return response.text();
      })
      .then(function (text) {

          console.log('POST response: ');

          console.log(text);
      });
    createTokenSetMetamask(values.checkbox-group, allocations, props.address, values.input-text1, values.input-text2);  
    setFormData(values);
  };


  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': [],
        rate: 3.5,
      }}
    >
      <Form.Item name="input-text1" label="Token Fund Name">
          <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="input-text2" label="Token Fund Symbol">
          <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="checkbox-group" label="Asset Selection">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox
                value="ETH"
                style={{
                  lineHeight: '32px',
                }}
              >
                ETH
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="MKR"
                style={{
                  lineHeight: '32px',
                }}
              >
                MKR
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="UNI"
                style={{
                  lineHeight: '32px',
                }}
              >
                UNI
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="YFI"
                style={{
                  lineHeight: '32px',
                }}
              >
                YFI
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="SUSHI"
                style={{
                  lineHeight: '32px',
                }}
              >
                SUSHI
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="BAL"
                style={{
                  lineHeight: '32px',
                }}
              >
                BAL
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item name="input-num" label="Amount to invest:">
          <InputNumber placeholder="0" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Create Token
        </Button>
      </Form.Item>
    </Form>


  );
};
