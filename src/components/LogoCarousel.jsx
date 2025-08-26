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
                  className="flex-shrink-0 w-40 h-16 sm:w-32 sm:h-14 flex items-center justify-center mx-6 sm:mx-4"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-[100px] max-h-[40px] sm:max-w-[80px] sm:max-h-[35px] w-auto h-auto object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-in-out"
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

      {/* Custom CSS for animation - added to document head */}
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
          animation: scroll-left 30s linear infinite;
          width: calc(200% + 2rem);
        }
        
        @media (max-width: 768px) {
          .animate-scroll-left {
            animation-duration: 25s;
          }
        }
      `}</style>
    </div>
  )
}

export default LogoCarousel
