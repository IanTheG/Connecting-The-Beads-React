import React, { useEffect, useState } from 'react'
import getMystery from '../utils/api'
import { MysteryI } from '../utils/interfaces'
import { OUR_FATHER, GLORY_BE, FATIMA_PRAYER} from '../utils/prayers'
import Scene from './Scene'
import ClosingPrayers from './ClosingPrayers'

const Mystery: React.FC<{mysteryName: string}> = ({ mysteryName }): JSX.Element | null => {

  const [selectedMysteries, setSelectedMysteries] = useState<MysteryI>()
  const [currentDecade, setCurrentDecade] = useState<number>(0);

  useEffect(() => {
    getMystery(mysteryName)
      .then((res) => {
        setSelectedMysteries(res.data)
        setCurrentDecade(0)
      })
      .catch(err => console.error(err))
  }, [mysteryName])

  // console.log(selectedMysteries)

  // Render a decade at a time, user clicks/taps a button to navigate to the next decade
  const handleNextDecade = () => {
    if (currentDecade < 4) {
      setCurrentDecade(currentDecade + 1)
      document.getElementById('top-container')?.scrollIntoView(true)
    }
  }

  return selectedMysteries ? (
    <>
      <div id="top-container" className="container">
        <h2 className="">The {selectedMysteries.decades[currentDecade].number} {mysteryName} Mystery is {selectedMysteries.decades[currentDecade].name}.</h2>

        <img />
        <p className="prayer">{OUR_FATHER[0]}</p>
        <p className="prayer">{OUR_FATHER[1]}</p>
      </div>

      {Object.keys(selectedMysteries.decades[currentDecade]).map((scene, idx2) => {
        if (scene !== 'name' && scene !== 'number') {
          return (
            <Scene key={idx2.toString()} decadeNumber={selectedMysteries.decades[currentDecade].number} mystery={selectedMysteries.decades[currentDecade].name} selectedMystery={mysteryName}/>
          )
        }
      })}

      <div className="container">
        <p className="prayer">{GLORY_BE[0]}</p>
        <p className="prayer">{GLORY_BE[1]}</p>
        <p className="prayer">{FATIMA_PRAYER}</p>
        <button className="" onClick={handleNextDecade}>Continue</button>
      </div>
    </>
    ) : null
}

export default Mystery
