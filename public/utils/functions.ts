// Functions

export const rotateToPortrait = (): void => {
  window.addEventListener('orientationchange', (e) => {
    let orientation = 0
    orientation = (e.target as Window).screen.orientation.angle
    const root = document.getElementById('root')
    const portrait = document.getElementById('portrait')
  
    if (root && portrait && orientation === 90) {
      // show / hide the app and a page that asks the user to rotate the device to portrait mode
      root.style.display = 'none'
      portrait.style.display = 'flex'
      
    } else if (root && portrait && orientation === 0) {
      root.style.display = 'block'
      portrait.style.display = 'none'
    }
  })
}

// Fade animation found on
// https://codepen.io/michellebarker/pen/PowYKXJ?editors=1010
export const fadeAnimation = (): void => {

  const containers = Array.from(document.querySelectorAll('.container')) as HTMLElement[]
  // console.log(containers)

  const options = {
    rootMargin: '0px',
    threshold: 0.75,
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target } = entry;
      // console.log(entry, target)
      if (entry.intersectionRatio >= 0.75) {
        target.classList.add("is-visible")
      } else {
        target.classList.remove("is-visible")
      }
    })
  }, options)
  
  // console.log(document.querySelectorAll('.container'))
  
  containers.forEach((container, index) => {
    const childElements = container.children
    // console.log(container)
    // console.log(childElements)
    if (childElements) {
      const containerChildren = Array.from(childElements) as HTMLElement[]
  
      containerChildren.forEach((el, index: number) => {
        el.style.setProperty("--delay", `${index * 250}ms`);
      });
  
      observer.observe(container)
    }
  })
}
