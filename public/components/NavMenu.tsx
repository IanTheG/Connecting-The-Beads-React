import React from 'react'

const NavMenu = () => {
  return (
    <nav className="menu">
      {/* href="#" */}
      <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
      <label className="menu-open-button" htmlFor="menu-open">
        <span className="lines line-1"></span>
        <span className="lines line-2"></span>
        <span className="lines line-3"></span>
      </label>

      <a href="#" className="menu-item blue">Glorious</a>
      <a href="#" className="menu-item green">Joyful</a>
      <a href="#" className="menu-item red">Sorrowful</a>
      <a href="#" className="menu-item purple">Luminous</a>
      <a href="#" className="menu-item orange">Links</a>
      <a href="#" className="menu-item lightblue">About</a>
    </nav>
  )
}
export default NavMenu
