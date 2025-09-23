// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md py-4 z-10">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Arun Tharappel Scaria - Design Portfolio</h1>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#project" className="text-gray-600 hover:text-blue-500">Project</a></li>
            <li><a href="#process" className="text-gray-600 hover:text-blue-500">Process</a></li>
            <li><a href="#tech" className="text-gray-600 hover:text-blue-500">Technology</a></li>
            <li><a href="#design" className="text-gray-600 hover:text-blue-500">Design</a></li>
            <li><a href="#references" className="text-gray-600 hover:text-blue-500">References</a></li>
          </ul>
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;