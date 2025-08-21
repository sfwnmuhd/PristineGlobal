// import React, { useState, useEffect } from 'react'
// import gridbg from '../assets/grid-bg.jpg'
// import worldmap from '../assets/worldmap.png'
// import { motion } from 'motion/react'
// import ShimmerButton from './ShimmerButton'
// import ReactCountryFlag from 'react-country-flag'
// import SocialMediaPopup from './SocialMediaPopup'

// const Hero = () => {
//   const locations = [
//     {
//       id: "uk",
//       name: "United Kingdom",
//       coordinates: {
//         mobile: { x: 42, y: 25 },
//         tablet: { x: 44, y: 28 },
//         desktop: { x: 45, y: 30 }
//       },
//       details: "Three care homes and one child care facility offering specialized, person-centered care.",
//       stats: "3 Care Homes • 1 Child Care"
//     },
//     {
//       id: "qatar",
//       name: "Qatar",
//       coordinates: {
//         mobile: { x: 58, y: 35 },
//         tablet: { x: 57, y: 38 },
//         desktop: { x: 56, y: 40 }
//       },
//       details: "Healthcare and technology services in the Middle East region.",
//       stats: "Healthcare • Technology"
//     },
//     {
//       id: "india",
//       name: "India",
//       coordinates: {
//         mobile: { x: 68, y: 50 },
//         tablet: { x: 66, y: 52 },
//         desktop: { x: 65, y: 55 }
//       },
//       details: "Distribution networks and healthcare investments across multiple regions.",
//       stats: "Distribution • Healthcare"
//     },
//   ]

//   // Function to get coordinates based on screen size
//   const getCoordinates = (location) => {
//     if (windowSize.width < 768) return location.coordinates.mobile
//     if (windowSize.width < 1024) return location.coordinates.tablet
//     return location.coordinates.desktop
//   }

//   const [hoveredLocation, setHoveredLocation] = useState(null)
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

//   // Handle window resize for responsive coordinates
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight })
//     }

//     // Set initial size
//     if (typeof window !== 'undefined') {
//       handleResize()
//       window.addEventListener('resize', handleResize)
//       return () => window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   // Connected lines between locations
//   const connectionLines = [
//     { from: getCoordinates(locations[0]), to: getCoordinates(locations[1]) },
//     { from: getCoordinates(locations[1]), to: getCoordinates(locations[2]) },
//     { from: getCoordinates(locations[0]), to: getCoordinates(locations[2]) }
//   ]

//   // Animation variants for smooth entrance
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.3,
//         delayChildren: 0.2
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 60,
//       scale: 0.9
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         damping: 20,
//         stiffness: 100,
//         duration: 0.8
//       }
//     }
//   }

//   const mapVariants = {
//     hidden: { 
//       opacity: 0, 
//       scale: 0.8,
//       y: 40
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 25,
//         stiffness: 120,
//         duration: 1,
//         delay: 0.8
//       }
//     }
//   }

//   return (
//     <section className="relative h-[100vh] overflow-hidden flex items-center justify-center bg-[#fafafa] lg:pt-30">
//       {/* Background grid pattern with subtle animation */}
//       <motion.div 
//         className="absolute inset-0"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         <img
//           src={gridbg}
//           alt="Background Grid"
//           className="w-full h-full object-cover opacity-40"
//         />
//       </motion.div>

//       {/* Hero Content with smooth entrance animations */}
//       <motion.div
//         className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center items-center py-8 sm:py-12 lg:py-16 mt-16 sm:mt-20"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
        
//         {/* Main Content Container */}
//         <div className="flex flex-col items-center justify-center max-w-6xl mx-auto space-y-6 sm:space-y-8">
          
//           <motion.h1
//             variants={itemVariants}
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight"
//           >
//             <motion.span
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//             >
//               Global Excellence in{" "}
//             </motion.span>
//             <motion.span 
//               className="text-[#0b3b5c] font-bold"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.7, duration: 0.8 }}
//             >
//               Healthcare, Retail & Technology
//             </motion.span>
//           </motion.h1>

//           <motion.p
//             variants={itemVariants}
//             className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto"
//           >
//             Enhancing lives across the UK, Qatar, and India through compassionate
//             care, innovative solutions, and trusted services.
//           </motion.p>

//           {/* Buttons with enhanced entrance */}
//           <motion.div
//             variants={itemVariants}
//             className="flex justify-center mt-2"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <ShimmerButton text="Explore Our Services" />
//             </motion.div>
//           </motion.div>

//           {/* Map Section with improved entrance animation */}
//           <motion.div
//             variants={mapVariants}
//             className="relative w-full max-w-6xl mx-auto mt-8 lg:mt-12"
//           >
//             <div className="relative">
//               <motion.img
//                 src={worldmap}
//                 alt="World Map"
//                 className="w-full h-auto max-h-[40vh] sm:max-h-[45vh] md:max-h-[50vh] lg:max-h-[55vh] object-contain opacity-80"
//                 initial={{ opacity: 0, scale: 1.1 }}
//                 animate={{ opacity: 0.8, scale: 1 }}
//                 transition={{ duration: 1.2, delay: 0.9 }}
//               />

//               {/* Connection Lines with sequential drawing */}
//               <svg 
//                 className="absolute inset-0 w-full h-full pointer-events-none"
//                 style={{ zIndex: 1 }}
//               >
//                 {connectionLines.map((line, index) => (
//                   <motion.line
//                     key={index}
//                     x1={`${line.from.x}%`}
//                     y1={`${line.from.y}%`}
//                     x2={`${line.to.x}%`}
//                     y2={`${line.to.y}%`}
//                     stroke="#0b3b5c"
//                     strokeWidth="2"
//                     strokeDasharray="5,5"
//                     opacity="0.3"
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={{ pathLength: 1, opacity: 0.3 }}
//                     transition={{ 
//                       duration: 1.5, 
//                       delay: index * 0.4 + 1.5,
//                       ease: "easeInOut"
//                     }}
//                   />
//                 ))}
//               </svg>

//               {/* Interactive location dots with staggered entrance */}
//               {locations.map((location, index) => (
//                 <motion.div
//                   key={location.id}
//                   className="absolute cursor-pointer group"
//                   style={{
//                     left: `${getCoordinates(location).x}%`,
//                     top: `${getCoordinates(location).y}%`,
//                     zIndex: 2
//                   }}
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ 
//                     delay: index * 0.3 + 1.8, 
//                     type: "spring",
//                     damping: 15,
//                     stiffness: 200
//                   }}
//                   onMouseEnter={() => setHoveredLocation(location.id)}
//                   onMouseLeave={() => setHoveredLocation(null)}
//                 >
//                   {/* Animated Dot with Enhanced Ripple Effect */}
//                   <div className="relative flex items-center justify-center">
//                     {/* Outer ripple */}
//                     <motion.div
//                       className="absolute w-8 h-8 bg-[#0b3b5c] rounded-full opacity-20"
//                       animate={{
//                         scale: [1, 2.5, 1],
//                         opacity: [0.2, 0, 0.2],
//                       }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: index * 0.5
//                       }}
//                     />
                    
//                     {/* Middle ripple */}
//                     <motion.div
//                       className="absolute w-6 h-6 bg-[#2b376b] rounded-full opacity-30"
//                       animate={{
//                         scale: [1, 1.8, 1],
//                         opacity: [0.3, 0, 0.3],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: index * 0.5 + 0.5
//                       }}
//                     />
                    
//                     {/* Core dot with pulse */}
//                     <motion.div
//                       className="w-4 h-4 bg-[#0b3b5c] rounded-full border-2 border-white shadow-lg relative z-10"
//                       whileHover={{ 
//                         scale: 1.3,
//                         boxShadow: "0 0 20px rgba(11, 59, 92, 0.4)"
//                       }}
//                       animate={{
//                         boxShadow: [
//                           "0 0 0px rgba(11, 59, 92, 0.4)",
//                           "0 0 10px rgba(11, 59, 92, 0.6)",
//                           "0 0 0px rgba(11, 59, 92, 0.4)"
//                         ]
//                       }}
//                       transition={{ 
//                         scale: { type: "spring", stiffness: 300 },
//                         boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
//                       }}
//                     />
//                   </div>

//                   {/* Beautiful Hover Popup with smooth entrance */}
//                   {hoveredLocation === location.id && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 15, scale: 0.8 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 15, scale: 0.8 }}
//                       transition={{ 
//                         type: "spring", 
//                         damping: 20, 
//                         stiffness: 300,
//                         duration: 0.4
//                       }}
//                       className="absolute -top-32 sm:-top-36 left-1/2 transform -translate-x-1/2 z-30"
//                     >
//                       <motion.div 
//                         className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-5 min-w-[240px] sm:min-w-[280px] backdrop-blur-sm"
//                         whileHover={{ y: -5 }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                       >
//                         {/* Header with flag and country */}
//                         <div className="flex items-center gap-3 mb-3">
//                           <motion.div 
//                             className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0b3b5c] to-[#2b376b] flex items-center justify-center shadow-md"
//                             whileHover={{ rotate: 5 }}
//                           >
//                             <ReactCountryFlag
//                               countryCode={location.id === 'uk' ? 'GB' : location.id === 'qatar' ? 'QA' : 'IN'}
//                               svg
//                               style={{
//                                 width: '18px',
//                                 height: '14px',
//                               }}
//                             />
//                           </motion.div>
//                           <div>
//                             <h3 className="font-bold text-[#0b3b5c] text-base sm:text-lg">
//                               {location.name}
//                             </h3>
//                             <p className="text-xs text-[#2b376b] font-medium">
//                               {location.stats}
//                             </p>
//                           </div>
//                         </div>
                        
//                         {/* Content */}
//                         <p className="text-sm text-gray-600 leading-relaxed mb-3">
//                           {location.details}
//                         </p>
                        
//                         {/* Bottom accent with animation */}
//                         <motion.div 
//                           className="w-full h-1 bg-gradient-to-r from-[#0b3b5c] to-[#2b376b] rounded-full"
//                           initial={{ width: 0 }}
//                           animate={{ width: "100%" }}
//                           transition={{ delay: 0.2, duration: 0.6 }}
//                         />
//                       </motion.div>
                      
//                       {/* Arrow pointer */}
//                       <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
//                         <div className="w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
          
//         </div>
//       </motion.div>

//       {/* Social Media Popup - Bottom of Hero */}
//       <SocialMediaPopup />
//     </section>
//   )
// }

// export default Hero



import React, { useState, useEffect } from 'react'
import gridbg from '../assets/grid-bg.jpg'
import worldmap from '../assets/worldmap.png'
import { motion } from 'motion/react'
import ShimmerButton from './ShimmerButton'
import ReactCountryFlag from 'react-country-flag'
import SocialMediaPopup from './SocialMediaPopup'

const Hero = () => {
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
        mobile: { x: 59, y: 48  },
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

  const [hoveredLocation, setHoveredLocation] = useState(null)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const getCoordinates = (location) => {
    if (windowSize.width < 768) return location.coordinates.mobile
    if (windowSize.width < 1024) return location.coordinates.tablet
    return location.coordinates.desktop
  }

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

  const connectionLines = [
    { from: getCoordinates(locations[0]), to: getCoordinates(locations[1]) },
    { from: getCoordinates(locations[1]), to: getCoordinates(locations[2]) },
    { from: getCoordinates(locations[0]), to: getCoordinates(locations[2]) }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.3, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", damping: 20, stiffness: 100, duration: 0.8 }
    }
  }

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1, scale: 1, y: 0,
      transition: { type: "spring", damping: 24, stiffness: 120, duration: 0.9, delay: 0.6 }
    }
  }

  return (
    <section className="relative h-screen overflow-hidden bg-[#fafafa] flex flex-col pt-16">
      {/* Background grid */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={gridbg}
          alt="Background Grid"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      {/* Content wrapper */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between h-full px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <div className="text-center space-y-3 sm:space-y-4 mt-12 sm:mt-16 lg:mt-20">
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
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

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Enhancing lives across the UK, Qatar, and India through compassionate
            care, innovative solutions, and trusted services.
          </motion.p>

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

        {/* Map Area */}
        <motion.div
          variants={mapVariants}
          className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center"
        >
          <motion.img
            src={worldmap}
            alt="World Map"
            className="w-full max-h-[55vh] sm:max-h-[60vh] lg:max-h-[65vh] xl:max-h-[70vh] object-contain"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.6 }}
          />

          {/* Connection Lines */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            {connectionLines.map((line, index) => {
              // Create curved path using quadratic Bezier curves
              const fromX = line.from.x;
              const fromY = line.from.y;
              const toX = line.to.x;
              const toY = line.to.y;

              // Calculate control points for curved paths
              const midX = (fromX + toX) / 2;
              const midY = (fromY + toY) / 2;

              // Add curve offset based on distance and direction
              const distance = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
              const curveOffset = distance * 0.15;

              // Determine curve direction
              let controlX = midX;
              let controlY = midY - curveOffset;

              if (index === 1) { // Qatar to India
                controlY = midY + curveOffset * 0.4;
              } else if (index === 2) { // UK to India
                controlY = midY - curveOffset * 1.1;
              }

              const pathData = `M ${fromX} ${fromY} Q ${controlX} ${controlY} ${toX} ${toY}`;

              return (
                <g key={index}>
                  {/* Base path - subtle and always visible */}
                  <path
                    d={pathData}
                    stroke="#0b3b5c"
                    strokeWidth="0.2"
                    strokeDasharray="1,1"
                    fill="none"
                    opacity="0.3"
                  />

                  {/* Animated flowing line */}
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

            {/* Gradient definitions */}
            <defs>
              <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0b3b5c" stopOpacity="0.3" />
                <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#0b3b5c" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Location dots */}
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
              {/* Dot with ripples */}
              <div className="relative flex items-center justify-center">
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

              {/* Hover card */}
              {hoveredLocation === location.id && (
                <motion.div
                  initial={{ opacity: 0, y: 14, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 14, scale: 0.92 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300, duration: 0.35 }}
                  className="absolute -top-32 sm:-top-36 left-1/2 transform -translate-x-1/2 z-30"
                >
                  <motion.div
                    className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-5 min-w-[240px] sm:min-w-[280px] backdrop-blur-sm"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
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

                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {location.details}
                    </p>

                    <motion.div
                      className="w-full h-1 bg-gradient-to-r from-[#0b3b5c] to-[#2b376b] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                    />
                  </motion.div>

                  {/* Arrow */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Social Media Popup */}
      <SocialMediaPopup />
    </section>
  )
}

export default Hero
