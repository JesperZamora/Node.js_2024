import { Router } from 'express';

const router = Router();

router.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(name);
  console.log(email);
  console.log(message);
  res.send("Form submitted successfully!");
}); 

export default router;