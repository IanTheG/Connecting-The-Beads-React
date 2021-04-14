import { useEffect } from 'react'

import { fadeAnimation } from '../utils/functions'
import { useImage } from '../utils/ImageContext'

import Theme from './Theme'

const Home = () => {

  const { setCurrentImageIndex, setSelectedMysteryImages } = useImage()!

  useEffect(() => {
    setCurrentImageIndex(0)
    setSelectedMysteryImages([])
    document.getElementById('top-container')?.scrollIntoView(true)
    fadeAnimation()
    // eslint-disable-next-line
  }, [])

  return (
    <div id="top-container" className="container">
      <h1 className="title" style={{ textAlign: 'center' }}>Connecting The Beads</h1>
      <section className="prayer--section">
        <div>
          <Theme />
          <p className="desc">This mobile–friendly web app is a Rosary companion designed to help you pray and meditate with scripture and religious artwork depicting the lives of Jesus, Mary, Joseph, and the disciples.</p>
          <p className="desc desc--home">Add this app to your home screen to run it full-screen!</p>
          {/* <p className="desc desc--home">Scroll down to advance to the next section, or scroll up to go back.</p> */}
        </div>
      </section>
    </div>
  )
}

export default Home
