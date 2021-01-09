import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import getMystery from '../utils/api'
import { MysteryI, SceneI } from '../utils/interfaces'
import { OUR_FATHER, GLORY_BE, FATIMA_PRAYER} from '../utils/prayers'
import Scene from './Scene'
import ClosingPrayers from './ClosingPrayers'

const Mystery: React.FC<{mysteryName: string}> = ({ mysteryName }): JSX.Element | null => {

  const [selectedMysteries, setSelectedMysteries] = useState<MysteryI>()  // Manages mysteries
  const [currentMystery, setCurrentMystery] = useState<SceneI>()          // Manages current mystery/decade
  const [currentDecade, setCurrentDecade] = useState<number>(0)           // Manages current mystery/decade number

  const history = useHistory()

  useEffect(() => {
    getMystery(mysteryName)
      .then((res) => {
        setSelectedMysteries(res.data)
        setCurrentDecade(0)
        setCurrentMystery(res.data.decades[0])
      })
      .catch(err => console.error(err))
  }, [mysteryName])

  // console.log(selectedMysteries)

  // Render a decade at a time, user clicks/taps a button to navigate to the next decade
  const handleNextDecade = () => {
    if (currentDecade < 4 && selectedMysteries) {
      const nextDecade = currentDecade + 1
      setCurrentDecade(nextDecade)
      setCurrentMystery(selectedMysteries.decades[nextDecade])
      document.getElementById('top-container')?.scrollIntoView(true)
    } else {
      // Navigate to closing prayers on final click
      history.push('/closing')
    }
  }

  return selectedMysteries && currentMystery ? (
    <>
      <div id="top-container" className="container">
        <h2 className="">The {currentMystery.number} {selectedMysteries.name} Mystery is {currentMystery.name}.</h2>
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
            <Scene
              key={idx2.toString()}
              decadeNumber={currentMystery.number}
              selectedMystery={selectedMysteries.name}
              mystery={currentMystery.name}
              scene={scene}/>
          )
        }
      })}

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
    ) : null
}

export default Mystery

// {Object.values(selectedMysteries.decades[currentDecade]).map((scene, idx2) => {
//   if (Object.entries) {
//     return (
//       <Scene key={idx2.toString()} decadeNumber={selectedMysteries.decades[currentDecade].number} selectedMystery={selectedMysteries.name} mystery={selectedMysteries.decades[currentDecade].name} scene={scene}/>
//     )
//   }
// })}