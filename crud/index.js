const express=require('express');
const mongoose=require('mongoose');
const url='mongodb://localhost/subhajitchakrabortydb';

const app = express();
app.use(express.json());

mongoose.connect(url,{useNewUrlParser:true});

const con=mongoose.connection;

con.on('open' ,()=>{
   console.log("Connected with Dataase!!");
});







const home=require('./routers/home');
app.use('/home',home);

//app.use('/home/:id',home);     




const contact=require('./routers/contact');
app.use('/contact',contact);




app.listen(8080,()=>{
    console.log("Port Connected!!");
})