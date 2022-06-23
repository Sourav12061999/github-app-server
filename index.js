const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const upload = require("./Utils/File.upload");
const readFile = require("./Utils/readCSV");
const Cohort = require("./Schemas/cohort.schema");
const Students = require("./Schemas/student.schema");
const cohortValidation = require("./Utils/cohortValidation");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/api/submit", upload.single("CSVFile"), async (req, res) => {
  try {
    cohortValidation(+req.body.cohort);
    readFile(req.file.path, +req.body.cohort);
    res.status(200).json({
      isError: false,
      msg: "The Uploading Was Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      isError: true,
      msg: error,
    });
  }
}); // This is for Submitting the form and adding the students in the darabase

app.get("/api/Cohorts", async (req, res) => {
  try {
    let data = await Cohort.find({}).lean().exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      isError: true,
      error,
    });
  }
}); // This is for getting all the Cohort names

app.get("/api/students/:cohort", async (req, res) => {
  try {
    let data = await Students.find({ cohort: req.params.cohort }).lean().exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      isError: true,
      error,
    });
  }
}); // Getting all students under a perticular cohort

app.put("/api/students", async (req, res) => {
  try {
    let data = await Students.findByIdAndUpdate(req.body._id, req.body).lean().exec();
    console.log(req.body);
    res.status(200).json({
      isError:false,
      msg:"Data Got Updated",
    })
  } catch (error) {
    res.status(404).json({
      isError:true,
      msg:"Some Error Occoured",
    })
  }
});// This is for updating student data
app.get("/api/test", (req, res) => {
  res.status(200).json({
    isError: false,
    msg: "Aleast fetch is working",
  });
});
const connet = async () => {
  await mongoose.connect(process.env.mongoDB_URI);
};
const start = () => {
  connet();
  app.listen(5001, () => {
    console.log("Server Started");
  });
};
start();
