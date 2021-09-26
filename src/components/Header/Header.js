import './Header.css'
import React from 'react';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div>
                <nav>
                    <a href="/home">Home</a>
                    <a href="/teachers">Teachers</a>
                    <a href="/about">About us</a>
                    <a href="/contuct">Contuct us</a>
                </nav>
            </div>
            <img src={logo} alt="" />
            <h1 className="h1">Zoom Couching Center</h1>
            <h3 className="header-text">An online couching center for college student.</h3>
            <h1 className="header-text">Total Budget : $10000K</h1>
        </div>
    );
};

export default Header;