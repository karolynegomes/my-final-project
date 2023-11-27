import React from 'react';
import { Link } from 'react-scroll';

const NavScrollButton = ({ target, text }) => {
    return (
      <Link
        to={target}
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset as needed
        duration={500} // Scroll duration in milliseconds
      >
        <button aria-label="On Click" style={{fontSize: 14, fontWeight: 400, color: '#495E57', border: 'none'}}>{text}</button>
      </Link>
    );
  };

  export default NavScrollButton;