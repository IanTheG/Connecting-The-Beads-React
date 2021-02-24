import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { fadeAnimation } from '../utils/functions'
import { HAIL_HOLY_QUEEN, FINAL_PRAYER, ST_MICHAEL, SIGN_OF_CROSS } from '../utils/prayers'

const ClosingPrayers = () => {

  const history = useHistory()

  useEffect(() => {
    document.getElementById('top-container')?.scrollIntoView(true)
    fadeAnimation()
  })

  return (
    <>
      <div id="top-container" className="container">
        <div>
          <h2 className="subtitle">Closing Prayers</h2>
          {/* <div className="hero-line"></div> */}
        </div>
        <section className="prayer--section">
          <div>
            <h2 className="title title--clear">Hail, Holy Queen</h2>
            {HAIL_HOLY_QUEEN.map((line, idx) => <p className={idx == 0 ? 'prayer prayer--top' : 'prayer'} key={idx}>{line}</p> )}
          </div>
        </section>
        <aside>
          <img />
        </aside>
      </div>
      <div className="container">
        <section className="prayer--section">
          <div>
            <h2 className="title title--clear">Final Prayer</h2>
            {FINAL_PRAYER.map((line, idx) => <p className={idx == 0 ? 'prayer prayer--top' : 'prayer'} key={idx}>{line}</p> )}
          </div>
        </section>
        <aside>
          <img />
        </aside>
      </div>
      <div className="container">
        <section className="prayer--section">
          <div>
            <h2 className="title title--clear">St. Michael Prayer</h2>
            {ST_MICHAEL.map((line, idx) => <p className={idx == 0 ? 'prayer prayer--top' : 'prayer'} key={idx}>{line}</p> )}
          </div>
        </section>
        <aside>
          <img />
        </aside>

        <section className="prayer--section">
          <div>
            <p className="desc">End the Rosary by making the <b>Sign of The Cross.</b></p>
            <p className="prayer">{SIGN_OF_CROSS}</p>
          </div>
        </section>
        <div className="btn--container">
          <button className="btn" onClick={() => history.push('/')}>Home</button>
        </div>
      </div>
    </>
  )
}

export default ClosingPrayers
