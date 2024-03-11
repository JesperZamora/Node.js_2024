const express = require("express");
const app = express();

app.use(express.json());

//Serves as setting the public folder as accessible for the client if they have css/files
app.use(express.static("public"));

//const helicopterFactoryFile = require("./util/helicopterFactory.js");
//console.log(helicopterFactoryFile.heliccopterFactory());

const { helicopterFactory } = require("./util/helicopterFactory.js");
console.log(helicopterFactory());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage/homepage.html");
});

// assignment: Create a new route called publicsquare that servers publicSquare.html

app.get("/publicsquare", (req, res) => {
  res.sendFile(__dirname + "/public/publicSquare/publicSquare.html")
});

// task take a name from the query string and greet the person if you know them
// task other say "hello stranger"

const knownNames = ["Jesper", "Alice"];

app.get("/greetings/:name", (req, res) => {
  const providedName = req.params.name;
  if(knownNames.includes(providedName)) {
    return res.send({ data: `Hi ${providedName}` });
  }

  return res.send({ data: 'Hello stranger' });
});

app.get("/knownpeople", (req, res) => {
  return res.send({ data: knownNames.length });
});


app.get("/proxy", (req, res) => {
  fetch("https://www.google.com")
  .then((res) => res.text()).then((data) => res.send(data)); 
  /*fetch("https://www.google.com").then(res => res.arrayBuffer()).then(buffer => {
    const decoder = new TextDecoder('iso-8859-1');
    const text = decoder.decode(buffer);
    res.send(text);
  });*/
});

//Server site redirection

app.get("/treasuretrove", (req, res) => {
  res.status(200).send({ data: "You fount it!"});
});

//query: if you want to share links with other seach machines
//path variables is a fixed amount of variables that needs to be followed
//query strings are more dynamical
app.get("/secretpassphrase", (req, res) => {
  // task: get the passphrase from the query string compare it below
  const passPhrase = req.query.phrase;
  if(passPhrase !== "SesameOpenUp") {
    res.status(400).send({ data: "Wrong passphrase"});
  } else {
    res.redirect("/treasuretrove");
  }
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));