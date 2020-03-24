import React from 'react';
import './Main.css';
import {SettingMenu} from '../SettingMenu/SettingMenu';
import {UserContentItem} from '../UserContentItem/UserContentItem';

import { Article } from '../Article/Article';
import { UserContent } from '../UserContent/UserContent';
import { Search } from '../Search/Search';

export const Main = () => {
  return(
    <div className="mainContainer">
      <div className="userContentWrapper">
          <div className="articleMenu" style={{alignItems: 'center'}}>
            <div>
              <Search />
            </div>
            <span className="articleID">Список статей</span>
          </div>
          <div className="article">
              <div className="userContent">
                  <UserContentItem
                    admin={false}
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
    </div>
  )
}