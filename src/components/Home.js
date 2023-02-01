import React, { useContext } from 'react'
import noteContext from '../context/NoteContext'

export default function Home() {
    const {note}=useContext(noteContext);
    const name=note[0][0].name;
    const age=note[0][0].age;
  return (
    <div>This is the home page {name} and his age is {age}  </div>
  )
}
