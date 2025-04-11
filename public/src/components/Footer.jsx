// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Hianime. All rights reserved.
        </p>
        <div className="mt-3 space-x-4">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/watchlist" className="hover:text-white">Watchlist</Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
