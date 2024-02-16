// loop method
// forEach, map, filter, sort, find, reduce

const dog = [
  { name: "Lassie", famelevel: 13 },
  { name: "Beethoven", famelevel: 8 },
  { name: "Hachiko", famelevel: 18 },
  { name: "Balto", famelevel: 5 },
];

// add a famelevel of +3 for all dogs

const newFamelevel = dog.map(dog => {
  dog.famelevel += 3
  return dog;
});

console.log(newFamelevel);

// task add the key male and value true except for Lassie

const newDogs = newFamelevel.map(dog => {
  dog.isMale = dog.name === 'Lassie' ? false : true;
  return dog;
});

console.log(newDogs);

// Returns Json
const newDogsJson = newFamelevel.map(dog => ({
  isMale: dog.name === 'Lassie' ? false : true,
  name: dog.name,
  famelevel: dog.famelevel
}));


const numbers = [1,2,3,4,5];

const doubleNumbers = numbers.map(number => number*2);

console.log(doubleNumbers);

