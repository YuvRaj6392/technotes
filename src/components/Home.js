import React, { useContext, useEffect } from "react";
import noteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";
import AddNote from "./AddNote";
import WhoOnline from "./WhoOnline";
import Notes from "./Notes";
import Alert from "./Alert";
export default function Home(props) {
  const context = useContext(noteContext);
  const { note, getNotes, whoOnline, onlineUsers } = context;
  const {alertFunc}=props
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
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      onlineUsers();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: 20 }}>NoteHub</h1>
        <AddNote alertFunc={alertFunc} />
        <br />
        <br />
        <br />
        <h1>Your Notes</h1>
        <Notes note={note} alertFunc={alertFunc}/>
        <br />
        <br />
        <br />
        <h1>Global online users</h1>

        <WhoOnline whoOnline={whoOnline} alertFunc={alertFunc} />
      </div>
    </>
  );
}
