import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Guide from './components/Guide'
import OpeningPrayers from './components/OpeningPrayers'
import MysteriesNav from './components/MysteriesNav'
import About from './components/About'
import Mystery from './components/Mystery'
import ClosingPrayers from './components/ClosingPrayers'
import { CurrentImageType, ImageContext } from './utils/ImageContext'
import CrossFadeImageTS from './utils/CrossFadeImageTS'

const App = () => {

  // Watch for window resize changes to change viewport window size
  const setDocHeight = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`)
  }
  window.addEventListener('load', setDocHeight)
  window.addEventListener('resize', setDocHeight)
  window.addEventListener('orientationchange', setDocHeight)

  const [currentImage, setCurrentImage] = useState<CurrentImageType>({ url: '', alt: '' })

  return (
    <main id="root" className="scroll-container">
      <ImageContext.Provider value={{ currentImage, setCurrentImage }}>
        <CrossFadeImageTS
          src={currentImage.url}
          alt={currentImage.alt}
          imgStyle={{ position: 'fixed', height: '100vh', width: '100vw', zIndex: -1, objectFit: 'cover' }}
          containerStyle={{ display: 'flex', justifyContent: 'center' }}
          duration={800}
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
