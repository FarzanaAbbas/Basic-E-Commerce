import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({productid,name,price,img}) => {
   
  return (
    <Link to={`/product/${productid}`} className="productCard">
      <div>
<img className='prdct-img' src={img} alt="product" />
    {/* <img className='prdct-img' src="/images/model-02.jpg" alt="img" />
    <img className='prdct-img' src="/images/model-03.jpg" alt="img" />
    <img className='prdct-img' src="/images/model-04.jpg" alt="img" /> */}
    </div>
    <div>
      <h1>{name}</h1>
      <h3>{price} Rs</h3>
      {/* <h5></h5> */}
    </div>
    </Link>
  )
}

export default ProductCard
