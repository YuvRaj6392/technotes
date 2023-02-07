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
    
  return (
    <noteContext.Provider value={{note,getNotes}}>
    {props.children}
    </noteContext.Provider>
  )
}
