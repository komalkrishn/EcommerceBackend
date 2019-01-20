const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/ecommerce")
        .then(()=>console.log("successfully installed"))
        .catch(err=>console.log("an error occured while connecting",err));

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
       name: "Maximale",
       description : "A good medicine for headache",
       price : 10,
       display : true,
       tags : ["Medical", "Pharmacy"],
   });
   const result = await product.save();
   console.log("Created product :",result);
}
createNewProduct();

async function getAllProducts(){
    const products= await Product.find();
    console.log(products);

}
getAllProducts();

async function GetFilteredProducts(){

    const products = await product.find({diaplay:true})
                                   .limit(10)
                                   .sort({name:1})
                        console.log(products);        
}
GetFilteredProducts();
