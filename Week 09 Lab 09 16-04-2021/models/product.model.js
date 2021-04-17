const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ProductSchema= new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}
},);

module.exports=mongoose.model('Product',ProductSchema);