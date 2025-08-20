import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronUp } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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
          className="fixed bottom-8 right-24 z-50 p-3 bg-gradient-to-r from-[#0b3b5c] to-[#2b376b] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 30px rgba(11, 59, 92, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
          </motion.div>

          {/* Ripple effect */}
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
