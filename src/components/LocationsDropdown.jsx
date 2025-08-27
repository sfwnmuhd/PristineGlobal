import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'

/**
 * LocationsDropdown Component
 * Dropdown menu for location navigation
 */
const LocationsDropdown = ({ isAboutPage, isLocationPage, isContactPage, isScrolled, onClose }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const locations = [
    { name: 'UK', href: '/locations/uk', countryCode: 'GB' },
    { name: 'Qatar', href: '/locations/qatar', countryCode: 'QA' },
    { name: 'India', href: '/locations/india', countryCode: 'IN' }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  const handleItemClick = () => {
    setIsOpen(false)
    if (onClose) onClose()
  }

  const textColor = (isLocationPage || isContactPage) && !isScrolled ? 'text-white hover:text-blue-200' : isAboutPage ? 'text-white hover:text-blue-200' : 'text-gray-700'

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown Trigger */}
      <button
        className={`${textColor} hover:text-[#0b3b5c] transition-colors font-medium text-sm xl:text-base cursor-pointer flex items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Locations
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            {locations.map((location, index) => (
              <Link
                key={location.name}
                to={location.href}
                onClick={handleItemClick}
                className={`flex items-center px-4 py-3 text-gray-700 hover:text-[#0b3b5c] hover:bg-gray-50 transition-colors ${
                  index === 0 ? 'rounded-t-lg' : ''
                } ${index === locations.length - 1 ? 'rounded-b-lg' : 'border-b border-gray-100'}`}
              >
                <ReactCountryFlag
                  countryCode={location.countryCode}
                  svg
                  className="w-5 h-4 mr-3 rounded"
                />
                {location.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LocationsDropdown
