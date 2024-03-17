import express from "express";

const app = express();

// client har kun afdagn til public mappen
app.use(express.static("public"));

//console.log(path.resolve("public/hompage/homepage.html"));
//import path from "path";

// remember '.js' when importing with ecma script 'module'. When using common we don't need to specify '.js'
//import getMatches from "./util/matches.js";

import playRouter from "./routers/playRouter.js"

app.use(playRouter);
// task: Creates a matchesRouter and put the  /matches route inside of it and combine it with the server

import matchesRouter from "./routers/matchesRouter.js"
app.use(matchesRouter);

import pagesRouter from "./routers/pagesRouter.js"
app.use(pagesRouter);

//import { homepagePage, matchesPage, contactPage } from "./util/readPages.js";

import fs from "fs";

// fs.readFileSync(): Synchronously reads the contents of a file. Blocks the main tread. It will render the pages on the server side before sending it to client side

/*
const header = fs.readFileSync("./public/components/header/header.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const homepage = fs.readFileSync("./public/pages/homepage/homepage.html").toString();
const contact = fs.readFileSync("./public/pages/contact/contact.html").toString();
const matches = fs.readFileSync("./public/pages/matches/matches.html").toString();

const homepagePage = header + homepage + footer;
const contactPage = header + contact + footer;
const matchesPage = header + matches + footer;
*/


/* You cannot use __dirname when using module */

//------------- HTML -------------/

/*
// Homepage
app.get("/", (req, res) => {
  res.status(200).send(homepagePage);
  //res.status(200).sendFile(path.resolve("public/pages/homepage/homepage.html"));
});

// Contacts
app.get("/contacts", (req, res) => {
  res.status(200).send(contactPage);
  //res.status(200).sendFile(path.resolve("public/pages/contacts/contacts.html"));
});

// Matches
app.get("/matches", (req, res) => {
  res.status(200).send(matchesPage);
  //res.status(200).sendFile(path.resolve("public/pages/matches/matches.html"));
});*/

//Server site rendering
// - Client site doesnt need to render and it saves resources
// - Server site rendering is fater rendering of website
// - Some clients as turned of JavaScript
// - Server site rendering solves all CORS problems.
// - Solves SEO problems

//------------- API -------------/
/*
app.get("/api/matches", async (req, res) => {
  const matches = await getMatches();
  res.send({ data: matches });
});
*/
const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));