const Student = require("../models/studentSchema.js");

const getStudents = async(req,res) => {
    try{
        const students = await Student.find();
        if(students.length == 0){
            res.status(400);
            throw new Error("No student data in database !");
        }
        res.status(200).json({Response : students});
    } catch (err) {
        res.status(400);
        res.json({ Response : `${err}`} );
    }
   
}

const getStudentById = async (req,res) => {
    try{
        const id = req.params.id;
        const student = await Student.findOne({ studentId: id });
        if(student == null){
            res.status(400);
            throw new Error("Student not found in database !");
        }
        res.status(201).json({ response : student});
       // console.log(student);
    } catch (err) {
        res.status(400);
        res.json({ Response : `${err}`} );
    }
}

const addStudent = async(req,res) => {
    const { name, age, gender, studentId } = req.body;
    if(!name || !age || !gender || !studentId){
        res.status(400);
        throw new Error("Please add all fields");
    }
try{
    const studentData = await Student.create({
        name,
        age,
        gender,
        studentId
    });
   res.status(201).json({ response : studentData});
} catch (err){
    res.status(400);
    throw new Error("Unable to add student due to :", err);
}
    
}

const updateStudent = async(req,res) => {
    const id = req.query.id;
    if(!id){
        res.status(400);
        throw new Error("Please add a valid student id");
    }
    try {
        const updateStudent = await Student.updateOne({ studentId : id }, req.body);
        if(updateStudent.matchedCount == 0){
            res.status(400);
            throw new Error("student id not found");
        }
        res.status(200).json({Response : "Data updated successfully"});
    } catch (err){
        res.status(400).json({Response : `Unable to update student data due to ${err}`});
    }
}


 const deleteStudent = async(req,res) => {
    const id = req.query.id;
    if(!id){
        res.status(400);
        throw new Error("Please add a valid student id");
    }
    try{
        const deleteStudent = await Student.deleteOne({ studentId : id });
        if(deleteStudent.deletedCount == 0){
            res.status(400);
            throw new Error("student id not found");
        }
        res.status(200).json({Response : "Data deleted successfully"});
    } catch (err) {
        res.status(400).json({Response : `Unable to delete student data due to ${err}`});
    }
 }

 module.exports = { 
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentById
 };