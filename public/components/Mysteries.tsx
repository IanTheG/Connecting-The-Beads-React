import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const MysteriesHome: React.FC<{key?: string}>  = () => {

  return (
    <div className="container">
      <h1 className="title">Mysteries</h1>
      <div className="mysteries">
        <Link className="mystery" to="/glorious">
          <h2 className="link">Glorious</h2>
          <p className="description">Sunday</p>
          <p className="description">Wednesday</p>
          <img />
        </Link>

        <Link className="mystery" to="/joyful">
          <h2 className="link">Joyful</h2>
          <p className="description">Monday</p>
          <p className="description">Saturday</p>
          <img />
        </Link>

        <Link className="mystery" to="/sorrowful">
          <h2 className="link">Sorrowful</h2>
          <p className="description">Tuesday</p>
          <p className="description">Friday</p>
          <img />
        </Link>

        <Link className="mystery" to="/luminous">
          <h2 className="link">Luminous</h2>
          <p className="description">Thursday</p>
          <img />
        </Link>
      </div>
    </div>
  )
}

export default MysteriesHome
