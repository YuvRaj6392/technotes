import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const history=useNavigate();
  const logout= async ()=>{
    
    await fetch(`http://localhost:8080/api/logout`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'x-access-token':localStorage.getItem('token')
      }
    })
    await localStorage.clear();
    await history('/login')

    
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Yuv-note</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    
      
      {!localStorage.getItem('token')?

      <form className="d-flex">
      <Link style={{marginRight:10}} className='btn btn-success' to='/login' >Login</Link>  
      <Link className='btn btn-success' to='/signup' >Sign-up</Link>  
      </form>:
      <button onClick={logout} className='btn btn-danger'>Logout</button>
      
      }
     
    
  </div>
</nav>
    </>
  )
}
