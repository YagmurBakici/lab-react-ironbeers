import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="https://image.flaticon.com/icons/svg/25/25694.svg"
          width="30px"
          alt="Nav"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
