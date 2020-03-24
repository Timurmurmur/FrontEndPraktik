import React from 'react';
import './Navbar.css';
import { HomeFilled, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'redux-little-router';

const img = require('../../assets/Frame.png');

export const Navbar = () => {
    return (
        <div className="navBarWrapper">
            <span className="logo">
                <img src={img} />
            </span>
            <div className="navBarItems">
                <div className="navBarItemsMenu">
                    <Link href={{ pathname: '/' }}>
                        <HomeFilled />
                    </Link>
                    <Link href={{ pathname: '/profile' }}>
                        <UserOutlined />
                    </Link>
                </div>
                <Link href={{ pathname: '/auth' }}>
                    <LogoutOutlined />
                </Link>
            </div>
        </div>
    );
}
export default Navbar;