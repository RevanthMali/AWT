const express = require("express");
const { Student } = require("./db");
const app = express();

app.use(express.json());

// Read (GET) all students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read (GET) a single student by ID
app.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create (POST) a new student
app.post('/students/post', async (req, res) => {
    try {
        const { name, rollno, branch } = req.body;
        const student = new Student({
            name,
            rollno,
            branch
        });
        await student.save();
        res.status(201).json({ msg: "Student created successfully!", student });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update (PUT) a student by ID
app.put('/students/:id', async (req, res) => {
    try {
        const { name, rollno, branch } = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, {
            name,
            rollno,
            branch
        }, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ msg: 'Student updated successfully!', updatedStudent });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete (DELETE) a student by ID
app.delete('/students/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ msg: 'Student deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});

