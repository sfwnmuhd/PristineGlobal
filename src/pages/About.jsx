import React from 'react'
import AboutPageHero from '../components/AboutPageHero'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

/**
 * About Page Component
 * Minimal page for company information
 */
const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <AboutPageHero />

      {/* Footer & Navigation */}
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}

export default About
