import React from 'react'
import { motion } from 'motion/react'
import logo from '/logo.png'
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react' 

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Services", href: "#" },
      { name: "Contact", href: "#" }
    ],
    Locations: [
      { name: "United Kingdom", href: "#" },
      { name: "Qatar", href: "#" },
      { name: "India", href: "#" }
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "User Guide", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Support", href: "#" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Compliance", href: "#" }
    ]
  }

  const socialLinks = [
    {
      label: "LinkedIn",
      icon: (
        <Linkedin className='w-5 h-5'/>
      ),
      href: "#",
      hoverColor: "hover:bg-blue-600"
    },
    {
      label: "Instagram",
      icon: (
        <Instagram className='w-5 h-5'/>
      ),
      href: "#",
      hoverColor: "hover:bg-sky-500"
    },
    {
      label: "Facebook",
      icon: (
        <Facebook className="w-5 h-5"/>
      ),
      href: "#",
      hoverColor: "hover:bg-pink-600"
    },
    {
      label: "YouTube",
      icon: (
        <Youtube className='w-5 h-5'/>
      ),
      href: "#",
      hoverColor: "hover:bg-red-600"
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0.1 : 0.6 }}
            className="lg:col-span-4"
          >
            <div className="mb-6">
              <img
                src={logo}
                alt="Pristine Global — Healthcare, Technology & Trading Solutions"
                className="w-40 h-16 object-contain brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md">
              Delivering innovative solutions across healthcare, technology, and trading, 
              connecting communities and creating lasting impact worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm">sayeed@pristine-global.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm">07868 751 907</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gray-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 transition-all duration-300 ${social.hoverColor} hover:text-white hover:scale-110 hover:shadow-lg`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-white font-semibold text-lg mb-6 relative">
                  {title}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700/50 pt-12 mb-12"
        >
          <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
            <h3 className="text-white font-semibold text-xl mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-6">
              Get the latest news and updates from Pristine Global delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-sm mb-4 lg:mb-0"
          >
            © 2025{" "}
            <span className="text-white font-medium">Pristine Global</span>. 
            All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center space-x-6 text-sm text-gray-400"
          >
            <span>Trusted in 3 countries</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Global Operations</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
