import { AiOutlineShoppingCart } from "react-icons/ai"; 
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Ecommerce</h1>
      <div className="navbar-links">
        <Link className="link"  to ={'/login'}>Login</Link>
        <Link className="link"  to ={'/register'}>Register</Link>
<AiOutlineShoppingCart style={{"fontSize":"30px"}}    className="link" />
      </div>
    </nav>
  )
}

export default Navbar
