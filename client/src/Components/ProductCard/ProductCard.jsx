<<<<<<< HEAD
/* eslint-disable react/prop-types */
=======
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ productid, name, price, img }) => {
<<<<<<< HEAD
  
=======

>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
  return (
    <Link to={`/product/${productid}`} className="productCard">
      <div>
        <img className='prdct-img' src={img} alt="product" />

      </div>
      <div>
        <h1>{name}</h1>
        <h3>₹ {price}</h3>
      </div>
<<<<<<< HEAD
      <div>Add to cart</div>
=======
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
    </Link>
  )
}

export default ProductCard
