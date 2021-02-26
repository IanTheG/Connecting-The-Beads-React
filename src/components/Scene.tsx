import React from 'react'

import { SceneI } from '../utils/interfaces'

const Scene: React.FC<{ scene: SceneI }> = ({ scene }) => {

  // index: number, setIndex: React.Dispatch<React.SetStateAction<number>>

  return (
    <div className="container">
      <section className="verse">
        <p className="prayer">{scene.verse}</p>
        <p className="prayer desc--italic">{scene.ref}</p>
      </section>
    </div>
  )
}

export default Scene
