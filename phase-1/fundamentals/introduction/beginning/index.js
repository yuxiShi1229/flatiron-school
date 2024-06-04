/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations
console.log("hi!")
// const = a variable that will no changing value, i.e. not reassigned
const firstName = "Sakib";
// let = a variable that can change value, i.e. can be reassigned
/**
 * 
 * The number 5;
 * 
 */
let number = 5;
console.log(number);
number = 6;
console.log(number);

// ~ Types
// -> undefined, null*, boolean, number, string
// Booleans are true or false
const isItRaining = false;

// ~ Objects
// -> definition, bracket/dot notation, stringify

/** 
 * An object named 'dog' with a string property 'firstName' and a number property 'age'.
 */
const dog = {
    firstName: "Benji",
    age: 4
};

console.log(dog.firstName);
console.log(dog["firstName"]);

dog.age = 5;
console.log(dog.age);


console.log(dog);
console.log(JSON.stringify(dog));

// ~ Arrays
// -> definition, access, modification
/**
 * An array of prices, each a number.
 */

const prices = [ 30, 40, 10, 60 ];

console.log(prices[1]);
prices[2] = 20;
console.log(prices[2]);

console.log(prices);
console.log(JSON.stringify(prices));

// ~ Conditionals
// if, if-else, if-else-if-else, ternary
if (isItRaining === true){
    // If it's raining, console.log() something about it raining.
    console. log("hey, bring an umbrella")
} else {
    // If it's NOT raining, then console.log() something about sunniness!
    console.log("You won't need an umbrella today.");
}

const age = 20;

//if the user is at least 21, say they're of age..,
if(age >= 21) {
    console.log("You're of age.");
} else if (isItRaining === true) {
    // If the user is younger than 21 AND it's raining, then log age and raing.
    console.log("Not of age, and it's raining.");
}


// If the user is over 21 and it is raining, then log 218.
// If the user is over 21 but it is NOT raining, then log 21.
// If the user is less and it is raining, log "YR".
// If the user is less and it's not raining, log "Y".
if(age >=21 && isItRaining) {
    console.log(218)
} 
if(age >=21 && !isItRaining) {
    console.log(21)
} 
if(age < 21 && isItRaining) {
    console.log("YR")
}
if(age < 21 && !isItRaining) {
    console.log("Y")
}

let message = "";
if (age >= 21) message ="21"; // message  should now be 21
else message ="Y";
if (isItRaining) message ="R";

console.log(message);

// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

// greet "Hello", "sakib" ===> "Hello. Sakib!"
// greet "Hi", "Elizabeth" ===> "Hello. Elizabeth!"

/**
 * Takes a greeting and recipant, and returns a greeting.
 * @param {string} greeting The greeting to send.
 * @param {string} recipant The recipant to send to.
 * @returns the greeting.
 */


function greet(greeting, recipant){
    // string interpolation
    console.log(`${greeting}, ${recipant}!`);
    // string concatenation
    // console.log(grreting + "," + recipant + "!")
    return greeting + "," + recipant + "!";
}

const greetingSakib = greet("Hello", "sakib");
console.log(greetingSakib);
greet("Hi", "Elizabeth");


const words = ("jump", "escalate", "people");

function printWord(word){
    console.log(word);
}
// Iterate over the array words
words.forEach((word) => (console.log(word)));

// ~ Scope
// -> global, local, closures, function hoisting
const a = "A"; // global
function localFunction(){
    // const a = "AA";
    console.log(a);
    const b = "B";
    console.log(b);
}
localFunction()
console.log(a);
console.log(b);




// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
const nums = [1, 2, 3, 5, 9]
function sum(numbers){
    let arrsum = 0;
    numbers.forEach((numbers) => (arrsum += numbers));
    console.log(arrsum)
}
sum(nums)

// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
// Already const nums = [1, 2, 3, 5, 9] for challenge 1
const double = (numbers) => {
    numbers.forEach((num,index) => (numbers[index]= 2 * num));
    console.log(numbers)
}
double(nums)

// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.
function lowercase(words) {
    const lowercasedWords = [];
    words.forEach(word => {
      lowercasedWords.push(word.toLowerCase());
    });
    return lowercasedWords;
  }
const wordArray = ["Hello", "there"];
lowercase(wordArray);
