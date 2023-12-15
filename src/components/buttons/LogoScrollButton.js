import React from 'react';
import { Link } from 'react-scroll';

const LogoScrollButton = ({ target, image }) => {
    return (
      <Link
        to={target}
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset as needed
        duration={750} // Scroll duration in milliseconds
      >
        <img src={image} className="logo-photo"></img>
      </Link>
    );
}
  export default LogoScrollButton;