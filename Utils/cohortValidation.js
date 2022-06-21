const  cohort = require("../Schemas/cohort.schema");
const cohortValidation = async (cohort_num) =>{
  let data=await cohort.find({
    cohort:cohort_num
  }).lean().exec();
  if(data.length>0){
    return ;
  }
  await cohort.create({
    cohort:cohort_num
  });
}

module.exports=cohortValidation;