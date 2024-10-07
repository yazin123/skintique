'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col w-full">
      {/* Top banner */}
      <div className="bg-black text-white py-2 px-4 text-center">
        <p className="text-xs sm:text-sm">
          ONLY THIS MONTH 20% DISCOUNT ON ALL SERVICES 🔥
        </p>
      </div>
      
      {/* Main navbar */}
      <div className="flex items-center justify-between  px-4 sm:px-6 bg-white">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" >
           <img src='/Skintique.png' className=" w-48 h-auto bg-cover"/>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation links for larger screens */}
        <div className="hidden md:flex items-center justify-center flex-grow">
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
          </div>
        </div>

        {/* Social icons for larger screens */}
        <div className="hidden md:flex items-center space-x-4 lg:pr-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FaInstagram size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Contact Us</Link>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;