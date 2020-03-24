import React, {useState, useEffect} from 'react';
import './Article.css';
import {Button, Tooltip, Input} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import {useStore} from 'react-redux';

import {SettingMenu} from '../SettingMenu/SettingMenu';

const { TextArea } = Input;

export const Article = () => {
    const {router} = useStore().getState();
    const [changeStatus, setChangeStatus] = useState(false);
    const [textarea, setTextarea] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    const [id, setId] = useState(router.params.id);
    const [admin, setAdmin] = useState(router.query.admin);

    console.log(id);
    const handleTextAreaChange = (e) => {
        setTextarea(e.target.value);
    }

    const editButtonHandler = (event) => {
        if(changeStatus) {
            setChangeStatus(false);
        } else {
            setChangeStatus(true);
        }
    }

    return (
        <div className="articleWrapper">
            <SettingMenu/>
            <div className="articleMenu">
                <span className="articleID">{id}</span>
                {admin ? <div className="articleToolTip">
                    <Tooltip title="Edit">
                        <Button className="iconEdit" type='default' shape='circle' icon={< EditOutlined />} onClick={editButtonHandler}/>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button type='default' shape='circle' icon={< DeleteOutlined />}/>
                    </Tooltip>
                </div>: ''}
            </div>
            <div className="article">
                {changeStatus ? 
                <>
                <div className="articleInfo">
                    <Input className="articleTitle" placeholder="Название статьи" value="Название статьи"/>
                    <span className="articleDate">Дата создания - 21.03.2001</span>
                </div>
                <TextArea className="articleContent" placeholder="Запись..." autoSize value={textarea} onChange={handleTextAreaChange}/>
                </>
                : <>
                    <div className="articleInfo" style={{padding: '4px 11px'}}>
                        <span>Название статьи</span>
                        <span className="articleDate">Дата создания - 21.03.2001</span>
                    </div>
                    <div className="articleInfo" style={{marginTop: 20, padding: '4px 11px'}}>
                        <span >{textarea}</span>
                    </div></>}
                
            </div>
        </div>
    );
}