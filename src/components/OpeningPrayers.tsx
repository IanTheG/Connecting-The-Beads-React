import { SIGN_OF_CROSS, CREED, OUR_FATHER, HAIL_MARY, GLORY_BE } from '../utils/prayers'

const OpeningPrayers = () => {

  return (
    <>
      <div className="container">
        <h2 className="subtitle">Opening Prayers</h2>
        <section className="prayer--section">
          <div>
            <p className="prayer prayer--top">Begin by making the <b>Sign of The Cross.</b></p>
            <p className="prayer" style={{fontSize: '1.2rem'}}>{SIGN_OF_CROSS[0]}</p>
            <p className="prayer" style={{fontSize: '1.2rem'}}>{SIGN_OF_CROSS[1]}</p>
          </div>
        </section>
      </div>

      <div className="container">
        <h3 className="title">The Apostle's Creed</h3>
        <section className="no-grid">
          <div>
            <p className="desc">Say the <b>Apostle's Creed.</b></p>
            <p className="prayer prayer--tight">{CREED}</p>
          </div>
        </section>
      </div>

      <div className="container">
        <h3 className="title">Our Father</h3>
        <section className="prayer--section">
          <div className="inner-prayer">
            <p className="desc">Say the <b>Our Father.</b></p>
            <p className="desc desc--italic">For our Holy Father, Pope Francis.</p>
            {OUR_FATHER.map((line, idx) => <p className="prayer" key={idx}>{line}</p> )}
          </div>
        </section>
      </div>

      <div className="container">
        <h3 className="title">Hail Mary</h3>
        <section className="prayer--section">
          <div className="inner-prayer">
            <p className="desc">Say three <b>Hail Mary's.</b></p>
            <p className="desc desc--italic">For the increase of the virtues of Faith, Hope, and Charity.</p>
            {HAIL_MARY.map((line, idx) => <p className="prayer" key={idx}>{line}</p> )}
          </div>
        </section>
      </div>

      <div className="container">
        <h3 className="title">Glory Be</h3>
        <section className="prayer--section">
          <div className="inner-prayer">
            <p className="desc">Say the <b>Glory Be.</b></p>
            {GLORY_BE.map((line, idx) => <p className={idx === 0 ? 'prayer prayer--top' : 'prayer'} key={idx}>{line}</p> )}
          </div>
        </section>
      </div>
    </>
  )
}

export default OpeningPrayers
