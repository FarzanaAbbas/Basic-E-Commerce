<<<<<<< HEAD
// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//     },
//     password: {
//         type: String,
//     }

// })

// const user = mongoose.model('User', userSchema)
// module.exports = user

const mongoose = require('mongoose');
=======
const mongoose = require('mongoose')
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47

const userSchema = new mongoose.Schema({
    username: {
        type: String,
<<<<<<< HEAD
        required: true 
=======
        required: true
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
    },
    email: {
        type: String,
    },
    password: {
        type: String,
<<<<<<< HEAD
    },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] // Reference to Product model
});


const User = mongoose.model('User', userSchema);
module.exports = User;
=======
    }

})

const user = mongoose.model('User', userSchema)
module.exports = user
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
