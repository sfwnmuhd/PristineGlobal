import React from 'react'
import { motion } from 'motion/react'

/**
 * FounderMessageSection Component
 * Displays the founder's message with a clean two-column layout
 * Inspired by modern professional layouts with content left, image right
 */
const FounderMessageSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
          
          {/* Left Column - Message Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="order-2 lg:order-1"
          >
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 leading-tight"
            >
              Message from our{' '}
              <span className="text-[#0b3b5c]">Founder.</span>
            </motion.h2>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-lg lg:text-xl text-gray-600 mb-8 font-medium"
            >
              Greetings from Primecare (India),
            </motion.p>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-6 text-base lg:text-lg text-gray-700 leading-relaxed"
            >
              <p>
                We are a chain of hospitals, medical centers and pharmacies, delivering quality and affordable healthcare to our patients. Our vision is to be a truly world class healthcare organization, gaining the lifetime loyalty of our patients.
              </p>

              <p>
                The healthcare sector in India has undergone a sea change, and continues to address the many challenges. With rising incomes and a burgeoning disease burden, India has an enormous expressed need for high quality healthcare delivery.
              </p>

              <p>
                The availability of a large pool of clinical talent in the country, improved global connectivity, increasing healthcare insurance penetration and growing foreign direct investment in healthcare, help to create an excellent ecosystem where a world class healthcare system could sustain and thrive.
              </p>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.1 }}
              className="mt-8"
            >
              <button className="bg-[#0b3b5c] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Learn About Our Vision
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Founder Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative"
              >
                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0b3b5c] to-blue-600">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738"
                      alt="Dr. Syed Sayeed Ahmed - Founder Chairman & Managing Director"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0b3b5c] rounded-full opacity-10"></div>
                </div>
              </motion.div>

              {/* Founder Details Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.1 }}
                className="mt-6 bg-white rounded-xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto lg:max-w-none"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0b3b5c] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">S</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-[#0b3b5c] mb-1">
                      DR. SYED SAYEED AHMED
                    </h3>
                    <p className="text-lg text-gray-600 font-medium mb-3">
                      Founder Chairman & Managing Director
                    </p>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 italic">
                      "Building world-class healthcare systems that transform communities and save lives across multiple continents."
                    </p>
                  </div>
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
