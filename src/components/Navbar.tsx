import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, isDarkMode }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary">
    <div className="container-fluid">
      <NavLink className="navbar-brand fw-bold" to="/">United Supply Agency</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/about">About Us</NavLink></li>
          <li className="nav-item"><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/key-persons">Key Persons</NavLink></li>
          <li className="nav-item"><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/products">Products Details</NavLink></li>
          <li className="nav-item"><NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/contact">Contact Us</NavLink></li>
          <li className="nav-item d-flex align-items-center ms-3">
            <button
              className="btn btn-outline-light"
              style={{ borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={onToggleTheme}
              aria-label="Toggle dark/light mode"
            >
              {isDarkMode ? (
                <span role="img" aria-label="Light mode">🌞</span>
              ) : (
                <span role="img" aria-label="Dark mode">🌙</span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
