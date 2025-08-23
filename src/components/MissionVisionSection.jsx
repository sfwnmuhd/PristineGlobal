import React from 'react'
import { motion } from 'motion/react'

/**
 * MissionVisionSection Component
 * Displays company mission, vision, and founding story
 */
const MissionVisionSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Mission */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver exceptional healthcare services, innovative technology solutions, 
                and strategic trading partnerships that enhance lives and drive sustainable 
                growth across global markets. We are committed to excellence, compassion, 
                and creating lasting value for our communities.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a leading global enterprise recognized for transforming healthcare 
                delivery, pioneering technology innovations, and fostering international 
                business relationships that contribute to a healthier, more connected world.
              </p>
            </div>

            {/* Core Principles */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
                Our Principles
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#0b3b5c] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Excellence in every service we provide
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#0b3b5c] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Integrity in all business relationships
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#0b3b5c] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Innovation driving continuous improvement
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#0b3b5c] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Compassion in healthcare delivery
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Founding Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
              Our Founding Story
            </h3>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded by visionary healthcare professionals Dr. Syed Sayeed Ahmed and 
                Dr. Ahmed Rashid Shaik, Pristine Global emerged from a shared commitment 
                to revolutionize healthcare delivery across international markets.
              </p>
              
              <p>
                With decades of combined experience in medical practice, healthcare 
                administration, and strategic business development, our founders recognized 
                the opportunity to create a unique enterprise that bridges healthcare 
                excellence with technological innovation.
              </p>
              
              <p>
                Today, Pristine Global stands as a testament to the power of medical 
                expertise combined with entrepreneurial vision, operating across multiple 
                continents and serving diverse communities with unwavering dedication to quality.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0b3b5c]">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0b3b5c]">3</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0b3b5c]">500+</div>
                <div className="text-sm text-gray-600">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0b3b5c]">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection
