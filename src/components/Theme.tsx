import { useState } from 'react'
import Switch from "react-switch";

const Theme = () => {

  const app = document.getElementById('app')

  const [theme, setTheme] = useState(app!.classList.contains('dark-mode'))

  const setVars = (checked: boolean | HTMLElement | null) => {
    if (checked) {
      // Dark mode
      app!.style.setProperty('--theme', '#6A5188')
      app!.style.setProperty('--theme-invert', '#967db4')
      app!.style.setProperty('--theme-trans', 'rgba(106, 81, 136, 0.85)')
    }
    else {
      // Light mode
      app!.style.setProperty('--theme', '#967db4')
      app!.style.setProperty('--theme-invert', '#6A5188')
      app!.style.setProperty('--theme-trans', 'rgba(150, 125, 180, 0.85)')
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <label className="switch-label">
        {/* <p className="desc">{theme ? "Dark mode" : "Light mode"}</p> */}
        <span className="desc desc--switch" style={{ display: 'flex', alignItems: 'center' }}>
          {theme
          ? <i className="far fa-moon" style={{ fontSize: '1.5rem' }}></i>
          : <i className="fas fa-sun" style={{ fontSize: '1.5rem' }}></i>}
        </span>
        <Switch
          onChange={(checked) => {
            setVars(checked)
            setTheme(!theme)
            app!.classList.toggle('dark-mode')
          }}
          checked={theme}
          uncheckedIcon={false}
          checkedIcon={false}
          className="switch"
        />
      </label>
    </div>
  )
}

export default Theme
