import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import DivisionByCountrySection from '../components/DivisionByCountrySection'
import CoreValueSection from '../components/CoreValueSection'
import LeadershipTeamSection from '../components/LeadershipTeamSection'
import ContactSection from '../components/ContactSection'
import CallToActionSection from '../components/CallToActionSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import SEO from '../components/SEO'

/**
 * Home Page Component
 * Main landing page with all sections including About
 */
const Home = () => {
  // Structured data for home page
  const homeSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home - Pristine Global",
    "description": "Global excellence in healthcare, retail technology, and trading solutions across UK, Qatar, and India. Compassionate care, innovative solutions, and trusted services.",
    "url": "https://pristineglobal.netlify.app/",
    "mainEntity": {
      "@type": "Organization",
      "name": "Pristine Global",
      "description": "Family-led enterprise providing healthcare, technology, and trading solutions across multiple countries.",
      "url": "https://pristineglobal.netlify.app/",
      "logo": "https://pristineglobal.netlify.app/logo.png",
      "founder": [
        {
          "@type": "Person",
          "name": "Dr. Syed Sayeed Ahmed"
        },
        {
          "@type": "Person",
          "name": "Dr. Ahmed Rashid Shaik"
        }
      ],
      "areaServed": ["United Kingdom", "Qatar", "India"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Healthcare Services",
              "description": "Care homes and child care facilities with specialized, person-centered care"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technology Solutions",
              "description": "Innovative technology and IT services across multiple sectors"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Trading & Distribution",
              "description": "Distribution networks and trading services across international markets"
            }
          }
        ]
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Pristine Global - Healthcare, Technology & Trading Solutions | UK, Qatar, India"
        description="Global excellence in healthcare, retail technology, and trading solutions across UK, Qatar, and India. Compassionate care, innovative solutions, and trusted services."
        keywords="healthcare services, care homes UK, child care, technology solutions, trading services, Qatar healthcare, India distribution, medical services, retail technology, global healthcare, pristine global"
        url="/"
        schemaData={homeSchemaData}
      />
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
