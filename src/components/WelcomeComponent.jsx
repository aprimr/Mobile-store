import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const WelcomeComponent = () => {
  return (
    <div className="bg-purple-100 text-purple-700 p-8 md:p-20 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center rounded">Welcome to Samir Mobile Pasal</h1>
      <p className="text-lg md:text-xl mb-6 md:mb-8 text-center rounded">Your one-stop shop for all mobile needs.</p>
      <a href='#imageCraousel' className="border-2 border-purple-700 text-purple-700 font-medium px-6 py-2 md:px-8 md:py-2 md:text-lg hover:bg-purple-700 hover:text-white transition duration-300 flex items-center rounded-3xl" onClick={(e) => {
        e.preventDefault();
        const targetElement = document.querySelector('#imageCraousel');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}>
        Explore
      </a>
      <IoIosArrowDown className="text-purple-700 mt-4 animate-bounce" size={24} />
    </div>
  );
};

export default WelcomeComponent;