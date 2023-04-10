import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const submitHandle = async (e) => {
    e.preventDefault();
    if (!email || !name || !password) {
      window.scrollTo(0, 0);
      props.alertFunc("Please enter all the fields!",'danger')
    } else if (password.length <= 8) {
      window.scrollTo(0, 0);
      props.alertFunc("Length of the password should be greater than 8",'danger')
      
    } else {
      const response = await fetch(`https://technotes-api.onrender.com/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const json = await response.json();
      if (json.success) {
        setEmail("");
        setName("");
        setPassword("");
        history("/login");
      } else {
        setEmail("");
        setName("");
        setPassword("");
        window.scrollTo(0, 0);
        props.alertFunc(json.message,'success')
      }
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sign-up</h1>
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
              autoComplete='off'
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
              autoComplete='off'
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

          <div className="mb-3" style={{ marginRight: "20px" }}>
            <input type="submit" className="btn btn-primary btn-lg"></input>
          </div>
        </form>
      </div>
    </>
  );
}
