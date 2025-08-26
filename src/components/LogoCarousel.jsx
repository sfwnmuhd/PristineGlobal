import React from 'react'
import './LogoCarousel.css'

const LogoCarousel = () => {
  // Example logos - user can replace these later
  const logos = [
    {
      name: 'Google',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
    },
    {
      name: 'Amazon',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    {
      name: 'Apple',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg'
    },
    {
      name: 'Microsoft',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
    },
    {
      name: 'Meta',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
    },
    {
      name: 'Netflix',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
    }
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="bg-gray-50 py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with some of the world's most innovative companies
          </p>
        </div>
        
        <div className="relative">
          <div className="logo-carousel-container">
            <div className="logo-carousel-track">
              {duplicatedLogos.map((logo, index) => (
                <div key={index} className="logo-item">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="logo-image"
                    onError={(e) => {
                      // Fallback for broken images
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoCarousel
