const mongoose = require('mongoose');       // Importing Mongoose to create schema for the database

const ProductSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    }
},
{timestamps:true});

// Exporting Schema and telling database to create a model for this schema
const Products = mongoose.model('Products',ProductSchema);
module.exports = Products;