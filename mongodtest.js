const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/ecommerce")
         .then(()=> console.log("successfully connected to mongodb"))
          .catch((err)=> console.log("an error occured while connecting to mongo db :",err));

const productSchema = new mongoose.Schema({
   name : String,
   description : String,
   price: Number,
   display : Boolean,
   entryDate : {type:Date , default: Date.now},
   tags: [String]
})       
//The first arg is the singular name of your collection
//Second arg is the schema of your collection
//it returns a model ( or Class )
const Product = mongoose.model("Product",productSchema);
async function createNewProduct(){
   const product = new Product({
       name: "Doliprane",
       description : "A good medicine for headache",
       price : 10,
       display : true,
       tags : ["Medical", "Pharmacy"],
   });
   const result = await product.save();
   console.log("Created product :",result);
}
//createNewProduct();
async function getAllProducts(){
    const products = await product.find();
    console.log(products);
}
getAllProducts();
