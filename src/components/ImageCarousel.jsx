import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Image6 from "../assets/6.jpg";
import Image7 from "../assets/7.jpg";
import Image8 from "../assets/8.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the slide index (used for auto slide and manual buttons)
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [goToNext]);

  // Preload images
  useEffect(() => {
    images.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-56 md:h-96 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-purple-500" : "bg-white"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
