const express = require('express');
const app = express();
const PORT = 8080;

const { main } = require('./OpenAI_API');

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/public/quiz.html");
});

app.get("/game/:answer", async (req, res) => {
  const answerInput = req.params.answer;
  try {
    const completion = await main(answerInput);
    const question = completion.choices[0].message.content;
    
    return res.status(200).send({ data: question });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log('Server is running on:', PORT));