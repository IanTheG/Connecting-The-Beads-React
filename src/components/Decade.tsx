import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'

import { OUR_FATHER, GLORY_BE, FATIMA_PRAYER} from '../utils/prayers'
import { fadeAnimation } from '../utils/functions'
import Scene from './Scene'

import { DecadeI } from '../utils/interfaces'

const Decade: React.FC<{ mysteryName: string, currentDecade: DecadeI }> =
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
        <section>
          <h2 className="stated-mystery">The {currentDecade.number} {mysteryName.charAt(0).toUpperCase() + mysteryName.slice(1)} Mystery is {currentDecade.name}</h2>
          <p className="desc desc--italic">Our Father...</p>
        </section>
        {/* <section className="prayer--section">
          <div>
            <p className="prayer prayer--top">{OUR_FATHER[0]}</p>
            <p className="prayer">{OUR_FATHER[1]}</p>
            <p className="prayer">{OUR_FATHER[2]}</p>
          </div>
        </section> */}
      </div>
      {currentDecade.scenes.map((scene, idx) => <Scene key={idx} mystery={currentDecade.name} scene={scene} idx={idx} /> )}
      <div className="container">
        <section className="prayer--section">
          <div>
            <h3 className="title">Glory Be</h3>
            <p className="prayer prayer--top">{GLORY_BE[0]}</p>
            <p className="prayer">{GLORY_BE[1]}</p>
            <p className="prayer">{GLORY_BE[2]}</p>
          </div>
        </section>
        <section className="prayer--section">
          <div>
            <h3 className="title">Fatima Prayer</h3>
            <p className="prayer">{FATIMA_PRAYER}</p>
          </div>
        </section>
        <div className="btn--container">
          <button className="btn" onClick={handleNextDecade}>Continue</button>
        </div>
      </div>
    </>
  )
}

export default Decade
