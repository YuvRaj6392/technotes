import { useState } from "react";
import noteContext from "./NoteContext";
import React from 'react'

export default function NoteState(props) {
    const initialNote=[{
        name:"yuvraj",
        age:23
    }];
    const note=useState(initialNote)
  return (
    <noteContext.Provider value={{note}}>
    {props.children}
    </noteContext.Provider>
  )
}
