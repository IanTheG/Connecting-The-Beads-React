import React, { useEffect } from 'react'
import { fadeAnimation } from '../utils/functions'
import Settings from './Settings'

const Home = () => {

  useEffect(() => {
    document.getElementById('top-container')?.scrollIntoView(true)

    fadeAnimation()
  })

  return (
    <div id="top-container" className="container">
      <h1 className="title"  style={{textAlign: 'center'}}>Connecting The Beads</h1>
      <div className="hero-line"></div>
      {/* Image of rosary beads */}
      <img className="hero-image" src="https://connectingthebeads-images.s3.amazonaws.com/main/SilverRosary.png" />
      <Settings />
      <div>
        {/* Add this first paragraph to an about section of the app */}
        <p className="desc desc--home">This mobile–friendly web app is a Rosary companion for distracted minds in the digital age, intended for both newcomers and daily devotees.</p>
        <p className="desc desc--home">Meditate on each mystery with ten scenes depicting the lives of Jesus, Mary, Joseph, and the disciples. In total, there are 200 scenes!</p>
        <p className="desc desc--home">Scroll down to advance to the next section, or swipe up to go back.</p>
      </div>
    </div>
  )
}

export default Home
