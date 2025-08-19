import { useEffect } from 'react'

const useSmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scrolling for better performance
    const smoothScrollPolyfill = () => {
      if (!window.CSS || !CSS.supports || !CSS.supports('scroll-behavior', 'smooth')) {
        // Polyfill for browsers that don't support smooth scrolling
        const smoothscroll = require('smoothscroll-polyfill')
        smoothscroll.polyfill()
      }
    }

    // Initialize smooth scroll
    smoothScrollPolyfill()

    // Add momentum scrolling for iOS
    document.body.style.webkitOverflowScrolling = 'touch'

    // Enhance scroll performance
    let ticking = false
    const updateScrollPerformance = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Optimize scroll performance
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', updateScrollPerformance, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollPerformance)
    }
  }, [])

  // Smooth scroll to element function
  const scrollToElement = (elementId, offset = 80) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return { scrollToElement, scrollToTop }
}

export default useSmoothScroll
