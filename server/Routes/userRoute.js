const express = require('express')
<<<<<<< HEAD
const { Register, Login, Logout } = require('../Controllers/userCtrl')
=======
const { Register, Login } = require('../Controllers/userCtrl')

>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47

const router = express.Router()

router.post('/register', Register)
router.post('/login', Login)
<<<<<<< HEAD
router.post('/logout', Logout)
=======
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47

module.exports = router