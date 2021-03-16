import React from 'react'

const About = () => {
  return (
    <div className="container theme--trans">
      <h2 className="title">Contact Info</h2>
      <div>
        <p className="desc">If you have any issues or encounter any bugs with Connecting The Beads or would like to contact me, <a className="desc desc--link" href="https://www.facebook.com/profile.php?id=100013351997843" target="_blank" rel="noreferrer">message me on Facebook.</a></p>
        <p className="desc">This web app is created by Ian Goodwin, a web developer, jazz saxophonist, Catholic, and dreamer.</p>
        <p className="desc">Note, this web app requires a modern smartphone and updated web browser (at least iOS 12.2 or Chrome 51 on Android).</p>
      </div>
      <div>
        <h3 className="subtitle" style={{marginBottom: '1rem'}}>Copyright</h3>
        <a className="desc desc--copyright" href="https://thenounproject.com/term/rosary/329724/" target="_blank" rel="noreferrer" style={{color: 'inherit'}}>Rosary favicon by Tivi Lupercio Ordoñez</a>
        <br />
        <a className="desc desc--copyright" href="https://www.usccb.org/how-to-pray-the-rosary" target="_blank" rel="noreferrer" style={{color: 'inherit'}}>How to Pray the Rosary from the USCCB</a>
        <br />
        <p className="desc desc--copyright" style={{paddingTop: '1rem'}}>The 20 Mysteries of The Rosary - Bellazzi</p>
        <p className="desc desc--copyright">Copyright 2021 - Used with permission</p>
        <p className="desc desc--copyright">Fratelli Bonella - Milan, Italy</p>
        <br />
      </div>
      <p className="desc">Copyright Ian G 2021</p>
    </div>
  )
}

export default About
