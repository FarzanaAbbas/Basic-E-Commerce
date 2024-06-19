import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import './Registerpage.css'

export default function Registerpage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")  //useState is shortcut for function
  const navigate = useNavigate()

  const RegisterUser = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:3000/api/v1/user/register', {
      email: email,
      password: password,
      username: username
    })
    console.log(response)
    navigate('/login')
  }

  return (
    <div className='container'>
      <form className='form'>
        <h3 className='heading-tags'>REGISTER</h3>
        <label style={{ color: "#481a70" }}>Username:</label>
        <input type="text" placeholder='enter your name' onChange={(e) => setUsername(e.target.value)} />
        <label style={{ color: "#481a70" }} >Email:</label>
        <input type="email" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />
        <label style={{ color: "#481a70" }} >Password:</label>
        <input type="Password" placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} />
        <button className="button" onClick={RegisterUser} type="submit">REGISTER</button>
      </form>
    </div>
  )
}
