import React, { useEffect, useState } from 'react'
import Switch from "react-switch";

import { HAIL_MARY } from '../utils/prayers'

const Settings = () => {

  const [theme, setTheme] = useState(false)
  const [shortPrayer, setShortPrayer] = useState(false)

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

  const setPrayerSize = (checked: boolean) => {
    if (checked) {
      app!.style.setProperty('--prayer-long', 'none')
      app!.style.setProperty('--prayer-short', 'block')
    } else {
      app!.style.setProperty('--prayer-long', 'block')
      app!.style.setProperty('--prayer-short', 'none')
    }
  }

  useEffect(() => {
    setVars(app!.classList.contains('dark-mode'))
    setPrayerSize(false)
  }, [])

  return (
    <div className="container" style={{display: 'grid', gridTemplateRows: 'auto auto auto auto 1fr auto'}}>
      <h2 className="title">About</h2>
      <p className="desc">This web app is created by Ian Goodwin, a web developer, jazz saxophonist, Catholic, and dreamer.</p>
      <p className="desc">If you have any issues with Connecting The Beads or would like to contact me, <a className="desc desc--link" href="https://www.facebook.com/profile.php?id=100013351997843" target="_blank" rel="noreferrer">message me on Facebook.</a></p>
      <p className="desc">Note, this web app requires a modern smartphone and updated web browser (at least iOS 12.2 or Chrome 51 on Android).</p>

      {/* <p className="desc">Before starting, choose a few settings.</p> */}
      <div className="switch-container switch-container--top">
        <label className="switch-container">
          <span className="desc desc--switch" style={{display: 'flex', alignItems: 'center'}}>
            {theme
            ? <i className="far fa-moon" style={{fontSize: '1.5rem'}}></i>
            : <i className="fas fa-sun" style={{fontSize: '1.5rem'}}></i>}
          </span>
          <Switch
            onChange={(checked) => {
              setVars(checked)
              setTheme(!theme)
              app!.classList.toggle('dark-mode')
            }}
            checked={app!.classList.contains('dark-mode')}
            uncheckedIcon={false}
            checkedIcon={false}
            className="switch"
          />
        </label>
        <label className="switch-container">   
          <span className="desc desc--switch" style={{display: 'flex', alignItems: 'center'}}>
            {shortPrayer
            ? <i className="fas fa-minus" style={{fontSize: '1.5rem'}}></i>
            : <i className="fas fa-bars" style={{fontSize: '1.5rem'}}></i>}
          </span>
          <Switch
              onChange={(checked) => {
                setShortPrayer(!shortPrayer)
                setPrayerSize(checked)
              }}
              checked={shortPrayer}
              uncheckedIcon={false}
              checkedIcon={false}
              className="switch"
            />
        </label>
      </div>
      <section className="prayer--section">
        <div className="prayer--short">
          <p className="prayer prayer--top" style={{fontSize: '1.2rem'}}>Hail Mary...</p>
        </div>
        <div className="prayer--long">
          <p className="prayer prayer--top">{HAIL_MARY[0]}</p>
          <p className="prayer">{HAIL_MARY[1]}</p>
          <p className="prayer">Amen.</p>
        </div>
      </section>
    </div>
  )
}

export default Settings
