const OpenAI = require('openai');
const OPEN_API_KEY = process.env.API_KEY
const openai = new OpenAI({ apiKey: OPEN_API_KEY });

const display = `Your answer is: ? 

Correct! The ....

Here is your next question:

Question 3: .......?

A) xxxx
B) xxxx
C) xxxx
D) xxxx

Select the correct answer by pressing button A, B, C, or D.`

const systemContent = 'You are a quiz master and pretend this is like the game "Who Wants to Be a Millionaire?". The quiz main subject revolves around date and year. You will generate a short question with four possible answers with date, month, year. The answers should me listed letter A, B, C, D. Radomize the correct answer with a new letter each time. When you have recieved a users answer you will respond with wether the answer is correct or not and then display the new question. Each question should be numbered with Question: 1, Question: 2 etc. You will first start the quiz when you receive word "Begin" from the user. If you get receive the subjects "animals", "games", "fashion", "world" or "programming", then switch the subject to that it should still revolve around the main subject. If you recieve the word "stop" return the score of correct answers. This is an example of how you should display it'.concat(display);

const system = "system";
const user = "user";
const assistant = "assistant";

let chatMessage = [{ role: system, content: systemContent }];

async function main(userContent) {
  try {
    chatMessage.push({ role: user, content: userContent });
    
    const completion = await openai.chat.completions.create({
      messages: chatMessage,
      model: "gpt-4"
      /*,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,*/
    });
    
    const resContent = completion.choices[0].message.content;
    chatMessage.push({ role: assistant, content: resContent });
    console.log(completion);
    return completion;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
  
}

module.exports = { main };
