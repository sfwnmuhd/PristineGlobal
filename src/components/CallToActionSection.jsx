import React from 'react'
import { motion } from 'motion/react'
import ShimmerButton from './ShimmerButton'

const CallToActionSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0b3b5c] rounded-xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4d4f369a455a13efb2cd4c4da62c8e30c059f8f5?width=2604"
              alt="Gradient Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Globe Background */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-40">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2dfd29570bc441179a2ba2cc76735eb6%2Fc58fc2a83b054d7e8d31ffbfd37629b8?format=webp&width=800"
              alt="Globe Background"
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain"
            />
          </div>
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between">
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300 mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Join us in our mission or partner to deliver exceptional services across healthcare, technology, and trading hubs.
              </p>
            </div>
            {/* <button className="border border-white border-opacity-50 text-white px-8 py-3 rounded-2xl text-xl font-medium hover:bg-white hover:text-pristine-blue transition-colors">
              Join or partner now
            </button> */}
            <ShimmerButton text={"Join or partner now"}/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToActionSection
