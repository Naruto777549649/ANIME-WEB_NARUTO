// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Hianime Logo" className="w-10 h-10 rounded-full" />
          <span className="text-white text-xl font-bold">Hianime</span>
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/watchlist" className="text-gray-300 hover:text-white">Watchlist</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
