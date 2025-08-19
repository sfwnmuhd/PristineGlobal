import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'

const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll()
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
