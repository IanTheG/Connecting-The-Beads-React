import React from 'react'
import { SIGN_OF_CROSS, CREED, OUR_FATHER, HAIL_MARY, GLORY_BE } from '../utils/prayers'

const OpeningPrayers = () => {

  return (
    <>
    <div className="container">
      <h2 className="title">Opening Prayers</h2>
      <div>
        <section>
          <p className="prayer">{SIGN_OF_CROSS}</p>
          <p className="prayer prayer--tight">{CREED}</p>
        </section>
        <aside>
          <img />
        </aside>
      </div>
    </div>

    <div className="container">
      <section>
        <p className="desc desc--italic">For our Holy Father, Pope Francis.</p>
        <p className="prayer">{OUR_FATHER[0]}</p>
        <p className="prayer">{OUR_FATHER[1]}</p>
      </section>
      <aside>
        <img />
      </aside>
    </div>

    <div className="container">
      <section>
        <p className="desc desc--italic">For the increase of the virtues of Faith, Hope, and Charity.</p>
        <p className="prayer">{HAIL_MARY[0]}</p>
        <p className="prayer">{HAIL_MARY[1]}</p>
      </section>
      <aside>
        <img />
      </aside>
    </div>

    <div className="container">
      <section>
        <p className="prayer">{GLORY_BE[0]}</p>
        <p className="prayer">{GLORY_BE[1]}</p>
      </section>
      <aside>
        <img />
      </aside>
    </div>
    </>
  )
}

export default OpeningPrayers
