import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import DivisionByCountrySection from './components/DivisionByCountrySection'
import CoreValueSection from './components/CoreValueSection'
import LeadershipTeamSection from './components/LeadershipTeamSection'
import ContactSection from './components/ContactSection'
import CallToActionSection from './components/CallToActionSection'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <section id='home'>
        <Hero />
      </section>
      <section id='about'>
        <AboutSection />
      </section>
      <section id='locations'>
        <DivisionByCountrySection />
      </section>
      <section id='services'>
        <CoreValueSection />
        <LeadershipTeamSection />
      </section>
      <section id='contact'>
        <ContactSection />
        <CallToActionSection />
      </section>
      <Footer />
    </div>
  )
}

export default App
