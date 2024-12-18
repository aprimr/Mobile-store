import React, { useState, useEffect } from "react";

import Image1 from "../assets/images/image1.jpeg";
import Image2 from "../assets/images/image2.jpeg";
import Image3 from "../assets/images/image3.jpeg";
import Image4 from "../assets/images/image4.jpeg";
import Image5 from "../assets/images/image5.jpeg";

const images = [Image1, Image2, Image3, Image4, Image5];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden" id="imageCraousel">
      <div className="flex justify-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-56 md:h-[30rem] object-cover"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
