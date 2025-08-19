import React from 'react'
import { motion } from 'motion/react'
import care from '../assets/care.jpg'
import technology from '../assets/it.jpg'
import doctor from '../assets/doctor.jpg'
import retail from '../assets/super.jpg'

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Images with improved grid alignment */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-1 max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={care}
                  alt="Care"
                  className="w-full h-36 sm:h-44 lg:h-52 xl:h-60 object-cover"
                />
              </div>
              <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={technology}
                  alt="Technology"
                  className="w-full h-36 sm:h-44 lg:h-52 xl:h-60 object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4 mt-6 sm:mt-8 lg:mt-12"
            >
              <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={retail}
                  alt="Business"
                  className="w-full h-36 sm:h-44 lg:h-52 xl:h-60 object-cover"
                />
              </div>
              <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={doctor}
                  alt="Healthcare"
                  className="w-full h-36 sm:h-44 lg:h-52 xl:h-60 object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Right side - Content with improved spacing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              About
            </motion.h2>
            <motion.h3 
              className="text-lg sm:text-xl text-gray-500 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Global Excellence in Healthcare, Retail & Technology
            </motion.h3>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
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
