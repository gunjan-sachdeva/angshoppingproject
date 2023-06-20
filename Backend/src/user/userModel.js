var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    id: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    instock: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },


});

module.exports = mongoose.model('mydb', userSchema);