const express = require('express');
const router = express.Router();
const CrudBookController = require('../Controller/CrudBookController');

//Routes
router.post('/created', CrudBookController.createnewCrudBook);
router.get('/getallcrudbooks', CrudBookController.getAllCrud);
router.get('/getcrudbyid/:id', CrudBookController.getOneCrudByID);








module.exports = router;

