import React from 'react'

const Home = () => {

  return (
    <div className="container">
      <h1 className="title">Connecting The Beads</h1>
      {/* Image of rosary beads */}
      <img className="hero-image" src="" />
      <div>
        {/* Add this first paragraph to an about section of the app */}
        <p className="description">This mobile–friendly web app is a Rosary companion for distracted minds in the digital age, intended for both newcomers and daily devotees.</p>
        <p className="description">Meditate on each mystery with ten scenes depicting the lives of Jesus, Mary, Joseph, and the disciples. In total, there are 200 scenes!</p>
        <p className="description">Scroll down to advance to the next section, or swipe up to go back.</p>
      </div>
    </div>
  )
}

export default Home
