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
          <h2 className="title">Hail, Holy Queen</h2>
          {HAIL_HOLY_QUEEN.map((line, idx) => <p className="prayer" key={idx}>{line}</p> )}
        </section>
        <aside>
          <img />
        </aside>
    </div>
      <div className="container">
        <section>
          <h2 className="title">Final Prayer</h2>
          {FINAL_PRAYER.map((line, idx) => <p className="prayer" key={idx}>{line}</p> )}
        </section>
        <aside>
          <img />
        </aside>
      </div>
      <div className="container">
        <section>
          <h2 className="title">St. Michael Prayer</h2>
          {ST_MICHAEL.map((line, idx) => <p className="prayer" key={idx}>{line}</p> )}
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
