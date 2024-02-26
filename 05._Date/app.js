const express = require('express');
const app = express();
const PORT = 8080;

// UTC
// "Z" = "Zulu" 2024-02-23T08:22:51.979Z
//console.log(new Date());

// Unix Epoch Time
// 1708676660412 = Seconds since 1970 Jan. 1st
//console.log(Date.now());

// Local Time (in my case right now and here CEST GMT+0100)
// Fri Feb 23 2024 09:26:06 GMT+0100 (Centraleuropæisk normaltid)
//console.log(Date()); 

// assignment     create a route with endpoint /month
// assignment     that returns current month

const months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"]

app.get("/date", (req, res) => {
  const currentDate = new Date().getDay();
  
  res.send({ date: currentDate });
});

app.get("/month/version1", (req, res) => {
  const monthIndex = new Date().getMonth();
  res.send({ data: months[monthIndex] });
});

app.get("/month/version2", (req, res) => {
  const monthName = new Date().toLocaleString("en-us", {month: "long"});
  res.send({ data: monthName });
});


app.get("/month/version3", (req, res) => {
  const monthName = Date().split(" ")[1];
  res.send({ date: monthName });
});

const daysArray = ["Monday", "Tuesdy", "Wedensday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(daysArray);

app.get("/day/version1", (req, res) => {
  const dayIndex = new Date().getDay();
  res.send({ data: daysArray[dayIndex] });
});

app.get("/day/version2", (req, res) => {
  const dayName = daysArray[new Date().getDay()-1];
  res.send({ data: dayName });
});

app.get("/day/version3", (req, res) => {
  const dayName = new Date().getDay();
  res.send({ data: dayName });
});






app.listen(PORT, () => console.log("Server is running on port", PORT));