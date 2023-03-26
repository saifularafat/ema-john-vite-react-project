import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <a href="#"><img src={logo} alt="ema-john Logo" /></a>
            <div>
                <a href="/Order">Order</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>
                <a href="/login">login</a>
            </div>
        </nav>
    );
};

export default Header;