const Product = require('../models/product.model');

exports.product_create = (req, res) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save((err) => {
        if (err) return next(err);
        res.redirect('/products/list');
    });
}

exports.product_details = (req, res) => {
    Product.findById(req.body._id, (err, product) => {
        if(err) return (err);
        res.render('view_1_form',{
            page: 'Retrieved',
            menuId:'retrieveform',
            product: product
        });
        
    });
}

exports.product_update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, product) => {
        if (err) return next(err);
        res.redirect('/products/list');
    });
}

exports.product_delete = (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err) => {
        if (err) return next(err);
        res.redirect("/products/list");
    });
}
//controller to view all records
exports.product_list = (req, res) => {
    Product.find((err, product) => {
        if (!err) {
            res.render('list', {
                page: 'Product List',
                menuId: 'list',
                product: product
            });
        }
        else {
            console.log('Error in retrieving products:' + JSON.stringify(err, undefined, 2));
        }
    });
}
//controller to render form to add a new product
exports.product_createform=(req, res)=>{
    res.render('create_form',{
        page: 'New Product',
        menuId: 'createform'
    });
}

exports.product_updateform=(req, res)=>{
    Product.findById(req.params.id,(err, product)=> {
        if(err) return next(err);
        res.render('update_form',{
            page: 'Update Product',
            menuId:'updateform',
            product: product
        });
    });
}

exports.product_searchform=(req, res)=>{
    res.render('search',{
        page: 'Search',
        menuId: 'searchform'
    });
}