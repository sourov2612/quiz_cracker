import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='manu_container'> 
                <NavLink></NavLink>
                <nav className='manu'>
                    <NavLink to='/home'>Home</NavLink> 
                    <NavLink to='/about'>About</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;