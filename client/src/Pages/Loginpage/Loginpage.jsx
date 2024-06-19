import { useState } from 'react'
import axios from 'axios'
import './Loginpage.css'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

export default function Loginpage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { setUser } = useAuthContext()

  const LoginUser = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/login', {
        email: email,
        password: password
      }, {
        withCredentials: true
      })
      setUser(response.data.data)
      localStorage.setItem('userLogged', JSON.stringify(response.data.data))
      // Show success message only if the login attempt is successful
      alert('Login successful!')
      navigate('/') //homepage
    } catch (error) {
      // If login fails, show an alert popup message for invalid email
      alert('Invalid email or password. Please try again.')
    }
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
