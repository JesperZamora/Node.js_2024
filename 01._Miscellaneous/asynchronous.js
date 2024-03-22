// asynchronous code:
// When do we use asynchronouse code? 
/* 
- Browser event handlers (callback), 
- Network calls (fetch, tcp, udp), 
- Buffers / streams, 
- Working with files / directories (e.g write/read a file), 
- setTimeout / setInterval
- Databases
*/

// JavaScript one thread - the main thread

// Solution 1. Callbacks
// Problem: Callback hell (also called Pyramid of doom)

// Solution 2. Promises (introduced in 2015), syntactic sugar
/* states:
  1. pending
  2. fulfilled
    - resolved 
    - reject
*/

// Solution 3. Async/Await
// syntactic sugar

// resolve and reject are functions that can be called.

new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      //throw new Error("some error")
      resolve("Everything OK");
    } catch(error) {
      //console.log(error);
      reject(error);
    }
  }, 2000);

});
//.then((succesMessage) => console.log(succesMessage))
//.catch((errorMessage) => console.log(errorMessage));

//console.log("I'm walking here...");

/* assignment Create a promisified function
that is, function returns a new promise
it should be called myPromise
and it should either resolve as "Something Good" or reject as "Something bad"
create a 3 second timeout to simulate asynchonous behavior
*/

function myPromise(foo) {
  return new Promise((resolve, reject) => { // Promise takes in a callback func
    setTimeout(() => { // Simulating asynchronous
      if (foo) {
        resolve("Something Good");
      } else {
        reject("Something Bad");
      }
    }, 3000);
  });
}
/*
myPromise(false)
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });
*/

/* assigment
  try to simulate fetch function
  call it myFetch
  it should return the promise json() so that you can call response.json() on it as muc as possible try to imagine how fetch works an simluate the underlying code.
*/

/*
function myFetch(URL, options={}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {
        json: () => {
          return new Promise((resolve, reject) => {
            try {
              resolve({ data: "url data"});
            } catch (error) {
              reject(error);
            }
          }) 
        }
      }
      if(URL) {
        resolve(response)
      } else {
        reject(response);
      }
    }, 3000);
  });
}

myFetch("www.kea.dk")
  .then((response) => {
    response.json()
  })
  .then ((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  });
*/

// await can only be used stand alone with top level modules (filename.mjs)

//IFFE (iffy)
(async function main (foo) {
  try {
    const myPromiseResult = await myPromise(foo);
    console.log("Before");
    console.log(myPromiseResult);
    console.log("After");
  } catch(error) {
    console.log("Error:", error);
  }
  
})(true)

//main();