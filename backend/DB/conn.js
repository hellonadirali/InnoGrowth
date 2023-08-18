const express = require('express');
const mongoose = require("mongoose");

mongoose.connect(process.env.DB).then(()=>{
    console.log("Database  connected sucessfully");
}).catch((err)=>{
    console.log("Database not connected.", err);
});