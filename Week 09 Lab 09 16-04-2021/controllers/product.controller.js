const mongoose = require('mongoose');
const Product = require('../models/product.model');

exports.product_list = (req, res) => {
    Product.find((err, products) => {
        
        res.render('list', {
            page: 'Show All Products',
            menuId: 'list',
            product: products
        });
    });
}

exports.product_updateform=(req, res)=>{
    Product.findById(req.params.id,(err, product)=>{
        if(err) return next(err);
        res.render('updateform',{
            page: 'Update Product',
            menuId: 'updateform',
            product:product
        })
    });
}

exports.product_update=(req, res)=>{
    Product.findByIdAndUpdate(req.params.id,{$set: req.body},(err, product)=>{
         if(err) return next(err);
         res.redirect('/products/list');
    });
}

exports.product_delete=(req, res)=>{
    Product.findByIdAndRemove(req.params.id,(err, product)=>{
        if(err) return next();
        res.redirect('/products/list');
    });
}

exports.product_createform=(req, res)=>{
    res.render('createform', {
        page: 'New Product',
        menuId: 'createform'
    });
}

exports.product_create=(req, res)=>{
    let product= new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save(err=>{
       if(err) return next(err);
       res.redirect('/products/list');
    });
}

