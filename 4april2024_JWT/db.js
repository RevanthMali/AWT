const mongoose = require("mongoose");


mongoose.connect("mongodb://0.0.0.0:27017/admin")
.then(()=>{
    console.log("connected to mongoDB");
})
.catch((e)=>{
    console.log("Error connecting to mongoDB",e);
})
