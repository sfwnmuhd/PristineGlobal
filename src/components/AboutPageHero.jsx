import React from 'react'
import { motion } from 'motion/react'

/**
 * AboutPageHero Component
 * Minimal hero section for the About page
 */
const AboutPageHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b3b5c] to-[#1a5073] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
          alt="Global digital network representing worldwide presence"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b5c]/90 to-[#1a5073]/80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-1 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-200 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 left-10 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-light text-white mb-8"
        >
          About
        </motion.h1>

        {/* Company Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-blue-200 mb-12"
        >
          Pristine Global
        </motion.h2>

        {/* Simple Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          A family-led enterprise dedicated to excellence in healthcare,
          technology, and global trading across multiple countries.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 bg-white text-[#0b3b5c] rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
            Our Global Impact
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[#0b3b5c] transition-colors duration-300">
            Explore Locations
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPageHero
