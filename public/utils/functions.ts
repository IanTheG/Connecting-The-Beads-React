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
