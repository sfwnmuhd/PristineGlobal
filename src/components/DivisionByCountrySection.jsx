import React, { useState } from 'react'
import { motion } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'

/**
 * DivisionByCountrySection Component
 * Interactive country selector showing business divisions by location
 * Features: Country tabs, dynamic content switching, responsive layout
 */
const DivisionByCountrySection = () => {
  const [selectedCountry, setSelectedCountry] = useState('UK')

  // ===== COUNTRY DATA CONFIGURATION =====
  
  const countryData = {
    UK: {
      title: 'United Kingdom — Healthcare & Trading',
      description: `In the UK, our presence is rooted in healthcare and trading, serving both communities and businesses through:\n\n• Care Homes – Providing compassionate care for the elderly.\n• Children Care Homes – Dedicated facilities for child welfare and development.\n• Wholesale Trading – FMCG and medical wholesale distribution.`,
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/b9bc235f1adeb19209ec3398e8fbca66d5117640?width=996',
    },
    Qatar: {
      title: 'Qatar — Healthcare, Pharma, Tech & Retail',
      description: `Pristine Global’s Qatar operations are focused on healthcare, pharmaceuticals, technology, and retail, represented by:\n\n• Excel Pharma Import & Export – Freezone pharmaceutical import/export.\n• Pharmolife Biotechnologies – Pharmacies and healthcare trading.\n• Mednova Trading – Advanced medical equipment supplier.\n• Hypernova Trading – Retail and e‑commerce (supermarkets, online grocery).\n• Precedence Information Technology – Cutting‑edge IT solutions.`,
      img: 'https://assets.weforum.org/article/image/b3yliS-6KqpbNI0UxUUa6Zl4lK7OVuErGZXf7KS2r28.jpg',
    },
    India: {
      title: 'India — Prime Care Healthcare & Distribution',
      description: `Pristine Global’s India operations emphasize healthcare and distribution, led by the Prime Care brand:\n\n• Prime Care Distribution – FMCG distribution network.\n• Prime Care Hospital – Quality, affordable healthcare with patient‑centric values.\n• Prime Care Global – Ethical, accessible, value‑based medical services with strong leadership, skilled professionals and modern infrastructure.`,
      img: 'https://victualcourier.com/wp-content/uploads/2023/06/zzzzz.png',
    },
  }

  // Country code mapping for flags
  const countryCodes = {
    UK: 'GB',
    Qatar: 'QA',
    India: 'IN',
  }

  // Available countries
  const countries = ['UK', 'Qatar', 'India']

  // Get current country data
  const currentData = countryData[selectedCountry]
  const hasBullets = currentData.description.includes('•')
  const bulletLines = hasBullets
    ? currentData.description
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.startsWith('•'))
        .map((l) => l.replace(/^•\s*/, ''))
    : []
  const introText = hasBullets ? currentData.description.split('•')[0].trim() : currentData.description

  // ===== EVENT HANDLERS =====
  
  /**
   * Handle country selection
   * @param {string} country - Selected country code
   */
  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
  }

  // ===== COMPONENT RENDER =====

  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-3xl sm:text-5xl font-semibold text-black mb-4"
        >
          Our Business by Country
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-base sm:text-lg text-gray-500 mb-8 lg:mb-12"
        >
          Expanding across continents with excellence in care, technology, and distribution
        </motion.p>

        {/* ===== COUNTRY SELECTOR TABS ===== */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-4 mb-8 lg:mb-12">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => handleCountrySelect(country)}
              className={`flex items-center px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                selectedCountry === country
                  ? 'bg-[#2b376b] text-white shadow-md'
                  : 'bg-white text-black border border-gray-300 hover:border-gray-400'
              }`}
              aria-label={`Select ${country} division`}
            >
              <ReactCountryFlag
                countryCode={countryCodes[country]}
                svg
                style={{ width: '2em', height: '1.5em', borderRadius: '3px' }}
                className="mr-3"
              />
              <span className="text-sm sm:text-base lg:text-lg font-medium">{country}</span>
            </button>
          ))}
        </div>

        {/* ===== COUNTRY CONTENT ===== */}
        <motion.div
          key={selectedCountry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Country Image */}
            <div className="relative h-60 sm:h-72 lg:h-80 overflow-hidden rounded-xl ring-1 ring-black/5">
              <img
                src={currentData.img}
                alt={`${selectedCountry} operations - ${currentData.title}`}
                className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Country Information */}
            <div className="text-left">
              <h3 className="text-2xl sm:text-3xl font-medium text-black mb-6">
                {currentData.title}
              </h3>
              {introText && (
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-5">
                  {introText}
                </p>
              )}
              {bulletLines.length > 0 && (
                <ul className="space-y-3">
                  {bulletLines.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#0b3b5c] flex-shrink-0" />
                      <span className="text-base sm:text-lg lg:text-xl leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DivisionByCountrySection
