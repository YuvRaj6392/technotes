import React, { useContext, useEffect } from "react";
import noteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";
import AddNote from "./AddNote";
export default function Home() {

  const context = useContext(noteContext);
  const { note, getNotes, whoOnline, onlineUsers } = context;

  const history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login");
    } else {
      getNotes();
      onlineUsers();
      
    }
    // eslint-disable-next-line
  }, []);

  
  return (
    <>

    
    <div className="container">
    <h1 style={{textAlign:'center',marginBottom:20}}>NoteHub</h1>
    <AddNote />
    <br /><br />
      {note.map((ele) => {
        return (
          <div key={ele.id}>
            <h1>{ele.title}</h1>
            <h1>{ele.description}</h1>
            <h1>{ele.tag}</h1>
          </div>
        );
      })}
      <br /><br /><br />
      <h1>online users</h1>
      {
        
          whoOnline.map((ele)=>{
            return  (
              <div key={ele.id}>
              <h3>{ele.name}</h3>
              <h3>{ele.isLoggedIn}</h3>

              </div>
            )
          })
        
      }
    </div>
    </>
  );
}
