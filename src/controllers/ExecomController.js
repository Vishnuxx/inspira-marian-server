const { fetchExecomMemberDetails } = require("../services/fetchExecomMemberDetails")



const execomDetails = async (req, res) => {
  const result = await fetchExecomMemberDetails();
  console.log(result);
  res.status(200).json(result);
};   

const execomPosters = async (req , res) => {
  const fs = require("fs");
  const path = require("path");
  
  const publicFolder = path.join(__dirname,".." , ".." ,  "public/posters/execom/2023-24/");
  console.log("path: ", publicFolder);
  const files = fs.readdirSync(publicFolder);

//   // Filter only image files
//   const imageFiles = files.filter((file) => {
//     const fileExtension = path.extname(file).toLowerCase();
//     return [".jpg", ".jpeg", ".png", ".gif"].includes(fileExtension);
//   });

  res.json(files);
}


module.exports = {execomDetails , execomPosters}