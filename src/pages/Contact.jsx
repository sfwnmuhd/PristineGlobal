import React from 'react'
import { motion } from 'motion/react'
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { IoLogoWhatsapp } from "react-icons/io";
import SEO from '../components/SEO'

/**
 * Contact Us Page Component
 * Dedicated page for contact information, offices, and contact form
 */
const Contact = () => {
  const offices = [
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      isHeadquarters: true,
      address: 'Hawthorne House, 17a Hawthorne Drive, Leicester, England, LE5 6DL',
      phone: '+44 7868 751 907',
      email: 'sayeed@pristine-global.com',
      businessHours: 'Mon - Fri: 9:00 AM - 6:00 PM GMT',
      services: ['Nursing Homes', 'Child Care', 'Healthcare Consulting']
    },
    {
      country: 'Qatar',
      flag: '🇶��',
      isHeadquarters: false,
      address: 'Business Development Office, Doha, Qatar',
      phone: '+974 7765 1525',
      email: 'qatar@pristine-global.com',
      businessHours: 'Sun - Thu: 8:00 AM - 5:00 PM AST',
      services: ['Healthcare Consulting', 'Business Development', 'Technology Solutions']
    },
    {
      country: 'India',
      flag: '🇮🇳',
      isHeadquarters: false,
      address: 'S-359, 2nd Floor, Tower B, Ansal Corporate Plaza, Palam Vihar, Gurgaon, Haryana',
      phone: '+91 124 456 7890',
      email: 'india@pristine-global.com',
      businessHours: 'Mon - Sat: 9:30 AM - 6:30 PM IST',
      services: ['Healthcare Technology', 'Medical Equipment Trading', 'Pharmaceutical Partnership']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b3b5c] to-[#2b376b] text-white pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg"
            alt="Professional business contact and communication"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b5c]/80 to-[#2b376b]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Connect with our global team across three countries. We're here to help 
              with your healthcare, technology, and business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Information Section */}
      <ContactSection />

      {/* Global Offices Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            className="text-3xl sm:text-4xl font-semibold text-black mb-12 text-center"
          >
            Our Global Offices
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                {office.isHeadquarters && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0b3b5c] text-white text-xs font-medium rounded-full">
                      Headquarters
                    </span>
                  </div>
                )}

                {/* Country Header */}
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{office.flag}</span>
                  <h3 className="text-xl font-semibold text-black">{office.country}</h3>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#0b3b5c] mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#0b3b5c] mr-3 flex-shrink-0" />
                    <a 
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 hover:text-[#0b3b5c] transition-colors text-sm"
                    >
                      {office.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#0b3b5c] mr-3 flex-shrink-0" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-gray-600 hover:text-[#0b3b5c] transition-colors text-sm"
                    >
                      {office.email}
                    </a>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-[#0b3b5c] mr-3 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{office.businessHours}</p>
                  </div>

                  {/* Services */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-black mb-2">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-8">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              For urgent inquiries or immediate support, reach out to us through 
              these quick contact methods. Our team is ready to assist you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Call Us</h3>
              <a 
                href="tel:+447868751907"
                className="text-[#0b3b5c] hover:text-[#2b376b] transition-colors font-medium"
              >
                07868 751 907
              </a> 
              <p className="text-gray-600 text-sm mt-1">Available 24/7</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0b3b5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Email Us</h3>
              <a 
                href="mailto:sayeed@pristine-global.com"
                className="text-[#0b3b5c] hover:text-[#2b376b] transition-colors font-medium"
              >
                sayeed@pristine-global.com
              </a>
              <p className="text-gray-600 text-sm mt-1">Response within 24 hours</p>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <Globe className="w-8 h-8" /> */}
                <IoLogoWhatsapp className='w-8 h-8' />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/97477651525"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#128C7E] transition-colors font-medium"
              >
                +974 7765 1525
              </a>
              <p className="text-gray-600 text-sm mt-1">Instant messaging</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </div>
  )
}

export default Contact
