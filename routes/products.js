const express=require('express');
const router=express.Router();
//const app=express();
const Joi=require('Joi');
const products=require('../database/product');

//getting all products
const prodlist=products.productList
router.get('/product',(req,res)=>{

    res.send(prodlist);
});
//getting products of men
router.get('/products/men',(req,res)=>{
    res.send(prodlist.men);
});
//getting products of topwear for men
router.get('/products/men/topwear',(req,res)=>{

    res.send(prodlist.men.topWear);
});
//getting products of men with max id
router.get('/products/men/topwear/:id',(req,res)=>{

   const productId= prodlist.men.topWear.find(p=>p.id===parseInt(req.params.id));
   if(!productId) res.status(404).send(`the id : ${req.params.id} is not found `);
   res.send(productId);
});
//getting products of men by name using query params
router.get('/products/men/clothing/:name',(req,res) =>{

        const productId =  prodlist.men.topWear.find(p => p.name === req.query.filterByName);        
        if(!productId) return res.status(404).send(`product with name = ${req.query.filterByName} is not found`);
        res.send(productId);
  
    });
    // creating a men product By MaxId
router.post('/products/men/clothing', (req,res) => {
    if(!req.body.name || req.body.name.length<4){
        res.status(400).send("Name is required and should contains 5 characters");
    }
   const schema = {
       name : Joi.string().min(4).max(50).required()
   };
  const result =  Joi.validate(req.body,schema);
   if(result.error )  return  res.status(400).send(result.error.details[0].message);
   const productID =prodlist.men.topWear.reduce((accu,curr)=>({id : curr.id}))
   const  maxId=product.id + 1;
   const newProduct = {
       id: maxId,
       name : req.body.name
   }
   prodlist.men.topWear.push(newProduct);
   res.send(newProduct);
});
//updating men products
router.put('/products/men/clothing/:id', (req,res) => {
  
    const productId =  prodlist.men.topWear.find(p => p.id === parseInt(req.params.id));
   if(!productId) return res.status(404).send(`product with id = ${req.params.id} is not found`);
 
   const schema = {
       name : Joi.string().min(3).required()
   };
  const result =  Joi.validate(req.body,schema);
   if(result.error )return res.status(400).send(result.error.details[0].message);
   productId.name = req.body.name;
   res.send(productId);
});
// Deleting men products
router.delete('/products/men/clothing/:id', (req,res) => {
    const productId =  prodlist.men.topWear.find(p => p.id === parseInt(req.params.id));
    if(!productId) return res.status(404).send(`product with id = ${req.params.id} is not found`);
  
    const indexOfProduct = prodlist.men.topWear.indexOf(productId);
    prodlist.men.topWear.splice(indexOfProduct,1);
    res.status(200).send(`deleted the product`);
    res.send();
 });

 //getting products of women
router.get('/products/women',(req,res)=>{
    res.send(prodlist.women);
});
//getting products of topwear for women
router.get('/products/women/bottomwear',(req,res)=>{

    res.send(prodlist.women.bottomWear);
});
//getting products of women with max id
router.get('/products/women/bottomwear/:id',(req,res)=>{

   const productId= prodlist.women.bottomWear.find(p=>p.id===parseInt(req.params.id));
   if(!productId) res.status(404).send(`the id : ${req.params.id} is not found `);
   res.send(productId);
});
 //getting products of womadden by name using query params
router.get('/products/women/bottomwear/:name',(req,res) =>{

        const productId =  prodlist.women.bottomWear.find(p => p.name === req.query.filterByName);        
        if(!productId) return res.status(404).send(`product with name = ${req.query.filterByName} is not found`);
        res.send(productId);
  
    });
    // creating a women product By MaxId
router.post('/products/women/bottomwear', (req,res) => {
    // if(!req.body.name || req.body.name.length<4){
    //     res.status(400).send("Name is required and should contains 5 characters");
    // }
   const schema = {
       name : Joi.string().min(4).max(20).required()
   };
  const result =  Joi.validate(req.body,schema);
   if(result.error )  return  res.status(400).send(result.error.details[0].message);
   const productID =prodlist.women.bottomWear.reduce((accu,curr)=>({id : curr.id}))
   const  maxId=product.id + 1;
   const newProduct = {
       id: maxId,
       name : req.body.name
   }
   prodlist.women.bottomWear.push(newProduct);
   res.send(newProduct);
});
// updating women products
router.put('/products/women/bottomwear/:id', (req,res) => {
  
    const productId =  prodlist.women.bottomWear.find(p => p.id === parseInt(req.params.id));
   if(!productId) return res.status(404).send(`product with id = ${req.params.id} is not found`);
 
   const schema = {
       name : Joi.string().min(3).required()
   };
  const result =  Joi.validate(req.body,schema);
   if(result.error )return res.status(400).send(result.error.details[0].message);
   productId.name = req.body.name;
   res.send(productId);
});
//Deleting women products
router.delete('/products/women/bottomwear/:id', (req,res) => {
    const productId =  prodlist.women.bottomWear.find(p => p.id === parseInt(req.params.id));
    if(!productId) return res.status(404).send(`product with id = ${req.params.id} is not found`);
  
    const indexOfProduct = prodlist.women.bottomWear.indexOf(productId);
    prodlist.women.bottomWear.splice(indexOfProduct,1);
    res.status(200).send(`deleted the product`);
    res.send();
 });


module.exports=router;
