import React from 'react';import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import About from './About';
import Menu from './Menu';
import BookForm from './BookForm';
import Hamburg from '../components/icons_assets/🦆 icon _hamburger menu.svg'

function Nav () {
    return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <nav>
            {/* Desktop version */}
                <ul>
                    <li><Link to="/" className="nav-item"><img className="logo" src={require ('./photos/logo.png')} alt='logo'/></Link></li>
                    <li><Link to ="/" className="nav-item">Home</Link></li>
                    <li><Link to ="#about" className="nav-item">About</Link></li>
                    <li><Link to ="menu" className="nav-item">Menu</Link></li>
                    <li><Link to ="#reservations" className="nav-item">Reservations</Link></li>
                </ul>

            {/* Mobile version */}


            
            <img src={Hamburg}></img>
        </nav>
        <Routes>
        <Route path="/"/>
        <Route path="/About" element= {<About/>}/>
        <Route path="/Menu" element= {<Menu/>}/>
        <Route path="/Reservations" element= {<BookForm/>}/>
      </Routes>
    </div>
    )
}

export default Nav;