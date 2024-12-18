import React from 'react';
import { FaMobileAlt, FaTools, FaExchangeAlt, FaLaptop } from 'react-icons/fa';
import { RiDiscountPercentFill } from "react-icons/ri";

const Card = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center cursor-default">
    {icon}
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className='h-auto w-auto flex justify-center'>{description}</p>
  </div>
);

function WhatWeOffer() {
  return (
    <div id='services' className="p-8 py-12 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Services</h1>
      <p className="text-lg md:text-xl mb-6 text-center">हामी कहाँ टिभी, फ्रिज, डिसहोम, मोबाइल, इलेक्ट्रिक सामान बिक्री गर्नुका साथै मर्मत पनि गरिन्छ।</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          icon={<FaExchangeAlt className="text-4xl mb-4 text-purple-700" />} 
          title="Sales" 
          description="Explore our wide range of mobile devices and accessories available for purchase." 
        />
        <Card 
          icon={<FaTools className="text-4xl mb-4 text-purple-700" />} 
          title="Services" 
          description="We offer professional services to help you with your mobile and electronic needs." 
        />
        <Card 
          icon={<FaLaptop className="text-4xl mb-4 text-purple-700" />} 
          title="Repairs" 
          description="Get expert repair services for all types of mobile devices, ensuring they are always in top condition." 
        />
      </div>
    </div>
  );
}

export default WhatWeOffer;