import React from 'react';
import { NavLink } from 'react-router-dom';

const NavHeader = () => {
    return (
        <div >
            <div className="navbar-container">
              <div><NavLink to="/">Home</NavLink></div>|
              <div><NavLink to="/match">Your Matches</NavLink></div>|
              <div><NavLink to="/chat">Chat</NavLink></div>
            </div>
        </div>
    );
}

export default NavHeader;