import React from 'react'
import { motion, useScroll, useSpring } from 'motion/react'

/**
 * ScrollProgressIndicator Component
 * A fixed top progress bar that shows page scroll progress
 * Features: Smooth spring animation, gradient styling, responsive design
 */
const ScrollProgressIndicator = () => {
  // Track scroll progress (0 to 1)
  const { scrollYProgress } = useScroll()
  
  // Apply spring physics for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0b3b5c] to-[#2b376b] transform-origin-left z-50"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgressIndicator
