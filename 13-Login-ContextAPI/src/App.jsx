import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Navbar from './pages/Navbar'
import Login from './pages/Login'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/login' element={<Login/>} />
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
