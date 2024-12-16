import React from 'react';
import Background from '../assets/background.jpg';
import { FaPhoneAlt } from "react-icons/fa";

const MessageComponent = () => {
  return (
    <>
    {/* on mobile screen only */}
    <div
      className="relative h-64 bg-cover bg-center bg-fixed md:hidden"
      style={{
        backgroundImage: `url(${Background})`,
        animation: 'moveBackground 80s linear infinite',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white font-poppins">
        <h1 className="text-2xl md:text-4xl text-center font-bold mb-4">Wanna buy a smartphone? MB</h1>
        <p className="mb-6 text-center text-md">Discover the latest mobile devices and accessories with us.</p>
        <a href="tel:+1234567890" className="flex items-center bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
          <FaPhoneAlt className="w-5 h-5 mr-2" />
          Call Us
        </a>
      </div>
    </div>

    {/* on wide screen only */}
    <div
      className="hidden md:block relative h-64 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${Background})`,
        animation: 'moveBackground 100s linear infinite',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white font-poppins">
        <h1 className="text-2xl md:text-4xl text-center font-bold mb-4">Wanna buy a smartphone? PC</h1>
        <p className="mb-6 text-center text-md">Discover the latest mobile devices and accessories with us.</p>
        <a href="tel:+1234567890" className="flex items-center bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
          <FaPhoneAlt className="w-5 h-5 mr-2" />
          Call Us
        </a>
      </div>
    </div>
    </>
  );
};

export default MessageComponent;
