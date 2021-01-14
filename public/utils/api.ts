// Pull rosary data and images from server
import axios from 'axios'
import { MysteryI } from './interfaces'

// Get requests for retrieving mystery from server
const getRosary = async () => {
// const getMystery = async (mystery: string) => {
  return await axios.get<MysteryI[]>('http://localhost:3000/mysteries/')
  // return await axios.get<MysteryI>(`http://localhost:3000/mysteries/${mystery}`)

}

export default getRosary
