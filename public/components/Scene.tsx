import React from 'react'
import { HAIL_MARY } from '../utils/prayers'

// Render 10 scenes at a time
const Scene: React.FC<{decadeNumber: string, mystery: string, selectedMystery: string}> = 
  ({ decadeNumber, mystery, selectedMystery}) => {

  return (
    <div className="container">
      <h1 className="">The {decadeNumber} {selectedMystery} Mystery</h1>
      <h2 className="">{mystery}</h2>
      <p className="prayer">{HAIL_MARY[0]}</p>
      <p className="prayer">{HAIL_MARY[1]}</p>
    </div>
  )
}

export default Scene
