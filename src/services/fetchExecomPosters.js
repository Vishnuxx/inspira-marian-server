

module.exports.fetchExecomDetails = async (req , res ) => {
  // Endpoint to get the list of images
  app.get("/images", (req, res) => {
    // Get the list of files in the public folder
    const fs = require("fs");
    const path = require("path");
    const publicFolder = path.join(__dirname, "public");
    const files = fs.readdirSync(publicFolder);

    // Filter only image files
    const imageFiles = files.filter((file) => {
      const fileExtension = path.extname(file).toLowerCase();
      return [".jpg", ".jpeg", ".png", ".gif"].includes(fileExtension);
    });

    // Send the list of image files as a JSON response
    res.json(imageFiles);
  });
}