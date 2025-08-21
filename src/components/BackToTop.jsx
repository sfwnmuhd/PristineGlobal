import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronUp } from 'lucide-react'

/**
 * BackToTop Component
 * A floating button that appears after scrolling and smoothly scrolls to top
 * Features: Scroll detection, smooth animations, hover effects, accessibility
 */
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // ===== SCROLL DETECTION =====
  
  useEffect(() => {
    /**
     * Toggle button visibility based on scroll position
     * Shows button after scrolling 300px from top
     */
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll listener with passive option for performance
    window.addEventListener('scroll', toggleVisibility, { passive: true })

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // ===== SCROLL TO TOP HANDLER =====
  
  /**
   * Smoothly scroll to top of page
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // ===== COMPONENT RENDER =====

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 p-3 bg-gradient-to-r from-[#0b3b5c] to-[#2b376b] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 30px rgba(11, 59, 92, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          {/* Icon with Hover Animation */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
          </motion.div>

          {/* Subtle Ripple Effect on Hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
