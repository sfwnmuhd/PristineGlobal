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
          {/* Left side - Images */}
          <div className="grid sm:grid-cols-2 gap-4 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="border border-gray-300 rounded-2xl overflow-hidden">
                <img
                  src={care}
                  alt="Care"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
              <div className="border border-gray-300 rounded-2xl overflow-hidden">
                <img
                  src={technology}
                  alt="Technology"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 mt-0 sm:mt-8"
            >
              <div className="border border-gray-300 rounded-2xl overflow-hidden">
                <img
                  src={retail}
                  alt="Business"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
              <div className="border border-gray-300 rounded-2xl overflow-hidden">
                <img
                  src={doctor}
                  alt="Healthcare"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-4 sm:mb-6">
              About
            </h2>
            <h3 className="text-lg sm:text-xl text-gray-500 mb-6 sm:mb-8">
              Global Excellence in Healthcare, Retail & Technology
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed">
              Pristine Global is a family-led enterprise founded by visionaries
              Dr. Syed Sayeed Ahmed and Dr. Ahmed Rashid Shaik, both seasoned
              healthcare professionals with deep expertise in medical service
              delivery and strategic investments across multiple countries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
