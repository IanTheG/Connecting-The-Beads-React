import React from 'react'
import { SIGN_OF_CROSS, CREED, OUR_FATHER, HAIL_MARY, GLORY_BE } from '../utils/prayers'

const OpeningPrayers = () => {

  return (
    <>
      <div className="container">
        <h2 className="title">Opening Prayers</h2>
          <p className="prayer">{SIGN_OF_CROSS}</p>
          <p className="prayer prayer--tight">{CREED}</p>
        {/* <aside>
          <img />
        </aside> */}
      </div>

      <div className="container">
        <h3 className="title">Our Father</h3>
        <section>
          <p className="desc">Say the Our Father.</p>
          <img />
          <p className="desc desc--italic">For our Holy Father, Pope Francis.</p>
          {OUR_FATHER.map((line, idx) => <p className="prayer" key={idx}>{line}</p> )}
        </section>
        <aside>
          <img />
        </aside>
      </div>

      <div className="container">
        <h3 className="title">Hail Mary</h3>
        <section>
          <p className="desc">Say three Hail Mary's.</p>
          <img />
          <p className="desc desc--italic">For the increase of the virtues of Faith, Hope, and Charity.</p>
          {HAIL_MARY.map((line, idx) => <p className="prayer" key={idx}>{line}</p> )}
        </section>
        <aside>
          <img />
        </aside>
      </div>

      <div className="container">
        <h3 className="title">Glory Be</h3>
        <section>
          <p className="desc">Say the Glory Be.</p>
          <img />
          {GLORY_BE.map((line, idx) => <p className="prayer" key={idx}>{line}</p> )}
        </section>
        <aside>
          <img />
        </aside>
      </div>
    </>
  )
}

export default OpeningPrayers
