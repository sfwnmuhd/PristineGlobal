import React from 'react'
import { motion } from 'motion/react'

const LeadershipTeamSection = () => {
    const teamMembers = [
        {
            name: "Dr. Mohsin Ditta",
            role: "Family Medicine specialist | co-founder of Pristine Care Homes",
            image:
            "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738",
        },
        {
            name: "Dr. Syed Sayeed Ahmed",
            role: "Consultant Pediatrician | MBA | leader across our UK, Middle East, and Indian healthcare ventures",
            image:
            "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738",
        },
        {
            name: "Dr. Ahmed Rashid Shaik",
            role: "Family Physician | Academic Faculty | co-founder | overseeing IT and healthcare investments across regions",
            image:
            "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738",
        },
        {
            name: "Tanveer Mohamed",
            role: "CEO of Precedence Technologies | driving strategy and long-term planning for our IT and investment arm",
            image:
            "https://api.builder.io/api/v1/image/assets/TEMP/e8930efbc20636ab52761fbcf08e7ec14a79654e?width=738",
        },
    ];
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-4"
        >
          Our Leadership Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-gray-500 mb-12 text-center sm:text-left"
        >
          A dynamic team of medical, technology, and business leaders committed
          to global healthcare excellence.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-medium text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center sm:text-left mt-16 sm:flex sm:justify-between sm:items-center"
        >
          <div className='sm:flex sm:flex-col sm:items-start mb-6 sm:mb-0'>
            <h3 className="text-xl sm:text-2xl font-medium text-black mb-4">
              Ready to invest in our growing portfolio?
            </h3>
            <p className="text-sm sm:text-lg text-gray-500">
              From the upcoming UK care home to thriving ventures worldwide.
            </p>
          </div>  
          <div>
            <button className="flex items-center justify-center mx-auto sm:mx-0 border border-[#0b3b5c] text-[#0b3b5c] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0b3b5c] hover:text-white transition-colors cursor-pointer">
              Invest with Us
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.4383 10.5565L8.47314 19.5217L7 18.0485L15.9652 9.08333H8.06335V7H19.5217V18.4583H17.4383V10.5565Z" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LeadershipTeamSection
