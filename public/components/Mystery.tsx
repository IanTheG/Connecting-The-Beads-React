import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Location as Locale } from '../../node_modules/@types/history/index'

import { SceneI, initialState, MysteryI } from '../utils/interfaces'
import { fadeAnimation, getIndex } from '../utils/functions'

import Decade from './Decade'

const Mystery: React.FC<{ rosary: MysteryI[] }> = ({ rosary }) => {

  const location = useLocation<{ decade: number }>()

  const location2: Locale<{ decade: number }> = {
    ...location,
    state: location.state ? location.state : {decade: 0}
  }

  const { mystery } = useParams<{ mystery: string }>()

  const [currentMystery, setCurrentMystery] = useState<SceneI>(initialState)

  useEffect(() => {
    fadeAnimation()
  }, [])

  // Re-renders when state in location object changes or mystery changes, enables forward-backward navigation
  useEffect(() => {
    let mounted = true
    
    setCurrentMystery(rosary[getIndex(mystery)].decades[location2.state.decade])
    
    return () => {
      mounted = false
    }
  }, [location2.state.decade])

  return <Decade mysteryName={mystery} currentMystery={currentMystery} />
}

export default Mystery

// This is necessary because useLocation does not allow a default value if state is undefined
// const isStateDefined = () => {
//   if (location.state) {
//     return location.state.decade
//   } else {
//     return 0
//   }
// }