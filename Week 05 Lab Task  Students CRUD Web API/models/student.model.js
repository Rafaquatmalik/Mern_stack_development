const mongoose = require('mongoose');
const Schema =mongoose.Schema;

let StudentSchema = new Schema({
     name:{type: String, required: true, max: 100},
     gender:{type: String, required: true, max: 10},
     city:{type: String, required: true, max:  100},
     age:{type: Number, required: true}
});

module.exports=mongoose.model('Student',StudentSchema);