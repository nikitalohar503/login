import React, { useState } from 'react'
import './Login.css'
import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import pass_icon from './Assets/password.png'

const Login = () => {
               
    const [action,setAction]=useState("Sign Up")

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
      {action==="Login"?<div></div> : <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' />
        </div>}
        

        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email"  placeholder='Email'/>
        </div>

        <div className="input">
            <img src={pass_icon} alt="" />
            <input type="password" placeholder='Password' />
        </div>
      </div>
      {action==="Sign Up"?<div></div> :  <div className="forgotpass">
        Lost Password ? <span>Click here</span>
      </div>}

    

      <div className="submitcontainer">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
      
    </div>
  )
}

export default Login
