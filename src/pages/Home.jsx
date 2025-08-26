import React from 'react'
import Hero from '../components/Hero'
import LogoCarousel from '../components/LogoCarousel'
import AboutSection from '../components/AboutSection'
import DivisionByCountrySection from '../components/DivisionByCountrySection'
import CoreValueSection from '../components/CoreValueSection'
import LeadershipTeamSection from '../components/LeadershipTeamSection'
import ContactSection from '../components/ContactSection'
import CallToActionSection from '../components/CallToActionSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

/**
 * Home Page Component
 * Main landing page with all sections including About
 */
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="locations">
        <DivisionByCountrySection />
      </section>
      <section id="services">
        <CoreValueSection />
        <LeadershipTeamSection />
      </section>
      <section id="contact">
        <ContactSection />
        <CallToActionSection />
      </section>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}

export default Home
