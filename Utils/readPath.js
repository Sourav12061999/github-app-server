const readFilePath=(str="") =>{
  let newStr=str.split("/uploads");
  return `/uploads${newStr[1]}`;
}
module.exports=readFilePath;