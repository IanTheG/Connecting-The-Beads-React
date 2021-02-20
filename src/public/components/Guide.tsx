import React from 'react'
import { SIGN_OF_CROSS } from '../utils/prayers'

const Guide = () => {

  return (
    <div className="container">
      <h2 className="title">Praying The Rosary</h2>
      <p className="desc">A description of how to pray the Rosary.</p>
      {/* Include an image of the Rosary and describe how to pray */}
      <img />

      <h2 className="title">Opening Prayers</h2>
      <p className="prayer">{SIGN_OF_CROSS}</p>
    </div>
  )
}

export default Guide
