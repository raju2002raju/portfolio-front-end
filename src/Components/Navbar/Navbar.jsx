import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <div>
      <div className='navbar-container'>
        <div className='logo'>Portfolio</div>
        
        {/* Desktop Nav */}
        <ul className='d-nav'>
          <li className="nav-links" >Home</li>
          <li className="nav-links" >ABOUT</li>
          <li className="nav-links">SKILLS</li>
          <li className="nav-links">PROJECTS</li>
          <li className="nav-links">CONTACT</li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className={`m-menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <img src='./Images/mobile-menu-icon.png' alt="menu" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <li className="nav-links">Home</li>
        <li className="nav-links">ABOUT</li>
        <li className="nav-links">SKILLS</li>
        <li className="nav-links">PROJECTS</li>
        <li className="nav-links">CONTACT</li>
      </div>
     
    </div>
  );
}

export default Navbar;
