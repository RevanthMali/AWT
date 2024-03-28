const express = require("express");
const { Student } = require("./db");
const app = express();

app.use(express.json());

//  create Routing
app.get('/home', (req,res)=>{
    res.send("Hello User");
}) 


app.post('/signup', async (req, res) => {
    // Implement Student signup logic 
    const Name = req.body.name;
    const rollNo =  req.body.rollno;
    const Branch = req.body.branch;
   await Student.create({
    name : Name,
    rollno : rollNo,
    branch: Branch,
   });
   res.json({msg: "Student Created Successfully!"})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})


