import React from 'react'

export type CurrentImageType = {
  url: string;
  alt: string;
}

type ImageContextType = {
  currentImage: CurrentImageType;
  setCurrentImage: React.Dispatch<React.SetStateAction<CurrentImageType>>;
}

// Custom context enables ImageContext.Provider in App component to manage state
export const ImageContext = React.createContext<ImageContextType | undefined>(undefined)

// Custom hook contains image and function to set image
export const useImage = () => React.useContext(ImageContext)
