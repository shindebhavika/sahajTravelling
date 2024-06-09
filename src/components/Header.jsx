import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="nav-bar" style={{ backgroundColor: '#1b1818' }}>
        <div className="page-container">
          <h1 className="logo">
            <span style={{ fontSize: '5rem' }}>S</span>
            <span style={{ fontSize: '3rem' }}>ahaj Travelling</span>
          </h1>
          <ul className="nav-items">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
