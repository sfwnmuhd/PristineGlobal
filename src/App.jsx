import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollProgressIndicator from './components/ScrollProgressIndicator'
import ScrollToTop from './components/ScrollToTop'
import SocialMediaPopup from './components/SocialMediaPopup'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const UK = lazy(() => import('./pages/locations/UK'))
const Qatar = lazy(() => import('./pages/locations/Qatar'))
const India = lazy(() => import('./pages/locations/India'))

const Fallback = () => (
  <div className="pt-24 pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-40 rounded-xl bg-gray-100 animate-pulse mb-6" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-48 rounded-xl bg-gray-100 animate-pulse" />
        <div className="h-48 rounded-xl bg-gray-100 animate-pulse" />
        <div className="h-48 rounded-xl bg-gray-100 animate-pulse" />
      </div>
    </div>
  </div>
)

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className='min-h-screen bg-white overflow-x-hidden max-w-full'>
        <ScrollProgressIndicator />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations/uk" element={<Suspense fallback={<Fallback />}><UK /></Suspense>} />
          <Route path="/locations/qatar" element={<Suspense fallback={<Fallback />}><Qatar /></Suspense>} />
          <Route path="/locations/india" element={<Suspense fallback={<Fallback />}><India /></Suspense>} />
        </Routes>

        {/* Global Floating Elements */}
        <SocialMediaPopup />
      </div>
    </Router>
  )
}

export default App
