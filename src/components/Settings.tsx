import React, { useEffect, useState } from 'react'
import Switch from "react-switch";

// Include option to not display prayers (display only images)
const Settings = () => {

  const [mode, setMode] = useState(false)

  const app = document.getElementById('app')

  const setVars = (checked: boolean | HTMLElement | null) => {
    if (checked) {
      // Dark mode
      app!.style.setProperty('--theme', '#6A5188')
      app!.style.setProperty('--theme-invert', '#967db4')
      app!.style.setProperty('--theme-prayer-section', 'rgba(106, 81, 136, 0.75)')
    }
    else {
      // Light mode
      app!.style.setProperty('--theme', '#967db4')
      app!.style.setProperty('--theme-invert', '#6A5188')
      app!.style.setProperty('--theme-prayer-section', 'rgba(150, 125, 180, 0.75)')
    }
  }

  useEffect(() => {
    setVars(app!.classList.contains('dark-mode'))
  }, [])

  return (
    <label className="switch-container">
      <Switch
        onChange={(checked) => {
          setVars(checked)
          setMode(!mode)
          app!.classList.toggle('dark-mode')
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
