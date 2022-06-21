const csvParser=require("csv-parser");
const fs = require('fs');
const createUser = require("./createUser");
const readFile=(path,cohort) =>{
    const results=[];
    fs.createReadStream(path)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      results.forEach((el) =>{
        createUser(el,cohort);
      })
    });
}
module.exports = readFile;