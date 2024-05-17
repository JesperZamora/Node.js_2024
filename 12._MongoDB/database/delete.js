import db from "./connection.js";

const deleteIcecreme = await db.types.deleteOne({name: "Twister"});

console.log(deleteIcecreme);