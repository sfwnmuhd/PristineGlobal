import React from 'react'
import { motion } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'
import Footer from '../../components/Footer'
import BackToTop from '../../components/BackToTop'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'

const Qatar = () => {
  const companies = [
    {
      key: 'excel-pharma',
      name: 'Excel Pharma Import & Export',
      sector: 'Pharmaceutical Freezone Entity',
      img: 'https://images.pexels.com/photos/4210610/pexels-photo-4210610.jpeg',
      alt: 'Pharmaceutical logistics and export operations',
      intro:
        'A Freezone entity specializing in compliant import and export of pharmaceuticals across the region with robust quality controls.',
      bullets: [
        'GDP-compliant cold-chain and controlled storage',
        'Licensed sourcing and regulatory documentation',
        'Regional distribution to pharmacies and hospitals',
        'Transparent tracking and documentation integrity',
      ],
    },
    {
      key: 'pharmolife',
      name: 'Pharmolife Biotechnologies',
      sector: 'Pharmacies & Healthcare Trading',
      img: 'https://images.pexels.com/photos/159211/analysis-chemistry-laboratory-chemist-159211.jpeg',
      alt: 'Pharmacy shelves and biotech research environment',
      intro:
        'Retail and institutional pharmacy solutions with a curated range of pharmaceuticals, wellness and biotech-led products.',
      bullets: [
        'Community pharmacies with clinical advice and counselling',
        'Formulary management for clinics and care providers',
        'Wellness, vitamins and specialty therapeutics',
        'Inventory accuracy and patient‑safety focus',
      ],
    },
    {
      key: 'mednova',
      name: 'Mednova Trading',
      sector: 'Medical Equipment Supplier',
      img: 'https://images.pexels.com/photos/8460124/pexels-photo-8460124.jpeg',
      alt: 'Advanced medical devices and equipment in a clinical setting',
      intro:
        'Supplier of advanced medical equipment supporting hospitals, clinics and care providers with dependable after‑sales support.',
      bullets: [
        'Diagnostics, monitoring, surgical and rehabilitation lines',
        'Installation, calibration and preventative maintenance',
        'Compliance with international safety standards',
        'Training for biomedical and clinical teams',
      ],
    },
    {
      key: 'hypernova',
      name: 'Hypernova Trading',
      sector: 'Retail & E‑commerce',
      img: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg',
      alt: 'Retail supermarket aisle and e‑commerce order fulfilment',
      intro:
        'Retail and online grocery ventures delivering everyday essentials with reliable fulfilment and customer experience.',
      bullets: [
        'Brick‑and‑mortar supermarkets and convenience formats',
        'Online grocery with optimized last‑mile delivery',
        'FMCG assortment, private label and promotions',
        'Data‑driven merchandising and demand planning',
      ],
    },
    {
      key: 'precedence-it',
      name: 'Precedence Information Technology',
      sector: 'Information Technology',
      img: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg',
      alt: 'Modern IT solutions and software engineering team',
      intro:
        'A cutting‑edge IT company delivering secure, scalable, technology‑driven solutions for enterprises and public sector.',
      bullets: [
        'Custom software, integration and cloud modernization',
        'Cybersecurity, IAM and compliance frameworks',
        'Data platforms, analytics and automation',
        'IT advisory, PMO and managed services',
      ],
    },
  ]

  const domains = [
    {
      title: 'Healthcare & Pharmaceuticals',
      img: 'https://images.pexels.com/photos/572167/pexels-photo-572167.jpeg',
      alt: 'Healthcare and pharma operations in Qatar',
      text: 'Strengthening access to medicines, care delivery and clinical quality through regulated distribution and pharmacy services.',
    },
    {
      title: 'Medical Equipment',
      img: 'https://images.pexels.com/photos/3735789/pexels-photo-3735789.jpeg',
      alt: 'Medical equipment and hospital technology',
      text: 'Equipping providers with reliable devices and lifecycle support to improve patient outcomes and operational efficiency.',
    },
    {
      title: 'Retail & E‑commerce',
      img: 'https://images.pexels.com/photos/5632392/pexels-photo-5632392.jpeg',
      alt: 'E‑commerce operations and retail logistics',
      text: 'Omnichannel retail experiences with efficient fulfilment and customer‑centric service models.',
    },
    {
      title: 'Information Technology',
      img: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
      alt: 'Enterprise information technology solutions',
      text: 'Secure, scalable platforms enabling digital transformation across industries.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b3b5c] to-[#2b376b] text-white pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/9471699/pexels-photo-9471699.jpeg"
            alt="Doha skyline and modern business district"
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
              <ReactCountryFlag countryCode="QA" svg className="w-16 h-12 mr-4 rounded shadow-lg" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Qatar</h1>
            </div>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Pristine Global’s Qatar operations span healthcare, pharmaceuticals, technology and retail—connecting compliant supply chains with modern services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Companies & Brands */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.1, margin: '-100px' }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Our Companies in Qatar
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((c, i) => (
              <motion.article
                key={c.key}
                id={c.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                viewport={{ once: true, amount: 0.2, margin: '-50px' }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-40 overflow-hidden">
                  <img src={c.img} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="px-3 py-1 bg-[#0b3b5c] text-white text-xs font-medium rounded-full">{c.sector}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">{c.name}</h3>
                  <p className="text-gray-600 mb-4">{c.intro}</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {c.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Domains */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.1, margin: '-100px' }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Strategic Focus Areas
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                viewport={{ once: true, amount: 0.2, margin: '-50px' }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="h-32 rounded-lg overflow-hidden mb-4">
                  <img src={d.img} alt={d.alt} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{d.title}</h3>
                <p className="text-gray-600">{d.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.1, margin: '-100px' }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-8">Aligned with Qatar National Vision 2030</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our Qatar entities advance healthcare accessibility, enable resilient supply chains, and accelerate digital transformation—contributing to human, social and economic development in line with Vision 2030.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true, amount: 0.1, margin: '-50px' }}
            className="mt-12 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Human Development</h3>
              <p className="text-gray-600">Upskilling pharmacy, clinical and technology professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Economic Growth</h3>
              <p className="text-gray-600">Diversifying through compliant trade and digital commerce</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Social Development</h3>
              <p className="text-gray-600">Strengthening access to care and essential goods</p>
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
