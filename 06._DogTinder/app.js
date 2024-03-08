import express from "express";

const app = express();

app.use(express.static("public"));
//console.log(path.resolve("public/hompage/homepage.html"));
import path from "path";

// remember '.js' when importing with ecma script 'module'. When using common we don't need to specify '.js'
import getMatches from "./util/matches.js";
getMatches();

/* You cannot use __dirname when using module */


//------------- HTML -------------/
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
});

app.get("/matches", (req, res) => {
  res.sendFile(path.resolve("public/pages/matches/matches.html"));
});

app.get("/contacts", (req, res) => {
  res.sendFile(path.resolve("public/pages/contacts/contactPage.html"));
});


//------------- API -------------/

app.get("/api/matches", (req, res) => {
  const matches = getMatches()
  return res.send({ data: matches });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));