
const userModel = require("../models/user-model")

const getAllstudent = async (req, res) => {
  try{

  const student = await userModel.getAllStudent()
  if(!student) res.json({message: 'Student Not Found'})
    res.json(student)
}
catch(error){
   console.log(error);
   req.json({message: 'Error Get All Student'})

   }
  
}
module.exports = {getAllstudent}
