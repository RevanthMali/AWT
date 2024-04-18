const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/Student")
.then(()=>{
    console.log("connected to mongoDB");
})
.catch((e)=>{
    console.log("Error connecting to mongoDB",e);
})

// Student schema

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    rollno:{
        type:Number,
        required:true,
    },
    branch:{
        type: String,
        required: true,
    }
}) 

const Student = mongoose.model("Student",StudentSchema);

module.exports = {Student}; 