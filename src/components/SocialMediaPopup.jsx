import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Share2 } from 'lucide-react'

/**
 * SocialMediaPopup Component
 * A floating social media widget with expandable links
 * Features: Expandable social links, smooth animations, gradient styling
 */
const SocialMediaPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  // ===== SOCIAL MEDIA CONFIGURATION =====
  
  const socialLinks = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: '#',
      gradient: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: '#',
      gradient: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: '#',
      gradient: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      name: 'X (Twitter)',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
        </svg>
      ),
      url: '#',
      gradient: 'from-gray-800 to-black',
      hoverColor: 'hover:from-gray-900 hover:to-gray-800'
    }
  ]

  // ===== EVENT HANDLERS =====
  
  /**
   * Toggle social links visibility
   */
  const toggleSocialLinks = () => {
    setIsOpen(!isOpen)
  }

  // ===== COMPONENT RENDER =====

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 pointer-events-auto">
      <div className="relative">
        {/* ===== EXPANDABLE SOCIAL LINKS ===== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.2,
                ease: "easeOut"
              }}
              className="absolute bottom-16 left-0 flex space-x-3 bg-white/95 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg border border-gray-100"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 sm:p-3 bg-gradient-to-br ${social.gradient} ${social.hoverColor} text-white rounded-full shadow-md transition-all duration-300 group`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <div>
                    {React.cloneElement(social.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== MAIN TOGGLE BUTTON ===== */}
        <motion.button
          onClick={toggleSocialLinks}
          className="p-3 bg-gradient-to-r from-[#0b3b5c] to-[#2b376b] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close social media links" : "Open social media links"}
        >
          {/* Rotating Share Icon */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>

          {/* Hover Ripple Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </div>
  )
}

export default SocialMediaPopup


// import React from 'react'
// import { motion } from 'motion/react'

// /**
//  * SocialMediaPopup Component
//  * A floating social media widget with direct social links
//  * Features: Always visible social links, smooth animations, gradient styling
//  */
// const SocialMediaPopup = () => {

//   // ===== SOCIAL MEDIA CONFIGURATION =====
  
//   const socialLinks = [
//     {
//       name: 'Instagram',
//       icon: (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//         </svg>
//       ),
//       url: '#',
//       gradient: 'from-pink-500 to-purple-600',
//       hoverColor: 'hover:from-pink-600 hover:to-purple-700'
//     },
//     {
//       name: 'Facebook',
//       icon: (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//         </svg>
//       ),
//       url: '#',
//       gradient: 'from-blue-600 to-blue-700',
//       hoverColor: 'hover:from-blue-700 hover:to-blue-800'
//     },
//     {
//       name: 'LinkedIn',
//       icon: (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//         </svg>
//       ),
//       url: '#',
//       gradient: 'from-blue-500 to-blue-600',
//       hoverColor: 'hover:from-blue-600 hover:to-blue-700'
//     },
//     {
//       name: 'X (Twitter)',
//       icon: (
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
//         </svg>
//       ),
//       url: '#',
//       gradient: 'from-gray-800 to-black',
//       hoverColor: 'hover:from-gray-900 hover:to-gray-800'
//     }
//   ]

//   // ===== COMPONENT RENDER =====

//   return (
//     <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-40">
//       {/* ===== SOCIAL MEDIA LINKS ===== */}
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.3,
//           ease: "easeOut"
//         }}
//         className="flex space-x-3"
//       >
//         {socialLinks.map((social, index) => (
//           <motion.a
//             key={social.name}
//             href={social.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`p-2 sm:p-3 bg-gradient-to-br ${social.gradient} ${social.hoverColor} text-white rounded-full shadow-md transition-all duration-300 group`}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               delay: index * 0.1,
//               duration: 0.2,
//               ease: "easeOut"
//             }}
//             whileHover={{ scale: 1.1, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             title={social.name}
//             aria-label={`Visit our ${social.name} page`}
//           >
//             <div>
//               {React.cloneElement(social.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
//             </div>
//           </motion.a>
//         ))}
//       </motion.div>
//     </div>
//   )
// }

// export default SocialMediaPopup
