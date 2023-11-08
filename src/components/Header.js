import React from 'react';
import Nav from './Nav';

function Header () {
    return (
        <header>
            <img src={require ('./logo.png')} alt='logo'/>
            <Nav></Nav>
        </header>
    )
}

export default Header;