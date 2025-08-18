import React from 'react'
import { motion } from 'motion/react'

const CallToActionSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-500 rounded-xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4d4f369a455a13efb2cd4c4da62c8e30c059f8f5?width=2604"
              alt="Gradient Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-medium text-white mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-white leading-relaxed">
                Join us in our mission or partner to deliver exceptional
                services across
                <br />
                healthcare, technology, and trading hubs.
              </p>
            </div>
            <button className="border border-white border-opacity-50 text-white px-8 py-3 rounded-2xl text-xl font-medium hover:bg-white hover:text-pristine-blue transition-colors">
              Join or partner now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToActionSection
