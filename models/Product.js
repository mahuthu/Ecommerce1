const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    category: {type:Array },
    size: {type: String },
    color: {type: String },
    countInStock: {type: Number},
}, {timestamps: true});
