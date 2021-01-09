import React from 'react'
import { Link } from 'react-router-dom'

const MysteriesNav = () => {

  return (
    <div className="container">
      <h2 className="title">Mysteries</h2>
      <div className="mysteries">
        <Link className="link" to={{pathname: "/glorious/the-resurrection", state: {decade: 0}} }>
          <h3 className="mystery">Glorious</h3>
          <p className="description description--day">Sunday</p>
          <p className="description description--day">Wednesday</p>
          <img />
        </Link>

        <Link className="link" to={{pathname: "/joyful/the-annunciation", state: {decade: 0}} }>
          <h3 className="mystery">Joyful</h3>
          <p className="description description--day">Monday</p>
          <p className="description description--day">Saturday</p>
          <img />
        </Link>

        <Link className="link" to={{pathname: "/sorrowful/the-agony-in-the-garden", state: {decade: 0}} }>
          <h3 className="mystery">Sorrowful</h3>
          <p className="description description--day">Tuesday</p>
          <p className="description description--day">Friday</p>
          <img />
        </Link>

        <Link className="link" to={{pathname: "/luminous/the-baptism-of-the-lord", state: {decade: 0}} }>
          <h3 className="mystery">Luminous</h3>
          <p className="description description--day">Thursday</p>
          <img />
        </Link>
      </div>
    </div>
  )
}

export default MysteriesNav
