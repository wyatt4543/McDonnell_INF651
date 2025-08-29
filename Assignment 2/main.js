// Create three variables
let myName = "John"
let age = 20;
let isStudent = true;

console.log(typeof(myName), myName);
console.log(typeof(age), age);
console.log(typeof(isStudent), isStudent);

// Basic Arithmetic Operations
let a = 12;
let b = 10;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);

// Working with Strings
let mySentence = "It is nice to meet you!"

console.log("string length:", mySentence.length);
console.log("string first character:",mySentence.charAt(0));
console.log("string last character:",mySentence.charAt(mySentence.length - 1));

// Math Object
let negativeNumber = -1000

console.log("square root of a negative number:",Math.sqrt(negativeNumber));
console.log("a negative number squared",Math.pow(negativeNumber, 2));
console.log("absolute value of a negative number:",Math.abs(negativeNumber));

// Boolean Logic and Comparison Operators
let c = 3
let d = 2

console.log("c > d:", c > d);
console.log("c < d:", c < d);
console.log("c = d:", c == d);

// Logical Operators
let bool1 = true;
let bool2 = false;

console.log("bool1 && bool2:", bool1 && bool2);
console.log("bool1 || bool2:", bool1 || bool2);
console.log("!bool1:", !bool1);

// Using Template Literals
let firstName = "John"
let lastName = "Billy"

console.log(`Hello, my name is ${firstName} ${lastName}.`);