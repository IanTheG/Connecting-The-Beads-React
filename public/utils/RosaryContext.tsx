import React from 'react'
import { MysteryI, SceneI} from './interfaces'

// Define type, pass data to components with context of this type
type RosaryContextType = {
  selectedMysteries: MysteryI;
  
  currentMystery: SceneI;
  // setCurrentMystery: (data: React.SetStateAction<SceneI>) => void;

  // currentDecade: number;
  // setCurrentDecade: (data: React.SetStateAction<number>) => void;
}

// Custom context enables RosaryContext.Provider in App component to manage state
export const RosaryContext = React.createContext<RosaryContextType | undefined>(undefined)

// Custom hook contains all five mysteries and function to set mysteries
export const useRosary = () => React.useContext(RosaryContext)
