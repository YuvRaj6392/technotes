import { useContext, useState } from "react";
import noteContext from "../context/NoteContext";
import { useRef } from "react";

export default function Notes(props) {
  const context = useContext(noteContext);
  const { editNotes, deleteNote } = context;
  const note = props.note;
  const [noteIdEdit, setNoteIdEdit] = useState("");
  const [titleEdit, setTitleEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [tagEdit, setTagEdit] = useState("");
  const ref = useRef(null);
  const refClose=useRef(null)

  const editFunc = (ele) => {
    ref.current.click();
    setNoteIdEdit(ele._id);
    setTitleEdit(ele.title);
    setDescriptionEdit(ele.description);
    setTagEdit(ele.tag);
  };

  const deleteFunc = (id) => {
    
     deleteNote(id);
  };

const successfullEdit=()=>{
editNotes(noteIdEdit,titleEdit,descriptionEdit,tagEdit)
refClose.current.click();
}
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:"space-evenly",
          marginTop: 30,
        }}
      >
        {note.map((ele) => {
          return (
            <div
              className="card"
              key={ele._id}
              style={{
                marginBottom: 30,
                maxHeight: 350,
                maxWidth: 350,
                minHeight: 350,
                minWidth: 350,
                overflow: "scroll",
              }}
            >
              <h5 className="card-header">
                {ele.title}
                <i
                  className="fa-solid fa-pen-to-square ms-2"
                  onClick={() => editFunc(ele)}
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="fa-solid fa-trash ms-3"
                  onClick={() => deleteFunc(ele._id)}
                  style={{ cursor: "pointer" }}
                ></i>
              </h5>
              <div className="card-body">
                <p className="card-text">{ele.description}</p>
                <hr />
                <p className="card-text">{ele.tag}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* modal starts here */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>

      <div className="modal" id="editModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Notes</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    className="form-control"
                    id="titleEdit"
                    value={titleEdit}
                    onChange={(e) => setTitleEdit(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="descriptionEdit"
                    value={descriptionEdit}
                    rows="7"
                    onChange={(e)=>setDescriptionEdit(e.target.value)}
                    
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Tag</label>
                  <input
                    className="form-control"
                    id="tagEdit"
                    value={tagEdit}
                    onChange={(e)=>setTagEdit(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button disabled={titleEdit.length<5 || descriptionEdit.length<5} type="button" className="btn btn-primary" onClick={successfullEdit}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
