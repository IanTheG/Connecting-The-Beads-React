import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import MysteriesHome from './components/MysteriesHome'
import Guide from './components/Guide'
import Mystery from './components/Mystery'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="scroll-container">
            <Home />
            <Guide />
            <MysteriesHome />
          </div>
        </Route>
        <Route path="/glorious">
          <div className="scroll-container">
            <Mystery name="glorious"/>
          </div>
        </Route>
        <Route path="/joyful">
          <div className="scroll-container">
            <Mystery name="joyful"/>
          </div>
        </Route>
        <Route path="/sorrowful">
          <div className="scroll-container">
            <Mystery name="sorrowful"/>
          </div>
        </Route>
        <Route path="/luminous">
          <div className="scroll-container">
            <Mystery name="luminous"/>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
