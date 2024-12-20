import React from 'react'
import WelcomeComponent from '../components/WelcomeComponent'
import ImageCarousel from '../components/ImageCarousel'
import OurServices from '../components/OurServices'
import MessageComponent from '../components/MessageComponent'
import BrandsComponent from '../components/BrandsComponent'
import LocationComponent from '../components/LocationComponent'
import About from '../components/About'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <WelcomeComponent />
      <ImageCarousel />
      <OurServices />
      <MessageComponent />
      <About />
      <BrandsComponent />
      <LocationComponent />
      
    </>
  )
}

export default Home