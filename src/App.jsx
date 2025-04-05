import React from 'react'
import Inicio from './pages/Inicio'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"


function App() {

  return (

    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
