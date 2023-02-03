import React from 'react'
import NoteState from './context/NoteState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Login from './components/Login'
export default function App() {
  return (
    <NoteState>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>
    </NoteState>
  )
}
