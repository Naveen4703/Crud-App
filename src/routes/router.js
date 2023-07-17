const express = require("express");
const router = express.Router();
const controller = require("../controllers/student.js");


router.get('/',(req,res)=>{
    res.status(200).json({Response : "Server Is running..."});
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