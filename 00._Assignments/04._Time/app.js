const express = require('express');
const app = express();
const PORT = 8080;

const { main } = require('./OpenAI_API');

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/public/quiz.html");
});

app.get("/quiz/:subject", async (req, res) => {
  try {
    const quizSubject = req.params?.subject;

    const JsonStringQuiz = await main(quizSubject);

    const quizArray = JSON.parse(JsonStringQuiz);
    
    return res.status(200).send({ data: quizArray });

  } catch(error) {
    return res.status(500).send("Internal Server Error");
  }
}); 

app.listen(PORT, (error) => {
  if(error) {
    console.error("Error Starting Server", error);
    return;
  }
  console.log("Server is running on", PORT);
});



/*TODO for the weekend (if there is time for it)
  1. Make post endpoint that takes and object with the keys; time, score. Or use params.
  2. The front end will take the score and time and send it to backend.
  3. Data should be persisted to an array.
  4. Send the array of objects back and display them in 'Score Board'.
  5. Look into how to optimize the speed of quiz question generation. Maybe look into asyncronous queueing or webhooks, see if it can get quiz questions in a continuously stream instead?
  6. Fix the answer buttons, so they are disabled once they are clicked and enabled when the next question is displayed.
*/