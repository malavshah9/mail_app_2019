var express=require('express');
var router=express.Router();
var mail=require('../models/mail');
router.get('/',function(req,res,next){
    mail.sendMail(function(){
        if(err){
            res.json(err);
        }
        else{
            res.json("successfully send email");
        }
    });
});
module.exports=router;