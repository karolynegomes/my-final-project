import React from 'react';import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import About from './About';
import Menu from './Menu';
import BookForm from './BookForm';
import NavScrollButton from './NavScrollButton';

function Nav () {
    return (
    <nav>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <nav className="navbar">
                <div className="container">
                    <div className="nav-elements">
                        <ul>
                            <li><Link to ="/"> <img className="logo-photo" src={require ('./photos/logo.png')} alt='logo'/></Link></li>
                            <li><NavScrollButton target="#reservations" text="Reservations" /></li>
                            <li><NavScrollButton target="#testimonials" text="Testimonials" /></li>
                            <li><NavScrollButton target="#about" text="About" /></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
            <Route path="/"/>
            <Route path="/About" element= {<About/>}/>
            <Route path="/Menu" element= {<Menu/>}/>
            <Route path="/Reservations" element= {<BookForm/>}/>
        </Routes>
        </div>
    </nav>
    )
}

export default Nav;