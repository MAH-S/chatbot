// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Chat App</div>
      <ul className="nav-links">
        <li><a href="javascript:void(0);">Home</a></li>
        <li><a href="javascript:void(0);">About</a></li>
        <li><a href="javascript:void(0);">Contact</a></li>
        <li className="dropdown">
          <a href="javascript:void(0);" className="dropbtn">Profile</a>
          <div className="dropdown-content">
            <a href="javascript:void(0);">My Profile</a>
            <a href="javascript:void(0);">Settings</a>
            <a href="javascript:void(0);">Logout</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
