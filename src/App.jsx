import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollProgressIndicator from './components/ScrollProgressIndicator'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-white'>
        <ScrollProgressIndicator />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
