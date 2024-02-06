const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name: {
        required: true, type: String,
    }, description: {
        required: true, type: String
    },cover:{
        required:true,
        type:String
    }
})
module.exports = mongoose.model('Crud', Schema)