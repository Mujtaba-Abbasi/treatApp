import React from "react";
import  {Link}  from "react-router-dom";
import './NavbarStyles.css'

const Navbar = () => {
  return (
    <div className="navbarDiv">
      <Link className='navHead' to='/'>
        <h2>Treats</h2>
      </Link>
    </div>
  );
};

export default Navbar;
