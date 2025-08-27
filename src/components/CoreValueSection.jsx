import React from 'react'
import { motion } from 'motion/react'

/**
 * CoreValueSection Component
 * Displays the company's core values with icons and descriptions
 * Features: Responsive grid layout, staggered animations, hover effects
 */
const CoreValueSection = () => {
  // ===== CORE VALUES DATA =====
  
  const coreValues = [
    {
      title: "Patient-Centric Care",
      description: "We prioritize comfort, respect, and holistic well-being in every service we offer.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/185cc1dc08b118c8b51c0d872bbaeb16436787e2?width=336",
    },
    {
      title: "Compassion & Professionalism",
      description: "From our caregiving homes in the UK to staffing services that bring warmth and reliability, our ethos spans continents.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/e9d926fb940d816d92ad26636e5408712f82af7d?width=336",
    },
    {
      title: "Innovation & Expansion",
      description: "Whether scaling healthcare facilities in the UK or optimizing distribution networks in India and Qatar, we continuously pursue excellence.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/5ad614595d2444835c98001062298ad71a787583?width=336",
    },
  ]

  // ===== COMPONENT RENDER =====

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl sm:text-5xl font-semibold text-black mb-12"
        >
          Our Core Values
        </motion.h2>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 text-center hover:shadow-md transition-shadow duration-300"
            >
              {/* Value Icon */}
              <img
                src={value.icon}
                alt=""
                aria-hidden="true"
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto mb-6 opacity-80"
                loading="lazy"
                decoding="async"
              />
              
              {/* Value Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black mb-4 sm:mb-6">
                {value.title}
              </h3>
              
              {/* Value Description */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValueSection
