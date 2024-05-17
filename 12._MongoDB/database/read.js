import db from "./connection.js"

// const allIceCreams = await db.types.find({ price: { $gt: 20 }}).toArray();
// console.log(allIceCreams);

const allIcecreams = await db.types.find().toArray();
console.log(allIcecreams);

// const firstIceCreamBrand = await db.brands.findOne();
// console.log(firstIceCreamBrand);