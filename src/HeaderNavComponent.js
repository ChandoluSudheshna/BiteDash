import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Images/amazon-logo.jpg';
import User from './Images/user.jpg';

const HeaderNavComponent = () => {
    return (
        <div>
            <img src={Logo} className='Logo'/>
            <input type='text' className='Input'/>
            <img src={User} className='User'/>
        </div>
    )
}

export default HeaderNavComponent;