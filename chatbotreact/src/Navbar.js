// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Chat App</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li className="dropdown">
          <a href="#" className="dropbtn">Profile</a>
          <div className="dropdown-content">
            <a href="#">My Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
