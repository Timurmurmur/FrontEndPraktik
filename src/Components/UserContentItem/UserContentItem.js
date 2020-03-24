import React from 'react';
import './UserContentItem.css';
import { Button, Tooltip } from 'antd';
import { SettingOutlined, CheckOutlined } from '@ant-design/icons';
import { Link, goForward, go } from 'redux-little-router';
import { useDispatch } from 'react-redux';

export const UserContentItem = ({items, admin}) => {
    const dispatch = useDispatch();

    const goToCurrentArticle = (id) => {
        dispatch({ type:"ROUTER_PUSH", payload: {pathname: `/current/${id}`, query: {admin: admin }}})
    }

    return ( 
    <table className="userContentItemWrapper" cellPadding={15} cellSpacing={10}> 
        <tr className="userContentInfo">
            <td className="userContentInfoItems">Название статьи</td>
            <td className="userContentInfoItems">Категория</td>
            <td className="userContentInfoItems">Дата публикации</td>
            <td className="userContentInfoItems">Количество просмотров</td>
        </tr>
        {
            items.map((item, index) => (
                    <tr className="userContentItem" onClick={(e) => goToCurrentArticle(item.id)} key={index}>
                        {/* <Link href={{pathname: `/current/${item.id}`}} key={index}> */}
                        <td className="userContentItemInfo">{item.title}</td>
                        <td className="userContentItemInfo">{item.category}</td>
                        <td className="userContentItemInfo">{item.date}</td>
                        <td className="userContentItemInfo">{item.views}</td>
                        {admin ? 
                            <>
                                <td><Tooltip title={"Опубликовано"}><CheckOutlined className="userContentItemCheck" /></Tooltip></td>
                                <td><Button className="userContentItemButton" type='default' shape='circle' icon={<SettingOutlined />} /></td>
                            </> 
                        : ''}
                    </tr>
            ))
        } 
    </table>
    );
}
UserContentItem.defaultProps = {
    items: []
}