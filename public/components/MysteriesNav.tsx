import React from 'react'
import { Link } from 'react-router-dom'

const MysteriesNav = () => {

  return (
    <div className="container">
      <h2 className="title">Mysteries</h2>
      <div className="mysteries">
        <Link className="link" to={{pathname: "/glorious", state: {decade: 0}} }>
        {/* <Link className="link" to="/glorious/the-resurrection"> */}
          <h3 className="mystery">Glorious</h3>
          <p className="desc desc--day">Sunday</p>
          <p className="desc desc--day">Wednesday</p>
          <img />
        </Link>

        <Link className="link" to={{pathname: "/joyful", state: {decade: 0}} }>
        {/* <Link className="link" to="/joyful/the-annunciation"> */}
          <h3 className="mystery">Joyful</h3>
          <p className="desc desc--day">Monday</p>
          <p className="desc desc--day">Saturday</p>
          <img />
        </Link>

        <Link className="link" to={{pathname: "/sorrowful", state: {decade: 0}} }>
        {/* <Link className="link" to="/sorrowful/the-agony-in-the-garden"> */}
          <h3 className="mystery">Sorrowful</h3>
          <p className="desc desc--day">Tuesday</p>
          <p className="desc desc--day">Friday</p>
          <img />
        </Link>

        <Link className="link" to={{pathname: "/luminous", state: {decade: 0}} }>
        {/* <Link className="link" to="/luminous/the-baptism-of-the-lord"> */}
          <h3 className="mystery">Luminous</h3>
          <p className="desc desc--day">Thursday</p>
          <img />
        </Link>
      </div>
    </div>
  )
}

export default MysteriesNav
