import React from 'react';

const LocationComponent = () => {
  return (
    <div id='location' className="flex flex-col py-12 md:flex-row p-6 bg-gray-100 font-poppins">
      <div className="w-full">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Our Location</h2>
        <h3 className="text-xl font-normal text-gray-700 text-center mb-6">Sarumarani-04 Baddanda Pyuthan</h3>
        <div className="relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503.3898624123484!2d82.82267543409326!3d27.958047790485487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997b3e552f24b55%3A0x9848eeddf74d293f!2sBishnu%20Mobile%20Center!5e1!3m2!1sen!2snp!4v1734524103680!5m2!1sen!2snp" 
            width="100%" 
            height="350" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationComponent;
