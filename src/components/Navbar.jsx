import React from 'react'


const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 px-6 ">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <img
          src="/logo.png"
          alt="Pristine Global Logo"
          className=" w-auto h-auto"
        />

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-pristine-blue transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pristine-blue transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pristine-blue transition-colors font-medium"
          >
            Locations
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pristine-blue transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pristine-blue transition-colors font-medium"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
