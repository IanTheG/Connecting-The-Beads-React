import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'

import { OUR_FATHER, GLORY_BE, FATIMA_PRAYER} from '../utils/prayers'
import { fadeAnimation } from '../utils/functions'
import Scene from './Scene'

import { SceneI } from '../utils/interfaces'

const Decade: React.FC<{ mysteryName: string, currentDecade: SceneI }> =
  ({ mysteryName, currentDecade }) => {

  const history = useHistory()
  const { state } = useLocation<{ decade: number }>()

  useEffect(() => {
    document.getElementById('top-container')?.scrollIntoView(true)

    fadeAnimation()
  })

  const handleNextDecade = () => {
    if (state) {
      if (state.decade < 4) {
        const nextDecade = state.decade + 1
        history.push(mysteryName, {decade: nextDecade} )
      } else {
        history.push('/closing-prayers')
      }
    } else {
      // Push to the first mystery if just entering ie: /glorious into the address bar
      history.push(mysteryName, {decade: 1} )
    }
  }

  return (
    <>
      <div id="top-container" className="container">
        <h2 className="stated-mystery">The {currentDecade.number} {mysteryName.charAt(0).toUpperCase() + mysteryName.slice(1)} Mystery is {currentDecade.name}.</h2>
        <div>
          <section>
            <p className="prayer">{OUR_FATHER[0]}</p>
            <p className="prayer">{OUR_FATHER[1]}</p>
          </section>
          <aside>
            <img />
          </aside>
        </div>
      </div>
      {Object.entries(currentDecade).map(([key, scene], idx2) => {
        if (key !== '_id' && key !== 'number' && key !== 'name') {
          return <Scene key={idx2.toString()} mystery={currentDecade.name} scene={scene}/>
        }})
      }
      <div className="container">
        <div>
          <section>
            <p className="prayer">{GLORY_BE[0]}</p>
            <p className="prayer">{GLORY_BE[1]}</p>
            <p className="prayer">{FATIMA_PRAYER}</p>
          </section>
          <aside>
            <img />
          </aside>
        </div>
        <button className="btn" onClick={handleNextDecade}>Continue</button>
      </div>
    </>
  )
}

export default Decade
