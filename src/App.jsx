import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<LandingPage/>} exact />
        <Route path='/layout/*' element={<Home/>} exact/>
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default App
