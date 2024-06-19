import axios from "axios"
<<<<<<< HEAD
import { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import './ProductDetails.css'
=======
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './productDetails.css'

>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
<<<<<<< HEAD
  const navigate = useNavigate()
=======
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/single/${id}`)
<<<<<<< HEAD
=======
      console.log(response.data.data)
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
      setProduct(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getSingleProduct()
<<<<<<< HEAD
  }, [id])

  const AddToCart = async() => {
    const response = await axios.post('http://localhost:3000/api/v1/addtocart', {
      productId: id,
      quantity: 1
    }, {
      withCredentials: true
    })
    if(response.status === 200) {
      navigate('/cart')
    }
  }
  
=======
  }, [])


>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
  return (
    <div>
      <h1 className="heading-tags">Product Details</h1>
      <div className="productDetails-container">
        <div>
          <img className="product-details-image" src={product.img} alt="product-image" />
        </div>
        <div>
          <h1 className="names" >{product.productName}</h1>
          <h2 className="names">{product.price}</h2>
<<<<<<< HEAD
          <button className="cart" onClick={AddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
    
  )
}
=======
          <button className="cart">Add to cart</button>
        </div>
      </div>

    </div>
  )
}

>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
export default ProductDetails
