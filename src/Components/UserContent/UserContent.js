import React from 'react';
import './UserContent.css';

import {SettingMenu} from '../SettingMenu/SettingMenu';
import {UserContentItem} from '../UserContentItem/UserContentItem';
import { Button } from 'antd';
import { Link } from 'redux-little-router';

export const UserContent = ({ items, admin }) => {
    return (
        <div className="userContentWrapper">
            <SettingMenu/>
            <div className="articleMenu">
                <span className="articleID">Ваши статьи</span>
            </div>
            <div className="article">
                <div className="userContent">
                    {items.length === 0 ? 
                    <div style={{width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <span style={{fontSize: 20}}>У вас пока нет статей</span>
                        <Link href={{pathname: '/article/new'}}><Button type="primary" style={{marginTop: 30}}>Добавить статью</Button></Link>
                    </div> :
                    <UserContentItem
                    admin={admin}
                    items={items}
                ></UserContentItem>}
                </div>
            </div>
        </div>
    );
}