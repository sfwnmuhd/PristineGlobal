import React from 'react'
import { motion } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import BackToTop from '../../components/BackToTop'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'

const India = () => {
  const brands = [
    {
      key: 'prime-care-distribution',
      name: 'Prime Care Distribution',
      sector: 'FMCG Distribution Network',
      img: 'https://images.pexels.com/photos/4481534/pexels-photo-4481534.jpeg',
      alt: 'FMCG distribution warehouse operations in India',
      intro:
        'A nationwide FMCG distribution network connecting brands with retailers through reliable, on-time delivery and data‑driven planning.',
      bullets: [
        'Multi‑city warehousing and last‑mile coverage',
        'Cold‑chain and dry‑goods capabilities',
        'Demand forecasting and inventory accuracy',
        'Retailer support, promotions and visibility',
      ],
    },
    {
      key: 'prime-care-hospital',
      name: 'Prime Care Hospital',
      sector: 'Patient‑Centric Healthcare',
      img: 'https://images.pexels.com/photos/6129682/pexels-photo-6129682.jpeg',
      alt: 'Modern hospital providing patient-centric care in India',
      intro:
        'Delivering quality, affordable healthcare anchored in compassion, safety and clinical excellence across key specialities.',
      bullets: [
        'Evidence‑based protocols and safety standards',
        'Affordable care with transparent pricing',
        'Round‑the‑clock emergency and critical care',
        'Continuum of care: OPD, IPD and rehabilitation',
      ],
    },
    {
      key: 'prime-care-global',
      name: 'Prime Care Global',
      sector: 'Ethical & Value‑Based Medical Services',
      img: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
      alt: 'Healthcare professionals collaborating in a modern medical facility',
      intro:
        'Built on the mission to provide ethical, accessible, value‑based medical services supported by strong leadership, skilled teams and modern infrastructure.',
      bullets: [
        'Ethics‑first governance and patient rights',
        'Skilled clinicians and continuous training',
        'Digitized workflows and interoperable records',
        'Quality assurance and measurable outcomes',
      ],
    },
  ]

  const values = [
    {
      title: 'Patient‑Centric Care',
      img: 'https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg',
      alt: 'Doctor comforting a patient',
      text:
        'Care pathways designed around dignity, communication and outcomes for every patient and family.',
    },
    {
      title: 'Ethical & Accessible',
      img: 'https://images.pexels.com/photos/7659577/pexels-photo-7659577.jpeg',
      alt: 'Accessible healthcare service counter',
      text:
        'Transparent pricing, fair practices and accessible services for communities we serve.',
    },
    {
      title: 'Skilled Teams & Leadership',
      img: 'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg',
      alt: 'Medical leadership and skilled team collaboration',
      text:
        'Experienced leadership and upskilled professionals delivering consistent quality.',
    },
    {
      title: 'Modern Infrastructure',
      img: 'https://images.pexels.com/photos/8460124/pexels-photo-8460124.jpeg',
      alt: 'Modern medical equipment and facility',
      text:
        'Contemporary facilities, equipment and digital systems enabling safe, efficient care.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b3b5c] to-[#2b376b] text-white pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg"
            alt="Healthcare and distribution operations in India"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b5c]/80 to-[#2b376b]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ReactCountryFlag countryCode="IN" svg className="w-16 h-12 mr-4 rounded shadow-lg" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">India</h1>
            </div>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Pristine Global’s India operations emphasize healthcare and distribution led by the Prime Care brand—uniting hospitals, value‑based medical services and an FMCG distribution network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prime Care Entities */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.1, margin: '-100px' }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Prime Care in India
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((b, i) => (
              <motion.article
                key={b.key}
                id={b.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                viewport={{ once: true, amount: 0.2, margin: '-50px' }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-40 overflow-hidden">
                  <img src={b.img} alt={b.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="px-3 py-1 bg-[#0b3b5c] text-white text-xs font-medium rounded-full">{b.sector}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">{b.name}</h3>
                  <p className="text-gray-600 mb-4">{b.intro}</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {b.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Enablers */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.1, margin: '-100px' }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            What Sets Prime Care Apart
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                viewport={{ once: true, amount: 0.2, margin: '-50px' }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="h-32 rounded-lg overflow-hidden mb-4">
                  <img src={v.img} alt={v.alt} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true, amount: 0.2, margin: '-50px' }}
            className="bg-gradient-to-br from-[#0b3b5c] to-[#2b376b] text-white rounded-2xl p-10"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Connect with Prime Care India</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              From distribution partnerships to patient care, our teams are ready to support your needs across India.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white text-[#0b3b5c] px-6 py-3 font-medium shadow hover:shadow-md transition-shadow"
            >
              Contact Us
            </Link>
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
