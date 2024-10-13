// upload.js (middleware)
const multer = require('multer');
const path = require('path');

// Configure storage for multer where we will upload the image in uploads folder and send the path or unique id for that image and store it in our database
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage });

module.exports = upload;
//exporting multer module