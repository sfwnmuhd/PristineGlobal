import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop Component
 * Automatically scrolls to top of page when route changes
 * Ensures consistent navigation experience across all pages
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use instant for immediate scroll on route change
    })
  }, [pathname]) // Trigger whenever the pathname changes

  return null // This component doesn't render anything
}

export default ScrollToTop
