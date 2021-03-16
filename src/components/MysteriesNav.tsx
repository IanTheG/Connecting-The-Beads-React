import React from 'react'
import { Link } from 'react-router-dom'

const MysteriesNav = () => {

  const currentDay = (new Date()).getDay()

  return (
    <div className="container theme--trans">
      <h2 className="title">Mysteries</h2>
      <Link className="link" to={{pathname: "/glorious", state: {decade: 1}} }>
        <div>
          <h3 className="mystery">Glorious</h3>
          <p className={`desc desc--day ${currentDay === 0 ? 'current-day' : ''}`}>Sunday</p>
          <p className={`desc desc--day ${currentDay === 3 ? 'current-day' : ''}`}>Wednesday</p>
        </div>
        {/* <img /> */}
      </Link>

      <Link className="link" to={{pathname: "/joyful", state: {decade: 1}} }>
        <div>
          <h3 className="mystery">Joyful</h3>
          <p className={`desc desc--day ${currentDay === 1 ? 'current-day' : ''}`}>Monday</p>
          <p className={`desc desc--day ${currentDay === 6 ? 'current-day' : ''}`}>Saturday</p>
        </div>
        {/* <img /> */}
      </Link>

      <Link className="link" to={{pathname: "/sorrowful", state: {decade: 1}} }>
        <div>
          <h3 className="mystery">Sorrowful</h3>
          <p className={`desc desc--day ${currentDay === 2 ? 'current-day' : ''}`}>Tuesday</p>
          <p className={`desc desc--day ${currentDay === 5 ? 'current-day' : ''}`}>Friday</p>
        </div>
        {/* <img /> */}
      </Link>

      <Link className="link" to={{pathname: "/luminous", state: {decade: 1}} }>
        <div>
          <h3 className="mystery">Luminous</h3>
          <p className={`desc desc--day ${currentDay === 4 ? 'current-day' : ''}`}>Thursday</p>
        </div>
        {/* <img /> */}
      </Link>
    </div>
  )
}

export default MysteriesNav
