import React, { useEffect } from 'react'

import Theme from './Theme'

import { fadeAnimation } from '../utils/functions'
import { useImage } from '../utils/ImageContext'

const Home = () => {

  const { setCurrentImageIndex } = useImage()!
  const currentDay = (new Date()).getDay()

  useEffect(() => {
    setCurrentImageIndex(0)
    // const randomImageNumber = Math.floor(Math.random() * Math.floor(5)) + 1
    // const dailyMystery = "sorrowful"//getMysteryFromDay(currentDay)
    // setCurrentImage({
    //   url: `https://connectingthebeads-images.s3.amazonaws.com/${dailyMystery}/${randomImageNumber}.jpg`,
    //   alt: 'Home image'
    // })
    document.getElementById('top-container')?.scrollIntoView(true)
    fadeAnimation()
  }, [])

  const getMysteryFromDay = (day: number) => {
    switch (day) {
      case 0 :
      case 3 : return 'glorious'
      case 1 :
      case 6 : return 'joyful'
      case 2 :
      case 5 : return 'sorrowful'
      case 4 : return 'luminous'
      default : return 'glorious'
    }
  }

  return (
    <div id="top-container" className="container">
      <h1 className="title" style={{ textAlign: 'center' }}>Connecting The Beads</h1>
      <section className="prayer--section">
        <div>
          <Theme />
          <p className="desc">This mobile–friendly web app is a Rosary companion designed to help you pray and meditate with scripture and religious artwork depicting the lives of Jesus, Mary, Joseph, and the disciples.</p>
          <p className="desc desc--home">Scroll down to advance to the next section, or scroll up to go back.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
