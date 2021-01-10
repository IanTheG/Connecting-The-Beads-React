import React from 'react'
import { HAIL_MARY } from '../utils/prayers'

// Render 10 scenes at a time
const Scene: React.FC<{ mystery: string, scene: string}> = 
  ({ mystery, scene }) => {

  return (
    <div className="container container--landscape">
      <section>
        <h3 className="stated-mystery">{mystery}</h3>
        {/* Render scene */}
        <p className="prayer">{scene}</p>
      </section>
      <aside>
        <img />
      </aside>
      <section>
        <p className="prayer">{HAIL_MARY[0]}</p>
        <p className="prayer">{HAIL_MARY[1]}</p>
      </section>
    </div>
  )
}

export default Scene
