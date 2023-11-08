import React from 'react';import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';

function Nav () {
    return (
    <div>
        <nav>
            <ul>
                <a href="/"><img src={require ('./logo.png')} alt='logo'/></a>
                <li><Link to ="/" className="nav-item">Home</Link></li>
                <li><Link to ="/About" className="nav-item">About</Link></li>
                <li><Link to ="/Menu" className="nav-item">Menu</Link></li>
                <li><Link to ="/Reservations" className="nav-item">Reservations</Link></li>
                <li><Link to ="/OrderOnline" className="nav-item">Order Online</Link></li>
                <li><Link to ="/Login" className="nav-item">Login</Link></li>
            </ul>
        </nav>
        <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/About" element= {<About/>}/>
        <Route path="/Menu" element= {<Menu/>}/>
        <Route path="/Reservations" element= {<Reservations/>}/>
        <Route path="/OrderOnline" element= {<OrderOnline/>}/>
        <Route path="/Login" element= {<Login/>}/>
      </Routes>
    </div>
    )
}

export default Nav;