// import React, { useState } from 'react'
// import { motion } from 'motion/react'
// import ReactCountryFlag from 'react-country-flag'

// const DivisionByCountrySection = () => {
//   const [selectedCountry, setSelectedCountry] = useState('UK')

//   const countryData = {
//     UK: {
//       title: 'Pristine Care Homes',
//       description: `We operate three care homes and one child care facility in the UK, each offering specialised, person-centered care. Our flagship properties include Willoughby Grange Nursing Home and Broom Lane Care Home, designed to foster warmth, dignity, and community.`,
//       upcoming: 'A new 50-bed nursing home in Stoke-on-Trent is in development, underscoring our growth ambitions.',
//       img: 'https://api.builder.io/api/v1/image/assets/TEMP/b9bc235f1adeb19209ec3398e8fbca66d5117640?width=996',
//       icon: 'https://api.builder.io/api/v1/image/assets/TEMP/208071ab056e786dd092d3478b2227af68444683?width=92',
//     },
//     Qatar: {
//       title: 'Healthcare & Technology Services',
//       description: `In Qatar, we provide advanced healthcare and technology solutions to improve patient outcomes and enhance operational efficiency.`,
//       upcoming: 'Expansion into new tech-enabled healthcare centers is underway.',
//       img: 'https://via.placeholder.com/996x400?text=Qatar+Division',
//       icon: 'https://via.placeholder.com/92?text=Q',
//     },
//     India: {
//       title: 'Distribution Networks & Healthcare Investments',
//       description: `Our operations in India focus on building strong distribution networks and investing in healthcare infrastructure to support local communities.`,
//       upcoming: 'Launching a new network of regional distribution hubs to streamline operations.',
//       img: 'https://via.placeholder.com/996x400?text=India+Division',
//       icon: 'https://via.placeholder.com/92?text=I',
//     },
//   }

//   const current = countryData[selectedCountry]

//   return (
//     <section className="py-20 px-6 bg-gray-50">
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl font-semibold text-black mb-4"
//         >
//           Our Division by Country
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-lg text-gray-500 mb-12"
//         >
//           Expanding across continents with excellence in care, technology, and
//           distribution
//         </motion.p>

//         {/* Country Selector */}
//         <div className="flex justify-center gap-4 mb-12">
//           {['UK', 'Qatar', 'India'].map((country) => (
//             <div
//               key={country}
//               onClick={() => setSelectedCountry(country)}
//               className={`flex items-center px-6 py-3 rounded-lg cursor-pointer transition-all
//                 ${selectedCountry === country
//                   ? 'bg-[#2b376b] text-white'
//                   : 'bg-pristine-bg-light text-black border border-gray-300'
//                 }`}
//             >
//               <div
//                 className={`w-8 h-6 rounded mr-3 ${
//                   country === 'UK'
//                     ? 'bg-white'
//                     : country === 'Qatar'
//                     ? 'bg-red-600'
//                     : 'bg-orange-500'
//                 }`}
//               ></div>
//               <span className="text-lg">{country}</span>
//             </div>
//           ))}
//         </div>

//         {/* Country Content */}
//         <motion.div
//           key={selectedCountry} // ensures animation on change
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white rounded-xl border border-gray-200 p-8"
//         >
//           <div className="grid lg:grid-cols-2 gap-8 items-center">
//             <img
//               src={current.img}
//               alt={current.title}
//               className="w-full h-80 object-cover rounded-xl"
//             />
//             <div className="text-left">
//               <h3 className="text-3xl font-normal text-black mb-6">
//                 {current.title}
//               </h3>
//               <p className="text-2xl text-pristine-text-gray leading-relaxed mb-8">
//                 {current.description}
//               </p>

//               <div className="flex items-center mb-4">
//                 <img
//                   src={current.icon}
//                   alt="Project Icon"
//                   className="w-12 h-12 mr-4"
//                 />
//                 <h4 className="text-2xl text-black">Upcoming Project</h4>
//               </div>
//               <p className="text-2xl text-pristine-text-gray">{current.upcoming}</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default DivisionByCountrySection

import React, { useState } from 'react'
import { motion } from 'motion/react'
import ReactCountryFlag from 'react-country-flag'

const DivisionByCountrySection = () => {
  const [selectedCountry, setSelectedCountry] = useState('UK')

  const countryData = {
    UK: {
      title: 'Pristine Care Homes',
      description: `We operate three care homes and one child care facility in the UK, each offering specialised, person-centered care. Our flagship properties include Willoughby Grange Nursing Home and Broom Lane Care Home, designed to foster warmth, dignity, and community.`,
      upcoming: 'A new 50-bed nursing home in Stoke-on-Trent is in development, underscoring our growth ambitions.',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/b9bc235f1adeb19209ec3398e8fbca66d5117640?width=996',
    },
    Qatar: {
      title: 'Healthcare & Technology Services',
      description: `In Qatar, we provide advanced healthcare and technology solutions to improve patient outcomes and enhance operational efficiency.`,
      upcoming: 'Expansion into new tech-enabled healthcare centers is underway.',
      img: 'https://via.placeholder.com/996x400?text=Qatar+Division',
    },
    India: {
      title: 'Distribution Networks & Healthcare Investments',
      description: `Our operations in India focus on building strong distribution networks and investing in healthcare infrastructure to support local communities.`,
      upcoming: 'Launching a new network of regional distribution hubs to streamline operations.',
      img: 'https://via.placeholder.com/996x400?text=India+Division',
    },
  }

  const countryCodes = {
    UK: 'GB',     // ISO Alpha-2 for United Kingdom
    Qatar: 'QA',
    India: 'IN',
  }

  const current = countryData[selectedCountry]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-semibold text-black mb-4"
        >
          Our Division by Country
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-500 mb-12"
        >
          Expanding across continents with excellence in care, technology, and
          distribution
        </motion.p>

        {/* Country Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {['UK', 'Qatar', 'India'].map((country) => (
            <div
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`flex items-center px-6 py-3 rounded-lg cursor-pointer transition-all
                ${selectedCountry === country
                  ? 'bg-[#2b376b] text-white'
                  : 'bg-pristine-bg-light text-black border border-gray-300'
                }`}
            >
              <ReactCountryFlag
                countryCode={countryCodes[country]}
                svg
                style={{ width: '2em', height: '1.5em', borderRadius: '3px' }}
                className="mr-3"
              />
              <span className="text-lg">{country}</span>
            </div>
          ))}
        </div>

        {/* Country Content */}
        <motion.div
          key={selectedCountry} // ensures animation on change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl border border-gray-200 p-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <img
              src={current.img}
              alt={current.title}
              className="w-full h-80 object-cover rounded-xl"
            />
            <div className="text-left">
              <h3 className="text-3xl font-normal text-black mb-6">
                {current.title}
              </h3>
              <p className="text-2xl text-pristine-text-gray leading-relaxed mb-8">
                {current.description}
              </p>

              <div className="flex items-center mb-4">
                <ReactCountryFlag
                  countryCode={countryCodes[selectedCountry]}
                  svg
                  style={{ width: '2em', height: '1.5em', borderRadius: '3px' }}
                  className="mr-4"
                />
                <h4 className="text-2xl text-black">Upcoming Project</h4>
              </div>
              <p className="text-2xl text-pristine-text-gray">{current.upcoming}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DivisionByCountrySection

