import React, { useEffect } from 'react'

import Theme from './Theme'

import { fadeAnimation } from '../utils/functions'
import { useImage } from '../utils/ImageContext'

const Home = () => {

  const { setCurrentImage } = useImage()!

  useEffect(() => {
    setCurrentImage({
      url: 'https://www.rosarycenter.org/wp-content/uploads/sites/3/2019/02/j1-1.jpg',
      alt: 'Home image'
    })
    document.getElementById('top-container')?.scrollIntoView(true)
    fadeAnimation()
  }, [])

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
