import React from "react";
import { useContext, useState } from "react";
import noteContext from "../context/NoteContext";

export default function AddNote() {
  const context = useContext(noteContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("General");
  const { uploadNotes } = context;

  const submitForm = (e) => {
    e.preventDefault();
    uploadNotes(title, description, tag);
    setTitle("");
    setDescription("");
    setTag("General");
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label className="form-label">Title</label>
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
          <label className="form-label">Description</label>
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
          <label className="form-label">Tag</label>
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
          <button
            disabled={title.length < 5 || description.length < 5}
            type="submit"
            className="btn btn-primary"
          >
            Upload
          </button>
        </div>
      </form>
    </>
  );
}
