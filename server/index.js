const express = require('express')
//cors - cross origin register resource
//frontend different port and backend different port
const cors = require('cors')
//helmet-provides security
const helmet = require('helmet')
//morgan- api logger for testing 
const morgan = require('morgan')
const RunServer = require('./database/Connection')
const productRoutes = require('./Routes/productRoutes')
const userRoute = require('./Routes/userRoute')
//<!-- we are importing package called cookie-parser  -->
const cookieParser = require('cookie-parser')
const paymentRoutes = require('./Routes/paymentRoutes')

require('dotenv').config()

const app = express()
const port = 3000

RunServer()

//middlewares
app.use(express.json())
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


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})