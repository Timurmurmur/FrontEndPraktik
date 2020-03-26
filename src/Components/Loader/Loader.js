import React from 'react';
import {Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons'

export const Loader = () => {
  return (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',width: '100vw',backgroundColor: '#fff', position: 'absolute', top: 0, left: 0}}><Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/></div>);
}