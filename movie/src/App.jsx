import {Route, Routes, BrowserRouter} from 'react-router-dom'
import React from 'react'
import './App.css'
import {Navbar } from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import ComingSoon from './pages/ComingSoon.jsx'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/comingSoon" element={<ComingSoon/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
