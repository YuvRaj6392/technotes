import { useContext } from "react";
import noteContext from "../context/NoteContext";


export default function Notes(props) {
  const context=useContext(noteContext)
  const {editNotes, deleteNote}=context;
  const note = props.note;
  const editFunc=(ele)=>{
    alert(ele._id)
  }
  const deleteFunc=(id)=>{
    deleteNote(id)
  }
  return (
    <>
      <div style={{ display: "flex", flexWrap:'wrap',justifyContent:'space-between',marginTop:30}}>
        {note.map((ele) => {
          return (
            <div class="card" key={ele._id} style={{marginBottom:30,maxHeight:350,maxWidth:350,minHeight:350,minWidth:350,overflow:'scroll'}}>
              <h5 class="card-header" >{ele.title}
              <i class="fa-solid fa-pen-to-square ms-5" onClick={()=>editFunc(ele)}></i>
              <i class="fa-solid fa-trash ms-5" onClick={()=>deleteFunc(ele._id)}></i></h5>
              <div class="card-body">
                <p class="card-text">{ele.description}</p>
                <hr />
                <p class="card-text">{ele.tag}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
