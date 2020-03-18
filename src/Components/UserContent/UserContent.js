import React from 'react';
import './UserContent.css';

import {SettingMenu} from '../SettingMenu/SettingMenu';
import {UserContentItem} from '../UserContentItem/UserContentItem';

export const UserContent = ({ items }) => {
    return (
        <div className="userContentWrapper">
            <SettingMenu/>
            <div className="articleMenu">
                <span className="articleID">Ваши статьи</span>
            </div>
                <div className="article">
                    <div className="userContentInfo">
                        <p className="userContentInfoItems">Название статьи</p>
                        <p className="userContentInfoItems">Категория</p>
                        <p className="userContentInfoItems">Дата публикации</p>
                        <p className="userContentInfoItems">Количество просмотров</p>
                    </div>
                    <div className="userContent">
                        <UserContentItem
                            items={[
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200'
                                },
                            ]}
                        ></UserContentItem>
                    </div>
                </div>
        </div>
    );
}