import React, { useEffect, useState } from 'react'
import Switch from "react-switch";

// Include logic to toggle dark/light mode?
// Include instructions to turn on Do Not Disturb
// Include option to not display prayers (display only images)
const Settings = () => {

  const [mode, setMode] = useState(false)

  useEffect(() => {
    const app = document.getElementById('app')
    app && app.classList.toggle('light-mode');
  }, [mode])

  return (
    <label style={{display: 'flex', padding: '1rem 0', flexDirection: 'row-reverse'}}>
      <Switch onChange={() => setMode(!mode)} checked={mode} uncheckedIcon={false} checkedIcon={false} className="switch" />
      <span className="desc desc--switch" style={{display: 'flex', alignItems: 'center'}}>
        {mode
         ? <i className="fas fa-sun" style={{fontSize: '1.5rem'}}></i>
         : <i className="far fa-moon" style={{fontSize: '1.5rem'}}></i>}
      </span>
    </label>
  )
}

export default Settings
