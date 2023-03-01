import React from 'react'
import '../../src/WhoOnline.css'
export default function WhoOnline(props) {
    const whoOnline=props.whoOnline;
  return (
    <div style={{maxHeight:'300px',margin:'20px',overflow:'scroll'}}>
    {
        whoOnline.map((ele)=>{
          if(ele.isLoggedIn==="Online")
          {
            return  (
              <div key={ele.id}>
             <div style={{display:'flex'}}>
              <div className='online' style={{marginTop:'12px',margin:'10px'}}>

              </div>
              <div>
                <h3>{ele.name}</h3>
              </div>
             </div>
              </div>
            )
          }
          else
          {
            return  (
              <div key={ele.id}>
              <div style={{display:'flex'}}>
              <div className='offline' style={{marginTop:'12px',margin:'10px'}}>

              </div>
              <div>
                <h3>{ele.name}</h3>
              </div>
             </div>
              </div>
            )
          }
            
          })
    }
     
    </div>
  )
}
