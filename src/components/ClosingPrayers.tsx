import { useEffect } from 'react'
import { useHistory } from 'react-router'

import { fadeAnimation } from '../utils/functions'
import { HAIL_HOLY_QUEEN, FINAL_PRAYER, ST_MICHAEL, SIGN_OF_CROSS } from '../utils/prayers'

const ClosingPrayers = () => {

  const history = useHistory()

  useEffect(() => {
    document.getElementById('top-container')?.scrollIntoView(true)
    fadeAnimation()
  }, [])

  return (
    <>
      <div id="top-container" className="container theme--trans">
        <div>
          <h2 className="subtitle">Closing Prayers</h2>
        </div>
        <section className="prayer--section prayer--ipad">
          <div>
            <h2 className="title title--clear no-border">Hail, Holy Queen</h2>
            <div className="hero-line"></div>
            {HAIL_HOLY_QUEEN.map((line, idx) => <p className={idx === 0 ? 'prayer prayer--top' : 'prayer'} key={idx}>{line}</p> )}
          </div>
        </section>
      </div>
      <div className="container theme--trans">
        <section className="prayer--section prayer--ipad">
          <div>
            <h2 className="title title--clear no-border">Final Prayer</h2>
            <div className="hero-line"></div>
            {FINAL_PRAYER.map((line, idx) => <p className={idx === 0 ? 'prayer prayer--top' : 'prayer'} key={idx}>{line}</p> )}
          </div>
        </section>
      </div>
      <div id="bottom-container" className="container theme--trans">
        <section className="prayer--section prayer--ipad">
          <div>
            <h2 className="title title--clear no-border">St. Michael Prayer</h2>
            <div className="hero-line"></div>
            {ST_MICHAEL.map((line, idx) => <p className={idx === 0 ? 'prayer prayer--top' : 'prayer'} key={idx}>{line}</p> )}
          </div>
        </section>
        <section style={{backgroundColor: 'transparent'}}>
          <div>
            <p className="desc">End the Rosary by making the <b>Sign of The Cross.</b></p>
            <p className="prayer">{SIGN_OF_CROSS[0]}</p>
            <p className="prayer">{SIGN_OF_CROSS[1]}</p>
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
