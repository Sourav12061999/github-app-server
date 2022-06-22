const csvParser=require("csv-parser");
const fs = require('fs');
const createUser = require("./createUser");
const checkUsername = require("./checkUsername");
const addToTeam=require("./addToTeam");
const readFile=(path,cohort) =>{
    const results=[];
    fs.createReadStream(path)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      results.forEach(async (el) => {
        let status;
        if(await checkUsername(el.github_username) === true){
          if(await addToTeam(el.github_username,cohort)){
            status="Pending";
          }else{
            status="Error while Adding"
          }
        }else{
          status="Wrong Username";
        }
        createUser(el,cohort,status);
      })
    });
}
module.exports = readFile;