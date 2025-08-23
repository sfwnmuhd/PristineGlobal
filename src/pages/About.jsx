import React from 'react'
import AboutSection from '../components/AboutSection'
import MissionVisionSection from '../components/MissionVisionSection'
import CoreValueSection from '../components/CoreValueSection'
import LeadershipTeamSection from '../components/LeadershipTeamSection'
import AchievementsSection from '../components/AchievementsSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

/**
 * About Page Component
 * Comprehensive page for company information, mission, team, and achievements
 */
const About = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Company Overview */}
      <AboutSection />

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
