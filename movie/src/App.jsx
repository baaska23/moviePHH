import {Route, Routes, BrowserRouter} from 'react-router-dom'
import React from 'react'
import './App.css'
import {Navbar } from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import BookTicket from './pages/BookTicket.jsx'
import SelectSeat from './pages/SelectSeat.jsx'
import Payment from './pages/Payment.jsx'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/comingSoon" element={<ComingSoon/>}/>
        <Route path='/bookTicket' element={<BookTicket/>}/>
        <Route path='/selectSeat' element={<SelectSeat/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
