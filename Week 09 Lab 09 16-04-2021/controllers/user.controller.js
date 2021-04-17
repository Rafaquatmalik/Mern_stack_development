const mongoose =require('mongoose');
const User = require('../models/user.model');
exports.fetchloginform=(req, res)=>{
  res.render('login',{
      page:'Login',
      menuId:'login'
  });
}

exports.logincheck=(req, res)=>{
    const{username, password}= req.body;
    try{
        User.findOne({username: username, password:password},(err,user)=>{
                if(user===null){
                    res.end('User does not exist');
                }else if(user.username === username && user.password === password){
                    req.session.username=username;
                    res.render('dashboard', {
                        page: 'Dashboard',
                        menuId: 'dashboard',
                        session:req.session
                    });
                }else{
                    res.end('Wrong Credentials provided');
                }
        });
    }catch(err){
        res.send(err);
    }
}

exports.logout=(req, res)=>{
    req.session.destroy((err)=>{
        if(err){ 
            return console.log(err);
        }
        else{
        console.log("Destroying session");
        }
        res.redirect('/users/login')
    });

}
exports.redirectLogin=(req, res, next)=>{
 if(!req.session.username){
     res.redirect('/users/login');
 }else{
     next();
 }
}
exports.dashboard=(req, res)=>{
  res.render('dashboard',{
      page: 'Dashboard',
      menuId: 'dashboard',
      session: req.session
  });
}