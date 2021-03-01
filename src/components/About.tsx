import React from 'react'

const About = () => {
  return (
    <div className="container">
      <h2 className="title">Contact Info</h2>
      <div>
      <p className="desc">If you have any issues or encounter any bugs with Connecting The Beads or would like to contact me, <a className="desc desc--link" href="https://www.facebook.com/profile.php?id=100013351997843" target="_blank" rel="noreferrer">message me on Facebook.</a></p>
      </div>
      <div>
        <h3 className="subtitle" style={{marginBottom: '1rem'}}>Copyright</h3>
        <a className="desc" href="https://thenounproject.com/tivilupercio/" target="_blank" rel="noreferrer" style={{color: 'inherit'}}>Rosary favicon by Tivi Lupercio Ordoñez</a>
        <br />
        <a className="desc" href="https://www.usccb.org/how-to-pray-the-rosary" target="_blank" rel="noreferrer" style={{color: 'inherit'}}>How to Pray the Rosary from the USCCB</a>
        <br />
      </div>
      <p className="desc">Copyright Ian G 2021</p>
    </div>
  )
}

export default About
