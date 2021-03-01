import React, { useEffect } from 'react'
import { fadeAnimation } from '../utils/functions'
// import Settings from './Settings'

const Home = () => {

  useEffect(() => {
    const root = document.getElementById('root')
    root!.style.backgroundImage = 'none'
    document.getElementById('top-container')?.scrollIntoView(true)
    fadeAnimation()
  })

  return (
    <div id="top-container" className="container">
      <div>
        <h1 className="title" style={{textAlign: 'center'}}>Connecting The Beads</h1>
        {/* <div className="hero-line"></div> */}
      </div>
      {/* Image of rosary beads */}
      {/* <img className="hero-image" src="https://connectingthebeads-images.s3.amazonaws.com/main/SilverRosary.png" /> */}
      <div>
        <div className="settings-container">
          <div></div>
          {/* <Settings /> */}
        </div>
        {/* Add this first paragraph to an about section of the app */}
        <p className="desc desc--home">This mobile–friendly web app is a Rosary companion designed to help you pray and meditate with scripture and religious artwork.</p>
        {/* <p className="desc desc--home">Meditate on each Hail Mary with a verse from scripture and an image depicting the lives of Jesus, Mary, Joseph, and the disciples.</p> */}
        <p className="desc desc--home">
          &#8223;The repetition in the Rosary is meant to lead one into restful and contemplative prayer related to each Mystery.
          The gentle repetition of the words helps us to enter into the silence of our hearts, where Christ's spirit dwells.
          The Rosary can be said privately or with a group.&#8221;
        </p>
        <p className="desc desc--home">Scroll down to advance to the next section, or scroll up to go back.</p>
      </div>
    </div>
  )
}

export default Home
