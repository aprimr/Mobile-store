import React, { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import TopBar from '../components/TopBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  }

  return (
    <>
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow sticky top-0 left-0 right-0 z-10">
      <div className="mx-auto px-8 sm:px-6 lg:px-36">
        <div className="w-full flex justify-center items-center h-16">
          {/* Logo */}
          <div className="flex-1 items-center cursor-pointer" onClick={handleLogoClick}>
            <span className="text-2xl font-bold text-white">
              Samir Mobile
            </span>
          </div>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex justify-center">
            <div className="flex-1 items-center space-x-8">
              <a href="#" className="px-3 py-2 text-lg font-medium text-white group transition duration-300 relative">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#" className="px-3 py-2 text-lg font-medium text-white group transition duration-300 relative">
                Collection
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#" className="px-3 py-2 text-lg font-medium text-white group transition duration-300 relative">
                Gallery
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#" className="px-3 py-2 text-lg font-medium text-white group transition duration-300 relative">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#" className="px-3 py-2 text-lg font-medium text-white group transition duration-300 relative">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex-1 flex items-center justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 bg-white hover:bg-gray-200 focus:outline-none "
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pl-5 px-2 pt-2 pb-3 w-full flex flex-col items-center justify-around space-y-1 sm:px-3">
            <a href="" className="block w-full px-3 py-2 rounded-md text-base text-white font-medium transition-all duration-300">Home</a>
            <a href="" className="block w-full px-3 py-2 rounded-md text-base text-white font-medium transition-all duration-300">Collection</a>
            <a href="" className="block w-full px-3 py-2 rounded-md text-base text-white font-medium transition-all duration-300">Gallery</a>
            <a href="" className="block w-full px-3 py-2 rounded-md text-base text-white font-medium transition-all duration-300">About</a>
            <a href="" className="block w-full px-3 py-2 rounded-md text-base text-white font-medium transition-all duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;