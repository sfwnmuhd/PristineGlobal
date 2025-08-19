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
      coordinates: { x: 44, y: 30 },
      details: "Three care homes and one child care facility offering specialized, person-centered care.",
      stats: "3 Care Homes • 1 Child Care"
    },
    {
      id: "qatar",
      name: "Qatar",
      coordinates: { x: 58, y: 40 },
      details: "Healthcare and technology services in the Middle East region.",
      stats: "Healthcare • Technology"
    },
    {
      id: "india",
      name: "India",
      coordinates: { x: 65, y: 55 },
      details: "Distribution networks and healthcare investments across multiple regions.",
      stats: "Distribution • Healthcare"
    },
  ]

  const [hoveredLocation, setHoveredLocation] = useState(null)

  // Connected lines between locations
  const connectionLines = [
    { from: locations[0].coordinates, to: locations[1].coordinates },
    { from: locations[1].coordinates, to: locations[2].coordinates },
    { from: locations[0].coordinates, to: locations[2].coordinates }
  ]

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

      {/* Hero Content - Better spacing to avoid navbar overlap */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center items-center pt-20 sm:pt-24 pb-8">
        
        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-3 sm:mb-4"
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
            className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 max-w-3xl mx-auto"
          >
            Enhancing lives across the UK, Qatar, and India through compassionate
            care, innovative solutions, and trusted services.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8"
          >
            <ShimmerButton text="Explore Our Services" />
          </motion.div>

          {/* Map Section - Smaller and better contained */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-full max-w-3xl mx-auto flex-shrink-0"
          >
            <div className="relative">
              <img
                src={worldmap}
                alt="World Map"
                className="w-full h-auto max-h-[200px] sm:max-h-[250px] lg:max-h-[300px] object-contain opacity-40"
              />

              {/* Connection Lines */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
              >
                {connectionLines.map((line, index) => (
                  <motion.line
                    key={index}
                    x1={`${line.from.x}%`}
                    y1={`${line.from.y}%`}
                    x2={`${line.to.x}%`}
                    y2={`${line.to.y}%`}
                    stroke="#0b3b5c"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: index * 0.5 + 1 }}
                  />
                ))}
              </svg>

              {/* Interactive location dots */}
              {locations.map((location, index) => (
                <div
                  key={location.id}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`,
                    zIndex: 2
                  }}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  {/* Animated Dot with Ripple Effect */}
                  <motion.div
                    className="relative flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.3 + 0.8, type: "spring" }}
                  >
                    {/* Outer ripple */}
                    <motion.div
                      className="absolute w-8 h-8 bg-[#0b3b5c] rounded-full opacity-20"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.2, 0, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Middle ripple */}
                    <motion.div
                      className="absolute w-6 h-6 bg-[#2b376b] rounded-full opacity-30"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                    
                    {/* Core dot */}
                    <motion.div
                      className="w-4 h-4 bg-[#0b3b5c] rounded-full border-2 border-white shadow-lg relative z-10"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>

                  {/* Beautiful Hover Popup */}
                  {hoveredLocation === location.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute -top-32 sm:-top-36 left-1/2 transform -translate-x-1/2 z-30"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-5 min-w-[240px] sm:min-w-[280px] backdrop-blur-sm">
                        {/* Header with flag and country */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0b3b5c] to-[#2b376b] flex items-center justify-center shadow-md">
                            <ReactCountryFlag
                              countryCode={location.id === 'uk' ? 'GB' : location.id === 'qatar' ? 'QA' : 'IN'}
                              svg
                              style={{
                                width: '18px',
                                height: '14px',
                              }}
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-[#0b3b5c] text-base sm:text-lg">
                              {location.name}
                            </h3>
                            <p className="text-xs text-[#2b376b] font-medium">
                              {location.stats}
                            </p>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">
                          {location.details}
                        </p>
                        
                        {/* Bottom accent */}
                        <div className="w-full h-1 bg-gradient-to-r from-[#0b3b5c] to-[#2b376b] rounded-full"></div>
                      </div>
                      
                      {/* Arrow pointer */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero
