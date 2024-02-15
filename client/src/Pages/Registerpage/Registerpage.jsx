import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Registerpage() {
  const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")  //useState is shortcut for function
    const navigate = useNavigate()

    const RegisterUser = async(e) => {
      e.preventDefault()
        const response = await axios.post('http://localhost:3000/api/v1/user/register', {
         email:email,
         password:password,
         username:username
        })
        console.log(response)
        // navigate('/')
    }

    return (  
    <div className='container'>
          <form className='form'>
            <h3 className='heading-tags'>REGISTER</h3>
            <label >Username:</label>
            <input type="text" placeholder='enter your name' onChange={(e) => setUsername(e.target.value)}/>
          <label >Email:</label>
            <input type="email" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)}/>
          <label >Password:</label>
            <input type="Password" placeholder='enter your password' onChange={(e) => setPassword(e.target.value)}/>
            <button className='button' onClick={RegisterUser} type="submit">REGISTER</button>
        </form>
    </div>
  )
}
