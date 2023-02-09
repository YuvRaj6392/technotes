import { useState } from "react";
import noteContext from "./NoteContext";
import React from 'react'

export default function NoteState(props) {
    const initialNote=[];
    const [note,setNote]=useState(initialNote);
    const [whoOnline,setWhoOnline]=useState([]);

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

    //api to see the list of online users
    const onlineUsers=async ()=>{
      const response = await fetch(`http://localhost:8080/api/usersOnline`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'x-access-token':localStorage.getItem('token')
        }
      })
      const json=await response.json();
      await console.log(json.message)
      await setWhoOnline(json.message)
      
    }
    
  return (
    <noteContext.Provider value={{note,whoOnline,getNotes,uploadNotes,onlineUsers}}>
    {props.children}
    </noteContext.Provider>
  )
}
