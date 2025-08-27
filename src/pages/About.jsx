import React from 'react'
import AboutPageHero from '../components/AboutPageHero'
import MissionVisionSection from '../components/MissionVisionSection'
import CoreValueSection from '../components/CoreValueSection'
import LeadershipTeamSection from '../components/LeadershipTeamSection'
import AchievementsSection from '../components/AchievementsSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import SEO from '../components/SEO'

/**
 * About Page Component
 * Clean banner with comprehensive content sections
 */
const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Hero Banner */}
      <AboutPageHero />

      {/* Mission, Vision & Principles */}
      <MissionVisionSection />

      {/* Core Values */}
      <CoreValueSection />

      {/* Leadership Team */}
      <LeadershipTeamSection />

      {/* Achievements & Milestones */}
      <AchievementsSection />

      {/* Footer & Navigation */}
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}

export default About
