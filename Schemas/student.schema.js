const mongoose = require("mongoose");
const studentSchema=new mongoose.Schema({
    name:String,
    student_code:String,
    status:String,
    github_username:String,
    cohort:Number,
})

const student=mongoose.model("students",studentSchema);
module.exports=student;