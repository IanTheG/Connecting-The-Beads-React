import { useEffect, useState } from 'react'
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
  const [homeImage, setHomeImage] = useState<ImageI>({ url: '', alt: '' })

  useEffect(() => {
    const randomImageNumber = Math.floor(Math.random() * Math.floor(5)) + 1

    let dailyMystery = ""
    const currentDay = (new Date()).getDay()
    if (currentDay === 0 || currentDay === 3) dailyMystery = 'glorious'
    else if (currentDay === 1 || currentDay === 6) dailyMystery = 'joyful'
    else if (currentDay === 2 || currentDay === 5) dailyMystery = 'sorrowful'
    else if (currentDay === 4) dailyMystery = 'luminous'

    let size = 'S'
    if (window.innerHeight > 900) size = 'M'
    if (window.innerHeight > 1200) size = 'L'

    setHomeImage({
      url: `https://connectingthebeads-images.s3.amazonaws.com/${dailyMystery}/${randomImageNumber}${size}.jpg`,
      alt: `${dailyMystery} ${randomImageNumber}`
    })
  }, [])

  return (
    <main id="root" className="scroll-container">
      <ImageContext.Provider value={{ currentImageIndex, setCurrentImageIndex, selectedMysteryImages, setSelectedMysteryImages }}>
        <ImageContainer
          // Make the home page image random, and the ClosingPrayers image one of the five Joyful mysteries
          images={[homeImage, ...selectedMysteryImages]}
          currentImageIndex={currentImageIndex}
          imgClassName="img"
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
