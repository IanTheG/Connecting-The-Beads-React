import React, { useState } from 'react'
import Switch from "react-switch";

// Include option to not display prayers (display only images)
const Settings = () => {

  const [mode, setMode] = useState(false)

  const app = document.getElementById('app')

  return (
    <label className="switch-container">
      <Switch
        onChange={() => {
          setMode(!mode)
          app!.classList.toggle('dark-mode')
          if (mode) {
            // Light mode
            app!.style.setProperty('--theme', '#967db4')
            app!.style.setProperty('--theme-hail-mary', '#FFF')
          }
          else {
            // Dark mode
            app!.style.setProperty('--theme', '#6A5188')
            app!.style.setProperty('--theme-hail-mary', '#3b2d4d')
          }
        }}
        checked={app!.classList.contains('dark-mode')}
        uncheckedIcon={false}
        checkedIcon={false}
        className="switch"
      />
      <span className="desc desc--switch" style={{display: 'flex', alignItems: 'center'}}>
        {mode
         ? <i className="fas fa-sun" style={{fontSize: '1.5rem'}}></i>
         : <i className="far fa-moon" style={{fontSize: '1.5rem'}}></i>}
      </span>
    </label>
  )
}

export default Settings
