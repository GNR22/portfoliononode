const express = require("express"); //Web server & routing.
const multer = require("multer"); // File upload handler.
const path = require("path"); // Safe way to handle folder paths.

const app = express();
const PORT = 3000;

// Files delivered by express specifically whats inside in public folder
app.use(express.static(path.join(__dirname, "public")));

//  MULTER is the one who will upload
// Where to store uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploadsfiles/"); // store inside public/uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});

const upload = multer({ storage: storage });

// HANDLES UPLOADING IMAGES 
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.send("No file uploaded!");
  }
  res.send(`
    <h2>File uploaded successfully 🎉</h2>
    <p>Saved as: ${req.file.filename}</p>
    <img src="/uploadsfiles/${req.file.filename}" style="max-width:300px;" />
    <br><br><a href="/">Go Back</a>
  `);
});

// Message when server is on
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
