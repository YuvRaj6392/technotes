import React, { useContext, useEffect } from 'react'
import noteContext from '../context/NoteContext'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const context=useContext(noteContext);
  const {note,getNotes}=context;
  const history=useNavigate();
  useEffect(()=>{
  
  if(!localStorage.getItem('token'))
  {
    history("/login")
  }
  else
  {
    getNotes();
  }
  },[])
  return (
    <div>
     {note.map((ele)=>{
      return (
        <div key={ele.id}>
        <h1>{ele.title}</h1>
        <h1>{ele.description}</h1>
        </div>
      )
     })}
    </div>
  )
}
