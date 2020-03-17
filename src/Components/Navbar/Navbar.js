import React from 'react';
import './Navbar.css';
import { HomeFilled, UserOutlined, ImportOutlined } from '@ant-design/icons';

const img = require('../../assets/Frame.png');

export const Navbar = () => {
    return (
        <div className="navBarWrapper">
            <span className="logo">
                <img src={img} />
            </span>
            <div className="navBarItems">
                <HomeFilled />
                <UserOutlined />
                <ImportOutlined />
            </div>
        </div>
    );
}
export default Navbar;