import React from 'react'
import Inicio from './pages/Inicio'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import LanguageContext from './context/LanguageContext'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <div className='App min-h-screen'>
      <LanguageContext>
        <BrowserRouter>
          <Navbar />
          <AnimatedRoutes />
        </BrowserRouter>
      </LanguageContext>
    </div>
  )
}

export default App
