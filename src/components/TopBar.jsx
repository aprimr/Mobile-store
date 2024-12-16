import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function TopBar() {
  return (
    <div className="flex justify-between items-center bg-lime-400 text-purple-800 md:font-semibold px-10 p-2 z-50">
      <div className="text-sm flex items-center">
        <FaPhoneAlt className="mr-1" />
        <span>+1234567890</span>
      </div>
      <div className="text-sm flex items-center">
        <FaEnvelope className="mr-1" />
        <span>info@samirmobile.com</span>
      </div>
    </div>
  );
}

export default TopBar;