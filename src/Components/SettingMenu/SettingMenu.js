import React from 'react';
import './SettingMenu.css';
import { Button, Tooltip } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export const SettingMenu = () => {
  return (
      <div className="settingMenuWrapper">
        <div className="settingMenu">
            <Tooltip title="Settings" className="settings">
                <Button type='default' shape='circle' icon={<SettingOutlined />} />
            </Tooltip>

            {/* User */}
            <Button type="default" className="user">
              <span className="userName">Тимур Бартенев</span>
              <img className="userAvatar" src="https://anctravel.com.ua/wp-content/uploads/2015/12/avada-team2-174543104.jpg" alt="userPhoto"/>
            </Button>
        </div>
      </div>
  );
}
export default SettingMenu;