const mongoose = require('mongoose')

<<<<<<< HEAD
=======

>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
<<<<<<< HEAD
        type: Number
    },
    discount: {
        type: Number
    },
    outOfStock: {
        type: Boolean
=======
        type: Number,
    },
    discount: {
        type: Number,
    },
    outOfStock: {
        type: Boolean,
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
    },
    img: {
        type: String
    }
<<<<<<< HEAD
}, { timestamps: true }) //automatically manages when document is created or updated.
=======
}, { timestamps: true })
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47

const product = mongoose.model('Product', productSchema)
module.exports = product