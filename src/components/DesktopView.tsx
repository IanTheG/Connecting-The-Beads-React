import React, { useEffect } from 'react'
import { fadeAnimation } from '../utils/functions'

const DesktopView = () => {
  
  useEffect(() => {
    fadeAnimation()
  })

  return (
    <div id="desktop-view" className="container">
      <div>
        <h1 className="title title--desktop">Connecting The Beads</h1>
        <p className="desc desc--italic desc--desktop" style={{textAlign: 'center'}}>Rediscover the Rosary with Connecting The Beads</p>
      </div>
      
      <section style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
        <p className="desc desc--desktop">
          This simple, elegant, and interactive web app is designed to help newcomers and daily devotees
          focus their minds by allowing them to enter a deeper meditation with Mother Mary
          using relevant scripture verses and emotive images for each Mystery.
        </p>
        <img alt="GIF of Connecting The Beads in action" src="" />
      </section>
      <p className="desc desc--desktop">You can view Connecting The Beads (in portrait orientation) on any smartphone or tablet running at least iOS 12.2 or Chrome 51.</p>
      <div className="hero-line"></div>
      <p className="desc desc--desktop">Copyright Ian G 2021</p>
    </div>
  )
}

export default DesktopView
