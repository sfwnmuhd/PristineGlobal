import React from 'react'
import { motion } from 'motion/react'

/**
 * FounderMessageSection Component
 * Displays the founder's message and vision for the company
 */
const FounderMessageSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-8 text-center"
        >
          Message From Founder
        </motion.h2>

        {/* Founder Message Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg lg:text-xl text-gray-700 font-medium mb-6">
              Greetings from Primecare (India),
            </p>

            <div className="text-base lg:text-lg text-gray-600 leading-relaxed space-y-4">
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
          </motion.div>

          {/* Founder Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true, amount: 0.1 }}
            className="mt-8 pt-6 border-t border-gray-200"
          >
            <div className="text-right">
              <h3 className="text-xl lg:text-2xl font-semibold text-[#0b3b5c] mb-1">
                DR. SYED SAYEED AHMED
              </h3>
              <p className="text-sm lg:text-base text-gray-600 font-medium">
                Founder Chairman & Managing Director
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderMessageSection
