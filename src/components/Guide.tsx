import React from 'react'

const Guide = () => {

  return (
    <div className="container theme--trans">
      <h2 className="title">Praying The Rosary</h2>
      
      <p className="desc">
      &#8223;The Rosary is a Scripture-based prayer. It begins with the Apostles' Creed, which summarizes the great mysteries of the Catholic faith.
        The Our Father, which introduces each mystery, is from the Gospels.
        The first part of the Hail Mary is the angel's words announcing Christ's birth and Elizabeth's greeting to Mary.
        St. Pius V officially added the second part of the Hail Mary. The Mysteries of the Rosary center on the events of Christ's life.
        There are four sets of Mysteries: Joyful, Sorrowful, Glorious and––added by Saint John Paul II in 2002––the Luminous.&#8221;
      </p>
      <div className="hero-line desc--guide"></div>
      <p className="desc">
        &#8223;The repetition in the Rosary is meant to lead one into restful and contemplative prayer related to each Mystery.
        The gentle repetition of the words helps us to enter into the silence of our hearts, where Christ's spirit dwells.
        The Rosary can be said privately or with a group.&#8221;
      </p>
      {/* Include an image of the Rosary and describe how to pray */}
      <p className="desc desc--guide"><b>This web app will guide you through every prayer in the Rosary.</b></p>
      {/* <p className="desc">Before beginning, you may take a few minutes to talk with God, Jesus, Mother Mary, or any of the Saints and present them with any prayer intentions.</p> */}
      {/* <img /> */}


    </div>
  )
}

export default Guide
