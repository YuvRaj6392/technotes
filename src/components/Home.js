import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../context/NoteContext'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const context=useContext(noteContext);
  const {note,getNotes,uploadNotes}=context;
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [tag,setTag]=useState("");
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
  // eslint-disable-next-line
  },[])

  const submitForm=(e)=>{
    e.preventDefault();
    uploadNotes(title,description,tag)
    setTitle("");
    setDescription("");
    setTag("")
  }
  return (
    <div>
    <form onSubmit={submitForm}>
     <input id='title' value={title} onChange={(e)=>{
      setTitle(e.target.value)
     }} />
     <br />
     <input id='description' value={description} onChange={(e)=>{
      setDescription(e.target.value)
     }} />
     <br />
     <input id='tag' value={tag} onChange={(e)=>{
      setTag(e.target.value)
     }} />
     <br />
     <button type='submit'>submit</button>
     </form>
     {note.map((ele)=>{
      return (
        <div key={ele.id}>
        <h1>{ele.title}</h1>
        <h1>{ele.description}</h1>
        <h1>{ele.tag}</h1>
        </div>
      )
     })}
     
    </div>
  )
}
