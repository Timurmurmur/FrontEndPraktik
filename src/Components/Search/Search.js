import React, { useState } from 'react';
import { Tooltip, Button, Input } from 'antd';
import { SearchOutlined,CloseOutlined } from '@ant-design/icons';

export const Search = () => {
  const [open, setOpen] = useState(false);


  return(
    <div>
      {open === false ? 
      <Tooltip title="Search">
        <Button type="default" shape="circle" icon={<SearchOutlined />} onClick={(e) => setOpen(true)} />
      </Tooltip>:
      <div>
        <Input placeholder="Введите название статьи" style={{width: 500, marginRight: 20}}/>
        <Button type="default" shape="circle" icon={<CloseOutlined />} onClick={(e) => setOpen(false)}/>
      </div>}
    </div>
  )
}