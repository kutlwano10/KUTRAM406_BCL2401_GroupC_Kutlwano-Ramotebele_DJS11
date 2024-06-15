import React from 'react'
import logo from "../assets/elvis-blue.png"
import { Link, NavLink } from 'react-router-dom'
import searchIcon from "../assets/search_icon.svg"
import profileImg from "../assets/login-avatar.png"
import caretIcon from "../assets/caret_icon.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img className='icons' src={logo} alt='Logo'/>
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/podcasts">Podcasts</NavLink>
            <NavLink className="navlink" to="/favorites">My Favorites</NavLink>
        </div>
        <div className='navbar-right'>
            <img className='icons' src={searchIcon}/>
            <div className='navbar-profile'>
                <img className='profile' src={profileImg} alt=''/>
                <img src={caretIcon} alt=''/>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
