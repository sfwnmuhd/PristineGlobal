import React, { useState } from 'react'
import { motion } from 'motion/react'
import {ArrowUpRight, Phone, Mail, Pin} from 'lucide-react'

/**
 * ContactSection Component
 * Contact information and contact form with validation
 * Features: Responsive layout, form validation, contact details, animations
 */
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  // ===== FORM HANDLERS =====
  
  /**
   * Handle form input changes
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData)
  }

  // ===== COMPONENT RENDER =====

  return (
    <section className="py-16 lg:py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* ===== LEFT SIDE - CONTACT INFORMATION ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Header with Arrow Icon */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black mb-8 flex items-center">
              Reach out
              <ArrowUpRight className="w-16 h-14 sm:w-24 sm:h-20 lg:w-32 lg:h-28 ml-4"/>
              {/* <svg
                className="w-16 h-14 sm:w-24 sm:h-20 lg:w-32 lg:h-28 ml-4"
                fill="currentColor"
                viewBox="0 0 127 111"
                aria-hidden="true"
              >
                <path d="M53.0267 43.5407L7.48353 83.3462L0 76.8055L45.5432 37H5.40184V27.75H63.61V78.625H53.0267V43.5407Z" />
              </svg> */}
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Have a question or need assistance?<br />
              Reach out to our dedicated support team.<br />
              We're here to help with any inquiries you may have.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center">
                <Phone className="w-8 h-8 mr-4 flex-shrink-0 text-[#0b3b5c]"/>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-black">Call us</h3>
                  <a 
                    href="tel:+447868751907"
                    className="text-base sm:text-lg text-gray-500 tracking-widest hover:text-[#0b3b5c] transition-colors"
                  >
                    07868 751 907
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <Mail className="w-8 h-8 mr-4 flex-shrink-0 text-[#0b3b5c]"/>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-black">Mail us</h3>
                  <a 
                    href="mailto:sayeed@pristine-global.com"
                    className="text-base sm:text-lg text-gray-500 hover:text-[#0b3b5c] transition-colors"
                  >
                    sayeed@pristine-global.com
                  </a>
                </div>
              </div>

              {/* Addresses */}
              <div className="flex items-start">
                <Pin className="w-8 h-8 mr-4 mt-1 flex-shrink-0 text-[#0b3b5c]"/>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-black mb-4">
                    Find us
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base sm:text-lg text-gray-700 font-medium">
                        UK Headquarters:
                      </h4>
                      <p className="text-sm sm:text-base text-gray-500">
                        Hawthorne House, 17a Hawthorne Drive, Leicester,
                        England, LE5 6DL
                      </p>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg text-gray-700 font-medium">
                        India Office:
                      </h4>
                      <p className="text-sm sm:text-base text-gray-500">
                        S-359, 2nd Floor, Tower B, Ansal Corporate Plaza, Palam
                        Vihar, Gurgaon, Haryana – Pristine Global Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE - CONTACT FORM ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-300 rounded-xl p-8 lg:p-12"
          >
            <h3 className="text-2xl sm:text-3xl font-medium text-[#0b3b5c] mb-8 lg:mb-12">
              Get in touch.
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
              {/* Name and Email Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-base sm:text-lg text-black mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b3b5c] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base sm:text-lg text-black mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b3b5c] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Company and Subject Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-base sm:text-lg text-black mb-2">
                    Your company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b3b5c] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-base sm:text-lg text-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b3b5c] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-base sm:text-lg text-black mb-2">
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type here...."
                    required
                    maxLength={250}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#0b3b5c] focus:border-transparent"
                  />
                  <span className="absolute bottom-3 right-3 text-xs text-gray-400">
                    {formData.message.length}/250
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#0b3b5c] text-white rounded-full text-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0b3b5c] focus:ring-offset-2"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
