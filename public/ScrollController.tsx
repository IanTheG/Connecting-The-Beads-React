import React from 'react'

// Define an interface for props
interface ComponentPropsI {
  components: JSX.Element[]
}

// Keys are passed as props through the App.tsx to render each component
const ScrollController = ({components}: ComponentPropsI) => {
  return (
    <div className="scroll-container">
      {components.map(component => component)}
    </div>
  )
}

export default ScrollController;
