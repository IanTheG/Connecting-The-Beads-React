import React from 'react'

export type ImageI = {
  url: string;
  alt: string;
}

type ImageContextType = {
  selectedMysteryImages: ImageI[];
  currentImageIndex: number;
  setSelectedMysteryImages: React.Dispatch<React.SetStateAction<ImageI[]>>;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

// Custom context enables ImageContext.Provider in App component to manage state
export const ImageContext = React.createContext<ImageContextType | undefined>(undefined)

// Custom hook contains image and function to set image
export const useImage = () => React.useContext(ImageContext)
