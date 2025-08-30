import React from 'react'
import { motion } from 'motion/react'
import founder from '../assets/founder.avif'

/**
 * FounderMessageSection Component
 * Displays the founder's message with a clean two-column layout
 * Features: Content left, simple founder image with details right, and CTA below
 */
const FounderMessageSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        
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
              className="space-y-6 text-base lg:text-lg text-gray-700 leading-relaxed text-justify"
            >
              <p>
                At Pristine Global, our mission has always been to create an organization that goes beyond borders—delivering excellence in healthcare, technology, retail, and international trading. From Qatar to the United Kingdom and India, we are committed to building businesses that not only serve markets but also touch lives with compassion and integrity.
              </p>

              <p>
                The world around us is changing rapidly, with growing healthcare needs, new opportunities in global trade, and the power of technology shaping our future. Pristine Global is positioned at this intersection—driven by innovation, guided by values, and dedicated to making a lasting impact on the communities we serve.
              </p>

              <p>
                Our vision is simple yet profound: to build a truly world-class enterprise that earns the trust and loyalty of people worldwide. Together with our teams, partners, and communities, we are shaping a healthier, more connected, and sustainable future.”
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
                    src={founder}
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
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center sm:text-left mt-6 sm:mt-16 sm:flex sm:justify-between sm:items-center"
        >
          {/* CTA Content */}
          <div className='sm:flex sm:flex-col sm:items-start mb-2 sm:mb-0'>
            <h3 className="text-xl sm:text-2xl font-medium text-black mb-2 sm:mb-4">
              Ready to invest in our growing portfolio?
            </h3>
            <p className="text-sm sm:text-lg text-gray-500">
              From the upcoming UK care home to thriving ventures worldwide.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <button className="flex items-center justify-center mx-auto sm:mx-0 border border-[#0b3b5c] text-[#0b3b5c] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0b3b5c] hover:text-white transition-colors cursor-pointer">
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
