import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import getMystery from '../utils/api'
import { SceneI } from '../utils/interfaces'
import { fadeAnimation } from '../utils/functions'

import Decade from './Decade'

const Mystery: React.FC<{mysteryName: string}> = ({ mysteryName }): JSX.Element | null => {

  const history = useHistory()
  const location = useLocation<{ decade: number }>()

  // if (!location.state.decade) {
  //   history.push(mysteryName, {decade: 0})
  // }

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

  const [currentMystery, setCurrentMystery] = useState<SceneI>(initialState)

  useEffect(() => {
    fadeAnimation()
  })

  // Re-renders when state in location object changes, enables forward-backward navigation
  useEffect(() => {
    let mounted = true
    getMystery(mysteryName)
      .then((res) => mounted && setCurrentMystery(res.data.decades[location.state.decade]))
      .catch(err => console.error(err))
    
    return () => {
      mounted = false
    }
  }, [location.state.decade])

  return <Decade mysteryName={mysteryName} currentMystery={currentMystery}/>
}
export default Mystery
