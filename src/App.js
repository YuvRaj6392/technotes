import React, { useState } from "react";
import NoteState from "./context/NoteState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Alert from "./components/Alert";
export default function App() {
  const [alert,setAlert]=useState("")
  const alertFunc=(message,color)=>{
    setAlert({
      message:message,
      color:color
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
    
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Home alertFunc={alertFunc} />} />
          <Route exact path="/signup" element={<Signup alertFunc={alertFunc} />} />
          <Route exact path="/login" element={<Login alertFunc={alertFunc} />} />
        </Routes>
      </Router>
    </NoteState>
    </>
    
  );
}
