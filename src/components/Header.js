import React from 'react';import {Link} from 'react-router-dom';
import NavScrollButton from './buttons/NavScrollButton';
import { useState } from "react";
import LogoPhoto from './photos/logo.png'
import LogoScrollButton from './buttons/LogoScrollButton';

function Header () {
    return (
    <header>
        <div className="logo">
            <LogoScrollButton target="#herosection" image={LogoPhoto} />
        </div>
        <nav className="navmenuItems">
            <ul>
                <li><NavScrollButton target="#reservations" text="Reservations" /></li>
                <li><NavScrollButton target="#testimonials" text="Testimonials" /></li>
                <li><NavScrollButton target="#about" text="About" /></li>
            </ul>
        </nav>

    </header>
    )}

export default Header;