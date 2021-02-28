import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import { OUR_FATHER, GLORY_BE, FATIMA_PRAYER } from '../utils/prayers'
import { fadeAnimation } from '../utils/functions'
import SceneContainer from './SceneContainer'

import { DecadeI } from '../utils/interfaces'

const Decade: React.FC<{ mysteryName: string, currentDecade: DecadeI }> =
  ({ mysteryName, currentDecade }) => {

  const history = useHistory()
  const { state } = useLocation<{ decade: number }>()

  // const [index, setIndex] = useState(0);

  useEffect(() => {
    const root = document.getElementById('root')
    root!.style.backgroundImage = `url(${currentDecade.image})`

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
          <h2 className="subtitle">The {currentDecade.number} {mysteryName.charAt(0).toUpperCase() + mysteryName.slice(1)} Mystery is {currentDecade.name}</h2>
          <p className="subtitle" style={{fontStyle: 'italic', paddingTop: '0'}}>Fruits of the mystery: {currentDecade.fruits}.</p>
        </section>
        <section className="prayer--section">
          <div>
            <p className="prayer prayer--top">{OUR_FATHER[0]}</p>
            <p className="prayer">{OUR_FATHER[1]}</p>
            <p className="prayer">{OUR_FATHER[2]}</p>
          </div>
        </section>
      </div>

      {/* <div className="container"> */}

      <SceneContainer currentDecade={currentDecade}/>

      {/* </div> */}

      <div id="bottom-container" className="container">
        <section>
          <div>
            <h3 className="title title--clear">Glory Be</h3>
            <div className="hero-line"></div>
            <p className="prayer prayer--top">{GLORY_BE[0]}</p>
            <p className="prayer">{GLORY_BE[1]}</p>
            <p className="prayer">{GLORY_BE[2]}</p>
          </div>
        </section>
        <section>
          <div>
            <h3 className="title title--clear">Fatima Prayer</h3>
            <div className="hero-line"></div>
            <p className="prayer prayer--top">{FATIMA_PRAYER}</p>
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
