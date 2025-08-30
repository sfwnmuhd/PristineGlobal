import React from 'react'
import { motion } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'
import Footer from '../../components/Footer'
import BackToTop from '../../components/BackToTop'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'
import { Link } from 'react-router-dom'

const Qatar = () => {
  const img = (u, w = 1200) => (typeof u === 'string' && !u.includes('?') ? `${u}?auto=compress&cs=tinysrgb&w=${w}` : u)
  const companies = [
    {
      key: 'excel-pharma',
      name: 'Excel Pharma',
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
      img: 'https://images.pexels.com/photos/33658644/pexels-photo-33658644.jpeg',
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
      img: 'https://images.pexels.com/photos/3987223/pexels-photo-3987223.jpeg',
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
        'Trusted IT System Integrator with 20 years’ expertise, driving secure, scalable digital transformation across GCC.',
      bullets: [
        'Network infrastructure, SD-WAN, ICT, and ELV solutions',
        'Cybersecurity, IAM, compliance, AI, and IoT',
        'Cloud modernization, integration, and custom software',
        'Data platforms, analytics, and automation',
        'IT advisory, PMO, and managed services'
      ],
    },
  ]

  const domains = [
    {
      title: 'Healthcare & Pharmaceuticals',
      img: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg',
      alt: 'Healthcare and pharma operations in Qatar',
      text: 'Strengthening access to medicines, care delivery and clinical quality through regulated distribution and pharmacy services.',
    },
    {
      title: 'Medical Equipment',
      img: 'https://images.pexels.com/photos/6291281/pexels-photo-6291281.jpeg',
      alt: 'Medical equipment and hospital technology',
      text: 'Equipping providers with reliable devices and lifecycle support to improve patient outcomes and operational efficiency.',
    },
    {
      title: 'Retail & E‑commerce',
      img: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg',
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
            src={img("https://images.pexels.com/photos/9471699/pexels-photo-9471699.jpeg", 1920)}
            alt="Doha skyline and modern business district"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            fetchPriority="high"
            decoding="async"
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
                  <img src={img(c.img, 1200)} alt={c.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" />
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
                  <img src={img(d.img, 800)} alt={d.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Partner with us in the Qatar</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you are seeking trusted care provision or a reliable wholesale partner, our Qatar teams are ready to help.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-[#0b3b5c] px-6 py-3 font-medium shadow hover:shadow-md transition-shadow"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                href="#wholesale-trading"
                className="inline-flex items-center justify-center rounded-lg border border-white text-white px-6 py-3 font-medium hover:bg-white/10"
              >
                Learn More
              </Link>
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
