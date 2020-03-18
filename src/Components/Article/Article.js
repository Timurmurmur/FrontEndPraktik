import React from 'react';
import './Article.css';
import {Button, Tooltip, Input} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

import {SettingMenu} from '../SettingMenu/SettingMenu';

const { TextArea } = Input;

export const Article = () => {
    return (
        <div className="articleWrapper">
            <SettingMenu/>
            <div className="articleMenu">

                <span className="articleID">Статья_ID</span>

                <div className="articleToolTip">
                    <Tooltip title="Edit">
                        <Button className="iconEdit" type='default' shape='circle' icon={< EditOutlined />}/>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button type='default' shape='circle' icon={< DeleteOutlined />}/>
                    </Tooltip>
                </div>
            </div>
            <div className="article">
                <span className="articleInfo">
                    <Input className="articleTitle" placeholder="Название статьи" />
                    <span className="articleDate">Дата создания - 21.03.2001</span>
                </span>
                <TextArea className="articleContent" placeholder="Запись..." autoSize />
            </div>
        </div>
    );
}
export default Article;