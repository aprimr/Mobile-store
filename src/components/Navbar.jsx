import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleScroll = () => {
    const scrollThreshold = window.innerWidth < 768 ? 10 : 898;
    setIsSticky(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = (e, section) => {
    e.preventDefault(); // Prevent the default anchor behavior
    setIsMenuOpen(false);
    
    const targetElement = document.querySelector(section);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      const headerHeight = document.querySelector('nav').offsetHeight; // Get the navbar height
      
      window.scrollTo({
        top: offsetTop - headerHeight, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className={`shadow sticky top-0 left-0 right-0 z-10 ${isSticky ? 'bg-white' : 'bg-gradient-to-r from-purple-600 via-pink-500 to-red-500'}`}>
        <div className="mx-auto px-8 sm:px-6 lg:px-36">
          <div className="w-full flex justify-center items-center h-16">
            {/* Logo */}
            <div className="flex-1 w-full items-center cursor-pointer whitespace-nowrap" onClick={handleLogoClick}>
              <span className={`text-xl md:text-2xl font-poppins font-semibold ${isSticky ? 'text-black' : 'text-white'}`}>
                Bishnu Mobile Center
              </span>
            </div>
            
            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex justify-center">
              <div className="flex-1 items-center space-x-8">
                <a href="#" onClick={(e) => handleMenuClick(e, '#home')} className={`px-3 py-2 text-lg font-medium group transition duration-300 relative ${isSticky ? 'text-black' : 'text-white'}`}>
                  Home
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isSticky ? 'bg-black' : 'bg-white'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                </a>
                <a href="#" onClick={(e) => handleMenuClick(e, '#services')} className={`px-3 py-2 text-lg font-medium group transition duration-300 relative ${isSticky ? 'text-black' : 'text-white'}`}>
                  Services
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isSticky ? 'bg-black' : 'bg-white'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                </a>
                <a href="#" onClick={(e) => handleMenuClick(e, '#about')} className={`px-3 py-2 text-lg font-medium group transition duration-300 relative ${isSticky ? 'text-black' : 'text-white'}`}>
                  About
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isSticky ? 'bg-black' : 'bg-white'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                </a>
                <a href="#" onClick={(e) => handleMenuClick(e, '#location')} className={`px-3 py-2 text-lg font-medium group transition duration-300 relative ${isSticky ? 'text-black' : 'text-white'}`}>
                  Location
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isSticky ? 'bg-black' : 'bg-white'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
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
              <a href="#" onClick={(e) => handleMenuClick(e, '#home')} className={`block w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isSticky ? 'text-black hover:text-black' : 'text-white hover:text-gray-300'}`}>Home</a>
              <a href="#" onClick={(e) => handleMenuClick(e, '#services')} className={`block w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isSticky ? 'text-black hover:text-black' : 'text-white hover:text-gray-300'}`}>Services</a>
              <a href="#" onClick={(e) => handleMenuClick(e, '#about')} className={`block w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isSticky ? 'text-black hover:text-black' : 'text-white hover:text-gray-300'}`}>About</a>
              <a href="#" onClick={(e) => handleMenuClick(e, '#location')} className={`block w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isSticky ? 'text-black hover:text-black' : 'text-white hover:text-gray-300'}`}>Location</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
