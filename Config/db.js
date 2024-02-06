const {mongoose} = require('mongoose');
require('dotenv').config();

// let connection;
// try{
//    connection= await mongoose.connect(process.env.MONGO_URI,{})
//         .then(con=>console.log("Connected to MongoDB"))
//         .catch((err)=>console.log(err));
// }catch {
//     console.log("Error while connecting to MongoDB");
// }
const connection=mongoose.connect(process.env.MONGO_URI,{})
    .then(con=>console.log("Connected to MongoDB"))
    .catch((err)=>console.log(err));



module.exports = connection;