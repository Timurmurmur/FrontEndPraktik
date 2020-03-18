import React from 'react';
import './UserContentItem.css';
import { Button } from 'antd';
import { SettingOutlined, CheckOutlined } from '@ant-design/icons';

export const UserContentItem = ({items}) => {
    return ( <table className="userContentItemWrapper" cellPadding={15} cellSpacing={10}> 
    <tr className="userContentInfo">
        <td className="userContentInfoItems">Название статьи</td>
        <td className="userContentInfoItems">Категория</td>
        <td className="userContentInfoItems">Дата публикации</td>
        <td className="userContentInfoItems">Количество просмотров</td>
    </tr>
    {
        items.map((item, index) => (
            <tr className="userContentItem" key={index}>
                <td className="userContentItemInfo">{item.title}</td>
                <td className="userContentItemInfo">{item.category}</td>
                <td className="userContentItemInfo">{item.date}</td>
                <td className="userContentItemInfo">{item.views}</td>
                <td><CheckOutlined className="userContentItemCheck" /></td>
                <td><Button className="userContentItemButton" type='default' shape='circle' icon={<SettingOutlined />} /></td>
            </tr>
        ))
    } 
    </table>
    );
}
UserContentItem.defaultProps = {
    items: []
}