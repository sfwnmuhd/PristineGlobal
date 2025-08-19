import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Locations', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact Us', href: '#' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Pristine Global Logo"
            className="w-auto h-10 sm:h-12"
          />
        </div>

        {/* Desktop Navigation Menu - visible on lg screens and up */}
        <nav className="hidden lg:flex space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-[#0b3b5c] transition-colors font-medium text-sm xl:text-base"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Tablet Navigation Menu - visible on md to lg screens */}
        <nav className="hidden md:flex lg:hidden space-x-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-[#0b3b5c] transition-colors font-medium text-sm"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#0b3b5c] hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <img
                src="/logo.png"
                alt="Pristine Global Logo"
                className="w-auto h-8"
              />
              <button
                onClick={closeMenu}
                className="p-2 rounded-md text-gray-700 hover:text-[#0b3b5c] hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <nav className="p-4">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-2 px-4 text-gray-700 hover:text-[#0b3b5c] hover:bg-gray-50 rounded-md transition-colors font-medium"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
