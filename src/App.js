import React from 'react'
import NoteState from './context/NoteState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
export default function App() {
  return (
    <NoteState>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
    </NoteState>
  )
}
