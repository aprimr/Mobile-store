import React from 'react'
import WelcomeComponent from '../components/WelcomeComponent'
import ImageCarousel from '../components/ImageCarousel'
import WhatWeOffer from '../components/WhatWeOffer'
import MessageComponent from '../components/MessageComponent'

function Home() {
  return (
    <>
      <WelcomeComponent />
      <ImageCarousel />
      <WhatWeOffer />
      <MessageComponent />
    </>
  )
}

export default Home