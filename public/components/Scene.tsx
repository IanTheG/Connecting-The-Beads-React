import React from 'react'
import { HAIL_MARY } from '../utils/prayers'

// Render 10 scenes at a time
const Scene: React.FC<{decadeNumber: string, mystery: string, selectedMystery: string, scene: string}> = 
  ({ decadeNumber, mystery, selectedMystery, scene }) => {

  return (
    <div className="container container--landscape">
      <section>
        {/* <h2 className="">The {decadeNumber} {selectedMystery} Mystery</h2> */}
        <h3 className="">{mystery}</h3>
        <p>{scene}</p>
        <p className="prayer">{HAIL_MARY[0]}</p>
        <p className="prayer">{HAIL_MARY[1]}</p>
      </section>
      {/* Render scene */}
      <aside>
        <img />
      </aside>
    </div>
  )
}

export default Scene
