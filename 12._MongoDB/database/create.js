import db from "./connection.js";

const createIcecream = await db.types.insertOne({ name: "Twister", price: 10});
console.log(createIcecream);