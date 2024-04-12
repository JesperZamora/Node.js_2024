import { Router } from 'express'
const router = Router();

router.get("/definesecretmessage", (req, res) => {
  const secretMassage = req.query.secretMassage;
  if (secretMassage) {
    req.session.secretMessage = secretMassage;
    res.send({ message: `You have defined the secret message as ${secretMassage}`});
  } else {
    res.send({ message: "You have not defined the query parameter 'secretMessage"});
  }
  
});

router.get("/peaksecretmessage", (req, res) => {
  res.send({ secretMessage: req.session.secretMessage });
});

export default router;