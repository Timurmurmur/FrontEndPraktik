import React from 'react';
import './Navbar.css';
import { HomeFilled, UserOutlined, LogoutOutlined } from '@ant-design/icons';

const img = require('../../assets/Frame.png');

export const Navbar = () => {
    return (
        <div className="navBarWrapper">
            <span className="logo">
                <img src={img} />
            </span>
            <div className="navBarItems">
            <div className="navBarItemsMenu">
                <HomeFilled />
                <UserOutlined />
            </div>
                <LogoutOutlined />
            </div>
        </div>
    );
}
export default Navbar;