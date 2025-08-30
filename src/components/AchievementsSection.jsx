import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

/**
 * AchievementsSection Component
 * Displays company achievements, awards, and milestones
 */
const AchievementsSection = () => {
  const achievements = [
    {
      year: "2024",
      title: "Healthcare Excellence Award",
      description: "Recognized for outstanding patient care and innovative healthcare delivery across UK facilities.",
      category: "Healthcare"
    },
    {
      year: "2023",
      title: "Technology Innovation Partnership",
      description: "Successfully launched AI-powered healthcare management systems across multiple locations.",
      category: "Technology"
    },
    {
      year: "2023",
      title: "International Expansion",
      description: "Expanded operations to Qatar, establishing strategic healthcare and trading partnerships.",
      category: "Business"
    },
    {
      year: "2022",
      title: "Care Home Accreditation",
      description: "Achieved highest quality ratings for care home facilities in the UK healthcare system.",
      category: "Healthcare"
    },
    {
      year: "2022",
      title: "Digital Health Initiative",
      description: "Implemented comprehensive digital health records system improving patient outcomes by 40%.",
      category: "Technology"
    },
    {
      year: "2021",
      title: "Community Impact Award",
      description: "Honored for exceptional community healthcare services during challenging times.",
      category: "Community"
    }
  ]

  const milestones = [
    {
      icon: "🏥",
      title: "Healthcare Facilities",
      count: "12+",
      description: "Operating care homes and medical facilities"
    },
    {
      icon: "🌍",
      title: "Global Presence",
      count: "3",
      description: "Countries with active operations"
    },
    {
      icon: "👥",
      title: "Healthcare Professionals",
      count: "150+",
      description: "Qualified medical and care staff"
    },
    {
      icon: "💼",
      title: "Business Partnerships",
      count: "25+",
      description: "Strategic trading and technology partnerships"
    }
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A track record of excellence, innovation, and positive impact across healthcare, 
            technology, and business sectors worldwide.
          </p>
        </motion.div>

        {/* Milestones Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{milestone.icon}</div>
              <div className="text-3xl font-bold text-[#0b3b5c] mb-2">{milestone.count}</div>
              <h3 className="text-lg font-medium text-black mb-2">{milestone.title}</h3>
              <p className="text-sm text-gray-600">{milestone.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Achievements Timeline */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-black text-center mb-12">
            Recent Milestones
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl font-bold text-[#0b3b5c]">{achievement.year}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {achievement.category}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-black mb-3">{achievement.title}</h4>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
            Be Part of Our Continued Success
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join us as we continue to set new standards in healthcare excellence, 
            technological innovation, and global business partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-6 py-3 bg-[#0b3b5c] text-white rounded-full font-medium hover:bg-[#094461] transition-colors cursor-pointer">
                Partner With Us
              </button>
            </Link>
            {/* <button className="px-6 py-3 border border-[#0b3b5c] text-[#0b3b5c] rounded-full font-medium hover:bg-[#0b3b5c] hover:text-white transition-colors">
              Learn More
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsSection
