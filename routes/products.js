// const express=require('express');
// const router=express.Router();
// //const app=express();
// const Joi=require('Joi');
// //const Products=require('../database/product');

// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/details')
//          .then(()=>console.log('connecting to mongo db'))
//           .catch((err)=>console.log('error while connecting',err));

//           const productschema=new mongoose.Schema({

//             name:String,
//             cost:Number,
//           })
          
//         const Product=mongoose.model('device',productschema);
        

// //getting all products
// //const prodlist=products.productList
// // router.get('/product',(req,res)=>{

// //     res.send(prodlist);
// //});
// //getting products of men
// // router.get('/products/men',(req,res)=>{
// //     res.send(prodlist.men);
// // });
// //getting products of topwear for men
// // router.get('/products/men/topwear',(req,res)=>{

// //     res.send(prodlist.men.topWear);
// // });
// //getting products of men with max id
// // router.get('/products/men/topwear/:id',(req,res)=>{

// //    const productId= prodlist.men.topWear.find(p=>p.id===parseInt(req.params.id));
// //    if(!productId) res.status(404).send(`the id : ${req.params.id} is not found `);
// //    res.send(productId);
// // });
// // //getting products of men by name using query params
// // router.get('/products/men/clothing/:name',(req,res) =>{

// //         const productId =  prodlist.men.topWear.find(p => p.name === req.query.filterByName);        
// //         if(!productId) return res.status(404).send(`product with name = ${req.query.filterByName} is not found`);
// //         res.send(productId);
  
// //     });
//     // creating a men product By MaxId
// router.post('/devices', (req,res) => {
//     if(!req.body.name || req.body.name.length<4){
//         res.status(400).send("Name is required and should contains 5 characters");
//     }
//    const schema = {
//        name : Joi.string().min(4).max(50).required(),
//        cost:Joi.number().required(),
//    };
//   const result =  Joi.validate(req.body,schema);
//    if(result.error )  return  res.status(400).send(result.error.details[0].message);
   
//    const products = new Product({
//     name : req.body.name,
//     cost:req.body.cost

//    }) 
     
   

// //    const products=new Product({
// //     name:'apple',
// //     cost:50000,
// // })

// products.save()
//          .then((result)=>console.log('connecting',result))
//          .catch((err)=>console.log('failed',err))



//   // prodlist.men.topWear.push(newProduct);
//    res.send(products);
// });
// //updating men products
// router.put('/device/:id', (req,res) => {
  
//     const productId =  prodlist.men.topWear.find(p => p.id === parseInt(req.params.id));
//     async function updatedProduct(id){
//         const product= await Products.findByIdAndUpdate({_id:id},{
//             $set:{
//                 name:"samsung",
//             }
//         },{new:true})
//         console.log(product)

//     }
//      updatedProduct('5c4f69a5908fe3349c0c26cd');
    
//    if(!productId) return res.status(404).send(`product with id = ${req.params.id} is not found`);
 
//    const schema = {
//        name : Joi.string().min(3).required()
//    };
//   const result =  Joi.validate(req.body,schema);
//    if(result.error )return res.status(400).send(result.error.details[0].message);
//    productId.name = req.body.name;
//    res.send(product);
// });
// // Deleting men products
// router.delete('/products/men/clothing/:id', (req,res) => {
//     const productId =  prodlist.men.topWear.find(p => p.id === parseInt(req.params.id));
//     if(!productId) return res.status(404).send(`product with id = ${req.params.id} is not found`);
  
//     const indexOfProduct = prodlist.men.topWear.indexOf(productId);
//     prodlist.men.topWear.splice(indexOfProduct,1);
//     res.status(200).send(`deleted the product`);
//     res.send();
//  });

//  //getting products of women
// router.get('/products/women',(req,res)=>{
//     res.send(prodlist.women);
// });
// //getting products of topwear for women
// router.get('/products/women/bottomwear',(req,res)=>{

//     res.send(prodlist.women.bottomWear);
// });
// //getting products of women with max id
// router.get('/products/women/bottomwear/:id',(req,res)=>{

//    const productId= prodlist.women.bottomWear.find(p=>p.id===parseInt(req.params.id));
//    if(!productId) res.status(404).send(`the id : ${req.params.id} is not found `);
//    res.send(productId);
// });
//  //getting products of womadden by name using query params
// router.get('/products/women/bottomwear/:name',(req,res) =>{

//         const productId =  prodlist.women.bottomWear.find(p => p.name === req.query.filterByName);        
//         if(!productId) return res.status(404).send(`product with name = ${req.query.filterByName} is not found`);
//         res.send(productId);
  
//     });
//     // creating a women product By MaxId
// router.post('/products/women/bottomwear', (req,res) => {
//     // if(!req.body.name || req.body.name.length<4){
//     //     res.status(400).send("Name is required and should contains 5 characters");
//     // }
//    const schema = {
//        name : Joi.string().min(4).max(20).required()
//    };
//   const result =  Joi.validate(req.body,schema);
//    if(result.error )  return  res.status(400).send(result.error.details[0].message);
//    const newProduct = {
//        id: maxId,
//        name : req.body.name,
//        cost:req.body.cost,
//    }

//    Products.save()
//             .then((result)=>console.log('succssfully created the produtc',result))
//             .catch((reject)=>console.log('not created the product',reject))
//    prodlist.women.bottomWear.push(newProduct);
//    res.send(newProduct);
// });
// // updating women products
// router.put('/products/women/bottomwear/:id', (req,res) => {
  
//     const productId =  prodlist.women.bottomWear.find(p => p.id === parseInt(req.params.id));
//    if(!productId) return res.status(404).send(`product with id = ${req.params.id} is not found`);
 
//    const schema = {
//        name : Joi.string().min(3).required()
//    };
//   const result =  Joi.validate(req.body,schema);
//    if(result.error )return res.status(400).send(result.error.details[0].message);
//    productId.name = req.body.name;
//    res.send(productId);
// });
// //Deleting women products
// router.delete('/products/women/bottomwear/:id', (req,res) => {
//     const productId =  prodlist.women.bottomWear.find(p => p.id === parseInt(req.params.id));
//     if(!productId) return res.status(404).send(`product with id = ${req.params.id} is not found`);
  
//     const indexOfProduct = prodlist.women.bottomWear.indexOf(productId);
//     prodlist.women.bottomWear.splice(indexOfProduct,1);
//     res.status(200).send(`deleted the product`);
//     res.send();
//  });


// module.exports=router;

const express=require('express');
const router=express.Router();

const Joi=require('Joi');

const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:String,
    cost:Number,
    isAvaialable:Boolean,
    
})
const Products= mongoose.model('product',productSchema);

router.get('/prodcut', async (req,res)=>{

    const allProducts=await Products.find() ;
    res.send(allProducts);
})

router.get('/product/:id',async (req,res)=>{
    const product=await Products.findById(req.params.id);
    if(!product) return res.status(404).send(`product with id = ${req.params.id} is not found`);
    res.send(product);
})

router.post('/product',async (req,res)=>{

    

   const schema = {

           name : Joi.string().min(4).max(20).required(),
           cost:Joi.number().required(),
         

        };


        const result =  Joi.validate(req.body,schema);
   if(result.error )  return  res.status(400).send(result.error.details.message);


   let newProduct = new Products({
    name:req.body.name,
    cost:req.body.cost,
   // isAvaialable:req.body.isAvaialable,
}); 
   newProduct= await newProduct.save();
     res.send(newProduct);
});
router.put('/updateproduct/:id',async (req,res)=>{
    const schema = {
               name : Joi.string().min(3).required()
           };
          const result =  Joi.validate(req.body,schema);
    //const error =  Joi.validateProducts(req.body,schema);
    if(result.error) return res.status(400).send(result.error.details[0].message)
     
    const product=await Products.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
    },{new:true})

    if(!product) return res.status(404).send(`product with id = ${req.params.id} is not found`);
    res.send(product);
})

router.delete('/deleteproduct/:id',async(req,res)=>{

    const product=await Products.findByIdAndRemove(req.params.id)
    if(!product) return res.status(404).send(`product with id = ${req.params.id} is not found`);

    res.send(product);
})

module.exports=router;

