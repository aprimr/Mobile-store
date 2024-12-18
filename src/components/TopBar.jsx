import React from 'react';
import { FaPhoneAlt, FaFacebook } from 'react-icons/fa';

function TopBar() {
  return (
    <div className="flex justify-between items-center bg-purple-800 text-white md:font-semibold px-10 p-2 z-50">
      <div className="text-xs md:text-sm flex items-center">
        <FaPhoneAlt className="mr-1" />
        <span onClick={() => window.location.href = 'tel:+9779866985352'} className="cursor-pointer">+977 9866985352</span>
      </div>
      <div className="text-xs md:text-sm flex items-center md:tracking-wide space-x-2">
        <a href="https://www.facebook.com/profile.php?id=100053702421660" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer">
          <FaFacebook className="mr-1 text-base" />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
}

export default TopBar;