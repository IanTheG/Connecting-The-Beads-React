import React from 'react'

const RotateToPortraitView = () => {
  return (
    <>
      <div id="portrait">
        <p className="desc">Please rotate your device to portrait mode!</p>
        <div>
          <i className="fas fa-mobile-alt fa-rotate-90"></i>
          <i className="fas fa-undo"></i>
          <i className="fas fa-mobile-alt"></i>
        </div>
        <img />
      </div>
    </>
  )
}

export default RotateToPortraitView
