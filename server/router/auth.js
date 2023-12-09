const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('../db/conn');

const User = require("../model/userSchema");


router.get('/',(req,res)=> {

    res.send(`Hello world from the server router js`);


});


//USING PROMISES METHOD!

// router.post('/register',(req,res)=>{

//     const {name, email, phone , password , cpassword } = req.body;

//     if( !name || !email || !phone  || !password || !cpassword){
//         return res.status(422).json({ error:"pls fill all the field properly"});
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({ error:"Email already exist"});

//         }

//         const user  = new User({name, email, phone , password , cpassword})


//         user.save().then(()=>{
//             res.status(201).json({message:"user registered succesfully"});
//         }).catch((err)=> res.status(500).json({error:"failed to resister"}));
//     }).catch(err => { console.log(err);});

  
// });


 router.post('/register', async(req,res)=>{

     const {name, email, phone , password , cpassword } = req.body;

     if( !name || !email || !phone  || !password || !cpassword){
         return res.status(422).json({ error:"pls fill all the field properly"});
     }


     try{

       const userExist = await User.findOne({email:email});
       if(userExist){
        return res.status(422).json({ error:"Email already exist"});

    } else if(password !=  cpassword){
        return res.status(422).json({ error:"password are not matching."});

    }else{
        const user  = new User({name, email, phone , password , cpassword});
        await user.save();
        res.status(201).json({message:"user registered succesfully"});


    }
    

    // Yaha Pe..


    // const  userRegister = await user.save();

    
    // if (userRegister) {
    //     res.status(201).json({message:"user registered succesfully"});

    // }else{
    //     res.status(500).json({error:"Failed to register."})
    // }


        // .then((userExist)=>{
        //     if(userExist){
        //         return res.status(422).json({ error:"Email already exist"});
   
        //     }
   
            // const user  = new User({name, email, phone , password , cpassword})
   
   
        //     user.save().then(()=>{
        //         res.status(201).json({message:"user registered succesfully"});
        //     }).catch((err)=> res.status(500).json({error:"failed to resister"}));
        // }) 

     }catch(err){

        console.log(err);



     }
     

  
 });


 //login route

 router.post('/signin', async(req,res)=>{

    // console.log(req.body);
    // res.json({message:'awesome'});
    try{

        let token;
        const {email, password} = req.body;
        
        if(!email || !password){

            return res.status(400).json({error:"invalid data"})
        }

        const userLogin =  await User.findOne({email: email });

        // console.log(userLogin);

        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

// the below function returns a promise.
             token = await  userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })
        if(!isMatch) {
            res.status(400).json({error:"user sign in sucess"});

        }else{
            res.json({message:"user SignIn successfully"});

        }
            
        }else{
            res.status(400).json({error:"Invalid Credentials"});

        }

        // const isMatch = await bcrypt.compare(password, userLogin.password);
        // if(!isMatch) {
        //     res.status(400).json({error:"Invalid Credentials"});

        // }else{
        //     res.json({message:"user SignIn successfully"});

        // }
        

       

    }catch (err){

        console.log(err);


    }


 })

module.exports = router;