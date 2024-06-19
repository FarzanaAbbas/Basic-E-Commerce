<<<<<<< HEAD
import { useEffect, useState } from "react"
=======
import React, { useEffect, useState } from "react"
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
import ProductCard from "../ProductCard/ProductCard"
import './PopularProducts.css'
import axios from 'axios'

<<<<<<< HEAD
=======

>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
const Popularproducts = () => {
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/all')
      console.log(response.data.data)
      setProducts(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllProducts()
  }, [])

<<<<<<< HEAD
=======

>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
  return (
    <div>
      <h1 className="heading-tags"> Popular Products</h1>
      <div className="popularproducts">
        {products.map((product) => {
<<<<<<< HEAD
          // fixed key issue here -> user.id to user_id
          return (
            <ProductCard productid={product._id} name={product.productName} img={product.img} price={product.price} key={product._id} />
=======
          return (
            <ProductCard productid={product._id} name={product.productName} img={product.img} price={product.price} key={product.id} />
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
          )
        })}
      </div>
    </div>
  )
}
export default Popularproducts
