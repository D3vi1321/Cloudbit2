import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>CloudBit</h2>
      </div>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      
      <div className="nav-buttons">
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
