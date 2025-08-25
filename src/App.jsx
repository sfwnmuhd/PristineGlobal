import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollProgressIndicator from './components/ScrollProgressIndicator'
import ScrollToTop from './components/ScrollToTop'
import SocialMediaPopup from './components/SocialMediaPopup'
import Home from './pages/Home'
import About from './pages/About'
import UK from './pages/locations/UK'
import Qatar from './pages/locations/Qatar'
import India from './pages/locations/India'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className='min-h-screen bg-white'>
        <ScrollProgressIndicator />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations/uk" element={<UK />} />
          <Route path="/locations/qatar" element={<Qatar />} />
          <Route path="/locations/india" element={<India />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
