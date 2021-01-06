import React from 'react'
import { SceneI } from '../utils/interfaces'

// Render 10 scenes at a time
const Scenes: React.FC<{selectedMystery: string, currentMysteryNumber: string, scene: string}> = 
  ({ selectedMystery, currentMysteryNumber, scene }) => {

  return (
    <>
      <h1 className="title title--small">The {currentMysteryNumber} {selectedMystery} Mystery</h1>
      <h2 className="title">{scene}</h2>
    </>
  )
}

export default Scenes
