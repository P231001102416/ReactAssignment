import React from 'react';
import Navbar from './Navbar';
import PortfolioImg from '../assets/Portfolio.png';

function Header() {
  return (
    <header className="header-container">
      <Navbar />
      
      <div className="header-body">
        {/* Left Side: Profile Image */}
        <img 
          src={PortfolioImg}
          alt="Prat's Profile" 
          className="profile-image"
        />
        
        {/* Right Side: Hero Text Content */}
        <div className="hero-content">
          <h1 className="hero-title">Hi, I am Pr_231001102416</h1>
          <p className="hero-subtitle">Web Developer</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
