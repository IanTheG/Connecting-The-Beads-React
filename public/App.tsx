import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import MysteriesHome from './components/MysteriesHome'
import Guide from './components/Guide'
import Mystery from './components/Mystery'
import OpeningPrayers from './components/OpeningPrayers'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="scroll-container">
            <Home />
            <Guide />
            <OpeningPrayers />
            <MysteriesHome />
          </div>
        </Route>
        <Route path="/glorious">
          <div className="scroll-container">
            <Mystery mysteryName="glorious"/>
          </div>
        </Route>
        <Route path="/joyful">
          <div className="scroll-container">
            <Mystery mysteryName="joyful"/>
          </div>
        </Route>
        <Route path="/sorrowful">
          <div className="scroll-container">
            <Mystery mysteryName="sorrowful"/>
          </div>
        </Route>
        <Route path="/luminous">
          <div className="scroll-container">
            <Mystery mysteryName="luminous"/>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
