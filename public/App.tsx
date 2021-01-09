import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import MysteriesNav from './components/MysteriesNav'
import Guide from './components/Guide'
import Mystery from './components/Mystery'
import OpeningPrayers from './components/OpeningPrayers'
import ClosingPrayers from './components/ClosingPrayers'

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        <Guide />
        <OpeningPrayers />
        <MysteriesNav />
      </Route>
      <Route path="/glorious/:mystery">
        <Mystery mysteryName="glorious"/>
      </Route>
      <Route path="/joyful/:mystery">
        <Mystery mysteryName="joyful"/>
      </Route>
      <Route path="/sorrowful/:mystery">
        <Mystery mysteryName="sorrowful"/>
      </Route>
      <Route path="/luminous/:mystery">
        <Mystery mysteryName="luminous"/>
      </Route>
      <Route path="/closing-prayers">
        <ClosingPrayers />
      </Route>
    </Switch>
  )
}

export default App
