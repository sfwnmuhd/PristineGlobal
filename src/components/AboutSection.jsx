import React from 'react'
import { motion } from 'motion/react'
import care from '../assets/care.jpg'
import technology from '../assets/it.jpg'
import doctor from '../assets/doctor.jpg'
import retail from '../assets/super.jpg'


const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid  lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="border border-gray-300 rounded-2xl ">
                <img
                  src={care}
                  alt="Care"
                  className="w-full h-64 rounded-2xl"
                />
              </div>
              <div className="border border-gray-300 rounded-2xl">
                <img
                  src={technology}
                  alt="Technology"
                  className=" w-full h-64 rounded-2xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="border border-gray-300 rounded-2xl ">
                <img
                  src={retail}
                  alt="Business"
                  className="w-full h-64 object-fit rounded-2xl"
                />
              </div>
              <div className="border border-gray-300 rounded-2xl">
                <img
                  src={doctor}
                  alt="Healthcare"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold text-black mb-6">
              About
            </h2>
            <h3 className="text-xl text-gray-500 mb-8">
              Global Excellence in Healthcare, Retail & Technology
            </h3>
            <p className="text-2xl text-black leading-relaxed">
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
