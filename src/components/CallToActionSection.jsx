import React from 'react'
import { motion } from 'motion/react'
import ShimmerButton from './ShimmerButton'

/**
 * CallToActionSection Component
 * A prominent CTA section encouraging partnership and collaboration
 * Features: Gradient background, responsive layout, call-to-action button
 */
const CallToActionSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#0b3b5c] rounded-xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Background Pattern (Optional - can be removed if not needed) */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full"
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
              }}
            />
          </div>

          {/* Content Container */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-center justify-between">
            {/* Text Content */}
            <div className="mb-8 lg:mb-0 text-center lg:text-left lg:flex-1 lg:pr-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300 mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Join us in our mission or partner to deliver exceptional services across healthcare, technology, and trading hubs.
              </p>
            </div>

            {/* Call-to-Action Button */}
            <div className="lg:flex-shrink-0">
              <ShimmerButton text="Join or partner now" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToActionSection
