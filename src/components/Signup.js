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
     const response=await fetch(`http://localhost:8080/api/signup`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:name,
        email:email,
        password:password
      })

     })
     const json=await response.json();
     console.log(json)
      setEmail("");
      setName("");
      setPassword("");
    }
  }
  return (
    <>
    <h1 style={{textAlign:'center'}}>Sign-up</h1>
 <div style={{ margin: 100 }}>
    
    <form onSubmit={submitHandle}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      
      <div className="mb-3" style={{marginRight:'20px'}} >
        <input type="submit" className="btn btn-primary btn-lg"></input>
      </div>
     
      
    </form>
  </div>
    </>
   
  );
}
