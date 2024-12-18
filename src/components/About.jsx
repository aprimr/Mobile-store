import React from 'react';
import image from '../assets/AboutImg.jpeg';
import { FaFacebookMessenger } from "react-icons/fa";

function About() {
  return (
    <div id='about' className="py-12 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-4xl font-bold text-center text-gray-800 mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 font-poppins mb-1 md:mb-2">
              Bishnu Mobile Center,
            </h3>
            <p className="text-xl md:text-2xl font-thin text-gray-700">
            तपाईंलाई उच्च गुणवत्ता भएका मोबाइल फोन, सहायक उपकरण र मर्मत सेवाहरू प्रदान गर्न प्रतिबद्ध छौं। 
            हाम्रो लामो अनुभव र गुणस्तरीय सेवाले हामीलाई हाम्रो ग्राहकको विश्वास जित्न मद्दत गरेको छ। 
            चाहे तपाईंलाई नयाँ स्मार्टफोन चाहिन्छ, मोबाइल मर्मत गर्नु छ, वा मोबाइलका अन्य सहायक उपकरणहरू चाहिन्छ, हामी तपाईंको सबै आवश्यकताका लागि एक मात्र गन्तव्य हौं।
            हामी ग्राहकको सन्तुष्टिमा विश्वास राख्दछौं र हाम्रो सेवा हरेक ग्राहकको आवश्यकताअनुसार अनुकूलित गर्छौं।
            </p>
          </div>
          <div className="flex justify-center">
            <img src={image} alt="Bishnu Mobile Center" className="w-full h-[21rem] object-cover rounded-md" />
          </div>
        </div>
        <div className="mt-5 w-full flex justify-center">
          <a href="https://www.facebook.com/profile.php?id=100053702421660" target="_blank" rel="noopener noreferrer" className="flex w-auto items-center bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
            <FaFacebookMessenger className="w-5 h-5 mr-2" />
            Message Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
