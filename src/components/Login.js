import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const submitHandle = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      window.scrollTo(0, 0);
      props.alertFunc('Fill all the fields!','danger')
    } else {
      const response = await fetch(`https://technotes-api-u0ey.onrender.com/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("id", json.message.id);
        localStorage.setItem("token", json.message.token);
        history("/");
      } else {
        window.scrollTo(0, 0);
        props.alertFunc(json.message,'success')
      }
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login</h1>
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
