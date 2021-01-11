import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'

import { OUR_FATHER, GLORY_BE, FATIMA_PRAYER} from '../utils/prayers'
import Scene from './Scene'

import { SceneI } from '../utils/interfaces'

const Decade: React.FC<{ mysteryName: string, currentMystery: SceneI }> =
  ({ mysteryName, currentMystery }) => {

  const history = useHistory()
  const location = useLocation<{ decade: number }>()

  useEffect(() => {
    document.getElementById('top-container')?.scrollIntoView(true)
  })

  const handleNextDecade = () => {
    if (location.state.decade < 4) {
      const nextDecade = location.state.decade + 1
      history.push(mysteryName, {decade: nextDecade} )
    } else {
      // Navigate to closing prayers on final click
      history.push('/closing-prayers')
    }
  }

  return (
    <>
      <div id="top-container" className="container">
        <h2 className="stated-mystery">The {currentMystery.number} {mysteryName} Mystery is {currentMystery.name}.</h2>
        <div>
          <section>
            <p className="prayer">{OUR_FATHER[0]}</p>
            <p className="prayer">{OUR_FATHER[1]}</p>
          </section>
          <aside>
            <img />
          </aside>
        </div>
      </div>
      {Object.entries(currentMystery).map(([key, scene], idx2) => {
        if (key !== 'id' && key !== 'number' && key !== 'name') {
          return <Scene key={idx2.toString()} mystery={currentMystery.name} scene={scene}/>
        }})
      }
      <div className="container">
        <div>
          <section>
            <p className="prayer">{GLORY_BE[0]}</p>
            <p className="prayer">{GLORY_BE[1]}</p>
            <p className="prayer">{FATIMA_PRAYER}</p>
          </section>
          <aside>
            <img />
          </aside>
        </div>
        <button className="btn" onClick={handleNextDecade}>Continue</button>
      </div>
    </>
  )
}

export default Decade
