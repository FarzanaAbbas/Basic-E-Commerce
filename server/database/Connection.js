const  mongoose = require('mongoose')

//create funtion to connect to mongodb from express

function RunServer() {
 try {
    mongoose.connect(process.env.MONGO_DB_URL) 
    console.log('mongoose database connected ')
 } catch (error) {
    console.log(error.message)
 }
}
//export the Runserver
module.exports = RunServer