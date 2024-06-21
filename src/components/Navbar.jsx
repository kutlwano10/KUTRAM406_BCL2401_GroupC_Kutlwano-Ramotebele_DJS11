import React, { useState } from "react";
import logo from "../assets/elvis-blue.png";
import { Link, NavLink } from "react-router-dom";
import searchIcon from "../assets/search_icon.svg";
import profileImg from "../assets/login-avatar.png";
import caretIcon from "../assets/caret_icon.svg";
import { Dehaze } from "@mui/icons-material";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="icons" src={logo} alt="Logo" />
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/podcasts">
          Podcasts
        </NavLink>
        <NavLink className="navlink" to="/favorites">
          My Favorites
        </NavLink>
      </div>
      <div className="navbar-right">
        <img className="icons" src={searchIcon} />
        <div className="navbar-profile">
          <img className="profile" src={profileImg} alt="" />
          <img src={caretIcon} alt="" />
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {<Dehaze />}
      </div>
      <div className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
        <NavLink className="dropdown-link" to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink className="dropdown-link" to="/podcasts" onClick={toggleMenu}>
          Podcasts
        </NavLink>
        <NavLink className="dropdown-link" to="/favorites" onClick={toggleMenu}>
          My Favorites
        </NavLink>
        <div className="dropdown-profile">
          {/* <img className='profile' src={profileImg} alt='Profile' /> */}
          <img src={caretIcon} alt="Caret" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
