import React from 'react'

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
    <div className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Logo carousel container with gradient mask */}
          <div 
            className="w-full overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
          >
            {/* Scrolling track */}
            <div className="flex animate-scroll-left">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-28 h-12 sm:w-40 sm:h-16 flex items-center justify-center mx-2 sm:mx-6"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-[60px] max-h-[24px] sm:max-w-[100px] sm:max-h-[40px] w-auto h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
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

      {/* Custom CSS for animation - optimized for performance */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
          width: calc(200% + 4rem);
          will-change: transform;
        }

        @media (max-width: 768px) {
          .animate-scroll-left {
            animation-duration: 10s;
            width: calc(200% + 1rem);
          }
        }
      `}</style>
    </div>
  )
}

export default LogoCarousel
