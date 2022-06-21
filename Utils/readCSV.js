const csvParser=require("csv-parser");
const fs = require('fs');

const readFile=(path) =>{
    const results=[];
    fs.createReadStream(path)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
    });
}
module.exports = readFile;