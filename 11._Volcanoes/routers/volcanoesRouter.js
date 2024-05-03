import { Router } from "express";
import db from "../database/connection.js"
const router = Router();

router.get("/api/volcanoes", async (req, res) => {
  const result = await db.all('SELECT * FROM volcanoes;');
  console.log(result);
  res.send({ data: result });
});

router.post("/api/volcanoes", async (req, res) => {
  const result = db.run(`INSERT INTO volcanoes (name, is_active, type)
  VALUES ('Mount Fantastico', false, 'Super Volcano')`);
  return res.send({ lastId: result.lastId});
});

router.post("/api/volcanoes", async (req, res) => {
  const { name, isActive, type } = req.body;

  if(!name) {
    return res.status(400).send({ data: "Missing key in body: name" });
  }
  if(isActive !== undefined || isActive == null) {
    return res.status(400).send({ data: "Missing key in body: isActive" });
  }
  if(!type) {
    return res.status(400).send({ data: "Missing key in body: type" });
  }

  // const result = await db.run(`INSERT INTO volcanoes (name, is_active, type)
  // VALUES ('${name}','${isActive}', '${type}')`);

  const result = await db.run(`INSERT INTO volcanoes (name, is_active, type)
  VALUES (?, ?, ?)`, [name, isActive, type]);

  res.send({ lastId: result.lastId});
});



export default router;