import React from 'react'
import { Routes, Route } from "react-router-dom";
import BackgroundVideo from './component/Backgroundvideo.jsx'
import Navbar from './component/Navbar.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'

import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Pricing from './pages/Pricing.jsx'
import Gallery from './pages/Gallery.jsx'
function App() {
  return (
    <>
    {/* Background video always behind */}
      <div className="fixed inset-0 -z-10">
        <BackgroundVideo />
      </div>

      {/* Content on top of video */}
      <div className="relative z-50">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </>
  )
}

export default App