import React from 'react';
import './SettingMenu.css';
import { Button, Tooltip } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { PageStatus } from '../../common/typings';

export class SettingMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.loadUser();
  }

  render(){
    console.log(this.props);
    if(this.props.pageStatus === PageStatus.LOADING){
      return ""
    } else {
      return(
        <div className="settingMenuWrapper">
        <div className="settingMenu">
              <Tooltip title="Settings" className="settings">
                  <Button type='default' shape='circle' icon={<SettingOutlined />} />
              </Tooltip>

              {/* User */}
              <Button type="default" className="user">
                <span className="userName">{this.props.user.nickname}</span>
                {this.props.user.avatar === null ? 
                <img className="userAvatar" src="https://anctravel.com.ua/wp-content/uploads/2015/12/avada-team2-174543104.jpg" alt="userPhoto"/>
                : 
                <img className="userAvatar" src={this.props.user.avatar} alt="userPhoto"/>
                }
              </Button>
          </div>
        </div>
      )
    }
  }
}
export default SettingMenu;