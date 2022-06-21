const express = require("express");
var cors = require('cors')
const upload = require("./Utils/File.upload");
const readFile = require("./Utils/readCSV");
const readFilePath = require("./Utils/readPath");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/api/submit", upload.single("CSVFile"), async (req, res) => {
  try {
    readFile(req.file.path);
    res.status(200).json({
      isError: false,
      msg: "The Uploading Was Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
        isError:true,
        msg:error,
    })
  }
});
app.listen(5001, () => {
  console.log("Server Started");
});
