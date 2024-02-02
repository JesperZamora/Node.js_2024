// we will always use const as default
const myName = "Anders";

const me = {
}
me.name = myName;
console.log(me);

// const is NOT in te value but in the assignment
// meaning that it cannot be reassgined and thus also HAS to be assigned

//SyntaxError: Missing initializer in const declaration

const hobbies = ["coding", "eating"];

hobbies.push("sleeping");

//hobbies = [];
//hobbies = "";

me.hobbies = hobbies;

console.log(me);