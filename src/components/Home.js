import React, { useContext, useEffect } from "react";
import noteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";
import AddNote from "./AddNote";
import WhoOnline from "./WhoOnline";
import Notes from "./Notes";
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
        <h1 style={{ textAlign: "center", marginBottom: 20 }}>NoteHub</h1>
        <AddNote />
        <br />
        <br />
        <br />
        <h1>Your Notes</h1>
        <Notes note={note}/>
        <br />
        <br />
        <br />
        <h1>online users</h1>

        <WhoOnline whoOnline={whoOnline} />
      </div>
    </>
  );
}
