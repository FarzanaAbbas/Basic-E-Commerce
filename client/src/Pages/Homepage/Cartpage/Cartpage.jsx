import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import './Cartpage.css'

const CartPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCartItems = async () => {
      const response = await axios.get('http://localhost:3000/api/v1/getusercart', {
        withCredentials: true
      })
      setProducts(response.data.products)
    }
    getCartItems()
  }, [])

  if (!products.length) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Cart Page</h1>
        <h2>Your Cart is empty</h2>
        <Link to="/">Continue Shopping</Link>
      </div>
    )
  }

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51P5lKgSBIUKMLzlmQkc7XcYB5IAVxKL9f2pxXnj0uZy3wGFi6le8KG4rA3jaiIma8GT1tHPOErWWATxTJ3pfilvV00KucCDp6r");

    const body = {
      products
    }

    const headers = {
      "Content-Type": "application/json"
    }
    const response = await fetch("http://localhost:3000/api/v1/payment/create-payment", {
      method: "POST",
      headers: headers,
      credentials: "include",
      body: JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.log(result.error);
    }
  }


  const deleteFromCart = async (productId) => {
    const response = await axios.delete(`http://localhost:3000/api/v1/delete/${productId}`, {
      withCredentials: true
    })
    if (response.data.message === 'Removed from cart') {
      setProducts(products.filter((product) => product.product._id !== productId))
    }
  }
  //setProducts is a function used to update the list of products displayed on the page
  //Inside setProducts, there's a filter method being called on the products array. This method goes through each product in the array and checks a condition.
  //product.product: This inner product object is nested within the outer product item. This kind of nesting might occur if your data structure is designed to encapsulate additional details or related data within a single item.
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart Page</h1>

      {products.map((product) => (
        <div key={product.product._id} style={{ marginBottom: "10px" }}>
          <h2>{product.product.productName}</h2>

          <p><img src={product.product.img} alt="img" /></p>
          <p>Price: ₹{product.product.price}</p>
          <p>Discount: {product.product.discount}</p>

          <button style={{ display: "flex", alignItems: "center" }} onClick={() => deleteFromCart(product.product._id)}><AiOutlineDelete size={20} style={{ marginRight: "5px" }} /> Delete</button>
        </div>
      ))}

      <button className='payment-btn' onClick={makePayment}>Checkout</button>
    </div>
  );
};

export default CartPage;





