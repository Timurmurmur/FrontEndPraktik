import React from 'react';
import './SettingMenu.css';
import { Button, Tooltip } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export const SettingMenu = () => {
  return (
      <div className="settingMenuWrapper">
        <div className="settingMenu">
            <Tooltip title="settings" className="settings">
                <Button type='default' shape='circle' icon={<SettingOutlined />} />
            </Tooltip>

            {/* User */}
            <Button type="default" className="user">
            <p className="userName">Тимур Бартеньев</p>
            <img className="userAvatar" src="https://sun9-61.userapi.com/c851132/v851132772/15e8db/T2K3w32aoq0.jpg?ava=1" />
            </Button>
        </div>
      </div>
  );
}
export default SettingMenu;