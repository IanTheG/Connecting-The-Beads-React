import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import MysteriesNav from './components/MysteriesNav'
import Guide from './components/Guide'
import Mystery from './components/Mystery'
import OpeningPrayers from './components/OpeningPrayers'
import ClosingPrayers from './components/ClosingPrayers'

const App = () => {

  let orientation: number = 0

  window.addEventListener('orientationchange', (e) => {
    orientation = (e.target as Window).screen.orientation.angle

    if (orientation === 90) {
      // show / hide the app and a page that asks the user to rotate the device to portrait mode
    }

  })


  return (
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
  )
}

export default App
