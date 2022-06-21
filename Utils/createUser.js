const user=require("../Schemas/student.schema");
const createUser = async (userData,cohort) =>{
  await user.create({
    name:userData.name,
    student_code:userData.student_code,
    status:"active",
    github_username:userData.github_username,
    cohort,
  });
}
module.exports=createUser;