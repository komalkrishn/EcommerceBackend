const express=require('express');
const app=express();
const list=require('./database/product');
const Joi=require('Joi');
app.use(express.json());

//getting product list
app.get('/api/products',(req,res)=>{

    res.send(list.productlist);
});

//getting id

 app.get('/api/product/:id',(req,res)=>{

     res.send(req.params.id);
 });

//getting cost and feature by passing dynamic values
app.get('/api/products/:cost/:feature',(req,res)=>{
    //console.log('getting params',req.params);
    res.send(req.params);
});

//finding the id in products ,is there or not if not give response not found
app.get('/api/products/:id',(req,res)=>{

    const productid = list.productlist.find(c => c.id === parseInt(req.params.id));
    if(!productid) res.status(404).send(`we didnt get the id`);
    res.send(productid);

});

//creating another product list by usin post
app.post('/api/products',(req,res)=>{


    const schema={
        // id:Joi.int().required(),
        name:Joi.string().min(3).required()
    };

    const result=Joi.validate(req.body,schema);
    console.log(result);

    if(result.error){

     res.status(400).send(result.error.details[0].message);

     return;
        console.log(result.error);
    }
    const newproduct={
        
    id:req.body.id,
        id:list.productlist.length +1,
        name:req.body.name
    }

    list.productlist.push(newproduct);
    res.send(newproduct);
});

app.put('/api/products/:id',(req,res)=>{

    const productid=list.productlist.find(c => c.id === parseInt(req.params.id));
    if(!productid) res.status(404).send(`we didnt find ${req.params.id} no found`);

    const schema={

        name:Joi.string().min(3).required()
    };
    const result=Joi.validate(req.body,schema)
    console.log(result);
if(result.error){

    res.status(400).send(result.error.details[0].message);
    return;
}

productid.name=req.body.name;
return productid;
});

app.delete("/api/products/:id", (req,res) => {
    //look up the products
  //if not existing return 404
  const productid =  list.productlist.find(p => p.id === parseInt(req.params.id));
  if(!productid) return res.status(404).send(`product with id = ${req.params.id} is not found`);

  const indexOfProduct = list.productlist.indexOf(productid);
  console.log(indexOfProduct)
  list.productlist.splice(indexOfProduct,1);

  res.send(productid);

});




const port=process.env.bigport||4000;
app.listen(port,()=>console.log(`we are listening to ${port} in the site`));
