// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Arun Tharappel Scaria</h2>
            <p className="text-gray-400">UX/UI Designer</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">Behance</a>
            <a href="#" className="hover:text-blue-400">GitHub</a>
            <a href="mailto:your.email@example.com" className="hover:text-blue-400">Email</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Arun Tharappel Scaria. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;