const mongoose = require("mongoose");
const cohortSchema=new mongoose.Schema({
    cohort:Number
})

const cohort=mongoose.model("cohorts",cohortSchema);
module.exports=cohort;