import React, { useEffect, useState } from 'react'
import getRosary from './api'
import { MysteryI } from './interfaces'

// Fade animation found on
// https://codepen.io/michellebarker/pen/PowYKXJ?editors=1010
export const fadeAnimation = (): void => {

  const containers = Array.from(document.querySelectorAll('.container')) as HTMLElement[]
  const options = {
    rootMargin: '0px',
    threshold: 0.75,
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target } = entry;
      if (entry.intersectionRatio >= 0.75) {
        target.classList.add("is-visible")
      } else {
        target.classList.remove("is-visible")
      }
    })

  }, options)
  
  containers.forEach((container, index) => {
    const childElements = container.children
    if (childElements) {
      const containerChildren = Array.from(childElements) as HTMLElement[]
  
      containerChildren.forEach((el, index: number) => {
        el.style.setProperty("--delay", `${index * 250}ms`);
      });
  
      observer.observe(container)
    }
    // const portraitView = document.getElementById('portrait')
    // portraitView && observer.observe(portraitView)
  })
}

export const getIndex = (mystery: string): number => {
  switch (mystery) {
    case 'glorious': return 0
    case 'joyful': return 1
    case 'sorrowful': return 2
    case 'luminous': return 3
    default: return 0
  }
}

export const generateRosary = async (setRosary: React.Dispatch<React.SetStateAction<MysteryI[]>>) => {
  try { 
    const rosaryData = await getRosary()
    setRosary(rosaryData.data)
  } catch (error) {
    console.log(error)
  }
  // getRosary()
    // .then((res) => setRosary(res.data))
    // .then(() => {
    //   return rosary
    // })
    // .catch(err => console.error(err))
}
