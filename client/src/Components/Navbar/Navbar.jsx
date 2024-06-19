import { AiOutlineShoppingCart } from "react-icons/ai"; 
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuthContext } from "../../context/AuthContext";
import axios from 'axios'

const Navbar = () => {
  const {user, setUser} = useAuthContext()
  // logout user and clear local storage and set auth context user to null

  const LogoutUser = async() => {
    const response = await axios.post('http://localhost:3000/api/v1/user/logout')

    if(response.status === 200) {
      localStorage.removeItem('userLogged')
      setUser(null)
      alert('you have been logout out')
    }
  }

  return (
    <nav className='navbar'>
      <h1>Ecommerce</h1>
      <div className="navbar-links">
        {!user ? (
          <>
          <Link className="link" to={'/login'}>Login</Link>
          <Link className="link" to={'/register'}>Register</Link>
          </>
        ): (
          <>
          <Link className="link" to={'/'}>Home</Link>
          
          {/* style the logout button */}
          <button className="btn btn-primary" onClick={LogoutUser}>Logout</button>
          </>
        )}
        <Link className="link" to={'/cart'} ><AiOutlineShoppingCart  style={{"fontSize":"30px"}}/></Link>
      </div>
    </nav>
  )
}

export default Navbar
