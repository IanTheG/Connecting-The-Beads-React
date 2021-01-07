import React from 'react'
import { SceneI } from '../utils/interfaces'
import { OUR_FATHER, GLORY_BE, FATIMA_PRAYER } from '../utils/prayers'
import Scene from './Scene'

const Decade: React.FC<{decadeNumber: string, mystery: string, name: string, currentScenes: SceneI}> =
  ({ decadeNumber, mystery, name, currentScenes }) => {

  return (
    <>
      <div className="container">
        <h2>The {decadeNumber} {name} Mystery is {mystery}.</h2>
        {/* Image of the current mystery */}
        <img />
        <p className="prayer">{OUR_FATHER[0]}</p>
        <p className="prayer">{OUR_FATHER[1]}</p>
      </div>

      {Object.keys(currentScenes).map((scene, idx2) => {
        if (scene !== 'name' && scene !== 'number') {
          return (
            <Scene key={idx2.toString()} decadeNumber={decadeNumber} mystery={mystery} name={name}/>
          )
        }
      })}

      <div className="container">
        <p className="prayer">{GLORY_BE[0]}</p>
        <p className="prayer">{GLORY_BE[1]}</p>
        <p className="prayer">{FATIMA_PRAYER}</p>
      </div>
    </>
  )

}

export default Decade
