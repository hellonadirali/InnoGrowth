const jwt = require('jsonwebtoken');
const express = require('express');
require('dotenv').config();

const router = express.Router();
const bcrypt = require('bcryptjs');
require('../DB/conn');
const cookieParser = require('cookie-parser');

const app = express();
 
app.use(cookieParser());

const User = require('../model/userSchema');
const { JsonWebTokenError } = require('jsonwebtoken');

router.get("/", (req, res)=>{
    res.send(`<h1>Server is running...</h1>`);
})
router.post("/register", async(req, res)=>{
    
    const {name , email, phone, work, password, confirmpassword} = req.body;

    if (!name || !email || !phone || !work || !password || !confirmpassword){
        return res.status(422).json({error: "Please filled the field properly!"});
    }

    try{
        const userExist = await User.findOne({email:email});
        if (userExist){
            return res.status(422).json({error: "Email already exist."});
        } else if (password !== confirmpassword){
            return res.status(422).json({err: "Both password should be same"})
        }
        const user =  new User({name, email, phone, work, password, confirmpassword});
         
        await user.save();

        res.status(201).json({message: "User registerd successfuly!"});
    
    }catch(err){
        console.log(err);
    }
});


router.post('/signin', async(req, res)=>{
    try{
        
        const {email, password} = req.body;

        // check if email and password are empty
        if (!email || !password){
            res.status(400).json({error: "Please fill the data"});
        }

        // check if passwords are same and email is registerd
        const userlogin = await User.findOne({ email: email });
        const token = await userlogin.generateAuthToken();
        res.cookie("jwtoken", token , {
            expires : new date(date.now() + 25892000000),
            httpOnly:true
        })
        const spassword = await bcrypt.compare(password, userlogin.password);
        if (userlogin && spassword) {
            res.json({ message: "User signed in successfully!" });
        } else {
            res.json({ error: "Invalid Credentials." });
        }

        

    }catch(err){
        console.log(err)
    }
    
});


module.exports = router;