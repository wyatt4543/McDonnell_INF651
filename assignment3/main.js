// Even Number Finder
let n = 0;
while (n < 50) {
    n++;
    if (n % 2 === 0) {
        console.log(n);
    }
}

// Pin Validator
const pin = 1234;
let pinGuess;

do {
   pinGuess = parseInt(prompt("Enter your PIN (4 digits):"))
} while (pinGuess !== pin);

console.log(`You guessed the pin! it was ${pin}`);

// Multiplication Table with Skips
let multiplier = parseInt(prompt("Enter a number:"));
let product;

for (let i = 1; i <= 10; i++) {
    product = i * multiplier;
    if (product % 5 === 0) continue;
    console.log(`${i} x ${multiplier} = ${product}`);
}

// Positive/Negative Number Checker
let someNumber = parseInt(prompt("Enter a number:"));

if (someNumber > 0) {
    alert("The number is positive.");
} else if (someNumber < 0) {
    alert("The number is negative.")
} else if (someNumber === 0) {
    alert("The number is zero.")
}

// Month Finder
let month = parseInt(prompt("Enter a number representing a month:"));

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid input.");
}
