const express = require("express");

const app = express();

// converts (parses http body) to json
app.use(express.json());

let drinks = [];

for(let i = 1; i <= 5; i++) {
  drinks.push({id: i, name: `name ${i}`, brand: `brand ${i}`});
}

app.get("/drinks", (req, res) => {
  res.status(200).send({data: drinks});
});

app.get("/drinks/:id", (req, res) => {
  const providedDrinkId = +req.params.id

  if(isNaN(providedDrinkId)) res.status(404).send({data: "The value is note a number"})
  
  const drinkFound = drinks.find(() => drinks.id === providedDrinkId);
  
  if(!drinkFound) res.status(404).send({data: "Not found"})
  else res.status(200).send({data: foundDrink})

});


"/saySomthingNiceAboutMe/hello?handsome=very&tall=indeed&cool=always"
app.get("/saySomethingNiceAbutMe/:greeting", (req, res) => {
  console.log(req.params.greeting);
  console.log(req.query);
  // task: if the client defines handsome as very then return "thanks cool cat"
  // task: otherwise say "ain't no thang"
  const queryObject = req.query;
  if(queryObject.handsome === "very") {
    return res.send({data: "thanks cool cat"});
  }
  return res.send({data: "ain't no thang"});
});

app.post("/postman", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.post("/drinks", (req, res) => {
  const newDrink = req.body;
  newDrink.id = currentId++;
  drinks.push(newDrink);
  res.send({data: newDrink});
});



app.listen(8080, (error) => {
  if (error) {
    console.log("Error starting the server");
    return;
  }
  console.log("Server is running on port ", 8080);
});