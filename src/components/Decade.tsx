import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'

import { OUR_FATHER, GLORY_BE, FATIMA_PRAYER } from '../utils/prayers'
import SceneContainer from './SceneContainer'

import { useImage } from '../utils/ImageContext'
import { DecadeI } from '../utils/interfaces'

const Decade: React.FC<{ mysteryName: string, currentDecade: DecadeI }> =
  ({ mysteryName, currentDecade }) => {

  const history = useHistory()
  const { state } = useLocation<{ decade: number }>()
  const { setCurrentImageIndex } = useImage()!
  
  useEffect(() => {
    document.getElementById('top-container')?.scrollIntoView(true)
    setCurrentImageIndex(currentDecade.id)
  }, [currentDecade])

  const handleNextDecade = () => {
    if (state) {
      if (state.decade < 5) {
        const nextDecade = state.decade + 1
        history.push(mysteryName, {decade: nextDecade} )
      } else {
        history.push('/closing-prayers')
      }
    } else {
      // Push to the first mystery if just entering ie: /glorious into the address bar
      history.push(mysteryName, {decade: 1})
    }
  }

  return (
    <>
      <div id="top-container" className="container">
        <section>
          <h2 className="subtitle subtitle--trans no-border" style={{ paddingBottom: 0 }}>
            The {currentDecade.number} {mysteryName.charAt(0).toUpperCase() + mysteryName.slice(1)} Mystery
          </h2>
          <h2 className="subtitle subtitle--trans no-border" style={{ padding: "0 0 1rem 0"}}>
            {currentDecade.name}
          </h2>
          <p className="subtitle subtitle--trans subtitle--fruit no-border">
            Fruits of the mystery: {currentDecade.fruits}.
          </p>
        </section>
        <div style={{flex: 1}}></div>
        <section className="prayer--section">
          <div className="prayer--long">
            <p className="prayer prayer--top">{OUR_FATHER[0]}</p>
            <p className="prayer">{OUR_FATHER[1]}</p>
            <p className="prayer">{OUR_FATHER[2]}</p>
          </div>
        </section>
      </div>

      <SceneContainer currentDecade={currentDecade}/>

      <div id="bottom-container" className="container theme--trans">
        <section className="prayer--section" style={{backgroundColor: 'transparent', flex: 1}}>
          <div>
            <h3 className="title title--clear no-border">Glory Be</h3>
            <div className="hero-line"></div>
            <p className="prayer prayer--top">{GLORY_BE[0]}</p>
            <p className="prayer">{GLORY_BE[1]}</p>
            <p className="prayer">{GLORY_BE[2]}</p>
          </div>
        </section>
        <section className="prayer--section" style={{backgroundColor: 'transparent', flex: 1}}>
          <div>
            <h3 className="title title--clear no-border">Fatima Prayer</h3>
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
