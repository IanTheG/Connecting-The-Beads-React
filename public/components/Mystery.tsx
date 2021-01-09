import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useParams } from 'react-router-dom'

import getMystery from '../utils/api'
import { MysteryI, SceneI } from '../utils/interfaces'
import { RosaryContext } from '../utils/RosaryContext'

import Decade from './Decade'

const Mystery: React.FC<{mysteryName: string}> = ({ mysteryName }): JSX.Element | null => {

  const { mystery } = useParams<{ mystery: string }>()
  const location = useLocation<{ decade: number }>();

  const initialStateMysteries: MysteryI = {
    id: '',
    name: '',
    decades: []
  }

  const initialState: SceneI = {
    id: '',
    name: '',
    number: '',
    scene1: '',
    scene2: '',
    scene3: '',
    scene4: '',
    scene5: '',
    scene6: '',
    scene7: '',
    scene8: '',
    scene9: '',
    scene10: '',
  }

  const [selectedMysteries, setSelectedMysteries] = useState<MysteryI>(initialStateMysteries)  // Manages mysteries
  const [currentMystery, setCurrentMystery] = useState<SceneI>(initialState)          // Manages current mystery/decade
  // const [currentDecade, setCurrentDecade] = useState<number>(0)          // Manages current mystery/decade number

  const history = useHistory()

  useEffect(() => {
    if (location.state) {
    }
  })

  // Run when currentDecade increases or decreases
  useEffect(() => {
    let mounted = true
    getMystery(mysteryName)
      .then((res) => mounted && setCurrentMystery(res.data.decades[location.state.decade]))
      .catch(err => console.error(err))
    
    return () => {
      mounted = false
    }
  }, [location.state.decade])
  
  // Run on initial render of mystery component
  useEffect(() => {
    let mounted = true
    getMystery(mysteryName)
      .then((res) => mounted && setSelectedMysteries(res.data))
      .catch(err => console.error(err))
    
    return () => {
      mounted = false
    }
  }, [mysteryName])

  return (
    <>
      {/* Pass selected mysteries as state to decade and scene (child) components */}
      <RosaryContext.Provider value={{ selectedMysteries, currentMystery }}>
        <Decade mysteryName={mysteryName}/>
      </RosaryContext.Provider>
    </>
  )
}
export default Mystery
