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
require('dotenv').config()


const app = express()
const port = 3000

RunServer()

//middlewares
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))


app.use('/api/v1',productRoutes)
app.use('/api/v1/user', userRoute)


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})