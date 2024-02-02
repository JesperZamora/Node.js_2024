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

// console.log(me);

// Types in JS: number, string, boolean, object, null, undefined, bigint

// Object: object, arrays, date

// type coercion - automatic conversion of one date type to another
// we Always use equality checks: === and !==
// e.g. 2 + "2" = 22
// 2 == "2" = true
// 2 === "2" = false