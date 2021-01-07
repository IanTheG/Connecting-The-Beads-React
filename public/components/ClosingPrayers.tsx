import React from 'react'
import { HAIL_HOLY_QUEEN, FINAL_PRAYER, ST_MICHAEL } from '../utils/prayers'

const ClosingPrayers = () => {
  return (
    <>
      <div className="container">
        <h2 className="prayer prayer--title">Hail, Holy Queen</h2>
        <p className="prayer">{HAIL_HOLY_QUEEN}</p>
      </div>
      <div className="container">
        <h2 className="prayer prayer--title">Final Prayer</h2>
        <p className="prayer">{FINAL_PRAYER[0]}</p>
        <p className="prayer">{FINAL_PRAYER[1]}</p>
      </div>
      <div className="container">
        <h2 className="prayer prayer--title">St. Michael Prayer</h2>
        <p className="prayer">{ST_MICHAEL}</p>
      </div>
    </>
  )
}

export default ClosingPrayers
