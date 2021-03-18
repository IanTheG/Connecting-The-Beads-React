import React from 'react'
import { ImageI } from '../utils/ImageContext'

interface PropTypesI {
  images: ImageI[];
  currentImageIndex: number;
  imgStyle?: React.CSSProperties | undefined;
  imgClassName?: string;
  containerStyle?: React.CSSProperties | undefined;
  containerClassName?: string;
  duration?: number;
  // timingFunction?: Property.AnimationTimingFunction
  timingFunction?: '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-en';
  delay?: number;
};

/** When passed an array of images, the images cross-fade when the index is updated.
 * 
 * @param {ImageI[]} images An array of image objects containing a "url" and "alt" property.
 * @param {number} currentImageIndex The current image index.
 * @param {object=} imgStyle React in-line styles for the img elements.
 * @param {string=} imgClassName CSS class names for styling img elements.
 * @param {object=} containerStyle React in-line styles for the div container.
 * @param {string=} containerClassName CSS class name(s) for the div container
 * @param {number=} duration The duration in ms of the opacity transition.
 * @param {enum=} timingFunction '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-en'
 * @param {number=} delay The delay in ms of the opacity transition.
 * @returns {React.FunctionComponent} A React Function Component: a div containing a number of images.
 */
const ImageContainer: React.FC<PropTypesI> = (
  { images, currentImageIndex, imgStyle, imgClassName, containerStyle, containerClassName, duration, timingFunction, delay }
) => {

  const imageTransition = {
    duration: duration || 1000,
    timingFunction: timingFunction || 'ease',
    delay: delay || 0
  };

  return (
    <div className={containerClassName} style={containerStyle}>
      {images.map((image, idx) => {
        return (
          <img
            key={idx}
            src={image.url}
            alt={image.alt}
            className={imgClassName}
            style={{
              ...imgStyle,
              opacity: idx === currentImageIndex ? 1 : 0,
              animation: idx === 0 ? 'fadeIn ease 1s' : 'none',
              transition: `opacity ${imageTransition.duration / 1000}s ${imageTransition.timingFunction} ${imageTransition.delay / 1000}s`,
            }}
          />
        )
      })}
    </div>
  )
}

export default ImageContainer
