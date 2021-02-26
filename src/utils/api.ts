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

const getMystery = async (mystery: string) => {
  if (matchCondition(mystery)) {
    return await axios.get<MysteryI>(`https://zv6e2w4wx5.execute-api.us-east-1.amazonaws.com/mysteries/${mystery}`)
  }
}

// export const getDailyVerse = async () => {
//   // Get JSON object with verse of the day data stored in the s3 bucket
//   return await axios.get(`https://zv6e2w4wx5.execute-api.us-east-1.amazonaws.com/dailyVerse/`)
// }

export default getMystery
