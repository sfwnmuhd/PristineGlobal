import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'

// Asset imports
import gridbg from '../assets/grid-bg.jpg'
import worldmap from '../assets/worldmap.png'

// Component imports
import ShimmerButton from './ShimmerButton'
import { Link } from 'react-router-dom'
import LogoCarousel from './LogoCarousel'


/**
 * Hero Section Component
 * Features: Interactive world map with animated connections, responsive location dots,
 * hover cards with country information, and flowing connection animations
 */
const Hero = () => {
  // ===== DATA CONFIGURATION =====
  
  /**
   * Location data for countries with responsive coordinates and business details
   * Coordinates are percentages relative to the world map image
   */
  const locations = [
    {
      id: "uk",
      name: "United Kingdom",
      coordinates: {
        mobile: { x: 43, y: 42 },
        tablet: { x: 44, y: 38 },
        desktop: { x: 45, y: 30 }
      },
      details: "Three care homes and one child care facility offering specialized, person-centered care.",
      stats: "3 Care Homes • 1 Child Care"
    },
    {
      id: "qatar",
      name: "Qatar",
      coordinates: {
        mobile: { x: 59, y: 48 },
        tablet: { x: 61, y: 48 },
        desktop: { x: 61, y: 48 }
      },
      details: "Healthcare and technology services in the Middle East region.",
      stats: "Healthcare • Technology"
    },
    {
      id: "india",
      name: "India",
      coordinates: {
        mobile: { x: 66, y: 50 },
        tablet: { x: 66, y: 52 },
        desktop: { x: 67, y: 53 }
      },
      details: "Distribution networks and healthcare investments across multiple regions.",
      stats: "Distribution • Healthcare"
    },
  ]

  // ===== STATE MANAGEMENT =====
  
  const [hoveredLocation, setHoveredLocation] = useState(null)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  // ===== UTILITY FUNCTIONS =====
  
  /**
   * Get responsive coordinates based on current screen size
   * @param {Object} location - Location object with coordinate data
   * @returns {Object} x,y coordinates for current screen size
   */
  const getCoordinates = (location) => {
    if (windowSize.width < 768) return location.coordinates.mobile
    if (windowSize.width < 1024) return location.coordinates.tablet
    return location.coordinates.desktop
  }

  // ===== EFFECTS =====
  
  /**
   * Window resize handler for responsive coordinate updates
   */
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  // ===== COMPUTED VALUES =====
  
  /**
   * Generate connection lines between countries (UK ↔ Qatar ↔ India, UK ↔ India)
   */
  const connectionLines = [
    { from: getCoordinates(locations[0]), to: getCoordinates(locations[1]) }, // UK → Qatar
    { from: getCoordinates(locations[1]), to: getCoordinates(locations[2]) }, // Qatar → India
    { from: getCoordinates(locations[0]), to: getCoordinates(locations[2]) }  // UK → India
  ]

  // ===== ANIMATION VARIANTS =====
  
  /**
   * Container animation for staggered children entrance
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, staggerChildren: 0.1, delayChildren: 0 }
    }
  }

  /**
   * Individual item animation (text, buttons)
   */
  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", damping: 20, stiffness: 100, duration: 0.8 }
    }
  }

  /**
   * Map section animation with delayed entrance
   */
  const mapVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1, scale: 1, y: 0,
      transition: { type: "spring", damping: 24, stiffness: 120, duration: 0.9, delay: 0.6 }
    }
  }

  // ===== COMPONENT RENDER =====

  return (
    <section className="relative h-screen overflow-hidden bg-[#fafafa] flex flex-col pt-10 sm:pt-16" id='hero'>
      {/* ===== BACKGROUND GRID ===== */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={gridbg}
          alt="Background Grid Pattern"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* ===== MAIN CONTENT WRAPPER ===== */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between h-full px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ===== HERO HEADING SECTION ===== */}
        <div className="text-center space-y-3 sm:space-y-4 mt-8 sm:mt-12 lg:mt-16">
          {/* Main Heading with Split Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Global Excellence in{" "}
            </motion.span>
            <motion.span
              className="text-[#0b3b5c] font-bold"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              Healthcare, Retail & Technology
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg font-medium text-gray-700 max-w-5xl mx-auto"
          >
            Enhancing lives across the UK, Qatar, and India through compassionate
            care, innovative solutions, and trusted services.
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}   
            >
              <ShimmerButton text="Explore Our Services" />
            </motion.div>
          </motion.div>
        </div>

        {/* ===== INTERACTIVE WORLD MAP SECTION ===== */}
        <motion.div
          variants={mapVariants}
          className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center"
        >
          {/* World Map Image */}
          <motion.img
            src={worldmap}
            alt="Interactive World Map"
            className="w-full max-h-[40vh] sm:max-h-[45vh] lg:max-h-[50vh] xl:max-h-[55vh] object-contain"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            loading="eager"
            decoding="async"
          />

          {/* ===== ANIMATED CONNECTION LINES ===== */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            {connectionLines.map((line, index) => {
              // Calculate curved path using quadratic Bezier curves
              const fromX = line.from.x;
              const fromY = line.from.y;
              const toX = line.to.x;
              const toY = line.to.y;

              // Calculate control points for natural curve appearance
              const midX = (fromX + toX) / 2;
              const midY = (fromY + toY) / 2;
              const distance = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
              const curveOffset = distance * 0.15;

              // Adjust curve direction for each connection
              let controlX = midX;
              let controlY = midY - curveOffset; // Default upward curve

              if (index === 1) { // Qatar to India - slight downward curve
                controlY = midY + curveOffset * 0.4;
              } else if (index === 2) { // UK to India - pronounced upward curve
                controlY = midY - curveOffset * 1.1;
              }

              const pathData = `M ${fromX} ${fromY} Q ${controlX} ${controlY} ${toX} ${toY}`;

              return (
                <g key={index}>
                  {/* Static base path - always visible */}
                  <path
                    d={pathData}
                    stroke="#0b3b5c"
                    strokeWidth="0.2"
                    strokeDasharray="1,1"
                    fill="none"
                    opacity="0.3"
                  />

                  {/* Animated flowing line with gradient */}
                  <motion.path
                    d={pathData}
                    stroke="url(#flowingGradient)"
                    strokeWidth="0.3"
                    fill="none"
                    opacity="0.7"
                    strokeDasharray="2,4"
                    animate={{
                      strokeDashoffset: [0, -6, 0]
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.6,
                      ease: "linear",
                      repeat: Infinity
                    }}
                  />
                </g>
              );
            })}

            {/* Gradient Definition for Flowing Lines */}
            <defs>
              <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0b3b5c" stopOpacity="0.3" />
                <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#0b3b5c" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* ===== INTERACTIVE LOCATION DOTS ===== */}
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              className="absolute cursor-pointer group"
              style={{
                left: `${getCoordinates(location).x}%`,
                top: `${getCoordinates(location).y}%`,
                zIndex: 2
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: index * 0.25 + 1.2,
                type: "spring",
                damping: 16,
                stiffness: 210
              }}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              {/* ===== ANIMATED DOT WITH RIPPLE EFFECTS ===== */}
              <div className="relative flex items-center justify-center">
                {/* Outer ripple effect */}
                <motion.div
                  className="absolute w-8 h-8 bg-[#0b3b5c] rounded-full opacity-20"
                  animate={{ scale: [1, 2.4, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                />
                
                {/* Middle ripple effect */}
                <motion.div
                  className="absolute w-6 h-6 bg-[#2b376b] rounded-full opacity-30"
                  animate={{ scale: [1, 1.7, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4 + 0.4
                  }}
                />
                
                {/* Core dot with pulse and hover effects */}
                <motion.div
                  className="w-4 h-4 bg-[#0b3b5c] rounded-full border-2 border-white shadow-lg relative z-10"
                  whileHover={{
                    scale: 1.25,
                    boxShadow: "0 0 20px rgba(11, 59, 92, 0.4)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(11, 59, 92, 0.4)",
                      "0 0 10px rgba(11, 59, 92, 0.6)",
                      "0 0 0px rgba(11, 59, 92, 0.4)"
                    ]
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 320 },
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </div>

              {/* ===== HOVER INFORMATION CARD ===== */}
              {hoveredLocation === location.id && (
                <Link to={`locations/${location.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 14, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 14, scale: 0.92 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300, duration: 0.35 }}
                    className="absolute -top-32 sm:-top-36 left-1/2 transform -translate-x-1/2 z-30"
                    style={{ maxWidth: '90vw' }}
                  >
                    {/* Card Container */}
                    <motion.div
                      className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-5 min-w-[240px] sm:min-w-[280px] backdrop-blur-sm"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Card Header with Flag and Country Info */}
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0b3b5c] to-[#2b376b] flex items-center justify-center shadow-md"
                          whileHover={{ rotate: 5 }}
                        >
                          <ReactCountryFlag
                            countryCode={location.id === 'uk' ? 'GB' : location.id === 'qatar' ? 'QA' : 'IN'}
                            svg
                            style={{ width: '18px', height: '14px' }}
                          />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-[#0b3b5c] text-base sm:text-lg">
                            {location.name}
                          </h3>
                          <p className="text-xs text-[#2b376b] font-medium">
                            {location.stats}
                          </p>
                        </div>
                      </div>

                      {/* Card Content */}
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {location.details}
                      </p>

                      {/* Animated Bottom Accent */}
                      <motion.div
                        className="w-full h-1 bg-gradient-to-r from-[#0b3b5c] to-[#2b376b] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                      />
                    </motion.div>

                    {/* Card Arrow Pointer */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
                    </div>
                  </motion.div>
                </Link>
              )}
            </motion.div>
          ))}

          {/* ===== CLIENT LOGOS CAROUSEL OVERLAY ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-10"
          >
            <LogoCarousel />
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
