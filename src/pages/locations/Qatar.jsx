import React from 'react'
import { motion } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'
import Footer from '../../components/Footer'
import BackToTop from '../../components/BackToTop'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'

/**
 * Qatar Location Page Component
 * Dedicated page for Qatar operations and business partnerships
 */
const Qatar = () => {
  const services = [
    {
      title: "Healthcare Consulting",
      description: "Strategic healthcare consulting services for medical facilities and healthcare organizations.",
      icon: "🏥",
      image: "https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg"
    },
    {
      title: "Business Development",
      description: "Facilitating international business partnerships and investment opportunities.",
      icon: "💼",
      image: "https://images.pexels.com/photos/9471699/pexels-photo-9471699.jpeg"
    },
    {
      title: "Technology Solutions",
      description: "Implementing digital health solutions and healthcare technology systems.",
      icon: "💻",
      image: "https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg"
    },
    {
      title: "Training & Development",
      description: "Professional development programs for healthcare staff and administrators.",
      icon: "📚",
      image: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg"
    }
  ]

  const partnerships = [
    {
      sector: "Healthcare",
      description: "Strategic partnerships with leading medical centers and healthcare providers",
      focus: "Patient Care Excellence"
    },
    {
      sector: "Technology",
      description: "Collaborations with health-tech companies for digital transformation",
      focus: "Digital Innovation"
    },
    {
      sector: "Education",
      description: "Medical education and training program development",
      focus: "Professional Development"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b3b5c] to-[#2b376b] text-white pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/9471699/pexels-photo-9471699.jpeg"
            alt="Modern office building in Doha, Qatar"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b5c]/80 to-[#2b376b]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ReactCountryFlag
                countryCode="QA"
                svg
                className="w-16 h-12 mr-4 rounded shadow-lg"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Qatar
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Strategic healthcare consulting and business development services 
              in the heart of the Middle East.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Our Services in Qatar
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#0b3b5c] text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-xl">{service.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Focus */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Strategic Focus Areas
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-[#0b3b5c] text-white text-sm font-medium rounded-full">
                    {partnership.sector}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{partnership.focus}</h3>
                <p className="text-gray-600 leading-relaxed">{partnership.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qatar Vision 2030 Alignment */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-8">
              Aligned with Qatar National Vision 2030
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our operations in Qatar are strategically aligned with the country's National Vision 2030, 
              focusing on healthcare excellence, human development, and sustainable economic growth. 
              We contribute to building a knowledge-based economy through innovative healthcare solutions 
              and strategic partnerships that enhance the quality of life for residents and visitors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Human Development</h3>
              <p className="text-gray-600">Enhancing healthcare capabilities and professional development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Economic Growth</h3>
              <p className="text-gray-600">Contributing to sustainable economic development through innovation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Social Development</h3>
              <p className="text-gray-600">Building partnerships that strengthen healthcare infrastructure</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}

export default Qatar
