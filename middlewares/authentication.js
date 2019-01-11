function authenticate(req,res,next){

    console.log('details of authentication');
    next();
};
module.exports=authenticate;