import React from 'react';import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Main from './Main';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';

function Nav () {
    return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <nav>
                <ul>
                    <li><Link to="/" className="nav-item"><img className="logo" src={require ('./photos/logo.png')} alt='logo'/></Link></li>
                    <li><Link to ="/" className="nav-item">Home</Link></li>
                    <li><Link to ="/About" className="nav-item">About</Link></li>
                    <li><Link to ="/Menu" className="nav-item">Menu</Link></li>
                    <li><Link to ="/Reservations" className="nav-item">Reservations</Link></li>
                </ul>
        </nav>
        <Routes>
        <Route path="/"/>
        <Route path="/About" element= {<About/>}/>
        <Route path="/Menu" element= {<Menu/>}/>
        <Route path="/Reservations" element= {<Reservations/>}/>
      </Routes>
    </div>
    )
}

export default Nav;