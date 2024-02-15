import React, { useState } from 'react'
import axios from 'axios'
import './Loginpage.css'
import { useNavigate } from 'react-router-dom'

export default function Loginpage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") //useState is shortcut for function
  const navigate = useNavigate()

  const LoginUser = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:3000/api/v1/user/login', {
      email: email,
      password: password
    })
    console.log(response.data.data)
    localStorage.setItem('userLogged', JSON.stringify(response.data.data)) // localstorage is used to store the user ID
    navigate('/')
  }

  return (
    <div className='container'>
      <form className='form'>
        <h3 className='heading-tags'>LOGIN</h3>
        <label style={{ color: "#481a70" }}>Email:</label>
        <input type="email" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />
        <label style={{ color: "#481a70" }} >Password:</label>
        <input type="Password" placeholder='enter your password ' onChange={(e) => setPassword(e.target.value)} />
        <button className='button' onClick={LoginUser} type="submit">LOGIN</button>
      </form>
    </div>
  )
}
