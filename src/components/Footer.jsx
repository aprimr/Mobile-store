import React from 'react';
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTiktok } from 'react-icons/fa';
import Logo from '../assets/logo.png';

function Footer() {
  return (
    <div className="bg-purple-800 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo and Info Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="Logo" className="w-32 mb-1" />
            <p className="text-2xl font-poppins font-medium">Bishnu Mobile Center</p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-2xl font-medium mb-2 text-white font-poppins">Contact</h3>
            <p className="text-base text-white flex items-center font-poppins">
              <FaPhoneAlt className="mr-2" /> +977 9866985352
            </p>
            <p className="text-base text-white flex items-center font-poppins">
              <FaEnvelope className="mr-2" /> info@bishnumobilecenter.com
            </p>
            <p className="text-base text-white flex items-center font-poppins">
              <FaMapMarkerAlt className="mr-2" /> Sarumarani-04 Baddanda Pyuthan
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-center gap-3 ">
            <h3 className="text-2xl font-medium mb-2 text-white font-poppins">Follow Us</h3>
            <div className="flex space-x-6 gap-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <FaFacebookF className="text-2xl hover:text-white transition-all duration-300" />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <FaTiktok className="text-2xl hover:text-white transition-all duration-300" />
              </a>
            </div>
          </div>

        </div>
        <hr className='mt-8'/>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-center">
          <p className="text-sm md:text-md text-white font-poppins">
            © {new Date().getFullYear()} Bishnu Mobile Center. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;