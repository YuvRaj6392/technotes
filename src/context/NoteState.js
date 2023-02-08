import { useState } from "react";
import noteContext from "./NoteContext";
import React from 'react'

export default function NoteState(props) {
    const initialNote=[];
    const [note,setNote]=useState(initialNote);

    //calling the api to get all the notes from the user
    const getNotes=async ()=>{
      const response=await fetch(`http://localhost:8080/api/notes`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'x-access-token':localStorage.getItem('token')
        }
      })
      const json=await response.json();
      await setNote(json.message);
      
    }

    //api to upload the notes
    const uploadNotes=async (title,description,tag)=>{
      const obj=await({
        title:title,
        description:description,
        tag:tag
      })
      const response=await fetch(`http://localhost:8080/api/notes`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'x-access-token':localStorage.getItem('token')
      },
      body:JSON.stringify(obj)
    })
    const json=await response.json();
    if(json.success)
    {
      getNotes()
    }
    }
    
  return (
    <noteContext.Provider value={{note,getNotes,uploadNotes}}>
    {props.children}
    </noteContext.Provider>
  )
}
