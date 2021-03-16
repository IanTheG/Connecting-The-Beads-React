import React, { useEffect } from 'react'

import Scene from './Scene'

// import { HAIL_MARY } from '../utils/prayers'
import { DecadeI } from '../utils/interfaces'
import { fadeAnimation } from '../utils/functions'

const SceneContainer: React.FC<{ currentDecade: DecadeI }> = ({ currentDecade }) => {

  useEffect(() => {
    const verseBottomMargin = document.getElementById('hailMary')?.offsetHeight
    document.querySelectorAll('.verse').forEach((el) => {
      (el as HTMLElement).style.marginBottom = `${verseBottomMargin}px`
    })

    fadeAnimation()
  }, [])

  return (
    <div>
      <h3 className="subtitle sticky--top no-border">{currentDecade.name}</h3>

      {currentDecade.scenes.map((scene, idx) => <Scene key={idx} scene={scene} index={idx+1}/> )}
        {/* <section
          className="prayer--section sticky--bottom"
          onClick={() => setDisplayHailMary(!displayHailMary)}
          style={{zIndex: 2, opacity: displayHailMary ? '1' : '0'}}
        >
          <div className="prayer--short">
            <p className="prayer prayer--top" style={{fontSize: '1.2rem'}}>Hail Mary...</p>
          </div>
          <div className="prayer--long">
            <p className="prayer prayer--top">{HAIL_MARY[0]}</p>
            <p className="prayer">{HAIL_MARY[1]}</p>
            <p className="prayer">Amen.</p>
          </div>
        </section> */}
      <h3
        id="hailMary"
        className="subtitle sticky--bottom no-border"
        style={{textAlign: 'left'}}
        // onClick={() => setDisplayHailMary(!displayHailMary)}
        >Hail Mary...
      </h3>
    </div>
  )
}

export default SceneContainer
