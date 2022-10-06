import React from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { Menu, Typography, MenuItem } from "@mui/material";

const Navbar = () => {
  const pages = ["Login", "Sign up", "Add Item"];
  return (
    <div className="navbarDiv">
      <Link className="navLinks" to="/">
        <h2>Treats</h2>
      </Link>
      <div className="navButtons">
        {pages.map((page) => <Link className="navLinks" to={`/{page}`} key={page} ><h4>{page}</h4></Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
