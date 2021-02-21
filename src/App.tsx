import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Guide from './components/Guide'
import OpeningPrayers from './components/OpeningPrayers'
import MysteriesNav from './components/MysteriesNav'
import About from './components/About'
import Mystery from './components/Mystery'
import ClosingPrayers from './components/ClosingPrayers'

const App = () => {

  // Watch for window resize changes to change viewport window size
  const setDocHeight = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`)
  }
  window.addEventListener('load', setDocHeight)
  window.addEventListener('resize', setDocHeight)
  window.addEventListener('orientationchange', setDocHeight)
  
  // // Logic to hide / display views
  // const toggleViews = () => {
  //   const deviceWidth = window.screen.orientation

  //   if (deviceWidth) {

  //   }
  // }
  // window.addEventListener('resize', toggleViews)

  // if window is in portrait mode and less than 1024px, display app
  // if window is in landscape mode and on mobile, display rotate to portrait and hide desktop
  // if window is in landscape mode and on desktop, display desktop view
      // if window is less than 1024px, hide desktop view

  return (
    <main id="root" className="scroll-container">
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
    </main>
  )
}

export default App
