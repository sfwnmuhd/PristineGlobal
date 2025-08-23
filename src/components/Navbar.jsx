import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import LocationsDropdown from './LocationsDropdown'

/**
 * Navbar Component
 * A responsive navigation bar with smooth scroll effects and mobile menu
 * Features: Scroll-based styling, smooth scroll navigation, responsive design, accessibility
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Check if we're on About page or location pages to adjust navbar styling
  const isAboutPage = location.pathname === '/about'
  const isLocationPage = location.pathname.startsWith('/locations/')

  // ===== NAVIGATION CONFIGURATION =====

  const menuItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About', href: '/about', type: 'route' },
    { name: 'Locations', href: '#locations', type: 'dropdown' },
    { name: 'Services', href: '#services', type: 'scroll' },
    { name: 'Contact Us', href: '#contact', type: 'scroll' }
  ]

  // ===== SCROLL EFFECT HANDLER =====
  
  useEffect(() => {
    /**
     * Handle scroll effect for navbar background
     * Changes navbar appearance after scrolling 50px
     */
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ===== EVENT HANDLERS =====
  
  /**
   * Toggle mobile menu visibility
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  /**
   * Close mobile menu
   */
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  /**
   * Handle navigation - either route or smooth scroll
   * @param {Event} e - Click event
   * @param {Object} item - Menu item object
   */
  const handleNavigation = (e, item) => {
    if (item.type === 'route') {
      // Handle React Router navigation
      closeMenu()
      return // Let Link component handle the navigation
    } else {
      // Handle smooth scroll navigation
      e.preventDefault()

      // If we're not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/')
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          scrollToSection(item.href)
        }, 100)
      } else {
        scrollToSection(item.href)
      }
      closeMenu()
    }
  }

  /**
   * Scroll to section on current page
   * @param {string} href - Target section anchor
   */
  const scrollToSection = (href) => {
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerOffset = 80 // Account for fixed header height
      const elementPosition = targetElement.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // ===== COMPONENT RENDER =====

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      animate={{
        backgroundColor: (isScrolled || isAboutPage || isLocationPage) ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: (isScrolled || isAboutPage || isLocationPage) ? 'blur(10px)' : 'blur(0px)'
      }}
      style={{
        boxShadow: (isScrolled || isAboutPage || isLocationPage) ? '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' : 'none'
      }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* ===== LOGO ===== */}
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Pristine Global - Healthcare, Technology & Trading Solutions"
            className="w-auto h-10 sm:h-16"
          />
        </div>

        {/* ===== DESKTOP NAVIGATION (Large screens) ===== */}
        <nav className="hidden lg:flex space-x-8" role="navigation" aria-label="Main navigation">
          {menuItems.map((item, index) => {
            if (item.type === 'route') {
              return (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => closeMenu()}
                  className={`${isAboutPage && !isScrolled ? 'text-gray-900' : 'text-gray-700'} hover:text-[#0b3b5c] transition-colors font-medium text-sm xl:text-base cursor-pointer`}
                >
                  {item.name}
                </Link>
              )
            } else if (item.type === 'dropdown') {
              return (
                <LocationsDropdown
                  key={index}
                  isAboutPage={isAboutPage}
                  isScrolled={isScrolled}
                  onClose={closeMenu}
                />
              )
            } else {
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item)}
                  className={`${isAboutPage && !isScrolled ? 'text-gray-900' : 'text-gray-700'} hover:text-[#0b3b5c] transition-colors font-medium text-sm xl:text-base cursor-pointer`}
                >
                  {item.name}
                </a>
              )
            }
          })}
        </nav>

        {/* ===== TABLET NAVIGATION (Medium screens) ===== */}
        <nav className="hidden md:flex lg:hidden space-x-4" role="navigation" aria-label="Tablet navigation">
          {menuItems.map((item, index) => {
            if (item.type === 'route') {
              return (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => closeMenu()}
                  className={`${isAboutPage && !isScrolled ? 'text-gray-900' : 'text-gray-700'} hover:text-[#0b3b5c] transition-colors font-medium text-sm cursor-pointer`}
                >
                  {item.name}
                </Link>
              )
            } else if (item.type === 'dropdown') {
              return (
                <LocationsDropdown
                  key={index}
                  isAboutPage={isAboutPage}
                  isScrolled={isScrolled}
                  onClose={closeMenu}
                />
              )
            } else {
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item)}
                  className={`${isAboutPage && !isScrolled ? 'text-gray-900' : 'text-gray-700'} hover:text-[#0b3b5c] transition-colors font-medium text-sm cursor-pointer`}
                >
                  {item.name}
                </a>
              )
            }
          })}
        </nav>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 rounded-md ${isAboutPage && !isScrolled ? 'text-gray-900' : 'text-gray-700'} hover:text-[#0b3b5c] hover:bg-gray-100/50 transition-colors`}
          aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ===== MOBILE MENU PANEL ===== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{
              type: 'tween',
              duration: 0.3,
              ease: 'easeOut'
            }}
            className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-heading"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200/50">
              <img
                src="/logo.png"
                alt="Pristine Global Logo"
                className="w-auto h-8"
              />
              <button
                onClick={closeMenu}
                className="p-2 rounded-md text-gray-700 hover:text-[#0b3b5c] hover:bg-gray-100/50 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Mobile Navigation Menu */}
            <nav className="p-6" role="navigation" aria-labelledby="mobile-menu-heading">
              <h2 id="mobile-menu-heading" className="sr-only">Mobile Navigation Menu</h2>
              <ul className="space-y-1">
                {menuItems.map((item, index) => {
                  if (item.type === 'dropdown') {
                    // For mobile, show location items directly
                    const locationItems = [
                      { name: 'UK', href: '/locations/uk' },
                      { name: 'Qatar', href: '/locations/qatar' },
                      { name: 'India', href: '/locations/india' }
                    ];

                    return locationItems.map((location, locationIndex) => (
                      <motion.li
                        key={`${index}-${locationIndex}`}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: (index + locationIndex) * 0.05 + 0.1,
                          duration: 0.3,
                          ease: 'easeOut'
                        }}
                      >
                        <Link
                          to={location.href}
                          onClick={() => closeMenu()}
                          className="block py-3 px-4 pl-8 text-gray-700 hover:text-[#0b3b5c] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-lg cursor-pointer"
                        >
                          {location.name}
                        </Link>
                      </motion.li>
                    ));
                  }

                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05 + 0.1,
                        duration: 0.3,
                        ease: 'easeOut'
                      }}
                    >
                      {item.type === 'route' ? (
                        <Link
                          to={item.href}
                          onClick={() => closeMenu()}
                          className="block py-3 px-4 text-gray-700 hover:text-[#0b3b5c] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-lg cursor-pointer"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={(e) => handleNavigation(e, item)}
                          className="block py-3 px-4 text-gray-700 hover:text-[#0b3b5c] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-lg cursor-pointer"
                        >
                          {item.name}
                        </a>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
