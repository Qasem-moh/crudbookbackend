const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5452;
const router = require('./routes/Routes');
const DB=require('./Config/db')
//config & use
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)
app.use(bodyParser.json());




app.listen(PORT, () => console.log(`Listening on port ${PORT}`));