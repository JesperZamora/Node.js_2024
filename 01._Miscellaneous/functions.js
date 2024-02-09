// hoisting
//getRandomInt();


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntAnonymousFunction = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunctionOneLiner = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);


// callback is any reference to executable code that is passed as an argument
function genericActionPerformer(name, genericAction) {
  return genericAction(name);
}

function callback(call) {
  console.log(call);
}

genericActionPerformer("Jesper", callback);

// callback
const running = (name) => `${name} is running`;

const action = genericActionPerformer("Alex", running);

console.log(action);


// Assignment
console.log(genericActionPerformer("Louis", (name) => `${name} is eating`));

// the eatig function is the same as - (name) => `${name} is eating`)
function eating(name) {
  return `${name} is eating`;
}