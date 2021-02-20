import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Guide from './components/Guide'
import OpeningPrayers from './components/OpeningPrayers'
import MysteriesNav from './components/MysteriesNav'
import ClosingPrayers from './components/ClosingPrayers'
import Mystery from './components/Mystery'
import About from './components/About'

const App = () => {

  // Watch for window resize changes to change viewport window size
  const setDocHeight = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`)
  }
  window.addEventListener('load', setDocHeight)
  window.addEventListener('resize', setDocHeight)
  window.addEventListener('orientationchange', setDocHeight)

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
