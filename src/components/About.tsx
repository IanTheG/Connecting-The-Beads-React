import React from 'react'

const About = () => {
  return (
    <div className="container">
      <h2 className="title">About</h2>
      <div>
        <p className="desc">This web app is created by Ian Goodwin, a web developer, jazz saxophonist, Catholic, and dreamer.</p>
        <p className="desc">If you have any issues with Connecting The Beads or would like to contact me, <a className="desc desc--link" href="https://www.facebook.com/profile.php?id=100013351997843" target="_blank">message me on Facebook.</a></p>
        <p className="desc">Note, this web app requires a modern smartphone and updated web browser (at least iOS 12.2 or Chrome 51 on Android).</p>
      </div>
      <div>
        <h3 className="subtitle" style={{marginBottom: '1rem'}}>Links to Quotes and Copyrighted Images</h3>
        <a className="desc" href="https://thenounproject.com/tivilupercio/" target="_blank" style={{color: 'inherit'}}>Rosary favicon by Tivi Lupercio Ordoñez</a>
        <br />
        <a className="desc" href="https://www.usccb.org/how-to-pray-the-rosary" target="_blank" style={{color: 'inherit'}}>How to Pray the Rosary from the USCCB</a>
        <br />
      </div>
      <p className="desc">Copyright Ian G 2021</p>
    </div>
  )
}

export default About
