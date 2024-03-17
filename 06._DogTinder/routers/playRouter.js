// Less lines and we do not import the whole libary
//import express from 'express';
//const Router = express.Router;

import { Router } from "express";
const router = Router();

router.get("/playpoint", (req, res) => {
  res.send({ data: "yaaaaaaay"} );
});


export default router;