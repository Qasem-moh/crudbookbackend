const express = require('express');
const router = express.Router();
const CrudBookController = require('../Controller/CrudBookController');
//Routes
router.get('/', CrudBookController.MainRoute);
module.exports = router;

