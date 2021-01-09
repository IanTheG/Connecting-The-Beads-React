import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import MysteriesNav from './components/MysteriesNav'
import Guide from './components/Guide'
import Mystery from './components/Mystery'
import OpeningPrayers from './components/OpeningPrayers'
import ClosingPrayers from './components/ClosingPrayers'

const App = () => {
  return (
    <Router>
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
        <Route path="/closing">
          <ClosingPrayers />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
