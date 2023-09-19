import express from "express";

import uploads from "../../services/upload";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", uploads.single("avatar"), (req: any, res) => {
  try {
    res.send("Arquivo enviado com sucesso: " + req.file.filename);
  } catch (error) {
    console.log(error);
  }
});
