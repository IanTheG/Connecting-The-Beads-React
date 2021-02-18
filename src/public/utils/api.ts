// Pull rosary data and images from server
import axios from 'axios'
import { MysteryI } from './interfaces'

const conditions = [
  'glorious',
  'joyful',
  'sorrowful',
  'luminous',
]

const matchCondition = (mystery: string) => {
  return conditions.some(condition => (mystery.toLowerCase()).includes(condition))
}

// Get requests for retrieving mystery from server
const getMystery = async (mystery: string) => {
  if (matchCondition(mystery)) {
    // return await axios.get<MysteryI>(`/api/${mystery}`)
    return await axios.get<MysteryI>(`https://zv6e2w4wx5.execute-api.us-east-1.amazonaws.com/mysteries/${mystery}`)
  }
}

export default getMystery
