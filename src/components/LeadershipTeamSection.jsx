import React from 'react'
import { motion } from 'motion/react'

/**
 * FounderMessageSection Component
 * Displays the founder's message and vision for the company
 * Features: Two-column layout with content on left and founder details on right
 */
const FounderMessageSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-12 text-center"
        >
          Message From Founder
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Message Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-6"
              >
                <p className="text-xl lg:text-2xl text-[#0b3b5c] font-semibold mb-6 leading-relaxed">
                  Greetings from Primecare (India),
                </p>

                <div className="text-base lg:text-lg text-gray-700 leading-relaxed space-y-5">
                  <p>
                    We are a chain of hospitals, medical centers and pharmacies, delivering quality and affordable healthcare to our patients. Our vision is to be a truly world class healthcare organization, gaining the lifetime loyalty of our patients.
                  </p>

                  <p>
                    The healthcare sector in India has undergone a sea change, and continues to address the many challenges. With rising incomes and a burgeoning disease burden, India has an enormous expressed need for high quality healthcare delivery.
                  </p>

                  <p>
                    The availability of a large pool of clinical talent in the country, improved global connectivity, increasing healthcare insurance penetration and growing foreign direct investment in healthcare, help to create an excellent ecosystem where a world class healthcare system could sustain and thrive. This growth potential in the medical sector in India is likely to sustain over the coming several years.
                  </p>
                </div>

                {/* Quote decoration */}
                <div className="pt-6 border-t border-gray-200">
                  <blockquote className="text-lg italic text-[#0b3b5c] font-medium">
                    "Building world-class healthcare systems that serve communities with compassion and excellence."
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Founder Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="text-center lg:text-left">
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative mb-8"
              >
                <div className="relative mx-auto lg:mx-0 w-80 h-96 lg:w-full lg:h-[400px] overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#0b3b5c] to-blue-600">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738"
                    alt="Dr. Syed Sayeed Ahmed - Founder Chairman & Managing Director"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Founder Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0b3b5c] mb-2">
                  DR. SYED SAYEED AHMED
                </h3>
                <p className="text-lg lg:text-xl text-gray-600 font-semibold mb-4">
                  Founder Chairman & Managing Director
                </p>
                
                {/* Additional credentials */}
                <div className="space-y-2 text-sm lg:text-base text-gray-500">
                  <p className="flex items-center justify-center lg:justify-start">
                    <span className="w-2 h-2 bg-[#0b3b5c] rounded-full mr-3"></span>
                    Consultant Pediatrician
                  </p>
                  <p className="flex items-center justify-center lg:justify-start">
                    <span className="w-2 h-2 bg-[#0b3b5c] rounded-full mr-3"></span>
                    MBA Healthcare Management
                  </p>
                  <p className="flex items-center justify-center lg:justify-start">
                    <span className="w-2 h-2 bg-[#0b3b5c] rounded-full mr-3"></span>
                    Healthcare Visionary
                  </p>
                </div>

                {/* Signature line */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="w-24 h-0.5 bg-gradient-to-r from-[#0b3b5c] to-blue-400 mx-auto lg:mx-0"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FounderMessageSection
