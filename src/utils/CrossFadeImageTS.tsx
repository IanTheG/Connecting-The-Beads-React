import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
// import { Property } from '../node_modules/csstype/index';

interface PropTypesI {
  src: string;
  alt?: string;
  duration?: number;
  // timingFunction?: Property.AnimationTimingFunction
  timingFunction?: '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-en';
  delay?: number;
  imgStyle?: React.CSSProperties | undefined;
  imgClassName?: string;
  containerStyle?: React.CSSProperties | undefined;
  containerClassName?: string;
};

type ImageStateT = {
  topSrc: string;
  bottomSrc: string;
  previousImage: string;
  opacity: number;
};

type ImageTransitionT = {
  duration: number;
  // timingFunction: Property.AnimationTimingFunction;
  timingFunction?: '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-en';
  delay: number;
};

/** When passed a src that changes, the image cross-fades from the old src to the new src.
 *
 * @param {string} src The image source.
 * @param {string=} alt Alt text describing image.
 * @param {number=} duration The duration in ms of the opacity transition.
 * @param {enum} timingFunction "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-en"
 * @param {number=} delay The delay in ms of the opacity transition.
 * @param {object=} imgStyle React in-line styles for the img elements.
 * @param {string=} imgClassName CSS class names for styling img elements.
 * @param {object=} containerStyle React in-line styles for the div container.
 * @param {string=} containerClassName CSS class name(s) for the div container
 * @returns {React.FunctionComponent} A React Function Component: a div containing two img.
 */
const CrossFadeImageTS: React.FC<PropTypesI> = ({
  src, alt, duration, timingFunction, delay, imgStyle, imgClassName, containerStyle, containerClassName
}) => {

  let t: NodeJS.Timeout | undefined;
  const timeout = useRef(t)

  const defaultImageState: ImageStateT = {
    topSrc: "",
    bottomSrc: "",
    previousImage: "",
    opacity: 0
  };
  const imageTransition: ImageTransitionT = {
    duration: duration || 500,
    timingFunction: timingFunction || 'ease',
    delay: delay || 0
  };

  const history = useHistory()
  const [imageState, setImageState] = useState<ImageStateT>(defaultImageState);

  /*
  Clear images
  Switch images placement
  Transition/change opacity
  */
  useEffect(() => {
    if (src !== imageState.topSrc) {
      const newImageState: ImageStateT = {
        topSrc: "",
        bottomSrc: "",
        previousImage: imageState.previousImage,
        opacity: 0
      };
      setImageState(newImageState);
    }
  }, [src]);

  useEffect(() => {
    if (src !== imageState.topSrc) {
      const newImageState: ImageStateT = {
        topSrc: src,
        bottomSrc: imageState.previousImage || src,
        previousImage: src,
        opacity: 1
      };
      setImageState(newImageState);
    }
    if (imageState.opacity !== 0) {
      if (!timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setImageState({ ...imageState, opacity: 0 }), 20);
    }
  }, [imageState])

  return (
    <>
      <div className={containerClassName} style={containerStyle}>
        {imageState.topSrc
          && (
            <img
              className={imgClassName}
              style={{...imgStyle, animation: `${history.location.pathname === "/" ? 'fadeIn ease 1.5s' : '' }`}}
              src={imageState.topSrc}
              alt={alt}
            />
          )}
        {imageState.bottomSrc
          && (
            <img
              className={imgClassName}
              style={{
                ...imgStyle,
                opacity: imageState.opacity,
                transition: `opacity ${imageTransition.duration / 1000}s ${imageTransition.timingFunction} ${imageTransition.delay / 1000}s`,
                animation: `${history.location.pathname === "/" ? 'fadeIn ease 1.5s' : '' }`
              }}
              src={imageState.bottomSrc}
              alt={alt}
            />
          )}
      </div>
    </>
  );
};

export default CrossFadeImageTS;
