const express = require('express');
const app = express();
const PORT = process.env.PORT || 5452;
const router = require('./routes/Routes');
const DB=require('./Config/db')
//config & use
app.use(express.json())
app.use(router)





app.listen(PORT, () => console.log(`Listening on port ${PORT}`));