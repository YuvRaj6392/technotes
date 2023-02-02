import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const submitHandle=async(e)=>{
    e.preventDefault();
    if(!email || !name || !password)
    {
      alert("Please enter all the fields!")
    }
    else if(password.length<=8)
    {
      alert("Length of the password should be greater than 8")
      setEmail("");
      setName("");
      setPassword("");
    }
    else 
    {
      alert('hooray')
      setEmail("");
      setName("");
      setPassword("");
    }
  }
  return (
    <div style={{ margin: 200 }}>
      <form onSubmit={submitHandle}>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            class="form-control"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div class="mb-3">
          <input type="submit" class="btn btn-primary btn-lg"></input>
        </div>
      </form>
    </div>
  );
}
