import React from 'react';
import './UserContentItem.css';
import { Button } from 'antd';
import { SettingOutlined, CheckOutlined } from '@ant-design/icons';

export const UserContentItem = ({items}) => {
    return ( <div className="userContentItemWrapper"> 
    {
        items.map((item, index) => (
            <span className="userContentItem" key={index}>
                <p className="userContentItemInfo">{item.title}</p>
                <p className="userContentItemInfo">{item.category}</p>
                <p className="userContentItemInfo">{item.date}</p>
                <p className="userContentItemInfo">{item.views}</p>
                <CheckOutlined className="userContentItemCheck" />
                <Button className="userContentItemButton" type='default' shape='circle' icon={<SettingOutlined />} />
            </span>
        ))
    } 
    </div>
    );
}
UserContentItem.defaultProps = {
    items: []
}