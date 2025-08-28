import React from 'react'
import AboutPageHero from '../components/AboutPageHero'
import MissionVisionSection from '../components/MissionVisionSection'
import CoreValueSection from '../components/CoreValueSection'
import FounderMessageSection from '../components/LeadershipTeamSection'
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
  // Structured data for about page
  const aboutSchemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Pristine Global",
    "description": "Learn about Pristine Global's mission, vision, leadership team, and achievements in healthcare, technology, and trading solutions across UK, Qatar, and India.",
    "url": "https://pristineglobal.netlify.app/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Pristine Global",
      "description": "Family-led enterprise founded by Dr. Syed Sayeed Ahmed and Dr. Ahmed Rashid Shaik, providing healthcare, technology, and trading solutions.",
      "foundingDate": "2020",
      "founder": [
        {
          "@type": "Person",
          "name": "Dr. Syed Sayeed Ahmed",
          "jobTitle": "Co-Founder",
          "description": "Seasoned healthcare professional with deep expertise in medical service delivery and strategic investments"
        },
        {
          "@type": "Person",
          "name": "Dr. Ahmed Rashid Shaik",
          "jobTitle": "Co-Founder",
          "description": "Healthcare professional with expertise in medical service delivery and strategic investments across multiple countries"
        }
      ],
      "mission": "Enhancing lives across the UK, Qatar, and India through compassionate care, innovative solutions, and trusted services",
      "areaServed": ["United Kingdom", "Qatar", "India"]
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Pristine Global - Our Mission, Vision & Leadership Team"
        description="Learn about Pristine Global's mission, vision, leadership team, and achievements in healthcare, technology, and trading solutions across UK, Qatar, and India."
        keywords="about pristine global, mission vision, leadership team, Dr. Syed Sayeed Ahmed, Dr. Ahmed Rashid Shaik, healthcare leadership, global healthcare company, family enterprise"
        url="/about"
        schemaData={aboutSchemaData}
      />
      {/* Minimal Hero Banner */}
      <AboutPageHero />

      {/* Mission, Vision & Principles */}
      <MissionVisionSection />

      {/* Core Values */}
      <CoreValueSection />

      {/* Founder Message */}
      <FounderMessageSection />

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
