import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import Home from './components/Home'
import MysteriesNav from './components/MysteriesNav'
import Guide from './components/Guide'
import Mystery from './components/Mystery'
import OpeningPrayers from './components/OpeningPrayers'
import ClosingPrayers from './components/ClosingPrayers'

const App = () => {

  return (
    <main id="root" className="scroll-container">
      <Switch>
        <Route exact path="/">
          <Home />
          <Guide />
          <OpeningPrayers />
          <MysteriesNav />
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
