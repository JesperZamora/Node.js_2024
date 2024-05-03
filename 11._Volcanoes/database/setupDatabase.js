import db from "./connection.js";


const isDeleteMode = process.argv.includes('delete') //process.argv.find((arg) => arg === 'delete')
console.log(isDeleteMode);

if(isDeleteMode) {
  await db.run(`DROP TABLE IF EXISTs volcanoes`);
  await db.run(`DROP TABLE IF EXISTs villages`);
}

//DDL
await db.exec(`CREATE TABLE IF NOT EXISTS volcanoes(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL,
  is_active BOOLEAN,
  type TEXT CHECK( type IN ('Caldera', 'Underwater', 'Underground', 'Super Volcano'))
)`);

await db.exec(`CREATE TABLE IF NOT EXISTS villages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  volcanoe_id INTEGER,
  FOREIGN KEY (volcanoe_id) REFERENCES volcanoes (id)
)`);



//DML
// Seeding - Po
// Inserting data into volcanoes
if (isDeleteMode) {
  await db.run(`INSERT INTO volcanoes (name, is_active, type)
  VALUES ('Mount Fantastico', true, 'Caldera'),
         ('Ocean Blazer', false, 'Underwater'),
         ('Silent Giant', true, 'Super Volcano')`);

  // Inserting data into villages
  await db.run(`INSERT INTO villages (name, volcanoe_id)
  VALUES ('Lava Springs', 1),
         ('Aqua Village', 2),
         ('Ash Town', 3)`);
}


