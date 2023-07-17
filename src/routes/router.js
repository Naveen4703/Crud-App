const express = require("express");
const router = express.Router();
const controller = require("../controllers/student.js");


router.get('/',(req,res)=>{
    res.status(200).json({ Response : "Server Is running...  Use :  {GET} -> /api/students -- for All student data ,  {GET} -> /api/student/{student Id} -- for coresponding student Id data  {POST} -> /api/addStudent with body data {name, age, gender, studentId} {PUT} -> /api/update -- for updating student data using Query - id {DELETE} -> /api/delete -- for deleting student data using Query - id  ",   });
});


// GET requests for all students data
router.get('/students', controller.getStudents);
router.get('/student/:id', controller.getStudentById);

// POST requests for creating student data
router.post('/addStudent', controller.addStudent);

// PUT requests for updating student data
router.put('/update', controller.updateStudent);

// DELETE requests for deleting student data
router.delete('/delete', controller.deleteStudent);

module.exports = router;
