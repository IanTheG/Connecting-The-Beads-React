import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'

import { MysteryI, SceneI } from '../utils/interfaces'
import { OUR_FATHER, GLORY_BE, FATIMA_PRAYER} from '../utils/prayers'
import Scene from './Scene'

import { useRosary } from '../utils/RosaryContext'

const Decade: React.FC<{ mysteryName: string }> = ({ mysteryName }) => {

  // Access state from RosaryContext.Provider in Mystery component
  const { selectedMysteries, currentMystery } = useRosary()!;

  const history = useHistory()
  const location = useLocation<{ decade: number }>()

  useEffect(() => {
    document.getElementById('top-container')?.scrollIntoView(true)
  })

  const handleNextDecade = () => {
    if (location.state.decade < 4) {
      const nextDecade = location.state.decade + 1
      const nextMysteryUrl = selectedMysteries.decades[nextDecade].name.toLowerCase().replace(/\s/g, '-')
      const nextUrl = `/${mysteryName}/${nextMysteryUrl}`

      // Format link to push to with state, enables forward and back navigation
      // setCurrentDecade(nextDecade)
      history.push(nextUrl, {decade: nextDecade} )
    } else {
      // Navigate to closing prayers on final click
      history.push('/closing-prayers')
    }
  }

  return (
    <>
      <div id="top-container" className="container">
        <h2 className="">The {currentMystery.number} {mysteryName} Mystery is {currentMystery.name}.</h2>
        <div className="container--landscape">
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
            return (
              <Scene key={idx2.toString()} mystery={currentMystery.name} scene={scene}/>
            )
          }
        })
      }
      <div className="container">
        <div className="container--landscape">
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
