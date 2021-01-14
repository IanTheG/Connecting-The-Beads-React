import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import MysteriesNav from './components/MysteriesNav'
import Guide from './components/Guide'
import Mystery from './components/Mystery'
import OpeningPrayers from './components/OpeningPrayers'
import ClosingPrayers from './components/ClosingPrayers'

import { MysteryI } from './utils/interfaces'
import getRosary from './utils/api'

const App = () => {

  const [rosary, setRosary] = useState<MysteryI[]>([])

  useEffect(() => {
    let mounted = true

    getRosary()
      .then((res) => setRosary(res.data))
      .catch(err => console.error(err))

    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    console.log(rosary)
  }, [])

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
          <Mystery rosary={rosary}/>
        </Route>
      </Switch>
    </main>
  )
}

export default App
