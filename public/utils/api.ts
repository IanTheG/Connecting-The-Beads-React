// Pull rosary data and images from server
import axios from 'axios'
import { MysteryI } from './interfaces'

// Get requests for retrieving mystery from server
const getMystery = async (mystery: string) => {
  return await axios.get<MysteryI>(`http://localhost:3000/${mystery}`)

  // try {
  //   return await axios.get<MysteryI>(`http://localhost:3000/${mystery}`)
  // } catch (err) {
  //   console.error(err)
  // }
}

export default getMystery
