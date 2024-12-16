import React from 'react';
import { FaMobileAlt, FaHeadphones, FaTools, FaExchangeAlt, FaLaptop, FaTag } from 'react-icons/fa';

const Card = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-purple-100 cursor-default">
    {icon}
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p>{description}</p>
  </div>
);

function WhatWeOffer() {
  return (
    <div className="p-8 pt-14 pb-14 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">What We Offer</h1>
      <p className="text-lg mb-6 text-center">Explore the wide range of services and products we offer to meet all your mobile needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          icon={<FaMobileAlt className="text-4xl mb-4 text-purple-700" />} 
          title="Latest mobile phones" 
          description="Discover the newest models from top brands, featuring cutting-edge technology and sleek designs." 
        />
        <Card 
          icon={<FaHeadphones className="text-4xl mb-4 text-purple-700" />} 
          title="Accessories" 
          description="Find a variety of accessories including cases, chargers, and headphones to complement your devices." 
        />
        <Card 
          icon={<FaTools className="text-4xl mb-4 text-purple-700" />} 
          title="Repair services" 
          description="Get professional repair services for all types of mobile devices, ensuring your gadgets are always in top condition." 
        />
        <Card 
          icon={<FaExchangeAlt className="text-4xl mb-4 text-purple-700" />} 
          title="Trade-in options" 
          description="Take advantage of our trade-in options to upgrade your old devices and save on new purchases." 
        />
        <Card 
          icon={<FaLaptop className="text-4xl mb-4 text-purple-700" />} 
          title="Phone and Laptop Accessories" 
          description="Discover a wide range of phone and laptop accessories to enhance your devices, including cases, chargers, and more." 
        />
        <Card 
          icon={<FaTag className="text-4xl mb-4 text-purple-700" />} 
          title="Discounts and Offers" 
          description="Explore our exclusive discounts and special offers on mobile devices and services to save more." 
        />
      </div>
    </div>
  );
}

export default WhatWeOffer;