import React from 'react'
import { OUR_FATHER, HAIL_MARY, GLORY_BE } from '../utils/prayers'

const OpeningPrayers = () => {

  return (
    <>
    <div className="container">
      <h2 className="title">Opening Prayers</h2>
      <div className="container--landscape" style={{display: 'flex'}}>
        <section>
          <h3 className="instructions">Make The Sign of The Cross</h3>
          <p className="prayer">In the name of The Father, The Son, and The Holy Spirit. Amen.</p>
        </section>
        <aside>
          <img />
        </aside>
      </div>
    </div>

    <div className="container container--landscape">
      <section>
        <p className="description">For our Holy Father, Pope Francis.</p>
        <h3 className="instructions">Say the Our Father</h3>
        <p className="prayer">{OUR_FATHER[0]}</p>
        <p className="prayer">{OUR_FATHER[1]}</p>
      </section>
      <aside>
        <img />
      </aside>
    </div>

    <div className="container container--landscape">
      <section>
        <p className="description">For the increase of the virtues of Faith, Hope, and Charity.</p>
        <h3 className="instructions">Say three Hail Marys</h3>
        <p className="prayer">{HAIL_MARY[0]}</p>
        <p className="prayer">{HAIL_MARY[1]}</p>
      </section>
      <aside>
        <img />
      </aside>
    </div>

    <div className="container container--landscape">
      <section>
        <h3 className="instructions">Say the Glory Be</h3>
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
