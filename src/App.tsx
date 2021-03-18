import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Guide from './components/Guide'
import OpeningPrayers from './components/OpeningPrayers'
import MysteriesNav from './components/MysteriesNav'
import About from './components/About'
import Mystery from './components/Mystery'
import ClosingPrayers from './components/ClosingPrayers'
import { ImageI, ImageContext } from './utils/ImageContext'

import ImageContainer from './components/ImageContainer'

const App = () => {

  // Watch for window resize changes to change viewport window size
  const setDocHeight = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`)
  }
  window.addEventListener('load', setDocHeight)
  window.addEventListener('resize', setDocHeight)
  window.addEventListener('orientationchange', setDocHeight)

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [selectedMysteryImages, setSelectedMysteryImages] = useState<ImageI[]>([])

  const homeImage = (): ImageI => {
    const randomImageNumber = Math.floor(Math.random() * Math.floor(5)) + 1
    const randomMysteryNumber = Math.floor(Math.random() * Math.floor(4))
    const randomMystery = ["glorious", "sorrowful", "joyful", "luminous"][randomMysteryNumber]

    return {
      // url: `https://connectingthebeads-images.s3.amazonaws.com/${randomMystery}/${randomImageNumber}.jpg`,
      url: "https://connectingthebeads-images.s3.amazonaws.com/sorrowful/1.jpg",
      alt: `${randomMystery} ${randomImageNumber}`
    }
  }
  const closingImage: ImageI = {
    url: "",
    alt: ""
  }

  return (
    <main id="root" className="scroll-container">
      <ImageContext.Provider value={{ currentImageIndex, setCurrentImageIndex, selectedMysteryImages, setSelectedMysteryImages }}>
        <ImageContainer
          // Make the home page image random, and the ClosingPrayers image one of the five Joyful mysteries
          images={[homeImage(), ...selectedMysteryImages, closingImage]}
          currentImageIndex={currentImageIndex}
          imgStyle={{ position: 'fixed', height: '100vh', width: '100vw', zIndex: -1, objectFit: 'cover' }}
          containerStyle={{ display: 'flex', justifyContent: 'center' }}
        />
        <Switch>
          <Route exact path="/">
            <Home />
            <Guide />
            <OpeningPrayers />
            <MysteriesNav />
            <About />
          </Route>
          <Route exact path="/closing-prayers">
            <ClosingPrayers />
          </Route>
          <Route path="/:mystery">
            <Mystery />
          </Route>
        </Switch>
      </ImageContext.Provider>
    </main>
  )
}

export default App
