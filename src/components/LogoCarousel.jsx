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

      <style jsx>{`
        .logo-carousel-container {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .logo-carousel-track {
          display: flex;
          animation: scroll-left 30s linear infinite;
          width: calc(200% + 2rem);
        }

        .logo-item {
          flex-shrink: 0;
          width: 200px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 2rem;
        }

        .logo-image {
          max-width: 120px;
          max-height: 60px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.7);
          transition: all 0.3s ease;
        }

        .logo-image:hover {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.05);
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .logo-item {
            width: 150px;
            height: 60px;
            margin: 0 1.5rem;
          }
          
          .logo-image {
            max-width: 100px;
            max-height: 50px;
          }
          
          .logo-carousel-track {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  )
}

export default LogoCarousel
