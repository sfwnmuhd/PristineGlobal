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
import Footer3 from './components/Footer'


const App = () => {
  return (
    <div className='min-h-screen bg-white'>
     <Navbar />
     <Hero/>
     <AboutSection/>
     <DivisionByCountrySection/>
     <CoreValueSection/>
     <LeadershipTeamSection/>
     <ContactSection/>
     <CallToActionSection/>
     <Footer3/>
    </div>
  )
}

export default App
