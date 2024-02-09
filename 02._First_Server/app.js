//const express = require("express");
//const app = express();

// This is an alternative way to instansiate the code above
const app = require("express")();

// route
        // enpoint
              // callback function
              // request, response
app.get("/", (req, res) => {
  res.send({ data: "Welcome" });
});

//route
app.get("/secondRoute", (req, res) => {
  res.send({ data: [1,2,3,4] });
});

// path variables in express is made  ':'
app.get("/thirdRoute/:someValue/:otherValue", (req, res) => {
  const firstValue = req.params.someValue;
  const otherValue = req.params.otherValue;
  res.send({ data: `This is your first value: ${firstValue} and other value ${otherValue}` });
});

let walletBalance = 100;

app.get("/wallet/withdraw/:withdrawAmount", (req, res) => {
  const withdraw = +req.params.withdrawAmount;
  const newBalance = (walletBalance-withdraw);

  if(!withdraw) res.send({ data: "Not correct amount / number!" })

  if (newBalance < 0) {
    res.send({ data: "Sorry, not enough founds" });
  } else {
    res.send({ balance: newBalance });
    walletBalance -= withdraw;
  }
});

app.get("/wallet/deposit/:despositAmount", (req,res) => {
  const deposit = +req.params.despositAmount;
  const newBalance = walletBalance + deposit;

  if (!deposit) res.send({ data: "Not correct amount / number!" })

  if (deposit < 0) {
    res.send({ data: `Cannot add value: ${deposit}` });
  } else {
    walletBalance += deposit;
    res.send({ balance: newBalance });
  }
});

app.get("/wallet/balance", (req, res) => {
  res.send({ data: walletBalance });
});

app.get("/page",(req,res) => {
  res.send("<h1>Welcome to my page</h1>");
}); 


// http: 80
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);

