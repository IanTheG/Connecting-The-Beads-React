import React from 'react'
import { HAIL_MARY } from '../utils/prayers'
import { SceneI } from '../utils/interfaces'

// Render 10 scenes at a time
const Scene: React.FC<{ mystery: string, scene: SceneI, idx: number }> = 
  ({ mystery, scene, idx }) => {

  return (
    <div className="container">
      <section>
        <h3 className="stated-mystery">{mystery}</h3>
        <p className="prayer">{scene.verse}</p>
        {/* <p className="desc desc--italic">Hail Mary...</p> */}
      </section>
      <aside>
        <img src={scene.img} alt={`${mystery} ${idx+1}`}/>
      </aside>
      <div>
        <section className="prayer--section">
          <div>
            <p className="prayer">{HAIL_MARY[0]}</p>
            <p className="prayer">{HAIL_MARY[1]}</p>
          </div>
        </section>
        <div className="hail-mary-number">
          <div className="hail-mary-number__text">
            <p>{idx+1}</p>
          </div>
          <p className="prayer" style={{padding: 0}}>Amen.</p>
        </div>
      </div>
    </div>
  )
}

export default Scene
