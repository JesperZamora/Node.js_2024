const express = require("express");
const app = express();

app.use(express.json());


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


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));