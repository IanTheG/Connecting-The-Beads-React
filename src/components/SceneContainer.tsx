import React, { useEffect, useState } from 'react'

import Scene from './Scene'

import { HAIL_MARY } from '../utils/prayers'
import { DecadeI } from '../utils/interfaces'
import { fadeAnimation } from '../utils/functions'

const SceneContainer: React.FC<{ currentDecade: DecadeI }> = ({ currentDecade }) => {

  const [index, setIndex] = useState(1);
  // previousScene={idx > 0 && currentDecade.scenes[idx-1]}

  useEffect(() => {
    const verseTopMarginHeight = document.getElementById('mysteryName')?.offsetHeight
    document.querySelectorAll('.verse').forEach((el) => {
      (el as HTMLElement).style.marginTop = `${verseTopMarginHeight}px`
    })
    
    fadeAnimation()
  })

  return (
    <div>
      <h3 id="mysteryName" className="subtitle sticky--top">{currentDecade.name}</h3>

      {currentDecade.scenes.map((scene, idx) => <Scene key={idx} scene={scene} /> )}
        <section className="prayer--section sticky--bottom">
          <div>
            <p className="prayer prayer--top">{HAIL_MARY[0]}</p>
            <p className="prayer">{HAIL_MARY[1]}</p>
            <p className="prayer">Amen.</p>
          </div>
          {/* <div className="hail-mary-number">
            <div className="hail-mary-number__text">
              <p>{index}</p>
            </div>
            <p className="prayer" style={{paddingLeft: 0}}>Amen.</p>
          </div> */}
        </section>
    </div>
  )
}

export default SceneContainer
