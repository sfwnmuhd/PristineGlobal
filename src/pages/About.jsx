import React from 'react'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

/**
 * About Page Component
 * Dedicated page for company information and details
 */
const About = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <AboutSection />
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}

export default About
