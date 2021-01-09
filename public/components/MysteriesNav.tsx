import React from 'react'
import { Link } from 'react-router-dom'

const MysteriesNav = () => {

  return (
    <div className="container">
      <h2 className="title">Mysteries</h2>
      <div className="mysteries">
        <Link className="link" to="/glorious">
          <h3 className="mystery">Glorious</h3>
          <p className="description description--day">Sunday</p>
          <p className="description description--day">Wednesday</p>
          <img />
        </Link>

        <Link className="link" to="/joyful">
          <h3 className="mystery">Joyful</h3>
          <p className="description description--day">Monday</p>
          <p className="description description--day">Saturday</p>
          <img />
        </Link>

        <Link className="link" to="/sorrowful">
          <h3 className="mystery">Sorrowful</h3>
          <p className="description description--day">Tuesday</p>
          <p className="description description--day">Friday</p>
          <img />
        </Link>

        <Link className="link" to="/luminous">
          <h3 className="mystery">Luminous</h3>
          <p className="description description--day">Thursday</p>
          <img />
        </Link>
      </div>
    </div>
  )
}

export default MysteriesNav
