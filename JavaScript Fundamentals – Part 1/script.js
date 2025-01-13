let js = "amazing";
console.log(40 + 10);
console.log("Jonas");
console.log(23);
let firstName = "Bob";
console.log(firstName);


// Declaring and Using Variables
let firstNameOfExample = "Jhon";
var age = 25;

console.log("Name : ", firstNameOfExample);
console.log("Age : ", age);

// Reassigning Variables

firstNameOfExample = "Jasmin";
age = 30; 
console.log("Updated Name : ", firstNameOfExample);
console.log("Updated Age : ", age);

// Different data types in JavaScript

let stringExample = "Hello JavaScript";
let numberExample = 25;
let booleanExample = true;
let undefinedExample;
let nullExample = null;
let objectExample = {key: "value"};
let arrayExample = [1, 2, 3, 4, 5];

//check the type of each variable

console.log("Type of stringExample : ", typeof stringExample);
console.log("Type of numberExample : ", typeof numberExample);
console.log("Type of booleanExample : ", typeof booleanExample);
console.log("Type of undefinedExample : ", typeof undefinedExample);
console.log("Type of nullExample : ", typeof nullExample);
console.log("Type of objectExample : ", typeof objectExample);
console.log("Type of arrayExample : ", typeof arrayExample);

// Practice with Template Literals

let firstNameOfLiterals  = "Alice";
let lastNameOfLiterals = "Smith";
let fullName = `${firstNameOfLiterals} ${lastNameOfLiterals}`;
let birthYear = 1990;
let currentYear = 2025;
let ageOfLiterals = currentYear - birthYear;

console.log(`My name is ${fullName}. I am ${ageOfLiterals} years old.`);

let userName = "Shohan";
let greetings = `Hello ${userName}! Welcome to the JavaScript World.`;
console.log(greetings);

let num1 = 8;
let num2 = 4;

console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
console.log(`The division of ${num1} and ${num2} is ${num1 / num2}`);