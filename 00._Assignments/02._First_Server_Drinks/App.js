const express = require('express');
const app = express();

let drinks = [];

for(let i = 1; i <= 5; i++) {
  drinks.push({id: i, name: `name ${i}`, brand: `brand ${i}`});
}
 
// GET  /drinks
app.get("/drinks", (req, res) => {
  res.send(drinks);
});

// GET  /drinks/{id}
app.get("/drinks/:id", (req, res) => {
  const drinkId = +req.params.id;
  if(isNaN(drinkId)) res.send({data: "id is not correct / number!"})

  const drinkFound = drinks.find(drink => drink.id === drinkId);

  if(!drinkFound) res.send({data: "Not found"});
  else res.send(drinkFound);

});

// POST   /drinks

// PUT  /drinks/{id}

// DELETE   /drinks/{id}


app.listen(8080);