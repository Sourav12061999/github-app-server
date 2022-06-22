const csvParser=require("csv-parser");
const fs = require('fs');
const createUser = require("./createUser");
const checkUsername = require("./checkUsername");
const readFile=(path,cohort) =>{
    const results=[];
    fs.createReadStream(path)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      results.forEach(async (el) => {
        let status;
        if(await checkUsername(el.github_username) === true){
          status="Correct Username";
        }else{
          status="Wrong Username";
        }
        createUser(el,cohort,status);// Create user will all data and the user's appropriate status
      })
    });
}
module.exports = readFile;