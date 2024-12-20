import React from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { NavLink } from 'react-router';

const WelcomeComponent = () => {
  const view = 'view';
  return (
    <div id='home' className="bg-purple-100 text-purple-700 p-8 pt-24 md:p-20 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center rounded">Welcome to Bishnu Mobile Center</h1>
      <p className="text-lg md:text-2xl mb-6 md:mb-8 text-center font-medium rounded">तपाईंको सबै इलेक्ट्रोनिक्स आवश्यकताका लागि पूर्ण समाधान।</p>
      <NavLink to={`products`} className="border-2 border-purple-700 text-purple-700 font-medium px-6 py-2 md:px-8 md:py-2 md:text-lg hover:bg-purple-700 hover:text-white transition duration-300 flex items-center rounded-3xl">
        Explore Products
      </NavLink>
      <IoIosArrowUp className="text-purple-700 mt-4 animate-bounce" size={24} />
    </div>
  );
};

export default WelcomeComponent;