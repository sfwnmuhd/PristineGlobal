import React from 'react'
import { motion } from 'motion/react'

/**
 * AboutPageHero Component
 * Custom hero section specifically for the About page
 */
const AboutPageHero = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0b3b5c] to-[#2b376b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            About
            <span className="block text-3xl sm:text-5xl lg:text-6xl font-light text-blue-200 mt-2">
              Pristine Global
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Transforming healthcare, technology, and global trading through 
            visionary leadership and unwavering commitment to excellence
          </motion.p>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-200 mb-2">2020</div>
              <div className="text-lg text-blue-100">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-200 mb-2">3</div>
              <div className="text-lg text-blue-100">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-200 mb-2">100%</div>
              <div className="text-lg text-blue-100">Commitment</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <button className="px-8 py-4 bg-white text-[#0b3b5c] rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Discover Our Journey
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full"></div>
      </div>
    </section>
  )
}

export default AboutPageHero
