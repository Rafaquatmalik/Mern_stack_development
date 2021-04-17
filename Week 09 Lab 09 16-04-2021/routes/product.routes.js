const express=require('express');
const router=express.Router();

const product_controller=require('../controllers/product.controller');

router.get('/list', product_controller.product_list);
router.get('/createform', product_controller.product_createform);
router.post('/create', product_controller.product_create);
router.post('/:id/delete', product_controller.product_delete);
router.post('/updateform/:id', product_controller.product_updateform);
router.post('/:id/update',product_controller.product_update);
module.exports=router;