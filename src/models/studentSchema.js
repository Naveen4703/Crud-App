const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : [true , "Please add name"]
    },
    age : {
        type : String,
        trim : true,
        required : [true , "Please add age"]
    },
    gender : {
        type : String,
        trim : true,
        required : [true , "Please add gender"]
    },
    studentId : {
        type : String,
        trim : true,
        required : [true , "Please add student Id"]
    }
},
    {
        timestamps : true,
    }
)

module.exports = mongoose.model("Student", studentSchema) ;