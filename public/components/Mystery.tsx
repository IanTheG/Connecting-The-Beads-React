import React, { useEffect, useState } from 'react'
import getMystery from '../utils/api'
import { MysteryI } from '../utils/interfaces'

const Mystery: React.FC<{mystery: string}> = ({ mystery }) => {

  const [currentMystery, setCurrentMystery] = useState<MysteryI>()

  useEffect(() => {
    getMystery(mystery)
      .then((res) => setCurrentMystery(res.data))
      .catch(err => console.error(err))
  }, [mystery])

  console.log(currentMystery)
  return (
    currentMystery ?
    <>
      <p>{currentMystery.name}</p>
    </>
    // Implement a loading screen?
    : null
  )
}

export default Mystery
