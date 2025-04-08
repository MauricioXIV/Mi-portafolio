import React from 'react'
import Inicio from './pages/Inicio'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"
import LanguageContext from './context/LanguageContext'


function App() {

  return (

    <div className='App'>
      <LanguageContext>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
      </LanguageContext>
    </div>
  )
}

export default App
