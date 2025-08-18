import React, { useState } from 'react'
import gridbg from '../assets/grid-bg.jpg'
import worldmap from '../assets/map.png'
import { motion } from 'motion/react'
import ShimmerButton from './ShimmerButton'
import ReactCountryFlag from 'react-country-flag'


const Hero = () => {
  const locations = [
    {
      id: "uk",
      name: "United Kingdom",
      coordinates: { x: 44, y: 31 },
      details:
        "Three care homes and one child care facility offering specialized, person-centered care.",
    },
    {
      id: "qatar",
      name: "Qatar",
      coordinates: { x: 58, y: 42 },
      details: "Healthcare and technology services in the Middle East region.",
    },
    {
      id: "india",
      name: "India",
      coordinates: { x: 66, y: 55 },
      details:
        "Distribution networks and healthcare investments across multiple regions.",
    },
  ]

  const [hoveredLocation, setHoveredLocation] = useState(null)

  return (
    <section className="relative h-screen overflow-hidden flex items-center pt-16 bg-[#fafafa]">
      {/* Background grid pattern */}
      <div className="absolute inset-0">
        <img
          src={gridbg}
          alt="Background Grid"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 flex flex-col justify-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl/16 font-semibold leading-tight mb-4"
        >
          Global Excellence in{" "}
          <span className="text-[#0b3b5c] font-bold">
            Healthcare, Retail & Technology
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700 mb-6  mx-auto"
        >
          Enhancing lives across the UK, Qatar, and India through compassionate
          care, innovative solutions, and trusted services.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          {/* <button className="px-8 py-3 bg-[#2b376b] text-white rounded-full text-sm font-medium hover:bg-none hover:text-black transition-colors cursor-pointer">
            Explore Our Services
          </button> */}
          <ShimmerButton text="Explore Our Services" />
          {/* <button className="px-8 py-3 border border-pristine-blue text-pristine-blue rounded-full text-sm font-medium hover:bg-pristine-blue hover:text-white transition-colors">
            Contact Us
          </button> */}
        </motion.div>

        {/* Map Section (below text, less gap) */}
        <div className="relative mx-auto w-full max-w-4xl">
          <img
            src={worldmap}
            alt="World Map"
            className="w-full h-auto opacity-50"
          />

          {/* Interactive pins */}
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute cursor-pointer"
              style={{
                left: `${location.coordinates.x}%`,
                top: `${location.coordinates.y}%`,
              }}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              {/* Pulse Animation */}
              <motion.div
                className="w-4
                 h-4 bg-[#2b376b] rounded-full relative"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#0b3b5c] rounded-full opacity-30"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Hover Popup */}
              {hoveredLocation === location.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg border min-w-[250px] z-30"
                >
                  <h3 className="font-semibold text-blue mb-2">
                    {location.name}
                  </h3>
                  <p className="text-sm text-gray">{location.details}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
