import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import the Firebase auth object
import { signOut } from 'firebase/auth'; // Import Firebase signOut function
import './Navbar.css'; // Import CSS for Navbar
import logo from './logo.png'; // Update with your actual path


function Navbar() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin'); // Redirect to sign-in page after sign-out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/about">About</Link></li>
        <li className="navbar-item"><Link to="/services">Services</Link></li>
        <li className="navbar-item"><Link to="/contact">Contact</Link></li>
        <li className="navbar-item">
          <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
        </li>
      </ul>
    </nav>
  
  );
}

export default Navbar;
