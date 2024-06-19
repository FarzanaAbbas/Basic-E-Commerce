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

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true 
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] // Reference to Product model
});


const User = mongoose.model('User', userSchema);
module.exports = User;
