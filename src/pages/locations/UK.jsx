import React from 'react'
import { motion } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import BackToTop from '../../components/BackToTop'
import FloatingWhatsApp from '../../components/FloatingWhatsApp'

const UK = () => {
  const pillars = [
    {
      key: 'care-homes',
      title: 'Care Homes',
      img: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg',
      alt: 'Compassionate elderly care in a UK care home',
      intro:
        'Compassionate, person‑centred residential and nursing care for older adults, focused on dignity, safety and everyday wellbeing.',
      bullets: [
        '24/7 professional care with individualized support plans',
        'Specialist dementia-friendly environments and engagement',
        'Nutritious meals, activities, community and family involvement',
        'Medication management, GP coordination and clinical oversight',
      ],
    },
    {
      key: 'children-homes',
      title: "Children's Care Homes",
      img: 'https://images.pexels.com/photos/8460098/pexels-photo-8460098.jpeg',
      alt: 'Supportive children care home in the UK',
      intro:
        'Stable, nurturing homes designed to safeguard, educate and empower children and young people to thrive.',
      bullets: [
        'Trauma‑informed care and positive behaviour support',
        'Education pathways, skills development and enrichment',
        'Therapeutic input and multi‑agency collaboration',
        'Robust safeguarding and Ofsted‑aligned standards',
      ],
    },
    {
      key: 'wholesale-trading',
      title: 'Wholesale Trading (FMCG & Medical)',
      img: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg',
      alt: 'FMCG and medical wholesale distribution warehouse in the UK',
      intro:
        'Reliable wholesale distribution across fast‑moving consumer goods and medical categories, serving retailers, care providers and institutions.',
      bullets: [
        'FMCG: pantry staples, personal care, household and hygiene',
        'Medical: consumables, disposables and selected equipment',
        'Quality‑assured sourcing, compliant storage and handling',
        'Nationwide fulfilment with timely, accurate delivery',
      ],
    },
  ]

  const strengths = [
    {
      title: 'Compliance & Quality',
      img: 'https://images.pexels.com/photos/3861953/pexels-photo-3861953.jpeg',
      alt: 'Compliance checklist and quality review',
      text:
        'Strong governance with audited processes and documented SOPs across care and distribution operations.',
    },
    {
      title: 'Expert Teams',
      img: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg',
      alt: 'Professional UK care and logistics teams collaborating',
      text:
        'Experienced carers, support workers and logistics specialists trained to UK standards and best practices.',
    },
    {
      title: 'Community Impact',
      img: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
      alt: 'Community support and outreach in the UK',
      text:
        'Services that strengthen local communities—supporting families, improving outcomes and enabling independence.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0b3b5c] to-[#2b376b] text-white pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/9703033/pexels-photo-9703033.jpeg"
            alt="UK operations in healthcare and trading"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b5c]/80 to-[#2b376b]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ReactCountryFlag countryCode="GB" svg className="w-16 h-12 mr-4 rounded shadow-lg" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">United Kingdom</h1>
            </div>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              In the UK, we are rooted in healthcare and trading—operating Care Homes and Children’s Care Homes, and supplying FMCG and medical products through trusted wholesale channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.1, margin: '-100px' }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Healthcare & Trading in the UK
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.article
                key={p.key}
                id={p.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                viewport={{ once: true, amount: 0.2, margin: '-50px' }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-40 overflow-hidden">
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{p.title}</h3>
                  <p className="text-gray-600 mb-4">{p.intro}</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true, amount: 0.1, margin: '-100px' }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Why Choose Our UK Operations
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                viewport={{ once: true, amount: 0.2, margin: '-50px' }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="h-32 rounded-lg overflow-hidden mb-4">
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.text}</p>
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
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Partner with us in the UK</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you are seeking trusted care provision or a reliable wholesale partner, our UK teams are ready to help.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-[#0b3b5c] px-6 py-3 font-medium shadow hover:shadow-md transition-shadow"
              >
                Contact Us
              </Link>
              <a
                href="#wholesale-trading"
                className="inline-flex items-center justify-center rounded-lg border border-white text-white px-6 py-3 font-medium hover:bg-white/10"
              >
                Learn More
              </a>
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

export default UK
