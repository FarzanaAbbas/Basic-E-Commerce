const express = require('express')
const { getAllProducts, CreateProduct, singleProduct } = require('../Controllers/productCtrl')
<<<<<<< HEAD
const { addtoCart, getUserCart, deleteFromCart } = require('../Controllers/cartCtrl')
const AuthMiddleware  = require('../middleware/AuthMiddleware')
=======
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47

const router = express.Router()

router.post('/create', CreateProduct)
router.get('/all', getAllProducts)
router.get('/single/:id', singleProduct)

<<<<<<< HEAD
// add to cart route api
router.post('/addtocart', AuthMiddleware, addtoCart)

// get user cart route api
router.get('/getusercart', AuthMiddleware, getUserCart)

router.delete('/delete/:productId', AuthMiddleware, deleteFromCart)
=======
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47

module.exports = router
