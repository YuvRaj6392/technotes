import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const context = useContext(noteContext);
  const { note, getNotes, uploadNotes, whoOnline, onlineUsers } = context;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("General");
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

  const submitForm = (e) => {
    e.preventDefault();
    uploadNotes(title, description, tag);
    setTitle("");
    setDescription("");
    setTag("General");
  };
  return (
    <>

    
    <div className="container">
    <h1 style={{textAlign:'center',marginBottom:20}}>NoteHub</h1>
      <form onSubmit={submitForm}>
      <div className="mb-3">
        <label  className="form-label">
          Title
        </label>
        <input
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
         id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Tag
        </label>
        <input
          className="form-control"
          id="tag"
          value={tag}
          onChange={(e) => {
            setTag(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
          <button disabled={title.length<5 || description.length<5} type="submit" className="btn btn-primary">Upload</button>
      </div>
      </form>

      
<br /><br /><br />
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
