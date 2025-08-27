import React from 'react'
import { motion } from 'motion/react'

/**
 * AboutPageHero Component
 * Minimal hero section for the About page
 */
const AboutPageHero = () => {
  return (
    <section className="py-15 sm:py-24 flex items-center justify-center bg-gradient-to-br from-[#0b3b5c] to-[#1a5073]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-light text-white mb-2"
        >
          About Us
        </motion.h1>

        {/* Company Name */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-blue-200 mb-12"
        >
          Pristine Global
        </motion.h2> */}

        {/* Simple Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
        >
          A family-led enterprise dedicated to excellence in healthcare,
          technology, and global trading across multiple countries.
        </motion.p>
      </div>
    </section>
  )
}

export default AboutPageHero
