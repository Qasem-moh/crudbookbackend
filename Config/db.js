const mysql = require('mysql');
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"crud"
})
connection.connect((err)=>{
    if(err) return console.log(err);
    console.log("Connected to CRUD!");
});

module.exports = connection;