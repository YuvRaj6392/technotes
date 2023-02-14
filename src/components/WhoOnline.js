import React from 'react'

export default function WhoOnline(props) {
    const whoOnline=props.whoOnline;
  return (
    <div>
    {
        whoOnline.map((ele)=>{
            return  (
              <div key={ele.id}>
              <h3>{ele.name}</h3>
              <h3>{ele.isLoggedIn}</h3>

              </div>
            )
          })
    }
     
    </div>
  )
}
