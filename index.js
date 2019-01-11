const express=require('express');
const app=express();
const Joi=require('Joi');
app.use(express.json());

const authenticate=require('./middlewares/authentication');
const logging=require('./middlewares/logging');

const config=require('config');
const morgan=require('morgan');

const homepath=require('./routes/home');
const productpath=require('./routes/products');

app.use('/api',productpath);
app.use('/api/home',homepath);

app.use(express.json());
app.use(authenticate);
app.use(logging);

//views folder
app.set('view engine', 'pug');
app.set('views','./views');

 app.get('/home',(req,res) =>{
       res.render('index',{appTitle:"Ecommerce BackEnd Project" , message:"Welcome to ECommerce Web Site"});
    })
//to change enivorment set NODE_ENV=production or development or stagging or it takes default.json
console.log("app name: " ,config.get("app.name"));
console.log("mail server host:" ,config.get("mail.host"));




 const port=process.env.bigport||4000;
app.listen(port,()=>console.log(`we are listening to ${port} in the site`));
