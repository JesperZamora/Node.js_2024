const express = require('express');
const app = express();

app.use(express.json());

const port = 8080;

let idCount = 0;

const drinks = [
  { "id": uniqueId(), "name": "Green Tea", "brand": "Organic Leaf", "price": 2.99 },
  { "id": uniqueId(), "name": "Espresso", "brand": "Arabica Supreme", "price": 3.49 },
  { "id": uniqueId(), "name": "Mango Smoothie", "brand": "Tropical Blends", "price": 4.25 },
  { "id": uniqueId(), "name": "Iced Coffee", "brand": "Cool Beans", "price": 3.99 },
  { "id": uniqueId(), "name": "Chai Latte", "brand": "Spice Haven", "price": 4.75 }
];


// GET /drinks
app.get("/drinks", (req, res) => {
  if(drinks.length === 0) {
    return res.status(200).send({ data: "drinks list is empty" });
  }
  return res.status(200).send({ data: drinks });
});

// GET /drinks/:id
app.get("/drinks/:id", (req, res) => {
  const drinkId = +req.params?.id;

  if (isNaN(drinkId)) return res.status(400).send({ data: "Id is not a number" });

  const drinkFound = drinks.find((drink) => drinkId === drink.id);

  if (!drinkFound) {
    return res.status(404).send({ data: "Not found" });
  }

  return res.status(200).send({ data: drinkFound });
});


// TODO: 
// check if there is any payload or missing any values.
// check if the brand exist. If true then check the drink name.
// ff the drink name exists, don't add the drink. Respond with "drink already exist".
// else add the drink with a uniqueId.
// else if the brand doesn't exist create the drink immidiately.
// TODO: add function to make and keep track of the unique ids.

// POST /drinks
app.post("/drinks", (req, res) => {
  const requestBody = req.body;

  if(isEmpty(requestBody)) {
    return res.status(400).send({ data: "No payload." });
  } else if (isValueEmpty(requestBody)) {
    return res.status(400).send({ error: "Payload has empty value(s).", data: requestBody });
  }

  const brandExists = drinks.some((drink) => drink.brand === requestBody.brand);

  if(brandExists) {
    const drinkFound = drinks.find((drink) => drink.name === requestBody.name);
    
    if(drinkFound) {
      return res.status(409).send({ data: "Drink already exists in the list." });
    } else {
      const newId = uniqueId();
      const newDrink = { ...requestBody, id: newId };
      drinks.push(newDrink);
      return res.status(201).send({ data : newDrink })
    }
  }

  const newId = uniqueId();
  const newDrink = { ...requestBody, id: newId };
  drinks.push(newDrink);
  return res.status(201).send({ data: newDrink });
});


// TODO: check if there is any payload or missing any values.
// TODO: check if id is a number and if id exists in the array
// PUT /drinks/id:
app.put("/drinks/:id", (req, res) => {
  const requestBody = req.body;
  if(isEmpty(requestBody)) {
    return res.status(400).send({ data: "No payload." });

  } else if (isValueEmpty(requestBody)) {
    return res.status(400).send({ error: "Payload has empty value(s).", data: requestBody });
  }

  const drinkId = +req.params?.id;
  if(isNaN(drinkId)) return res.status(400).send({ data: "Id not a number." });

  const drinkFound = drinks.find((drink) => drink.id === drinkId);

  if(!drinkFound) {
    return res.status(404).send({ data: `Resource by id: ${drinkId} not found.` });

  }

  const updatedDrink = {
    ...drinkFound,
    name: requestBody.name,
    brand: requestBody.brand,
    price: requestBody.price
  };

  const drinkIndex = drinks.findIndex((drink) => drink.id === drinkId);
  drinks[drinkIndex] = updatedDrink;

  return res.status(200).send({ data: updatedDrink });
});


// DELETE /drinks/id:
app.delete("/drinks/:id", (req, res) => {
  const drinkId = +req.params?.id;
  if(isNaN(drinkId)) return res.status(400).send({ data: "Id not a number." });

  const drinkIndex = drinks.findIndex((drink) => drink.id === drinkId);

  if(drinkIndex === -1) {
    return res.status(409).send({ data: "Not found" });
  }

  const deletedDrink = drinks.splice(drinkIndex, 1);
  return res.status(200).send({ message: "Drink was deleted", data: deletedDrink });
});


// Checking for empty values.
function isValueEmpty(obj) {
  const hasEmptyValues = Object.values(obj).some((value) => value === "");
  return hasEmptyValues;
}

// Checking the object length.
function isEmpty(obj) {
  const objLength = Object.keys(obj).length;
  const result =  objLength < 3 || objLength > 3;
  return result;
}


// Creates a new id and adds it to idCount, to keep track.
function uniqueId() {
  const generatedId = idCount + 1;
  idCount += 1;
  return generatedId;
}

app.listen(port, (error) => {
  if(error) {
    console.log("Error starting the server");
    return;
  }
  console.log("Server is running on port:", port);
});