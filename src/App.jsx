import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import DevelopersPage from './Pages/DevelopersPage'
import UsersPage from './Pages/UsersPage'
import DeveloperDashboard from './Pages/DevelopersDashboard'
import ForgotPassword from './Components/ForgotPassword'
import ForgotPasswordUser from './Components/ForgotPasswordUser'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Navigate to = "/home" />} />
        <Route path='/home' element = {<HomePage />} />
        <Route path='/developers-auth' element = {<DevelopersPage />} />
        <Route path='/users-auth' element = {<UsersPage />} />
        <Route path='/dashboard' element = {<DeveloperDashboard />} />
        <Route path='/forgot-developer' element = {<ForgotPassword />} />
        <Route path='/forgot-user' element = {<ForgotPasswordUser />} />
      </Routes>
    </>
  )
}

export default App
