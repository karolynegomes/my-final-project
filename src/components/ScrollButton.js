import React from 'react';
import { Link } from 'react-scroll';

const ScrollButton = ({ target, text }) => {
    return (
      <Link
        to={target}
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset as needed
        duration={500} // Scroll duration in milliseconds
      >
        <button aria-label="On Click" className="submit-btn"><b>{text}</b></button>
      </Link>
    );
  };

  export default ScrollButton;