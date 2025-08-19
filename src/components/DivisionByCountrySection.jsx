import React, { useState } from 'react'
import { motion } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'

const DivisionByCountrySection = () => {
  const [selectedCountry, setSelectedCountry] = useState('UK')

  const countryData = {
    UK: {
      title: 'Pristine Care Homes',
      description: `We operate three care homes and one child care facility in the UK, each offering specialised, person-centered care. Our flagship properties include Willoughby Grange Nursing Home and Broom Lane Care Home, designed to foster warmth, dignity, and community.`,
      upcoming: 'A new 50-bed nursing home in Stoke-on-Trent is in development, underscoring our growth ambitions.',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/b9bc235f1adeb19209ec3398e8fbca66d5117640?width=996',
    },
    Qatar: {
      title: 'Healthcare & Technology Services',
      description: `Our Qatari operations span:
• Hyper Nova Supermarket & Wholesale Trading – providing quality consumer goods
• Precedence Information Technologies – delivering strategic IT services and solutions
• Mednova Medical Trading – supplying medical equipment and healthcare essentials`,
      img: 'https://via.placeholder.com/996x400?text=Qatar+Division',
    },
    India: {
      title: 'Integrated Healthcare & Distribution',
      description: `Our operations in India focus on:
• Prime Care Hospitals – delivering multispecialty hospital services across India
• Prime Care Pharma – retail and wholesale pharmaceutical distribution
• Primecare Distribution – streamlining supply chain and product delivery logistics`,
      img: 'https://via.placeholder.com/996x400?text=India+Division',
    },
  }

  const countryCodes = {
    UK: 'GB',
    Qatar: 'QA',
    India: 'IN',
  }

  const current = countryData[selectedCountry]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-semibold text-black mb-4"
        >
          Our Division by Country
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-500 mb-12"
        >
          Expanding across continents with excellence in care, technology, and distribution
        </motion.p>

        {/* Country Selector */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {['UK', 'Qatar', 'India'].map((country) => (
            <div
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`flex items-center px-4 sm:px-6 py-3 rounded-lg cursor-pointer transition-all
                ${selectedCountry === country
                  ? 'bg-[#2b376b] text-white'
                  : 'bg-white text-black border border-gray-300'
                }`}
            >
              <ReactCountryFlag
                countryCode={countryCodes[country]}
                svg
                style={{ width: '2em', height: '1.5em', borderRadius: '3px' }}
                className="mr-3"
              />
              <span className="text-sm sm:text-base lg:text-lg">{country}</span>
            </div>
          ))}
        </div>

        {/* Country Content */}
        <motion.div
          key={selectedCountry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <img
              src={current.img}
              alt={current.title}
              className="w-full h-60 sm:h-72 lg:h-80 object-cover rounded-xl"
            />
            <div className="text-left">
              <h3 className="text-2xl sm:text-3xl font-medium text-black mb-6">
                {current.title}
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
                {current.description}
              </p>

              {/* Show Upcoming Project only for UK */}
              {selectedCountry === 'UK' && (
                <div>
                  <div className="flex items-center mb-4">
                    <ReactCountryFlag
                      countryCode={countryCodes[selectedCountry]}
                      svg
                      style={{ width: '2em', height: '1.5em', borderRadius: '3px' }}
                      className="mr-4"
                    />
                    <h4 className="text-lg sm:text-xl font-medium text-black">Upcoming Project</h4>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600">{current.upcoming}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DivisionByCountrySection
