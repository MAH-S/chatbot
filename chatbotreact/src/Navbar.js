import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Chat App</div>
      <ul className="nav-links">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li><a href="#">Home</a></li>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li><a href="#">About</a></li>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <li><a href="#">Contact</a></li>
        <li className="dropdown">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="dropbtn">Profile</a>
          <div className="dropdown-content">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">My Profile</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Settings</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Logout</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
