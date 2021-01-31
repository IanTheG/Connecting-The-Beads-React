import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { fadeAnimation } from '../utils/functions'
import { HAIL_HOLY_QUEEN, FINAL_PRAYER, ST_MICHAEL } from '../utils/prayers'

const ClosingPrayers = () => {

  const history = useHistory()

  useEffect(() => {
    document.getElementById('top-container')?.scrollIntoView(true)
    fadeAnimation()
  })
  
  return (
    <>
      <div id="top-container" className="container">
        <section>
          <h2 className="prayer prayer--title">Hail, Holy Queen</h2>
          <p className="prayer">{HAIL_HOLY_QUEEN}</p>
        </section>
        <aside>
          <img />
        </aside>
    </div>
      <div className="container">
        <section>
          <h2 className="prayer prayer--title">Final Prayer</h2>
          <p className="prayer">{FINAL_PRAYER[0]}</p>
          <p className="prayer">{FINAL_PRAYER[1]}</p>
        </section>
        <aside>
          <img />
        </aside>
      </div>
      <div className="container">
        <section>
          <h2 className="prayer prayer--title">St. Michael Prayer</h2>
          <p className="prayer">{ST_MICHAEL}</p>
        </section>
        <aside>
          <img />
        </aside>
        <button className="btn" onClick={() => history.push('/')}>Home</button>
      </div>
    </>
  )
}

export default ClosingPrayers
