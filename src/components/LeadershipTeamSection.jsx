import React from 'react'
import { motion } from 'motion/react'

/**
 * FounderMessageSection Component
 * Displays the founder's message with a clean two-column layout
 * Features: Content left, simple founder image with details right, and CTA below
 */
const FounderMessageSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
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
              Greetings from Pristine Global,
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
                The availability of a large pool of clinical talent in the country, improved global connectivity, increasing healthcare insurance penetration and growing foreign direct investment in healthcare, help to create an excellent ecosystem where a world class healthcare system could sustain and thrive. This growth potential in the medical sector in India is likely to sustain over the coming several years.
              </p>
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
            <div className="text-center">
              {/* Founder Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative mb-6"
              >
                <div className="relative w-80 h-96 mx-auto overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738"
                    alt="Dr. Syed Sayeed Ahmed - Founder Chairman & Managing Director"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>

              {/* Founder Name and Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-2"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0b3b5c]">
                  DR. SYED SAYEED AHMED
                </h3>
                <p className="text-lg lg:text-xl text-gray-600 font-medium">
                  Founder Chairman & Managing Director
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ===== CALL-TO-ACTION SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center sm:text-left sm:flex sm:justify-between sm:items-center bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          {/* CTA Content */}
          <div className='sm:flex sm:flex-col sm:items-start mb-6 sm:mb-0'>
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Ready to invest in our growing healthcare portfolio?
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              From expanding medical centers to innovative healthcare technology solutions across multiple countries.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button className="flex items-center justify-center mx-auto sm:mx-0 bg-[#0b3b5c] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Invest with Us
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.4383 10.5565L8.47314 19.5217L7 18.0485L15.9652 9.08333H8.06335V7H19.5217V18.4583H17.4383V10.5565Z" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderMessageSection
