import React from 'react'
import { motion } from 'motion/react'

// Asset imports
import care from '../assets/care.jpg'
import technology from '../assets/it.jpg'
import doctor from '../assets/doctor.jpg'
import retail from '../assets/super.jpg'

/**
 * AboutSection Component
 * Displays company information with image grid and content
 * Features: Responsive layout, staggered animations, image hover effects
 */
const AboutSection = () => {
  // ===== COMPONENT RENDER =====

  return (
    <section className="py-16 lg:py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ===== LEFT SIDE - IMAGE GRID ===== */}
          <div className="grid sm:grid-cols-2 gap-4 order-2 lg:order-1 max-w-md lg:max-w-none mx-auto lg:mx-0">
            {/* Left Column Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-4"
            >
              <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={care}
                  alt="Compassionate care services and healthcare facilities"
                  className="w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover"
                />
              </div>
              <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={technology}
                  alt="Technology solutions and IT services"
                  className="w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-4"
            >
              <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={retail}
                  alt="Retail and business operations"
                  className="w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover"
                />
              </div>
              <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={doctor}
                  alt="Healthcare professionals and medical services"
                  className="w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* ===== RIGHT SIDE - CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            {/* Main Title */}
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              About
            </motion.h2>

            {/* Subtitle */}
            <motion.h3 
              className="text-lg sm:text-xl text-gray-500 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              Global Excellence in Healthcare, Retail & Technology
            </motion.h3>

            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              Pristine Global is a family-led enterprise founded by visionaries
              Dr. Syed Sayeed Ahmed and Dr. Ahmed Rashid Shaik, both seasoned
              healthcare professionals with deep expertise in medical service
              delivery and strategic investments across multiple countries.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
