import db from "./connection.js";

const update = await db.types.updateOne({name: "Twister"}, {$set: {price: 30}});

console.log(update);