// This is strict mode - It finds syntax errors
//"use strict";

// This is '__' more global than 'var'
__totalGlobalVariable = "Never EVER!!! do this!!!";

var globalVariable = "Also NEVER ever do this!!!";

// arguments is a reserved keyword and will before runnning code
// const arguments = 123;


// use const whenever possible, else use let

// about const:
// const cannot be undelared or redeclared
// but its value can be changes as long as don't change the assigment



//global scope


// function scope
function someOtherScope() {

}

{
  // block scope
  console.log("What is this?");
}

{
  
  var someValue = true;
  {
    // var is polluting outside its scope - changing the value - lexical scope
    var somevalue = false;
  }
  console.log(someValue)
}

// will print the number 6, 6 times in a row because of var
// solution use let instead
for(var i = 0; i <=5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}