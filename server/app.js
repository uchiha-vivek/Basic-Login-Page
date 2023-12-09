 const dotenv = require('dotenv');
const mongoose = require('mongoose');



const express = require('express');

const app =express();

dotenv.config({path:'./config.env'});
require('./db/conn');

//const User = require('./model/userSchema');


app.use(express.json());

// we link the router files to make our router easy.
app.use(require('./router/auth'));




 
const PORT = process.env.PORT;


//middleware


const  middleware = (req,res,next)=> {
    console.log(`hello my middleware`);
    next()
;    
}
 


// app.get('/',(req,res)=> {

//     res.send(`Hello world from the server app.js`);


// });
app.get('/about',middleware, (req,res)=> {

    res.send(`Hello world from about page`);


});
app.get('/signin',(req,res)=> {

    res.send(`Thanks for sign in.`);


});

app.get('/contact', (req,res) =>{

    res.cookie("Test" , 'thapa');
    res.send(`hello Contact from the server`)
})
app.get('/signup',(req,res)=> {

    res.send(`thanks for sign up!`);


});


app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);


})