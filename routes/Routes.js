const express = require('express');
const router = express.Router();
const CrudBookController = require('../Controller/CrudBookController');

//Routes
router.post('/created', CrudBookController.crudBook);








module.exports = router;

