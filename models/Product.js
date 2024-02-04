const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    category: {type: String, required: true},
    size: {type: String, required: true},
    color: {type: String, required: true},
    countInStock: {type: Number, required: true},
}, {timestamps: true});
