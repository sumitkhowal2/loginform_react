import React from 'react'

export default function Login() {
  return (
    <div><div className="container">
    <form action="">
        <h1>Login Form</h1>
        <div className="userInput">
        <label>Username</label>
        <input type='text' placeholder='Enter Username'></input>
        </div>
      <div className="passwordInput">
      <label>Password</label>
        <input type='password'placeholder='Enter Password'></input>
      </div>
        <div className="submitBtn">
        <input type='submit'></input>
        <input type='reset' id='reset'></input>
        </div>
    </form>
   </div>
   </div>
  )
}
