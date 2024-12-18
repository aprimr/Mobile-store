import React from "react";
import Apple from "../assets/BrandImg/apple.png";
import Google from "../assets/BrandImg/google.png";
import Asus from "../assets/BrandImg/asus.png";
import Xiaomi from "../assets/BrandImg/xiaomi.png";
import Lenovo from "../assets/BrandImg/lenovo.png";
import Nokia from "../assets/BrandImg/nokia.png";
import Motorola from "../assets/BrandImg/motorola.png";
import Nothing from "../assets/BrandImg/nothing.png";
import OnePlus from "../assets/BrandImg/oneplus.png"; 
import Poco from "../assets/BrandImg/poco.png"; 
import Tecno from "../assets/BrandImg/tecno.png";
import Oppo from "../assets/BrandImg/oppo.png";
import LG from "../assets/BrandImg/lg.png"; 
import Vivo from "../assets/BrandImg/vivo.png";
import Realme from "../assets/BrandImg/realme.png";
import Infinix from "../assets/BrandImg/infinix.jpg";
import Huawei from "../assets/BrandImg/huawei.png";
import Honor from "../assets/BrandImg/honor.png"; 

const brands = [
  Apple, Asus, Xiaomi, Lenovo, Google, Nokia, 
  Motorola, Nothing, OnePlus, Tecno, Poco,
  Oppo, LG, Vivo, Realme, Infinix, Huawei, Honor
];

const BrandSlider = () => {
  return (
    <div className="relative w-full overflow-hidden pt-4 pb-5">
      <h2 className="hidden text-3xl font-semibold text-gray-800 text-center mb-8">Brands</h2> 
      <div className="flex animate-marqueeSm md:animate-marqueeMd whitespace-nowrap">
        {brands.concat(brands).map((brand, index) => (
          <div key={index} className="w-20 flex-shrink-0 flex justify-center items-center mx-3">
            <img
              src={brand}
              alt={`brand-${index}`}
              className="w-14 h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
