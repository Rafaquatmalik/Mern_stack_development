var express = require('express');
const product_controller=require('../controllers/product.controller');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home',menuId: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { page: 'About US',menuId: 'about' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { page: 'CONTACT',menuId: 'contact' });
});
//This route will show all products
router.get('/list',product_controller.product_list);
//This route will show update form
router.get('/createform', product_controller.product_formcreate);
//This route will perfrom insert operation
router.post('/create',product_controller.product_create);
//This route will perfrom delete operation
router.post('/:id/delete',product_controller.product_delete);
//This will show update form
router.post('/updateform/:id',product_controller.product_updateform);
//This will perform update operation
router.post('/:id/update',product_controller.product_update);

module.exports = router;
