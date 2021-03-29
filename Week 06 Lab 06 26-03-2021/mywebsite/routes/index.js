var express = require('express');
var router = express.Router();
var product_controller=require('../controllers/product.controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    page: 'Home',
    menuId: 'home' 
  });
});
router.get('/about', function(req, res, next) {
  res.render('about', {
    page: 'About us',
    menuId: 'about' 
  });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    page: 'Contact US',
    menuId: 'contact' 
  });
});

router.get('/products',product_controller.list);
//router.get('/products',product_controller.product_details);
// router.post('/create',product_controller.product_create);
// router.put('/:id/update',product_controller.product_update);
// router.delete('/:id/delete',product_controller.product_delete);

module.exports = router;
