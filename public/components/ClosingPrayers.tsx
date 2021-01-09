import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { HAIL_HOLY_QUEEN, FINAL_PRAYER, ST_MICHAEL } from '../utils/prayers'

const ClosingPrayers = () => {

  const history = useHistory()

  useEffect(() => {
    document.getElementById('top-container')?.scrollIntoView(true)
  })
  
  return (
    <>
      <div id="top-container" className="container">
        <div className="container--landscape">
          <section>
            <h2 className="prayer prayer--title">Hail, Holy Queen</h2>
            <p className="prayer">{HAIL_HOLY_QUEEN}</p>
          </section>
          <aside>
            <img />
          </aside>
        </div>
      </div>
      <div className="container">
        <div className="container--landscape">
          <section>
            <h2 className="prayer prayer--title">Final Prayer</h2>
            <p className="prayer">{FINAL_PRAYER[0]}</p>
            <p className="prayer">{FINAL_PRAYER[1]}</p>
          </section>
          <aside>
            <img />
          </aside>
        </div>
      </div>
      <div className="container">
        <div className="container--landscape">
          <section>
            <h2 className="prayer prayer--title">St. Michael Prayer</h2>
            <p className="prayer">{ST_MICHAEL}</p>
          </section>
          <aside>
            <img />
          </aside>
        </div>
        <button className="btn" onClick={() => history.push('/')}>Home</button>
      </div>
    </>
  )
}

export default ClosingPrayers
