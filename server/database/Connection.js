const mongoose = require('mongoose')

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
<<<<<<< HEAD
module.exports = RunServer
=======
module.exports = RunServer
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
