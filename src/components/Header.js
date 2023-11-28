import React from 'react';import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import About from './About';
import Menu from './Menu';
import BookForm from './BookForm';
import NavScrollButton from './NavScrollButton';

function Header () {
    return (
    <header>
        <div className="logo">
             <Link to="/" className='link_class'>
                <img className="logo-photo" src={require ('./photos/logo.png')} alt='logo'/>
            </Link>
        </div>
        <nav>
            <ul>
                <li><NavScrollButton target="#reservations" text="Reservations" /></li>
                <li><NavScrollButton target="#testimonials" text="Testimonials" /></li>
                <li><NavScrollButton target="#about" text="About" /></li>
            </ul>
        </nav>
    </header>
    )}

export default Header;