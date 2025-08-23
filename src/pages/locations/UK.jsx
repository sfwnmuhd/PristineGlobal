import React from 'react'
import { motion } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'
import Footer from '../../components/Footer'
import BackToTop from '../../components/BackToTop'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'

/**
 * UK Location Page Component
 * Dedicated page for UK operations and facilities
 */
const UK = () => {
  const facilities = [
    {
      name: "Willoughby Grange Nursing Home",
      type: "Nursing Home",
      capacity: "45 beds",
      specialty: "Dementia & Elderly Care",
      location: "Nottingham, UK"
    },
    {
      name: "Broom Lane Care Home",
      type: "Care Home",
      capacity: "32 beds",
      specialty: "Residential Care",
      location: "Leicester, UK"
    },
    {
      name: "Sunnydale Child Care",
      type: "Child Care Facility",
      capacity: "50 children",
      specialty: "Early Years Education",
      location: "Birmingham, UK"
    }
  ]

  const upcomingProjects = [
    {
      name: "Stoke-on-Trent Nursing Home",
      type: "Nursing Home",
      capacity: "50 beds",
      status: "In Development",
      expectedCompletion: "2025"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b3b5c] to-[#2b376b] text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ReactCountryFlag
                countryCode="GB"
                svg
                className="w-16 h-12 mr-4 rounded shadow-lg"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                United Kingdom
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Leading healthcare and childcare services across England with compassionate, 
              person-centered care facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Facilities */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Our Facilities
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-black mb-3">{facility.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Type:</span>
                    <span>{facility.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Capacity:</span>
                    <span>{facility.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Specialty:</span>
                    <span>{facility.specialty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Location:</span>
                    <span>{facility.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Upcoming Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-green-600 uppercase tracking-wide">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{project.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Type:</span>
                    <span>{project.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Capacity:</span>
                    <span>{project.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Expected Completion:</span>
                    <span>{project.expectedCompletion}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Our Services in the UK
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Nursing Care</h3>
              <p className="text-gray-600">24/7 professional nursing care for elderly residents with complex medical needs.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Dementia Care</h3>
              <p className="text-gray-600">Specialized dementia care units with trained staff and tailored activities.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Child Care</h3>
              <p className="text-gray-600">Early years education and childcare services for working families.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}

export default UK
