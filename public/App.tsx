import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import MysteriesNav from './components/MysteriesNav'
import Guide from './components/Guide'
import Mystery from './components/Mystery'
import OpeningPrayers from './components/OpeningPrayers'
import ClosingPrayers from './components/ClosingPrayers'

import { rotateToPortrait } from './utils/functions'

const App = () => {

  useEffect(() => {
    rotateToPortrait()
  })

  return (
    <main id="root" className="scroll-container">
      <Switch>
        <Route exact path="/">
          <Home />
          <Guide />
          <OpeningPrayers />
          <MysteriesNav />
        </Route>
        <Route path="/glorious">
          <Mystery mysteryName="glorious"/>
        </Route>
        <Route path="/joyful">
          <Mystery mysteryName="joyful"/>
        </Route>
        <Route path="/sorrowful">
          <Mystery mysteryName="sorrowful"/>
        </Route>
        <Route path="/luminous">
          <Mystery mysteryName="luminous"/>
        </Route>
        <Route path="/closing-prayers">
          <ClosingPrayers />
        </Route>
      </Switch>
    </main>
  )
}

export default App
