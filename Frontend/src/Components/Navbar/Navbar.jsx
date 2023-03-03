import React from "react";
import { Link } from "react-router-dom";
import { Appbar, ToolBar } from '@mui/material'
import "./NavbarStyles.css";
import Signup from "../../pages/Sign up/Signup";
import Login from "../../pages/Login/Login";
import TreatForm from '../TreatForm/TreatForm';
import { useLogOut } from '../../hooks/useLogOut'

const Navbar = () => {
  const { logout } = useLogOut();

  const handleClick = () => {
    logout();
  }

  return (

    <>
      {/* <Appbar>
        <ToolBar>
          <Link className="navPages" to="/">
            <h2>Treats</h2>
          </Link>
        </ToolBar>
      </Appbar> */}
      {/* <div className="navbarDiv">
        <Link className="navPages" to="/">
          <h2>Treats</h2>
        </Link>
        <nav>
          <div>
          </div>
          <div className="navLinks">
            <button onClick={handleClick}>Log out</button>
            <Signup />
            <Login />
            <TreatForm />
          </div>
        </nav>
      </div> */}
    </>
  );
};

export default Navbar;
