const mongoose = require('mongoose');

const CrudSchema =new mongoose.Schema({
    title: {
        required: true, type: String,
    }, description: {
        required: true, type: String
    },cover:{
        required:true,
        type:String
    }
})
module.exports = mongoose.model('Crud', CrudSchema)