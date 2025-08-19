import React, { useState } from 'react'
import gridbg from '../assets/grid-bg.jpg'
import worldmap from '../assets/map.png'
import { motion } from 'motion/react'
import ShimmerButton from './ShimmerButton'
import ReactCountryFlag from 'react-country-flag'
import { MapPin } from 'lucide-react'

const Hero = () => {
  const locations = [
    {
      id: "uk",
      name: "United Kingdom",
      coordinates: { x: 44, y: 30 },
      details:
        "Three care homes and one child care facility offering specialized, person-centered care.",
    },
    {
      id: "qatar",
      name: "Qatar",
      coordinates: { x: 58, y: 40 },
      details: "Healthcare and technology services in the Middle East region.",
    },
    {
      id: "india",
      name: "India",
      coordinates: { x: 65, y: 55 },
      details:
        "Distribution networks and healthcare investments across multiple regions.",
    },
  ]

  const [hoveredLocation, setHoveredLocation] = useState(null)

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-[#fafafa]">
      {/* Background grid pattern */}
      <div className="absolute inset-0">
        <img
          src={gridbg}
          alt="Background Grid"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Hero Content - Centered within viewport */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center items-center pt-16 sm:pt-20">
        
        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-4 sm:mb-6"
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
            className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 max-w-4xl mx-auto"
          >
            Enhancing lives across the UK, Qatar, and India through compassionate
            care, innovative solutions, and trusted services.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12"
          >
            <ShimmerButton text="Explore Our Services" />
          </motion.div>

          {/* Map Section - Responsive sizing to fit viewport */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-full max-w-4xl mx-auto flex-shrink-0"
          >
            <img
              src={worldmap}
              alt="World Map"
              className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] object-contain opacity-50"
            />

            {/* Interactive pins */}
            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute cursor-pointer group"
                style={{
                  left: `${location.coordinates.x}%`,
                  top: `${location.coordinates.y}%`,
                }}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                {/* Pulse Animation */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <MapPin className="text-[#2b376b] w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 drop-shadow-lg"/>
                </motion.div>

                {/* Hover Popup */}
                {hoveredLocation === location.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute -top-24 sm:-top-28 left-1/2 transform -translate-x-1/2 bg-white p-3 sm:p-4 rounded-lg shadow-xl border min-w-[200px] sm:min-w-[250px] z-30"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <ReactCountryFlag
                        countryCode={location.id === 'uk' ? 'GB' : location.id === 'qatar' ? 'QA' : 'IN'}
                        svg
                        style={{
                          width: '20px',
                          height: '15px',
                        }}
                      />
                      <h3 className="font-semibold text-[#0b3b5c] text-sm sm:text-base">
                        {location.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{location.details}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero
