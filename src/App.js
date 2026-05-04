import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { AboutPage, ContactPage, ServicesPage } from './Pages/Temp'
import { Navbar } from './Pages/NavBar'
import { Footer } from './Pages/Footer'

const App = () => {
  return (
    <Router>
      <div className='flex justify-center w-full'>
      <Navbar />
      </div>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />

    </Router>
  )
}

export default App