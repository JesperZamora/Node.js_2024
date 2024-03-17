import { Router } from "express"
import { homepagePage, matchesPage, contactPage } from "../util/readPages.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send(homepagePage);
  //res.status(200).sendFile(path.resolve("public/pages/homepage/homepage.html"));
});

// Contacts
router.get("/contacts", (req, res) => {
  res.status(200).send(contactPage);
  //res.status(200).sendFile(path.resolve("public/pages/contacts/contacts.html"));
});

// Matches
router.get("/matches", (req, res) => {
  res.status(200).send(matchesPage);
  //res.status(200).sendFile(path.resolve("public/pages/matches/matches.html"));
});

export default router;