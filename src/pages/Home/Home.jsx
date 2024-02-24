import React from 'react'
import Header from '../../components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Chat from '../Chat/Chat'
import PageNotFound from '../PageNotFound/PageNotFound'
import CustomCalendar from '../Calendar/CustomCalendar'

export default function Home() {
  return (
    <div>
       <Header/>
       <Routes>
        <Route path='/chat' element={<Chat />} exact />
        <Route path='/calendar' element={<CustomCalendar />} exact />
        {/* <Route path="*" element={<PageNotFound />} /> */}
       </Routes>
    </div>
  )
}
