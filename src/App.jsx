import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import InfrastructureWork from './Pages/ServicePage/InfrastructureWork'
import CivilWork from './Pages/ServicePage/CivilWork'
import SiteSurveys from './Pages/ServicePage/SiteSurveys'
import LosSurveys from './Pages/ServicePage/LosSurveys'
import MaintanenceWork from './Pages/ServicePage/MaintanenceWork'
import ContactPage from './Pages/ContactPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Navigate to = "/home" />} />
        <Route path='/home' element = {<HomePage />} />
        <Route path='/about' element = {<AboutPage />} />
        <Route path='/contact' element = {<ContactPage />} />
        <Route path='/services/infrastructure-work' element = {<InfrastructureWork />} />
        <Route path='/services/civil-work' element = {<CivilWork />} />
        <Route path='/services/site-surveys' element = {<SiteSurveys />} />
        <Route path='/services/losrs-surveys' element = {<LosSurveys />} />
        <Route path='/services/maintanence-work' element = {<MaintanenceWork />} />
      </Routes>
    </>
  )
}

export default App
