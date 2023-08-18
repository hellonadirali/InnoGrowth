require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
require('./DB/conn');


const User = require('./model/userSchema');

const midleware = (req, res, next)=> {
    console.log("midleware");
    next();
};
app.use(express.json());
app.use(require('./router/auth'));




app.listen("8000" , () => {
    console.log(`listnening to port at ${port}`)
})