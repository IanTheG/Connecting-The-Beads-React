import React from 'react'
import { SIGN_OF_CROSS } from '../utils/prayers'

const Guide = () => {

  return (
    <div className="container">
      <h2 className="title">Praying The Rosary</h2>
      
      <p className="desc">
      &#8223;The Rosary is a Scripture-based prayer. It begins with the Apostles' Creed, which summarizes the great mysteries of the Catholic faith.
        The Our Father, which introduces each mystery, is from the Gospels.
        The first part of the Hail Mary is the angel's words announcing Christ's birth and Elizabeth's greeting to Mary.
        St. Pius V officially added the second part of the Hail Mary. The Mysteries of the Rosary center on the events of Christ's life.
        There are four sets of Mysteries: Joyful, Sorrowful, Glorious and––added by Saint John Paul II in 2002––the Luminous.&#8221;
      </p>
      {/* Include an image of the Rosary and describe how to pray */}
      <p className="desc" style={{ textAlign: 'center', fontSize: '1.2rem' }}><b>This web app will guide you through every prayer in the Rosary.</b></p>
      {/* <p className="desc">Before beginning, you may take a few minutes to talk with God, Jesus, Mother Mary, or any of the Saints and present them with any prayer intentions.</p> */}
      <img />
      <div className="hero-line"></div>

      <div>
        <h2 className="title">Opening Prayers</h2>
        <p className="desc">Begin by making the <b>Sign of The Cross.</b></p>
        <p className="prayer">{SIGN_OF_CROSS}</p>
      </div>
    </div>
  )
}

export default Guide
