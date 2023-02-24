import React from "react";

export default function Alert(props) {
  return (
    <>
      {
        props.alert && <div className={`alert alert-${props.alert.color}`} role="alert">
       {props.alert.message}
      </div>
      }
    </>
  );
}
