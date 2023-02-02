import React from 'react'
import NoteState from './context/NoteState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
export default function App() {
  return (
    <NoteState>
    <Router>
      <Routes>
        <Route exact path='/' element={<Signup />} />
      </Routes>
    </Router>
    </NoteState>
  )
}
