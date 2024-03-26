import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import Header from './components/Header/Header'
import "./colors.css";
import "./font-sizes.css";

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<LandingPage/>} exact />
        <Route path='/layout/*' element={<Home/>} exact/>
        <Route path='/sign-in' element={<SignIn />} exact/>
        <Route path='/sign-up' element={<SignUp />} exact />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default App
