import React from 'react'
import { motion } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'
import Footer from '../../components/Footer'
import BackToTop from '../../components/BackToTop'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'

/**
 * India Location Page Component
 * Dedicated page for India operations and business activities
 */
const India = () => {
  const businessAreas = [
    {
      title: "Healthcare Technology",
      description: "Development and implementation of digital health solutions and medical software systems.",
      icon: "💻",
      focus: "Digital Health Innovation"
    },
    {
      title: "Medical Equipment Trading",
      description: "Import and distribution of advanced medical equipment and healthcare technology.",
      icon: "🏥",
      focus: "Equipment Distribution"
    },
    {
      title: "Pharmaceutical Partnership",
      description: "Strategic partnerships with pharmaceutical companies for drug development and distribution.",
      icon: "💊",
      focus: "Medicine & Research"
    },
    {
      title: "Healthcare Consulting",
      description: "Advisory services for healthcare institutions and medical practice optimization.",
      icon: "📊",
      focus: "Strategic Consulting"
    }
  ]

  const regions = [
    {
      name: "Mumbai",
      role: "Business Hub",
      focus: "Trading & Distribution",
      description: "Primary center for pharmaceutical and medical equipment trading operations."
    },
    {
      name: "Bangalore",
      role: "Technology Center",
      focus: "Software Development",
      description: "Hub for healthcare technology development and digital health solutions."
    },
    {
      name: "Delhi",
      role: "Strategic Operations",
      focus: "Government Relations",
      description: "Government liaison and regulatory compliance for healthcare initiatives."
    },
    {
      name: "Chennai",
      role: "Manufacturing Support",
      focus: "Medical Devices",
      description: "Support for medical device manufacturing and quality assurance."
    }
  ]

  const initiatives = [
    {
      title: "Digital Health Initiative",
      description: "Developing AI-powered healthcare management systems for rural healthcare centers.",
      status: "In Progress",
      impact: "500+ Healthcare Centers"
    },
    {
      title: "Medical Equipment Access Program",
      description: "Improving access to modern medical equipment in tier-2 and tier-3 cities.",
      status: "Expanding",
      impact: "200+ Hospitals"
    },
    {
      title: "Telemedicine Platform",
      description: "Connecting rural patients with specialist doctors through digital platforms.",
      status: "Pilot Phase",
      impact: "50,000+ Patients"
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
                countryCode="IN"
                svg
                className="w-16 h-12 mr-4 rounded shadow-lg"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                India
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Advancing healthcare through technology innovation, strategic trading partnerships, 
              and digital transformation across diverse Indian markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Business Areas
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {businessAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#0b3b5c] text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">{area.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-black mr-3">{area.title}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                        {area.focus}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Operations */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Regional Operations
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-black mb-2">{region.name}</h3>
                <div className="mb-3">
                  <span className="px-3 py-1 bg-[#0b3b5c] text-white text-sm font-medium rounded-full">
                    {region.role}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="text-sm font-medium text-blue-600">{region.focus}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{region.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Key Initiatives
          </motion.h2>

          <div className="space-y-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-xl font-semibold text-black mr-4">{initiative.title}</h3>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        initiative.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                        initiative.status === 'Expanding' ? 'bg-green-100 text-green-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {initiative.status}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3">{initiative.description}</p>
                  </div>
                  <div className="md:ml-6 md:text-right">
                    <div className="text-2xl font-bold text-[#0b3b5c]">{initiative.impact}</div>
                    <div className="text-sm text-gray-500">Impact Reach</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* India Healthcare Vision */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-8">
              Supporting India's Healthcare Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Our operations in India focus on bridging the healthcare gap through innovative technology solutions, 
              strategic partnerships, and sustainable business practices. We're committed to supporting India's journey 
              towards universal healthcare access and digital health transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">Innovation</h3>
              <p className="text-gray-600">Driving healthcare innovation through cutting-edge technology and digital solutions</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">Partnership</h3>
              <p className="text-gray-600">Building strategic partnerships with local healthcare providers and institutions</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">Impact</h3>
              <p className="text-gray-600">Creating meaningful impact on healthcare accessibility and quality across India</p>
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

export default India
