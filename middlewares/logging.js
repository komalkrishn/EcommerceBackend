function logger(req,res,next){

    console.log('details of logging');
    next();
};
module.exports=logger;