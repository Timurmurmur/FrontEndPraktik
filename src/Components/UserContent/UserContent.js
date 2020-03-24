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
                    
                    <div className="userContent">
                        <UserContentItem
                            admin={true}
                            items={[
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id1'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id2',
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id3'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id4'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id5'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id6'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id7'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id8'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id9'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id10'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id11'
                                },
                                {
                                    title: 'Web - Разработка',
                                    category: 'IT',
                                    date: '21.03.2020',
                                    views: '1200',
                                    id: 'id12'
                                },
                            ]}
                        ></UserContentItem>
                    </div>
                </div>
        </div>
    );
}