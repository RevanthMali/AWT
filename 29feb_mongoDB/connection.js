const { mongoose } = require("mongoose");

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://0.0.0.0:27017/testDB`);
      console.log('MongoDB Connected!');
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
connectDB();
const stdSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        
    },
    branch: {
        type: String,
        require: true,
    }
}); 

const Student = mongoose.model('student',stdSchema); 
const student = new Student({name: "student1",branch:"IT"}); 
(async () => {
    try {
        await student.save().then(()=>{
            console.log("User added successfully!");
        });
    } catch (err) {
        console.log(err)
    }
});


 