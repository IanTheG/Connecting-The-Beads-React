import React, { useEffect, useState } from 'react'
import getMystery from '../utils/api'
import { MysteryI, SceneI } from '../utils/interfaces'
import Decade from './Decade'
import ClosingPrayers from './ClosingPrayers'

const Mystery: React.FC<{name: string}> = ({ name }): JSX.Element | null => {

  const [selectedMysteries, setSelectedMysteries] = useState<MysteryI>()

  useEffect(() => {
    getMystery(name)
      .then((res) => setSelectedMysteries(res.data))
      .catch(err => console.error(err))
  }, [name])

  return (
    <>
      {selectedMysteries ? (
        Object.keys(selectedMysteries).map((decadeNumber, idx) => {
          let currentMysteryNumber: keyof MysteryI = decadeNumber as keyof MysteryI
          let currentScenes: SceneI = selectedMysteries[currentMysteryNumber];
          let mysteryName: string = selectedMysteries[currentMysteryNumber].name;

          return (
            <Decade
              key={idx.toString()}
              decadeNumber={decadeNumber}
              mystery={mysteryName}
              currentScenes={currentScenes}
              name={name}/>
          )
        }))
        : null}
    </>
  )
}

export default Mystery
