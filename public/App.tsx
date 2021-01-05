import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ScrollController from './ScrollController'
import Home from './components/Home'
import MysteriesHome from './components/Mysteries'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="scroll-container">
            <Home />
            <MysteriesHome />
          </div>
          {/* <ScrollController components={[
            <Home key="home" />,
            <MysteriesHome key="mysteries" />
          ]}/> */}
        </Route>
        <Route path="/glorious">
          <ScrollController components={[]} />
        </Route>
        <Route path="/joyful">

        </Route>
        <Route path="/sorrowful">

        </Route>
        <Route path="/luminous">

        </Route>
      </Switch>
    </Router>
  )
}

export default App
