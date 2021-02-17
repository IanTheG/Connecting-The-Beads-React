import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { Location as Locale } from 'history'

import { DecadeI, initialState, MysteryI } from '../utils/interfaces'
import { fadeAnimation } from '../utils/functions'
import getMystery from '../utils/api'

import Decade from './Decade'

const Mystery = () => {

  const history = useHistory()

  const location = useLocation<{ decade: number }>()

  // Sets a default state for location, otherwise crashes app
  const location2: Locale<{ decade: number }> = {
    ...location,
    state: location.state ? location.state : {decade: 0}
  }

  const { mystery } = useParams<{ mystery: string }>()

  const [currentMystery, setCurrentMystery] = useState<MysteryI>()
  const [currentDecade, setCurrentDecade] = useState<DecadeI>(initialState)

  // Initializes the chosen mystery in state (prevents repeated server GET requests)
  useEffect(() => {
    fadeAnimation()
    let mounted = true
    
    const initializeMystery = async () => {
      const chosenMystery = await getMystery(mystery)
      if (chosenMystery) setCurrentMystery(chosenMystery.data)
      else history.push('/')
    }
    mounted && initializeMystery();

    return () => {
      mounted = false
    }
  }, [])

  // Re-renders when state in location object changes or mystery changes, enables forward-backward navigation
  useEffect(() => {
      currentMystery && setCurrentDecade(currentMystery.decades[location2.state.decade])
  }, [currentMystery, location2.state.decade])

  return (
    currentMystery
      ? <Decade mysteryName={mystery} currentDecade={currentDecade} />
      : <Loading mysteryName={mystery} />
  )
}

export default Mystery

const Loading: React.FC<{ mysteryName: string }> = ({ mysteryName }) => {

  useEffect(() => {
    fadeAnimation()
  })

  return (
    <div className="container" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ fontFamily: 'Geneva', textAlign: 'center' }}>Loading the {mysteryName.charAt(0).toUpperCase() + mysteryName.slice(1)} Mysteries</h2>
    </div>
  )
}