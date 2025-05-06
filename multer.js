const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const storage = multer.diskStorage({
    destination: "./uploads/", // Folder to store files
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
  });
  const upload = multer({ storage: storage });
  app.post("/upload", upload.single("file"), (req, res) => {
    res.send(`✅ File uploaded successfully: ${req.file.filename}`);
  });
  app.listen(3000, () => console.log("🚀 Server running on port 3000"));