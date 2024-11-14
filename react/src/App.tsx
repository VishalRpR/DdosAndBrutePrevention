import { Turnstile } from '@marsidev/react-turnstile'
import './App.css'
import { useState } from 'react'
import axios from 'axios';

function App() {
 
  const [token,setToken]=useState("");
  return (
    <>
      <input placeholder='OTP'></input>
      <input placeholder='New password'></input>

      <Turnstile onSuccess={(token) => {
        setToken(token)
      }} siteKey='0x4AAAAAAAz_4YNRGmd9BgJo' />

      <button onClick={() => {
        axios.post("http://localhost:3000/reset-password", {
          email: "vishal@gmail.com",
          otp: "123",
          token: token,
        })
      }}>Update password</button>
    </>
  )
}

export default App
