import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/">
        <img
          src="https://image.flaticon.com/icons/svg/25/25694.svg"
          width="30px"
          alt="Nav"
        />
      </NavLink>
    </nav>
  );
};

export default Navbar;
