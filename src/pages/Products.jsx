import React from 'react';
// Import SmartPhone
import SP1 from '../assets/Products/SmartPhones/SP1.jpeg';
import SP2 from '../assets/Products/SmartPhones/SP2.jpeg';
import SP3 from '../assets/Products/SmartPhones/SP3.jpeg';
import SP4 from '../assets/Products/SmartPhones/SP4.jpeg';
import SP5 from '../assets/Products/SmartPhones/SP5.jpeg';
import SP6 from '../assets/Products/SmartPhones/SP6.jpeg';
import SP7 from '../assets/Products/SmartPhones/SP7.jpeg';
import SP8 from '../assets/Products/SmartPhones/SP8.jpeg';
import SP9 from '../assets/Products/SmartPhones/SP9.jpeg';
// Import Clock
import C1 from '../assets/Products/Clock/C1.jpeg'
import C2 from '../assets/Products/Clock/C2.jpeg'
import C3 from '../assets/Products/Clock/C3.jpeg'
// Import Lights
import L1 from '../assets/Products/Lights/L1.jpeg'
import L2 from '../assets/Products/Lights/L2.jpeg'
import L3 from '../assets/Products/Lights/L3.jpeg'
import L4 from '../assets/Products/Lights/L4.jpeg'
import L5 from '../assets/Products/Lights/L5.jpeg'
import L6 from '../assets/Products/Lights/L6.jpeg'
import L7 from '../assets/Products/Lights/L7.jpeg'
import L8 from '../assets/Products/Lights/L8.jpeg'
//Import Fan and Coolers
import F1 from '../assets/Products/Fan&Coolers/F1.jpeg'
import F2 from '../assets/Products/Fan&Coolers/F2.jpeg'
import F3 from '../assets/Products/Fan&Coolers/F3.jpeg'
import F4 from '../assets/Products/Fan&Coolers/F4.jpeg'
import F5 from '../assets/Products/Fan&Coolers/F5.jpeg'
import F6 from '../assets/Products/Fan&Coolers/F6.jpeg'
// Import keypad phones
import K1 from '../assets/Products/KeypadPhones/KP1.jpeg'
import K2 from '../assets/Products/KeypadPhones/KP2.jpeg'
import K3 from '../assets/Products/KeypadPhones/KP3.jpeg'
import K4 from '../assets/Products/KeypadPhones/KP4.jpeg'
import K5 from '../assets/Products/KeypadPhones/KP5.jpeg'
import K6 from '../assets/Products/KeypadPhones/KP6.jpeg'
import K7 from '../assets/Products/KeypadPhones/KP7.jpeg'
// Import Speakers and Headphones
import SH1 from '../assets/Products/Speakers&Headphones/S1.jpeg'
import SH2 from '../assets/Products/Speakers&Headphones/S2.jpeg'
import SH3 from '../assets/Products/Speakers&Headphones/S3.jpeg'
import SH4 from '../assets/Products/Speakers&Headphones/S4.jpeg'
import SH5 from '../assets/Products/Speakers&Headphones/S5.jpeg'
import SH6 from '../assets/Products/Speakers&Headphones/S6.jpeg'
import SH7 from '../assets/Products/Speakers&Headphones/S7.jpeg'
import SH8 from '../assets/Products/Speakers&Headphones/S8.jpeg'
import SH9 from '../assets/Products/Speakers&Headphones/S9.jpeg'
import SH10 from '../assets/Products/Speakers&Headphones/S10.jpeg'
import SH11 from '../assets/Products/Speakers&Headphones/S11.jpeg'
import SH12 from '../assets/Products/Speakers&Headphones/S12.jpeg'
//Import fridge 
import FR1 from '../assets/Products/Fridge/F1.jpeg'
import FR2 from '../assets/Products/Fridge/F2.jpeg'
//Import Tv
import TV1 from '../assets/Products/Monitors&TV/L1.jpeg'
import TV2 from '../assets/Products/Monitors&TV/L2.jpeg'
import TV3 from '../assets/Products/Monitors&TV/L3.jpeg'
//Inport Powerbanks
import PB1 from '../assets/Products/PowerBanks/P1.jpeg'
import PB2 from '../assets/Products/PowerBanks/P2.jpeg'
import PB3 from '../assets/Products/PowerBanks/P3.jpeg'
//Import Watches
import W1 from '../assets/Products/Watch/W1.jpeg'
import W2 from '../assets/Products/Watch/W2.jpeg'
import W3 from '../assets/Products/Watch/W3.jpeg'
import W4 from '../assets/Products/Watch/W4.jpeg'
import W5 from '../assets/Products/Watch/W5.jpeg'
//Import Others
import O1 from '../assets/Products/Others/O1.jpeg'
import O2 from '../assets/Products/Others/O2.jpeg'
import O3 from '../assets/Products/Others/O3.jpeg'
import O4 from '../assets/Products/Others/O4.jpeg'
import O5 from '../assets/Products/Others/O5.jpeg'
import O6 from '../assets/Products/Others/O6.jpeg'
import NavbarProduct from '../components/NavbarProducts';

const ProductCard = ({ title, imageUrl }) => {
  return (
    <div className="shadow- rounded-lg overflow-hidden flex flex-col justify-center items-center">
      {/* Image with dynamic aspect ratio */}
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-auto h-auto object-contain"  // Allow the image to maintain its natural size
      />
    </div>
  );
};

const ProductGroup = ({ groupTitle, products }) => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-poppins font-medium mb-4">{groupTitle}</h2>
      {/* CSS Grid for Masonry layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} title={product.title} imageUrl={product.imageUrl} />
        ))}
      </div>
    </section>
  );
};

const App = () => {
  // Replace placeholder images with actual imports
  const SmartPhones = [
    { title: 'Smartphone 1', imageUrl: SP1 },
    { title: 'Smartphone 2', imageUrl: SP2 },
    { title: 'Smartphone 3', imageUrl: SP3 },
    { title: 'Smartphone 4', imageUrl: SP4 },
    { title: 'Smartphone 5', imageUrl: SP5 },
    { title: 'Smartphone 6', imageUrl: SP6 },
    { title: 'Smartphone 7', imageUrl: SP7 },
    { title: 'Smartphone 8', imageUrl: SP8 },
    { title: 'Smartphone 9', imageUrl: SP9 },
  ];
  
  const SpeakersAndHeadphones = [
    { title: 'Speaker and Headphone 1', imageUrl: SH1 },
    { title: 'Speaker and Headphone 2', imageUrl: SH2 },
    { title: 'Speaker and Headphone 3', imageUrl: SH3 },
    { title: 'Speaker and Headphone 4', imageUrl: SH4 },
    { title: 'Speaker and Headphone 5', imageUrl: SH5 },
    { title: 'Speaker and Headphone 6', imageUrl: SH6 },
    { title: 'Speaker and Headphone 7', imageUrl: SH7 },
    { title: 'Speaker and Headphone 8', imageUrl: SH8 },
    { title: 'Speaker and Headphone 9', imageUrl: SH9 },
    { title: 'Speaker and Headphone 10', imageUrl: SH10 },
    { title: 'Speaker and Headphone 11', imageUrl: SH11 },
    { title: 'Speaker and Headphone 12', imageUrl: SH12 },
  ];

  const Clock = [
    { title: 'Clock 1', imageUrl: C1 },
    { title: 'Clock 2', imageUrl: C2 },
    { title: 'Clock 3', imageUrl: C3 },
  ];

  const Lights = [
    { title: 'Light 1', imageUrl: L1 },
    { title: 'Light 2', imageUrl: L2 },
    { title: 'Light 3', imageUrl: L3 },
    { title: 'Light 4', imageUrl: L4 },
    { title: 'Light 5', imageUrl: L5 },
    { title: 'Light 6', imageUrl: L6 },
    { title: 'Light 7', imageUrl: L7 },
    { title: 'Light 8', imageUrl: L8 },
  ];

  const FanAndCoolers = [
    { title: 'Fan And Coolers 1', imageUrl: F1 },
    { title: 'Fan And Coolers 2', imageUrl: F2 },
    { title: 'Fan And Coolers 3', imageUrl: F3 },
    { title: 'Fan And Coolers 4', imageUrl: F4 },
    { title: 'Fan And Coolers 5', imageUrl: F5 },
    { title: 'Fan And Coolers 6', imageUrl: F6 },
  ];

  const KeypadPhones = [
    { title: 'Keypad 1', imageUrl: K1 },
    { title: 'Keypad 2', imageUrl: K2 },
    { title: 'Keypad 3', imageUrl: K3 },
    { title: 'Keypad 4', imageUrl: K4 },
    { title: 'Keypad 5', imageUrl: K5 },
    { title: 'Keypad 6', imageUrl: K6 },
    { title: 'Keypad 7', imageUrl: K7 },
  ]
  
  const Fridge = [
    { title: 'Fridge 1', imageUrl: FR1 },
    { title: 'Fridge 2', imageUrl: FR2 },
  ]

  const MonitorTV = [
    { title: 'TV 1', imageUrl: TV1 },
    { title: 'TV 2', imageUrl: TV2 },
    { title: 'TV 3', imageUrl: TV3 },
  ]

  const PowerBanks = [
    { title: 'PowerBanks 1', imageUrl: PB1 },
    { title: 'PowerBanks 2', imageUrl: PB2 },
    { title: 'PowerBanks 3', imageUrl: PB3 },
  ]

  const Watches = [
    { title: 'Watches 1', imageUrl: W1 },
    { title: 'Watches 2', imageUrl: W2 },
    { title: 'Watches 3', imageUrl: W3 },
    { title: 'Watches 4', imageUrl: W4 },
    { title: 'Watches 5', imageUrl: W5 },
  ]

  const Others = [
    { title: 'Others 1', imageUrl: O1 },
    { title: 'Others 2', imageUrl: O2 },
    { title: 'Others 3', imageUrl: O3 },
    { title: 'Others 4', imageUrl: O4 },
    { title: 'Others 5', imageUrl: O5 },
    { title: 'Others 6', imageUrl: O6 },
  ]

  return (
    <>
    <NavbarProduct />
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center mb-10 font-poppins">Products</h1>
      <ProductGroup groupTitle="Smart Phones" products={SmartPhones} />
      <ProductGroup groupTitle="Speaker Snd Headphones" products={SpeakersAndHeadphones} />
      <ProductGroup groupTitle="Clocks" products={Clock} />
      <ProductGroup groupTitle="Lights" products={Lights} />
      <ProductGroup groupTitle="Watches" products={Watches} />
      <ProductGroup groupTitle="Fan And Coolers" products={FanAndCoolers} />
      <ProductGroup groupTitle="Keypad Phones" products={KeypadPhones} />
      <ProductGroup groupTitle="Fridge" products={Fridge} />
      <ProductGroup groupTitle="Televisions" products={MonitorTV} />
      <ProductGroup groupTitle="PowerBanks" products={PowerBanks} />
      <ProductGroup groupTitle="Others" products={Others} />
    </div>
    </>
  );
};

export default App;
