import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { Location as Locale } from 'history'

import { DecadeI, initialState, MysteryI } from '../utils/interfaces'
import { fadeAnimation } from '../utils/functions'
// import getMystery from '../utils/api'
import { useImage } from '../utils/ImageContext'

import glorious from '../data/glorious.json'
import joyful from '../data/joyful.json'
import luminous from '../data/luminous.json'
import sorrowful from '../data/sorrowful.json'

import Decade from './Decade'

const Mystery = () => {

  const history = useHistory()
  const location = useLocation<{ decade: number }>()
  const { mystery } = useParams<{ mystery: string }>()
  const { setSelectedMysteryImages } = useImage()!

  const [currentMystery, setCurrentMystery] = useState<MysteryI>()
  const [currentDecade, setCurrentDecade] = useState<DecadeI>(initialState)

  // Sets a default state for location, otherwise crashes app
  const location2: Locale<{ decade: number }> = {
    ...location,
    state: location.state ? location.state : { decade: 1 }
  }

  // Initializes the chosen mystery in state (prevents repeated server GET requests)
  useEffect(() => {
    fadeAnimation()
    let mounted = true

    // const initializeMystery = async () => {
    //   const chosenMystery = await getMystery(mystery)
    //   if (chosenMystery) {
    //     setCurrentMystery(chosenMystery.data)
    //     const chosenMysteryImages = chosenMystery.data.decades.map((decade) => {
    //       return { url: decade.image, alt: decade.name }
    //     })
    //     setSelectedMysteryImages(chosenMysteryImages)
    //   }
    //   else history.push('/')
    // }
    // mounted && initializeMystery();

    const initializeMystery = () => {
      let chosenMystery: MysteryI
      switch (mystery.toLowerCase()) {
        case 'glorious' :
          chosenMystery = glorious
          break
        case 'joyful' :
          chosenMystery = joyful
          break
        case 'luminous' :
          chosenMystery = luminous
          break
        case 'sorrowful' :
          chosenMystery = sorrowful
          break
        default :
          history.push('/')
          return
      }
      setCurrentMystery(chosenMystery)
      const chosenMysteryImages = chosenMystery.decades.map((decade) => {
        return { url: decade.image, alt: decade.name }
      })
      setSelectedMysteryImages(chosenMysteryImages)
    }
    mounted && initializeMystery();

    return () => {
      mounted = false
    }
  }, [])

  // Re-renders when state in location object changes or mystery changes, enables forward-backward navigation
  useEffect(() => {
    if (currentMystery) setCurrentDecade(currentMystery.decades[location2.state.decade - 1])
  }, [currentMystery, location2.state.decade])

  return (
    // Only render decade if name is set (after pulling from API)
    // currentDecade.name !== ''
    // ? <Decade mysteryName={mystery} currentDecade={currentDecade} />
    // : <Loading mysteryName={mystery} />
    currentDecade.name !== ''
      ? <Decade mysteryName={mystery.toLowerCase()} currentDecade={currentDecade} />
      : null
  )
}

const Loading: React.FC<{ mysteryName: string }> = ({ mysteryName }) => {

  useEffect(() => fadeAnimation())

  return (
    <div className="container theme--trans" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <h2 className="loading" style={{ textAlign: 'center', margin: '1rem' }}>Loading the {mysteryName.charAt(0).toUpperCase() + mysteryName.slice(1)} Mysteries</h2>
      <div className="hero-line"></div>
    </div>
  )
}

export default Mystery
