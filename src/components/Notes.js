import React from 'react'

export default function Notes(props) {
    const note=props.note;
  return (
    <div>
         {note.map((ele) => {
          return (
            <div key={ele.id}>
              <h1>{ele.title}</h1>
              <h1>{ele.description}</h1>
              <h1>{ele.tag}</h1>
            </div>
          );
        })}
    </div>
  )
}
