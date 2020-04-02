import React from 'react';
import './UserContentItem.css';
import { Button, Tooltip } from 'antd';
import { SettingOutlined, CheckOutlined } from '@ant-design/icons';
import { Link, goForward, go } from 'redux-little-router';
import { useDispatch } from 'react-redux';

export const UserContentItem = ({items, admin}) => {
    const dispatch = useDispatch();

    const goToCurrentArticle = (id, post) => {
        dispatch({ type:"ROUTER_PUSH", payload: {pathname: `/article/${id}`}})
    }

    return ( 
    <table className="userContentItemWrapper" cellPadding={15} cellSpacing={10}> 
        <thead>
            <tr className="userContentInfo">
                <td className="userContentInfoItems">Название статьи</td>
                <td className="userContentInfoItems">Категория</td>
                <td className="userContentInfoItems">Дата публикации</td>
                <td className="userContentInfoItems">Количество просмотров</td>
            </tr>
        </thead>
        <tbody>
        {
            items.map((item, index) => (
                    <tr className="userContentItem" onClick={(e) => goToCurrentArticle(item.id, item)} key={index}>
                        {/* <Link href={{pathname: `/current/${item.id}`}} key={index}> */}
                        <td className="userContentItemInfo">{item.title}</td>
                        <td className="userContentItemInfo">{'IT'}</td>
                        <td className="userContentItemInfo">{item.createdAt.split('T')[0]}</td>
                        <td className="userContentItemInfo">{'100'}</td>
                        {admin ? 
                            <>
                                <td><Tooltip title={"Опубликовано"}><CheckOutlined className="userContentItemCheck" /></Tooltip></td>
                                <td><Button className="userContentItemButton" type='default' shape='circle' icon={<SettingOutlined />} /></td>
                            </> 
                        : ''}
                    </tr>
            ))
        } 
        </tbody>
    </table>
    );
}
UserContentItem.defaultProps = {
    items: []
}