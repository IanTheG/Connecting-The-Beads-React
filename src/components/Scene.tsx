import React from 'react'

import { SceneI } from '../utils/interfaces'

const Scene: React.FC<{ scene: SceneI, index: number }> = ({ scene, index }) => {

  return (
    <div className="container">
      <div style={{flex: 1}}></div>
      <section className="verse">
        <div className="hail-mary-number">
          <div className="hail-mary-number__text">
            <p>{index}</p>
          </div>
        </div>
        <p className="prayer prayer--top scene-item">{scene.verse}</p>
        <p className="prayer desc--italic scene-item" style={{fontSize: '0.9rem'}}>{scene.ref}</p>
      </section>
    </div>
  )
}

export default Scene
