import React from 'react'
// import { HAIL_MARY } from '../utils/prayers'
import { SceneI } from '../utils/interfaces'

// Render 10 scenes at a time
const Scene: React.FC<{ mystery: string, scene: SceneI, idx: number }> = 
  ({ mystery, scene, idx }) => {

  return (
    <div className="container">
      <section>
        <h3 className="stated-mystery">{mystery}</h3>
        {/* Render scene */}
        <p className="prayer">{scene.verse}</p>
        <p className="desc desc--italic">Hail Mary...</p>
      </section>
      <aside>
        <img src={scene.img} alt={`${mystery} ${idx+1}`}/>
      </aside>
      <section>
        {/* <p className="prayer">{HAIL_MARY[0]}</p>
        <p className="prayer">{HAIL_MARY[1]}</p> */}
        <div className="hail-mary-number">
          <div className="hail-mary-number__text">
            <p>{idx+1}</p>
          </div>
          {/* <p className="prayer" style={{padding: 0}}>{HAIL_MARY[2]}</p> */}
        </div>
      </section>
    </div>
  )
}

export default Scene
