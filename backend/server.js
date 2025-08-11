const express = require("express");
const multer = require("multer");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/animate", upload.single("model"), (req, res) => {
  const inputPath = path.resolve(req.file.path);
  const outputPath = path.resolve(`animated_${Date.now()}.fbx`);

  const blenderCmd = `blender --background --python backend/animate_robot.py -- ${inputPath} ${outputPath}`;

  exec(blenderCmd, (error, stdout, stderr) => {
    if (error) {
      console.error("Blender error:", stderr);
      return res.status(500).send("Animation failed");
    }
    res.download(outputPath, () => {
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });
  });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
