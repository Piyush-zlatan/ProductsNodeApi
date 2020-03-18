const express = require('express');
const router  = express.Router();

const ProductConrtoller = require('../controller/api/v1/product');

//Creating the required router to access the controller methods

router.post('/create',ProductConrtoller.create);
router.get('/',ProductConrtoller.showProduct);
router.delete('/:id',ProductConrtoller.deleteProduct);
router.post('/:id/update_quantity/',ProductConrtoller.update);


module.exports = router;