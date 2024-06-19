const express = require('express')
//cors - cross origin register resource
//frontend different port and backend different port
const cors = require('cors')
//helmet-provides security
const helmet = require('helmet')
<<<<<<< HEAD
//morgan- api logger for testing 
=======
//morgan- api logger for testing
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
const morgan = require('morgan')
const RunServer = require('./database/Connection')
const productRoutes = require('./Routes/productRoutes')
const userRoute = require('./Routes/userRoute')
<<<<<<< HEAD
//<!-- we are importing package called cookie-parser  -->
const cookieParser = require('cookie-parser')
const paymentRoutes = require('./Routes/paymentRoutes')

require('dotenv').config()

=======
require('dotenv').config()


>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
const app = express()
const port = 3000

RunServer()

//middlewares
app.use(express.json())
<<<<<<< HEAD
app.use(helmet()) 
app.use(cors({
    // <!-- we are allowing cross origin resource sharing  -->
    origin: 'http://localhost:5173',
    //  <!-- this line will allow frontend to send cookies to backend  -->
    credentials: true
}))
app.use(morgan('dev'))
//<!-- we are using the cookie parser middleware here  -->
app.use(cookieParser())


app.use('/api/v1',productRoutes)
app.use('/api/v1/user', userRoute) 
app.use('/api/v1/payment', paymentRoutes);
=======
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))


app.use('/api/v1',productRoutes)
app.use('/api/v1/user', userRoute)
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})