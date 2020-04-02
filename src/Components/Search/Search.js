import React, { useState } from 'react';
import { Tooltip, Button, Input } from 'antd';
import { SearchOutlined,CloseOutlined, CheckCircleTwoTone }from '@ant-design/icons';
import "./Search.css"
export const Search = ({onChange, submitHandler}) => {
  const [open, setOpen] = useState(false);


  return(
    <div>
      {open === false ? 
      <Tooltip title="Search">
        <Button type="default" shape="circle" icon={<SearchOutlined />} onClick={(e) => setOpen(true)} />
      </Tooltip>:
      <div style={{display: 'flex'}}>
        <Input placeholder="Введите название статьи" style={{width: 500, marginRight: 20}} onChange={onChange}/>
        <CheckCircleTwoTone twoToneColor="#52c41a" onClick={submitHandler}/>
        <Button type="default" shape="circle" style={{marginLeft: 20}} icon={<CloseOutlined />} onClick={(e) => setOpen(false)}/>
      </div>}
    </div>
  )
}