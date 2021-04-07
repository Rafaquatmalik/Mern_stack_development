const Product=require('../models/product.model');

//Insert Operation Function
exports.product_create=(req, res)=>{
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save((err)=>{
        if(err) {
            return next(err);
        }
        res.redirect('/list');
    });
}
//Insert Form Function
exports.product_formcreate=(req, res)=>{
    res.render('createform', {
        page: 'New Product',
        menuId: 'createform'
    });
}

//List Function
exports.product_list=(req, res)=>{
    Product.find((err, product)=>{
            if(err) return next(err);
            res.render('list',{
                page: 'List all products',
                menuId: 'list',
                product:product
            });

    });
}

//Delete Operation Function
exports.product_delete=(req, res)=>{
    Product.findByIdAndRemove(req.params.id,(err)=>{
        if(err) return next(err);
        res.redirect('/list');
    });
}

//Update form function will call upade form view
exports.product_updateform=(req, res)=>{
    Product.findById(req.params.id,(err, product)=>{
        if(err) return next(err);
        res.render('updateform',{
            page: 'Update Product',
            menuId: 'updateform',
            product: product
        });
    })
}
//update operation function
exports.product_update=(req, res)=>{
    Product.findByIdAndUpdate(req.params.id, { $set: req.body },(err, product)=>{
        if(err) return next(err);
        res.redirect('/list');
    });
}

